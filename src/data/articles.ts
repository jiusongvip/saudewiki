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
      'A dengue começa com febre alta de início súbito, dor de cabeça, dor atrás dos olhos e dores no corpo. Os sinais de alarme surgem quando a febre cede.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-que-observar-primeiro',
        heading: 'Quais são os primeiros sintomas da dengue?',
        paragraphs: [
          'Os primeiros sintomas da dengue costumam ser febre alta de início súbito, dor de cabeça, dor atrás dos olhos e dores intensas nos músculos e nas articulações. A febre pode chegar a 39 °C ou 40 °C e vir acompanhada de náusea, vômito e perda de apetite.',
          'A infecção pelo vírus da dengue nem sempre se manifesta. A [Organização Mundial da Saúde](https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue) estima que cerca de uma em cada quatro infecções produza sintomas, e a maioria dos casos é leve ou assintomática. Isso ajuda a explicar por que a doença circula tanto sem ser percebida.',
          'Quando os sintomas aparecem, o início é abrupto: a pessoa passa de um estado normal para febre alta em poucas horas. Nas primeiras 24 a 48 horas também podem surgir rubor facial e vermelhidão na garganta, sinais discretos que costumam passar despercebidos.',
        ],
      },
      {
        id: 'quanto-tempo-para-aparecer',
        heading: 'Quanto tempo depois da picada os sintomas aparecem?',
        paragraphs: [
          'O período de incubação da dengue é de quatro a dez dias após a picada do mosquito infectado, com maior frequência entre cinco e sete dias. Por isso, em uma área com transmissão, a febre que surge nesse intervalo deve levantar a suspeita, mesmo sem outros sinais evidentes.',
          'A febre costuma durar de dois a sete dias e pode ter um padrão bifásico, com uma queda e um novo aumento antes de ceder de vez. A recuperação completa, por sua vez, leva de uma a duas semanas.',
          'Depois da fase aguda, o cansaço pode persistir por algumas semanas. A recuperação varia de pessoa para pessoa e não termina no momento em que a febre passa.',
        ],
      },
      {
        id: 'fases-da-doenca',
        heading: 'Quais são as fases da dengue?',
        paragraphs: [
          'A dengue costuma seguir três fases. A primeira é a febril, que dura de dois a sete dias e concentra febre alta, dor de cabeça, dor atrás dos olhos, dores no corpo e, em muitos casos, manchas na pele. É o período em que o vírus circula no sangue e em que o exame consegue detectá-lo com mais facilidade.',
          'A segunda é a crítica, que começa justamente quando a febre cede e dura cerca de 24 a 48 horas. Nesse intervalo, parte dos pacientes melhora, mas quem tem extravasamento importante de plasma pode evoluir para dengue grave em poucas horas. O paciente pode parecer bem mesmo diante de sinais iniciais de choque. O [CDC](https://www.cdc.gov/dengue/hcp/clinical-signs/index.html) descreve essa janela como o momento em que o hematócrito sobe e as plaquetas caem, antes de qualquer sinal visível.',
          'A terceira é a de recuperação, quando o líquido extravasado é reabsorvido. O volume de urina aumenta, a frequência cardíaca pode cair e a pele pode descamar com coceira. É uma fase de melhora, mas que ainda exige acompanhamento.',
        ],
      },
      {
        id: 'primeiros-sinais',
        heading: 'Qual é a ordem dos sintomas?',
        bullets: [
          'Febre alta, em geral entre 39 °C e 40 °C, de início súbito',
          'Dor de cabeça intensa, muitas vezes atrás dos olhos',
          'Dores no corpo, nos músculos e nas articulações',
          'Náusea, vômito e perda de apetite',
          'Manchas vermelhas na pele, do tipo maculopapular, que costumam surgir do terceiro ao sexto dia',
          'Sangramentos leves, como gengiva sangrando, nariz sangrando ou pequenas manchas roxas na pele',
          'Gânglios inchados e, em alguns casos, aumento do fígado',
          'Rubor no rosto e vermelhidão na garganta nas primeiras 24 a 48 horas',
        ],
      },
      {
        id: 'sinais-de-alarme',
        heading: 'Quais sinais indicam que a dengue está se agravando?',
        paragraphs: [
          'Os sinais de alarme costumam aparecer entre o terceiro e o sétimo dia, no momento em que a febre começa a ceder. Dor abdominal intensa, vômitos persistentes, acúmulo de líquido, sangramento de mucosas, letargia ou agitação, aumento do fígado, tontura e dificuldade para respirar são os principais.',
          'Cerca de uma em cada vinte pessoas com dengue evolui para a forma grave, caracterizada por extravasamento importante de plasma, sangramento grave ou comprometimento de órgãos. A avaliação médica nessa janela é o que separa um caso comum de uma emergência.',
        ],
        cta: {
          label: 'Veja os sinais de alerta na página sobre dengue',
          href: '/doencas/dengue/',
        },
      },
      {
        id: 'dengue-ou-outra-doenca',
        heading: 'Como diferenciar dengue de chikungunya, zika e gripe?',
        paragraphs: [
          'A chikungunya também é transmitida pelo Aedes e começa de forma abrupta, mas a dor nas articulações costuma ser o sintoma dominante: intensa, incapacitante e, segundo a [Organização Mundial da Saúde](https://www.who.int/news-room/fact-sheets/detail/chikungunya), capaz de durar semanas ou meses. Na dengue, a dor no corpo é marcante, porém raramente persiste por tanto tempo.',
          'A zika tende a ser mais leve. Conjuntivite, coceira e manchas na pele são frequentes, a febre é baixa e boa parte das infecções não produz sintoma algum. O risco maior está na gestação, porque a infecção pode causar malformações no bebê.',
          'A gripe se distingue pela presença de sintomas respiratórios, como tosse, dor de garganta e coriza, que não são típicos da dengue. Ainda assim, a semelhança entre as arboviroses é grande, e apenas o exame laboratorial confirma o diagnóstico.',
        ],
      },
      {
        id: 'o-que-nao-e-sintoma',
        heading: 'Quais sintomas não são típicos de dengue?',
        paragraphs: [
          'Espirros frequentes, coriza e obstrução nasal apontam mais para resfriado ou outras infecções respiratórias do que para dengue. Isso não substitui uma avaliação profissional, mas ajuda a organizar a suspeita.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer ao suspeitar de dengue?',
        paragraphs: [
          'O [Ministério da Saúde](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue) recomenda hidratação, repouso e paracetamol para a dor e a febre, e contraindica aspirina (ácido acetilsalicílico), anti-inflamatórios como ibuprofeno e injeções intramusculares, porque aumentam o risco de sangramento.',
          'O momento do exame importa. Nos primeiros cinco dias de sintomas, a detecção do vírus por NS1 ou RT-PCR é o caminho mais direto. A partir do sexto dia, o teste de anticorpos passa a ser mais útil. O profissional de saúde define qual exame faz sentido em cada caso.',
          'Procure uma unidade de saúde para avaliação. Se houver qualquer sinal de alarme, procure atendimento de emergência imediatamente, sem esperar os sintomas passarem.',
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
      {
        label: 'Clinical Features of Dengue',
        url: 'https://www.cdc.gov/dengue/hcp/clinical-signs/index.html',
        publisher: 'Centers for Disease Control and Prevention (CDC)',
      },
      {
        label: 'Chikungunya: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/chikungunya',
        publisher: 'Organização Mundial da Saúde',
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
    updatedAt: '2026-10-17',
    isPlaceholder: true,
  },
  {
    id: 'como-prevenir-a-dengue',
    slug: 'como-prevenir-a-dengue',
    title: 'Como prevenir a dengue?',
    excerpt:
      'Como não há antiviral específico contra o vírus, a prevenção se concentra em eliminar criadouros do mosquito e evitar a picada. Veja o que funciona na prática.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'por-que-a-prevencao-e-central',
        heading: 'Por que a prevenção é central',
        paragraphs: [
          'Não existe antiviral específico contra a dengue. Por isso, a base da prevenção é reduzir a população do mosquito e evitar a picada. O SUS também oferece vacina contra a dengue, para o público e as regiões definidos pela estratégia do Ministério da Saúde: informe-se na unidade de saúde da sua região.',
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
          'Vitaminas, chás e soluções caseiras não previnem a infecção. O controle do mosquito exige eliminar criadouros continuamente, não com medidas pontuais.',
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
          'Sangramento de gengiva ou nariz, sangue na urina ou nas fezes',
          'Sonolência excessiva, irritabilidade ou confusão mental',
          'Urinar muito menos que o habitual ou outros sinais de desidratação',
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
      'O diagnóstico de diabetes tipo 2 não é uma lista de proibições: é acompanhamento, ajustes graduais e monitoramento. Entenda o que muda de verdade.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-muda',
        heading: 'O que muda de verdade no dia a dia?',
        paragraphs: [
          'O dia a dia com diabetes tipo 2 não exige mudanças drásticas de uma vez: o essencial é monitorar a glicemia, organizar a alimentação e manter o movimento, com acompanhamento profissional ao longo dos anos.',
          'O diabetes tipo 2 é uma condição crônica, e o tratamento é de longo prazo. Na prática, o dia a dia passa a incluir três coisas novas: monitoramento, alimentação planejada e movimento regular.',
          'Essas mudanças não precisam ser drásticas de uma vez. Pequenos ajustes mantidos ao longo das semanas costumam ser mais sustentáveis do que grandes mudanças que duram poucos dias.',
        ],
      },
      {
        id: 'monitoramento',
        heading: 'Como monitorar a glicemia no dia a dia?',
        paragraphs: [
          'Acompanhar a glicose em casa, quando indicado, ajuda a entender como o corpo responde a diferentes alimentos, horários e níveis de atividade. Os exames de acompanhamento são definidos pelo profissional de saúde.',
          'Além da glicemia eventual, o exame de hemoglobina glicada (HbA1c) mostra uma média dos últimos meses e é um dos principais parâmetros de acompanhamento, segundo o Ministério da Saúde.',
        ],
        bullets: [
          'Registre as medições com data, horário e se foram antes ou depois das refeições',
          'Leve o registro às consultas para ajustar o plano com o profissional',
          'Não ajuste doses nem horários por conta própria com base em uma única medição',
        ],
      },
      {
        id: 'alimentacao',
        heading: 'O que ajustar na alimentação?',
        paragraphs: [
          'Não existe lista universal de alimentos proibidos (Ministério da Saúde). O que costuma ajudar é a regularidade nos horários e o controle das porções.',
        ],
        bullets: [
          'Reduza bebidas açucaradas e alimentos ultraprocessados',
          'Prefira refeições em horários parecidos a cada dia',
          'Inclua fibras (vegetais, legumes, grãos integrais) nas refeições',
          'Não pule refeições: longos jejuns podem desregular a glicemia',
        ],
      },
      {
        id: 'movimento',
        heading: 'Qual a importância da atividade física?',
        paragraphs: [
          'Movimento regular melhora a resposta do corpo à insulina. A OMS recomenda ao menos 150 minutos de atividade física de intensidade moderada por semana, o que contribui para reduzir o risco de diabetes tipo 2; a recomendação individual deve ser ajustada com acompanhamento profissional.',
          'Mesmo caminhadas curtas e frequentes já trazem benefício; o importante é a regularidade, não a intensidade isolada.',
        ],
        bullets: [
          'Procure distribuir a atividade ao longo da semana',
          'Comece gradualmente, especialmente se estava sem rotina de exercícios',
        ],
      },
      {
        id: 'medicamentos',
        heading: 'Como funcionam os medicamentos?',
        paragraphs: [
          'Muitas pessoas com diabetes tipo 2 usam medicamentos para ajudar no controle da glicemia. O esquema é definido pelo profissional de saúde e ajustado conforme o acompanhamento.',
          'No Brasil, os medicamentos para diabetes estão disponíveis no SUS mediante prescrição (Ministério da Saúde).',
        ],
        bullets: [
          'Tome na dose e nos horários indicados, sem interromper por conta própria',
          'Se perder uma dose, siga a orientação do profissional ou da bula; não dobre a próxima dose',
          'Não ajuste o tratamento com base em uma única medição da glicemia',
        ],
      },
      {
        id: 'hipoglicemia',
        heading: 'O que fazer em caso de hipoglicemia?',
        paragraphs: [
          'A glicemia muito baixa (hipoglicemia) pode ocorrer, especialmente em quem usa certos medicamentos. Sinais comuns incluem tremor, suor, tontura, fraqueza e confusão.',
          'Se aparecerem sinais de hipoglicemia, a conduta geral segue a chamada "regra 15-15" descrita pelos Centros de Controle e Prevenção de Doenças (CDC) dos EUA: ingerir cerca de 15 g de carboidratos de absorção rápida (como suco ou glucose), aguardar 15 minutos e reavaliar; se não melhorar, procure ajuda.',
        ],
        bullets: [
          'Tenha sempre à mão uma fonte rápida de açúcar (suco, glucose, bala)',
          'Avise pessoas próximas sobre os sinais e o que fazer',
          'Procure atendimento se os sintomas forem intensos ou não melhorarem',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Por que o acompanhamento de longo prazo é importante?',
        paragraphs: [
          'O diabetes tipo 2 é gerenciado ao longo dos anos. O acompanhamento regular, segundo o Ministério da Saúde, permite identificar e tratar precocemente complicações.',
        ],
        bullets: [
          'Verifique a pressão arterial nas consultas',
          'Cuidado com os pés: inspeção diária e calçados adequados',
          'Avaliação dos olhos (retinopatia) conforme orientação',
          'Exames de função renal e dos pés, conforme o profissional',
          'Cuidados odontológicos regulares',
        ],
      },
      {
        id: 'duvidas-comuns',
        heading: 'Quais as dúvidas mais comuns sobre o dia a dia?',
        paragraphs: [
          'Posso comer frutas? Sim, frutas podem fazer parte da alimentação; o ponto é a porção e a regularidade, não o banimento.',
          'Preciso cortar todo o açúcar? O foco é reduzir bebidas e alimentos com muito açúcar adicionado, não eliminar cada grama.',
          'O diabetes tipo 2 tem cura? É uma condição crônica; o controle adequado mantém a glicemia na faixa e reduz riscos, mas não há "cura" garantida.',
          'Posso beber álcool? O álcool pode afetar a glicemia; converse com o profissional sobre quantidade e ocasião.',
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
      {
        label: 'Atividade física: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Tratamento da hipoglicemia (baixa de açúcar no sangue)',
        url: 'https://www.cdc.gov/diabetes/treatment/treatment-low-blood-sugar-hypoglycemia.html',
        publisher: 'Centros de Controle e Prevenção de Doenças (CDC, EUA)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-17',
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
    title: 'Vacinação infantil: o que é o Calendário Nacional de Vacinação?',
    metaTitle: 'Vacinação infantil: como funciona o calendário',
    excerpt:
      'O calendário de vacinação organiza quais vacinas são recomendadas em cada faixa etária. Entenda como ele funciona e por que o acompanhamento é contínuo.',
    category: 'Saúde infantil',
    categorySlug: 'saude-infantil',
    body: [
      {
        id: 'o-que-e-o-calendario',
        heading: 'O que é o calendário de vacinação',
        paragraphs: [
          'O Calendário Nacional de Vacinação é o cronograma que indica quais vacinas são recomendadas em cada idade. Ele é atualizado pelo Ministério da Saúde conforme novas evidências e novos produtos.',
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
          'As recomendações mudam com o tempo, por isso confirme o calendário vigente no site do Ministério da Saúde ou na UBS. A caderneta da criança é o registro que acompanha esse histórico.',
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
      'A dor articular é a marca da chikungunya e, para parte das pessoas, continua depois que a febre passa. Entenda as fases da doença e o que ajuda na recuperação.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-a-dor-e-tao-forte',
        heading: 'Por que a dor articular é tão forte',
        paragraphs: [
          'Na chikungunya, o vírus provoca uma inflamação intensa nas articulações. É isso que faz da dor a marca registrada da doença: ela costuma ser mais forte e mais localizada do que na dengue, e muitas vezes vem acompanhada de inchaço.',
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
          'Fase aguda: até 14 dias, com febre alta e dor articular intensa',
          'Fase pós-aguda: de 15 a 90 dias, quando a febre cede e a dor pode continuar',
          'Fase crônica: além de 90 dias, quando a dor articular persiste e passa a exigir acompanhamento',
        ],
      },
      {
        id: 'quanto-tempo-dura',
        heading: 'Quanto tempo dura, na prática',
        paragraphs: [
          'A maioria das pessoas melhora em algumas semanas. Parte das pessoas continua com dor por meses, e uma parcela menor convive com sintomas articulares por mais tempo.',
          'Não é possível prever de antemão quem vai evoluir para a forma prolongada. Idade mais avançada, dor articular prévia e quadros mais intensos na fase aguda aparecem associados a uma recuperação mais lenta.',
        ],
      },
      {
        id: 'o-que-ajuda',
        heading: 'O que ajuda na recuperação',
        paragraphs: [
          'Nas primeiras semanas, o cuidado é o mesmo das outras arboviroses: repouso, hidratação e alívio da dor com orientação de um profissional de saúde. Enquanto a dengue não for descartada, evite aspirina (ácido acetilsalicílico), ibuprofeno e outros anti-inflamatórios: eles aumentam o risco de sangramento.',
          'Quando a dor persiste, a fisioterapia costuma fazer parte do tratamento, com exercícios graduais que ajudam a manter o movimento e a força da articulação. O tratamento é definido caso a caso.',
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
      'Transmitidas pelos mesmos mosquitos, as duas doenças começam com febre alta e dores no corpo. A diferença está na dor articular, e ela muda o tratamento.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-confunde',
        heading: 'Por que as duas se confundem',
        paragraphs: [
          'Dengue e chikungunya são transmitidas pelos mesmos mosquitos, circulam nas mesmas áreas e começam de forma parecida: febre alta de início súbito, dor de cabeça, dor no corpo e mal-estar.',
          'Por isso, o que diferencia uma da outra raramente é um sintoma isolado. O conjunto de sintomas e a intensidade de cada um é que orientam a suspeita.',
        ],
      },
      {
        id: 'diferencas',
        heading: 'As diferenças que costumam aparecer',
        bullets: [
          'A dor articular tende a ser muito intensa e incapacitante na chikungunya; na dengue é comum, mas menos localizada',
          'O inchaço articular é mais frequente na chikungunya',
          'As manchas na pele podem aparecer nas duas, em momentos diferentes',
          'A dor atrás dos olhos é mais característica da dengue',
          'A dor articular da chikungunya pode se prolongar por semanas ou meses',
        ],
      },
      {
        id: 'o-que-nao-serve',
        heading: 'O que não serve para diferenciar',
        paragraphs: [
          'Sangramento, por si só, não confirma dengue. E a ausência de manchas na pele não descarta nenhuma das duas. Também não é possível diferenciar pelo local onde a pessoa mora ou pela época do ano, já que as duas circulam juntas.',
          'Só a avaliação em serviço de saúde, com exame clínico e, quando indicado, exames laboratoriais, permite definir a causa.',
        ],
      },
      {
        id: 'por-que-importa',
        heading: 'Por que a diferença importa',
        paragraphs: [
          'As duas doenças não têm antiviral específico e o tratamento inicial é parecido. A diferença está no acompanhamento: a dengue exige atenção aos sinais de alerta, que aparecem quando a febre cede, e a chikungunya pode exigir acompanhamento prolongado da dor articular.',
          'Nos dois casos, evite aspirina (ácido acetilsalicílico), ibuprofeno e outros anti-inflamatórios até que a dengue seja descartada: eles aumentam o risco de sangramento.',
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
          'Procure uma unidade de saúde para avaliação, informe onde você mora e para onde viajou nos últimos dias e relate todos os sintomas, inclusive a intensidade da dor nas articulações. Não tente diferenciar em casa nem se automedicar.',
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
        heading: 'Sintomas que devem ser avaliados',
        paragraphs: [
          'Os sintomas na gestante são os mesmos das outras pessoas e podem ser leves: manchas vermelhas na pele com coceira, febre baixa, olhos vermelhos sem secreção, dor nas articulações e dor de cabeça.',
          'Como a infecção pode ser silenciosa, a orientação é procurar o serviço de saúde diante de qualquer um desses sinais durante a gestação, mesmo que pareçam banais.',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Como é o acompanhamento',
        paragraphs: [
          'A suspeita durante a gestação muda o pré-natal. O serviço de saúde pode indicar exames para investigar a infecção e um acompanhamento mais próximo, com avaliação do desenvolvimento do bebê em exames de imagem.',
          'O acompanhamento continua depois do nascimento, com avaliação do desenvolvimento e, quando necessário, encaminhamento para estimulação precoce e outras especialidades.',
        ],
      },
      {
        id: 'como-reduzir-o-risco',
        heading: 'Como reduzir o risco',
        bullets: [
          'Evitar viajar para áreas com transmissão de zika durante a gestação e conversar antes com o serviço de saúde',
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
          'Como o zika pode ser transmitido por via sexual, o cuidado não é só da gestante. O uso de preservativo durante toda a gestação protege a gestante de uma infecção que poderia afetar o bebê.',
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
        heading: 'Sem vacina, a proteção é evitar a picada',
        paragraphs: [
          'Não há vacina disponível contra o zika, e não existe antiviral específico. Isso significa que evitar a picada do mosquito é o essencial.',
          'O Aedes aegypti tem hábitos diurnos, com maior atividade no início da manhã e no fim da tarde. Ele se reproduz em água limpa e parada, em qualquer recipiente, por menor que seja.',
        ],
      },
      {
        id: 'criadouros',
        heading: 'Criadouros que costumam passar despercebidos',
        bullets: [
          'Pratinhos de vasos e qualquer objeto que acumule água',
          'Calhas entupidas e lajes com água empoçada',
          'Pneus, baldes, garrafas e brinquedos deixados do lado de fora',
          'Caixas d’água, tonéis e cisternas sem tampa',
          'Bebedouros de animais e ralos que quase não recebem água',
          'Reservatórios de imóveis fechados ou abandonados',
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
          'Ao contrário da dengue e da chikungunya, o zika também pode ser transmitido por via sexual. O uso de preservativo é parte da prevenção, principalmente para gestantes e para quem pode engravidar.',
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
          'Vitaminas, chás e soluções caseiras não previnem a infecção. O controle do mosquito exige eliminar criadouros continuamente, não com medidas isoladas.',
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
          'Em regiões com transmissão de malária, qualquer episódio de febre deve ser investigado no mesmo dia. O exame é simples, feito por gota espessa ou teste rápido, e está disponível no SUS.',
          'O motivo da urgência é prático: o diagnóstico precoce reduz muito o risco de forma grave. Esperar a febre passar é o erro que mais custa.',
        ],
      },
      {
        id: 'sinais-de-gravidade',
        heading: 'Sinais de gravidade',
        paragraphs: [
          'Alguns sinais indicam que a doença evoluiu para a forma grave. Nesses casos, é emergência: procure atendimento imediato.',
        ],
        bullets: [
          'Confusão mental, sonolência ou convulsões',
          'Dificuldade para respirar',
          'Urinar muito menos que o habitual',
          'Icterícia intensa ou sangramentos',
          'Vômitos persistentes que impedem a hidratação',
          'Fraqueza extrema, com dificuldade de ficar de pé',
        ],
      },
      {
        id: 'por-que-nao-esperar',
        heading: 'Por que não dá para esperar',
        paragraphs: [
          'A malária causada por Plasmodium falciparum pode evoluir de forma rápida e levar a complicações em poucos dias. Por isso, procure atendimento imediato se tiver febre em área de transmissão: procure atendimento de emergência ou vá a um pronto atendimento, sem tentar tratamento caseiro.',
        ],
      },
      {
        id: 'tratamento-e-seguimento',
        heading: 'Tratamento e seguimento',
        paragraphs: [
          'O tratamento é gratuito no SUS e depende da espécie do parasito, identificada no exame. Tomar o medicamento pelo tempo indicado é essencial para evitar recaída e resistência.',
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
          'O mosquito Anopheles, conhecido como mosquito-prego, pica principalmente do entardecer até a noite. Por isso, as medidas de proteção se concentram nesse período.',
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
          'A malária pode se manifestar semanas depois da viagem. Se aparecer febre nas semanas e meses seguintes ao retorno de uma área de transmissão, procure atendimento e informe a viagem recente. Essa informação muda a investigação.',
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
          'Vitaminas, chás e repelentes caseiros não substituem as medidas de proteção. Também não existe vacina disponível para uso rotineiro no Brasil, e as vacinas em estudo ainda estão em fase de testes clínicos. A prevenção depende de evitar a picada.',
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
      'Tosse persistente é o sintoma mais comum da tuberculose. Se a tosse passa de três semanas, é hora de investigar.',
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
          'A investigação começa na unidade básica de saúde e inclui exames do escarro, como a baciloscopia e o teste rápido molecular, além de radiografia de tórax quando indicada. Tudo é gratuito no SUS.',
          'Se houver suspeita, também são avaliadas as pessoas que convivem com o paciente, porque a transmissão acontece pelo ar em ambientes fechados.',
        ],
      },
      {
        id: 'o-que-nao-e',
        heading: 'O que não é sinal de tuberculose',
        paragraphs: [
          'Tosse que dura poucos dias, geralmente ligada a resfriados e viroses, não indica tuberculose. Espirros e coriza também não são sintomas típicos. O que muda a suspeita é a duração.',
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
      'O tratamento da tuberculose dura em geral seis meses, é gratuito no SUS e cura a doença quando é seguido até o fim.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'como-funciona',
        heading: 'Como funciona o tratamento',
        paragraphs: [
          'O tratamento usa uma combinação de antibióticos, em geral por seis meses. A combinação é necessária porque a bactéria pode se tornar resistente se for tratada com um único medicamento.',
          'Os medicamentos são fornecidos gratuitamente pelo SUS, e o acompanhamento inclui consultas regulares.',
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
          'Nas primeiras semanas de tratamento, a transmissão cai muito. Isso protege quem convive com o paciente e mostra por que começar o tratamento cedo protege toda a casa.',
        ],
      },
      {
        id: 'efeitos-e-apoio',
        heading: 'Efeitos do tratamento e apoio',
        paragraphs: [
          'Alguns medicamentos podem causar efeitos como náusea, alterações na visão ou desconforto. Informe esses efeitos à equipe de saúde, que pode ajustar o tratamento. E nunca pare por conta própria.',
          'O apoio da equipe e da família ajuda na adesão, e é parte do tratamento tanto quanto o medicamento.',
        ],
        cta: {
          label: 'Veja a página completa sobre tuberculose',
          href: '/doencas/tuberculose/',
        },
      },
      {
        id: 'infeccao-latente',
        heading: 'E a infecção latente?',
        paragraphs: [
          'Quem foi infectado sem adoecer pode ter a chamada infecção latente, sem sintomas e sem transmissão. Nesses casos, o serviço de saúde avalia se há indicação de tratamento preventivo, sobretudo em pessoas com maior risco.',
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
    title: 'HIV: o que fazer nas primeiras 72 horas após uma situação de risco',
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
          'A PEP precisa ser iniciada o quanto antes, em até 72 horas depois da exposição. Passado esse prazo, ela deixa de ser indicada, porque a chance de funcionar cai muito.',
          'Depois de iniciada, o uso precisa continuar por todo o período indicado pelo serviço de saúde, em geral 28 dias. Interromper antes reduz a proteção.',
        ],
      },
      {
        id: 'situacoes',
        heading: 'Situações que exigem avaliação imediata',
        bullets: [
          'Relação sexual sem preservativo, ou com preservativo que rompeu, com parceiro de sorologia desconhecida ou que vive com HIV sem tratamento',
          'Compartilhamento de agulhas ou seringas',
          'Acidente com material cortante ou perfurante',
          'Violência sexual, situação em que a busca por atendimento deve ser imediata',
        ],
      },
      {
        id: 'onde-procurar',
        heading: 'Onde procurar',
        paragraphs: [
          'A PEP está disponível gratuitamente no SUS, em serviços de urgência e em centros de referência. O atendimento é sigiloso.',
          'Além da PEP, o serviço avalia a necessidade de outras medidas, como vacinação e testagem para outras infecções.',
        ],
      },
      {
        id: 'depois',
        heading: 'E depois',
        paragraphs: [
          'O acompanhamento inclui testes ao longo dos meses seguintes, porque uma infecção recente pode não aparecer nos primeiros exames. Volte para todas as consultas de acompanhamento: elas fazem parte do cuidado.',
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
      'Com o tratamento do HIV em dia e a carga viral indetectável, o vírus não é transmitido por via sexual. Entenda o que essa frase significa na prática.',
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
          'A afirmação se refere à transmissão sexual, não à transmissão por sangue ou pelo compartilhamento de agulhas',
        ],
      },
      {
        id: 'por-que-importa',
        heading: 'Por que isso importa',
        paragraphs: [
          'Além do efeito direto na saúde de quem vive com HIV, o conceito tem um efeito importante contra o estigma: ele desfaz a ideia de que viver com HIV significa necessariamente transmitir o vírus.',
          'Também reforça por que o tratamento é oferecido a todas as pessoas diagnosticadas, independentemente da contagem de células de defesa.',
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
          'Contra a hepatite A há vacina, disponível no SUS',
          'Contra a hepatite B há vacina para todas as faixas etárias',
          'A hepatite D não tem vacina específica, mas a vacina contra a hepatite B protege, porque a D só ocorre em quem já tem a B',
          'A hepatite C não tem vacina',
          'A hepatite E não tem vacina',
        ],
      },
      {
        id: 'por-que-a-b-e-tao-importante',
        heading: 'Por que a vacina contra a hepatite B é tão importante',
        paragraphs: [
          'Quando a infecção se torna crônica, a hepatite B pode evoluir para cirrose e câncer de fígado. O risco de cronicidade é maior quanto mais cedo a pessoa se infecta: em bebês, a maioria das infecções se torna crônica. A vacina é a principal forma de prevenção e está disponível gratuitamente no SUS.',
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
          'Fazer a testagem, disponível gratuitamente no SUS',
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
          'As vacinas estão disponíveis nas unidades básicas de saúde. As recomendações por faixa etária e por situação de risco mudam com o tempo, por isso confirme o calendário vigente na unidade de saúde.',
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
      'A hepatite C deixou de ser uma doença sem tratamento. Com os antivirais de ação direta, a maioria das pessoas se cura, e o tratamento é gratuito.',
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
          'O tratamento é feito com medicamentos por via oral, por um período definido pelo profissional de saúde, e está disponível gratuitamente no SUS.',
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
          'Se não houver melhora rápida, procure uma UPA ou um pronto-socorro',
        ],
      },
      {
        id: 'sinais-de-gravidade',
        heading: 'Sinais de gravidade',
        paragraphs: [
          'Estes sinais indicam crise grave. Nesses casos, procure atendimento de emergência ou vá imediatamente a um pronto atendimento:',
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
          'O medicamento de alívio não substitui o de controle no dia a dia. São medicamentos com funções diferentes: o de alívio abre a via aérea no momento, e o de controle trata a inflamação ao longo do tempo.',
          'Também não espere a crise passar sozinha quando há sinais de gravidade.',
        ],
      },
      {
        id: 'depois-da-crise',
        heading: 'Depois da crise',
        paragraphs: [
          'Uma crise é um sinal de que o controle pode estar inadequado. Leve esse episódio à próxima consulta: muitas vezes há ajuste no tratamento de controle, revisão da técnica de uso do inalador ou identificação de um gatilho que passou despercebido.',
        ],
        cta: {
          label: 'Veja a página sobre a asma',
          href: '/doencas/asma/',
        },
      },
    ],
    diseaseSlugs: ['asma'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'asma-sintomas-e-sinais-de-alerta',
      'asma-diagnostico-e-exames',
      'asma-tratamento-e-controle',
      'asma-como-evitar-crises',
      'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
    ],
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
      'Na DPOC, parar de fumar é a medida que mais muda a evolução da doença. Entenda o que muda e por que o apoio para parar faz diferença.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'relacao',
        heading: 'A relação entre fumo e DPOC',
        paragraphs: [
          'A DPOC é uma doença progressiva, que destrói aos poucos as vias aéreas e o tecido dos pulmões. O tabagismo é o principal fator de risco, e o efeito depende de há quanto tempo e em que quantidade a pessoa fumou.',
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
          'A dependência da nicotina é uma condição tratável. O SUS oferece apoio para quem quer parar, incluindo acompanhamento e, quando indicado, medicamentos.',
          'Tentativas anteriores que não deram certo não significam fracasso: a maioria das pessoas que param precisou de mais de uma tentativa.',
        ],
      },
      {
        id: 'outras-medidas',
        heading: 'Outras medidas que ajudam',
        bullets: [
          'Manter a vacina contra a gripe em dia, conforme a orientação do serviço de saúde',
          'Usar os medicamentos inalatórios do jeito certo e todos os dias',
          'Participar de reabilitação pulmonar, quando indicada',
          'Evitar a exposição à fumaça de qualquer origem, inclusive passiva',
          'Manter atividade física adaptada à condição, com orientação profissional',
        ],
        cta: {
          label: 'Veja a página sobre a DPOC',
          href: '/doencas/dpoc/',
        },
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure atendimento se houver piora da falta de ar, mudança no catarro, febre ou necessidade de usar o medicamento de alívio com mais frequência. Dificuldade para falar, lábios azulados ou sonolência são emergência: procure atendimento de emergência.',
        ],
        cta: {
          label: 'Leia também: o que fazer em uma crise de asma',
          href: '/artigos/asma-crise-o-que-fazer-enquanto-espera-atendimento/',
        },
      },
    ],
    diseaseSlugs: ['dpoc'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      'dpoc-sinais-de-alerta-quando-procurar-atendimento',
      'dpoc-como-e-diagnosticada',
      'dpoc-tratamento-e-cuidados',
      'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    ],
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
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-sinais-de-alerta-quando-procurar-atendimento',
    slug: 'dpoc-sinais-de-alerta-quando-procurar-atendimento',
    metaTitle: 'DPOC: sinais de alerta',
    title: 'DPOC: sinais de alerta e quando procurar atendimento',
    excerpt:
      'Falta de ar que piora rápido, catarro mais escuro ou febre podem indicar uma exacerbação da DPOC. Saiba o que é sinal de alerta e o que é emergência.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-e-uma-crise',
        heading: 'O que é uma exacerbação',
        paragraphs: [
          'A exacerbação da DPOC é uma piora súbita dos sintomas que dura dois dias ou mais e não melhora sozinha. A falta de ar aumenta, o catarro fica mais abundante ou mais escuro e pode aparecer febre.',
          'Na maioria dos casos, uma infecção respiratória é o gatilho. Também podem disparar uma crise a exposição à fumaça e à poeira, a poluição do ar e a interrupção do tratamento.',
        ],
      },
      {
        id: 'sinais-de-piora',
        heading: 'Sinais de que a doença piorou',
        paragraphs: [
          'Alguns sinais indicam que a DPOC saiu do controle e merece avaliação:',
        ],
        bullets: [
          'Mais falta de ar para atividades que antes eram fáceis',
          'Necessidade de usar o medicamento de alívio com mais frequência',
          'Catarro mais escuro, mais espesso ou em maior quantidade',
          'Febre, mais tosse e mais chiado do que o habitual',
        ],
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Se a piora durar dois dias ou mais, procure a unidade de saúde onde a doença é acompanhada ou um pronto atendimento. A avaliação precoce evita que a crise se agrave.',
          'Quanto mais cedo a exacerbação é tratada, menor o risco de internação. O tratamento costuma incluir reforço dos broncodilatadores e, quando indicado, corticoide e antibiótico.',
        ],
      },
      {
        id: 'emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Procure atendimento de emergência imediatamente se houver:',
        ],
        bullets: [
          'Dificuldade para falar frases completas',
          'Uso visível da musculatura do pescoço e das costelas para respirar',
          'Lábios ou pontas dos dedos azulados',
          'Sonolência ou confusão durante a piora',
          'Falta de resposta ao medicamento de alívio',
          'Piora progressiva apesar do tratamento habitual',
        ],
        cta: {
          label: 'Veja a página sobre a DPOC',
          href: '/doencas/dpoc/',
        },
      },
    ],
    diseaseSlugs: ['dpoc'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
      'dpoc-como-e-diagnosticada',
      'dpoc-tratamento-e-cuidados',
      'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    ],
    references: [
      {
        label: 'Doença pulmonar obstrutiva crônica (DPOC): folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas da DPOC',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/20220912_PCDT_Resumido_DPOC_final.pdf/@@download/file',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-como-e-diagnosticada',
    slug: 'dpoc-como-e-diagnosticada',
    title: 'DPOC: como é feito o diagnóstico',
    excerpt:
      'A espirometria é o exame que confirma a DPOC. Entenda como o diagnóstico é feito, o que o exame mede e por que ele é importante.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'como-e-confirmado',
        heading: 'Como o diagnóstico é confirmado',
        paragraphs: [
          'O diagnóstico da DPOC não é feito apenas pelos sintomas. Ele se apoia na história clínica, no exame físico e em um exame de função pulmonar chamado espirometria.',
          'A espirometria é obrigatória para confirmar a doença e é o exame que permite diferenciar a DPOC da asma e de outras condições.',
        ],
      },
      {
        id: 'espirometria',
        heading: 'A espirometria',
        paragraphs: [
          'No exame, a pessoa sopra em um aparelho, com força, depois de uma inspiração profunda. As medidas são repetidas antes e depois de um medicamento broncodilatador.',
          'Na DPOC, a relação entre o volume expirado no primeiro segundo (VEF1) e a capacidade vital forçada (CVF) continua abaixo de 0,70 depois do broncodilatador. Isso indica uma obstrução que não se reverte completamente e ajuda a afastar a asma, em que a melhora costuma ser maior.',
        ],
      },
      {
        id: 'outros-exames',
        heading: 'Outros exames que ajudam',
        paragraphs: [
          'Além da espirometria, outros exames podem ser pedidos para avaliar a gravidade e outras condições:',
        ],
        bullets: [
          'Radiografia de tórax, para afastar outras doenças',
          'Tomografia de tórax, quando o quadro sugere outras condições',
          'Oximetria de pulso e, em casos selecionados, gasometria, para avaliar o oxigênio no sangue',
          'Testes de esforço ou de caminhada, quando é preciso medir a tolerância ao exercício',
        ],
      },
      {
        id: 'quando-suspeitar',
        heading: 'Quando suspeitar e procurar avaliação',
        paragraphs: [
          'Procure avaliação se tiver sintomas respiratórios persistentes e algum fator de risco, como:',
        ],
        bullets: [
          'Falta de ar que surgiu aos poucos e piora com esforço',
          'Tosse com catarro por várias semanas ou meses',
          'História de tabagismo ou de exposição prolongada a poeira e fumaça',
          'Infecções respiratórias de repetição',
        ],
        cta: {
          label: 'Veja a página sobre a DPOC',
          href: '/doencas/dpoc/',
        },
      },
    ],
    diseaseSlugs: ['dpoc'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
      'dpoc-sinais-de-alerta-quando-procurar-atendimento',
      'dpoc-tratamento-e-cuidados',
      'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    ],
    references: [
      {
        label: 'Doença pulmonar obstrutiva crônica (DPOC): folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas da DPOC',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/20220912_PCDT_Resumido_DPOC_final.pdf/@@download/file',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-tratamento-e-cuidados',
    slug: 'dpoc-tratamento-e-cuidados',
    title: 'DPOC: tratamento e cuidados no dia a dia',
    excerpt:
      'O tratamento da DPOC combina medicamentos inalatórios, reabilitação pulmonar e mudanças no dia a dia. Veja o que faz parte do cuidado contínuo.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'tratamento-continuo',
        heading: 'O tratamento é contínuo',
        paragraphs: [
          'A DPOC não tem cura, mas tem tratamento. O objetivo é aliviar os sintomas, melhorar a respiração, reduzir as crises e manter a qualidade de vida.',
          'O tratamento combina medicamentos, reabilitação pulmonar e mudanças no estilo de vida. Ele é ajustado ao longo do tempo, conforme os sintomas e as crises de cada pessoa.',
        ],
      },
      {
        id: 'medicamentos',
        heading: 'Medicamentos inalatórios',
        paragraphs: [
          'A base do tratamento são os broncodilatadores por via inalatória. Em situações específicas, a equipe de saúde pode indicar outras classes, como o corticoide inalatório.',
          'Os medicamentos de manutenção são usados todos os dias, mesmo quando a pessoa está bem. Os medicamentos de alívio servem para episódios de falta de ar e não substituem o tratamento de manutenção.',
        ],
      },
      {
        id: 'tecnica-do-inalador',
        heading: 'A técnica do inalador',
        paragraphs: [
          'Usar o inalador do jeito certo é decisivo: com a técnica errada, o medicamento não chega aos pulmões.',
        ],
        bullets: [
          'Levar o inalador nas consultas, para revisar a técnica',
          'Seguir o tempo de espera e o número de inalações indicados para o seu dispositivo',
          'Usar espaçador, se for orientado, para facilitar a chegada do medicamento',
          'Enxaguar a boca depois dos inaladores que contêm corticoide',
        ],
      },
      {
        id: 'reabilitacao-e-oxigenio',
        heading: 'Reabilitação e oxigênio',
        paragraphs: [
          'A reabilitação pulmonar inclui exercícios, educação em saúde e apoio para conviver melhor com a falta de ar. Ela melhora a tolerância ao esforço e a qualidade de vida.',
          'Pessoas com baixa de oxigênio no sangue podem precisar de oxigenoterapia em casa, usada por pelo menos 15 horas por dia. A indicação é feita a partir de exames.',
        ],
      },
      {
        id: 'dia-a-dia',
        heading: 'Cuidados no dia a dia',
        paragraphs: ['Alguns hábitos fazem parte do cuidado contínuo:'],
        bullets: [
          'Manter as vacinas em dia, conforme a orientação do serviço de saúde',
          'Manter atividade física adaptada à condição, com orientação profissional',
          'Praticar exercícios de respiração, como a respiração com os lábios franzidos',
          'Manter a casa ventilada e livre de fumaça, poeira e mofo',
          'Manter as consultas regulares e não abandonar o tratamento nos períodos sem sintomas',
        ],
        cta: {
          label: 'Veja a página sobre a DPOC',
          href: '/doencas/dpoc/',
        },
      },
    ],
    diseaseSlugs: ['dpoc'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
      'dpoc-sinais-de-alerta-quando-procurar-atendimento',
      'dpoc-como-e-diagnosticada',
      'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    ],
    references: [
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas da DPOC',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/20220912_PCDT_Resumido_DPOC_final.pdf/@@download/file',
        publisher: 'Ministério da Saúde (Brasil)',
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
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    slug: 'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    metaTitle: 'DPOC: como prevenir crises',
    title: 'DPOC: como prevenir crises e o papel das vacinas',
    excerpt:
      'Vacinas em dia, evitar a fumaça e seguir o tratamento ajudam a reduzir as crises de DPOC. Veja o que está ao seu alcance.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'vacinas',
        heading: 'Vacinas que ajudam',
        paragraphs: [
          'Quem tem DPOC faz parte do grupo prioritário para a vacina contra a gripe, oferecida todos os anos. A infecção pelo vírus influenza aumenta o risco de crises e de complicações.',
          'Há outras vacinas indicadas, como a do pneumococo e a da covid-19. A equipe de saúde orienta o calendário mais adequado para cada pessoa.',
        ],
        bullets: [
          'Vacina contra a gripe: todos os anos, conforme a campanha nacional',
          'Vacina contra a covid-19: conforme a orientação local',
          'Vacina contra o pneumococo: indicada para pessoas com condições respiratórias crônicas',
        ],
      },
      {
        id: 'evitar-gatilhos',
        heading: 'Evitar os gatilhos',
        paragraphs: [
          'Boa parte das crises é disparada por infecções e por irritantes que podem ser evitados:',
        ],
        bullets: [
          'Não fumar e evitar a fumaça do tabaco em casa e no trabalho',
          'Evitar fumaça de lenha, carvão e outros materiais em ambientes fechados',
          'Reduzir a exposição a poeira, mofo e produtos de limpeza irritantes',
          'Lavar as mãos com frequência e evitar contato com pessoas gripadas',
        ],
      },
      {
        id: 'tratamento-em-dia',
        heading: 'Manter o tratamento em dia',
        paragraphs: [
          'Seguir o tratamento todos os dias, mesmo quando não há sintomas, é uma das formas mais eficazes de prevenir crises.',
          'As consultas de acompanhamento servem para ajustar os medicamentos, revisar a técnica do inalador e checar as vacinas.',
        ],
      },
      {
        id: 'quando-revisar',
        heading: 'Quando revisar com a equipe de saúde',
        paragraphs: [
          'Se as crises ficarem mais frequentes ou a falta de ar aumentar, procure o serviço de saúde para reavaliar o tratamento.',
          'Sintomas novos ou persistentes não devem ser atribuídos apenas à DPOC: outras condições podem precisar de investigação.',
        ],
        cta: {
          label: 'Veja a página sobre a DPOC',
          href: '/doencas/dpoc/',
        },
      },
    ],
    diseaseSlugs: ['dpoc'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
      'dpoc-sinais-de-alerta-quando-procurar-atendimento',
      'dpoc-como-e-diagnosticada',
      'dpoc-tratamento-e-cuidados',
    ],
    references: [
      {
        label: 'Calendário Nacional de Vacinação',
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Doença pulmonar obstrutiva crônica (DPOC): folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
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
          'Dor que irradia para o braço, o pescoço, a mandíbula ou as costas',
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
          'Chame ajuda imediatamente: procure atendimento de emergência',
          'Não vá ao hospital dirigindo você mesmo: peça carona a alguém ou aguarde o atendimento de emergência',
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
    relatedArticleSlugs: [
      'avc-como-reconhecer-os-sinais-e-agir-rapido',
      'hipertensao-como-medir-a-pressao-em-casa',
      'infarto-e-avc-fatores-de-risco',
      'infarto-e-avc-como-e-diagnosticado',
      'infarto-e-avc-tratamento-e-reabilitacao',
    ],
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
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
    {
    id: 'avc-como-reconhecer-os-sinais-e-agir-rapido',
    slug: 'avc-como-reconhecer-os-sinais-e-agir-rapido',
    title: 'AVC: como reconhecer os sinais e agir rápido',
    excerpt:
      'Fraqueza de um lado do corpo, boca torta e dificuldade para falar são os sinais mais comuns do AVC. O teste FAST ajuda a identificar o problema, e o socorro deve ser chamado na hora.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-e',
        heading: 'O que é o AVC?',
        paragraphs: [
          'O AVC é uma emergência médica: a cada minuto sem tratamento, mais células do cérebro são perdidas. Reconhecer os sinais e pedir socorro imediato é o que faz a diferença entre uma recuperação completa e sequelas permanentes.',
          'O acidente vascular cerebral acontece quando um vaso que leva sangue ao cérebro entope ou se rompe, e a região privada de sangue deixa de funcionar. Existem dois tipos principais: o AVC isquêmico, causado por obstrução, corresponde a cerca de 85% dos casos; e o AVC hemorrágico, causado por ruptura, responde por cerca de 15%. Um episódio breve e reversível, o ataque isquêmico transitório (AIT), também avisa que um AVC pode estar por vir.',
        ],
      },
      {
        id: 'sinais',
        heading: 'Quais são os sinais de AVC?',
        paragraphs: [
          'Os sinais do AVC costumam surgir de repente e atingem com mais frequência apenas um lado do corpo. Fique atento a estes sintomas, segundo o Ministério da Saúde e a OMS:',
        ],
        bullets: [
          'Fraqueza ou dormência em um lado do rosto, com o canto da boca caído',
          'Fraqueza no braço ou na perna de um lado do corpo',
          'Dificuldade para falar ou para entender o que é dito',
          'Perda súbita de visão em um ou nos dois olhos',
          'Tontura forte, perda de equilíbrio ou dificuldade para andar',
          'Dor de cabeça súbita e muito intensa, sem causa conhecida',
        ],
      },
      {
        id: 'teste-rapido',
        heading: 'Como usar o teste FAST para identificar o AVC?',
        paragraphs: [
          'O teste FAST é a forma mais simples de identificar um AVC e pode ser feita por qualquer pessoa. Cada letra lembra o que observar:',
          'Peça para a pessoa sorrir (Face: um lado do rosto fica torto?), levantar os dois braços (Arms: um braço cai?) e repetir uma frase simples (Speech: a fala sai arrastada ou estranha?). Se houver qualquer alteração, o T (Time) manda ligar para o socorro na hora. O teste não descarta o AVC quando está normal, mas ajuda a não perder o caso típico.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer ao suspeitar de AVC?',
        paragraphs: [
          'Ao suspeitar de AVC, o socorro precisa ser acionado imediatamente. O tempo ganho antes da chegada ao hospital é o que abre as opções de tratamento.',
        ],
        bullets: [
          'Procure atendimento de emergência imediatamente e diga que suspeita de um AVC',
          'Anote o horário exato em que os sintomas começaram',
          'Não ofereça comida, bebida nem remédio à pessoa',
          'Não a deixe sozinha e mantenha-a deitada, se possível',
          'Não leve a pessoa de carro próprio: peça a ambulância para o atendimento começar no trajeto',
        ],
      },
      {
        id: 'tempo',
        heading: 'Por que o tempo é decisivo no AVC?',
        paragraphs: [
          'No AVC, o tempo é o cérebro. Segundo os CDC, os tratamentos mais eficazes só estão disponíveis quando o AVC é reconhecido e atendido dentro de cerca de 3 horas após o primeiro sintoma. Por isso, anotar o horário de início e chamar o socorro de imediato importa tanto quanto o próprio diagnóstico.',
        ],
      },
      {
        id: 'fatores-risco',
        heading: 'Quais fatores aumentam o risco de AVC?',
        paragraphs: [
          'Vários fatores aumentam as chances de um AVC, e muitos deles podem ser controlados ao longo dos anos:',
        ],
        bullets: [
          'Pressão alta, o principal fator de risco',
          'Diabetes tipo 2',
          'Colesterol alto',
          'Tabagismo',
          'Excesso de peso e obesidade',
          'Vida sedentária, sem atividade física regular',
          'Uso excessivo de álcool ou de drogas ilícitas',
          'Idade avançada, histórico familiar e arritmias como a fibrilação atrial',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir o risco de AVC?',
        paragraphs: [
          'A maior parte dos AVCs poderia ser evitada com mudanças no dia a dia e o acompanhamento dos fatores de risco. Manter a pressão controlada, não fumar, comer melhor, praticar atividade física e tratar o diabetes e o colesterol alto são as medidas que mais reduzem o risco, segundo a OMS.',
        ],
        cta: {
          label: 'Entenda a hipertensão na página completa',
          href: '/doencas/hipertensao/',
        },
      },
    ],
    diseaseSlugs: ['infarto-e-avc', 'hipertensao'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'infarto-quais-sao-os-sinais-e-o-que-fazer',
      'hipertensao-como-medir-a-pressao-em-casa',
      'infarto-e-avc-fatores-de-risco',
      'infarto-e-avc-como-e-diagnosticado',
      'infarto-e-avc-tratamento-e-reabilitacao',
    ],
    references: [
      {
        label: 'Stroke: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/stroke',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'AVC: sintomas, tipos e prevenção',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Sinais e sintomas do AVC (B.E. F.A.S.T.)',
        url: 'https://www.cdc.gov/stroke/signs-symptoms/index.html',
        publisher: 'Centers for Disease Control and Prevention (CDC)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'asma-sintomas-e-sinais-de-alerta',
    slug: 'asma-sintomas-e-sinais-de-alerta',
    title: 'Sintomas de asma e os sinais de alerta',
    excerpt:
      'Chiado, falta de ar e tosse que vão e voltam são os sinais mais comuns da asma. Reconhecer os sinais de gravidade é o que evita que uma crise piore.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'sintomas',
        heading: 'Quais sintomas indicam asma',
        paragraphs: [
          'Os sintomas mais comuns da asma são chiado no peito, falta de ar, aperto ou pressão no peito e tosse, muitas vezes seca. Eles aparecem em episódios e podem desaparecer sozinhos ou com tratamento.',
          'A intensidade varia muito: há quem tenha sintomas leves e espaçados e quem tenha crises frequentes. Também é comum que os sintomas piorem à noite ou no início da manhã.',
        ],
        bullets: [
          'Chiado no peito, chamado de sibilância',
          'Falta de ar, que piora com esforço',
          'Aperto ou pressão no peito',
          'Tosse seca e persistente, sobretudo à noite',
          'Acordar durante a noite por falta de ar ou tosse',
        ],
      },
      {
        id: 'variacao',
        heading: 'Por que os sintomas vão e voltam',
        paragraphs: [
          'Na asma, as vias aéreas ficam inflamadas e mais sensíveis. Quando a pessoa entra em contato com um gatilho, elas se estreitam e os sintomas aparecem; quando o gatilho some ou o tratamento está em dia, o quadro melhora.',
          'Essa variação faz com que muitas pessoas subestimem a doença nos períodos bons. A inflamação continua presente mesmo sem sintomas, e é por isso que o tratamento de controle não deve ser interrompido quando a pessoa se sente bem.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta',
        paragraphs: [
          'Estes sinais indicam crise grave. Nesses casos, procure atendimento de emergência ou vá imediatamente a um pronto atendimento:',
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
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Sintomas que aparecem mais de duas vezes por semana, que acordam a pessoa à noite ou que limitam as atividades do dia a dia indicam que o controle está inadequado. Vale levar esse histórico à consulta.',
          'Não espere uma crise grave para procurar ajuda: o ajuste do tratamento costuma ser simples e muda bastante a qualidade de vida.',
        ],
        cta: {
          label: 'Veja a página sobre a asma',
          href: '/doencas/asma/',
        },
      },
    ],
    diseaseSlugs: ['asma'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      'asma-diagnostico-e-exames',
      'asma-tratamento-e-controle',
      'asma-como-evitar-crises',
    ],
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
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'asma-diagnostico-e-exames',
    slug: 'asma-diagnostico-e-exames',
    title: 'Como a asma é diagnosticada',
    excerpt:
      'O diagnóstico da asma combina a história de sintomas que vão e voltam com exames que medem o fluxo de ar nos pulmões.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'historia-e-exame',
        heading: 'História clínica e exame físico',
        paragraphs: [
          'O diagnóstico começa pela conversa com o profissional de saúde e pelo exame físico. São valorizadas queixas que vão e voltam, que pioram à noite ou no início da manhã e que aparecem depois do contato com um gatilho.',
          'Também entram na avaliação a história de alergias, de rinite e de asma na família, além de fatores como tabagismo e exposição a poeira e mofo.',
        ],
      },
      {
        id: 'espirometria',
        heading: 'Espirometria',
        paragraphs: [
          'A espirometria é o exame que confirma a obstrução das vias aéreas. Ela mede como o ar entra e sai dos pulmões e registra o volume expiratório forçado no primeiro segundo, o VEF1.',
          'O exame é repetido depois do uso de um broncodilatador. Um aumento do VEF1 de pelo menos 12% e 200 mL mostra que a obstrução é reversível, o que é característico da asma.',
        ],
      },
      {
        id: 'outros-exames',
        heading: 'Outros exames que ajudam',
        bullets: [
          'Teste de broncoprovocação, quando os sintomas são sugestivos mas a espirometria é normal',
          'Medida do pico de fluxo expiratório, em alguns casos, para acompanhar o controle',
          'Testes de alergia, quando é útil identificar os alérgenos envolvidos',
          'Exames para descartar outras causas, como radiografia de tórax e avaliação da rinite',
        ],
      },
      {
        id: 'diagnostico-em-criancas',
        heading: 'Diagnóstico em crianças',
        paragraphs: [
          'Em crianças pequenas, a espirometria pode ser difícil de realizar, porque o exame exige coordenação. Nesses casos, o diagnóstico fica apoiado nos sintomas e na resposta ao tratamento.',
          'O médico precisa descartar outras causas de tosse e chiado, como bronquiolite, rinite alérgica e refluxo, antes de concluir que se trata de asma.',
        ],
      },
      {
        id: 'depois-do-diagnostico',
        heading: 'Depois do diagnóstico',
        paragraphs: [
          'Confirmado o diagnóstico, o passo seguinte é montar um plano de tratamento contínuo e aprender a reconhecer os sinais de piora. O acompanhamento regular é o que mantém a asma controlada.',
        ],
        cta: {
          label: 'Veja a página sobre a asma',
          href: '/doencas/asma/',
        },
      },
    ],
    diseaseSlugs: ['asma'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      'asma-sintomas-e-sinais-de-alerta',
      'asma-tratamento-e-controle',
      'asma-como-evitar-crises',
    ],
    references: [
      {
        label: 'Asma: orientações e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Asma: Protocolo Clínico e Diretrizes Terapêuticas',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma/pcdt',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'asma-tratamento-e-controle',
    slug: 'asma-tratamento-e-controle',
    title: 'Tratamento da asma e controle no dia a dia',
    excerpt:
      'O tratamento da asma une o medicamento de controle, usado todos os dias, ao de alívio, usado na crise. A constância é o que mantém a doença controlada.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'medicamentos',
        heading: 'Medicamento de controle e medicamento de alívio',
        paragraphs: [
          'A asma tem dois tipos de medicamento, com funções diferentes. O de controle reduz a inflamação das vias aéreas e precisa ser usado todos os dias, mesmo quando não há sintomas. O de alívio abre a via aérea durante a crise e não substitui o controle.',
          'Usar apenas o de alívio com frequência é sinal de que o controle está inadequado, porque ele não trata a inflamação que está por trás dos sintomas. O ajuste da terapêutica busca a menor dose necessária para manter o controle, reduzindo efeitos adversos.',
        ],
        bullets: [
          'Os principais medicamentos de controle são os corticosteroides inalatórios, como a beclometasona.',
          'Os de alívio são broncodilatadores, como o salbutamol.',
          'Em alguns casos o profissional combina os dois na mesma inalação, para facilitar o uso.',
        ],
      },
      {
        id: 'inalador',
        heading: 'Técnica do inalador',
        paragraphs: [
          'A técnica de uso do inalador faz parte do tratamento. Quando está errada, boa parte do medicamento fica na boca e na garganta em vez de chegar aos pulmões, e o efeito diminui.',
          'Uma sequência comum ajuda: agitar o inalador, expirar até o fim, vedar os lábios no bocal, apertar e inspirar devagar ao mesmo tempo, segurar a respiração por alguns segundos e só então soltar o ar. Quem usa corticoide inalatório costuma enxaguar a boca depois, para evitar rouquidão e aftas.',
        ],
        bullets: [
          'Vale pedir ao profissional de saúde que acompanhe a sua técnica na consulta.',
          'Pergunte se há necessidade de espaçador, um dispositivo que facilita o uso em crianças e em quem tem dificuldade de coordenação.',
        ],
      },
      {
        id: 'sus',
        heading: 'Tratamento gratuito pelo SUS',
        paragraphs: [
          'No SUS, o tratamento da asma é gratuito. Desde 2011, o programa Farmácia Popular oferece, sem custo e mediante CPF e receita médica, três medicamentos: a beclometasona e o salbutamol inalatórios e o brometo de ipratrópio. Todos constam do Protocolo Clínico e Diretrizes Terapêuticas da asma.',
          'Em crises mais intensas, o profissional de saúde pode prescrever corticosteroides em comprimidos, como a prednisona, além dos medicamentos de uso contínuo. A orientação é procurar uma Unidade Básica de Saúde (UBS), onde se recebe o tratamento e o acompanhamento.',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Acompanhamento',
        bullets: [
          'Voltar às consultas de acompanhamento, mesmo em períodos sem sintomas.',
          'Manter o medicamento de controle em uso diário, sem interromper por conta própria.',
          'Registrar as crises e os gatilhos que as provocaram, para levar à consulta.',
          'Revisar periodicamente a técnica do inalador e a necessidade de ajuste de dose.',
          'Manter as vacinas em dia, em especial a vacina da gripe, pois infecções respiratórias são gatilhos frequentes de crise.',
        ],
      },
      {
        id: 'plano-de-acao',
        heading: 'Plano de ação por escrito',
        paragraphs: [
          'Muitos serviços entregam um plano de ação por escrito, que explica o que fazer no dia a dia, quando os sintomas pioram e quando procurar ajuda. Ele traduz o tratamento em passos claros e reduz a dúvida na hora da crise.',
          'Guardar esse plano à mão e revisá-lo nas consultas ajuda a reconhecer cedo os sinais de que o controle escapou. Peça esse plano ao profissional de saúde: faz parte do cuidado, não é um extra.',
        ],
      },
      {
        id: 'quando-buscar-socorro',
        heading: 'Quando buscar atendimento com urgência',
        paragraphs: [
          'A asma pode ser grave e, em casos extremos e raros, levar à morte quando a crise não recebe o tratamento correto. Por isso, certos sinais pedem atendimento imediato e não podem esperar a consulta de rotina.',
          'Ao surgir qualquer um desses sinais, procure atendimento imediatamente: em caso de dúvida, procure atendimento de emergência ou vá ao pronto atendimento mais próximo.',
        ],
        bullets: [
          'Falta de ar intensa, que impede falar frases completas ou deitar.',
          'Lábios ou unhas azulados, sinal de falta de oxigênio.',
          'O medicamento de alívio não alivia após o uso, ou a melhora dura pouco.',
          'Sonolência, confusão ou cansaço extremo para respirar.',
          'Sintomas que pioram rápido apesar do tratamento.',
        ],
      },
      {
        id: 'adesao',
        heading: 'Por que a adesão faz a diferença',
        paragraphs: [
          'O medicamento de controle só protege enquanto é usado. Parar por conta própria quando os sintomas sumiram é uma das causas mais comuns de nova crise, porque a inflamação volta silenciosamente antes dos sintomas.',
          'Manter o uso diário, revisar a técnica e não aumentar a dose sem orientação são atitudes simples que mantêm a asma controlada. Com acompanhamento correto e constante, a maioria das pessoas com asma leva uma vida normal.',
        ],
      },
      {
        id: 'duvidas-comuns',
        heading: 'Dúvidas comuns sobre o tratamento',
        paragraphs: [
          'Posso parar o remédio quando me sinto bem? Não. O controle age na inflamação, que pode voltar sem aviso. Mantenha o uso diário enquanto o profissional de saúde não orientar o contrário.',
          'O inalador vicia? Os medicamentos para asma não causam dependência. O alívio serve para abrir a via aérea na crise; usar muito indica que o controle precisa ser revisto, não que o remédio vicia.',
          'Exercício provoca crise? Pode, em quem tem controle inadequado. Com o tratamento ajustado, a atividade física faz parte do cuidado e melhora a capacidade respiratória.',
        ],
      },
      {
        id: 'quando-reavaliar',
        heading: 'Quando o controle precisa ser revisto',
        paragraphs: [
          'Crises frequentes, despertar à noite e uso repetido do medicamento de alívio indicam que o plano precisa ser revisto. Leve essas informações ao serviço de saúde em vez de aumentar a dose por conta própria.',
        ],
        cta: {
          label: 'Veja a página sobre a asma',
          href: '/doencas/asma/',
        },
      },
    ],
    diseaseSlugs: ['asma'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      'asma-sintomas-e-sinais-de-alerta',
      'asma-diagnostico-e-exames',
      'asma-como-evitar-crises',
    ],
    references: [
      {
        label: 'Asma: orientações e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Asma: Protocolo Clínico e Diretrizes Terapêuticas',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma/pcdt',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'asma-como-evitar-crises',
    slug: 'asma-como-evitar-crises',
    title: 'Como evitar crises de asma',
    excerpt:
      'Identificar os gatilhos, cuidar do ambiente de casa e manter vacinas e tratamento em dia são as medidas que mais reduzem as crises.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'gatilhos',
        heading: 'Identificar os gatilhos',
        paragraphs: [
          'Cada pessoa tem gatilhos próprios. Os mais comuns são ácaros e poeira, mofo, pelos de animais, fumaça de cigarro, mudanças de tempo, infecções respiratórias e exercício.',
          'Anotar quando e onde as crises acontecem ajuda a reconhecer o padrão e a reduzir a exposição aos gatilhos mais frequentes.',
        ],
      },
      {
        id: 'casa',
        heading: 'Cuidados dentro de casa',
        bullets: [
          'Manter a casa ventilada e exposta ao sol',
          'Reduzir objetos que acumulam pó, como tapetes, cortinas e bichos de pelúcia',
          'Lavar com frequência roupas de cama e cobertores',
          'Evitar mofo, cuidando de infiltrações e de umidade',
          'Não fumar dentro de casa e evitar a fumaça de qualquer origem',
        ],
      },
      {
        id: 'vacinas',
        heading: 'Vacinas em dia',
        paragraphs: [
          'As infecções respiratórias estão entre os principais gatilhos de crise. Por isso, manter a vacinação em dia faz parte do controle da asma.',
          'Pessoas com asma em uso de corticoide inalatório ou sistêmico, na forma moderada ou grave, estão entre os grupos prioritários da campanha anual de vacinação contra a gripe.',
        ],
      },
      {
        id: 'vida-ativa',
        heading: 'Vida ativa e controle da doença',
        paragraphs: [
          'A atividade física faz parte do tratamento e melhora a capacidade respiratória. Quando o exercício provoca crises com frequência, o controle pode estar inadequado e o tratamento costuma ser ajustado.',
          'Manter o peso saudável e o medicamento de controle em uso diário reduz a chance de crises, inclusive as provocadas por esforço.',
        ],
      },
      {
        id: 'plano-de-acao',
        heading: 'Plano de ação por escrito',
        paragraphs: [
          'Muitos serviços entregam um plano de ação por escrito, que explica o que fazer quando os sintomas pioram e quando procurar ajuda. Vale guardá-lo à mão e revisá-lo nas consultas.',
        ],
        cta: {
          label: 'Veja a página sobre a asma',
          href: '/doencas/asma/',
        },
      },
    ],
    diseaseSlugs: ['asma'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      'asma-sintomas-e-sinais-de-alerta',
      'asma-diagnostico-e-exames',
      'asma-tratamento-e-controle',
    ],
    references: [
      {
        label: 'Asma: orientações e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Vacinação: calendário e grupos prioritários',
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
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
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'infarto-e-avc-fatores-de-risco',
    slug: 'infarto-e-avc-fatores-de-risco',
    metaTitle: 'Infarto e AVC: fatores de risco',
    title: 'Infarto e AVC: quais são os fatores de risco',
    excerpt:
      'Hipertensão, diabetes, colesterol alto, tabagismo e sedentarismo estão por trás da maior parte dos casos. Boa parte desses fatores pode ser controlada.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'fatores-comuns',
        heading: 'O que infarto e AVC têm em comum',
        paragraphs: [
          'Os dois eventos acontecem quando uma artéria é obstruída e uma parte do tecido fica sem oxigênio. Por isso, os fatores que danificam os vasos sanguíneos ao longo dos anos aumentam ao mesmo tempo o risco de infarto e de AVC.',
          'A aterosclerose está por trás da maior parte dos casos: placas de gordura se acumulam na parede das artérias e podem se romper, formando um coágulo que interrompe o fluxo de sangue.',
        ],
      },
      {
        id: 'hipertensao',
        heading: 'Pressão alta',
        paragraphs: [
          'A [hipertensão](/doencas/hipertensao/) é o principal fator de risco para o AVC e um dos principais para o infarto. A pressão alta desgasta a parede das artérias e aumenta a chance tanto de obstrução quanto de rompimento de vasos no cérebro.',
          'O controle depende de acompanhamento contínuo: medir a pressão, tomar a medicação todos os dias e ajustar a dose quando necessário. Interromper o remédio por conta própria porque a pressão melhorou é uma das causas mais comuns de a pressão voltar a subir.',
        ],
        bullets: [
          'Medir a pressão em casa ou na unidade de saúde com regularidade',
          'Tomar a medicação nos horários prescritos, sem interromper',
          'Reduzir o sal da comida e evitar ultraprocessados',
          'Levar as medidas anotadas para as consultas',
        ],
      },
      {
        id: 'outros-fatores',
        heading: 'Outros fatores que pesam',
        paragraphs: [
          'Diabetes e colesterol alto, tabagismo, excesso de peso, sedentarismo, álcool em excesso, idade avançada e histórico familiar completam a lista. Diabetes e hipertensão juntos pesam bastante: nessas duas condições, a chance de infarto é de duas a quatro vezes maior.',
        ],
        bullets: [
          'Manter a glicose sob controle, no caso do diabetes',
          'Seguir o tratamento indicado para o colesterol alto',
          'Parar de fumar',
          'Manter o peso adequado e uma alimentação com menos sal e gordura',
          'Praticar atividade física regularmente',
          'Reduzir o consumo de álcool e não usar drogas ilícitas',
          'Tratar a fibrilação atrial, que pode formar coágulos que chegam ao cérebro',
        ],
      },
      {
        id: 'o-que-muda',
        heading: 'O que dá para mudar',
        paragraphs: [
          'Idade, histórico familiar e sexo não podem ser mudados, mas a maior parte do risco depende de fatores que podem ser tratados e acompanhados. Quem tem pressão alta, diabetes ou colesterol alto e mantém o tratamento em dia reduz bastante a chance de um evento.',
          'Reconhecer os sinais também é prevenção: chegar rápido ao atendimento é o que permite o tratamento que evita sequelas.',
        ],
        cta: {
          label: 'Veja a página sobre infarto e AVC',
          href: '/doencas/infarto-e-avc/',
        },
      },
    ],
    diseaseSlugs: ['infarto-e-avc', 'hipertensao'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'infarto-quais-sao-os-sinais-e-o-que-fazer',
      'avc-como-reconhecer-os-sinais-e-agir-rapido',
      'infarto-e-avc-como-e-diagnosticado',
      'infarto-e-avc-tratamento-e-reabilitacao',
    ],
    references: [
      {
        label: 'Infarto: sintomas, fatores de risco e atendimento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/i/infarto',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'AVC: tipos, sinais, tratamento e reabilitação',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
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
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'infarto-e-avc-como-e-diagnosticado',
    slug: 'infarto-e-avc-como-e-diagnosticado',
    metaTitle: 'Infarto e AVC: como é o diagnóstico',
    title: 'Infarto e AVC: como é feito o diagnóstico',
    excerpt:
      'No infarto, o eletrocardiograma e a troponina confirmam a lesão do coração. No AVC, a tomografia de crânio mostra se a causa é obstrução ou sangramento.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'na-urgencia',
        heading: 'O diagnóstico acontece na urgência',
        paragraphs: [
          'Nos dois casos o diagnóstico é feito durante o atendimento de urgência, e não em consultas eletivas depois. O objetivo é identificar o tipo de evento e começar o tratamento o mais rápido possível.',
          'Por isso, o primeiro passo diante dos sintomas é chamar ajuda, e não procurar exames por conta própria.',
        ],
      },
      {
        id: 'infarto',
        heading: 'Como o infarto é identificado',
        paragraphs: [
          'A pessoa é avaliada assim que chega: sinais vitais, exame clínico e um eletrocardiograma, que mostra alterações típicas da obstrução de uma artéria do coração.',
          'O exame de sangue mede a troponina, proteína que aparece quando o músculo cardíaco sofre lesão. Em alguns casos, o eletrocardiograma e a dosagem precisam ser repetidos para confirmar ou afastar o infarto.',
        ],
        bullets: [
          'Eletrocardiograma, feito assim que a pessoa chega',
          'Dosagem de troponina no sangue',
          'Cateterismo cardíaco, quando é preciso ver as artérias por dentro',
        ],
      },
      {
        id: 'avc',
        heading: 'Como o AVC é identificado',
        paragraphs: [
          'A tomografia computadorizada de crânio é o exame de imagem mais usado na avaliação inicial. Ela diferencia o AVC isquêmico, causado por obstrução, do hemorrágico, causado pelo rompimento de um vaso, e essa diferença muda o tratamento.',
          'Junto com o exame de imagem, a equipe verifica a pressão arterial, a glicemia e o horário exato em que os sintomas começaram. Essa última informação define se ainda há tempo para a trombólise.',
        ],
        bullets: [
          'Tomografia computadorizada de crânio',
          'Pressão arterial e glicemia',
          'Registro do horário de início dos sintomas',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Exames de acompanhamento',
        paragraphs: [
          'Quem tem fatores de risco faz acompanhamento regular para avaliar pressão, glicose, colesterol e outros indicadores. Depois de um infarto ou de um AVC, o seguimento inclui reavaliação do tratamento e exames para investigar a causa, como a fibrilação atrial.',
        ],
      },
      {
        id: 'o-que-nao-esperar',
        heading: 'O que não pode esperar',
        bullets: [
          'Dor no peito, falta de ar, suor frio ou desmaio súbito',
          'Fraqueza de um lado do corpo, fala alterada ou perda de visão de início súbito',
          'Dor de cabeça súbita e muito intensa',
          'Confusão mental ou alteração do equilíbrio',
        ],
        cta: {
          label: 'Veja a página sobre infarto e AVC',
          href: '/doencas/infarto-e-avc/',
        },
      },
    ],
    diseaseSlugs: ['infarto-e-avc'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'infarto-quais-sao-os-sinais-e-o-que-fazer',
      'avc-como-reconhecer-os-sinais-e-agir-rapido',
      'infarto-e-avc-fatores-de-risco',
      'infarto-e-avc-tratamento-e-reabilitacao',
    ],
    references: [
      {
        label: 'AVC: tipos, sinais, tratamento e reabilitação',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Infarto: sintomas, fatores de risco e atendimento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/i/infarto',
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
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'infarto-e-avc-tratamento-e-reabilitacao',
    slug: 'infarto-e-avc-tratamento-e-reabilitacao',
    metaTitle: 'Infarto e AVC: tratamento e reabilitação',
    title: 'Infarto e AVC: tratamento e reabilitação',
    excerpt:
      'Restabelecer o fluxo de sangue o mais rápido possível é o centro do tratamento. Depois do evento, reabilitação e acompanhamento definem a recuperação.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'primeiras-horas',
        heading: 'O tratamento começa nas primeiras horas',
        paragraphs: [
          'Nas duas situações, o tratamento busca restabelecer o fluxo de sangue antes que mais tecido morra. É por isso que o tempo entre o início dos sintomas e o atendimento muda o resultado.',
          'O atendimento segue protocolos do SUS. No infarto, a Linha de Cuidado do Infarto Agudo do Miocárdio começa no SAMU, que faz o atendimento inicial e já comunica o hospital de referência.',
        ],
      },
      {
        id: 'avc-isquemico',
        heading: 'No AVC isquêmico',
        paragraphs: [
          'O tratamento é feito nos Centros de Atendimento de Urgência. A trombólise endovenosa, que dissolve o coágulo, pode ser indicada quando iniciada em até 4 horas e meia do começo dos sintomas.',
          'No AVC hemorrágico, o foco é controlar a pressão e o sangramento, e o tratamento pode incluir cirurgia ou procedimento endovascular, conforme o caso.',
        ],
      },
      {
        id: 'infarto',
        heading: 'No infarto',
        paragraphs: [
          'A angioplastia primária, que abre a artéria por dentro com um cateter e em geral implanta um stent, é o procedimento preferido. Quando não está disponível no tempo necessário, entra o trombolítico, que dissolve o coágulo.',
          'Em setembro de 2026, uma lei ampliou a oferta de trombolíticos na rede de urgência e emergência do SUS, incluindo as UPAs, para que o tratamento possa começar mais perto de onde a pessoa está.',
        ],
      },
      {
        id: 'reabilitacao',
        heading: 'Reabilitação depois do evento',
        paragraphs: [
          'A recuperação não termina na alta. No AVC, a fisioterapia e a fonoaudiologia iniciadas cedo fazem diferença nos movimentos e na fala, e a reabilitação pode ser feita nos Centros Especializados em Reabilitação (CER).',
          'No infarto, o acompanhamento depois da alta inclui ajuste das medicações e retomada gradual das atividades, conforme a orientação da equipe.',
        ],
        bullets: [
          'Fisioterapia para recuperar os movimentos',
          'Fonoaudiologia para a fala e a deglutição',
          'Retomada gradual das atividades do dia a dia',
          'Ajuste das medicações nas consultas de seguimento',
        ],
      },
      {
        id: 'nao-interromper',
        heading: 'O que sustenta a recuperação',
        paragraphs: [
          'Depois de um infarto ou de um AVC, tomar a medicação prescrita todos os dias e manter o acompanhamento é o que reduz o risco de um novo evento.',
        ],
        bullets: [
          'Tomar os medicamentos nos horários prescritos, sem interromper por conta própria',
          'Manter pressão, glicose e colesterol sob controle',
          'Não fumar, reduzir o álcool e manter atividade física conforme a orientação',
          'Voltar às consultas de acompanhamento',
        ],
        cta: {
          label: 'Veja a página sobre infarto e AVC',
          href: '/doencas/infarto-e-avc/',
        },
      },
    ],
    diseaseSlugs: ['infarto-e-avc'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'infarto-quais-sao-os-sinais-e-o-que-fazer',
      'avc-como-reconhecer-os-sinais-e-agir-rapido',
      'infarto-e-avc-fatores-de-risco',
      'infarto-e-avc-como-e-diagnosticado',
    ],
    references: [
      {
        label: 'Infarto: sintomas, fatores de risco e atendimento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/i/infarto',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'AVC: tipos, sinais, tratamento e reabilitação',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'SUS amplia a oferta de trombolíticos para infarto e AVC',
        url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/sancionada-lei-que-preve-oferta-de-tromboliticos-para-tratamento-de-infarto-e-avc-na-rede-de-urgencia-e-emergencia-do-sus',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'faringite-e-amigdalite-sinais-de-alerta',
    slug: 'faringite-e-amigdalite-sinais-de-alerta',
    metaTitle: 'Dor de garganta: sinais de alerta',
    title: 'Dor de garganta: sinais de alerta e quando procurar atendimento',
    excerpt:
      'A maioria das dores de garganta melhora sozinha em poucos dias. Alguns sinais, porém, indicam infecção grave e pedem avaliação imediata. Saiba o que observar.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'quadro-habitual',
        heading: 'O que costuma ser esperado',
        paragraphs: [
          'A dor de garganta viral costuma vir junto com corrimento nasal, tosse e febre baixa, e melhora em poucos dias sem antibiótico.',
          'A amigdalite bacteriana tende a causar febre mais alta, dor intensa ao engolir e placas de pus nas amígdalas. Mesmo assim, o quadro leve das duas formas se parece, e o que muda a conduta são os sinais de gravidade.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais que pedem avaliação imediata',
        paragraphs: [
          'Alguns sinais indicam que a infecção passou dos limites da garganta ou está fechando a passagem de ar, e não podem esperar em casa.',
        ],
        bullets: [
          'Dificuldade para respirar ou sensação de sufocamento',
          'Dificuldade para engolir a própria saliva, com saliva escorrendo pela boca',
          'Inchaço em um só lado da garganta, com dificuldade para abrir a boca',
          'Febre alta que não cede com antitérmico',
          'Manchas no corpo ou rigidez na nuca',
          'Criança pequena que recusa líquidos, fica prostrada ou muito sonolenta',
        ],
      },
      {
        id: 'emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Dificuldade para respirar é emergência. Nesse caso, procure atendimento de emergência imediatamente ou leve a pessoa ao pronto atendimento mais próximo.',
          'O inchaço em um só lado da garganta com dificuldade para abrir a boca pode indicar um acúmulo de pus ao redor da amígdala, que precisa de avaliação e tratamento no serviço de saúde.',
        ],
      },
      {
        id: 'prazo',
        heading: 'O prazo que costuma indicar avaliação',
        paragraphs: [
          'Quando a dor de garganta passa de quatro dias sem nenhuma melhora, ou quando impede comer e beber, a recomendação é procurar atendimento mesmo sem sinal de gravidade.',
          'Também vale investigar quem tem dor de garganta várias vezes ao ano, porque a repetição pode ter outra causa por trás, como o refluxo gastroesofágico.',
        ],
        cta: {
          label: 'Veja a página sobre faringite e amigdalite',
          href: '/doencas/faringite-e-amigdalite/',
        },
      },
    ],
    diseaseSlugs: ['faringite-e-amigdalite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'faringite-e-amigdalite-como-se-transmite',
      'faringite-e-amigdalite-como-e-diagnosticada',
      'faringite-e-amigdalite-tratamento-e-cuidados',
      'faringite-e-amigdalite-prevencao',
    ],
    references: [
      {
        label: 'Amidalite ou amigdalite',
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'faringite-e-amigdalite-como-se-transmite',
    slug: 'faringite-e-amigdalite-como-se-transmite',
    title: 'Faringite e amigdalite: como se transmite?',
    excerpt:
      'A forma aguda passa de pessoa para pessoa por gotículas e por objetos compartilhados. Entenda como a infecção circula e o que reduz o risco dentro de casa.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'pelo-ar',
        heading: 'Pelo ar, em gotículas',
        paragraphs: [
          'Ao tossir, espirrar ou falar, a pessoa infectada lança pequenas gotículas com vírus ou bactérias. Quem está perto respira essas gotículas e pode adoecer.',
        ],
      },
      {
        id: 'maos-e-objetos',
        heading: 'Pelas mãos e por objetos compartilhados',
        paragraphs: [
          'As mãos levam os germes da garganta para copos, talheres, garrafas e escovas de dente. Ao compartilhar esses objetos, a infecção encontra outra pessoa.',
          'Levar a mão contaminada à boca, ao nariz ou aos olhos também é suficiente para o germe entrar no organismo.',
        ],
      },
      {
        id: 'ambientes-fechados',
        heading: 'Ambientes fechados favorecem',
        paragraphs: [
          'Em locais fechados e aglomerados, as gotículas ficam mais tempo no ar e a distância entre as pessoas diminui. É por isso que as infecções de garganta circulam mais no inverno, quando todos ficam em ambientes fechados.',
          'Escolas e creches reúnem muitas crianças próximas, e a transmissão cresce nesses espaços.',
        ],
      },
      {
        id: 'nao-e-contagioso',
        heading: 'O que não é contagioso',
        paragraphs: [
          'A amigdalite de repetição, que volta várias vezes ao ano, costuma ter outras causas, como o refluxo gastroesofágico, e não passa de uma pessoa para outra.',
          'A dor de garganta também pode vir do ar seco, da fumaça e de outros irritantes, e nesse caso não há infecção para transmitir.',
        ],
      },
      {
        id: 'reduzir-em-casa',
        heading: 'Como reduzir a transmissão em casa',
        bullets: [
          'Lavar as mãos com frequência',
          'Não compartilhar copos, talheres e escovas de dente',
          'Cobrir a boca com o braço ao tossir e espirrar',
          'Ventilar os ambientes e evitar aglomerações fechadas',
          'Evitar beijos na boca durante o resfriado',
        ],
        cta: {
          label: 'Veja a página sobre faringite e amigdalite',
          href: '/doencas/faringite-e-amigdalite/',
        },
      },
    ],
    diseaseSlugs: ['faringite-e-amigdalite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'faringite-e-amigdalite-sinais-de-alerta',
      'faringite-e-amigdalite-como-e-diagnosticada',
      'faringite-e-amigdalite-tratamento-e-cuidados',
      'faringite-e-amigdalite-prevencao',
    ],
    references: [
      {
        label: 'Amidalite ou amigdalite',
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'faringite-e-amigdalite-como-e-diagnosticada',
    slug: 'faringite-e-amigdalite-como-e-diagnosticada',
    metaTitle: 'Faringite e amigdalite: diagnóstico',
    title: 'Faringite e amigdalite: como o profissional identifica a causa?',
    excerpt:
      'Vírus e bactérias causam sintomas parecidos na garganta, e a diferença não dá para ver em casa. Veja como o profissional chega ao diagnóstico.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'consulta',
        heading: 'O exame na consulta',
        paragraphs: [
          'O diagnóstico começa pela conversa e pelo exame da garganta. Com um abaixador de língua, o profissional observa a cor das amígdalas, a presença de placas de pus e o tamanho dos gânglios do pescoço.',
          'Febre alta, dor forte ao engolir e placas de pus aumentam a suspeita de bactéria. Tosse e corrimento nasal apontam mais para vírus.',
        ],
      },
      {
        id: 'exames',
        heading: 'Quando um exame confirma a bactéria',
        paragraphs: [
          'Como os sintomas se sobrepõem, o profissional pode pedir um exame da secreção da garganta, a cultura ou o teste rápido, para saber se o estreptococo está presente antes de indicar antibiótico.',
          'Esse exame ajuda a evitar antibiótico desnecessário, que não age sobre vírus e ainda fortalece as bactérias resistentes.',
        ],
      },
      {
        id: 'nao-da-em-casa',
        heading: 'Por que não dá para decidir em casa',
        paragraphs: [
          'Olhar a garganta no espelho não permite diferenciar vírus de bactéria, e placas esbranquiçadas podem aparecer nas duas situações. Quem define a causa e a necessidade de antibiótico é a avaliação profissional.',
        ],
      },
      {
        id: 'outras-causas',
        heading: 'Outras causas de dor de garganta',
        paragraphs: [
          'Nem toda dor de garganta vem de infecção. Ar seco, fumaça, refluxo gastroesofágico e uso intenso da voz também irritam a garganta e podem causar dor, sem agente infeccioso envolvido.',
        ],
        cta: {
          label: 'Veja a página sobre faringite e amigdalite',
          href: '/doencas/faringite-e-amigdalite/',
        },
      },
    ],
    diseaseSlugs: ['faringite-e-amigdalite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'faringite-e-amigdalite-sinais-de-alerta',
      'faringite-e-amigdalite-como-se-transmite',
      'faringite-e-amigdalite-tratamento-e-cuidados',
      'faringite-e-amigdalite-prevencao',
    ],
    references: [
      {
        label: 'Amidalite ou amigdalite',
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
      {
        label: 'Rheumatic heart disease: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/rheumatic-heart-disease',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'faringite-e-amigdalite-tratamento-e-cuidados',
    slug: 'faringite-e-amigdalite-tratamento-e-cuidados',
    title: 'Dor de garganta: tratamento e cuidados em casa',
    excerpt:
      'A maioria dos casos melhora com repouso, líquidos e analgésico. O antibiótico só entra quando a causa é bacteriana, e precisa ser tomado até o fim.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'cuidados-virais',
        heading: 'Cuidados na infecção viral',
        paragraphs: [
          'Quando a causa é viral, o corpo resolve a infecção sozinho. O tratamento serve para aliviar os sintomas e manter a pessoa confortável e hidratada.',
        ],
        bullets: [
          'Beber líquidos ao longo do dia',
          'Preferir alimentos macios e mornos, mais fáceis de engolir',
          'Usar analgésico ou antitérmico conforme a orientação do serviço de saúde',
          'Descansar e dormir bem',
          'Umidificar o ambiente quando o ar estiver muito seco',
        ],
      },
      {
        id: 'antibiotico',
        heading: 'Antibiótico na infecção bacteriana',
        paragraphs: [
          'Na amigdalite bacteriana, o antibiótico é indicado por um profissional e deve ser tomado até a última dose, mesmo depois de a dor passar.',
          'Parar antes do fim pode deixar bactérias vivas no organismo e permitir complicações, como a febre reumática, que atinge as articulações e pode lesionar o coração, e a inflamação dos rins.',
        ],
      },
      {
        id: 'nao-ajuda',
        heading: 'O que não ajuda',
        paragraphs: [
          'Antibiótico por conta própria na dor de garganta viral não acelera a melhora, porque não age sobre vírus, causa efeitos colaterais e aumenta a resistência das bactérias.',
          'Pastilhas e sprays de garganta aliviam a dor por pouco tempo e não tratam a causa.',
        ],
      },
      {
        id: 'reavaliacao',
        heading: 'Quando voltar para reavaliação',
        paragraphs: [
          'Se a dor não melhorar em poucos dias, piorar ou vier com dificuldade para engolir, volte ao serviço de saúde para reavaliação.',
          'Dificuldade para respirar é emergência e pede ajuda imediata: procure atendimento de emergência.',
        ],
        cta: {
          label: 'Veja a página sobre faringite e amigdalite',
          href: '/doencas/faringite-e-amigdalite/',
        },
      },
    ],
    diseaseSlugs: ['faringite-e-amigdalite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'faringite-e-amigdalite-sinais-de-alerta',
      'faringite-e-amigdalite-como-se-transmite',
      'faringite-e-amigdalite-como-e-diagnosticada',
      'faringite-e-amigdalite-prevencao',
    ],
    references: [
      {
        label: 'Amidalite ou amigdalite',
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
      {
        label: 'Febre reumática',
        url: 'https://bvsms.saude.gov.br/febre-reumatica/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
      {
        label: 'Antimicrobial resistance: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'faringite-e-amigdalite-prevencao',
    slug: 'faringite-e-amigdalite-prevencao',
    title: 'Como prevenir faringite e amigdalite?',
    excerpt:
      'Não existe vacina contra a dor de garganta comum, mas alguns hábitos reduzem a circulação dos germes em casa, na escola e no trabalho.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'higiene',
        heading: 'Higiene das mãos e dos objetos',
        paragraphs: [
          'A maior parte dos germes da garganta chega às mãos e aos objetos de uso pessoal antes de chegar à boca de outra pessoa.',
        ],
        bullets: [
          'Lavar as mãos com água e sabão, principalmente depois de tossir, espirrar ou tocar objetos de uso coletivo',
          'Não compartilhar copos, talheres, garrafas e escovas de dente',
          'Evitar levar as mãos à boca, ao nariz e aos olhos',
        ],
      },
      {
        id: 'ambiente',
        heading: 'Ambientes e hábitos',
        paragraphs: [
          'Ambientes ventilados e menos aglomerados reduzem a chance de contato com as gotículas de alguém infectado.',
          'O cigarro, ativo ou passivo, irrita a garganta e aumenta a chance de infecções das amígdalas, por isso ficar longe da fumaça também faz parte da prevenção.',
        ],
        bullets: [
          'Abrir janelas e manter o ar circulando',
          'Evitar permanecer em locais fechados e cheios durante surtos',
          'Não fumar e ficar longe do cigarro',
          'Umidificar o ar quando ele estiver muito seco',
        ],
      },
      {
        id: 'crises-de-repeticao',
        heading: 'Quem tem crises de repetição',
        paragraphs: [
          'Em quem apresenta amigdalite várias vezes ao ano, vale investigar fatores que mantêm a inflamação, como o refluxo gastroesofágico e a exposição constante à fumaça.',
          'Tratar resfriados e quadros alérgicos, como a rinite, ajuda a reduzir as idas ao serviço de saúde por dor de garganta.',
        ],
      },
      {
        id: 'o-que-nao-previne',
        heading: 'O que não previne',
        paragraphs: [
          'Gargarejo com sal, vitamina C em dose alta e remédios caseiros não impedem a infecção. Ar frio e sorvete também não causam faringite, porque a causa são vírus e bactérias.',
          'Higiene das mãos, ventilação e manter distância de quem está doente são as medidas com melhor resultado.',
        ],
        cta: {
          label: 'Veja a página sobre faringite e amigdalite',
          href: '/doencas/faringite-e-amigdalite/',
        },
      },
    ],
    diseaseSlugs: ['faringite-e-amigdalite'],
    topicSlugs: ['prevencao'],
    relatedArticleSlugs: [
      'faringite-e-amigdalite-sinais-de-alerta',
      'faringite-e-amigdalite-como-se-transmite',
      'faringite-e-amigdalite-como-e-diagnosticada',
      'faringite-e-amigdalite-tratamento-e-cuidados',
    ],
    references: [
      {
        label: 'Amidalite ou amigdalite',
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-16',
    updatedAt: '2026-10-16',
    isPlaceholder: true,
  },
  {
    id: 'gastroenterite-sintomas',
    slug: 'gastroenterite-sintomas',
    title: 'Gastroenterite: sintomas, sinais e como reconhecer',
    excerpt:
      'Diarreia, vômitos, náusea e cólica costumam aparecer de repente. Saiba quais são os sintomas mais comuns, o que é esperado e o que indica que a perda de líquidos passou do limite.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'sintomas-principais',
        heading: 'Quais sintomas costumam aparecer',
        paragraphs: [
          'A gastroenterite aguda começa de repente e tem na diarreia o seu sintoma mais característico. O Ministério da Saúde considera doença diarreica aguda quando ocorrem três ou mais evacuações de fezes líquidas ou amolecidas em 24 horas.',
          'Junto com a diarreia costumam vir náusea e vômito, cólicas e dor abdominal. A febre pode ou não aparecer, e as fezes podem trazer muco ou sangue quando a causa é bacteriana ou parasitária.',
        ],
        bullets: [
          'Diarreia, com fezes líquidas ou amolecidas',
          'Náusea e vômito',
          'Cólicas e dor abdominal',
          'Febre, que nem sempre está presente',
          'Sangue ou muco nas fezes, em alguns casos',
        ],
      },
      {
        id: 'como-o-quadro-comeca',
        heading: 'Como o quadro costuma começar',
        paragraphs: [
          'Na maioria das vezes os sintomas digestivos vêm primeiro e se instalam ao longo do dia, sem um aviso claro. A pessoa passa a ir ao banheiro com mais frequência e sente o corpo mais cansado do que o habitual.',
          'Nem todo episódio é igual. A forma mais comum é leve, com diarreia e mal-estar que cedem em poucos dias. Quando os vômitos são repetidos ou a diarreia piora em vez de melhorar, o quadro merece mais atenção.',
        ],
      },
      {
        id: 'sinais-gerais',
        heading: 'Sinais gerais que acompanham o quadro',
        paragraphs: [
          'Além dos sintomas digestivos, a gastroenterite costuma vir com sinais gerais, como febre, dor de cabeça, dores no corpo e sensação de mal-estar.',
          'Esses sinais fazem parte da resposta do organismo à infecção e tendem a ceder junto com a diarreia. O que muda o rumo do episódio não é a febre em si, e sim a quantidade de água e sais que a pessoa perde.',
        ],
      },
      {
        id: 'sinais-de-desidratacao',
        heading: 'Sinais de desidratação',
        paragraphs: [
          'Quando a perda de líquidos é maior do que a reposição, aparecem os sinais de desidratação. Eles são o que define a urgência do atendimento.',
          'O Ministério da Saúde orienta procurar a unidade de saúde mais próxima quando dois ou mais destes sinais estão presentes.',
        ],
        bullets: [
          'Olhos fundos',
          'Ausência de lágrimas quando a criança chora',
          'Boca e língua secas',
          'Muita sede, com vontade de beber rápido',
          'Diminuição da quantidade de urina',
          'Afundamento da moleira em bebês',
        ],
      },
      {
        id: 'o-que-foge-do-esperado',
        heading: 'O que foge do esperado',
        paragraphs: [
          'A maioria dos episódios melhora em poucos dias sem tratamento específico. Alguns sinais, porém, não são esperados e pedem avaliação: sangue ou muco nas fezes, diarreia que piora em vez de melhorar e vômitos repetidos que impedem de reter líquidos.',
          'A diarreia que passa de 14 dias deixa de ser aguda e passa a ser classificada como persistente, o que exige investigação. Quando não há melhora em dois dias, o Ministério da Saúde também recomenda voltar ao serviço de saúde.',
        ],
      },
      {
        id: 'nem-toda-diarreia-e-gastroenterite',
        heading: 'Nem toda diarreia é gastroenterite',
        paragraphs: [
          'A diarreia também aparece em quadros sem infecção. Medicamentos como antibióticos e laxantes, intolerância à lactose, doença celíaca, síndrome do intestino irritável e doenças inflamatórias intestinais podem causar diarreia sem germe a tratar.',
          'Quando a diarreia se arrasta, vem com perda de peso, sangue nas fezes ou mudança do hábito intestinal, o profissional investiga outras causas. Por isso, quem tem episódios de repetição deve avaliar com um profissional em vez de tratar por conta própria.',
        ],
        cta: {
          label: 'Veja a página sobre gastroenterite',
          href: '/doencas/gastroenterite/',
        },
      },
    ],
    diseaseSlugs: ['gastroenterite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'gastroenterite-pode-ser-grave',
      'gastroenterite-remedios',
      'gastroenterite-alimentacao',
      'gastroenterite-duvidas-frequentes',
    ],
    references: [
      {
        label: 'Doenças diarreicas agudas (DDA)',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Diarrhoeal disease: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Diarreia e desidratação',
        url: 'https://bvsms.saude.gov.br/diarreia-e-desidratacao/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'gastroenterite-duvidas-frequentes',
    slug: 'gastroenterite-duvidas-frequentes',
    title: 'Gastroenterite: dúvidas frequentes sobre diarreia e vômito',
    excerpt:
      'É contagiosa? Quanto tempo dura? Criança pode comer? Quando entra o antibiótico? Respostas diretas para as perguntas mais comuns sobre gastroenterite.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'e-contagiosa',
        heading: 'A gastroenterite é contagiosa?',
        paragraphs: [
          'Sim. A transmissão é fecal-oral: os microrganismos saem pelas fezes e entram pela boca, por meio de água e alimentos contaminados, de mãos que não foram lavadas e do contato direto com uma pessoa doente.',
          'Por isso, lavar as mãos com sabão e tratar a água de consumo são as medidas que mais reduzem o risco dentro de casa. O norovírus, em especial, costuma causar surtos em ambientes fechados.',
        ],
      },
      {
        id: 'quanto-tempo-dura',
        heading: 'Quanto tempo dura?',
        paragraphs: [
          'Na maioria dos casos, alguns dias. A doença é autolimitada e costuma durar até 14 dias. Quando a diarreia passa desse período, ela é classificada como persistente e precisa de investigação.',
          'O prazo que indica voltar ao serviço de saúde é de dois dias sem melhora ou quando a diarreia piora, mesmo sem outro sinal de gravidade.',
        ],
      },
      {
        id: 'crianca-deve-parar-de-comer',
        heading: 'Criança com diarreia deve parar de comer?',
        paragraphs: [
          'Não. Suspender a alimentação piora o quadro e atrapalha a recuperação. A orientação é manter a alimentação habitual e a amamentação, oferecendo o soro de reidratação oral à parte, em goles pequenos e frequentes.',
          'Em bebês, a amamentação deve continuar durante todo o episódio. Preparações leves, em porções pequenas e mais vezes ao dia, são mais bem toleradas. Veja mais em [o que comer durante a gastroenterite](/artigos/gastroenterite-alimentacao/).',
        ],
      },
      {
        id: 'antibiotico-ajuda',
        heading: 'Antibiótico ajuda na diarreia?',
        paragraphs: [
          'Na maioria dos casos, não. A gastroenterite comum é viral ou se resolve sozinha, e o antibiótico só se justifica quando o profissional identifica disenteria, com sangue ou muco nas fezes, ou cólera, sempre com acompanhamento médico.',
          'Tomar antibiótico por conta própria não encurta a diarreia e ainda favorece a resistência dos microrganismos aos medicamentos.',
        ],
      },
      {
        id: 'posso-tomar-remedio-para-parar',
        heading: 'Posso tomar remédio para parar a diarreia?',
        paragraphs: [
          'Não por conta própria, sobretudo em crianças. Medicamentos que paralisam o intestino não tratam a causa, não repõem a água e os sais perdidos e podem esconder sinais de gravidade.',
          'O que de fato funciona é a reposição de líquidos desde o primeiro episódio. Entenda o motivo em [por que não parar a diarreia com remédio](/artigos/gastroenterite-remedios/).',
        ],
      },
      {
        id: 'quando-procurar-atendimento',
        heading: 'Quando procurar atendimento?',
        paragraphs: [
          'Volte ao serviço de saúde se não houver melhora em dois dias ou se aparecer sangue ou muco nas fezes, vômitos repetidos, muita sede, diminuição da urina ou sonolência excessiva.',
          'O atendimento pode começar na unidade básica de saúde mais próxima. Em quadros graves, com desidratação intensa, procure uma unidade de pronto atendimento ou a emergência de um hospital.',
        ],
        cta: {
          label: 'Veja a página sobre gastroenterite',
          href: '/doencas/gastroenterite/',
        },
      },
    ],
    diseaseSlugs: ['gastroenterite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'gastroenterite-sintomas',
      'gastroenterite-remedios',
      'gastroenterite-alimentacao',
      'gastroenterite-pode-ser-grave',
    ],
    references: [
      {
        label: 'Doenças diarreicas agudas (DDA)',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Diarrhoeal disease: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'SAMU 192',
        url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'gastroenterite-remedios',
    slug: 'gastroenterite-remedios',
    title: 'Gastroenterite: por que não parar a diarreia com remédio',
    excerpt:
      'Remédio para parar a diarreia não trata a causa e pode esconder sinais de gravidade. Entenda o que realmente funciona e quando a medicação é indicada por um profissional.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-evitar-antidiarreico',
        heading: 'Por que não usar remédio para parar a diarreia',
        paragraphs: [
          'Medicamentos que interrompem a diarreia agem sobre o sintoma, não sobre a causa. A gastroenterite é, na maioria das vezes, viral e se resolve sozinha, e o que decide o desfecho é repor a água e os sais perdidos, e não bloquear as evacuações.',
          'Além de não tratar a infecção, esses remédios podem mascarar sinais que indicam gravidade, como a piora da diarreia ou a presença de sangue nas fezes. Por isso, não devem ser usados por conta própria, sobretudo em crianças.',
        ],
      },
      {
        id: 'o-que-realmente-funciona',
        heading: 'O que realmente funciona',
        paragraphs: [
          'A base do cuidado é o soro de reidratação oral, oferecido em goles pequenos e frequentes desde o primeiro episódio de diarreia. Ele repõe água e eletrólitos na proporção certa, o que evita a desidratação.',
          'Em crianças, o Ministério da Saúde recomenda ainda o zinco, uma vez ao dia por 10 a 14 dias, o que encurta o episódio. Manter a alimentação e a amamentação também ajuda na recuperação.',
        ],
      },
      {
        id: 'remedio-para-vomito',
        heading: 'E remédio para vômito?',
        paragraphs: [
          'Vômitos repetidos que impedem de reter líquidos são um sinal de alerta e pedem avaliação, não automedicação. Esse tipo de medicamento também não substitui a reposição de líquidos.',
          'Quando a pessoa não consegue beber, a reidratação pode ser feita na unidade de saúde e, nos casos graves, por via intravenosa, conforme o grau de desidratação avaliado pelo profissional.',
        ],
      },
      {
        id: 'antibiotico',
        heading: 'Quando o antibiótico tem lugar',
        paragraphs: [
          'O antibiótico não serve para a maioria das diarreias. Segundo o Ministério da Saúde, ele deve ficar reservado aos casos com sangue ou muco nas fezes associados a comprometimento do estado geral, ou à cólera com desidratação grave, sempre com acompanhamento médico.',
          'Em quadros suspeitos, a coleta de fezes é feita antes do uso de antibióticos, para não prejudicar o resultado dos exames.',
        ],
      },
      {
        id: 'automedicacao-e-resistencia',
        heading: 'O risco da automedicação',
        paragraphs: [
          'Usar antibiótico sem prescrição não resolve a diarreia e ainda alimenta um problema maior: a resistência dos microrganismos aos antibióticos. A Organização Mundial da Saúde trata a resistência antimicrobiana como uma das principais ameaças à saúde pública.',
          'O mesmo vale para remédios para parar a diarreia comprados por conta própria. Nada substitui a avaliação de quem consegue distinguir uma diarreia simples de um quadro que exige tratamento específico.',
        ],
      },
      {
        id: 'quando-o-profissional-indica',
        heading: 'Quando é o profissional quem indica',
        paragraphs: [
          'A decisão sobre qualquer medicação cabe ao profissional de saúde, após avaliar o estado de hidratação e identificar, quando possível, o agente causador. O tratamento se organiza em planos de reposição, que vão do cuidado em casa à hidratação intravenosa.',
          'Por isso, o caminho mais seguro diante da diarreia é repor líquidos e procurar atendimento quando surgirem sinais de alerta.',
        ],
        cta: {
          label: 'Veja a página sobre gastroenterite',
          href: '/doencas/gastroenterite/',
        },
      },
    ],
    diseaseSlugs: ['gastroenterite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'gastroenterite-sintomas',
      'gastroenterite-alimentacao',
      'gastroenterite-pode-ser-grave',
      'gastroenterite-duvidas-frequentes',
    ],
    references: [
      {
        label: 'Doenças diarreicas agudas (DDA)',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Antimicrobial resistance: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Diarrhoeal disease: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'gastroenterite-alimentacao',
    slug: 'gastroenterite-alimentacao',
    title: 'Gastroenterite: o que comer e como se hidratar em casa',
    excerpt:
      'Não é preciso ficar sem comer, mas a hidratação vem primeiro. Veja o que ajuda na recuperação, como preparar o soro caseiro e o que evitar durante a diarreia.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'hidratacao-primeiro',
        heading: 'A hidratação vem antes da comida',
        paragraphs: [
          'Na diarreia, o que mais pesa não é o que se come, e sim o quanto de líquido se repõe. O primeiro passo é aumentar a ingestão de água e de soro de reidratação oral, em goles pequenos ao longo do dia.',
          'O Ministério da Saúde orienta ingerir de 50 a 100 ml de líquido após cada evacuação diarreica, além do soro oferecido continuamente. Assim se evita que a perda de água evolua para desidratação.',
        ],
      },
      {
        id: 'soro-caseiro',
        heading: 'Como preparar o soro caseiro',
        paragraphs: [
          'Quando não há soro de reidratação oral à mão, o Ministério da Saúde ensina a preparar o soro caseiro: em um litro de água mineral, filtrada ou fervida e já fria, misturar uma colher pequena, de café, de sal e uma colher grande, de sopa, de açúcar.',
          'Depois de bem misturado, o soro deve ser oferecido ao longo do dia, em pequenas colheradas. Seguir a medida indicada é o que mantém a proporção adequada de sal e de açúcar.',
        ],
      },
      {
        id: 'mantenha-a-alimentacao',
        heading: 'Não é preciso parar de comer',
        paragraphs: [
          'Suspender a alimentação não ajuda e ainda atrapalha a recuperação. A orientação é manter a alimentação habitual, incluindo o leite materno, e apenas ajustar a forma como ela é oferecida.',
          'Preparações leves e de fácil digestão, em porções pequenas e mais vezes ao dia, são mais bem aceitas durante o episódio.',
        ],
        bullets: [
          'Prefira preparações leves, como arroz, caldo, sopa e frutas',
          'Ofereça em porções pequenas e mais vezes ao dia',
          'Mantenha a amamentação nos bebês',
          'Volte à alimentação habitual aos poucos, conforme a diarreia cede',
        ],
      },
      {
        id: 'o-que-evitar',
        heading: 'O que evitar durante a diarreia',
        paragraphs: [
          'Alguns itens pioram a diarreia e devem ficar de fora até a melhora. Segundo a Organização Mundial da Saúde, bebidas muito açucaradas aumentam a perda de líquidos e agravam o quadro.',
          'Também vale evitar alimentos crus ou malcozidos e leite não fervido ou não pasteurizado, que estão entre os que favorecem a infecção.',
        ],
        bullets: [
          'Refrigerantes e sucos muito açucarados',
          'Alimentos crus ou malcozidos, sobretudo carnes e pescados',
          'Leite in natura, sem ferver ou pasteurizar',
          'Bebidas alcoólicas',
        ],
      },
      {
        id: 'bebes-e-criancas',
        heading: 'Bebês e crianças',
        paragraphs: [
          'Nos bebês, a amamentação deve continuar durante o episódio, pois ajuda na resistência contra as diarreias. Quem usa fórmula pode receber, com orientação do profissional, uma versão com menos lactose durante a diarreia.',
          'Em crianças, o Ministério da Saúde recomenda o zinco, uma vez ao dia por 10 a 14 dias, o que encurta o episódio e reduz o risco de complicações.',
        ],
      },
      {
        id: 'quando-a-comida-nao-desce',
        heading: 'Quando a pessoa não consegue comer ou beber',
        paragraphs: [
          'Se a pessoa recusa alimentos, não consegue reter líquidos ou apresenta sinais de desidratação, o cuidado em casa não é suficiente. Nesses casos, é preciso procurar a unidade de saúde mais próxima.',
          'Vômitos repetidos, muita sede, diminuição da urina e sangue nas fezes são sinais que pedem atendimento, e não ajustes na dieta.',
        ],
        cta: {
          label: 'Veja a página sobre gastroenterite',
          href: '/doencas/gastroenterite/',
        },
      },
    ],
    diseaseSlugs: ['gastroenterite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'gastroenterite-sintomas',
      'gastroenterite-remedios',
      'gastroenterite-pode-ser-grave',
      'gastroenterite-duvidas-frequentes',
    ],
    references: [
      {
        label: 'Doenças diarreicas agudas (DDA)',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Diarreia e desidratação',
        url: 'https://bvsms.saude.gov.br/diarreia-e-desidratacao/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
      {
        label: 'Diarrhoeal disease: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Pocket book of hospital care for children (WHO)',
        url: 'https://cdn.who.int/media/docs/default-source/2021-dha-docs/pnadk428.pdf',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'gastroenterite-pode-ser-grave',
    slug: 'gastroenterite-pode-ser-grave',
    title: 'Gastroenterite pode ser grave? Quando o risco é real',
    excerpt:
      'A maioria dos episódios é leve, mas a desidratação pode levar a quadros graves. Saiba quem corre mais risco, quais sinais indicam emergência e quando o atendimento não pode esperar.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'quase-sempre-leve',
        heading: 'Na maioria das vezes, o quadro é leve',
        paragraphs: [
          'A gastroenterite aguda costuma ser autolimitada e se resolver em poucos dias. A maior parte dos episódios é viral e não exige tratamento específico, apenas reposição de líquidos.',
          'Isso não significa que possa ser ignorada. A mesma doença que passa em poucos dias em um adulto saudável pode desidratar rápido uma criança pequena ou uma pessoa idosa.',
        ],
      },
      {
        id: 'desidratacao-e-o-risco',
        heading: 'A desidratação é o verdadeiro risco',
        paragraphs: [
          'A principal complicação da gastroenterite é a desidratação. Segundo o Ministério da Saúde, quando tratada de forma incorreta ou não tratada, a doença diarreica pode levar à desidratação grave e ao distúrbio hidroeletrolítico, com risco de morte.',
          'Esse risco cresce quando há desnutrição ou imunidade reduzida. É por isso que a rapidez com que a hidratação é reposta faz tanta diferença no desfecho.',
        ],
      },
      {
        id: 'quem-corre-mais-risco',
        heading: 'Quem corre mais risco de desidratar',
        paragraphs: [
          'Crianças pequenas e pessoas idosas desidratam mais rápido e, segundo o Ministério da Saúde, devem procurar o serviço de saúde com urgência assim que adoecem.',
          'Também correm mais risco as pessoas desnutridas e as que têm a imunidade reduzida, como quem vive com HIV. Nesses grupos, o mesmo episódio pode evoluir para desidratação grave em poucas horas.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta',
        paragraphs: [
          'O Ministério da Saúde orienta voltar imediatamente ao serviço de saúde diante de qualquer um destes sinais, mesmo que a pessoa pareça bem.',
        ],
        bullets: [
          'Piora da diarreia',
          'Vômitos repetidos',
          'Muita sede',
          'Recusa de alimentos',
          'Sangue nas fezes',
          'Diminuição da urina',
          'Olhos fundos, boca seca e choro sem lágrimas',
          'Sonolência excessiva ou fraqueza intensa',
        ],
      },
      {
        id: 'desidratacao-grave-e-emergencia',
        heading: 'Desidratação grave é emergência',
        paragraphs: [
          'Segundo a Organização Mundial da Saúde, há desidratação grave quando a pessoa está sonolenta ou inconsciente, tem os olhos fundos, não consegue beber ou bebe mal e a pele, quando pinçada, demora dois segundos ou mais para voltar ao normal.',
          'Diante desses sinais, procure a emergência de um hospital ou uma unidade de pronto atendimento imediatamente. Em bebês e em pessoas idosas, a situação pode piorar em poucas horas.',
          'A ligação para o SAMU, no 192, é indicada em situações de risco imediato à vida. Vômitos e diarreia, por si sós, não são motivo para acionar o SAMU.',
        ],
      },
      {
        id: 'complicacoes',
        heading: 'Complicações e o que muda o desfecho',
        paragraphs: [
          'Além da desidratação, a perda de líquidos e sais pode alterar os eletrólitos, como sódio e potássio, o que agrava o quadro. Em episódios que se arrastam, a diarreia persistente leva à perda de peso e à desnutrição, sobretudo em crianças.',
          'A maior parte desses quadros pode ser evitada com reposição de líquidos desde o início e com atendimento nos primeiros sinais de alerta.',
        ],
        cta: {
          label: 'Veja a página sobre gastroenterite',
          href: '/doencas/gastroenterite/',
        },
      },
    ],
    diseaseSlugs: ['gastroenterite'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'gastroenterite-sintomas',
      'gastroenterite-remedios',
      'gastroenterite-alimentacao',
      'gastroenterite-duvidas-frequentes',
    ],
    references: [
      {
        label: 'Doenças diarreicas agudas (DDA)',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Diarrhoeal disease: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'SAMU 192',
        url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Diarreia e desidratação',
        url: 'https://bvsms.saude.gov.br/diarreia-e-desidratacao/',
        publisher: 'Ministério da Saúde (Brasil) — Biblioteca Virtual em Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
];
