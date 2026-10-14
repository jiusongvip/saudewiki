import type { Article, Disease, ReviewStatus, Topic } from '../types';
import { diseases } from '../data/diseases';
import { articles } from '../data/articles';
import { topics } from '../data/topics';

/**
 * The single gate between raw data and everything the site renders.
 *
 * Nothing outside this module should read `src/data/*` directly. Keeping the
 * filter in one place is what guarantees that a `draft` entry can never leak
 * into a list, a link, a search result or the sitemap — it simply is not part
 * of any exported collection.
 */
const isBuildable = (status: ReviewStatus) => status !== 'draft';

export const publishedDiseases: Disease[] = diseases.filter((d) => isBuildable(d.reviewStatus));
export const publishedArticles: Article[] = articles.filter((a) => isBuildable(a.reviewStatus));
export const publishedTopics: Topic[] = topics.filter((t) => isBuildable(t.reviewStatus));

export const getDisease = (slug: string): Disease | undefined =>
  publishedDiseases.find((d) => d.slug === slug);

export const getArticle = (slug: string): Article | undefined =>
  publishedArticles.find((a) => a.slug === slug);

export const getTopic = (slug: string): Topic | undefined =>
  publishedTopics.find((t) => t.slug === slug);

/** Resolve a list of slugs, silently dropping anything that does not exist. */
export const resolveDiseases = (slugs: string[]): Disease[] =>
  slugs.map(getDisease).filter((d): d is Disease => Boolean(d));

export const resolveArticles = (slugs: string[]): Article[] =>
  slugs.map(getArticle).filter((a): a is Article => Boolean(a));

export const resolveTopics = (slugs: string[]): Topic[] =>
  slugs.map(getTopic).filter((t): t is Topic => Boolean(t));

/**
 * URL builders. Every internal link in the site goes through these, so a route
 * shape change happens in one file.
 */
export const url = {
  home: () => '/',
  diseases: () => '/doencas/',
  disease: (slug: string) => `/doencas/${slug}/`,
  articles: () => '/artigos/',
  article: (slug: string) => `/artigos/${slug}/`,
  topics: () => '/temas/',
  topic: (slug: string) => `/temas/${slug}/`,
  search: (q?: string) => (q ? `/busca/?q=${encodeURIComponent(q)}` : '/busca/'),
  about: () => '/sobre/',
  editorial: () => '/politica-editorial/',
  privacy: () => '/politica-de-privacidade/',
  contact: () => '/contato/',
};

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
export function formatDatePtBr(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  if (!year || !month || !day || month < 1 || month > 12) return iso;
  return `${day} de ${MONTHS_PT[month - 1]} de ${year}`;
}

/** Strip accents so "hipertensao" matches "hipertensão" in search. */
export function normalize(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export interface SearchEntry {
  title: string;
  excerpt: string;
  href: string;
  type: 'doenca' | 'artigo' | 'tema';
  typeLabel: string;
  /** Pre-normalised haystack: title + aliases + excerpt + category. */
  haystack: string;
}

/**
 * Built once at build time and inlined into /busca/ as JSON. When a backend
 * search service is introduced, only this function's consumer changes — the
 * page keeps calling the same `search()` contract.
 */
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const d of publishedDiseases) {
    entries.push({
      title: d.name,
      excerpt: d.summary,
      href: url.disease(d.slug),
      type: 'doenca',
      typeLabel: 'Doença',
      haystack: normalize([d.name, ...(d.aliases ?? []), d.summary, d.category].join(' ')),
    });
  }

  for (const a of publishedArticles) {
    entries.push({
      title: a.title,
      excerpt: a.excerpt,
      href: url.article(a.slug),
      type: 'artigo',
      typeLabel: 'Artigo',
      haystack: normalize([a.title, a.excerpt, a.category].join(' ')),
    });
  }

  for (const t of publishedTopics) {
    entries.push({
      title: t.title,
      excerpt: t.description,
      href: url.topic(t.slug),
      type: 'tema',
      typeLabel: 'Tema',
      haystack: normalize([t.title, t.description, ...t.scope].join(' ')),
    });
  }

  return entries;
}

/** Popular searches shown under the hero and the search box. */
export const popularSearches = ['Dengue', 'Diabetes', 'Hipertensão', 'Vacinação', 'Saúde da mulher'];

/** Navigation model shared by the header and the footer. */
export const navItems = [
  { label: 'Doenças', href: url.diseases() },
  { label: 'Artigos', href: url.articles() },
  { label: 'Temas de saúde', href: url.topics() },
  { label: 'Sobre nós', href: url.about() },
];
