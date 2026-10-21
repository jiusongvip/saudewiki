#!/usr/bin/env node
/**
 * One command for the loop between writing and delivering.
 *
 * Before this, checking a batch of articles meant running three gates by hand,
 * then writing throwaway `node -e` scripts to count words and to compare the
 * Portuguese record with its zh-Hant twin. Each of those was a round trip, and
 * the answers arrived one article at a time.
 *
 * `verify.mjs` runs the three gates in parallel, filters their output to the
 * articles you are working on, and adds the checks no gate owns: the wiring
 * between an article and its disease, topic, category, image and CTA. One
 * command, one table, one exit code.
 *
 *   npm run verify                        every article
 *   npm run verify -- --prefix dengue     articles whose slug starts with dengue
 *   npm run verify -- --slug a,b          exactly these slugs
 *   npm run verify -- --budget 6          show a per-section word budget
 *   npm run verify -- --routes            also check dist/ has the page (after a build)
 *
 * Exit code is 1 when a gate fails or a wiring rule breaks, so it can be the
 * last step of any script. Word-count and section-shape rows are reported but
 * never fail here: the editorial gate owns the baseline diff, and printing the
 * number is the point of the table.
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';
import {
  ARTICLE_WORDS,
  SECTION_PARAGRAPHS,
  RESERVED_SECTION_IDS,
  articleWords,
  isKebab,
  wordBudget,
} from './lib/article-rules.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? undefined : argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true;
};
const prefix = typeof flag('prefix') === 'string' ? flag('prefix') : undefined;
const slugs = typeof flag('slug') === 'string' ? flag('slug').split(',').map((s) => s.trim()) : undefined;
const budget = Number(flag('budget')) || 0;
const checkRoutes = Boolean(flag('routes'));

// ——— the three gates, in parallel ———

const GATES = [
  { name: 'editorial', file: 'scripts/check-editorial.mjs' },
  { name: 'i18n', file: 'scripts/check-i18n.mjs' },
  { name: 'references', file: 'scripts/references.mjs', args: ['check'] },
];

const runGate = (gate) =>
  new Promise((resolve) => {
    const child = spawn(process.execPath, [gate.file, ...(gate.args ?? [])], { cwd: root });
    let out = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (out += d));
    child.on('close', (code) => resolve({ ...gate, code, out: out.trimEnd() }));
  });

const gates = await Promise.all(GATES.map(runGate));

// ——— content, bundled once ———

const entry = `
export { articles } from './src/data/articles';
export { diseases } from './src/data/diseases';
export { topics } from './src/data/topics';
export { staticPages } from './src/data/pages';
export { regions } from './src/data/regions';
export { zhArticles } from './src/data/zh-Hant/articles';
export { zhCategories } from './src/data/zh-Hant/categories';
export { zhImageAlts } from './src/data/zh-Hant/image-alts';
export { articleImages } from './src/lib/images';
`;
const bundle = await esbuild.build({
  stdin: { contents: entry, resolveDir: root, loader: 'ts', sourcefile: 'verify-entry.ts' },
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
});
const mod = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);

const inScope = (slug) =>
  slugs ? slugs.includes(slug) : prefix ? slug.startsWith(prefix) : true;
const narrowed = Boolean(slugs || prefix);
const scope = mod.articles.filter((a) => inScope(a.slug));
const scopeLabel = slugs ? slugs.join(',') : prefix ? `${prefix}*` : 'all articles';

// ——— routes a CTA may point at ———

const routes = new Set([
  '/',
  '/artigos/',
  '/doencas/',
  '/por-regiao/',
  ...mod.articles.map((a) => `/artigos/${a.slug}/`),
  ...mod.diseases.map((d) => `/doencas/${d.slug}/`),
  ...mod.topics.map((t) => `/temas/${t.slug}/`),
  ...mod.regions.map((r) => `/por-regiao/${r.slug}/`),
  ...mod.staticPages.map((p) => `/${p.slug}/`),
]);

// ——— wiring: the links that fail silently ———

const problems = [];
const notes = [];
const diseaseBySlug = new Map(mod.diseases.map((d) => [d.slug, d]));
const topicBySlug = new Map(mod.topics.map((t) => [t.slug, t]));
const articleSlugs = new Set(mod.articles.map((a) => a.slug));

for (const article of scope) {
  const at = article.slug;
  const fail = (detail) => problems.push(`${at}: ${detail}`);
  // Shape and link notes are for the articles being written. Printing 160 of
  // them for the whole site buries the six that matter.
  const note = (detail) => narrowed && notes.push(`${at}: ${detail}`);

  if (!isKebab(article.slug)) fail(`slug is not ASCII kebab (${article.slug})`);

  // disease ↔ article, both directions
  for (const slug of article.diseaseSlugs ?? []) {
    const disease = diseaseBySlug.get(slug);
    if (!disease) {
      fail(`diseaseSlugs points at a disease that does not exist (${slug})`);
      continue;
    }
    if (!disease.relatedArticleSlugs?.includes(at))
      note(`not listed in ${slug}.relatedArticleSlugs, so the disease page will not link here`);
    for (const topic of article.topicSlugs ?? [])
      if (!disease.relatedTopicSlugs?.includes(topic))
        fail(`topicSlugs ${topic} is not among ${slug}.relatedTopicSlugs`);
  }
  // A general article may legitimately hang off no disease; a derived one may not.
  if (!article.diseaseSlugs?.length) note('no diseaseSlugs, so no disease page links here');

  // topic ↔ article, both directions
  for (const slug of article.topicSlugs ?? []) {
    const topic = topicBySlug.get(slug);
    if (!topic) fail(`topicSlugs points at a topic that does not exist (${slug})`);
    else if (!topic.articleSlugs?.includes(at)) note(`missing from ${slug}.articleSlugs`);
  }

  // related articles must exist, or the link is dropped without a warning
  for (const slug of article.relatedArticleSlugs ?? [])
    if (!articleSlugs.has(slug)) fail(`relatedArticleSlugs points at a missing article (${slug})`);
  if (article.relatedArticleSlugs?.includes(at)) fail('relatedArticleSlugs includes itself');

  // category needs a zh label, otherwise the Chinese page shows Portuguese
  if (!mod.zhCategories[article.categorySlug])
    fail(`no zh label for category ${article.categorySlug}`);

  // every in-body CTA must land on a page that is built
  for (const section of article.body ?? []) {
    if (section.cta && !routes.has(section.cta.href))
      fail(`#${section.id} CTA points at a route that is not built (${section.cta.href})`);
    if (RESERVED_SECTION_IDS.includes(section.id))
      fail(`#${section.id} reuses a section id the views own`);
    const paragraphs = section.paragraphs?.length ?? 0;
    if (paragraphs < SECTION_PARAGRAPHS.min || paragraphs > SECTION_PARAGRAPHS.max)
      note(`#${section.id} has ${paragraphs} paragraph(s), checklist asks ${SECTION_PARAGRAPHS.min}-${SECTION_PARAGRAPHS.max}`);
  }

  // one photo per article, with alt text in both languages. A draft is kept
  // unfinished on purpose, so it is checked only once it leaves that status.
  if (article.reviewStatus === 'draft') {
    note('draft: image wiring not required yet');
  } else {
    const image = mod.articleImages[at];
    if (!image) fail('no entry in articleImages');
    else {
      if (!existsSync(`${root}public${image.src}`)) fail(`image file missing (${image.src})`);
      if (!mod.zhImageAlts[at]) fail('no zh alt text for the image');
    }
  }

  if (checkRoutes) {
    for (const path of [`/artigos/${at}/`, `/zh-Hant/artigos/${at}/`])
      if (!existsSync(`${root}dist${path}index.html`)) fail(`route not in dist (${path})`);
  }
}

// ——— report ———

const pad = (s, n) => String(s).padEnd(n);
const lpad = (s, n) => String(s).padStart(n);

console.log(`verify  ${scope.length} article(s) in scope: ${scopeLabel}\n`);

console.log('gates');
for (const gate of gates) {
  const lines = gate.out.split('\n').filter(Boolean);
  const scoped = slugs || prefix ? lines.filter((l) => inScope((l.match(/:([a-z0-9-]+)\b/) ?? [])[1] ?? '')) : [];
  const status = gate.code === 0 ? 'ok  ' : 'FAIL';
  const headline = gate.code === 0 ? lines[lines.length - 1] ?? '' : lines[0] ?? '';
  console.log(`  ${pad(gate.name, 11)} ${status} ${headline}`);
  if (gate.code !== 0) {
    for (const line of (scoped.length ? scoped : lines.slice(1)).slice(0, 12)) console.log(`    ${line.trim()}`);
    if ((scoped.length ? scoped : lines).length > 12) console.log('    ... run the gate directly for the rest');
  }
}

if (scope.length) {
  console.log('\narticles');
  console.log(
    `  ${pad('slug', 46)} ${lpad('words', 6)} ${pad('band', 11)} ${lpad('sect', 4)}  paragraphs`
  );
  for (const article of scope) {
    const words = articleWords(article);
    const out = words < ARTICLE_WORDS.min || words > ARTICLE_WORDS.max;
    const band = out
      ? `${words < ARTICLE_WORDS.min ? '+' : '-'}${Math.abs(words < ARTICLE_WORDS.min ? ARTICLE_WORDS.min - words : words - ARTICLE_WORDS.max)} to fix`
      : 'in band';
    const shape = (article.body ?? []).map((s) => s.paragraphs?.length ?? 0).join('/');
    console.log(`  ${pad(article.slug, 46)} ${lpad(words, 6)} ${pad(band, 11)} ${lpad((article.body ?? []).length, 4)}  ${shape}`);
  }
  const total = scope.reduce((n, a) => n + articleWords(a), 0);
  console.log(`  ${pad('', 46)} ${lpad(total, 6)}  total`);

  if (budget) {
    const plan = wordBudget(budget);
    console.log(
      `\nbudget for ${budget} sections: ${plan.join(' / ')} words ` +
        `(${plan.reduce((a, b) => a + b, 0)} total, band ${ARTICLE_WORDS.min}-${ARTICLE_WORDS.max})`
    );
    const perParagraph = plan.map((w) => Math.round(w / 3));
    console.log(`  at 3 paragraphs per section: ${perParagraph.join(' / ')} words per paragraph`);
  }
}

if (notes.length) {
  console.log('\nnotes');
  for (const note of notes.slice(0, 20)) console.log(`  ${note}`);
  if (notes.length > 20) console.log(`  ... ${notes.length - 20} more`);
}

if (problems.length) {
  console.log('\nwiring');
  for (const problem of problems) console.log(`  ${problem}`);
}

const failed = gates.some((g) => g.code !== 0) || problems.length > 0;
console.log(
  `\n${failed ? 'FAIL' : 'ok'} — ${gates.filter((g) => g.code !== 0).length} gate(s) failing, ` +
    `${problems.length} wiring problem(s), ${notes.length} note(s)`
);
process.exitCode = failed ? 1 : 0;
