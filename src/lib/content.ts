import type {
  Article,
  BodyRegion,
  ContentSection,
  Disease,
  Locale,
  LocalizedArticle,
  LocalizedDisease,
  LocalizedReference,
  LocalizedSection,
  LocalizedTopic,
  ReviewStatus,
  StaticPage,
  Topic,
} from '../types';
import { ui } from '../i18n/ui';
import { formatDate, localizePath, normalizeQuery, urlsFor } from './i18n';
import { diseases } from '../data/diseases';
import { articles } from '../data/articles';
import { topics } from '../data/topics';
import { regions } from '../data/regions';
import { staticPages } from '../data/pages';
import { categoryGuides, listGuides, type GuidePage } from '../data/guides';
import { zhDiseases } from '../data/zh-Hant/diseases';
import { zhArticles } from '../data/zh-Hant/articles';
import { zhTopics } from '../data/zh-Hant/topics';
import { zhRegions } from '../data/zh-Hant/regions';
import { zhStaticPages } from '../data/zh-Hant/pages';
import { zhCategories } from '../data/zh-Hant/categories';
import { zhCategoryGuides, zhListGuides } from '../data/zh-Hant/guides';

/**
 * The single gate between raw data and everything the site renders.
 *
 * Nothing outside this module should read `src/data/*` directly. Keeping the
 * filter in one place is what guarantees that a `draft` entry can never leak
 * into a list, a link, a search result or the sitemap — it simply is not part
 * of any exported collection.
 *
 * The second job here is locale. `pt-BR` records are the editorial source of
 * truth; a `zh-Hant` record is an override of visible text only, matched by
 * slug and, inside it, by section id and reference url. Slugs, dates, review
 * state, relations and anchors therefore exist once, in Portuguese, and cannot
 * disagree with their translation.
 */
const isBuildable = (status: ReviewStatus) => status !== 'draft';

/** An unfilled translation slot falls back to the source language, never blank. */
const categoryLabel = (lang: Locale, slug: string, fallback: string): string =>
  (lang === 'pt-BR' ? undefined : zhCategories[slug]) || fallback;

function localizeSections(
  source: ContentSection[],
  translated: LocalizedSection[] | undefined
): ContentSection[] {
  if (!translated) return source;
  return source.map((section) => {
    const match = translated.find((item) => item.id === section.id);
    if (!match) return section;
    return {
      ...section,
      heading: match.heading,
      paragraphs: match.paragraphs ?? section.paragraphs,
      bullets: match.bullets ?? section.bullets,
      cta: section.cta && match.ctaLabel ? { ...section.cta, label: match.ctaLabel } : section.cta,
    };
  });
}

/** References keep their url from the source; only the visible naming changes. */
function localizeReferences(
  source: ReferenceList,
  translated: LocalizedReference[] | undefined
): ReferenceList {
  if (!translated) return source;
  return source.map((reference) => {
    const match = translated.find((item) => item.url === reference.url);
    return match ? { ...reference, label: match.label, publisher: match.publisher } : reference;
  });
}

type ReferenceList = Disease['references'];

function localizeDisease(disease: Disease, lang: Locale): Disease {
  if (lang === 'pt-BR') return disease;
  const zh: LocalizedDisease | undefined = zhDiseases[disease.slug];
  if (!zh) return disease;
  return {
    ...disease,
    name: zh.name,
    metaTitle: zh.metaTitle ?? disease.metaTitle,
    aliases: zh.aliases ?? disease.aliases,
    summary: zh.summary,
    category: categoryLabel(lang, disease.categorySlug, disease.category),
    sections: localizeSections(disease.sections, zh.sections),
    faq: disease.faq?.map((item, index) => {
      const translated = zh.faq?.[index];
      return translated
        ? { question: translated.question, answer: translated.answer }
        : item;
    }),
    references: localizeReferences(disease.references, zh.references),
    author: ui[lang].site.authorTeam,
  };
}

function localizeArticle(article: Article, lang: Locale): Article {
  if (lang === 'pt-BR') return article;
  const zh: LocalizedArticle | undefined = zhArticles[article.slug];
  if (!zh) return article;
  return {
    ...article,
    title: zh.title,
    metaTitle: zh.metaTitle ?? article.metaTitle,
    excerpt: zh.excerpt,
    category: categoryLabel(lang, article.categorySlug, article.category),
    body: localizeSections(article.body, zh.body),
    references: localizeReferences(article.references, zh.references),
    author: ui[lang].site.authorTeam,
  };
}

