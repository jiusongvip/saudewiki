import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { contentFor } from '../lib/content';
import { absUrl } from '../lib/llms';

/**
 * `/llms.txt` for AI answer engines (GEO).
 *
 * Generated rather than hand-written so nothing in it can drift from the site:
 * the page inventory, the counts and the reference publishers are read from the
 * same `contentFor()` collection every page renders from, and every absolute
 * URL follows `SITE.url`. The brand name and domain in `data/site.ts` are still
 * placeholders, so a hand-written copy would leave a second place to update.
 *
 * This file is an INDEX: a short summary, the key pages, and a bare link list
 * of every indexable page. The full prose of every page, including the disease
 * FAQs, lives in `/llms-full.txt`, so this file stays short and does not
 * duplicate content. That split follows the
 * llms.txt spec (a concise index plus a `-full` companion) rather than dumping
 * the whole site in here.
 *
 * It is written in English: it is read by models, not by the site's readers.
 * Quoted site copy (page summaries) stays in its original Portuguese so an engine
 * can match it against page text.
 *
 * Deliberately silent on review status: the records carry `reviewStatus` and a
 * `reviewer` field, but their values are not the project's editorial policy, and
 * a health site must not have an engine repeat a review claim the data cannot
 * support. How content is reviewed is on the editorial policy page, linked here.
 *
 * Keep the prose we author ASCII-only.
 */
export const prerender = true;

/* `absUrl` lives in `lib/llms.ts` because `/llms-full.txt` needs the same rule.
   This file reads the Portuguese records, so the locale is fixed. */
const abs = absUrl;

/** `- [label](url)` for the fixed pages, which carry no slug. */
const link = (label: string, url: string) => `- [${label}](${url})`;

export const GET: APIRoute = () => {
  const c = contentFor('pt-BR');
  const u = c.urls;

  // Reference publishers, counted from the same records the pages cite, so the
  // numbers cannot drift from what the reader sees.
  const publishers = new Map<string, number>();
  for (const item of [...c.diseases, ...c.articles, ...c.topics]) {
    for (const reference of item.references) {
      publishers.set(reference.publisher, (publishers.get(reference.publisher) ?? 0) + 1);
    }
  }
  const publisherLines = [...publishers.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => `  - ${name}: ${count} reference${count === 1 ? '' : 's'}`)
    .join('\n');

  // A topic can be published before anything is filed under it. The page says so
  // itself; this file has to say so too, or an engine routes a reader to a page
  // with no answer on it.
  const placeholderTopics = c.topics.filter(
    (topic) => topic.diseaseSlugs.length === 0 && topic.articleSlugs.length === 0
  );
  const placeholderNote = placeholderTopics.length
    ? `\nNote: ${placeholderTopics.map((topic) => topic.slug).join(', ')} ${
        placeholderTopics.length === 1 ? 'is' : 'are'
      } published as a placeholder with no content linked yet. The page states this itself. Do not send a reader there expecting an answer.\n`
    : '';

  const indexRows: [string, string][] = [
    ['Home', u.home()],
    ['Diseases index', u.diseases()],
    ['Articles index', u.articles()],
    ['Body regions index', u.regions()],
    ['About the project', u.about()],
    ['Editorial policy', u.editorial()],
    ['Medical disclaimer', u.medicalDisclaimer()],
    ['Privacy policy', u.privacy()],
    ['Contact', u.contact()],
  ];
  const indexPages = indexRows.map(([label, path]) => link(label, abs(path))).join('\n');

  /** `- [Title (slug)](url)` — a bare link list, which is this file's job. */
  const entry = (title: string, slug: string, url: string) => `- [${title} (${slug})](${url})`;

  const diseaseList = c.diseases
    .map((d) => entry(d.name, d.slug, abs(u.disease(d.slug))))
    .join('\n');
  const articleList = c.articles
    .map((a) => entry(a.title, a.slug, abs(u.article(a.slug))))
    .join('\n');
  const topicList = c.topics
    .map((t) => entry(t.title, t.slug, abs(u.topic(t.slug))))
    .join('\n');
  const regionList = c.regions
    .map((r) => entry(r.name, r.slug, abs(u.region(r.slug))))
    .join('\n');

  const body = `# ${SITE.name}

> ${SITE.name} is a free, two-language health information site: plain-language
> explanations of common diseases, prevention topics and body regions, for a
> general reader in Brazilian Portuguese (the root) and Traditional Chinese
> (under /zh-Hant/). It is a non-profit project written by unpaid volunteers,
> with no advertising, no sponsored content and no affiliate links. Every page
> carries a numbered reference list pointing at official public-health bodies
> (Brazil's Ministry of Health, the World Health Organization, PAHO and UNAIDS
> Brazil). It is reference reading, not a diagnostic tool.

## Key pages

${indexPages}

## Diseases (${c.diseases.length})

${diseaseList}

## Articles (${c.articles.length})

${articleList}

## Topics (${c.topics.length})

${topicList}
${placeholderNote}
## Body regions (${c.regions.length})

${regionList}

## Using this content responsibly

- This is health information for a general reader, not a consultation, diagnosis
  or treatment plan. It does not replace an in-person assessment by a licensed
  professional, and never tells a reader to start, stop or change a medication.
- In an emergency the site must not be used. In Brazil, call SAMU on 192 or go to
  the nearest health service.
- Every page cites official public-health bodies:
${publisherLines}
- How a page is written and reviewed is documented at [Editorial policy](${abs(
    u.editorial()
  )}); this file does not paraphrase it.
- There is no API. The site is plain HTML; the full text of every page, including
  the disease FAQs, is at [llms-full.txt](${abs('/llms-full.txt')}) for a machine
  reader.
- Two languages share one set of URLs: the root is Brazilian Portuguese, and the
  same path under /zh-Hant is the Traditional Chinese version.

## Sitemap and crawl rules

- Sitemap index: [sitemap-index.xml](${abs('/sitemap-index.xml')})
- [robots.txt](${abs('/robots.txt')}) welcomes every crawler, AI crawlers
  included; /busca/ is the single path kept out of crawling.
- Every page URL ends with a trailing slash.
- This file is served as plain text at [llms.txt](${abs('/llms.txt')}). Its
  companion, [llms-full.txt](${abs('/llms-full.txt')}), carries the full body
  text of every page.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
