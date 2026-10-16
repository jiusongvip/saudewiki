/**
 * Single source of truth for the structural identity of the site.
 *
 * Only what is true in every language lives here. The brand sentence, the tag
 * line, the contact address and the editorial status labels are reader-facing
 * copy and live in `src/i18n/ui.ts`, one entry per locale, so
 * a page cannot state the mission differently from another page.
 *
 * The brand name and domain are still placeholders — confirm both before the
 * first deploy, then update this object and `astro.config.mjs` together.
 */
export const SITE = {
  name: 'Saudewiki',
  url: 'https://www.saudewiki.com',
  /**
   * The project's public content repository — ten encyclopedia entries in
   * Markdown, generated from `src/data` by `scripts/export-artigos.mjs`. It is
   * the only external page this organization owns, so it is what `sameAs` names.
   * Swap in an organization account here if one is ever opened.
   */
  github: 'https://github.com/jiusongvip/saudewiki-artigos',
  updated: '2026-10-14',
} as const;
