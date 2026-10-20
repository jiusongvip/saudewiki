#!/usr/bin/env node
/**
 * Draft in, data files out.
 *
 * Writing an article used to mean editing `src/data/articles.ts` and its
 * zh-Hant twin in place: line ranges computed by hand, a Python script that
 * replaced them, and a second script to prove the twin still matched. Two of
 * those replacements failed on the first try, and each failure cost a round
 * trip.
 *
 * This tool moves the authoring step into one JSON draft and makes the write a
 * single, checked operation:
 *
 *   node scripts/draft.mjs export <slug...> --out drafts/x.json
 *   node scripts/draft.mjs check  drafts/x.json
 *   node scripts/draft.mjs apply  drafts/x.json
 *
 * `check` is the fast loop: word counts per article and per section against the
 * 900-1200 band, paragraph counts, and the pt-BR / zh-Hant structural parity
 * that `check-i18n.mjs` enforces later. It runs without touching `src/`, so a
 * draft can be fixed until it is right and only then applied.
 *
 * `apply` preserves what must not change on an existing article — `id`,
 * `publishedAt`, `reviewStatus`, `author`, `reviewer`, `isPlaceholder` — and
 * only takes the text, the wiring and `updatedAt` from the draft. It refuses to
 * write if the draft does not parse, if a slug appears twice, or if the
 * resulting file would have unbalanced braces.
 *
 * Draft shape:
 * {
 *   "articles": [{
 *     "pt": { slug, title, excerpt, category, categorySlug, diseaseSlugs,
 *             topicSlugs, relatedArticleSlugs, references: [{label,url,publisher}],
 *             body: [{ id, heading, paragraphs: [..], bullets: [..],
 *                      cta: { label, href } }] },
 *     "zh": { title, excerpt, references: [{url,label,publisher}],
 *             body: [{ id, heading, paragraphs: [..], bullets: [..], ctaLabel }] }
 *   }]
 * }
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';
import {
  ARTICLE_WORDS,
  SECTION_PARAGRAPHS,
  countWords,
  isKebab,
  wordBudget,
} from './lib/article-rules.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const PT_FILE = `${root}src/data/articles.ts`;
const ZH_FILE = `${root}src/data/zh-Hant/articles.b.ts`;
const today = new Date().toISOString().slice(0, 10);

const [command, ...rest] = process.argv.slice(2);
const flagValue = (name) => {
  const i = rest.indexOf(`--${name}`);
  return i === -1 ? undefined : rest[i + 1];
};

// ————————————————————————————— parsing the data files —————————————————————————————

/**
 * Index of the `}` that closes the `{` at `open`, skipping braces inside
 * strings and comments. Content here is prose full of apostrophes, so a plain
 * brace counter would end the object at the first `}` inside a sentence.
 */
