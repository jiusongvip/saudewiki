import type { Locale } from '../types';
import { localizePath } from './i18n';

/**
 * The `[label](target)` markers used inside body copy, turned into link
 * segments.
 *
 * `target` is either an internal path (`/doencas/dengue/`) or an outbound URL
 * on one of `CITED_HOSTS`. The outbound case exists so a paragraph can name the
 * source it is drawing on, which is what a reader, and an answer engine, treats
 * as a citation. A host outside that list throws during rendering instead of
 * shipping as a dead marker: the point of the allowlist is that a translator
 * cannot turn body copy into a link farm, and a typo cannot fail silently.
 */
export type InlinePart =
  | { kind: 'text'; value: string }
  | { kind: 'link'; value: string; href: string; external: boolean };

/** Hosts body copy may cite inline. Mirrors the sources used in `references`. */
const CITED_HOSTS = ['who.int', 'gov.br', 'cdc.gov', 'nih.gov', 'europa.eu'];

const MARKER = /\[([^\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g;

const isInternal = (target: string): boolean => target.startsWith('/');

function assertCitable(href: string, label: string): void {
  let host: string;
  try {
    host = new URL(href).hostname.toLowerCase();
  } catch {
    throw new Error(`prose: the link "${label}" points at "${href}", which is not a valid URL.`);
  }
  const allowed = CITED_HOSTS.some((domain) => host === domain || host.endsWith(`.${domain}`));
  if (!allowed) {
    throw new Error(
      `prose: the link "${label}" points at "${href}", outside the citable hosts ` +
        `(${CITED_HOSTS.join(', ')}). Add the domain to CITED_HOSTS, or move the source to references.`,
    );
  }
}

export function parseInline(raw: string, lang: Locale): InlinePart[] {
  const parts: InlinePart[] = [];
  let cursor = 0;

  for (const match of raw.matchAll(MARKER)) {
    const index = match.index ?? 0;
    const target = match[2];
    const internal = isInternal(target);
    if (!internal) assertCitable(target, match[1]);

    if (index > cursor) parts.push({ kind: 'text', value: raw.slice(cursor, index) });
    parts.push({
      kind: 'link',
      value: match[1],
      href: internal ? localizePath(target, lang) : target,
      external: !internal,
    });
    cursor = index + match[0].length;
  }

  if (cursor < raw.length) parts.push({ kind: 'text', value: raw.slice(cursor) });
  return parts;
}
