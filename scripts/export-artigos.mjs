// Export a selection of the Portuguese disease entries as Markdown.
// Run with: node scripts/export-artigos.mjs
//
// The target is the separate public content repository (`../saudewiki-artigos`,
// published as github.com/jiusongvip/saudewiki-artigos): a shelf of complete
// articles, not the source code of the site.
//
// It is a generator rather than a folder of hand-copied files for the same
// reason `/llms.txt` is one: the prose lives in `src/data/diseases.ts`, and a
// second copy of it would disagree with the first the moment someone edits the
// page. Every string, heading, FAQ, source and date below is read from the
// records the site itself renders, through `contentFor('pt-BR')`, and every URL
// goes through the same `urls` helper, so the exported link is the page's link.
//
// Only Portuguese is exported. The Chinese tree is a translation layer over these
// records; publishing both would put two versions of the same claim out into the
// world at once, with nothing to say which one a correction should follow.
//
// Drafts are refused, not exported: `reviewStatus: 'draft'` means the entry is
// still a shell, and a shell on a public shelf reads as the quality of the site.
import { mkdirSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = fileURLToPath(new URL('../../saudewiki-artigos/', import.meta.url));

/**
 * The ten entries the shelf carries: the most-searched conditions in the
 * encyclopedia, spread across both categories rather than concentrated in the
 * mosquito-borne cluster. Change a slug and the file is rewritten on the next
 * run; remove one and its exported file is deleted with the rest.
 */
const SELECTED = [
  'dengue',
  'chikungunya',
  'tuberculose',
  'hiv-aids',
  'faringite-e-amigdalite',
  'gastroenterite',
  'asma',
  'diabetes',
  'hipertensao',
  'infarto-e-avc',
];

/**
 * The few sentences that exist only here, because no page of the site needed
 * them: they describe the repository, not the content.
 */
const SHELF = {
  h1: (name) => `Artigos de saúde do ${name}`,
  lead: (name, home) =>
    `Este repositório publica em Markdown o texto completo de uma seleção de verbetes do [${name}](${home}). A versão de referência de cada texto é a página do site: é lá que correções e atualizações aparecem primeiro.`,
  index: 'Índice',
  about: 'Sobre o conteúdo',
  authorship: 'Autoria',
  sourcesLabel: 'Fontes',
  languages: 'Idiomas',
  beforeActing: 'Antes de agir',
  corrections: 'Correções',
  pageOnSite: (name) => `Página deste verbete: [${name}]`,
  secondLanguage: (label, url) => `o site publica a versão em chinês tradicional em [${label}](${url})`,
  write: (url) => `escreva pela [página de contato](${url})`,
};

const bundle = await esbuild.build({
  stdin: {
    contents: `
      export { contentFor } from './src/lib/content';
      export { ui } from './src/i18n/ui';
      export { SITE } from './src/data/site';
      export { parseInline } from './src/lib/prose';
    `,
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

const lang = 'pt-BR';
const c = mod.contentFor(lang);
const t = mod.ui[lang];
const abs = (path) => new URL(path, mod.SITE.url).toString();

/**
 * Labels copied out of the interface, checked before anything is written: a
 * renamed key would otherwise publish a silent `undefined` into a file nobody
 * reads twice.
 */
const LABELS = {
  faq: t.diseasePage.faq,
  sources: t.common.sources,
  sourcesNote: t.common.sourcesNote,
  disclaimer: t.common.disclaimer,
  disclaimerLink: t.common.disclaimerLink,
  author: t.site.authorTeam,
  mission: t.site.mission,
  editorial: t.footer.editorial,
  disclaimerPage: t.footer.disclaimer,
};
const missing = Object.entries(LABELS).filter(([, value]) => typeof value !== 'string' || !value);
if (missing.length) {
  console.error(`export stopped, empty ui label(s): ${missing.map(([key]) => key).join(', ')}`);
  process.exit(1);
}

/**
 * Body copy as Markdown.
 *
 * `[label](/internal/path/)` markers become absolute site links: a reader inside
 * the repository has no site root to resolve a bare path against, and a dead
 * relative link in a plain file is worse than no link.
 */
const md = (raw) =>
  mod
    .parseInline(raw, lang)
    .map((part) => (part.kind === 'link' ? `[${part.value}](${abs(part.href)})` : part.value))
    .join('');

function article(d) {
  const url = abs(c.urls.disease(d.slug));
  const parts = [
    [
      '---',
      `title: ${JSON.stringify(d.name)}`,
      `description: ${JSON.stringify(d.summary)}`,
      `aliases: ${JSON.stringify(d.aliases ?? [])}`,
      `category: ${JSON.stringify(d.category)}`,
      `dateModified: ${JSON.stringify(d.updatedAt)}`,
      `author: ${JSON.stringify(LABELS.author)}`,
      `url: ${JSON.stringify(url)}`,
      'lang: pt-BR',
      '---',
    ].join('\n'),
    `# ${d.name}\n\n${md(d.summary)}`,
  ];

  for (const section of d.sections) {
    const lines = [`## ${md(section.heading)}`];
    for (const paragraph of section.paragraphs ?? []) lines.push(md(paragraph));
    if (section.bullets?.length) lines.push(section.bullets.map((b) => `- ${md(b)}`).join('\n'));
    if (section.cta) lines.push(`[${md(section.cta.label)}](${abs(section.cta.href)})`);
    parts.push(lines.join('\n\n'));
  }

  if (d.faq?.length) {
    parts.push(`## ${LABELS.faq}`, ...d.faq.map((item) => `### ${md(item.question)}\n\n${md(item.answer)}`));
  }

  if (d.references?.length) {
    parts.push(
      [
        `## ${LABELS.sources}`,
        LABELS.sourcesNote,
        d.references.map((ref, index) => `${index + 1}. [${ref.label}](${ref.url}) — ${ref.publisher}`).join('\n'),
      ].join('\n\n')
    );
  }

  parts.push(
    [
      '---',
      LABELS.disclaimer,
      `[${LABELS.disclaimerPage}](${abs('/aviso-medico/')}) · ${SHELF.pageOnSite(d.name)}(${url})`,
    ].join('\n\n')
  );

  return `${parts.join('\n\n').trim()}\n`;
}

mkdirSync(`${outDir}artigos`, { recursive: true });

const chosen = [];
for (const slug of SELECTED) {
  const d = c.diseases.find((item) => item.slug === slug);
  if (!d) {
    console.error(`export skipped: no disease with slug "${slug}".`);
    process.exitCode = 1;
    continue;
  }
  if (d.reviewStatus === 'draft') {
    console.error(`export skipped: "${slug}" is still a draft (${d.sections.length} section(s)).`);
    process.exitCode = 1;
    continue;
  }
  chosen.push(d);
  writeFileSync(`${outDir}artigos/${slug}.md`, article(d), 'utf8');
}

/* A slug taken off the list must not leave its old file on the shelf. */
const keep = new Set(SELECTED.map((slug) => `${slug}.md`));
for (const file of readdirSync(`${outDir}artigos`)) {
  if (file.endsWith('.md') && !keep.has(file)) rmSync(`${outDir}artigos/${file}`);
}

const zhHome = abs('/zh-Hant/');
/* Anchor text without the scheme: the same target, one line shorter to read. */
const zhLabel = zhHome.replace(/^https?:\/\//, '');
writeFileSync(
  `${outDir}README.md`,
  `# ${SHELF.h1(mod.SITE.name)}

${LABELS.mission}

${SHELF.lead(mod.SITE.name, abs('/'))}

## ${SHELF.index}

${chosen.map((d) => `- [${d.name}](artigos/${d.slug}.md) — ${d.summary}`).join('\n')}

## ${SHELF.about}

- **${SHELF.authorship}:** ${LABELS.author}. O processo editorial está descrito em
  [${LABELS.editorial}](${abs('/politica-editorial/')}).
- **${SHELF.sourcesLabel}:** cada arquivo termina com a lista de documentos oficiais usados na
  redação, com o link direto para cada um deles.
- **${SHELF.languages}:** português do Brasil aqui; ${SHELF.secondLanguage(zhLabel, zhHome)}.
- **${SHELF.beforeActing}:** leia o [${LABELS.disclaimerPage}](${abs('/aviso-medico/')}).
- **${SHELF.corrections}:** encontrou um erro? ${SHELF.write(abs('/contato/'))}; cada verbete tem
  na página do site um pedido de correção aberto.
`,
  'utf8'
);

console.log(
  `exported ${chosen.length} article(s) into ${outDir}artigos — ` +
    chosen.map((d) => d.slug).join(', ')
);