function matchingBrace(text, open) {
  let depth = 0;
  let quote = null;
  for (let i = open; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (quote) {
      if (ch === '\\') i += 1;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '/' && next === '/') {
      const end = text.indexOf('\n', i);
      i = end === -1 ? text.length : end;
      continue;
    }
    if (ch === '/' && next === '*') {
      const end = text.indexOf('*/', i);
      i = end === -1 ? text.length : end + 1;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') quote = ch;
    else if (ch === '{') depth += 1;
    else if (ch === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  throw new Error('unbalanced braces: reached end of file');
}

/** The `{ ... }` source of one pt-BR article, or null when the slug is new. */
function ptRange(text, slug) {
  const marker = `id: '${slug}',`;
  const at = text.indexOf(marker);
  if (at === -1) return null;
  if (text.indexOf(marker, at + marker.length) !== -1) throw new Error(`duplicate id: ${slug}`);
  const open = text.lastIndexOf('{', at);
  if (open === -1) throw new Error(`no opening brace before ${slug}`);
  return { start: text.lastIndexOf('\n', open) + 1, end: matchingBrace(text, open) };
}

/** The `{ ... }` source of one zh-Hant twin, or null when the slug is new. */
function zhRange(text, slug) {
  const marker = `'${slug}': {`;
  const at = text.indexOf(marker);
  if (at === -1) return null;
  if (text.indexOf(marker, at + marker.length) !== -1) throw new Error(`duplicate zh key: ${slug}`);
  const open = at + marker.length - 1;
  // The key is part of the record, so the range starts at the line, not at `{`.
  return { start: text.lastIndexOf('\n', at) + 1, end: matchingBrace(text, open) };
}

// ————————————————————————————— serialising —————————————————————————————

const q = (value) => `'${String(value ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

const list = (items, indent, render) => {
  // Short lists stay on one line, the way the hand-written entries read.
  const inline = `[${items.map(render).join(', ')}]`;
  if (inline.length + indent.length <= 96) return inline;
  return `[\n${items.map((item) => `${indent}${render(item)},\n`).join('')}${indent.slice(2)}]`;
};

/** Replace a record in place, taking the separating comma with it. */
function splice(text, range, block) {
  const after = text[range.end + 1] === ',' ? range.end + 2 : range.end + 1;
  return text.slice(0, range.start) + block + text.slice(after);
}

function serializePt(article, meta) {
  const i4 = '    ';
  const i6 = '      ';
  const i8 = '        ';
  const body = article.body
    .map((section) => {
      const lines = [
        `${i6}{`,
        `${i8}id: ${q(section.id)},`,
        `${i8}heading: ${q(section.heading)},`,
      ];
      if (section.paragraphs?.length)
        lines.push(`${i8}paragraphs: ${list(section.paragraphs, i8 + '  ', q)},`);
      if (section.bullets?.length)
        lines.push(`${i8}bullets: ${list(section.bullets, i8 + '  ', q)},`);
      if (section.cta)
        lines.push(
          `${i8}cta: {`,
          `${i8}  label: ${q(section.cta.label)},`,
          `${i8}  href: ${q(section.cta.href)},`,
          `${i8}},`
        );
      lines.push(`${i6}},`);
      return lines.join('\n');
    })
    .join('\n');
  const refs = article.references
    .map((ref) =>
      [
        `${i6}{`,
        `${i8}label: ${q(ref.label)},`,
        `${i8}url: ${q(ref.url)},`,
        `${i8}publisher: ${q(ref.publisher)},`,
        `${i6}},`,
      ].join('\n')
    )
    .join('\n');
  return [
    '  {',
    `${i4}id: ${q(article.slug)},`,
    `${i4}slug: ${q(article.slug)},`,
    `${i4}title: ${q(article.title)},`,
    `${i4}excerpt:`,
    `${i6}${q(article.excerpt)},`,
    `${i4}category: ${q(article.category)},`,
    `${i4}categorySlug: ${q(article.categorySlug)},`,
    `${i4}body: [`,
    body,
    `${i4}],`,
    `${i4}diseaseSlugs: ${list(article.diseaseSlugs, i6, q)},`,
    `${i4}topicSlugs: ${list(article.topicSlugs, i6, q)},`,
    `${i4}relatedArticleSlugs: ${list(article.relatedArticleSlugs, i6, q)},`,
    `${i4}references: [`,
    refs,
    `${i4}],`,
    `${i4}author: ${q(meta.author)},`,
    `${i4}reviewer: ${meta.reviewer === null ? 'null' : q(meta.reviewer)},`,
    `${i4}reviewStatus: ${q(meta.reviewStatus)},`,
    `${i4}publishedAt: ${q(meta.publishedAt)},`,
    `${i4}updatedAt: ${q(meta.updatedAt)},`,
    `${i4}isPlaceholder: ${meta.isPlaceholder === false ? 'false' : 'true'},`,
    '  },',
  ].join('\n');
}

function serializeZh(article, twin) {
  const i4 = '    ';
  const i6 = '      ';
  const i8 = '        ';
  const body = twin.body
    .map((section) => {
      const lines = [
        `${i6}{`,
        `${i8}id: ${q(section.id)},`,
        `${i8}heading: ${q(section.heading)},`,
      ];
      if (section.paragraphs?.length)
        lines.push(`${i8}paragraphs: ${list(section.paragraphs, i8 + '  ', q)},`);
      if (section.bullets?.length)
        lines.push(`${i8}bullets: ${list(section.bullets, i8 + '  ', q)},`);
      if (section.ctaLabel) lines.push(`${i8}ctaLabel: ${q(section.ctaLabel)},`);
      lines.push(`${i6}},`);
      return lines.join('\n');
    })
    .join('\n');
  const refs = (twin.references ?? [])
    .map((ref) =>
      [
        `${i6}{`,
        `${i8}url: ${q(ref.url)},`,
        `${i8}label: ${q(ref.label)},`,
        `${i8}publisher: ${q(ref.publisher)},`,
        `${i6}},`,
      ].join('\n')
    )
    .join('\n');
  return [
    `  '${article.slug}': {`,
    `${i4}title: ${q(twin.title)},`,
    `${i4}excerpt:`,
    `${i6}${q(twin.excerpt)},`,
    `${i4}body: [`,
    body,
    `${i4}],`,
    `${i4}references: [`,
    refs,
    `${i4}],`,
    '  },',
  ].join('\n');
}

// ————————————————————————————— reading a draft —————————————————————————————

const draftPath = ['check', 'apply'].includes(command)
  ? rest.find((arg) => !arg.startsWith('--'))
  : null;
const draft = draftPath ? JSON.parse(readFileSync(draftPath, 'utf8')) : null;
const drafts = draft?.articles ?? [];

/** Structural checks shared by `check` and `apply`; returns the problem list. */
function inspect() {
  const problems = [];
  const seen = new Set();
  for (const item of drafts) {
    const pt = item.pt;
    const zh = item.zh;
    const at = pt?.slug ?? '(no slug)';
    if (!pt?.slug) {
      problems.push(`${at}: pt.slug is required`);
      continue;
    }
    if (!isKebab(pt.slug)) problems.push(`${at}: slug is not ASCII kebab`);
    if (seen.has(pt.slug)) problems.push(`${at}: slug appears twice in the draft`);
    seen.add(pt.slug);
    if (!zh) problems.push(`${at}: no zh twin`);
    if (!pt.body?.length) problems.push(`${at}: pt.body is empty`);
    if (zh && pt.body?.length !== zh.body?.length)
      problems.push(`${at}: pt has ${pt.body?.length} sections, zh has ${zh.body?.length}`);

    (pt.body ?? []).forEach((section, i) => {
      const twin = zh?.body?.[i];
      if (!twin) return;
      if (section.id !== twin.id) problems.push(`${at}: section ${i} id ${section.id} vs zh ${twin.id}`);
      for (const key of ['paragraphs', 'bullets']) {
        const a = section[key]?.length ?? 0;
        const b = twin[key]?.length ?? 0;
        if (a !== b) problems.push(`${at}: #${section.id} ${key} ${a} vs zh ${b}`);
      }
      if (Boolean(section.cta) !== Boolean(twin.ctaLabel))
        problems.push(`${at}: #${section.id} cta/ctaLabel do not pair up`);
      const paragraphs = section.paragraphs?.length ?? 0;
      if (paragraphs < SECTION_PARAGRAPHS.min || paragraphs > SECTION_PARAGRAPHS.max)
        problems.push(
          `${at}: #${section.id} has ${paragraphs} paragraph(s), checklist asks ${SECTION_PARAGRAPHS.min}-${SECTION_PARAGRAPHS.max}`
        );
    });

    const ptRefs = (pt.references ?? []).map((r) => r.url).sort().join(' ');
    const zhRefs = (zh?.references ?? []).map((r) => r.url).sort().join(' ');
    if (ptRefs !== zhRefs) problems.push(`${at}: references differ between pt and zh`);
    if (!pt.references?.length) problems.push(`${at}: no references`);

    // Early warning only: `check-i18n.mjs` is the authority on glyphs and runs
    // after the write, on the whole tree. These two catch the usual slips.
    const zhText = JSON.stringify(zh ?? {});
    if (zhText.includes('你')) problems.push(`${at}: zh copy uses 你, the house style is 您`);
    if (/[传读资询营项学义务写为费浅说状与预机关来联络编辑团队还没审标范专评续订网质疗员问恶请寻协发题们导动装启单闭页选择语诊断浏览隐时证连结实际撑该体图进认识这种欢错误会经过检视验构应决现筹备询热压输笔换从见谱圆点处线条脑脏肾肠节规则卫组织态报长张运围讨论师样风险吗顾对简带议领区盖肤让况两无声却争内参后着干]/.test(zhText))
      problems.push(`${at}: zh copy has a simplified glyph`);
  }
  return problems;
}

