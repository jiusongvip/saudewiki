// Translation coverage gate. Run with: node scripts/check-i18n.mjs
//
// The zh-Hant layer only overrides visible text, matched by slug, then by
// section id and reference url. That contract is what keeps the two languages
// from drifting, and it breaks silently: a renamed section id makes the
// translated heading vanish, a missing slug makes the page fall back to
// Portuguese with nothing on screen to say so.
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const root = fileURLToPath(new URL('..', import.meta.url));

const entry = `
export { diseases } from './src/data/diseases';
export { articles } from './src/data/articles';
export { topics } from './src/data/topics';
export { regions } from './src/data/regions';
export { staticPages } from './src/data/pages';
export { zhDiseases } from './src/data/zh-Hant/diseases';
export { zhArticles } from './src/data/zh-Hant/articles';
export { zhTopics } from './src/data/zh-Hant/topics';
export { zhRegions } from './src/data/zh-Hant/regions';
export { zhStaticPages } from './src/data/zh-Hant/pages';
export { zhCategories } from './src/data/zh-Hant/categories';
export { zhImageAlts } from './src/data/zh-Hant/image-alts';
export { listGuides, categoryGuides } from './src/data/guides';
export { zhListGuides, zhCategoryGuides } from './src/data/zh-Hant/guides';
export { diseaseImages, articleImages, topicImages } from './src/lib/images';
export { ui } from './src/i18n/ui';
`;

