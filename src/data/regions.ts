import type { BodyRegion } from '../types';

/**
 * The body map: the third door into the encyclopedia, next to the disease list
 * and the themes.
 *
 * People arrive asking "what is wrong with my chest", not "which of these
 * diagnoses do I have", so the regions are ordered the way a reader scans a
 * body: head down, then the trunk, then what covers and moves it.
 *
 * Two rules kept this file honest.
 *
 * 1. A disease enters a region only when its own entry says that place is
 *    affected. `hipertensao` writes that "visão embaçada" can appear, so it is
 *    under `olhos`; it never mentions the kidneys, so it is not under `rins`,
 *    even though hypertensive nephropathy is real and would belong there. The
 *    gap is a to-do list, not an error: fill it by writing the sentence in the
 *    disease entry first.
 * 2. A region with nothing in it stays in the map and says so. Dropping empty
 *    regions would make the figure look complete while the set quietly shrank;
 *    the marker is labelled "Em construção" and the page asks for that text.
 *
 * `spot` is a percentage of the anatomy figure's own box, measured against
 * `public/img/anatomia-corpo.webp` (1024 x 1536). If that picture is redrawn or
 * cropped, every spot has to be re-measured against it.
 */
export const regions: BodyRegion[] = [
  {
    id: 'cerebro-e-nervos',
    slug: 'cerebro-e-nervos',
    name: 'Cérebro e nervos',
    description:
      'As doenças que atingem o cérebro, a medula e os nervos, e os sinais súbitos que pedem atendimento imediato.',
    diseaseSlugs: ['infarto-e-avc', 'zika'],
    spot: { x: 48.5, y: 5.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'olhos',
    slug: 'olhos',
    name: 'Olhos',
    description:
      'A visão embaçada que acompanha a pressão alta, a dor atrás dos olhos da dengue e o que a diabetes faz, ao longo dos anos, com os vasos finos do olho.',
    diseaseSlugs: ['diabetes', 'hipertensao', 'dengue'],
    spot: { x: 46.5, y: 9 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'ouvidos-nariz-e-garganta',
    slug: 'ouvidos-nariz-e-garganta',
    name: 'Ouvidos, nariz e garganta',
    description:
      'Ouvido, nariz e garganta: a porta de entrada de boa parte das infecções que se espalham pelo ar.',
    diseaseSlugs: [],
    spot: { x: 50, y: 15.2 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'pulmoes',
    slug: 'pulmoes',
    name: 'Pulmões e vias aéreas',
    description:
      'O estreitamento das vias por onde o ar passa e a infecção que se instala no tecido onde o oxigênio entra.',
    diseaseSlugs: ['tuberculose', 'asma-e-dpoc'],
    spot: { x: 43, y: 25.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'coracao-e-vasos',
    slug: 'coracao-e-vasos',
    name: 'Coração e vasos',
    description:
      'Quando uma artéria é obstruída ou se rompe: o infarto no músculo do coração, o AVC no cérebro, e a pressão alta que aumenta o risco dos dois.',
    diseaseSlugs: ['infarto-e-avc', 'hipertensao'],
    spot: { x: 49.5, y: 27 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'figado',
    slug: 'figado',
    name: 'Fígado',
    description:
      'Inflamações causadas por vírus, quase sempre silenciosas no início, e o acompanhamento que evita a evolução para cirrose e câncer.',
    diseaseSlugs: ['hepatites-virais'],
    spot: { x: 45, y: 33.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'estomago-e-intestinos',
    slug: 'estomago-e-intestinos',
    name: 'Estômago e intestinos',
    description: 'O aparelho digestivo e as doenças que se manifestam nele, da dor abdominal à diarreia.',
    diseaseSlugs: [],
    spot: { x: 54, y: 33.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'pancreas-e-metabolismo',
    slug: 'pancreas-e-metabolismo',
    name: 'Pâncreas e metabolismo',
    description:
      'O pâncreas produz a insulina. Quando ela falta ou o corpo deixa de responder bem a ela, a glicose sobe no sangue.',
    diseaseSlugs: ['diabetes'],
    spot: { x: 51.5, y: 37.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'rins',
    slug: 'rins',
    name: 'Rins',
    description:
      'O filtro do corpo. A diabetes pode lesioná-lo com o tempo, e a queda do volume de urina é sinal de alerta em infecção grave.',
    diseaseSlugs: ['diabetes', 'dengue'],
    spot: { x: 42.5, y: 38.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'pele',
    slug: 'pele',
    name: 'Pele',
    description:
      'Manchas vermelhas, coceira e pele amarelada: o que a pele mostra em dengue, zika, chikungunya, hepatite e malária.',
    // Skin is the whole surface, so the marker sits on the forearm, where the
    // picture shows it uncovered and where a mosquito bite actually lands.
    diseaseSlugs: ['dengue', 'zika', 'chikungunya', 'hepatites-virais', 'malaria'],
    spot: { x: 27.5, y: 41 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'articulacoes-e-musculos',
    slug: 'articulacoes-e-musculos',
    name: 'Articulações e músculos',
    description:
      'A dor nas juntas que pode durar semanas, marca da chikungunya, e a dor muscular das outras arboviroses.',
    // Marker on the knee: the joint the reader can point at without a diagram.
    diseaseSlugs: ['chikungunya', 'dengue', 'zika'],
    spot: { x: 44, y: 68.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'sangue-e-defesas',
    slug: 'sangue-e-defesas',
    name: 'Sangue e defesas',
    description:
      'Doenças do sistema, não de um órgão: o HIV ataca as células de defesa do organismo e o parasita da malária se multiplica no sangue.',
    // Blood has no single address either. The marker sits on the vessels of the
    // leg, which the figure draws plainly.
    diseaseSlugs: ['hiv-aids', 'malaria'],
    spot: { x: 43.5, y: 77 },
    reviewStatus: 'needs_review',
  },
];
