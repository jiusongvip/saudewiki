import { articles } from '../data/articles';
import { diseases } from '../data/diseases';
import { staticPages } from '../data/pages';
import { regions } from '../data/regions';
import { topics } from '../data/topics';
import type { ReviewStatus } from '../types';

/*
 * Per-page `<lastmod>` for the sitemap.
 *
 * `@astrojs/sitemap` can only set `lastmod` site-wide through its config, so a
 * single date string stamps all 166 URLs with the same day. That is not merely
 * useless — it contradicts the pages themselves, which already print each
 * entry's `updatedAt` as "Última atualização" and publish it as the schema.org
 * `dateModified`. A sitemap that disagrees with the page it points at is a date
 * Google stops trusting.
 *
 * So the dates come from the content records, under the rules the views already
 * use: an entry answers with its own `updatedAt`, and a page with no body of its
 * own answers with the newest date across what it lists. Drafts are excluded
 * because they are never built, so they cannot be what a list last changed.
 */

/** Mirrors `isBuildable` in `content.ts`: a draft never reaches a build. */
const buildable = <T extends { reviewStatus: ReviewStatus }>(items: T[]) =>
  items.filter((item) => item.reviewStatus !== 'draft');

const publishedArticles = buildable(articles);
const publishedDiseases = buildable(diseases);
const diseasesIn = (slugs: string[]) => publishedDiseases.filter((d) => slugs.includes(d.slug));
const articlesIn = (slugs: string[]) => publishedArticles.filter((a) => slugs.includes(a.slug));

/** Newest ISO date in the list, or `undefined` when nothing carries one. */
const newest = (dates: (string | undefined)[]) =>
  dates.reduce<string | undefined>(
    (latest, d) => (!d ? latest : !latest || d > latest ? d : latest),
    undefined
  );

/*
 * Keys are pathnames without the trailing slash, home being `/`. Both sides go
 * through `key()` because the sitemap writes `/artigos/` while the house rule
 * serves the root home as `/` with no slash at all.
 */
const key = (locale: string, path: string) => `${locale}${path}`.replace(/\/$/, '') || '/';

const lastmod = new Map<string, string | undefined>();

/** Registers a path for both locales: `pt-BR` at the root, `zh-Hant` prefixed. */
const add = (path: string, date: string | undefined) => {
  lastmod.set(key('', path), date);
  lastmod.set(key('/zh-Hant', path), date);
};

for (const article of publishedArticles) add(`/artigos/${article.slug}`, article.updatedAt);
for (const disease of publishedDiseases) add(`/doencas/${disease.slug}`, disease.updatedAt);
for (const page of staticPages) add(`/${page.slug}`, page.updatedAt);

for (const topic of topics)
  add(
    `/temas/${topic.slug}`,
    newest([...diseasesIn(topic.diseaseSlugs), ...articlesIn(topic.articleSlugs)].map((i) => i.updatedAt))
  );

for (const region of regions)
  add(`/por-regiao/${region.slug}`, newest(diseasesIn(region.diseaseSlugs).map((d) => d.updatedAt)));

add('/artigos', newest(publishedArticles.map((i) => i.updatedAt)));
add('/doencas', newest(publishedDiseases.map((i) => i.updatedAt)));
add(
  '/por-regiao',
  newest(diseasesIn(regions.flatMap((r) => r.diseaseSlugs)).map((d) => d.updatedAt))
);
add('/', newest([...publishedDiseases, ...publishedArticles].map((i) => i.updatedAt)));

/**
 * The `<lastmod>` for a sitemap entry URL, or `undefined` to leave the tag off.
 * Called from `serialize()` in `astro.config.mjs`.
 */
export function sitemapLastmod(url: string): string | undefined {
  const path = key('', new URL(url).pathname);
  const date = lastmod.get(path);
  return date ? new Date(`${date}T00:00:00Z`).toISOString() : undefined;
}
