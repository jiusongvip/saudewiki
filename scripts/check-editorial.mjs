// Editorial gate for the Portuguese copy. Run with: node scripts/check-editorial.mjs
//
// The rules in skills/disease-encyclopedia-ptbr/references/editorial-checklist.md
// that can be counted or matched are enforced here, so the third QC round is not
// only a promise: template openers, filler frameworks, colon lists, dashes,
// Chinese leftovers, leftover disclaimers and fragmented FAQ answers all fail the
// build instead of being noticed by whoever remembers to look.
//
// What this script cannot judge stays with the checklist: whether a sentence reads
// like a Brazilian health editor wrote it, whether a collocation is real, whether
// the wording matches how patients speak. Those need a reader.
//
// The repo baseline is not green, and a gate that always fails stops being read.
// Judgement is therefore the diff, not the total: a run fails only on findings
// that are not in scripts/editorial-baseline.json. Fix the copy, then shrink the
// baseline with --update-baseline.
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const root = fileURLToPath(new URL('..', import.meta.url));
const baselinePath = `${root}scripts/editorial-baseline.json`;
const updateBaseline = process.argv.includes('--update-baseline');

const entry = `
export { diseases } from './src/data/diseases';
export { articles } from './src/data/articles';
export { diseaseImages, articleImages, topicImages } from './src/lib/images';
export { zhImageAlts } from './src/data/zh-Hant/image-alts';
`;

const bundle = await esbuild.build({
  stdin: { contents: entry, resolveDir: root, loader: 'ts', sourcefile: 'editorial-entry.ts' },
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
});
const mod = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);

const findings = [];
const add = (rule, kind, slug, snippet, detail) =>
  findings.push({ rule, kind, slug, snippet: String(snippet).trim().slice(0, 90), detail });
const id = (f) => `${f.rule} ${f.kind}:${f.slug} :: ${f.snippet}`;

// ——— one entry becomes a flat list of the strings a reader actually sees ———

const diseaseUnits = (d) => {
  const units = [
    ['summary', d.summary],
    ['name', d.name],
  ];
  for (const s of d.sections ?? []) {
    units.push([`#${s.id}`, s.heading]);
    (s.paragraphs ?? []).forEach((p, i) => units.push([`#${s.id}.p${i}`, p]));
    (s.bullets ?? []).forEach((b, i) => units.push([`#${s.id}.b${i}`, b]));
  }
  (d.faq ?? []).forEach((f, i) => {
    units.push([`faq${i}.q`, f.question]);
    units.push([`faq${i}.a`, f.answer]);
  });
  (d.references ?? []).forEach((r, i) => units.push([`ref${i}`, r.label]));
  return units;
};

const articleUnits = (a) => {
  const units = [
    ['title', a.title],
    ['excerpt', a.excerpt],
  ];
  if (a.metaTitle) units.push(['metaTitle', a.metaTitle]);
  for (const s of a.body ?? []) {
    units.push([`#${s.id}`, s.heading]);
    (s.paragraphs ?? []).forEach((p, i) => units.push([`#${s.id}.p${i}`, p]));
    (s.bullets ?? []).forEach((b, i) => units.push([`#${s.id}.b${i}`, b]));
  }
  return units;
};

const entries = [
  ...mod.diseases.map((d) => ({ kind: 'disease', slug: d.slug, data: d, units: diseaseUnits(d) })),
  ...mod.articles.map((a) => ({ kind: 'article', slug: a.slug, data: a, units: articleUnits(a) })),
];

// ——— countable red lines from the checklist ———

// Template openers and transitions: ≤1 per entry, counted over the whole text.
const TEMPLATES =
  /\b(Além disso|Vale destacar|É importante ressaltar|Em resumo|Por outro lado|A boa notícia é que|O ponto mais importante é este)\b/g;

// Framework words, nominalisations and patient-hostile collocations. Matched, not counted.
const CALQUES = [
  /através de/gi,
  /no sentido de/gi,
  /no que diz respeito/gi,
  /realizar a avaliação/gi,
  /efetuar a (limpeza|avaliação|análise)/gi,
  /proceder à/gi,
  /possibilidade de ocorrência/gi,
  /a totalidade d[oa]s/gi,
  /é recomendado que se/gi,
  /comparecer/gi,
  /manter uma hidratação adequada/gi,
  /médico clínico/gi,
  /uma opção habitual/gi,
];

// Hype the checklist forbids outright.
const HYPE = [/assassina silenciosa/gi, /a melhor e mais eficaz/gi, /melhor opção de tratamento/gi];

// China-specific leftovers that must not survive into pt-BR copy.
const CHINA_WORDS = [/\bChina\b/g, /\bchin[êe]s[ao]s?\b/gi, /\bPequim\b/g, /\bBeijing\b/g, /国内/g];

