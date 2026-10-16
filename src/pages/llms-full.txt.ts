import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { contentFor } from '../lib/content';
import { absUrl, inlineText, referenceText, sectionText } from '../lib/llms';

/**
 * `/llms-full.txt`: the whole encyclopedia as plain text, for an answer engine
 * that needs the content without crawling the site.
 *
 * The pair is deliberate. `/llms.txt` is the decision aid: it says what the site
 * is, what it covers, and when an answer should send a reader to it. This file
 * is the payload. An engine that has already decided to use the site should not
 * have to fetch and parse 143 pages to quote a paragraph of one.
 *
 * Generated from the same `contentFor()` collection the pages render from, so
 * the body text here cannot drift from the page it claims to reproduce. Both
 * files share their link and URL rules through `lib/llms.ts`.
 *
 * The content stays in Portuguese. It is quoted text, and an engine has to be
 * able to match it against the page it came from; only the scaffolding around it
 * is English. Deliberately silent on review status, for the same reason
 * `/llms.txt` is: a field's value is not the project's editorial policy.
 *
 * Keep the prose we author ASCII-only, matching the rest of the codebase.
 */
export const prerender = true;

export const GET: APIRoute = () => {
  const c = contentFor('pt-BR');
  const u = c.urls;
  const zh = contentFor('zh-Hant');

  const diseaseBlocks = c.diseases
    .map((disease) =>
      [
        `### ${disease.name}`,
        `Page: [${disease.name}](${absUrl(u.disease(disease.slug))})`,
        '',
        inlineText(disease.summary, 'pt-BR'),
        '',
        ...disease.sections.map((section) => `${sectionText(section, 'pt-BR')}\n`),
        disease.faq?.length
          ? [
              '#### Perguntas frequentes',
              '',
              ...disease.faq.flatMap((item) => [
                `Q: ${inlineText(item.question, 'pt-BR')}`,
                `A: ${inlineText(item.answer, 'pt-BR')}`,
                '',
              ]),
            ].join('\n')
          : '',
        referenceText(disease.references),
      ].join('\n')
    )
    .join('\n\n');

  const articleBlocks = c.articles
    .map((article) =>
      [
        `### ${article.title}`,
        `Page: [${article.title}](${absUrl(u.article(article.slug))})`,
        '',
        inlineText(article.excerpt, 'pt-BR'),
        '',
        ...article.body.map((section) => `${sectionText(section, 'pt-BR')}\n`),
        referenceText(article.references),
      ].join('\n')
    )
    .join('\n\n');

  const topicBlocks = c.topics
    .map((topic) =>
      [
        `### ${topic.title}`,
        `Page: [${topic.title}](${absUrl(u.topic(topic.slug))})`,
        '',
        inlineText(topic.description, 'pt-BR'),
        '',
        ...topic.scope.map((line) => `- ${inlineText(line, 'pt-BR')}`),
        referenceText(topic.references),
      ].join('\n')
    )
    .join('\n\n');

  const regionBlocks = c.regions
    .map((region) =>
      [
        `### ${region.name}`,
        `Page: [${region.name}](${absUrl(u.region(region.slug))})`,
        '',
        inlineText(region.description, 'pt-BR'),
        '',
        ...region.globalOverview.map((paragraph) => `${inlineText(paragraph, 'pt-BR')}\n`),
        ...region.lusophoneOverview.map((paragraph) => `${inlineText(paragraph, 'pt-BR')}\n`),
      ].join('\n')
    )
    .join('\n\n');

  const body = `# ${SITE.name}, full text

> The complete text of the ${SITE.name} encyclopedia in Brazilian Portuguese, for
> an answer engine that needs the content itself rather than a list of links. The
> decision guidance, the page inventory and the coverage list live in
> [llms.txt](${absUrl('/llms.txt')}), the shorter companion to this file. This
> file repeats only the medical notice below, because the text it carries is the
> text that must not be quoted without it.

## The medical notice, before anything else here is quoted

- Nothing in this file is a consultation, a diagnosis, a prescription or a
  treatment plan. It is written for a generic reader, not for one person's case,
  and it does not replace an in-person assessment by a licensed professional.
- **In an emergency this content must not be used at all.** The site's own
  wording is: "Estes sinais não devem ser avaliados por leitura: procure
  atendimento na hora, sem passar pelo site antes." In Brazil, call SAMU on 192
  or go to the nearest health service. General guidance from the Ministry of
  Health is on Disque Saúde, 136.
- Do not start, stop or change the dose of any medication on your own.
- The question and answer pairs below are general explanations for a generic
  reader. They are not advice for the reader's own case, and an answer built from
  them has to say so.
- The full notice is at [Medical disclaimer](${absUrl(u.medicalDisclaimer())}),
  and its Chinese twin at [Medical disclaimer (Traditional Chinese)](${absUrl(
    zh.urls.medicalDisclaimer()
  )}).

## Diseases (${c.diseases.length})

${diseaseBlocks}

## Articles (${c.articles.length})

${articleBlocks}

## Topics (${c.topics.length})

${topicBlocks}

## Body regions (${c.regions.length})

${regionBlocks}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