function localizeTopic(topic: Topic, lang: Locale): Topic {
  if (lang === 'pt-BR') return topic;
  const zh: LocalizedTopic | undefined = zhTopics[topic.slug];
  if (!zh) return topic;
  return {
    ...topic,
    title: zh.title,
    description: zh.description,
    scope: zh.scope ?? topic.scope,
    references: localizeReferences(topic.references, zh.references),
  };
}

function localizeRegion(region: BodyRegion, lang: Locale): BodyRegion {
  if (lang === 'pt-BR') return region;
  const zh = zhRegions[region.slug];
  if (!zh) return region;
  return {
    ...region,
    name: zh.name,
    description: zh.description,
    globalOverview: zh.globalOverview ?? region.globalOverview,
    lusophoneOverview: zh.lusophoneOverview ?? region.lusophoneOverview,
  };
}

function localizePage(page: StaticPage, lang: Locale): StaticPage {
  if (lang === 'pt-BR') return page;
  const zh = zhStaticPages.find((item) => item.slug === page.slug);
  if (!zh) return page;
  return {
    ...page,
    title: zh.title,
    description: zh.description,
    h1: zh.h1,
    intro: zh.intro ?? page.intro,
    notice: zh.notice ?? page.notice,
    /** A translated card restates prose only; the source record keeps the glyph. */
    cards: zh.cards
      ? zh.cards.map((card, index) => ({ ...card, icon: page.cards?.[index]?.icon }))
      : page.cards,
    cardsAfter: zh.cardsAfter ?? page.cardsAfter,
    outro: zh.outro ?? page.outro,
    sections: localizeSections(page.sections, zh.sections),
  };
}

export interface LocaleContent {
  lang: Locale;
  diseases: Disease[];
  articles: Article[];
  topics: Topic[];
  regions: BodyRegion[];
  pages: StaticPage[];
  getDisease: (slug: string) => Disease | undefined;
  getArticle: (slug: string) => Article | undefined;
  getTopic: (slug: string) => Topic | undefined;
  getRegion: (slug: string) => BodyRegion | undefined;
  getPage: (slug: string) => StaticPage | undefined;
  /** The diseases behind a region, in this locale. */
  regionDiseases: (region: BodyRegion) => Disease[];
  /**
   * Articles are not listed by a region: an article names the diseases it
   * belongs to, so deriving them here keeps one fact in one place.
   */
  regionArticles: (region: BodyRegion) => Article[];
  regionCounts: (region: BodyRegion) => { diseases: number; articles: number; total: number };
  /**
   * Guide prose of a list page, in this locale. Written once per page in
   * `data/guides.ts`, so the disease list and the article list cannot describe
   * the same editorial rule in two different ways.
   */
  guide: (page: GuidePage) => ContentSection[];
  /**
   * The definition of a group, addressed by `categorySlug`. The same text is
   * shown wherever the group appears: under the disease list, under the article
   * list, and on the topic page that carries that slug.
   */
  categoryGuide: (slug: string) => ContentSection[];
  urls: ReturnType<typeof urlsFor>;
  searchIndex: SearchEntry[];
}

const cache = new Map<Locale, LocaleContent>();

/**
 * Everything a page needs for one language, built once per locale per build.
 *
 * `pt-BR` returns the source records themselves; `zh-Hant` returns merged
 * copies. Callers never branch on language for data — they ask for a locale and
 * receive a complete, self-consistent set of collections and links.
 */