const bundle = await esbuild.build({
  stdin: { contents: entry, resolveDir: root, loader: 'ts', sourcefile: 'check-entry.ts' },
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);

const problems = [];
const report = (kind, where, detail) => problems.push(`${kind.padEnd(7)} ${where}: ${detail}`);

function checkSections(kind, slug, source, translated) {
  const sourceIds = source.map((s) => s.id);
  const translatedIds = (translated || []).map((s) => s.id);
  const missing = sourceIds.filter((id) => !translatedIds.includes(id));
  const extra = translatedIds.filter((id) => !sourceIds.includes(id));
  if (missing.length) report(kind, slug, `sections without a translation: ${missing.join(', ')}`);
  if (extra.length) report(kind, slug, `unknown section ids: ${extra.join(', ')}`);
  for (const section of source) {
    const match = (translated || []).find((s) => s.id === section.id);
    if (!match) continue;
    for (const key of ['paragraphs', 'bullets']) {
      const a = section[key]?.length ?? 0;
      const b = match[key]?.length ?? 0;
      if (a !== b) report(kind, slug, `#${section.id} ${key}: source has ${a}, translation has ${b}`);
    }
    if (section.cta && !match.ctaLabel) report(kind, slug, `#${section.id} has a CTA but no ctaLabel`);
    if (!section.cta && match.ctaLabel) report(kind, slug, `#${section.id} has ctaLabel but no source CTA`);
  }
}

function checkReferences(slug, source, translated) {
  if (!translated) return;
  const urls = source.map((r) => r.url);
  const tUrls = translated.map((r) => r.url);
  const missing = urls.filter((u) => !tUrls.includes(u));
  const extra = tUrls.filter((u) => !urls.includes(u));
  if (missing.length) report('refs', slug, `${missing.length} reference(s) left untranslated: ${missing.join(', ')}`);
  if (extra.length) report('refs', slug, `reference url not in the source: ${extra.join(', ')}`);
}

// ——— Portuguese left inside a Chinese page ———
//
// A twin can exist and be wired correctly while the text it overrides is still
// Portuguese: a reference label, a publisher, a heading. Every structural check
// above passes, because they match slugs, section ids and reference urls, never
// the words themselves. So nothing on screen tells the reader the page is half
// translated, and nothing here did either. This is the one gap matching by key
// cannot see, so it is checked by looking at the text.

const CJK = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;

// Diacritics Portuguese uses and English / plain loanwords do not.
const PT_ACCENT = /[ãõçáéíóúâêôàÃÕÇÁÉÍÓÚÂÊÔÀ]/;

// Function words. A Latin string carrying two of these, or one plus an accent,
// is Portuguese prose; a single unaccented hit is not enough to call it, which
// keeps "A guide to care" and "SAMU 192" from being flagged.
const PT_WORDS = new Set([
  'a', 'o', 'as', 'os', 'um', 'uma', 'uns', 'umas', 'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na',
  'nos', 'nas', 'por', 'para', 'com', 'sem', 'que', 'nao', 'se', 'ao', 'aos', 'e', 'ou', 'como',
  'mais', 'menos', 'seu', 'sua', 'seus', 'suas', 'pelo', 'pela', 'ate', 'entre', 'sobre', 'contra',
  'apos', 'desde', 'quando', 'onde', 'qual', 'quais', 'tambem', 'isso', 'esta', 'este', 'essa',
  'esse', 'sao', 'foi', 'tem', 'pode', 'podem', 'deve', 'devem',
]);

// Brazilian bodies, programmes and abbreviations that legitimately stay in
// Portuguese inside an otherwise Chinese string.
const KEEP_PT =
  /\b(Anvisa|Butantan|Instituto Butantan|SUS|Farm[áa]cia Popular|SAMU 192|SAMU|CPF|UBS|UPA|CER|CONITEC|MAPA|Disque Sa[úu]de|Guillain-Barr[ée]|Amaz[ôo]nia Legal|Febre reum[áa]tica|Amidalite|amigdalite|Projeto Diretrizes|MSD|ICHD-3)\b/gi;

const looksPortuguese = (text) => {
  const bare = String(text ?? '')
    .replace(KEEP_PT, ' ')
    .replace(/https?:\/\/\S+/g, ' ');
  // A string that already carries Chinese is Chinese; embedded loanwords are the
  // annotated norm, not a gap.
  if (CJK.test(bare)) return false;
  const tokens = (bare.match(/\p{L}+/gu) ?? []).map((t) => t.toLowerCase());
  if (!tokens.length) return false;
  const hits = tokens.filter((t) => PT_WORDS.has(t)).length;
  return hits >= 2 || (hits >= 1 && PT_ACCENT.test(bare));
};

const sectionUnits = (sections) => {
  const units = [];
  for (const s of sections ?? []) {
    units.push([`#${s.id}`, s.heading]);
    (s.paragraphs ?? []).forEach((p, i) => units.push([`#${s.id}.p${i}`, p]));
    (s.bullets ?? []).forEach((b, i) => units.push([`#${s.id}.b${i}`, b]));
    if (s.ctaLabel !== undefined) units.push([`#${s.id}.ctaLabel`, s.ctaLabel]);
  }
  return units;
};
const referenceUnits = (refs) =>
  (refs ?? []).flatMap((r, i) => [
    [`ref${i}.label`, r.label],
    [`ref${i}.publisher`, r.publisher],
  ]);

// The strings each twin renders, per collection. Kept in step with the fields
// `checkSections` / `checkReferences` compare, plus the reference label and
// publisher, which no structural rule reads.
const twinUnits = {
  disease: (t) => [
    ['name', t.name],
    ['summary', t.summary],
    ...(t.metaTitle ? [['metaTitle', t.metaTitle]] : []),
    ...sectionUnits(t.sections),
    ...(t.faq ?? []).flatMap((f, i) => [[`faq${i}.q`, f.question], [`faq${i}.a`, f.answer]]),
    ...referenceUnits(t.references),
  ],
  article: (t) => [
    ['title', t.title],
    ['excerpt', t.excerpt],
    ...(t.metaTitle ? [['metaTitle', t.metaTitle]] : []),
    ...sectionUnits(t.body),
    ...referenceUnits(t.references),
  ],
  topic: (t) => [
    ['title', t.title],
    ['description', t.description],
    ...(t.scope ?? []).map((s, i) => [`scope${i}`, s]),
    ...referenceUnits(t.references),
  ],
  region: (t) => [
    ['name', t.name],
    ['description', t.description],
    ...(t.globalOverview ?? []).map((s, i) => [`global${i}`, s]),
    ...(t.lusophoneOverview ?? []).map((s, i) => [`lusophone${i}`, s]),
  ],
  page: (t) => [
    ['title', t.title],
    ['h1', t.h1],
    ['description', t.description],
    ...(t.metaTitle ? [['metaTitle', t.metaTitle]] : []),
    ...(t.intro ? [['intro', t.intro]] : []),
    ...(t.notice ? [['notice.title', t.notice.title], ['notice.body', t.notice.body]] : []),
    ...(t.cards ?? []).flatMap((c, i) => [[`card${i}.title`, c.title], [`card${i}.description`, c.description]]),
    ...sectionUnits(t.sections),
    ...(t.outro ? [['outro', t.outro]] : []),
  ],
  guide: (t) => sectionUnits(t),
};

const scanTwin = (kind, slug, units) => {
  for (const [where, raw] of units) {
    if (!looksPortuguese(raw)) continue;
    report('untrans', `${kind}:${slug}`, `${where} is still Portuguese: ${String(raw).trim().slice(0, 70)}`);
  }
};

// Each pair: [source collection, override map, kind, section field]
const pairs = [
  [mod.diseases, mod.zhDiseases, 'disease', 'sections'],
  [mod.articles, mod.zhArticles, 'article', 'body'],
  [mod.topics, mod.zhTopics, 'topic', null],
  [mod.regions, mod.zhRegions, 'region', null],
];

// A draft is never built, so it has no page whose text could be wrong.
for (const [source, overrides, kind, field] of pairs) {
  for (const item of source) {
    if (item.reviewStatus === 'draft') continue;
    const twin = overrides[item.slug];
    if (!twin) {
      report(kind, item.slug, 'no translation record — this page renders in Portuguese');
      continue;
    }
    if (field) {
      checkSections(kind, item.slug, item[field], twin[field]);
      checkReferences(item.slug, item.references, twin.references);
    }
    if (kind === 'topic' && twin.scope.length !== item.scope.length)
      report(kind, item.slug, `scope lines: source has ${item.scope.length}, translation has ${twin.scope.length}`);
    if (kind === 'topic') checkReferences(item.slug, item.references, twin.references);
    if (item.faq?.length && kind === 'disease') {
      if (!twin.faq || twin.faq.length !== item.faq.length)
        report(kind, item.slug, `FAQ: source has ${item.faq.length}, translation has ${twin.faq?.length ?? 0}`);
    }
    if ('metaTitle' in item && twin.metaTitle && !item.metaTitle)
      report(kind, item.slug, 'translation adds a metaTitle the source does not have');
    scanTwin(kind, item.slug, twinUnits[kind](twin));
  }
}

for (const item of mod.staticPages) {
  const twin = mod.zhStaticPages.find((p) => p.slug === item.slug);
  if (!twin) {
    report('page', item.slug, 'no translation record');
    continue;
  }
  checkSections('page', item.slug, item.sections, twin.sections);
  if ((item.cards?.length ?? 0) !== (twin.cards?.length ?? 0)) report('page', item.slug, 'card count differs');
  if (Boolean(item.notice) !== Boolean(twin.notice)) report('page', item.slug, 'notice presence differs');
  if (item.cardsAfter !== twin.cardsAfter) report('page', item.slug, 'cardsAfter differs');
  scanTwin('page', item.slug, twinUnits.page(twin));
}

// The list-page guides and the category definitions are prose too, and they
// render on pages whose every other block is Chinese: a gap falls back to
// Portuguese one paragraph at a time, invisibly.
for (const page of Object.keys(mod.listGuides)) {
  checkSections('guide', page, mod.listGuides[page], mod.zhListGuides[page]);
  if (mod.zhListGuides[page]) scanTwin('guide', page, twinUnits.guide(mod.zhListGuides[page]));
}
for (const slug of Object.keys(mod.categoryGuides)) {
  checkSections('guide', slug, mod.categoryGuides[slug], mod.zhCategoryGuides[slug]);
  if (mod.zhCategoryGuides[slug]) scanTwin('guide', slug, twinUnits.guide(mod.zhCategoryGuides[slug]));
}
for (const slug of Object.keys(mod.zhCategoryGuides)) {
  if (!mod.categoryGuides[slug]) report('guide', slug, 'translation for a guide that does not exist');
}

// Categories and image captions are keyed by the same slugs; a gap there is a
// silent fallback to Portuguese on a page whose prose is Chinese.
const categorySlugs = new Set([...mod.diseases, ...mod.articles].map((i) => i.categorySlug));
for (const slug of categorySlugs) if (!mod.zhCategories[slug]) report('category', slug, 'no zh label');
for (const extra of Object.keys(mod.zhCategories))
  if (!categorySlugs.has(extra)) report('category', extra, 'zh label for a category that does not exist');
for (const [slug, label] of Object.entries(mod.zhCategories))
  if (looksPortuguese(label)) report('untrans', `category:${slug}`, `label is still Portuguese: ${label}`);

const imageSlugs = [
  ...Object.keys(mod.diseaseImages),
  ...Object.keys(mod.articleImages),
  ...Object.keys(mod.topicImages),
];
for (const slug of imageSlugs) if (!mod.zhImageAlts[slug]) report('image', slug, 'no zh alt text');
for (const [slug, alt] of Object.entries(mod.zhImageAlts))
  if (looksPortuguese(alt)) report('untrans', `image:${slug}`, `alt text is still Portuguese: ${alt.slice(0, 70)}`);
for (const extra of Object.keys(mod.zhImageAlts))
  if (!imageSlugs.includes(extra)) report('image', extra, 'alt text for a slug with no image');

// UI parity is enforced by the type system, but an empty string compiles.
const blank = [];
const walk = (node, path) => {
  for (const [k, v] of Object.entries(node)) {
    const at = `${path}.${k}`;
    if (typeof v === 'string') { if (!v.trim()) blank.push(at); }
    else if (Array.isArray(v)) v.forEach((item, i) => (typeof item === 'string' ? item.trim() || blank.push(`${at}[${i}]`) : walk(item, `${at}[${i}]`)));
    else if (v) walk(v, at);
  }
};
for (const [lang, catalog] of Object.entries(mod.ui)) walk(catalog, lang);
if (blank.length) report('ui', 'catalog', `empty strings: ${blank.join(', ')}`);

// Characters that exist only in the Simplified system. Deliberately excludes
// 症 酸 系 吸 染 台 于 里 面 只 布 污 — all of them are legitimate Traditional
// forms or stylistic variants, and flagging them buries the real regressions.
const simplified = '传读资询营项学义务写为费浅说状与预机关来联络编辑团队还没审标范专评续订网质疗员问恶请寻协发题们导动装启单闭页选择语诊断浏览隐时证连结实际撑该体图进认识这种欢错误会经过检视验构应决现筹备询热压输笔换从见谱圆点处线条脑脏肾肠节规则卫组织态报长张运围讨论师样风险吗顾对简带议领区盖肤让况两无声却争内参后着干';
const files = readdirSync(`${root}src/data/zh-Hant`)
  .filter((f) => f.endsWith('.ts'))
  .map((f) => [`src/data/zh-Hant/${f}`, readFileSync(`${root}src/data/zh-Hant/${f}`, 'utf8')]);
// Only the second half of the catalog is Chinese; scanning the Portuguese
// block would look for simplified glyphs in Latin text.
const catalog = readFileSync(`${root}src/i18n/ui.ts`, 'utf8');
files.push(['ui.ts', catalog.slice(catalog.indexOf('const zh: UI = {'))]);
for (const [file, text] of files) {
  text.split('\n').forEach((line, n) => {
    for (const ch of line) {
      if (simplified.includes(ch)) problems.push(`glyph   ${file}:${n + 1} has ${ch}`);
    }
    const nin = (line.match(/你/g) || []).length;
    if (nin) problems.push(`copy    ${file}:${n + 1} — ${nin}× 你, reader-facing copy addresses 您`);
  });
}

if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exitCode = 1;
} else {
  console.log(
    `zh-Hant coverage complete: ${mod.diseases.length} diseases, ${mod.articles.length} articles, ` +
      `${mod.topics.length} topics, ${mod.regions.length} regions, ${mod.staticPages.length} pages, ` +
      `${imageSlugs.length} images, ${categorySlugs.size} categories.`
  );
}
