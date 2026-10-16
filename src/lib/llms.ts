import type { ContentSection, Locale } from '../types';
import { SITE } from '../data/site';
import { parseInline } from './prose';

/**
 * Shared plumbing for the two machine-readable files, `/llms.txt` and
 * `/llms-full.txt`.
 *
 * Both are read by models rather than by people, and both have to turn content
 * that was written for a page into plain text. Keeping that conversion here
 * means the two files cannot disagree about what a link marker is or how a URL
 * is made absolute.
 *
 * The link marker itself is not parsed here: `lib/prose.ts` owns that rule,
 * because the page renderer uses it too. A second regex would be a second
 * definition of a link, and the two would drift the first time the syntax
 * changed.
 */

/** Absolute URL for a site-root path, following the configured domain. */
export const absUrl = (path: string): string => new URL(path, SITE.url).toString();

/**
 * A content string as plain text, with absolute links.
 *
 * Body copy carries inline links as `[label](/internal/path/)`. A text file has
 * no markup, so each link becomes `label (absolute url)`: the label stays
 * readable and the target stays followable.
 */
export const inlineText = (raw: string, lang: Locale): string =>
  parseInline(raw, lang)
    .map((part) => (part.kind === 'link' ? `${part.value} (${absUrl(part.href)})` : part.value))
    .join('');

/**
 * A `ContentSection` as plain text: heading, paragraphs, bullets, and the label
 * of any in-body call to action.
 *
 * The CTA's target is deliberately not printed. It points at another page of
 * this site, and every page of this site is listed in `/llms.txt` with its own
 * URL, so repeating it here would be a second copy of the same fact.
 */
export const sectionText = (section: ContentSection, lang: Locale, level = 4): string => {
  const lines: string[] = [`${'#'.repeat(level)} ${section.heading}`];
  for (const paragraph of section.paragraphs ?? []) lines.push(inlineText(paragraph, lang));
  for (const bullet of section.bullets ?? []) lines.push(`- ${inlineText(bullet, lang)}`);
  if (section.cta) lines.push(`- ${section.cta.label}`);
  return lines.join('\n\n');
};

/** A numbered reference list, one per line. */
export const referenceText = (
  references: { label: string; publisher: string; url: string }[],
  level = 4,
  title = 'Referências'
): string => {
  if (!references.length) return '';
  const rows = references.map((ref, index) => `${index + 1}. ${ref.label}, ${ref.publisher}, ${ref.url}`);
  return `${'#'.repeat(level)} ${title}\n\n${rows.join('\n')}`;
};
