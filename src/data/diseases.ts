import type { Disease } from '../types';

/**
 * Disease entries.
 *
 * NOTE ON REFERENCES: the URLs below point at official pages of the Brazilian
 * Ministry of Health, Fiocruz and the WHO. They must be re-checked against the
 * live source pages before launch: a reference that does not actually support
 * the sentence it is attached to is worse than no reference at all.
 *
 * NOTE ON REVIEW STATE: every entry is currently `needs_review`, because no
 * named medical reviewer has signed off. The `gripe` entry is `draft` and is
 * deliberately left unlinked: it exists to prove that draft content is never
 * built, never listed and never added to the sitemap.
 */
export const diseases: Disease[] = [
  {
    id: 'dengue',
    slug: 'dengue',
    name: 'Dengue',
    aliases: ['febre da dengue', 'dengue clássica', 'dengue grave'],
    summary:
      'Doença viral transmitida pela picada do mosquito Aedes aegypti. A maior parte dos casos é leve, mas a forma grave pode evoluir rapidamente.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é dengue?',
        paragraphs: [
          'Dengue é uma infecção causada por um vírus transmitido principalmente pela picada do mosquito Aedes aegypti. Existem quatro sorotipos do vírus, e uma pessoa pode adoecer mais de uma vez ao longo da vida.',
          'A maioria das pessoas infectadas apresenta sintomas leves ou nenhum sintoma. Uma parcela menor evolui para formas graves, geralmente depois que a febre começa a ceder.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas da dengue?',
        paragraphs: [
          'Os primeiros sinais costumam aparecer entre quatro e dez dias após a picada do mosquito.',
        ],
        bullets: [
          'Febre alta de início súbito',
          'Dor de cabeça intensa e dor atrás dos olhos',
          'Dores musculares e nas articulações',
          'Náusea, vômito e falta de apetite',
          'Manchas vermelhas na pele, que podem surgir mais tarde',
        ],
        cta: {
          label: 'Leia também: quais são os primeiros sintomas da dengue?',
          href: '/artigos/sintomas-iniciais-da-dengue/',
        },
      },
      {
        id: 'transmissao',
        heading: 'Como a dengue é transmitida?',
        paragraphs: [
          'A transmissão acontece pela picada de um mosquito fêmea infectado, sobretudo durante o dia. Não há transmissão direta de pessoa para pessoa.',
          'O mosquito se reproduz em água parada, o que explica por que os casos aumentam em períodos de chuva e calor.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa pela avaliação clínica: sintomas, histórico recente e região de moradia ou viagem. Exames laboratoriais podem confirmar a infecção, mas não são necessários em todos os casos.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir a dengue?',
        paragraphs: [
          'Como não existe tratamento específico para eliminar o vírus, a prevenção se concentra em reduzir os criadouros do mosquito e evitar a picada.',
        ],
        bullets: [
          'Eliminar água parada em vasos, calhas, pneus e recipientes guardados',
          'Manter caixas d’água e tonéis tampados',
          'Limpar com frequência bebedouros de animais e ralos pouco usados',
          'Usar repelente e roupas que cubram braços e pernas em áreas com transmissão',
        ],
        cta: {
          label: 'Veja o guia completo: como prevenir a dengue',
          href: '/artigos/como-prevenir-a-dengue/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'Não há medicamento antiviral específico. O manejo se baseia em hidratação e alívio dos sintomas, sempre com orientação de um profissional de saúde.',
          'Medicamentos à base de ácido acetilsalicílico e anti-inflamatórios não esteroides devem ser evitados durante a suspeita, pelo risco de sangramento.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'Procure atendimento imediatamente se, especialmente depois do terceiro dia de febre, aparecer algum destes sinais:',
        ],
        bullets: [
          'Dor abdominal intensa e contínua',
          'Vômitos persistentes',
          'Sangramento de gengiva, nariz ou nas fezes',
          'Sonolência, irritabilidade ou confusão',
          'Diminuição da urina ou sinais de desidratação',
        ],
        cta: {
          label: 'Leia também: quando procurar atendimento médico em caso de suspeita de dengue',
          href: '/artigos/quando-procurar-atendimento-em-caso-de-suspeita-de-dengue/',
        },
      },
    ],
    faq: [
      {
        question: 'Dengue pega de outra pessoa?',
        answer:
          'Não. A transmissão ocorre pela picada do mosquito Aedes aegypti infectado, não pelo contato direto entre pessoas.',
      },
      {
        question: 'Quem já teve dengue pode ter de novo?',
        answer:
          'Sim. Como existem quatro sorotipos do vírus, uma nova infecção por um sorotipo diferente é possível.',
      },
      {
        question: 'Existe vacina contra dengue?',
        answer:
          'Existem vacinas aprovadas no Brasil, mas a indicação depende de critérios definidos pelas autoridades de saúde e não substitui o controle do mosquito. Consulte o serviço de saúde da sua região.',
      },
    ],
    relatedArticleSlugs: [
      'sintomas-iniciais-da-dengue',
      'como-prevenir-a-dengue',
      'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
    ],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['diabetes', 'hipertensao'],
    references: [
      {
        label: 'Dengue: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Dengue and severe dengue: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Dengue: informações para profissionais e população',
        url: 'https://portal.fiocruz.br/',
        publisher: 'Fiocruz',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'diabetes',
    slug: 'diabetes',
    name: 'Diabetes',
    aliases: ['diabetes mellitus', 'diabetes tipo 1', 'diabetes tipo 2', 'glicemia alta'],
    summary:
      'Conjunto de condições em que o corpo não produz insulina suficiente ou não consegue usá-la bem, elevando a glicose no sangue.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é diabetes?',
        paragraphs: [
          'Diabetes é o nome de um grupo de condições caracterizadas por níveis elevados de glicose no sangue. Isso acontece quando o pâncreas não produz insulina suficiente, ou quando o corpo deixa de responder bem à insulina que produz.',
          'Os tipos mais frequentes são o tipo 1, o tipo 2 e o diabetes gestacional.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'O tipo 2 pode permanecer silencioso por anos. Quando há sintomas, costumam ser:',
        ],
        bullets: [
          'Sede excessiva e necessidade frequente de urinar',
          'Cansaço e perda de peso sem causa aparente',
          'Visão embaçada',
          'Feridas que demoram a cicatrizar',
          'Formigamento nos pés e nas mãos',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Diabetes é contagioso?',
        paragraphs: [
          'Não. Diabetes não é transmitido de pessoa para pessoa. É uma condição relacionada a fatores genéticos, metabólicos e ao estilo de vida.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico é feito por exames de sangue que medem a glicose, como a glicemia de jejum, o teste oral de tolerância à glicose e a hemoglobina glicada. A interpretação cabe ao profissional de saúde.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir o risco de diabetes tipo 2?',
        paragraphs: [
          'No caso do tipo 2, mudanças de hábito têm impacto relevante:',
        ],
        bullets: [
          'Manter alimentação variada, com menos açúcar e ultraprocessados',
          'Praticar atividade física de forma regular',
          'Acompanhar peso e circunferência abdominal',
          'Fazer exames periódicos, sobretudo com histórico familiar',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento combina alimentação, atividade física, monitoramento da glicose e, quando indicado, medicamentos. O acompanhamento contínuo é o que evita complicações nos olhos, rins, nervos e sistema cardiovascular.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure atendimento se houver sintomas de glicose muito alta ou muito baixa, como confusão, vômitos persistentes, hálito adocicado, tremores, suor frio ou desmaio.',
        ],
      },
    ],
    faq: [
      {
        question: 'Diabetes tem cura?',
        answer:
          'Na maior parte dos casos é uma condição crônica, controlada com acompanhamento contínuo. Alguns casos de diabetes tipo 2 podem entrar em remissão com tratamento e mudanças de hábito.',
      },
      {
        question: 'Comer muito açúcar causa diabetes?',
        answer:
          'Não é uma relação direta e simples. O desenvolvimento do tipo 2 envolve fatores genéticos, excesso de peso, sedentarismo e outros elementos.',
      },
    ],
    relatedArticleSlugs: ['diabetes-tipo-2-o-que-muda-no-dia-a-dia'],
    relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedDiseaseSlugs: ['hipertensao', 'dengue'],
    references: [
      {
        label: 'Diabetes: orientações e materiais',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/diabetes',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Diabetes: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diabetes',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'hipertensao',
    slug: 'hipertensao',
    name: 'Hipertensão',
    aliases: ['pressão alta', 'hipertensão arterial'],
    summary:
      'Pressão arterial cronicamente elevada. Costuma não dar sintomas e é um dos principais fatores de risco para infarto e AVC.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é hipertensão?',
        paragraphs: [
          'Hipertensão, ou pressão alta, é quando a pressão arterial se mantém elevada de forma persistente. A maior parte dos casos não tem causa única identificável.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'A hipertensão costuma ser silenciosa. Muitas pessoas descobrem a condição em um exame de rotina.',
          'Dor de cabeça, tontura e visão embaçada podem aparecer, mas não são confiáveis para identificar pressão alta: só a medição mostra o valor real.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Hipertensão é contagiosa?',
        paragraphs: ['Não. É uma condição crônica não transmissível.'],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico depende de medições repetidas da pressão arterial, feitas em condições adequadas e em datas diferentes. Medir uma única vez não basta.',
        ],
        cta: {
          label: 'Leia também: como medir a pressão arterial em casa',
          href: '/artigos/hipertensao-como-medir-a-pressao-em-casa/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        bullets: [
          'Reduzir o consumo de sal e de alimentos ultraprocessados',
          'Praticar atividade física regularmente',
          'Evitar excesso de peso e consumo excessivo de álcool',
          'Não fumar',
          'Medir a pressão periodicamente, mesmo sem sintomas',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento pode envolver mudanças de hábito e medicamentos. Interromper a medicação por conta própria é um dos erros mais comuns e mais perigosos.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Busque atendimento imediato em caso de dor no peito, falta de ar, dor de cabeça súbita e intensa, fraqueza em um lado do corpo, dificuldade para falar ou alteração de visão.',
        ],
      },
    ],
    faq: [
      {
        question: 'Pressão alta tem cura?',
        answer:
          'Na maioria dos casos é uma condição crônica que exige controle contínuo, com hábitos saudáveis e, frequentemente, medicação.',
      },
      {
        question: 'Posso parar o remédio quando a pressão normaliza?',
        answer:
          'Não por conta própria. A pressão normaliza justamente porque o medicamento está funcionando. A suspensão deve ser decidida com um profissional de saúde.',
      },
    ],
    relatedArticleSlugs: ['hipertensao-como-medir-a-pressao-em-casa'],
    relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedDiseaseSlugs: ['diabetes', 'dengue'],
    references: [
      {
        label: 'Hipertensão arterial: materiais e orientações',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hipertensao',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Hypertension: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/hypertension',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'gripe',
    slug: 'gripe',
    name: 'Gripe (influenza)',
    aliases: ['influenza', 'resfriado forte'],
    summary: 'Infecção respiratória viral. Entrada mantida em rascunho para validar o filtro de status editorial.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é gripe?',
        paragraphs: ['Rascunho editorial. Não deve ser publicado enquanto a revisão não for concluída.'],
      },
    ],
    relatedArticleSlugs: [],
    relatedTopicSlugs: [],
    relatedDiseaseSlugs: [],
    references: [],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'draft',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'chikungunya',
    slug: 'chikungunya',
    name: 'Chikungunya',
    aliases: ['febre chikungunya', 'vírus chikungunya', 'dor nas articulações chikungunya'],
    summary:
      'Infecção viral transmitida pelos mosquitos Aedes aegypti e Aedes albopictus. A marca da doença é a dor nas articulações, que pode persistir por semanas ou meses.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é chikungunya?',
        paragraphs: [
          'Chikungunya é uma infecção causada pelo vírus chikungunya (CHIKV), transmitido pela picada dos mosquitos Aedes aegypti e Aedes albopictus, os mesmos que transmitem dengue e zika.',
          'O nome vem de uma expressão africana que descreve a postura curvada de quem sente dor nas articulações. Esse é o traço que diferencia a chikungunya das outras arboviroses: a dor articular costuma ser intensa e pode se prolongar bem depois de a febre passar.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os sintomas costumam começar entre três e sete dias depois da picada. O início é súbito e a febre alta é frequente.',
        ],
        bullets: [
          'Febre alta de início súbito',
          'Dor intensa nas articulações, sobretudo mãos, pés, tornozelos e joelhos',
          'Dor muscular e dor de cabeça',
          'Náusea, vômito e cansaço',
          'Manchas vermelhas na pele, que podem surgir nos primeiros dias',
          'Inchaço nas articulações, em alguns casos',
        ],
        cta: {
          label: 'Leia também: quanto tempo dura a dor nas articulações da chikungunya',
          href: '/artigos/chikungunya-dor-nas-articulacoes-quanto-tempo-dura/',
        },
      },
      {
        id: 'transmissao',
        heading: 'Como a chikungunya é transmitida?',
        paragraphs: [
          'A transmissão acontece pela picada de um mosquito fêmea infectado, principalmente durante o dia. Não há transmissão direta de pessoa para pessoa.',
          'Como os dois mosquitos se reproduzem em água parada, o risco aumenta em períodos de calor e chuva e em áreas com acúmulo de recipientes.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa pela avaliação clínica: sintomas, histórico de viagem ou de moradia em área com transmissão. Exames laboratoriais podem confirmar a infecção, e a interpretação cabe ao profissional de saúde.',
          'Como os sintomas iniciais se parecem com os da dengue, a diferenciação costuma exigir avaliação em serviço de saúde, e isso muda a conduta, porque as duas doenças têm cuidados diferentes.',
        ],
        cta: {
          label: 'Leia também: como diferenciar chikungunya e dengue',
          href: '/artigos/chikungunya-e-dengue-como-diferenciar/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'Não há antiviral específico, então a prevenção se concentra em reduzir os criadouros do mosquito e evitar a picada.',
        ],
        bullets: [
          'Eliminar água parada em vasos, calhas, pneus e recipientes guardados',
          'Manter caixas d’água e tonéis tampados',
          'Limpar com frequência bebedouros de animais e ralos pouco usados',
          'Usar repelente e roupas que cubram braços e pernas nos horários de maior atividade',
          'Instalar telas em janelas e usar mosquiteiros em áreas com transmissão intensa',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento é sintomático: repouso, hidratação e alívio da dor e da febre, sempre com orientação profissional. Não existe medicamento que elimine o vírus.',
          'Medicamentos à base de ácido acetilsalicílico e anti-inflamatórios não esteroides devem ser evitados na fase aguda, enquanto a dengue não for descartada, pelo risco de sangramento. A fisioterapia pode fazer parte do cuidado quando a dor articular persiste.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'Procure atendimento imediatamente se aparecer algum destes sinais:',
        ],
        bullets: [
          'Dor abdominal intensa e contínua',
          'Vômitos persistentes',
          'Sangramento de gengiva, nariz ou nas fezes',
          'Sonolência, confusão ou irritabilidade',
          'Diminuição da urina ou sinais de desidratação',
          'Extremidades frias, palidez ou dificuldade para respirar',
        ],
        cta: {
          label: 'Veja os sinais de alerta da dengue, que são semelhantes',
          href: '/doencas/dengue/',
        },
      },
    ],
    faq: [
      {
        question: 'Chikungunya pega de outra pessoa?',
        answer:
          'Não. A transmissão ocorre pela picada do mosquito infectado, não pelo contato direto entre pessoas.',
      },
      {
        question: 'A dor nas articulações passa?',
        answer:
          'Na maioria das pessoas a dor melhora em algumas semanas. Em uma parte dos casos ela persiste por meses, e o acompanhamento com profissional de saúde é o que orienta o tratamento.',
      },
      {
        question: 'Quem já teve chikungunya pode ter de novo?',
        answer:
          'A infecção costuma gerar imunidade duradoura. Ainda assim, o mosquito continua sendo um risco para outras doenças transmitidas por ele, como dengue e zika.',
      },
    ],
    relatedArticleSlugs: [
      'chikungunya-dor-nas-articulacoes-quanto-tempo-dura',
      'chikungunya-e-dengue-como-diferenciar',
    ],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['dengue', 'zika'],
    references: [
      {
        label: 'Chikungunya: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/chikungunya',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Chikungunya: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/chikungunya',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Arboviroses: materiais técnicos',
        url: 'https://portal.fiocruz.br/',
        publisher: 'Fiocruz',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'zika',
    slug: 'zika',
    name: 'Zika',
    aliases: ['vírus zika', 'febre zika', 'zika na gestação'],
    summary:
      'Infecção viral transmitida pelo Aedes aegypti. Costuma ser leve, mas a infecção durante a gestação pode causar malformações no bebê.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é zika?',
        paragraphs: [
          'Zika é uma infecção causada pelo vírus zika, transmitido principalmente pela picada do mosquito Aedes aegypti. O vírus também pode passar de pessoa para pessoa por via sexual, por transfusão de sangue e da gestante para o feto.',
          'A infecção costuma ser leve e muitas pessoas não apresentam sintoma nenhum. O problema maior está na gestação: a infecção nesse período pode causar malformações no sistema nervoso do bebê.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'A maioria das pessoas infectadas não tem sintomas. Quando aparecem, costumam ser leves e durar de dois a sete dias.',
        ],
        bullets: [
          'Manchas vermelhas na pele, muitas vezes com coceira',
          'Febre baixa',
          'Olhos vermelhos sem secreção',
          'Dor nas articulações e nos músculos',
          'Dor de cabeça e mal-estar',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como o zika é transmitido?',
        paragraphs: [
          'A via principal é a picada do mosquito Aedes aegypti, principalmente durante o dia. Diferente da dengue e da chikungunya, o zika também tem outras vias de transmissão.',
        ],
        bullets: [
          'Picada do mosquito Aedes aegypti infectado',
          'Relação sexual sem preservativo com pessoa infectada',
          'Transfusão de sangue, em situações raras',
          'Da gestante para o feto durante a gestação',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico combina a avaliação clínica com exames laboratoriais, que podem detectar o vírus ou a resposta do organismo a ele. A escolha do exame e a interpretação do resultado dependem do profissional de saúde e do momento da doença.',
          'Durante a gestação, qualquer suspeita deve ser avaliada com prioridade, porque muda o acompanhamento pré-natal.',
        ],
        cta: {
          label: 'Leia também: o que o zika pode causar na gestação',
          href: '/artigos/zika-na-gestacao-o-que-a-infeccao-pode-causar/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'A prevenção combina o controle do mosquito com cuidados específicos para quem pode engravidar e para gestantes.',
        ],
        bullets: [
          'Eliminar água parada em vasos, calhas, pneus e recipientes guardados',
          'Manter caixas d’água e tonéis tampados',
          'Usar repelente e roupas que cubram braços e pernas',
          'Instalar telas em janelas e portas',
          'Usar preservativo nas relações sexuais, sobretudo se houver risco de gestação',
          'Gestantes devem conversar com o serviço de saúde antes de viajar para áreas com transmissão',
        ],
        cta: {
          label: 'Leia também: como se proteger do zika em áreas com transmissão',
          href: '/artigos/zika-como-se-proteger-em-areas-com-transmissao/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'Não existe antiviral específico nem vacina disponível contra o zika. O cuidado é sintomático: repouso, hidratação e alívio da dor e da febre, com orientação profissional.',
          'Como a dengue pode se parecer com o zika, medicamentos à base de ácido acetilsalicílico e anti-inflamatórios não esteroides devem ser evitados até que a dengue seja descartada.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure atendimento em caso de dor abdominal intensa, vômitos persistentes, sangramento, sonolência ou diminuição da urina, sinais que também aparecem em outras arboviroses e exigem avaliação.',
          'Gestantes com manchas na pele, febre ou olhos vermelhos devem procurar o serviço de saúde imediatamente, mesmo que os sintomas sejam leves.',
        ],
      },
    ],
    faq: [
      {
        question: 'Zika é perigoso para todo mundo?',
        answer:
          'Para a maior parte das pessoas a infecção é leve e passa sozinha. O risco maior é a infecção durante a gestação, pelo efeito no desenvolvimento do bebê.',
      },
      {
        question: 'Existe vacina contra zika?',
        answer:
          'Não há vacina disponível até o momento. A prevenção depende de evitar a picada do mosquito e, no caso de gestantes, de cuidados adicionais.',
      },
      {
        question: 'Zika pode ser transmitido pelo beijo ou pelo abraço?',
        answer:
          'Não. A transmissão conhecida é pela picada do mosquito, por via sexual, por transfusão e da gestante para o feto. Contato social não transmite o vírus.',
      },
    ],
    relatedArticleSlugs: [
      'zika-na-gestacao-o-que-a-infeccao-pode-causar',
      'zika-como-se-proteger-em-areas-com-transmissao',
    ],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['dengue', 'chikungunya'],
    references: [
      {
        label: 'Zika: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/z/zika-virus',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Zika virus: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/zika-virus',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Zika: informações e orientações',
        url: 'https://www.paho.org/pt/topicos/zika',
        publisher: 'Organização Pan-Americana da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'malaria',
    slug: 'malaria',
    name: 'Malária',
    aliases: ['paludismo', 'malária grave', 'mosquito-prego'],
    summary:
      'Doença causada por protozoários do gênero Plasmodium e transmitida pela picada do mosquito Anopheles. Tem tratamento gratuito e cura, mas pode se agravar rápido.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é malária?',
        paragraphs: [
          'Malária é uma doença infecciosa causada por protozoários do gênero Plasmodium, transmitidos pela picada da fêmea do mosquito Anopheles, conhecido como mosquito-prego, que pica principalmente ao entardecer e à noite.',
          'No Brasil, a transmissão se concentra na Amazônia Legal. A doença não é contagiosa de pessoa para pessoa pelo contato, mas pode ser transmitida por transfusão de sangue e, mais raramente, da gestante para o feto.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os primeiros sintomas costumam aparecer entre sete e trinta dias depois da picada e podem ser parecidos com os de uma gripe.',
        ],
        bullets: [
          'Febre alta, muitas vezes com calafrios e sudorese',
          'Dor de cabeça e dor no corpo',
          'Náusea, vômito e falta de apetite',
          'Cansaço e fraqueza',
          'Palidez e coloração amarelada da pele e dos olhos, em alguns casos',
        ],
        cta: {
          label: 'Leia também: sintomas da malária e quando buscar atendimento',
          href: '/artigos/malaria-sintomas-e-quando-buscar-atendimento/',
        },
      },
      {
        id: 'transmissao',
        heading: 'Como a malária é transmitida?',
        paragraphs: [
          'A transmissão acontece pela picada do mosquito Anopheles infectado. O mosquito se reproduz em água limpa, parada ou de pouca correnteza, com sombra, o que explica a concentração de casos em áreas de floresta e de garimpo.',
          'Não há transmissão por contato direto, alimentos ou objetos compartilhados.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico é feito por exame de sangue. A gota espessa, analisada ao microscópio, é o exame de referência e permite identificar a espécie do parasito, o que define o tratamento.',
          'Em áreas com transmissão, a recomendação é procurar o serviço de saúde diante de febre. Quanto mais cedo o diagnóstico, menor o risco de a doença evoluir para a forma grave.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'A prevenção se concentra em evitar a picada do mosquito e, em situações específicas, no uso de medicamentos profiláticos indicados por profissional de saúde.',
        ],
        bullets: [
          'Usar mosquiteiro impregnado com inseticida para dormir',
          'Instalar telas em janelas e portas',
          'Usar repelente nas áreas expostas da pele',
          'Preferir roupas de manga longa e calça nos horários de maior atividade do mosquito',
          'Evitar permanecer ao ar livre ao entardecer e à noite em áreas de transmissão',
          'Buscar orientação sobre quimioprofilaxia antes de viajar para áreas de risco',
        ],
        cta: {
          label: 'Leia também: como se prevenir da malária em viagens para a Amazônia',
          href: '/artigos/malaria-como-se-prevenir-em-viagens-para-a-amazonia/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'A malária tem tratamento e cura, disponível gratuitamente no sistema público de saúde. O esquema depende da espécie do parasito e da gravidade do quadro, e só um profissional pode defini-lo.',
          'Tomar o medicamento pelo tempo indicado é essencial: interromper o tratamento antes do fim favorece a recaída e o desenvolvimento de resistência.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'Procure atendimento imediatamente se houver febre em área com transmissão de malária. Alguns sinais indicam forma grave e são uma emergência:',
        ],
        bullets: [
          'Confusão mental, sonolência ou convulsões',
          'Dificuldade para respirar',
          'Diminuição muito acentuada da urina',
          'Icterícia intensa ou sangramentos',
          'Vômitos persistentes que impedem a hidratação',
          'Fraqueza extrema, com dificuldade de ficar de pé',
        ],
      },
    ],
    faq: [
      {
        question: 'Malária pega de outra pessoa?',
        answer:
          'Não pelo contato direto. A transmissão ocorre pela picada do mosquito Anopheles infectado, além de casos raros por transfusão de sangue e da gestante para o feto.',
      },
      {
        question: 'Malária tem cura?',
        answer:
          'Sim. O tratamento está disponível gratuitamente no sistema público de saúde e leva à cura quando seguido corretamente. O risco está no diagnóstico tardio e na interrupção do tratamento.',
      },
      {
        question: 'Existe vacina contra malária no Brasil?',
        answer:
          'Não há vacina disponível para uso rotineiro no Brasil. A prevenção depende de evitar a picada do mosquito e, em casos indicados, do uso de medicamentos profiláticos.',
      },
    ],
    relatedArticleSlugs: [
      'malaria-sintomas-e-quando-buscar-atendimento',
      'malaria-como-se-prevenir-em-viagens-para-a-amazonia',
    ],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['dengue', 'tuberculose'],
    references: [
      {
        label: 'Malária: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Malaria: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/malaria',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'tuberculose',
    slug: 'tuberculose',
    name: 'Tuberculose',
    aliases: ['TB', 'tuberculose pulmonar', 'bacilo de Koch'],
    summary:
      'Doença infecciosa causada por uma bactéria que ataca principalmente os pulmões. Tem cura, e o tratamento é gratuito no sistema público de saúde.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é tuberculose?',
        paragraphs: [
          'Tuberculose é uma doença infecciosa causada pela bactéria Mycobacterium tuberculosis, que ataca principalmente os pulmões, mas pode atingir outros órgãos.',
          'Ela tem cura. O tratamento é gratuito no sistema público de saúde e, quando seguido até o fim, interrompe a transmissão.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'O sintoma que mais chama atenção é a tosse persistente. Tosse por três semanas ou mais, com ou sem catarro, precisa ser investigada.',
        ],
        bullets: [
          'Tosse por três semanas ou mais, com ou sem expectoração',
          'Febre baixa, muitas vezes no fim da tarde',
          'Suor noturno',
          'Perda de peso sem causa aparente',
          'Cansaço e falta de apetite',
          'Sangue no catarro, em alguns casos',
        ],
        cta: {
          label: 'Leia também: quando a tosse persistente é sinal de alerta',
          href: '/artigos/tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta/',
        },
      },
      {
        id: 'transmissao',
        heading: 'Como a tuberculose é transmitida?',
        paragraphs: [
          'A transmissão acontece pelo ar, quando uma pessoa com tuberculose pulmonar ativa tosse, espirra ou fala e elimina gotículas com a bactéria, que são inaladas por outra pessoa.',
          'Não se pega tuberculose por apertar a mão, compartilhar talheres, usar o mesmo banheiro ou pelo beijo. Também não se pega por objetos ou roupas de cama.',
          'Nem toda pessoa infectada adoece: muitas desenvolvem a chamada infecção latente, sem sintomas e sem transmitir, mas com a bactéria no organismo.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'A investigação começa pela tosse persistente e inclui exames do escarro, como a baciloscopia e o teste rápido molecular, além de radiografia de tórax quando indicada. Tudo isso está disponível gratuitamente no sistema público de saúde.',
          'O diagnóstico precoce é o que interrompe a cadeia de transmissão, porque uma pessoa em tratamento deixa de transmitir em poucas semanas.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        bullets: [
          'Vacinar as crianças com a BCG, que protege contra as formas graves da doença',
          'Investigar a tosse que dura três semanas ou mais',
          'Manter ambientes ventilados e com luz natural',
          'Cobrir a boca ao tossir e espirrar',
          'Realizar o tratamento até o fim, o que interrompe a transmissão',
          'Avaliar e, quando indicado, tratar a infecção latente em pessoas com maior risco',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento é feito com uma combinação de antibióticos, em geral por seis meses, com medicamentos fornecidos gratuitamente pelo sistema público de saúde.',
          'O ponto crítico é não interromper: parar antes do fim é a principal causa de recaída e de resistência da bactéria aos medicamentos, o que torna o tratamento muito mais longo e difícil.',
          'O acompanhamento inclui consultas regulares e, muitas vezes, apoio da equipe de saúde para lidar com os efeitos do tratamento.',
        ],
        cta: {
          label: 'Leia também: o tratamento da tuberculose é gratuito e tem cura',
          href: '/artigos/tuberculose-o-tratamento-tem-cura-e-e-gratuito/',
        },
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure uma unidade de saúde se houver tosse por três semanas ou mais, sobretudo acompanhada de febre ao fim do dia, suor noturno ou perda de peso.',
          'Sangue no catarro, falta de ar ou dor no peito exigem avaliação imediata.',
        ],
      },
    ],
    faq: [
      {
        question: 'Tuberculose tem cura?',
        answer:
          'Sim. O tratamento é eficaz e gratuito, desde que seja seguido até o fim, pelo período indicado pelo profissional de saúde.',
      },
      {
        question: 'Peguei tuberculose de alguém, isso é motivo de vergonha?',
        answer:
          'Não. Tuberculose é uma doença infecciosa como qualquer outra, transmitida pelo ar. O estigma é um dos principais obstáculos ao diagnóstico precoce.',
      },
      {
        question: 'Conviver com quem tem tuberculose é perigoso?',
        answer:
          'Depois de algumas semanas de tratamento, a pessoa deixa de transmitir a doença. Quem convive com um caso confirmado deve ser avaliado pelo serviço de saúde.',
      },
    ],
    relatedArticleSlugs: [
      'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta',
      'tuberculose-o-tratamento-tem-cura-e-e-gratuito',
    ],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['hiv-aids', 'malaria'],
    references: [
      {
        label: 'Tuberculose: sintomas, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tuberculose',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Tuberculosis: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/tuberculosis',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'hiv-aids',
    slug: 'hiv-aids',
    name: 'HIV e aids',
    aliases: ['HIV', 'aids', 'vírus da imunodeficiência humana', 'soropositivo'],
    summary:
      'O HIV ataca o sistema imunológico e, sem tratamento, a infecção evolui para aids. Com o tratamento gratuito, a carga viral pode ficar indetectável.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é HIV e o que é aids?',
        paragraphs: [
          'HIV é a sigla do vírus da imunodeficiência humana, que ataca células do sistema de defesa do organismo. A aids é o estágio mais avançado da infecção, quando a imunidade já está comprometida e aparecem as chamadas infecções oportunistas.',
          'HIV e aids não são a mesma coisa: uma pessoa pode viver com HIV e não ter aids, desde que faça o tratamento. É por isso que a distinção importa.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'A infecção pelo HIV pode ficar anos sem dar sintoma. É comum que, nas primeiras semanas, apareça um quadro parecido com uma gripe forte, com febre, mal-estar, dor de garganta e gânglios inchados, que passa sozinho e raramente é associado ao HIV.',
          'Como os sintomas não são confiáveis para identificar a infecção, a única forma de saber é fazer o teste.',
        ],
        bullets: [
          'Fase inicial: quadro gripal que passa sozinho, ou nenhum sintoma',
          'Período intermediário: geralmente sem sintomas, mesmo sem tratamento',
          'Fase avançada: perda de peso, febre prolongada, diarreia frequente e infecções de repetição',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como o HIV é transmitido?',
        bullets: [
          'Relação sexual sem preservativo com pessoa que vive com HIV e não está em tratamento',
          'Compartilhamento de agulhas, seringas e outros objetos de uso injetável',
          'Da gestante para o bebê na gestação, no parto ou na amamentação, sem acompanhamento',
          'Transfusão de sangue contaminado, situação muito rara hoje por causa do controle nos bancos de sangue',
        ],
      },
      {
        id: 'nao-transmite',
        heading: 'O que não transmite HIV',
        paragraphs: [
          'Muita gente ainda evita contato por medo de algo que não transmite a infecção. Beijo, abraço, aperto de mão, uso do mesmo banheiro, piscina, talheres, copos, picada de inseto e contato com suor não transmitem o HIV.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico é feito por testes que detectam o vírus ou os anticorpos produzidos contra ele. Os testes são gratuitos no sistema público de saúde, e a testagem é sigilosa.',
          'Fazer o teste cedo muda o desfecho: quanto antes o tratamento começa, melhor a resposta e menor o impacto na saúde.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'A prevenção combina métodos de barreira, testagem regular e medicamentos indicados em situações específicas.',
        ],
        bullets: [
          'Usar preservativo em todas as relações sexuais',
          'Não compartilhar agulhas, seringas ou objetos cortantes',
          'Fazer o teste regularmente, sobretudo após uma situação de risco',
          'Usar a profilaxia pós-exposição (PEP), que deve ser iniciada o quanto antes e no máximo em 72 horas',
          'Discutir com o serviço de saúde a indicação da profilaxia pré-exposição (PrEP)',
          'Realizar o pré-natal completo, que inclui a testagem e reduz muito a transmissão para o bebê',
        ],
        cta: {
          label: 'Leia também: o que fazer nas primeiras 72 horas após uma exposição',
          href: '/artigos/hiv-o-que-fazer-nas-primeiras-72-horas/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento antirretroviral é gratuito no sistema público de saúde e deve ser iniciado o quanto antes, para todas as pessoas diagnosticadas. Com o tratamento correto e contínuo, a carga viral pode se tornar indetectável.',
          'Carga viral indetectável significa que o HIV não é transmitido por via sexual. Essa é a base do conceito conhecido como indetectável igual a intransmissível.',
          'O acompanhamento inclui exames periódicos, apoio para a adesão ao tratamento e cuidado com a saúde de forma ampla.',
        ],
        cta: {
          label: 'Leia também: indetectável igual a intransmissível',
          href: '/artigos/indetectavel-intransmissivel-o-que-significa/',
        },
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure um serviço de saúde imediatamente após uma situação de risco, para avaliar a profilaxia pós-exposição, que só é eficaz se iniciada em até 72 horas.',
          'Também procure atendimento se houver febre prolongada, perda de peso, diarreia frequente, gânglios inchados ou infecções de repetição, e peça a testagem.',
        ],
      },
    ],
    faq: [
      {
        question: 'Viver com HIV é o mesmo que ter aids?',
        answer:
          'Não. A aids é o estágio mais avançado da infecção, quando a imunidade está comprometida. Com tratamento, a infecção pelo HIV pode permanecer controlada e a pessoa não desenvolve aids.',
      },
      {
        question: 'HIV tem cura?',
        answer:
          'Não há cura até o momento, mas o tratamento antirretroviral controla a infecção, preserva a imunidade e permite uma vida longa com qualidade.',
      },
      {
        question: 'Uma pessoa com carga viral indetectável transmite HIV?',
        answer:
          'Não por via sexual. Carga viral indetectável de forma sustentada, com tratamento em dia, significa que o HIV não é transmitido sexualmente.',
      },
    ],
    relatedArticleSlugs: ['hiv-o-que-fazer-nas-primeiras-72-horas', 'indetectavel-intransmissivel-o-que-significa'],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['tuberculose', 'hepatites-virais'],
    references: [
      {
        label: 'HIV e aids: prevenção, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hiv-aids',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'HIV and AIDS: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/hiv-aids',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Dados e informações sobre o HIV',
        url: 'https://unaids.org.br/',
        publisher: 'UNAIDS Brasil',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'hepatites-virais',
    slug: 'hepatites-virais',
    metaTitle: 'Hepatites virais: sintomas e prevenção',
    name: 'Hepatites virais',
    aliases: ['hepatite A', 'hepatite B', 'hepatite C', 'inflamação do fígado'],
    summary:
      'Inflamações do fígado causadas por vírus diferentes, transmitidos por água e alimentos ou por sangue e fluidos. Costumam ser silenciosas e podem se tornar crônicas.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que são hepatites virais?',
        paragraphs: [
          'Hepatite é a inflamação do fígado. Quando a causa é um vírus, ela é chamada de hepatite viral. As mais frequentes são as hepatites A, B, C, D e E.',
          'Elas não são a mesma doença com nomes diferentes: os vírus são distintos, as formas de transmissão mudam e as consequências também. As hepatites B e C são as que mais preocupam pela chance de se tornarem crônicas.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'A maioria das hepatites virais é silenciosa, sobretudo no início. Muitas pessoas só descobrem a infecção em exames de rotina ou quando o fígado já está comprometido.',
          'Quando há sintomas, eles costumam ser inespecíficos:',
        ],
        bullets: [
          'Cansaço e mal-estar',
          'Náusea, vômito e falta de apetite',
          'Dor ou desconforto no lado direito do abdômen',
          'Urina escura e fezes claras',
          'Pele e olhos amarelados, chamados de icterícia',
        ],
        cta: {
          label: 'Leia também: quais hepatites têm vacina',
          href: '/artigos/hepatites-virais-quais-tem-vacina/',
        },
      },
      {
        id: 'transmissao',
        heading: 'Como cada hepatite é transmitida?',
        paragraphs: [
          'As formas de transmissão se dividem em dois grupos, e essa diferença define as medidas de prevenção.',
        ],
        bullets: [
          'Hepatites A e E: via fecal-oral, por água e alimentos contaminados e por falta de higiene',
          'Hepatites B, C e D: por sangue e fluidos, em relações sexuais sem preservativo, no compartilhamento de agulhas e objetos cortantes, e da gestante para o bebê',
          'A hepatite D só ocorre em quem já tem hepatite B',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico é feito por exames de sangue, disponíveis gratuitamente no sistema público de saúde, incluindo testes rápidos para as hepatites B e C.',
          'Como a infecção costuma ser silenciosa, a testagem é indicada para todas as pessoas adultas pelo menos uma vez na vida, e com mais frequência em quem tem fatores de risco.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        bullets: [
          'Vacinar-se contra as hepatites A e B, disponíveis gratuitamente no sistema público de saúde',
          'Lavar as mãos e cuidar da higiene dos alimentos e da água, contra as hepatites A e E',
          'Usar preservativo nas relações sexuais',
          'Não compartilhar agulhas, seringas, lâminas, alicates e outros objetos que cortam ou perfuram',
          'Fazer o pré-natal completo, que inclui a testagem e medidas para proteger o bebê',
        ],
        cta: {
          label: 'Leia também: como se proteger das hepatites A e B',
          href: '/artigos/hepatites-virais-quais-tem-vacina/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento depende do tipo. A hepatite A costuma se resolver sozinha, com repouso e hidratação. A hepatite B é controlada com medicamentos, e a hepatite C tem cura com antivirais de ação direta, disponíveis gratuitamente no sistema público de saúde.',
          'O acompanhamento contínuo é o que evita a evolução para cirrose e câncer de fígado, por isso a detecção precoce muda o desfecho.',
        ],
        cta: {
          label: 'Leia também: hepatite C tem cura',
          href: '/artigos/hepatite-c-tem-cura/',
        },
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure atendimento se houver pele e olhos amarelados, urina muito escura, dor abdominal intensa, vômitos persistentes ou confusão mental.',
          'Também procure o serviço de saúde se houver qualquer situação de risco recente, como relação sexual desprotegida ou compartilhamento de agulhas, para avaliar a testagem.',
        ],
      },
    ],
    faq: [
      {
        question: 'Hepatite C tem cura?',
        answer:
          'Sim. O tratamento com antivirais de ação direta cura a maioria das pessoas e está disponível gratuitamente no sistema público de saúde.',
      },
      {
        question: 'Existe vacina para todas as hepatites virais?',
        answer:
          'Não. Há vacinas para as hepatites A e B, e a vacina contra a hepatite B também protege contra a hepatite D. Não existem vacinas disponíveis para as hepatites C e E.',
      },
      {
        question: 'Hepatite B tem cura?',
        answer:
          'Na maior parte dos casos ela se torna uma infecção crônica controlada com medicamentos, e não eliminada. O acompanhamento contínuo evita a progressão para cirrose.',
      },
    ],
    relatedArticleSlugs: ['hepatites-virais-quais-tem-vacina', 'hepatite-c-tem-cura'],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['hiv-aids', 'tuberculose'],
    references: [
      {
        label: 'Hepatites virais: prevenção, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hepatites-virais',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Hepatitis A: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-a',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Hepatitis B: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-b',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'asma-e-dpoc',
    slug: 'asma-e-dpoc',
    name: 'Asma e DPOC',
    aliases: ['asma', 'DPOC', 'bronquite crônica', 'enfisema', 'doença pulmonar obstrutiva crônica'],
    summary:
      'Duas doenças crônicas das vias respiratórias. Na asma a limitação do fluxo de ar é reversível; na DPOC, em geral ligada ao tabagismo, ela é progressiva.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que são asma e DPOC?',
        paragraphs: [
          'Asma e DPOC são doenças crônicas que obstruem a passagem do ar nos pulmões, mas não são a mesma coisa.',
          'Na asma, as vias aéreas ficam inflamadas e reagem de forma exagerada a gatilhos como poeira, mofo, fumaça e resfriados. A obstrução é reversível, e as crises alternam com períodos de controle.',
          'Na DPOC, sigla de doença pulmonar obstrutiva crônica, a obstrução é progressiva e está ligada sobretudo ao tabagismo. Ela reúne o enfisema e a bronquite crônica, e costuma se manifestar depois de anos de exposição.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os sintomas das duas doenças se parecem, e só um profissional pode diferenciá-las.',
        ],
        bullets: [
          'Chiado no peito, chamado de sibilância',
          'Falta de ar, que piora com esforço',
          'Aperto ou pressão no peito',
          'Tosse, muitas vezes seca na asma e com catarro na DPOC',
          'Piora dos sintomas à noite ou no início da manhã',
          'Cansaço para atividades que antes eram fáceis',
        ],
        cta: {
          label: 'Leia também: o que fazer em uma crise de asma',
          href: '/artigos/asma-crise-o-que-fazer-enquanto-espera-atendimento/',
        },
      },
      {
        id: 'transmissao',
        heading: 'Asma e DPOC são contagiosas?',
        paragraphs: [
          'Não. São doenças crônicas não transmissíveis. Uma infecção respiratória pode desencadear uma crise, mas a doença em si não passa de uma pessoa para outra.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa pela história clínica e pelo exame físico, e é confirmado pela espirometria, um exame que mede como o ar entra e sai dos pulmões. O resultado antes e depois do uso de um broncodilatador ajuda a diferenciar as duas doenças.',
          'Na asma, identificar os gatilhos que desencadeiam as crises faz parte do diagnóstico e do tratamento.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir crises e progressão',
        bullets: [
          'Não fumar e evitar a exposição à fumaça do tabaco, inclusive passiva',
          'Evitar contato com poeira, mofo, fumaça e outros gatilhos conhecidos',
          'Manter as vacinas em dia, sobretudo contra a gripe e as infecções respiratórias',
          'Seguir o tratamento de controle de forma contínua, mesmo nos períodos sem sintomas',
          'Controlar peso e manter atividade física, com orientação profissional',
        ],
        cta: {
          label: 'Leia também: por que parar de fumar muda o quadro na DPOC',
          href: '/artigos/dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento da asma tem como base o medicamento de controle, que reduz a inflamação e deve ser usado todos os dias, mesmo quando a pessoa está bem. O medicamento de alívio serve para a crise e não substitui o de controle.',
          'Na DPOC, o tratamento inclui broncodilatadores, reabilitação pulmonar e, sobretudo, a cessação do tabagismo, a medida que mais altera a evolução da doença.',
          'Em ambas, usar o inalador do jeito certo é parte do tratamento: a técnica errada faz o medicamento não chegar aos pulmões.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'Uma crise grave é uma emergência. Procure atendimento imediatamente se houver:',
        ],
        bullets: [
          'Dificuldade para falar frases completas',
          'Uso visível da musculatura do pescoço e das costelas para respirar',
          'Lábios ou pontas dos dedos azulados',
          'Sonolência ou confusão durante a crise',
          'Falta de resposta ao medicamento de alívio',
          'Piora progressiva apesar do tratamento habitual',
        ],
      },
    ],
    faq: [
      {
        question: 'Asma tem cura?',
        answer:
          'Não há cura, mas a asma pode ser controlada. Com o tratamento de controle feito corretamente, a maior parte das pessoas vive sem crises frequentes.',
      },
      {
        question: 'Posso usar só a bombinha de alívio quando sinto falta de ar?',
        answer:
          'Não. O medicamento de alívio trata o sintoma, mas não a inflamação. Usar apenas o de alívio com frequência indica que o controle está inadequado e exige reavaliação profissional.',
      },
      {
        question: 'Parar de fumar ajuda quem já tem DPOC?',
        answer:
          'Sim. É a medida que mais altera a evolução da doença: reduz a velocidade da perda de função pulmonar e melhora os sintomas.',
      },
    ],
    relatedArticleSlugs: [
      'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
    ],
    relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedDiseaseSlugs: ['hipertensao', 'diabetes'],
    references: [
      {
        label: 'Asma: orientações e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Asthma: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/asthma',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Chronic obstructive pulmonary disease (COPD): fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'infarto-e-avc',
    slug: 'infarto-e-avc',
    name: 'Infarto e AVC',
    aliases: ['ataque cardíaco', 'infarto agudo do miocárdio', 'derrame', 'acidente vascular cerebral'],
    summary:
      'Duas emergências cardiovasculares em que cada minuto conta. Reconhecer os sinais e chamar ajuda imediatamente muda o desfecho.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que são infarto e AVC?',
        paragraphs: [
          'O infarto agudo do miocárdio acontece quando uma artéria que leva sangue ao coração é obstruída e uma parte do músculo cardíaco fica sem oxigênio.',
          'O AVC, acidente vascular cerebral, acontece quando uma artéria do cérebro é obstruída ou se rompe, e uma região do cérebro deixa de receber sangue.',
          'São eventos diferentes, mas têm a mesma lógica: tecido sem oxigênio começa a morrer em minutos. Por isso os dois são emergências e o tempo é o fator mais importante do desfecho.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sinais?',
        paragraphs: [
          'No infarto, o sinal mais comum é a dor ou o aperto no peito, que pode irradiar para o braço esquerdo, o pescoço, a mandíbula ou as costas. Em pessoas com diabetes e em idosos, o infarto pode se manifestar sem dor intensa, apenas com falta de ar, cansaço ou mal-estar.',
          'No AVC, os sinais costumam ser de um lado do corpo apenas:',
        ],
        bullets: [
          'Fraqueza ou dormência de um lado do rosto, com o canto da boca caído',
          'Fraqueza no braço ou na perna de um lado do corpo',
          'Dificuldade para falar ou para entender o que é dito',
          'Perda súbita de visão em um ou nos dois olhos',
          'Dor de cabeça súbita e muito intensa',
          'Desequilíbrio, tontura intensa ou dificuldade para andar',
        ],
        cta: {
          label: 'Leia também: como reconhecer os sinais do AVC e agir rápido',
          href: '/artigos/avc-como-reconhecer-os-sinais-e-agir-rapido/',
        },
      },
      {
        id: 'transmissao',
        heading: 'Infarto e AVC são contagiosos?',
        paragraphs: [
          'Não. São doenças cardiovasculares, ligadas a fatores de risco como pressão alta, diabetes, tabagismo e colesterol elevado. Não se transmitem entre pessoas.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'Nos dois casos o diagnóstico é feito no atendimento de urgência, a partir dos sintomas, do exame clínico e de exames de imagem e de sangue. Nada disso deve atrasar a chamada por ajuda.',
          'Quem tem fatores de risco também faz acompanhamento regular para avaliar pressão, glicose, colesterol e outros indicadores, o que permite agir antes do evento.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir',
        paragraphs: [
          'A hipertensão é o principal fator de risco para o AVC e um dos principais para o infarto. Boa parte da prevenção é o controle dos fatores de risco ao longo dos anos.',
        ],
        bullets: [
          'Medir a pressão periodicamente e tratar a hipertensão',
          'Controlar a glicose, no caso do diabetes',
          'Não fumar',
          'Manter alimentação variada, com menos sal e ultraprocessados',
          'Praticar atividade física regularmente',
          'Tratar arritmias e outras condições quando diagnosticadas',
          'Tomar a medicação de forma contínua, sem interromper por conta própria',
        ],
        cta: {
          label: 'Leia também: os sinais do infarto e o que fazer',
          href: '/artigos/infarto-quais-sao-os-sinais-e-o-que-fazer/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento começa no atendimento de urgência, com medidas para restabelecer o fluxo de sangue o mais rápido possível. Depois do evento, o acompanhamento inclui medicamentos, reabilitação e mudanças de hábito.',
          'Na reabilitação do AVC, a fisioterapia e a fonoaudiologia iniciadas cedo fazem diferença na recuperação dos movimentos e da fala.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'O que fazer diante de uma suspeita',
        paragraphs: [
          'Chame ajuda imediatamente pelo SAMU, no número 192, ou leve a pessoa ao serviço de urgência mais próximo. Não espere os sintomas passarem e não leve a pessoa para casa para observar.',
        ],
        bullets: [
          'Anote o horário em que os sintomas começaram: essa informação muda o tratamento',
          'Não ofereça comida, bebida ou medicamento por conta própria',
          'Não deixe a pessoa sozinha',
          'Se houver perda de consciência, mantenha as vias aéreas livres e siga as orientações do serviço de emergência',
        ],
      },
    ],
    faq: [
      {
        question: 'Quanto tempo tenho para procurar ajuda em um AVC?',
        answer:
          'O quanto antes. Existem tratamentos que precisam ser iniciados nas primeiras horas após o início dos sintomas, e a demora reduz as chances de recuperação.',
      },
      {
        question: 'Dor no peito sempre significa infarto?',
        answer:
          'Não. Existem outras causas de dor no peito, algumas graves. Como não é possível diferenciar sozinho em casa, a recomendação é buscar atendimento imediatamente.',
      },
      {
        question: 'Pressão alta tem relação com AVC?',
        answer:
          'Sim. A hipertensão é o principal fator de risco para o AVC, e por isso o controle da pressão ao longo dos anos é uma das medidas mais eficazes de prevenção.',
      },
    ],
    relatedArticleSlugs: ['infarto-quais-sao-os-sinais-e-o-que-fazer', 'avc-como-reconhecer-os-sinais-e-agir-rapido'],
    relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedDiseaseSlugs: ['hipertensao', 'diabetes'],
    references: [
      {
        label: 'Doenças cardiovasculares: prevenção e cuidados',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doencas-cardiovasculares',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Cardiovascular diseases: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
];