export function contentFor(lang: Locale): LocaleContent {
  const existing = cache.get(lang);
  if (existing) return existing;

  const urls = urlsFor(lang);

  const buildable = <T extends { reviewStatus: ReviewStatus }>(
    source: T[],
    pick: (item: T, lang: Locale) => T
  ) => source.filter((item) => isBuildable(item.reviewStatus)).map((item) => pick(item, lang));

  const localizedDiseases = buildable(diseases, localizeDisease);
  const localizedArticles = buildable(articles, localizeArticle);
  const localizedTopics = buildable(topics, localizeTopic);
  const localizedRegions = buildable(regions, localizeRegion);

  const byDisease = new Map(localizedDiseases.map((item) => [item.slug, item]));
  const byArticle = new Map(localizedArticles.map((item) => [item.slug, item]));
  const byTopic = new Map(localizedTopics.map((item) => [item.slug, item]));
  const byRegion = new Map(localizedRegions.map((item) => [item.slug, item]));

  const resolveDiseases = (slugs: string[]): Disease[] =>
    slugs.map((slug) => byDisease.get(slug)).filter((item): item is Disease => Boolean(item));
  const resolveArticles = (slugs: string[]): Article[] =>
    slugs.map((slug) => byArticle.get(slug)).filter((item): item is Article => Boolean(item));

  const regionDiseases = (region: BodyRegion): Disease[] => resolveDiseases(region.diseaseSlugs);
  const regionArticles = (region: BodyRegion): Article[] => {
    const slugs = new Set(region.diseaseSlugs);
    return localizedArticles.filter((article) => article.diseaseSlugs.some((slug) => slugs.has(slug)));
  };
  const regionCounts = (region: BodyRegion) => {
    const here = regionDiseases(region).length;
    const read = regionArticles(region).length;
    return { diseases: here, articles: read, total: here + read };
  };

  const content: LocaleContent = {
    lang,
    diseases: localizedDiseases,
    articles: localizedArticles,
    topics: localizedTopics,
    regions: localizedRegions,
    pages: staticPages.map((page) => localizePage(page, lang)),
    getDisease: (slug) => byDisease.get(slug),
    getArticle: (slug) => byArticle.get(slug),
    getTopic: (slug) => byTopic.get(slug),
    getRegion: (slug) => byRegion.get(slug),
    getPage: (slug) => content.pages.find((page) => page.slug === slug),
    regionDiseases,
    regionArticles,
    regionCounts,
    guide: (page) =>
      localizeSections(listGuides[page] ?? [], lang === 'pt-BR' ? undefined : zhListGuides[page]),
    categoryGuide: (slug) =>
      localizeSections(categoryGuides[slug] ?? [], lang === 'pt-BR' ? undefined : zhCategoryGuides[slug]),
    urls,
    searchIndex: [],
  };

  content.searchIndex = buildSearchIndex(content);
  cache.set(lang, content);
  return content;
}

/**
 * Internal hrefs stored in content data are root paths. A page renders them
 * through its own locale so a Portuguese link inside a Chinese paragraph does
 * not drop the reader out of the language.
 */
export const localizedHref = (href: string, lang: Locale): string => localizePath(href, lang);

/**
 * Date formatting is delegated to `lib/i18n.ts`, which keeps both languages as
 * pure string work: the Node ICU data used at build time and the browser ICU
 * data can disagree, which would make prerendered text differ from client text.
 */
export const formatDateFor = (iso: string, lang: Locale): string => formatDate(iso, lang);

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
 * Built once per locale at build time and inlined into that locale's /busca/.
 * A page only ever searches its own language: a Chinese query against
 * Portuguese copy returns noise, and the reader already has the other language
 * one click away in the header.
 */
function buildSearchIndex(content: LocaleContent): SearchEntry[] {
  const t = ui[content.lang];
  const normalise = (value: string) => normalizeQuery(value, content.lang);
  const entries: SearchEntry[] = [];

  for (const disease of content.diseases) {
    entries.push({
      title: disease.name,
      excerpt: disease.summary,
      href: content.urls.disease(disease.slug),
      type: 'doenca',
      typeLabel: t.search.typeDisease,
      haystack: normalise(
        [disease.name, ...(disease.aliases ?? []), disease.summary, disease.category].join(' ')
      ),
    });
  }

  for (const article of content.articles) {
    entries.push({
      title: article.title,
      excerpt: article.excerpt,
      href: content.urls.article(article.slug),
      type: 'artigo',
      typeLabel: t.search.typeArticle,
      haystack: normalise([article.title, article.excerpt, article.category].join(' ')),
    });
  }

  for (const topic of content.topics) {
    entries.push({
      title: topic.title,
      excerpt: topic.description,
      href: content.urls.topic(topic.slug),
      type: 'tema',
      typeLabel: t.search.typeTopic,
      haystack: normalise([topic.title, topic.description, ...topic.scope].join(' ')),
    });
  }

  return entries;
}

/** Navigation model shared by the header and the footer, for one locale. */
export function navItems(lang: Locale) {
  const t = ui[lang];
  const urls = urlsFor(lang);
  return [
    { label: t.nav.diseases, href: urls.diseases() },
    { label: t.nav.regions, href: urls.regions() },
    { label: t.nav.articles, href: urls.articles() },
    { label: t.nav.about, href: urls.about() },
  ];
}

/** Popular searches shown under the hero and the search box. */
export const popularSearches = (lang: Locale): string[] => [...ui[lang].search.popular];
