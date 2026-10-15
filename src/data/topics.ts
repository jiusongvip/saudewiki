import type { Topic } from '../types';

/**
 * Health topics: the third pillar, sitting between the encyclopedia and the
 * articles.
 *
 * A topic only lists content that actually exists. Topics whose content has not
 * been written yet keep empty arrays and render an explicit "em preparação"
 * notice, rather than pretending to be a finished medical guide.
 */
export const topics: Topic[] = [
  {
    id: 'doencas-infecciosas',
    slug: 'doencas-infecciosas',
    title: 'Doenças infecciosas',
    description:
      'Como se transmitem, quais são os sintomas e o que reduz o risco de infecções por vírus, bactérias e outros agentes, de arboviroses a HIV e hepatites.',
    scope: [
      'Formas de transmissão e período de incubação',
      'Sintomas que ajudam a diferenciar quadros parecidos',
      'Medidas de prevenção no dia a dia',
      'Quando a doença exige avaliação imediata',
      'Doenças que têm tratamento gratuito no sistema público de saúde',
    ],
    diseaseSlugs: [
      'dengue',
      'chikungunya',
      'zika',
      'malaria',
      'tuberculose',
      'hiv-aids',
      'hepatites-virais',
    ],
    articleSlugs: [
      'sintomas-iniciais-da-dengue',
      'como-prevenir-a-dengue',
      'chikungunya-dor-nas-articulacoes-quanto-tempo-dura',
      'chikungunya-e-dengue-como-diferenciar',
      'zika-na-gestacao-o-que-a-infeccao-pode-causar',
      'malaria-sintomas-e-quando-buscar-atendimento',
      'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta',
      'tuberculose-o-tratamento-tem-cura-e-e-gratuito',
      'indetectavel-intransmissivel-o-que-significa',
      'hepatite-c-tem-cura',
    ],
    references: [
      {
        label: 'Dengue and severe dengue: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Tuberculosis: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/tuberculosis',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    reviewStatus: 'needs_review',
  },
  {
    id: 'prevencao',
    slug: 'prevencao',
    title: 'Prevenção',
    description:
      'O que realmente reduz o risco de adoecer: medidas aplicáveis em casa, no trabalho e na rotina da família, de controle de vetores a vacinação e profilaxia.',
    scope: [
      'Controle de criadouros e vetores',
      'Vacinação e acompanhamento preventivo',
      'Profilaxia após exposição a doenças transmissíveis',
      'Hábitos que reduzem risco de doenças crônicas',
      'Quando procurar atendimento antes de agravar',
    ],
    diseaseSlugs: [
      'dengue',
      'chikungunya',
      'zika',
      'malaria',
      'tuberculose',
      'hiv-aids',
      'hepatites-virais',
      'diabetes',
      'hipertensao',
      'asma',
      'dpoc',
      'infarto-e-avc',
    ],
    articleSlugs: [
      'como-prevenir-a-dengue',
      'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
      'zika-como-se-proteger-em-areas-com-transmissao',
      'malaria-como-se-prevenir-em-viagens-para-a-amazonia',
      'hiv-o-que-fazer-nas-primeiras-72-horas',
      'hepatites-virais-quais-tem-vacina',
      'hipertensao-como-medir-a-pressao-em-casa',
      'asma-como-evitar-crises',
      'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    ],
    references: [
      {
        label: 'Dengue: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Calendário Nacional de Vacinação',
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    reviewStatus: 'needs_review',
  },
  {
    id: 'doencas-cronicas',
    slug: 'doencas-cronicas',
    title: 'Doenças crônicas',
    description:
      'Condições de longa duração que exigem acompanhamento contínuo, como diabetes, hipertensão, doenças respiratórias crônicas e complicações cardiovasculares.',
    scope: [
      'Como a condição se desenvolve ao longo do tempo',
      'Monitoramento em casa e exames de acompanhamento',
      'Relação entre alimentação, movimento e controle',
      'Complicações e como reduzi-las',
      'Emergências cardiovasculares e como reconhecê-las',
    ],
    diseaseSlugs: ['diabetes', 'hipertensao', 'asma', 'dpoc', 'infarto-e-avc'],
    articleSlugs: [
      'diabetes-tipo-2-o-que-muda-no-dia-a-dia',
      'hipertensao-como-medir-a-pressao-em-casa',
      'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      'asma-sintomas-e-sinais-de-alerta',
      'asma-diagnostico-e-exames',
      'asma-tratamento-e-controle',
      'asma-como-evitar-crises',
      'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
      'dpoc-sinais-de-alerta-quando-procurar-atendimento',
      'dpoc-como-e-diagnosticada',
      'dpoc-tratamento-e-cuidados',
      'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
      'infarto-quais-sao-os-sinais-e-o-que-fazer',
      'avc-como-reconhecer-os-sinais-e-agir-rapido',
    ],
    references: [
      {
        label: 'Diabetes: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diabetes',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Hypertension: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/hypertension',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Cardiovascular diseases: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    reviewStatus: 'needs_review',
  },
  {
    id: 'saude-infantil',
    slug: 'saude-infantil',
    title: 'Saúde infantil',
    description:
      'Acompanhamento do crescimento, vacinação e os sinais que indicam quando uma criança precisa de avaliação.',
    scope: [
      'Calendário de vacinação e por que ele é contínuo',
      'Sinais de alerta em crianças pequenas',
      'Rotina de acompanhamento do crescimento',
    ],
    diseaseSlugs: [],
    articleSlugs: ['vacinacao-o-que-e-o-calendario-basico'],
    references: [
      {
        label: 'Calendário Nacional de Vacinação',
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    reviewStatus: 'needs_review',
  },
  {
    id: 'saude-da-mulher',
    slug: 'saude-da-mulher',
    title: 'Saúde da mulher',
    description:
      'Saúde das mulheres: o assunto visto pelo ciclo menstrual, pela gestação e pelas diferentes fases da vida.',
    scope: [
      'Ciclo menstrual e saúde reprodutiva',
      'Gestação, pré-natal e pós-parto',
      'Climatério e saúde na meia-idade',
    ],
    diseaseSlugs: [],
    articleSlugs: [],
    references: [],
    reviewStatus: 'needs_review',
  },
];
