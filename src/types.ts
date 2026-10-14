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
