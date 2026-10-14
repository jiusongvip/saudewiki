/**
 * Single source of truth for site-level identity.
 *
 * The brand name and domain are still placeholders — confirm both before the
 * first deploy, then update `SITE` and `astro.config.mjs` together.
 */
export const SITE = {
  name: 'Saudewiki',
  url: 'https://www.saudewiki.com',
  tagline: 'Informação de saúde para todos.',
  description:
    'Plataforma gratuita de informação em saúde para o público brasileiro: entenda doenças, sintomas e formas de prevenção com linguagem clara e fontes confiáveis.',
  locale: 'pt_BR',
  lang: 'pt-BR',
  updated: '2026-10-13',
  contact: 'contato@saudewiki.com',
  /** Shown everywhere until a named medical reviewer is actually engaged. */
  reviewNotice:
    'O Saudewiki ainda não possui um corpo de revisores médicos formalizado. Todo o conteúdo abaixo está marcado como material de demonstração e não substitui avaliação profissional.',
} as const;

/** Editorial status labels used in the UI. */
export const REVIEW_LABELS = {
  draft: 'Rascunho',
  needs_review: 'Em revisão médica',
  reviewed: 'Revisado',
  published: 'Publicado',
} as const;