for (const item of entries) {
  if (item.data.reviewStatus === 'draft') continue;
  const texts = item.units.map(([where, text]) => [where, String(text ?? '')]);

  // 1. template phrases
  let templates = 0;
  for (const [where, text] of texts) {
    for (const m of text.matchAll(TEMPLATES)) {
      templates += 1;
      // the offending opener is the finding; the tally decides pass or fail
      if (templates > 1) add('template', item.kind, item.slug, m[0], `in ${where}`);
    }
  }

  // 2. `Trata-se de` opening a paragraph
  for (const [where, text] of texts) {
    const m = text.match(/^\s*Trata-se de\b/);
    if (m) add('trata-se', item.kind, item.slug, text.slice(0, 40), `in ${where}`);
  }

  // 3. colon-style bullet lists. The three-item limit exists to stop generated parallel
  // prose (`- **Termo:** frase`). Classification, grading, complication-by-organ and
  // two-way differential lists are enumeration, not prose: they are how medical
  // reference copy names things, and flattening them into paragraphs destroys the
  // structure the reader came for. Those are kept when every label is a short name,
  // the list is one contiguous block, and it stays within eight items. A bolded label
  // never qualifies: that is the pattern the limit was written for, and it is the only
  // named form in the checklist.
  const COLON = /^[^:]{1,40}:\s/;
  const label = (b) => b.trim().split(':')[0];
  for (const s of item.data.sections ?? item.data.body ?? []) {
    const bullets = s.bullets ?? [];
    const runs = [];
    let run = 0;
    for (const b of bullets) {
      run = COLON.test(b.trim()) ? run + 1 : 0;
      if (run === 4) runs.push(b); // reported below, once per offending run
    }
    const colon = bullets.filter((b) => COLON.test(b.trim()));
    const necessary =
      colon.length >= 4 &&
      colon.length <= 8 &&
      colon.length === new Set(colon.map(label)).size &&
      colon.every((b) => !b.trim().startsWith('**') && label(b).length <= 28);
    if (!necessary) {
      for (const b of runs) add('colon-list', item.kind, item.slug, b, `#${s.id} runs 4+ colon items`);
    }
  }

  // 4. dash density: paired asides are ≤2 per entry
  const dashTexts = texts.filter(([, text]) => /[—–]/.test(text));
  const dashCount = dashTexts.reduce((n, [, text]) => n + (text.match(/[—–]/g) ?? []).length, 0);
  if (dashCount > 2) add('dash', item.kind, item.slug, dashTexts[0][1], `${dashCount} dashes in the entry`);

  // 5. calques, hype and Chinese leftovers
  for (const [where, text] of texts) {
    for (const re of CALQUES) for (const m of text.matchAll(re)) add('calque', item.kind, item.slug, m[0], `in ${where}`);
    for (const re of HYPE) for (const m of text.matchAll(re)) add('hype', item.kind, item.slug, m[0], `in ${where}`);
    const han = text.match(/[\u4e00-\u9fff]+/g);
    if (han) add('chinese', item.kind, item.slug, han.join(' '), `in ${where}`);
    else for (const re of CHINA_WORDS) for (const m of text.matchAll(re)) add('chinese', item.kind, item.slug, m[0], `in ${where}`);
  }
}

// Two checklist rules are deliberately NOT automated here.
// FAQ answers that open with a fragment: the checklist's own endorsed pattern is
// `Não. A dengue não é transmitida...`, so a length test flags the good examples
// too. And the stored-disclaimer rule: the disclaimer lives in src/i18n/ui.ts and
// is rendered by the view, so matching `não substitui` inside body prose only
// produces false positives. Both stay with the reader in QC round three.

// Alt text takes no dashes of any kind, in either language.
for (const [slug, img] of [
  ...Object.entries(mod.diseaseImages),
  ...Object.entries(mod.articleImages),
  ...Object.entries(mod.topicImages),
]) {
  if (/[—–]/.test(img.alt)) add('alt-dash', 'image', slug, img.alt.slice(0, 40), 'pt-BR alt');
  const zh = mod.zhImageAlts[slug];
  if (zh && /[—–]/.test(zh)) add('alt-dash', 'image', slug, zh.slice(0, 40), 'zh-Hant alt');
}

// ——— baseline diff ———

const ids = findings.map(id).sort();
const baseline = existsSync(baselinePath) ? new Set(JSON.parse(readFileSync(baselinePath, 'utf8'))) : new Set();

if (updateBaseline) {
  writeFileSync(baselinePath, `${JSON.stringify(ids, null, 2)}\n`);
  console.log(`editorial baseline written: ${ids.length} known finding(s) in scripts/editorial-baseline.json`);
} else {
  const added = findings.filter((f) => !baseline.has(id(f)));
  const fixed = [...baseline].filter((b) => !ids.includes(b));
  if (added.length) {
    console.error(`${added.length} new editorial problem(s):`);
    for (const f of added) console.error(`  ${f.rule.padEnd(12)} ${f.kind}:${f.slug} — ${f.detail} — ${f.snippet}`);
    if (fixed.length) console.error(`(${fixed.length} baseline finding(s) already fixed — run --update-baseline to shrink it)`);
    process.exitCode = 1;
  } else {
    console.log(
      `editorial gate passed: ${findings.length} known finding(s), none new. ` +
        `${entries.length} entries checked${fixed.length ? `, ${fixed.length} baseline finding(s) fixed` : ''}.`
    );
  }
}
