#!/usr/bin/env node
/**
 * Batch writer for new disease entries and derived articles.
 *
 * Reads one JSON file with `diseases` and/or `articles` and appends the
 * records to the Portuguese data files and to their zh-Hant twins, checking the
 * structural invariants first so a broken pair never reaches the data files.
 *
 *   node scripts/_batch-write.mjs .tmp-content/batch-tag.json [--dry]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const file = process.argv[2];
const dry = process.argv.includes('--dry');
if (!file) {
  console.error('uso: node scripts/_batch-write.mjs <arquivo.json> [--dry]');
  process.exit(1);
}

const data = JSON.parse(readFileSync(file, 'utf8'));

const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const ind = (n) => '  '.repeat(n);

function list(values, depth, key) {
  const pad = ind(depth);
  return `${pad}${key}: [\n${values.map((v) => `${pad}  ${q(v)},\n`).join('')}${pad}],\n`;
}

function sections(list_, depth) {
  const pad = ind(depth);
  let out = `${pad}sections: [\n`;
  for (const s of list_) {
    out += `${pad}  {\n${pad}    id: ${q(s.id)},\n${pad}    heading: ${q(s.heading)},\n`;
    if (s.paragraphs?.length) out += `${pad}    paragraphs: [\n${s.paragraphs.map((p) => `${pad}      ${q(p)},\n`).join('')}${pad}    ],\n`;
    if (s.bullets?.length) out += `${pad}    bullets: [\n${s.bullets.map((p) => `${pad}      ${q(p)},\n`).join('')}${pad}    ],\n`;
    if (s.cta) out += `${pad}    cta: { label: ${q(s.cta.label)}, href: ${q(s.cta.href)} },\n`;
    out += `${pad}  },\n`;
  }
  return `${out}${pad}],\n`;
}

function body(list_, depth) {
  const pad = ind(depth);
  let out = `${pad}body: [\n`;
  for (const s of list_) {
    out += `${pad}  {\n${pad}    id: ${q(s.id)},\n${pad}    heading: ${q(s.heading)},\n`;
    if (s.paragraphs?.length) out += `${pad}    paragraphs: [\n${s.paragraphs.map((p) => `${pad}      ${q(p)},\n`).join('')}${pad}    ],\n`;
    if (s.bullets?.length) out += `${pad}    bullets: [\n${s.bullets.map((p) => `${pad}      ${q(p)},\n`).join('')}${pad}    ],\n`;
    if (s.cta) out += `${pad}    cta: { label: ${q(s.cta.label)}, href: ${q(s.cta.href)} },\n`;
    out += `${pad}  },\n`;
  }
  return `${out}${pad}],\n`;
}

function faq(list_, depth) {
  const pad = ind(depth);
  let out = `${pad}faq: [\n`;
  for (const f of list_) {
    out += `${pad}  {\n${pad}    question: ${q(f.question)},\n${pad}    answer:\n      ${q(f.answer)},\n${pad}  },\n`;
  }
  return `${out}${pad}],\n`;
}

function refsPt(list_, depth) {
  const pad = ind(depth);
  let out = `${pad}references: [\n`;
  for (const r of list_) {
    out += `${pad}  {\n${pad}    label: ${q(r.label)},\n${pad}    url: ${q(r.url)},\n${pad}    publisher: ${q(r.publisher)},\n${pad}  },\n`;
  }
  return `${out}${pad}],\n`;
}

function refsZh(list_, depth) {
  const pad = ind(depth);
  let out = `${pad}references: [\n`;
  for (const r of list_) {
    out += `${pad}  {\n${pad}    url: ${q(r.url)},\n${pad}    label: ${q(r.label)},\n${pad}    publisher: ${q(r.publisher)},\n${pad}  },\n`;
  }
  return `${out}${pad}],\n`;
}

function diseasePt(d) {
  let out = '  {\n';
  out += `    id: ${q(d.slug)},\n    slug: ${q(d.slug)},\n    name: ${q(d.name)},\n`;
  if (d.metaTitle) out += `    metaTitle: ${q(d.metaTitle)},\n`;
  out += list(d.aliases, 2, 'aliases');
  out += `    summary:\n      ${q(d.summary)},\n`;
  out += `    category: ${q(d.category)},\n    categorySlug: ${q(d.categorySlug)},\n`;
  out += sections(d.sections, 2);
  if (d.faq?.length) out += faq(d.faq, 2);
  out += list(d.relatedArticleSlugs ?? [], 2, 'relatedArticleSlugs');
  out += list(d.relatedTopicSlugs, 2, 'relatedTopicSlugs');
  out += list(d.relatedDiseaseSlugs, 2, 'relatedDiseaseSlugs');
  out += refsPt(d.references, 2);
  out += `    author: 'Equipe editorial Saudewiki',\n    reviewer: null,\n    reviewStatus: 'needs_review',\n`;
  out += `    publishedAt: '${d.date}',\n    updatedAt: '${d.date}',\n    isPlaceholder: true,\n  },\n`;
  return out;
}

function diseaseZh(d) {
  let out = `  ${q(d.slug)}: {\n`;
  out += `    name: ${q(d.zh.name)},\n`;
  out += list(d.zh.aliases, 2, 'aliases');
  out += `    summary: ${q(d.zh.summary)},\n`;
  out += sections(d.zh.sections, 2);
  if (d.zh.faq?.length) out += faq(d.zh.faq, 2);
  out += refsZh(d.zh.references, 2);
  out += '  },\n';
  return out;
}

function articlePt(a) {
  let out = '  {\n';
  out += `    id: ${q(a.slug)},\n    slug: ${q(a.slug)},\n    title: ${q(a.title)},\n`;
  if (a.metaTitle) out += `    metaTitle: ${q(a.metaTitle)},\n`;
  out += `    excerpt:\n      ${q(a.excerpt)},\n`;
  out += `    category: ${q(a.category)},\n    categorySlug: ${q(a.categorySlug)},\n`;
  out += body(a.body, 2);
  out += list(a.diseaseSlugs, 2, 'diseaseSlugs');
  out += list(a.topicSlugs, 2, 'topicSlugs');
  out += list(a.relatedArticleSlugs ?? [], 2, 'relatedArticleSlugs');
  out += refsPt(a.references, 2);
  out += `    author: 'Equipe editorial Saudewiki',\n    reviewer: null,\n    reviewStatus: 'needs_review',\n`;
  out += `    publishedAt: '${a.date}',\n    updatedAt: '${a.date}',\n    isPlaceholder: true,\n  },\n`;
  return out;
}

function articleZh(a) {
  let out = `  ${q(a.slug)}: {\n`;
  out += `    title: ${q(a.zh.title)},\n`;
  if (a.zh.metaTitle) out += `    metaTitle: ${q(a.zh.metaTitle)},\n`;
  out += `    excerpt:\n      ${q(a.zh.excerpt)},\n`;
  let sectionsOut = `    body: [\n`;
  for (const s of a.zh.body) {
    sectionsOut += `      {\n        id: ${q(s.id)},\n        heading: ${q(s.heading)},\n`;
    if (s.paragraphs?.length) sectionsOut += `        paragraphs: [\n${s.paragraphs.map((p) => `          ${q(p)},\n`).join('')}        ],\n`;
    if (s.bullets?.length) sectionsOut += `        bullets: [\n${s.bullets.map((p) => `          ${q(p)},\n`).join('')}        ],\n`;
    if (s.ctaLabel) sectionsOut += `        ctaLabel: ${q(s.ctaLabel)},\n`;
    sectionsOut += '      },\n';
  }
  out += `${sectionsOut}    ],\n`;
  out += refsZh(a.zh.references, 2);
  out += '  },\n';
  return out;
}

// ——— structural invariants ———

const problems = [];
const checkPair = (kind, slug, ptSections, zhSections) => {
  const ids = ptSections.map((s) => s.id);
  const zids = zhSections.map((s) => s.id);
  if (ids.join() !== zids.join()) problems.push(`${kind} ${slug}: section ids differ`);
  for (const s of ptSections) {
    const z = zhSections.find((x) => x.id === s.id);
    if (!z) continue;
    if ((s.paragraphs?.length ?? 0) !== (z.paragraphs?.length ?? 0))
      problems.push(`${kind} ${slug} #${s.id}: paragraph count differs`);
    if ((s.bullets?.length ?? 0) !== (z.bullets?.length ?? 0))
      problems.push(`${kind} ${slug} #${s.id}: bullet count differs`);
    if (Boolean(s.cta) !== Boolean(z.ctaLabel)) problems.push(`${kind} ${slug} #${s.id}: ctaLabel mismatch`);
  }
  if (ptSections.length > 15) problems.push(`${kind} ${slug}: more than 15 sections`);
};

for (const d of data.diseases ?? []) {
  checkPair('disease', d.slug, d.sections, d.zh.sections);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(d.slug)) problems.push(`bad slug ${d.slug}`);
  const a = (d.references ?? []).map((r) => r.url).sort().join();
  const b = (d.zh.references ?? []).map((r) => r.url).sort().join();
  if (a !== b) problems.push(`disease ${d.slug}: reference urls differ`);
  if ((d.faq?.length ?? 0) !== (d.zh.faq?.length ?? 0)) problems.push(`disease ${d.slug}: faq count differs`);
}
for (const a of data.articles ?? []) {
  checkPair('article', a.slug, a.body, a.zh.body);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug)) problems.push(`bad slug ${a.slug}`);
  const x = (a.references ?? []).map((r) => r.url).sort().join();
  const y = (a.zh.references ?? []).map((r) => r.url).sort().join();
  if (x !== y) problems.push(`article ${a.slug}: reference urls differ`);
  const words = (a.body ?? [])
    .flatMap((s) => [...(s.paragraphs ?? []), ...(s.bullets ?? [])])
    .join(' ')
    .match(/[\p{L}\p{N}][\p{L}\p{N}'-]*/gu)?.length ?? 0;
  if (words < 900 || words > 1200) problems.push(`article ${a.slug}: ${words} words`);
}

if (problems.length) {
  console.error(`abortado, ${problems.length} problema(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

const append = (path, block, closer) => {
  const full = `${root}${path}`;
  const text = readFileSync(full, 'utf8');
  const at = text.lastIndexOf(closer);
  if (at === -1) throw new Error(`closer not found in ${path}`);
  const next = `${text.slice(0, at)}${block}${text.slice(at)}`;
  if (!dry) writeFileSync(full, next);
  console.log(`${dry ? 'would append' : 'appended'} ${block.split('\n').length - 1} line(s) to ${path}`);
};

if (data.diseases?.length) {
  append('src/data/diseases.ts', data.diseases.map(diseasePt).join(''), '\n];\n');
  append('src/data/zh-Hant/diseases.b.ts', data.diseases.map(diseaseZh).join(''), '\n};\n');
}
if (data.articles?.length) {
  append('src/data/articles.ts', data.articles.map(articlePt).join(''), '\n];\n');
  append('src/data/zh-Hant/articles.b.ts', data.articles.map(articleZh).join(''), '\n};\n');
}
console.log('ok');