// ————————————————————————————— commands —————————————————————————————

if (command === 'export') {
  const out = flagValue('out');
  const slugs = rest.filter((arg) => !arg.startsWith('--') && arg !== out);
  if (!slugs.length) {
    console.error('usage: node scripts/draft.mjs export <slug...> --out <file.json>');
    process.exit(1);
  }
  const ptText = readFileSync(PT_FILE, 'utf8');
  const zhText = readFileSync(ZH_FILE, 'utf8');
  const bundle = await esbuild.build({
    stdin: {
      contents: `export { articles } from './src/data/articles'; export { zhArticles } from './src/data/zh-Hant/articles';`,
      resolveDir: root,
      loader: 'ts',
      sourcefile: 'export-entry.ts',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    write: false,
  });
  const mod = await import(
    `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
  );
  const articles = slugs.map((slug) => {
    const article = mod.articles.find((a) => a.slug === slug);
    if (!article) throw new Error(`no article with slug ${slug}`);
    const twin = mod.zhArticles[slug];
    if (!twin) throw new Error(`no zh twin for ${slug}`);
    return { pt: article, zh: twin };
  });
  const json = JSON.stringify({ articles }, null, 2);
  if (out) {
    writeFileSync(out, `${json}\n`);
    console.log(`exported ${articles.length} article(s) to ${out}`);
  } else {
    console.log(json);
  }
} else if (command === 'check') {
  if (!draft) {
    console.error('usage: node scripts/draft.mjs check <file.json>');
    process.exit(1);
  }
  const problems = inspect();
  console.log(`draft  ${drafts.length} article(s)\n`);
  console.log(`  ${'slug'.padEnd(46)} ${'words'.padStart(6)}  band          sections`);
  for (const { pt } of drafts) {
    const words = countWords(
      (pt.body ?? []).flatMap((s) => [...(s.paragraphs ?? []), ...(s.bullets ?? [])]).join(' ')
    );
    const delta =
      words < ARTICLE_WORDS.min
        ? `+${ARTICLE_WORDS.min - words} needed`
        : words > ARTICLE_WORDS.max
          ? `-${words - ARTICLE_WORDS.max} over`
          : 'in band';
    const perSection = (pt.body ?? []).map((s) =>
      countWords([...(s.paragraphs ?? []), ...(s.bullets ?? [])].join(' '))
    );
    console.log(
      `  ${pt.slug.padEnd(46)} ${String(words).padStart(6)}  ${delta.padEnd(13)} ${perSection.join('/')}`
    );
  }
  const plan = wordBudget(drafts[0]?.pt?.body?.length ?? 6);
  console.log(`\nbudget for that section count: ${plan.join(' / ')} words per section`);
  if (problems.length) {
    console.log(`\n${problems.length} problem(s):`);
    for (const problem of problems) console.log(`  ${problem}`);
    process.exitCode = 1;
  } else {
    console.log('\nok — structure and length are ready to apply');
  }
} else if (command === 'apply') {
  if (!draft) {
    console.error('usage: node scripts/draft.mjs apply <file.json>');
    process.exit(1);
  }
  const problems = inspect();
  if (problems.length) {
    console.error(`refusing to write: ${problems.length} problem(s) in the draft`);
    for (const problem of problems) console.error(`  ${problem}`);
    process.exit(1);
  }

  let ptText = readFileSync(PT_FILE, 'utf8');
  let zhText = readFileSync(ZH_FILE, 'utf8');
  const report = [];

  for (const { pt, zh } of drafts) {
    const range = ptRange(ptText, pt.slug);
    // Existing records keep their identity and their review state: the draft
    // carries prose, never a signature or a first-publication date.
    const previous = range
      ? Object.fromEntries(
          [...ptText.slice(range.start, range.end).matchAll(
            /^\s{4}(author|reviewer|reviewStatus|publishedAt|isPlaceholder): (.+),$/gm
          )].map((m) => [m[1], m[2]])
        )
      : {};
    const meta = {
      author: previous.author ? previous.author.replace(/^'|'$/g, '') : 'Equipe editorial Saudewiki',
      reviewer: previous.reviewer && previous.reviewer !== 'null' ? previous.reviewer.replace(/^'|'$/g, '') : null,
      reviewStatus: previous.reviewStatus ? previous.reviewStatus.replace(/^'|'$/g, '') : 'needs_review',
      publishedAt: previous.publishedAt ? previous.publishedAt.replace(/^'|'$/g, '') : today,
      updatedAt: today,
      isPlaceholder: previous.isPlaceholder === 'false' ? false : true,
    };
    const block = serializePt(pt, meta);
    if (range) ptText = splice(ptText, range, block);
    else {
      const close = ptText.lastIndexOf('\n];');
      if (close === -1) throw new Error('could not find the end of the articles array');
      ptText = `${ptText.slice(0, close)}\n${block}${ptText.slice(close)}`;
    }

    const zhBlock = serializeZh(pt, zh);
    const zhAt = zhRange(zhText, pt.slug);
    if (zhAt) zhText = splice(zhText, zhAt, zhBlock);
    else {
      const close = zhText.lastIndexOf('\n};');
      if (close === -1) throw new Error('could not find the end of the zh-Hant map');
      zhText = `${zhText.slice(0, close)}\n${zhBlock}${zhText.slice(close)}`;
    }

    report.push(`${pt.slug}: ${range ? 'updated' : 'added'} (${meta.publishedAt} → ${meta.updatedAt})`);
  }

  // A write that unbalanced the file would be caught by the build ten minutes
  // later; catch it here instead.
  const balance = (text) => {
    let depth = 0;
    let quote = null;
    for (let i = 0; i < text.length; i += 1) {
      const ch = text[i];
      if (quote) {
        if (ch === '\\') i += 1;
        else if (ch === quote) quote = null;
        continue;
      }
      if (ch === '/' && text[i + 1] === '/') {
        i = text.indexOf('\n', i);
        if (i === -1) break;
        continue;
      }
      if (ch === "'" || ch === '"' || ch === '`') quote = ch;
      else if (ch === '{') depth += 1;
      else if (ch === '}') depth -= 1;
    }
    return depth;
  };
  if (balance(ptText) !== 0 || balance(zhText) !== 0)
    throw new Error('refusing to write: braces would be unbalanced');

  writeFileSync(PT_FILE, ptText);
  writeFileSync(ZH_FILE, zhText);
  console.log(`applied ${drafts.length} article(s):`);
  for (const line of report) console.log(`  ${line}`);
  console.log('\nnext: npm run verify -- --prefix <disease>');
} else {
  console.error('commands: export <slug...> --out <file> | check <file> | apply <file>');
  process.exit(1);
}
