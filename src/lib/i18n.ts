import type { Locale } from '../types';

/**
 * The locale registry.
 *
 * Every URL, `lang` attribute and hreflang value in the site is derived from
 * this table, so adding a third language means one entry here plus its content
 * overrides — never an edit inside a page component.
 *
 * `pt-BR` is served from the root paths and `zh-Hant` under `/zh-Hant/`. Both
 * locales share the same slugs: `/zh-Hant/doencas/dengue/` is the Traditional
 * Chinese twin of `/doencas/dengue/`, which keeps hreflang pairing a pure
 * prefix swap.
 */
export const locales: readonly Locale[] = ['pt-BR', 'zh-Hant'];

export const defaultLocale: Locale = 'pt-BR';

export interface LocaleSpec {
  /** Value of the `<html lang>` attribute. */
  htmlLang: string;
  /** `og:locale` value, which uses the `language_COUNTRY` form. */
  ogLocale: string;
  /** The code advertised through `<link rel="alternate" hreflang>`. */
  hreflang: string;
  /** URL prefix. Empty for the locale served at the root. */
  prefix: string;
  /** Endonym for the language switcher — never translated. */
  label: string;
  /** The same endonym in its compact form, for the header below `lg`. */
  shortLabel: string;
  /** Whether text runs left-to-right. Both current locales do. */
  dir: 'ltr';
}

export const localeSpecs: Record<Locale, LocaleSpec> = {
  'pt-BR': {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    hreflang: 'pt-BR',
    prefix: '',
    label: 'Português (Brasil)',
    shortLabel: 'PT',
    dir: 'ltr',
  },
  'zh-Hant': {
    htmlLang: 'zh-Hant',
    ogLocale: 'zh_TW',
    hreflang: 'zh-Hant',
    prefix: '/zh-Hant',
    label: '繁體中文',
    shortLabel: '中文',
    dir: 'ltr',
  },
};

export const spec = (lang: Locale): LocaleSpec => localeSpecs[lang];

/**
 * Adds a locale prefix to an already canonical (leading and trailing slash)
 * path. Idempotent: a path that already carries the prefix is returned as is,
 * so localising a href found inside content data cannot double it.
 */
export function localizePath(path: string, lang: Locale): string {
  const { prefix } = spec(lang);
  if (!prefix) return path;
  if (path === prefix || path.startsWith(`${prefix}/`)) return path;
  return path === '/' ? `${prefix}/` : `${prefix}${path}`;
}

/** The same path with the prefix removed, i.e. its root-locale twin. */
export function rootPath(path: string): string {
  const zhPrefix = spec('zh-Hant').prefix;
  if (!path.startsWith(`${zhPrefix}/`)) return path;
  const stripped = path.slice(zhPrefix.length);
  return stripped === '' ? '/' : stripped;
}

/**
 * Every internal link in the site is built through this table, so the route
 * shape lives in one file and a locale is a prefix, not a second code path.
 */
export function urlsFor(lang: Locale) {
  const p = (path: string) => localizePath(path, lang);
  return {
    home: () => p('/'),
    diseases: () => p('/doencas/'),
    disease: (slug: string) => p(`/doencas/${slug}/`),
    articles: () => p('/artigos/'),
    article: (slug: string) => p(`/artigos/${slug}/`),
    topic: (slug: string) => p(`/temas/${slug}/`),
    regions: () => p('/por-regiao/'),
    region: (slug: string) => p(`/por-regiao/${slug}/`),
    search: (q?: string) => (q ? `${p('/busca/')}?q=${encodeURIComponent(q)}` : p('/busca/')),
    about: () => p('/sobre/'),
    editorial: () => p('/politica-editorial/'),
    medicalDisclaimer: () => p('/aviso-medico/'),
    privacy: () => p('/politica-de-privacidade/'),
    contact: () => p('/contato/'),
  };
}

export type Urls = ReturnType<typeof urlsFor>;

/** Substitutes `{name}` placeholders in a catalog string. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}

const MONTHS_PT = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

/**
 * Date formatting deliberately avoids Intl / toLocaleDateString: the Node ICU
 * data used at build time and the browser ICU data can disagree, which would
 * make the prerendered text differ from the text rendered on the client.
 * Pure string work keeps the two identical.
 */
export function formatDate(iso: string, lang: Locale): string {
  const [year, month, day] = iso.split('-').map(Number);
  if (!year || !month || !day || month < 1 || month > 12) return iso;
  if (lang === 'zh-Hant') return `${year} 年 ${month} 月 ${day} 日`;
  return `${day} de ${MONTHS_PT[month - 1]} de ${year}`;
}

/**
 * Query-side normalisation, mirrored by the index builder in `lib/content.ts`.
 *
 * Portuguese folds accents so "hipertensao" matches "hipertensão". Chinese must
 * not go through NFD: the decomposition/recomposition round trip is a no-op for
 * Han characters but can split a query into precomposed variants that no longer
 * match the indexed text, so it only gets casefolding.
 */
export function normalizeQuery(input: string, lang: Locale): string {
  if (lang === 'pt-BR') {
    return input
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
  return input.normalize('NFC').toLowerCase().trim();
}

/** Space-split tokenisation; a continuous Chinese query stays one substring term. */
export function queryTerms(input: string, lang: Locale): string[] {
  return normalizeQuery(input, lang)
    .split(/\s+/)
    .filter(Boolean);
}
