/**
 * Content model for Saudewiki.
 *
 * Pages are driven entirely by these types — no disease, article or topic may be
 * hard-coded inside a page component. Adding content means adding a data entry,
 * never editing a template.
 *
 * When a real CMS is introduced, these interfaces become the contract the CMS
 * payload must satisfy.
 */

/**
 * Editorial state of a piece of medical content.
 *
 * - draft        → not built at all (excluded from getStaticPaths, so it can
 *                  never appear in the sitemap, a list, or a link)
 * - needs_review → built and reachable, but rendered with a visible
 *                  "em revisão médica" notice
 * - reviewed     → medical review completed and recorded
 * - published    → reviewed and cleared for public release
 */
export type ReviewStatus = 'draft' | 'needs_review' | 'reviewed' | 'published';

/**
 * The languages the site is built in.
 *
 * `pt-BR` is the source of truth and is served from the root paths. `zh-Hant`
 * is an override layer: it only carries translated text, addressed by the same
 * slugs, so `/zh-Hant/doencas/dengue/` is the twin of `/doencas/dengue/`.
 * Structure, slugs, dates, review state and relations always come from the
 * Portuguese record.
 */
export type Locale = 'pt-BR' | 'zh-Hant';

export interface Reference {
  /** Human-readable title of the source document. */
  label: string;
  /** Deep link to the page that actually supports the statement. */
  url: string;
  /** Issuing body, e.g. "Ministério da Saúde". */
  publisher: string;
}

export interface ContentSection {
  /** Anchor id, also used to build the table of contents. */
  id: string;
  heading: string;
  /**
   * Body copy. A paragraph may carry inline links written as
   * `[label](/internal/path/)`; `lib/prose.ts` turns those into anchors and
   * `lib/i18n.ts` prefixes them for the locale being rendered.
   */
  paragraphs?: string[];
  bullets?: string[];
  /** Optional in-body call to action pointing at another page of this site. */
  cta?: { label: string; href: string };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Disease {
  id: string;
  slug: string;
  name: string;
  /**
   * Shorter variant used for `<title>` when `name` plus the page's suffix
   * would push the tag past 60 characters. The full name stays the H1.
   */
  metaTitle?: string;
  /** Search-only synonyms; never displayed as the primary name. */
  aliases?: string[];
  summary: string;
  category: string;
  categorySlug: string;
  sections: ContentSection[];
  faq?: FaqItem[];
  relatedArticleSlugs: string[];
  relatedTopicSlugs: string[];
  relatedDiseaseSlugs: string[];
  references: Reference[];
  author: string;
  /** null until a named reviewer has actually signed off. Never invent one. */
  reviewer: string | null;
  reviewStatus: ReviewStatus;
  publishedAt: string;
  updatedAt: string;
  /** true while the text is editorial scaffolding rather than verified copy. */
  isPlaceholder?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  /**
   * Shorter variant used for `<title>` when the headline would push the tag
   * past 60 characters. The headline stays the H1 either way.
   */
  metaTitle?: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  body: ContentSection[];
  diseaseSlugs: string[];
  topicSlugs: string[];
  relatedArticleSlugs: string[];
  references: Reference[];
  author: string;
  reviewer: string | null;
  reviewStatus: ReviewStatus;
  publishedAt: string;
  updatedAt: string;
  isPlaceholder?: boolean;
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** What this topic covers, shown on the topic page. */
  scope: string[];
  diseaseSlugs: string[];
  articleSlugs: string[];
  references: Reference[];
  reviewStatus: ReviewStatus;
}

/**
 * A place on the body, used by the home page's anatomy map and by the
 * `/por-regiao/` index.
 *
 * This is a second way of entering the same encyclopedia, not a new kind of
 * content: a region owns no text of its own about any disease. It holds a name,
 * one line describing what the place is, and the slugs of the diseases that
 * reach it. Which articles belong to a region is derived from the diseases
 * (`regionArticles` in `lib/content.ts`), never listed twice.
 *
 * A disease belongs to a region only when its own entry says that place is
 * affected. `dengue` lists "dor abdominal intensa" and "diminuição da urina"
 * among its warning signs, so it appears under `estomago-intestinos` and `rins`;
 * `hipertensao` never mentions the kidneys in its text, so it does not.
 */
export interface BodyRegion {
  id: string;
  slug: string;
  /** Shown on the map marker, on the tile and as the page H1. E.g. "Fígado". */
  name: string;
  /** One line saying what this place covers. Shown under the H1. */
  description: string;
  diseaseSlugs: string[];
  /**
   * Two prose blocks that make a region page useful even when the encyclopedia
   * has no entry for that place yet: what usually goes wrong with this part
   * worldwide, and what is typical (and why) in Portuguese-speaking countries.
   */
  globalOverview: string[];
  lusophoneOverview: string[];
  /**
   * Marker position as a percentage of the anatomy figure's own box, so it
   * survives any rendered size. Measured against `public/img/anatomia-corpo.webp`.
   */
  spot: { x: number; y: number };
  reviewStatus: ReviewStatus;
}

/**
 * Translation layer types.
 *
 * A `Localized*` record carries only the strings a reader sees in another
 * language. It never repeats an id, a slug, a date, a review state or a
 * relation: those are editorial facts owned by the Portuguese record, and
 * duplicating them would let the two languages drift apart.
 *
 * Sections are matched by `id`, references by `url`, so a translation cannot be
 * attached to the wrong paragraph just because someone reordered the source.
 * Internal `href`s stay root paths — `lib/i18n.localizePath` adds the prefix at
 * render time, which is why a translated CTA only carries its label.
 */

export interface LocalizedSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Label only; the link target is inherited from the source entry. */
  ctaLabel?: string;
}

