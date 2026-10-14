import type { Locale } from '../types';
import { localizePath } from './i18n';

/**
 * The `[label](/internal/path/)` markers used inside body copy, turned into
 * link segments.
 *
 * Only internal paths are recognised on purpose. A translator must not be able
 * to introduce an outbound link by writing a URL into a paragraph: external
 * sources live in `references`, where publisher and label are separate fields.
 */
export type InlinePart =
  | { kind: 'text'; value: string }
  | { kind: 'link'; value: string; href: string };

const MARKER = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function parseInline(raw: string, lang: Locale): InlinePart[] {
  const parts: InlinePart[] = [];
  let cursor = 0;

  for (const match of raw.matchAll(MARKER)) {
    const index = match.index ?? 0;
    if (index > cursor) parts.push({ kind: 'text', value: raw.slice(cursor, index) });
    parts.push({ kind: 'link', value: match[1], href: localizePath(match[2], lang) });
    cursor = index + match[0].length;
  }

  if (cursor < raw.length) parts.push({ kind: 'text', value: raw.slice(cursor) });
  return parts;
}
