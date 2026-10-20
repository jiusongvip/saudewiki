/**
 * The numbers the article gates agree on, in one place.
 *
 * `check-editorial.mjs` fails a build on them and `verify.mjs` prints them as a
 * table, so the two must not drift: a table that says "1050 words, ok" while
 * the gate counts 890 is worse than no table at all. Import from here.
 */

/** Body length in words, counted over `paragraphs` + `bullets` only. */
export const ARTICLE_WORDS = { min: 900, max: 1200 };

/**
 * Word boundary used everywhere. A word starts with a letter or digit and may
 * carry apostrophes or hyphens, so `d'água` and `recém-nascido` count once.
 */
const WORD = /[\p{L}\p{N}][\p{L}\p{N}'-]*/gu;

export const countWords = (text) => (String(text ?? '').match(WORD) ?? []).length;

/** The prose a reader actually reads: headings and CTA labels are structure. */
export const bodyText = (article) =>
  (article.body ?? [])
    .flatMap((section) => [...(section.paragraphs ?? []), ...(section.bullets ?? [])])
    .join(' ');

export const articleWords = (article) => countWords(bodyText(article));

/** The checklist asks for 2 to 3 paragraphs per section; this is the floor. */
export const SECTION_PARAGRAPHS = { min: 2, max: 3 };

/** Section ids the views own; an article may not reuse them. */
export const RESERVED_SECTION_IDS = [
  'perguntas-frequentes',
  'artigos-relacionados',
  'temas-relacionados',
  'outras-doencas',
  'correcao',
];

/** Stable ASCII kebab, as the slug rules require. */
export const isKebab = (slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);

/**
 * How to split a word budget across the sections an article needs.
 * Returns whole numbers that sum to the middle of the band, so a writer can
 * aim per section instead of discovering the total was short at the end.
 */
export function wordBudget(sections, target = Math.round((ARTICLE_WORDS.min + ARTICLE_WORDS.max) / 2)) {
  const base = Math.floor(target / sections);
  const rest = target - base * sections;
  return Array.from({ length: sections }, (_, i) => base + (i < rest ? 1 : 0));
}