/** Matched by `url` against the source entry's `references`. */
export interface LocalizedReference {
  url: string;
  label: string;
  publisher: string;
}

export interface LocalizedFaqItem {
  question: string;
  answer: string;
}

export interface LocalizedDisease {
  name: string;
  /** `<title>` variant. Omit it to let the generic suffix be used. */
  metaTitle?: string;
  aliases?: string[];
  summary: string;
  sections: LocalizedSection[];
  faq?: LocalizedFaqItem[];
  references?: LocalizedReference[];
}

export interface LocalizedArticle {
  title: string;
  metaTitle?: string;
  excerpt: string;
  body: LocalizedSection[];
  references?: LocalizedReference[];
}

export interface LocalizedTopic {
  title: string;
  description: string;
  /** Matched by position against `scope`, which is a flat list of lines. */
  scope: string[];
  references?: LocalizedReference[];
}

export interface LocalizedRegion {
  name: string;
  description: string;
  globalOverview?: string[];
  lusophoneOverview?: string[];
}

/**
 * Long-form institutional copy (about, editorial policy, privacy, contact).
 *
 * These pages used to hold their prose inside the template. They are content
 * like any other now: one record per page, rendered by a generic view, with a
 * translated twin addressed by the same slug.
 */
export interface StaticPageCard {
  title: string;
  description: string;
  /**
   * Glyph shown on the card, an `astro-icon` name. Presentation, not prose:
   * the source record owns it and a translation never restyles a card.
   */
  icon?: string;
}

export interface StaticPage {
  /** Route key, e.g. `sobre`. Never shown. */
  slug: string;
  title: string;
  description: string;
  h1: string;
  /** Lead paragraph under the H1. */
  intro?: string;
  /** Warning box, used by the privacy page while it is still a draft. */
  notice?: { title: string; body: string };
  /** Card row, used by the editorial statuses and the contact reasons. */
  cards?: StaticPageCard[];
  /** Section id the cards render after. Omitted means before the sections. */
  cardsAfter?: string;
  sections: ContentSection[];
  /**
   * Renders the project's mail address as the page's primary action. Structural,
   * so the source record owns it and every language gets the same button.
   */
  mailto?: boolean;
  /** Trailing paragraph, outside the prose sections. */
  outro?: string;
  /** ISO date shown as "Última atualização" where the document declares one. */
  updatedAt?: string;
}

