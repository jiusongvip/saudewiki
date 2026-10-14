import type { Article } from '../types';

/**
 * Health articles.
 *
 * These carry the long-tail search traffic and are the main bridge into the
 * disease encyclopedia: every article lists the diseases it relates to, and
 * every disease lists the articles that expand on it.
 *
 * Same reference caveat as `diseases.ts`: verify each URL against the live
 * source page before launch. The `mitos-e-verdades-sobre-dengue` entry is
 * `draft` on purpose, to prove draft content never reaches a build.
 */
export const articles: Article[] = [
  {
    id: 'sintomas-iniciais-da-dengue',
    slug: 'sintomas-iniciais-da-dengue',
    title: 'Quais são os primeiros sintomas da dengue?',
    excerpt:
      'Febre alta de início súbito, dor atrás dos olhos e dores no corpo são os sinais mais frequentes. Entenda o que aparece primeiro e quando a doença se agrava.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-que-observar-primeiro',
        heading: 'O que costuma aparecer primeiro',
        paragraphs: [
          'Os sintomas da dengue normalmente começam entre quatro e dez dias depois da picada do mosquito. O início tende a ser abrupto: a pessoa sai de um estado normal para febre alta em poucas horas.',
          'Os sinais mais comuns nas primeiras 24 a 48 horas são febre alta, dor de cabeça, dor atrás dos olhos e dores intensas nos músculos e nas articulações.',
        ],
      },
      {
        id: 'primeiros-sinais',
        heading: 'Primeiros sinais, em ordem aproximada',
        bullets: [
          'Febre alta, geralmente acima de 38 °C, de início súbito',
          'Dor de cabeça intensa, muitas vezes atrás dos olhos',
          'Dores no corpo, nos músculos e nas articulações',
          'Náusea, vômito e perda de apetite',
          'Manchas vermelhas na pele, que podem surgir do terceiro ao sexto dia',
        ],
      },
      {
        id: 'o-que-muda-no-terceiro-dia',
        heading: 'O que muda por volta do terceiro dia',
        paragraphs: [
          'A fase mais delicada não é o pico da febre, e sim o momento em que ela começa a ceder. É nesse período que os casos graves costumam se manifestar.',
          'Sinais como dor abdominal intensa, vômitos persistentes, sangramentos e sonolência exigem avaliação imediata em serviço de saúde.',
        ],
        cta: {
          label: 'Veja os sinais de alerta na página sobre dengue',
          href: '/doencas/dengue/',
        },
      },
      {
        id: 'o-que-nao-e-sintoma',
        heading: 'O que não é sintoma típico',
        paragraphs: [
          'Espirros frequentes, coriza e obstrução nasal são mais sugestivos de resfriado ou de outras infecções respiratórias do que de dengue. Isso não substitui avaliação profissional, mas ajuda a organizar a suspeita.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer se você suspeitar',
        paragraphs: [
          'Hidrate-se, evite medicamentos à base de ácido acetilsalicílico e anti-inflamatórios, e procure uma unidade de saúde para avaliação. O diagnóstico e o manejo dependem de um profissional.',
        ],
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: ['como-prevenir-a-dengue', 'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'como-prevenir-a-dengue',
    slug: 'como-prevenir-a-dengue',
    title: 'Como prevenir a dengue?',
    excerpt:
      'Sem tratamento específico contra o vírus, a prevenção se concentra em eliminar criadouros do mosquito e evitar a picada. Veja o que funciona na prática.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'por-que-a-prevencao-e-central',
        heading: 'Por que a prevenção é central',
        paragraphs: [
          'Não existe antiviral específico contra a dengue. Isso significa que reduzir a população do mosquito e evitar a picada é a estratégia mais eficaz disponível.',
          'O Aedes aegypti se reproduz em água parada. Qualquer recipiente com água limpa e parada, por menor que seja, pode servir de criadouro.',
        ],
      },
      {
        id: 'criadouros',
        heading: 'Criadouros que costumam passar despercebidos',
        bullets: [
          'Pratos de vasos de plantas e folhagens que acumulam água',
          'Calhas entupidas e lajes com pontos de acúmulo',
          'Pneus, baldes, garrafas e brinquedos guardados ao ar livre',
          'Caixas d’água, tonéis e cisternas sem tampa',
          'Bebedouros de animais e ralos pouco usados',
          'Vasos sanitários e reservatórios em imóveis fechados',
        ],
      },
      {
        id: 'rotina',
        heading: 'Uma rotina semanal de dez minutos',
        paragraphs: [
          'Reservar um dia fixo da semana para vistoriar o quintal e as áreas comuns é mais eficaz do que mutirões isolados. O ciclo de reprodução do mosquito é curto, e a vistoria semanal interrompe esse ciclo antes que novos adultos apareçam.',
        ],
      },
      {
        id: 'evitar-picada',
        heading: 'Como reduzir o risco de picada',
        paragraphs: [
          'O mosquito tem hábitos diurnos, com maior atividade no início da manhã e no fim da tarde.',
        ],
        bullets: [
          'Usar repelente, seguindo a orientação do fabricante',
          'Preferir roupas que cubram braços e pernas nos horários de maior atividade',
          'Instalar telas em janelas e usar mosquiteiros em regiões com transmissão intensa',
        ],
      },
      {
        id: 'o-que-nao-funciona',
        heading: 'O que não substitui a prevenção',
        paragraphs: [
          'Vitaminas, chás e soluções caseiras não previnem a infecção. O controle do mosquito depende de eliminar criadouros de forma contínua, não de medidas pontuais.',
        ],
        cta: {
          label: 'Entenda a transmissão na página sobre dengue',
          href: '/doencas/dengue/',
        },
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: ['sintomas-iniciais-da-dengue', 'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
    slug: 'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
    title: 'Quando procurar atendimento médico em caso de suspeita de dengue?',
    metaTitle: 'Dengue: quando procurar atendimento',
    excerpt:
      'A maioria dos casos evolui bem com hidratação e repouso. Mas alguns sinais indicam risco de forma grave e exigem avaliação imediata: saiba quais são.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'regra-geral',
        heading: 'A regra geral',
        paragraphs: [
          'Diante de febre com dores no corpo em uma região com transmissão de dengue, procure uma unidade de saúde para avaliação. O profissional vai definir se há necessidade de exames e de acompanhamento mais próximo.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta que exigem atendimento imediato',
        paragraphs: [
          'Estes sinais costumam aparecer na fase em que a febre começa a ceder, e não no pico dela. É justamente por isso que muita gente os ignora.',
        ],
        bullets: [
          'Dor abdominal intensa e contínua',
          'Vômitos persistentes que impedem a hidratação',
          'Sangramento de gengiva, nariz, urina ou fezes',
          'Sonolência excessiva, irritabilidade ou confusão mental',
          'Diminuição acentuada da urina ou outros sinais de desidratação',
          'Extremidades frias, palidez ou dificuldade para respirar',
        ],
      },
      {
        id: 'grupos-de-maior-risco',
        heading: 'Quem precisa de atenção redobrada',
        bullets: [
          'Crianças pequenas e idosos',
          'Gestantes',
          'Pessoas com doenças crônicas, como diabetes e hipertensão',
          'Pessoas em uso de medicamentos anticoagulantes',
        ],
        cta: {
          label: 'Saiba mais sobre hipertensão',
          href: '/doencas/hipertensao/',
        },
      },
      {
        id: 'o-que-nao-fazer',
        heading: 'O que não fazer enquanto espera atendimento',
        paragraphs: [
          'Não use ácido acetilsalicílico nem anti-inflamatórios não esteroides por conta própria, pelo risco de sangramento. Mantenha a hidratação e evite automedicação.',
        ],
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: ['sintomas-iniciais-da-dengue', 'como-prevenir-a-dengue'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'diabetes-tipo-2-o-que-muda-no-dia-a-dia',
    slug: 'diabetes-tipo-2-o-que-muda-no-dia-a-dia',
    title: 'Diabetes tipo 2: o que muda no dia a dia?',
    excerpt:
      'O diagnóstico de diabetes tipo 2 não significa uma lista de proibições. Significa acompanhamento, ajustes graduais e monitoramento: entenda o que muda de verdade.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-muda',
        heading: 'O que muda de verdade',
        paragraphs: [
          'O diabetes tipo 2 é uma condição crônica, e o tratamento é de longo prazo. Na prática, o dia a dia passa a incluir três coisas novas: monitoramento, alimentação planejada e movimento regular.',
        ],
      },
      {
        id: 'monitoramento',
        heading: 'Monitoramento',
        paragraphs: [
          'Acompanhar a glicose em casa, quando indicado, ajuda a entender como o corpo responde a diferentes alimentos, horários e níveis de atividade. Os exames de acompanhamento são definidos pelo profissional de saúde.',
        ],
      },
      {
        id: 'alimentacao',
        heading: 'Alimentação',
        paragraphs: [
          'Não existe lista universal de alimentos proibidos. O que costuma ajudar é regularidade nos horários, controle das porções e redução de bebidas açucaradas e ultraprocessados.',
        ],
      },
      {
        id: 'movimento',
        heading: 'Atividade física',
        paragraphs: [
          'Movimento regular melhora a resposta do corpo à insulina. A recomendação deve ser ajustada à condição de cada pessoa e definida com acompanhamento profissional.',
        ],
      },
      {
        id: 'onde-entender-mais',
        heading: 'Onde entender mais sobre a doença',
        paragraphs: [
          'A página sobre diabetes traz uma visão geral dos tipos, sintomas e complicações.',
        ],
        cta: {
          label: 'Ir para a página sobre diabetes',
          href: '/doencas/diabetes/',
        },
      },
    ],
    diseaseSlugs: ['diabetes'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['hipertensao-como-medir-a-pressao-em-casa'],
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
    id: 'hipertensao-como-medir-a-pressao-em-casa',
    slug: 'hipertensao-como-medir-a-pressao-em-casa',
    title: 'Hipertensão: como medir a pressão arterial em casa',
    metaTitle: 'Hipertensão: medir a pressão em casa',
    excerpt:
      'Medir em casa pode ajudar muito no controle da pressão: desde que a medição seja feita do jeito certo. Veja os cuidados que mudam o resultado.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'por-que-medir-em-casa',
        heading: 'Por que medir em casa',
        paragraphs: [
          'A pressão varia ao longo do dia e muda conforme a situação. Medições repetidas, feitas em casa e em datas diferentes, ajudam o profissional de saúde a entender o padrão real.',
        ],
      },
      {
        id: 'antes-de-medir',
        heading: 'Antes de medir',
        bullets: [
          'Evite café, cigarro e atividade física nos 30 minutos anteriores',
          'Esvazie a bexiga',
          'Descanse sentado por alguns minutos antes da medição',
        ],
      },
      {
        id: 'durante-a-medicao',
        heading: 'Durante a medição',
        bullets: [
          'Sente-se com as costas apoiadas e os pés no chão',
          'Mantenha o braço apoiado na altura do coração',
          'Não fale durante a medição',
          'Faça pelo menos duas medições, com um minuto de intervalo',
        ],
      },
      {
        id: 'interpretar',
        heading: 'O que fazer com os números',
        paragraphs: [
          'O aparelho mede um momento, não define diagnóstico. Anote os valores com data e horário e leve o registro para a consulta. A interpretação e a decisão sobre tratamento são do profissional de saúde.',
        ],
        cta: {
          label: 'Entenda a hipertensão na página completa',
          href: '/doencas/hipertensao/',
        },
      },
    ],
    diseaseSlugs: ['hipertensao'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['diabetes-tipo-2-o-que-muda-no-dia-a-dia'],
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
    id: 'vacinacao-o-que-e-o-calendario-basico',
    slug: 'vacinacao-o-que-e-o-calendario-basico',
    title: 'Vacinação infantil: o que é o calendário básico?',
    excerpt:
      'O calendário de vacinação organiza quais vacinas são recomendadas em cada faixa etária. Entenda como ele funciona e por que o acompanhamento é contínuo.',
    category: 'Saúde infantil',
    categorySlug: 'saude-infantil',
    body: [
      {
        id: 'o-que-e-o-calendario',
        heading: 'O que é o calendário de vacinação',
        paragraphs: [
          'O calendário é um cronograma que indica quais vacinas são recomendadas em cada idade. Ele é atualizado periodicamente pelas autoridades de saúde, conforme novas evidências e novos produtos.',
        ],
      },
      {
        id: 'por-que-seguir',
        heading: 'Por que seguir o calendário',
        paragraphs: [
          'A proteção é construída por etapas. Algumas vacinas exigem doses de reforço para que a resposta do sistema imunológico se mantenha ao longo do tempo.',
        ],
      },
      {
        id: 'onde-consultar',
        heading: 'Onde consultar o calendário atualizado',
        paragraphs: [
          'O calendário vigente deve ser sempre consultado na fonte oficial, porque as recomendações mudam. A caderneta da criança é o registro que acompanha esse histórico.',
        ],
        cta: {
          label: 'Ver o tema de saúde infantil',
          href: '/temas/saude-infantil/',
        },
      },
    ],
    diseaseSlugs: [],
    topicSlugs: ['saude-infantil', 'prevencao'],
    relatedArticleSlugs: ['como-prevenir-a-dengue'],
    references: [
      {
        label: 'Calendário Nacional de Vacinação',
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Immunization: topic overview',
        url: 'https://www.who.int/health-topics/vaccines-and-immunization',
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
    id: 'mitos-e-verdades-sobre-dengue',
    slug: 'mitos-e-verdades-sobre-dengue',
    title: 'Mitos e verdades sobre a dengue',
    excerpt: 'Rascunho editorial mantido fora do build para validar o filtro de status.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'rascunho',
        heading: 'Rascunho',
        paragraphs: ['Este texto não deve aparecer no site enquanto não passar pela revisão editorial.'],
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [],
    references: [],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'draft',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'chikungunya-dor-nas-articulacoes-quanto-tempo-dura',
    slug: 'chikungunya-dor-nas-articulacoes-quanto-tempo-dura',
    metaTitle: 'Chikungunya: quanto dura a dor articular',
    title: 'Chikungunya: quanto tempo dura a dor nas articulações?',
    excerpt:
      'A dor articular é a marca da chikungunya e, para parte das pessoas, ela continua depois que a febre passa. Entenda as fases da doença e o que ajuda na recuperação.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-a-dor-e-tao-forte',
        heading: 'Por que a dor articular é tão forte',
        paragraphs: [
          'Na chikungunya, o vírus provoca uma inflamação intensa nas articulações. É isso que dá à doença a sua característica mais marcante: a dor costuma ser mais forte e mais localizada do que na dengue, e muitas vezes vem acompanhada de inchaço.',
          'As articulações mais atingidas são as das mãos, dos pés, dos tornozelos e dos joelhos. Em alguns casos, a dor é tão intensa que dificulta caminhar ou segurar objetos.',
        ],
      },
      {
        id: 'tres-fases',
        heading: 'As três fases da doença',
        paragraphs: [
          'A evolução da chikungunya costuma ser descrita em três fases, e isso ajuda a entender por que a recuperação não é igual para todo mundo.',
        ],
        bullets: [
          'Fase aguda: até cerca de dez dias, com febre alta e dor articular intensa',
          'Fase pós-aguda: de dez dias a três meses, quando a febre cede e a dor pode continuar',
          'Fase crônica: além de três meses, quando a dor articular persiste e passa a exigir acompanhamento',
        ],
      },
      {
        id: 'quanto-tempo-dura',
        heading: 'Quanto tempo dura, na prática',
        paragraphs: [
          'A maioria das pessoas melhora em algumas semanas. Uma parte dos casos mantém dor por meses, e uma parcela menor convive com sintomas articulares por mais tempo.',
          'Não é possível prever de antemão quem vai evoluir para a forma prolongada. Idade mais avançada, dor articular prévia e quadros mais intensos na fase aguda aparecem associados a uma recuperação mais lenta.',
        ],
      },
      {
        id: 'o-que-ajuda',
        heading: 'O que ajuda na recuperação',
        paragraphs: [
          'Nas primeiras semanas, o cuidado é o mesmo das outras arboviroses: repouso, hidratação e alívio da dor com orientação profissional. Medicamentos à base de ácido acetilsalicílico e anti-inflamatórios não esteroides devem ser evitados enquanto a dengue não for descartada.',
          'Quando a dor persiste, a fisioterapia costuma fazer parte do tratamento, com exercícios graduais que ajudam a manter o movimento e a força da articulação. A conduta é definida caso a caso.',
        ],
        cta: {
          label: 'Veja a página completa sobre chikungunya',
          href: '/doencas/chikungunya/',
        },
      },
      {
        id: 'quando-voltar',
        heading: 'Quando voltar ao serviço de saúde',
        paragraphs: [
          'Volte se a dor não melhorar, se houver inchaço importante, se a articulação perder movimento ou se aparecerem sinais de alerta como dor abdominal intensa, vômitos persistentes, sangramento ou sonolência.',
        ],
        cta: {
          label: 'Compare com os sinais da dengue',
          href: '/doencas/dengue/',
        },
      },
    ],
    diseaseSlugs: ['chikungunya'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: ['chikungunya-e-dengue-como-diferenciar', 'sintomas-iniciais-da-dengue'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'chikungunya-e-dengue-como-diferenciar',
    slug: 'chikungunya-e-dengue-como-diferenciar',
    title: 'Chikungunya e dengue: como diferenciar?',
    excerpt:
      'As duas doenças são transmitidas pelo mesmo mosquito e começam com febre alta e dores no corpo. A diferença principal está na dor articular, e isso muda a conduta.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-confunde',
        heading: 'Por que as duas se confundem',
        paragraphs: [
          'Dengue e chikungunya são transmitidas pelos mesmos mosquitos, circulam nas mesmas áreas e começam de forma parecida: febre alta de início súbito, dor de cabeça, dor no corpo e mal-estar.',
          'Por isso, o que diferencia uma da outra raramente é um sintoma isolado. O conjunto e a intensidade de cada sinal é que orientam a suspeita.',
        ],
      },
      {
        id: 'diferencas',
        heading: 'As diferenças que costumam aparecer',
        bullets: [
          'Dor articular: na chikungunya tende a ser muito intensa e incapacitante; na dengue é comum, mas menos localizada',
          'Inchaço articular: mais frequente na chikungunya',
          'Manchas na pele: podem aparecer nas duas, em momentos diferentes',
          'Dor atrás dos olhos: mais característica da dengue',
          'Duração: na chikungunya a dor articular pode se prolongar por semanas ou meses',
        ],
      },
      {
        id: 'o-que-nao-serve',
        heading: 'O que não serve para diferenciar',
        paragraphs: [
          'A presença de sangramento, por si só, não confirma dengue. E a ausência de manchas na pele não descarta nenhuma das duas. Também não é possível diferenciar pelo local onde a pessoa mora ou pela época do ano, já que as duas circulam juntas.',
          'Só a avaliação em serviço de saúde, com exame clínico e, quando indicado, exames laboratoriais, permite definir a causa.',
        ],
      },
      {
        id: 'por-que-importa',
        heading: 'Por que a diferença importa',
        paragraphs: [
          'As duas doenças não têm antiviral específico e o tratamento inicial é parecido. A diferença está no acompanhamento: a dengue exige atenção aos sinais de alerta, que aparecem quando a febre cede, e a chikungunya pode exigir acompanhamento prolongado da dor articular.',
          'Nos dois casos, medicamentos à base de ácido acetilsalicílico e anti-inflamatórios não esteroides devem ser evitados até que a dengue seja descartada, pelo risco de sangramento.',
        ],
        cta: {
          label: 'Entenda os sinais de alerta da dengue',
          href: '/doencas/dengue/',
        },
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer diante da dúvida',
        paragraphs: [
          'Procure uma unidade de saúde para avaliação, informe onde você mora ou viajou nos últimos dias e relate todos os sintomas, inclusive a intensidade da dor nas articulações. Não tente diferenciar em casa nem se automedicar.',
        ],
        cta: {
          label: 'Veja a página sobre chikungunya',
          href: '/doencas/chikungunya/',
        },
      },
    ],
    diseaseSlugs: ['chikungunya', 'dengue'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: [
      'chikungunya-dor-nas-articulacoes-quanto-tempo-dura',
      'sintomas-iniciais-da-dengue',
    ],
    references: [
      {
        label: 'Chikungunya: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/chikungunya',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Dengue and severe dengue: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
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
    id: 'zika-na-gestacao-o-que-a-infeccao-pode-causar',
    slug: 'zika-na-gestacao-o-que-a-infeccao-pode-causar',
    title: 'Zika na gestação: o que a infecção pode causar?',
    excerpt:
      'A infecção pelo zika durante a gestação pode atingir o sistema nervoso do bebê. Entenda por que o acompanhamento pré-natal é decisivo e como reduzir o risco.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-a-gestacao-e-diferente',
        heading: 'Por que a gestação é o ponto crítico',
        paragraphs: [
          'Para a maior parte das pessoas, o zika é uma infecção leve. O problema está na transmissão da gestante para o feto: o vírus pode atingir o sistema nervoso em formação e causar malformações.',
          'A chamada síndrome congênita do zika reúne um conjunto de alterações que podem aparecer no bebê, incluindo alterações no tamanho e no desenvolvimento do cérebro, problemas de visão e de audição e alterações no desenvolvimento motor.',
        ],
      },
      {
        id: 'sintomas-na-gestante',
        heading: 'Sintomas que exigem atenção imediata',
        paragraphs: [
          'Os sintomas na gestante são os mesmos das outras pessoas e podem ser leves: manchas vermelhas na pele com coceira, febre baixa, olhos vermelhos sem secreção, dor nas articulações e dor de cabeça.',
          'Como a infecção pode ser silenciosa, a orientação é procurar o serviço de saúde diante de qualquer um desses sinais durante a gestação, mesmo que pareçam banais.',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Como é o acompanhamento',
        paragraphs: [
          'A suspeita durante a gestação muda o pré-natal. O serviço de saúde pode indicar exames para investigar a infecção e um acompanhamento mais próximo, com avaliação do desenvolvimento do bebê por meio de exames de imagem.',
          'O acompanhamento continua depois do nascimento, com avaliação do desenvolvimento e, quando necessário, encaminhamento para estimulação precoce e outras especialidades.',
        ],
      },
      {
        id: 'como-reduzir-o-risco',
        heading: 'Como reduzir o risco',
        bullets: [
          'Evitar viajar para áreas com transmissão de zika durante a gestação, sempre conversando antes com o serviço de saúde',
          'Usar repelente, seguindo a orientação do fabricante',
          'Preferir roupas que cubram braços e pernas',
          'Instalar telas em janelas e portas e usar mosquiteiro para dormir',
          'Usar preservativo nas relações sexuais durante toda a gestação, já que o zika também é transmitido por via sexual',
          'Eliminar criadouros de mosquito em casa e nos arredores',
        ],
        cta: {
          label: 'Veja as medidas de proteção na página sobre zika',
          href: '/doencas/zika/',
        },
      },
      {
        id: 'parceiros',
        heading: 'O que vale para o parceiro também',
        paragraphs: [
          'Como o zika pode ser transmitido por via sexual, o cuidado não é só da gestante. O uso de preservativo durante toda a gestação protege a pessoa gestante de uma infecção que poderia afetar o bebê.',
        ],
        cta: {
          label: 'Entenda a transmissão do zika',
          href: '/doencas/zika/',
        },
      },
    ],
    diseaseSlugs: ['zika'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['zika-como-se-proteger-em-areas-com-transmissao', 'como-prevenir-a-dengue'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'zika-como-se-proteger-em-areas-com-transmissao',
    slug: 'zika-como-se-proteger-em-areas-com-transmissao',
    title: 'Zika: como se proteger em áreas com transmissão',
    excerpt:
      'Não existe vacina contra o zika. A proteção depende de evitar a picada do mosquito e de reduzir os criadouros, em casa e nos arredores.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'sem-vacina',
        heading: 'Sem vacina, a proteção é comportamental',
        paragraphs: [
          'Não há vacina disponível contra o zika, e não existe antiviral específico. Isso significa que reduzir a exposição ao mosquito é a estratégia central.',
          'O Aedes aegypti tem hábitos diurnos, com maior atividade no início da manhã e no fim da tarde. Ele se reproduz em água limpa e parada, em qualquer recipiente, por menor que seja.',
        ],
      },
      {
        id: 'criadouros',
        heading: 'Criadouros que costumam passar despercebidos',
        bullets: [
          'Pratos de vasos de plantas e folhagens que acumulam água',
          'Calhas entupidas e lajes com pontos de acúmulo',
          'Pneus, baldes, garrafas e brinquedos guardados ao ar livre',
          'Caixas d’água, tonéis e cisternas sem tampa',
          'Bebedouros de animais e ralos pouco usados',
          'Reservatórios em imóveis fechados',
        ],
      },
      {
        id: 'protecao-pessoal',
        heading: 'Proteção pessoal',
        bullets: [
          'Usar repelente nas áreas expostas da pele, seguindo a orientação do fabricante',
          'Preferir roupas que cubram braços e pernas nos horários de maior atividade do mosquito',
          'Instalar telas em janelas e portas',
          'Dormir com mosquiteiro em áreas com transmissão intensa',
        ],
      },
      {
        id: 'transmissao-sexual',
        heading: 'A via sexual também conta',
        paragraphs: [
          'Diferente da dengue e da chikungunya, o zika também pode ser transmitido por via sexual. O uso de preservativo é parte da prevenção, sobretudo quando há risco de gestação.',
        ],
        cta: {
          label: 'Leia também: zika na gestação',
          href: '/artigos/zika-na-gestacao-o-que-a-infeccao-pode-causar/',
        },
      },
      {
        id: 'o-que-nao-funciona',
        heading: 'O que não substitui a prevenção',
        paragraphs: [
          'Vitaminas, chás e soluções caseiras não previnem a infecção. O controle do mosquito depende de eliminar criadouros de forma contínua, não de medidas isoladas.',
        ],
        cta: {
          label: 'Veja o guia de prevenção da dengue, que usa o mesmo mosquito',
          href: '/artigos/como-prevenir-a-dengue/',
        },
      },
    ],
    diseaseSlugs: ['zika', 'dengue'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: ['zika-na-gestacao-o-que-a-infeccao-pode-causar', 'como-prevenir-a-dengue'],
    references: [
      {
        label: 'Zika: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/z/zika-virus',
        publisher: 'Ministério da Saúde (Brasil)',
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
    id: 'malaria-sintomas-e-quando-buscar-atendimento',
    slug: 'malaria-sintomas-e-quando-buscar-atendimento',
    title: 'Malária: sintomas e quando buscar atendimento',
    excerpt:
      'Febre com calafrios em área de transmissão é motivo para procurar atendimento no mesmo dia. A malária tem cura, mas pode se agravar em poucos dias.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'sintomas-iniciais',
        heading: 'Sintomas iniciais',
        paragraphs: [
          'Os primeiros sintomas da malária costumam aparecer entre sete e trinta dias depois da picada e se parecem com os de uma gripe: febre, dor de cabeça, dor no corpo e cansaço.',
          'A febre pode vir em episódios, com calafrios e sudorese. Em alguns casos, surgem náusea, vômito e falta de apetite.',
        ],
      },
      {
        id: 'regra-de-ouro',
        heading: 'A regra de ouro: febre em área de transmissão',
        paragraphs: [
          'Em regiões com transmissão de malária, qualquer episódio de febre deve ser investigado no mesmo dia. O exame é simples, feito por gota espessa ou teste rápido, e está disponível no sistema público de saúde.',
          'O motivo da urgência é prático: o diagnóstico precoce evita a forma grave. Esperar a febre passar é o erro que mais custa.',
        ],
      },
      {
        id: 'sinais-de-gravidade',
        heading: 'Sinais de gravidade',
        paragraphs: [
          'Alguns sinais indicam que a doença evoluiu para a forma grave e configuram emergência:',
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
      {
        id: 'por-que-nao-esperar',
        heading: 'Por que não dá para esperar',
        paragraphs: [
          'A malária causada por Plasmodium falciparum pode evoluir de forma rápida e levar a complicações em poucos dias. É por isso que a recomendação oficial é procurar atendimento diante de febre em área de transmissão, sem tentar tratamento caseiro.',
        ],
      },
      {
        id: 'tratamento-e-seguimento',
        heading: 'Tratamento e seguimento',
        paragraphs: [
          'O tratamento é gratuito no sistema público de saúde e depende da espécie do parasito, identificada no exame. Tomar o medicamento pelo tempo indicado é essencial para evitar recaída e resistência.',
        ],
        cta: {
          label: 'Veja a página completa sobre malária',
          href: '/doencas/malaria/',
        },
      },
    ],
    diseaseSlugs: ['malaria'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: ['malaria-como-se-prevenir-em-viagens-para-a-amazonia'],
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
    id: 'malaria-como-se-prevenir-em-viagens-para-a-amazonia',
    slug: 'malaria-como-se-prevenir-em-viagens-para-a-amazonia',
    metaTitle: 'Malária: como se prevenir em viagens',
    title: 'Malária: como se prevenir em viagens para a Amazônia',
    excerpt:
      'A maior parte dos casos de malária no Brasil ocorre na Amazônia Legal. Quem viaja para a região precisa de medidas contra a picada do mosquito.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'onde-esta-o-risco',
        heading: 'Onde está o risco',
        paragraphs: [
          'No Brasil, a transmissão de malária se concentra na Amazônia Legal. O risco é maior em áreas de floresta, de garimpo e de assentamento, sobretudo perto de água limpa e com sombra.',
          'O mosquito Anopheles, conhecido como mosquito-prego, tem hábito noturno e crepuscular. É por isso que as medidas de proteção se concentram no fim da tarde e à noite.',
        ],
      },
      {
        id: 'antes-da-viagem',
        heading: 'Antes de viajar',
        bullets: [
          'Procure um serviço de saúde ou centro de referência em medicina de viagem algumas semanas antes',
          'Informe o roteiro e o tipo de hospedagem, porque isso muda a avaliação do risco',
          'Pergunte se há indicação de quimioprofilaxia, que só deve ser usada com orientação profissional',
          'Leve repelente suficiente para todo o período',
        ],
      },
      {
        id: 'durante-a-viagem',
        heading: 'Durante a viagem',
        bullets: [
          'Dormir com mosquiteiro impregnado com inseticida',
          'Usar telas em janelas e portas, quando disponíveis',
          'Aplicar repelente nas áreas expostas, reaplicando conforme a orientação do fabricante',
          'Usar roupas de manga longa e calça nos horários de maior atividade do mosquito',
          'Evitar permanecer ao ar livre ao entardecer e à noite em áreas de transmissão',
        ],
      },
      {
        id: 'depois-da-viagem',
        heading: 'Depois de voltar',
        paragraphs: [
          'A malária pode se manifestar semanas depois da viagem. Se aparecer febre em até um mês após o retorno de uma área de transmissão, procure atendimento e informe o deslocamento, e essa informação muda a investigação.',
        ],
        cta: {
          label: 'Veja os sintomas na página sobre malária',
          href: '/doencas/malaria/',
        },
      },
      {
        id: 'o-que-nao-funciona',
        heading: 'O que não funciona',
        paragraphs: [
          'Vitaminas, chás e repelentes caseiros não substituem as medidas de proteção. Também não existe vacina disponível para uso rotineiro no Brasil, então a prevenção depende de evitar a picada.',
        ],
      },
    ],
    diseaseSlugs: ['malaria'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: ['malaria-sintomas-e-quando-buscar-atendimento'],
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
    id: 'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta',
    slug: 'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta',
    metaTitle: 'Tosse por mais de três semanas',
    title: 'Tosse por mais de três semanas: quando é sinal de alerta?',
    excerpt:
      'Tosse persistente é o sintoma mais comum da tuberculose. Três semanas é o limite a partir do qual a investigação deve começar.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-limite-das-tres-semanas',
        heading: 'O limite das três semanas',
        paragraphs: [
          'Tosse por três semanas ou mais é o critério que a saúde pública usa para indicar a investigação de tuberculose. Não é um número arbitrário: é o ponto em que tosses por causas banais já deveriam ter passado.',
          'Vale para tosse com catarro e também para tosse seca, e vale mesmo sem outros sintomas.',
        ],
      },
      {
        id: 'sinais-que-acompanham',
        heading: 'Sinais que costumam acompanhar',
        bullets: [
          'Febre baixa, muitas vezes no fim da tarde',
          'Suor noturno, às vezes com necessidade de trocar de roupa',
          'Perda de peso sem causa aparente',
          'Cansaço e falta de apetite',
          'Sangue no catarro',
        ],
      },
      {
        id: 'como-e-a-investigacao',
        heading: 'Como é a investigação',
        paragraphs: [
          'A investigação começa na unidade básica de saúde e inclui exames do escarro, como a baciloscopia e o teste rápido molecular, além de radiografia de tórax quando indicada. Tudo é gratuito no sistema público de saúde.',
          'Se houver suspeita, também são avaliadas as pessoas que convivem com o paciente, porque a transmissão acontece pelo ar em ambientes fechados.',
        ],
      },
      {
        id: 'o-que-nao-e',
        heading: 'O que não é sinal de tuberculose',
        paragraphs: [
          'Tosse que dura poucos dias, geralmente ligada a resfriados e viroses, não indica tuberculose. Espirros e coriza também não são sintomas típicos. O que muda o quadro é a duração.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer',
        paragraphs: [
          'Procure a unidade de saúde mais próxima, informe há quanto tempo a tosse começou e relate os outros sintomas. O diagnóstico precoce protege você e interrompe a transmissão para quem convive com você.',
        ],
        cta: {
          label: 'Veja a página completa sobre tuberculose',
          href: '/doencas/tuberculose/',
        },
      },
    ],
    diseaseSlugs: ['tuberculose'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['tuberculose-o-tratamento-tem-cura-e-e-gratuito'],
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
    id: 'tuberculose-o-tratamento-tem-cura-e-e-gratuito',
    slug: 'tuberculose-o-tratamento-tem-cura-e-e-gratuito',
    metaTitle: 'Tuberculose: o tratamento tem cura',
    title: 'Tuberculose: o tratamento é gratuito e leva à cura',
    excerpt:
      'O tratamento da tuberculose dura em geral seis meses, é gratuito no sistema público de saúde e cura a doença quando é seguido até o fim.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'como-funciona',
        heading: 'Como funciona o tratamento',
        paragraphs: [
          'O tratamento usa uma combinação de antibióticos, em geral por seis meses. A combinação é necessária porque a bactéria pode se tornar resistente se for tratada com um único medicamento.',
          'Os medicamentos são fornecidos gratuitamente pelo sistema público de saúde, e o acompanhamento inclui consultas regulares.',
        ],
      },
      {
        id: 'por-que-nao-interromper',
        heading: 'Por que não interromper',
        paragraphs: [
          'A interrupção antes do fim é a principal causa de recaída e de resistência. Quando a bactéria se torna resistente, o tratamento passa a ser muito mais longo, mais complexo e com mais efeitos indesejados.',
          'A sensação de melhora nas primeiras semanas é esperada e não significa que a doença acabou. Ela também não significa que a pessoa já pode parar.',
        ],
      },
      {
        id: 'transmissao-cai-rapido',
        heading: 'A transmissão cai rápido',
        paragraphs: [
          'Depois de algumas semanas de tratamento, a pessoa deixa de transmitir a doença. Isso é importante para quem convive com o paciente e mostra por que começar o tratamento cedo protege toda a casa.',
        ],
      },
      {
        id: 'efeitos-e-apoio',
        heading: 'Efeitos do tratamento e apoio',
        paragraphs: [
          'Alguns medicamentos podem causar efeitos como náusea, alterações na visão ou desconforto. Eles devem ser relatados à equipe de saúde, que pode ajustar a conduta, e nunca abandonar o tratamento por conta própria.',
          'O apoio da equipe e da família ajuda na adesão, e é parte do tratamento tanto quanto o medicamento.',
        ],
        cta: {
          label: 'Veja a página completa sobre tuberculose',
          href: '/doencas/tuberculose/',
        },
      },
      {
        id: 'infecção-latente',
        heading: 'E a infecção latente?',
        paragraphs: [
          'Quem foi infectado sem adoecer pode ter a chamada infecção latente, sem sintomas e sem transmitir. Nesses casos, o serviço de saúde avalia se há indicação de tratamento preventivo, sobretudo em pessoas com maior risco.',
        ],
        cta: {
          label: 'Entenda a transmissão da tuberculose',
          href: '/doencas/tuberculose/',
        },
      },
    ],
    diseaseSlugs: ['tuberculose'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta'],
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
    id: 'hiv-o-que-fazer-nas-primeiras-72-horas',
    slug: 'hiv-o-que-fazer-nas-primeiras-72-horas',
    metaTitle: 'HIV: o que fazer nas primeiras 72 horas',
    title: 'HIV: o que fazer nas primeiras 72 horas após uma exposição',
    excerpt:
      'Existe uma medida de prevenção que precisa começar em até 72 horas depois de uma situação de risco. Quanto mais cedo, maior a chance de funcionar.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'o-que-e-a-pep',
        heading: 'O que é a profilaxia pós-exposição',
        paragraphs: [
          'A profilaxia pós-exposição, conhecida como PEP, é o uso de medicamentos antirretrovirais por pessoas que passaram por uma situação de risco de infecção pelo HIV, para impedir que o vírus se estabeleça no organismo.',
          'Ela não é um tratamento comum nem uma escolha individual: é uma medida de urgência, indicada após avaliação em serviço de saúde.',
        ],
      },
      {
        id: 'janela-de-72-horas',
        heading: 'A janela de 72 horas',
        paragraphs: [
          'A PEP precisa ser iniciada o quanto antes e no máximo em até 72 horas depois da exposição. Passado esse prazo, ela deixa de ser indicada, porque a chance de funcionar cai muito.',
          'Depois de iniciada, o uso precisa continuar por todo o período indicado pelo serviço de saúde, em geral 28 dias. Interromper antes reduz a proteção.',
        ],
      },
      {
        id: 'situacoes',
        heading: 'Situações em que a avaliação é indicada',
        bullets: [
          'Relação sexual sem preservativo ou com preservativo que rompeu',
          'Rompimento de preservativo com parceiro de sorologia desconhecida',
          'Compartilhamento de agulhas ou seringas',
          'Acidente com material cortante ou perfurante',
          'Violência sexual, situação em que a busca por atendimento deve ser imediata',
        ],
      },
      {
        id: 'onde-procurar',
        heading: 'Onde procurar',
        paragraphs: [
          'A PEP está disponível gratuitamente no sistema público de saúde, em serviços de urgência e em centros de referência. O atendimento é sigiloso.',
          'Além da PEP, o serviço avalia a necessidade de outras medidas, como vacinação e testagem para outras infecções.',
        ],
      },
      {
        id: 'depois',
        heading: 'E depois',
        paragraphs: [
          'O acompanhamento inclui testes ao longo dos meses seguintes, porque uma infecção recente pode não aparecer nos primeiros exames. Manter as consultas é parte do cuidado.',
        ],
        cta: {
          label: 'Leia também: indetectável igual a intransmissível',
          href: '/artigos/indetectavel-intransmissivel-o-que-significa/',
        },
      },
    ],
    diseaseSlugs: ['hiv-aids'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: ['indetectavel-intransmissivel-o-que-significa'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'indetectavel-intransmissivel-o-que-significa',
    slug: 'indetectavel-intransmissivel-o-que-significa',
    metaTitle: 'Indetectável: o que isso significa',
    title: 'Indetectável igual a intransmissível: o que isso significa?',
    excerpt:
      'Quando o tratamento do HIV está em dia e a carga viral fica indetectável, o vírus não é transmitido por via sexual. Entenda o que essa frase significa na prática.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-que-e-carga-viral',
        heading: 'O que é carga viral',
        paragraphs: [
          'Carga viral é a quantidade de vírus circulando no sangue, medida por um exame. Quando o tratamento antirretroviral funciona bem, essa quantidade cai até o ponto em que o exame não consegue mais detectá-la.',
          'Esse resultado é chamado de indetectável. Ele não significa que o vírus desapareceu do organismo, e sim que está sob controle.',
        ],
      },
      {
        id: 'o-que-significa',
        heading: 'O que a frase significa',
        paragraphs: [
          'Carga viral indetectável, mantida com o tratamento em dia, significa que o HIV não é transmitido por via sexual. Essa é a base do conceito conhecido como indetectável igual a intransmissível.',
          'É um resultado sustentado por estudos de longo prazo com casais em que um dos parceiros vivia com HIV e o outro não, e nenhuma transmissão sexual ocorreu quando a carga viral estava indetectável.',
        ],
      },
      {
        id: 'condicoes',
        heading: 'As condições para que valha',
        paragraphs: [
          'O conceito vale dentro de condições específicas, e ignorá-las muda tudo:',
        ],
        bullets: [
          'Carga viral indetectável de forma sustentada, confirmada por exames regulares',
          'Tratamento antirretroviral em uso contínuo, sem interrupção',
          'Acompanhamento periódico com o serviço de saúde',
          'A afirmação se refere à transmissão sexual, não à transmissão por sangue ou por compartilhamento de agulhas',
        ],
      },
      {
        id: 'por-que-importa',
        heading: 'Por que isso importa',
        paragraphs: [
          'Além do efeito direto na saúde de quem vive com HIV, o conceito tem um efeito importante contra o estigma: ele desfaz a ideia de que viver com HIV significa necessariamente transmitir o vírus.',
          'Também reforça por que o tratamento é oferecido a todas as pessoas diagnosticadas, independentemente de contagem de células de defesa.',
        ],
      },
      {
        id: 'o-que-nao-muda',
        heading: 'O que não muda',
        paragraphs: [
          'Indetectável não é cura e não substitui o acompanhamento. A carga viral precisa continuar sendo monitorada, e a interrupção do tratamento faz o vírus voltar a circular.',
        ],
        cta: {
          label: 'Veja a página completa sobre HIV e aids',
          href: '/doencas/hiv-aids/',
        },
      },
    ],
    diseaseSlugs: ['hiv-aids'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['hiv-o-que-fazer-nas-primeiras-72-horas'],
    references: [
      {
        label: 'HIV e aids: prevenção, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hiv-aids',
        publisher: 'Ministério da Saúde (Brasil)',
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
    id: 'hepatites-virais-quais-tem-vacina',
    slug: 'hepatites-virais-quais-tem-vacina',
    title: 'Hepatites virais: quais têm vacina?',
    excerpt:
      'Existem vacinas para as hepatites A e B, e a vacina contra a hepatite B também protege contra a hepatite D. Para as hepatites C e E não há vacina disponível.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'o-mapa-das-vacinas',
        heading: 'O mapa das vacinas',
        bullets: [
          'Hepatite A: há vacina, disponível no sistema público de saúde',
          'Hepatite B: há vacina, disponível para todas as faixas etárias',
          'Hepatite D: não há vacina específica, mas a vacina contra a hepatite B protege, porque a hepatite D só ocorre em quem já tem hepatite B',
          'Hepatite C: não há vacina disponível',
          'Hepatite E: não há vacina disponível',
        ],
      },
      {
        id: 'por-que-a-b-e-tao-importante',
        heading: 'Por que a vacina contra a hepatite B é tão importante',
        paragraphs: [
          'A hepatite B é a que tem maior chance de se tornar crônica, e a infecção crônica pode evoluir para cirrose e câncer de fígado. A vacina é a forma mais eficaz de prevenção e está disponível gratuitamente.',
          'Como a hepatite D depende da hepatite B para se estabelecer, vacinar contra a B também elimina o risco da D.',
        ],
      },
      {
        id: 'sem-vacina',
        heading: 'O que fazer quando não há vacina',
        paragraphs: [
          'Para as hepatites C e E, a prevenção depende de outros cuidados. A hepatite E é transmitida por água e alimentos contaminados, o que reforça a importância da higiene e do saneamento.',
          'A hepatite C é transmitida por sangue, e a prevenção passa por não compartilhar agulhas, seringas, lâminas e objetos que cortam ou perfuram, além do uso de preservativo.',
        ],
      },
      {
        id: 'alem-da-vacina',
        heading: 'Além da vacina',
        bullets: [
          'Fazer a testagem, disponível gratuitamente no sistema público de saúde',
          'Usar preservativo nas relações sexuais',
          'Não compartilhar objetos de uso pessoal que cortam ou perfuram',
          'Exigir material esterilizado em procedimentos como tatuagem e piercing',
          'Fazer o pré-natal completo, que inclui a testagem',
        ],
        cta: {
          label: 'Veja a página completa sobre hepatites virais',
          href: '/doencas/hepatites-virais/',
        },
      },
      {
        id: 'onde-vacinar',
        heading: 'Onde se vacinar',
        paragraphs: [
          'As vacinas estão disponíveis nas unidades básicas de saúde. Como as recomendações por faixa etária e por situação de risco mudam com o tempo, o calendário vigente deve ser consultado na fonte oficial ou na própria unidade de saúde.',
        ],
        cta: {
          label: 'Consulte o calendário de vacinação',
          href: '/artigos/vacinacao-o-que-e-o-calendario-basico/',
        },
      },
    ],
    diseaseSlugs: ['hepatites-virais'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: ['hepatite-c-tem-cura', 'vacinacao-o-que-e-o-calendario-basico'],
    references: [
      {
        label: 'Hepatites virais: prevenção, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hepatites-virais',
        publisher: 'Ministério da Saúde (Brasil)',
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
    id: 'hepatite-c-tem-cura',
    slug: 'hepatite-c-tem-cura',
    title: 'Hepatite C tem cura: o que muda no tratamento',
    excerpt:
      'A hepatite C deixou de ser uma doença sem tratamento. Com os antivirais de ação direta, a maioria das pessoas se cura, e o tratamento está disponível gratuitamente.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-que-mudou',
        heading: 'O que mudou',
        paragraphs: [
          'A hepatite C era, até poucos anos atrás, uma doença crônica de tratamento difícil e com efeitos indesejados importantes. O cenário mudou com os antivirais de ação direta, que atuam diretamente na replicação do vírus.',
          'Hoje a maioria das pessoas tratadas alcança a cura, com esquemas mais curtos e melhor tolerados.',
        ],
      },
      {
        id: 'por-que-tratar',
        heading: 'Por que tratar, mesmo sem sintomas',
        paragraphs: [
          'A hepatite C costuma ser silenciosa por décadas. A ausência de sintomas não significa ausência de dano: a infecção crônica pode evoluir para cirrose e câncer de fígado.',
          'Tratar cedo interrompe essa progressão. É por isso que a testagem é indicada para todas as pessoas adultas pelo menos uma vez na vida.',
        ],
      },
      {
        id: 'como-e-o-tratamento',
        heading: 'Como é o tratamento',
        paragraphs: [
          'O tratamento é feito com medicamentos por via oral, por um período definido pelo profissional de saúde, e está disponível gratuitamente no sistema público de saúde.',
          'O acompanhamento inclui exames para avaliar a resposta ao tratamento e a condição do fígado. A cura é confirmada por exame depois do fim do tratamento.',
        ],
      },
      {
        id: 'cura-nao-e-imunidade',
        heading: 'Cura não é imunidade',
        paragraphs: [
          'Quem se cura não fica protegido contra uma nova infecção. Não existe vacina contra a hepatite C, então a prevenção continua necessária: não compartilhar objetos que cortam ou perfuram e usar preservativo.',
        ],
        cta: {
          label: 'Leia também: quais hepatites têm vacina',
          href: '/artigos/hepatites-virais-quais-tem-vacina/',
        },
      },
      {
        id: 'como-descobrir',
        heading: 'Como descobrir se você tem',
        paragraphs: [
          'O diagnóstico é feito por exame de sangue, e há testes rápidos disponíveis nas unidades de saúde. Como a doença é silenciosa, a testagem é o único caminho para descobrir.',
        ],
        cta: {
          label: 'Veja a página completa sobre hepatites virais',
          href: '/doencas/hepatites-virais/',
        },
      },
    ],
    diseaseSlugs: ['hepatites-virais'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['hepatites-virais-quais-tem-vacina'],
    references: [
      {
        label: 'Hepatites virais: prevenção, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hepatites-virais',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Hepatitis C: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-c',
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
    id: 'asma-crise-o-que-fazer-enquanto-espera-atendimento',
    slug: 'asma-crise-o-que-fazer-enquanto-espera-atendimento',
    metaTitle: 'Crise de asma: o que fazer',
    title: 'Crise de asma: o que fazer enquanto espera atendimento',
    excerpt:
      'Uma crise de asma pode se agravar em minutos. Reconhecer os sinais de gravidade e agir rápido é o que evita a piora.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-e-uma-crise',
        heading: 'O que é uma crise',
        paragraphs: [
          'Na asma, as vias aéreas inflamadas reagem a gatilhos e se estreitam. A crise é o momento em que esse estreitamento dificulta a passagem do ar e aparecem chiado, falta de ar e aperto no peito.',
          'Gatilhos comuns incluem poeira, mofo, fumaça, mudanças de tempo, infecções respiratórias e contato com animais.',
        ],
      },
      {
        id: 'primeiros-passos',
        heading: 'Primeiros passos',
        bullets: [
          'Use o medicamento de alívio conforme a orientação que você já recebeu do serviço de saúde',
          'Afaste-se do gatilho, se ele for identificável',
          'Sente-se ereto e mantenha a calma; deitar pode piorar a sensação de falta de ar',
          'Não fume e não fique em ambiente com fumaça',
          'Se não houver melhora rápida, procure atendimento',
        ],
      },
      {
        id: 'sinais-de-gravidade',
        heading: 'Sinais de gravidade',
        paragraphs: [
          'Estes sinais indicam crise grave e exigem atendimento de emergência imediato:',
        ],
        bullets: [
          'Dificuldade para falar frases completas',
          'Uso visível da musculatura do pescoço e das costelas para respirar',
          'Lábios ou pontas dos dedos azulados',
          'Sonolência ou confusão durante a crise',
          'Falta de resposta ao medicamento de alívio',
          'Piora progressiva, mesmo com o tratamento habitual',
        ],
      },
      {
        id: 'o-que-nao-fazer',
        heading: 'O que não fazer',
        paragraphs: [
          'Não substitua o medicamento de controle pelo de alívio durante a crise. São medicamentos com funções diferentes: o de alívio abre a via aérea no momento, e o de controle trata a inflamação ao longo do tempo.',
          'Também não espere a crise passar sozinha quando há sinais de gravidade.',
        ],
      },
      {
        id: 'depois-da-crise',
        heading: 'Depois da crise',
        paragraphs: [
          'Uma crise é um sinal de que o controle pode estar inadequado. Vale levar o episódio para a consulta: muitas vezes há ajuste no tratamento de controle, revisão da técnica de uso do inalador ou identificação de um gatilho que passou despercebido.',
        ],
        cta: {
          label: 'Veja a página sobre asma e DPOC',
          href: '/doencas/asma-e-dpoc/',
        },
      },
    ],
    diseaseSlugs: ['asma-e-dpoc'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
    slug: 'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
    metaTitle: 'DPOC e tabagismo: por que parar',
    title: 'DPOC e tabagismo: por que parar de fumar muda o quadro',
    excerpt:
      'Na DPOC, parar de fumar é a medida que mais altera a evolução da doença. Entenda o que muda e por que o apoio para parar faz diferença.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'relacao',
        heading: 'A relação entre fumo e DPOC',
        paragraphs: [
          'A DPOC é uma doença progressiva em que as vias aéreas e o tecido dos pulmões são gradualmente destruídos. O tabagismo é o principal fator de risco, e o efeito depende da carga de exposição ao longo dos anos.',
          'Não é só o cigarro industrializado: a exposição à fumaça de lenha, de carvão e de outros materiais em ambientes fechados também contribui.',
        ],
      },
      {
        id: 'o-que-muda',
        heading: 'O que muda ao parar',
        paragraphs: [
          'Parar de fumar não desfaz o dano já existente, mas reduz a velocidade da perda de função pulmonar. Na prática, isso significa menos crises, menos internações e melhor tolerância ao esforço.',
          'O benefício aparece em qualquer idade e em qualquer estágio da doença. Quanto antes, maior o ganho, mas nunca é tarde para começar.',
        ],
      },
      {
        id: 'nao-e-so-vontade',
        heading: 'Não é só questão de vontade',
        paragraphs: [
          'A dependência da nicotina é uma condição tratável. O sistema público de saúde oferece apoio para quem quer parar, incluindo acompanhamento e, quando indicado, medicamentos.',
          'Tentativas anteriores que não deram certo não significam fracasso: a maioria das pessoas que param precisou de mais de uma tentativa.',
        ],
      },
      {
        id: 'outras-medidas',
        heading: 'Outras medidas que ajudam',
        bullets: [
          'Vacinar-se contra a gripe e outras infecções respiratórias conforme a orientação de saúde',
          'Usar os medicamentos inalatórios do jeito certo e de forma contínua',
          'Participar de reabilitação pulmonar, quando indicada',
          'Evitar a exposição à fumaça de qualquer origem, inclusive passiva',
          'Manter atividade física adaptada à condição, com orientação profissional',
        ],
        cta: {
          label: 'Veja a página sobre asma e DPOC',
          href: '/doencas/asma-e-dpoc/',
        },
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure atendimento se houver piora da falta de ar, mudança no catarro, febre ou necessidade de usar o medicamento de alívio com mais frequência. Dificuldade para falar, lábios azulados ou sonolência são emergência.',
        ],
        cta: {
          label: 'Leia também: o que fazer em uma crise de asma',
          href: '/artigos/asma-crise-o-que-fazer-enquanto-espera-atendimento/',
        },
      },
    ],
    diseaseSlugs: ['asma-e-dpoc'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['asma-crise-o-que-fazer-enquanto-espera-atendimento'],
    references: [
      {
        label: 'Chronic obstructive pulmonary disease (COPD): fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Tabagismo: orientações e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tabagismo',
        publisher: 'Ministério da Saúde (Brasil)',
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
    id: 'infarto-quais-sao-os-sinais-e-o-que-fazer',
    slug: 'infarto-quais-sao-os-sinais-e-o-que-fazer',
    title: 'Infarto: quais são os sinais e o que fazer',
    excerpt:
      'Dor ou aperto no peito que irradia para o braço, o pescoço ou a mandíbula é o sinal mais comum do infarto. Diante da suspeita, chame ajuda imediatamente.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'sinais-classicos',
        heading: 'Os sinais mais comuns',
        paragraphs: [
          'O infarto agudo do miocárdio acontece quando uma artéria que leva sangue ao coração é obstruída. O sinal mais frequente é a dor ou o aperto no peito, que pode irradiar para o braço esquerdo, o pescoço, a mandíbula ou as costas.',
        ],
        bullets: [
          'Dor ou aperto no peito, com sensação de peso',
          'Dor que irradia para braço, pescoço, mandíbula ou costas',
          'Suor frio e palidez',
          'Falta de ar',
          'Náusea ou vômito',
          'Sensação de morte iminente ou angústia intensa',
        ],
      },
      {
        id: 'formas-atipicas',
        heading: 'Quando o infarto não dói como se espera',
        paragraphs: [
          'Em pessoas com diabetes e em idosos, o infarto pode se manifestar sem dor intensa. Nesses casos, os sinais podem ser apenas falta de ar, cansaço incomum, mal-estar ou confusão.',
          'Também existem apresentações com dor no estômago, o que costuma ser confundido com má digestão. Essa semelhança é perigosa justamente porque atrasa a busca por atendimento.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer diante da suspeita',
        bullets: [
          'Chame ajuda imediatamente pelo SAMU, no número 192',
          'Não dirija você mesmo, se houver outra pessoa disponível',
          'Não espere os sintomas passarem para procurar atendimento',
          'Não tome medicamento por conta própria',
          'Anote o horário em que os sintomas começaram',
        ],
      },
      {
        id: 'por-que-o-tempo-conta',
        heading: 'Por que o tempo conta tanto',
        paragraphs: [
          'O músculo cardíaco sem oxigênio começa a morrer em minutos. Quanto mais rápido o fluxo de sangue é restabelecido, menor a área de dano permanente. É por isso que o atendimento de urgência é a parte mais importante do tratamento.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir o risco',
        paragraphs: [
          'O controle dos fatores de risco ao longo dos anos é o que mais reduz o risco de infarto. Pressão alta, diabetes, colesterol elevado, tabagismo e sedentarismo são os principais alvos.',
        ],
        cta: {
          label: 'Leia também: como reconhecer os sinais do AVC',
          href: '/artigos/avc-como-reconhecer-os-sinais-e-agir-rapido/',
        },
      },
    ],
    diseaseSlugs: ['infarto-e-avc', 'hipertensao'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['avc-como-reconhecer-os-sinais-e-agir-rapido', 'hipertensao-como-medir-a-pressao-em-casa'],
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
  {
    id: 'avc-como-reconhecer-os-sinais-e-agir-rapido',
    slug: 'avc-como-reconhecer-os-sinais-e-agir-rapido',
    title: 'AVC: como reconhecer os sinais e agir rápido',
    excerpt:
      'Fraqueza de um lado do corpo, boca torta e dificuldade para falar são os sinais mais comuns do AVC. Reconhecer rápido é o que permite tratamento em tempo.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-acontece',
        heading: 'O que acontece no AVC',
        paragraphs: [
          'No AVC, acidente vascular cerebral, uma artéria do cérebro é obstruída ou se rompe, e uma região do cérebro deixa de receber sangue. A maioria dos casos é de obstrução.',
          'Sem sangue, as células cerebrais começam a morrer em minutos. A rapidez do atendimento é o que define quanto do cérebro pode ser preservado.',
        ],
      },
      {
        id: 'sinais',
        heading: 'Os sinais que precisam ser reconhecidos',
        paragraphs: [
          'Os sinais do AVC costumam aparecer de forma súbita e atingir apenas um lado do corpo:',
        ],
        bullets: [
          'Fraqueza ou dormência de um lado do rosto, com o canto da boca caído',
          'Fraqueza no braço ou na perna de um lado do corpo',
          'Dificuldade para falar ou para entender o que é dito',
          'Perda súbita de visão em um ou nos dois olhos',
          'Dor de cabeça súbita e muito intensa',
          'Desequilíbrio, tontura intensa ou dificuldade para andar',
        ],
      },
      {
        id: 'teste-rapido',
        heading: 'Um teste rápido que qualquer pessoa pode fazer',
        paragraphs: [
          'Diante da suspeita, três perguntas simples ajudam a identificar o AVC: peça para a pessoa sorrir e observe se um lado do rosto não se move; peça para levantar os dois braços e veja se um cai; peça para repetir uma frase simples e observe se a fala sai arrastada ou confusa.',
          'Qualquer alteração em uma dessas três é motivo para chamar ajuda imediatamente. O teste não descarta o AVC quando está normal, mas ajuda a não deixar passar o caso típico.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer',
        bullets: [
          'Chame o SAMU, no número 192, e informe que você suspeita de AVC',
          'Anote o horário exato em que os sintomas começaram',
          'Não ofereça comida, bebida ou medicamento',
          'Não deixe a pessoa sozinha',
          'Se houver perda de consciência, mantenha as vias aéreas livres e siga as orientações do serviço de emergência',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir o risco',
        paragraphs: [
          'A hipertensão é o principal fator de risco para o AVC. Controlar a pressão ao longo dos anos, tratar o diabetes, não fumar e manter a medicação em dia são as medidas com maior impacto.',
        ],
        cta: {
          label: 'Entenda a hipertensão na página completa',
          href: '/doencas/hipertensao/',
        },
      },
    ],
    diseaseSlugs: ['infarto-e-avc', 'hipertensao'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['infarto-quais-sao-os-sinais-e-o-que-fazer', 'hipertensao-como-medir-a-pressao-em-casa'],
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
