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
      'Febre alta de início súbito, dor de cabeça, dor atrás dos olhos e dores no corpo. Reconhecer os primeiros sinais ajuda a procurar atendimento no tempo certo.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'primeiros-sinais',
        heading: 'O que aparece primeiro',
        paragraphs: [
          'A dengue costuma começar de forma abrupta. Em poucas horas, a pessoa passa de um estado normal para febre alta, em geral entre 39 °C e 40 °C, acompanhada de dor de cabeça intensa, dor atrás dos olhos que piora ao mover o olhar e dores nos músculos e nas articulações. Também são comuns náusea, falta de apetite e uma sensação de cansaço profundo, e muitas pessoas notam vermelhidão no rosto e na garganta logo nos primeiros dias, o que costuma ser confundido com outras doenças.',
          'Essa combinação de febre alta com dor no corpo é o que levanta a suspeita. Ela não é exclusiva da dengue, mas, em uma área com transmissão, já justifica procurar uma unidade de saúde para avaliação, mesmo sem manchas na pele e sem outros sinais. Vale lembrar que boa parte das infecções não causa sintoma nenhum ou causa um quadro leve, e que a febre pode ser baixa ou passar despercebida em algumas pessoas.',
          'As manchas vermelhas costumam aparecer entre o terceiro e o sexto dia, muitas vezes quando a febre já começou a ceder. Elas podem coçar e, ao desaparecer, deixar a pele descamando. Nem todo mundo tem manchas, e a ausência delas não afasta a dengue. Algumas pessoas apresentam ainda sangramentos leves, como a gengiva sangrando ou pequenas manchas roxas na pele, e podem ter gânglios inchados, com aumento do fígado em casos isolados.',
        ],
      },
      {
        id: 'quanto-tempo-depois-da-picada',
        heading: 'Quanto tempo depois da picada os sintomas aparecem?',
        paragraphs: [
          'O intervalo entre a picada do mosquito infectado e o aparecimento dos sintomas costuma ser de quatro a dez dias. Nesse período a pessoa não sente nada, mas o vírus já está se multiplicando no organismo e circula no sangue. Isso significa que, mesmo sem sintomas, ela pode infectar outros mosquitos que a piquem.',
          'Os sintomas duram em geral de dois a sete dias. A febre pode ceder e voltar antes de ir embora de vez, e é justamente na queda da temperatura que a atenção precisa aumentar. Quem mora ou viajou para uma área com transmissão nos dias anteriores deve mencionar isso no atendimento.',
          'Conhecer essas datas ajuda a organizar a busca por ajuda. Como o quadro começa alguns dias depois da picada e dura menos de uma semana na fase aguda, cumprir o retorno marcado e observar a queda da febre são o que garante segurança nesse intervalo. Se os sintomas se arrastarem além do previsto ou piorarem, o caso precisa de reavaliação.',
        ],
      },
      {
        id: 'fases',
        heading: 'Quais são as fases da dengue?',
        paragraphs: [
          'A doença costuma seguir três fases. A primeira é a febril, que dura de dois a sete dias e concentra febre alta, dor de cabeça, dor atrás dos olhos, dores no corpo, náusea e, em muitos casos, manchas vermelhas na pele. É o período em que há mais vírus no sangue e, por isso, o de maior risco de transmissão.',
          'A segunda é a crítica, que começa quando a febre cede, em geral entre o terceiro e o sétimo dia, e dura de 24 a 48 horas. É o momento em que pode ocorrer extravasamento de plasma, com piora rápida, às vezes com a pessoa ainda parecendo bem. A terceira é a de recuperação: o organismo reabsorve o líquido que saiu dos vasos, o apetite volta, a urina retorna ao volume habitual e o cansaço diminui aos poucos.',
          'Vale lembrar que a maioria das infecções não passa por todas essas fases de forma perceptível. Muita gente tem um quadro leve, sem manchas e sem alterações importantes nos exames, e se recupera em casa, com hidratação e repouso. Ainda assim, conhecer as fases ajuda a entender por que a melhora da febre não é sinal de que o risco passou.',
        ],
      },
      {
        id: 'sinais-de-alarme',
        heading: 'Quais sinais indicam que a dengue está piorando?',
        paragraphs: [
          'Dor abdominal intensa e contínua, vômitos frequentes, sangramento de gengiva ou nariz, sonolência excessiva, agitação, tontura, dificuldade para respirar, pele fria e úmida e redução importante da urina são sinais de alerta. Eles podem aparecer com a febre já baixa ou até ausente, o que engana muita gente.',
          'Esses sinais apontam para extravasamento de plasma ou sangramento e não seguem uma ordem fixa: podem surgir juntos ou isolados. Basta um deles para justificar a avaliação no mesmo dia, mesmo que a pessoa esteja se sentindo bem.',
          'Diante de qualquer um deles, procure atendimento imediatamente. Não espere o retorno marcado nem tente resolver em casa: a diferença entre um caso comum e uma emergência costuma estar no tempo até a avaliação profissional.',
        ],
        cta: {
          label: 'Veja a lista completa de sinais de alerta',
          href: '/doencas/dengue/',
        },
      },
      {
        id: 'dengue-ou-outra-doenca',
        heading: 'Como diferenciar de chikungunya, zika e gripe?',
        paragraphs: [
          'A chikungunya também é transmitida pelo Aedes e começa de forma abrupta, mas a dor nas articulações costuma dominar o quadro, é intensa e pode durar semanas ou meses. Na dengue, a dor no corpo é marcante, porém raramente persiste por tanto tempo.',
          'Outras doenças também começam com febre e dores no corpo, como a febre do Oropouche, a covid-19, a influenza, a leptospirose, a malária, o sarampo, a rubéola e a febre amarela. Algumas delas exigem tratamento específico, e o histórico de viagens ajuda o profissional a escolher quais hipóteses investigar.',
          'A zika costuma ser mais leve, com febre baixa, manchas na pele, coceira e conjuntivite, e boa parte das infecções não causa sintoma. A gripe se distingue pelos sintomas respiratórios, como tosse, dor de garganta e coriza, que não são típicos da dengue. Ainda assim, nem o aspecto das manchas nem a intensidade da dor separam essas doenças sozinhas: só a avaliação profissional, com exames quando indicados, confirma o diagnóstico.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer ao suspeitar de dengue?',
        paragraphs: [
          'Beba líquidos ao longo do dia, em pequenas quantidades e com frequência, mesmo sem sede. Observe a cor da urina e quantas vezes você urina, porque urinar pouco e escuro mostra que a hidratação não está dando conta. Descanse, coma o que conseguir e deixe exercício intenso e bebida alcoólica para depois. Para febre e dor, o paracetamol é a opção mais usada, e a dose deve ser definida por um profissional de saúde.',
          'Enquanto houver suspeita, evite aspirina, ibuprofeno, diclofenaco e fórmulas para gripe que contenham essas substâncias, porque aumentam o risco de sangramento. Procure a UBS mais próxima para avaliação e volte na data indicada, mesmo que esteja se sentindo melhor.',
          'Se a febre passar e você continuar bem, mantenha a hidratação por mais alguns dias e retome as atividades aos poucos. Se aparecer qualquer sinal de alerta, volte antes da data marcada, sem esperar o retorno agendado.',
        ],
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
      'dengue-pode-matar',
      'como-prevenir-a-dengue',
    ],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'como-prevenir-a-dengue',
    slug: 'como-prevenir-a-dengue',
    title: 'Como prevenir a dengue?',
    excerpt:
      'Sem antiviral, a prevenção depende de reduzir o mosquito e evitar a picada. Veja o que funciona na rotina da casa e qual é o lugar da vacina.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'por-que-o-vetor-e-o-alvo',
        heading: 'Por que o controle do mosquito é o centro da prevenção',
        paragraphs: [
          'Não existe antiviral contra a dengue. Isso desloca toda a estratégia para antes da infecção: reduzir a população do Aedes aegypti e evitar que ele pique as pessoas. O Ministério da Saúde trata o controle do vetor como o principal método de prevenção, acima de qualquer medida isolada.',
          'O mosquito vive dentro ou ao redor das casas, tem hábitos diurnos e se reproduz em água limpa e parada. Isso significa que boa parte do trabalho acontece no quintal, na laje, no vaso da sala e em qualquer objeto esquecido que acumule chuva. Como ele pica de dia, proteger-se apenas à noite está longe de resolver o problema.',
          'Como o mosquito vive perto das pessoas e não costuma se afastar muito do local onde nasceu, o foco que alimenta os casos quase sempre está na própria casa ou no terreno vizinho. Isso explica por que a vistoria do quintal tem tanto peso na rotina de prevenção, e por que ela precisa ser repetida de forma contínua, não apenas quando os casos aumentam.',
        ],
      },
      {
        id: 'onde-o-mosquito-se-cria',
        heading: 'Onde o mosquito se cria',
        paragraphs: [
          'Prato de vaso, calha entupida, pneu velho, balde, garrafa, brinquedo, caixa d’água sem tampa, bebedouro de animal e ralo pouco usado são criadouros comuns. A fêmea deposita os ovos na parede interna do recipiente, acima da linha da água, e a larva nasce quando o nível sobe.',
          'Por isso a vistoria precisa alcançar locais que ninguém olha: atrás da máquina de lavar, na bandeja da geladeira, no reservatório do ar-condicionado, em imóveis fechados e em terrenos abandonados. Um único recipiente esquecido pode manter mosquitos por semanas, e não é raro que a casa de alguém com dengue tenha criadouros no próprio quintal.',
          'A recomendação da Organização Mundial da Saúde é esvaziar, cobrir e limpar os reservatórios de água uma vez por semana. Uma rotina semanal interrompe o ciclo antes que novos mosquitos apareçam, e é mais eficaz do que agir apenas quando os casos aumentam. Quando as casas de uma mesma rua fazem isso na mesma semana, o efeito dura mais.',
        ],
      },
      {
        id: 'ovos-e-limpeza',
        heading: 'Por que só jogar a água fora não resolve',
        paragraphs: [
          'Os ovos do Aedes resistem meses em superfícies secas. Quando a água volta, eles eclodem. É por isso que virar o balde ou secar a poça resolve apenas parte do problema: a parede do recipiente continua com ovos viáveis.',
          'A recomendação prática é esfregar as paredes internas com escova ou esponja, lavar com sabão e deixar secar ao sol. Caixas d’água e tonéis devem ficar tampados o tempo todo, e a limpeza precisa ser repetida, de preferência uma vez por semana.',
          'Vale escolher um dia fixo na semana para essa vistoria, porque a tarefa esquecida é a que falha. Em períodos de chuva, recipientes que ficam a céu aberto acumulam água em poucos dias e merecem uma olhada a mais.',
        ],
      },
      {
        id: 'protecao-contra-picada',
        heading: 'Como reduzir o risco de picada',
        paragraphs: [
          'O Aedes aegypti pica principalmente no começo da manhã e no fim da tarde. Nesses horários, roupas que cobrem braços e pernas ajudam, assim como repelentes com DEET, icaridina ou IR3535, aplicados conforme o rótulo e reaplicados no intervalo indicado.',
          'Telas em portas e janelas e mosquiteiro, sobretudo para bebês e pessoas acamadas, completam a proteção. Gestantes podem usar repelente seguindo a orientação do fabricante. Quem está com dengue deve redobrar esse cuidado, porque evitar novas picadas interrompe a circulação do vírus.',
          'Como o mosquito pica de dia, dentro de casa a proteção também importa: o inseto entra nos ambientes e prefere as horas de luz. Repelente, roupa adequada e telas funcionam juntos, e nenhum deles substitui a eliminação dos criadouros.',
        ],
      },
      {
        id: 'vacina',
        heading: 'Qual é o lugar da vacina',
        paragraphs: [
          'A vacina contra a dengue foi incorporada ao SUS em dezembro de 2023. A estratégia prioriza crianças e adolescentes de 10 a 14 anos em municípios selecionados por critérios de transmissão e porte populacional, com duas doses e intervalo de três meses entre elas.',
          'O público e a lista de municípios são revistos a cada ano, então vale confirmar na UBS da sua região se a vacina está disponível para você ou para seus filhos. De todo modo, a vacina não substitui o controle do mosquito: mesmo quem foi vacinado precisa continuar eliminando criadouros e evitando picadas.',
          'A vacina é uma ferramenta a mais, não a única. Em municípios onde ela não está disponível, o controle do mosquito continua sendo o que reduz a transmissão, e as mesmas medidas valem para quem já se vacinou. Como a proteção não é imediata nem completa, ninguém deve relaxar as outras ações por causa dela.',
        ],
      },
      {
        id: 'o-que-nao-funciona',
        heading: 'O que não substitui a prevenção',
        paragraphs: [
          'Vitaminas, chás, sucos e soluções caseiras não previnem a infecção. Também não há comprovação de que aparelhos de ultrassom ou plantas específicas resolvam o problema de um quintal com criadouros ativos.',
          'A prevenção funciona melhor quando é contínua e coletiva. Uma casa limpa em uma rua com vários focos continua exposta, e é por isso que a participação da vizinhança e o trabalho dos agentes de saúde fazem diferença. Fora da temporada de surtos é o melhor momento para manter essa rotina.',
          'Desconfie de soluções que prometem acabar com o mosquito sem eliminar água parada. Produtos e aparelhos podem complementar o cuidado, mas não substituem a vistoria dos recipientes. Na dúvida, a pergunta útil é simples: esse método elimina os focos de água onde as larvas nascem? Se a resposta for não, ele não resolve o principal.',
        ],
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: [
      'sintomas-iniciais-da-dengue',
      'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
      'dengue-segunda-infeccao',
    ],
    references: [
      {
        label: 'Dengue: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Vacinação contra a dengue: municípios contemplados',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue/vacinacao',
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
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
    slug: 'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
    title: 'Quando procurar atendimento médico em caso de suspeita de dengue?',
    metaTitle: 'Dengue: quando procurar atendimento',
    excerpt:
      'A maioria dos casos evolui bem com hidratação e repouso. Alguns sinais, porém, indicam risco de forma grave e exigem avaliação imediata.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'regra-geral',
        heading: 'A regra geral',
        paragraphs: [
          'Febre alta de início súbito acompanhada de dor de cabeça, dor atrás dos olhos, dores no corpo ou manchas na pele, em uma região com transmissão, é motivo para procurar uma unidade de saúde. O Ministério da Saúde orienta que febre entre 39 °C e 40 °C com pelo menos dois desses sintomas já justifica atendimento, mesmo sem manchas visíveis.',
          'Não é preciso esperar o quadro piorar para buscar ajuda. Na primeira consulta, o profissional avalia o risco naquele momento, orienta a hidratação e define se há necessidade de exames e de retorno em 24 ou 48 horas. É essa avaliação inicial que separa quem pode seguir em casa de quem precisa de observação mais próxima.',
          'Vale lembrar que a ausência de febre não descarta a dengue. Em algumas pessoas a temperatura é baixa ou passa despercebida, e o cansaço e as dores no corpo podem ser o único sinal. Quem mora ou viajou para uma área com transmissão e não se sente bem deve procurar avaliação mesmo sem febre medida, sobretudo se fizer parte de um dos grupos de maior risco.',
        ],
      },
      {
        id: 'sinais-de-alarme',
        heading: 'Sinais de alerta que exigem atendimento imediato',
        paragraphs: [
          'Alguns sinais indicam que a doença pode estar evoluindo para a forma grave. Eles costumam aparecer quando a febre começa a ceder, e não no pico dela, o que explica por que tanta gente os ignora pensando que está melhorando.',
          'Os sinais não seguem uma ordem fixa e podem aparecer juntos ou isolados. Um único item da lista já basta para justificar a avaliação, mesmo que a pessoa esteja se sentindo bem e já não tenha febre.',
          'Procure atendimento na hora, mesmo sem febre, se aparecer algum destes sinais:',
        ],
        bullets: [
          'Dor abdominal intensa e contínua',
          'Vômitos frequentes que impedem a hidratação',
          'Sangramento de gengiva, nariz ou nas fezes',
          'Vômito com sangue ou fezes muito escuras',
          'Sonolência excessiva, confusão ou agitação',
          'Tontura, desmaio ou queda de pressão',
          'Dificuldade para respirar ou respiração rápida',
          'Pele pálida, fria e úmida',
          'Urinar muito menos que o habitual',
          'Piora súbita depois que a febre baixa',
        ],
      },
      {
        id: 'por-que-a-febre-ceder-preocupa',
        heading: 'Por que a queda da febre preocupa',
        paragraphs: [
          'A fase crítica começa justamente quando a temperatura baixa, em geral entre o terceiro e o sétimo dia da doença, e dura de 24 a 48 horas. É nesse intervalo que pode ocorrer o extravasamento de plasma, com acúmulo de líquido e risco de choque.',
          'Nesse momento, o hematócrito pode subir e as plaquetas cair antes de qualquer sinal visível. Por isso, a melhora aparente não dispensa a reavaliação marcada: ela existe para acompanhar essa janela, comparando os exames com os da primeira consulta.',
          'A hidratação e o retorno na data combinada servem justamente para atravessar esse período com segurança. Quem sai da consulta com orientação de voltar em 24 ou 48 horas deve cumprir o prazo, mesmo que esteja sem febre. Se houver piora antes disso, não espere: volte ao serviço. Nessa fase, o hemograma pode mostrar alterações que o exame físico ainda não revela.',
        ],
      },
      {
        id: 'grupos-de-risco',
        heading: 'Quem precisa de atenção redobrada',
        paragraphs: [
          'Qualquer pessoa pode ter dengue grave, inclusive na primeira infecção. Alguns grupos, porém, têm risco maior de complicação e precisam de avaliação mais próxima desde o início.',
          'Idade e condições de saúde mudam a forma como o corpo responde à desidratação e ao extravasamento de líquido, e é por isso que esses grupos são avaliados com mais cuidado. Eles devem procurar atendimento ao primeiro sintoma, sem esperar:',
          'Para essas pessoas, a orientação é não aguardar sinais de alarme e não adiar o retorno marcado. O acompanhamento desde os primeiros dias é o que permite tratar a piora antes que ela se torne grave. Quem cuida de uma criança, de um idoso ou de alguém com doença crônica deve conhecer essa lista, porque muitas vezes é essa pessoa que percebe a mudança primeiro.',
        ],
        bullets: [
          'Bebês e crianças pequenas, sobretudo menores de 2 anos',
          'Pessoas com 65 anos ou mais',
          'Gestantes e mulheres no pós-parto',
          'Pessoas com diabetes, hipertensão, doença renal, cardíaca ou pulmonar',
          'Pessoas com obesidade ou com imunidade comprometida',
          'Quem já teve dengue por outro sorotipo',
        ],
        cta: {
          label: 'Saiba mais sobre hipertensão',
          href: '/doencas/hipertensao/',
        },
      },
      {
        id: 'onde-procurar',
        heading: 'Onde procurar atendimento',
        paragraphs: [
          'No Brasil, a porta de entrada é a UBS mais próxima, que avalia, hidrata e encaminha quando necessário. Casos com sinais de alerta podem ser atendidos em UPA ou pronto-socorro, que têm estrutura para hidratação venosa e observação.',
          'Em situações de emergência, como desmaio, sangramento intenso ou dificuldade para respirar, ligue para o SAMU no 192. Não espere o horário comercial e não dirija sozinho se estiver tonto ou muito fraco.',
          'Se você não sabe qual serviço procurar, comece pela UBS. A equipe orienta o fluxo da sua região e encaminha para a UPA quando necessário, o que evita deslocamentos desnecessários. Levar um documento e, se possível, a lista de medicamentos em uso agiliza o atendimento.',
        ],
      },
      {
        id: 'o-que-nao-fazer-enquanto-espera',
        heading: 'O que não fazer enquanto espera atendimento',
        paragraphs: [
          'Não use aspirina, ibuprofeno, diclofenaco ou fórmulas para gripe que contenham anti-inflamatórios, pelo risco de sangramento. Para febre e dor, o paracetamol é a opção mais usada, com dose definida por um profissional, e tomar mais de um remédio com a mesma substância não acelera a melhora.',
          'Mantenha a hidratação em pequenas quantidades e com frequência, evite exercício e álcool e não tome medicamento por conta própria para vomitar menos ou para dor intensa. Se os vômitos impedirem de beber líquidos, isso já é motivo para buscar atendimento.',
          'Leve a lista dos remédios que você usa, inclusive os de uso contínuo, para que a equipe avalie cada um durante o atendimento. Ao chegar, informe também se já teve dengue antes e se mora ou viajou para uma área com transmissão.',
        ],
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: [
      'sintomas-iniciais-da-dengue',
      'dengue-pode-matar',
      'como-prevenir-a-dengue',
    ],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'dengue-pode-matar',
    slug: 'dengue-pode-matar',
    title: 'Dengue pode matar? O que leva à forma grave',
    excerpt:
      'A maior parte dos casos evolui bem, mas uma minoria desenvolve choque, sangramento intenso ou falência de órgãos. Entenda o que muda na forma grave.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'quantos-casos-evoluem',
        heading: 'Quantos casos evoluem para a forma grave',
        paragraphs: [
          'A dengue é uma doença que assusta pelo nome, mas a maioria das pessoas se recupera. Boa parte das infecções não causa sintoma, e os casos com febre e dores costumam melhorar em uma a duas semanas com hidratação e acompanhamento.',
          'Uma minoria evolui para a forma grave. O Ministério da Saúde afirma que quase todos os óbitos por dengue podem ser evitados e que isso depende, na maior parte das vezes, da qualidade e da rapidez do atendimento. Ou seja, o desfecho está mais ligado ao tempo até o cuidado do que a uma característica inevitável da doença.',
          'A proporção de casos graves varia de temporada para temporada e depende do sorotipo em circulação, da imunidade da população e do acesso aos serviços de saúde. Por isso, mais útil do que tentar prever o risco individual é saber reconhecer os sinais de piora, porque é essa percepção que costuma levar a pessoa ao serviço no tempo certo.',
        ],
      },
      {
        id: 'o-que-muda-na-forma-grave',
        heading: 'O que muda na forma grave',
        paragraphs: [
          'Na dengue grave, o problema central é o extravasamento de plasma. O líquido sai dos vasos para o pulmão, o abdômen ou outros tecidos, o sangue fica concentrado e a circulação pode entrar em colapso, quadro chamado de choque.',
          'A forma grave também inclui sangramento intenso e comprometimento de órgãos como fígado, coração, cérebro e rins. É possível ter dengue grave sem sangramento visível, o que torna o termo popular dengue hemorrágica enganoso e perigoso: ele faz muita gente esperar por sangue para buscar ajuda.',
          'Além do choque, a forma grave pode se manifestar como sangramento digestivo, alteração de consciência, dificuldade para respirar por acúmulo de líquido e redução da urina. São situações que exigem ambiente hospitalar e monitoramento contínuo. Reconhecer esses quadros é o que leva à internação no tempo certo, e é por isso que a avaliação profissional não deve ser adiada.',
        ],
      },
      {
        id: 'segunda-infeccao',
        heading: 'A segunda infecção pesa no risco',
        paragraphs: [
          'Existem quatro sorotipos do vírus. A infecção por um deles garante proteção duradoura contra esse sorotipo, mas não contra os outros três. Quem já teve dengue uma vez tem risco maior de forma grave em uma infecção posterior por outro sorotipo. Por isso, saber quantas vezes a pessoa já adoeceu ajuda a equipe a dimensionar o risco, ainda que o desfecho dependa também da idade e das condições de saúde.',
          'Isso não significa que a primeira infecção seja inofensiva. Bebês, crianças pequenas, gestantes, pessoas idosas e pessoas com doenças crônicas também podem evoluir mal na primeira vez, e por isso precisam de avaliação precoce. A soma dos fatores, e não um deles isolado, é o que orienta a conduta.',
          'Vale reforçar que esse histórico deve ser informado em toda consulta, mesmo em outro município ou anos depois. Essa informação muda a forma como a equipe avalia o caso e define o acompanhamento, e nenhum exame rápido substitui esse relato no primeiro atendimento.',
        ],
      },
      {
        id: 'sinais-que-antecedem',
        heading: 'Os sinais que antecedem a piora',
        paragraphs: [
          'A piora costuma acontecer quando a febre cede, entre o terceiro e o sétimo dia, e não no auge da temperatura. Dor abdominal intensa, vômitos persistentes, sangramento, sonolência, agitação, tontura, dificuldade para respirar e urina muito reduzida são os sinais que pedem atendimento imediato.',
          'Reconhecer essa janela é o que separa um caso comum de uma emergência. Se a pessoa parece bem mas apresenta qualquer um desses sinais, ela precisa ser avaliada no mesmo dia, sem esperar o retorno agendado.',
          'A lista vale para qualquer pessoa, mas pesa mais em quem já teve dengue antes e nos grupos de maior risco. Na dúvida sobre um sinal, procure avaliação: uma consulta a mais é sempre melhor do que esperar a piora se instalar.',
        ],
        cta: {
          label: 'Veja a lista completa de sinais de alerta',
          href: '/doencas/dengue/',
        },
      },
      {
        id: 'tratamento-que-muda-o-desfecho',
        heading: 'O tratamento que muda o desfecho',
        paragraphs: [
          'Não há antiviral contra a dengue. O que muda o desfecho é a reposição de líquidos no tempo certo, feita com orientação profissional, além do controle dos sintomas e da observação dos sinais de alarme. É por isso que a rapidez pesa tanto no resultado final. Esperar o retorno marcado quando já existem sinais de alarme é justamente o que transforma um caso tratável em emergência.',
          'Casos com sinais de alerta ou dengue grave podem precisar de soro na veia, observação na unidade de saúde ou internação. Antibióticos não têm efeito sobre o vírus, e corticoides e transfusões não são indicados de rotina. A decisão sobre cada um desses recursos é da equipe de saúde.',
          'A reavaliação marcada faz parte do tratamento, não é formalidade. É nela que a equipe compara o hematócrito, a pressão e a diurese com os valores da primeira consulta e decide se o caso pode seguir em casa. A velocidade da reposição de líquido é definida caso a caso.',
        ],
      },
      {
        id: 'quem-precisa-de-mais-atencao',
        heading: 'Quem precisa de mais atenção',
        paragraphs: [
          'Bebês e crianças pequenas, pessoas com 65 anos ou mais, gestantes e mulheres no pós-parto, pessoas com obesidade, com imunidade comprometida ou com doenças crônicas como diabetes e hipertensão têm risco maior de complicação.',
          'Para esses grupos, a orientação é procurar atendimento ao primeiro sintoma, sem esperar sinais de alarme, e retornar na data marcada mesmo que a febre tenha passado. O acompanhamento próximo é o que permite tratar a piora antes que ela se torne choque.',
          'Quem mora longe de um serviço de saúde ou tem dificuldade para se hidratar também precisa de um plano claro de retorno, porque a distância pode atrasar o atendimento quando os sinais de alarme aparecerem. Combinar com antecedência como chegar ao serviço, e quem pode acompanhar a pessoa, faz diferença nesse momento.',
        ],
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'dengue-segunda-infeccao',
      'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
      'sintomas-iniciais-da-dengue',
    ],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'dengue-segunda-infeccao',
    slug: 'dengue-segunda-infeccao',
    title: 'Segunda infecção por dengue é mais perigosa?',
    excerpt:
      'Quem já teve dengue pode adoecer de novo pelos outros sorotipos, e a segunda infecção aumenta o risco de forma grave. Entenda o que isso muda na prática.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'quatro-sorotipos',
        heading: 'Por que é possível ter dengue mais de uma vez',
        paragraphs: [
          'O vírus da dengue tem quatro sorotipos, identificados como DENV-1, DENV-2, DENV-3 e DENV-4. A infecção por um deles gera imunidade duradoura contra aquele sorotipo, mas não protege contra os outros três.',
          'Por isso, uma pessoa pode adoecer até quatro vezes ao longo da vida, uma para cada sorotipo. Como vários sorotipos circulam ao mesmo tempo no Brasil, a reinfecção não é uma exceção: é parte do comportamento esperado da doença. Saber disso ajuda a entender por que a preocupação com o mosquito não termina depois do primeiro episódio.',
          'A imunidade que se forma depois da infecção é específica para o sorotipo que causou a doença. Quem teve DENV-1 pode ter DENV-2, DENV-3 ou DENV-4 mais adiante, e cada episódio é tratado como uma nova infecção. Por isso, ter dengue uma vez não deve ser encarado como proteção definitiva, nem dispensa os cuidados nas exposições seguintes.',
        ],
      },
      {
        id: 'por-que-a-segunda-vez-preocupa',
        heading: 'Por que a segunda vez preocupa',
        paragraphs: [
          'A Organização Mundial da Saúde aponta que quem já foi infectado tem risco maior de desenvolver dengue grave em uma infecção posterior. O motivo está na forma como o sistema imunológico responde ao segundo sorotipo.',
          'Na segunda infecção, os anticorpos produzidos na primeira podem se ligar ao novo vírus sem neutralizá-lo, e essa resposta desajustada facilita a entrada do vírus nas células e aumenta a inflamação. O resultado é maior chance de extravasamento de plasma e de complicações. Esse é o motivo pelo qual a segunda infecção recebe atenção especial nos serviços de saúde, mesmo quando os sintomas iniciais parecem leves.',
          'Esse mecanismo é descrito pela Organização Mundial da Saúde, que lista a infecção anterior como fator de risco para a forma grave. Por isso, o histórico de dengue deve ser informado em qualquer consulta, inclusive em outro município. A informação muda a avaliação e o plano de retorno.',
        ],
      },
      {
        id: 'nem-toda-segunda-infeccao-e-grave',
        heading: 'Nem toda segunda infecção é grave',
        paragraphs: [
          'Risco maior não significa destino certo. A maioria das segundas infecções também cursa com febre, dores no corpo e recuperação em uma a duas semanas, sem nenhuma complicação.',
          'O que muda é o nível de atenção. Saber que já teve dengue antes ajuda o profissional a avaliar o caso e a marcar o retorno. Não é motivo para pânico, e sim para não deixar sintomas de alerta passarem. O acompanhamento existe para identificar cedo quem sai dessa expectativa e precisa de mais do que hidratação em casa.',
          'A reavaliação também serve para ajustar a hidratação e decidir se o caso pode seguir em casa. Ter tido dengue antes é um dado que o profissional usa junto com idade, sintomas e exames, e não um diagnóstico de gravidade.',
        ],
      },
      {
        id: 'como-reduzir-o-risco',
        heading: 'Como reduzir o risco de adoecer de novo',
        paragraphs: [
          'Quem já teve dengue precisa se proteger do mesmo jeito que qualquer outra pessoa: eliminar criadouros do mosquito e evitar picadas. Não existe comportamento que garanta imunidade aos outros sorotipos.',
          'Na prática, isso significa vistoriar o quintal uma vez por semana, escovar as paredes dos recipientes com água, manter caixas d’água tampadas e usar repelente nos horários de maior atividade do mosquito. A proteção individual reduz a chance de uma nova infecção e também protege quem está por perto. Vale lembrar que o quintal de uma casa também pode alimentar criadouros de toda a vizinhança.',
          'A proteção não é definitiva. Mesmo quem já teve os quatro sorotipos continua exposto a picadas e a outras arboviroses transmitidas pelo mesmo mosquito, como chikungunya e zika. Como o mosquito se cria perto das casas, a limpeza do quintal é a medida que mais depende de você, e ela vale independentemente de quantas vezes você já adoeceu.',
        ],
      },
      {
        id: 'sinais-de-alarme',
        heading: 'Os sinais que exigem atendimento imediato',
        paragraphs: [
          'Na segunda infecção, vale redobrar a atenção à fase em que a febre cede, entre o terceiro e o sétimo dia. Dor abdominal intensa, vômitos persistentes, sangramento de gengiva ou nariz, sonolência, agitação, tontura, falta de ar e urina muito reduzida são sinais de alerta.',
          'Diante de qualquer um deles, procure atendimento imediatamente, mesmo que a febre tenha baixado. A melhora da temperatura não indica que o risco passou, e é justamente nesse momento que a forma grave costuma se manifestar.',
          'A lista é a mesma para qualquer caso, mas quem já teve dengue antes deve conhecê-la de cor. Na dúvida sobre um sinal, procure avaliação no mesmo dia, sem esperar o retorno marcado.',
        ],
        cta: {
          label: 'Entenda a forma grave na página sobre dengue',
          href: '/doencas/dengue/',
        },
      },
      {
        id: 'vacinacao-e-duvidas',
        heading: 'Vacina e outras dúvidas frequentes',
        paragraphs: [
          'A vacina contra a dengue foi incorporada ao SUS em dezembro de 2023 e é oferecida em municípios selecionados, para crianças e adolescentes de 10 a 14 anos, em duas doses com intervalo de três meses. O público e a lista de municípios são revistos a cada ano.',
          'Quem já teve dengue pode se vacinar, desde que esteja dentro do grupo e do município contemplados, e a decisão deve ser conversada na unidade de saúde. Ter tido a doença antes não dispensa a prevenção: continuar eliminando criadouros e evitando picadas segue sendo a base de tudo.',
          'Se você já teve dengue, informe isso no posto de vacinação. O histórico ajuda a equipe a orientar a conduta e a reforçar os cuidados que continuam necessários depois da vacina. O mesmo vale quando o atendimento acontece em outro município, porque o registro nem sempre acompanha o paciente entre serviços.',
        ],
      },
    ],
    diseaseSlugs: ['dengue'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: [
      'dengue-pode-matar',
      'sintomas-iniciais-da-dengue',
      'como-prevenir-a-dengue',
    ],
    references: [
      {
        label: 'Dengue and severe dengue: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Dengue: sintomas, prevenção e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Vacinação contra a dengue: municípios contemplados',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue/vacinacao',
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
          'O diabetes tipo 2 é uma condição crônica, e o tratamento é de longo prazo. Na prática, a rotina passa a incluir três frentes novas: monitoramento, alimentação planejada e movimento regular. Nenhuma delas depende de equipamentos caros nem de disciplina perfeita.',
          'Essas mudanças não precisam ser drásticas de uma vez. Pequenos ajustes mantidos ao longo das semanas costumam ser mais sustentáveis do que grandes mudanças que duram poucos dias. O objetivo não é a perfeição em uma semana, e sim uma rotina que se mantenha por anos.',
        ],
      },
      {
        id: 'monitoramento',
        heading: 'Como monitorar a glicemia no dia a dia?',
        paragraphs: [
          'Acompanhar a glicose em casa, quando indicado, ajuda a entender como o corpo responde a diferentes alimentos, horários e níveis de atividade. Os exames de acompanhamento e a frequência das medições são definidos pelo profissional de saúde.',
          'A hemoglobina glicada (HbA1c) mostra uma média da glicemia dos últimos meses e é um dos principais parâmetros de acompanhamento. A meta costuma ficar em torno de 7%, mas o valor é definido caso a caso pela equipe de saúde.',
          'O registro vale mais do que o número isolado. Anotar data, horário e o que foi comido antes da medição transforma uma lista de valores em informação útil para ajustar o plano na consulta.',
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
          'Não existe lista universal de alimentos proibidos. O que costuma ajudar é a regularidade nos horários e o controle das porções, mais do que cortar grupos inteiros de alimentos.',
          'Refeições em horários parecidos a cada dia dão ao organismo um ritmo previsível e facilitam o controle da glicemia. Longos jejuns podem desregular as taxas e favorecer episódios de baixa de glicose.',
          'Incluir fibras nas refeições, como vegetais, legumes e grãos integrais, costuma tornar a absorção dos carboidratos mais lenta e ajudar na saciedade. Bebidas açucaradas e ultraprocessados concentram muito açúcar em pouco volume e são os primeiros itens a revisar.',
        ],
        bullets: [
          'Reduza bebidas açucaradas e alimentos ultraprocessados',
          'Prefira refeições em horários parecidos a cada dia',
          'Inclua fibras (vegetais, legumes, grãos integrais) nas refeições',
          'Evite longos jejuns, que podem desregular a glicemia',
        ],
      },
      {
        id: 'movimento',
        heading: 'Qual a importância da atividade física?',
        paragraphs: [
          'Movimento regular melhora a resposta do corpo à insulina. A Organização Mundial da Saúde recomenda ao menos 150 minutos de atividade física de intensidade moderada por semana, o que contribui para reduzir o risco de diabetes tipo 2.',
          'A recomendação individual deve ser ajustada com acompanhamento profissional, sobretudo para quem tem outras condições de saúde ou limitações nas articulações, no coração ou nos pés.',
          'Mesmo caminhadas curtas e frequentes já trazem benefício. O importante é a regularidade, não a intensidade isolada de um único treino.',
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
          'A metformina costuma ser o primeiro remédio indicado, e existem outras classes, como as sulfonilureias e os inibidores do SGLT-2. A escolha depende da glicemia, de outras doenças e do risco de efeitos colaterais.',
          'No Brasil, os medicamentos para diabetes estão disponíveis no SUS mediante prescrição. A metformina, a glibenclamida, a gliclazida e as insulinas NPH e regular estão entre os itens oferecidos, e o programa Farmácia Popular também distribui parte deles.',
        ],
        bullets: [
          'Tome na dose e nos horários indicados, sem interromper por conta própria',
          'Se perder uma dose, siga a orientação do profissional ou da bula, e não dobre a próxima dose',
          'Não ajuste o tratamento com base em uma única medição da glicemia',
        ],
      },
      {
        id: 'hipoglicemia',
        heading: 'O que fazer em caso de hipoglicemia?',
        paragraphs: [
          'A glicemia muito baixa, chamada hipoglicemia, pode ocorrer, especialmente em quem usa certos medicamentos. Sinais comuns incluem tremor, suor, calafrios, palidez, confusão, batimento rápido, fome, irritabilidade, tontura e fraqueza.',
          'Se aparecerem sinais de hipoglicemia, a conduta geral segue a chamada regra 15-15: ingerir cerca de 15 g de carboidratos de absorção rápida, como suco ou glicose, aguardar 15 minutos e reavaliar. Se a glicemia continuar baixa, repita o procedimento.',
          'A situação muda quando a pessoa está inconsciente, convulsionando ou não desperta. Nesses casos, trate como emergência e acione o serviço de atendimento de urgência; nunca ofereça comida ou bebida a alguém inconsciente, pelo risco de engasgo.',
        ],
        bullets: [
          'Tenha sempre à mão uma fonte rápida de açúcar, como suco, glicose ou bala',
          'Avise pessoas próximas sobre os sinais e o que fazer',
          'Procure atendimento se os sintomas forem intensos ou não melhorarem',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Por que o acompanhamento de longo prazo é importante?',
        paragraphs: [
          'O diabetes tipo 2 é gerenciado ao longo dos anos. O acompanhamento regular permite identificar e tratar precocemente complicações nos olhos, nos rins, nos nervos e no sistema cardiovascular.',
          'Algumas dessas complicações começam antes de qualquer sintoma. Quem tem diabetes tipo 2 deve fazer o exame de fundo de olho logo após o diagnóstico e repetir a avaliação todo ano, além de exames de urina e de função dos rins conforme a orientação.',
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
          'Posso comer frutas? Sim, frutas podem fazer parte da alimentação; o ponto é a porção e a regularidade, não o banimento. Preciso cortar todo o açúcar? O foco é reduzir bebidas e alimentos com muito açúcar adicionado, não eliminar cada grama.',
          'O diabetes tipo 2 tem cura? É uma condição crônica; o controle adequado mantém a glicemia na faixa desejada e reduz riscos, mas não há cura garantida. O que importa é manter o tratamento e o acompanhamento ao longo dos anos.',
          'Posso beber álcool? O álcool pode afetar a glicemia, e o efeito varia conforme a quantidade e se foi consumido com ou sem alimento. Converse com o profissional sobre quantidade e ocasião.',
        ],
        cta: {
          label: 'Ir para a página sobre diabetes',
          href: '/doencas/diabetes/',
        },
      },
    ],
    diseaseSlugs: ['diabetes'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['diabetes-sinais-e-sintomas', 'diabetes-fatores-de-risco', 'diabetes-hipoglicemia'],
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
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'diabetes-sinais-e-sintomas',
    slug: 'diabetes-sinais-e-sintomas',
    title: 'Diabetes: quais são os sinais e sintomas?',
    excerpt:
      'O diabetes tipo 2 costuma avançar em silêncio por anos. Conhecer os sinais ajuda a procurar avaliação antes que as complicações apareçam.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'por-que-demora',
        heading: 'Por que o diabetes pode passar anos sem sintomas?',
        paragraphs: [
          'No diabetes tipo 2, a glicemia sobe de forma gradual, e o corpo se adapta por um tempo a esse nível mais alto. Por isso, muitas pessoas não sentem nada e descobrem a alteração apenas em um exame de rotina, feito por outro motivo. A doença pode permanecer silenciosa por anos antes de dar qualquer sinal claro, e quando os valores finalmente saem da faixa o desgaste nos vasos já pode ter começado muito antes.',
          'Esse período silencioso é o que torna a doença perigosa. Quando os primeiros sinais aparecem, parte das complicações nos vasos e nos nervos pode já estar em curso, e é por isso que o rastreio em quem tem fatores de risco tem valor mesmo sem queixa. Um exame simples de sangue costuma bastar para sair da dúvida.',
          'O tempo sem sintomas varia de pessoa para pessoa. Quem tem histórico familiar, sobrepeso, pressão alta ou outra condição de risco deve conversar com a equipe de saúde sobre a periodicidade de medir a glicemia, ainda que se sinta bem. Quanto mais cedo a alteração é notada, mais simples costuma ser o controle ao longo dos anos, já que cada ano com a glicemia controlada reduz o desgaste acumulado nos vasos e nos nervos.',
        ],
      },
      {
        id: 'sinais-classicos',
        heading: 'Quais são os sinais clássicos de glicemia alta?',
        paragraphs: [
          'Quando a glicemia se mantém elevada, o organismo tenta eliminar o excesso de glicose pela urina, o que puxa água junto e provoca sede e idas frequentes ao banheiro, inclusive à noite. A falta de energia nas células, por sua vez, aumenta a fome e o cansaço, mesmo sem esforço maior que o de costume. Em muitos casos, é a ida repetida ao banheiro durante a noite que chama a atenção primeiro.',
          'A lista abaixo reúne os sinais mais citados por quem convive com a doença. Eles podem aparecer isolados e em intensidade leve, o que faz muita gente atribuí-los à rotina corrida ou à idade. Na dúvida, vale anotá-los e levar o conjunto para a consulta, porque a falta de um sinal não afasta a doença.',
        ],
        bullets: [
          'Sede excessiva e necessidade frequente de urinar, inclusive à noite',
          'Fome frequente e cansaço sem causa clara',
          'Perda de peso sem dieta ou explicação',
          'Visão embaçada',
          'Feridas e machucados que demoram a cicatrizar',
          'Formigamento, queimação ou dormência nos pés e nas mãos',
        ],
      },
      {
        id: 'pele-e-cicatrizacao',
        heading: 'O que muda na pele, nas feridas e nos pés?',
        paragraphs: [
          'A glicemia alta prejudica a circulação e a sensibilidade, sobretudo nos pés. Uma ferida pequena, que passaria despercebida, pode demorar semanas para cicatrizar e infeccionar com facilidade, o que transforma um machucado simples em um problema sério. Nos pés, a perda de sensibilidade faz com que o machucado passe despercebido no momento em que acontece.',
          'Infecções de repetição, como na bexiga, nos rins, na gengiva ou na pele, também são mais frequentes quando a glicemia está descontrolada. É comum que essas infecções apareçam antes de qualquer outro sinal e levem à investigação do diabetes, especialmente em quem já tem outros fatores de risco. Por isso, infecções que se repetem merecem investigação, mesmo quando o tratamento de cada episódio parece resolver.',
          'Por isso, examinar os pés todos os dias faz parte da rotina. Observe a planta, o espaço entre os dedos e as unhas, e procure atendimento se notar ferida, bolha, vermelhidão ou perda de sensibilidade. A inspeção diária é rápida e vale a pena mesmo para quem não sente nada nos pés.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quais sinais exigem atendimento de urgência?',
        paragraphs: [
          'Existem sinais que indicam duas emergências ligadas ao diabetes: a cetoacidose diabética e o estado hiperglicêmico hiperosmolar. Nos dois casos, a demora no atendimento aumenta o risco, e a orientação é procurar um serviço de urgência sem esperar que o quadro melhore sozinho. São quadros graves, que não se resolvem em casa.',
          'Também exige avaliação rápida a glicemia muito alta que não cai mesmo com o tratamento em dia, assim como a queda grave de glicose em quem usa insulina, com desmaio ou convulsão. Esses episódios podem ser sinal de que o esquema de tratamento precisa de ajuste pelo profissional de saúde, e não de mudança por conta própria.',
          'Na dúvida sobre a gravidade, o mais seguro é buscar ajuda. Uma avaliação que termina sem nada grave custa menos do que uma complicação tratada tarde, e os serviços de urgência orientam procurar atendimento sempre que esses sinais aparecem.',
        ],
        bullets: [
          'Vômitos persistentes, dor abdominal e dificuldade para respirar',
          'Hálito com odor de fruta, sonolência intensa ou confusão mental',
          'Desmaio, convulsão ou dificuldade para acordar',
          'Glicemia muito alta que não cai, mesmo com o tratamento em dia',
          'Sinais de glicose muito baixa, como tremores, suor frio e palidez',
        ],
      },
      {
        id: 'tipos-e-sinais',
        heading: 'Os sinais são iguais no tipo 1 e no tipo 2?',
        paragraphs: [
          'Os sinais clássicos de glicemia alta se parecem nos dois tipos, mas o ritmo é diferente. No tipo 1, os sintomas costumam surgir em poucas semanas e podem ser intensos, o que leva a uma procura de atendimento mais cedo, muitas vezes com perda de peso rápida. No tipo 2, a instalação é lenta e os sinais aparecem aos poucos, quando aparecem.',
          'No Brasil, o tipo 1 costuma se manifestar principalmente entre 10 e 14 anos, com cerca de 25,6 casos por 100 mil habitantes por ano. Já o tipo 2 responde por cerca de 90% dos casos e se concentra em adultos, embora esteja aparecendo cada vez mais cedo, acompanhando o avanço do sobrepeso e do sedentarismo.',
          'Em qualquer idade, a presença dos sinais não fecha o diagnóstico: a confirmação depende de exames de sangue, com interpretação do profissional de saúde. Os mesmos sinais podem ter outras causas, e só a medida da glicemia mostra se a origem é o diabetes. Nenhuma lista de sintomas substitui essa medida.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer diante de sinais suspeitos?',
        paragraphs: [
          'Diante de sinais persistentes, o caminho é procurar a unidade básica de saúde e relatar o que vem sendo notado, incluindo mudanças de peso, sede, visão e cicatrização. A equipe decide quais exames pedir e como interpretar os resultados, e o acompanhamento costuma seguir na atenção básica. Levar um registro simples do que foi notado ajuda a equipe a interpretar melhor o quadro.',
          'Não se automedique nem tente controlar a glicemia por conta própria. O diagnóstico e o plano de cuidado dependem de medidas feitas em exames, e não da impressão isolada de um dia nem de um resultado obtido em farmácia. Um resultado isolado, sem contexto, não substitui a avaliação profissional.',
          'Procurar ajuda cedo muda o curso da doença. Quando o diabetes é identificado antes das complicações, o tratamento tem mais chance de manter a glicemia sob controle e de preservar olhos, rins, nervos e coração ao longo dos anos. Manter o acompanhamento depois do diagnóstico é o que sustenta esse controle.',
        ],
        cta: {
          label: 'Ir para a página sobre diabetes',
          href: '/doencas/diabetes/',
        },
      },
    ],
    diseaseSlugs: ['diabetes'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['diabetes-tipo-2-o-que-muda-no-dia-a-dia', 'diabetes-fatores-de-risco'],
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
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'diabetes-fatores-de-risco',
    slug: 'diabetes-fatores-de-risco',
    title: 'Diabetes: quais fatores aumentam o risco?',
    excerpt:
      'Histórico familiar, sobrepeso, sedentarismo e pressão alta estão entre os fatores que elevam a chance de diabetes tipo 2. Veja o que dá para mudar.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-conta',
        heading: 'O que conta como fator de risco?',
        paragraphs: [
          'Fator de risco é uma condição, um histórico ou um hábito que aumenta a chance de desenvolver diabetes tipo 2. Ter um deles não significa que a doença vai aparecer, e não ter nenhum não garante proteção: são peças que, somadas, mudam a probabilidade de cada pessoa. Duas pessoas com o mesmo número de fatores podem ter riscos diferentes, porque o peso de cada item varia.',
          'O diabetes é uma das condições crônicas mais comuns no mundo. Cerca de 830 milhões de pessoas viviam com a doença em 2022, contra 200 milhões em 1990, e mais de 95% dos casos são do tipo 2. No Brasil, estima-se mais de 13 milhões de pessoas com diabetes, perto de 6,9% da população. O tipo 2 é o mais frequente e o que mais depende de fatores modificáveis.',
          'Conhecer os próprios fatores serve para decidir, junto com a equipe de saúde, quando medir a glicemia e com que frequência. Quanto mais fatores reunidos, mais cedo costuma valer a pena investigar, porque o tipo 2 costuma avançar em silêncio por anos. Fatores que se somam, em geral, pedem atenção mais cedo do que um fator isolado.',
        ],
      },
      {
        id: 'fatores-hereditarios',
        heading: 'Quais fatores não dependem das escolhas da pessoa?',
        paragraphs: [
          'Alguns fatores vêm da história pessoal e familiar. Ter pai, mãe, irmão ou parente próximo com diabetes aumenta a chance, porque a predisposição genética pesa no tipo 2. A herança não determina o futuro, mas muda o ponto de partida de cada pessoa, e quem tem casos na família deve redobrar a atenção aos hábitos.',
          'A idade também entra na conta, já que o risco cresce com o passar dos anos. Fazem parte desse grupo ainda o histórico de diabetes gestacional, ter tido um bebê com mais de 4 kg ao nascer, a síndrome dos ovários policísticos e a apneia do sono. Na prática, a equipe usa esses dados para decidir a frequência do rastreio.',
          'Outro item é o uso prolongado de medicamentos glicocorticoides, que podem elevar a glicemia. Nenhum desses fatores é motivo para alarme isolado, mas todos pedem uma conversa sobre rastreio, com a glicemia medida em intervalos definidos pela equipe de saúde.',
        ],
      },
      {
        id: 'fatores-modificaveis',
        heading: 'Quais fatores podem ser modificados?',
        paragraphs: [
          'Uma parte importante do risco está em hábitos e condições que podem ser trabalhados ao longo do tempo. É nesse grupo que as mudanças de estilo de vida têm maior efeito, e é sobre ele que vale concentrar o esforço. Quanto antes esse trabalho começa, maior tende a ser o efeito ao longo dos anos.',
          'Esses fatores raramente agem sozinhos. Sobrepeso, alimentação e sedentarismo costumam caminhar juntos e reforçar o mesmo mecanismo, que é a resistência à insulina, situação em que o corpo responde pior ao próprio hormônio. Reduzir a gordura da cintura costuma melhorar essa resposta.',
          'A lista abaixo reúne os fatores modificáveis mais citados. Reconhecer quais estão presentes na sua rotina ajuda a montar um plano realista, um passo de cada vez, em vez de tentar mudar tudo de uma só vez. A escolha de qual item atacar primeiro depende da rotina de cada pessoa.',
        ],
        bullets: [
          'Sobrepeso, sobretudo com gordura acumulada na região da cintura',
          'Sedentarismo e alimentação rica em açúcar e gordura',
          'Pressão alta',
          'Colesterol ou triglicérides alterados',
          'Tabagismo',
        ],
      },
      {
        id: 'pre-diabetes-e-risco',
        heading: 'Por que a pré-diabetes é um alerta?',
        paragraphs: [
          'Na pré-diabetes, a glicemia está acima do normal, mas ainda não é alta o suficiente para confirmar a doença. Ela é, ao mesmo tempo, um fator de risco e o último estágio em que a evolução ainda pode ser evitada. Vale tratar o resultado como um alerta, e não como um diagnóstico já fechado.',
          'A estimativa é que cerca de metade das pessoas diagnosticadas com pré-diabetes desenvolva diabetes, mesmo com orientação médica. Isso mostra que o acompanhamento precisa ser próximo, e não apenas uma anotação no prontuário, porque a janela de ação é justamente essa. Nesse caso, o intervalo entre as consultas costuma ser menor do que o de quem está na faixa normal.',
          'A pré-diabetes é a única fase que ainda pode ser revertida. É justamente por isso que ela costuma ser o momento em que as mudanças de hábito têm a maior chance de evitar a doença, antes que a glicemia alta passe a danificar vasos e nervos de forma permanente. Agir no momento do alerta é diferente de esperar o diagnóstico confirmado.',
        ],
      },
      {
        id: 'como-reduzir',
        heading: 'Como reduzir o risco de diabetes tipo 2?',
        paragraphs: [
          'No caso do tipo 2, mudanças de hábito têm impacto relevante, e não é preciso esperar um diagnóstico para começar. As ações que mais pesam são as mesmas que protegem o coração e a circulação, e costumam valer para toda a família. A prevenção serve tanto para quem já tem a doença quanto para quem quer evitá-la.',
          'Nenhuma delas precisa ser radical. Manter a constância por meses tende a render mais do que uma mudança intensa que dura poucas semanas, e pequenos avanços somados fazem diferença ao longo dos anos. Combinar hábitos melhora mais o resultado do que apostar em uma única mudança isolada.',
          'A lista abaixo resume as medidas com maior efeito. O melhor ponto de partida é escolher uma delas para começar e conversar com a equipe de saúde sobre como encaixar o restante na sua rotina.',
        ],
        bullets: [
          'Manter um peso saudável e evitar o ganho de peso ao longo dos anos',
          'Praticar pelo menos 150 minutos por semana de atividade física de intensidade moderada',
          'Cuidar da alimentação, com menos açúcar, sal e ultraprocessados',
          'Não fumar e evitar o fumo passivo',
        ],
      },
      {
        id: 'quando-medir',
        heading: 'Quando medir a glicemia?',
        paragraphs: [
          'Quem tem um ou mais fatores de risco deve conversar com a equipe de saúde sobre a necessidade de medir a glicemia periodicamente, mesmo sem sintoma nenhum, já que o tipo 2 costuma ser silencioso por anos. O rastreio não é um exame isolado, e sim parte do acompanhamento.',
          'A medida é simples, feita por exame de sangue, e o resultado é interpretado pelo profissional. Encontrar uma alteração cedo permite agir antes que as complicações apareçam e costuma tornar o controle mais fácil de manter. Para quem não tem fatores de risco, a equipe define a frequência conforme a idade e o histórico.',
        ],
        cta: {
          label: 'Ir para a página sobre diabetes',
          href: '/doencas/diabetes/',
        },
      },
    ],
    diseaseSlugs: ['diabetes'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['diabetes-sinais-e-sintomas', 'diabetes-pre-diabetes', 'diabetes-tipo-2-o-que-muda-no-dia-a-dia'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'diabetes-pre-diabetes',
    slug: 'diabetes-pre-diabetes',
    title: 'Pré-diabetes: o que é e o que fazer',
    excerpt:
      'Na pré-diabetes a glicemia está acima do normal, mas ainda não confirma a doença. É a fase em que as mudanças de hábito têm mais chance de evitar a evolução.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-e',
        heading: 'O que é pré-diabetes?',
        paragraphs: [
          'A pré-diabetes é uma faixa intermediária: a glicemia está acima do normal, mas ainda não atingiu o valor que confirma o diabetes. Não é uma doença à parte, e sim um aviso de que o metabolismo da glicose já não funciona como antes. Quem recebe esse resultado costuma não ter nenhum sintoma, o que torna a explicação ainda mais importante.',
          'Nessa fase, o corpo ainda produz insulina, mas responde pior a ela, o que se chama resistência à insulina. Sem mudanças, esse processo tende a evoluir ao longo dos anos até o diagnóstico de diabetes tipo 2, mas esse caminho não é inevitável.',
          'Por ser silenciosa, a pré-diabetes costuma aparecer em exames de rotina feitos por outros motivos. Muitas pessoas passam por ela sem notar nada, o que explica a importância do rastreio em quem tem fatores de risco, como histórico familiar, sobrepeso ou pressão alta. Quanto mais cedo o achado aparece, mais tempo há para agir antes do diagnóstico.',
        ],
      },
      {
        id: 'quais-valores',
        heading: 'Quais valores indicam pré-diabetes?',
        paragraphs: [
          'O diagnóstico é feito por exames de sangue, e a interpretação cabe ao profissional de saúde. Costumam ser usadas três medidas, e qualquer uma delas pode mostrar a faixa intermediária. Os três exames medem a glicemia em momentos e janelas diferentes.',
          'Na glicemia de jejum, com pelo menos 8 horas sem comer, a pré-diabetes fica entre 100 e 125 mg/dL. No teste de tolerância oral à glicose, com 75 g, a faixa é de 140 a 199 mg/dL após duas horas. Na hemoglobina glicada, que reflete a média dos últimos meses, a faixa vai de 5,7% a 6,4%. Cada um desses exames tem um papel, e o profissional escolhe o mais adequado ao caso.',
          'Valores acima dessas faixas confirmam o diabetes: glicemia de jejum de 126 mg/dL ou mais, glicemia de 2 horas de 200 mg/dL ou mais, ou hemoglobina glicada de 6,5% ou mais. Quando um único exame aparece alterado e não há sintomas claros, o resultado costuma ser repetido antes de qualquer conclusão, para não tratar alguém que não tem a doença nem deixar um caso passar.',
        ],
      },
      {
        id: 'por-que-importa',
        heading: 'Por que a pré-diabetes importa?',
        paragraphs: [
          'A pré-diabetes não é um resultado para guardar na gaveta. A estimativa é que cerca de metade das pessoas diagnosticadas com ela desenvolva diabetes, mesmo com orientação médica, o que mostra que o acompanhamento precisa ser próximo. Tratar o resultado como detalhe costuma custar anos de exposição à glicemia alta.',
          'O que interessa é que essa é a única fase que ainda pode ser revertida. Antes do diagnóstico, o organismo ainda responde bem às mudanças de hábito, e é aí que elas têm a maior chance de evitar a doença. Essa resposta é o que diferencia a pré-diabetes do diabetes já instalado.',
          'Mesmo quando a evolução não é totalmente evitada, agir nessa fase costuma adiar o aparecimento do diabetes e reduzir a exposição prolongada à glicemia alta, que é o que danifica vasos e nervos ao longo dos anos. Adiar alguns anos já significa menos tempo de desgaste para o corpo.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer para reverter a pré-diabetes?',
        paragraphs: [
          'As ações que ajudam na pré-diabetes são as mesmas que reduzem o risco de diabetes tipo 2. Nenhuma delas precisa ser radical, e a constância ao longo dos meses costuma render mais do que uma mudança intensa que dura poucas semanas. Não existe uma fórmula única que sirva para todas as pessoas.',
          'Perder peso quando há sobrepeso, mesmo que a perda seja pequena, e manter a alimentação regular estão entre as medidas com maior efeito. O plano deve ser ajustado caso a caso pela equipe de saúde, considerando outras condições e o risco de cada pessoa. Pequenas metas costumam funcionar melhor do que metas grandes demais.',
          'O ponto de partida é conversar com a equipe de saúde sobre o resultado do exame e sobre um plano possível para a sua rotina, em vez de tentar seguir uma dieta genérica encontrada na internet. O plano precisa caber na rotina real, e não em um cenário ideal.',
        ],
        bullets: [
          'Manter um peso saudável e evitar o ganho de peso ao longo dos anos',
          'Praticar pelo menos 150 minutos por semana de atividade física de intensidade moderada',
          'Cuidar da alimentação, com menos açúcar, sal e ultraprocessados',
          'Não fumar',
          'Repetir os exames nos intervalos definidos pela equipe de saúde',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Como é o acompanhamento?',
        paragraphs: [
          'Na pré-diabetes, o acompanhamento costuma ser feito na atenção básica, na unidade básica de saúde, com a equipe de clínico geral e de enfermagem. O intervalo entre os exames é definido conforme o resultado e o risco de cada pessoa. Em muitos casos, o retorno é combinado já na primeira consulta.',
          'O acompanhamento não serve apenas para medir a glicemia. Ele é o momento de revisar peso, pressão arterial, colesterol e hábitos, e de ajustar o plano quando algo não está funcionando. Esse conjunto de medidas dá uma visão mais ampla do risco cardiovascular.',
          'Esse cuidado continuado é o que separa um resultado alterado esquecido de um problema tratado a tempo. Manter as consultas em dia, mesmo quando a glicemia melhora, ajuda a sustentar os ganhos ao longo dos anos. Sem acompanhamento, é fácil que a melhora inicial se perca com o tempo.',
        ],
      },
      {
        id: 'duvidas-comuns',
        heading: 'Dúvidas comuns sobre a pré-diabetes',
        paragraphs: [
          'A pré-diabetes sempre vira diabetes? Não. Parte das pessoas volta à faixa normal com mudanças de hábito, e outras adiam o diagnóstico por anos. O que decide o rumo é a combinação entre genética, hábitos e acompanhamento, e o resultado de um único exame não decide o futuro sozinho.',
          'Preciso de remédio na pré-diabetes? Depende do caso. O tratamento começa pelas mudanças de estilo de vida, e a decisão sobre medicamentos é tomada pelo profissional de saúde conforme a glicemia e outros fatores. Quando indicado, o medicamento entra junto com as mudanças, e não no lugar delas.',
          'Posso esperar para mudar depois? Não é o melhor caminho, porque a pré-diabetes é a única fase que ainda pode ser revertida. Adiar as mudanças costuma significar perder a janela em que elas funcionam melhor. Começar agora, mesmo com passos pequenos, vale mais do que esperar o momento perfeito.',
        ],
        cta: {
          label: 'Ir para a página sobre diabetes',
          href: '/doencas/diabetes/',
        },
      },
    ],
    diseaseSlugs: ['diabetes'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['diabetes-fatores-de-risco', 'diabetes-tipo-2-o-que-muda-no-dia-a-dia'],
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
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    isPlaceholder: true,
  },
  {
    id: 'diabetes-hipoglicemia',
    slug: 'diabetes-hipoglicemia',
    title: 'Hipoglicemia no diabetes: o que fazer quando a glicemia cai',
    excerpt:
      'A queda da glicemia pode surgir de repente e pede uma reação rápida. Entenda os sinais, a regra 15-15 e quando tratar como emergência.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-e',
        heading: 'O que é hipoglicemia?',
        paragraphs: [
          'Hipoglicemia é a glicemia abaixo do nível necessário para o corpo funcionar bem. Ela pode ocorrer em qualquer pessoa, mas é mais comum em quem usa insulina ou determinados medicamentos que aumentam a produção de insulina. Quem usa esses medicamentos deve conhecer bem os próprios limites e os sinais de alerta.',
          'O cérebro depende da glicose como combustível, e é por isso que a queda costuma vir acompanhada de sintomas como confusão, tontura e irritabilidade. Reconhecer os sinais cedo é o que evita que a situação piore, e agir nos primeiros minutos costuma evitar que o episódio se torne grave. Em pessoas que não usam esses medicamentos, a hipoglicemia costuma ser menos frequente.',
          'Episódios de hipoglicemia podem ser leves, quando a pessoa ainda consegue se tratar sozinha, ou graves, quando precisa de ajuda de outra pessoa. Para quem usa insulina, aprender a lidar com esses episódios faz parte do tratamento, e não é sinal de falha no cuidado. O plano individual deve ser combinado com a equipe de saúde.',
        ],
      },
      {
        id: 'quais-sinais',
        heading: 'Quais são os sinais de glicemia baixa?',
        paragraphs: [
          'Os sinais de hipoglicemia costumam aparecer de repente e podem variar de uma pessoa para outra, e até de um episódio para outro na mesma pessoa. Quem convive com diabetes aprende a reconhecer a própria combinação de sintomas. O que é sinal para uma pessoa pode não ser para outra, e isso é normal.',
          'É comum que os primeiros sinais sejam sentidos no corpo, como tremor e suor, antes de qualquer alteração de consciência. Quando a glicemia cai mais, podem surgir confusão e dificuldade para raciocinar, o que deixa a pessoa menos capaz de resolver sozinha a situação. Quando a queda é rápida, os sintomas podem piorar em poucos minutos.',
          'A lista abaixo reúne os sinais mais citados. Sentir apenas alguns deles já justifica medir a glicemia e agir, sem esperar que todos apareçam. Ter o material de medição por perto ajuda a confirmar a suspeita antes de agir.',
        ],
        bullets: [
          'Tremor nas mãos ou no corpo',
          'Suor, pele fria e pegajosa',
          'Calafrios',
          'Batimento do coração acelerado',
          'Fome repentina',
          'Tontura',
          'Irritabilidade ou nervosismo',
          'Confusão e dificuldade para se concentrar',
        ],
      },
      {
        id: 'regra-15-15',
        heading: 'Como aplicar a regra 15-15?',
        paragraphs: [
          'Quando a pessoa está consciente e consegue engolir, a conduta geral segue a chamada regra 15-15: ingerir cerca de 15 g de carboidratos de absorção rápida, aguardar 15 minutos e reavaliar a glicemia. A regra vale para quem está consciente e consegue engolir sem risco de engasgo.',
          'Se a glicemia continuar baixa, o passo é repetir o procedimento de 15 g e esperar mais 15 minutos antes de medir novamente. Depois de a glicemia voltar à faixa segura, uma refeição ou lanche ajuda a estabilizar o valor. Repetir o passo, em vez de comer muito de uma vez, evita que a glicemia suba demais.',
          'São exemplos de carboidratos de absorção rápida o suco, a glicose em gel ou em comprimido, o açúcar e as balas comuns. Alimentos ricos em gordura, como chocolate e amendoim, agem mais devagar e não são a melhor escolha para tratar um episódio agudo. Cada pessoa costuma ter uma fonte preferida, e vale manter a que funciona melhor.',
        ],
      },
      {
        id: 'quando-e-emergencia',
        heading: 'Quando a hipoglicemia é uma emergência?',
        paragraphs: [
          'Alguns episódios exigem ajuda imediata de emergência. É o caso quando a pessoa está inconsciente, apresenta convulsão ou não desperta mesmo com estímulo, situações em que o risco é maior e cada minuto conta. Nesses casos, não adianta tentar tratar em casa.',
          'Nesses casos, a orientação é acionar o serviço de atendimento de urgência e nunca oferecer comida ou bebida a alguém inconsciente, pelo risco de engasgo. Não tente dar líquidos à força, mesmo que o sinal pareça leve. Se houver glucagon prescrito, ele deve ser usado conforme a orientação recebida.',
          'Se a pessoa melhora depois da ajuda, ainda assim vale relatar o episódio na próxima consulta. Repetições podem indicar a necessidade de ajustar doses ou o esquema de tratamento, o que só o profissional de saúde deve fazer. Registrar cada episódio ajuda a identificar padrões.',
        ],
      },
      {
        id: 'como-prevenir',
        heading: 'Como reduzir o risco de novos episódios?',
        paragraphs: [
          'Boa parte da prevenção está em não deixar a glicemia cair a ponto de gerar sintomas. Cumprir os horários das refeições e dos medicamentos, sem pular etapas, é o primeiro passo. Refeições regulares e doses corretas sustentam boa parte do controle, e evitar pular refeições depois de tomar o remédio é parte central desse cuidado.',
          'Também ajuda evitar longos jejuns, sobretudo antes de atividade física ou de dirigir, e combinar refeições com carboidratos e fibras para tornar a liberação de glicose mais gradual. Nos dias de exercício, pode ser necessário ajustar a alimentação com orientação profissional.',
          'Carregar sempre uma fonte rápida de açúcar é uma medida simples que muda o desfecho de um episódio. O hábito vale tanto para quem usa insulina quanto para quem toma outros medicamentos com risco de hipoglicemia. Vale revisar o plano sempre que a rotina muda, como em viagens ou mudanças de horário.',
        ],
        bullets: [
          'Tenha sempre à mão uma fonte rápida de açúcar, como suco, glicose ou bala',
          'Respeite os horários das refeições e dos medicamentos',
          'Evite longos jejuns, sobretudo antes de exercício ou de dirigir',
          'Anote os episódios e leve o registro às consultas',
        ],
      },
      {
        id: 'avise-quem-esta-perto',
        heading: 'Por que avisar quem está perto?',
        paragraphs: [
          'Em uma hipoglicemia grave, a pessoa pode não conseguir se tratar sozinha. Por isso, familiares, colegas e pessoas próximas precisam saber reconhecer os sinais e o que fazer enquanto a ajuda chega. Quem sabe o que fazer não perde tempo procurando informação na hora do aperto.',
          'Ter um documento que identifique a condição, ou um cartão com orientações, ajuda quem socorre a agir mais rápido. Um plano simples, combinado com antecedência, costuma valer mais do que improvisar na hora. Esse plano deve incluir onde está a fonte de açúcar e o que fazer se a pessoa não despertar.',
          'Explicar o que é a hipoglicemia e como agir também reduz o susto de quem está por perto. Saber que a confusão e a irritabilidade fazem parte do quadro evita que o episódio seja confundido com outra coisa. Combinar os detalhes com antecedência deixa todos mais tranquilos.',
        ],
        cta: {
          label: 'Ir para a página sobre diabetes',
          href: '/doencas/diabetes/',
        },
      },
    ],
    diseaseSlugs: ['diabetes'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['diabetes-sinais-e-sintomas', 'diabetes-tipo-2-o-que-muda-no-dia-a-dia'],
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
        label: 'Tratamento da hipoglicemia (baixa de açúcar no sangue)',
        url: 'https://www.cdc.gov/diabetes/treatment/treatment-low-blood-sugar-hypoglycemia.html',
        publisher: 'Centros de Controle e Prevenção de Doenças (CDC, EUA)',
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
'A pressão varia ao longo do dia e muda conforme a situação. Medições repetidas, feitas em casa e em datas diferentes, ajudam o profissional de saúde a entender o padrão real. Isso importa porque a pressão alta costuma não dar sinal. Segundo a Organização Mundial da Saúde, quase metade das pessoas que vivem com hipertensão não sabe disso. Medir com regularidade é a única forma de descobrir o problema e acompanhá-lo.',
          'Quem tem mais de 20 anos deve medir a pressão ao menos uma vez por ano. Com histórico familiar de hipertensão, a recomendação é medir no mínimo duas vezes por ano. Isso faz diferença porque a doença é herdada dos pais em cerca de 9 em cada 10 casos.',
          'No Brasil, a pressão alta está ligada a cerca de 388 mortes por dia e a complicações sérias, como infarto, AVC, insuficiência cardíaca e problemas nos rins. O diagnóstico precoce e o acompanhamento contínuo são a forma de reduzir esse impacto.',
        ],
      },
      {
        id: 'antes-de-medir',
        heading: 'Antes de medir',
        paragraphs: [
          'O resultado depende de como você se prepara. Antes de ligar o aparelho, alguns cuidados simples evitam leituras falsas, altas ou baixas.',
          'O ideal é medir sempre no mesmo ambiente, calmo e com temperatura agradável. Uma sala barulhenta ou uma discussão logo antes podem elevar o número sem que exista doença.',
        ],
        bullets: [
          'Evite café, cigarro e atividade física nos 30 minutos anteriores',
          'Esvazie a bexiga',
          'Descanse sentado por alguns minutos antes da medição',
          'Não meça logo depois de uma refeição farta ou de um banho quente',
          'Se estiver com dor, nervoso ou com sono ruim, anote e repita a medição em outro momento',
        ],
      },
      {
        id: 'durante-a-medicao',
        heading: 'Durante a medição',
        paragraphs: [
          'Na hora da medição, a postura e o silêncio mudam o número que aparece na tela. Mantenha sempre o mesmo braço e siga os mesmos passos.',
          'Fique relaxado e respire normalmente, sem conversar nem segurar o aparelho na mão. Faça as duas medições, espere um minuto e, se quiser mais segurança, faça uma terceira e considere a média do momento.',
        ],
        bullets: [
          'Sente-se com as costas apoiadas e os pés no chão',
          'Mantenha o braço apoiado na altura do coração',
          'Não fale durante a medição',
          'Faça pelo menos duas medições, com um minuto de intervalo',
          'Use um manguito do tamanho adequado ao seu braço',
          'Afrouxe a roupa no braço e evite medir por cima da manga',
        ],
      },
      {
        id: 'escolher-e-cuidar-do-aparelho',
        heading: 'Escolher e cuidar do aparelho',
        paragraphs: [
          'Dá para medir em casa com segurança, desde que o aparelho seja adequado. Prefira modelos automáticos, de braço, com manguito, e verifique se o produto é validado para uso doméstico. Aparelhos de pulso e de dedo são mais sujeitos a erro e não substituem uma avaliação.',
          'Cuide do equipamento. Confira a calibração conforme as orientações do fabricante, mantenha as pilhas ou a bateria em bom estado e verifique antes de cada uso se a mangueira e o manguito estão bem ligados. Um aparelho descalibrado entrega números que não servem.',
          'Na hora de comprar, procure um modelo confiável em vez do mais barato, e não reaproveite um aparelho antigo da família sem conferir se ele está funcionando bem. Um número errado pode levar a decisões erradas.',
        ],
        bullets: [
          'Aparelho validado, com manguito do tamanho certo para o seu braço',
          'Bateria ou pilhas em bom estado antes de começar',
          'Calibração conferida conforme o fabricante',
        ],
      },
      {
        id: 'quando-e-com-que-frequencia-medir',
        heading: 'Quando e com que frequência medir',
        paragraphs: [
'Não basta medir uma vez. O valor que orienta o tratamento sai da média de várias medições feitas em casa, em dias diferentes, de preferência nos mesmos horários, como o profissional orientar. Essa medição residencial da pressão arterial é chamada de MRPA. Quando a média das medidas feitas em casa chega a 130 por 80 mmHg, o resultado já é considerado alterado e confirma a hipertensão. É por isso que um único número fora do comum, medido em um dia de estresse, não decide nada sozinho.',
          'Para entender como a pressão se comporta ao longo do dia, incluindo o sono, o profissional pode solicitar a MAPA, uma monitorização de 24 horas. Na MAPA, a média também é o que conta: a alteração aparece a partir de 130 por 80 mmHg nas 24 horas, 135 por 85 mmHg na vigília e 120 por 70 mmHg durante o sono.',
          'Combine com o profissional quantos dias e em quais horários medir, e registre tudo em uma caderneta. O acompanhamento pede várias medidas ao longo dos dias, e não um único registro isolado.',
        ],
      },
      {
        id: 'erros-comuns',
        heading: 'Erros comuns na medição em casa',
        paragraphs: [
          'Alguns deslizes são tão comuns que dão a impressão de que a pressão subiu do nada. Vale conhecê-los para não cair neles.',
          'Também não é preciso virar escravo do aparelho. Medir a cada hora aumenta a ansiedade e pode até elevar a pressão na hora da medida; siga a orientação do profissional sobre a frequência.',
        ],
        bullets: [
          'Medir por cima da roupa ou com o braço solto no ar',
          'Falar, assistir a vídeos ou mexer no celular durante a medição',
          'Medir logo depois do café, do cigarro ou de subir escadas',
          'Usar um aparelho antigo, descalibrado ou com manguito apertado',
          'Anotar de memória e só se lembrar dos números na consulta',
          'Concluir o diagnóstico sozinho e mexer no remédio por conta própria',
        ],
      },
      {
        id: 'interpretar',
        heading: 'O que fazer com os números',
        paragraphs: [
'O aparelho mede um momento, não define diagnóstico. Anote os valores com data e horário e leve o registro para a consulta. A interpretação e a decisão sobre tratamento são do profissional de saúde. Levar o registro ajuda muito, mas não mude nada por conta própria: não interrompa a medicação, não dobre a dose e não use o remédio de outra pessoa. O ajuste é feito pelo profissional, que pode combinar classes de medicamentos como diuréticos, IECA, BRA, bloqueadores de canal de cálcio e betabloqueadores conforme o caso.',
          'E se a pressão vier muito alta, geralmente a partir de 180 por 120 mmHg, acompanhada de dor de cabeça intensa, dor no peito, falta de ar, visão embaçada, tontura, náusea, confusão, zumbido, sangramento nasal ou arritmia, procure atendimento imediatamente. Dor no peito, falta de ar, alterações na visão, confusão ou fraqueza em um lado do corpo são sinais de emergência: procure o pronto atendimento ou ligue para o SAMU 192.',
          'O tratamento também é gratuito no SUS: os medicamentos de hipertensão são oferecidos nas unidades básicas de saúde e, desde fevereiro de 2025, pelo programa Farmácia Popular. Para retirar, leve um documento de identidade com foto, o CPF e a receita médica dentro do prazo de 120 dias.',
        ],
        cta: {
          label: 'Entenda a hipertensão na página completa',
          href: '/doencas/hipertensao/',
        },
      },
    ],
    diseaseSlugs: ['hipertensao'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['diabetes-tipo-2-o-que-muda-no-dia-a-dia', 'hipertensao-alimentacao-e-sal', 'hipertensao-posso-parar-o-remedio', 'hipertensao-metas-de-pressao', 'hipertensao-perigo-mesmo-sem-sintomas'],
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
    updatedAt: '2026-10-20',
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
          'Na chikungunya, o vírus provoca uma inflamação intensa nas articulações. É isso que faz da dor a marca registrada da doença: ela costuma ser mais forte e mais localizada do que na dengue, e muitas vezes vem acompanhada de inchaço e de rigidez.',
          'As articulações mais atingidas são as das mãos, dos punhos, dos tornozelos e dos pés. Também podem ser afetados joelhos e ombros. Em muitos casos, a dor é intensa o bastante para dificultar movimentos simples, como segurar um objeto, abrir uma porta ou caminhar até a esquina.',
          'O padrão da dor ajuda a reconhecer o quadro. Ela piora com o esforço e tende a ser mais forte pela manhã, quando a pessoa acorda e sente as articulações travadas. Esse comportamento faz parte da inflamação articular e não indica, por si só, que a doença esteja avançando.',
        ],
      },
      {
        id: 'tres-fases',
        heading: 'As três fases da doença',
        paragraphs: [
          'A evolução da chikungunya costuma ser descrita em três fases. Elas não servem só para organizar o calendário da doença: cada fase muda o tipo de cuidado de que a pessoa precisa e ajuda a entender por que a recuperação não é igual para todo mundo.',
          'A febre marca a primeira fase e costuma ceder antes da dor. Isso confunde muita gente, porque dá a impressão de que a doença passou quando o termômetro volta ao normal, enquanto a articulação continua inflamada e dolorida.',
          'Na fase pós-aguda, a febre já foi embora, mas a rigidez costuma incomodar mais do que a dor em si, principalmente pela manhã e depois de períodos parados.',
        ],
        bullets: [
          'Fase aguda (febril): dura de 5 a 14 dias, com febre alta e dor articular intensa',
          'Fase pós-aguda: vai do 15º ao 90º dia; a febre cede, e a dor e a rigidez podem continuar',
          'Fase crônica: ocorre quando os sintomas passam de 90 dias e a dor passa a exigir acompanhamento',
        ],
      },
      {
        id: 'quanto-tempo-dura',
        heading: 'Quanto tempo dura, na prática',
        paragraphs: [
          'A maioria das pessoas melhora em algumas semanas. A fase aguda, com febre e dor mais forte, costuma durar de 5 a 14 dias; depois dela, muitas ainda sentem dor e rigidez, e uma parcela menor convive com sintomas articulares por muito mais tempo.',
          'Em mais da metade dos casos, a dor articular se torna crônica, com duração de meses a anos. A dor que continua depois do primeiro mês, portanto, não é uma exceção nem sinal de que o tratamento deu errado: é a forma como a chikungunya costuma se comportar.',
          'Não é possível prever de antemão quem vai evoluir para a forma prolongada. Idade mais avançada, dor articular prévia e sintomas mais intensos na fase aguda aparecem associados a uma recuperação mais lenta. Como esse risco não dá para medir no início, o acompanhamento com um profissional de saúde vale para todo mundo.',
        ],
      },
      {
        id: 'o-que-ajuda',
        heading: 'O que ajuda na recuperação',
        paragraphs: [
          'Nas primeiras semanas, o cuidado é o mesmo das outras arboviroses: repouso, hidratação e alívio da dor com orientação de um profissional de saúde. Beber líquido ao longo do dia, mesmo sem sede, e escolher alimentos leves ajudam o corpo a se recuperar.',
          'Para a febre e a dor, o profissional pode indicar dipirona ou paracetamol. Enquanto a dengue não for descartada, evite aspirina (ácido acetilsalicílico), ibuprofeno, diclofenaco, nimesulida e outros anti-inflamatórios, porque aumentam o risco de sangramento. Corticoides também não devem ser usados sem indicação médica.',
          'Quando a dor persiste, a fisioterapia costuma fazer parte do tratamento, com exercícios graduais que ajudam a manter o movimento e a força da articulação. O plano é definido caso a caso e pode ser revisto ao longo dos meses, conforme a dor responde ao tratamento.',
        ],
      },
      {
        id: 'o-que-evitar',
        heading: 'O que evitar enquanto a dor não passa',
        paragraphs: [
          'A dor da chikungunya é intensa, o que torna a automedicação tentadora. Vale resistir a ela: como a dengue é transmitida pelo mesmo mosquito e começa de forma parecida, a suspeita de dengue muda o que pode ser usado no alívio da dor.',
          'Se a dor não cede com o que foi prescrito, o caminho é voltar ao serviço de saúde, e não aumentar a dose por conta própria. Somar medicamentos ou usar um remédio que não foi indicado aumenta o risco de efeitos colaterais sem trazer alívio proporcional.',
          'Durante a primeira semana, proteja-se de picadas de mosquito. É o período em que há mais vírus circulando no sangue, e evitar a picada impede que o mosquito que pica você transmita a doença para outras pessoas da casa e da vizinhança.',
        ],
      },
      {
        id: 'quando-o-exame-ajuda',
        heading: 'Quando o exame ajuda a esclarecer',
        paragraphs: [
          'A infecção é confirmada por exame, e o tipo de exame depende do dia da doença. Até o 8º dia do início dos sintomas, pode ser feito o RT-PCR, que detecta o material genético do vírus; a partir do 6º dia, pode ser feita a sorologia para anticorpos IgM. O hemograma pode mostrar alterações leves, como redução de plaquetas e de leucócitos, mas apoia o diagnóstico sem confirmar a doença sozinho.',
          'Quando a pessoa chega ao serviço de saúde já na fase pós-aguda, com a dor articular se arrastando, a confirmação pode ficar mais difícil, porque a janela dos exames passou. Nesse caso, o histórico de sintomas, o local onde a pessoa mora ou viajou e o exame físico pesam mais na avaliação.',
          'Vale lembrar que o cuidado da dor que persiste não depende de um exame novo: ele é conduzido pelo que a pessoa relata e pelo exame físico, com ajustes conforme a resposta.',
        ],
      },
      {
        id: 'quando-voltar',
        heading: 'Quando voltar ao serviço de saúde',
        paragraphs: [
          'Volte ao serviço de saúde se a dor não melhorar, se houver inchaço importante, se a articulação perder movimento ou se os sintomas piorarem depois de um período de melhora.',
          'Alguns sinais pedem avaliação no mesmo dia: vômitos persistentes, dor abdominal forte e contínua, sangramento nas gengivas ou no nariz, manchas roxas na pele, confusão mental, sonolência excessiva ou convulsões, fraqueza ou dificuldade para mover um lado do corpo, falta de ar, dor no peito ou palpitações, urinar muito menos que o habitual e pele ou olhos amarelados.',
          'A melhora da febre nem sempre significa que o quadro está controlado. Os sinais de alerta da dengue são parecidos e vale conhecê-los: [veja os sinais de alerta da dengue](/doencas/dengue/). Se algo mudar para pior, volte para reavaliação, mesmo que a dor pareça igual à do dia anterior.',
        ],
        cta: {
          label: 'Veja a página completa sobre chikungunya',
          href: '/doencas/chikungunya/',
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
    updatedAt: '2026-10-20',
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
          'Dengue e chikungunya são transmitidas pelos mesmos mosquitos, circulam nas mesmas áreas e começam de forma parecida: febre alta de início súbito, dor de cabeça, dor no corpo e mal-estar. Quem mora em uma região com transmissão costuma conhecer alguém que teve uma das duas, e a dúvida sobre qual delas é aparece com frequência.',
          'Por isso, o que diferencia uma da outra raramente é um sintoma isolado. O conjunto de sintomas e a intensidade de cada um é que orientam a suspeita, e mesmo assim a separação nem sempre é possível apenas pelo exame clínico. Não é por falta de conhecimento da equipe: é porque as duas doenças compartilham a maior parte do quadro inicial.',
          'As duas também aparecem na mesma época do ano, nos meses mais quentes e chuvosos, quando a população de mosquitos cresce. Morar ou ter viajado para uma área com transmissão, portanto, não ajuda a escolher entre elas: serve para levantar a suspeita de que se trata de uma arbovirose, e o mesmo cuidado vale para as duas.',
        ],
      },
      {
        id: 'diferencas',
        heading: 'As diferenças que costumam aparecer',
        paragraphs: [
          'Existem diferenças que costumam aparecer e que ajudam a orientar a avaliação. Elas não fecham o diagnóstico sozinhas, mas mudam a prioridade do atendimento e o que se espera do acompanhamento.',
          'As mais úteis envolvem o comportamento da dor nas articulações, a duração da febre e o momento em que as manchas aparecem na pele.',
        ],
        bullets: [
          'A dor articular tende a ser muito intensa e incapacitante na chikungunya; na dengue é frequente, mas menos localizada',
          'O inchaço articular é mais frequente na chikungunya',
          'A febre costuma ser mais curta na chikungunya e mais prolongada na dengue',
          'As manchas na pele podem aparecer nas duas, mas em momentos diferentes do curso da doença',
          'A dor atrás dos olhos é mais característica da dengue',
          'A dor articular da chikungunya pode se prolongar por semanas ou meses, o que é raro na dengue',
        ],
      },
      {
        id: 'o-que-nao-serve',
        heading: 'O que não serve para diferenciar',
        paragraphs: [
          'Sangramento, por si só, não confirma dengue, e a ausência de manchas na pele não descarta nenhuma das duas. Também não ajuda o fato de a pessoa já ter tido uma delas antes: quem teve dengue ainda pode ter chikungunya, e o contrário também vale.',
          'Não é possível diferenciar pelo local onde a pessoa mora ou pela época do ano, já que as duas circulam juntas. O modo como os sintomas começaram também não ajuda: nas duas doenças o início é súbito, e é comum a pessoa não conseguir apontar o momento exato em que se sentiu mal.',
          'Só a avaliação em serviço de saúde, com exame clínico e, quando indicado, exames laboratoriais, permite definir a causa. Os testes têm janela de tempo: na chikungunya, o RT-PCR pode ser feito até o 8º dia de sintomas e a sorologia para IgM a partir do 6º dia; na dengue, os exames também dependem do dia da doença. Por isso, a data em que os sintomas começaram é uma informação que a equipe precisa ouvir na consulta.',
        ],
      },
      {
        id: 'por-que-importa',
        heading: 'Por que a diferença importa',
        paragraphs: [
          'As duas doenças não têm antiviral específico, e o tratamento inicial é parecido: hidratação, repouso e alívio da dor com orientação profissional. A mesma restrição vale para as duas: até que a dengue seja descartada, evite aspirina (ácido acetilsalicílico), ibuprofeno, diclofenaco e outros anti-inflamatórios, porque aumentam o risco de sangramento.',
          'A diferença está no acompanhamento. Na dengue, a atenção se concentra nas primeiras semanas e nos sinais de alerta, que podem aparecer quando a febre cede: [veja os sinais de alerta da dengue](/doencas/dengue/).',
          'A chikungunya pede um acompanhamento mais longo. A dor articular pode se estender por meses, e o acompanhamento costuma envolver fisioterapia, revisão do tratamento e ajustes no ritmo das atividades. Para quem tem uma das duas doenças, o que muda o desfecho é parecido: procurar avaliação cedo e manter o retorno marcado.',
        ],
      },
      {
        id: 'como-se-proteger-das-duas',
        heading: 'Como se proteger das duas',
        paragraphs: [
          'Como o mosquito é o mesmo, as medidas de prevenção também são. Reduzir criadouros e evitar picadas protege contra chikungunya, dengue e zika ao mesmo tempo, e é isso que faz da prevenção um trabalho de rotina, e não uma ação isolada.',
          'Em casa, o trabalho começa pelos reservatórios: manter caixas d’água, tonéis e baldes tampados, não deixar água acumulada em vasos, calhas e ralos, colocar areia nos pratos das plantas, guardar garrafas e pneus virados para baixo ou em local coberto e manter o lixo fechado. Reservar cerca de 10 minutos por semana para vistoriar o quintal é uma recomendação do Ministério da Saúde.',
          'Vale usar repelente com DEET, IR3535 ou icaridina nas áreas expostas do corpo, seguindo as orientações do fabricante, vestir calças e camisas de manga comprida nos horários de maior atividade do mosquito, instalar telas nas janelas e portas e usar mosquiteiro, principalmente para crianças pequenas, pessoas acamadas e idosos. Para a chikungunya há uma vacina registrada no Brasil, mas a aplicação é uma estratégia piloto em municípios selecionados.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer diante da dúvida',
        paragraphs: [
          'Procure uma unidade de saúde para avaliação, informe onde você mora e para onde viajou nos últimos dias e relate todos os sintomas, inclusive a intensidade da dor nas articulações. Não tente diferenciar em casa nem se automedicar.',
          'Se a febre ceder e aparecerem vômitos persistentes, dor abdominal forte, sangramento, sonolência excessiva, falta de ar ou urina muito escassa, procure atendimento de urgência no mesmo dia, sem esperar a consulta marcada.',
          'Levar a lista dos medicamentos que você usa e informar se já teve dengue antes ajuda a equipe a avaliar o caso com mais informações. O mesmo vale para gravidez, doenças crônicas e uso de medicamentos que alteram a coagulação.',
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
    updatedAt: '2026-10-20',
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
          'Para a maior parte das pessoas, o zika é uma infecção leve, que passa sozinha em poucos dias e muitas vezes não provoca sintoma nenhum. É por isso que a doença costuma ser encarada como um problema menor. O cenário muda quando a infecção acontece durante a gestação: o vírus pode atravessar a placenta e atingir o sistema nervoso em formação do bebê, o que pode deixar consequências para toda a vida.',
          'Isso não significa que toda gestante infectada terá um bebê com problemas. A maioria das mulheres infectadas não transmite o vírus ao feto, e estima-se que cerca de 26% das gestantes infectadas transmitam a infecção. Mesmo quando há transmissão, a malformação não acontece em todos os casos, e o risco é maior quando a infecção ocorre no primeiro trimestre, quando o sistema nervoso está se formando.',
          'Por isso, a atenção à infecção na gestação é diferente da que se dá nas outras pessoas. O que, fora da gravidez, seria um quadro leve e passageiro passa a exigir avaliação imediata e um acompanhamento mais próximo, porque as consequências para o bebê podem durar a vida inteira e pedem o apoio de uma equipe multiprofissional ao longo do desenvolvimento.',
        ],
      },
      {
        id: 'sindrome-congenita',
        heading: 'O que a infecção pode causar no bebê',
        paragraphs: [
          'A infecção pelo vírus zika durante a gestação pode passar para o feto em qualquer trimestre, mesmo quando a gestante não tem sintomas. As alterações causadas pela infecção congênita formam um conjunto chamado síndrome congênita do vírus zika, que varia de intensidade de um caso para outro.',
          'Essa síndrome pode incluir microcefalia e alterações do sistema nervoso central, problemas de visão e de audição e dificuldades no desenvolvimento neuropsicomotor. As crianças afetadas podem ter deficiências intelectuais, físicas e sensoriais ao longo da vida e precisam de acompanhamento com uma equipe multiprofissional.',
          'Além da microcefalia, que é a alteração mais conhecida, o acompanhamento busca identificar precocemente outras manifestações, como alterações visuais e auditivas, para que a criança receba estimulação e apoio o quanto antes. O diagnóstico precoce e o seguimento regular fazem diferença no desenvolvimento.',
        ],
      },
      {
        id: 'sintomas-na-gestante',
        heading: 'Sintomas que devem ser avaliados',
        paragraphs: [
          'Os sintomas na gestante são os mesmos das outras pessoas e costumam ser leves: manchas vermelhas na pele com coceira, febre baixa ou ausência de febre, olhos vermelhos sem secreção, dor nas articulações, dor de cabeça e cansaço. Eles aparecem, em geral, de 2 a 7 dias depois da picada do mosquito e também desaparecem em poucos dias, sem tratamento específico.',
          'Como a infecção pode ser silenciosa, a orientação é procurar o serviço de saúde diante de qualquer um desses sinais durante a gestação, mesmo que pareçam banais. Sinais neurológicos, como formigamento, fraqueza nos braços ou nas pernas e alterações na visão, exigem atendimento sem demora, porque podem indicar complicações.',
          'Na consulta, informe ao profissional de saúde que você está grávida e a data em que os sintomas começaram. Essa informação ajuda a definir qual exame é mais adequado e em que momento ele deve ser coletado, porque o tipo de teste depende do dia da doença e da fase da infecção.',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Como é o acompanhamento',
        paragraphs: [
          'A suspeita durante a gestação muda o pré-natal. O serviço de saúde pode indicar exames para investigar a infecção e um acompanhamento mais próximo, com avaliação do desenvolvimento do bebê em exames de imagem, como o ultrassom, para observar o crescimento e o sistema nervoso.',
          'O Ministério da Saúde recomenda que gestantes com suspeita de zika sejam acompanhadas conforme os protocolos de pré-natal, mesmo quando os sintomas são leves. A confirmação depende de exame laboratorial, porque os sintomas se parecem com os da dengue e da chikungunya, e a sorologia pode apresentar reação cruzada com a dengue.',
          'O acompanhamento continua depois do nascimento, com avaliação do desenvolvimento e, quando necessário, encaminhamento para estimulação precoce e outras especialidades. Bebês com suspeita de comprometimento neurológico podem precisar de exames de imagem, como ultrassom, tomografia ou ressonância magnética.',
        ],
      },
      {
        id: 'como-reduzir-o-risco',
        heading: 'Como reduzir o risco',
        paragraphs: [
          'A prevenção começa em casa, com a eliminação dos criadouros do Aedes aegypti. O mosquito se reproduz em água limpa e parada, em qualquer recipiente, por menor que seja, e vive perto das casas; por isso a eliminação precisa ser contínua, não apenas quando aparecem casos na região.',
          'Para a gestante, a proteção individual é decisiva. O repelente é considerado seguro na gravidez quando usado conforme as instruções do fabricante; em crianças menores de 2 anos, ele só deve ser usado com orientação médica. Nos horários de maior atividade do mosquito, como o amanhecer e o fim da tarde, o cuidado deve ser redobrado.',
        ],
        bullets: [
          'Evitar viajar para áreas com transmissão de zika durante a gestação e conversar antes com o serviço de saúde',
          'Usar repelente nas áreas expostas do corpo, seguindo a orientação do fabricante',
          'Preferir roupas que cubram braços e pernas',
          'Instalar telas em janelas e portas e usar mosquiteiro para dormir',
          'Usar preservativo nas relações sexuais durante toda a gestação, já que o zika também é transmitido por via sexual',
          'Eliminar criadouros de mosquito em casa e nos arredores',
        ],
      },
      {
        id: 'parceiros',
        heading: 'O que vale para o parceiro também',
        paragraphs: [
          'Como o zika também é transmitido por via sexual, o cuidado não é só da gestante. O vírus pode permanecer no sêmen por semanas depois do início dos sintomas, e essa via de transmissão não existe na dengue nem na chikungunya, o que torna o zika diferente das outras arboviroses.',
          'Por isso, o uso de preservativo durante toda a gestação é recomendado, especialmente quando há suspeita ou confirmação de zika no parceiro. A relação protegida reduz o risco de uma infecção que poderia atingir o bebê em qualquer fase da gravidez.',
          'A orientação também vale para quem está planejando engravidar. Conversar com o serviço de saúde antes de engravidar e manter a proteção durante a gestação ajudam a reduzir o risco de infecção justamente no período em que o impacto sobre o bebê é maior.',
        ],
        cta: {
          label: 'Veja as medidas de proteção na página sobre zika',
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
    updatedAt: '2026-10-20',
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
          'Não há vacina disponível contra o zika, e não existe antiviral específico para o vírus. Isso significa que evitar a picada do mosquito é a base de toda a prevenção, e que as medidas precisam ser mantidas enquanto houver transmissão na região, mesmo em períodos com poucos casos registrados.',
          'O Aedes aegypti tem hábitos diurnos, com maior atividade no início da manhã e no fim da tarde. Ele se reproduz em água limpa e parada, em qualquer recipiente, por menor que seja, e vive muito perto das casas. É esse comportamento que explica por que a doença se espalha com tanta facilidade nas cidades.',
          'Como o mesmo mosquito transmite dengue, chikungunya e zika, tudo o que reduz a população de Aedes aegypti ajuda a proteger contra as três doenças ao mesmo tempo. Por isso, as ações feitas em casa e na vizinhança têm um efeito coletivo, e não apenas individual.',
        ],
      },
      {
        id: 'criadouros',
        heading: 'Criadouros que costumam passar despercebidos',
        paragraphs: [
          'O mosquito se cria em pequenos volumes de água, e é justamente por isso que os focos mais comuns passam despercebidos na rotina. Pratinhos de vasos, calhas entupidas, ralos pouco usados e objetos deixados no quintal acumulam água suficiente para a reprodução.',
          'A eliminação precisa ser feita toda semana, porque o ciclo de desenvolvimento do mosquito é curto. Tampar os reservatórios, virar os recipientes para baixo e limpar tudo o que acumula água são medidas simples capazes de interromper a reprodução.',
          'Alguns pontos exigem atenção redobrada, porque acumulam água mesmo em períodos mais secos: caixas d’água e cisternas mal fechadas, calhas entupidas e qualquer recipiente deixado no quintal. Em imóveis fechados ou abandonados, os focos podem passar meses sem ser notados e se tornar uma fonte de mosquitos para toda a vizinhança.',
        ],
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
        paragraphs: [
          'Enquanto houver mosquito circulando, a proteção individual reduz o risco de picada. Roupas que cubram braços e pernas nos horários de maior atividade, telas nas janelas e mosquiteiro para dormir são barreiras simples e eficazes.',
          'Essas medidas se somam umas às outras. Nenhuma delas, isolada, é suficiente em áreas com transmissão intensa, por isso o ideal é combiná-las no dia a dia e manter os cuidados ao longo de todo o dia, já que o mosquito também pica fora do período da noite.',
          'Telas e mosquiteiro protegem sobretudo quem passa mais tempo em casa, como gestantes, crianças pequenas e pessoas que dormem durante o dia. Em viagens para áreas com transmissão, vale levar o repelente e usar roupas adequadas desde o primeiro dia, sem esperar o aparecimento de casos na região.',
        ],
        bullets: [
          'Usar repelente nas áreas expostas da pele, seguindo a orientação do fabricante',
          'Preferir roupas que cubram braços e pernas nos horários de maior atividade do mosquito',
          'Instalar telas em janelas e portas',
          'Dormir com mosquiteiro em áreas com transmissão intensa',
        ],
      },
      {
        id: 'repelente-como-usar',
        heading: 'Como usar o repelente',
        paragraphs: [
          'O repelente é uma das medidas mais eficazes para quem vive ou viaja em áreas com transmissão. Os produtos à base de DEET, IR3535 ou icaridina são os mais usados, e devem ser aplicados apenas nas áreas expostas do corpo, seguindo as orientações do fabricante.',
          'Em gestantes, o repelente é considerado seguro quando usado conforme as instruções do fabricante. Em crianças menores de 2 anos, ele só deve ser usado com orientação médica. Reaplique o produto conforme o tempo de proteção indicado na embalagem, principalmente depois de suar ou de entrar na água.',
          'O repelente não substitui as outras medidas. Ele deve ser combinado com roupas que cubram o corpo, telas nas janelas e a eliminação dos criadouros, porque nenhuma medida isolada dá conta sozinha em áreas com transmissão intensa. A proteção funciona melhor quando as ações são mantidas de forma contínua, junto com a vizinhança.',
        ],
      },
      {
        id: 'transmissao-sexual',
        heading: 'A via sexual também conta',
        paragraphs: [
          'Ao contrário da dengue e da chikungunya, o zika também pode ser transmitido por via sexual. O vírus pode permanecer no sêmen por semanas depois do início dos sintomas, e essa é uma via de transmissão que não existe nas outras duas arboviroses.',
          'O uso de preservativo é parte da prevenção, principalmente para gestantes e para quem pode engravidar. Durante a gestação, a recomendação é manter relações protegidas ao longo de todo o período quando houver suspeita ou confirmação de zika no parceiro.',
          'A orientação vale também para quem está planejando engravidar. Conversar antes com o serviço de saúde e manter a proteção ajudam a reduzir o risco de uma infecção que poderia afetar o bebê justamente no início da gravidez.',
        ],
      },
      {
        id: 'o-que-nao-funciona',
        heading: 'O que não substitui a prevenção',
        paragraphs: [
          'Vitaminas, chás e soluções caseiras não previnem a infecção, e não há remédio que substitua o controle do mosquito. Nenhuma medicação disponível elimina o vírus do corpo, por isso o foco precisa estar em evitar a picada, e não em tratar a infecção depois que ela acontece.',
          'O controle do mosquito exige eliminar criadouros toda semana, não apenas quando aparecem casos na região. Como o Aedes aegypti se reproduz perto das casas, a participação de toda a vizinhança faz diferença no resultado e ajuda a reduzir a circulação do vírus.',
          'Se você tem dúvidas sobre repelentes, telas ou sobre o risco de uma área específica, procure a Unidade Básica de Saúde da sua região. A equipe pode orientar sobre as medidas mais adequadas para a sua situação e para o seu bairro.',
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
    updatedAt: '2026-10-20',
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
          'Os primeiros sintomas da malária costumam aparecer entre 10 e 15 dias depois da picada do mosquito, embora esse intervalo possa variar de pessoa para pessoa. No começo, a doença se parece com uma gripe ou com outras febres comuns: febre, dor de cabeça, dores no corpo e cansaço.',
          'Com o passar dos dias, entram os sinais que mais chamam atenção na malária. A febre vem acompanhada de calafrios e tremores, seguidos de suor intenso. Náusea, vômito, perda de apetite e fraqueza também são frequentes, e a pele pode ficar pálida ou amarelada em alguns casos.',
          'Em crianças, a febre pode ser o primeiro sinal e, por algum tempo, o único, o que torna a suspeita mais difícil. Em qualquer idade, o conjunto febre e mal-estar em alguém que mora ou esteve na região amazônica já é motivo para investigar.',
        ],
      },
      {
        id: 'o-ciclo-da-febre',
        heading: 'O ciclo da febre que se repete',
        paragraphs: [
          'Em parte dos casos, os sintomas se organizam em crises que se repetem, chamadas de acessos maláricos. A crise começa com frio intenso e tremores, que duram de alguns minutos a uma hora. Depois vem a fase de calor, com febre alta que pode passar de 40 °C e durar algumas horas. Por fim, vem o suor intenso, quando a temperatura cai e a pessoa fica exausta.',
          'Nas formas típicas, essas crises se repetem a cada 48 horas na malária por Plasmodium vivax ou a cada 72 horas na malária por P. malariae. Na infecção por P. falciparum, o padrão costuma ser irregular.',
          'Por isso, não dá para confirmar a malária contando o intervalo das febres. O ciclo ajuda a levantar a suspeita, mas a confirmação depende do exame de sangue.',
        ],
      },
      {
        id: 'regra-de-ouro',
        heading: 'A regra de ouro: febre em área de transmissão',
        paragraphs: [
          'Em regiões com transmissão de malária, qualquer episódio de febre deve ser investigado no mesmo dia. O exame é simples, feito por gota espessa ou teste rápido, e está disponível gratuitamente no SUS.',
          'O motivo da urgência é prático. Quanto antes o parasita é identificado e o tratamento começa, menor é o risco de a doença evoluir para a forma grave, que pode se instalar em poucas horas.',
          'Esperar a febre passar por conta própria é o erro que mais custa. Também não vale tomar remédio para baixar a febre e adiar a consulta: aliviar o sintoma não trata a infecção nem substitui o exame.',
        ],
      },
      {
        id: 'sinais-de-gravidade',
        heading: 'Sinais de gravidade',
        paragraphs: [
          'Alguns sinais indicam que a doença evoluiu para a forma grave. Nesses casos, é uma emergência: procure atendimento imediato, sem esperar.',
          'A malária grave é mais comum na infecção por P. falciparum, mas pode ocorrer em qualquer tipo. Ela pode surgir em poucas horas, mesmo depois de sintomas que pareciam leves.',
        ],
        bullets: [
          'Confusão mental, sonolência excessiva ou dificuldade para acordar',
          'Convulsões',
          'Dificuldade para respirar',
          'Urina escura ou avermelhada',
          'Pele e olhos amarelados',
          'Sangramentos',
          'Vômitos persistentes que impedem a hidratação',
          'Fraqueza extrema',
        ],
      },
      {
        id: 'por-que-nao-esperar',
        heading: 'Por que não dá para esperar',
        paragraphs: [
          'A malária causada por Plasmodium falciparum é a que mais preocupa, porque pode evoluir de forma rápida. Em poucos dias, a infecção pode comprometer órgãos e levar a complicações graves.',
          'O tempo é o fator que mais pesa no desfecho. Reconhecer a doença cedo e iniciar o tratamento certo muda o prognóstico, e o tratamento está disponível de graça na rede pública.',
          'Quanto mais o parasita se multiplica no sangue, mais lenta costuma ser a recuperação, mesmo com o tratamento correto. Nas formas graves, a doença pode atingir o cérebro, os rins e o fígado, e esses casos exigem internação.',
        ],
      },
      {
        id: 'quem-precisa-de-atencao-extra',
        heading: 'Quem precisa de atenção extra',
        paragraphs: [
          'Algumas pessoas têm mais risco de evoluir para a forma grave da malária. Entre elas estão as crianças, principalmente as menores de 5 anos, as gestantes, as pessoas com a imunidade comprometida, como quem tem HIV ou aids, e quem está infectado pela primeira vez.',
          'Nesses grupos, os sinais de piora podem aparecer mais rápido, por isso a recomendação é procurar atendimento ao primeiro sinal de febre, sem esperar. Em gestantes, a malária pode causar parto prematuro e baixo peso ao nascer, o que exige acompanhamento cuidadoso.',
          'Quem mora ou viaja para a região amazônica está mais exposto ao mosquito. Já as pessoas que nunca tiveram malária, ou que chegaram há pouco tempo a uma área de transmissão, têm menos proteção e adoecem com mais facilidade.',
        ],
      },
      {
        id: 'como-o-diagnostico-e-feito',
        heading: 'Como o diagnóstico é feito',
        paragraphs: [
          'O diagnóstico começa com a avaliação médica e é confirmado por um exame que procura o parasita no sangue. O exame de referência no Brasil é a gota espessa, uma gota de sangue analisada no microscópio.',
          'A gota espessa identifica o parasita e também a espécie, e é a espécie que define qual tratamento será usado. Em áreas de difícil acesso, usam-se ainda testes rápidos, que dão resultado em cerca de 15 minutos.',
          'Os dois exames estão disponíveis gratuitamente no SUS, e todo caso suspeito deve ser investigado. A quantidade de parasitas no sangue varia com o tempo, por isso o médico pode repetir o exame ao longo de alguns dias quando o primeiro resultado é negativo e a suspeita continua.',
        ],
      },
      {
        id: 'tratamento-e-seguimento',
        heading: 'Tratamento e seguimento',
        paragraphs: [
          'O tratamento é gratuito no SUS e depende da espécie do parasita, além do peso, da idade e do fato de a pessoa estar grávida. Por isso, a escolha do medicamento só deve ser feita por um profissional de saúde.',
          'Tomar o remédio exatamente pelo tempo indicado é essencial. Interromper antes do fim permite que o parasita volte a se multiplicar, favorece as recaídas e contribui para a resistência aos medicamentos.',
          'Depois do tratamento, os sintomas costumam melhorar em poucos dias quando a recuperação corre como esperado. Voltar à consulta continua importante, e qualquer nova febre nas semanas seguintes deve ser informada à equipe de saúde.',
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
    updatedAt: '2026-10-20',
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
          'No Brasil, a transmissão de malária se concentra na Amazônia Legal, a região que reúne a maior parte dos casos do país. Dentro dela, o risco é maior em áreas de floresta, de garimpo, de assentamento e nas proximidades de rios, igarapés e represas, sobretudo onde há água limpa e sombra.',
          'O mosquito Anopheles, conhecido no Brasil como mosquito-prego, carapanã ou muriçoca, pica principalmente do entardecer até a noite. Ele costuma atacar tanto dentro quanto ao redor das casas, e se reproduz em água limpa, o que explica por que as medidas de proteção se concentram nesse período e nesses ambientes.',
          'Viajar para essas áreas não significa que a doença é inevitável, inclusive em viagens curtas. Com as medidas certas, adotadas de forma consistente durante toda a estadia, o risco de infecção cai bastante, tanto para moradores quanto para visitantes.',
        ],
      },
      {
        id: 'antes-da-viagem',
        heading: 'Antes de viajar',
        paragraphs: [
          'Quem vai viajar para a região amazônica deve procurar um serviço de saúde ou um centro de referência em medicina de viagem algumas semanas antes da partida. Esse contato é o momento de alinhar as medidas de proteção e de esclarecer dúvidas, por isso não deixe para a véspera: algumas medidas precisam de tempo para serem organizadas.',
          'Informe o roteiro, o tempo de permanência e o tipo de hospedagem, porque esses detalhes mudam a avaliação do risco. Em alguns casos, o médico pode indicar um medicamento para prevenir a infecção durante a estadia, o que só deve ser feito com orientação profissional.',
          'Também vale calcular quanto repelente será necessário para todo o período e levar quantidade suficiente, porque o produto pode ser difícil de encontrar em áreas remotas. Levar um estoque extra é uma precaução simples e útil.',
        ],
      },
      {
        id: 'durante-a-viagem',
        heading: 'Durante a viagem',
        paragraphs: [
          'Durante a estadia, evitar a picada do mosquito é a medida central. Como o mosquito ataca com mais intensidade do entardecer até a noite, é nesse intervalo que os cuidados precisam ser maiores.',
          'A proteção para dormir merece reforço. Use mosquiteiro, de preferência impregnado com inseticida, verifique se não há buracos e mantenha telas em portas e janelas quando houver. Espirais e vaporizadores ajudam nos horários de maior atividade do mosquito.',
          'O repelente deve ser indicado por um profissional de saúde e reaplicado conforme a orientação do fabricante, sobretudo depois de suar, de tomar banho ou de passar muito tempo na água. Guarde o frasco ao alcance durante o dia, para não esquecer a reaplicação.',
        ],
        bullets: [
          'Dormir sob mosquiteiro impregnado com inseticida',
          'Usar telas em janelas e portas, quando disponíveis',
          'Aplicar repelente nas áreas expostas do corpo, reaplicando conforme a orientação do fabricante',
          'Vestir roupas de manga longa e calça nos horários de maior atividade do mosquito',
          'Evitar permanecer ao ar livre ao entardecer e à noite em áreas de transmissão',
        ],
      },
      {
        id: 'viagem-com-criancas-e-gestantes',
        heading: 'Viagem com crianças e gestantes',
        paragraphs: [
          'Alguns viajantes precisam de cuidados extras. Crianças, principalmente as menores de 5 anos, e gestantes têm mais risco de evoluir para a forma grave da malária. Por isso, esses grupos devem reforçar a proteção contra a picada do mosquito e procurar atendimento ao primeiro sinal de febre.',
          'Em gestantes, a malária pode causar parto prematuro e baixo peso ao nascer, o que torna o acompanhamento antes e depois da viagem ainda mais importante. Na dúvida sobre repelentes e outros produtos, converse com um profissional de saúde, porque algumas recomendações mudam nessa fase da vida.',
          'Quem nunca teve malária também adoece com mais facilidade, porque ainda não tem a proteção adquirida em exposições anteriores. O mesmo vale para quem mora ou viaja para a região amazônica e fica mais exposto ao mosquito, uma atenção que quem visita a área pela primeira vez não deve deixar de lado.',
        ],
      },
      {
        id: 'protecao-coletiva',
        heading: 'Proteção coletiva nas áreas de risco',
        paragraphs: [
          'A prevenção da malária não depende só do cuidado individual. Nas áreas de transmissão, ela também envolve ações coletivas feitas pelas equipes de saúde, que reduzem a quantidade de mosquitos em toda a comunidade. Quem viaja também se beneficia dessas ações.',
          'Essas ações incluem a borrifação residual nas casas, a distribuição de mosquiteiros impregnados com inseticida e a drenagem de criadouros. Quando são mantidas de forma contínua, elas diminuem a transmissão na região.',
          'Quando a equipe de saúde orientar alguma medida na comunidade, seguir a recomendação ajuda a proteger toda a vizinhança, e não apenas quem recebe a orientação.',
        ],
      },
      {
        id: 'depois-da-viagem',
        heading: 'Depois de voltar',
        paragraphs: [
          'A malária pode se manifestar semanas depois do retorno. Por isso, se aparecer febre nas semanas e meses seguintes a uma viagem para área de transmissão, procure atendimento e informe a viagem recente, mesmo que os sintomas pareçam leves.',
          'Essa informação muda a investigação: sabendo onde a pessoa esteve, o profissional de saúde consegue suspeitar de malária e pedir o exame certo, que é gratuito no SUS e está disponível na maioria dos serviços de saúde.',
          'Não espere a febre passar sozinha nem tente tratamento caseiro. Quanto mais cedo a doença é identificada, menor é o risco de a infecção evoluir para uma forma grave.',
        ],
      },
      {
        id: 'o-que-nao-funciona',
        heading: 'O que não funciona',
        paragraphs: [
          'Vitaminas, chás e repelentes caseiros não substituem as medidas de proteção. Não há comprovação de que essas práticas afastem o mosquito ou impeçam a infecção, por isso não devem ser tratadas como alternativa.',
          'Também não existe vacina contra a malária disponível para uso rotineiro no Brasil. As vacinas recomendadas pela Organização Mundial da Saúde são usadas em crianças de países africanos, onde a transmissão por P. falciparum é muito alta, e não fazem parte do calendário brasileiro.',
          'A prevenção depende, portanto, de evitar a picada do mosquito, com mosquiteiro, repelente, roupas adequadas e as ações coletivas de controle. Nenhuma medida isolada resolve tudo: o ideal é combinar várias formas de proteção.',
        ],
        cta: {
          label: 'Veja os sintomas na página sobre malária',
          href: '/doencas/malaria/',
        },
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
    updatedAt: '2026-10-20',
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
          'Tosse por três semanas ou mais é o critério que a saúde pública usa para indicar a investigação de tuberculose. Não é um número arbitrário: é o ponto em que tosses por causas banais, como resfriados e viroses, já deveriam ter passado.',
          'Vale para tosse com catarro e também para tosse seca, e vale mesmo sem outros sintomas. O que muda a suspeita é a duração, não a intensidade. Uma tosse leve, mas que se arrasta por semanas, é mais preocupante do que uma tosse forte que desaparece em poucos dias.',
          'Por isso, quem tem tosse por três semanas ou mais deve procurar uma unidade de saúde para fazer os exames do escarro. Em grupos mais vulneráveis, como pessoas que vivem com HIV e aids e quem convive com um caso confirmado, a investigação pode começar mesmo com menos tempo de tosse.',
        ],
      },
      {
        id: 'sinais-que-acompanham',
        heading: 'Sinais que costumam acompanhar',
        paragraphs: [
          'A tosse raramente vem sozinha. Febre baixa, muitas vezes no fim da tarde, suor noturno que chega a molhar a roupa, perda de peso sem causa aparente, cansaço e falta de apetite são comuns e costumam se instalar aos poucos, ao longo de semanas.',
          'Sangue no catarro aparece em alguns casos e merece avaliação rápida. Nenhum desses sinais confirma a doença por si só, mas, somados à tosse prolongada, reforçam a necessidade de investigação.',
        ],
        bullets: [
          'Febre baixa, muitas vezes no fim da tarde',
          'Suor noturno, às vezes com necessidade de trocar de roupa',
          'Perda de peso sem causa aparente',
          'Cansaço e falta de apetite',
          'Sangue no catarro',
        ],
      },
      {
        id: 'como-a-tuberculose-se-transmite',
        heading: 'Como a tuberculose se transmite',
        paragraphs: [
          'A tuberculose se transmite pelo ar, e não pelo contato com objetos. Quando uma pessoa com a forma pulmonar ativa, sem tratamento, tosse, fala ou espirra, ela lança no ambiente partículas muito pequenas, que podem ficar suspensas por horas. Quem respira essas partículas pode se infectar.',
          'Por isso, o risco é maior em ambientes fechados e pouco ventilados, onde as partículas se acumulam. O compartilhamento de roupas, lençóis, copos e talheres não tem papel importante na transmissão, porque o bacilo que se deposita nesses itens dificilmente se espalha pelo ar.',
          'Em uma comunidade, calcula-se que uma pessoa doente sem tratamento consiga infectar, em média, de 10 a 15 pessoas ao longo de um ano. Isso mostra por que tratar cedo protege não apenas o paciente, mas toda a casa.',
        ],
      },
      {
        id: 'quem-deve-investigar-mais-cedo',
        heading: 'Quem deve investigar mais cedo',
        paragraphs: [
          'Alguns grupos adoecem mais e devem ser avaliados mesmo com menos tempo de tosse. Segundo o Ministério da Saúde, o risco de ter tuberculose é muito maior entre pessoas em situação de rua, pessoas privadas de liberdade e pessoas que vivem com HIV e aids.',
          'Também merecem atenção crianças pequenas, imigrantes, populações indígenas e quem convive com um caso confirmado, além de pessoas com diabetes ou que usam medicamentos que baixam a imunidade.',
          'Nesses grupos, a avaliação de quem mora junto e a busca ativa pelos serviços de saúde ajudam a encontrar a doença cedo, quando o tratamento é mais simples e a transmissão pode ser interrompida antes.',
        ],
      },
      {
        id: 'como-e-a-investigacao',
        heading: 'Como é a investigação',
        paragraphs: [
          'A investigação começa na unidade básica de saúde e inclui exames do escarro, como a baciloscopia e o teste rápido molecular, além da radiografia de tórax quando indicada. Tudo é gratuito no SUS.',
          'O teste rápido molecular é o exame inicial do escarro e dá o resultado em pouco tempo. Quando é preciso definir melhor o tratamento, a cultura e o teste de sensibilidade mostram se a bactéria é resistente a algum medicamento.',
          'Se houver um caso confirmado, também são avaliadas as pessoas que convivem com o paciente, porque a transmissão acontece pelo ar em ambientes fechados. Encontrar e tratar esses contatos é uma das formas de interromper a cadeia de transmissão.',
        ],
        cta: {
          label: 'Veja a página completa sobre tuberculose',
          href: '/doencas/tuberculose/',
        },
      },
      {
        id: 'o-que-esperar-do-atendimento',
        heading: 'O que esperar do atendimento',
        paragraphs: [
          'Ao chegar à unidade de saúde com tosse prolongada, você passará por uma avaliação clínica e por exames do escarro, que são coletados no próprio serviço e não causam dor. Em geral, o resultado do teste rápido molecular sai em pouco tempo, e a radiografia de tórax pode ser solicitada como apoio.',
          'No Brasil, a tuberculose é uma doença de notificação compulsória: todo caso confirmado é registrado pelo serviço de saúde no sistema de vigilância. Isso não substitui o sigilo do seu atendimento e serve para acompanhar a doença no país e planejar as ações de saúde pública.',
          'Se o resultado confirmar a doença, o tratamento começa o quanto antes e é gratuito no SUS. Também são avaliadas as pessoas que convivem com você, porque a transmissão acontece pelo ar em ambientes fechados.',
        ],
      },
      {
        id: 'o-que-nao-e',
        heading: 'O que não é sinal de tuberculose',
        paragraphs: [
          'Tosse que dura poucos dias, geralmente ligada a resfriados e viroses, não indica tuberculose. Espirros e coriza também não são sintomas típicos. O que muda a suspeita é a duração.',
          'Nem toda tosse prolongada é tuberculose. Pneumonia, bronquite e até câncer de pulmão podem causar tosse por semanas, e por isso o exame do escarro é o que esclarece o diagnóstico, evitando que a doença seja tratada como outra infecção ou que outra doença passe despercebida.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer',
        paragraphs: [
          'Procure a unidade de saúde mais próxima, informe há quanto tempo a tosse começou e relate os outros sintomas. Leve também informações sobre contato com alguém com tuberculose, se houver. A consulta é gratuita e sigilosa.',
          'O diagnóstico precoce protege você e interrompe a transmissão para quem convive com você. O tratamento é gratuito no SUS e cura a doença quando é seguido até o fim. Adiar a consulta é o que costuma tornar o quadro mais grave. Em caso de dúvida, procure orientação mesmo que os sintomas pareçam leves: tirar a dúvida cedo é sempre melhor do que esperar.',
        ],
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
    updatedAt: '2026-10-20',
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
          'O esquema básico reúne quatro medicamentos: rifampicina, isoniazida, pirazinamida e etambutol. Nos dois primeiros meses, os quatro são usados em conjunto, na chamada fase intensiva. Nos quatro meses seguintes, geralmente permanecem a rifampicina e a isoniazida, na fase de manutenção.',
          'Em alguns casos de crianças com a forma sensível e sem gravidade, é possível usar um esquema mais curto, de quatro meses. Em muitos serviços, os comprimidos vêm combinados em uma única apresentação, o que ajuda a tomar a dose certa todos os dias. O tratamento é gratuito e está disponível exclusivamente no SUS.',
        ],
      },
      {
        id: 'por-que-nao-interromper',
        heading: 'Por que não interromper',
        paragraphs: [
          'A interrupção antes do fim é a principal causa de recaída e de resistência. Quando a bactéria se torna resistente, o tratamento passa a ser muito mais longo, mais complexo e com mais efeitos indesejados.',
          'A sensação de melhora nas primeiras semanas é esperada e não significa que a doença acabou. Ela também não significa que a pessoa já pode parar: tomar os remédios de forma irregular é justamente o que favorece o aparecimento da resistência.',
          'Por isso, seguir os horários e tomar os remédios todos os dias, até o fim do prazo combinado com a equipe, é tão importante quanto o tipo de medicamento usado. Quando surgir qualquer dificuldade para manter o tratamento, converse com a equipe antes de mudar nada por conta própria.',
        ],
      },
      {
        id: 'transmissao-cai-rapido',
        heading: 'A transmissão cai rápido',
        paragraphs: [
          'Nas primeiras semanas de tratamento, a transmissão cai muito. Em geral, após cerca de 15 dias o risco de passar a doença para outra pessoa já é bem menor, e isso protege quem convive com o paciente.',
          'Mesmo assim, até o exame do catarro dar negativo, vale manter a etiqueta da tosse, cobrindo a boca com o antebraço ou um lenço, e deixar os ambientes ventilados e com luz do sol. O bacilo é sensível à luz solar, e a circulação de ar ajuda a dispersar as partículas.',
        ],
      },
      {
        id: 'efeitos-e-apoio',
        heading: 'Efeitos do tratamento e apoio',
        paragraphs: [
          'É esperada uma cor alaranjada na urina, no suor e nas lágrimas por causa da rifampicina. Isso é normal e não é perigoso, e desaparece depois que o tratamento termina.',
          'Outros efeitos merecem aviso imediato à equipe: pele ou olhos amarelados, urina escura, náusea, vômitos ou dor na barriga podem indicar inflamação no fígado. Alguns medicamentos também interagem com outros remédios, e os anticoncepcionais, por exemplo, podem ter a eficácia reduzida; por isso conte ao profissional tudo o que você usa. Evite bebidas alcoólicas durante o tratamento, porque o álcool aumenta o risco de dano ao fígado.',
          'Nunca pare os remédios por conta própria. O apoio da equipe e da família ajuda a manter o tratamento até o fim, e faz parte do cuidado tanto quanto o medicamento.',
        ],
      },
      {
        id: 'acompanhamento-e-tratamento-observado',
        heading: 'Acompanhamento e tratamento diretamente observado',
        paragraphs: [
          'O tratamento é acompanhado por consultas regulares na unidade de saúde e por exames de controle do catarro, que mostram se a bactéria continua sendo eliminada.',
          'Uma das principais estratégias de apoio é o tratamento diretamente observado (TDO). Nele, a pessoa toma o medicamento na presença de um profissional de saúde ou de outro profissional capacitado, na unidade de saúde ou até na própria residência.',
          'Desde 2023, a observação também pode ser feita por meios digitais, como vídeo, foto, chamada de voz ou mensagem com a confirmação da tomada do remédio. O TDO deve acontecer, de preferência, todos os dias úteis da semana, no local e no horário combinados com o serviço de saúde.',
        ],
        cta: {
          label: 'Veja a página completa sobre tuberculose',
          href: '/doencas/tuberculose/',
        },
      },
      {
        id: 'o-que-muda-na-rotina',
        heading: 'O que muda na rotina',
        paragraphs: [
          'Durante o tratamento, alguns ajustes na rotina ajudam a proteger quem convive com o paciente. Nas primeiras semanas, reduza o contato próximo, deixe as janelas abertas e use máscara ao dividir espaços fechados; dormir em um quarto separado, quando for possível, também ajuda.',
          'Vale evitar o cigarro, que prejudica a recuperação dos pulmões, e as bebidas alcoólicas, que aumentam o risco de dano ao fígado durante o tratamento. Procure manter uma alimentação adequada e descansar o suficiente.',
          'Depois que o exame do catarro indica que não há mais transmissão, a rotina de convivência pode voltar ao normal. Até lá, seguir os horários dos remédios todos os dias é o que garante o melhor resultado.',
        ],
      },
      {
        id: 'tuberculose-tem-cura',
        heading: 'A tuberculose tem cura',
        paragraphs: [
          'Com o tratamento correto até o fim, a maioria das pessoas se recupera bem e volta à rotina normal. A cura é a regra, e não a exceção.',
          'Quando a doença não é tratada ou o tratamento é irregular, podem ocorrer complicações, como danos ao pulmão, sangramento e acúmulo de ar na cavidade torácica. Nas formas graves, a doença pode atingir as membranas que envolvem o cérebro, e, entre pessoas que vivem com HIV e aids, é uma das principais causas de morte por doença infecciosa.',
          'Depois da cura, é possível ter tuberculose de novo. Por isso, quem já teve a doença e volta a apresentar tosse por três semanas ou mais deve procurar avaliação. Cuidar dos contatos e da própria saúde ajuda a interromper esse ciclo.',
        ],
      },
      {
        id: 'infeccao-latente',
        heading: 'E a infecção latente?',
        paragraphs: [
          'Quem foi infectado sem adoecer pode ter a chamada infecção latente, sem sintomas e sem transmissão. Nem toda pessoa infectada adoece, mas o risco maior de adoecer se concentra nos dois primeiros anos após a infecção.',
          'Nesses casos, o serviço de saúde avalia se há indicação de tratamento preventivo, sobretudo em pessoas com maior risco, como quem mora com um caso confirmado, crianças e pessoas que vivem com HIV e aids. Diagnosticar e tratar a infecção latente é uma das principais formas de evitar a doença.',
        ],
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
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },
  {
    id: 'hiv-o-que-fazer-nas-primeiras-72-horas',
    slug: 'hiv-o-que-fazer-nas-primeiras-72-horas',
    metaTitle: 'HIV: o que fazer nas primeiras 72 horas',
    title: 'HIV: o que fazer nas primeiras 72 horas após uma situação de risco',
    excerpt:
      'Depois de uma situação de risco, existe uma medida de prevenção que precisa começar em até 72 horas. Quanto mais cedo, maior a chance de funcionar.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'o-que-e-a-pep',
        heading: 'O que é a profilaxia pós-exposição',
        paragraphs: [
          'A profilaxia pós-exposição, conhecida como PEP, é o uso de medicamentos antirretrovirais por pessoas que passaram por uma situação de risco de infecção pelo HIV. O objetivo é impedir que o vírus se estabeleça no organismo e que a infecção se confirme. A PEP não é um tratamento comum nem uma escolha isolada: é uma medida de urgência, indicada após avaliação em um serviço de saúde.',
          'A PEP é diferente do tratamento de quem já vive com HIV. O tratamento é contínuo e serve para manter o vírus sob controle ao longo de toda a vida; a PEP, por sua vez, é tomada por tempo determinado, logo depois de uma exposição, para evitar que a infecção aconteça. Ela é indicada somente após uma avaliação profissional, que pesa o tipo de exposição e o tempo decorrido desde o contato.',
          'Há ainda a PrEP, a profilaxia pré-exposição, usada antes do contato por quem tem risco maior de exposição, de forma contínua ou sob demanda. PrEP e PEP partem da mesma ideia, impedir que o vírus encontre espaço para se multiplicar, mas se aplicam em momentos diferentes: uma antes da exposição, a outra depois dela. Vale conhecer as duas para usar cada uma na hora certa.',
        ],
      },
      {
        id: 'janela-de-72-horas',
        heading: 'A janela de 72 horas',
        paragraphs: [
          'A PEP precisa ser iniciada o quanto antes, em até 72 horas depois da exposição. Passado esse prazo, ela deixa de ser indicada, porque a chance de funcionar cai muito.',
          'O tempo é decisivo porque os medicamentos agem bloqueando a multiplicação do vírus nos primeiros momentos após a entrada no corpo. Quanto mais cedo o tratamento começa, maior a probabilidade de o vírus ser contido antes de se espalhar. Por isso, se a exposição aconteceu há poucas horas, não há motivo para esperar: procure o serviço de saúde imediatamente, inclusive à noite ou nos fins de semana.',
          'Depois de iniciada, a PEP deve ser mantida por todo o período indicado pela equipe de saúde, em geral 28 dias. Interromper o uso antes do fim reduz a proteção, mesmo que a pessoa se sinta bem e não tenha sintoma algum. Se os medicamentos causarem efeitos incômodos, o caminho é conversar com a equipe, que pode ajustar o esquema, e não abandonar o tratamento por conta própria.',
        ],
      },
      {
        id: 'situacoes',
        heading: 'Situações que exigem avaliação imediata',
        paragraphs: [
          'Merecem avaliação as situações que envolvem contato com sangue, sêmen, secreções vaginais ou leite materno, mesmo quando a pessoa não tem certeza de que houve risco. Não há motivo para vergonha nem para julgamento: o atendimento é sigiloso e existe justamente para proteger a saúde de quem procura ajuda.',
          'Na dúvida, vale procurar o serviço de saúde, porque só a avaliação profissional consegue dizer se a PEP está indicada naquele caso. Entre as situações que pedem avaliação imediata estão:',
        ],
        bullets: [
          'Relação sexual sem camisinha, ou em que a camisinha rompeu, com parceiro de sorologia desconhecida ou que vive com HIV sem tratamento',
          'Compartilhamento de agulhas, seringas ou outros materiais que cortam ou furam',
          'Acidente com material cortante ou perfurante, como acontece com profissionais de saúde',
          'Ruptura da camisinha durante a relação sexual',
          'Violência sexual, situação em que a busca por atendimento deve ser imediata',
        ],
      },
      {
        id: 'onde-procurar',
        heading: 'Onde procurar',
        paragraphs: [
          'A PEP está disponível gratuitamente no SUS, em serviços de urgência e em centros de referência para HIV e aids. O atendimento é sigiloso, e ninguém precisa se identificar para ser avaliado.',
          'No serviço de saúde, a equipe conversa sobre o que aconteceu, avalia o tipo de exposição e, quando a PEP está indicada, já inicia os medicamentos. Se a exposição foi recente, é importante informar o horário aproximado, porque isso ajuda a definir a conduta. O primeiro atendimento costuma incluir também um teste rápido para o HIV e para outras infecções sexualmente transmissíveis.',
          'O serviço verifica ainda a necessidade de outras medidas, como a vacinação contra a hepatite B e o apoio em saúde mental, quando houve violência sexual. Vale lembrar que a PEP não substitui a camisinha nem as demais formas de prevenção: ela é uma medida pontual, para uma situação específica.',
        ],
      },
      {
        id: 'o-que-a-pep-nao-faz',
        heading: 'O que a PEP não faz',
        paragraphs: [
          'A PEP protege contra o HIV naquela exposição específica, mas não é uma solução para todas as situações. Ela não substitui a camisinha nas relações seguintes, não previne outras infecções sexualmente transmissíveis e não deve ser usada de forma repetida como estratégia de rotina.',
          'Para quem tem exposição frequente ao risco, o mais indicado é a PrEP, pensada para uso contínuo ou sob demanda antes do contato. A PEP, ao contrário, é reservada para situações pontuais, em que houve uma exposição concreta.',
          'A PEP também não é teste nem cura: ela não confirma se a pessoa foi infectada e não elimina um vírus já instalado no organismo. Por isso, ela caminha sempre junto com a testagem e com o acompanhamento ao longo dos meses seguintes.',
        ],
      },
      {
        id: 'depois',
        heading: 'E depois',
        paragraphs: [
          'Depois de terminar a PEP, é preciso manter o acompanhamento com testes ao longo dos meses seguintes, porque uma infecção recente pode não aparecer nos primeiros exames. Os testes são feitos em momentos definidos pela equipe, para cobrir todo o período da janela imunológica.',
          'Ir a todas as consultas de acompanhamento é parte do cuidado: elas confirmam se a PEP funcionou. Faltar a uma delas deixa uma dúvida em aberto que poderia ser resolvida com um exame simples.',
          'Se o resultado se mantiver negativo ao final do acompanhamento, a pessoa pode seguir com as formas de prevenção que fazem sentido para a sua rotina. Se for positivo, o serviço encaminha para o início do tratamento, que é gratuito no SUS e muda o curso da infecção.',
        ],
        cta: {
          label: 'Veja a página completa sobre HIV e aids',
          href: '/doencas/hiv-aids/',
        },
      },
    ],
    diseaseSlugs: ['hiv-aids'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: [
      'indetectavel-intransmissivel-o-que-significa',
      'hiv-como-se-transmite-e-o-que-nao-transmite',
      'hiv-como-e-quando-fazer-o-teste',
      'hiv-prep-prevencao-antes-da-exposicao',
    ],
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
    updatedAt: '2026-10-20',
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
          'Esse resultado é chamado de indetectável. Ele não significa que o vírus desapareceu do organismo, e sim que está sob controle, em quantidade tão baixa que os aparelhos não conseguem medir.',
          'Para chegar a esse ponto, o tratamento precisa ser tomado todos os dias, sem falhas, e a carga viral precisa ser acompanhada com exames regulares. É essa constância que mantém o resultado estável: um exame medido em um único momento não basta para afirmar que a carga viral está permanentemente indetectável.',
        ],
      },
      {
        id: 'o-que-significa',
        heading: 'O que a frase significa',
        paragraphs: [
          'Carga viral indetectável, mantida com o tratamento em dia, significa que o HIV não é transmitido por via sexual. É a base do conceito conhecido como indetectável igual a intransmissível.',
          'A ideia foi confirmada por estudos de longo prazo com casais em que um dos parceiros vivia com HIV e o outro não, e nenhuma transmissão sexual ocorreu quando a carga viral estava indetectável. Os resultados se mantiveram consistentes ao longo de anos de acompanhamento desses casais.',
          'Na prática, isso mudou o sentido de viver com HIV: o tratamento não serve apenas para a saúde de quem o toma, mas também protege os parceiros sexuais. A informação é hoje divulgada por órgãos de saúde de todo o mundo.',
        ],
      },
      {
        id: 'condicoes',
        heading: 'As condições para que valha',
        paragraphs: [
          'O conceito vale dentro de condições bem definidas, e ignorá-las muda completamente o significado. Para que a afirmação se sustente, a carga viral precisa estar indetectável de forma sustentada e o tratamento precisa seguir em uso, sem interrupção.',
          'Estas são as condições que precisam ser respeitadas:',
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
          'Além do efeito direto na saúde de quem vive com HIV, o conceito tem um papel importante contra o estigma: ele desfaz a ideia de que viver com HIV significa necessariamente transmitir o vírus.',
          'A informação também reforça por que o tratamento é oferecido a todas as pessoas diagnosticadas, independentemente da contagem de células de defesa. Não é preciso esperar os sintomas ou a imunidade cair para começar.',
          'Quando mais pessoas têm acesso ao diagnóstico e ao tratamento, mais a transmissão cai na população como um todo. É por isso que o tratamento é considerado, hoje, uma das principais estratégias de prevenção do HIV.',
        ],
      },
      {
        id: 'o-que-nao-muda',
        heading: 'O que não muda',
        paragraphs: [
          'Indetectável não é cura e não substitui o acompanhamento. A carga viral precisa continuar sendo monitorada, e a interrupção do tratamento faz o vírus voltar a circular e a se multiplicar.',
          'O conceito também não elimina a necessidade de outros cuidados. Ele se refere apenas à transmissão sexual e não cobre a transmissão por sangue, como acontece no compartilhamento de agulhas e seringas.',
          'Entender o que o indetectável significa, e o que não significa, ajuda a usar a informação com responsabilidade, sem promessas que a ciência não sustenta.',
        ],
      },
      {
        id: 'testagem-e-tratamento',
        heading: 'Testagem e tratamento caminham juntos',
        paragraphs: [
          'O conceito de indetectável igual a intransmissível só faz sentido para quem conhece a própria situação. Sem o teste, não há como saber se a pessoa vive com HIV e, portanto, não há como iniciar o tratamento que leva à carga viral indetectável.',
          'A testagem é simples, gratuita e pode ser anônima no SUS. Os testes rápidos usam uma gota de sangue da ponta do dedo e dão o resultado em cerca de 30 minutos. Existe também o autoteste, que a própria pessoa faz quando e onde preferir.',
          'Descobrir a infecção cedo é o que permite começar o tratamento e alcançar a carga viral indetectável. É esse caminho que sustenta, na prática, a promessa contida na frase: quem se trata de forma contínua não transmite o HIV por via sexual.',
        ],
      },
      {
        id: 'duvidas-comuns',
        heading: 'Dúvidas comuns',
        paragraphs: [
          'A pergunta mais frequente é se a pessoa pode interromper o tratamento quando a carga viral fica indetectável. A resposta é não: é justamente o uso contínuo que mantém o vírus sob controle. Ao parar, a carga viral volta a subir.',
          'Outra dúvida é se o conceito vale para qualquer forma de transmissão. Não. A afirmação se refere à transmissão sexual e não cobre a transmissão por sangue, como no compartilhamento de agulhas e seringas.',
          'Também é comum confundir indetectável com cura. São coisas diferentes: indetectável significa que o vírus está controlado, e não que foi eliminado do organismo.',
        ],
      },
      {
        id: 'o-que-muda-na-vida-diaria',
        heading: 'O que muda na vida diária',
        paragraphs: [
          'Com a carga viral indetectável e o tratamento em dia, a maior parte da rotina segue normalmente. A pessoa pode trabalhar, estudar, praticar esportes e manter relações sexuais, desde que siga o esquema indicado pela equipe de saúde.',
          'Divulgar ou não a própria situação é uma escolha pessoal. Ninguém é obrigado a contar o diagnóstico, e o atendimento nos serviços de saúde é sigiloso. Quando a pessoa decide compartilhar, ter informação correta ajuda na conversa.',
          'O acompanhamento continua sendo parte da rotina, com consultas e exames periódicos. Esses encontros servem para ajustar o esquema, acompanhar a imunidade e resolver dúvidas antes que elas virem problemas.',
        ],
      },
      {
        id: 'tratamento-como-prevencao',
        heading: 'Tratamento como prevenção',
        paragraphs: [
          'O conceito de indetectável igual a intransmissível é a base do que se chama de tratamento como prevenção: manter a carga viral indetectável reduz a transmissão do HIV na população.',
          'No Brasil, o tratamento antirretroviral é distribuído gratuitamente pelo SUS a todas as pessoas que vivem com HIV. Isso significa que a prevenção não depende de poder pagar pelos medicamentos: quem precisa do tratamento tem acesso a ele.',
          'A testagem regular é a porta de entrada para esse cuidado. Quanto mais cedo a infecção é descoberta, mais cedo o tratamento começa e mais cedo a pessoa pode alcançar a carga viral indetectável, protegendo a própria saúde e reduzindo a transmissão.',
        ],
        cta: {
          label: 'Veja a página completa sobre HIV e aids',
          href: '/doencas/hiv-aids/',
        },
      },
    ],
    diseaseSlugs: ['hiv-aids'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: [
      'hiv-o-que-fazer-nas-primeiras-72-horas',
      'hiv-como-se-transmite-e-o-que-nao-transmite',
      'hiv-como-e-quando-fazer-o-teste',
      'hiv-prep-prevencao-antes-da-exposicao',
    ],
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
    updatedAt: '2026-10-20',
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
        paragraphs: [
          'Entre as cinco hepatites virais, apenas duas têm vacina: a A e a B. A vacina contra a hepatite B tem um efeito extra importante: como o vírus D só consegue se estabelecer em quem já tem o vírus B, quem se vacina contra a B fica protegido também contra a D.',
          'Para as hepatites C e E, não existe vacina disponível no Brasil. Isso não quer dizer que essas infecções fiquem sem proteção: nos dois casos, a prevenção se faz com outros cuidados, que este texto detalha adiante.',
          'A vacinação é a principal medida de prevenção contra a hepatite A e contra a hepatite B, porque protege antes de qualquer exposição. Nos tipos sem vacina, a proteção depende de reduzir o risco de contato com o vírus, de acordo com a forma de transmissão de cada um.',
        ],
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
          'Quando a infecção pelo vírus B se torna crônica, o fígado permanece inflamado por anos e pode evoluir para cirrose e câncer de fígado, complicações que podem exigir transplante e, em alguns casos, levar à morte. O risco de a infecção se tornar crônica é maior quanto mais cedo a pessoa se infecta: em bebês, a maioria das infecções segue para a forma crônica, enquanto entre adultos o vírus costuma ser eliminado pelo próprio organismo. A inflamação silenciosa vai formando cicatrizes no fígado ao longo dos anos, sem que a pessoa perceba.',
          'A vacina interrompe esse caminho antes que ele comece. Ela é eficaz e segura, e está disponível gratuitamente no SUS para quem ainda não foi vacinado, em qualquer idade.',
          'Como a hepatite D depende da hepatite B para se estabelecer, vacinar contra a B elimina também o risco da D. É o único caso em que uma mesma vacina protege contra duas hepatites diferentes.',
        ],
      },
      {
        id: 'como-funcionam-as-vacinas',
        heading: 'Como funcionam as vacinas contra as hepatites A e B',
        paragraphs: [
          'A vacina contra a hepatite B está disponível gratuitamente no SUS para todas as pessoas que ainda não foram vacinadas, em qualquer idade. Para crianças, o esquema tem quatro doses: ao nascer e aos 2, 4 e 6 meses de idade, sendo as três últimas aplicadas na vacina pentavalente. Para adolescentes, adultos e pessoas idosas, o esquema completo costuma ter três doses.',
          'A vacina contra a hepatite A faz parte do calendário infantil, em dose única aos 15 meses de idade, e pode ser aplicada entre 12 meses e 4 anos, 11 meses e 29 dias. Pessoas com condições específicas, como hepatopatias crônicas, pessoas vivendo com HIV e candidatos a transplante, podem recebê-la nos Centros de Referência para Imunobiológicos Especiais (CRIE), em duas doses com intervalo mínimo de 6 meses.',
          'As recomendações por faixa etária e por situação de risco podem mudar com o tempo. Antes de se vacinar, confirme com a unidade de saúde qual é o esquema indicado para a sua idade e para a sua situação. Se você já iniciou o esquema e perdeu a data de uma dose, procure a unidade de saúde: não é preciso recomeçar a série.',
        ],
      },
      {
        id: 'sem-vacina',
        heading: 'O que fazer quando não há vacina',
        paragraphs: [
          'Para as hepatites C e E, a prevenção depende de outros cuidados, de acordo com a forma de transmissão de cada uma. A hepatite E chega pela via fecal-oral, sobretudo por água e alimentos contaminados, o que reforça a importância da higiene, do saneamento e do cuidado com a água e com o que se come.',
          'A hepatite C é transmitida por sangue e por material contaminado, e não passa pelo leite materno, pela comida, pela água nem pelo contato do dia a dia, como abraçar ou beijar. A prevenção passa por não compartilhar agulhas, seringas, cachimbos, lâminas de barbear, escovas de dente e alicates de unha, por exigir material esterilizado em tatuagens, piercings e procedimentos odontológicos, e por usar preservativo nas relações sexuais.',
          'Nas duas formas, a testagem é parte da prevenção: quem conhece o próprio resultado trata quando necessário e evita transmitir o vírus sem saber.',
        ],
      },
      {
        id: 'alem-da-vacina',
        heading: 'Além da vacina',
        paragraphs: [
          'A vacinação é o caminho mais direto para evitar as hepatites A e B, mas ela não cobre todos os tipos nem todas as situações. Completam a proteção as medidas que valem para qualquer hepatite:',
          'Fazer a testagem é gratuito no SUS, e o resultado sai em poucos minutos. Usar preservativo nas relações sexuais, não compartilhar objetos que cortam ou perfuram, exigir material esterilizado em tatuagens, piercings e procedimentos odontológicos e fazer o pré-natal completo são atitudes que reduzem o risco de todas as formas transmitidas por sangue e por via sexual.',
        ],
        bullets: [
          'Fazer a testagem, disponível gratuitamente no SUS',
          'Usar preservativo nas relações sexuais',
          'Não compartilhar objetos de uso pessoal que cortam ou perfuram',
          'Exigir material esterilizado em procedimentos como tatuagem e piercing',
          'Fazer o pré-natal completo, que inclui a testagem',
        ],
      },
      {
        id: 'onde-vacinar',
        heading: 'Onde se vacinar',
        paragraphs: [
          'As vacinas contra as hepatites A e B estão disponíveis nas unidades básicas de saúde do SUS, de forma gratuita, para quem ainda não se vacinou. Também é possível receber as doses em salas de vacina habilitadas e, em situações específicas, nos Centros de Referência para Imunobiológicos Especiais.',
          'Se você tiver dúvida sobre quais doses já recebeu, a caderneta de vacinação ou o próprio serviço de saúde ajudam a verificar. Vale confirmar o calendário vigente na unidade em que você será atendido, porque as recomendações mudam com o tempo.',
          'Para entender as formas de transmissão, os sintomas e o tratamento de cada hepatite, veja a página completa sobre hepatites virais.',
        ],
        cta: {
          label: 'Veja a página completa sobre hepatites virais',
          href: '/doencas/hepatites-virais/',
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
    updatedAt: '2026-10-20',
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
        heading: 'O que mudou no tratamento',
        paragraphs: [
          'Até poucos anos atrás, a hepatite C era uma doença crônica de tratamento difícil. O esquema antigo exigia injeções semanais, durava muitos meses e provocava efeitos indesejados importantes, além de curar uma parte menor das pessoas. A doença era, então, uma das principais causas de cirrose e de câncer de fígado no mundo. Muita gente só descobria a infecção quando o fígado já estava comprometido.',
          'O cenário mudou com os antivirais de ação direta, conhecidos pela sigla DAA. Esses medicamentos atuam diretamente na replicação do vírus e, com eles, a maioria das pessoas tratadas alcança a cura, com esquemas mais curtos, por via oral e muito melhor tolerados do que o tratamento antigo.',
          'Hoje a hepatite C é considerada uma doença curável em praticamente todos os casos tratados. O tratamento está disponível gratuitamente no SUS, e a cura também interrompe a transmissão do vírus para outras pessoas.',
        ],
      },
      {
        id: 'por-que-tratar',
        heading: 'Por que tratar mesmo sem sintomas',
        paragraphs: [
          'A hepatite C costuma ser silenciosa por décadas. A ausência de sintomas não significa ausência de dano: mesmo sem sentir nada, a infecção crônica mantém o fígado inflamado e pode evoluir para cirrose e câncer de fígado.',
          'Cerca de 80% das pessoas com hepatite C não apresentam sintomas na fase inicial, e a doença acaba descoberta em exames de rotina ou na doação de sangue. Enquanto isso, o dano ao fígado segue acontecendo: cerca de 70% dos casos agudos se tornam crônicos, e o risco de cirrose fica entre 15% e 30% em 20 anos.',
          'Tratar interrompe essa progressão. Quanto mais cedo o tratamento começa, antes que a cirrose se instale, maior a chance de preservar a saúde do fígado e de evitar as complicações. É por isso que a testagem é indicada para todas as pessoas adultas pelo menos uma vez na vida.',
        ],
      },
      {
        id: 'como-e-o-tratamento',
        heading: 'Como é o tratamento',
        paragraphs: [
          'O tratamento é feito com medicamentos por via oral, por um período definido pelo profissional de saúde, que costuma ser de 12 ou 24 semanas, conforme o caso. Os antivirais de ação direta eliminam o vírus em mais de 95% das pessoas tratadas.',
          'O SUS fornece esses medicamentos. Nos casos iniciais, o tratamento pode começar na própria unidade básica de saúde; situações mais complexas, como quem já tem cirrose, são acompanhadas em serviço especializado. Crianças a partir de 3 anos também podem ser tratadas. Quem tem outras doenças ou usa outros medicamentos deve informar o profissional de saúde, porque algumas interações precisam ser avaliadas antes de começar.',
          'Durante o tratamento, o acompanhamento inclui exames para avaliar a resposta e a condição do fígado. Vale seguir as orientações do profissional que acompanha o caso, tomar a medicação nos horários indicados e evitar bebida alcoólica. A cura é confirmada por um exame feito alguns meses depois do fim do tratamento.',
        ],
      },
      {
        id: 'cura-nao-e-imunidade',
        heading: 'Cura não é imunidade',
        paragraphs: [
          'Quem se cura da hepatite C não fica protegido contra uma nova infecção. Diferente de outras doenças, a infecção pelo vírus C não deixa uma memória de defesa duradoura: a pessoa pode se reinfectar em uma nova exposição. Isso vale inclusive para quem se curou há muitos anos.',
          'Além disso, não existe vacina contra a hepatite C. Por isso, mesmo depois da cura, a prevenção continua necessária: não compartilhar agulhas, seringas e objetos que cortam ou perfuram e usar preservativo nas relações sexuais.',
          'Depois da cura, o fígado pode se recuperar, mas quem já teve cirrose continua precisando de acompanhamento para vigiar possíveis complicações. E quem se curou também ajuda a impedir novas transmissões: com a testagem, quem tem o vírus descobre antes, trata e deixa de transmiti-lo.',
        ],
      },
      {
        id: 'como-descobrir',
        heading: 'Como descobrir a infecção',
        paragraphs: [
          'O diagnóstico começa com um exame de sangue. Nas unidades básicas de saúde, o teste rápido para as hepatites B e C é gratuito e o resultado sai em poucos minutos. Qualquer pessoa pode pedir o teste, mesmo sem sintomas.',
          'A testagem é indicada para todas as pessoas adultas pelo menos uma vez na vida, e também faz parte do pré-natal de todas as gestantes. Quem já viveu situações de risco, como uso de drogas injetáveis ou compartilhamento de objetos que cortam ou perfuram, também deve procurar o teste.',
          'O primeiro exame procura anticorpos contra o vírus. Quando o resultado é reagente, o médico pede um segundo exame, a carga viral, que confirma se a infecção está ativa e serve para acompanhar o tratamento. Como a hepatite C é silenciosa, a testagem é o único caminho para descobrir a infecção a tempo de evitar as complicações. O teste rápido com resultado reagente é sempre confirmado por exames complementares antes de fechar o diagnóstico.',
        ],
      },
      {
        id: 'onde-buscar-tratamento',
        heading: 'Onde buscar tratamento',
        paragraphs: [
          'O tratamento da hepatite C é oferecido pelo SUS, sem custo, e começa com o diagnóstico feito na rede pública. Quem recebe um resultado reagente é encaminhado para avaliação e, quando indicado, para o início do tratamento acompanhado por profissional de saúde. Nos casos mais simples, esse acompanhamento pode acontecer na própria unidade básica de saúde; quando há cirrose ou outras complicações, o seguimento é feito em serviço especializado. O encaminhamento é feito pelo próprio serviço que realiza o diagnóstico, sem necessidade de procurar ajuda em outro lugar.',
          'As gestantes fazem os exames de hepatite B e C no pré-natal, e toda pessoa adulta pode solicitar a testagem ao menos uma vez na vida, mesmo sem sintomas. Depois do fim do tratamento, o acompanhamento continua até a confirmação da cura, e a pessoa recebe orientação para evitar uma nova infecção.',
          'Para entender o contexto das cinco hepatites, incluindo formas de transmissão, sintomas e prevenção, veja a página completa sobre hepatites virais.',
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
    updatedAt: '2026-10-20',
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
          'Na asma, as vias aéreas ficam inflamadas de forma crônica e reagem com estreitamento a gatilhos como poeira, mofo, fumaça, ar frio e infecções respiratórias. Durante a crise, esse estreitamento se intensifica, o ar passa com dificuldade e surgem chiado, falta de ar, aperto no peito e tosse. A crise pode começar em minutos e evoluir rápido, e é essa velocidade que torna o reconhecimento precoce tão importante para o desfecho.',
          'Uma crise não significa descuido. Ela pode surgir mesmo em quem usa o medicamento de controle todos os dias, sobretudo durante uma infecção respiratória, numa mudança brusca de tempo ou depois do contato com um alérgeno. O que muda o desfecho é a rapidez com que a pessoa percebe a piora e procura ajuda adequada, sem tentar resolver sozinha uma situação que já saiu do controle.',
          'Vale conhecer o próprio padrão. Muitas pessoas têm sinais de aviso antes da crise, como nariz entupido, espirros seguidos, coceira nos olhos ou tosse seca que aumenta à noite. Perceber esses sinais permite agir cedo, quando o estreitamento ainda é leve e responde melhor ao medicamento de alívio, evitando que a crise chegue ao ponto de exigir atendimento de emergência.',
        ],
      },
      {
        id: 'primeiros-passos',
        heading: 'Primeiros passos',
        paragraphs: [
          'A primeira medida é usar o medicamento de alívio conforme a orientação que você já recebeu no serviço de saúde. Ele abre a via aérea em poucos minutos. Se houver um plano de ação por escrito, siga os passos indicados para o nível de sintomas que está apresentando, sem aumentar a dose por conta própria nem repetir o remédio em intervalos menores do que o combinado, porque o excesso pode causar efeitos indesejados.',
          'Enquanto espera o efeito do medicamento, sente-se ereto e mantenha a calma. Deitar piora a sensação de falta de ar, porque reduz a expansão do tórax. Afaste-se do gatilho quando ele for identificável, deixe o ambiente ventilado e não fume nem permaneça perto de quem fuma. A calma ajuda a respirar melhor, mas não substitui o atendimento quando há sinais graves.',
        ],
        bullets: [
          'Use o medicamento de alívio conforme a orientação recebida',
          'Afaste-se do gatilho, se ele for identificável',
          'Sente-se ereto e mantenha a calma',
          'Não fume e evite ambiente com fumaça',
          'Se não houver melhora em poucos minutos, procure uma UPA ou um pronto-socorro',
        ],
      },
      {
        id: 'sinais-de-gravidade',
        heading: 'Sinais de gravidade',
        paragraphs: [
          'A gravidade é medida pelo que a pessoa consegue fazer, e não apenas pelo volume do chiado. Na crise moderada, ela precisa parar para respirar no meio das frases, o chiado fica mais forte e o coração acelera. Na grave, a fala sai em palavras soltas, a respiração passa de 30 por minuto e os batimentos passam de 120 por minuto, mesmo em repouso. No quadro crítico, a pessoa não consegue falar, fica sonolenta ou confusa.',
          'O desaparecimento do chiado não é sinal de melhora. Quando o ar quase não passa, o som pode sumir e o quadro fica ainda mais grave, situação conhecida como peito silencioso. Diante de qualquer sinal abaixo, procure atendimento de emergência imediatamente, sem esperar a crise passar sozinha. Em caso de dúvida, ligue para o SAMU 192 ou vá à UPA mais próxima, porque o tempo de espera é um fator decisivo nesses casos.',
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
          'O medicamento de alívio não substitui o de controle. As funções são diferentes: o de alívio abre a via aérea no momento da crise, enquanto o de controle trata a inflamação ao longo do tempo. Usar apenas o de alívio com frequência, sem o controle diário, deixa a inflamação intacta e favorece novas crises, muitas vezes mais intensas do que a anterior.',
          'Não é o momento de testar receitas caseiras, chás ou remédios emprestados. Nenhuma dessas medidas abre a via aérea de forma confiável, e algumas atrasam o atendimento. Se a pessoa usa corticoide inalatório, o uso habitual deve continuar durante a crise; suspender o medicamento por conta própria só piora o quadro e dificulta a recuperação.',
          'Também não vale insistir em casa quando a resposta ao medicamento de alívio é fraca ou dura pouco. A melhora passageira seguida de nova piora mostra que a crise não está controlada e precisa de avaliação profissional, com possibilidade de corticoide por via oral e oxigênio no serviço de saúde. Nesse cenário, quanto mais cedo a pessoa chega, menor é o risco de complicações.',
        ],
      },
      {
        id: 'depois-da-crise',
        heading: 'Depois da crise',
        paragraphs: [
          'Depois que a crise passa, o episódio merece ser levado à consulta. Ele indica que o controle pode estar inadequado, e essa informação ajuda o profissional a ajustar a dose do medicamento de controle, a revisar a técnica do inalador ou a identificar um gatilho que passou despercebido.',
          'Volte ao serviço de saúde para a reavaliação, mesmo que já se sinta bem. É comum que a inflamação persista depois do alívio dos sintomas, e o retorno permite corrigir o plano antes da próxima crise. Em caso de crises repetidas, pergunte se há um plano de ação por escrito e como usá-lo no dia a dia.',
          'A reavaliação não precisa esperar a próxima crise. Marcar a consulta logo após o episódio ajuda a lembrar dos detalhes, como o tempo de melhora e o número de doses usadas, que são justamente as informações mais úteis para ajustar o tratamento e evitar que a situação se repita. Anote também o que aconteceu antes da crise, porque o gatilho nem sempre é evidente.',
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
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
    slug: 'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
    metaTitle: 'DPOC e tabagismo: por que parar',
    title: 'DPOC e tabagismo: por que parar de fumar muda o quadro',
    excerpt:
      'Na DPOC, parar de fumar é a medida que mais muda a evolução da doença. Entenda o que muda, por que a dependência é tratável e como buscar apoio.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'relacao',
        heading: 'A relação entre fumo e DPOC',
        paragraphs: [
          'A DPOC se instala quando fumaça e outros irritantes atingem as vias aéreas e os alvéolos por anos seguidos. O cigarro é o principal fator de risco: quanto maior o tempo fumando e o número de cigarros por dia, maior a chance de a doença aparecer. A inflamação crônica estreita os brônquios, aumenta a produção de catarro e destrói as paredes dos alvéolos. O resultado é a obstrução que limita a passagem do ar. A exposição precisa ser longa para causar dano, mas o corpo não cria tolerância à fumaça. Cada cigarro deposita partículas que mantêm a inflamação ativa e dificultam a limpeza natural das vias aéreas.',
          'A fumaça de segunda mão também conta. Quem convive com fumantes em casa ou no trabalho inala partículas que irritam as vias aéreas, mesmo sem acender um cigarro. A exposição à lenha e ao carvão em ambientes fechados segue o mesmo caminho. Por isso a DPOC pode aparecer em quem nunca fumou, mas conviveu com fumaça por muito tempo. O risco aumenta com a convivência diária, não apenas com o ato de fumar. Ambientes fechados, como carros e quartos, concentram essas partículas e tornam a exposição mais intensa.',
        ],
      },
      {
        id: 'o-que-muda',
        heading: 'O que muda ao parar',
        paragraphs: [
          'Parar de fumar não desfaz o dano que já existe. O que muda é o ritmo: a perda de função pulmonar desacelera, e a pessoa passa a ter menos crises e menos internações. A tolerância ao esforço também melhora, porque as vias aéreas deixam de receber novos irritantes todos os dias. O benefício aparece em qualquer idade e em qualquer estágio da doença. A falta de ar também pode diminuir nas atividades do dia a dia, o que devolve autonomia para trabalhar, cuidar da casa e conviver com a família.',
          'Quanto antes a pessoa para, maior o ganho, mas nunca é tarde. Quem já tem falta de ar importante também se beneficia, mesmo que a melhora seja gradual. O importante é parar de vez: voltar a fumar desfaz boa parte do que foi conquistado e acelera de novo a queda da função pulmonar. O apoio de familiares e de profissionais de saúde ajuda a atravessar a fase de adaptação. Os sintomas de abstinência costumam ser temporários e podem ser manejados com acompanhamento.',
        ],
      },
      {
        id: 'nao-e-so-vontade',
        heading: 'Não é só questão de vontade',
        paragraphs: [
          'A dependência da nicotina é uma condição tratável, não uma falha de caráter. O corpo se acostuma à nicotina e reage à falta dela com irritação, ansiedade e vontade intensa de fumar. O SUS oferece apoio para quem quer parar, com acompanhamento e, quando indicado, medicamentos que reduzem esses sintomas. A orientação da equipe de saúde ajuda a escolher a estratégia mais adequada. O acompanhamento pode ser individual ou em grupo, e muitas unidades básicas oferecem esse serviço. Vale perguntar na UBS como funciona o apoio ao tabagismo.',
          'Tentativas anteriores que não deram certo não significam fracasso. A maioria das pessoas que consegue parar precisou de mais de uma tentativa, e cada uma ensina algo sobre os gatilhos e sobre o que ajuda. Marcar uma data, retirar os cigarros do alcance e avisar a família são passos simples que aumentam a chance de sucesso. Também ajuda identificar as situações em que a vontade de fumar aparece, como depois do café, durante o trabalho ou em momentos de estresse, e planejar o que fazer no lugar.',
        ],
      },
      {
        id: 'outras-medidas',
        heading: 'Outras medidas que ajudam',
        paragraphs: [
          'Além de parar de fumar, outras medidas sustentam o controle da DPOC. Manter as vacinas em dia reduz o risco de infecções que desencadeiam crises. Usar os medicamentos inalatórios todos os dias, com a técnica correta, mantém as vias aéreas mais abertas. A reabilitação pulmonar ensina a respirar e a se exercitar com menos falta de ar. As consultas regulares permitem ajustar o tratamento quando os sintomas mudam.',
          'Evitar a fumaça de qualquer origem, inclusive a passiva, é parte do tratamento. Em casa, vale manter os ambientes ventilados e evitar lenha, carvão e produtos de limpeza com cheiro forte. No trabalho, o uso de proteção respiratória deve ser orientado pelo serviço de saúde ocupacional. A casa livre de fumaça protege também quem nunca fumou, sobretudo crianças e pessoas idosas.',
        ],
        bullets: [
          'Manter a vacina contra a gripe em dia, conforme a orientação do serviço de saúde',
          'Usar os medicamentos inalatórios do jeito certo e todos os dias',
          'Participar de reabilitação pulmonar, quando indicada',
          'Evitar a exposição à fumaça de qualquer origem, inclusive passiva',
          'Manter atividade física adaptada à condição, com orientação profissional',
          'Manter as consultas de acompanhamento mesmo quando estiver se sentindo bem',
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
          'Procure atendimento se a falta de ar piorar, se o catarro mudar de cor ou de quantidade, se aparecer febre ou se precisar usar o medicamento de alívio com mais frequência. Esses sinais podem indicar uma exacerbação, que precisa de avaliação e, muitas vezes, de tratamento extra. Quanto mais cedo a crise é tratada, menor o risco de internação. Essas pioras não são esperadas e não devem ser tratadas como parte normal da doença. O corpo está pedindo mais apoio do que o tratamento habitual oferece.',
          'Dificuldade para falar frases completas, lábios azulados, sonolência ou confusão são sinais de emergência. Nesse caso, procure atendimento imediatamente, sem esperar melhorar sozinho. Não aumente por conta própria a dose dos medicamentos nem inicie antibiótico sem orientação. Se você usa oxigênio em casa, leve as orientações do serviço para a consulta. A equipe precisa saber como o equipamento é usado e se houve mudança na necessidade de oxigênio. A recuperação pode levar alguns dias, e o retorno às atividades deve seguir a orientação da equipe.',
        ],
      },
    ],
    diseaseSlugs: ['dpoc'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'dpoc-sinais-de-alerta-quando-procurar-atendimento',
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
        label: 'Tabagismo: orientações e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tabagismo',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-21',
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
          'A exacerbação da DPOC é uma piora súbita da falta de ar, da tosse ou do catarro, além do que a pessoa costuma ter no dia a dia. Em geral dura alguns dias e não melhora sozinha. Pode vir acompanhada de chiado, aperto no peito, febre e mais cansaço. A intensidade varia: algumas crises são leves e melhoram com o ajuste da medicação, enquanto outras exigem observação no serviço de saúde. O corpo responde pior quando a infecção se soma à obstrução que já existe. A recuperação completa pode levar mais tempo do que a própria crise.',
          'Infecções respiratórias são o gatilho mais comum. Fumaça, poeira, poluição e a interrupção do tratamento também podem iniciar uma crise. Reconhecer o que costuma desencadear as crises ajuda a evitá-las e a agir mais rápido quando elas aparecem. Mudanças de tempo e ambientes com muita fumaça também podem coincidir com a piora, embora nem sempre seja possível identificar uma causa única.',
        ],
      },
      {
        id: 'sinais-de-piora',
        heading: 'Sinais de que a doença piorou',
        paragraphs: [
          'O primeiro sinal costuma ser a falta de ar para atividades que antes eram fáceis, como vestir-se ou caminhar até a cozinha. A pessoa pode precisar parar várias vezes para recuperar o fôlego. O uso do medicamento de alívio passa a ser mais frequente, e o efeito parece durar menos. A limitação pode aparecer em tarefas simples, como tomar banho, vestir-se ou preparar uma refeição. Quando a pessoa precisa de ajuda para essas atividades, a crise merece atenção especial.',
          'Mudanças no catarro também importam. Ele pode ficar mais abundante, mais espesso ou mais escuro. Febre, mais tosse e mais chiado do que o habitual completam o quadro. Anotar esses sinais ajuda a equipe de saúde a avaliar a gravidade e a decidir o tratamento. Se a pessoa mede a saturação em casa, uma queda em relação ao valor habitual é outro motivo de atenção. O aparelho ajuda, mas não substitui a avaliação do serviço de saúde. A informação ajuda a equipe a escolher o melhor tratamento para cada caso.',
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
          'Se a piora não melhorar ou estiver se agravando, procure a unidade de saúde onde a doença é acompanhada ou um pronto atendimento. A avaliação precoce evita que a crise se agrave e reduz o risco de internação. Leve a lista de medicamentos, o inalador e, se usar, as orientações do oxigênio domiciliar. Não espere a crise passar sozinha. A demora permite que a inflamação e a falta de ar se agravem, o que torna o tratamento mais complexo. A unidade de saúde avalia a gravidade e decide se o tratamento pode ser feito ali ou se é preciso encaminhar para outro serviço. A orientação pode ser feita por telefone antes da ida ao serviço.',
          'O tratamento costuma incluir reforço dos broncodilatadores e, quando indicado, corticoide e antibiótico. Não use antibiótico guardado de outra ocasião nem aumente a dose por conta própria. A decisão depende do exame e da história de cada pessoa. A equipe também pode avaliar a necessidade de oxigênio e de outros exames. Levar as informações sobre as crises recentes ajuda a decisão. Se os sintomas melhorarem com o tratamento, mantenha a consulta de revisão para avaliar a causa da crise.',
        ],
      },
      {
        id: 'emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Alguns sinais indicam que a crise é grave e exige atendimento de emergência imediato. A pessoa não consegue falar frases completas, usa a musculatura do pescoço e das costelas para respirar ou apresenta lábios e pontas dos dedos azulados. Sonolência e confusão também são alarmantes. A respiração rápida e superficial, com esforço visível, é um dos sinais mais claros de gravidade. Quanto antes o atendimento começar, melhor a resposta.',
          'Nesses casos, chame o SAMU 192 ou vá ao serviço de emergência mais próximo. Não espere a medicação de alívio fazer efeito em casa. Se houver oxigênio domiciliar, siga a orientação do serviço e não altere a vazão por conta própria. Se a pessoa estiver sozinha, peça ajuda a um vizinho ou familiar enquanto aguarda o atendimento. Não dirija por conta própria em uma crise grave.',
        ],
        bullets: [
          'Dificuldade para falar frases completas',
          'Uso visível da musculatura do pescoço e das costelas para respirar',
          'Lábios ou pontas dos dedos azulados',
          'Sonolência ou confusão durante a piora',
          'Falta de resposta ao medicamento de alívio',
          'Piora progressiva apesar do tratamento habitual',
        ],
      },
      {
        id: 'depois-da-crise',
        heading: 'Depois que a crise passa',
        paragraphs: [
          'Depois que a crise passa, o cuidado continua. É importante retomar o acompanhamento para revisar o tratamento, conferir a técnica do inalador e atualizar as vacinas. A equipe pode ajustar as doses e indicar reabilitação pulmonar, se ainda não estiver em andamento. A revisão do tratamento deve considerar as crises dos últimos meses e a adesão aos medicamentos. A equipe pode simplificar o esquema para facilitar o uso diário. As consultas também servem para orientar a reabilitação pulmonar e o suporte nutricional quando necessário.',
          'Muitas pessoas conseguem reconhecer os primeiros sinais e agir antes que a crise se agrave. Um plano de ação por escrito, combinado com o serviço de saúde, ajuda a família a saber quando ligar, quando ir à UBS e quando procurar a emergência. Compartilhar o plano com quem convive com a pessoa ajuda a agir rápido e evita decisões improvisadas durante a crise. O plano deve incluir os sinais que indicam emergência, os telefones úteis e o serviço de referência. A família também pode observar a resposta ao tratamento nos primeiros dias.',
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
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-como-e-diagnosticada',
    slug: 'dpoc-como-e-diagnosticada',
    metaTitle: 'DPOC: como é diagnosticada',
    title: 'DPOC: como a doença é diagnosticada',
    excerpt:
      'A espirometria confirma a DPOC e mede a gravidade da obstrução. Veja quando investigar, como o exame é feito e o que os resultados significam.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'como-e-confirmado',
        heading: 'Como o diagnóstico é confirmado',
        paragraphs: [
          'A suspeita de DPOC surge quando uma pessoa com mais de 40 anos, fumante ou ex-fumante, apresenta falta de ar, tosse ou catarro persistentes. O médico também considera exposição ocupacional, fumaça de biomassa e história familiar. O exame físico pode mostrar chiado, respiração prolongada e sinais de esforço, mas nenhum desses achados confirma a doença sozinho. A história precisa detalhar quando os sintomas começaram, se pioram com esforço ou repouso e se há crises frequentes. Também é importante perguntar sobre outras doenças, como asma, insuficiência cardíaca e bronquiectasias, que podem se confundir com a DPOC.',
          'A confirmação depende da espirometria. Sem esse exame, o diagnóstico fica incompleto e o tratamento pode ser iniciado de forma inadequada. Em locais onde a espirometria não está disponível naquele momento, a pessoa deve ser encaminhada a um serviço que realize o teste, e o acompanhamento não deve ser interrompido. O exame não deve ser feito apenas para confirmar uma suspeita óbvia. Ele também é útil para acompanhar a evolução e para orientar decisões sobre tratamento e encaminhamento.',
        ],
      },
      {
        id: 'espirometria',
        heading: 'O papel da espirometria',
        paragraphs: [
          'A espirometria mede a quantidade de ar que a pessoa consegue expirar e a velocidade com que isso acontece. O teste é feito antes e depois da inalação de um broncodilatador, que abre as vias aéreas. A pessoa sopra com força em um aparelho, seguindo as instruções do profissional, e repete o esforço algumas vezes para obter um resultado confiável. O esforço precisa ser máximo, mas o teste é seguro e pode ser repetido. Cansaço durante a prova é esperado e não significa que o exame esteja errado. O profissional observa a qualidade da curva para garantir que o resultado represente a função real.',
          'O critério diagnóstico é a relação entre o volume expirado no primeiro segundo (VEF1) e a capacidade vital forçada (CVF) abaixo de 0,70 depois do broncodilatador. Esse valor mostra obstrução que não se reverte por completo. O resultado precisa ser interpretado junto com os sintomas e com a história de exposição, porque alterações leves podem passar despercebidas. Valores de VEF1 muito baixos indicam maior risco de crises e de complicações. A interpretação também considera a idade, a altura e o peso, porque os valores de referência variam entre as pessoas. O relatório do exame deve ser guardado para comparações futuras e para o acompanhamento. O histórico dos exames ajuda a comparar.',
        ],
      },
      {
        id: 'classificacao-da-gravidade',
        heading: 'Como a gravidade é classificada',
        paragraphs: [
          'A gravidade funcional é classificada pelo VEF1 depois do broncodilatador, em quatro estágios: leve, moderado, grave e muito grave. Quanto menor o valor, maior a limitação do fluxo de ar. Essa classificação ajuda a organizar o acompanhamento, mas não define sozinha o tratamento. No estágio leve, o VEF1 fica igual ou acima de 80% do previsto; no moderado, entre 50% e 80%; no grave, entre 30% e 50%; no muito grave, abaixo de 30%. Esses números orientam a intensidade do acompanhamento.',
          'Os sintomas e a frequência das exacerbações também pesam na decisão. Duas pessoas com o mesmo VEF1 podem precisar de esquemas diferentes se uma tem mais falta de ar ou mais crises. Por isso a avaliação inclui a escala de dispneia, o impacto na vida diária e o número de internações no último ano. Perguntas sobre tosse, catarro, chiado e limitações fazem parte da consulta. A equipe também verifica quantas vezes a pessoa precisou de antibiótico, corticoide ou atendimento de urgência no último ano.',
        ],
      },
      {
        id: 'outros-exames',
        heading: 'Outros exames que podem ajudar',
        paragraphs: [
          'A radiografia de tórax pode mostrar hiperinsuflação e ajudar a afastar outras doenças. O hemograma identifica anemia ou policitemia, e a oximetria de repouso indica se a oxigenação está baixa. Em casos selecionados, o médico solicita eletrocardiograma, ecocardiograma e dosagem de alfa-1 antitripsina. A dosagem de alfa-1 antitripsina é especialmente importante em pessoas jovens com doença grave ou com história familiar. O diagnóstico dessa condição genética muda o aconselhamento familiar.',
          'A tomografia e a gasometria entram quando há suspeita de bronquiectasias, de doença pulmonar intersticial ou de necessidade de avaliar a troca gasosa. O objetivo não é fazer todos os exames em todas as pessoas, mas escolher os que mudam a conduta. Repetir exames sem necessidade aumenta custos e não melhora o cuidado. A escolha deve seguir a suspeita clínica e o que pode mudar a decisão terapêutica.',
        ],
        bullets: [
          'Asma, que costuma melhorar mais com o broncodilatador',
          'Insuficiência cardíaca, que também causa falta de ar',
          'Bronquiectasias, com tosse e catarro persistentes',
        ],
      },
      {
        id: 'quando-suspeitar',
        heading: 'Quando vale investigar',
        paragraphs: [
          'Vale procurar avaliação quem tem mais de 40 anos e fuma ou fumou, mesmo sem queixa respiratória importante. Tosse com catarro por vários meses, falta de ar aos esforços e chiado recorrente são motivos suficientes para investigar. A exposição a poeira, fumaça de lenha ou produtos químicos também conta. Muitas pessoas atribuem a falta de ar ao envelhecimento ou ao sedentarismo e demoram a procurar ajuda. Essa interpretação atrasa o diagnóstico e permite que a doença avance.',
          'No SUS, a porta de entrada é a UBS. A equipe pode orientar a investigação, solicitar a espirometria quando o serviço oferece o exame ou encaminhar para uma unidade de referência. Quanto antes o diagnóstico é feito, mais cedo começa o tratamento e a prevenção de crises. A equipe também pode orientar sobre hábitos que reduzem o risco, como parar de fumar e evitar a exposição à fumaça. O diagnóstico precoce muda o tratamento e também a trajetória da doença.',
        ],
        bullets: [
          'Ter mais de 40 anos e fumar ou ter fumado',
          'Tosse com catarro por vários meses',
          'Falta de ar aos esforços ou chiado recorrente',
          'Trabalhar ou viver exposto a poeira, fumaça ou produtos químicos',
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
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-tratamento-e-cuidados',
    slug: 'dpoc-tratamento-e-cuidados',
    metaTitle: 'DPOC: tratamento e cuidados',
    title: 'DPOC: tratamento e cuidados no dia a dia',
    excerpt:
      'Broncodilatadores, reabilitação pulmonar, vacinas e oxigênio fazem parte do controle da DPOC. Entenda o que cada parte do tratamento faz.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'tratamento-continuo',
        heading: 'Um tratamento contínuo',
        paragraphs: [
          'O tratamento da DPOC é contínuo e ajustado ao longo do tempo. O objetivo é reduzir sintomas, melhorar a tolerância ao esforço e diminuir o número de crises. A doença não tem cura, mas o controle adequado permite manter atividades, reduzir internações e preservar a qualidade de vida. O plano é revisado conforme os sintomas mudam, e não apenas quando há piora. A constância do cuidado é o que sustenta os resultados ao longo dos anos. As metas são discutidas com a pessoa e ajustadas à rotina dela, para que o plano seja possível de seguir.',
          'O acompanhamento deve ser regular, mesmo quando a pessoa está bem. Nas consultas, a equipe avalia sintomas, crises, adesão, técnica do inalador e necessidade de ajustes. Vacinas, alimentação, atividade física e saúde mental fazem parte do cuidado. A equipe também pergunta sobre o sono, o apetite e o humor, porque esses aspectos influenciam a adesão e a qualidade de vida. Quando necessário, o encaminhamento para outros profissionais é parte do tratamento.',
        ],
      },
      {
        id: 'medicamentos',
        heading: 'Medicamentos inalatórios',
        paragraphs: [
          'Os broncodilatadores inalatórios são a base do tratamento. Os de ação curta aliviam a falta de ar em poucos minutos e servem para resgates; os de ação longa são usados todos os dias para manter as vias aéreas abertas. A escolha depende da frequência dos sintomas e das crises. Muitas pessoas usam mais de um dispositivo, e a diferença entre eles precisa ficar clara. O medicamento de alívio não deve ser usado como substituto da medicação diária. O plano deve ser explicado em linguagem simples, e a pessoa precisa sair da consulta sabendo quando usar cada um.',
          'O corticoide inalatório pode ser associado em pessoas com crises frequentes, eosinofilia no sangue ou histórico de asma. Ele não substitui o broncodilatador e não deve ser usado sozinho. Antibiótico e corticoide por via oral ficam reservados para exacerbações, com avaliação profissional. O uso prolongado de corticoide oral traz riscos e não é indicado para manutenção. A automedicação com antibiótico também favorece resistência e não trata toda exacerbação. A escolha do dispositivo também considera a habilidade manual e a preferência de cada pessoa.',
        ],
      },
      {
        id: 'tecnica-do-inalador',
        heading: 'A técnica do inalador',
        paragraphs: [
          'A técnica do inalador muda o resultado do tratamento. Se a coordenação entre apertar o dispositivo e inspirar está errada, parte do medicamento fica na boca e não chega aos pulmões. Cada modelo tem instruções próprias, e a equipe deve observar a pessoa usando o seu. Se a pessoa interrompe a inspiração por falta de ar, o medicamento se deposita na garganta. Treinar em consulta, com o dispositivo vazio, ajuda a corrigir o gesto.',
          'O espaçador ajuda quem tem dificuldade de coordenar os movimentos, sobretudo em crises. Depois de usar corticoide inalatório, enxaguar a boca reduz o risco de candidíase oral. Revisar a técnica em cada consulta evita perda de eficácia. O espaçador também facilita o uso por idosos e por quem tem pouca força para inspirar. A limpeza do dispositivo faz parte do uso correto.',
        ],
        bullets: [
          'Ler as instruções do modelo que você usa',
          'Agitar o dispositivo antes de cada uso, quando indicado',
          'Expirar devagar, inspirar com o inalador e segurar a respiração',
          'Aguardar o intervalo entre as doses, conforme a orientação',
          'Enxaguar a boca após usar corticoide inalatório',
        ],
      },
      {
        id: 'reabilitacao-e-oxigenio',
        heading: 'Reabilitação pulmonar e oxigênio',
        paragraphs: [
          'A reabilitação pulmonar combina exercícios de resistência e força, treino de respiração e educação sobre a doença. O programa melhora a falta de ar, a capacidade de caminhar e a participação nas atividades diárias. Os benefícios aparecem mesmo em quem tem doença avançada. O programa é adaptado à capacidade de cada pessoa e pode incluir caminhada, bicicleta estacionária, exercícios com pesos leves e treino de equilíbrio. A supervisão profissional reduz o risco de esforço excessivo.',
          'A oxigenoterapia domiciliar é indicada para pessoas com baixa de oxigênio no sangue, após avaliação especializada. O equipamento precisa ser usado conforme a prescrição, e a segurança da casa deve ser revista, com o aparelho longe de chamas. A vazão não deve ser alterada por conta própria. A necessidade de oxigênio é reavaliada periodicamente, porque pode mudar com o tempo. Viagens e situações de emergência exigem planejamento para garantir o fornecimento. A adesão ao programa é mais fácil quando o horário cabe na rotina.',
        ],
      },
      {
        id: 'dia-a-dia',
        heading: 'Cuidados no dia a dia',
        paragraphs: [
          'No dia a dia, manter as vacinas em dia reduz o risco de infecções que desencadeiam crises. Atividade física adaptada, alimentação equilibrada e sono regular ajudam a sustentar a energia e a musculatura. Parar de fumar continua sendo a medida de maior impacto. A alimentação deve garantir energia suficiente, e a perda de peso precisa ser acompanhada. O sono de qualidade também ajuda na recuperação. O acompanhamento nutricional pode ser necessário em casos de perda de peso.',
          'Também vale organizar a casa e a rotina: evitar fumaça, poeira e mofo, manter os ambientes ventilados e dividir as tarefas mais cansativas. Familiares e cuidadores podem ajudar a lembrar horários e a reconhecer sinais de piora. Ter um plano para os dias de piora, com telefones e medicamentos à mão, reduz a ansiedade da família. O cuidado compartilhado facilita a continuidade do tratamento. Pequenos ajustes na casa e na rotina costumam trazer mais conforto do que mudanças radicais. O objetivo é manter uma rotina possível e segura. A equipe pode ajudar nesse planejamento. A rotina deve respeitar o ritmo de cada dia.',
        ],
        bullets: [
          'Manter as vacinas contra gripe, covid-19 e pneumococo em dia',
          'Praticar atividade física adaptada, com orientação profissional',
          'Evitar fumaça, poeira, mofo e produtos de limpeza irritantes',
          'Dividir as tarefas cansativas ao longo do dia',
          'Levar o inalador às consultas para revisar a técnica',
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
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    slug: 'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    metaTitle: 'DPOC: como prevenir crises',
    title: 'DPOC: como prevenir crises e o papel das vacinas',
    excerpt:
      'Vacinas em dia, ambiente sem fumaça e tratamento regular reduzem as crises de DPOC. Veja como montar um plano de ação com a equipe de saúde.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'vacinas',
        heading: 'Vacinas que ajudam a proteger',
        paragraphs: [
          'As vacinas são parte do cuidado porque infecções respiratórias estão entre os principais gatilhos de exacerbação. A vacina contra a gripe é recomendada todos os anos para pessoas com doenças respiratórias crônicas. A composição muda a cada temporada, por isso a atualização anual importa. Quem tem DPOC e contrai gripe apresenta risco maior de exacerbação e de internação. A vacina não impede todos os casos, mas reduz complicações. Pessoas com DPOC também devem manter a vacinação de quem convive com elas em dia, o que reduz a circulação de infecções.',
          'Outras vacinas podem ser indicadas, como a do pneumococo e a da covid-19. A equipe de saúde avalia o histórico e o momento de cada pessoa. Manter o cartão de vacinação atualizado ajuda a não perder oportunidades. O local de vacinação pode ser a UBS ou um posto específico, e o cartão deve ser levado em todas as consultas. Dúvidas sobre contraindicações devem ser discutidas com a equipe. A proteção diminui com o tempo, e o reforço segue as recomendações vigentes. O calendário pode mudar, por isso vale conferir a recomendação vigente.',
        ],
        bullets: [
          'Vacina contra a gripe todos os anos',
          'Vacina contra o pneumococo, conforme indicação',
          'Vacina contra a covid-19, conforme o calendário',
        ],
      },
      {
        id: 'evitar-gatilhos',
        heading: 'Evitar os gatilhos',
        paragraphs: [
          'Evitar a fumaça do tabaco é a principal medida, inclusive para quem não fuma e convive com fumantes. Em casa, cozinhar ou aquecer com lenha e carvão em ambientes fechados aumenta a exposição a partículas. A ventilação e o uso de equipamentos adequados reduzem esse risco. A fumaça de biomassa é particularmente relevante em áreas rurais e em domicílios que usam fogão a lenha. Melhorar a ventilação e evitar o uso em locais fechados são medidas práticas. A exposição deve ser reduzida também em veículos e em locais de trabalho sem ventilação.',
          'Poeira, mofo e produtos de limpeza com cheiro forte também podem piorar os sintomas. No trabalho, a proteção respiratória deve ser orientada pelo serviço de saúde ocupacional. Nos períodos de gripe, lavar as mãos e evitar aglomerações ajuda. A limpeza da casa deve evitar produtos com cheiro forte e excesso de poeira. Filtros de ar não substituem a retirada da fonte de poluição. Quando a qualidade do ar está ruim, reduzir o tempo ao ar livre pode ajudar.',
        ],
        bullets: [
          'Não fumar e evitar a fumaça passiva',
          'Manter a casa ventilada e livre de mofo',
          'Evitar lenha ou carvão em ambientes fechados',
          'Usar proteção respiratória quando o trabalho expõe a poeira',
          'Lavar as mãos e evitar aglomerações nos períodos de gripe',
        ],
      },
      {
        id: 'tratamento-em-dia',
        heading: 'Tratamento em dia',
        paragraphs: [
          'Seguir o tratamento todos os dias, mesmo sem sintomas, é o que mantém o controle. Interromper os medicamentos por conta própria costuma levar a mais falta de ar e mais crises. O alívio rápido não substitui a medicação de manutenção. O medicamento de manutenção precisa ser usado mesmo nos dias bons. Quando a pessoa está bem, é comum esquecer, e essa interrupção favorece a crise. A regularidade importa mais do que a dose isolada.',
          'Organizar os horários, guardar os inaladores em local acessível e repor antes de acabar evita falhas. Se o esquema parece complicado, a equipe pode simplificar. Anotar as crises e os gatilhos ajuda no ajuste. Um lembrete no celular ou uma caixa organizada por horário pode ajudar. Se houver efeitos adversos, a equipe deve ser consultada antes de qualquer mudança. A equipe pode ajudar a escolher dispositivos mais fáceis de usar. Usar sempre o mesmo horário reduz esquecimentos.',
        ],
      },
      {
        id: 'plano-de-acao',
        heading: 'Um plano de ação por escrito',
        paragraphs: [
          'Um plano de ação escrito deixa claro o que fazer quando os sintomas pioram. Ele costuma listar os sinais de alerta, quais medicamentos usar e em que momento procurar a UBS ou a emergência. O plano é combinado com a equipe de saúde e revisado nas consultas. O plano deve ser simples e escrito em linguagem acessível. Ele complementa, e não substitui, a orientação recebida na consulta. O plano deve indicar quem chamar e para onde ir.',
          'O plano também deve ser conhecido pela família ou por quem convive com a pessoa. Em uma crise, saber onde estão os medicamentos, os telefones úteis e o serviço de referência economiza tempo. O SAMU 192 pode ser acionado nos casos graves. Revisar o plano depois de cada crise ajuda a corrigir o que não funcionou. O documento precisa ser atualizado quando o tratamento muda. O plano deve ser revisto sempre que houver mudança de medicamento ou de serviço de referência.',
        ],
      },
      {
        id: 'quando-revisar',
        heading: 'Quando revisar o tratamento',
        paragraphs: [
          'Marque uma consulta se as crises ficarem mais frequentes, se a falta de ar aumentar, se a necessidade do medicamento de alívio crescer ou se surgirem novos sintomas. Também vale revisar o tratamento quando a pessoa deixa de fazer atividades que antes conseguia. A perda de peso, o aparecimento de inchaço nas pernas ou a piora do cansaço também justificam avaliação. Esses sinais podem indicar complicações ou outras doenças. Mudanças no catarro ou na febre também merecem atenção. A avaliação também considera o impacto da doença na família.',
          'O acompanhamento não termina quando os sintomas melhoram. A revisão periódica permite atualizar vacinas, ajustar doses, reforçar a técnica do inalador e planejar a reabilitação. O objetivo é manter a doença estável pelo maior tempo possível. A periodicidade das consultas depende da gravidade e da estabilidade. Quem tem crises frequentes precisa de acompanhamento mais próximo. A equipe também revisa a necessidade de oxigênio e de outros apoios. O objetivo é evitar atrasos no cuidado. Essa revisão é uma oportunidade para tirar dúvidas. A conversa deve incluir as dúvidas trazidas pela pessoa.',
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
        url: 'https://www.gov.br/saude/pt-br/vacinacao/calendario',
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
    updatedAt: '2026-10-21',
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
        heading: 'Quais são os sinais clássicos',
        paragraphs: [
          'O infarto acontece quando um coágulo fecha uma artéria que leva sangue ao coração e parte do músculo cardíaco fica sem oxigênio. A dor costuma ser intensa, em forma de aperto ou peso, no centro do peito. Ela pode irradiar para o braço esquerdo, o pescoço, a mandíbula ou as costas, e muitas pessoas relatam também suor frio, palidez, falta de ar, náusea e sensação de desmaio.',
          'A dor do infarto costuma durar mais de 30 minutos e não passa com repouso. Na angina, a dor aparece com esforço e melhora em minutos quando a pessoa para. Como não é possível diferenciar as duas situações em casa, toda dor no peito prolongada deve ser tratada como emergência, mesmo que a pessoa já tenha tido episódios parecidos antes.',
          'A dor também pode vir acompanhada de palpitações e de uma sensação de morte iminente. Nem sempre todos os sinais aparecem ao mesmo tempo, e a intensidade varia de pessoa para pessoa. O que importa é o conjunto e o fato de ser algo novo e prolongado, diferente de um desconforto passageiro. Quando a dor desperta a pessoa do sono, a suspeita aumenta.',
        ],
        bullets: [
          'Dor ou aperto no centro do peito',
          'Irradiação para braço, pescoço ou mandíbula',
          'Suor frio e palidez',
          'Falta de ar e náusea',
        ],
      },
      {
        id: 'formas-atipicas',
        heading: 'Quando os sintomas não são típicos',
        paragraphs: [
          'Idosos e pessoas com diabetes podem ter sintomas menos típicos. A falta de ar pode ser o sinal principal, sem dor no peito. Também pode haver cansaço súbito, tontura, desmaio, dor no abdômen parecida com gastrite ou apenas um mal-estar difícil de explicar. Nesses casos, o infarto demora a ser reconhecido, e o atraso reduz as chances de tratamento.',
          'Por isso, qualquer mal-estar súbito em quem tem risco cardiovascular merece avaliação. Histórico de infarto, pressão alta, diabetes ou tabagismo aumenta a suspeita. Não espere o sintoma passar nem tome remédio por conta própria. Se a pessoa estiver pálida, suando ou com dificuldade para respirar, a orientação é acionar o serviço de emergência.',
          'Em idosos, uma confusão mental súbita pode ser a manifestação do infarto, e não apenas do AVC. Mudanças de comportamento, agitação ou sonolência em quem tem risco cardíaco merecem a mesma urgência que a dor no peito. Familiares que conhecem o comportamento habitual são os primeiros a perceber. Na dúvida, é melhor chamar ajuda.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer diante de uma suspeita',
        paragraphs: [
          'Ligue para o SAMU 192 ou peça a alguém que ligue. Informe o que a pessoa está sentindo, a idade e o horário em que os sintomas começaram. Se não houver serviço de emergência disponível, leve a pessoa ao pronto atendimento mais próximo, de preferência a um serviço com cardiologia. Não dirija sozinho se estiver sentindo a dor.',
          'Enquanto a ajuda não chega, mantenha a pessoa em repouso, sentada ou semissentada, com as roupas afrouxadas. Não ofereça comida, bebida ou medicamento de outra pessoa. Se ela usa nitroglicerina prescrita, siga apenas a orientação do seu médico. Se perder a consciência e parar de respirar, siga as instruções do atendente para iniciar as compressões.',
          'Mantenha a linha telefônica livre e a porta destrancada para a chegada da equipe. Se houver mais de uma pessoa por perto, uma pode buscar ajuda enquanto a outra acompanha o paciente e anota o horário dos sintomas. Essas informações ajudam o hospital a definir o tratamento. Não tente levar a pessoa no colo nem deitar a cabeça para baixo.',
        ],
        bullets: [
          'Ligue 192 e informe os sintomas',
          'Mantenha a pessoa em repouso',
          'Não ofereça comida nem bebida',
          'Siga as orientações do atendente',
        ],
      },
      {
        id: 'por-que-o-tempo-conta',
        heading: 'Por que o tempo conta tanto',
        paragraphs: [
          'Quanto mais tempo o coração fica sem sangue, maior a área de músculo que morre. O tratamento para abrir a artéria, por cateterismo ou com trombolítico, precisa começar o mais cedo possível. Por isso, os serviços de saúde medem o tempo entre a chegada e o tratamento, e cada minuto conta para preservar a função do coração.',
          'O SAMU pode fazer o atendimento inicial, aplicar o trombolítico quando indicado e avisar o hospital antes da chegada. Esse encadeamento encurta o caminho até o cateterismo. Ligar para o 192 em vez de transportar a pessoa por conta própria costuma ser a escolha mais segura, porque a ambulância leva monitorização e pessoal treinado.',
          'A demora costuma vir da dúvida, não da falta de acesso: a pessoa acha que é má digestão, espera passar ou toma um remédio para azia. Esses minutos perdidos reduzem a área do coração que pode ser salva e aumentam o risco de insuficiência cardíaca no futuro. Reconhecer o próprio risco ajuda a agir mais rápido.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir o risco',
        paragraphs: [
          'Controlar a pressão, a glicose e o colesterol, não fumar, manter uma alimentação equilibrada e praticar atividade física regularmente reduzem o risco de infarto. Quem já teve um evento precisa seguir o tratamento e a reabilitação para evitar um novo episódio. Parar de fumar é a medida com maior impacto isolado.',
          'Reconhecer os próprios fatores de risco e manter consultas regulares permite agir antes da emergência. A hipertensão e o diabetes, quando tratados, deixam de ser uma ameaça silenciosa. Também vale conhecer os sinais de alerta e ensiná-los a quem mora com a pessoa.',
          'Quem tem pressão alta ou diabetes deve manter os exames em dia e não abandonar a medicação quando se sente bem. A ausência de sintomas não significa que a doença esteja controlada, e o risco continua enquanto os números estiverem altos. Uma consulta anual é uma oportunidade de revisar o plano e ajustar as metas.',
        ],
        bullets: [
          'Controle da pressão e da glicose',
          'Parar de fumar',
          'Alimentação e atividade física',
          'Seguir o tratamento prescrito',
        ],
        cta: {
          label: 'Veja a página completa sobre infarto e AVC',
          href: '/doencas/infarto-e-avc/',
        },
      },
    ],
    diseaseSlugs: ['infarto-e-avc'],
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
    updatedAt: '2026-10-21',
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
        id: 'o-que-acontece',
        heading: 'O que acontece no AVC',
        paragraphs: [
          'O AVC acontece quando uma artéria do cérebro entope ou se rompe. Cerca de 85% dos casos são isquêmicos, causados por um coágulo que interrompe o fluxo de sangue; os outros 15% são hemorrágicos, causados por sangramento. Em ambos, a região do cérebro sem oxigênio começa a morrer em minutos.',
          'Os sintomas dependem da área afetada. Por isso, o AVC pode se manifestar como fraqueza, alteração da fala, perda de visão ou desequilíbrio. Reconhecer o padrão súbito é mais importante do que tentar identificar o tipo de AVC em casa.',
          'O AVC hemorrágico costuma ser mais grave e tem a pressão alta descontrolada como principal causa. O isquêmico, mais comum, pode ter origem em placas nas artérias, coágulos vindos do coração ou causas menos frequentes. A investigação da causa é parte do tratamento e ajuda a prevenir um novo evento.',
        ],
      },
      {
        id: 'sinais',
        heading: 'Quais sinais observar',
        paragraphs: [
          'Os sinais de alerta aparecem de repente e costumam atingir apenas um lado do corpo. A pessoa pode não conseguir sorrir, levantar um braço ou falar uma frase simples. Também pode haver confusão mental, alteração da visão em um ou nos dois olhos, dor de cabeça muito intensa sem causa aparente, tontura ou dificuldade para andar.',
          'Nem todo AVC apresenta todos os sinais. Um único sintoma súbito já basta para acionar a emergência. Em idosos e em pessoas com diabetes, os sinais podem ser mais discretos, e a família costuma ser quem percebe a diferença de comportamento.',
          'Se a pessoa não consegue levantar os dois braços ou não entende uma pergunta simples, não tente convencê-la de que é cansaço. A mudança súbita é o que importa, mesmo que os sintomas pareçam melhorar depois. Sintomas que passam ainda exigem avaliação, porque podem indicar um ataque isquêmico transitório.',
        ],
        bullets: [
          'Fraqueza ou dormência de um lado do corpo',
          'Boca torta ou rosto assimétrico',
          'Fala arrastada ou difícil de entender',
          'Perda de visão em um ou nos dois olhos',
          'Tontura ou dificuldade para andar',
        ],
      },
      {
        id: 'teste-rapido',
        heading: 'O teste rápido que ajuda a lembrar',
        paragraphs: [
          'O teste FAST, conhecido em português como teste da face, do braço, da fala e do tempo, ajuda a lembrar o que observar. Peça à pessoa para sorrir: um lado da boca pode ficar caído. Peça para levantar os dois braços: um pode cair ou não subir. Peça para repetir uma frase simples: a fala pode sair arrastada ou incompreensível.',
          'Se qualquer uma dessas respostas estiver alterada, o último passo é o tempo: anote o horário de início e ligue imediatamente para o SAMU 192. Não espere para ver se melhora. O teste é uma ferramenta de triagem, não um diagnóstico, e serve para reduzir o atraso no atendimento.',
          'O teste não substitui a avaliação médica e não serve para descartar o AVC quando todas as respostas parecem normais. Se a suspeita continua, ligue para a emergência e explique o que foi observado. Na dúvida, a avaliação hospitalar é sempre a escolha mais segura. O tempo perdido não volta.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer imediatamente',
        paragraphs: [
          'Ligue para o SAMU 192 ou para os bombeiros pelo 193. Informe os sintomas, o horário em que começaram e se a pessoa tem histórico de pressão alta, diabetes ou uso de anticoagulante. Não ofereça comida, bebida ou remédio e não deixe a pessoa sozinha. Se ela vomitar, deite-a de lado para evitar aspiração.',
          'Não leve a pessoa dirigindo se houver outro recurso disponível. A ambulância pode iniciar cuidados e avisar o hospital de referência. Se a pessoa perder a consciência, mantenha as vias aéreas livres e siga as orientações do atendente até a chegada do socorro.',
          'Não dê remédio para pressão nem para dor sem orientação, porque isso pode mascarar os sintomas ou aumentar o sangramento. Informe à equipe quais medicamentos a pessoa usa habitualmente, incluindo anticoagulantes. Leve a lista ou as embalagens, se estiverem por perto. A chegada do socorro deve ser aguardada com a pessoa deitada de lado, se houver vômito.',
        ],
        bullets: [
          'Anote o horário de início dos sintomas',
          'Não ofereça comida, bebida ou remédio',
          'Não deixe a pessoa sozinha',
          'Aguarde o socorro com as vias aéreas livres',
        ],
        cta: {
          label: 'Veja a página completa sobre infarto e AVC',
          href: '/doencas/infarto-e-avc/',
        },
      },
      {
        id: 'tempo-e-tratamento',
        heading: 'Por que chegar cedo muda o tratamento',
        paragraphs: [
          'O AVC isquêmico pode ser tratado com trombolítico endovenoso quando o atendimento começa em até 4 horas e meia do início dos sintomas. Quanto mais cedo o medicamento é aplicado, maior a chance de recuperação. Em alguns centros, a retirada mecânica do coágulo também é avaliada.',
          'Antes do tratamento, a tomografia de crânio exclui o sangramento e confirma o tipo de AVC. Mesmo fora da janela do trombolítico, a avaliação hospitalar é necessária, porque existem outras medidas de suporte e de prevenção de novos eventos. Chegar cedo nunca é desperdício.',
          'A trombectomia é avaliada em centros especializados e depende de exames de imagem que mostram a artéria obstruída. Nem todo hospital oferece o procedimento, e o transporte para um centro de referência pode fazer parte do plano. A equipe informa a família sobre cada etapa e sobre os riscos.',
        ],
      },
      {
        id: 'fatores-de-risco',
        heading: 'Quem está mais exposto',
        paragraphs: [
          'A pressão alta é o principal fator de risco para o AVC. Diabetes, colesterol elevado, tabagismo, consumo excessivo de álcool, obesidade, sedentarismo, idade avançada, histórico familiar e uso de drogas ilícitas também aumentam a chance. A fibrilação atrial é uma causa importante de AVC isquêmico e pode passar despercebida.',
          'Muitos desses fatores podem ser controlados com acompanhamento regular, medicação e mudanças de hábito. Quem já teve um AVC precisa manter esse controle de forma ainda mais rigorosa, porque o risco de um segundo evento é maior.',
          'O risco aumenta com a idade e com a soma de fatores, não com um único item isolado. Uma pessoa com pressão alta, diabetes e tabagismo tem risco muito maior do que a soma de cada fator sugeriria. Por isso, o controle precisa ser completo e contínuo, com consultas regulares e exames periódicos.',
        ],
        bullets: [
          'Pressão alta sem controle',
          'Diabetes e colesterol elevado',
          'Tabagismo e álcool em excesso',
          'Fibrilação atrial',
        ],
      },
    ],
    diseaseSlugs: ['infarto-e-avc'],
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
    updatedAt: '2026-10-21',
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
          'Os sintomas da asma vão e voltam, e a intensidade varia de pessoa para pessoa e ao longo do tempo. Os mais comuns são chiado no peito, falta de ar, aperto ou pressão no peito e tosse, muitas vezes seca. Eles aparecem em episódios e podem desaparecer sozinhos ou com tratamento, o que faz muita gente adiar a procura por ajuda e conviver com limitações que poderiam ser evitadas com um tratamento simples e gratuito.',
          'Muita gente percebe sinais de aviso antes de uma crise, como nariz entupido, espirros seguidos e coceira nos olhos. A piora à noite ou no início da manhã é típica, e acordar por falta de ar ou tosse é um dado importante para o diagnóstico. Cansaço para atividades que antes eram fáceis também conta como sintoma e costuma passar despercebido. O chiado, quando presente, costuma ser mais audível na saída do ar.',
          'Durante as crises, algumas pessoas apresentam febre, suor excessivo à noite, dor de garganta, cansaço fácil ou inchaço nas pernas. Esses sinais não são exclusivos da asma e podem indicar infecção associada ou outra condição, o que reforça a importância da avaliação profissional em crises mais intensas ou fora do padrão habitual. Quando surgem junto com a falta de ar, precisam de investigação até que a causa seja esclarecida.',
        ],
        bullets: [
          'Chiado no peito, chamado de sibilância',
          'Falta de ar, que piora com esforço',
          'Aperto ou pressão no peito',
          'Tosse seca e persistente, sobretudo à noite',
          'Piora dos sintomas à noite ou no início da manhã',
          'Acordar durante a noite por falta de ar ou tosse',
          'Cansaço para atividades que antes eram fáceis',
          'Durante as crises, febre, suor excessivo à noite, dor de garganta ou inchaço nas pernas',
        ],
      },
      {
        id: 'variacao',
        heading: 'Por que os sintomas vão e voltam',
        paragraphs: [
          'Na asma, as vias aéreas ficam inflamadas e mais sensíveis de forma permanente. Quando a pessoa entra em contato com um gatilho, elas se estreitam e os sintomas aparecem; quando o gatilho some ou o tratamento está em dia, o quadro melhora. Essa oscilação é a marca da doença e explica por que ela é tão fácil de subestimar nos períodos bons, quando a rotina parece completamente normal e a pessoa chega a duvidar do diagnóstico.',
          'A inflamação continua presente mesmo sem sintomas. Por isso o medicamento de controle não deve ser interrompido quando a pessoa se sente bem: ele age justamente na inflamação que prepara a próxima crise. Suspender o uso por conta própria é uma das causas mais comuns de retorno dos episódios, e costuma acontecer justamente quando o tratamento parece ter funcionado.',
          'Reconhecer o próprio padrão ajuda a diferenciar a asma de outras condições. Sintomas que surgem sempre no mesmo contexto, como depois do exercício, ao entrar em ambientes com mofo ou durante infecções respiratórias, apontam para um gatilho identificável e facilitam o controle. Já sintomas que pioram de forma progressiva, sem relação com gatilhos, merecem investigação mais detalhada, porque podem ter outra origem.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta',
        paragraphs: [
          'Alguns sinais mostram que a crise saiu do padrão habitual e exige atendimento imediato. O critério não é apenas a intensidade do chiado: a capacidade de falar, o nível de consciência e a cor dos lábios dizem mais sobre a gravidade do que o som que vem do peito, e podem mudar em poucos minutos.',
          'Vale observar também como a pessoa respira. O uso visível da musculatura do pescoço e das costelas, conhecido como tiragem, mostra esforço para vencer a obstrução. Uma respiração muito rápida, acima de 30 por minuto, ou a incapacidade de completar frases são indícios de que o quadro está se agravando e de que o atendimento não pode ser adiado. Crianças podem ficar irritadas e recusar alimento antes de apresentarem sinais mais evidentes.',
          'Diante de qualquer sinal abaixo, procure atendimento de emergência ou vá imediatamente a um pronto atendimento. Não espere a crise melhorar sozinha nem aumente o número de doses do medicamento de alívio por conta própria. Em caso de dúvida, ligue para o SAMU 192, porque a avaliação por telefone também ajuda a decidir o melhor caminho.',
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
          'Sintomas que se repetem ao longo da semana, que acordam a pessoa à noite ou que limitam as atividades do dia a dia indicam que o controle está inadequado. Esse histórico é objetivo e ajuda muito na consulta, porque mostra em números o que a memória costuma suavizar. Vale anotar por algumas semanas antes de marcar a consulta, com data e duração de cada episódio.',
          'Não espere uma crise grave para procurar ajuda. O ajuste do tratamento costuma ser simples, com revisão da dose do corticoide inalatório, correção da técnica do inalador ou identificação de um gatilho que ainda não havia sido percebido, e muda bastante a qualidade de vida, inclusive o sono e a disposição para as tarefas do dia. Muitas pessoas só percebem o quanto estavam limitadas depois de começar o tratamento correto.',
          'A investigação começa na unidade básica de saúde, com um clínico geral. Quando o caso exige aprofundamento, o paciente é encaminhado a um pneumologista ou a um alergista. Leve à consulta os medicamentos que usa, a frequência das crises e os dias em que precisou do medicamento de alívio, porque esses dados orientam a decisão e evitam que o histórico se perca entre uma consulta e outra.',
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
    updatedAt: '2026-10-20',
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
          'O diagnóstico começa pela conversa com o profissional de saúde e pelo exame físico. São valorizadas queixas que vão e voltam, que pioram à noite ou no início da manhã e que aparecem depois do contato com um gatilho. A descrição do que acontece durante as crises ajuda tanto quanto o exame, e vale relatar também a duração dos episódios.',
          'Também entram na avaliação a história de alergias, de rinite e de asma na família, além de fatores como tabagismo, exposição a poeira e mofo e o ambiente de trabalho. Em crianças, o relato de um adulto próximo costuma ser decisivo, porque a criança pode não conseguir explicar o que sente, e os episódios noturnos são frequentemente percebidos primeiro por quem dorme no mesmo quarto.',
          'Durante a crise, o médico pode ouvir chiado nos dois pulmões e notar que a saída do ar fica mais longa. Fora da crise, o exame pode ser normal, e isso não descarta a asma. A ausência de achados no momento da consulta é justamente um dos motivos para investigar com exames de função pulmonar, que mostram o que o exame físico não revela.',
        ],
      },
      {
        id: 'espirometria',
        heading: 'Espirometria',
        paragraphs: [
          'A espirometria é o exame que confirma a obstrução das vias aéreas. Ela mede como o ar entra e sai dos pulmões e registra o volume expiratório forçado no primeiro segundo, o VEF1. O resultado é comparado com valores de referência para idade, sexo e altura, o que permite interpretar o número em relação ao esperado para aquela pessoa.',
          'O exame é repetido depois do uso de um broncodilatador. Um aumento do VEF1 de pelo menos 12% e 200 mL mostra que a obstrução é reversível, o que é característico da asma. A reversibilidade distingue a asma de doenças com obstrução fixa, como a DPOC, e ajuda a orientar o tratamento desde o início, porque confirma que a via aérea ainda responde ao medicamento.',
          'Para o exame ser útil, é preciso soprar com força e de forma coordenada. Quem tem dificuldade pode repetir a prova em outro momento. Um resultado normal fora da crise também não encerra a investigação, porque a asma é variável e pode não se manifestar no dia do teste. Nesse caso, o médico pode solicitar a prova de broncoprovocação.',
        ],
      },
      {
        id: 'outros-exames',
        heading: 'Outros exames que ajudam',
        paragraphs: [
          'Quando a espirometria não é conclusiva, outros exames ajudam a confirmar o diagnóstico e a acompanhar o tratamento. A escolha depende da história clínica e da disponibilidade do serviço, e não é preciso realizar todos eles em todos os pacientes, porque cada exame responde a uma pergunta específica.',
          'Alguns medem a inflamação ou a resposta das vias aéreas, outros servem para afastar doenças com sintomas parecidos, como rinite, refluxo e infecções. O objetivo não é acumular exames, mas chegar a uma resposta com o menor número necessário de testes, respeitando o que a história clínica já indica.',
          'Vale conversar com o profissional sobre o que cada exame acrescenta antes de fazê-lo. Em alguns casos, o resultado não muda a conduta e pode ser dispensado, o que economiza tempo e evita ansiedade desnecessária para o paciente. O diálogo também ajuda a entender para que serve cada resultado.',
        ],
        bullets: [
          'Teste de broncoprovocação, quando os sintomas são sugestivos mas a espirometria é normal',
          'Medida do pico de fluxo expiratório, para acompanhar o controle em alguns casos',
          'Óxido nítrico exalado (FeNO), que mede a inflamação das vias aéreas',
          'Testes de alergia, quando é útil identificar os alérgenos envolvidos',
          'Radiografia de tórax, para afastar outras doenças pulmonares',
          'Avaliação da rinite, que costuma acompanhar a asma',
          'Gasometria arterial em crises graves, para medir o oxigênio no sangue',
        ],
      },
      {
        id: 'diagnostico-em-criancas',
        heading: 'Diagnóstico em crianças',
        paragraphs: [
          'Em crianças pequenas, a espirometria pode ser difícil de realizar, porque o exame exige coordenação. Nesses casos, o diagnóstico fica apoiado nos sintomas, na resposta ao tratamento e no acompanhamento ao longo do tempo, com observação cuidadosa do padrão das crises e dos períodos sem sintomas.',
          'O médico precisa descartar outras causas de tosse e chiado, como bronquiolite, rinite alérgica e refluxo, antes de concluir que se trata de asma. Também observa se há melhora com o uso correto do medicamento de controle e se os sintomas retornam quando o tratamento é suspenso, o que costuma confirmar a suspeita.',
          'O diagnóstico na infância não é definitivo para toda a vida. Parte das crianças deixa de ter sintomas na adolescência, enquanto outras mantêm a doença. Por isso o acompanhamento continua mesmo em períodos longos sem crises, e a família deve saber reconhecer os sinais de piora para procurar ajuda sem demora.',
        ],
      },
      {
        id: 'depois-do-diagnostico',
        heading: 'Depois do diagnóstico',
        paragraphs: [
          'Confirmado o diagnóstico, o passo seguinte é montar um plano de tratamento contínuo e aprender a reconhecer os sinais de piora. Esse plano inclui o medicamento de controle diário, a orientação sobre o que fazer nas crises e a revisão periódica da técnica do inalador, que costuma ser o elo mais frágil do cuidado e o mais fácil de corrigir.',
          'O acompanhamento regular é o que mantém a asma controlada. As consultas permitem ajustar a dose para o menor valor que sustente o controle, reduzindo efeitos adversos, e identificar precocemente qualquer mudança no quadro, antes que ela vire uma crise.',
          'O diagnóstico também serve para afastar dúvidas e reduzir o medo. Entender por que os sintomas aparecem e o que fazer em cada situação costuma melhorar a adesão ao tratamento, que é justamente o fator que mais influencia o controle da doença a longo prazo. Informação clara, dada na consulta, evita que o paciente recorra a soluções sem comprovação.',
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
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/a/asma/view',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-20',
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
          'Usar apenas o de alívio com frequência é sinal de que o controle está inadequado, porque ele não trata a inflamação que está por trás dos sintomas. O ajuste da terapêutica busca a menor dose necessária para manter o controle, reduzindo efeitos adversos e mantendo a proteção ao longo do tempo.',
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
          'A técnica de uso do inalador faz parte do tratamento. Quando está errada, boa parte do medicamento fica na boca e na garganta em vez de chegar aos pulmões, e o efeito diminui sem que a pessoa perceba.',
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
          'No SUS, o tratamento da asma é gratuito. Segundo o Protocolo Clínico e Diretrizes Terapêuticas do Ministério da Saúde, a beclometasona e o salbutamol inalatórios e a prednisona estão disponíveis nas unidades de saúde, e o acompanhamento é feito na Unidade Básica de Saúde (UBS).',
          'Em crises mais intensas, o profissional de saúde pode prescrever corticosteroides em comprimidos, como a prednisona, além dos medicamentos de uso contínuo, com reavaliação na sequência. Manter o tratamento sem interrupções depende de retirar os medicamentos com regularidade e de ir às consultas de acompanhamento.',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Acompanhamento',
        paragraphs: [
          'O acompanhamento regular é o que sustenta o controle. As consultas de retorno são periódicas e mais frequentes quando o controle ainda não está bom; depois de uma crise, é importante voltar ao serviço de saúde para reavaliar o tratamento.',
          'Entre uma consulta e outra, alguns hábitos ajudam a manter o plano em dia:',
        ],
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
          'Guardar esse plano à mão e revisá-lo nas consultas ajuda a reconhecer cedo os sinais de que o controle escapou. Peça esse plano ao profissional de saúde: faz parte do cuidado, não é um extra, e costuma incluir orientações específicas para o seu caso.',
        ],
      },
      {
        id: 'quando-buscar-socorro',
        heading: 'Quando buscar atendimento com urgência',
        paragraphs: [
          'A asma pode ser grave e, em casos extremos e raros, levar à morte quando a crise não recebe o tratamento correto. Por isso, certos sinais pedem atendimento imediato e não podem esperar a consulta de rotina.',
          'Ao surgir qualquer um desses sinais, procure atendimento imediatamente: em caso de dúvida, procure atendimento de emergência ou vá ao pronto atendimento mais próximo, sem esperar a consulta agendada nem tentar resolver a situação em casa.',
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
          'Manter o uso diário, revisar a técnica e não aumentar a dose sem orientação são atitudes simples que mantêm a asma controlada. Com acompanhamento correto e constante, a maioria das pessoas com asma leva uma vida normal, com trabalho, estudo e atividade física sem restrições impostas pela doença.',
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
          'A revisão pode incluir mudança de dose, associação de medicamentos ou investigação de gatilhos que ainda não foram identificados. Quanto antes o ajuste é feito, menor o risco de uma crise grave e maior a chance de manter a rotina sem interrupções.',
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
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/a/asma/view',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-20',
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
          'Cada pessoa tem gatilhos próprios, e o conjunto deles muda ao longo da vida. Os mais comuns são ácaros e poeira, mofo, pelos de animais, fumaça de cigarro, mudanças de tempo, infecções respiratórias e exercício. Reconhecer quais afetam você é o primeiro passo para reduzir a exposição e evitar crises repetidas.',
          'Anotar quando e onde as crises acontecem ajuda a reconhecer o padrão. Um diário simples, com data, local, atividade e sintomas, mostra relações que passariam despercebidas e dá ao profissional informações concretas para ajustar o tratamento, sem depender apenas da memória do paciente.',
          'Alguns gatilhos são fáceis de evitar, como fumaça de cigarro e cheiros fortes. Outros, como mudanças de tempo e infecções virais, não estão sob controle da pessoa, e é aí que o medicamento de controle diário entra: ele reduz a sensibilidade das vias aéreas para que esses encontros provoquem menos crises.',
        ],
        bullets: [
          'Mudanças de tempo, com ar frio e variações bruscas de temperatura',
          'Contato com ácaros, mofo, baratas e pelos de animais',
          'Fumaça de cigarro, poluição e cheiros fortes',
          'Infecções respiratórias, como resfriados e gripe',
          'Exercício físico intenso sem aquecimento',
          'Emoções fortes, como ansiedade, estresse e até riso intenso',
        ],
      },
      {
        id: 'casa',
        heading: 'Cuidados dentro de casa',
        paragraphs: [
          'Boa parte dos gatilhos está dentro de casa, e pequenas mudanças na rotina reduzem bastante a exposição. O objetivo não é deixar o ambiente estéril, e sim diminuir o acúmulo de poeira, a umidade e as fontes de fumaça, que são os pontos de maior impacto.',
          'Quem tem alergia a pelos de animais deve evitar criar gato ou cachorro; se já tem, vale manter o animal longe do quarto e evitar que suba na cama. Capas impermeáveis no colchão e no travesseiro também ajudam a bloquear os ácaros, principalmente no local onde se passa a maior parte da noite.',
          'Cortinas pesadas, tapetes e bichos de pelúcia guardam poeira e são difíceis de limpar. Trocar por materiais laváveis e arejar os cômodos todos os dias costuma trazer alívio a quem tem rinite associada, quadro que anda de mãos dadas com a asma e serve como sinal de alerta para a família. Em dias muito secos, manter a casa úmida na medida certa também ajuda a reduzir a irritação das vias aéreas.',
        ],
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
          'As infecções respiratórias estão entre os principais gatilhos de crise. Um resfriado aparentemente simples pode piorar o controle por semanas, porque aumenta a inflamação e estreita ainda mais as vias aéreas. Por isso, manter a vacinação em dia faz parte do controle da asma e não deve ser tratado como medida secundária, sobretudo nos meses de maior circulação de vírus.',
          'Pessoas com asma em uso de corticoide inalatório ou sistêmico, na forma moderada ou grave, estão entre os grupos prioritários da campanha anual de vacinação contra a gripe. A vacina é segura nesse grupo e reduz o risco de infecção, que costuma desencadear crises. Quem tem asma não precisa adiar a vacina por causa da doença, salvo orientação específica do serviço de saúde.',
          'A caderneta de vacinação deve ser conferida nas consultas de rotina, e não apenas quando a pessoa procura atendimento por uma crise. Além da gripe, o calendário nacional prevê outras vacinas conforme a idade e a situação de saúde, e o profissional pode indicar o que está pendente e onde se imunizar.',
        ],
      },
      {
        id: 'vida-ativa',
        heading: 'Vida ativa e controle da doença',
        paragraphs: [
          'A atividade física faz parte do tratamento e melhora a capacidade respiratória. Quando o exercício provoca crises com frequência, o controle pode estar inadequado e o tratamento costuma ser ajustado, em vez de a pessoa abandonar a prática. Parar de se movimentar piora o condicionamento e aumenta a sensação de falta de ar.',
          'Aquecer antes do exercício e escolher horários com ar mais úmido ajudam quem tem asma induzida por esforço. A natação costuma ser bem tolerada por causa da umidade do ar, mas não é obrigatória: o importante é encontrar uma atividade sustentável e manter a regularidade, com liberação do profissional de saúde quando necessário.',
          'Manter o peso saudável e o medicamento de controle em uso diário reduz a chance de crises, inclusive as provocadas por esforço. O ganho de condicionamento físico também diminui a sensação de falta de ar nas tarefas do dia a dia, o que melhora o sono, a disposição e a qualidade de vida de forma geral, mesmo em quem tem a forma mais grave da doença.',
        ],
      },
      {
        id: 'plano-de-acao',
        heading: 'Plano de ação por escrito',
        paragraphs: [
          'Muitos serviços entregam um plano de ação por escrito, que explica o que fazer quando os sintomas pioram e quando procurar ajuda. Vale guardá-lo à mão e revisá-lo nas consultas, porque ele orienta a decisão nos momentos em que é difícil pensar com calma, como no meio de uma crise à noite, e evita atrasos que podem agravar o quadro.',
          'O plano costuma dividir os sintomas em faixas, do controle estável ao quadro grave, e indica o que fazer em cada uma: manter o tratamento, aumentar o medicamento de alívio ou procurar atendimento imediatamente. Essa escala transforma uma situação confusa em passos objetivos.',
          'Ter esse plano não substitui o tratamento diário, mas organiza a resposta à piora. Se o serviço ainda não oferece, peça na próxima consulta e combine quais sinais indicam aumento do medicamento de alívio e quais exigem atendimento imediato, para que a decisão não dependa de improviso.',
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
    updatedAt: '2026-10-20',
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
          'Infarto e AVC compartilham a maior parte dos fatores de risco. Ambos resultam de problemas nos vasos sanguíneos, e os mesmos hábitos que obstruem as artérias do coração também obstruem as do cérebro. Por isso, quem tem risco de um evento geralmente tem risco do outro.',
          'Alguns fatores não podem ser modificados, como idade, sexo masculino e histórico familiar. Outros dependem do controle diário, como pressão, glicose, colesterol, peso, alimentação, atividade física e tabagismo. É nessa segunda parte que a prevenção acontece.',
          'O controle começa pelo conhecimento: saber a própria pressão, a glicose e o colesterol é o primeiro passo para mudar o curso. Muitas pessoas convivem com números alterados por anos sem saber. A prevenção é mais eficaz quando começa cedo, mas nunca é tarde para reduzir o risco. Uma avaliação anual ajuda a acompanhar a evolução e a ajustar o plano.',
        ],
      },
      {
        id: 'hipertensao',
        heading: 'A hipertensão é o fator central',
        paragraphs: [
          'A hipertensão é o principal fator de risco para o AVC e um dos principais para o infarto. Pressão alta danifica a parede das artérias ao longo dos anos, favorece o acúmulo de placas e aumenta a chance de rompimento de vasos no cérebro. Muitas pessoas não sentem nada e descobrem a pressão alta apenas em exames.',
          'Medir a pressão periodicamente e seguir o tratamento indicado reduz o risco. Quando a pressão fica controlada, o benefício aparece tanto na prevenção do infarto quanto na do AVC. Quem já teve um evento precisa de metas definidas pela equipe de saúde.',
          'A pressão alta costuma ser silenciosa e pode lesar órgãos por anos sem sintomas. Por isso, a medida regular em casa e nas consultas é mais confiável do que a percepção de como a pessoa se sente. Quando a medicação é interrompida, a pressão volta a subir, e o risco também. O aparelho deve ser validado e a técnica, conferida com a equipe. A automedição em casa deve seguir a orientação da equipe, com aparelho adequado, manguito do tamanho certo e horários definidos.',
        ],
        bullets: [
          'Medir a pressão com regularidade',
          'Tomar a medicação todos os dias',
          'Reduzir o sal na alimentação',
        ],
      },
      {
        id: 'diabetes-e-colesterol',
        heading: 'Diabetes e colesterol alto',
        paragraphs: [
          'O diabetes acelera a doença das artérias e aumenta de duas a quatro vezes o risco de infarto. A glicose alta lesiona os vasos e favorece a formação de placas. O colesterol elevado, especialmente o LDL, também contribui para o entupimento das artérias do coração e do cérebro.',
          'O controle inclui alimentação, atividade física e medicação quando prescrita. Exames periódicos mostram se as metas estão sendo alcançadas. Não interromper o tratamento por conta própria é parte essencial do cuidado.',
          'A alimentação com menos açúcar, menos gordura saturada e mais fibras ajuda no controle. O acompanhamento deve incluir avaliação periódica de exames e ajuste das doses quando necessário. Metas individuais são definidas pela equipe, considerando idade e outras doenças. O tratamento não deve ser interrompido por conta própria, mesmo quando os exames melhoram.',
        ],
        bullets: ['Controlar a glicose', 'Acompanhar o colesterol', 'Manter as consultas de rotina'],
      },
      {
        id: 'tabagismo-e-alcool',
        heading: 'Tabagismo, álcool e outras substâncias',
        paragraphs: [
          'Fumar danifica as artérias, aumenta a coagulação e acelera a formação de placas. O risco cai quando a pessoa para de fumar, e o benefício começa em poucos dias. O consumo excessivo de álcool também eleva a pressão e o risco de AVC hemorrágico.',
          'Drogas ilícitas, como a cocaína, podem provocar espasmo das artérias e elevar abruptamente a pressão, desencadeando infarto ou AVC em pessoas jovens. Evitar essas substâncias é uma medida de prevenção que não depende de medicação.',
          'O tabagismo passivo também oferece risco, especialmente para crianças e para quem convive com fumantes. Ambientes livres de fumo protegem toda a família. A redução do álcool deve ser conversada com a equipe, especialmente em quem já tem pressão alta. Parar de fumar pode exigir apoio, medicação e acompanhamento.',
        ],
        bullets: ['Parar de fumar', 'Reduzir o consumo de álcool', 'Evitar drogas ilícitas'],
      },
      {
        id: 'fibrilacao-atrial',
        heading: 'Fibrilação atrial e outras arritmias',
        paragraphs: [
          'Na fibrilação atrial, o coração bate de forma irregular e o sangue pode formar coágulos dentro do átrio. Se um coágulo sai do coração e chega ao cérebro, causa AVC isquêmico. A fibrilação atrial pode ser assintomática e ser descoberta em um eletrocardiograma de rotina.',
          'O tratamento com anticoagulante reduz o risco de AVC quando indicado. A decisão depende do risco individual e deve ser tomada pela equipe médica. Palpitações, cansaço e falta de ar são sinais que merecem investigação.',
          'Palpitações que começam e param, cansaço aos esforços e falta de ar podem indicar arritmia. O eletrocardiograma é simples e pode ser feito na atenção básica. Quem tem fibrilação atrial e não pode usar anticoagulante precisa de avaliação especializada. O controle do ritmo e da frequência também faz parte do cuidado.',
        ],
      },
      {
        id: 'o-que-faz-diferenca',
        heading: 'O que faz diferença na prática',
        paragraphs: [
          'Pequenas mudanças sustentadas por anos fazem mais diferença do que atitudes isoladas. Reduzir o sal, manter o peso, caminhar regularmente, parar de fumar e tomar os medicamentos nos horários certos são medidas que se somam.',
          'Quem tem histórico familiar ou já teve um evento deve manter acompanhamento próximo. A prevenção não termina com a alta hospitalar; ela continua nas consultas, nos exames e na rotina de casa.',
          'As consultas são o momento de revisar metas e ajustar o plano. Levar os exames e anotar dúvidas ajuda a aproveitar melhor o atendimento. O apoio da família facilita a adesão e a manutenção dos hábitos. Pequenos progressos mantidos ao longo do tempo têm mais valor do que mudanças radicais e passageiras. Também vale conhecer os próprios números e anotá-los entre as consultas. Pressão, glicose e colesterol variam, e o registro ajuda a equipe a decidir se o tratamento está funcionando.',
        ],
        cta: {
          label: 'Veja a página completa sobre infarto e AVC',
          href: '/doencas/infarto-e-avc/',
        },
      },
    ],
    diseaseSlugs: ['infarto-e-avc'],
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
    updatedAt: '2026-10-21',
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
        heading: 'A avaliação começa na urgência',
        paragraphs: [
          'O diagnóstico de infarto e de AVC é feito no atendimento de urgência, com base nos sintomas, no exame clínico e em exames que podem ser feitos em poucos minutos. O objetivo é confirmar o evento e iniciar o tratamento sem atraso, porque o tempo de isquemia determina o dano.',
          'A equipe registra o horário de início dos sintomas, mede pressão, temperatura e glicemia, e monitora o ritmo cardíaco. No AVC, também verifica se a pessoa usa anticoagulante, informação que influencia a decisão sobre trombolítico.',
          'A avaliação inicial é rápida e focada em excluir as causas que exigem tratamento imediato. No infarto, a equipe busca sinais de instabilidade, como arritmia, queda de pressão e falta de ar. No AVC, verifica a permeabilidade das vias aéreas, o nível de consciência e a glicemia, que pode simular ou agravar o quadro. O exame neurológico é repetido ao longo do atendimento para detectar piora. A equipe também pergunta sobre alergias, medicamentos em uso e doenças prévias, porque essas informações mudam as escolhas. A triagem costuma ser feita por protocolo, com prioridade para os casos que podem perder função rapidamente. O registro do horário e dos medicamentos acompanha o paciente durante todo o atendimento.',
        ],
      },
      {
        id: 'infarto',
        heading: 'Como o infarto é confirmado',
        paragraphs: [
          'No infarto, o eletrocardiograma é o primeiro exame e deve ser feito assim que a pessoa chega. Alterações no traçado ajudam a localizar a artéria comprometida. O exame de sangue mede a troponina, proteína liberada quando o músculo cardíaco sofre lesão.',
          'A combinação de sintomas, eletrocardiograma e troponina confirma o diagnóstico. Em alguns casos, o eletrocardiograma se repete e a troponina é dosada em série, porque o primeiro resultado pode ser normal no início. O ecocardiograma e o cateterismo completam a avaliação.',
          'A troponina pode levar algumas horas para subir, por isso um resultado inicial normal não descarta o infarto. Quando há dúvida, a pessoa permanece em observação e os exames são repetidos. O eletrocardiograma também pode ser comparado com traçados antigos, quando disponíveis. A avaliação seriada é o que confirma os casos duvidosos e evita alta precoce. Quando o eletrocardiograma não é conclusivo e a suspeita permanece, o paciente pode precisar de exames adicionais antes de sair do hospital. O resultado do cateterismo, quando realizado, mostra exatamente onde está a obstrução e orienta o tratamento.',
        ],
        bullets: [
          'Eletrocardiograma na chegada',
          'Dosagem de troponina',
          'Ecocardiograma e cateterismo',
        ],
      },
      {
        id: 'avc',
        heading: 'Como o AVC é confirmado',
        paragraphs: [
          'No AVC, a tomografia computadorizada de crânio é o exame inicial mais usado. Ela diferencia o AVC isquêmico do hemorrágico e afasta outras causas de sintomas neurológicos. A ressonância magnética é mais sensível para áreas pequenas ou recentes.',
          'Depois da imagem, a investigação busca a causa. Doppler de carótidas avalia estreitamentos; eletrocardiograma e monitorização do ritmo procuram fibrilação atrial; ecocardiograma identifica problemas cardíacos que podem gerar êmbolos.',
          'A tomografia pode ser normal nas primeiras horas do AVC isquêmico, e isso não exclui o diagnóstico. A decisão de tratar considera o tempo, o exame clínico e a imagem. Em caso de dúvida, a ressonância ou a repetição da tomografia podem ser necessárias. O tempo de início dos sintomas continua sendo a informação mais valiosa para escolher o tratamento. A avaliação também considera se a pessoa acorda com os sintomas, o que pode indicar que o evento começou durante o sono e dificultar a estimativa do horário. A equipe também avalia a deglutição antes de oferecer qualquer líquido, porque o AVC pode causar dificuldade para engolir e risco de aspiração.',
        ],
        bullets: ['Tomografia de crânio', 'Doppler de carótidas', 'Monitorização do ritmo cardíaco'],
      },
      {
        id: 'exames-complementares',
        heading: 'Exames que completam a investigação',
        paragraphs: [
          'Exames de sangue avaliam glicose, colesterol, função renal e coagulação, e ajudam a excluir condições que imitam o AVC, como hipoglicemia. A radiografia de tórax e o eletrocardiograma fazem parte da avaliação do infarto e das suas complicações.',
          'O diagnóstico diferencial é parte do processo. Dor no peito pode vir de angina, dissecção de aorta, embolia pulmonar ou problemas digestivos. Sintomas neurológicos podem decorrer de epilepsia, enxaqueca com aura ou infecção. Por isso, nenhum sinal deve ser interpretado isoladamente.',
          'A escolha dos exames depende do quadro e não deve atrasar o tratamento. Em uma emergência, os testes são feitos em paralelo, e a equipe prioriza os que mudam a conduta. Resultados de baixo risco são interpretados junto com a história e o exame físico. Nenhum exame isolado substitui a avaliação clínica, e a repetição pode ser necessária. A equipe explica quais resultados já estão disponíveis e o que ainda será feito, para que a família acompanhe o processo. A história clínica detalhada, com início, duração e fatores que pioram os sintomas, orienta a escolha dos exames.',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'O diagnóstico continua depois da alta',
        paragraphs: [
          'Depois da alta, o acompanhamento inclui controle de pressão, glicose e colesterol, revisão dos medicamentos e avaliação da função cardíaca ou neurológica. Exames periódicos mostram se as metas estão sendo alcançadas e se há sinais de novo evento.',
          'Quem teve infarto ou AVC deve saber quais sintomas exigem retorno imediato ao serviço de saúde. Reconhecer os sinais de alerta e manter as consultas em dia são partes do diagnóstico contínuo, não apenas do atendimento de emergência.',
          'O retorno ao serviço de saúde não deve esperar a próxima consulta marcada quando há dor no peito, falta de ar, piora neurológica ou novos sintomas. Antecipar o atendimento é parte do plano, e não um exagero. A equipe deve ser informada sobre qualquer mudança no estado de saúde, inclusive após o término do período de reabilitação. O plano de alta inclui por escrito os medicamentos, as doses, os horários e os sinais que exigem retorno imediato.',
        ],
        cta: {
          label: 'Veja a página completa sobre infarto e AVC',
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
    updatedAt: '2026-10-21',
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
        heading: 'As primeiras horas decidem o rumo',
        paragraphs: [
          'O tratamento do infarto e do AVC começa nos primeiros minutos, antes mesmo da confirmação completa. A prioridade é restabelecer o fluxo de sangue e evitar que a área de tecido sem oxigênio aumente. Por isso, o atendimento é organizado em protocolos com tempos definidos.',
          'No infarto, a angioplastia primária é o procedimento preferido quando disponível. No AVC isquêmico, o trombolítico endovenoso pode ser aplicado em até 4 horas e meia. Em ambos, o serviço de emergência precisa ser acionado cedo, e não depois de horas de espera.',
          'O reconhecimento precoce pelos familiares também faz parte do tratamento. Quem presencia os sintomas pode informar o horário de início e ajudar a equipe a decidir sobre trombolítico ou cateterismo. A ligação para o SAMU deve ser feita assim que a suspeita surgir, sem esperar a confirmação. O tempo gasto tentando convencer a pessoa a procurar ajuda também conta.',
        ],
      },
      {
        id: 'infarto',
        heading: 'Abrir a artéria do coração',
        paragraphs: [
          'A angioplastia abre a artéria com um cateter e, na maioria dos casos, implanta um stent para manter o vaso aberto. Quando o centro não consegue realizar o procedimento no tempo necessário, o trombolítico é usado para dissolver o coágulo. Medicamentos para evitar novos coágulos acompanham o tratamento.',
          'Depois do procedimento, a pessoa fica monitorada e recebe orientação sobre medicação, reabilitação e retorno gradual às atividades. O sucesso depende também de chegar cedo e de seguir o tratamento após a alta.',
          'Após a alta, o controle dos fatores de risco e a adesão aos medicamentos são tão importantes quanto o procedimento. A reestenose e novos eventos são prevenidos com acompanhamento próximo. A reabilitação cardíaca começa ainda no hospital, com orientações graduais e metas individualizadas. O retorno às atividades é combinado caso a caso.',
        ],
        bullets: [
          'Angioplastia para abrir a artéria',
          'Trombolítico quando indicado',
          'Medicamentos para evitar novos coágulos',
        ],
      },
      {
        id: 'avc-isquemico',
        heading: 'O tratamento do AVC isquêmico',
        paragraphs: [
          'No AVC isquêmico, o trombolítico endovenoso dissolve o coágulo e pode reduzir as sequelas quando aplicado dentro da janela de 4 horas e meia. Em alguns centros, a trombectomia mecânica retira o coágulo por cateter. A escolha depende do tipo de obstrução, do tempo e das condições de cada pessoa.',
          'Antes do trombolítico, a tomografia exclui o sangramento. O controle da pressão e da glicose e a monitorização em unidade especializada completam o cuidado. Quanto antes o fluxo é restabelecido, maior a chance de recuperação.',
          'A janela de 4 horas e meia é contada a partir do início dos sintomas, e não da chegada ao hospital. Por isso, a informação do paciente ou de quem presenciou o evento é decisiva. Quando o horário é incerto, a equipe usa os recursos disponíveis para estimar e decide com base no risco. A comunicação entre a ambulância e o hospital reduz o tempo perdido.',
        ],
        bullets: [
          'Trombolítico dentro da janela de tempo',
          'Trombectomia em casos selecionados',
          'Monitorização em unidade especializada',
        ],
      },
      {
        id: 'avc-hemorragico',
        heading: 'O tratamento do AVC hemorrágico',
        paragraphs: [
          'No AVC hemorrágico, o objetivo é controlar o sangramento e a pressão arterial. A cirurgia pode ser indicada em casos selecionados, especialmente quando há hematoma extenso ou risco de compressão do cérebro. O tratamento é individualizado e depende da causa do sangramento.',
          'Pessoas que usam anticoagulantes precisam de avaliação imediata, porque o medicamento pode aumentar o sangramento. A equipe também investiga aneurismas e malformações vasculares quando a causa não é a pressão alta.',
          'A reabilitação também é necessária depois do AVC hemorrágico, assim como o controle rigoroso da pressão para evitar novo sangramento. O acompanhamento neurológico avalia a evolução e ajusta o tratamento ao longo dos meses. A família deve ser orientada sobre sinais de nova hemorragia e sobre quando buscar ajuda.',
        ],
      },
      {
        id: 'reabilitacao',
        heading: 'Reabilitação e retorno às atividades',
        paragraphs: [
          'A reabilitação começa cedo e é adaptada às sequelas. Fisioterapia, terapia ocupacional e fonoaudiologia ajudam a recuperar movimentos, equilíbrio, fala e deglutição. No SUS, os Centros Especializados em Reabilitação (CER) oferecem esses serviços.',
          'No infarto, a reabilitação cardíaca combina exercício supervisionado, orientação nutricional e apoio para parar de fumar. A retomada de esforços, do trabalho e da vida sexual deve ser discutida com a equipe, porque depende da função do coração.',
          'A intensidade e o ritmo da reabilitação dependem das sequelas e da condição clínica. A participação da família e a continuidade dos exercícios em casa ajudam a manter os ganhos. O retorno gradual às atividades é planejado com a equipe, que avalia a segurança de cada etapa. A reabilitação pode durar meses e precisa de metas realistas. A frequência das sessões e a necessidade de equipamentos são definidas pela equipe, conforme a evolução.',
        ],
        bullets: [
          'Fisioterapia e terapia ocupacional',
          'Fonoaudiologia para fala e deglutição',
          'Reabilitação cardíaca supervisionada',
        ],
      },
      {
        id: 'depois-da-alta',
        heading: 'O cuidado depois da alta',
        paragraphs: [
          'Depois da alta, o tratamento continua com medicamentos, consultas e mudanças de hábito. Tomar os remédios nos horários certos, medir a pressão e a glicose e voltar às consultas reduz o risco de um novo evento.',
          'A família tem um papel importante: ajudar na organização dos horários, reconhecer sinais de piora e apoiar a reabilitação. Dirigir, voltar ao trabalho e viajar devem ser conversados com a equipe, que avalia cada caso.',
          'As consultas devem incluir revisão dos medicamentos, checagem de exames e orientação sobre sinais de alerta. O plano é ajustado conforme a evolução, e não definido de uma vez. O apoio social e a rede de saúde também fazem parte do cuidado, especialmente em casos com sequelas. A família deve saber a quem recorrer em caso de dúvida. É importante manter um registro dos sintomas e das dúvidas para levar às consultas, e não interromper nenhum medicamento sem conversar com a equipe. O seguimento pode ser compartilhado entre a atenção básica e o especialista.',
        ],
        cta: {
          label: 'Veja a página completa sobre infarto e AVC',
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
    updatedAt: '2026-10-21',
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
          'A maior parte das dores de garganta é causada por vírus e melhora sozinha em poucos dias. Junto com a dor costumam aparecer corrimento nasal, tosse, febre baixa e mal-estar, e a pessoa continua conseguindo comer e beber, ainda que com desconforto. O apetite pode cair, mas a hidratação costuma seguir possível. Em geral, o quadro não impede a rotina por muitos dias e não deixa sequelas quando a causa é viral, mas o desconforto pode atrapalhar o sono e a alimentação.',
          'Na amigdalite bacteriana, o quadro tende a ser mais intenso: febre alta, dor forte ao engolir, placas de pus nas amígdalas e gânglios do pescoço aumentados. Mesmo assim, nenhum desses sinais confirma a causa sozinho, porque as formas virais também podem cursar com febre e placas, e a aparência da garganta engana. A dúvida sobre a causa é comum e não deve ser resolvida por conta própria, porque o tratamento muda conforme o agente.',
          'Por isso, o que orienta a decisão de procurar ajuda não é acertar o diagnóstico em casa, e sim reconhecer os sinais de gravidade. Um quadro que segue o padrão esperado pode ser acompanhado na unidade básica; um quadro fora do padrão precisa de avaliação imediata. Na dúvida, procurar atendimento cedo é mais seguro do que esperar. Reconhecer cedo o que foge do habitual é o que evita atraso no atendimento e reduz o risco de complicação.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais que pedem avaliação imediata',
        paragraphs: [
          'Alguns sinais indicam que a infecção passou dos limites da garganta ou está fechando a passagem de ar. Eles não podem esperar em casa, mesmo que a dor pareça suportável. Dificuldade para respirar, salivação incontrolável e inchaço em um só lado são os mais importantes. Quando qualquer um deles aparecer, o caminho é o serviço de saúde, não a farmácia, e a avaliação não deve ser adiada por causa do horário.',
          'Vale olhar também para o comportamento da pessoa: recusa persistente de líquidos, prostração e sonolência são sinais importantes, sobretudo em crianças pequenas. Um adulto que consegue falar e beber pode estar em risco menor do que uma criança apática que parou de aceitar água. A mudança de comportamento costuma ser o primeiro aviso. Se a criança estiver menos ativa ou bebendo menos que o normal, antecipe a avaliação mesmo que a febre seja baixa.',
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
          'Dificuldade para respirar é emergência. Nesse caso, procure atendimento de emergência imediatamente ou leve a pessoa ao pronto atendimento mais próximo. Não espere a dor diminuir para sair de casa. Chamar ajuda e manter a pessoa sentada e calma enquanto o atendimento chega ajuda a preservar a passagem de ar.',
          'O inchaço em um só lado da garganta com dificuldade para abrir a boca pode indicar um acúmulo de pus ao redor da amígdala, que precisa de avaliação e tratamento no serviço de saúde. Esse quadro costuma piorar rápido e pode exigir drenagem. A dor intensa de um lado só, com voz abafada, é outro sinal que costuma acompanhar o acúmulo de pus.',
          'Em crianças, respiração rápida, retração das costelas e salivação também pedem emergência. Quadros que fecham a passagem de ar evoluem rápido e não devem ser tratados em casa. Nesses casos, o transporte para o hospital não deve atrasar. A calma de quem acompanha também conta: gritar e sacudir a criança piora a respiração e assusta ainda mais.',
        ],
      },
      {
        id: 'prazo',
        heading: 'O prazo que costuma indicar avaliação',
        paragraphs: [
          'Quando a dor de garganta passa de quatro dias sem nenhuma melhora, ou quando impede comer e beber, a recomendação é procurar atendimento mesmo sem sinal de gravidade. O prazo vale também para quem já usou remédio sintomático sem resposta. Melhora parcial também merece registro, porque o que resta pode indicar outra causa ou uma complicação em curso.',
          'Também vale investigar quem tem dor de garganta várias vezes ao ano, porque a repetição pode ter outra causa por trás, como o refluxo gastroesofágico, a rinite ou a exposição constante à fumaça. Nesses casos, o antibiótico repetido não resolve e pode atrasar o diagnóstico. Anotar a frequência das crises ao longo do ano ajuda o profissional a decidir o que investigar e o que apenas observar.',
          'Febre que volta depois de alguns dias de melhora, dor de ouvido e alterações na urina merecem reavaliação, porque podem indicar complicações como otite, sinusite ou inflamação dos rins. O retorno não é sinal de fraqueza: é parte do tratamento. Levar os exames anteriores para a consulta evita repetir o que já foi feito e dá ao profissional uma linha do tempo.',
        ],
      },
      {
        id: 'criancas-e-idosos',
        heading: 'Crianças pequenas, idosos e quem tem doença crônica',
        paragraphs: [
          'Em crianças pequenas, a avaliação costuma ser mais precoce porque elas desidratam rápido e têm menos reserva. Recusa de líquidos, menos xixi, boca seca e choro sem lágrimas são sinais de alerta mesmo sem febre alta. Oferecer pequenas quantidades de líquido com frequência costuma funcionar melhor do que copos grandes, que assustam a criança.',
          'Idosos e pessoas com doenças crônicas ou imunidade baixa também merecem atenção antes do prazo habitual. Nesses grupos, a infecção pode avançar sem febre exuberante, e a mudança de comportamento aparece antes dos sintomas clássicos. A febre pode ser baixa ou ausente, e a queda de energia é o sinal mais confiável para perceber que algo piorou.',
          'Quem usa medicamentos contínuos deve avisar o profissional antes de tomar antitérmicos ou analgésicos por conta própria, porque algumas combinações e alguns quadros exigem cuidado. Levar a lista de remédios para a consulta ajuda. O profissional precisa saber também sobre alergias, gravidez e doenças do rim ou do fígado antes de indicar qualquer remédio.',
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
    updatedAt: '2026-10-21',
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
          'Ao tossir, espirrar, falar ou beijar, a pessoa infectada lança pequenas gotículas com vírus ou bactérias. Quem está perto respira essas gotículas e pode adoecer. Não é preciso contato íntimo: uma conversa próxima já basta. A proximidade durante uma conversa prolongada em local fechado já é suficiente para o contato com as gotículas. Gotículas maiores caem perto, enquanto as menores podem alcançar quem está a alguns metros na mesma sala.',
          'A transmissão é mais fácil em ambientes fechados, onde as gotículas ficam mais tempo suspensas e a distância entre as pessoas diminui. Salas pequenas, transporte coletivo e salas de aula concentram esse risco, sobretudo no inverno. Quanto menor o espaço e maior o tempo de permanência, maior a chance de o ar concentrar partículas infecciosas. Em dias frios, as pessoas fecham portas e janelas, e a renovação do ar cai justamente quando deveria aumentar.',
          'A forma aguda é contagiosa desde o início dos sintomas, quando a dor de garganta e a febre aparecem. Não é preciso esperar o quadro piorar para adotar cuidado com as pessoas próximas. Cobrir a boca e lavar as mãos já reduz a circulação. Arejar a sala por alguns minutos várias vezes ao dia ajuda mais do que abrir a janela uma vez só.',
        ],
      },
      {
        id: 'maos-e-objetos',
        heading: 'Pelas mãos e por objetos compartilhados',
        paragraphs: [
          'As mãos levam os germes da garganta para copos, talheres, garrafas e escovas de dente. Ao compartilhar esses objetos, a infecção encontra outra pessoa sem que ninguém tenha tossido perto dela. Uma superfície aparentemente limpa pode carregar gotículas depositadas horas antes, por isso a lavagem importa. Copos usados por várias pessoas na mesma mesa são um exemplo frequente dentro de famílias e no trabalho.',
          'Levar a mão contaminada à boca, ao nariz ou aos olhos também é suficiente para o germe entrar no organismo. Por isso, lavar as mãos vale mais do que evitar apenas o contato direto com quem está doente. Água e sabão são suficientes na rotina; produtos especiais só são necessários em situações específicas.',
          'Objetos de uso pessoal não devem circular durante a crise. Copos, talheres e escovas precisam ser individuais, e a louça deve ser lavada com água e sabão depois do uso. Toalhas de rosto também não devem ser compartilhadas. Garrafas e copos usados na mesa devem ser lavados antes de voltar ao armário, e não apenas enxaguados.',
        ],
      },
      {
        id: 'ambientes-fechados',
        heading: 'Ambientes fechados favorecem',
        paragraphs: [
          'Em locais fechados e aglomerados, as gotículas ficam mais tempo no ar e a distância entre as pessoas diminui. É por isso que as infecções de garganta circulam mais no inverno, quando todos ficam em ambientes fechados. Salas de espera, elevadores e veículos com janelas fechadas repetem o mesmo cenário de proximidade e ar parado.',
          'Escolas e creches reúnem muitas crianças próximas, e a transmissão cresce nesses espaços. Ventilação e afastamento de quem está sintomático reduzem a circulação, e a limpeza de superfícies completa o cuidado. Quando uma criança adoece, avisar a escola ajuda a instituição a reforçar a limpeza e a ventilação. Higienizar mesas e brinquedos compartilhados complementa a ventilação em creches e escolas.',
          'O ar-condicionado resseca as mucosas e diminui a resistência das amígdalas. Ambientes climatizados e sem renovação de ar juntam dois fatores: ar seco e gente próxima. Abrir janelas e umidificar o ar ajuda enquanto o equipamento estiver ligado. Manter o filtro do ar-condicionado limpo reduz a poeira que também irrita a garganta.',
        ],
      },
      {
        id: 'quando-deixa-de-ser-contagioso',
        heading: 'Quando a dor de garganta não é contagiosa',
        paragraphs: [
          'A amigdalite de repetição, que volta várias vezes ao ano, costuma ter outras causas, como o refluxo gastroesofágico, e não passa de uma pessoa para outra. O mesmo vale para a faringite crônica, que se mantém por irritação e não por contágio. Nesses quadros, o que ajuda é tratar o refluxo e afastar a fumaça, e não evitar o convívio com outras pessoas.',
          'A dor de garganta também pode vir do ar seco, da fumaça, do uso intenso da voz e de alergias. Nesses casos não há infecção para transmitir, e o tratamento se concentra em afastar o que irrita. A melhora costuma vir quando o irritante é retirado, e não quando se acrescenta mais um remédio à rotina.',
          'Quando a causa é bacteriana e o antibiótico é iniciado, o risco de transmissão cai, mas isso não dispensa os cuidados com objetos e mãos durante os primeiros dias. A orientação sobre o tempo de afastamento da escola ou do trabalho é do profissional que avalia. Dúvidas sobre o retorno à escola ou ao trabalho devem ser resolvidas com quem acompanha o caso, não por imitação do que aconteceu com outra pessoa. A decisão de afastamento considera febre, estado geral e o tipo de atividade, e não apenas a dor.',
        ],
      },
      {
        id: 'reduzir-em-casa',
        heading: 'Como reduzir a transmissão em casa',
        paragraphs: [
          'Dentro de casa, as medidas mais úteis são simples: lavar as mãos com frequência, não compartilhar objetos de uso pessoal, cobrir a boca ao tossir e manter os ambientes ventilados. Nada disso exige gasto ou equipamento especial. Separar um copo e uma toalha para quem está doente é uma medida simples e fácil de manter.',
          'Quem está doente deve evitar beijos na boca e dormir em ambiente arejado. Essas medidas valem para todos os moradores, não apenas para a pessoa com sintomas, e devem continuar até a melhora clínica. Ventilação cruzada, com duas janelas abertas, renova o ar mais rápido do que uma janela apenas. Isso vale até a febre ceder.',
        ],
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
    updatedAt: '2026-10-21',
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
          'O diagnóstico começa pela conversa e pelo exame da garganta. Com um abaixador de língua, o profissional observa a cor das amígdalas, a presença de placas de pus e o tamanho dos gânglios do pescoço. O profissional também apalpa o pescoço para sentir gânglios dolorosos e observa se há mau hálito ou dificuldade para abrir a boca. O aspecto da faringe é comparado dos dois lados, porque diferenças de iluminação podem simular placas.',
          'Febre alta, dor forte ao engolir e placas de pus aumentam a suspeita de bactéria. Tosse e corrimento nasal apontam mais para vírus. Nenhum desses elementos, isolado, fecha o diagnóstico, e a impressão muda quando os sinais são analisados em conjunto. A idade muda a probabilidade: crianças pequenas têm mais quadros virais, e adolescentes e adultos jovens concentram os casos de estreptococo.',
          'A conversa também investiga tempo de evolução, contato com pessoas doentes, refluxo, alergias, fumo e uso da voz. Essas informações mudam a hipótese e evitam tratar como infecção algo que é irritação. Perguntar sobre remédios já usados também faz parte. Saber se houve contato com alguém com o mesmo quadro ajuda a estimar o risco de transmissão na família ou na escola.',
        ],
      },
      {
        id: 'exames',
        heading: 'Quando um exame ajuda a confirmar',
        paragraphs: [
          'O hemograma e a proteína C reativa ajudam quando o quadro é duvidoso: alterações compatíveis com bactéria reforçam a suspeita, mas não substituem o exame clínico. O resultado é lido junto com os sintomas, não isoladamente. Um hemograma normal não descarta infecção, e um exame alterado não confirma bactéria sem a leitura do conjunto. A combinação de sintomas e exames é mais confiável do que qualquer número isolado.',
          'A dosagem de anticorpos antiestreptolisina mostra infecção recente por estreptococo e é usada em situações específicas, como a investigação de febre reumática. Ela não serve para decidir antibiótico em toda dor de garganta, e pedir o exame sem indicação confunde a conduta. Se o resultado não muda a conduta, o exame pode ser dispensado, o que reduz custo e desconforto.',
          'Exames de urina e de função renal entram quando há suspeita de complicação. Em adolescentes com gânglios muito aumentados e fígado ou baço palpáveis, a pesquisa de Epstein-Barr ajuda a afastar mononucleose. A presença de gânglios muito dolorosos e de cansaço intenso também orienta a investigação de outras causas.',
        ],
      },
      {
        id: 'teste-rapido',
        heading: 'O teste rápido e a cultura',
        paragraphs: [
          'O teste rápido da secreção da garganta detecta o estreptococo do grupo A em poucos minutos. Quando positivo, confirma a causa bacteriana e justifica antibiótico; quando negativo, torna a bactéria menos provável. O teste deve ser feito antes do antibiótico, porque o medicamento pode tornar o resultado falso negativo. O resultado chega rápido e ajuda a decidir na mesma consulta, o que evita antibiótico desnecessário.',
          'A cultura é mais lenta, mas identifica o agente e permite testar a sensibilidade aos antibióticos. Ela é útil quando o teste rápido não está disponível ou quando o quadro não responde ao tratamento, porque orienta a troca do medicamento. A escolha entre teste rápido e cultura depende do que está disponível no serviço e da urgência do resultado.',
          'Um resultado negativo não significa que a dor não exista nem que não precise de cuidado: apenas torna a causa bacteriana menos provável. O profissional decide se repete o teste ou se trata pelos sinais clínicos. Crianças pequenas costumam exigir mais cautela nessa decisão. Em epidemias familiares ou escolares, identificar o agente ajuda a orientar os contatos e a reduzir novos casos.',
        ],
      },
      {
        id: 'nao-da-em-casa',
        heading: 'Por que não dá para decidir em casa',
        paragraphs: [
          'Olhar a garganta no espelho não permite diferenciar vírus de bactéria, e placas esbranquiçadas podem aparecer nas duas situações. A luz da sala e o ângulo também escondem o que está no fundo da boca. Nem a cor das placas nem o tamanho das amígdalas são critérios suficientes para iniciar antibiótico.',
          'Fotografias e listas de sintomas na internet também não substituem o exame. Elas podem ajudar a organizar a conversa, mas não a decisão, e muitas descrevem quadros que só o profissional sabe distinguir. Um vídeo gravado em casa pode até mostrar a garganta, mas não substitui a palpação nem a avaliação do conjunto. Descrições genéricas de garganta inflamada não distinguem causas que exigem condutas diferentes.',
          'Quem define a causa e a necessidade de antibiótico é a avaliação profissional, com exame e, quando indicado, teste da secreção. Chegar com informações sobre o início dos sintomas e os remédios usados acelera essa avaliação. Se a consulta não esclarecer, o profissional pode reavaliar em poucos dias ou encaminhar ao especialista. Reavaliar é melhor do que insistir no mesmo tratamento.',
        ],
      },
      {
        id: 'outras-causas',
        heading: 'Outras causas de dor de garganta',
        paragraphs: [
          'Nem toda dor de garganta vem de infecção. Ar seco, fumaça, refluxo gastroesofágico e uso intenso da voz também irritam a garganta e podem causar dor, sem agente infeccioso envolvido. O ambiente de trabalho seco e climatizado é um exemplo comum de irritação que parece infecção e não é.',
          'A rinite e a sinusite mantêm secreção escorrendo pela garganta e provocam pigarro e desconforto constante. Tratar a causa de base muda o resultado, e o alívio sintomático sozinho costuma durar pouco. Quando a rinite é tratada, a secreção diminui e a garganta deixa de ser constantemente irritada.',
          'Em adultos tabagistas, rouquidão que piora progressivamente precisa de avaliação para afastar tumor de laringe. É um quadro raro, mas que não se resolve com sintomáticos e exige exame especializado. A avaliação especializada também é indicada quando a rouquidão dura semanas, mesmo sem outros sintomas. Fumo e álcool aumentam o risco desses quadros e devem ser discutidos na consulta. O especialista avalia a laringe e pode solicitar biópsia se necessário.',
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
    updatedAt: '2026-10-21',
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
          'Quando a causa é viral, o corpo resolve a infecção sozinho. O tratamento serve para aliviar os sintomas e manter a pessoa confortável e hidratada, sem pressa de voltar à rotina. O objetivo não é cortar a infecção, e sim atravessar os dias de maior sintoma sem desidratar nem perder peso demais. A maioria das pessoas melhora em poucos dias, mas a tosse e o pigarro podem durar mais.',
          'Repouso, líquidos ao longo do dia e alimentos macios ajudam a passar pelos dias de maior desconforto. Não é preciso forçar alimentação sólida quando a dor ao engolir está intensa, e a hidratação tem prioridade. Sucos, água e caldos ajudam, mas bebidas muito ácidas ou gaseificadas podem arder e devem ser testadas com cautela. Sopas mornas e purês são exemplos práticos, e o sal em excesso deve ser evitado.',
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
          'Na amigdalite bacteriana, o antibiótico é indicado por um profissional e deve ser tomado até a última dose, mesmo depois de a dor passar. O alívio dos sintomas não significa que a bactéria foi eliminada. O horário das doses precisa ser respeitado, e esquecer uma tomada não deve ser compensado dobrando a dose seguinte. Anotar o horário das tomadas ajuda a manter a regularidade, principalmente em tratamentos de vários dias.',
          'Parar antes do fim pode deixar bactérias vivas no organismo e permitir complicações, como a febre reumática, que atinge as articulações e pode lesionar o coração, e a inflamação dos rins. Essas complicações aparecem semanas depois e podem deixar sequelas. Quando aparecem manchas na pele, urina escura ou inchaço, a avaliação deve ser imediata para investigar essas complicações.',
          'O profissional escolhe o medicamento e a duração conforme idade, peso e quadro clínico. Receitas antigas e sobras de tratamentos anteriores não devem ser reaproveitadas, porque a dose e o tempo podem não servir para o quadro atual. O profissional também considera alergias prévias e o uso de outros medicamentos antes de definir a prescrição. O farmacêutico também pode esclarecer interações e a melhor forma de tomar o medicamento.',
        ],
      },
      {
        id: 'medicamentos-sintomaticos',
        heading: 'Medicamentos para os sintomas',
        paragraphs: [
          'Analgésicos e antitérmicos comuns reduzem dor e febre. A escolha e o intervalo dependem da idade, do peso e das condições de saúde de cada pessoa, e a bula deve ser consultada. O alívio sintomático permite comer e beber, o que sustenta a recuperação e evita desidratação. Tomar o analgésico antes das refeições pode facilitar a alimentação quando a dor é intensa. E devem ser usados na dose certa.',
          'Pastilhas e sprays de garganta aliviam por pouco tempo e não tratam a causa. Gargarejo com água morna e sal pode trazer conforto, mas não substitui a avaliação quando há sinal de gravidade. Não se deve associar vários produtos com o mesmo princípio ativo, porque a dose total pode passar do limite seguro.',
          'Crianças não devem receber remédios de adulto nem doses calculadas por estimativa. Quem tem alergia a algum medicamento ou usa outros remédios contínuos precisa avisar antes de tomar qualquer coisa, inclusive produtos naturais. Medicamentos vencidos ou guardados sem orientação não devem ser usados, mesmo que a embalagem pareça intacta. A dose infantil é calculada por peso, e não pela idade aparente ou pelo tamanho da criança. Perguntar ao profissional antes de associar produtos é sempre mais seguro.',
        ],
      },
      {
        id: 'nao-ajuda',
        heading: 'O que não ajuda',
        paragraphs: [
          'Antibiótico por conta própria na dor de garganta viral não acelera a melhora, porque não age sobre vírus, causa efeitos colaterais e aumenta a resistência das bactérias. O problema não fica só em quem toma: bactérias resistentes circulam na comunidade. Usar antibiótico para um resfriado comum é um dos caminhos mais frequentes para a resistência bacteriana. A resistência torna infecções futuras mais difíceis de tratar, inclusive as que exigem internação.',
          'Remédios caseiros com substâncias irritantes, como álcool ou pimenta, pioram o desconforto. O mesmo vale para gargarejos muito concentrados, que agridem a mucosa em vez de ajudar. Fumaça e bebida alcoólica também prolongam o desconforto e devem ser evitadas durante a recuperação.',
          'Não há alimento ou suplemento que elimine a infecção. Uma alimentação variada e a hidratação ajudam no conforto, mas não substituem o tratamento quando ele é indicado. O descanso tem papel real: dormir mal atrasa a recuperação e aumenta a sensação de dor. A recuperação completa exige tempo e não deve ser apressada.',
        ],
      },
      {
        id: 'reavaliacao',
        heading: 'Quando voltar para reavaliação',
        paragraphs: [
          'Se a dor não melhorar em poucos dias, piorar ou vier com dificuldade para engolir, volte ao serviço de saúde para reavaliação. O retorno permite rever a hipótese e ajustar o tratamento. A reavaliação é especialmente importante em crianças pequenas, idosos e pessoas com doença crônica.',
          'Febre que retorna depois de dias de melhora, dor de ouvido, manchas no corpo ou urina escura também pedem avaliação, porque podem indicar complicação. Nesses casos, exames complementares podem ser necessários. Levar a lista de medicamentos usados e a data de início dos sintomas facilita a consulta de retorno.',
          'Dificuldade para respirar é emergência e pede ajuda imediata: procure atendimento de emergência. Não espere a próxima consulta marcada quando houver esse sinal. Se o atendimento inicial foi em uma unidade de pronto atendimento, o retorno pode ser na unidade básica de referência. Sinais de desidratação, como boca seca e pouca urina, também justificam retorno imediato. A lista de sinais de alerta deve ficar visível para a família.',
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
    updatedAt: '2026-10-21',
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
          'A maior parte dos germes da garganta chega às mãos e aos objetos de uso pessoal antes de chegar à boca de outra pessoa. Por isso, a higiene interrompe o caminho da transmissão em dois pontos. O caminho mais comum é a mão contaminada tocar a boca, o nariz ou os olhos, e não apenas a gotícula aspirada. Campanhas de higiene funcionam melhor quando explicam o porquê, e não apenas a regra.',
          'Lavar as mãos com água e sabão, principalmente depois de tossir, espirrar ou tocar objetos de uso coletivo, é a medida isolada com melhor resultado. Esfregar as palmas, os dorsos, entre os dedos e as unhas faz diferença. Sabão comum é suficiente; não é preciso produto antisséptico para a rotina doméstica. Álcool em gel ajuda quando não há pia, mas não substitui a lavagem em mãos visivelmente sujas.',
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
          'Ambientes ventilados e menos aglomerados reduzem a chance de contato com as gotículas de alguém infectado. Abrir janelas e renovar o ar é mais útil do que apenas espalhar álcool em superfícies. Um ambiente arejado dilui as partículas e reduz a concentração que uma pessoa próxima respira. Salas cheias com portas fechadas concentram justamente o que se quer evitar.',
          'O cigarro, ativo ou passivo, irrita a garganta e aumenta a chance de infecções das amígdalas. O ar-condicionado também resseca as mucosas e reduz a resistência local, principalmente quando o aparelho não é limpo com frequência. Cortinas, tapetes e almofadas acumulam poeira e fumaça, e a limpeza periódica ajuda quem tem crises repetidas. Ambientes com fumaça de cigarro devem ser evitados por toda a família, não só por quem tem crises. A limpeza do filtro e das grelhas evita que o aparelho espalhe poeira.',
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
          'Em quem apresenta amigdalite várias vezes ao ano, vale investigar fatores que mantêm a inflamação, como o refluxo gastroesofágico e a exposição constante à fumaça. Sem tratar esses fatores, as crises voltam mesmo com antibiótico correto. O refluxo pode ser assintomático e ainda assim irritar a garganta durante a noite, por isso a investigação vale a pena. Quando o refluxo é tratado, a irritação noturna diminui e as crises de garganta ficam menos frequentes.',
          'Tratar resfriados e quadros alérgicos, como a rinite, ajuda a reduzir as idas ao serviço de saúde por dor de garganta. A rinite mantém secreção escorrendo pela garganta e provoca pigarro e irritação constante. Quando a causa alérgica é controlada, o uso de antibióticos e de sintomáticos tende a cair.',
          'A cirurgia para retirar as amígdalas só é indicada em casos específicos, quando as crises são muito frequentes ou surgem complicações. Mesmo depois da retirada, faringites e laringites continuam possíveis, porque outras estruturas também inflamam. A decisão cirúrgica considera a frequência das crises, o impacto na respiração e o histórico de complicações. A conversa sobre cirurgia deve incluir riscos, benefícios e o que muda depois do procedimento.',
        ],
      },
      {
        id: 'criancas-na-escola',
        heading: 'Crianças na escola e na creche',
        paragraphs: [
          'Crianças pequenas adoecem mais porque ainda estão construindo defesa contra os vírus comuns e porque ficam próximas em creches e escolas. Cada infecção ensina o sistema imunológico, e a frequência tende a cair com a idade. A creche e a escola são ambientes de aprendizado imunológico, e a maioria das infecções não impede a frequência por muitos dias. A frequência escolar não deve ser sacrificada por precaução excessiva.',
          'Ensinar a cobrir a boca ao tossir, lavar as mãos e não compartilhar garrafas e talheres reduz a circulação dentro de casa. Esses hábitos precisam ser repetidos com paciência, porque crianças pequenas esquecem a instrução. Reforçar a higiene nas trocas de turno e antes das refeições reduz a transmissão entre as crianças. Ensine pelo exemplo: crianças copiam o comportamento de quem cuida delas.',
          'Ambientes com muitas crianças exigem ventilação e limpeza frequente de superfícies. Afastar quem está com febre e dor intensa também diminui o número de novos casos, embora a maioria das infecções seja leve. Comunicar casos à escola permite organizar a limpeza e avisar as famílias, sem estigmatizar a criança.',
        ],
      },
      {
        id: 'o-que-nao-previne',
        heading: 'O que não previne',
        paragraphs: [
          'Gargarejo com sal, vitamina C em dose alta e remédios caseiros não impedem a infecção. Ar frio e sorvete também não causam faringite, porque a causa são vírus e bactérias, e não a temperatura. Não há evidência de que choque térmico ou bebida gelada provoquem inflamação da garganta. Bebidas muito geladas podem incomodar uma garganta já inflamada, mas não são a causa do quadro. O desconforto transitório não indica que a bebida causou a infecção.',
          'Não existe vacina contra a dor de garganta comum. As vacinas oferecidas pelo sistema público protegem contra outras doenças e não cobrem todos os agentes que causam faringite, por isso a higiene continua sendo central. Manter o calendário vacinal em dia protege contra doenças que podem começar com sintomas de garganta. Quem tem indicação deve manter as doses em dia.',
          'Higiene das mãos, ventilação e manter distância de quem está doente são as medidas com melhor resultado. Elas custam pouco e podem ser mantidas durante todo o ano, não apenas no inverno. As mesmas medidas servem para quem cuida de crianças, idosos e pessoas com doença crônica.',
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
    updatedAt: '2026-10-21',
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
          'A gastroenterite aguda começa de repente, e a diarreia costuma ser o sinal que mais chama atenção. O Ministério da Saúde considera doença diarreica aguda quando há três ou mais evacuações de fezes líquidas ou amolecidas em 24 horas. Na maior parte dos casos, a diarreia chega acompanhada de náusea, vômito, cólicas e dor na barriga.',
          'Esses sintomas nascem da inflamação do estômago e do intestino. A mucosa irritada passa a perder mais líquido do que consegue reabsorver, e é isso que deixa as fezes amolecidas. O vômito aparece quando o organismo tenta expulsar o que irrita o tubo digestivo, e a cólica é o intestino se contraindo com mais força e mais frequência. Com o trânsito acelerado, sobra menos tempo para absorver água e sais, e o corpo perde os dois.',
          'Vale anotar quantas vezes a pessoa evacua por dia, se as fezes têm sangue ou muco e se há febre. Essas três informações ajudam o profissional a separar um episódio comum de um quadro que pede exame. Enquanto isso, comece a oferecer líquidos em goles pequenos e frequentes já na primeira evacuação líquida.',
        ],
        bullets: [
          'Diarreia, com fezes líquidas ou amolecidas',
          'Náusea e vômito',
          'Cólicas e dor na barriga',
          'Febre, que nem sempre está presente',
          'Sangue ou muco nas fezes, em alguns casos',
        ],
      },
      {
        id: 'como-o-quadro-comeca',
        heading: 'Como o quadro costuma começar',
        paragraphs: [
          'Na maioria das vezes, os sintomas digestivos vêm primeiro e se instalam ao longo do dia, sem um aviso claro. A pessoa passa a ir ao banheiro com mais frequência, sente o corpo mais cansado do que o habitual e perde o apetite antes mesmo de perceber que está doente. Muitas vezes isso é confundido com cansaço.',
          'O intervalo entre a infecção e o primeiro sintoma depende do agente e da quantidade de germes que entrou no organismo. Duas pessoas que comeram a mesma coisa podem adoecer em momentos diferentes, e uma delas pode nem adoecer. Por isso, nem sempre é possível apontar a refeição responsável, e procurar a refeição culpada ajuda pouco no cuidado imediato.',
          'Nas primeiras horas, o mais útil é observar o ritmo do quadro. Quando as evacuações se espaçam e os vômitos diminuem, o episódio tende a ceder sozinho. Se acontece o contrário, com idas ao banheiro cada vez mais próximas ou vômitos que não param, procure atendimento em vez de esperar.',
        ],
      },
      {
        id: 'sinais-gerais',
        heading: 'Outros sinais que podem aparecer',
        paragraphs: [
          'Além dos sintomas digestivos, a gastroenterite costuma vir com febre, dor de cabeça, dores no corpo e sensação de mal-estar. Em muitos casos, esse mal-estar aparece antes da diarreia e é o primeiro aviso de que algo está fora do lugar. Em crianças, ele costuma vir com irritabilidade e sonolência.',
          'Esses sinais fazem parte da resposta do organismo à infecção. A temperatura sobe porque o corpo reage ao agente, e as dores no corpo vêm da mesma mobilização. O que muda o rumo do episódio, porém, não é a febre em si, e sim a quantidade de água e sais que a pessoa perde a cada evacuação e a cada vômito.',
          'Medir a temperatura ao longo do dia e observar se a febre cede ou se mantém ajuda a acompanhar a evolução. Não é preciso baixar a febre a qualquer custo, e qualquer remédio deve ser discutido com um profissional, sobretudo em crianças. Se a febre durar vários dias ou vier com piora do estado geral, procure atendimento.',
        ],
      },
      {
        id: 'sinais-de-desidratacao',
        heading: 'Sinais de desidratação',
        paragraphs: [
          'Quando a perda de líquidos é maior do que a reposição, aparecem os sinais de desidratação. São eles que definem a urgência do atendimento, mais do que o número de evacuações ou a presença de febre. Os sinais surgem de forma gradual e podem passar despercebidos por quem convive com a pessoa.',
          'Crianças pequenas e pessoas idosas chegam a esse ponto mais rápido. Na criança, a proporção de água em relação ao peso é maior e a reserva para compensar a perda é menor. Na pessoa idosa, a sensação de sede costuma ser mais fraca, o que atrasa a reposição justamente quando ela é mais necessária. Observar a urina e o estado da boca é, nesse caso, mais confiável do que perguntar se há sede.',
          'O Ministério da Saúde orienta procurar a unidade de saúde mais próxima quando dois ou mais desses sinais estão presentes. No caminho, continue oferecendo soro de reidratação oral em colheradas; se a pessoa estiver vomitando, ofereça uma colher a cada poucos minutos.',
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
          'A diarreia que passa de 14 dias deixa de ser aguda e passa a ser classificada como persistente, o que exige investigação, porque outras causas entram na lista. Quando não há melhora em dois dias, o Ministério da Saúde também recomenda voltar ao serviço de saúde, mesmo que a pessoa pareça bem.',
          'Ao procurar atendimento, leve o que você anotou: número de evacuações por dia, presença de sangue ou muco, temperatura e quanto a pessoa conseguiu beber. Esses dados poupam tempo e ajudam a definir se o caso pode ser tratado em casa ou precisa de reidratação na unidade.',
        ],
      },
      {
        id: 'nem-toda-diarreia-e-gastroenterite',
        heading: 'Nem toda diarreia é gastroenterite',
        paragraphs: [
          'A diarreia também aparece em quadros sem infecção. Medicamentos como antibióticos e laxantes, intolerância à lactose, doença celíaca, síndrome do intestino irritável e doenças inflamatórias intestinais podem causar diarreia sem germe a tratar.',
          'Nesses casos, o intestino reage a algo que não consegue digerir ou absorver, ou está inflamado de forma crônica. O resultado se parece com uma infecção, mas o tratamento é outro, e o antibiótico não ajuda e pode até piorar o quadro.',
          'Quando a diarreia se arrasta, vem com perda de peso, sangue nas fezes ou mudança do hábito intestinal, o profissional investiga outras causas. Quem tem episódios de repetição deve, portanto, avaliar com um clínico geral em vez de tratar por conta própria.',
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
    updatedAt: '2026-10-20',
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
          'Sim. A transmissão é fecal-oral: os microrganismos saem pelas fezes e entram pela boca, por meio de água e alimentos contaminados, de mãos que não foram lavadas e do contato direto com uma pessoa doente. Não é preciso contato íntimo: basta levar a mão à boca depois de tocar em uma superfície contaminada. Por isso, lavar as mãos protege mais do que evitar abraços, e a medida vale para visitas e para quem cuida da pessoa doente.',
          'É essa via que explica por que a doença se espalha com facilidade dentro de casa. Uma troca de fralda sem lavar as mãos, um copo compartilhado ou uma superfície mal higienizada bastam para levar o agente de uma pessoa a outra. O norovírus, em especial, costuma causar surtos em ambientes fechados, como escolas, creches e locais de trabalho.',
          'Lavar as mãos com sabão depois de usar o banheiro, trocar fraldas ou limpar vômito, tratar a água de consumo e higienizar frutas e verduras são as medidas que mais reduzem o risco em casa. Vale também separar os utensílios da pessoa doente e, quando possível, o banheiro.',
        ],
      },
      {
        id: 'quanto-tempo-dura',
        heading: 'Quanto tempo dura?',
        paragraphs: [
          'Na maioria dos casos, alguns dias. A doença é autolimitada, o que significa que o organismo resolve a infecção sem tratamento específico, e costuma durar até 14 dias. Quando a diarreia passa desse período, ela é classificada como persistente e precisa de investigação.',
          'O tempo varia conforme o agente e o estado de saúde de quem adoece. Episódios virais costumam ser mais curtos, enquanto quadros bacterianos ou parasitários podem se arrastar por mais tempo. O que decide a gravidade, porém, não é a duração em si, e sim a quantidade de líquido reposta ao longo dos dias, porque a perda continua enquanto a diarreia não cede.',
          'O prazo que indica voltar ao serviço de saúde é de dois dias sem melhora ou quando a diarreia piora, mesmo sem outro sinal de gravidade. Em crianças pequenas e em pessoas idosas, procure atendimento mais cedo, porque a desidratação pode avançar em poucas horas.',
        ],
      },
      {
        id: 'crianca-deve-parar-de-comer',
        heading: 'Criança com diarreia deve parar de comer?',
        paragraphs: [
          'Não. Suspender a alimentação piora o quadro e atrapalha a recuperação. A orientação é manter a alimentação habitual e a amamentação, oferecendo o soro de reidratação oral à parte, em goles pequenos e frequentes ao longo do dia.',
          'O intestino inflamado continua capaz de absorver nutrientes, e é deles que a criança tira a energia para se recuperar. Ficar sem comer prolonga a diarreia e aumenta a perda de peso, sobretudo em quem já está abaixo do peso.',
          'Na prática, ofereça preparações leves em porções pequenas e mais vezes ao dia, sem forçar. Em bebês, a amamentação deve continuar durante todo o episódio. Se a criança recusar tudo por muitas horas, procure orientação. Recusar uma refeição não é o mesmo que recusar líquido, e é o líquido que não pode faltar em nenhuma hora do dia. Veja mais em [o que comer durante a gastroenterite](/artigos/gastroenterite-alimentacao/).',
        ],
      },
      {
        id: 'antibiotico-ajuda',
        heading: 'Antibiótico ajuda na diarreia?',
        paragraphs: [
          'Na maioria dos casos, não. A gastroenterite comum é viral ou se resolve sozinha, e o antibiótico só se justifica quando o profissional identifica disenteria, com sangue ou muco nas fezes, ou cólera, sempre com acompanhamento médico.',
          'Usar antibiótico contra uma infecção viral não encurta a diarreia e ainda elimina bactérias que fazem parte da flora intestinal, o que pode agravar o quadro. O uso sem indicação também favorece a resistência dos microrganismos aos medicamentos, um problema que a Organização Mundial da Saúde trata como uma das principais ameaças à saúde pública.',
          'Quando há suspeita de causa bacteriana, a coleta de fezes é feita antes do antibiótico, para não prejudicar o resultado do exame. Quem começa o remédio por conta própria pode tornar essa investigação mais difícil e atrasar o tratamento correto. Por isso, o exame tem hora certa, e o antibiótico também tem, o que muda a conduta.',
        ],
      },
      {
        id: 'posso-tomar-remedio-para-parar',
        heading: 'Posso tomar remédio para parar a diarreia?',
        paragraphs: [
          'Não por conta própria, sobretudo em crianças. Medicamentos que paralisam o intestino não tratam a causa, não repõem a água e os sais perdidos e podem esconder sinais de gravidade.',
          'A diarreia é uma forma de defesa: o intestino acelera para expulsar o agente e as toxinas que ele produz. Quando o remédio interrompe esse movimento, o conteúdo irritante permanece por mais tempo em contato com a mucosa, e a melhora aparente pode vir junto com uma piora silenciosa. Em crianças, o risco é maior porque a reserva de líquidos é menor.',
          'O que funciona é a reposição de líquidos desde o primeiro episódio. Entenda o motivo em [por que não parar a diarreia com remédio](/artigos/gastroenterite-remedios/). O soro continua sendo a base em qualquer cenário.',
        ],
      },
      {
        id: 'quando-procurar-atendimento',
        heading: 'Quando procurar atendimento?',
        paragraphs: [
          'Volte ao serviço de saúde se não houver melhora em dois dias ou se aparecer sangue ou muco nas fezes, vômitos repetidos, muita sede, diminuição da urina ou sonolência excessiva. Esses sinais indicam que a perda de líquidos passou do que se consegue repor em casa.',
          'O atendimento pode começar na unidade básica de saúde mais próxima, que avalia o estado de hidratação e orienta a reposição. Em quadros graves, com desidratação intensa, procure uma unidade de pronto atendimento ou a emergência de um hospital, onde é possível fazer a reposição por via intravenosa.',
          'Em bebês e pessoas idosas, vale procurar mais cedo, mesmo sem sinal evidente, porque a reserva de água é menor e a piora pode ser rápida. A ligação para o SAMU, no 192, fica reservada a situações de risco imediato à vida; vômitos e diarreia, por si sós, não são motivo para acionar o serviço.',
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
          'Medicamentos que interrompem a diarreia agem sobre o sintoma, não sobre a causa. A gastroenterite é, na maioria das vezes, viral e se resolve sozinha, e o que decide o desfecho é repor a água e os sais perdidos, e não bloquear as evacuações. O remédio pode até dar a impressão de melhora nas primeiras horas, mas o alívio não significa recuperação: a infecção continua o seu curso.',
          'A diarreia tem uma função. O intestino acelera o trânsito para eliminar o agente e as toxinas que ele produz, e quando o remédio paralisa esse movimento, o conteúdo irritante permanece mais tempo em contato com a mucosa. Isso pode prolongar a infecção e aumentar a absorção de toxinas.',
          'Há ainda um risco prático. Ao reduzir as evacuações, o remédio esconde justamente o sinal que indica piora, como o aparecimento de sangue ou a intensificação da diarreia. Quem está tomando o medicamento pode demorar a perceber que o quadro mudou. Por isso, esses remédios não devem ser usados por conta própria, sobretudo em crianças, que desidratam mais rápido.',
        ],
      },
      {
        id: 'o-que-realmente-funciona',
        heading: 'O que realmente funciona',
        paragraphs: [
          'A base do cuidado é o soro de reidratação oral, oferecido em goles pequenos e frequentes desde o primeiro episódio de diarreia. Ele repõe água e eletrólitos na proporção certa, o que evita a desidratação. Não é preciso esperar o quadro piorar para começar, nem esperar a sede aparecer: cada evacuação representa uma perda que precisa ser compensada.',
          'A composição do soro não é arbitrária. A glicose que ele contém ajuda o intestino a absorver o sódio e, com ele, a água, mesmo quando a mucosa está inflamada. É essa combinação que faz o soro funcionar melhor do que a água pura, que sozinha não repõe os sais perdidos e pode diluir ainda mais o que restou no organismo.',
          'Em crianças, o Ministério da Saúde recomenda ainda o zinco, uma vez ao dia por 10 a 14 dias, o que encurta o episódio. Manter a alimentação e a amamentação também ajuda na recuperação, e nenhuma dessas medidas depende de receita. Quem tem soro industrializado em casa deve usá-lo antes de qualquer preparação caseira, porque a proporção já vem pronta.',
        ],
      },
      {
        id: 'remedio-para-vomito',
        heading: 'E remédio para vômito?',
        paragraphs: [
          'Vômitos repetidos que impedem de reter líquidos são um sinal de alerta e pedem avaliação, não automedicação. Esse tipo de medicamento também não substitui a reposição de líquidos, que é o que realmente corrige a perda. Se o vômito impede até o soro de ficar no estômago, o atendimento não pode esperar.',
          'Quando a pessoa vomita tudo o que bebe, a reposição pela boca deixa de funcionar, e é justamente aí que o quadro pode evoluir para desidratação. O vômito persistente também pode ter outra causa, além da gastroenterite comum. A avaliação profissional, nesse caso, importa mais do que escolher um remédio por conta própria.',
          'Nesses casos, a reidratação pode ser feita na unidade de saúde, em pequenas quantidades e sob observação, e nos quadros graves por via intravenosa, conforme o grau de desidratação avaliado pelo profissional. A via intravenosa garante que o líquido entre mesmo quando o estômago não colabora.',
        ],
      },
      {
        id: 'antibiotico',
        heading: 'Quando o antibiótico tem lugar',
        paragraphs: [
          'O antibiótico não serve para a maioria das diarreias. Segundo o Ministério da Saúde, ele deve ficar reservado aos casos com sangue ou muco nas fezes associados a comprometimento do estado geral, ou à cólera com desidratação grave, sempre com acompanhamento médico.',
          'A razão é direta: a maior parte dos episódios é viral, e o antibiótico não age sobre vírus. Em quem tem infecção bacteriana sem sinais de gravidade, o organismo costuma resolver sozinho, e o remédio acrescenta efeitos indesejados sem acelerar a melhora.',
          'Em quadros suspeitos, a coleta de fezes é feita antes do uso de antibióticos, para não prejudicar o resultado dos exames. Essa é mais uma razão para não começar o remédio por conta própria antes de uma avaliação.',
        ],
      },
      {
        id: 'automedicacao-e-resistencia',
        heading: 'O risco da automedicação',
        paragraphs: [
          'Usar antibiótico sem prescrição não resolve a diarreia e ainda alimenta um problema maior: a resistência dos microrganismos aos antibióticos. A Organização Mundial da Saúde trata a resistência antimicrobiana como uma das principais ameaças à saúde pública.',
          'Cada uso desnecessário seleciona bactérias mais resistentes, que depois circulam entre as pessoas e tornam infecções comuns mais difíceis de tratar. O efeito não fica restrito a quem tomou o remédio: ele passa para a comunidade e para os serviços de saúde.',
          'O mesmo vale para remédios para parar a diarreia comprados por conta própria. Nada substitui a avaliação de quem consegue distinguir uma diarreia simples de um quadro que exige tratamento específico. Quem tem dúvida sobre um remédio deve perguntar a um profissional antes de tomar. A dúvida se resolve na consulta, não na farmácia.',
        ],
      },
      {
        id: 'quando-o-profissional-indica',
        heading: 'Quando é o profissional quem indica',
        paragraphs: [
          'A decisão sobre qualquer medicação cabe ao profissional de saúde, após avaliar o estado de hidratação e identificar, quando possível, o agente causador. O tratamento se organiza em planos de reposição, que vão do cuidado em casa à hidratação intravenosa, e cada plano é revisto conforme a resposta.',
          'Essa avaliação começa pelo estado geral: nível de consciência, sede, olhos, boca e elasticidade da pele. É o grau de desidratação que define a via e a velocidade da reposição, não o nome do micróbio. Dois pacientes com a mesma diarreia podem, então, receber condutas diferentes.',
          'O caminho mais seguro diante da diarreia, portanto, é repor líquidos e procurar atendimento quando surgirem sinais de alerta. A automedicação atrasa esse passo e não substitui a consulta. Quando o quadro é leve, a orientação profissional costuma ser simples; quando não é, é ela que evita a internação.',
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
          'Na diarreia, o que mais pesa não é o que se come, e sim o quanto de líquido se repõe. O primeiro passo é aumentar a ingestão de água e de soro de reidratação oral, em goles pequenos ao longo do dia. A comida vem depois, e não precisa ser suspensa.',
          'O Ministério da Saúde orienta ingerir de 50 a 100 ml de líquido após cada evacuação diarreica, além do soro oferecido continuamente. A conta parece simples, mas é ela que compensa o que se perde a cada ida ao banheiro. Quem espera sentir sede para beber costuma repor menos do que perde.',
          'A sede é um aviso tardio, sobretudo em crianças e pessoas idosas: quando ela aparece com força, a perda já começou. Por isso, ofereça líquido em intervalos regulares, mesmo que a pessoa não peça, e observe se a urina continua clara e em quantidade habitual.',
        ],
      },
      {
        id: 'soro-caseiro',
        heading: 'Como preparar o soro caseiro',
        paragraphs: [
          'Quando não há soro de reidratação oral à mão, o Ministério da Saúde ensina a preparar o soro caseiro: em um litro de água mineral, filtrada ou fervida e já fria, misturar uma colher pequena, de café, de sal e uma colher grande, de sopa, de açúcar. A água precisa estar limpa; se não houver filtrada, ferva e espere esfriar antes de misturar.',
          'A medida importa mais do que parece. Açúcar em excesso puxa água para o intestino e piora a diarreia, e sal em excesso sobrecarrega o organismo. Por isso, não acrescente mais sal nem mais açúcar por conta própria, nem troque as colheres por medidas maiores: a receita funciona pela proporção.',
          'Depois de bem misturado, o soro deve ser oferecido ao longo do dia, em pequenas colheradas. Se houver soro de reidratação oral industrializado disponível, ele é a primeira escolha, porque já vem na proporção adequada. A preparação caseira é uma alternativa para quando não há outra opção por perto.',
        ],
      },
      {
        id: 'mantenha-a-alimentacao',
        heading: 'Não é preciso parar de comer',
        paragraphs: [
          'Suspender a alimentação não ajuda e ainda atrapalha a recuperação. A orientação é manter a alimentação habitual, incluindo o leite materno, e apenas ajustar a forma como ela é oferecida. O corpo precisa de energia para combater a infecção e reparar a mucosa intestinal.',
          'O intestino inflamado continua absorvendo nutrientes, e é deles que vem a energia para reparar a mucosa e recuperar o peso perdido. Ficar sem comer prolonga a diarreia e aumenta a fraqueza. Em crianças, a perda de peso pode ser rápida.',
          'Preparações leves e de fácil digestão, em porções pequenas e mais vezes ao dia, são mais bem aceitas durante o episódio. Não é preciso insistir em comida seca nem retirar tudo o que a pessoa gosta; o objetivo é manter o aporte sem sobrecarregar o estômago.',
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
          'O motivo é osmótico: muito açúcar no intestino atrai água para dentro dele, e o resultado é mais evacuação líquida. Refrigerantes, sucos industrializados e bebidas esportivas entram nessa lista. Mesmo os sucos naturais devem ser oferecidos com moderação, diluídos em água quando possível.',
          'Também vale evitar alimentos crus ou malcozidos e leite não fervido ou não pasteurizado, que estão entre os que favorecem a infecção. Durante o episódio, a prioridade é comida simples, bem cozida e de origem conhecida.',
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
          'Nos bebês, a amamentação deve continuar durante o episódio, pois ajuda na resistência contra as diarreias. Quem usa fórmula pode receber, com orientação do profissional, uma versão com menos lactose durante a diarreia. A troca não deve ser feita por conta própria.',
          'O leite materno repõe água e oferece fatores de proteção que a fórmula não reproduz. Interromper a amamentação justamente durante a diarreia retira da criança o alimento que ela melhor tolera.',
          'Em crianças, o Ministério da Saúde recomenda o zinco, uma vez ao dia por 10 a 14 dias, o que encurta o episódio e reduz o risco de complicações. O suplemento é indicado pelo profissional e não substitui o soro, e a alimentação segue em paralelo. A amamentação continua, e o soro entra em pequenas quantidades entre as mamadas, para não substituir o leite, que segue sendo o alimento mais completo nessa fase da vida.',
        ],
      },
      {
        id: 'quando-a-comida-nao-desce',
        heading: 'Quando a pessoa não consegue comer ou beber',
        paragraphs: [
          'Se a pessoa recusa alimentos, não consegue reter líquidos ou apresenta sinais de desidratação, o cuidado em casa não é suficiente. Nesses casos, procure a unidade de saúde mais próxima; quanto antes a avaliação, menor a chance de precisar de internação.',
          'Vômitos repetidos impedem que a reposição pela boca acompanhe a perda, e a desidratação avança mesmo que a pessoa esteja tentando beber. Sangue nas fezes e diminuição da urina também mudam a conduta. Nenhum desses sinais se resolve com ajuste de dieta.',
          'Nessa situação, adiar o atendimento só aumenta o risco. A reidratação na unidade, com avaliação do grau de desidratação, é o passo seguinte, e o profissional decide a via e a velocidade da reposição conforme o exame. Quando nem o soro fica no estômago, a via intravenosa passa a ser a forma de repor o que o corpo perdeu, e a decisão sobre o ritmo é de quem examinou a pessoa.',
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
          'A gastroenterite aguda costuma ser autolimitada e se resolver em poucos dias. A maior parte dos episódios é viral e não exige tratamento específico, apenas reposição de líquidos. A maioria das pessoas volta à rotina sem precisar de exame.',
          'Isso não significa que possa ser ignorada. A mesma doença que passa em poucos dias em um adulto saudável pode desidratar rápido uma criança pequena ou uma pessoa idosa, porque a reserva de água e a capacidade de compensar a perda são diferentes. O agente pode ser o mesmo; o corpo, não.',
          'O que separa os dois cenários não é a agressividade do agente, e sim a velocidade com que o corpo repõe o que perde. Começar a oferecer líquidos cedo é o que mais aproxima um caso do desfecho leve. A diferença aparece nas primeiras horas, quando ainda é possível repor em casa sem ajuda e sem esperar o quadro piorar.',
        ],
      },
      {
        id: 'desidratacao-e-o-risco',
        heading: 'A desidratação é o verdadeiro risco',
        paragraphs: [
          'A principal complicação da gastroenterite é a desidratação. Segundo o Ministério da Saúde, quando tratada de forma incorreta ou não tratada, a doença diarreica pode levar à desidratação grave e ao distúrbio hidroeletrolítico, com risco de morte. A mesma fonte lembra que a maioria dessas mortes é evitável com hidratação e atendimento a tempo.',
          'A perda acontece pelos dois caminhos ao mesmo tempo, fezes e vômito, e muitas vezes supera o que a pessoa consegue beber. Os rins tentam segurar água e sódio, mas essa compensação tem limite, e é esse limite que se esgota primeiro nos grupos mais vulneráveis. Quanto menor a reserva, mais rápido o limite é atingido.',
          'Repor desde o início é o que evita a progressão, e a conta é simples: o que entra precisa cobrir o que sai. Quando a pessoa já apresenta sinais de desidratação, a reposição caseira deixa de bastar e o atendimento passa a ser necessário.',
        ],
      },
      {
        id: 'quem-corre-mais-risco',
        heading: 'Quem corre mais risco de desidratar',
        paragraphs: [
          'Crianças pequenas e pessoas idosas desidratam mais rápido e, segundo o Ministério da Saúde, devem procurar o serviço de saúde com urgência assim que adoecem. Nesses grupos, a avaliação não deve esperar o quadro piorar.',
          'Na criança, a água representa uma fatia maior do peso corporal e a reserva é menor, então a mesma perda pesa mais. Na pessoa idosa, a sede é menos perceptível e o organismo demora mais a corrigir o desequilíbrio. Por isso, nesses grupos, observar o estado geral vale mais do que esperar o pedido de água.',
          'Também correm mais risco as pessoas desnutridas e as que têm a imunidade reduzida, como quem vive com HIV. Nesses casos, o mesmo episódio pode evoluir para desidratação grave em poucas horas, e reconhecer o próprio grupo de risco ajuda a decidir mais cedo por atendimento.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta',
        paragraphs: [
          'O Ministério da Saúde orienta voltar imediatamente ao serviço de saúde diante de qualquer um destes sinais, mesmo que a pessoa pareça bem, e a orientação vale para crianças e adultos.',
          'Um sinal isolado já basta para procurar atendimento. Cada item da lista indica que a perda de líquidos ou o comprometimento geral passou do que se resolve em casa, e nenhum deles deve ser minimizado por parecer passageiro.',
          'Se houver mais de um sinal ao mesmo tempo, a urgência aumenta. Em bebês e pessoas idosas, procure atendimento ao primeiro sinal, sem aguardar o próximo, e anote quando cada um apareceu para agilizar a consulta. Nenhum desses sinais precisa de exame para ser notado, e é justamente por isso que eles servem de aviso em casa.',
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
          'Segundo a Organização Mundial da Saúde, há desidratação grave quando a pessoa está sonolenta ou inconsciente, tem os olhos fundos, não consegue beber ou bebe mal e a pele, quando pinçada, demora dois segundos ou mais para voltar ao normal. A classificação é clínica e não depende de exame de sangue.',
          'Esse conjunto indica que o volume de líquido circulando já não sustenta a pressão e a perfusão dos órgãos. É uma emergência porque a correção precisa ser rápida e por via intravenosa, o que só é possível em serviço de saúde, e o tempo entre os primeiros sinais e a chegada ao serviço pesa no desfecho.',
          'Diante desses sinais, procure a emergência de um hospital ou uma unidade de pronto atendimento imediatamente. A ligação para o SAMU, no 192, é indicada em situações de risco imediato à vida; vômitos e diarreia, por si sós, não são motivo para acionar o SAMU. Se houver rebaixamento de consciência, a remoção deve ser feita por serviço de emergência.',
        ],
      },
      {
        id: 'complicacoes',
        heading: 'Complicações e o que muda o desfecho',
        paragraphs: [
          'Além da desidratação, a perda de líquidos e sais pode alterar os eletrólitos, como sódio e potássio, o que agrava o quadro. Em episódios que se arrastam, a diarreia persistente leva à perda de peso e à desnutrição, sobretudo em crianças, e o desequilíbrio pode aparecer mesmo quando a diarreia já está diminuindo.',
          'A diarreia que dura semanas reduz a absorção de nutrientes e cria um ciclo: quanto menos se absorve, mais difícil fica recuperar o peso e a força. Em crianças, esse ciclo compromete o crescimento, e é por isso que peso e altura merecem acompanhamento depois do episódio.',
          'A maior parte desses quadros pode ser evitada com reposição de líquidos desde o início e com atendimento nos primeiros sinais de alerta. Depois do episódio, vale retomar a rotina aos poucos e investigar causas quando a diarreia se repete.',
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
  {
    id: 'enxaqueca-sinais-de-alerta-quando-procurar-atendimento',
    slug: 'enxaqueca-sinais-de-alerta-quando-procurar-atendimento',
    metaTitle: 'Enxaqueca: sinais de alerta',
    title: 'Enxaqueca: sinais de alerta e quando procurar atendimento',
    excerpt:
      'Quem tem enxaqueca aprende a reconhecer a própria crise. O problema é quando a dor de cabeça muda de padrão ou traz sinais que não pertencem a ela. Veja o que exige atendimento imediato.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'quando-procurar-imediatamente',
        heading: 'Sinais que pedem atendimento imediato',
        paragraphs: [
          'Na enxaqueca conhecida, a crise é incômoda, mas reconhecível: dura de 4 a 72 horas, costuma pulsar em um lado da cabeça, piora com esforço e vem com náusea e incômodo à luz e ao barulho. O sinal de alerta aparece quando algo foge desse roteiro. Nesses casos, não espere a crise passar sozinha: ligue para o SAMU (192) ou vá a um pronto atendimento se notar:',
          'Nem toda crise precisa de emergência. O que muda a conduta é o conjunto: uma dor que foge do padrão habitual, que vem com déficit neurológico ou que surge de forma súbita. Se você tem enxaqueca e reconhece a crise de sempre, o manejo pode ser feito em casa, com o plano combinado com seu médico. A dúvida, porém, não é motivo para esperar: na emergência, a avaliação existe justamente para separar a crise habitual de algo novo.',
        ],
        bullets: [
          'Dor de cabeça que explode e atinge a intensidade máxima em menos de um minuto',
          'Fraqueza ou paralisia de um lado do corpo, boca torta, fala embolada ou perda de visão súbita',
          'Febre com rigidez no pescoço e dor de cabeça intensa',
          'Confusão mental, convulsão, dificuldade para despertar ou manchas vermelhas e roxas na pele',
          'Dor de cabeça que surge durante esforço físico, tosse forte ou relação sexual',
          'Uma aura diferente do habitual, ou a primeira aura depois dos 40 anos',
          'Dor de cabeça persistente e inédita depois dos 50 anos',
        ],
        cta: {
          label: 'Veja a página completa sobre enxaqueca',
          href: '/doencas/enxaqueca/',
        },
      },
      {
        id: 'dor-de-cabeca-em-trovoada',
        heading: 'A dor que explode em segundos',
        paragraphs: [
          'Existe um tipo de dor de cabeça com início abrupto, que atinge a intensidade máxima em menos de um minuto e dura mais de cinco minutos. A descrição clássica é de um trovão, e ela é um sinal de urgência: está muitas vezes associada a transtornos vasculares intracranianos graves, sobretudo a hemorragia subaracnóidea, aquela em que um aneurisma rompe e sangra ao redor do cérebro.',
          'Nesse cenário, a dor de cabeça em trovoada só pode ser chamada de primária depois que as causas orgânicas forem comprovadamente excluídas, o que exige neuroimagem e, em muitos casos, análise do líquido que banha o cérebro. Ou seja: quem sente esse tipo de dor deve fazer a investigação completa, e não se contentar com um analgésico. O mesmo vale para a dor de cabeça que surge pela primeira vez ligada a esforço físico, tosse ou atividade sexual.',
        ],
      },
      {
        id: 'avc-e-meningite',
        heading: 'O que o AVC e a meningite têm a ver com a dor de cabeça',
        paragraphs: [
          'A dor de cabeça súbita e intensa, sem causa aparente, está na lista de sinais de AVC divulgada pelo Ministério da Saúde, junto com a boca torta, a fala embolada e a fraqueza em um lado do corpo. Como o AVC isquêmico responde pela maior parte dos casos e o tratamento depende do tempo, a regra é acionar o SAMU (192) ou os Bombeiros (193) e ir à emergência o mais rápido possível.',
          'A meningite é outra emergência que se anuncia com dor de cabeça. Ela costuma vir com febre, rigidez no pescoço, náusea, vômito e sensibilidade à luz, e os sinais de gravidade incluem confusão mental, convulsão, dificuldade para despertar e manchas avermelhadas ou arroxeadas na pele. O Ministério da Saúde informa que todos os exames para diagnosticar a meningite estão disponíveis no Sistema Único de Saúde (SUS).',
        ],
      },
      {
        id: 'mudanca-de-padrao',
        heading: 'Quando a dor de cabeça deixa de ser enxaqueca',
        paragraphs: [
          'Quem convive com a enxaqueca tem um padrão, e o que deve chamar a atenção é a quebra desse padrão. Uma aura que aparece pela primeira vez depois dos 40 anos, uma aura feita só de perda de campo visual, ou uma aura que se estende muito além de uma hora pede investigação para separar a migrânea do ataque isquêmico transitório. Uma dor de cabeça nova e persistente em pessoa com mais de 50 anos deve fazer pensar em arterite de células gigantes, inflamação de artérias da cabeça que pode causar cegueira e se anuncia muitas vezes com dor ao mastigar e couro cabeludo dolorido.',
          'A pressão alta também entra nessa conta. Seus sintomas costumam aparecer apenas quando a pressão sobe muito, e incluem dor de cabeça, tontura e visão embaçada. Por isso, medir a pressão antes de concluir que é a crise de sempre é um bom hábito: o Ministério da Saúde recomenda a aferição pelo menos uma vez por ano para maiores de 20 anos, e ela é feita na unidade básica de saúde (UBS). Leia mais em [como medir a pressão arterial em casa](/artigos/hipertensao-como-medir-a-pressao-em-casa/).',
        ],
      },
      {
        id: 'o-que-nao-e-emergencia',
        heading: 'O que costuma ser confundido com emergência',
        paragraphs: [
          'Nem toda alteração visual é um AVC. Na aura típica da enxaqueca, o sintoma visual se instala aos poucos, ao longo de cinco minutos ou mais, e costuma durar entre cinco e sessenta minutos. Ele pode ser um zigue-zague brilhante, uma mancha que cresce ou uma área de visão borrada, e geralmente vem antes da dor. Já o AVC começa de repente, com perda de visão em um campo, fraqueza ou alteração da fala que se instala em segundos.',
          'Em quem já tem diagnóstico de enxaqueca, também não é sinal de alerta a dor que melhora com o remédio habitual dentro do tempo esperado, nem a crise que vem acompanhada de náusea e intolerância à luz, sem outros sintomas neurológicos. O que pede atenção é a quebra do padrão: uma aura que dura mais de uma hora, que aparece pela primeira vez depois dos 40 anos ou que vem acompanhada de fraqueza. Nesses casos, a investigação com neuroimagem pode ser necessária para afastar um ataque isquêmico transitório.',
        ],
      },
      {
        id: 'crise-que-nao-passa',
        heading: 'Crise que não passa e atendimento de rotina',
        paragraphs: [
          'Uma crise de enxaqueca que se arrasta por mais de 72 horas e incapacita tem nome, estado migranoso, e é considerada uma complicação da doença: merece avaliação médica, e não apenas mais comprimidos. O mesmo se aplica a quem passa a ter dor em 15 ou mais dias do mês, quadro em que o uso excessivo de analgésicos costuma estar envolvido e que se resolve quando o excesso é interrompido com acompanhamento.',
          'Para quem tem crises frequentes, o caminho de rotina começa na UBS, onde a equipe revisa o padrão das crises, mede a pressão, confere os medicamentos em uso e encaminha ao especialista quando é preciso confirmar o diagnóstico ou iniciar prevenção. Levar um registro das crises, com datas, duração e remédios tomados, encurta esse caminho.',
        ],
      },
      {
        id: 'o-que-anotar',
        heading: 'O que anotar antes de procurar ajuda',
        paragraphs: [
          'Chegar à consulta com informações organizadas encurta a investigação. Anote a data e a hora do início, quanto tempo a dor durou, se foi de um lado só, se pulsava, se piorou com esforço e quais sintomas vieram junto, como náusea, luz, barulho, visão ou formigamento. Registre também o que você tomou e se funcionou.',
          'O diário de cefaleia vale por várias semanas e mostra o padrão que uma única consulta não consegue ver: frequência, relação com o ciclo menstrual, sono, álcool e estresse. Ele também revela quantos dias de analgésico você usa por mês, informação que muda a conduta quando há suspeita de cefaleia por uso excessivo de medicamentos. Leve o registro ao pronto atendimento se a dor for diferente do habitual; leve à consulta de rotina para ajustar o plano.',
        ],
      },
    ],
    diseaseSlugs: ['enxaqueca'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['enxaqueca-tratamento-e-cuidados'],
    references: [
      {
        label: 'Migrânea e outras cefaleias, folha de dados',
        url: 'https://www.who.int/news-room/fact-sheets/detail/headache-disorders',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'AVC: sinais de alerta e o que fazer',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Meningite: sintomas e quando procurar atendimento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/meningite',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'enxaqueca-tratamento-e-cuidados',
    slug: 'enxaqueca-tratamento-e-cuidados',
    title: 'Enxaqueca: tratamento e cuidados no dia a dia',
    excerpt:
      'Do momento certo de tomar o analgésico à prevenção diária, passando pelo excesso de remédio que agrava a dor. Um guia prático para organizar o tratamento da enxaqueca na rotina.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'na-crise',
        heading: 'Na crise, o tempo importa',
        paragraphs: [
          'O primeiro princípio do tratamento é agir cedo. A Organização Mundial da Saúde recomenda que o analgésico seja tomado no primeiro sinal da crise, inclusive quando o aviso é a aura, porque esperar a dor se instalar costuma reduzir a resposta ao medicamento. Descansar em ambiente escuro e silencioso e usar compressa fria na cabeça são medidas que ajudam enquanto o remédio faz efeito.',
          'Para crises leves ou moderadas, os analgésicos simples e os anti-inflamatórios não esteroides, como paracetamol, ibuprofeno, ácido acetilsalicílico e naproxeno, costumam ser a primeira escolha, desde que não haja contraindicação. Quando a dor é moderada ou forte, ou não responde a essas opções, o médico pode indicar um triptano, como sumatriptano ou rizatriptano. O antiemético é usado quando a náusea e o vômito impedem de engolir até o comprimido.',
          'Triptanos e ergotamina não são para todo mundo: são contraindicados em quem tem doença cardíaca, hipertensão grave sem controle ou histórico de AVC. Opioides não são recomendados de rotina pelo risco de dependência, e a automedicação com combinações de analgésicos é um dos caminhos mais rápidos para a cefaleia por uso excessivo. Quem está grávida ou amamentando deve conversar com o médico antes de usar qualquer remédio.',
        ],
        cta: {
          label: 'Entenda a enxaqueca na página da doença',
          href: '/doencas/enxaqueca/',
        },
      },
      {
        id: 'preventivo',
        heading: 'Prevenção para quem tem muitos dias com dor',
        paragraphs: [
          'Existe uma segunda frente de tratamento, feita de medicamento tomado todos os dias, mesmo sem dor, para reduzir frequência, intensidade e duração das crises. Ela é indicada quando a enxaqueca ocupa muitos dias do mês ou atrapalha demais a vida, e seu efeito é gradual: a resposta é avaliada pelo médico ao longo das semanas, e não na primeira caixa.',
          'As classes mais usadas incluem betabloqueadores (como propranolol), bloqueadores de canal de cálcio (como verapamil), antidepressivos (como amitriptilina), anticonvulsivantes (como topiramato e valproato) e, em casos selecionados, anti-inflamatórios como naproxeno no período menstrual. A escolha depende de outras doenças, da gravidez ou da amamentação e dos remédios em uso. A dose começa baixa e é ajustada ao longo de semanas; depois de acertar, o tratamento costuma continuar por pelo menos seis meses.',
          'A meta do tratamento é definida com o paciente, com base no que ele quer recuperar, e por isso vale levar números para a consulta: quantos dias com dor no mês, quantos dias de trabalho ou estudo perdidos, quantos comprimidos por semana. Aproveite para falar de sono, álcool e também de humor, já que ansiedade e depressão são mais frequentes em quem tem enxaqueca e pioram quando não são tratadas.',
        ],
      },
      {
        id: 'excesso-de-remedio',
        heading: 'O remédio que passa a causar dor',
        paragraphs: [
          'Este é o ponto em que muita gente tropeça sem perceber. Usar medicamento agudo em excesso, por mais de três meses, pode transformar a enxaqueca episódica em dor quase diária, a cefaleia por uso excessivo de medicamentos. A referência de excesso, pela classificação internacional das cefaleias, é 10 ou mais dias por mês com triptanos, ergotamina, opioides e analgésicos combinados, e 15 ou mais dias por mês com analgésicos simples, como paracetamol e anti-inflamatórios.',
          'O diagnóstico importa porque a saída é diferente da que a pessoa está tentando: adicionar remédio costuma piorar, e a suspensão orientada do excesso costuma melhorar a dor e ainda restaurar a resposta ao tratamento preventivo. A própria classificação internacional descreve que apenas informar o paciente sobre esse mecanismo, algo que pode ser feito no atendimento básico, já é parte essencial do manejo.',
        ],
      },
      {
        id: 'o-que-evitar',
        heading: 'O que não fazer por conta própria',
        paragraphs: [
          'Alguns hábitos comuns atrasam o tratamento. Um deles é repetir a dose várias vezes ao dia ou combinar analgésicos diferentes sem orientação, o que aumenta o risco de efeito no estômago e de cefaleia por uso excessivo. Outro é usar opioides ou remédios com cafeína em excesso para crises frequentes. E há quem interrompa a prevenção assim que melhora, sem combinar com o médico, justamente quando o efeito ainda está se estabilizando.',
          'Também não vale comprar triptano por conta própria nem usar o remédio de outra pessoa: a indicação depende de contraindicações cardíacas e da pressão arterial. Se a crise não cede com o plano combinado, se os efeitos colaterais incomodam ou se você está usando analgésico mais de dois a três dias por semana, volte ao serviço de saúde em vez de aumentar a dose. O ajuste é parte do tratamento, não um sinal de fracasso.',
        ],
      },
      {
        id: 'gatilhos-na-rotina',
        heading: 'Cuidados que reduzem a frequência das crises',
        paragraphs: [
          'Medidas simples aparecem nas recomendações da OMS e funcionam como base do tratamento, junto com os medicamentos. Elas só valem se forem sustentáveis, e o diário de cefaleia é o instrumento que mostra o que muda alguma coisa para você:',
          'O diário também mostra se as crises se concentram em períodos de sono curto, álcool, jejum ou estresse. Não é preciso eliminar todos os suspeitos de uma vez: teste um de cada vez, por algumas semanas, e mantenha o que realmente faz diferença. Restrições alimentares amplas costumam durar pouco e não ajudam.',
        ],
        bullets: [
          'Dormir horários regulares, evitando tanto a privação quanto o excesso',
          'Restringir ou eliminar a bebida alcoólica',
          'Beber água ao longo do dia e não pular refeições',
          'Identificar os alimentos que antecedem suas crises',
          'Manter atividade física regular, começando devagar nos dias sem dor',
          'Registrar cada crise, com duração, intensidade e remédio tomado',
        ],
      },
      {
        id: 'pelo-sus',
        heading: 'Onde buscar tratamento no SUS',
        paragraphs: [
          'O acompanhamento começa na unidade básica de saúde (UBS) de referência, onde a equipe pode confirmar o padrão das crises, medir a pressão, revisar o uso de analgésicos e tratar as condições que pesam no risco cardiovascular, como a [hipertensão](/doencas/hipertensao/). Quando o diagnóstico é difícil, o paciente precisa de prevenção ou há sinal de alerta, o encaminhamento vai ao neurologista ou a um serviço de cefaleia, regulado pela rede.',
          'Há uma ressalva honesta: a OMS registra que, em muitos países, medicamentos específicos para enxaqueca não estão disponíveis com facilidade, e que a maior parte das pessoas com cefaleia no mundo não recebe diagnóstico nem tratamento adequado. Isso não significa ficar sem opção. Significa que vale perguntar ao médico qual é o melhor entre o que está acessível na rede, revisar o plano a cada consulta e não comprar remédio por conta própria para suprir a lacuna.',
        ],
      },
      {
        id: 'convivendo',
        heading: 'No trabalho, na escola e em casa',
        paragraphs: [
          'A enxaqueca é episódica, e é justamente isso que faz o público subestimá-la. Muita gente trabalha durante a crise, com rendimento reduzido, e o custo aparece em dias perdidos, tarefas adiadas e irritabilidade no fim do mês. Combinar com a chefia ou com a escola um plano mínimo, com local tranquilo, água e acesso ao remédio no início da crise, costuma resolver boa parte do problema.',
          'Para crianças e adolescentes, os sinais mudam um pouco: as crises duram menos, a dor pode aparecer dos dois lados da cabeça, e queixas abdominais, náusea e palidez costumam chamar mais atenção que a própria dor. Vale relatar isso ao médico, porque enxaqueca na infância existe e também se trata.',
        ],
      },
    ],
    diseaseSlugs: ['enxaqueca'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['enxaqueca-sinais-de-alerta-quando-procurar-atendimento'],
    references: [
      {
        label: 'Migrânea e outras cefaleias, folha de dados',
        url: 'https://www.who.int/news-room/fact-sheets/detail/headache-disorders',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Classificação Internacional das Cefaleias, 3ª edição (ICHD-3), tradução brasileira',
        url: 'https://sbcefaleia.com.br/images/_ICHD-3-Brazilian-Portuguese-translation_complete-version.pdf',
        publisher: 'Sociedade Brasileira de Cefaleia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento',
    slug: 'otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento',
    metaTitle: 'Otite média aguda: quando procurar atendimento',
    title: 'Otite média aguda: sinais de alerta e quando procurar atendimento',
    excerpt:
      'A dor de ouvido costuma ceder em dois ou três dias, e a maioria das otites melhora sem antibiótico. Saiba o que observar em casa, quando a espera deixa de ser segura e quais sinais levam direto ao pronto atendimento.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'curso-esperado',
        heading: 'O que é esperado nos primeiros dias',
        paragraphs: [
          'A otite média aguda começa com dor de ouvido repentina, muitas vezes à noite ou ao deitar, quando a pressão dentro do ouvido médio aumenta. A febre pode ser alta já no primeiro dia. Em bebês, o quadro aparece como irritabilidade, choro difícil de consolar, recusa das mamadas e a mão indo sempre para a mesma orelha. A dor costuma ser forte e pode acordar a criança várias vezes na mesma noite; não é raro que ela esteja bem durante o dia e piore ao anoitecer.',
          'O pior costuma ficar nas primeiras 48 horas. Depois disso, a dor cede aos poucos, a febre perde força e a criança volta a dormir e a comer. Essa melhora não é sorte: a maioria das otites médias agudas se resolve sem antibiótico, e o tratamento inicial é contra a dor, com analgésico ajustado à idade e ao peso pela equipe de saúde. Em crianças maiores, o primeiro sinal pode ser apenas a sensação de ouvido tampado e a audição abafada do lado afetado.',
        ],
      },
      {
        id: 'observar-em-casa',
        heading: 'O que observar em casa',
        paragraphs: [
          'Observar em casa não é o mesmo que ignorar. Enquanto a criança está sendo acompanhada, anote a evolução da dor, da febre e do comportamento, porque esses dados ajudam o profissional a decidir o próximo passo. Ofereça líquidos com frequência, mantenha as refeições habituais sem forçar e garanta o sono possível. Refeições menores e mais frequentes funcionam melhor quando ela está sem apetite.',
          'Evite fumaça de cigarro dentro de casa, que aumenta o risco de novos episódios, e não pingue nada no ouvido sem orientação. Não há benefício em colocar soro ou qualquer outro líquido no canal: a inflamação está atrás do tímpano, fora do alcance das gotas. O prazo de 48 a 72 horas é o principal marco: dor que continua igual ou pior depois dele, febre que não cede a partir do terceiro dia, pus saindo pelo ouvido ou recusa de líquidos e mamadas pedem avaliação.',
        ],
      },
      {
        id: 'quando-a-ubs',
        heading: 'Quando ir à unidade de saúde',
        paragraphs: [
          'A unidade básica de saúde é o caminho natural para a maioria das crianças com otite. Ali o profissional examina o ouvido com otoscópio, procura sinais como tímpano vermelho e abaulado e decide se o caso pode seguir sem antibiótico ou se já é hora de prescrever. Se a criança já está em tratamento e não melhora, leve o frasco do remédio e anote os horários das doses.',
          'Quanto menor a criança, mais cedo a avaliação se justifica. Bebês com menos de seis meses merecem ser vistos rapidamente. Com menos de dois anos, o quadro bilateral e a saída de pus pelo ouvido também pesam a favor do atendimento precoce. Em crianças maiores, com dor leve e um lado só, a observação por 48 a 72 horas costuma ser segura, desde que haja reavaliação combinada. A escolha entre observar e tratar é uma conversa, não uma regra automática: o profissional pesa o risco de esperar contra o custo de um antibiótico desnecessário.',
        ],
        cta: {
          label: 'Veja a página sobre a otite média aguda',
          href: '/doencas/otite-media-aguda/',
        },
      },
      {
        id: 'sinais-de-complicacao',
        heading: 'Sinais de complicação',
        paragraphs: [
          'A complicação mais temida é a mastoidite, quando a infecção atinge o osso atrás do ouvido. O sinal é inchaço, vermelhidão e dor nessa região, às vezes com a orelha projetada para a frente. Não é quadro para observar em casa: pede atendimento no mesmo dia. A mastoidite pode se instalar mesmo sem perfuração do tímpano, por isso a dor atrás da orelha nunca deve ser atribuída apenas a sono ou pancada.',
          'Outros sinais de que a infecção saiu do ouvido médio são paralisia ou fraqueza de um lado da face, tontura intensa, rigidez de pescoço, confusão e sonolência excessiva. Meningite e abscessos intracranianos são ainda mais raros, mas também se anunciam por febre persistente, dor de cabeça intensa e alteração do estado de consciência. São situações raras, mas mudam a urgência. Quando houver dúvida, procurar atendimento é a escolha mais segura.',
        ],
      },
      {
        id: 'emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Vá a um pronto atendimento sem esperar se, junto com a dor de ouvido, aparecer inchaço ou vermelhidão atrás da orelha, febre alta que não cede, vômitos que não param ou uma criança muito sonolenta e difícil de acordar. Bebês pequenos podem não ter febre alta e ainda assim estar graves: a recusa alimentar, a respiração rápida e a falta de reação contam tanto quanto o termômetro.',
          'Também pedem atendimento imediato rigidez de pescoço, confusão, rosto torto ou fraqueza em um lado da face, tontura intensa e saída de pus com febre que não cede. Sinais de desidratação, como choro sem lágrima, boca seca e pouca urina, entram na mesma lista, sobretudo em bebês. Se o atendimento demorar, não administre remédios novos por conta própria nem espere o efeito de uma dose para decidir.',
        ],
      },
      {
        id: 'antibiotico-ou-espera',
        heading: 'Antibiótico ou espera',
        paragraphs: [
          'A decisão de usar antibiótico depende de idade, lado afetado e gravidade. Bebês com menos de dois anos, otite bilateral, pus saindo pelo ouvido, febre alta ou dor intensa costumam receber o remédio desde o início. A presença de otite nos dois ouvidos pesa mais do que a de um lado só, porque a melhora espontânea é menos provável.',
          'Nos casos leves de crianças maiores, esperar 48 a 72 horas é aceitável, desde que a família consiga observar e voltar se não houver melhora. Quando indicado, a amoxicilina é a primeira escolha na maioria dos casos, por 7 a 10 dias, e o tratamento deve ser completado. Se a dor e a febre não cederem nesse prazo, a reavaliação é obrigatória. Em caso de alergia à penicilina, a alternativa é definida caso a caso; nunca reaproveite uma receita antiga nem use sobras de outra crise.',
        ],
      },
      {
        id: 'depois-da-crise',
        heading: 'O que acompanhar depois da crise',
        paragraphs: [
          'Passada a dor, é comum o ouvido médio continuar com líquido por semanas, sem infecção ativa. A criança não tem febre nem dor, mas ouve abafado. Na maior parte das vezes, o líquido some sozinho e a audição volta ao normal. Enquanto estiver ali, o líquido deixa o ouvido mais vulnerável a novas infecções.',
          'Vale reparar se ela fala mais alto, pede para repetir, aumenta o volume da TV ou se isola. Quando o líquido persiste por meses e atrapalha a fala e a aprendizagem, a avaliação com teste de audição e otorrinolaringologista ajuda a definir a conduta. O exame é simples, indolor e pode ser feito em crianças pequenas com orientação do profissional.',
        ],
      },
    ],
    diseaseSlugs: ['otite-media-aguda'],
    topicSlugs: ['doencas-infecciosas', 'saude-infantil'],
    relatedArticleSlugs: ['otite-media-aguda-tratamento-e-cuidados'],
    references: [
      {
        label: 'Otite média (aguda), versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-ouvido-nariz-e-garganta/doen%C3%A7as-do-ouvido-m%C3%A9dio/otite-m%C3%A9dia-aguda',
        publisher: 'Manual MSD',
      },
      {
        label: 'Otite média aguda na infância: tratamento, Projeto Diretrizes',
        url: 'https://amb.org.br/files/_BibliotecaAntiga/otite-media-aguda-na-infancia-tratamento.pdf',
        publisher: 'Associação Médica Brasileira',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'otite-media-aguda-tratamento-e-cuidados',
    slug: 'otite-media-aguda-tratamento-e-cuidados',
    metaTitle: 'Otite média aguda: tratamento e cuidados',
    title: 'Otite média aguda: tratamento e cuidados do dia a dia',
    excerpt:
      'Na otite, a dor vem de trás do tímpano. Entenda como aliviar o desconforto, quando o antibiótico vale a pena, o que não ajuda e como acompanhar a audição depois que a crise passa.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'dor-antes-de-tudo',
        heading: 'Tratar a dor é o primeiro passo',
        paragraphs: [
          'A dor da otite média aguda vem do líquido acumulado no ouvido médio, que pressiona o tímpano por dentro. Por isso, a primeira medida é contra a dor, não contra a infecção. Analgésicos pela boca, como paracetamol ou ibuprofeno, aliviam o desconforto e ajudam a criança a dormir. A dose é ajustada à idade e ao peso pela equipe de saúde. Se a dor não ceder com a dose indicada, não aumente a quantidade por conta própria: procure orientação.',
          'Compressa morna do lado de fora do ouvido pode trazer conforto, mas não trata a infecção. Nunca some dois remédios com o mesmo princípio ativo por conta própria: isso aumenta o risco de efeitos colaterais sem aliviar mais a dor. Se a criança vomitar ou não conseguir tomar o remédio, procure orientação. O objetivo é que ela consiga comer, brincar e dormir, não que fique completamente sem desconforto.',
        ],
      },
      {
        id: 'antibiotico-quando',
        heading: 'Quando o antibiótico entra',
        paragraphs: [
          'O critério prático é o tempo e a gravidade. Piora ou falta de melhora entre 48 e 72 horas do início dos sintomas pede antibiótico. Também entram nessa lista bebês com menos de dois anos, otite nos dois ouvidos, pus saindo pelo ouvido, febre alta e dor intensa. A idade é o critério que mais pesa, porque quanto menor a criança, menor a chance de resolução espontânea e maior o risco de complicação.',
          'Quando indicado, a amoxicilina é a primeira escolha nas diretrizes brasileiras, por 7 a 10 dias. O tratamento deve ser completo, mesmo que a criança melhore antes. Alergia à penicilina ou falta de resposta levam o médico a trocar de classe. Corticoides não são recomendados de rotina. Não interrompa o antibiótico ao primeiro sinal de melhora; se aparecer rash, diarreia intensa ou outro efeito, avise o serviço antes de mudar qualquer coisa.',
        ],
      },
      {
        id: 'o-que-nao-ajuda',
        heading: 'O que não ajuda e pode atrapalhar',
        paragraphs: [
          'Anti-histamínicos e descongestionantes não têm lugar no tratamento da otite. Eles não desobstruem o ouvido médio, têm efeitos colaterais e os anti-histamínicos podem até prolongar o líquido. Descongestionantes também não previnem a otite e podem irritar o nariz da criança.',
          'Gota no ouvido sem prescrição é outro erro comum. A dor vem de trás do tímpano, onde o medicamento não chega, e algumas formulações fazem mal quando o tímpano está perfurado. Receita caseira, algodão molhado e sopro no ouvido também ficam de fora. Se alguém recomendar gotas de álcool, óleo ou ervas, lembre-se de que nenhuma delas é indicada para uso dentro do ouvido sem avaliação profissional.',
        ],
      },
      {
        id: 'cuidados-em-casa',
        heading: 'Cuidados em casa durante a crise',
        paragraphs: [
          'Durante a crise, mantenha a criança hidratada e alimentada, com refeições menores e mais frequentes se ela estiver sem apetite. Garanta o descanso possível e evite fumaça de cigarro, que irrita as vias respiratórias e favorece novos episódios. Não é necessário manter a criança na cama o tempo todo: o repouso relativo, com brincadeiras calmas, costuma bastar. O apetite pode demorar a voltar, e isso não é motivo de alarme se ela estiver bebendo líquidos.',
          'Não introduza cotonete nem tente limpar o canal do ouvido. Se houver pus escorrendo, limpe apenas a parte externa com gaze e leve a criança para avaliação. Nada deve ser pingado no ouvido sem orientação profissional. A criança pode tomar banho, desde que não entre água com pressão no canal; evite mergulho e piscina enquanto houver perfuração ou até a liberação médica.',
        ],
      },
      {
        id: 'liquido-que-permanece',
        heading: 'O líquido que sobra e a audição',
        paragraphs: [
          'Depois da crise, o ouvido pode guardar líquido sem infecção ativa por semanas a meses, a chamada otite média secretora. A criança não sente dor, mas ouve abafado, como se o ouvido estivesse entupido. O diagnóstico é feito pela história, pela otoscopia e, quando necessário, pela timpanometria. O líquido pode existir sem que a criança tenha dor, por isso o exame do ouvido é indispensável.',
          'A maior parte se resolve sozinha. Quando o líquido persiste, a audição fica prejudicada por tempo demais ou as otites se repetem, vale fazer teste de audição e conversar com o otorrinolaringologista. Em casos selecionados, a colocação de um tubo de ventilação no tímpano ajuda a manter o ouvido arejado. O tubo é indicado por especialista e costuma cair sozinho depois de alguns meses; ele não é a primeira medida para todo mundo.',
        ],
        cta: {
          label: 'Veja a página sobre a otite média aguda',
          href: '/doencas/otite-media-aguda/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir novos episódios',
        paragraphs: [
          'A prevenção começa pelo controle das infecções respiratórias: lavar as mãos, evitar aglomerações nos períodos de maior circulação de vírus e manter a vacinação em dia, incluindo a vacina contra pneumococo e a anual contra gripe quando indicadas. A vacina contra pneumococo reduz parte dos casos, mas não cobre todas as bactérias que causam otite.',
          'Amamentar até os 6 meses, oferecer a mamadeira com a cabeça elevada e evitar o uso prolongado de chupeta reduzem o risco. Não fumar dentro de casa e tratar rinite e asma também ajudam. Em viagens de avião, mastigar, engolir ou fazer a manobra de equalização durante a decolagem e o pouso alivia a pressão. Manter a amamentação e a vacinação em dia protege mais do que qualquer remédio preventivo vendido sem receita.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando interromper o cuidado em casa',
        paragraphs: [
          'O cuidado em casa tem limites. Procure atendimento se a dor não melhorar em dois ou três dias, se a febre não ceder a partir do terceiro dia ou se aparecer pus pelo ouvido com febre persistente. Não espere a próxima consulta marcada se o quadro mudar de forma clara. Febre que volta depois de dias de melhora também merece reavaliação.',
          'Sinais de complicação não esperam prazo nenhum. Leve a criança para avaliação imediata se aparecer:',
        ],
        bullets: [
          'Inchaço, vermelhidão ou dor no osso atrás do ouvido',
          'Pescoço rígido, confusão ou sonolência excessiva',
          'Vômitos que não param',
          'Rosto torto ou fraqueza em um lado da face',
          'Tontura intensa ou sinais de desidratação, como choro sem lágrima, boca seca e pouca urina',
        ],
      },
    ],
    diseaseSlugs: ['otite-media-aguda'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento'],
    references: [
      {
        label: 'Otite média (aguda), versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-ouvido-nariz-e-garganta/doen%C3%A7as-do-ouvido-m%C3%A9dio/otite-m%C3%A9dia-aguda',
        publisher: 'Manual MSD',
      },
      {
        label: 'Otite média (serosa), versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-ouvido-nariz-e-garganta/doen%C3%A7as-do-ouvido-m%C3%A9dio/otite-m%C3%A9dia-serosa',
        publisher: 'Manual MSD',
      },
      {
        label: 'Otite média aguda na infância: tratamento, Projeto Diretrizes',
        url: 'https://amb.org.br/files/_BibliotecaAntiga/otite-media-aguda-na-infancia-tratamento.pdf',
        publisher: 'Associação Médica Brasileira',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'pneumonia-sinais-de-alerta-quando-procurar-atendimento',
    slug: 'pneumonia-sinais-de-alerta-quando-procurar-atendimento',
    metaTitle: 'Pneumonia: quando procurar atendimento',
    title: 'Pneumonia: sinais de alerta e quando procurar atendimento',
    excerpt:
      'Falta de ar, respiração rápida, confusão em idosos e oxigênio abaixo de 90% distinguem a pneumonia que trata em casa da que precisa de hospital. Saiba o que observar em cada idade.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-que-importa-observar',
        heading: 'A gravidade não está na febre',
        paragraphs: [
          'Na pneumonia, o termômetro diz menos do que parece. Um adulto pode estar com febre alta e respirar bem, enquanto outro, sem febre nenhuma, tem o oxigênio caindo aos poucos. A temperatura mede a resposta do corpo à infecção, não o quanto o pulmão está comprometido. Olhar apenas para o número do termômetro é o caminho mais curto para deixar passar um caso que precisava de ajuda naquele dia.',
          'Os sinais que realmente pesam são três: a respiração, o estado de alerta e a saturação de oxigênio. A respiração fica rápida e curta, e falar uma frase inteira passa a exigir esforço. O estado de alerta muda quando falta oxigênio ao cérebro, e a pessoa fica confusa, sonolenta ou estranha. A saturação, medida em segundos no oxímetro de pulso, mostra quanto oxigênio está chegando ao sangue. Os três juntos dão uma ideia melhor da gravidade do que qualquer sintoma isolado.',
          'Nenhum desses sinais substitui a avaliação profissional, e é justamente por isso que eles servem como critério para procurar ajuda. Uma pneumonia que parecia leve pode mudar em poucas horas, sobretudo em crianças pequenas e em pessoas idosas, que têm menos reserva para enfrentar a queda do oxigênio. Na dúvida entre esperar e ir, a pneumonia recomenda ir.',
        ],
      },
      {
        id: 'sinais-em-adultos',
        heading: 'Sinais de alerta em adultos e idosos',
        paragraphs: [
          'Em adultos, os critérios objetivos separam o tratamento em casa da internação. Respiração acima de 30 respirações por minuto em repouso, saturação abaixo de 90% no ar ambiente e confusão súbita são os mais usados pelos profissionais. Eles não exigem aparelho sofisticado: um relógio, o oxímetro e uma conversa já mudam a conduta. Uma conversa com quem está doente já mostra se falta ar para terminar a frase ou se a fala saiu confusa.',
          'Some a isso a capacidade de manter a rotina. Quem não consegue beber água, tomar o remédio ou comer deixa de ter condições de se tratar em casa, porque a desidratação agrava qualquer pneumonia. Dor no peito que aumenta e febre alta que não cede completam o grupo de sinais que pedem atendimento no mesmo dia, sem esperar para ver se melhora sozinho.',
        ],
        bullets: [
          'Respiração acima de 30 respirações por minuto em repouso',
          'Saturação de oxigênio abaixo de 90% no ar ambiente',
          'Falta de ar que impede falar uma frase completa',
          'Confusão súbita, desorientação ou sonolência anormal',
          'Lábios ou pontas dos dedos arroxeados',
          'Febre alta persistente com dor no peito que piora',
        ],
      },
      {
        id: 'sinais-em-criancas',
        heading: 'Sinais de alerta nas crianças',
        paragraphs: [
          'Nos menores de cinco anos, a avaliação é mais simples do que parece. A Organização Mundial da Saúde ensina a reconhecer a pneumonia sem aparelho: contar a respiração e olhar o tórax. A respiração rápida e a parte de baixo do peito puxando para dentro ao inspirar já são pneumonia, e essa observação muda a urgência do atendimento.',
          'O comportamento da criança ajuda tanto quanto o número. Uma criança que mama bem, brinca e dorme normalmente está em outro patamar de risco de outra que geme, recusa o peito e fica mole no colo. Febre alta isolada, sem esses sinais, pode esperar a consulta do mesmo dia; gemência, tiragem e recusa alimentar não podem.',
          'O chiado no peito aparece com frequência nas pneumonias virais e pode lembrar uma crise de asma. Como o tratamento das duas é diferente, cabe à avaliação profissional decidir se o chiado responde ao broncodilatador de sempre ou se é sinal de infecção pulmonar.',
        ],
        bullets: [
          'Respirar visivelmente mais rápido que o habitual',
          'Costelas e região abaixo delas "puxando" a cada ar',
          'Gemência ao respirar ou respiração pela boca sem parar',
          'Recusa do peito, da mamadeira ou da água',
          'Chiado no peito que lembra uma crise de asma',
          'Qualquer convulsão, moleza excessiva ou dificuldade para despertar',
        ],
      },
      {
        id: 'idosos-silenciosos',
        heading: 'Quando a pneumonia chega sem tosse',
        paragraphs: [
          'Em pessoas idosas, a pneumonia pode se esconder. O corpo com menos reserva reage de outro jeito: em vez de inflamar e fazer febre, ele se desorganiza. O resultado aparece como confusão, desorientação, uma queda, fraqueza para levantar e recusa de comida, muitas vezes tudo no mesmo dia.',
          'Por isso, uma mudança súbita de comportamento em quem mora sozinho ou é acompanhado em casa justifica avaliação no mesmo dia. O mesmo vale para quem tem [DPOC](/doencas/dpoc/) ou [asma](/doencas/asma/): uma piora que não responde à medicação de costume pode ser pneumonia por cima da doença de base, e não uma crise comum.',
          'Quem cuida de uma pessoa idosa pode observar três coisas simples: se ela come e bebe, se consegue ficar em pé como antes e se responde com coerência. A combinação de perda de apetite, fraqueza nova e fala confusa, mesmo sem febre, já é motivo suficiente para buscar avaliação.',
        ],
      },
      {
        id: 'onde-procurar',
        heading: 'Onde procurar atendimento, e o que não esperar',
        paragraphs: [
          'A UBS resolve a maior parte das pneumonias leves: ausculta o pulmão, mede a saturação, inicia o antibiótico e marca o retorno. A UPA e o hospital entram quando falta oxigênio, há confusão, ou a pessoa não consegue beber e tomar a medicação. Falta de ar intensa, lábios azulados ou sonolência anormal são motivo para chamar o SAMU (192).',
          'Também vale reconhecer o que não é pneumonia. A tosse que dura três semanas ou mais, com febre no fim da tarde, suor noturno e emagrecimento, é o retrato da [tuberculose](/doencas/tuberculose/), com investigação e tratamento próprios, oferecidos de forma integral pelo SUS. Tratar essa tosse como resto de pneumonia apenas adia o diagnóstico certo.',
          'Se a saturação estiver normal e nenhum sinal de alerta estiver presente, o caminho começa pela UBS, que costuma resolver o caso sem passar pelo hospital. Não vale a pena esperar o fim de semana ou a consulta de rotina para procurar ajuda quando a respiração mudou.',
        ],
        cta: {
          label: 'Veja a página sobre pneumonia',
          href: '/doencas/pneumonia/',
        },
      },
    ],
    diseaseSlugs: ['pneumonia'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: ['pneumonia-tratamento-e-recuperacao'],
    references: [
      {
        label: 'Pneumonia in children: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Pneumonia adquirida na comunidade, edição profissional',
        url: 'https://www.msdmanuals.com/pt/profissional/dist%C3%BArbios-pulmonares/pneumonia/pneumonia-adquirida-na-comunidade',
        publisher: 'Manual MSD',
      },
      {
        label: 'Tuberculose: perguntas e sinais',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tuberculose',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'pneumonia-tratamento-e-recuperacao',
    slug: 'pneumonia-tratamento-e-recuperacao',
    metaTitle: 'Pneumonia: tratamento e recuperação',
    title: 'Pneumonia: tratamento, cuidados na recuperação e vacinas',
    excerpt:
      'O antibiótico deve começar cedo, e a maioria dos casos se resolve em casa. Veja como funciona o tratamento, por que a tosse demora a ir embora e o que o calendário do SUS oferece de vacina.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'comecar-cedo',
        heading: 'Por que o tratamento começa logo',
        paragraphs: [
          'Quando a avaliação sugere pneumonia bacteriana, o antibiótico é iniciado o quanto antes. Tratar cedo reduz complicações, tempo de internação e mortalidade, e é por isso que o médico não espera o resultado da cultura para decidir o primeiro esquema. A cultura ajuda a ajustar a escolha, não a postergar o início.',
          'Nas crianças, a amoxicilina por via oral é a primeira escolha recomendada pela Organização Mundial da Saúde. A maioria dos casos leves em adultos também se trata com antibiótico oral, em casa, com retorno marcado. Quem decide se o local do tratamento é o domicílio, o hospital ou a UTI é a gravidade medida no atendimento, não a preferência de quem está doente.',
          'A escolha do antibiótico considera a idade, as doenças de base e o lugar onde a infecção foi adquirida. Quem tem alergia à penicilina recebe outro esquema, e é por isso que a consulta com um profissional é insubstituível.',
        ],
      },
      {
        id: 'no-hospital',
        heading: 'Quando é preciso internar',
        paragraphs: [
          'A queda do oxigênio no sangue é a principal porta da internação. Saturação abaixo de 90% no ar ambiente pede oxigênio e observação hospitalar. Somam-se a isso a respiração acima de 30 respirações por minuto, a confusão e a incapacidade de beber ou comer.',
          'Os escores de gravidade, como o CURB-65, ajudam a organizar a decisão, pesando idade, confusão, frequência respiratória alta, pressão baixa e ureia elevada. Choque séptico e insuficiência respiratória que exige ventilação mecânica levam à UTI. Nos demais casos, o antibiótico venoso, a hidratação e o oxigênio fazem o resto do serviço, com troca para a via oral assim que a pessoa estabiliza. O acompanhamento continua depois da alta, com reavaliação para confirmar que a recuperação está no caminho esperado.',
          'A internação também serve para observar a resposta ao antibiótico nas primeiras 48 a 72 horas. Se a febre não ceder, a respiração não melhorar ou a saturação continuar baixa, a equipe revê o esquema e investiga outras causas.',
        ],
      },
      {
        id: 'em-casa',
        heading: 'Os cuidados durante o tratamento em casa',
        paragraphs: [
          'O tratamento ambulatorial só funciona com colaboração. O antibiótico precisa ser tomado até o fim do prazo, mesmo depois que a febre some, porque as bactérias que sobraram voltam a se multiplicar quando o remédio é interrompido antes da hora. Voltar à unidade de saúde na data marcada faz parte do tratamento, e não é uma formalidade.',
          'Para o desconforto, analgésicos e antitérmicos comuns ajudam, sempre conforme a orientação recebida. Xaropes que bloqueiam a tosse não ajudam quando há catarro e podem atrapalhar a saída da secreção. Líquidos ao longo do dia e refeições leves mantêm o corpo hidratado e alimentado, o que pesa na recuperação.',
          'A família tem um papel prático nessa fase. Ajudar a pessoa a beber água ao longo do dia, lembrar os horários do remédio e observar se a respiração piora são atitudes que mudam o desfecho. Qualquer dúvida sobre a medicação deve ser levada à equipe de saúde, nunca resolvida por conta própria.',
        ],
        bullets: [
          'Tomar o antibiótico pelo tempo receitado, mesmo depois da febre sumir',
          'Voltar à unidade de saúde na data marcada para reavaliação',
          'Beber líquidos com frequência e descansar sem abandonar as refeições',
          'Usar analgésico e antitérmico conforme a orientação, sem se automedicar',
          'Não reutilizar sobras de antibiótico de caixinhas anteriores',
          'Procurar atendimento antes da hora se vier falta de ar, confusão ou recusa de líquidos',
        ],
      },
      {
        id: 'recuperacao-lenta',
        heading: 'A tosse que fica e o tempo de recuperação',
        paragraphs: [
          'A melhora começa antes da cura. A febre cede nos primeiros dias e o fôlego volta aos poucos, mas a tosse e o cansaço podem acompanhar por várias semanas. Até a radiografia demora mais que o corpo: os sinais no exame costumam atrasar a resolução clínica em várias semanas, o que assusta quem espera um exame limpo logo depois da alta.',
          'Sinais de alerta na convalescença pedem retorno imediato: febre que volta, tosse com sangue, falta de ar nova ou piora do estado geral. E a tosse que se arrasta por três semanas ou mais, com suor noturno e emagrecimento, deve ser investigada para tuberculose, não tratada como resto de pneumonia. Se a tosse vier acompanhada de febre baixa que se arrasta por semanas, a reavaliação não deve ser adiada.',
          'Retomar as atividades aos poucos, sem voltar de uma vez a toda a rotina, ajuda a evitar o cansaço excessivo nas primeiras semanas. Caminhadas curtas e sono regular costumam ser suficientes até o corpo recuperar o ritmo.',
        ],
      },
      {
        id: 'vacinas',
        heading: 'As vacinas que o SUS oferece',
        paragraphs: [
          'A vacinação é a medida que mais reduz o risco de pneumonia, e o Calendário Nacional de Vacinação oferece as principais gratuitamente pelo SUS. Ela protege contra as bactérias e os vírus que causam a maior parte dos casos, sobretudo nas faixas de idade em que a doença é mais grave. Quem tem dúvida sobre quais vacinas estão indicadas para a sua idade encontra essa informação na própria UBS, sem custo.',
          'Adultos com condições de risco devem perguntar na UBS sobre a vacina pneumocócica e sobre a dose anual de influenza. Vacina não substitui o cuidado com a doença já instalada, mas reduz a chance de adoecer e de ter uma forma grave. Manter as demais vacinas em dia também protege, porque pneumonia é complicação frequente de sarampo e coqueluche.',
        ],
        bullets: [
          'Pneumocócica conjugada para crianças, com doses aos 2 e 4 meses e reforço aos 12 meses',
          'Pentavalente, que inclui a proteção contra o Hib, aos 2, 4 e 6 meses',
          'Influenza a cada temporada para crianças de 6 meses a menores de 6 anos, pessoas idosas e grupos de risco',
          'Sarampo e coqueluche em dia, porque a pneumonia é uma complicação comum dessas doenças',
          'Amamentação exclusiva nos primeiros seis meses',
          'Higiene das mãos e ambientes ventilados completam a proteção',
        ],
        cta: {
          label: 'Veja a página sobre pneumonia',
          href: '/doencas/pneumonia/',
        },
      },
    ],
    diseaseSlugs: ['pneumonia'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['pneumonia-sinais-de-alerta-quando-procurar-atendimento'],
    references: [
      {
        label: 'Calendário Nacional de Vacinação',
        url: 'https://www.gov.br/saude/pt-br/vacinacao/calendario',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Pneumonia adquirida na comunidade, edição profissional',
        url: 'https://www.msdmanuals.com/pt/profissional/dist%C3%BArbios-pulmonares/pneumonia/pneumonia-adquirida-na-comunidade',
        publisher: 'Manual MSD',
      },
      {
        label: 'Pneumonia in children: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento',
    slug: 'insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento',
    metaTitle: 'Insuficiência cardíaca: sinais de alerta',
    title: 'Insuficiência cardíaca: sinais de alerta e quando procurar atendimento',
    excerpt:
      'A descompensação da insuficiência cardíaca costuma dar avisos dias antes da emergência. Saiba quais sinais vigiar em casa e quando chamar o SAMU.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'a-piora-comeca-devagar',
        heading: 'A piora costuma avisar antes',
        paragraphs: [
          'Na insuficiência cardíaca, o coração já bombeia com pouca eficiência, e qualquer desequilíbrio aumenta a pressão dentro das veias. O líquido sai dos vasos e se instala onde a gravidade e o próprio pulmão permitem: tornozelos, barriga e, por fim, os espaços entre os alvéolos. É essa sequência que transforma uma semana de inchaço discreto em falta de ar que acorda a pessoa à noite.',
          'A maioria das internações evitáveis dá aviso dias antes. Quem conhece os sinais pode procurar a equipe de saúde em vez de esperar a crise. O peso medido todos os dias é o marcador mais simples: o ganho de líquido aparece na balança antes de aparecer no pulmão.',
          'A piora nem sempre é rápida. Pode ser uma tosse seca que surge à noite, um travesseiro a mais, uma caminhada que passa a cansar. Quando esses sinais se acumulam em poucos dias, a chance de descompensação é alta, e o momento de agir é antes do pronto atendimento. Uma ligação para a unidade de saúde no mesmo dia costuma evitar a internação.',
        ],
      },
      {
        id: 'sinais-para-vigiar-em-casa',
        heading: 'Sinais para vigiar em casa',
        paragraphs: [
          'Alguns sinais não são emergência, mas pedem contato com a equipe que acompanha o coração em até 24 horas. Anote o peso, os sintomas e os remédios em uso antes de ligar, porque essa informação ajuda a decidir se o ajuste pode ser feito à distância.',
          'Não espere o próximo retorno marcado. Uma consulta antecipada ou uma orientação por telefone costuma resolver o acúmulo de líquido antes que ele chegue ao pulmão.',
          'Se a pessoa tem dificuldade para falar frases completas, precisa parar no meio de uma caminhada ou não consegue deitar sem se sentir sufocada, a avaliação deve ser no mesmo dia, mesmo sem outros sintomas. A orientação por telefone pode bastar, desde que a equipe consiga acompanhar a evolução do peso e dos sintomas.',
        ],
        bullets: [
          'Ganho de peso em poucos dias, sem mudança na alimentação',
          'Tornozelos, pernas ou barriga visivelmente mais inchados',
          'Dormir com mais travesseiros do que de costume',
          'Falta de ar ao fazer o que antes era rotina',
          'Tosse nova, sobretudo à noite',
          'Cansaço desproporcional ou tontura com os remédios em dia',
        ],
        cta: {
          label: 'Veja a página sobre insuficiência cardíaca',
          href: '/doencas/insuficiencia-cardiaca/',
        },
      },
      {
        id: 'quando-e-emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Há sinais que não admitem espera. Falta de ar em repouso, dor no peito e desmaio são os mais claros. O catarro rosado e espumoso também indica líquido no pulmão e não deve ser tratado como gripe.',
          'Confusão mental ou sonolência incomum em quem tem insuficiência cardíaca pode indicar queda de oxigenação ou de pressão. Não vá dirigindo até o hospital se estiver muito cansado ou tonto: chamar o SAMU permite começar oxigênio e monitorização no trajeto, e a equipe já chega sabendo que se trata de um paciente cardíaco.',
          'Ligue para o SAMU (192) ou vá imediatamente a um pronto atendimento se aparecer algum destes sinais:',
        ],
        bullets: [
          'Falta de ar intensa em repouso ou sensação de afogamento',
          'Catarro rosado e espumoso',
          'Dor no peito que não alivia',
          'Desmaio, confusão mental ou sonolência anormal',
          'Lábios, mãos ou pés arroxeados e pele fria',
          'Palpitações com tontura ou sensação de desmaio iminente',
          'Falta de ar crescente junto de inchaço que sobe rápido',
        ],
      },
      {
        id: 'enquanto-o-atendimento-chega',
        heading: 'Enquanto o atendimento chega',
        paragraphs: [
          'Enquanto o atendimento não chega, sentar a pessoa com as pernas para baixo e afrouxar roupas apertadas costuma aliviar a respiração. Abra a janela, mantenha a calma e evite deitar. Se houver oxigênio em casa com prescrição, use conforme a orientação.',
          'Não ofereça líquidos nem remédios por conta própria, e não aumente o diurético sem um plano escrito pela equipe. Se a pessoa perder a consciência e parar de respirar, comece compressões no peito e siga as instruções do atendente.',
          'Deixe à mão a lista de remédios, os exames mais recentes e o telefone do serviço que acompanha o paciente. Em uma emergência, essa organização encurta a conversa com a equipe do SAMU e evita que alguém perca tempo procurando informação dentro de casa.',
        ],
      },
      {
        id: 'onde-ser-atendido',
        heading: 'Onde buscar atendimento',
        paragraphs: [
          'Sinais que preocupam mas não são emergência podem ser avaliados na unidade básica de saúde (UBS) de referência ou, fora do horário, na unidade de pronto atendimento (UPA). Leve a lista de remédios, a caderneta de peso e os exames recentes, especialmente potássio e função renal, porque esses números guiam o ajuste.',
          'Quem tem doença avançada, internação recente, fração de ejeção muito baixa ou suspeita de arritmia costuma precisar de um serviço com cardiologista e observação. O SUS organiza esse percurso por regulação de vagas, então o encaminhamento pode não ser para o hospital mais próximo.',
          'Se a pessoa já é acompanhada por um serviço de referência, ligue para lá antes de sair de casa. Muitas equipes têm canal para orientar a descompensação e evitar uma ida desnecessária à emergência. Essa conversa rápida costuma valer mais do que sair sem saber para onde ir.',
        ],
      },
      {
        id: 'o-que-nao-fazer',
        heading: 'Erros que atrasam o atendimento',
        paragraphs: [
          'Alguns erros comuns atrasam o atendimento. Um deles é atribuir a falta de ar ao cansaço normal ou à idade. Outro é tomar o diurético a mais por conta própria, o que pode desidratar, baixar a pressão e piorar a função dos rins.',
          'Também não se deve esperar a consulta marcada quando há ganho de peso rápido ou inchaço crescente. Se houver dúvida sobre a gravidade, ligue para a unidade de saúde: a triagem por telefone existe justamente para separar o que pode esperar do que precisa de atendimento imediato.',
          'Outra armadilha é tomar remédio para dormir ou para dor sem consultar a equipe. Alguns medicamentos pioram a retenção de líquido, e outros aumentam o risco de queda em quem já está tonto por pressão baixa. Na dúvida, pergunte antes de usar qualquer coisa nova.',
        ],
      },
    ],
    diseaseSlugs: ['insuficiencia-cardiaca'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['insuficiencia-cardiaca-tratamento-e-vida-diaria'],
    references: [
      {
        label: 'Insuficiência cardíaca com fração de ejeção reduzida: protocolo clínico e diretrizes terapêuticas, resumo',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/PCDTResumidoInsuficinciaCardacafinal.pdf',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Insuficiência cardíaca: especialista explica fatores de risco, sintomas e tratamento',
        url: 'https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-norte/hdt-ufnt/insuficiencia-cardiaca-especialista-explica-fatores-de-risco-sintomas-e-tratamento',
        publisher: 'Rede Ebserh e Ministério da Saúde (Brasil)',
      },
      {
        label: 'Doenças cardiovasculares, folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'insuficiencia-cardiaca-tratamento-e-vida-diaria',
    slug: 'insuficiencia-cardiaca-tratamento-e-vida-diaria',
    metaTitle: 'Viver com insuficiência cardíaca',
    title: 'Insuficiência cardíaca: tratamento e vida diária',
    excerpt:
      'Os quatro pilares de remédios do protocolo brasileiro, a balança como ferramenta de monitoramento, o sal na prática e a reabilitação cardíaca disponível no SUS.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'os-quatro-pilares',
        heading: 'Os quatro pilares do tratamento',
        paragraphs: [
          'O protocolo nacional para a insuficiência cardíaca com fração de ejeção reduzida, aprovado pelo Ministério da Saúde em 2024, reúne quatro classes de medicamentos: o inibidor da enzima de conversão ou a associação sacubitril-valsartana; o betabloqueador; o antagonista da aldosterona, que no Brasil é a espironolactona; e o inibidor do SGLT2, como a dapagliflozina.',
          'Cada classe atua em um mecanismo diferente do desgaste cardíaco. As diretrizes recomendam começar as quatro o mais cedo possível e subir as doses em consultas próximas, em vez de esgotar uma antes de iniciar a outra. O benefício cresce quando elas trabalham juntas. A ordem de entrada depende da pressão, da função renal, do potássio e dos sintomas, e não de uma receita igual para todos.',
          'Sentir-se melhor não é motivo para suspender nenhuma delas. O ajuste exige acompanhamento de potássio, sódio e função renal, e anti-inflamatórios não esteroides podem piorar a retenção de líquido.',
        ],
      },
      {
        id: 'diureticos-e-alivio-de-sintomas',
        heading: 'Diuréticos aliviam, mas não bastam',
        paragraphs: [
          'A furosemida e outros diuréticos trazem alívio rápido: retiram o líquido que congestionou pulmão e pernas. Eles convivem com os quatro pilares, não os substituem. Quem usa só diurético respira melhor por alguns dias e segue exposto às internações que as outras classes ajudam a evitar.',
          'A dose do diurético costuma mudar conforme o peso e o inchaço, e é comum a equipe orientar um ajuste dentro de uma faixa combinada. Aumentar por conta própria é perigoso; reduzir também, porque o líquido volta.',
          'Quando o inchaço sobe para a barriga, a roupa aperta e a falta de ar aparece ao deitar, o sinal é de congestão mais intensa. Nesse caso, a equipe pode rever a dose e marcar um retorno em poucos dias. Não espere o fim do estoque de remédio para pedir a reavaliação.',
        ],
      },
      {
        id: 'sal-e-liquidos-na-pratica',
        heading: 'Sal e líquidos na prática',
        paragraphs: [
          'A orientação atual sobre sal é menos radical do que a fama do sal zero. O protocolo brasileiro recomenda dieta com sal normal, em torno de 7 g por dia, e o caminho prático é reduzir ultraprocessados, temperos prontos, embutidos e congelados industrializados, que concentram sódio, em vez de comer comida sem graça. Rótulos com “light” ou “diet” não são automaticamente mais pobres em sódio, e vale conferir a quantidade por porção antes de comprar.',
          'A restrição de líquidos, entre 1,5 e 2 litros por dia, fica reservada a quem tem congestão persistente, classe funcional avançada ou sódio baixo no sangue, sempre com volume definido pela equipe.',
          'Quem está estável e urina bem não precisa beber menos sem orientação. Restringir líquido sem indicação pode piorar a função renal e não traz benefício. Em dias de calor intenso ou febre, a necessidade de água muda, e a equipe deve ser consultada.',
        ],
      },
      {
        id: 'balanca-como-instrumento',
        heading: 'A balança como instrumento',
        paragraphs: [
          'A balança é o instrumento mais barato de monitoramento. Pesar-se todos os dias, em jejum e depois de urinar, no mesmo horário e com a mesma roupa, mostra o acúmulo de líquido antes que ele apareça como falta de ar. Uma balança simples, desde que seja sempre a mesma, basta para perceber a tendência.',
          'Anote o valor em uma caderneta ou no celular. Um ganho de 2 kg em três dias pede contato com a unidade de saúde, mesmo que a pessoa se sinta bem. Não espere o inchaço aparecer para agir: a balança avisa antes.',
          'A pesagem de um único dia não decide nada: o que importa é a tendência. Uma noite com jantar mais salgado pode inflar o número, e uma diarreia pode derrubá-lo. Por isso a caderneta vale mais do que a memória.',
        ],
        bullets: [
          'Pese-se sempre no mesmo horário',
          'Use a mesma balança e roupa parecida',
          'Anote o valor todos os dias',
          'Compare a média da semana, não um dia isolado',
          'Avise a equipe se ganhar 2 kg em três dias',
          'Leve a caderneta às consultas',
        ],
      },
      {
        id: 'movimento-e-reabilitacao',
        heading: 'Movimento e reabilitação cardíaca',
        paragraphs: [
          'Quem está estável se beneficia de atividade física aeróbica supervisionada. Os programas de reabilitação cardíaca combinam avaliação médica, exercício prescrito, orientação à família e apoio psicossocial. Pergunte na unidade de saúde se existe programa na região, porque a disponibilidade varia muito entre cidades.',
          'O passo seguro é pedir à unidade de saúde a indicação para um programa com avaliação antes de começar. Exercício é contraindicado durante a descompensação, em arritmia não controlada e em doença de válvula grave. Mesmo em programas supervisionados, o esforço deve ser interrompido se surgir dor no peito, tontura ou falta de ar desproporcional.',
          'Quem nunca se exercitou deve começar com caminhadas curtas e frequentes, aumentando aos poucos conforme a tolerância, sempre com orientação. Caminhar acompanhado e escolher horários mais frescos ajuda a manter a rotina. A meta não é desempenho esportivo, e sim manter autonomia e reduzir o cansaço nas tarefas do dia a dia.',
        ],
      },
      {
        id: 'acompanhamento-e-acesso',
        heading: 'Acompanhamento e acesso pelo SUS',
        paragraphs: [
          'O acompanhamento não termina quando os sintomas melhoram. As consultas servem para ajustar doses, checar potássio e função renal e revisar vacinas. Levar a lista de remédios e a caderneta de peso a cada visita economiza tempo e evita trocas desnecessárias. Consultas mais próximas no início do tratamento são normais e não significam piora.',
          'Vacinas anuais contra influenza, pneumococo e covid-19 reduzem o risco de infecções que descompensam o coração. Evitar aglomerações em época de gripe e tratar apneia do sono e doenças de tireoide também fazem parte do cuidado. A equipe da unidade básica pode conferir o calendário vacinal em cada visita.',
          'Pergunte à equipe quais sinais justificam uma ligação e quais justificam ir direto à emergência. Ter esse plano por escrito, com a dose de resgate do diurético, diminui a ansiedade e evita condutas improvisadas.',
        ],
        cta: {
          label: 'Veja a página sobre insuficiência cardíaca',
          href: '/doencas/insuficiencia-cardiaca/',
        },
      },
    ],
    diseaseSlugs: ['insuficiencia-cardiaca'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento'],
    references: [
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas de insuficiência cardíaca com fração de ejeção reduzida',
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/i/insuficiencia-cardiaca-com-fracao-de-ejecao-reduzida',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Insuficiência cardíaca com fração de ejeção reduzida: protocolo clínico e diretrizes terapêuticas, resumo',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/PCDTResumidoInsuficinciaCardacafinal.pdf',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Insuficiência cardíaca: especialista explica fatores de risco, sintomas e tratamento',
        url: 'https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-norte/hdt-ufnt/insuficiencia-cardiaca-especialista-explica-fatores-de-risco-sintomas-e-tratamento',
        publisher: 'Rede Ebserh e Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
    slug: 'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
    metaTitle: 'Esteatose hepática: sinais de alerta',
    title: 'Esteatose hepática: sintomas e quando procurar atendimento',
    excerpt:
      'A gordura no fígado costuma ser silenciosa e aparecer em exames de rotina. Saiba quais queixas merecem investigação e quais sinais pedem atendimento imediato.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'silenciosa-no-inicio',
        heading: 'Por que quase não há sintomas',
        paragraphs: [
          'A esteatose hepática, a gordura no fígado, raramente dá sinal no começo. O fígado é um órgão silencioso: mesmo acumulando gordura nas células, continua trabalhando e não dói. É por isso que a maioria dos diagnósticos vem de uma ultrassonografia pedida por outro motivo, como uma dor abdominal, um check-up ou o acompanhamento de diabetes.',
          'Quando os sintomas aparecem, são vagos: desconforto ou peso na parte superior direita da barriga, cansaço ao longo do dia e diminuição do apetite. Nenhuma dessas queixas é exclusiva da esteatose, e por isso só a investigação com exames de sangue e de imagem confirma o quadro. A ausência de sintomas não significa que está tudo bem.',
          'Pessoas com diabetes, excesso de peso, colesterol alto ou histórico de doença hepática formam o grupo que mais se beneficia de uma avaliação precoce. Como a doença é silenciosa, um exame de rotina pode ser a única oportunidade de descobrir o problema antes que a fibrose avance. Não é preciso ter sintomas para investigar.',
        ],
      },
      {
        id: 'sintomas-que-podem-aparecer',
        heading: 'Sintomas que podem aparecer',
        paragraphs: [
          'Algumas pessoas relatam sensação de barriga inchada, empachamento depois das refeições ou dor de cabeça constante. O fígado aumentado pode ser percebido no exame físico, mas isso não acontece em todos os casos.',
          'É importante não atribuir todos os sintomas à gordura no fígado. Cansaço e desconforto abdominal têm muitas causas, e a avaliação serve justamente para separar o que vem do fígado do que vem de outra parte do corpo. O diagnóstico não é feito pelo sintoma, e sim pela soma de história, exame físico e exames.',
          'A intensidade das queixas não mede o grau de gordura nem de fibrose. Há pessoas com doença avançada e poucos sintomas, assim como pessoas com gordura leve e bastante desconforto. Por isso, a avaliação não deve ser guiada apenas pelo que se sente, e sim pelos exames e pelos fatores de risco.',
        ],
        bullets: [
          'Desconforto ou dor no lado direito do abdome',
          'Cansaço que não melhora com descanso',
          'Perda de apetite',
          'Sensação de barriga inchada ou empachamento',
          'Dor de cabeça constante',
        ],
      },
      {
        id: 'como-e-descoberta',
        heading: 'Como a gordura no fígado é descoberta',
        paragraphs: [
          'Na rotina, o primeiro indício costuma vir da ultrassonografia de abdome, que mostra o fígado mais claro e, muitas vezes, aumentado. O exame é indolor e amplamente disponível, mas pode não ser sensível o suficiente em casos de gordura leve ou em pessoas com obesidade importante.',
          'No exame de sangue, as enzimas hepáticas podem vir levemente elevadas, o que levanta a suspeita. Quando há dúvida sobre inflamação ou fibrose, a elastografia mede a rigidez do fígado e ajuda a definir se o caso precisa de acompanhamento mais próximo. Quem tem fatores de risco deve pedir avaliação mesmo sem sintomas.',
          'O diagnóstico não termina no primeiro exame. Se a ultrassonografia mostrar gordura, a equipe precisa avaliar o metabolismo, o consumo de álcool e a possibilidade de outras doenças do fígado. Essa etapa transforma um achado isolado em um plano de cuidado, com metas realistas e seguimento.',
        ],
      },
      {
        id: 'sinais-de-piora',
        heading: 'Sinais de que o fígado piorou',
        paragraphs: [
          'A gordura isolada costuma ser estável, mas a inflamação persistente pode, ao longo dos anos, produzir fibrose e cirrose. A progressão é lenta e muitas vezes silenciosa, por isso o acompanhamento regular é mais importante do que esperar sentir algo.',
          'A fibrose não dá sinais claros enquanto é leve. Por isso, a elastografia e os exames de sangue são mais confiáveis do que os sintomas para acompanhar a evolução. Quem tem diabetes, obesidade ou alterações persistentes nas enzimas do fígado deve manter o seguimento em dia mesmo que se sinta bem, porque a doença pode continuar avançando em silêncio.',
          'Procure reavaliação se aparecerem queixas que sugerem piora:',
        ],
        bullets: [
          'Cansaço que aumenta e não melhora com descanso',
          'Dor persistente no lado superior direito do abdome',
          'Barriga que aumenta de volume de forma progressiva',
          'Pele e olhos com tom amarelado',
          'Perda de peso sem esforço e sem explicação',
          'Confusão mental ou sonolência incomum',
        ],
        cta: {
          label: 'Veja a página sobre a esteatose hepática',
          href: '/doencas/esteatose-hepatica/',
        },
      },
      {
        id: 'quando-e-emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Alguns sinais indicam complicação grave e exigem atendimento imediato. Em uma pessoa com doença no fígado, confusão mental, sonolência ou desorientação podem ser sinal de encefalopatia hepática, e não de cansaço comum. Vômito com sangue ou fezes muito escuras também pedem avaliação urgente.',
          'Esses sinais não são exclusivos da esteatose, mas, em quem já tem doença hepática, precisam de avaliação imediata. Não espere a consulta de rotina: procure o pronto atendimento e leve os exames e a lista de medicamentos. A encefalopatia hepática pode se instalar em pouco tempo e ser confundida com cansaço ou idade.',
          'Procure um pronto atendimento ou ligue para o SAMU 192 se surgirem:',
        ],
        bullets: [
          'Confusão mental, sonolência ou desorientação',
          'Vômito com sangue ou fezes muito escuras',
          'Barriga que incha e endurece de repente',
          'Febre alta com dor intensa no abdome',
          'Pele e olhos amarelados que aparecem rápido',
          'Inchaço súbito nas pernas',
        ],
      },
      {
        id: 'onde-fazer-o-acompanhamento',
        heading: 'Onde fazer o acompanhamento',
        paragraphs: [
          'O primeiro passo é procurar a unidade básica de saúde (UBS) de referência. O clínico geral avalia o histórico, o peso, a pressão e os exames, e encaminha para gastroenterologia ou hepatologia quando necessário.',
          'O acompanhamento inclui repetir exames de sangue, avaliar o peso e a circunferência abdominal e, quando indicado, medir a rigidez do fígado com elastografia. Manter as consultas em dia é o que permite detectar uma progressão cedo, quando ainda dá para reverter.',
          'O acompanhamento não é só de exames. Inclui apoio para alimentação, atividade física e controle do peso, além do tratamento de diabetes, colesterol e pressão. Essas ações fazem parte do cuidado da esteatose e ajudam a evitar que a gordura volte depois de uma melhora. Se houver dificuldade de acesso, vale perguntar na recepção da UBS sobre o fluxo de encaminhamento.',
        ],
      },
    ],
    diseaseSlugs: ['esteatose-hepatica'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'esteatose-hepatica-como-reverter-com-habitos',
      'esteatose-hepatica-descobri-no-check-up',
      'esteatose-hepatica-o-que-acontece-sem-tratamento',
      'esteatose-hepatica-causas-e-mitos',
    ],
    references: [
      {
        label: 'Esteatose hepática: o que é, causas, sintomas e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Esteatose hepática: tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica/tratamento',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Métodos de diagnóstico da esteato-hepatite associada à disfunção metabólica (MASH)',
        url: 'https://sbhepatologia.org.br/publicacoes/artigos/metodos-de-diagnostico-da-esteato-hepatite-associada-a-disfuncao-metabolica-mash/',
        publisher: 'Sociedade Brasileira de Hepatologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'esteatose-hepatica-como-reverter-com-habitos',
    slug: 'esteatose-hepatica-como-reverter-com-habitos',
    title: 'Esteatose hepática: como reverter com hábitos',
    excerpt:
      'Perder peso e manter o corpo em movimento mudam a história da gordura no fígado. Entenda quanto emagrecer faz diferença e como o SUS organiza o acompanhamento desse cuidado.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-reverte',
        heading: 'O que realmente reverte a gordura no fígado',
        paragraphs: [
          'A esteatose hepática tem uma característica importante: nas fases iniciais, ela pode regredir. O que faz a diferença não é um remédio isolado, e sim a combinação de alimentação, movimento e perda de peso sustentada. Perder 5% do peso corporal já reduz a gordura no fígado.',
          'Perdas acima de 10% estão associadas à melhora da inflamação e, em muitos casos, à regressão da esteato-hepatite. O ritmo importa: dietas radicais, com emagrecimento muito rápido, podem piorar o quadro. O objetivo é chegar a um peso possível de manter, não a um número alcançado em poucas semanas.',
          'O corpo responde à redução de calorias e ao movimento de forma gradual. Não é preciso atingir o peso ideal para começar a ver benefício: cada quilo perdido e mantido já alivia o fígado. O importante é que a mudança seja possível de repetir na vida real, com comida acessível, tempo disponível e apoio da família.',
        ],
      },
      {
        id: 'alimentacao',
        heading: 'O que colocar no prato',
        paragraphs: [
          'A base da alimentação deve ser comida de verdade: frutas, legumes, verduras, feijão, grãos integrais, ovos, peixes e carnes magras. Fibras ajudam a controlar a velocidade de absorção do açúcar e aumentam a saciedade. Refeições regulares evitam picos de fome e facilitam a escolha de porções menores.',
          'Vale reduzir frituras, gorduras, doces, refrigerantes e ultraprocessados. O álcool deve ficar fora do dia a dia, porque agride diretamente o fígado. Não é preciso eliminar tudo de uma vez: trocas graduais, como substituir o refrigerante por água e o salgado por uma fruta, costumam durar mais.',
          'Não é preciso seguir uma dieta com nome próprio. O padrão que mais ajuda é o mesmo que protege o coração: mais comida fresca, menos produtos de pacote, menos açúcar e sal. Planejar as compras e cozinhar em casa facilita essas escolhas e costuma custar menos do que comprar refeições prontas todos os dias.',
        ],
        bullets: [
          'Priorizar frutas, legumes, verduras, feijão e grãos integrais',
          'Reduzir frituras, gorduras, doces e ultraprocessados',
          'Evitar refrigerantes e bebidas açucaradas',
          'Fazer refeições regulares, sem pular o café da manhã',
          'Evitar bebida alcoólica',
        ],
      },
      {
        id: 'movimento',
        heading: 'Movimento que cabe na rotina',
        paragraphs: [
          'A atividade física ajuda a reduzir a gordura visceral e melhora a sensibilidade à insulina, mesmo antes de a pessoa emagrecer. Não é necessário começar com treinos intensos: caminhadas, bicicleta, natação ou dança já contam. O importante é escolher algo que caiba na rotina e possa ser repetido.',
          'Com o tempo, combinar atividade aeróbica com exercícios de força ajuda a preservar massa muscular durante o emagrecimento. Quem tem dor articular, problemas cardíacos ou limitações deve conversar com a equipe de saúde antes de aumentar o esforço. O movimento também melhora o sono e o humor, o que facilita a manutenção da dieta. A regularidade vale mais do que a intensidade de um único dia.',
          'Quem trabalha sentado pode começar com pausas curtas para caminhar e subir escadas em vez de usar o elevador. Esses minutos somam ao longo da semana e ajudam a reduzir o comportamento sedentário. O ideal é escolher uma atividade que dê prazer, porque a chance de continuar aumenta quando o movimento não parece obrigação.',
        ],
      },
      {
        id: 'pelo-sus',
        heading: 'Como organizar o acompanhamento no SUS',
        paragraphs: [
          'O acompanhamento começa na unidade básica de saúde (UBS). O clínico geral avalia o peso, a pressão, a glicemia e as enzimas do fígado, e pode encaminhar para nutrição, gastroenterologia ou hepatologia quando necessário. A equipe da UBS pode incluir nutricionista e outros profissionais.',
          'Manter as consultas em dia e repetir os exames conforme a orientação é parte do tratamento. O acompanhamento permite ajustar o plano, identificar piora da fibrose e tratar diabetes, colesterol e pressão, que contribuem para a gordura no fígado.',
          'Se houver dificuldade para agendar, vale procurar a recepção da UBS e perguntar sobre o fluxo de acompanhamento. O tratamento da esteatose não depende de exames caros: boa parte do cuidado acontece na consulta, na orientação alimentar e no controle das doenças metabólicas. O profissional também pode ajudar a definir metas possíveis para o peso.',
        ],
      },
      {
        id: 'o-que-nao-faz-milagres',
        heading: 'O que não faz milagre',
        paragraphs: [
          'Chás detox, suplementos e fórmulas vendidas como limpadores do fígado não substituem o tratamento. Não há comprovação de que esses produtos removam a gordura acumulada, e o uso sem orientação pode trazer riscos. O mesmo vale para medicamentos usados sem indicação.',
          'Nenhum remédio disponível hoje faz o trabalho que a mudança de hábitos faz nas fases iniciais. Em casos selecionados, o médico pode indicar fármacos para diabetes, vitamina E ou outros, mas sempre dentro de um plano que inclui alimentação e movimento.',
          'Antes de comprar qualquer suplemento, vale levar a embalagem para a consulta. O profissional pode verificar se há interação com outros medicamentos e se o produto tem alguma indicação real. O dinheiro investido em fórmulas sem comprovação costuma render mais em comida de verdade e acompanhamento regular.',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Como saber se está funcionando',
        paragraphs: [
          'A melhora não aparece da noite para o dia. Os primeiros sinais costumam ser a redução do peso e da circunferência abdominal, a melhora da glicemia e do perfil lipídico e a queda das enzimas hepáticas. A ultrassonografia e a elastografia podem ser repetidas conforme a orientação.',
          'Se o peso voltar a subir, a gordura pode voltar. Por isso, o ideal é transformar as mudanças em rotina, com apoio da família e da equipe de saúde. O objetivo não é fazer dieta por alguns meses, e sim construir um jeito de viver que possa ser mantido.',
          'O acompanhamento também serve para celebrar avanços pequenos e ajustar metas quando a rotina muda. Se o peso estagnar, a equipe pode rever alimentação, atividade e sono em vez de aumentar a cobrança. O cuidado é uma corrida longa, não uma prova de algumas semanas, e recaídas fazem parte do processo.',
        ],
        cta: {
          label: 'Veja a página completa sobre a esteatose hepática',
          href: '/doencas/esteatose-hepatica/',
        },
      },
    ],
    diseaseSlugs: ['esteatose-hepatica'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
      'esteatose-hepatica-descobri-no-check-up',
      'esteatose-hepatica-o-que-acontece-sem-tratamento',
      'esteatose-hepatica-causas-e-mitos',
    ],
    references: [
      {
        label: 'Esteatose hepática: o que é, causas, sintomas e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Esteatose hepática: tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica/tratamento',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Esteatose hepática: prevenção',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica/prevencao',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Modificação do estilo de vida em MASLD/MASH: fatos e evidências',
        url: 'https://sbhepatologia.org.br/publicacoes/artigos/modificacao-do-estilo-de-vida-em-masld-mash-fatos-e-evidencias/',
        publisher: 'Sociedade Brasileira de Hepatologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'colesterol-alto-como-detectar-e-quando-procurar-atendimento',
    slug: 'colesterol-alto-como-detectar-e-quando-procurar-atendimento',
    metaTitle: 'Colesterol alto: como detectar',
    title: 'Colesterol alto: como detectar e quando procurar atendimento',
    excerpt:
      'O distúrbio do metabolismo das gorduras não dói e quase nunca aparece no espelho. Ele é pego no perfil lipídico, e a leitura do exame depende do risco de cada pessoa.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'por-que-e-silencioso',
        heading: 'Por que o colesterol alto passa despercebido',
        paragraphs: [
          'A dislipidemia é um distúrbio do metabolismo das gorduras: o colesterol LDL e os triglicerídeos circulam em excesso, e nada disso produz dor, cansaço ou sinal visível. O depósito acontece por dentro da parede das artérias, devagar, durante anos. As diretrizes brasileiras são diretas ao estimar que, em pelo menos metade das pessoas, a primeira manifestação da doença aterosclerótica é um evento coronário agudo, ou seja, um infarto.',
          'É por isso que a descoberta legítima do colesterol alto é de laboratório, e não de sintoma. Quem espera sentir alguma coisa para investigar está, na prática, esperando o primeiro evento cardiovascular. Quando o exame é feito a tempo, quase todo o risco medido ali pode ser reduzido com tratamento.',
          'Na prática, isso muda o motivo de fazer o exame: ele não serve para explicar um sintoma, e sim para medir o risco antes que ele apareça. É a mesma lógica de medir a pressão arterial em quem se sente bem, e de repetir a medida quando o primeiro valor vem alterado.',
        ],
      },
      {
        id: 'o-exame-e-o-jejum',
        heading: 'O exame, e a mudança na regra do jejum',
        paragraphs: [
          'O perfil lipídico mede colesterol total, HDL (o bom), LDL (o ruim) e triglicerídeos, e o custo no setor público é baixo. A parte que mais confunde ainda é o jejum: as diretrizes brasileiras dispensam jejum para colesterol total, HDL, LDL calculado e colesterol não HDL, o que permite colher o exame em qualquer horário do dia. Idosos, pessoas com diabetes, gestantes e crianças são quem mais ganha com essa mudança, porque evitar horas sem comer reduz risco de hipoglicemia e de mal-estar.',
          'A exceção são os triglicerídeos. Sem jejum, o valor desejável é abaixo de 175 mg/dL; quando a medida vem muito acima disso, a equipe pode repetir a coleta em jejum para interpretar melhor, porque a fórmula usada para calcular o LDL perde confiabilidade com triglicerídeos acima de 400 mg/dL. Se a amostra vier com aparência turva e triglicerídeos muito altos, não ignore o resultado: é o cenário que merece reavaliação rápida.',
        ],
      },
      {
        id: 'quem-precisa-dosar',
        heading: 'Quem deve dosar, e com que frequência',
        paragraphs: [
          'A dosagem faz parte da rotina de quem já tem fator de risco, e nesses casos o pedido costuma vir junto da consulta de acompanhamento. Pergunte à equipe de saúde se é hora do exame se você se reconhece em alguma destas situações.',
          'Não é preciso esperar sintoma nem ter todos esses fatores: um único já justifica conversar sobre o exame. O intervalo entre uma dosagem e outra é definido pela equipe, conforme o risco, o resultado anterior e a presença de doenças que pedem controle mais próximo. As situações que pedem dosagem são:',
        ],
        bullets: [
          'Diabetes, pré-diabetes ou resistência à insulina',
          'Pressão alta, mesmo controlada com remédio',
          'Infarto, AVC ou angina na família em idade jovem',
          'Parente próximo com LDL acima de 190 mg/dL',
          'Sobrepeso relevante, sobretudo com gordura na cintura',
          'Tabagismo ou consumo frequente de álcool',
        ],
      },
      {
        id: 'como-ler-o-exame',
        heading: 'Como ler o exame sem se assustar',
        paragraphs: [
          'O número impresso ao lado do LDL não é um veredito. O protocolo brasileiro lembra que não existe valor normal único de LDL: o alvo depende do risco cardiovascular da pessoa, estimado com idade, pressão arterial, tabagismo, diabetes e histórico familiar. Para quem já teve infarto ou AVC, ou para quem tem diabetes com outros fatores, a meta de LDL é bem mais baixa do que para um jovem saudável. O colesterol não HDL (total menos HDL) entra como alvo secundário, útil quando os triglicerídeos estão altos.',
          'Duas situações mudam o raciocínio e pedem atenção imediata da equipe: LDL a partir de 190 mg/dL em adulto, que por si só já classifica a pessoa como de risco alto e levanta a suspeita de hipercolesterolemia familiar, forma genética que exige investigar pais, irmãos e filhos; e triglicerídeos acima de 500 mg/dL, que colocam risco real de pancreatite aguda, inflamação súbita do pâncreas. Em crianças, valores de LDL acima de 160 mg/dL com história familiar de colesterol alto também merecem investigação.',
          'Vale guardar os resultados anteriores: comparar dois exames mostra se a mudança veio do tratamento ou se o valor sempre esteve naquele patamar, e essa diferença muda a conversa na consulta.',
        ],
        cta: {
          label: 'Veja a página sobre colesterol alto',
          href: '/doencas/colesterol-alto/',
        },
      },
      {
        id: 'quando-procurar-atendimento',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Exame alterado sem sintoma não é caso de pronto atendimento. O caminho é a unidade básica de saúde (UBS), com o resultado em mãos, para classificar o risco, repetir o que for preciso e decidir entre mudança de hábitos e medicamento. Nesses casos, vale adiantar a conversa com a equipe.',
          'Esses sinais não confirmam o diagnóstico sozinhos, mas mostram que a investigação não pode esperar a próxima consulta de rotina. Leve o resultado do perfil lipídico e a lista dos remédios em uso, porque pressão arterial, glicemia e tratamentos em curso mudam a interpretação do exame. Procure avaliação com mais urgência se aparecerem sinais de que as artérias já foram afetadas:',
        ],
        bullets: [
          'Dor ou aperto no peito aos esforços, que melhora com repouso',
          'Falta de ar nova ao caminhar ou subir escada',
          'Dor na panturrilha ao andar, que obriga a parar',
          'Ferida no pé que demora a cicatrizar, em quem tem diabetes e colesterol alto',
          'Manchas amareladas nas pálpebras ou nódulos nos tendões',
        ],
      },
      {
        id: 'quando-e-emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Alguns quadros exigem atendimento imediato, sem esperar consulta.',
          'Nesses casos, não espere o resultado de exame nem tente baixar o colesterol por conta própria. O atendimento é para o evento agudo, e o controle dos lipídios entra depois, na consulta de acompanhamento. Ligue para o SAMU (192) ou vá a um pronto atendimento sem esperar, se surgir:',
        ],
        bullets: [
          'Dor no peito intensa, opressiva, com suor, náusea ou irradiação para braço e mandíbula',
          'Boca torta, fala embolada, fraqueza em um lado do corpo ou perda de visão súbita',
          'Dor abdominal forte e contínua, acima do umbigo, com vômitos que não aliviam',
          'Desmaio associado a dor no peito',
        ],
      },
    ],
    diseaseSlugs: ['colesterol-alto'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['colesterol-alto-tratamento-e-mudancas-de-habitos'],
    references: [
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas de dislipidemia',
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/d/dislipidemia',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose',
        url: 'https://www.scielo.br/j/abc/a/whBsCyzTDzGYJcsBY7YVkWn/?lang=pt',
        publisher: 'Sociedade Brasileira de Cardiologia',
      },
      {
        label: 'Alimentação saudável, folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'colesterol-alto-tratamento-e-mudancas-de-habitos',
    slug: 'colesterol-alto-tratamento-e-mudancas-de-habitos',
    metaTitle: 'Colesterol alto: tratamento e hábitos',
    title: 'Colesterol alto: tratamento e mudanças de hábitos',
    excerpt:
      'Meta de LDL definida pelo risco, estatina sem mito, o que fazer com triglicerídeos muito altos e as trocas alimentares que realmente mudam o exame.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'meta-personalizada',
        heading: 'Primeiro definir a meta, depois escolher o remédio',
        paragraphs: [
          'Tratar colesterol alto não é baixar o LDL até um número genérico de laboratório. O protocolo brasileiro organiza o raciocínio em estratificação de risco: idade, pressão arterial, tabagismo, diabetes, doença renal e histórico de infarto ou AVC na família definem se a pessoa está em risco baixo, intermediário, alto ou muito alto, e cada faixa tem sua meta de LDL. A meta em risco muito alto é bem mais ambiciosa do que a de quem não tem fator de risco.',
          'Isso explica por que duas pessoas com o mesmo exame recebem condutas diferentes. Quem tem doença cardiovascular estabelecida precisa de medicamento desde o primeiro dia, enquanto uma alteração discreta em pessoa jovem e sem outros fatores pode ser manejada primeiro com mudança de hábitos e reavaliação no tempo combinado com a equipe.',
        ],
      },
      {
        id: 'estatina-sem-mito',
        heading: 'Estatina, o pilar com evidência máxima',
        paragraphs: [
          'A estatina é a primeira linha nas diretrizes brasileiras, com recomendação de grau máximo e evidência de nível A: ela reduz LDL, infarto, AVC e mortalidade em quem tem risco relevante. Em geral a dose é ajustada para atingir a meta em vez de trocar de remédio a cada resultado, e a medicação tende a ser contínua, porque o metabolismo das gorduras volta ao ponto de partida quando ela é suspensa.',
          'Sobre os efeitos adversos, o retrato honesto é menos assustador do que a conversa de corredor de academia: eles são pouco frequentes. A queixa muscular costuma surgir entre quatro e doze semanas do início, em músculos grandes e dos dois lados do corpo, como nádegas, coxas, panturrilhas e costas, e é mais comum em quem faz atividade física intensa. Dosar a enzima CK de rotina, sem sintoma, não faz parte do acompanhamento. As transaminases são verificadas na entrada do tratamento e reavaliadas apenas se aparecer sinal de alteração hepática, como pele amarelada, urina escura, dor abdominal ou perda de apetite. Em metanálises, estatinas potentes foram associadas a um pequeno aumento de casos novos de diabetes, efeito que não compensa a redução de eventos cardiovasculares em quem tem risco alto.',
        ],
      },
      {
        id: 'triglicerideos-e-o-pancreas',
        heading: 'Triglicerídeos muito altos e o pâncreas',
        paragraphs: [
          'Triglicerídeos acima de 500 mg/dL mudam a prioridade do tratamento. Nessa faixa, o risco imediato não é o infarto daqui a dez anos, e sim a pancreatite aguda: o protocolo nacional registra que valores acima de 500 mg/dL podem precipitar ataques de inflamação do pâncreas, e que a hipertrigliceridemia responde por parte dos casos de pancreatite aguda. O objetivo passa a ser tirar rápido esse excesso de gordura do sangue.',
          'Aí entram o fibrato, incluído no protocolo brasileiro para essa finalidade, a suspensão de álcool, o controle rigoroso da glicemia e uma alimentação pobre em gordura e em açúcar, com ajuste da dieta definido por profissional. Quem tem pancreatite sente dor abdominal intensa e contínua, acima do umbigo, muitas vezes com vômitos, e isso é emergência: vá a um pronto atendimento.',
        ],
      },
      {
        id: 'alimentacao-que-faz-diferenca',
        heading: 'Alimentação: trocar em vez de só cortar',
        paragraphs: [
          'As referências da Organização Mundial da Saúde para a gordura da dieta são objetivas: no máximo 30% das calorias diárias vindas de gordura total, no máximo 10% de gordura saturada, o mínimo possível de gordura trans e açúcares livres abaixo de 10% das calorias, com menos de 5% sendo ainda melhor. Frutas e verduras em quantidade equivalente a pelo menos 400 g por dia, e cerca de 25 g de fibras, completam o quadro.',
          'No cardápio brasileiro, o efeito prático vem das trocas. Trocar parte da carne vermelha processada por feijão, ovo, frango sem pele ou peixe; trocar arroz branco por integral ou misturar; trocar biscoito recheado e salgadinho de pacote por fruta e castanha; usar azeite na finalização em vez de margarina e fritura por imersão. Reduzir refrigerante e suco de caixinha ataca os triglicerídeos diretamente, porque o açúcar virado gordura no fígado é parte do problema.',
        ],
      },
      {
        id: 'movimento-peso-e-cigarro',
        heading: 'Movimento, peso e cigarro',
        paragraphs: [
          'Exercício aeróbico regular melhora o quadro, com efeito mais visível no HDL e nos triglicerídeos e no controle do peso, e ajuda a manter a pressão arterial e a glicemia em faixa melhor. O ganho é maior quando a atividade se soma à alimentação, não quando a substitui.',
          'Quem está começando pode dividir a atividade em blocos curtos ao longo do dia e escolher algo que consiga manter; o importante é a constância, não a intensidade de uma única sessão. Em quem tem dor no peito, falta de ar ou doença cardiovascular conhecida, o tipo e a intensidade do exercício devem ser definidos antes pela equipe que acompanha o caso.',
        ],
        bullets: [
          'Caminhada, bicicleta ou natação na maioria dos dias da semana',
          'Aumentar o tempo aos poucos, sem precisar de academia para começar',
          'Trabalhar força muscular duas a três vezes por semana',
          'Reduzir tempo sentado, levantando a cada hora',
          'Parar de fumar: o risco cardiovascular começa a cair em semanas',
          'Dormir o suficiente, porque privação de sono piora o controle metabólico',
        ],
      },
      {
        id: 'acompanhamento-e-sus',
        heading: 'Acompanhamento, exames e o que o SUS oferece',
        paragraphs: [
          'O perfil lipídico de controle não serve para discutir a cada três meses se o remédio deve continuar: ele é lido pela equipe para conferir meta e adesão, geralmente depois do tempo de ajuste que a própria equipe define. Entre uma consulta e outra, o que muda o resultado é tomar o remédio todos os dias e sustentar as trocas alimentares. O protocolo nacional de dislipidemia está na rede pública, e as unidades básicas de saúde organizam a investigação da família quando se suspeita de hipercolesterolemia familiar.',
          'Remédio para colesterol não substitui o tratamento das doenças que andam junto. Quem tem [diabetes](/doencas/diabetes/) ou [pressão alta](/doencas/hipertensao/) precisa das duas coisas, e a soma é o que reduz infarto e AVC. Para quem já teve um evento desses, o texto sobre [fatores de risco de infarto e AVC](/artigos/infarto-e-avc-fatores-de-risco/) detalha como os fatores se combinam.',
        ],
        cta: {
          label: 'Veja a página sobre colesterol alto',
          href: '/doencas/colesterol-alto/',
        },
      },
    ],
    diseaseSlugs: ['colesterol-alto'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['colesterol-alto-como-detectar-e-quando-procurar-atendimento'],
    references: [
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas de dislipidemia',
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/d/dislipidemia',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose',
        url: 'https://www.scielo.br/j/abc/a/whBsCyzTDzGYJcsBY7YVkWn/?lang=pt',
        publisher: 'Sociedade Brasileira de Cardiologia',
      },
      {
        label: 'Alimentação saudável, folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'doenca-renal-cronica-sinais-de-alerta-quando-procurar-atendimento',
    slug: 'doenca-renal-cronica-sinais-de-alerta-quando-procurar-atendimento',
    metaTitle: 'Doença renal crônica: sinais de alerta',
    title: 'Doença renal crônica: sinais de alerta e quando procurar atendimento',
    excerpt:
      'Os rins avisam tarde. Entenda o que observar na urina, no inchaço e no cansaço, e quais sinais levam a uma emergência.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'os-rins-avisam-tarde',
        heading: 'Por que os rins avisam tarde',
        paragraphs: [
          'Cada rim abriga cerca de um milhão de filtros minúsculos, os néfrons, que separam do sangue o que deve virar urina. A doença renal crônica é justamente a perda progressiva e irreversível desses filtros, e o órgão tem margem de reserva: boa parte da função pode se perder antes de qualquer queixa aparecer. Como a doença avança em silêncio, muita gente só descobre o problema quando a filtração já caiu bastante.',
          'O que aparece primeiro, quase sempre, não é sintoma e sim exame. A albumina na urina sobe antes de a filtração cair, e a creatinina no sangue, convertida em taxa de filtração glomerular estimada (TFGe), revela o que o corpo ainda não reclama. Nos estágios 1, 2 e 3, a pessoa pode levar uma vida inteira sem perceber nada de errado. Por isso, quem tem diabetes, pressão alta ou história familiar de doença renal deve fazer creatinina e exame de urina pelo menos uma vez por ano, mesmo sem sintoma.',
        ],
      },
      {
        id: 'o-que-muda-no-corpo',
        heading: 'O que muda no corpo quando o rim perde função',
        paragraphs: [
          'Quando a filtração cai de verdade, o acúmulo de toxinas, líquido e minerais mexe com o organismo inteiro. Os sinais mais comuns nessa fase são vagos e costumam ser atribuídos a outras causas.',
          'O que chama atenção não é um sintoma isolado, e sim a soma e a duração deles. Falta de ar vira cansaço do trabalho, a coceira vira pele seca e a perda de apetite passa por estresse. Quando vários desses incômodos persistem por semanas, vale investigar os rins. Em quem tem diabetes, pressão alta ou história familiar de doença renal, essa investigação deve começar mais cedo. Inchaço que aumenta ao longo do dia, urina com espuma e cansaço que não melhora com o descanso são motivos suficientes para marcar uma consulta. Os sinais mais frequentes são:',
        ],
        bullets: [
          'Cansaço, palidez e falta de ar, pela anemia da doença renal',
          'Inchaço nas pernas, nos pés e ao redor dos olhos',
          'Coceira generalizada, sem vermelhidão nem lesão de pele',
          'Cãibras nas pernas, principalmente à noite',
          'Perda de apetite, náuseas e gosto metálico na boca',
          'Sono ruim, sonolência durante o dia e dificuldade de concentração',
        ],
      },
      {
        id: 'sinais-para-procurar-avaliacao',
        heading: 'Sinais que pedem avaliação',
        paragraphs: [
          'Nem tudo vira emergência, mas alguns achados justificam marcar consulta rápido, especialmente em quem tem [diabetes](/doencas/diabetes/) ou [pressão alta](/doencas/hipertensao/).',
          'Essas alterações costumam aparecer juntas e piorar devagar, o que faz muita gente adiar a consulta. Na avaliação, o clínico geral pode pedir creatinina, urinálise e a relação albumina/creatinina, os exames que medem a função renal e a perda de proteína pela urina. Procure atendimento se você notar:',
        ],
        bullets: [
          'Volume de urina que cai dia após dia',
          'Espuma persistente na urina, sinal de proteína',
          'Inchaço novo nos tornozelos ou no rosto, sobretudo de manhã',
          'Pressão arterial que sai do controle, mesmo com remédio em dia',
          'Cansaço progressivo, com palidez',
          'Urinar muito à noite, acordando duas ou mais vezes',
          'Urina avermelhada ou com cor de coca-cola',
        ],
        cta: {
          label: 'Veja a página sobre doença renal crônica',
          href: '/doencas/doenca-renal-cronica/',
        },
      },
      {
        id: 'o-que-a-urina-mostra',
        heading: 'O que a urina mostra',
        paragraphs: [
          'A urina é o exame mais barato disponível, e três observações têm valor. Urina com espuma que não some fala de perda de proteína, e a relação albumina/creatinina (RAC) quantifica isso com precisão; acima de 30 mg/g já é considerado elevado. Urina avermelhada ou cor de coca-cola sugere sangue, que pode vir de cálculo, infecção ou inflamação do rim. Urina turva com febre e dor nas costas costuma indicar infecção urinária alta, que precisa de tratamento imediato.',
          'A Sociedade Brasileira de Nefrologia recomenda, para quem tem fator de risco, creatinina e urinálise uma vez por ano, além de triagem de idosos, cardiopatas e pessoas com história familiar de doença renal. O exame de urina simples também ajuda a afastar infecção e a mostrar sangue que não aparece a olho nu, e vale guardar os resultados para comparar a evolução ao longo dos anos. Se você nunca fez esses exames e se reconhece nos fatores de risco, leve o pedido de exame na próxima consulta e peça que eles entrem na rotina.',
        ],
      },
      {
        id: 'quando-e-emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Alguns sinais indicam que o excesso de líquido, de potássio ou de toxinas chegou a um nível que o corpo não compensa sozinho. Nesses casos, não espere a consulta agendada e não tente controlar a pressão com remédio de outra pessoa.',
          'Ligue para o SAMU (192) ou vá a um pronto atendimento se, em alguém com doença renal conhecida ou suspeita, aparecer:',
        ],
        bullets: [
          'Falta de ar intensa, com inchaço generalizado',
          'Inchaço que piora rápido, com ganho de peso de um dia para o outro',
          'Ausência de urina por um dia inteiro, ou queda muito brusca do volume',
          'Confusão mental, sonolência excessiva ou convulsão',
          'Dor no peito, palpitações ou desmaio',
          'Fraqueza muscular importante com coração acelerado, possível potássio alto',
          'Febre alta com dor lombar e urina turva ou com sangue',
        ],
      },
      {
        id: 'onde-ser-atendido',
        heading: 'Onde buscar atendimento',
        paragraphs: [
          'Fora da emergência, o caminho começa na unidade básica de saúde (UBS), que solicita creatinina, urinálise e cultura de urina quando necessário, ajusta pressão e glicemia, e encaminha ao nefrologista nos estágios mais avançados ou de progressão rápida. O especialista em rins é o nefrologista; urologista é o cirurgião das vias urinárias, e os dois papéis se confundem com frequência.',
          'A rede brasileira tem uma linha de cuidado específica para doença crônica, e o tratamento dialítico é ofertado pelo Sistema Único de Saúde em clínicas conveniadas. Quem tem estágio 4 ou 5 deve ter acompanhamento programado, com conversa antecipada sobre hemodiálise, diálise peritoneal e transplante, porque a preparação evita a diálise de urgência, feita em pior condição clínica. A avaliação para transplante também pode começar antes de a diálise ser necessária.',
        ],
      },
    ],
    diseaseSlugs: ['doenca-renal-cronica'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['doenca-renal-cronica-tratamento-e-convivencia'],
    references: [
      {
        label: 'Como se prevenir: orientações e tratamento em nefropatias',
        url: 'https://sbn.org.br/publico/orientacoes-e-tratamento/como-se-prevenir/',
        publisher: 'Sociedade Brasileira de Nefrologia',
      },
      {
        label: 'Renal disease, folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/kidney-disease',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Doença renal crônica, informação ao cidadão',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/drc',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'doenca-renal-cronica-tratamento-e-convivencia',
    slug: 'doenca-renal-cronica-tratamento-e-convivencia',
    metaTitle: 'Viver com doença renal crônica',
    title: 'Doença renal crônica: tratamento e convivência',
    excerpt:
      'Conter o avanço, evitar remédios que agridem o rim, entender a dieta por estágio e saber como o SUS organiza diálise e transplante.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'conter-o-avanco',
        heading: 'Conter o avanço é o tratamento',
        paragraphs: [
          'O rim já perdido não volta, então o que se faz é desacelerar a perda. O manual da Sociedade Brasileira de Nefrologia reúne um conjunto que tem evidência e está ao alcance da rotina: controlar a pressão arterial, tratar o diabetes, ajustar colesterol e triglicerídeos, manter peso saudável, praticar atividade física, parar de fumar e seguir dieta adequada ao estágio. Em muitos casos, esse pacote é o que separa passar anos no estágio 3 de precisar de diálise.',
          'A consulta com o nefrologista é a referência da doença renal, e a UBS sustenta o dia a dia. Entre uma consulta e outra, medir a pressão arterial em casa faz diferença, porque valores alterados passam despercebidos e são o principal motor da progressão. Uma dieta ajustada ao estágio e ao peso também faz parte do resultado.',
        ],
        cta: {
          label: 'Veja a página sobre doença renal crônica',
          href: '/doencas/doenca-renal-cronica/',
        },
      },
      {
        id: 'remedios-que-o-rim-nao-gosta',
        heading: 'Remédios que o rim não agradece',
        paragraphs: [
          'A Sociedade Brasileira de Nefrologia alerta para os anti-inflamatórios não esteroidais, usados por conta própria para dor de cabeça, dor nas costas e cólica: ibuprofeno, diclofenaco e nimesulida reduzem o fluxo de sangue no rim, e o uso frequente, sobretudo sem orientação, pode acelerar a perda de função, com risco maior em idosos, hipertensos e pessoas com diabetes. O mesmo cuidado vale para chás e suplementos sem procedência, alguns com nefrotóxicos conhecidos.',
          'Há também medicamentos que a equipe precisa ajustar quando a filtração cai, porque se acumulam no sangue: muitos analgésicos, antibióticos e até o remédio para gastrite têm dose recalculada pela TFGe. Isso não significa suspender o tratamento, e sim ajustar. Leve a lista completa de tudo que você toma, inclusive fitoterápicos, em cada consulta, e evite a farmácia de balcão como fonte de conselho.',
        ],
      },
      {
        id: 'dieta-estagio-por-estagio',
        heading: 'Dieta, estágio por estágio',
        paragraphs: [
          'No começo, a orientação é a mesma de qualquer dieta protetora do coração: menos sal (com temperos naturais no lugar), peso controlado, poucos ultraprocessados, verduras e frutas em quantidade adequada. A restrição de proteína costuma entrar mais adiante, e sempre calculada por nutricionista, porque proteína demais cansa o rim e de menos tira massa muscular.',
          'Nos estágios 4 e 5, minerais específicos entram na conta. O potássio, abundante em banana, laranja, abacate, batata e feijão, pode subir demais e provocar arritmia; o fósforo, presente em refrigerantes de cola, lácteos e ultraprocessados, acelera o dano nos ossos e nas artérias; o sódio agrava inchaço e pressão alta. Há ainda uma proibição curiosa e real: a carambola é o único alimento vetado nos estágios avançados, porque a toxina que ela contém, a caramboxina, não é eliminada quando o rim falha, e pode causar soluços persistentes, confusão mental, convulsão e até coma.',
        ],
      },
      {
        id: 'preparacao-antes-da-decisao',
        heading: 'Preparação antes de precisar decidir',
        paragraphs: [
          'Chegar ao estágio 5 não é começar a diálise no dia seguinte. Existe a fase conservadora, depois a pré-diálise, em que a equipe prepara o corpo, treina a pessoa e a família e cria com antecedência o acesso vascular para hemodiálise ou o cateter para diálise peritoneal. Começar o tratamento com planejamento, em consulta ambulatorial, é muito diferente de começar às pressas por uma emergência, situação associada a pior desfecho.',
          'A escolha do tratamento substitutivo é compartilhada. Cada opção tem rotina, restrições e vantagens próprias, e a decisão depende do estágio, de outras doenças, da rotina da casa e do apoio disponível. Se você está em estágio 4, pergunte à equipe quando a conversa sobre diálise e transplante deve acontecer, e peça que ela seja registrada no prontuário.',
        ],
      },
      {
        id: 'hemodialise-e-dialise-peritoneal',
        heading: 'Hemodiálise e diálise peritoneal',
        paragraphs: [
          'A hemodiálise é feita em clínica especializada, em geral três sessões por semana, de quatro a cinco horas cada uma, com o sangue circulando por uma máquina que filtra o que o rim não filtra mais. A diálise peritoneal usa a membrana que reveste a cavidade abdominal como filtro: o líquido é trocado algumas vezes por dia em casa, e à noite pode ser feito por um aparelho, o que libera as manhãs.',
          'O Sistema Único de Saúde oferta o tratamento renal substitutivo em clínicas conveniadas, o que inclui sessões, insumos, acompanhamento de equipe e avaliação para transplante. Na prática, a disponibilidade de vagas e de unidades depende do estado e do município, e o deslocamento até o serviço é parte do planejamento familiar. Vale perguntar sobre transporte sanitário, horários e apoio social no momento da decisão.',
        ],
      },
      {
        id: 'transplante',
        heading: 'Transplante de rim',
        paragraphs: [
          'O transplante é a alternativa que mais devolve rotina e qualidade de vida, e pode ser feito a partir de doador falecido ou vivo. O processo depende de compatibilidade de tipo sanguíneo e de tipagem HLA, de avaliação clínica que afaste outras contraindicações e da lista única coordenada pelo Sistema Nacional de Transplantes. Em algumas situações, o rim pode ser transplantado antes de a pessoa começar a diálise, o chamado transplante preemptivo.',
          'A cirurgia dura em média de duas a três horas, sob anestesia geral, e o novo rim costuma ficar na parte baixa da barriga, não no lugar dos rins originais. Depois, vem a imunossupressão contínua, que exige medicamentos diários, vigilância de infecções e consultas regulares, além de cuidado com sol e com vacinas. Quem está em estágio 4 ou 5 deve perguntar sobre a avaliação para transplante antes de se sentir preparado, porque o processo de entrada na lista leva tempo.',
        ],
      },
      {
        id: 'convivencia-e-apoio',
        heading: 'Convivência, anemia e apoio',
        paragraphs: [
          'A anemia é parte frequente do quadro, porque o rim doente produz menos eritropoetina, o hormônio que estimula a fabricação de glóbulos vermelhos. Ela traz palidez, fraqueza e mal-estar e pode piorar o coração. O tratamento combina reposição de ferro, por via oral ou na veia, medicação que estimula a produção de sangue e, em situações específicas, transfusão. Em alguns casos, a anemia tem outra causa somada, como a falta de ferro por sangramento digestivo, e a equipe investiga antes de tratar.',
          'Viver com doença renal crônica mexe com trabalho, sono, apetite, sexualidade e humor, e nada disso é detalhe. A rotina de três sessões de diálise por semana reorganiza a casa inteira, e a reabilitação, o apoio psicológico e os grupos de pacientes ajudam a atravessar a mudança. Fazer perguntas sobre horário de remédios, alimentação fora de casa e viagem é legítimo: quanto mais concreta a conversa com a equipe, menos improvável é o dia a dia.',
        ],
      },
    ],
    diseaseSlugs: ['doenca-renal-cronica'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['doenca-renal-cronica-sinais-de-alerta-quando-procurar-atendimento'],
    references: [
      {
        label: 'Manual Pronto para Doença Renal Crônica, 4ª e 5ª edições',
        url: 'https://sbn.org.br/wp-content/uploads/2024/11/ManualProntoDRC4e5_compressed.pdf',
        publisher: 'Sociedade Brasileira de Nefrologia',
      },
      {
        label: 'Doença renal crônica, informação ao cidadão',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/drc',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Insuficiência renal: o que é, estágios e tratamento',
        url: 'https://sbn.org.br/publico/doencas-comuns/insuficiencia-renal/',
        publisher: 'Sociedade Brasileira de Nefrologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'hanseniase-sinais-na-pele-quando-procurar-atendimento',
    slug: 'hanseniase-sinais-na-pele-quando-procurar-atendimento',
    metaTitle: 'Hanseníase: sinais na pele',
    title: 'Hanseníase: sinais na pele e quando procurar atendimento',
    excerpt:
      'Mancha clara ou amarronzada que não dói, não coça e perde a sensibilidade é o principal sinal da hanseníase. Veja como reconhecer, o que não é hanseníase e onde buscar avaliação.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-principal-sinal',
        heading: 'O principal sinal está na pele',
        paragraphs: [
          'A hanseníase se manifesta, quase sempre, por manchas na pele que perdem a sensibilidade. Podem ser claras, avermelhadas, acastanhadas ou amarronzadas, de contorno irregular, e surgem no tronco, nos braços, nas pernas ou no rosto. As lesões podem ser únicas ou múltiplas, e às vezes ocupam áreas grandes do corpo. O que distingue a mancha da hanseníase de qualquer outra mancha é simples: ela não sente direito o toque, o calor, o frio ou a dor.',
          'Muitas pessoas só percebem a mancha quando alguém chama a atenção, porque ela não coça, não dói e não arde. Também não descama de forma intensa nem melhora com creme comum. Passam meses, às vezes anos, convivendo com a lesão antes de procurar uma unidade de saúde. Por isso, a consulta precoce faz tanta diferença.',
        ],
      },
      {
        id: 'testando-a-sensibilidade',
        heading: 'Como testar a sensibilidade da mancha',
        paragraphs: [
          'O teste caseiro serve apenas para levantar a suspeita, nunca para dar o diagnóstico. Em um ambiente bem iluminado, compare a mancha com a pele ao redor e observe se a sensação é diferente. Se ficar em dúvida, anote o que percebeu e leve essa informação para a consulta.',
          'O que se procura é a perda de sensibilidade, o dado que mais chama a atenção no exame. Para comparar, use objetos que você já tem em casa:',
        ],
        bullets: [
          'Toque a mancha com uma ponta de algodão e pergunte se a sensação é igual à da pele vizinha',
          'Encoste dois palitos de fósforo, um com a ponta acesa e outro com o lado apagado, morno, e veja se a pessoa distingue quente de frio',
          'Pressione levemente com a ponta de um grampo aberto e compare com a mesma região do outro lado do corpo',
          'Repita o teste em diferentes manchas ao longo de algumas semanas; a perda de sensibilidade costuma aumentar',
        ],
        cta: {
          label: 'Veja a página sobre a hanseníase',
          href: '/doencas/hanseniase/',
        },
      },
      {
        id: 'o-que-nao-e-hanseniase',
        heading: 'O que não é hanseníase',
        paragraphs: [
          'Nem toda mancha clara na pele é hanseníase. Pano branco, dermatite, vitiligo e até marcas deixadas por espinhas ou queimaduras são queixas muito mais comuns. Nenhuma dessas condições costuma vir acompanhada de perda de sensibilidade na área da mancha.',
          'Mancha que coça muito, arde ou descama costuma apontar para outra causa. Da mesma forma, a hanseníase não se transmite pelo beijo, pelo abraço, pelo uso do mesmo banheiro nem pelo compartilhamento de talheres e roupas, e não é hereditária. Nada disso deve atrasar a investigação.',
        ],
        bullets: [
          'Pano branco: manchas claras ou amarronzadas, com descamação fina e coceira',
          'Vitiligo: manchas brancas bem delimitadas, sem alteração da sensibilidade nem do suor',
          'Dermatite: placas avermelhadas e descamativas, que costumam coçar e melhorar com creme',
          'Micose: manchas em anel, com borda descamativa e coceira',
          'Pitiríase alba: manchas claras e descamativas, comuns em crianças, que melhoram com hidratante',
        ],
      },
      {
        id: 'quando-o-nervo-esta-em-risco',
        heading: 'Quando o nervo está em risco',
        paragraphs: [
          'Além das manchas, a hanseníase ataca os nervos periféricos, e é essa lesão que pode deixar sequelas. Quando um nervo sofre, a pessoa começa a notar dormência, formigamento ou perda de força, geralmente nas mãos, nos pés ou no rosto. Nervos engrossados e doloridos também podem ser percebidos ao toque.',
          'Alguns sinais indicam que a lesão do nervo está avançando e que a avaliação não pode esperar:',
        ],
        bullets: [
          'Perda de força para segurar objetos, fechar a mão ou mover o pé',
          'Dor em queimação ao longo de um nervo, no braço ou na perna',
          'Dormência ou formigamento que pioram rápido',
          'Olho que não fecha completamente, com ardência ou visão embaçada',
          'Úlceras nos pés ou feridas que não saram em quem já tem o diagnóstico',
        ],
      },
      {
        id: 'mancha-anos-depois',
        heading: 'Por que a mancha pode aparecer anos depois',
        paragraphs: [
          'A hanseníase tem um período de incubação longo. Entre o contato com a bactéria e o aparecimento dos primeiros sinais costuma passar, em média, de dois a sete anos, e há registros de períodos ainda maiores. Por isso, é comum que a pessoa não saiba quando nem de quem se infectou.',
          'Esse intervalo também explica por que a doença pode surgir muito tempo depois de um convívio que já terminou. Como não dá para reconstituir o momento do contágio, o foco do atendimento é examinar a pele e os nervos no presente e avaliar as pessoas que hoje convivem com o caso.',
        ],
      },
      {
        id: 'quando-procurar-a-ubs',
        heading: 'Quando procurar a unidade básica de saúde',
        paragraphs: [
          'Vale procurar a UBS diante de qualquer mancha que não coça, não dói e persiste por semanas. Não é preciso encaminhamento prévio para ser atendido: a porta de entrada para a avaliação da hanseníase é a própria rede pública.',
          'Vá à unidade básica de saúde em qualquer um dos cenários abaixo, mesmo sem sintoma geral:',
        ],
        bullets: [
          'Mancha que dura três meses ou mais e não responde a creme ou pomada comum',
          'Mancha em que a pessoa percebe dormência, formigamento ou redução da sensibilidade ao calor e à dor',
          'Queda de pelos e diminuição do suor em uma área específica da pele',
          'Caroço, dor em queimação ou perda de força em uma das mãos, dos pés ou no rosto',
          'Contato próximo e prolongado com alguém que recebeu diagnóstico de hanseníase',
        ],
      },
      {
        id: 'na-consulta',
        heading: 'O que acontece na consulta',
        paragraphs: [
          'Na UBS, o profissional examina a pele, testa a sensibilidade das manchas e palpa os troncos nervosos dos braços e das pernas. Não é preciso jejum nem preparo prévio. O exame é indolor e dura poucos minutos, e o profissional explica cada etapa. Se o exame bastar para fechar o diagnóstico, a equipe já explica o esquema de tratamento e o organiza dentro do calendário da unidade.',
          'Em casos duvidosos, a pessoa é encaminhada a um serviço de referência, que pode solicitar baciloscopia, biópsia de pele ou de nervo e exames eletroneuromiográficos. Todo caso confirmado é notificado às autoridades de saúde, e as pessoas que convivem com o paciente entram na investigação de contatos, mesmo sem apresentar manchas.',
        ],
      },
    ],
    diseaseSlugs: ['hanseniase'],
    topicSlugs: ['doencas-infecciosas'],
    relatedArticleSlugs: ['hanseniase-tratamento-gratuito-no-sus'],
    references: [
      {
        label: 'Hanseníase: sintomas, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hanseniase',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Leprosy: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/leprosy',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'hanseniase-tratamento-gratuito-no-sus',
    slug: 'hanseniase-tratamento-gratuito-no-sus',
    metaTitle: 'Hanseníase: tratamento gratuito no SUS',
    title: 'Hanseníase: como funciona o tratamento gratuito no SUS',
    excerpt:
      'A poliquimioterapia contra a hanseníase é distribuída de graça pelo SUS, cura a doença e dispensa internação. Veja a duração dos esquemas, o cuidado com os contatos e os direitos da pessoa em tratamento.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'como-funciona-a-pqt',
        heading: 'A poliquimioterapia distribuída pelo SUS',
        paragraphs: [
          'A hanseníase é tratada com a poliquimioterapia (PQT-U), fornecida gratuitamente pelo Sistema Único de Saúde (SUS). O esquema reúne antibióticos que agem em conjunto: rifampicina e dapsona nos casos paucibacilares, com a clofazimina acrescentada nos multibacilares.',
          'A associação de mais de um medicamento foi adotada justamente para evitar a resistência do bacilo, que acontecia quando o tratamento usava uma única droga. Os comprimidos chegam em cartelas na unidade básica de saúde (UBS), sem necessidade de internação, e o tratamento não afasta a pessoa do trabalho, da escola ou da rotina familiar.',
          'A primeira dose do mês é supervisionada por um profissional de saúde na própria unidade; as demais doses da cartela são tomadas em casa. Esse acompanhamento mensal existe para conferir o uso correto dos comprimidos e identificar cedo qualquer reação ao tratamento. O esquema é seguro e pode ser feito por gestantes e lactantes; quem usa anticoncepcional oral deve avisar a equipe.',
        ],
      },
      {
        id: 'duracao-dos-esquemas',
        heading: 'Quanto tempo dura o tratamento',
        paragraphs: [
          'A duração do tratamento depende da forma clínica. Na hanseníase paucibacilar, com poucas manchas e menos bacilos, o esquema dura seis meses. Na multibacilar, com mais lesões e maior carga de bacilos, o esquema é de doze meses.',
          'A alta por cura é dada quando a pessoa toma todas as doses previstas dentro do prazo e passa pela avaliação final. Interromper o tratamento antes do fim é o que pode levar à resistência, uma situação mais difícil de tratar e que exige esquemas substitutivos, também oferecidos de graça pelo SUS.',
          'Mesmo com a pele já melhorando nas primeiras semanas, o tratamento não deve ser interrompido. É a sequência completa de doses que elimina o bacilo e reduz o risco de recaída. A cartela é retirada mês a mês, e faltar à consulta atrasa o esquema.',
        ],
      },
      {
        id: 'reacoes-hanssenicas',
        heading: 'As reações que podem surgir durante o tratamento',
        paragraphs: [
          'Durante o tratamento, e às vezes depois da alta, podem surgir reações inflamatórias chamadas hansênicas. Elas não significam que o remédio falhou nem que a doença voltou: são uma resposta do sistema imunológico à presença do bacilo que está sendo eliminado.',
          'As reações podem se manifestar como manchas avermelhadas novas, nódulos dolorosos, inchaço e dor ao longo dos nervos. Como o principal risco é o agravamento da lesão neural, qualquer sinal desses deve ser avaliado sem demora pela equipe de referência.',
          'As reações e as neurites são tratadas com medicamentos para controlar a inflamação, sem interromper a poliquimioterapia. Por isso, voltar às consultas de acompanhamento é tão importante quanto tomar os comprimidos todos os dias. Qualquer sinal novo depois da alta também deve ser avaliado.',
        ],
      },
      {
        id: 'transmissao-cai-no-inicio',
        heading: 'No início do tratamento, a transmissão cai',
        paragraphs: [
          'Logo que a poliquimioterapia começa, a pessoa deixa de eliminar o bacilo pelas vias respiratórias e, portanto, deixa de transmitir a infecção. Não é necessário isolamento, nem afastar o paciente da mesa de jantar, do banheiro ou do convívio com crianças pequenas.',
          'Esse dado ajuda a desfazer o estigma que ainda cerca a doença: a pessoa em tratamento pode abraçar a família, dividir os mesmos objetos e continuar a rotina. O isolamento não faz parte do tratamento e não ajuda em nada. As primeiras semanas podem trazer reações inflamatórias, que não significam falha do tratamento e devem ser avaliadas pela equipe.',
        ],
      },
      {
        id: 'quem-convive-com-o-caso',
        heading: 'Quem convive com a pessoa diagnosticada',
        paragraphs: [
          'A investigação de contatos faz parte do protocolo. São avaliadas as pessoas que convivem ou conviveram por período prolongado com o caso confirmado, em casa, no trabalho ou na escola. O exame de pele e dos nervos é feito na UBS, sem custo, e serve para detectar lesões que ainda não deram sinal.',
          'Entre os contatos, o Ministério da Saúde também recomenda a aplicação da vacina BCG em quem não tem cicatriz vacinal, dentro das regras previstas pela equipe de saúde. A vacina BCG não é específica contra a hanseníase, mas é usada como reforço de proteção. Contatos que apresentam manchas são tratados como caso novo; quem não tem sinal recebe orientação de retorno e permanece vinculado à equipe de saúde.',
        ],
      },
      {
        id: 'cuidado-com-maos-pes-e-olhos',
        heading: 'Autocuidado com mãos, pés e olhos',
        paragraphs: [
          'A hanseníase pode deixar áreas do corpo sem sensibilidade. Sem dor, um pequeno ferimento passa despercebido e pode evoluir para uma úlcera. Cuidar da pele ressecada e evitar machucados repetidos são as medidas que mais protegem as mãos, os pés e os olhos. Calçados apertados e objetos quentes são as causas mais comuns de feridas nesses locais.',
          'O autocuidado diário faz parte do tratamento. Veja o que fazer todos os dias:',
        ],
        bullets: [
          'Inspecionar mãos, pés e olhos todos os dias em local bem iluminado',
          'Hidratar a pele seca para evitar rachaduras',
          'Evitar água muito quente ao lavar louça ou tomar banho; conferir a temperatura com a parte da pele que ainda sente',
          'Não andar descalço e usar calçados macios, bem ajustados',
          'Remover espinhos, pedrinhas ou pedaços de tecido que entrem no pé, mesmo sem dor',
          'Proteger os olhos se a pálpebra estiver com dificuldade para fechar',
        ],
      },
      {
        id: 'direitos-e-combate-ao-estigma',
        heading: 'Direitos e o fim do estigma',
        paragraphs: [
          'No dia do diagnóstico, a pessoa recebe a Caderneta de Saúde da Pessoa com Hanseníase, que registra as doses, orienta o autocuidado e descreve os direitos previstos. Quem precisa de afastamento por complicação recebe atestado pela equipe que faz o acompanhamento, e o benefício é tratado como qualquer afastamento por doença, sem qualquer restrição especial ligada ao diagnóstico.',
          'Hanseníase é uma doença infecciosa como qualquer outra, transmitida por via respiratória apenas em convívio próximo e prolongado, e com cura. Uma pessoa em tratamento não é perigo para a família, para os colegas nem para a escola. Por isso, o diagnóstico não deve ser motivo de afastamento social. Se a equipe de saúde ou o empregador apresentar dúvida, vale mostrar o conteúdo oficial do Ministério da Saúde sobre o assunto.',
        ],
        cta: {
          label: 'Veja a página sobre a hanseníase',
          href: '/doencas/hanseniase/',
        },
      },
    ],
    diseaseSlugs: ['hanseniase'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['hanseniase-sinais-na-pele-quando-procurar-atendimento'],
    references: [
      {
        label: 'Hanseníase: sintomas, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hanseniase',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Hanseníase: situação epidemiológica',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hanseniase/situacao-epidemiologica',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Leprosy: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/leprosy',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'anemia-ferropriva-sintomas-e-quando-procurar-atendimento',
    slug: 'anemia-ferropriva-sintomas-e-quando-procurar-atendimento',
    metaTitle: 'Anemia ferropriva: sintomas',
    title: 'Anemia ferropriva: sintomas e quando procurar atendimento',
    excerpt:
      'Cansaço, palidez e falta de ar aos esforços estão entre os primeiros sinais da anemia por falta de ferro. Veja como reconhecê-los, o que mais se parece com anemia e quando procurar uma UBS.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'os-primeiros-sinais',
        heading: 'Os primeiros sinais costumam ser discretos',
        paragraphs: [
          'A anemia por falta de ferro costuma chegar devagar. O corpo começa usando o ferro que estava guardado e só quando essa reserva acaba é que a hemoglobina cai o suficiente para dar sinais. Por isso muitas pessoas convivem semanas com o problema sem perceber. A deficiência passa por etapas: primeiro caem os estoques, depois surge a deficiência sem anemia e só por último a anemia aparece no hemograma.',
          'O retrato mais clássico é o cansaço que não combina com o esforço feito, acompanhado de palidez. Esse par de sintomas é tão comum que acaba sendo atribuído a sono ruim ou estresse. Quando persiste, vale investigar, porque cansaço e palidez que não melhoram com o descanso são motivo para procurar a unidade de saúde.',
          'A palidez fica mais visível no rosto, na gengiva e na parte interna das pálpebras, locais em que a cor do sangue aparece melhor. Em pessoas de pele mais escura, essa comparação com as áreas de mucosa ajuda a perceber a mudança. Falta de ar aos esforços e palpitações costumam acompanhar os quadros mais intensos.',
        ],
      },
      {
        id: 'sinais-que-passam-despercebidos',
        heading: 'Sinais que costumam passar despercebidos',
        paragraphs: [
          'Além do cansaço e da palidez, a anemia ferropriva traz sinais que muitas pessoas não associam à falta de ferro. A lista é longa porque o ferro participa da produção das células do sangue, do transporte de oxigênio e da saúde da pele, das unhas e dos cabelos.',
          'Muitos desses sinais aparecem quando a deficiência já dura meses. A língua pode ficar lisa e dolorida, e as feridas nos cantos da boca custam a cicatrizar. Já as unhas em forma de colher surgem nos quadros mais longos. Nenhum deles confirma o diagnóstico sozinho, mas todos ajudam a levantar a suspeita durante a consulta. Os sinais mais frequentes são:',
        ],
        bullets: [
          'Falta de ar ao subir escadas ou ao caminhar em ritmo mais rápido',
          'Palpitações e tontura ao se levantar',
          'Dificuldade para se concentrar e queda de rendimento no trabalho ou na escola',
          'Feridas nos cantos da boca e língua lisa e dolorida',
          'Unhas quebradiças, que nos casos antigos assumem formato de colher',
          'Secura e queda de cabelo mais intensas que o habitual',
          'Vontade de comer gelo, terra ou papel',
        ],
      },
      {
        id: 'o-que-mais-parece-anemia',
        heading: 'O que mais se parece com anemia ferropriva',
        paragraphs: [
          'Nem todo cansaço vem de anemia, e nem toda anemia é por falta de ferro. Alterações da tireoide, apneia do sono, infecções prolongadas e outros tipos de anemia dão sintomas parecidos. Por isso a confirmação depende de exame de sangue, não da sensação isolada. O hemograma já mostra o tamanho das hemácias e ajuda a separar os grupos.',
          'Algumas anemias têm hemácias grandes, como as causadas por falta de vitamina B12 ou de ácido fólico, e outras têm hemácias de tamanho normal, como a da doença crônica. A talassemia também deixa as hemácias pequenas, mas costuma vir com ferritina normal. A anemia da doença crônica acompanha inflamações e doenças como a [doença renal crônica](/doencas/doenca-renal-cronica/), e o ferro fica preso nos estoques. A história de sangramentos, a alimentação, os medicamentos em uso e as doenças de base completam o raciocínio. Antes de iniciar ferro por conta própria, é essencial saber qual é o tipo de anemia em jogo.',
        ],
      },
      {
        id: 'quando-procurar-a-ubs',
        heading: 'Quando procurar a unidade básica de saúde',
        paragraphs: [
          'A UBS resolve a maior parte dos casos, e ir até lá mais cedo faz diferença.',
          'Também vale procurar a unidade quando a alimentação é pobre em ferro por muito tempo, quando há verminoses de repetição ou quando a pessoa passou por cirurgia bariátrica. Nesses casos, a avaliação ajuda a identificar a causa antes que a anemia se instale. Em crianças, o acompanhamento do crescimento e do ganho de peso também faz parte da consulta, porque a falta de ferro pode interferir nos dois. Procure atendimento quando:',
        ],
        bullets: [
          'O cansaço e a palidez persistem por semanas, sem melhora com o descanso',
          'Há falta de ar, palpitação ou tontura atrapalhando as atividades do dia',
          'A menstruação é muito volumosa ou a gravidez veio acompanhada desses sinais',
          'As fezes ficam pretas ou aparece sangue, indício de perda de sangue',
          'A pessoa já tem doença cardíaca e nota piora da disposição ou do fôlego',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta que não podem esperar',
        paragraphs: [
          'Alguns sinais indicam anemia grave ou sangramento ativo e pedem atendimento imediato, sem esperar a consulta marcada. Alguns aparecem de repente, mesmo em quem nunca teve anemia.',
          'Nessas situações, o exame de sangue e a avaliação médica não podem esperar. A conduta, incluindo a necessidade de transfusão, é decidida no serviço de saúde conforme a gravidade e a causa. Sangramento digestivo, por exemplo, pode estar por trás da anemia e precisa de investigação. Procure uma emergência ou chame ajuda se houver:',
        ],
        bullets: [
          'Falta de ar em repouso ou ao fazer esforços muito leves',
          'Dor no peito, palpitações rápidas ou sensação de desmaio',
          'Palidez muito acentuada acompanhada de confusão mental ou sonolência',
          'Fezes pretas tipo borra de café ou vômito com sangue',
          'Anemia conhecida em gestante, em criança pequena ou em pessoa com doença cardíaca que piora rápido',
        ],
      },
      {
        id: 'na-consulta',
        heading: 'O que acontece na consulta',
        paragraphs: [
          'Na UBS, o profissional avalia a história e o exame físico e solicita o hemograma. Também pergunta sobre alimentação, menstruação, uso de medicamentos, cirurgias prévias e sangramentos. Os valores de hemoglobina e de ferritina, interpretados junto do quadro e da idade e do sexo da pessoa, indicam se a anemia é por falta de ferro e qual a provável causa.',
          'Se o caso é leve, o acompanhamento pode seguir na própria unidade, com reposição e nova avaliação. Quando a ferritina não é conclusiva, o médico pode repetir o exame depois de tratar uma inflamação ou pedir outros marcadores do ferro. Se há piora rápida, anemia intensa ou doença associada, a pessoa é encaminhada para avaliação especializada. Entender o tipo de anemia é o primeiro passo de um tratamento que funciona.',
        ],
        cta: {
          label: 'Veja a página sobre a anemia ferropriva',
          href: '/doencas/anemia-ferropriva/',
        },
      },
    ],
    diseaseSlugs: ['anemia-ferropriva'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['anemia-ferropriva-tratamento-e-alimentacao'],
    references: [
      {
        label: 'Anaemia: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/anaemia',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Anemia por deficiência de ferro: protocolo clínico e diretrizes terapêuticas',
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/a/anemia-deficiencia-de-ferro',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'anemia-ferropriva-tratamento-e-alimentacao',
    slug: 'anemia-ferropriva-tratamento-e-alimentacao',
    title: 'Anemia ferropriva: tratamento e alimentação',
    excerpt:
      'O ferro por via oral resolve a maioria dos casos, mas a duração do tratamento e a forma de comer interferem no resultado. Veja como repor o ferro, melhorar a absorção e acompanhar os exames.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'como-funciona-o-tratamento',
        heading: 'Como funciona o tratamento',
        paragraphs: [
          'O tratamento da anemia ferropriva tem duas frentes: repor o ferro que falta e corrigir a causa da perda ou do consumo excessivo. As causas mais comuns são dieta pobre em ferro, perda de sangue e aumento da necessidade, e cada uma pede uma conduta própria. Nos casos leves e moderados, o ferro por via oral resolve, e a hemoglobina costuma começar a subir em algumas semanas.',
          'No Brasil, o sulfato ferroso é a apresentação mais usada, e outros sais, como o gluconato e o fumarato, também podem ser prescritos. A dose e o horário são definidos pela equipe de saúde, e não por conta própria. Tomar o ferro com suco de laranja ou outra fonte de vitamina C ajuda na absorção.',
          'Quando o ferro oral não é tolerado, não é absorvido ou o caso é mais avançado, a equipe pode indicar ferro pela veia, aplicado em serviço de saúde. A transfusão de sangue fica para situações graves. Como os estoques demoram a se refazer, o tratamento continua mesmo depois que o cansaço melhora, e o acompanhamento define quando o ferro pode ser suspenso.',
        ],
      },
      {
        id: 'ferro-na-dieta',
        heading: 'Ferro na dieta',
        paragraphs: [
          'A alimentação ajuda na prevenção e durante o tratamento, mas não substitui a reposição quando a anemia já está instalada. Não é preciso comer grandes quantidades: a variedade e a frequência contam mais.',
          'O ferro da carne, do fígado e dos miúdos é aproveitado com mais facilidade. O ferro dos feijões, das lentilhas e das folhas verdes depende da combinação da refeição, por isso vale caprichar nos acompanhamentos. Para quem não come carne, combinar leguminosas com vitamina C em todas as refeições ajuda a compensar. O farelo de aveia e o tofu entram como alternativas, e a orientação deve considerar a rotina e o orçamento da família. Bons exemplos de alimentos com ferro:',
        ],
        bullets: [
          'Carnes vermelhas, fígado e miúdos, fontes de ferro mais bem aproveitado pelo corpo',
          'Aves e peixes',
          'Feijão, lentilha, grão-de-bico e ervilha',
          'Tofu e farelo de aveia',
          'Verduras de folhas escuras, como couve, espinafre e rúcula',
        ],
      },
      {
        id: 'absorcao-a-favor',
        heading: 'Comer de um jeito que ajuda a absorver',
        paragraphs: [
          'A maneira de montar o prato interfere bastante na absorção do ferro. A absorção do ferro da carne é diferente da absorção do ferro vegetal, e misturar os dois no mesmo prato é vantajoso. Algumas escolhas mudam o aproveitamento do ferro.',
          'As escolhas valem também para o horário do suplemento. Se o ferro for tomado junto de café, leite ou chá, parte dele deixa de ser aproveitada, e o tratamento pode demorar mais para responder. Chá mate e café coado são hábitos comuns no Brasil e, pelo teor de taninos, entram nessa lista. Estratégias simples fazem diferença:',
        ],
        bullets: [
          'Combinar a refeição com fontes de vitamina C, como laranja, limão, acerola ou tomate, que aumentam o aproveitamento do ferro',
          'Evitar leite e derivados junto das principais refeições, pois o cálcio compete com a absorção',
          'Deixar café e chá para longe das refeições, já que reduzem o aproveitamento do ferro',
          'Distribuir as fontes de ferro ao longo do dia, em vez de concentrar em uma só refeição',
          'Cuidar da alimentação na gestação e na amamentação, fases de maior necessidade',
        ],
      },
      {
        id: 'efeitos-colaterais',
        heading: 'Efeitos no estômago e no intestino',
        paragraphs: [
          'O ferro oral é seguro, mas pode incomodar. Náusea, desconforto estomacal, intestino preso e fezes mais escuras são queixas frequentes no início. A intensidade varia de pessoa para pessoa e tende a diminuir com o ajuste da dose. O intestino preso pode ser manejado com mais água, fibras e movimento ao longo do dia.',
          'Tomar o ferro em jejum favorece a absorção, mas aumenta a chance de náusea; por isso muitas equipes preferem o uso junto da refeição. Nada disso é motivo para interromper o tratamento por conta própria. Ajustar o horário da toma, começar com doses menores e aumentar aos poucos ou trocar a apresentação são soluções que o profissional conhece. Fezes escuras são esperadas quando se começa o ferro e não indicam sangramento por si sós. Se o desconforto for intenso ou vier com vômitos persistentes, fale com a equipe antes de mudar qualquer coisa.',
        ],
      },
      {
        id: 'gravidez-e-criancas',
        heading: 'Gravidez, infância e adolescência',
        paragraphs: [
          'Na gravidez, a necessidade de ferro aumenta junto do volume de sangue e do crescimento do bebê, e o pré-natal costuma prever a suplementação. O ferro também é transferido ao bebê durante a gestação, e a reserva com que ele nasce ajuda nos primeiros meses. O acompanhamento é essencial para reduzir o risco de anemia materna, parto prematuro e baixo peso ao nascer. Quando a gestante já chega com anemia, o tratamento é iniciado e seguido com exames.',
          'Na infância e na adolescência, o ritmo de crescimento e, entre as meninas, o início da menstruação elevam a exigência de ferro. Crianças com anemia podem ficar mais cansadas, irritadas e com menos rendimento na escola. Adolescentes que fazem dietas restritivas ou treinam muito também merecem atenção. Meninas com menstruação volumosa perdem mais ferro a cada ciclo e podem precisar de acompanhamento mais próximo. A suplementação nessas fases deve seguir a orientação da equipe de saúde.',
        ],
      },
      {
        id: 'acompanhar-resultados',
        heading: 'Acompanhar com exames, não apenas com a sensação',
        paragraphs: [
          'O tratamento da anemia ferropriva se acompanha com exames, porque os sintomas melhoram antes de o estoque de ferro se repletar. O hemograma mostra a hemoglobina, e a ferritina mostra o estoque; os dois juntos dizem se o tratamento está funcionando.',
          'A resposta costuma ser avaliada com um novo hemograma cerca de um mês depois do início. Se a hemoglobina não subir como esperado, a equipe investiga perda de sangue, uso irregular do medicamento, diagnóstico incorreto ou outra doença associada. A suplementação por conta própria, sem esses exames, pode esconder a causa e atrasar o diagnóstico. Pontos de atenção no acompanhamento:',
        ],
        bullets: [
          'Repetir hemograma e ferritina nos prazos definidos pelo médico, mesmo depois da melhora',
          'Manter o ferro pelo tempo indicado, sem interromper assim que o cansaço passa',
          'Investigar sangramentos persistentes e casos que não respondem à reposição',
          'Levar os exames anteriores na consulta ajuda a comparar os resultados',
          'Reavaliar o quadro quando há doença renal ou outra condição que mude a estratégia',
        ],
        cta: {
          label: 'Veja a página sobre a anemia ferropriva',
          href: '/doencas/anemia-ferropriva/',
        },
      },
    ],
    diseaseSlugs: ['anemia-ferropriva'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['anemia-ferropriva-sintomas-e-quando-procurar-atendimento'],
    references: [
      {
        label: 'Anemia por deficiência de ferro: protocolo clínico e diretrizes terapêuticas',
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/a/anemia-deficiencia-de-ferro',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Principais questões sobre anemia ferropriva na criança',
        url: 'https://portaldeboaspraticas.iff.fiocruz.br/atencao-crianca/principais-questoes-sobre-anemia-ferropriva-na-crianca/',
        publisher: 'Fiocruz',
      },
      {
        label: 'Anaemia: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/anaemia',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'catarata-sintomas-e-quando-procurar-atendimento',
    slug: 'catarata-sintomas-e-quando-procurar-atendimento',
    metaTitle: 'Catarata: sintomas e quando procurar atendimento',
    title: 'Catarata: sintomas, evolução e quando procurar atendimento',
    excerpt:
      'Veja como a catarata muda a visão aos poucos, quais sinais indicam que ela está avançando e em que situação é preciso procurar um oftalmologista com urgência.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'como-a-visao-muda',
        heading: 'Como a visão muda com a catarata',
        paragraphs: [
          'A catarata é a opacificação do cristalino, a lente natural que fica atrás da íris e focaliza a luz na retina. Quando essa lente perde a transparência, a luz entra espalhada e a imagem chega embaçada ao fundo do olho. A pessoa não fica cega de uma hora para outra: passa a enxergar como se olhasse por um vidro fosco, com menos contraste e cores mais apagadas.',
          'No começo, o incômodo aparece em situações específicas. Ler à noite, reconhecer uma placa de rua contra o sol ou assistir televisão em ambiente claro passa a exigir esforço. Muitas pessoas atribuem a mudança ao cansaço ou à idade e adiam a consulta, embora a avaliação oftalmológica seja rápida, indolor e capaz de medir o quanto a visão já piorou.',
          'A catarata não dói e não deixa o olho vermelho. A queixa é visual e avança ao longo de meses ou anos. No exame com lâmpada de fenda, o oftalmologista vê o grau de opacificação do cristalino e compara o resultado com exames anteriores, o que ajuda a definir o melhor momento para intervir.',
        ],
      },
      {
        id: 'sinais-de-piora',
        heading: 'Sinais de que a catarata está avançando',
        paragraphs: [
          'Com a progressão da catarata, alguns sinais ficam evidentes na rotina e mostram que a perda visual já cobra um preço concreto. Eles não substituem o exame, mas ajudam a pessoa a perceber que chegou a hora de marcar uma consulta. Vale anotar quando cada um começou, porque essa sequência ajuda o oftalmologista a comparar a evolução.',
          'O conjunto desses sinais indica perda funcional, e não apenas um incômodo passageiro. Quem já não consegue ler no celular, evita dirigir à noite ou troca de óculos várias vezes por ano tem motivo suficiente para uma avaliação.',
        ],
        bullets: [
          'Precisar de luz muito forte para ler, costurar ou trabalhar',
          'Sentir ofuscamento ao dirigir à noite ou ao receber o farol de outro carro',
          'Ver as cores desbotadas, com tom amarelado ou acinzentado',
          'Precisar trocar a receita dos óculos a cada poucos meses',
          'Reconhecer rostos com dificuldade em ambientes pouco iluminados',
        ],
      },
      {
        id: 'ritmo-da-progressao',
        heading: 'Em quanto tempo a catarata piora a visão',
        paragraphs: [
          'A catarata avança devagar e sem dor, muitas vezes ao longo de anos. Os dois olhos costumam ser afetados, mas quase nunca no mesmo ritmo: é comum enxergar melhor de um lado e só perceber a diferença na consulta, quando o oftalmologista testa cada olho separadamente.',
          'Há um detalhe que confunde muita gente. Quando a opacificação se forma no centro do cristalino, a mudança no foco pode melhorar a visão de perto por um período, e a pessoa volta a ler sem óculos. Isso não significa que o olho está melhorando, e sim que o grau mudou ao redor da área turva.',
          'O que não faz parte desse ritmo é a perda súbita. Uma queda de visão em horas ou em poucos dias não é comportamento de catarata e precisa de avaliação no mesmo dia. O mesmo vale para dor ocular forte, que a catarata não provoca.',
        ],
      },
      {
        id: 'tipos-de-catarata',
        heading: 'Os tipos de catarata e o jeito de cada um',
        paragraphs: [
          'A catarata senil, ligada ao envelhecimento, é a forma mais comum e pode se instalar em diferentes partes do cristalino. Na catarata nuclear, a opacificação começa no centro da lente e tende a deixar a visão amarelada, com certa melhora temporária para perto. Na cortical, as opacidades surgem nas bordas e criam glare, aquele ofuscamento que atrapalha a visão noturna.',
          'A catarata subcapsular posterior se forma na parte de trás da lente e costuma prejudicar mais a leitura e a visão com luz forte, mesmo quando o exame de acuidade visual parece razoável. Ela pode aparecer mais cedo em pessoas com diabetes ou em uso prolongado de corticoides.',
          'Existem ainda formas que não dependem da idade: a catarata congênita, presente ao nascimento, a traumática, depois de uma pancada no olho, e a secundária a outras doenças ou cirurgias oculares. O tipo de catarata ajuda o oftalmologista a explicar os sintomas, mas não muda o essencial: quando a visão atrapalha a rotina, a cirurgia é o caminho.',
        ],
      },
      {
        id: 'nenhum-colirio-resolve',
        heading: 'Nenhum colírio desfaz a catarata',
        paragraphs: [
          'A cirurgia é o único tratamento que cura a catarata. Não existe colírio, comprimido ou exercício capaz de fazer a opacificação do cristalino desaparecer, e a lente turvada não volta a ficar transparente sozinha. Nos estágios iniciais, óculos atualizados e iluminação adequada aliviam o desconforto, mas não interrompem a progressão. É comum que a receita mude a cada consulta, e isso não significa que o problema está sendo resolvido.',
          'Por isso, produtos que prometem reverter a catarata merecem desconfiança. Além de não cumprirem o que anunciam, podem atrasar uma avaliação que já deveria ter acontecido. Suplementos vitamínicos também não têm efeito comprovado sobre a evolução da doença, e nenhum deles substitui o exame oftalmológico.',
        ],
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Se a visão embaçada está piorando e já atrapalha tarefas do dia a dia, marque uma consulta com oftalmologista. Na unidade básica de saúde, é possível receber o encaminhamento para o serviço de oftalmologia do SUS e tirar dúvidas sobre a fila de espera para a cirurgia.',
          'A catarata em si não é uma urgência, e a espera pela consulta de rotina não costuma trazer risco. Procure atendimento no mesmo dia, porém, se aparecer perda visual súbita em um olho, dor ocular intensa com náusea ou vômito, manchas escuras que surgem de repente ou visão dupla que não melhora ao fechar um olho. Esses sinais podem indicar outras doenças oculares, que exigem intervenção rápida.',
        ],
        bullets: [
          'Perda de visão em horas ou em poucos dias',
          'Dor forte no olho, sobretudo com náusea ou vômito',
          'Manchas escuras flutuantes que aparecem de repente',
          'Clarões ou alucinações visuais',
          'Vermelhidão e sensibilidade à luz depois de um trauma ocular',
        ],
        cta: {
          label: 'Conheça a página sobre catarata',
          href: '/doencas/catarata/',
        },
      },
    ],
    diseaseSlugs: ['catarata'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['catarata-tratamento-e-cirurgia'],
    references: [
      {
        label: 'Catarata, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-oftalmol%C3%B3gicos/catarata/catarata',
        publisher: 'Manual MSD',
      },
      {
        label: 'Cegueira e deficiência visual: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Metade das pessoas com cegueira por catarata precisa de cirurgia que muda a vida',
        url: 'https://www.who.int/news/item/11-02-2026-one-in-two-people-facing-cataract-blindness-need-access-to-life-changing-surgery',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'catarata-tratamento-e-cirurgia',
    slug: 'catarata-tratamento-e-cirurgia',
    metaTitle: 'Catarata: tratamento e cirurgia',
    title: 'Catarata: tratamento cirúrgico, recuperação e acesso pelo SUS',
    excerpt:
      'A cirurgia de catarata é segura e eficaz, e o SUS oferece o procedimento. Entenda quando operar, como é a cirurgia, o que esperar da recuperação e como acessar o tratamento.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'quando-operar',
        heading: 'Quando a cirurgia está indicada',
        paragraphs: [
          'A cirurgia é recomendada quando a opacificação do cristalino atrapalha atividades como dirigir, trabalhar, ler ou cuidar da casa. Não existe um grau mínimo obrigatório: a indicação é funcional e depende do impacto que a perda visual causa na vida da pessoa.',
          'Não é preciso esperar a catarata amadurecer. Adiar o procedimento em casos avançados pode tornar a cirurgia mais delicada e a recuperação mais lenta. Também não há vantagem em operar antes da hora, enquanto a rotina segue possível sem esforço. A conversa com o oftalmologista deve levar em conta o que a pessoa precisa enxergar para trabalhar e cuidar da família.',
          'A exceção são situações em que a catarata provoca inflamação dentro do olho ou eleva a pressão intraocular. Nesses casos, o oftalmologista pode recomendar a cirurgia com urgência, mesmo que a visão ainda não esteja muito comprometida.',
        ],
      },
      {
        id: 'condicoes-cronicas',
        heading: 'Diabetes e problemas cardíacos impedem a cirurgia?',
        paragraphs: [
          'A cirurgia pode ser feita em pessoas de qualquer idade e é considerada segura também em quem tem diabetes ou doença cardíaca, desde que essas condições estejam em acompanhamento. O oftalmologista e o médico que cuida da doença de base conversam antes do procedimento para ajustar medicamentos quando necessário.',
          'No diabetes, o controle da glicemia ajuda na recuperação e reduz o risco de complicações. Quem usa anticoagulante precisa avisar a equipe cirúrgica, que decide junto com o médico responsável se há necessidade de ajuste. Nenhuma medicação deve ser suspensa por conta própria antes da cirurgia.',
          'A avaliação pré-operatória também serve para identificar infecções ou inflamações oculares que precisam ser tratadas antes. Quando existe alguma condição ativa, a cirurgia é adiada até que o olho esteja estável, o que protege o resultado. Exames de sangue e avaliação clínica podem ser pedidos conforme a idade e as doenças de base.',
        ],
      },
      {
        id: 'como-e-a-cirurgia',
        heading: 'Como funciona o procedimento',
        paragraphs: [
          'A técnica mais usada é a facoemulsificação. O oftalmologista faz uma incisão pequena, fragmenta o cristalino opacificado com ultrassom e aspira os fragmentos. No mesmo lugar, implanta uma lente intraocular artificial que devolve a transparência ao eixo visual. A incisão costuma ser tão pequena que não precisa de pontos na maioria dos casos.',
          'A cirurgia é feita sob anestesia local, dura em média 20 a 30 minutos e não exige internação. O paciente recebe alta no mesmo dia, com orientações por escrito e a prescrição dos colírios. Na rede pública, o procedimento é oferecido pelo SUS em hospitais credenciados. Na maioria dos casos, um olho é operado de cada vez, com algumas semanas de intervalo.',
          'O Ministério da Saúde tem ampliado a capacidade cirúrgica e atualizado protocolos, inclusive com técnicas que tratam catarata e glaucoma na mesma intervenção. Quem está na fila pode procurar a secretaria de saúde do município para saber como o encaminhamento é organizado na sua região.',
        ],
      },
      {
        id: 'lente-intraocular',
        heading: 'A escolha da lente intraocular',
        paragraphs: [
          'A lente intraocular substitui o cristalino e fica definitivamente dentro do olho. Existem lentes de diferentes características, e a escolha depende das condições do olho, das atividades da pessoa e do serviço onde a cirurgia será feita. O oftalmologista explica as opções disponíveis antes do procedimento e mede o olho para calcular o grau da lente.',
          'A lente monofocal oferece boa visão para uma distância principal, em geral a de longe, e costuma exigir óculos para ler. Já as lentes multifocais tentam reduzir a dependência de óculos em várias distâncias, mas podem causar halos e perda de contraste em algumas pessoas.',
          'Não existe lente ideal para todos. A conversa antes da cirurgia deve incluir o que a pessoa faz no trabalho, se dirige à noite e quanto tempo passa lendo. Expectativas realistas evitam frustração depois da alta, porque nenhuma lente devolve exatamente a visão que se tinha aos 20 anos.',
        ],
      },
      {
        id: 'recuperacao',
        heading: 'Recuperação e cuidados no pós-operatório',
        paragraphs: [
          'A recuperação costuma ser rápida, e muitos já enxergam melhor em 24 a 48 horas. O oftalmologista prescreve colírios antibiótico e anti-inflamatório para prevenir infecção e controlar a inflamação. A visão pode oscilar nos primeiros dias, o que é esperado.',
          'Seguir as orientações da equipe faz diferença no resultado. Dormir com o protetor ocular, não esfregar o olho e voltar às consultas de revisão são cuidados simples que protegem a cirurgia.',
          'Se aparecer dor que não passa com o analgésico indicado, piora da visão, secreção ou vermelhidão intensa, procure o serviço onde foi operado. Esses sinais podem indicar complicações que precisam de tratamento rápido.',
        ],
        bullets: [
          'Não esfregar o olho operado por pelo menos um mês',
          'Usar o protetor ocular para dormir nos primeiros dias',
          'Evitar esforço físico intenso e ambientes com poeira enquanto o médico orientar',
          'Aplicar os colírios nos horários prescritos, sem interromper por conta própria',
          'Voltar às consultas de acompanhamento para verificar a cicatrização e a acuidade visual',
        ],
      },
      {
        id: 'a-catarata-volta',
        heading: 'A catarata volta depois da cirurgia?',
        paragraphs: [
          'A catarata em si não volta, porque o cristalino natural foi removido. O que acontece em parte das pessoas operadas é a cápsula fina que sustenta a lente artificial ficar opaca meses ou anos depois. É a chamada catarata secundária, e o resultado se parece com o anterior: a visão volta a ficar embaçada.',
          'O tratamento não é uma nova cirurgia de catarata. Na maioria dos casos, o oftalmologista usa um laser para abrir um pequeno orifício nessa cápsula e permitir a passagem da luz. O procedimento é rápido, feito no consultório e não exige internação. A visão costuma melhorar em poucos dias.',
          'Vale lembrar que a cirurgia não impede outras doenças oculares, como o glaucoma ou a degeneração macular. Por isso, as consultas de rotina continuam importantes mesmo depois de recuperar a visão, sobretudo em quem tem diabetes ou histórico familiar de glaucoma.',
        ],
        cta: {
          label: 'Conheça a página sobre catarata',
          href: '/doencas/catarata/',
        },
      },
    ],
    diseaseSlugs: ['catarata'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['catarata-sintomas-e-quando-procurar-atendimento'],
    references: [
      {
        label: 'Catarata, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-oftalmol%C3%B3gicos/catarata/catarata',
        publisher: 'Manual MSD',
      },
      {
        label: 'SUS vai oferecer cirurgia que trata glaucoma e catarata ao mesmo tempo',
        url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/sus-vai-oferecer-cirurgia-que-trata-glaucoma-e-catarata-ao-mesmo-tempo',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Doenças oculares: orientações e cuidados',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doencas-oculares',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'parasitoses-intestinais-sinais-de-alerta-quando-procurar-atendimento',
    slug: 'parasitoses-intestinais-sinais-de-alerta-quando-procurar-atendimento',
    metaTitle: 'Parasitoses intestinais: quando procurar atendimento',
    title: 'Parasitoses intestinais: sinais de alerta e quando procurar atendimento',
    excerpt:
      'A maior parte das parasitoses intestinais se resolve com exame de fezes e remédio certo na unidade básica de saúde. O que muda tudo são quatro cenas: obstrução intestinal, sangue nas fezes, desidratação e anemia importante. Saiba reconhecê-las.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'quadro-tranquilo',
        heading: 'Na maioria das vezes, sem pressa',
        paragraphs: [
          'A dor abdominal vaga, as fezes moles de vez em quando e a coceira anal noturna formam o retrato mais comum das parasitoses intestinais, e nada nele exige pronto atendimento. O caminho previsto é a consulta na unidade básica de saúde, o exame de fezes e o remédio adequado ao parasita encontrado.',
          'Boa parte das pessoas infectadas por vermes transmitidos pelo solo não tem sintoma nenhum, ou tem queixas leves que se confundem com outras causas de desconforto intestinal. O organismo convive com o parasita por meses, e a descoberta costuma acontecer num exame pedido por outro motivo, como um check-up ou a investigação de uma anemia.',
          'O que muda o cenário são algumas cenas específicas, descritas abaixo. Elas envolvem obstrução do intestino, perda de sangue, desidratação e anemia, e nenhuma delas melhora com medida caseira. Reconhecer cedo essas situações evita que um problema tratável vire internação, sobretudo em crianças pequenas e em idosos.',
        ],
      },
      {
        id: 'observar-em-casa',
        heading: 'O que observar em casa',
        paragraphs: [
          'Enquanto a consulta chega, vale anotar a evolução dos pontos que mostram como o parasita está afetando o conjunto do organismo, e não apenas o intestino. A lista abaixo serve de roteiro para a conversa com o profissional de saúde, e a data de início dos sintomas é o primeiro item a registrar.',
          'Esse registro ajuda a distinguir uma parasitose simples de um quadro que precisa de investigação mais longa. Ele não substitui o exame de fezes, mas encurta o caminho até o diagnóstico e evita consultas repetidas sem rumo. Fotografar as fezes quando houver alteração também pode ajudar.',
        ],
        bullets: [
          'O apetite e o peso, ou a curva de crescimento na criança',
          'O aspecto e a frequência das fezes, e se há sangue nelas',
          'A coceira anal noturna e o sono atrapalhado',
          'Palidez, cansaço e falta de ar ao brincar ou fazer esforço',
          'Os episódios de dor abdominal e o que os alivia',
          'O estado de hidratação, observando lábios, lágrimas e volume de urina',
        ],
      },
      {
        id: 'sinais-na-crianca',
        heading: 'Sinais que pedem avaliação nas crianças',
        paragraphs: [
          'As crianças pagam o preço maior das parasitoses, porque o parasita compete justamente com a fase da vida em que o corpo mais precisa de alimento. Leve a criança de novo à unidade de saúde, sem esperar o fim do tratamento, se notar os sinais abaixo.',
          'A escola costuma ser o primeiro lugar onde a diferença aparece: a criança fica mais apática, perde interesse pelas aulas e cai no rendimento. Nada disso é específico de verminose, mas o conjunto justifica uma avaliação com exame de fezes e hemograma. O peso anotado a cada mês é o dado mais objetivo para mostrar ao profissional.',
        ],
        bullets: [
          'Emagrecimento ou parada do ganho de peso ao longo de semanas',
          'Cansaço, palidez e queda do rendimento escolar',
          'Diarreia persistente, com fezes gordurosas e barriga estufada, quadro típico da giárdia',
          'Coceira anal noturna intensa, com criança agitada e dormindo mal',
          'Crescimento mais lento que o esperado para a idade',
        ],
      },
      {
        id: 'sinais-de-anemia',
        heading: 'Quando a parasitose vira anemia',
        paragraphs: [
          'O ancilostomídeo, conhecido como amarelão, se fixa na parede do intestino e suga sangue aos poucos. A perda prolongada leva à anemia por falta de ferro, com palidez, cansaço e queda de energia que pioram devagar, sem que a pessoa perceba o motivo. A lombriga também disputa nutrientes e pode agravar a desnutrição em quem já come pouco.',
          'Por isso, palidez e cansaço que continuam depois do vermífugo merecem um hemograma. Tratar apenas o verme sem repor o ferro deixa a pessoa ainda cansada, e a investigação da anemia é parte do cuidado, não um excesso de exames. A reposição deve ser orientada na unidade de saúde, com dose e duração definidas.',
        ],
        bullets: [
          'Palidez na pele, nas gengivas e na parte interna das pálpebras',
          'Cansaço fácil, tontura e falta de ar em esforços pequenos',
          'Unhas quebradiças e queda de cabelo',
          'Vontade de comer terra ou gelo, sinal de anemia em algumas crianças',
        ],
      },
      {
        id: 'emergencia',
        heading: 'Quando é emergência',
        paragraphs: [
          'Poucas situações ligam o sinal vermelho, mas elas existem e evoluem rápido. Procure um pronto atendimento sem esperar se aparecer qualquer um dos sinais abaixo.',
          'A obstrução intestinal por lombrigas é a mais clássica: o verme forma um novelo que bloqueia a passagem do conteúdo intestinal. A pessoa para de eliminar fezes e gases, sente cólicas fortes e vomita. Nesse cenário, o atendimento precisa ser imediato, porque a parede do intestino pode sofrer com a distensão.',
        ],
        bullets: [
          'Dor abdominal forte em cólica, com vômitos e interrupção das fezes e dos gases',
          'Barriga muito distendida, dura e sensível ao toque',
          'Sangue nas fezes acompanhado de febre alta',
          'Sinais de desidratação, como boca seca, choro sem lágrima, pouca urina e moleza excessiva',
          'Palidez intensa com falta de ar, fraqueza importante ou coração acelerado',
        ],
      },
      {
        id: 'onde-procurar',
        heading: 'Onde fazer o exame e a consulta',
        paragraphs: [
          'A unidade básica de saúde resolve a maior parte dos casos: faz a pergunta certa, pede o parasitológico de fezes, escolhe o remédio conforme o parasita e marca a reavaliação. Em regiões de alta transmissão, o Ministério da Saúde coordena campanhas de tratamento periódico, e quem recebe o diagnóstico em casa não precisa esperar crise para levar as crianças à consulta.',
          'Leve os exames de volta na data combinada, inclusive quando o resultado negativo não explicar os sintomas, porque uma única amostra pode não ter pego o parasito. Em alguns casos, o profissional pede duas ou três coletas em dias diferentes, sobretudo quando a suspeita é de giárdia.',
          'Se o quadro for de diarreia com vômitos e desidratação, o cuidado imediato é o da gastroenterite. Já a palidez e o cansaço que persistem depois de tratar os vermes pedem investigação de anemia ferropriva, porque a perda de sangue pode deixar uma deficiência que não some sozinha.',
        ],
        cta: {
          label: 'Veja a página sobre as parasitoses intestinais',
          href: '/doencas/parasitoses-intestinais/',
        },
      },
    ],
    diseaseSlugs: ['parasitoses-intestinais'],
    topicSlugs: ['doencas-infecciosas', 'saude-infantil'],
    relatedArticleSlugs: ['parasitoses-intestinais-tratamento-e-prevencao'],
    references: [
      {
        label: 'Geo-helmintíase: o que é, sintomas e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/geo-helmintiase',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Geo-helmintíases transmitidas pelo solo: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Ascaridíase, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-parasit%C3%A1rias-nematelmintos-nemat%C3%B3deos/ascarid%C3%ADase',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'parasitoses-intestinais-tratamento-e-prevencao',
    slug: 'parasitoses-intestinais-tratamento-e-prevencao',
    metaTitle: 'Parasitoses intestinais: tratamento e prevenção',
    title: 'Parasitoses intestinais: tratamento, higiene e prevenção',
    excerpt:
      'Cada parasita tem o seu remédio, e o remédio sozinho não resolve: sem higiene e água tratada, o verme volta. Veja como funciona o tratamento, por que a família toda entra no caso do oxiúro e o que quebra o ciclo.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'remedio-para-cada-parasita',
        heading: 'O remédio depende do parasita',
        paragraphs: [
          'Contra os vermes, as opções mais usadas são o albendazol e o mebendazol, em geral em tratamento curto. A lombriga, o ancilostomídeo, o oxiúro e o tricocéfalo costumam responder a uma dose única ou a poucos dias de tratamento, e a repetição pode ser necessária em regiões de alta transmissão.',
          'Contra protozoários como a giárdia e a ameba, funcionam a nitazoxanida e os medicamentos da família do metronidazol, e é aí que a automedicação tropeça: a caixa comprada na farmácia para vermes não elimina protozoários, e o quadro volta sem explicação. A teníase, por sua vez, tem tratamento próprio, com praziquantel ou albendazol.',
          'A dose se define pela idade e pelo peso, e a gravidez muda a escolha do remédio, por isso bebê, criança e gestante merecem avaliação individual. No Brasil, o tratamento das geo-helmintíases está disponível na rede pública, com o albendazol fornecido pelo SUS nas unidades básicas de saúde. Nunca use o remédio de uma pessoa para outra, porque a dose depende do peso.',
        ],
      },
      {
        id: 'diagnostico-antes-do-remedio',
        heading: 'Por que o exame vem antes do remédio',
        paragraphs: [
          'O parasitológico de fezes identifica o parasita e permite escolher o medicamento certo. Tratar às cegas funciona em parte dos casos, mas deixa de fora protozoários e vermes que exigem outro esquema, além de dificultar a reavaliação quando os sintomas não melhoram.',
          'Como a eliminação de ovos e cistos varia ao longo dos dias, uma amostra negativa não descarta a infecção. Quando a suspeita clínica é forte, o profissional pode pedir coletas seriadas ou um exame específico para giárdia, que nem sempre aparece no exame de rotina.',
          'Em crianças com diarreia prolongada, o exame também ajuda a afastar outras causas, como intolerância à lactose e doença celíaca, que produzem sintomas parecidos. Essa distinção importa porque o tratamento é completamente diferente.',
        ],
      },
      {
        id: 'na-pratica',
        heading: 'Como conduzir o tratamento',
        paragraphs: [
          'Feita a prescrição, o resto depende de casa. As orientações abaixo valem para a maioria das parasitoses intestinais e fazem parte do tratamento, não são apenas recomendações de conforto.',
          'O retorno na data marcada serve para confirmar a cura, revisar sintomas que persistem e investigar anemia quando a palidez não melhora. Se o exame de controle continuar positivo, o esquema pode ser repetido ou trocado. Levar a caixa do remédio usada à consulta ajuda a conferir se a dose foi cumprida.',
        ],
        bullets: [
          'Tomar o medicamento pelo tempo combinado e retornar na data marcada',
          'No caso do oxiúro, tratar toda a família no mesmo dia, mesmo quem não tem sintoma',
          'Cortar a reinfecção com higiene: mãos lavadas com sabão, unhas curtas, banho pela manhã',
          'Lavar roupa íntima, pijama e lençóis com frequência enquanto o oxiúro estiver em casa',
          'Não repetir sobras de remédio de caixas anteriores',
          'Voltar antes da hora se palidez e cansaço persistirem, sinal de que falta investigar a anemia',
        ],
      },
      {
        id: 'quebrar-o-ciclo',
        heading: 'Por que o verme volta',
        paragraphs: [
          'Sem quebrar o ciclo, o remédio limpa hoje e o parasita reentra amanhã. Os ovos dos vermes transmitidos pelo solo amadurecem na terra e voltam à boca pela mão mal lavada, pela verdura crua ou pela água contaminada. Os cistos da giárdia resistem em água mal tratada, e os ovos do oxiúro vivem no lençol, na roupa e nas unhas de quem se coça à noite.',
          'A reinfecção é o motor da carga parasitária nas crianças, que trocam ovos entre si em casa, na creche e na escola. Por isso o tratamento do oxiúro é da família toda, e por isso a higiene não é detalhe decorativo: é a metade do remédio.',
          'Em áreas sem rede de esgoto, o esgoto que corre a céu aberto contamina o solo e a água e mantém a transmissão. Nesse cenário, medidas individuais ajudam, mas não substituem saneamento básico e água tratada, que são as intervenções de maior impacto sobre a carga de parasitoses. A transmissão também acontece dentro de casa, quando um morador infectado contamina o ambiente, por isso tratar todos os casos identificados na família ao mesmo tempo reduz a circulação do parasita.',
        ],
      },
      {
        id: 'agua-e-saneamento',
        heading: 'Água, esgoto e o limite da ação individual',
        paragraphs: [
          'Ferver, filtrar ou clorar a água de consumo reduz o risco de giárdia e de outras infecções transmitidas por água contaminada. Em locais sem tratamento, deixar a água em ebulição por alguns minutos é a forma mais segura de torná-la própria para beber, e o armazenamento precisa ser feito em recipiente limpo e tampado.',
          'A prevenção coletiva depende de esgoto tratado, coleta de lixo e água encanada. Cobrar essas melhorias do poder público é parte da prevenção, e não um assunto separado da saúde. Enquanto elas não chegam, as medidas de casa continuam valendo.',
          'Vale observar de onde vem a água usada para beber, cozinhar e lavar alimentos. Poços próximos a fossas e caixas-dágua sem limpeza periódica são fontes comuns de contaminação, e a limpeza da caixa a cada seis meses é uma medida simples de proteção.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Prevenção no dia a dia',
        paragraphs: [
          'As medidas que fecham a porta de entrada do parasita são simples, baratas e valem para todos os tipos de parasitose intestinal. Elas protegem inclusive quem já tratou, porque a imunidade contra vermes é curta e a exposição continua.',
          'Vale ensinar as crianças desde cedo, porque o hábito de lavar as mãos antes de comer é a proteção mais eficaz que existe contra a reinfecção. Em áreas de alta transmissão, participar das campanhas de tratamento periódico oferecidas pelo SUS complementa o cuidado individual. O hábito precisa ser repetido em casa, na escola e na creche para virar rotina.',
        ],
        bullets: [
          'Lavar as mãos com água e sabão depois de usar o banheiro e antes de comer',
          'Lavar muito bem as frutas, as verduras e os legumes que serão consumidos crus',
          'Beber só água tratada, fervida ou filtrada',
          'Usar calçados ao caminhar em terra ou areia',
          'Manter as unhas curtas e limpas, principalmente nas crianças',
          'Participar das campanhas de tratamento periódico oferecidas pelo SUS',
        ],
        cta: {
          label: 'Veja a página sobre as parasitoses intestinais',
          href: '/doencas/parasitoses-intestinais/',
        },
      },
    ],
    diseaseSlugs: ['parasitoses-intestinais'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['parasitoses-intestinais-sinais-de-alerta-quando-procurar-atendimento'],
    references: [
      {
        label: 'Infecção por oxiúro, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-parasit%C3%A1rias-nematelmintos-nemat%C3%B3deos/infec%C3%A7%C3%A3o-por-oxi%C3%BAro',
        publisher: 'Manual MSD',
      },
      {
        label: 'Giardíase, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-parasit%C3%A1rias-protozo%C3%A1rios-intestinais-e-microspor%C3%ADdios/giard%C3%ADase',
        publisher: 'Manual MSD',
      },
      {
        label: 'Geo-helmintíases transmitidas pelo solo: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'artrite-reumatoide-sinais-iniciais-quando-procurar-atendimento',
    slug: 'artrite-reumatoide-sinais-iniciais-quando-procurar-atendimento',
    metaTitle: 'Artrite reumatoide: sinais iniciais',
    title: 'Artrite reumatoide: sinais iniciais e quando procurar atendimento',
    excerpt:
      'Rigidez matinal, inchaço simétrico nas juntas das mãos e dor que dura semanas são a pista da artrite reumatoide. Entenda o que observar e quando procurar um reumatologista.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'primeiros-sinais',
        heading: 'Os primeiros sinais',
        paragraphs: [
          'A artrite reumatoide raramente começa de uma vez. Ela vai aparecendo em detalhes que a pessoa aprende a ignorar, e são justamente esses detalhes que o reumatologista procura. O incômodo inicial costuma ser leve, intermitente e fácil de confundir com cansaço ou esforço.',
          'O primeiro sinal costuma ser a rigidez ao acordar. As mãos demoram a abrir, os dedos parecem inchados e a sensação melhora depois de algum movimento. No começo, dura poucos minutos; com o tempo, pode passar de uma hora e voltar depois de períodos longos sentado. É esse sintoma que mais motiva a consulta nas fases iniciais, mesmo quando a dor ainda é fraca.',
          'Antes da dor forte, muitas pessoas relatam cansaço, mal-estar e uma sensação de que o corpo está lento. Perda de peso leve e febre baixa podem acompanhar o início e às vezes só são lembradas depois do diagnóstico. Esses sintomas gerais não são específicos, mas, somados ao inchaço das juntas, ajudam a levantar a suspeita.',
        ],
        bullets: [
          'Rigidez nas mãos ao acordar, que demora a passar',
          'Dor e inchaço nos dedos e nos punhos, dos dois lados',
          'Junta quente e sensível ao apertar',
          'Dificuldade para abrir um pote ou girar a chave',
          'Cansaço sem explicação, que aparece antes da dor intensa',
        ],
      },
      {
        id: 'padrao-das-juntas',
        heading: 'Um padrão que ajuda a reconhecer',
        paragraphs: [
          'A dor da artrite reumatoide segue um desenho próprio: atinge articulações pequenas, das mãos e dos pés, e quase sempre dos dois lados do corpo ao mesmo tempo. O punho, a base dos dedos e as articulações entre as falanges são lugares típicos. Nos pés, as juntas logo abaixo dos dedos costumam ser as primeiras a inflamar.',
          'Outra marca é o horário. A rigidez é maior depois do repouso, ao acordar ou após um longo período parado, e melhora quando a pessoa se mexe. Dor que só piora com o uso da junta, ao fim do dia, costuma apontar para artrose, não para artrite reumatoide.',
          'A simetria não precisa ser perfeita. Pode haver mais inchaço de um lado, mas o padrão de várias juntas pequenas afetadas ao mesmo tempo é o que chama atenção. Juntas grandes, como ombro e joelho, podem ser atingidas, mas raramente são as primeiras. Quando só uma articulação grande incha, a investigação segue outro caminho.',
        ],
      },
      {
        id: 'rigidez-e-horario',
        heading: 'Rigidez matinal e sintomas gerais',
        paragraphs: [
          'A rigidez matinal é um dos sinais mais úteis na consulta. Quando dura mais de uma hora e melhora com o movimento, levanta a suspeita de inflamação sistêmica. Rigidez de poucos minutos, que some rápido, é mais comum em outras doenças articulares.',
          'Além das juntas, a inflamação pode causar febre baixa, perda de apetite e anemia leve. Em algumas pessoas surgem nódulos firmes sob a pele, próximos às articulações, e olhos secos ou irritados. Esses sinais mostram que a doença não se limita à articulação e reforçam a necessidade de avaliação.',
          'A inflamação também pode atingir estruturas fora da articulação. Pulmões, olhos e vasos podem ser afetados em diferentes graus, e por isso a consulta inclui perguntas sobre tosse, falta de ar e olhos secos. O risco cardiovascular também aumenta, o que reforça o controle de pressão, colesterol e tabagismo.',
        ],
      },
      {
        id: 'duracao-importa',
        heading: 'Por que a duração importa',
        paragraphs: [
          'Uma junta que dói por dois ou três dias, depois de um esforço ou de uma virose, não acende alerta. O sinal que muda a história é a persistência: inflamação que fica seis semanas ou mais, sempre nas mesmas articulações, merece avaliação.',
          'Esse é também o ponto que separa a artrite reumatoide da dor articular deixada por arboviroses. Depois da [chikungunya](/doencas/chikungunya/) a dor pode durar meses, mas costuma ter começado de forma abrupta, com febre alta, logo após as picadas do mosquito. A [dengue](/doencas/dengue/) dói muito na fase aguda e depois alivia.',
          'A febre alta no início dos sintomas articulares é mais típica de infecções e arboviroses do que da artrite reumatoide, e exames para essas doenças podem ser pedidos quando há suspeita. A artrite reumatoide, ao contrário, se instala devagar, sem um episódio que marque o início. Essa diferença de ritmo, junto com o exame físico, ajuda o médico a separar as duas situações.',
        ],
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'O primeiro passo é a unidade de saúde de referência, que avalia a persistência do inchaço e encaminha ao reumatologista. A lista de espera por reumatologia nas grandes cidades é longa, e por isso vale buscar o encaminhamento assim que a rigidez matinal se repete por semanas, sem esperar a junta deformar.',
          'Nem tudo é emergência, mas há situações que pedem atendimento no mesmo dia. Uma única articulação inchada, quente e dolorida, ainda mais com febre, pode ser infecção na junta e precisa ser vista logo. Vermelhidão intensa e calor local também merecem avaliação urgente. Dor que impede de mover a mão, o punho ou o pé também merece avaliação urgente.',
          'Vale levar à consulta a lista das juntas afetadas, o tempo de rigidez pela manhã e os exames já feitos, além dos medicamentos em uso, porque alguns podem causar dor articular. Quanto mais claro o histórico, mais rápida a definição do encaminhamento e do tratamento.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como o diagnóstico é confirmado',
        paragraphs: [
          'O reumatologista examina as articulações, conta quantas estão inchadas e doloridas e avalia a rigidez. Exames de sangue ajudam: o fator reumatoide e o anti-CCP apoiam o diagnóstico, enquanto a velocidade de hemossedimentação e a proteína C reativa mostram o grau de inflamação.',
          'Ultrassom e ressonância podem identificar inflamação antes de a radiografia mostrar erosão. O diagnóstico é clínico e baseado no conjunto, e não em um único exame. Quanto mais cedo ele é feito, mais cedo começa o tratamento que protege as juntas.',
          'O diagnóstico precoce abre a porta para o tratamento que muda o curso da doença. Com os medicamentos disponíveis no SUS, grande parte das pessoas consegue controlar a inflamação e manter as atividades do dia a dia.',
        ],
        cta: {
          label: 'Veja a página sobre a artrite reumatoide',
          href: '/doencas/artrite-reumatoide/',
        },
      },
    ],
    diseaseSlugs: ['artrite-reumatoide'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['artrite-reumatoide-tratamento-e-cuidados-com-as-juntas'],
    references: [
      {
        label: 'Artrite reumatoide',
        url: 'https://www.reumatologia.org.br/doencas-reumaticas/artrite-reumatoide/',
        publisher: 'Sociedade Brasileira de Reumatologia',
      },
      {
        label: 'Artrite reumatoide: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/rheumatoid-arthritis',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'artrite-reumatoide-tratamento-e-cuidados-com-as-juntas',
    slug: 'artrite-reumatoide-tratamento-e-cuidados-com-as-juntas',
    metaTitle: 'Artrite reumatoide: tratamento',
    title: 'Artrite reumatoide: tratamento e cuidados com as juntas',
    excerpt:
      'Controlar a inflamação cedo protege a articulação da deformidade. Veja como funciona o tratamento da artrite reumatoide e quais cuidados ajudam a poupar as juntas no dia a dia.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'objetivo',
        heading: 'O objetivo do tratamento',
        paragraphs: [
          'O tratamento da artrite reumatoide tem uma meta clara: apagar a inflamação antes que ela danifique a articulação. Alcançada a remissão, a doença fica quieta, a dor recua e a pessoa mantém o uso das juntas. O controle da inflamação também reduz o risco de complicações fora das juntas, como problemas pulmonares e cardiovasculares.',
          'Por isso o início precoce é tão decisivo. Nos primeiros meses a inflamação é mais fácil de conter, e cada articulação preservada é função garantida no futuro. Esperar para ver é a pior escolha. Quanto mais tempo a inflamação permanece, maior a chance de erosão e de deformidade.',
          'A remissão não significa cura. O tratamento continua mesmo quando os sintomas desaparecem, porque a inflamação pode voltar sem dar sinal. A meta é a remissão ou, quando ela não é possível, a menor atividade de doença possível, com o mínimo de efeitos adversos. As consultas de acompanhamento servem justamente para ajustar a dose antes que a doença reacenda, e o retorno deve ser mantido mesmo em fases tranquilas.',
        ],
      },
      {
        id: 'medicamentos',
        heading: 'As medicações e o acompanhamento',
        paragraphs: [
          'O reumatologista escolhe as medicações e monta a sequência de tratamento conforme as opções disponíveis no serviço, ajustando tudo ao tipo de junta atingida e à resposta de cada pessoa. O SUS mantém um protocolo clínico específico para a artrite reumatoide, que organiza esse caminho. A escolha depende da atividade da doença, das juntas atingidas e de condições associadas.',
          'O metotrexato costuma ser o primeiro medicamento modificador da doença. Quando não há resposta suficiente, o tratamento pode incluir outros modificadores ou os chamados biológicos, que bloqueiam alvos específicos da inflamação. Os corticoides podem ser usados por pouco tempo para aliviar os sintomas enquanto o restante faz efeito, e a dose é reduzida de forma gradual.',
          'Vale lembrar que muitos desses medicamentos demoram semanas para mostrar efeito, e o alívio rápido costuma vir de outros recursos usados no início. Nunca mude a dose nem pare por conta própria, e mantenha os exames de acompanhamento, que vigiam o fígado e o sangue durante o tratamento. Leve sempre a lista de medicamentos em uso, inclusive os comprados sem receita, para evitar interações.',
        ],
      },
      {
        id: 'exames-de-controle',
        heading: 'Exames de controle e segurança',
        paragraphs: [
          'O acompanhamento inclui exames de sangue periódicos para verificar a função do fígado, a contagem de células e o grau de inflamação. Esses exames detectam efeitos adversos antes que virem problema e mostram se a doença está realmente sob controle. A frequência é definida pelo reumatologista conforme o medicamento em uso, e o resultado é revisto a cada consulta.',
          'Antes de iniciar alguns medicamentos, é preciso afastar infecções como tuberculose e hepatite, e atualizar as vacinas. Durante o tratamento, febre ou infecção persistente devem ser avaliadas com rapidez, porque a imunidade pode estar reduzida.',
          'Mulheres em idade fértil devem conversar com o reumatologista antes de engravidar, porque alguns medicamentos precisam ser trocados. Esse planejamento evita riscos para a mãe e para o bebê.',
        ],
      },
      {
        id: 'cuidados',
        heading: 'Cuidados que poupam as juntas',
        paragraphs: [
          'O remédio controla a inflamação, e o cuidado diário poupa a articulação. Alguns hábitos fazem diferença ao lado do tratamento e ajudam a manter a força e a mobilidade. A avaliação de um fisioterapeuta ou terapeuta ocupacional ajuda a adaptar utensílios e a reduzir o esforço nas tarefas.',
          'A fisioterapia ensina a proteger as juntas nas tarefas de casa e no trabalho. Quando a dor está intensa, o repouso breve alivia, mas ficar parado por muito tempo aumenta a rigidez e piora a função. Órteses para punho e dedos podem ser indicadas em períodos de crise, por tempo limitado.',
        ],
        bullets: [
          'Fazer fisioterapia para manter a mobilidade e fortalecer a musculatura em torno das juntas',
          'Praticar atividade física de baixo impacto, como caminhada, natação ou bicicleta',
          'Proteger as juntas: distribuir o peso, usar as duas mãos e evitar torções repetidas',
          'Aplicar calor morno nas juntas rígidas e compressa fria nas muito inchadas',
          'Equilibrar esforço e repouso, sem longos períodos na mesma posição',
        ],
      },
      {
        id: 'habitos',
        heading: 'Alimentação, tabagismo e peso',
        paragraphs: [
          'Não existe dieta que cure a artrite reumatoide, mas alguns hábitos influenciam a inflamação e o risco cardiovascular, que é maior nessa doença. Uma alimentação com frutas, verduras, grãos e peixes ricos em ômega-3 apoia a saúde geral e ajuda no controle do peso. Não há alimento proibido, e restrições rígidas sem orientação podem levar à perda de nutrientes importantes.',
          'Parar de fumar é uma das medidas mais importantes. O cigarro piora a atividade da doença e reduz a resposta ao tratamento. Manter o peso adequado também diminui a sobrecarga nas juntas dos pés, dos joelhos e dos quadris. O ganho de peso é comum com corticoides, e o acompanhamento ajuda a lidar com esse efeito.',
          'Suplementos e dietas da moda não substituem o tratamento. Antes de iniciar qualquer produto, converse com o reumatologista, porque algumas substâncias interferem nos medicamentos ou sobrecarregam o fígado.',
        ],
      },
      {
        id: 'conviver',
        heading: 'Conviver e acompanhar',
        paragraphs: [
          'A artrite reumatoide é crônica, e o acompanhamento é o que mantém a doença controlada ao longo dos anos. Voltar às consultas, mesmo quando tudo vai bem, permite ajustar o tratamento antes de a dor voltar a subir. O apoio da família e o contato com outros pacientes ajudam a lidar com o cansaço e as limitações. O acompanhamento também inclui a saúde dos ossos, porque o uso prolongado de corticoides e a própria doença aumentam o risco de osteoporose.',
          'Em caso de cirurgia, de infecção ou de febre durante o tratamento, avise o reumatologista antes de tomar qualquer providência. Nunca interrompa os medicamentos por conta própria, porque a interrupção pode desencadear uma crise. Manter a caderneta de vacinas atualizada também protege quem usa remédios que reduzem a imunidade.',
        ],
        cta: {
          label: 'Veja a página sobre a artrite reumatoide',
          href: '/doencas/artrite-reumatoide/',
        },
      },
    ],
    diseaseSlugs: ['artrite-reumatoide'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['artrite-reumatoide-sinais-iniciais-quando-procurar-atendimento'],
    references: [
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas de Artrite Reumatoide',
        url: 'https://www.gov.br/conitec/pt-br/midias/relatorios/2017/pcdt_ar_final.pdf/@@download/file',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Artrite reumatoide',
        url: 'https://www.reumatologia.org.br/doencas-reumaticas/artrite-reumatoide/',
        publisher: 'Sociedade Brasileira de Reumatologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-22',
    isPlaceholder: true,
  },
  {
    id: 'hipertensao-alimentacao-e-sal',
    slug: 'hipertensao-alimentacao-e-sal',
    title: 'Alimentação e consumo de sal no controle da hipertensão',
    excerpt:
      'Reduzir o sal e escolher melhor os alimentos ajuda a controlar a pressão. Veja onde o sódio se esconde e o que colocar mais no prato.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'sal-e-pressao',
        heading: 'Sal e pressão: por que a quantidade importa',
        paragraphs: [
'A alimentação é um dos fatores que mais pesam no controle da hipertensão. O Ministério da Saúde aponta o consumo elevado de sal entre os principais fatores de risco para a doença, ao lado do fumo, das bebidas alcoólicas, da obesidade, do estresse, do colesterol alto e da falta de atividade física. Como boa parte desses fatores está ligada ao que se come, ajustar a dieta é uma das mudanças com maior efeito no dia a dia. A Organização Mundial da Saúde recomenda consumir menos de 2 gramas de sódio por dia. Esse número se refere ao sódio total, não apenas ao sal acrescentado no prato. Boa parte do que se consome vem de produtos industrializados, de temperos prontos e de alimentos que nem parecem salgados, e é justamente por isso que a conta costuma passar do limite sem que a pessoa perceba.',
          'A pressão alta é uma doença crônica e costuma não dar sinal. Na maioria dos casos ela é herdada dos pais, e vai ficando mais comum com a idade. Por isso, cuidar da alimentação não é um detalhe estético: é uma forma concreta de reduzir um dos fatores que empurram a pressão para cima.',
          'Vale lembrar que o paladar se adapta. Ao reduzir o sal de forma gradual, a comida continua saborosa e, em pouco tempo, os alimentos passam a parecer mais gostosos do que antes. O objetivo não é uma comida sem gosto, e sim uma comida com menos sódio.',
        ],
      },
      {
        id: 'sodio-escondido',
        heading: 'O sódio escondido nos alimentos do dia a dia',
        paragraphs: [
          'O sódio não está só no saleiro. Ele aparece em muitos itens usados todos os dias na cozinha e à mesa, quase sempre sem chamar atenção.',
          'Antes de comprar, vale a pena olhar o rótulo e comparar a quantidade de sódio por porção entre produtos parecidos. Duas marcas de um mesmo item podem trazer valores bem diferentes, e essa leitura simples ajuda a escolher a opção menos salgada.',
          'Refeições prontas de restaurante, comida congelada e entregas por aplicativo também costumam trazer bastante sódio. Quando não for possível evitá-las, reduza a porção, não acrescente mais sal e equilibre as outras refeições do dia com comida mais fresca.',
        ],
        bullets: [
          'Temperos prontos e caldos em cubo: costumam concentrar muito sódio e entram no preparo todos os dias sem que a gente perceba.',
          'Embutidos como salsicha, presunto, mortadela e linguiça.',
          'Enlatados, conservas e produtos em conserva, além de molhos e condimentos prontos.',
          'Salgadinhos, biscoitos salgados e outros petiscos industrializados.',
        ],
      },
      {
        id: 'o-que-ajuda',
        heading: 'O que ajuda no prato',
        paragraphs: [
          'Uma dieta saudável não é feita só de proibições. Ela é, antes de tudo, trocas: menos produtos prontos e mais comida de verdade.',
          'Leguminosas como o feijão são uma boa fonte de fibras e fazem parte da tradição alimentar brasileira, o que ajuda a mantê-las na rotina. Combinar arroz e feijão no prato é um jeito simples de melhorar a refeição sem complicar o preparo.',
        ],
        bullets: [
          'Mais frutas e verduras, em maior quantidade e variedade, todos os dias.',
          'Cereais integrais, como arroz integral e aveia, no lugar das versões refinadas.',
          'Feijão e outras leguminosas, presença diária na mesa brasileira.',
          'Castanhas e oleaginosas, em porções pequenas.',
          'Menos gordura saturada e menos açúcares livres, trocando frituras e doces por preparos mais simples.',
        ],
      },
      {
        id: 'rotina-diaria',
        heading: 'Uma rotina realista para o dia a dia',
        paragraphs: [
'Não é preciso virar a mesa de uma vez. Comece reduzindo aos poucos o sal que você acrescenta à comida já pronta e passando a temperar com alho, cebola, ervas e limão. Diminuir a quantidade de temperos prontos no preparo já reduz bastante a entrada de sódio ao longo do dia. No mercado, dê preferência, dentro do mesmo tipo de produto, às versões com menos sódio. Em casa, deixe frutas à vista e monte o prato com mais verduras e feijão, reservando os industrializados, os embutidos e os enlatados para ocasiões pontuais, e não para todos os dias.',
          'Beber água ao longo do dia, cozinhar mais em casa e evitar beliscar salgadinhos também contam. São mudanças pequenas, mas, somadas, mudam o total de sódio que entra no corpo a cada dia.',
          'Uma boa referência é começar pela refeição principal e, depois, estender as mudanças para o café da manhã e os lanches. Assim, a redução de sódio acontece de forma sustentável, sem virar uma fase que dura poucos dias.',
        ],
      },
      {
        id: 'alem-da-comida',
        heading: 'Além da comida: outros hábitos que ajudam',
        paragraphs: [
          'A comida é a parte mais lembrada, mas outros hábitos pesam igualmente no controle da pressão.',
          'Esses hábitos se somam. Reduzir o sal, praticar atividade, parar de fumar e moderar o álcool têm efeito cumulativo sobre a pressão, e nenhum deles precisa ser adotado de uma vez.',
        ],
        bullets: [
          'Praticar pelo menos 150 minutos por semana de atividade física de intensidade moderada.',
          'Reduzir o consumo de bebidas alcoólicas, respeitando o limite de uma dose por dia para mulheres e duas doses por dia para homens.',
          'Parar de fumar.',
          'Medir a pressão com regularidade, porque essa é a única forma de saber como ela está.',
        ],
      },
      {
        id: 'quando-buscar-ajuda',
        heading: 'Quando buscar ajuda',
        paragraphs: [
'A alimentação ajuda, e muito, mas não substitui o tratamento. Se você usa medicamentos para a pressão, não interrompa por conta própria, não dobre a dose e não use o remédio de outra pessoa. O acompanhamento na Atenção Básica e a retirada gratuita de medicamentos na Farmácia Popular fazem parte do cuidado oferecido pelo SUS. Como a hipertensão costuma não dar sintomas, a única forma de saber como está a pressão é medir com regularidade. A partir dos 20 anos, a recomendação é medir ao menos uma vez por ano e, em quem tem histórico familiar, ao menos duas vezes por ano.',
          'Quando a pressão sobe muito, geralmente a partir de 180 por 120, e vem acompanhada de sinais como dor de cabeça intensa, dor no peito, falta de ar, visão embaçada ou fraqueza em um lado do corpo, procure atendimento imediato: um pronto atendimento ou o SAMU, no número 192.',
          'Vale lembrar por que esse cuidado importa: quando não é controlada, a hipertensão aumenta o risco de complicações como angina, infarto, insuficiência cardíaca, arritmia, AVC e insuficiência renal. Cuidar da alimentação e do sal é parte de reduzir esse risco ao longo dos anos.',
        ],
        cta: {
          label: 'Entenda a hipertensão na página completa',
          href: '/doencas/hipertensao/',
        },
      },
    ],
    diseaseSlugs: ['hipertensao'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['hipertensao-como-medir-a-pressao-em-casa', 'hipertensao-posso-parar-o-remedio', 'hipertensao-metas-de-pressao', 'hipertensao-perigo-mesmo-sem-sintomas'],
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
      {
        label: 'Alimentação saudável: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Atividade física: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-20',
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },
  {
    id: 'hipertensao-posso-parar-o-remedio',
    slug: 'hipertensao-posso-parar-o-remedio',
    title: 'Posso parar o remédio quando a pressão normaliza?',
    excerpt:
      'Quando a pressão volta ao normal, é o remédio que está funcionando, e não sinal de cura. Entenda por que não se deve parar por conta própria e o que fazer diante de efeitos colaterais.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'pressao-controlada-nao-e-cura',
        heading: 'Pressão normal com remédio não é cura',
        paragraphs: [
          'Muita gente começa o tratamento para hipertensão, vê a pressão sempre normal nas medições e pensa que já pode parar. É uma reação compreensível, mas é justamente o engano mais comum. A hipertensão é uma doença crônica e, na imensa maioria dos casos, não desaparece. O que acontece é que o medicamento está funcionando: quando a pressão cai e se mantém em níveis seguros, isso é sinal de que o tratamento está correto, e não de que você pode abrir mão dele.',
          'A pressão que aparece no aparelho é o resultado de duas coisas juntas: o remédio e os seus hábitos. Quando você suspende o medicamento por conta própria, a pressão tende a voltar a subir com o tempo, muitas vezes de forma silenciosa, sem nenhum sintoma. É essa volta silenciosa que torna a decisão de parar tão perigosa.',
          'Pense na sua pressão como um número que precisa de ajuda constante para se manter baixo, e não como um problema que se resolve de uma vez. Enquanto o remédio age, as artérias trabalham com menos esforço; sem ele, esse esforço volta a crescer aos poucos. É por isso que a hipertensão pede tratamento contínuo, mesmo quando você se sente bem.',
        ],
      },
      {
        id: 'por-que-nao-parar-sozinho',
        heading: 'Por que parar por conta própria é perigoso',
        paragraphs: [
          'A hipertensão costuma não avisar. Ela geralmente não dá sintoma nenhum até virar um problema grave. Quando a pressão sobe muito, podem aparecer dor de cabeça, tontura, zumbido no ouvido, fraqueza, visão embaçada ou sangramento nasal, mas usar esses sinais para decidir tomar ou não o remédio é um erro, porque nem sempre eles aparecem.',
          'Sem o controle da pressão, cresce o risco de complicações como angina, infarto, insuficiência cardíaca, arritmia, AVC e insuficiência renal. No Brasil, 388 pessoas morrem por dia por causa da hipertensão. Nenhuma dessas complicações escolhe hora, e o remédio é o que mantém a sua pressão longe dessa faixa de risco.',
          'O tratamento da hipertensão não busca apenas um número bonito no aparelho. Ele protege o coração, o cérebro, os rins e os vasos ao longo de anos. Cada dia com a pressão controlada é um dia menos de desgaste para esses órgãos, e é isso que reduz o risco de infarto e de AVC no futuro.',
        ],
      },
      {
        id: 'efeitos-colaterais',
        heading: 'Efeitos colaterais: fale com a equipe, não pare sozinho',
        paragraphs: [
          'Há quem abandone o remédio por causa de efeitos colaterais, mas essa é a saída errada. Se o medicamento está causando algum incômodo, o caminho certo é conversar com a equipe de saúde. Existem várias classes de medicamentos para a pressão, como diuréticos, IECA, BRA, bloqueadores de canal de cálcio e betabloqueadores, e o profissional pode trocar a substância ou ajustar a dose para encontrar o que funciona melhor para você.',
          'Nunca dobre a dose por conta própria nem use o remédio de outra pessoa. Cada medicamento e cada dose são pensados para o seu caso, e o mesmo comprimido que ajuda uma pessoa pode não servir para outra. Se um remédio começou a fazer mal, avise quem acompanha você na Atenção Básica, na sua UBS.',
          'Muitos efeitos colaterais melhoram com o tempo ou com um pequeno ajuste de dose, e há sempre alternativas. Abandonar o remédio sem orientação devolve o risco que o tratamento estava controlando, sem resolver o desconforto da forma certa.',
        ],
      },
      {
        id: 'tomar-todo-dia',
        heading: 'Como não esquecer e manter o tratamento',
        paragraphs: [
          'Manter o tratamento todos os dias é o que sustenta o controle da pressão. Como a hipertensão costuma não dar sintoma, é justamente quando a pessoa se sente bem que a rotina de tomar o remédio corre o risco de escapar.',
          'Por isso, vale apoiar-se na rotina em vez de apenas na memória. Alguns ajustes pequenos fazem a dose deixar de ser uma decisão diária:',
        ],
        bullets: [
          'Tome o medicamento sempre no mesmo horário, encaixando-o em algo que já faz parte da sua rotina, como escovar os dentes ou o café da manhã.',
          'Use uma caixa organizadora semanal ou um alarme no celular para lembrar cada dose.',
          'Mantenha a receita em dia e leve-a sempre que for retirar o remédio na unidade de saúde.',
          'Se esquecer uma dose, retome o horário normal. Nunca tome dose dobrada para compensar.',
          'Não interrompa o tratamento nem ajuste a dose por conta própria, mesmo quando a pressão estiver boa.',
          'Leve o aparelho de pressão nas consultas e anote os valores para mostrar à equipe.',
        ],
      },
      {
        id: 'quando-o-medico-ajusta',
        heading: 'Quando o médico pode mudar ou ajustar o remédio',
        paragraphs: [
          'Reduzir, trocar ou até suspender um medicamento é uma decisão que pode existir, mas ela é do médico que acompanha o seu caso, com base nas suas medições e no seu conjunto de riscos. Se você mede a pressão com regularidade, leva os valores ao atendimento e mantém hábitos saudáveis, o tratamento pode ser revisto com segurança.',
          'A meta de pressão não é igual para todo mundo. Para quem tem doença cardiovascular, diabetes, doença renal crônica ou alto risco, a meta costuma ser abaixo de 130/80 mmHg; para as demais pessoas, abaixo de 140/90 mmHg, que é o mesmo que 14 por 9. Alcançar a meta é o objetivo do tratamento, e não um motivo para interrompê-lo.',
          'Entre uma consulta e outra, manter os hábitos também faz parte do plano: reduzir o sal, praticar atividade física com regularidade e evitar o fumo ajudam o remédio a funcionar melhor. Assim, é possível que o médico encontre a menor dose eficaz para o seu caso.',
        ],
      },
      {
        id: 'remedio-gratuito-e-ajuda',
        heading: 'Onde conseguir o remédio e quando procurar ajuda',
        paragraphs: [
          'No Brasil, o tratamento da hipertensão tem apoio do sistema público. O SUS oferece medicamentos gratuitos nas UBS, e o programa Farmácia Popular passou a oferecer gratuitamente, desde fevereiro de 2025, os medicamentos de sua lista para hipertensão. Para retirar, leve documento de identidade com foto, CPF e a receita médica dentro do prazo, que é de 120 dias.',
          'Tomar o remédio todos os dias e acompanhar a pressão na Atenção Básica é o que mantém uma doença silenciosa sob controle. Nunca interrompa nem ajuste a medicação sozinho; em caso de dúvida, procure a sua unidade de saúde. Mas fique atento: se a pressão estiver muito alta, geralmente a partir de 180/120, e vier acompanhada de dor de cabeça intensa, dor no peito, falta de ar, visão embaçada, tontura, náusea, confusão ou fraqueza em um lado do corpo, procure atendimento imediatamente ou chame o SAMU pelo 192.',
          'Guardar as receitas, não faltar às consultas de acompanhamento e medir a pressão em casa são atitudes simples que sustentam o controle. Se tiver qualquer dúvida sobre o seu tratamento, a equipe da Atenção Básica é o primeiro lugar a procurar; ela conhece o seu histórico e pode orientar o passo certo, sem que você precise decidir sozinho.',
        ],
        cta: {
          label: 'Entenda a hipertensão na página completa',
          href: '/doencas/hipertensao/',
        },
      },
    ],
    diseaseSlugs: ['hipertensao'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['hipertensao-como-medir-a-pressao-em-casa', 'hipertensao-alimentacao-e-sal', 'hipertensao-metas-de-pressao', 'hipertensao-perigo-mesmo-sem-sintomas'],
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
    publishedAt: '2026-10-20',
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },
  {
    id: 'hipertensao-metas-de-pressao',
    slug: 'hipertensao-metas-de-pressao',
    title: 'Hipertensão: até quanto a pressão deve baixar',
    excerpt:
      'Cada pessoa tem uma meta de pressão a alcançar, e ela não é igual para todos. Entenda por que o alvo varia, quais valores orientam o tratamento e por que forçar a queda não é o caminho.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-e-uma-meta',
        heading: 'O que significa ter uma meta de pressão',
        paragraphs: [
          'Tratar a hipertensão não é apenas deixar o número da pressão mais baixo. Existe uma meta, ou seja, um valor que o tratamento deve alcançar e manter para reduzir o risco de infarto, AVC e problemas nos rins. É um alvo a ser perseguido com constância, e não o resultado de uma única medição.',
          'Esse alvo não é igual para todo mundo e não se resume a decorar um número. Ele depende do risco cardiovascular de cada pessoa, das doenças que já existem e de como o corpo responde ao tratamento. Por isso, a mesma medida registrada em dois pacientes pode ter significados bem diferentes e exigir decisões diferentes.',
          'Entender o próprio alvo ajuda a participar do tratamento com mais segurança. Saber qual é o objetivo não substitui a consulta, mas torna cada medição mais útil e evita decisões precipitadas tomadas por conta própria.',
        ],
      },
      {
        id: 'meta-geral',
        heading: 'A meta geral: abaixo de 140 por 90',
        paragraphs: [
          'A referência geral de tratamento é manter a pressão abaixo de 140 por 90 mmHg. É o mesmo valor que caracteriza a doença: a hipertensão é definida quando a pressão nas artérias chega a 140 por 90 mmHg ou mais, aquilo que muita gente chama de \'14 por 9\'.',
          'Quem não tem outras condições associadas costuma ser acompanhado para permanecer nessa faixa. Alcançar esse patamar já representa uma redução importante do risco, e o objetivo passa a ser manter a estabilidade ao longo dos meses e dos anos, e não apenas durante uma consulta.',
          'Manter, nesse contexto, é tão importante quanto alcançar. Uma pressão que fica bem em um dia e descontrolada no outro não protege o coração e os vasos de forma consistente, o que reforça a necessidade de acompanhamento contínuo.',
        ],
      },
      {
        id: 'meta-mais-estrita',
        heading: 'A meta mais estrita: abaixo de 130 por 80',
        paragraphs: [
'Para determinados grupos, o alvo é mais apertado e a pressão deve ficar abaixo de 130 por 80 mmHg, porque o risco de complicações é maior e a diferença entre 140 e 130 pesa.',
          'Nesses casos, a meta mais estrita protege de forma mais firme órgãos como coração, cérebro e rins.',
        ],
        bullets: [
          'Pessoas com doença cardiovascular já estabelecida',
          'Pessoas com diabetes',
          'Pessoas com doença renal crônica',
          'Pessoas classificadas como de alto risco cardiovascular',
        ],
      },
      {
        id: 'por-que-a-meta-muda',
        heading: 'Por que a meta muda de pessoa para pessoa',
        paragraphs: [
'A escolha do alvo resulta da soma de vários fatores, e não de uma regra única aplicada a todos. A hipertensão se torna mais frequente com o avanço da idade e é mais comum em pessoas negras e em pessoas com diabetes. Hábitos também pesam nessa conta. Fumo, bebidas alcoólicas, obesidade, estresse, consumo elevado de sal, colesterol alto e falta de atividade física influenciam tanto o risco geral quanto a forma como a pressão responde ao tratamento.',
          'Por isso a avaliação é sempre individual. O profissional de saúde considera o risco total do paciente, as doenças que já existem e a resposta ao tratamento para decidir o quanto apertar a meta. Nem sempre descer ao menor número possível é o melhor caminho para todos.',
          'Conhecer o próprio contexto, portanto, ajuda a entender por que a meta de um vizinho não serve de referência para você. Comparar valores entre pessoas diferentes, sem levar em conta o histórico de cada uma, costuma confundir mais do que esclarecer.',
        ],
      },
      {
        id: 'mais-baixa-sempre-melhor',
        heading: 'Pressão mais baixa é sempre melhor?',
        paragraphs: [
          'Uma dúvida comum, especialmente entre pessoas mais velhas, é se a pressão deve baixar o máximo possível. A resposta não é simples: o objetivo não é o número mais baixo que o aparelho consegue mostrar, mas o alvo definido para cada pessoa, considerando o risco e a tolerância do organismo.',
          'Forçar a pressão para baixo mais do que o necessário, sem orientação, pode trazer mais mal do que bem. O corpo tem um limite de adaptação, e uma queda exagerada pode deixar a pessoa mal e levar à interrupção do tratamento.',
          'A decisão sobre quanto baixar pertence ao profissional de saúde, que ajusta o alvo conforme o quadro evolui. O que parece \'o mais baixo possível\' em uma conversa de sala de espera nem sempre corresponde ao que é seguro e sustentável para um paciente específico.',
        ],
      },
      {
        id: 'baixar-devagar',
        heading: 'Por que baixar a pressão rápido demais pode fazer mal',
        paragraphs: [
'Buscar a meta rapidamente, por conta própria, não é seguro. Dobrar a dose, usar a medicação de outra pessoa ou interromper o remédio sem orientação são atitudes que podem desorganizar a pressão e trazer problemas. A pressão responde melhor quando a mudança é gradual e acompanhada. Quem tenta forçar o resultado sozinho pode oscilar entre valores muito baixos e muito altos, e ainda perde de vista o que de fato funciona para o seu caso.',
          'O ajuste é feito pelo profissional, que observa como o corpo responde e acrescenta ou troca classes de medicamentos quando é preciso. Diuréticos, inibidores da enzima conversora (IECA), bloqueadores do receptor de angiotensina (BRA), bloqueadores de canal de cálcio e betabloqueadores entram conforme a necessidade de cada caso.',
          'Vale lembrar que, quando a pressão sobe muito, geralmente a partir de 180 por 120 mmHg, e vem acompanhada de dor de cabeça intensa, dor no peito, falta de ar, visão embaçada, tontura, náusea, confusão ou sangramento nasal, a orientação é procurar atendimento imediatamente. Esse cenário é diferente da busca tranquila por uma meta no dia a dia.',
        ],
      },
      {
        id: 'como-a-meta-e-acompanhada',
        heading: 'Como a meta é acompanhada no dia a dia',
        paragraphs: [
'Acompanhar a meta exige medir a pressão com regularidade. A medição feita em casa, chamada de MRPA, ajuda muito nesse processo: quando a média das medidas residenciais chega a 130 por 80 mmHg, o resultado já é considerado alterado. Em alguns casos o profissional solicita a MAPA, a monitorização ambulatorial por 24 horas, que mostra como a pressão se comporta ao longo do dia, durante a vigília e também durante o sono. Levar as anotações de casa para a consulta deixa o quadro mais claro.',
          'Medir com regularidade é a única forma de saber se a pressão está alta. Quem tem mais de 20 anos deve medir pelo menos uma vez por ano, e quem tem histórico familiar, no mínimo duas vezes por ano.',
          'O acompanhamento acontece na Atenção Básica, nas unidades básicas de saúde (UBS), onde a equipe ajusta o tratamento e tira dúvidas. Desde fevereiro de 2025, o programa Farmácia Popular oferece gratuitamente os medicamentos de sua lista para hipertensão, o que ajuda a manter o tratamento sem interrupção.',
        ],
        cta: {
          label: 'Entenda a hipertensão na página completa',
          href: '/doencas/hipertensao/',
        },
      },
    ],
    diseaseSlugs: ['hipertensao'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['hipertensao-como-medir-a-pressao-em-casa', 'hipertensao-alimentacao-e-sal', 'hipertensao-posso-parar-o-remedio', 'hipertensao-perigo-mesmo-sem-sintomas'],
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
    publishedAt: '2026-10-20',
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },
  {
    id: 'hipertensao-perigo-mesmo-sem-sintomas',
    slug: 'hipertensao-perigo-mesmo-sem-sintomas',
    title: 'Pressão alta sem sintomas ainda é perigosa: por que a hipertensão silenciosa preocupa',
    metaTitle: 'Pressão alta sem sintomas: por que é perigosa',
    excerpt:
      'A hipertensão costuma não dar sintoma nenhum, mas segue machucando coração, cérebro, rins e olhos ao longo dos anos. Medir a pressão é a única forma de saber.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'doenca-silenciosa',
        heading: 'Uma doença que não avisa',
        paragraphs: [
'A hipertensão é uma doença crônica: a pressão nas artérias fica alta de forma persistente, igual ou acima de 140 por 90 milímetros de mercúrio. O problema é que, na maior parte do tempo, ela não produz sintoma nenhum. A pessoa se sente bem, trabalha, dorme e não desconfia de nada, mesmo com as artérias sob pressão. Não sentir nada não significa que nada esteja acontecendo. Enquanto a pressão segue alta, o corpo se adapta e o dano se acumula em silêncio, ano após ano. Existe também uma forte herança nesse quadro: em cerca de 9 em cada 10 casos, a hipertensão é herdada dos pais.',
          'Alguns fatores pesam no aparecimento da doença: fumo, bebidas alcoólicas, obesidade, estresse, consumo elevado de sal, colesterol alto e falta de atividade física. A hipertensão é mais frequente em pessoas negras, em pessoas com diabetes, e aumenta com a idade.',
          'No mundo, cerca de 1,4 bilhão de adultos de 30 a 79 anos têm hipertensão, o que corresponde a 33% dessa faixa. Quase metade deles, 44%, não sabe que tem a doença. É essa parcela silenciosa que mais preocupa.',
        ],
      },
      {
        id: 'dano-ao-longo-do-tempo',
        heading: 'O que a pressão alta faz com o coração, o cérebro, os rins e os olhos',
        paragraphs: [
'A pressão elevada empurra o sangue com mais força contra a parede das artérias. Com o tempo, essa sobrecarga desgasta os vasos e obriga o coração a fazer mais esforço para bombear o sangue. É uma conta que o corpo cobra mais tarde. O coração pode aumentar de tamanho e perder eficiência, o que abre caminho para a insuficiência cardíaca. No cérebro, os vasos enfraquecidos aumentam o risco de AVC. Nos rins, a pressão alta compromete aos poucos a capacidade de filtrar o sangue. Nos olhos, um dos sinais possíveis é a visão embaçada, que costuma aparecer quando a pressão sobe muito.',
          'O ponto central é que nenhuma dessas mudanças costuma doer ou dar aviso prévio. O corpo vai se ajustando à pressão alta sem que a pessoa perceba, e é por isso que a doença costuma ser descoberta tarde, muitas vezes só depois de uma complicação. Por isso a hipertensão é chamada de doença silenciosa: ela age por dentro, sem que a pessoa sinta nada. O preço dessa pressão constante costuma aparecer anos depois, quando o dano já se instalou nos órgãos.',
        ],
      },
      {
        id: 'complicacoes',
        heading: 'As complicações que a hipertensão aumenta',
        paragraphs: [
          'Além do sofrimento que causam, essas complicações explicam por que a hipertensão é tão grave. No Brasil, 388 pessoas morrem por dia por causa da hipertensão.',
          'Muitas dessas complicações se desenvolvem devagar e só se manifestam quando já estão avançadas, o que torna o controle da pressão ainda mais importante.',
        ],
        bullets: [
          'Angina, quando o coração recebe menos sangue do que precisa',
          'Infarto, quando uma artéria do coração é obstruída',
          'Insuficiência cardíaca, quando o coração perde força para bombear',
          'Arritmia, quando o ritmo do coração se altera',
          'AVC, quando um vaso do cérebro entope ou se rompe',
          'Insuficiência renal, quando os rins perdem a capacidade de filtrar',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta que não podem ser ignorados',
        paragraphs: [
          'Quando a pressão sobe muito, geralmente acima de 180 por 120, o corpo pode dar sinais claros. Nesses casos, a orientação é procurar atendimento imediatamente, em um pronto atendimento ou chamando o SAMU pelo número 192, sem esperar que passe em casa.',
          'Insistimos nesse ponto porque, com a pressão muito alta, esperar que os sintomas passem em casa pode custar caro. O atendimento rápido faz diferença.',
        ],
        bullets: [
          'Dor de cabeça súbita e intensa',
          'Dor no peito',
          'Falta de ar',
          'Visão embaçada ou alterações na visão',
          'Tontura, náusea ou confusão',
          'Zumbido no ouvido e sangramento nasal',
          'Fraqueza em um lado do corpo',
          'Alteração no ritmo do coração',
        ],
      },
      {
        id: 'medir-e-a-unica-forma',
        heading: 'Medir é a única forma de saber',
        paragraphs: [
'Como a hipertensão não dá sintoma, nenhuma sensação serve de aviso. A única forma de saber se a pressão está alta é medir. Quem tem mais de 20 anos deve medir a pressão pelo menos uma vez por ano; quem tem histórico familiar deve medir no mínimo duas vezes por ano. A medição repetida é o que confirma o diagnóstico. Na medição feita em casa, a média igual ou acima de 130 por 80 já confirma a hipertensão. Na monitorização de 24 horas, a média também é de 130 por 80, com 135 por 85 durante a vigília e 120 por 70 durante o sono.',
          'Por isso não adianta esperar sentir algo para procurar ajuda. Quem mede a pressão com regularidade descobre o problema cedo, muitas vezes antes de qualquer complicação.',
          'O aparelho mostra apenas o valor daquele momento e não faz diagnóstico sozinho. Quem interpreta o resultado e define o tratamento é o profissional de saúde, que também orienta sobre a melhor forma de medir.',
        ],
      },
      {
        id: 'tratamento-continuo',
        heading: 'O tratamento contínuo é o que protege',
        paragraphs: [
'Depois do diagnóstico, o objetivo é manter a pressão controlada de forma contínua. Para pessoas com doença cardiovascular, diabetes, doença renal crônica ou alto risco, a meta costuma ser abaixo de 130 por 80; para as demais, abaixo de 140 por 90. As mudanças de hábito ajudam, mas muitas vezes não bastam sozinhas. Reduzir o sal para menos de 2 gramas de sódio por dia, praticar 150 minutos de atividade física moderada por semana, limitar o álcool e parar de fumar fazem parte do cuidado. Os medicamentos entram quando são necessários e não devem ser interrompidos por conta própria, nem ter a dose dobrada, nem ser substituídos pelo remédio de outra pessoa.',
          'No Brasil, o SUS oferece os medicamentos para hipertensão gratuitamente nas unidades básicas de saúde e pelo programa Farmácia Popular. Para retirar, é preciso levar documento de identidade com foto, CPF e receita médica dentro do prazo. O acompanhamento é feito na Atenção Básica.',
          'A escolha do medicamento e da dose é feita pelo profissional, de acordo com o perfil de cada pessoa. O acompanhamento na Atenção Básica permite ajustar o tratamento para manter a pressão na meta com o passar do tempo. Vale reforçar que a hipertensão não tem cura, mas tem controle. Com medição regular e tratamento contínuo, é possível reduzir bastante o risco de infarto, AVC, insuficiência cardíaca e insuficiência renal.',
        ],
        cta: {
          label: 'Entenda a hipertensão na página completa',
          href: '/doencas/hipertensao/',
        },
      },
    ],
    diseaseSlugs: ['hipertensao'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['hipertensao-como-medir-a-pressao-em-casa', 'hipertensao-alimentacao-e-sal', 'hipertensao-posso-parar-o-remedio', 'hipertensao-metas-de-pressao'],
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
      {
        label: 'Alimentação saudável: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Atividade física: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-20',
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },
  {
    id: 'hiv-como-se-transmite-e-o-que-nao-transmite',
    slug: 'hiv-como-se-transmite-e-o-que-nao-transmite',
    title: 'HIV: como o vírus se transmite e o que não transmite',
    excerpt:
      'O HIV passa por fluidos específicos, e não pelo convívio. Conhecer as formas reais de transmissão ajuda a se proteger e a combater o preconceito.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'como-se-transmite',
        heading: 'Como o HIV é transmitido',
        paragraphs: [
          'O HIV passa de uma pessoa para outra por meio de fluidos específicos: sangue, sêmen, secreções vaginais e leite materno. Para que a transmissão aconteça, esse fluido precisa entrar em contato com uma mucosa ou com uma corrente sanguínea. O vírus não sobrevive fora do corpo e não se espalha pelo ar, pela água ou pelo toque.',
          'Há três grandes vias de transmissão. Por via sexual, na relação vaginal, anal ou oral sem camisinha; por via sanguínea, no compartilhamento de agulhas e seringas e em acidentes com material cortante; e da mãe para o bebê, durante a gestação, o parto ou a amamentação.',
          'Algumas práticas concentram mais risco do que outras. A relação anal em que a pessoa recebe o pênis é a prática com maior chance de transmissão, porque a mucosa é mais frágil. Outras infecções sexualmente transmissíveis, quando presentes, também facilitam a entrada do vírus.',
        ],
      },
      {
        id: 'o-que-nao-transmite',
        heading: 'O que não transmite HIV',
        paragraphs: [
          'Muita gente ainda tem dúvidas sobre o que não oferece risco nenhum. O HIV não sobrevive fora do corpo e não se espalha pelo ar, pela água nem pelo toque. Entender isso ajuda a combater o preconceito: conviver, estudar e trabalhar com quem vive com HIV não oferece risco.',
          'Estas situações não transmitem o HIV:',
        ],
        bullets: [
          'Beijo no rosto ou na boca, abraço e aperto de mão',
          'Suor, lágrima, tosse e espirro',
          'Picada de inseto',
          'Compartilhar talheres, copos, sabonete, toalha ou lençóis',
          'Usar ônibus, piscina ou banheiro',
          'Doar sangue, em serviços que seguem as normas de triagem e testagem',
        ],
      },
      {
        id: 'fatores-que-aumentam-o-risco',
        heading: 'Fatores que aumentam o risco',
        paragraphs: [
          'O risco não está ligado a um tipo de pessoa, e sim a situações e práticas. Qualquer pessoa pode se infectar, e reconhecer as circunstâncias que ampliam a exposição é o primeiro passo para se proteger.',
          'Relações sexuais sem camisinha, sobretudo a relação anal receptiva, estão entre as principais. O compartilhamento de seringas e agulhas também é uma via importante. Ter outra infecção sexualmente transmissível aumenta a vulnerabilidade, porque lesões e inflamações abrem caminho para o vírus.',
          'Transfusão de sangue e transplante de órgãos já foram uma via de transmissão, mas hoje são raros, porque no Brasil todos os doadores passam por testagem. Em profissionais de saúde, acidentes com material biológico pedem atenção especial.',
        ],
      },
      {
        id: 'como-reduzir-o-risco',
        heading: 'Como reduzir o risco',
        paragraphs: [
          'A prevenção do HIV é pensada de forma combinada, ou seja, somando estratégias de acordo com a necessidade de cada pessoa. A camisinha, disponível gratuitamente no SUS, protege do HIV e também de outras infecções sexualmente transmissíveis.',
          'A PrEP, tomada antes do contato por quem tem risco maior, e a PEP, usada em até 72 horas depois de uma exposição, completam o conjunto. A testagem regular permite descobrir a infecção cedo, e o tratamento de quem vive com HIV reduz a transmissão.',
          'Nenhuma estratégia substitui as outras por completo. Combinar camisinha, testagem e profilaxia, conforme a orientação de um serviço de saúde, é o que oferece a proteção mais consistente.',
        ],
      },
      {
        id: 'situacoes-do-dia-a-dia',
        heading: 'Situações do dia a dia',
        paragraphs: [
          'A maior parte das situações de convivência não envolve risco de transmissão. Trabalhar, estudar, dividir a mesma casa, usar o transporte público e compartilhar refeições estão entre os exemplos seguros.',
          'Os fluidos que importam para a transmissão são poucos: sangue, sêmen, secreções vaginais e leite materno. Fora do corpo, o HIV não sobrevive, e é por isso que o contato cotidiano não transmite o vírus.',
          'Reconhecer essas diferenças permite tratar o tema com serenidade. O medo do contato do dia a dia não protege ninguém; ele apenas alimenta o preconceito contra quem vive com HIV.',
        ],
      },
      {
        id: 'o-que-fazer-apos-uma-exposicao',
        heading: 'O que fazer após uma exposição',
        paragraphs: [
          'Depois de uma situação de risco, como sexo sem camisinha ou um acidente com material cortante, existe uma medida de urgência: a PEP, a profilaxia pós-exposição.',
          'A PEP precisa começar o quanto antes, em até 72 horas depois da exposição, e dura 28 dias. Ela está disponível gratuitamente no SUS, em serviços de urgência e em centros de referência.',
          'Uma exposição recente também é um sinal de que a testagem importa. O acompanhamento depois da PEP inclui exames ao longo dos meses seguintes, porque uma infecção recente pode não aparecer de imediato.',
        ],
      },
      {
        id: 'mitos-frequentes',
        heading: 'Mitos frequentes',
        paragraphs: [
          'Algumas ideias equivocadas sobre a transmissão do HIV continuam circulando e atrapalham tanto a prevenção quanto o convívio. Vale conhecer os erros mais comuns para não repeti-los e para ajudar a corrigi-los quando aparecem numa conversa.',
          'O erro mais frequente é imaginar que o HIV se transmite pelo contato do dia a dia. Ele não passa por beijo, suor, tosse, picada de inseto nem por compartilhar talheres, copos ou toalhas. Também não existe um tipo de pessoa imune: o risco está nas situações e nas práticas, e não em quem a pessoa é.',
          'Outra confusão comum é supor que alguém com aparência saudável não tenha o vírus. O HIV pode passar anos sem sintomas, e é justamente por isso que a testagem é o único caminho seguro. Entre as afirmações sem base estão:',
        ],
        bullets: [
          'A ideia de que o HIV se pega pelo beijo, pelo suor ou por dividir talheres',
          'A crença de que apenas alguns grupos correm risco',
          'A suposição de que uma pessoa com aparência saudável não tem o vírus',
          'A noção de que picada de inseto transmite o HIV',
        ],
      },
      {
        id: 'conviver-sem-medo',
        heading: 'Conviver sem medo',
        paragraphs: [
          'Saber o que transmite e o que não transmite tem um efeito prático: acaba com o medo injustificado do convívio. Abraçar, dividir uma refeição, usar o mesmo banheiro ou trabalhar ao lado de alguém que vive com HIV não oferece risco nenhum.',
          'O preconceito ainda é um dos maiores obstáculos no enfrentamento do HIV. Ele afasta as pessoas do teste e do tratamento, e é justamente aí que a infecção avança sem ser percebida.',
          'Falar sobre o tema com informação correta, e não com suposição, protege a saúde de todos e melhora a vida de quem vive com o vírus.',
        ],
        cta: {
          label: 'Veja a página completa sobre HIV e aids',
          href: '/doencas/hiv-aids/',
        },
      },
    ],
    diseaseSlugs: ['hiv-aids'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: [
      'hiv-o-que-fazer-nas-primeiras-72-horas',
      'indetectavel-intransmissivel-o-que-significa',
      'hiv-como-e-quando-fazer-o-teste',
      'hiv-prep-prevencao-antes-da-exposicao',
    ],
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
    publishedAt: '2026-10-20',
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },
  {
    id: 'hiv-como-e-quando-fazer-o-teste',
    slug: 'hiv-como-e-quando-fazer-o-teste',
    title: 'HIV: como e quando fazer o teste',
    excerpt:
      'O teste de HIV é rápido, gratuito e pode ser anônimo. Entenda como ele funciona, o que é a janela imunológica e onde fazer em segurança.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-fazer-o-teste',
        heading: 'Por que fazer o teste',
        paragraphs: [
          'O HIV pode passar anos sem dar sinal. Uma pessoa pode viver com o vírus, sentir-se bem e transmiti-lo sem saber. O teste é a única forma de confirmar a infecção, porque os sintomas não são confiáveis para isso. Nenhum sinal isolado, por si só, permite dizer se alguém tem ou não o HIV.',
          'Descobrir a infecção cedo muda o desfecho. Quanto antes o tratamento começa, melhor a resposta do organismo e menor o impacto na saúde. Um diagnóstico tardio, ao contrário, deixa o sistema imunológico mais vulnerável.',
          'Fazer o teste também protege outras pessoas. Quem conhece a própria situação pode iniciar o tratamento e alcançar a carga viral indetectável, condição em que o HIV não é transmitido por via sexual.',
        ],
      },
      {
        id: 'como-funciona-o-teste-rapido',
        heading: 'Como funciona o teste rápido',
        paragraphs: [
          'O teste rápido de HIV usa uma gota de sangue da ponta do dedo e dá o resultado em cerca de 30 minutos. Ele é simples, não exige laboratório e está disponível em unidades de saúde e nos Centros de Testagem e Aconselhamento, os CTA.',
          'O resultado é sigiloso e o atendimento pode ser anônimo: não é preciso se identificar para ser testado. Durante a consulta, a equipe também orienta sobre prevenção e, quando indicado, oferece testes para outras infecções sexualmente transmissíveis.',
          'Um resultado reagente no teste rápido não fecha o diagnóstico sozinho. Nesse caso, o serviço pede uma confirmação por exame laboratorial, e só depois inicia o acompanhamento do tratamento.',
        ],
      },
      {
        id: 'janela-imunologica',
        heading: 'A janela imunológica',
        paragraphs: [
          'Os testes buscam anticorpos que o corpo produz contra o HIV. O organismo leva um tempo para formá-los em quantidade detectável, em média de 30 a 60 dias. Esse intervalo é a janela imunológica.',
          'Quem faz o teste dentro desse período pode receber um resultado negativo mesmo estando infectado. Por isso, depois de uma situação de risco, o ideal é testar e repetir o exame cerca de 30 dias depois, para confirmar o resultado.',
          'Se a exposição foi muito recente, o serviço pode indicar a PEP, que deve começar em até 72 horas. A janela imunológica explica por que uma única testagem logo após o contato não é suficiente para afastar a infecção.',
        ],
      },
      {
        id: 'onde-fazer-o-teste',
        heading: 'Onde fazer o teste',
        paragraphs: [
          'No Brasil, o teste de HIV é gratuito e oferecido em unidades básicas de saúde, nos Centros de Testagem e Aconselhamento e em serviços de urgência. O acesso não depende de encaminhamento nem de sintomas.',
          'Também existe o autoteste, que a própria pessoa faz com fluido oral ou sangue, no momento e no lugar que preferir. Ele é uma alternativa para quem tem dificuldade de procurar um serviço, mas a orientação é buscar ajuda profissional se o resultado for reagente.',
          'Em qualquer desses caminhos, o sigilo é garantido. Ninguém precisa explicar por que quer testar, e o atendimento existe para acolher, não para julgar.',
        ],
      },
      {
        id: 'quem-deve-fazer-o-teste',
        heading: 'Quem deve fazer o teste',
        paragraphs: [
          'A recomendação é que o teste de HIV faça parte dos cuidados de rotina. Não é preciso ter sintomas nem pertencer a um grupo específico: qualquer pessoa que já teve relações sexuais sem camisinha deve considerar testar-se.',
          'Alguns contextos tornam a testagem mais urgente, como uma exposição recente, o início de um novo relacionamento, a gestação ou a presença de outra infecção sexualmente transmissível.',
          'Repetir o teste de tempos em tempos é uma forma de cuidado, sobretudo para quem tem exposição frequente. O teste não é um julgamento sobre a conduta de ninguém: é uma ferramenta de saúde.',
        ],
      },
      {
        id: 'duvidas-comuns',
        heading: 'Dúvidas comuns',
        paragraphs: [
          'Uma dúvida frequente é se o teste rápido dispensa o laboratório. Ele é o primeiro passo; quando o resultado é reagente, um exame laboratorial confirma o diagnóstico antes do início do acompanhamento.',
          'Outra pergunta é sobre o uso da camisinha: ela continua necessária, porque protege também de outras infecções sexualmente transmissíveis. O teste e a camisinha se somam, um não substitui o outro.',
          'Também é comum querer saber se o resultado negativo é definitivo. Se houve exposição recente, é preciso repetir o exame depois da janela imunológica, que costuma durar de 30 a 60 dias.',
        ],
      },
      {
        id: 'teste-na-gestacao',
        heading: 'O teste na gestação',
        paragraphs: [
          'A testagem para o HIV faz parte do acompanhamento do pré-natal no Brasil. O teste é oferecido durante a gestação e, quando necessário, também no momento do parto, de forma gratuita pelo SUS. Ele é uma das medidas de rotina do pré-natal, ao lado de outros exames oferecidos à pessoa gestante, e o resultado é confidencial.',
          'Descobrir a infecção na gestação permite iniciar o tratamento e adotar medidas que reduzem muito a chance de transmissão para o bebê. Com o tratamento e o acompanhamento adequado, o risco de transmissão da mãe para a criança se torna muito baixo, e o bebê tem grandes chances de nascer sem o vírus.',
          'O teste na gestação não é uma avaliação sobre a conduta da mãe nem uma suspeita sobre a sua vida. É um cuidado de rotina, pensado para proteger tanto a pessoa gestante quanto a criança, e faz parte do conjunto de exames oferecidos no pré-natal em todo o país.',
        ],
      },
      {
        id: 'depois-do-resultado',
        heading: 'Depois do resultado',
        paragraphs: [
          'Um resultado negativo indica que a infecção não foi detectada no momento do exame. Se houve exposição recente, vale repetir o teste depois do período da janela imunológica e seguir com as formas de prevenção que fizerem sentido.',
          'Um resultado reagente encaminha para o início do tratamento, que no Brasil é gratuito e oferecido pelo SUS. O tratamento impede a multiplicação do vírus, ajuda a recuperar a imunidade e permite levar uma vida com boa qualidade.',
          'Em todos os casos, saber a própria situação é melhor do que conviver com a dúvida. O conhecimento abre caminho para decisões de saúde e para a proteção de quem está por perto.',
        ],
        cta: {
          label: 'Veja a página completa sobre HIV e aids',
          href: '/doencas/hiv-aids/',
        },
      },
    ],
    diseaseSlugs: ['hiv-aids'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: [
      'hiv-o-que-fazer-nas-primeiras-72-horas',
      'indetectavel-intransmissivel-o-que-significa',
      'hiv-como-se-transmite-e-o-que-nao-transmite',
      'hiv-prep-prevencao-antes-da-exposicao',
    ],
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
    publishedAt: '2026-10-20',
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },
  {
    id: 'hiv-prep-prevencao-antes-da-exposicao',
    slug: 'hiv-prep-prevencao-antes-da-exposicao',
    title: 'HIV: PrEP, a prevenção antes da exposição',
    excerpt:
      'A PrEP é um medicamento tomado antes do contato para reduzir o risco de infecção pelo HIV. Entenda para quem ela é indicada e como é usada.',
    category: 'Prevenção',
    categorySlug: 'prevencao',
    body: [
      {
        id: 'o-que-e-a-prep',
        heading: 'O que é a PrEP',
        paragraphs: [
          'A PrEP, ou profilaxia pré-exposição, é o uso de medicamentos antirretrovirais por pessoas que ainda não têm o HIV, para reduzir o risco de infecção antes de um possível contato com o vírus. Ela é pensada justamente para quem tem risco maior de exposição.',
          'Ela funciona como uma proteção contínua, e não como uma medida de emergência. Em vez de agir depois de uma exposição, como a PEP, a PrEP mantém uma barreira no organismo para que o vírus não consiga se estabelecer caso entre em contato.',
          'No Brasil, a PrEP é oferecida gratuitamente pelo SUS. O acompanhamento inclui consultas periódicas e testagens, para confirmar que a pessoa continua sem o HIV e que o medicamento está sendo bem tolerado.',
        ],
      },
      {
        id: 'para-quem-e-indicada',
        heading: 'Para quem é indicada',
        paragraphs: [
          'A PrEP é destinada a pessoas com risco maior de exposição ao HIV. Isso não depende de um tipo de pessoa, e sim de situações e práticas que ampliam a chance de contato com o vírus.',
          'Entre os casos em que a PrEP costuma ser considerada estão pessoas com parceiro que vive com HIV e não está em tratamento, quem tem outras infecções sexualmente transmissíveis com frequência e quem usa a camisinha de forma irregular.',
          'A indicação é feita após conversa com a equipe de saúde, que avalia o contexto de cada pessoa. A decisão é sempre individual e sigilosa.',
        ],
      },
      {
        id: 'como-a-prep-e-usada',
        heading: 'Como a PrEP é usada',
        paragraphs: [
          'Existem duas formas principais de uso. Na modalidade diária, o medicamento é tomado todos os dias, o que mantém a proteção de forma contínua para quem tem exposição frequente ao risco. Nesse formato, a proteção depende de não haver falhas na rotina de tomar o remédio.',
          'Na modalidade sob demanda, o medicamento é usado em torno das relações sexuais, seguindo uma orientação específica de horários. Essa forma se aplica a quem tem exposições menos frequentes e consegue seguir o esquema com precisão.',
          'Qual das duas é mais adequada depende da rotina e do padrão de exposição, e a escolha é feita junto com o serviço de saúde. Em qualquer caso, a adesão ao esquema é o que garante a proteção.',
        ],
      },
      {
        id: 'prep-nao-substitui-a-camisinha',
        heading: 'A PrEP não substitui a camisinha',
        paragraphs: [
          'A PrEP protege contra o HIV, mas não contra outras infecções sexualmente transmissíveis. A camisinha continua sendo necessária para reduzir o risco dessas infecções e também como uma proteção adicional contra o HIV.',
          'Usar as duas estratégias juntas é o que oferece a proteção mais completa. A PrEP não é, portanto, um substituto da camisinha, e sim mais uma peça no conjunto de cuidados.',
          'É preciso continuar com as testagens periódicas mesmo usando PrEP. Elas servem para detectar cedo qualquer infecção, incluindo o próprio HIV, e para ajustar o acompanhamento.',
        ],
      },
      {
        id: 'efeitos-e-seguranca',
        heading: 'Efeitos e acompanhamento',
        paragraphs: [
          'A PrEP costuma ser bem tolerada. Como qualquer medicamento, ela pode causar efeitos passageiros nas primeiras semanas, e a equipe de saúde acompanha como cada pessoa responde ao esquema.',
          'A segurança do uso depende do acompanhamento: testagens para o HIV e para outras infecções verificam se o medicamento continua indicado e se nada mudou desde a última consulta.',
          'Qualquer dúvida ou desconforto deve ser levado à equipe, que pode orientar e ajustar o esquema. Interromper a PrEP por conta própria reduz a proteção e deixa a pessoa sem cobertura justamente quando precisa dela.',
        ],
      },
      {
        id: 'prep-e-pep',
        heading: 'PrEP e PEP se completam',
        paragraphs: [
          'PrEP e PEP são duas formas de profilaxia, mas atuam em momentos distintos. A PrEP é tomada antes do contato, de forma contínua ou sob demanda; a PEP é usada depois de uma exposição concreta, por tempo limitado.',
          'Uma não substitui a outra. Quem usa PrEP não deixa de precisar de PEP se ocorrer uma exposição fora da proteção ou se o esquema não estiver sendo seguido corretamente.',
          'Juntas, as duas completam o conjunto de prevenção, ao lado da camisinha e da testagem. O serviço de saúde ajuda a definir qual estratégia, ou qual combinação, faz mais sentido para cada pessoa.',
        ],
      },
      {
        id: 'duvidas-comuns',
        heading: 'Dúvidas comuns',
        paragraphs: [
          'Uma dúvida comum é se a PrEP pode ser usada por qualquer pessoa. Ela é indicada para quem tem risco maior de exposição ao HIV, e a avaliação é feita caso a caso, junto com a equipe de saúde, de forma sigilosa e sem julgamentos. Não existe um perfil único de quem usa PrEP: o que importa é o contexto real de exposição de cada pessoa.',
          'Outra pergunta frequente é se a PrEP causa efeitos colaterais. Ela costuma ser bem tolerada, e a maioria dos desconfortos, quando aparece, é passageira e melhora nas primeiras semanas. Ainda assim, qualquer sintoma deve ser comunicado à equipe de saúde, que pode orientar e ajustar o esquema. Efeitos graves são raros, e o acompanhamento existe justamente para identificá-los cedo.',
          'Também é frequente querer saber se a PrEP substitui a camisinha ou a testagem. Ela não substitui: soma-se às outras medidas de prevenção. Cada estratégia cobre partes diferentes do cuidado, e é o conjunto delas que oferece a proteção mais consistente ao longo do tempo.',
        ],
      },
      {
        id: 'onde-consultar',
        heading: 'Onde consultar e acompanhar',
        paragraphs: [
          'A PrEP está disponível em serviços de saúde do SUS que fazem esse acompanhamento. A avaliação inicial verifica se a pessoa não tem o HIV, analisa o contexto de risco e explica como o medicamento deve ser usado.',
          'O acompanhamento é feito com consultas regulares, testagens para o HIV e para outras infecções e, quando necessário, ajustes no esquema. Esse contato frequente com a equipe é parte do funcionamento da PrEP.',
          'Para quem não se encaixa no perfil da PrEP, ou prefere outras formas de proteção, o serviço de saúde orienta sobre camisinha, testagem regular e, quando for o caso, a PEP, que é usada depois de uma exposição.',
        ],
        cta: {
          label: 'Veja a página completa sobre HIV e aids',
          href: '/doencas/hiv-aids/',
        },
      },
    ],
    diseaseSlugs: ['hiv-aids'],
    topicSlugs: ['prevencao', 'doencas-infecciosas'],
    relatedArticleSlugs: [
      'hiv-o-que-fazer-nas-primeiras-72-horas',
      'indetectavel-intransmissivel-o-que-significa',
      'hiv-como-se-transmite-e-o-que-nao-transmite',
      'hiv-como-e-quando-fazer-o-teste',
    ],
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
    publishedAt: '2026-10-20',
    updatedAt: '2026-10-20',
    isPlaceholder: true,
  },

  {
    id: 'epilepsia-crise-o-que-fazer-e-quando-chamar-o-samu',
    slug: 'epilepsia-crise-o-que-fazer-e-quando-chamar-o-samu',
    metaTitle: 'Crise convulsiva: o que fazer',
    title: 'Crise convulsiva na epilepsia: o que fazer e quando chamar o SAMU 192',
    excerpt:
      'A maioria das crises convulsivas termina sozinha em poucos minutos. Saiba o que fazer nos primeiros segundos, o que nunca tentar e quando ligar para o 192.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'reconheca-uma-crise',
        heading: 'Reconhecer a crise é o primeiro passo',
        paragraphs: [
          'A maior dificuldade diante de uma crise convulsiva é reconhecê-la. Nem toda crise se parece com o quadro completo de corpo rígido e contrações. A pessoa pode parar no meio de uma frase, ficar com o olhar fixo por alguns segundos, repetir movimentos de mastigação ou de esfregar as mãos, ou relatar formigamento e gosto estranho antes de cair. Na crise tônico-clônica, o corpo fica rígido, surgem contrações involuntárias, a respiração fica irregular e pode haver mordida da língua ou perda de urina.',
          'O episódio costuma durar de um a três minutos e termina sozinho. Depois vem o período chamado de estado pós-ictal: confusão, sono profundo, dor de cabeça e cansaço muscular. A pessoa não se lembra do que aconteceu e pode ficar desorientada por minutos ou horas. Esse detalhe ajuda a separar crise de desmaio, porque no desmaio a recuperação é rápida e limpa, enquanto na crise a confusão se prolonga. Cronometrar o episódio com o celular é uma das informações mais úteis para o médico.',
        ],
      },
      {
        id: 'primeiros-socorros',
        heading: 'O que fazer nos primeiros segundos',
        paragraphs: [
          'Os primeiros socorros servem para proteger a pessoa enquanto a descarga elétrica termina. Mantenha a calma, olhe o relógio e registre o horário de início. Afaste objetos duros e pontiaguentes do caminho, peça para os curiosos recuarem e observe o que acontece, porque quem teve a crise não vai lembrar. Se a pessoa estiver sentada, proteja o corpo para impedir a queda; se estiver em pé, acompanhe-a até o chão com cuidado.',
          'Com a pessoa no chão, coloque algo macio sob a cabeça, como um travesseiro, a bolsa ou uma dobra de roupa. Afrouxe o que aperta o pescoço, como colarinho, cinto e lenço. Vire-a de lado, posição que facilita a respiração e impede que ela aspire saliva ou vômito, o que pode causar pneumonia por aspiração. Fique ao lado até que a pessoa acorde, volte a se orientar e consiga se mover sozinha.',
        ],
        bullets: [
          'Anote o horário em que a crise começou',
          'Proteja a cabeça com travesseiro, bolsa ou tecido dobrado',
          'Afrouxe colarinho, cinto e roupa apertada no pescoço',
          'Vire a pessoa de lado para facilitar a respiração',
          'Fique ao lado dela até o retorno completo da consciência',
        ],
      },
      {
        id: 'o-que-nao-fazer',
        heading: 'O que nunca tentar fazer',
        paragraphs: [
          'O erro mais antigo e mais perigoso é tentar segurar a língua. Colocar uma colher, um cabo ou o dedo na boca de quem está em crise prejudica em vez de ajudar: os dentes podem se quebrar, a pessoa pode morder quem tenta ajudar, por causa da contração intensa da mandíbula, e fragmentos podem cair nas vias aéreas. Ninguém engole a língua durante uma crise, e mesmo assim esse mito continua sendo a principal fonte de lesão em quem presta socorro.',
          'Outro erro é imobilizar o corpo ou tentar interromper os movimentos com força, o que pode causar fraturas e lesões musculares. Não ofereça água, comida ou comprimidos antes do retorno completo da consciência, porque a pessoa pode aspirar. Evite jogar água, bater no rosto, usar cheiros fortes ou fazer respiração boca a boca enquanto a crise estiver acontecendo, já que ela costuma se resolver sozinha em poucos minutos.',
        ],
        bullets: [
          'Não coloque nenhum objeto na boca da pessoa',
          'Não segure braços e pernas para parar os movimentos',
          'Não ofereça água, comida ou comprimido durante a crise',
          'Não deixe a pessoa sozinha antes de ela estar desperta',
        ],
      },
      {
        id: 'quando-chamar-o-samu',
        heading: 'Quando ligar para o SAMU 192',
        paragraphs: [
          'Ligue 192 quando a crise durar mais de cinco minutos sem parar, ou quando uma crise vier logo depois da outra e a pessoa não recuperar a consciência entre elas. Esse quadro é o estado de mal epiléptico, a forma mais grave dos transtornos convulsivos, e cada minuto conta: sem tratamento rápido, coração e cérebro podem sofrer lesão permanente. O serviço é gratuito, funciona 24 horas por dia em todos os dias da semana, e crises convulsivas estão entre as urgências atendidas.',
          'Também pedem o 192 ou um pronto atendimento a primeira crise da vida, uma crise acompanhada de traumatismo craniano, de dificuldade para respirar ou de lábios arroxeados, crises em gestante e em pessoa com diabetes ou doença cardíaca, e qualquer crise que termine sem retorno da consciência. A ligação é gratuita de telefone fixo e celular. O médico regulador orienta os primeiros socorros por telefone enquanto a ambulância mais próxima é acionada.',
        ],
        bullets: [
          'Crise com mais de cinco minutos de duração',
          'Crises seguidas sem volta da consciência entre elas',
          'Dificuldade para respirar ou lábios arroxeados',
          'Primeira crise convulsiva, sem diagnóstico de epilepsia',
          'Crise com traumatismo craniano ou sangramento',
          'Crise em gestante ou pessoa com doença cardíaca',
        ],
      },
      {
        id: 'depois-da-crise',
        heading: 'Depois que a crise passa',
        paragraphs: [
          'No final do episódio, a pessoa precisa de recuperação, e não de explicações. Leve-a para um lugar tranquilo, fale pouco e com voz calma e evite que seja cercada. A confusão faz parte do quadro e costuma melhorar sozinha. Não a force a levantar, a andar ou a se alimentar. Se ela despertar agitada, mantenha as mãos longe do rosto e apenas impeça que caia ou se machuque até estar orientada.',
          'Uma crise já conhecida e diagnosticada também merece registro. Anote horário, duração, o que a pessoa fez e o que pode ter antecipado o episódio, como uma noite mal dormida, o consumo de álcool ou uma dose esquecida. Esse registro orienta a equipe de saúde a ajustar o tratamento. Crise nova, diferente do padrão habitual ou sem explicação deve ser comunicada ao serviço que acompanha o caso, inclusive por telefone e antes da próxima consulta.',
        ],
      },
      {
        id: 'quem-convive-com-a-pessoa',
        heading: 'Quem convive com a pessoa precisa estar treinado',
        paragraphs: [
          'Família, colegas de trabalho e de escola devem saber o que fazer. Bastam alguns minutos de conversa para resolver a maior parte dos erros: nada na boca, pessoa virada de lado, tempo cronometrado e clareza sobre quando ligar para o 192. Quem convive diariamente também aprende a reconhecer os avisos que antecipam a crise e consegue afastar a pessoa do fogão, da escada ou da beira da piscina antes que ela perca a consciência.',
          'Combine com a equipe de saúde um plano de ação por escrito, trazendo o diagnóstico, o nome e os horários dos medicamentos, o que fazer em cada situação e o momento de acionar a emergência. Esse plano pode ficar na carteira, na mochila ou no celular e ajuda qualquer pessoa a agir corretamente. Uma pulseira ou um cartão de identificação com o tratamento também facilita o atendimento quando a pessoa está sozinha.',
        ],
        cta: {
          label: 'Veja a página sobre epilepsia',
          href: '/doencas/epilepsia/',
        },
      },
    ],
    diseaseSlugs: ['epilepsia'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['epilepsia-tratamento-e-dia-a-dia'],
    references: [
      {
        label: 'Transtornos convulsivos, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-cerebrais-da-medula-espinal-e-dos-nervos/transtornos-convulsivos/transtornos-convulsivos',
        publisher: 'Manual MSD',
      },
      {
        label: 'SAMU 192',
        url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Epilepsia: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/epilepsy',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'epilepsia-tratamento-e-dia-a-dia',
    slug: 'epilepsia-tratamento-e-dia-a-dia',
    metaTitle: 'Epilepsia: tratamento e dia a dia',
    title: 'Epilepsia: como o tratamento controla as crises e muda o dia a dia',
    excerpt:
      'Os medicamentos antiepilépticos controlam as crises na maioria das pessoas. Veja como o tratamento é ajustado, o que observar no dia a dia e onde buscar apoio no SUS.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'como-os-medicamentos-agem',
        heading: 'Como os medicamentos controlam as crises',
        paragraphs: [
          'O tratamento da epilepsia é feito, na base, com medicamentos antiepilépticos, também chamados de anticonvulsivantes. Eles não curam a doença, mas reduzem a chance de uma nova crise ao estabilizar a atividade elétrica do cérebro. Em geral são introduzidos quando a pessoa teve mais de uma crise e nenhuma causa reversível foi encontrada, como baixa de glicose no sangue. Uma crise isolada e provocada normalmente não exige tratamento contínuo.',
          'Existem muitos medicamentos diferentes, e a escolha depende do tipo de crise, da idade e de outras doenças. Para a maioria das pessoas, tomar um único medicamento, normalmente o primeiro ou o segundo tentado, já é suficiente. Encontrar a opção certa pode levar alguns meses, e algumas pessoas precisam combinar mais de uma substância, o que aumenta a atenção aos efeitos colaterais. A maior parte deles é tomada por via oral, e o Sistema Único de Saúde oferece antiepilépticos: o Ministério da Saúde incorporou, por exemplo, o levetiracetam ao SUS para quem não responde a um único medicamento, inclusive crianças a partir de 6 anos.',
        ],
      },
      {
        id: 'resultados-esperados',
        heading: 'O que se pode esperar do tratamento',
        paragraphs: [
          'A meta é alcançável. Segundo a Organização Mundial da Saúde, até 70% das pessoas com epilepsia ficam livres de crises com o uso adequado dos medicamentos. O Manual MSD apresenta números parecidos: controle completo em cerca de 30% das pessoas, redução importante da frequência em outros 30% e, entre quem responde ao tratamento, cerca de 60% podendo deixar a medicação com o tempo sem que as crises voltem.',
          'Parar o medicamento, porém, não é decisão de quem usa. A OMS informa que a suspensão pode ser considerada depois de dois anos sem crises, levando em conta o tipo de epilepsia e o resultado do eletroencefalograma, já que causa conhecida e EEG alterado são os preditores mais consistentes de reincidência. A redução é sempre gradual e orientada pelo médico, e interromper o tratamento por conta própria está entre as causas mais comuns de crise prolongada e de estado de mal epiléptico.',
        ],
        bullets: [
          'Crises controladas em boa parte das pessoas que seguem o tratamento',
          'Suspensão possível apenas com orientação médica',
          'Interrupção repentina aumenta o risco de crise grave',
        ],
      },
      {
        id: 'como-tomar-do-modo-certo',
        heading: 'Tomar do jeito certo faz diferença',
        paragraphs: [
          'Os antiepilépticos funcionam melhor quando a concentração no sangue fica estável, e por isso o horário importa. Tomar a dose exata, nos horários combinados e todos os dias, mesmo quando nada acontece, é o que sustenta o controle. Faltas repetidas são uma das principais razões de reincidência. Um alarme no celular, a caixa de comprimidos organizada por dia da semana e o hábito de repor o medicamento antes que ele acabe ajudam a manter a rotina.',
          'Quem usa antiepiléptico deve manter acompanhamento regular, para eventual ajuste de dose, e convém usar uma pulseira ou cartão com o nome do diagnóstico e do medicamento, orientação do Manual MSD. Informe o médico sobre todos os remédios que você usa, inclusive os vendidos sem receita, vitaminas e chás, porque várias substâncias interferem na ação dos antiepilépticos, e vice-versa. Medicamentos como carbamazepina, fenobarbital e fenitoína podem reduzir a eficácia de anticoncepcionais e de outros tratamentos.',
        ],
      },
      {
        id: 'efeitos-e-acompanhamento',
        heading: 'Efeitos colaterais e exames de controle',
        paragraphs: [
          'Mesmo eficazes, os antiepilépticos podem causar reações. Sonolência é comum, e alguns medicamentos deixam crianças mais agitadas. Parte deles exige exames de sangue periódicos para verificar fígado, rins e contagem de células do sangue. Alguns podem reduzir a vitamina D, o que aumenta a atenção à saúde dos ossos. Nenhuma dessas informações justifica abandonar o tratamento por conta própria: na maioria dos casos, o ajuste de dose ou a troca de medicamento resolve.',
          'Relate o que aparece. Tontura persistente, manchas na pele, mudanças de humor, esquecimento, visão dupla e queda de rendimento na escola ou no trabalho são motivos de conversa com a equipe, e não de interrupção. Alguns medicamentos interagem entre si e com outros tratamentos, o que torna essencial dizer ao médico tudo o que você usa. O seguimento também serve para verificar se a crise voltou a aparecer em forma leve, como ausências breves que passam despercebidas.',
        ],
        bullets: [
          'Exames de sangue periódicos conforme o medicamento',
          'Sono, humor, memória e tontura merecem registro na consulta',
          'Ajuste de dose ou troca resolve a maioria das reações',
        ],
      },
      {
        id: 'gatilhos-do-dia',
        heading: 'Gatilhos que valem evitar',
        paragraphs: [
          'Alguns fatores aumentam a chance de crise em quem já tem epilepsia, e evitá-los faz parte do tratamento. A privação de sono é o mais frequente deles: dormir pouco altera o limiar convulsivo e explica por que muitas crises aparecem depois de madrugadas e plantões noturnos. O álcool também interfere, e a interrupção brusca do consumo é causa reconhecida de crise, assim como o uso de cocaína e outros estimulantes.',
          'Estresse intenso, febre alta e saltos grandes de rotina ajudam a disparar episódios em pessoas sensíveis. Algumas sentem avisos antes da crise, como sensações estranhas, medo súbito ou alterações de visão e de gosto, e esse intervalo curto permite sentar, afastar-se do fogão, da escada ou da água. Anotar o que antecedeu cada crise ajuda a identificar o padrão pessoal, que raramente é o mesmo de outra pessoa.',
        ],
        bullets: [
          'Dormir menos do que o habitual',
          'Bebida alcoólica e suspensão brusca do consumo',
          'Cocaína e outras drogas estimulantes',
          'Febre alta e infecções',
          'Turnos noturnos e viagens que mudam o sono',
        ],
      },
      {
        id: 'trabalho-esporte-e-planos',
        heading: 'Trabalho, esporte, direção e projetos de vida',
        paragraphs: [
          'Com as crises controladas, a vida segue. Trabalho e estudo não precisam ser interrompidos, mas tarefas em altura, próximo a máquinas sem proteção ou dentro da água pedem avaliação enquanto houver crises. A OMS registra que barreiras reais existem, incluindo restrições legais à carteira de motorista em muitos países e dificuldade de acesso a certas ocupações. No Brasil, a volta a dirigir deve ser conversada com o médico que acompanha o caso, que considera o tempo sem crises e as atividades de risco.',
          'Esporte é permitido e recomendável, com ajuste de modalidade: natação apenas com supervisão de salva-vidas, ciclismo com capacete, escalada com corda e acompanhamento. Para quem planeja uma gestação, a conversa com a equipe deve acontecer antes da concepção, porque alguns antiepilépticos aumentam o risco de malformações e interferem em contraceptivos, e o ajuste do esquema precisa ser feito com tempo. Com medicamentos, sono organizado e acompanhamento, a epilepsia deixa de definir a agenda da pessoa.',
        ],
        cta: {
          label: 'Veja a página sobre epilepsia',
          href: '/doencas/epilepsia/',
        },
      },
    ],
    diseaseSlugs: ['epilepsia'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['epilepsia-crise-o-que-fazer-e-quando-chamar-o-samu'],
    references: [
      {
        label: 'Transtornos convulsivos, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-cerebrais-da-medula-espinal-e-dos-nervos/transtornos-convulsivos/transtornos-convulsivos',
        publisher: 'Manual MSD',
      },
      {
        label: 'Epilepsia: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/epilepsy',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'SUS oferece mais um medicamento para o tratamento de epilepsia',
        url: 'https://www.gov.br/conitec/pt-br/assuntos/noticias/2017/dezembro/sus-oferece-mais-um-medicamento-para-o-tratamento-de-epilepsia',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'glaucoma-como-descobrir-cedo',
    slug: 'glaucoma-como-descobrir-cedo',
    metaTitle: 'Glaucoma: como descobrir cedo',
    title: 'Glaucoma: como descobrir cedo antes que a visão seja perdida',
    excerpt:
      'O glaucoma tira a visão periférica sem dor e sem aviso. Veja quem precisa se examinar, quais exames detectam a doença e com que frequência repeti-los.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'uma-doenca-silenciosa',
        heading: 'Por que o glaucoma passa despercebido',
        paragraphs: [
          'O glaucoma é chamado de silencioso por um motivo concreto: a forma mais comum, o glaucoma de ângulo aberto, não dói, não deixa o olho vermelho e não embaça a visão nos primeiros anos. Ele vai lesionando o nervo óptico, a estrutura que conduz as imagens do olho ao cérebro, e o primeiro prejuízo aparece na visão periférica, aquela área que usamos para perceber o que está pelos cantos, sem olhar diretamente.',
          'O cérebro ainda compensa essa perda por um tempo, e a visão central, que é a que testamos na consulta de rotina, costuma ser a última a ser afetada. Por isso muita pessoa mantém a sensação de enxergar bem até um estágio avançado. Segundo o Manual MSD, apenas metade das pessoas que têm glaucoma sabe que tem a doença, e a perda de visão, quando já consolidada, não volta com nenhum tratamento. A Organização Mundial da Saúde estima que pelo menos 2,2 bilhões de pessoas tenham deficiência visual de perto ou de longe no mundo, e lista o glaucoma entre as causas desse quadro, ao lado da catarata e dos erros refrativos não corrigidos.',
        ],
      },
      {
        id: 'quem-precisa-se-examinar',
        heading: 'Quem faz parte do grupo de risco',
        paragraphs: [
          'O exame que procura glaucoma não serve para todo mundo na mesma intensidade, porque alguns grupos têm probabilidade claramente maior. A idade acima dos 40 anos é o fator mais citado, e a frequência aumenta muito depois dos 60: o Manual MSD estima que o glaucoma seja seis vezes mais comum nessa faixa. Ter pai, mãe ou irmão com a doença também muda a classificação de risco.',
          'Completam a lista a miopia alta, associada ao glaucoma de ângulo aberto, e a hipermetropia alta, associada ao ângulo fechado; o uso prolongado de corticoide em qualquer forma, inclusive colírio e pomada; histórico de traumatismo ou cirurgia nos olhos; e pressão ocular já medida acima de 21 mmHg em exame anterior. No Brasil, dados da Conitec citados pelo Ministério da Saúde indicam que o glaucoma acomete até 3% da população acima de 40 anos, o que ajuda a entender por que a faixa etária aparece em primeiro lugar em qualquer orientação de rastreamento.',
        ],
        bullets: [
          'Ter mais de 40 anos de idade',
          'Parente de primeiro grau com glaucoma',
          'Miopia alta ou hipermetropia alta',
          'Usar corticoide por longos períodos',
          'Já ter tido lesão ou cirurgia nos olhos',
        ],
      },
      {
        id: 'medir-a-pressao-nao-basta',
        heading: 'Por que medir a pressão do olho não basta',
        paragraphs: [
          'A medida da pressão intraocular é o ponto de partida, mas sozinha ela não confirma nem descarta nada. As leituras normais variam, em geral, entre 11 e 21 mmHg, e valores acima de 21 mmHg são considerados altos. O problema é que parte das pessoas com glaucoma tem pressão dentro da faixa média, existe a forma chamada de pressão normal, e nem toda pressão alta significa lesão do nervo óptico.',
          'É por essa razão que a avaliação completa combina vários elementos: inspeção do nervo óptico, teste do campo visual e, quando disponível, a tomografia de coerência óptica, que mede a espessura das fibras do nervo. Um único exame de triagem com pressão alterada também não deve assustar: o resultado precisa ser confirmado e interpretado junto com a avaliação do nervo e do campo visual, que mostram se já existe dano.',
        ],
      },
      {
        id: 'os-exames-do-diagnostico',
        heading: 'Os exames que compõem o diagnóstico',
        paragraphs: [
          'A tonometria mede a pressão intraocular e é indolor: o aparelho encosta levemente na superfície do olho, geralmente com uso de colírio anestésico. O exame com oftalmoscópio permite ao médico observar a aparência do nervo óptico no fundo do olho, e alterações nesse disco são sinal de lesão. O teste de campo visual é feito em uma máquina que verifica a capacidade de enxergar pequenos pontos de luz em diversas áreas, e é o exame que flagra os pontos cegos que a pessoa ainda não percebeu.',
          'A gonioscopia, feita com lentes especiais, mostra se o ângulo entre a íris e a córnea está aberto ou fechado, informação que define o tipo de glaucoma e muda a conduta. A paquimetria mede a espessura da córnea, porque córnea fina aumenta a probabilidade de glaucoma e também distorce a leitura da pressão. Guardar os laudos dos exames facilita a comparação nas consultas seguintes, já que o que importa é a evolução ao longo dos anos.',
        ],
        bullets: [
          'Tonometria: medida da pressão intraocular',
          'Oftalmoscopia: observação do nervo óptico',
          'Campimetria: teste da visão periférica',
          'Tomografia óptica: espessura das fibras',
          'Gonioscopia: avaliação do ângulo de drenagem',
          'Paquimetria: medida da espessura da córnea',
        ],
      },
      {
        id: 'com-que-frequencia',
        heading: 'Com que frequência repetir o exame',
        paragraphs: [
          'Para quem está no grupo de alto risco, o Manual MSD recomenda exame oftalmológico completo a cada um ou dois anos, incluindo a medida da pressão ocular e o teste da visão periférica. Esse intervalo não é arbitrário: como a lesão avança devagar, uma janela de um a dois anos é suficiente para notar mudança no campo visual ou no nervo óptico antes que ela atrapalhe a rotina.',
          'Quem já recebeu o diagnóstico tem rotina diferente, definida pelo oftalmologista conforme o tipo e a gravidade, mas quase sempre envolve consultas mais próximas no início, repetição do campo visual para comparar e aferição da pressão em cada visita. Sinais que encurtam a espera são outro assunto: dor intensa em um olho com vermelhidão, visão embaçada súbita, halos coloridos ao redor das luzes e perda rápida de visão pedem atendimento imediato, porque podem indicar um ângulo fechado agudo.',
        ],
      },
      {
        id: 'onde-buscar-atendimento',
        heading: 'Onde buscar o exame na rede pública',
        paragraphs: [
          'Na rede pública brasileira, o atendimento começa na unidade básica de saúde, que organiza o encaminhamento para avaliação oftalmológica. Levar informações sobre casos de glaucoma na família, o uso de corticoide e queixas como tropeçar em degraus ou não enxergar pelos cantos ajuda a equipe a priorizar o caso. Exames de triagem isolados, como a medida de pressão ocular feita em ação educativa, não substituem essa avaliação completa.',
          'O acompanhamento importa tanto quanto o diagnóstico: o Ministério da Saúde informa que o tratamento inicial do glaucoma na rede pública é orientado pelo Protocolo Clínico e Diretrizes Terapêuticas da doença, com colírios para reduzir a pressão intraocular, e que laser e cirurgia entram quando os medicamentos não alcançam o efeito esperado. Descobrir cedo significa, nesse contexto, começar o tratamento antes da perda de visão e manter as consultas em dia depois disso.',
        ],
        cta: {
          label: 'Veja a página sobre glaucoma',
          href: '/doencas/glaucoma/',
        },
      },
    ],
    diseaseSlugs: ['glaucoma'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['glaucoma-tratamento-e-colirios'],
    references: [
      {
        label: 'Glaucoma, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-oftalmol%C3%B3gicos/glaucoma/glaucoma',
        publisher: 'Manual MSD',
      },
      {
        label: 'SUS vai oferecer cirurgia que trata glaucoma e catarata ao mesmo tempo',
        url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/sus-vai-oferecer-cirurgia-que-trata-glaucoma-e-catarata-ao-mesmo-tempo',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Cegueira e deficiência visual: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'glaucoma-tratamento-e-colirios',
    slug: 'glaucoma-tratamento-e-colirios',
    metaTitle: 'Glaucoma: tratamento e colírios',
    title: 'Glaucoma: como colírios, laser e cirurgia controlam a pressão do olho',
    excerpt:
      'O tratamento do glaucoma é contínuo e começa com colírios. Entenda como cada classe funciona, como aplicar direito e quando laser ou cirurgia entram no plano.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'objetivo-do-tratamento',
        heading: 'O que o tratamento pretende alcançar',
        paragraphs: [
          'A regra central do glaucoma é que a visão perdida não volta, porque o nervo óptico, que leva as imagens do olho até o cérebro, não se recupera da lesão. O tratamento tem, portanto, um objetivo diferente: baixar a pressão intraocular para o nível que aquele nervo suporta e impedir novas perdas de campo visual. É um cuidado para toda a vida, e a sua eficácia depende mais de constância do que de qualquer técnica sofisticada.',
          'Esse controle é feito por dois caminhos: aumentar a saída do humor aquoso, o líquido transparente que o olho produz e drena o tempo todo, ou reduzir a quantidade fabricada dentro do olho. Pessoas com pressão ocular alta mas sem sinal de lesão no nervo óptico, situação chamada de suspeita de glaucoma, podem ser apenas monitoradas de perto, sem medicação, com aferições e testes de campo visual repetidos.',
        ],
      },
      {
        id: 'os-colirios',
        heading: 'As classes de colírios usadas',
        paragraphs: [
          'Os colírios são a primeira linha no glaucoma de ângulo aberto, e a maior parte das pessoas responde bem ao tratamento medicamentoso. Os compostos similares à prostaglandina aumentam o fluxo de saída do líquido e costumam ter poucos efeitos no resto do corpo, embora possam escurecer a pele e a íris, alongar os cílios e causar dor muscular ou nas articulações. Já os betabloqueadores, como o timolol, reduzem a produção de humor aquoso.',
          'Os agonistas alfa-adrenérgicos combinam redução de produção com aumento de fluxo, e os inibidores da anidrase carbônica, disponíveis como colírio ou em comprimido, diminuem a produção do líquido. Medicamentos colinérgicos, como a pilocarpina, foram muito usados no passado e hoje são menos frequentes. O Manual MSD descreve que os colírios costumam ser testados primeiro em um olho e, se houver melhora entre uma e quatro semanas, passam a ser aplicados nos dois.',
        ],
        bullets: [
          'Similares de prostaglandina: aumentam a drenagem',
          'Betabloqueadores: reduzem a produção de líquido',
          'Agonistas alfa-adrenérgicos: atuam nos dois mecanismos',
          'Inibidores da anidrase: colírio ou comprimido',
          'Colinérgicos: usados com menos frequência hoje em dia',
        ],
      },
      {
        id: 'efeitos-e-como-aplicar',
        heading: 'Efeitos colaterais e a aplicação correta',
        paragraphs: [
          'Colírios para glaucoma são geralmente seguros, mas cada classe tem suas reações. Betabloqueadores podem causar falta de ar em pessoas com asma ou outras doenças que produzem chiado, e exigem atenção em quem tem doença cardíaca ou vascular. Similares de prostaglandina podem mudar a cor da pele ao redor do olho e dos cílios. Inibidores da anidrase carbônica por via oral alteram o nível de sais no sangue e podem causar náusea, diarreia e cansaço importante.',
          'Aplicar direito faz diferença porque o medicamento precisa entrar no olho, e não escorrer pelo rosto. Lave as mãos, puxe a pálpebra inferior para formar uma bolsinha, pingue uma gota sem encostar o frasco na superfície ocular e mantenha os olhos fechados por um minuto, pressionando levemente o canto interno. Se você usa mais de um colírio, respeite o intervalo orientado, e informe o médico sobre qualquer efeito percebido: a troca de classe ou o ajuste do esquema costuma resolver, e abandonar o tratamento não é opção segura.',
        ],
        bullets: [
          'Lavar as mãos antes de aplicar',
          'Não encostar o frasco no olho',
          'Manter os olhos fechados por um minuto após a gota',
          'Respeitar o intervalo entre colírios diferentes',
          'Repor o frasco antes que ele termine',
        ],
      },
      {
        id: 'laser',
        heading: 'Quando entra o laser',
        paragraphs: [
          'A cirurgia a laser é usada para ampliar a drenagem no glaucoma de ângulo aberto, procedimento chamado de trabeculoplastia a laser, ou para abrir uma passagem na íris no ângulo fechado, a iridotomia periférica a laser. O procedimento é feito no consultório, em hospital ou em clínica, com colírio anestésico para evitar dor, e normalmente a pessoa volta para casa no mesmo dia.',
          'O Manual MSD informa que as evidências indicam tratamento a laser pelo menos tão eficaz quanto a terapia medicamentosa no glaucoma de ângulo aberto, e que iniciar o tratamento com laser em pessoa recém-diagnosticada é aceitável e muitas vezes aconselhável. A complicação mais comum é um aumento temporário da pressão ocular, tratado com o próprio colírio; queimaduras na córnea pelo laser são raras e costumam cicatrizar rapidamente. No glaucoma de ângulo fechado agudo, a laser de emergência é realizada nos dois olhos assim que possível, porque o olho não afetado tende a ser atingido.',
        ],
      },
      {
        id: 'cirurgia',
        heading: 'Cirurgia e implantes de drenagem',
        paragraphs: [
          'A cirurgia é considerada para quem chega com pressão ocular extremamente alta, para quem não tem controle adequado com colírio, para quem não consegue usar colírio ou apresenta efeito colateral intolerável, e para quem já tem perda grave de campo visual. Na cirurgia filtrante tradicional, o médico cria um novo caminho de escoamento, desviando o líquido dos canais entupidos para fora do olho; em outros casos é implantado um tubo de drenagem.',
          'Existem ainda procedimentos de espessura parcial, como viscocanalostomia, esclerectomia profunda e canaloplastia, que removem apenas parte do sistema de drenagem para melhorar a saída do líquido e podem ser feitos em centro de cirurgia ambulatorial, com retorno para casa no mesmo dia. Toda cirurgia tem riscos: infecção intraocular, aceleração da catarata, pressão ocular baixa demais e inchaço na parte posterior do olho. No SUS, o Ministério da Saúde oficializou a incorporação de uma técnica que trata glaucoma e catarata na mesma intervenção, indicada para casos leves e moderados de ângulo aberto, além do implante de drenagem já previsto no protocolo.',
        ],
      },
      {
        id: 'tratamento-para-sempre',
        heading: 'Um cuidado que continua mesmo sem sintomas',
        paragraphs: [
          'A pressão ocular precisa ser controlada pela vida toda, e o glaucoma não sai do corpo por mais que a pessoa se sinta bem. As consultas servem para comparar o campo visual com exames anteriores, aferir a pressão, revisar a técnica de aplicação do colírio e verificar se existe efeito colateral que explique o esquecimento das doses. Guardar os laudos ajuda a enxergar a direção da doença, que é o que realmente orienta as mudanças de conduta.',
          'Há também combinados que vale revisar com o médico: outros colírios e medicamentos usados para enxaqueca, alergia, resfriado ou insônia podem dilatar a pupila e dificultar a drenagem em quem tem ângulo estreito, por isso os olhos devem ser avaliados antes do uso em pessoas mais velhas. Catarata avançada e algumas cirurgias anteriores também podem aumentar a pressão ocular, e tratar essas causas faz parte do controle de quem tem glaucoma secundário.',
        ],
        cta: {
          label: 'Veja a página sobre glaucoma',
          href: '/doencas/glaucoma/',
        },
      },
    ],
    diseaseSlugs: ['glaucoma'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['glaucoma-como-descobrir-cedo'],
    references: [
      {
        label: 'Glaucoma, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-oftalmol%C3%B3gicos/glaucoma/glaucoma',
        publisher: 'Manual MSD',
      },
      {
        label: 'SUS vai oferecer cirurgia que trata glaucoma e catarata ao mesmo tempo',
        url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/sus-vai-oferecer-cirurgia-que-trata-glaucoma-e-catarata-ao-mesmo-tempo',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'rinite-alergica-sintomas-e-gatilhos',
    slug: 'rinite-alergica-sintomas-e-gatilhos',
    metaTitle: 'Rinite alérgica: sintomas e gatilhos',
    title: 'Rinite alérgica: como reconhecer os sintomas e descobrir os gatilhos',
    excerpt:
      'Coceira, espirros em série, secreção aquosa e nariz entupido formam o retrato da rinite alérgica. Veja como separar a alergia do resfriado e identificar o que desencadeia cada crise.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-e-a-crise',
        heading: 'Como é uma crise de rinite alérgica',
        paragraphs: [
          'A crise de rinite alérgica tem uma sequência reconhecível. Começa com coceira no nariz e no fundo da garganta, seguida de uma série de espirros. Depois vem a secreção aquosa e abundante, e o nariz entope. Muita gente descreve exatamente essa ordem todas as manhãs, ao levantar, e uma melhora parcial quando sai do quarto de dormir. O padrão de horário é tão característico que os médicos o usam como pista diagnóstica, e quem tem a doença passa a reconhecê-lo antes do próprio exame.',
          'Os olhos participam da crise: lacrimejam, coçam e ficam vermelhos, quadro chamado de rinoconjuntivite alérgica quando aparece junto dos sintomas nasais. Algumas pessoas apresentam dor de cabeça, pálpebras inchadas, tosse e chiado no peito. O olfato diminui nos dias de obstrução intensa, e a fala ganha tom anasalado. Entre uma crise e outra pode não haver sintoma nenhum, e essa alternância engana: muita família acredita que a doença passou quando ela apenas entrou em fase de calma, até o próximo contato com o desencadeador.',
        ],
      },
      {
        id: 'separar-alergia-de-resfriado',
        heading: 'Diferença entre alergia, resfriado e sinusite',
        paragraphs: [
          'A primeira pista é a coceira. Ela domina a rinite alérgica e quase não aparece no resfriado. Na infecção viral das vias respiratórias superiores, a secreção pode ser aquosa ou viscosa, a mucosa do nariz fica vermelha, e há dor de garganta, sensação geral de mal-estar e às vezes febre baixa. Na alergia, a mucosa costuma aparecer pálida, mole e inchada no exame, o mal-estar fica ausente e a secreção é aquosa. Os espirros em série e os olhos que coçam completam o retrato de uma crise alérgica.',
          'A segunda pista é o calendário. O resfriado tem começo, meio e fim, e se resolve em poucos dias. A rinite alérgica reaparece sempre que a pessoa encontra o desencadeador, dura semanas e costuma repetir-se na mesma estação do ano ou dentro do mesmo ambiente. A terceira pista é o lugar: a alergia piora em quartos com tapete, bichos de pelúcia, colchão antigo ou mofo, e melhora quando a pessoa sai de lá. Somados, esses três critérios apontam a direção, e é o histórico detalhado que permite ao médico concluir.',
        ],
      },
      {
        id: 'gatilhos-dentro-de-casa',
        heading: 'Os gatilhos que moram dentro de casa',
        paragraphs: [
          'No Brasil, os ácaros domésticos são os principais agentes da rinite alérgica, seguidos pelos alérgenos de barata e pelo epitélio de animais domésticos, e, mais raramente, pelos fungos. Isso significa que os gatilhos mais poderosos costumam estar dentro de casa, e não no campo ou na praia. Colchão, travesseiro, cobertor, almofada, bicho de pelúcia e cortina pesada formam o habitat ideal do ácaro: escuro, morno e cheio de descamação humana. O quarto de dormir concentra a maior carga de exposição do dia.',
          'Outros desencadeadores internos são igualmente comuns e fáceis de subestimar. Fumaça de cigarro, incenso e velas aromáticas irritam uma mucosa que já está inflamada. Produtos de limpeza de cheiro forte, talco e desodorante em spray provocam o mesmo efeito. Mofo de banheiro mal ventilado e de parede com infiltração é um dos gatilhos mais persistentes, porque não sai sozinho. Oscilação brusca de temperatura, como sair do banho quente para um quarto frio ou acordar na madrugada fria, também dispara crise em quem já está sensibilizado.',
        ],
      },
      {
        id: 'gatilhos-fora-de-casa',
        heading: 'Pólen, poluição e os gatilhos do trabalho',
        paragraphs: [
          'Fora de casa, a lista muda de figura. Pólen de árvores e gramíneas se concentra em certos períodos do ano e em horários específicos do dia, e a poluição urbana funciona como potenciadora: irrita a mucosa e facilita a penetração do alérgeno. Em capitais de trânsito intenso, muita pessoa alérgica percebe mais sintomas nos dias de ar parado, e os períodos de maior contagem de pólen coincidem com agenda cheia de consultório. O consenso brasileiro recomenda inclusive fechar janelas durante o dia e abri-las à noite.',
          'Trabalho e escola têm gatilhos próprios. Limpeza pesada, construção, marcenaria, manuseio de arquivos e contato com animais em pet shops ou propriedades rurais expõem a pessoa a cargas altas de alérgeno e de poeira. Ar-condicionado sem manutenção reúne ácaro e fungo e ainda resseca a mucosa. Um registro simples dos lugares, das datas e dos horários em que os sintomas aparecem transforma queixa vaga em informação utilizável na consulta, e é com esse mapa que se decide onde agir primeiro.',
        ],
      },
      {
        id: 'sinais-que-pedem-avaliacao',
        heading: 'Sinais que pedem avaliação profissional',
        paragraphs: [
          'Nem todo episódio de congestão e coriza exige avaliação imediata, mas alguns achados não devem esperar. Corrimento apenas de um lado do nariz, principalmente se contém pus ou sangue, é um deles, e em criança o médico considera a hipótese de um objeto introduzido no nariz. Dor facial, sensibilidade sobre as bochechas ou acima das sobrancelhas e secreção purulenta sugerem sinusite e pedem exame, porque o tratamento é outro e a conduta muda.',
          'A segunda família de sinais é a do peito. Falta de ar, chiado intenso e aperto no tórax sugerem asma associada, doença que o Ministério da Saúde reúne junto da rinite alérgica entre as doenças respiratórias crônicas e que precisa de tratamento específico. Inchaço importante ao redor dos olhos, febre que não cede e obstrução persistente apesar do tratamento prescrito também justificam reavaliação. Quando o medicamento de sempre deixa de funcionar, algo mudou no quadro ou no ambiente, e essa mudança precisa ser investigada em consulta.',
        ],
      },
      {
        id: 'o-que-faz-diferenca',
        heading: 'O que muda depois de conhecer seus gatilhos',
        paragraphs: [
          'Identificados os sintomas e os gatilhos, o trabalho vira ordem de prioridade. O quarto de dormir vem primeiro, porque é onde se passa mais tempo e onde a exposição ao ácaro é maior. Depois vêm a limpeza da casa, o controle de umidade e de insetos, os animais e, por último, o ajuste do medicamento com o profissional. Essa sequência evita o erro mais frequente no tratamento da rinite: trocar de remédio sem antes ter reduzido a exposição ao que provoca a crise.',
          'Não se trata de recomendação menor. O controle ambiental é parte do tratamento reconhecida pelo consenso brasileiro, e a combinação de spray nasal prescrito com ambiente limpo é o que mais melhora a qualidade do sono e a concentração diurna. Levar a lista de gatilhos à UBS e relatar se houve chiado no peito é o que permite avaliar a asma associada, cujo tratamento o SUS oferece. Saber reconhecer a crise e saber onde ela nasce são as duas metades do controle da doença.',
        ],
        cta: {
          label: 'Veja a página sobre rinite alérgica',
          href: '/doencas/rinite-alergica/',
        },
      },
    ],
    diseaseSlugs: ['rinite-alergica'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['rinite-alergica-como-controlar-em-casa'],
    references: [
      {
        label: 'Rinite, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-ouvido-nariz-e-garganta/doen%C3%A7as-do-nariz-e-dos-seios-paranasais/rinite',
        publisher: 'Manual MSD',
      },
      {
        label: 'Congestão nasal e coriza, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-ouvido-nariz-e-garganta/sintomas-de-dist%C3%BArbios-do-nariz-e-da-garganta/congest%C3%A3o-nasal-e-coriza',
        publisher: 'Manual MSD',
      },
      {
        label: 'IV Consenso Brasileiro sobre Rinites: atualização em rinite alérgica',
        url: 'https://www.scielo.br/j/bjorl/a/zWmtXTXRn6dtBLwcqRpJH4m/?lang=pt',
        publisher: 'Revista Brasileira de Otorrinolaringologia (SciELO)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'rinite-alergica-como-controlar-em-casa',
    slug: 'rinite-alergica-como-controlar-em-casa',
    metaTitle: 'Rinite alérgica: controle em casa',
    title: 'Rinite alérgica: como controlar os sintomas em casa',
    excerpt:
      'Do quarto de dormir ao pano úmido no lugar da vassoura: as medidas de controle ambiental que reduzem as crises de rinite alérgica e como combiná-las com o tratamento prescrito.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'por-onde-comecar',
        heading: 'Por onde começar o controle ambiental',
        paragraphs: [
          'Controlar a rinite alérgica em casa começa por uma decisão simples: atacar o lugar onde a exposição é maior, e não o que é mais visível. Para a maioria das pessoas, esse lugar é o quarto de dormir. É ali que se passa boa parte do dia respirando fundo, por horas seguidas, no meio de uma carga de ácaro que ninguém consegue enxergar. Começar pelo quarto costuma render mais resultado do que trocar de medicamento logo no início do tratamento.',
          'A segunda decisão é de método. Vassoura e espanador lançam ao ar justamente a poeira que a pessoa vai respirar em seguida, e é por isso que o pano úmido funciona. Medidas avulsas, feitas uma vez por mês, rendem pouco: a regularidade vale mais do que a intensidade da faxina. E controle ambiental não substitui remédio prescrito. As duas coisas trabalham juntas, cada uma em um ponto diferente da cadeia que termina na crise de espirros.',
        ],
      },
      {
        id: 'quarto-de-dormir',
        heading: 'O quarto de dormir, ponto central',
        paragraphs: [
          'O quarto merece um protocolo próprio. Colchão e travesseiro de espuma, fibra ou látex, sempre que possível envoltos em material plástico ou em capa impermeável ao ácaro, substituem os de paina ou pena, que funcionam como reservatório. O estrado da cama deve ser limpo duas vezes por mês. Roupas de cama e cobertores precisam ser trocados e lavados regularmente com detergente, em água quente, e secos ao sol ou em ar quente, porque a lavagem fria não elimina o ácaro.',
          'Tapete, carpete, cortina pesada e almofadão saem de cena; entram pisos laváveis, como cerâmica, vinil e madeira, e cortinas tipo persiana ou de material que se limpa com pano úmido. Bichos de pelúcia, estantes de livros, revistas e caixas de papelão formam colônias de ácaro no quarto e devem ser retirados, substituídos por brinquedos de tecido que aceitem lavagem frequente. Cama e berço não devem ficar colados na parede; se não for possível, escolha a parede sem marca de umidade ou a mais ensolarada.',
        ],
      },
      {
        id: 'limpeza-da-casa',
        heading: 'Limpeza que não espalha poeira',
        paragraphs: [
          'Na rotina da casa, o pano úmido diário é a regra, e o aspirador só ajuda quando tem filtro especial; sem filtro, ele distribui boa parte do que recolhe. Quem faz a limpeza mantém a pessoa alérgica fora do ambiente durante o serviço e até a poeira assentar. Em casas com carpete ou tapete pesado, de remoção difícil, a alternativa descrita no consenso brasileiro é aspirar duas vezes por semana, depois de deixar o cômodo ventilar.',
          'Os produtos também merecem escolha consciente. A recomendação é dar preferência a pastas e sabões em pó para a limpeza de banheiro e cozinha, e evitar talco, perfume, desodorante e produtos de cheiro forte, principalmente na forma de spray, que irritam a mucosa já inflamada. Ambientes fechados por longo período, como casa de praia ou de campo, devem ser arejados e limpos pelo menos 24 horas antes da chegada de quem tem alergia respiratória, porque o acúmulo de ácaro nesses locais é alto.',
        ],
      },
      {
        id: 'mofo-umidade-e-baratas',
        heading: 'Mofo, umidade e baratas',
        paragraphs: [
          'Mofo é um dos gatilhos mais persistentes, e resolvê-lo passa por tirar a água de cena. Identificar e eliminar o mofo e a umidade, principalmente no quarto de dormir, e reduzir a umidade interna a menos de 50% são medidas descritas no consenso brasileiro. Verificar periodicamente as áreas úmidas da casa, como banheiro, cortina plástica do chuveiro e embaixo das pias, faz parte da rotina. Solução diluída de água sanitária pode ser aplicada nos locais mofados até a correção definitiva, já que o fungo também age como irritante respiratório.',
          'Barata e roedor completam a lista de alérgenos domésticos relevantes no país. A inspeção é passo importante no extermínio de baratas, e o método de isca é preferível ao inseticida de odor forte. Remover o lixo, não armazená-lo dentro de casa e manter os alimentos fechados e acondicionados reduz aquilo que atrai esses animais. Em caso de infestação, a orientação é vedar furos e rachaduras que servem de entrada e recorrer a controle profissional, junto das medidas de limpeza da moradia.',
        ],
      },
      {
        id: 'fora-de-casa',
        heading: 'Pólen, temperatura e vida ao ar livre',
        paragraphs: [
          'Fora de casa a estratégia é de antecipação. Para quem é alérgico a pólen, manter as janelas da casa e do carro fechadas durante o dia e abri-las à noite, quando a contagem de pólen é menor, ajuda. Sistemas de ventilação podem receber filtros específicos para pólen, e máscaras e óculos são úteis em situações de exposição alta. Roupas secas ao ar livre carregam pólen para dentro, e o recomendado é evitar essa prática, usando secadora quando possível, porque o pólen também chega pegado em casacos, bolsas e animais.',
          'A atividade física não deve ser cortada: o consenso brasileiro recomenda dar preferência à vida ao ar livre e afirma que esportes podem e devem ser praticados, evitando apenas dias de alta exposição a pólen ou poluentes em determinadas áreas. Cuidados com temperatura também contam. Banhos extremamente quentes e oscilação brusca de temperatura pioram os sintomas, e a temperatura ideal da água é a do corpo. No trabalho com poeira, a proteção individual e a higiene no fim do expediente fazem parte do mesmo pacote.',
        ],
      },
      {
        id: 'tratamento-e-acompanhamento',
        heading: 'Como o tratamento se encaixa no dia a dia',
        paragraphs: [
          'Nada do que se faz em casa substitui o tratamento prescrito. A lavagem nasal com solução salina, feita com soro conforme necessidade, ajuda a aliviar os sintomas. O corticoide em spray nasal é a base do controle nos casos persistentes: atua sobre a obstrução, a alteração do olfato, a coriza, os espirros, a coceira e os sintomas oculares associados, e tem segurança reconhecida para uso prolongado. O erro mais comum é interromper o spray assim que a crise passa, justamente quando a inflamação ainda precisa estar sob controle.',
          'Os descongestionantes exigem o caminho contrário. O uso tópico deve durar no máximo cinco a sete dias, porque o prolongamento aumenta o risco de congestão de rebote e de rinite medicamentosa, muitas vezes de difícil resolução, e eles não são recomendados para crianças menores de seis anos. O corticoide nasal só é liberado a partir dos dois anos. Quem tem rinite e chiado no peito precisa avaliar a asma na UBS, onde o SUS oferece o tratamento. Voltar às consultas, relatar quantas crises houve e o que as desencadeou é o que ajusta o plano.',
        ],
        cta: {
          label: 'Veja a página sobre rinite alérgica',
          href: '/doencas/rinite-alergica/',
        },
      },
    ],
    diseaseSlugs: ['rinite-alergica'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['rinite-alergica-sintomas-e-gatilhos'],
    references: [
      {
        label: 'IV Consenso Brasileiro sobre Rinites: atualização em rinite alérgica',
        url: 'https://www.scielo.br/j/bjorl/a/zWmtXTXRn6dtBLwcqRpJH4m/?lang=pt',
        publisher: 'Revista Brasileira de Otorrinolaringologia (SciELO)',
      },
      {
        label: 'Rinite, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-ouvido-nariz-e-garganta/doen%C3%A7as-do-nariz-e-dos-seios-paranasais/rinite',
        publisher: 'Manual MSD',
      },
      {
        label: 'Asma: orientações e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'bronquiolite-sinais-de-alerta-no-bebe',
    slug: 'bronquiolite-sinais-de-alerta-no-bebe',
    metaTitle: 'Bronquiolite: sinais de alerta no bebê',
    title: 'Bronquiolite: sinais de alerta no bebê que pedem atendimento',
    excerpt:
      'Respiração rápida, costelas afundando, lábios arroxeados e recusa da mamada são os sinais que separam a bronquiolite leve da grave. Aprenda a olhar para o peito do bebê e saiba onde procurar ajuda.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'como-a-doenca-comeca',
        heading: 'Os primeiros dias, quando parece um resfriado',
        paragraphs: [
          'A bronquiolite quase sempre começa parecendo um resfriado comum. Coriza, espirros, febre baixa e uma tosse leve tomam conta do bebê por dois ou três dias, e a família cuida achando que é mais uma virose de inverno. Essa fase inicial é a que passa despercebida na maioria das casas, e é também a melhor janela para observar: quem já conhece o comportamento habitual do bebê percebe a virada quando ela acontece. Nessa fase, registrar o que é normal para aquela criança ajuda muito: quantas mamadas por dia, como é a respiração dela dormindo e quanto tempo leva para cansar no peito. Sem esse ponto de partida, a família passa a comparar o bebê doente com uma memória aproximada.',
          'A virada costuma aparecer de madrugada. A tosse piora, a respiração fica mais rápida e surge o chiado, um ruído agudo na saída do ar que dá para ouvir sem estetoscópio. O nariz, já entupido, passa a incomodar a mamada. Na maioria dos bebês o quadro continua leve nesse ponto, com a criança alerta, ativa e mamando razoavelmente bem. É esse conjunto, e não o chiado isolado, que autoriza seguir em casa com observação.',
        ],
      },
      {
        id: 'olhar-na-respiracao',
        heading: 'O que olhar no peito do bebê',
        paragraphs: [
          'Abra a roupa do bebê e olhe o peito por um minuto, de preferência no repouso ou durante o sono. Respiração rápida, acima do habitual para a idade, é o primeiro sinal objetivo. Depois observe o esforço: a pele entre as costelas afunda a cada inspirada, o bico do estômago empurra para fora e as narinas abrem a cada respirada. Uso intenso da musculatura da respiração é sinal de que o bebê está gastando energia demais para ventilar.',
          'Outros achados merecem atenção: a respiração superficial e irregular, pausas breves em que o bebê parece parar de respirar, e a incapacidade de mamar sem interromper para respirar. Prematuros e bebês com menos de dois meses apresentam essas pausas, chamadas de apneia, com mais frequência, e nelas o limiar para buscar atendimento deve ser baixo. Um vídeo curto da respiração feito pelo celular vale mais do que a descrição apressada na porta da consulta. A pele também dá informação: suor exagerado durante a mamada, palidez e demora para a cor voltar no dedo apertado somam indícios. Nenhum achado isolado decide o caso, mas todos ajudam a responder a única pergunta que importa, que é se o bebê consegue ventilar e mamar ao mesmo tempo.',
        ],
      },
      {
        id: 'sinais-graves',
        heading: 'Sinais graves que pedem atendimento imediato',
        paragraphs: [
          'O Ministério da Saúde lista os sinais pelos quais pais e cuidadores devem buscar atendimento médico imediatamente: dificuldade para respirar ou respiração muito rápida, chiado intenso no peito, lábios ou unhas arroxeados, sonolência excessiva ou prostração, dificuldade para mamar ou se alimentar, com diminuição da ingestão de líquidos, e febre persistente ou piora dos sintomas de resfriado. Qualquer um deles basta, e não é preciso que apareçam juntos. A febre isolada, porém, não mede a gravidade da bronquiolite: o que define se o quadro é grave é a respiração e a hidratação, não o número do termômetro.',
          'A cor da pele e o nível de consciência são os dois mais fáceis de interpretar errado. Cianose é pele, lábios ou pontas dos dedos arroxeados ou azulados, e às vezes aparece só ao redor da boca, com coloração acinzentada. Prostração significa bebê que não responde como de costume, que não chora com vigor, que não pede o peito. Somados a respiração rápida e mamada pobre, esses sinais caracterizam a forma grave da doença, uma das principais causas de Síndrome Respiratória Aguda Grave em crianças pequenas.',
        ],
      },
      {
        id: 'quem-fica-mais-exposto',
        heading: 'Bebês que precisam de atenção redobrada',
        paragraphs: [
          'Alguns bebês pioram mais rápido e merecem avaliação mais precoce. Recém-nascidos prematuros, crianças com menos de dois meses de vida, as que nasceram com baixo peso e as que têm cardiopatia, doença pulmonar de base ou imunodeficiência formam o grupo de maior risco. Em muitos deles, a internação é decidida mais cedo, mesmo com desconforto respiratório moderado, porque a margem de segurança é estreita e a evolução pode ser súbita.',
          'A exposição à fumaça do cigarro dentro de casa piora a gravidade das infecções respiratórias do bebê e é o fator que a família mais consegue controlar. Casas com mofo visível, umidade e ambientes fechados também contribuem para episódios de chiado. Irmãos em idade escolar, que trazem o vírus do resfriado da escola, são a fonte mais comum de contágio: o adulto pode ter apenas uma coriza leve com o mesmo vírus que no bebê fecha os bronquíolos.',
        ],
      },
      {
        id: 'onde-procurar-atendimento',
        heading: 'Onde procurar atendimento e quando é emergência',
        paragraphs: [
          'Bebê com chiado novo, mamando menos ou com respiração rápida deve ser avaliado no mesmo dia, e não na semana seguinte. A UBS onde a criança é acompanhada resolve boa parte dos casos leves, orienta a lavagem nasal e diz o que observar; quando não houver vagas ou for madrugada, o pronto atendimento é o caminho. Levar o bebê vestido com roupa que abra fácil na frente agiliza o exame do peito. Aproveite a consulta para perguntar o que exatamente observar em casa, de quantas em quantas horas e qual sinal deve fazer a família voltar. Uma orientação anotada vale mais do que uma promessa feita de memória, na porta da sala.',
          'Situação de emergência respiratória é outra coisa. Lábios arroxeados, pausas na respiração, bebê prostrado ou esforço respiratório intenso pedem atendimento imediato, e o SAMU 192 pode ser acionado pelo telefone, com ligação gratuita de fixo ou celular: a central de regulação orienta as primeiras medidas e despacha a ambulância conforme a gravidade. Não espere o efeito de nenhum medicamento caseiro antes de pedir ajuda, e não leve o bebê dirigindo sozinho se houver alguém por perto para acionar o socorro.',
        ],
      },
      {
        id: 'o-que-contar-na-consulta',
        heading: 'O que levar e o que contar na consulta',
        paragraphs: [
          'A consulta sobre bronquiolite é decidida por informação, não por exame complicado. Diga quando começaram a coriza e a tosse, em que dia a respiração mudou, quantas mamadas o bebê fez nas últimas horas, quantas fraldas molhadas trocou e se houve vômito. Informe a idade gestacional ao nascer, o peso atual, se a criança é prematura e se alguém em casa está com resfriado. Diga ainda se a criança frequenta creche ou tem contato com fumantes, porque essas respostas sustentam a hipótese diagnóstica e orientam as medidas de ambiente. Elas pesam tanto quanto o exame na decisão de observar em casa ou internar.',
          'Se você mede a saturação em casa com oxímetro de dedo, leve o aparelho e conte em que momento fez a leitura, porque o valor medido no choro ou com a mão gelada não significa a mesma coisa. Não diga apenas que o bebê está ruim: mostre o vídeo da respiração e descreva o que mudou desde ontem. Com cuidado adequado e oportuno, a maioria dos bebês se recupera em casa em três a cinco dias, ainda que a tosse e o chiado possam durar algumas semanas.',
        ],
        cta: {
          label: 'Veja a página sobre bronquiolite',
          href: '/doencas/bronquiolite/',
        },
      },
    ],
    diseaseSlugs: ['bronquiolite'],
    topicSlugs: ['doencas-infecciosas', 'saude-infantil'],
    relatedArticleSlugs: ['bronquiolite-tratamento-e-cuidados-em-casa'],
    references: [
      {
        label: 'Bronquiolite Viral Aguda',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/b/bronquiolite',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Bronquiolite, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/problemas-de-sa%C3%BAde-infantil/dist%C3%BArbios-respirat%C3%B3rios-em-beb%C3%AAs-e-crian%C3%A7as/bronquiolite',
        publisher: 'Manual MSD',
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
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'bronquiolite-tratamento-e-cuidados-em-casa',
    slug: 'bronquiolite-tratamento-e-cuidados-em-casa',
    metaTitle: 'Bronquiolite: tratamento e cuidados em casa',
    title: 'Bronquiolite: tratamento e cuidados com o bebê em casa',
    excerpt:
      'Lavagem nasal, líquido em pequenas quantidades e casa livre de fumaça são o tratamento da bronquiolite. Veja o que fazer em cada dia da doença e por que broncodilatador, corticoide e antibiótico não fazem parte da rotina.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-que-o-tratamento-faz',
        heading: 'O que o tratamento faz, e o que ele não faz',
        paragraphs: [
          'Não existe medicamento específico para a bronquiolite viral aguda. O Ministério da Saúde descreve o manejo como o tratamento dos sinais e dos sintomas, apoiado em três medidas: lavagem nasal, controle da febre e hidratação. Isso não é falta de recurso, é o que a evidência sustenta. O vírus faz o trabalho dele em poucos dias, e o papel do cuidado é manter o bebê respirando, mamando e hidratado enquanto o organismo elimina a infecção. Vale dizer isso com clareza, porque a ausência de receita costuma ser lida como descaso. O que a equipe prescreve nessa situação é uma rotina: nariz limpo, líquido oferecido com frequência, febre controlada e observação do que muda a cada hora.',
          'Por isso o tratamento em casa é legítimo e é a regra, não a exceção. A maioria das crianças se recupera em casa em três a cinco dias, com tosse e chiado que podem se arrastar por duas a quatro semanas. Internação existe para uma minoria, aquela em que o oxigênio cai, o bebê não consegue beber ou o desconforto respiratório aumenta. Entre uma situação e outra, o que separa é a observação contínua feita por quem conhece a criança.',
        ],
      },
      {
        id: 'desobstruir-o-nariz',
        heading: 'Desobstruir o nariz é o cuidado mais eficiente',
        paragraphs: [
          'O bebê respira pelo nariz, e um nariz fechado atrapalha três coisas ao mesmo tempo: a oxigenação, a mamada e o sono. A lavagem nasal com soro fisiológico é a medida que rende resultado mais rápido, e o momento certo faz diferença. Fazer a lavagem antes de cada mamada e antes de dormir desobstrui justamente as duas situações em que o bebê não pode respirar pela boca.',
          'Na prática, use soro em quantidade suficiente para amolecer a secreção, aspire ou deixe escorrer com a cabeça levemente inclinada e repita conforme a necessidade. Limpeza agressiva demais irrita a mucosa e piora o edema, então o objetivo é conforto, e não nariz completamente seco. Posicionar o bebê mais vertical no colo, nos primeiros minutos depois da lavagem, ajuda a secreção a sair e reduz os acessos de tosse que terminam em vômito. Quem tem dificuldade com o procedimento deve pedir demonstração na consulta: posição da cabeça, quantidade de soro e momento certo são detalhes que decidem se a lavagem alivia ou vira uma luta.',
        ],
      },
      {
        id: 'hidratacao-e-mamada',
        heading: 'Hidratação e mamada em um bebê que respira mal',
        paragraphs: [
          'Bebê que respira rápido não consegue mamar por muito tempo seguidos, e o resultado é ingestão pequena, perda de peso e desidratação. A saída é mudar o formato, não desistir: pequenas quantidades de líquido, oferecidas com mais frequência. No peito, mamadas mais curtas e mais seguidas resolvem. Na criança que recebe outro líquido autorizado pela equipe, o copo, a colher ou a seringa ajudam a dosar. Insistir em uma mamada longa quando o bebê está ofegante costuma terminar em regurgitação e frustração, e o resultado vem da soma das pequenas ofertas ao longo do dia.',
          'Acompanhe a hidratação com o que dá para medir em casa: o número de fraldas molhadas ao longo do dia, a boca e a língua úmidas e a lágrima ao chorar. Menos urina do que o habitual é sinal concreto de que a oferta de líquido está insuficiente. Vômitos provocados por acessos de tosse complicam o quadro, e por isso a lavagem nasal antes da mamada volta a ser importante. O serviço de saúde monitora a hidratação pelo volume urinário e, nos casos graves, usa a via intravenosa.',
        ],
      },
      {
        id: 'ambiente-da-casa',
        heading: 'O ambiente ao redor do bebê',
        paragraphs: [
          'Ar limpo e ventilado faz parte do tratamento. Fumaça de cigarro, incenso, velas aromáticas e produtos de cheiro forte irritam uma mucosa que já está inchada, e bebês expostos ao fumo passivo têm infecções respiratórias mais graves. A casa deve ser ventilada, e o fumo, eliminado de dentro de casa e do carro, inclusive com o bebê doente. Ambientes com mofo visível e umidade merecem correção, porque agravam o chiado.',
          'Nos primeiros dias, suspenda a creche, as visitas e os passeios em lugares fechados e cheios. Todo mundo que pegar o bebê deve lavar as mãos com água e sabão antes, e quem estiver com tosse ou coriza deve adiar o encontro. Beija-mão e beijo no rosto precisam de pausa durante o inverno. Roupa de cama leve, quarto arejado e temperatura ambiente sem oscilação brusca completam o cenário de recuperação. A mesma lógica vale para os objetos: o Ministério da Saúde inclui limpar e desinfetar objetos e superfícies de uso comum entre as medidas de prevenção, o que numa casa com bebê alcança brinquedos, mamadeiras e maçanetas.',
        ],
      },
      {
        id: 'medicamentos-que-nao-ajudam',
        heading: 'Medicamentos que não entram na rotina',
        paragraphs: [
          'A frustração de não receber uma receita é real, e vale entender o motivo. Broncodilatadores não são uniformemente eficazes na bronquiolite, e não há evidência de que reduzam internações, retornos ao pronto atendimento ou a necessidade de ventilação; podem ser tentados em situações particulares, com avaliação profissional. Corticosteroides inalatórios ou sistêmicos não são recomendados no primeiro episódio, e a terapia com corticoide pode fazer sentido depois dos doze meses, em chiado recorrente com suspeita de asma.',
          'Antibiótico só tem lugar quando surge uma infecção bacteriana associada, o que é uma sequela rara, e antiviral de uso rotineiro não é recomendado. Isso significa que oferecer antibiótico guardado em casa, insistir em xarope sem indicação ou aumentar dose por conta própria acrescenta risco sem acrescentar melhora. A febre, essa sim, deve ser tratada, porque contribui para o desconforto e para a perda de líquido; a escolha e a dose cabem à equipe que acompanha o bebê.',
        ],
      },
      {
        id: 'quando-reavaliar',
        heading: 'Quando o plano de casa precisa mudar',
        paragraphs: [
          'Cuidado em casa funciona enquanto a curva é de melhora. Se a respiração fica mais rápida, o esforço passa a ser visível entre as costelas, a mamada cai pela metade ou o bebê aparece prostrado, o plano deixou de ser caseiro. Lábios ou unhas arroxeados e pausas na respiração durante o sono pedem atendimento imediato, e o SAMU 192 pode ser acionado com ligação gratuita de telefone fixo ou celular enquanto a família se organiza.',
          'Prematuros, bebês com menos de dois meses e crianças com cardiopatia, doença pulmonar ou imunodeficiência devem ter limiar mais baixo para reavaliação, porque a evolução pode ser súbita. Também merece retorno a febre que persiste depois da melhora respiratória, sinal de otite média, complicação que aparece em mais da metade das crianças entre três e dezoito meses com bronquiolite. Registrar mamadas, fraldas e a aparência da respiração facilita essa decisão em família.',
        ],
        cta: {
          label: 'Veja a página sobre bronquiolite',
          href: '/doencas/bronquiolite/',
        },
      },
    ],
    diseaseSlugs: ['bronquiolite'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['bronquiolite-sinais-de-alerta-no-bebe'],
    references: [
      {
        label: 'Bronquiolite Viral Aguda',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/b/bronquiolite',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Bronquiolite, edição para profissionais de saúde',
        url: 'https://www.msdmanuals.com/pt/profissional/pediatria/dist%C3%BArbios-respirat%C3%B3rios-em-crian%C3%A7as-pequenas/bronquiolite',
        publisher: 'Manual MSD',
      },
      {
        label: 'Bronquiolite, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/problemas-de-sa%C3%BAde-infantil/dist%C3%BArbios-respirat%C3%B3rios-em-beb%C3%AAs-e-crian%C3%A7as/bronquiolite',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'fibrilacao-atrial-sintomas-e-o-risco-de-avc',
    slug: 'fibrilacao-atrial-sintomas-e-o-risco-de-avc',
    metaTitle: 'Fibrilação atrial: sintomas e risco de AVC',
    title: 'Fibrilação atrial: sintomas, pulso irregular e o risco de AVC',
    excerpt:
      'A fibrilação atrial é a arritmia sustentada mais comum e a principal causa evitável de AVC. Veja como ela se manifesta, por que o pulso fica irregular e quando chamar o SAMU 192.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-muda-no-ritmo',
        heading: 'O que muda no ritmo do coração',
        paragraphs: [
          'O batimento normal começa em um marcapasso natural, o nó sinoatrial, que envia um impulso elétrico organizado às câmaras superiores do coração, os átrios. Na fibrilação atrial essa organização se perde. Vários pontos dos átrios disparam impulsos ao mesmo tempo, e o resultado é uma contração ineficaz: o tecido apenas treme, em vez de se contrair e empurrar o sangue para os ventrículos.',
          'Os ventrículos, que são as câmaras que bombeiam o sangue para o corpo, recebem essa descarga desordenada. Em quem não está em tratamento, os impulsos chegam em frequência mais alta que a normal, em geral de 140 a 160 batimentos por minuto, contra os 60 a 100 habituais, e sobem ainda mais durante a atividade física. O ritmo fica irregular, e é essa irregularidade que define a arritmia, mais do que a velocidade.',
          'A essa situação se soma outra, menos comentada: os átrios que apenas tremem deixam de cumprir sua parte no enchimento dos ventrículos, que passam a se encher menos e a bombeiar uma quantidade menor de sangue a cada batida. Em pessoas mais velhas e em quem já tem cardiopatia, essa perda pesa mais, e é nelas que uma crise de frequência muito alta pode desencadear insuficiência cardíaca ou dor no peito.',
        ],
      },
      {
        id: 'o-que-a-pessoa-sente',
        heading: 'Os sintomas, do mais comum ao mais discreto',
        paragraphs: [
          'O que a pessoa sente depende muito da velocidade dos ventrículos. Quando a frequência está normal ou levemente acelerada, abaixo de 120 batimentos por minuto, geralmente não há sintoma nenhum. Boa parte das fibrilações atriais é descoberta em um eletrocardiograma pedido por outro motivo, ou depois de um AVC, quando a arritmia já estava ali havia tempo sem dar sinal.',
          'A ausência de sintoma não é sinal de menor risco. Mesmo quem não sente nada corre o risco de formar coágulos nos átrios, e a diretriz brasileira descreve a arritmia como causa de morbimortalidade substancial, associada de forma independente a pior qualidade de vida e a mais AVC, insuficiência cardíaca e mortalidade total. É por isso que a avaliação do risco de AVC se aplica a todas as pessoas com o diagnóstico, sintomáticas ou não.',
          'Com frequências mais altas aparecem a percepção incômoda dos batimentos, a palpitação, a falta de ar e a dor no peito. A restrição na capacidade de bombeamento pode causar fraqueza, tontura e desmaio. Em situações incomuns a pressão cai tanto a ponto de causar choque, um estado de pressão arterial muito baixa que exige socorro imediato. Quem sente esses sinais deve procurar avaliação, mesmo que a crise passe sozinha e a pessoa se sinta bem depois.',
        ],
        bullets: [
          'Palpitação com sensação de coração descompassado',
          'Falta de ar que aparece em esforços antes fáceis',
          'Dor ou aperto no peito durante a crise',
          'Fraqueza, tontura ou desmaio',
          'Cansaço desproporcional nas tarefas do dia',
        ],
      },
      {
        id: 'o-pulso-irregular',
        heading: 'Por que o pulso fica irregular',
        paragraphs: [
          'Como cada batida chega aos ventrículos com um intervalo diferente, a quantidade de sangue ejetada também varia. Isso produz um pulso que, na fibrilação atrial, costuma estar acelerado e constantemente irregular, algo perceptível ao apoiar dois dedos sobre o pulso do punho e contar as batidas por um minuto. Já no flutter atrial, outra arritmia dos átrios, o pulso também fica acelerado, mas pode ser regular ou irregular.',
          'Sentir o pulso descompassado é um motivo para buscar avaliação, não para se autodiagnosticar. A confirmação vem do eletrocardiograma, que mostra a ausência das ondas normais dos átrios e intervalos irregulares entre os batimentos. Um eletrocardiograma feito num dia sem crise pode sair normal, porque a arritmia vai e volta, e nesse caso a equipe pode indicar monitorização mais longa.',
        ],
      },
      {
        id: 'por-que-leva-ao-avc',
        heading: 'Por que a arritmia leva ao AVC',
        paragraphs: [
          'Os átrios que não se esvaziam por completo deixam sangue parado em seu interior. Com o tempo esse sangue estagnado pode formar coágulos. Fragmentos podem se soltar, passar para o ventrículo esquerdo, seguir pela corrente sanguínea como êmbolos e obstruir uma artéria menor. Se a artéria obstruída estiver no cérebro, o resultado é um AVC isquêmico. Parte dos tratamentos propostos pela diretriz brasileira, como o fechamento do apêndice atrial esquerdo, existe justamente para atacar essa origem do coágulo.',
          'O peso desse risco não é uma impressão: a Sociedade Brasileira de Cardiologia registra que a fibrilação atrial aumenta em média quatro vezes a chance de AVC, além de se associar a mais insuficiência cardíaca e a maior mortalidade por todas as causas. O Ministério da Saúde coloca as arritmias cardíacas entre as condições que podem levar ao AVC, ao lado de doenças das válvulas e de defeitos congênitos do coração. Em situações raras, o AVC é o primeiro sinal da arritmia.',
          'O risco, porém, não é igual para todas as pessoas com a mesma arritmia. A avaliação considera idade a partir de 65 anos, hipertensão, diabetes, doença nos vasos sanguíneos, AVC ou ataque isquêmico transitório anterior, insuficiência cardíaca, estenose mitral reumática, válvula cardíaca mecânica e o sexo feminino. É essa soma de fatores que define quem precisa de anticoagulante.',
        ],
        cta: {
          label: 'Veja a página sobre a fibrilação atrial',
          href: '/doencas/fibrilacao-atrial/',
        },
      },
      {
        id: 'reconhecendo-o-avc',
        heading: 'Sinais de AVC que exigem socorro imediato',
        paragraphs: [
          'Reconhecer o AVC em segundos muda o desfecho. O Ministério da Saúde lista os sinais de alerta para qualquer tipo de AVC: confusão mental, alteração da fala ou da compreensão, alteração da visão em um ou ambos os olhos, dor de cabeça súbita e intensa sem causa aparente, desequilíbrio, tontura ou mudança no andar, e fraqueza ou formigamento em um lado do corpo, afetando rosto, braço ou perna.',
          'Se qualquer um desses sintomas aparecer, a orientação é ligar para o SAMU 192 ou para o Corpo de Bombeiros no 193, ou levar a pessoa imediatamente a um hospital. O serviço de atendimento pré-hospitalar do SAMU é gratuito, funciona 24 horas por dia e os sete dias da semana, e a orientação de primeiros cuidados já começa na ligação. Quanto mais rápido o atendimento, maiores as chances de sobrevivência e de recuperação completa. Não espere o sintoma passar para decidir.',
        ],
        bullets: [
          'Confusão mental ou dificuldade para entender',
          'Fala embaraçada ou perda da capacidade de falar',
          'Visão turva ou perdida em um ou ambos os olhos',
          'Dor de cabeça súbita, intensa e sem causa aparente',
          'Fraqueza ou formigamento em um lado do rosto, braço ou perna',
        ],
      },
      {
        id: 'o-que-fazer-depois',
        heading: 'O que muda depois do diagnóstico',
        paragraphs: [
          'Descobrir uma fibrilação atrial não significa parar a vida, significa entrar em um cuidado continuado. A primeira tarefa é definir a velocidade aceitável dos ventrículos e se vale a pena tentar restaurar o ritmo normal. A segunda, e a que mais protege, é avaliar o risco de AVC e iniciar anticoagulante quando ele existe. A terceira é tratar o que alimenta a arritmia, principalmente a hipertensão, o excesso de álcool, o peso e a tireoide.',
          'Vale levar às consultas anotações sobre as crises: quando começaram, quanto duraram, o que a pessoa sentia e o que estava fazendo. Essas informações ajudam a distinguir a arritmia paroxística, que vai e volta, da persistente, e pesam na decisão sobre cardioversão e ablação. Quem já sofreu um AVC ou um ataque isquêmico transitório precisa de atenção redobrada, porque a recorrência é justamente o que o tratamento tenta evitar.',
        ],
      },
    ],
    diseaseSlugs: ['fibrilacao-atrial'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['fibrilacao-atrial-tratamento-e-anticoagulantes'],
    references: [
      {
        label: 'Fibrilação atrial e flutter atrial, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-cora%C3%A7%C3%A3o-e-dos-vasos-sangu%C3%ADneos/arritmias-card%C3%ADacas/fibrila%C3%A7%C3%A3o-atrial-e-flutter-atrial',
        publisher: 'Manual MSD',
      },
      {
        label: 'AVC: sintomas, tipos e prevenção',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Diretriz Brasileira de Fibrilação Atrial, 2025',
        url: 'https://www.scielo.br/j/abc/a/jWrKHyPRYYh7dXZR94nJcGp/?lang=pt',
        publisher: 'Sociedade Brasileira de Cardiologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'fibrilacao-atrial-tratamento-e-anticoagulantes',
    slug: 'fibrilacao-atrial-tratamento-e-anticoagulantes',
    metaTitle: 'Fibrilação atrial: tratamento e anticoagulantes',
    title: 'Fibrilação atrial: tratamento, anticoagulantes e quando a aspirina não basta',
    excerpt:
      'Betabloqueadores, cardioversão, ablação e anticoagulantes formam o tratamento da fibrilação atrial. Entenda o que cada um faz e por que o aspirina não protege do AVC nessa arritmia.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'tres-frentes',
        heading: 'O tratamento trabalha em três frentes',
        paragraphs: [
          'O manejo da fibrilação atrial não se resume a normalizar o batimento. Ele segue três objetivos simultâneos: controlar a frequência de contração dos ventrículos, restaurar e manter o ritmo normal do coração e impedir a formação de coágulos, tratando ao mesmo tempo a doença que deu origem à arritmia. Os três andam juntos, e nenhum deles é opcional.',
          'Cada pessoa entra nesse esquema por um caminho próprio. Depende da idade, da doença cardíaca de base, dos sintomas e do risco de AVC equilibrado contra o risco de sangramento. Há quem fique anos bem apenas com medicamento para desacelerar o coração e anticoagulante, e há quem precise de cardioversão ou de ablação. O próprio paciente ocupa o centro dessa decisão, apoiado por uma equipe que pode incluir cardiologista, eletrofisiologista, nefrologista e equipe de enfermagem.',
          'Aqui existe ainda uma escolha de estratégia. Há quem se beneficie apenas de controlar a velocidade e conviver com o ritmo irregular, e há quem valha a pena tentar devolver o coração ao ritmo normal. Essa decisão é clínica e muda com o tempo, acompanhando os sintomas, a função do coração e a idade.',
        ],
      },
      {
        id: 'controlar-a-velocidade',
        heading: 'Controlar a velocidade dos ventrículos',
        paragraphs: [
          'Quase sempre o primeiro passo é desacelerar os ventrículos, para que o coração consiga se encher e bombear sangue com mais eficácia. O medicamento mais usado nessa etapa é um bloqueador dos canais de cálcio, como diltiazem ou verapamil, que retarda a passagem dos impulsos dos átrios para os ventrículos. Betabloqueadores, como propranolol e atenolol, também são opções comuns, e a digoxina pode ser administrada em quem já tem cardiopatia.',
          'Esses remédios aliviam sintomas e protegem a função do coração, mas não impedem coágulos. Confundir as duas coisas é um erro frequente: sentir-se melhor não significa que a prevenção do AVC esteja coberta. Por isso, a decisão sobre o anticoagulante é tomada em paralelo e com critérios próprios, e nenhum desses medicamentos deve ser iniciado, trocado ou interrompido sem avaliação da equipe que acompanha o caso.',
          'Também cabe aqui uma decisão de estratégia. Em algumas pessoas basta manter a velocidade sob controle e aceitar o ritmo fibrilado; em outras vale tentar devolver o ritmo normal. A diretriz brasileira descreve o manejo como multidisciplinar, com o paciente no centro da decisão, apoiado por cardiologistas, eletrofisiologistas, nefrologistas, hematologistas, fisioterapeutas e cuidadores. Os critérios dessa escolha são clínicos e mudam ao longo do tempo, conforme sintomas, função cardíaca e idade.',
        ],
      },
      {
        id: 'anticoagulantes',
        heading: 'Anticoagulantes, a parte que mais protege do AVC',
        paragraphs: [
          'Na vasta maioria das pessoas com fibrilação atrial, a prevenção de coágulos é necessária, inclusive quando o ritmo é convertido de volta ao normal. As opções descritas na diretriz brasileira são a varfarina e os anticoagulantes orais de ação direta, entre eles dabigatrana, rivaroxabana, apixabana e edoxabana. Nos grandes ensaios clínicos, os anticoagulantes de ação direta mostraram vantagem sobre a varfarina na prevenção de AVC e embolia sistêmica em pacientes com fibrilação atrial não valvar.',
          'A escolha entre eles não é indiferente. A varfarina exige exames de monitoramento regulares e ajustes de dose, tem muitas interações com outros medicamentos e com alimentos, e por isso depende de acompanhamento próximo. Os anticoagulantes de ação direta dispensam esse controle laboratorial de rotina, mas exigem pontualidade rigorosa nas tomadas, porque a meia-vida curta torna as pausas perigosas. Em quem usa anticoagulante, a avaliação periódica do risco de sangramento é parte do tratamento, e não uma formalidade.',
          'Esse risco tem ferramenta própria de avaliação. A diretriz brasileira descreve um escore para estimar a chance de sangramento e registra que valores altos não representam contraindicação à anticoagulação: indicam que é preciso agir sobre o que pode ser corrigido. As condutas sugeridas são melhorar o controle da pressão arterial, evitar o uso concomitante de anti-inflamatórios e de álcool e, em quem usa varfarina, considerar a troca por um anticoagulante de ação direta. Como o risco de sangramento é dinâmico, a reavaliação periódica desses fatores é tratada como parte essencial do cuidado.',
        ],
        bullets: [
          'Varfarina, que pede exame de controle frequente',
          'Dabigatrana, rivaroxabana, apixabana e edoxabana',
          'Heparina, usada em situações específicas e por curto período',
        ],
      },
      {
        id: 'porque-aspirina-nao-basta',
        heading: 'Por que a aspirina não resolve',
        paragraphs: [
          'Existe uma ideia antiga de que o chamado afinamento do sangue mais simples bastaria para quem tem arritmia. Não basta. O coágulo que se forma dentro do átrio na fibrilação atrial é rico em fibrina e cresce justamente porque o sangue está parado, e a diretriz brasileira registra que o uso de antiplaquetários isoladamente não previne eventos trombóticos na fibrilação atrial. Aspirina e clopidogrel agem na aderência das plaquetas, um mecanismo diferente.',
          'Isso não é uma discussão acadêmica. Nos estudos que compararam estratégias com anticoagulante em pessoas com fibrilação atrial e doença arterial coronariana, a retirada da aspirina da combinação reduziu de forma importante as taxas de sangramento relevante, sem sacrificar a proteção. Some-se a isso o fato de que o uso concomitante de aspirina e de outros anti-inflamatórios é listado como fator que aumenta o risco de sangramento em quem usa anticoagulante. Ou seja: somar aspirina costuma aumentar dano, não proteção.',
          'Por isso, ninguém deve trocar um anticoagulante por aspirina por conta própria, nem acrescentar aspirina comprada sem receita. Se a pessoa já usa aspirina por outro motivo, a combinação precisa ser revisada pela equipe, que decide se ela faz sentido no caso específico.',
        ],
      },
      {
        id: 'restaurar-o-ritmo',
        heading: 'Restaurar o ritmo normal',
        paragraphs: [
          'A fibrilação atrial pode voltar ao ritmo normal sozinha. Quando é preciso ajudar, existem duas portas: a cardioversão elétrica, com choque sincronizado aplicado em um ponto exato da atividade elétrica do coração, e a cardioversão medicamentosa, com antiarrítmicos. O choque elétrico é a medida mais eficaz, funcionando em 70% a 90% das pessoas, enquanto alguns medicamentos restauram o ritmo em apenas 25% a 65% e frequentemente provocam efeitos colaterais.',
          'Antes de restaurar o ritmo, porém, é preciso proteger contra coágulos, porque a própria conversão pode desprender um coágulo formado no átrio. Se a arritmia está presente por mais de 48 horas, a anticoagulação deve anteceder a tentativa, por pelo menos três semanas no caso da varfarina, contadas a partir da primeira dose em nível terapêutico, ou por meio de ecocardiograma que afaste a presença de trombo. Depois da conversão, a maioria das pessoas mantém anticoagulante por pelo menos quatro semanas, e a manutenção depende do risco.',
        ],
      },
      {
        id: 'ablacao-e-cuidado-continuo',
        heading: 'Ablação, causas tratáveis e acompanhamento',
        paragraphs: [
          'Quando os medicamentos não controlam a arritmia, a ablação entra como opção. Ela destrói um foco de tecido anormal com radiofrequência, laser, corrente elétrica ou frio extremo, aplicado por um cateter que chega ao coração por uma veia. O isolamento das veias pulmonares poupa a condução do coração e interrompe a fibrilação em 60% a 80% dos casos, mas o risco de complicações sérias é significativo, de 1% a 5%, e o procedimento costuma ser reservado a candidatos específicos, como pessoas mais jovens sem doença cardíaca importante ou quem já tem insuficiência cardíaca.',
          'Há ainda um caminho que muitos pacientes esquecem: tratar a causa. O manejo do hipertireoidismo, a correção cirúrgica de uma válvula doente e o reparo de um defeito congênito podem ser eficazes, embora nem sempre eliminem a arritmia. Controlar a pressão arterial, reduzir o álcool, perder peso e tratar a apneia do sono fazem parte do mesmo pacote. E, em qualquer cenário, a regra que vale para todo o tratamento é uma só: nenhuma dose muda e nenhum medicamento é suspenso sem a equipe que acompanha.',
        ],
        cta: {
          label: 'Veja a página sobre a fibrilação atrial',
          href: '/doencas/fibrilacao-atrial/',
        },
      },
    ],
    diseaseSlugs: ['fibrilacao-atrial'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['fibrilacao-atrial-sintomas-e-o-risco-de-avc'],
    references: [
      {
        label: 'Diretriz Brasileira de Fibrilação Atrial, 2025',
        url: 'https://www.scielo.br/j/abc/a/jWrKHyPRYYh7dXZR94nJcGp/?lang=pt',
        publisher: 'Sociedade Brasileira de Cardiologia',
      },
      {
        label: 'Fibrilação atrial e flutter atrial, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-cora%C3%A7%C3%A3o-e-dos-vasos-sangu%C3%ADneos/arritmias-card%C3%ADacas/fibrila%C3%A7%C3%A3o-atrial-e-flutter-atrial',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'cirrose-hepatica-sinais-de-alerta',
    slug: 'cirrose-hepatica-sinais-de-alerta',
    metaTitle: 'Cirrose hepática: sinais de alerta e quando procurar atendimento',
    title: 'Cirrose hepática: os sinais de alerta que não podem esperar',
    excerpt:
      'A cirrose costuma ficar anos sem dar sinal e só se anuncia quando o fígado já não aguenta. Aprenda a reconhecer a descompensação: vômito de sangue, confusão mental, barriga inchada e febre.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'por-que-os-sinais-demoram',
        heading: 'Por que a cirrose demora a dar sinal',
        paragraphs: [
          'O fígado é um órgão generoso com quem o maltrata. Ele cumpre funções básicas mesmo quando seu funcionamento já está diminuído em 80%, segundo o Manual MSD, e os exames de sangue usados para avaliá-lo são relativamente insensíveis, com resultados frequentemente normais. Por isso muitas pessoas com cirrose não têm sintoma nenhum e aparentam estar bem de saúde durante muitos anos.',
          'Essa reserva também explica por que a doença costuma ser descoberta tarde, às vezes já na primeira complicação. Quando os sinais aparecem, no início são vagos e fáceis de atribuir a qualquer outra coisa: falta de apetite, perda de peso, cansaço e mal-estar generalizado. Nenhuma pessoa acorda um dia com cirrose diagnosticada; ela chega até o diagnóstico por um caminho que vale conhecer antes.',
        ],
      },
      {
        id: 'os-primeiros-sinais',
        heading: 'Os primeiros sinais, os que dão tempo de agir',
        paragraphs: [
          'À medida que a capacidade do fígado cai, ele deixa de processar a bilirrubina, um produto residual que se acumula no sangue e se deposita na pele. O resultado é a icterícia, a coloração amarelada da pele e da parte branca dos olhos, acompanhada de urina escura. A bile, produzida em menor quantidade e mal reutilizada, prejudica a absorção de gorduras, e as fezes ficam claras, moles, volumosas, oleosas e de odor anormalmente desagradável.',
          'Outros achados chamam atenção pela persistência, não pela intensidade: coceira pelo corpo todo, manchas roxas e hematomas que surgem sem trauma, perda de massa muscular e cansaço que não melhora com descanso. Homens podem notar aumento das mamas e encolhimento dos testículos, porque o fígado danificado não decompõe os estrogênios como de costume. Qualquer conjunto desses sinais em quem bebe muito, tem hepatite ou gordura no fígado justifica procura por avaliação.',
        ],
        bullets: [
          'Pele e olhos amarelados, urina escura',
          'Fezes claras, volumosas e oleosas',
          'Coceira pelo corpo todo',
          'Manchas roxas e hematomas sem trauma',
          'Cansaço e perda de peso sem explicação',
        ],
      },
      {
        id: 'o-que-e-descompensacao',
        heading: 'O que muda quando a cirrose descompensa',
        paragraphs: [
          'Existe uma linha que separa a cirrose silenciosa da cirrose perigosa, e ela se chama complicação. O tecido cicatricial bloqueia o fluxo da veia porta, que traz o sangue do intestino até o fígado, e a pressão nesse vaso sobe: é a hipertensão portal, complicação séria que se repercute nas veias do estômago, do esôfago, do baço e do reto. Ao mesmo tempo, a queda da função hepática favorece o acúmulo de líquido no abdômen.',
          'É daí que vêm os sinais maiores: varizes frágeis que podem sangrar, barriga que incha e fica tensa, substâncias tóxicas que deixam de ser removidas e atingem o cérebro. O Manual MSD descreve com clareza o que acontece depois: quando uma complicação importante ocorre, como vômitos com sangue, acúmulo de líquido na cavidade abdominal ou deterioração da função cerebral, a perspectiva se torna desfavorável. Cada um desses episódios é um ponto de virada, e cada um exige atendimento imediato.',
        ],
      },
      {
        id: 'vomito-de-sangue',
        heading: 'Vômito de sangue é emergência',
        paragraphs: [
          'As varizes esofágicas e gástricas são veias alargadas e tortas, com parede fina, submetidas a uma pressão que não deveriam suportar. Elas são frágeis e propensas ao sangramento, e a pessoa pode vomitar grandes quantidades de sangue quando se rompem. Se o sangramento for lento e se prolongar, produz anemia; se for rápido e grave, pode resultar em choque e morte.',
          'O sinal costuma ser inequívoco: vômito de sangue, ou sangue ao evacuar, por varizes do reto que também podem sangrar. Nesses casos, a pessoa não espera consulta marcada, e não tenta resolver em casa. Ligue para o SAMU 192 ou vá ao serviço de emergência mais próximo, porque o tempo de socorro e de estabilização faz diferença direta no desfecho. O SAMU é gratuito, acessado pelo número 192, funciona 24 horas por dia e sete dias por semana, e a orientação por telefone já começa na ligação.',
        ],
      },
      {
        id: 'confusao-mental',
        heading: 'Confusão mental e sonolência anormal',
        paragraphs: [
          'Quando o fígado deixa de filtrar, toxinas permanecem no sangue, viajam até o cérebro e alteram o funcionamento dele. É a encefalopatia hepática, que o Manual MSD descreve como confusão e sonolência. Os primeiros episódios são fáceis de errar em casa: a pessoa dorme de dia e fica acordada à noite, esquece conversas, troca palavras, fica desorientada ou muda de comportamento de um jeito que a família estranha.',
          'Esse tipo de mudança em alguém com doença hepática conhecida é um motivo de atendimento no mesmo dia, e não de observação até a próxima consulta. Antes de culpar a idade, o sono ou o estresse, é preciso examinar a pessoa, porque a encefalopatia tem tratamento e porque o médico investiga o que a desencadeou naquele episódio. Um episódio reconhecido e tratado a tempo evita o próximo, mais grave.',
        ],
      },
      {
        id: 'barriga-inchada-e-febre',
        heading: 'Barriga inchada, febre e falta de ar',
        paragraphs: [
          'O abdômen que incha e fica tenso indica ascite, o acúmulo de líquido na cavidade abdominal. O problema é que esse líquido pode se infectar, no que se chama peritonite bacteriana espontânea, descrita como desconforto abdominal frequentemente acompanhado de febre. Febre em pessoa com cirrose nunca é um sintoma banal: o número de glóbulos brancos pode estar baixo porque o baço aumentado os retém, e a síntese hepática de proteínas de defesa diminui, o que eleva o risco de infecções.',
          'A lista de sinais que pedem avaliação no mesmo dia inclui ainda dificuldade para respirar, que pode vir do líquido abdominal limitando o diafragma ou de complicações pulmonares e renais, a redução importante da quantidade de urina, o amarelo intenso e rápido na pele e nos olhos e a tontura ou o desmaio. Em quem já tem cirrose, qualquer um desses achados significa descompensação, e descompensação muda o plano de tratamento.',
        ],
      },
      {
        id: 'o-que-dizer-no-atendimento',
        heading: 'O que dizer ao pedir ajuda',
        paragraphs: [
          'Na ligação ou na chegada ao serviço de emergência, três informações mudam a conduta: o diagnóstico de cirrose já estabelecido, a medicação em uso, incluindo diuréticos e anticoagulantes, e quando começaram o vômito, a febre ou a confusão. Diga também se a pessoa consome álcool e em que quantidade, porque isso altera tanto a avaliação quanto o cuidado nas primeiras horas.',
          'Levar a lista de medicamentos e os últimos exames ajuda a equipe a decidir com rapidez, e evita que alguém receba uma dose padrão de um remédio que o fígado não consegue processar. Se a pessoa está confusa, não a deixe dirigir nem adiar a ida: o SAMU 192 existe para esse tipo de situação, e a orientação por telefone já orienta os primeiros passos enquanto a ambulância é acionada.',
        ],
        cta: {
          label: 'Leia a página completa sobre cirrose hepática',
          href: '/doencas/cirrose-hepatica/',
        },
      },
    ],
    relatedArticleSlugs: [
      'cirrose-hepatica-o-que-parar-e-o-que-muda',
    ],
    diseaseSlugs: ['cirrose-hepatica'],
    topicSlugs: ['doencas-cronicas'],
    references: [
      {
        label: 'Cirrose hepática, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/doen%C3%A7as-hep%C3%A1ticas-e-da-ves%C3%ADcula-biliar/fibrose-e-cirrose-hep%C3%A1tica/cirrose-hep%C3%A1tica',
        publisher: 'Manual MSD',
      },
      {
        label: 'Hepatites virais: prevenção, diagnóstico e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hepatites-virais',
        publisher: 'Ministério da Saúde (Brasil)',
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
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'cirrose-hepatica-o-que-parar-e-o-que-muda',
    slug: 'cirrose-hepatica-o-que-parar-e-o-que-muda',
    metaTitle: 'Cirrose hepática: o que parar e o que muda no tratamento',
    title: 'Cirrose hepática: o que parar, o que tratar e o que muda depois',
    excerpt:
      'Parar o álcool por completo, tratar a hepatite, ajustar medicamentos e vigiar o câncer de fígado: as cinco decisões que mudam a evolução da cirrose, segundo o que dizem as fontes clínicas.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'a-logica-do-tratamento',
        heading: 'A lógica do tratamento: frear a causa',
        paragraphs: [
          'O Manual MSD é direto sobre a melhor abordagem: interromper a cirrose nos seus estágios iniciais, corrigindo ou tratando a causa. Tratar a causa, em geral, previne danos adicionais, e às vezes o estado da pessoa melhora. O que não existe é um remédio que apague a cicatriz já formada, porque o dano no fígado é quase sempre permanente e é improvável que o órgão volte a ficar normal.',
          'Isso coloca duas frentes lado a lado, e nenhuma delas é opcional. A primeira ataca o que continua agredindo o órgão: álcool, vírus, gordura metabólica, medicamento que faz mal, sobrecarga de ferro ou de cobre. A segunda acompanha e trata as complicações conforme surgem, do líquido na barriga às varizes de esôfago. Somada a elas vem a vigilância, porque depois que a cirrose se instala aumenta o risco de câncer hepático.',
        ],
      },
      {
        id: 'parar-o-alcool-por-completo',
        heading: 'Parar o álcool por completo, mesmo sem causa alcoólica',
        paragraphs: [
          'A recomendação vale para todo mundo com cirrose, não apenas para quem bebeu demais: para evitar a progressão da doença, as pessoas devem parar completamente de consumir álcool, mesmo que o álcool não seja a principal causa do problema hepático. O motivo é simples de entender e difícil de aceitar. Consumir bebidas alcoólicas, mesmo em quantidades muito pequenas, pode ser muito prejudicial para um fígado que já tem cirrose.',
          'O outro lado é encorajador, e a fonte não o esconde: parar todo o consumo de álcool impede a formação de mais fibrose cicatricial no fígado. Se a pessoa continua bebendo, mesmo em pequenas quantidades, a cirrose progride e causa complicações sérias. Quando aparecem sintomas de abstinência, eles são tratados, e pedir ajuda profissional para suspender o álcool faz parte do cuidado, não é um favor que se pede a alguém.',
        ],
      },
      {
        id: 'tratar-a-causa-de-cada-caso',
        heading: 'Cada causa tem um tratamento próprio',
        paragraphs: [
          'A hepatite viral crônica é tratada com medicamentos antivirais, e as doenças hepáticas autoimunes recebem corticosteroides ou outros medicamentos que afetam o sistema imunológico. Na hemocromatose, o melhor tratamento disponível é a flebotomia, a remoção periódica de sangue, embora alguns pacientes precisem de medicamentos para retirar o excesso de ferro; na doença de Wilson, usa-se um medicamento que remove o cobre do corpo. São causas raras, mas com um detalhe decisivo: têm tratamento específico, e encontrá-las muda o prognóstico.',
          'Na esteato-hepatite associada à disfunção metabólica, a MASH, o melhor tratamento consiste em perder peso, e o diabetes e o colesterol alto devem ser controlados rigorosamente. A Sociedade Brasileira de Hepatologia, que adotou a nova nomenclatura no lugar de NASH, descreve essa forma como a mais avançada da doença gordurosa, caracterizada por inflamação hepática, lesão dos hepatócitos e risco elevado de progressão para fibrose, cirrose e carcinoma hepatocelular. O Ministério da Saúde reforça que a gordura no fígado evolui sem sintoma e pode chegar a cirrose e câncer.',
          'Duas observações completam essa frente. A primeira é a vacinação contra hepatite A e hepatite B para quem não foi vacinado antes, medida para proteger o órgão de danos adicionais que se somariam à cirrose. A segunda é que alguns medicamentos aprovados para a MASH ainda não estão liberados para pacientes com cirrose, o que mostra por que automedicação e promessa de cura rápida são péssimos conselheiros nesse terreno.',
        ],
      },
      {
        id: 'remedios-que-o-figado-nao-suporta',
        heading: 'Medicamentos, suplementos e chás',
        paragraphs: [
          'O fígado processa muitos medicamentos, toxinas e produtos residuais, decompondo-os em substâncias menos prejudiciais ou mais fáceis de eliminar. Quando ele perde essa capacidade, essas substâncias se acumulam no sangue, e os efeitos de vários remédios, por vezes inclusive efeitos colaterais sérios, são intensificados. Pode acontecer mesmo em quem recebe uma dose que, antes, não provocava nenhum dano.',
          'A consequência prática é uma conversa honesta com a equipe de saúde sobre absolutamente tudo o que entra na boca: medicamentos com e sem receita, fitoterápicos e suplementos alimentares. Quando é preciso usar um remédio metabolizado pelo fígado, doses muito menores são empregadas para evitar lesões maiores, e todo medicamento que agride o órgão deve ser interrompido sempre que possível e, se necessário, substituído por outro. Também por isso algumas pessoas precisam suspender um opioide ou um calmante que usavam havia anos.',
        ],
      },
      {
        id: 'sal-peso-e-nutrientes',
        heading: 'Sal, peso e vitaminas no dia a dia',
        paragraphs: [
          'Na cirrose avançada, com acúmulo de líquido no abdômen, a orientação inclui restrição de sódio na dieta, porque o excesso de sódio contribui para esse acúmulo. A alimentação deixa de ser um detalhe de bem-estar e passa a fazer parte do controle de um sintoma. Desnutrição é comum, por perda de apetite e por absorção deficiente de gorduras e de vitaminas lipossolúveis, e a suplementação vitamínica entra quando há deficiência comprovada.',
          'A má absorção de vitamina D favorece a osteoporose, e a de vitamina K aumenta a tendência a sangrar. Quem tem cirrose pode fraturar ossos com traumas leves, como uma pequena queda, e isso tem relação com a perda de massa muscular e com a deficiência de nutrientes. Cuidar do peso, manter atividade física compatível com a capacidade do corpo e discutir cada suplemento com a equipe são medidas concretas, não recomendações genéricas.',
        ],
      },
      {
        id: 'as-complicacoes-que-exigem-procedimento',
        heading: 'Quando a complicação exige procedimento',
        paragraphs: [
          'Para as varizes que sangram, o Manual MSD descreve o uso de betabloqueadores, que diminuem a pressão arterial nos vasos hepáticos, e a aplicação de tiras elásticas por endoscopia para isolar os vasos sangrantes, o que se chama bandagem ou ligadura endoscópica. Se essas medidas não puderem ser usadas ou não tiverem êxito, existem procedimentos que desviam o sangue: a derivação portossistêmica intra-hepática transjugular liga a veia porta a uma das veias hepáticas por dentro do fígado, reduzindo a pressão e, com isso, o sangramento e o acúmulo de líquido no abdômen.',
          'Para a encefalopatia hepática, usam-se medicamentos que ajudam a ligar as toxinas no intestino, eliminadas nas fezes, junto com antibióticos que reduzem o número de bactérias que as produzem. Para o líquido acumulado no abdômen de quem tem cirrose avançada, há restrição de sódio na dieta e medicamentos que ajudam o corpo a eliminar o excesso de líquido, aumentando a produção de urina. E para algumas pessoas o transplante de fígado é o melhor tratamento, podendo salvar a vida de quem tem cirrose avançada ou câncer hepático, com indicação baseada na probabilidade de morte sem o transplante.',
        ],
      },
      {
        id: 'o-acompanhamento-que-nao-pode-parar',
        heading: 'As consultas que não podem ser puladas',
        paragraphs: [
          'Confirmada a cirrose, o acompanhamento tem agenda própria. Um ultrassom, com ou sem exame de sangue que pode indicar tumor hepático, é realizado a cada seis meses para verificar a presença de câncer de fígado, porque a detecção precoce é o que torna o tratamento curativo possível. Uma endoscopia do trato digestivo superior procura varizes e é repetida a cada 2 a 3 anos, com maior frequência quando varizes já foram encontradas. Exames de sangue que avaliam o fígado são feitos regularmente.',
          'Nada disso significa que a vida para. Com a causa controlada, o álcool suspenso, as vacinas em dia e as consultas cumpridas, muitas pessoas seguem anos sem descompensação. O que o diagnóstico exige é disciplina e honestidade, sobretudo sobre o álcool e sobre os medicamentos, e a recusa firme de promessas de desintoxicação hepática ou de receitas milagrosas. Quem quer entender o que ainda dá para recuperar no fígado encontra na página da cirrose o caminho completo.',
        ],
        cta: {
          label: 'Leia a página completa sobre cirrose hepática',
          href: '/doencas/cirrose-hepatica/',
        },
      },
    ],
    relatedArticleSlugs: [
      'cirrose-hepatica-sinais-de-alerta',
    ],
    diseaseSlugs: ['cirrose-hepatica'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    references: [
      {
        label: 'Cirrose hepática, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/doen%C3%A7as-hep%C3%A1ticas-e-da-ves%C3%ADcula-biliar/fibrose-e-cirrose-hep%C3%A1tica/cirrose-hep%C3%A1tica',
        publisher: 'Manual MSD',
      },
      {
        label: 'Esteatose hepática: o que é, causas, sintomas e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Atualização na nomenclatura para doenças hepáticas associadas a esteatose: de NASH para MASH',
        url: 'https://sbhepatologia.org.br/publicacoes/artigos/atualizacao-na-nomenclatura-para-doencas-hepaticas-associadas-a-esteatose-de-nash-para-mash/',
        publisher: 'Sociedade Brasileira de Hepatologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'ulcera-peptica-sintomas-e-quando-o-estomago-sangra',
    slug: 'ulcera-peptica-sintomas-e-quando-o-estomago-sangra',
    metaTitle: 'Úlcera péptica: sintomas e sangramento',
    title: 'Úlcera péptica: os sintomas e quando o estômago sangra',
    excerpt:
      'Queimação na boca do estômago que melhora ao comer, dor que acorda à noite, vômito com sangue ou fezes pretas: como a úlcera péptica se anuncia e quando ela vira emergência.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'a-dor-na-boca-do-estomago',
        heading: 'A dor que faz procurar ajuda',
        paragraphs: [
          'A úlcera péptica costuma começar como uma queimação na boca do estômago, na região logo abaixo do esterno. A dor é de intensidade leve a moderada e é descrita como roedura, pontada, sensibilidade dolorosa ou uma fome incômoda que aparece em certos momentos do dia. Ela vem e vai, porque a ferida cicatriza por um tempo e depois volta a doer. Esse vaivém faz muita gente conviver com o problema sem investigar a causa, tratando cada episódio com um antiácido comprado sem receita.',
          'O padrão da dor ajuda o médico a desconfiar do tipo de úlcera. Na úlcera duodenal, a pessoa geralmente acorda sem dor, ela aparece no meio da manhã, melhora ao comer ou tomar antiácido e retorna duas a três horas depois. Também é frequente a dor acordar a pessoa durante a noite. Os episódios podem ocorrer uma ou mais vezes por dia, durante uma a várias semanas, e muitas pessoas aprendem, com a própria experiência, a reconhecer quando uma nova crise está próxima.',
        ],
      },
      {
        id: 'quando-a-ulcera-nao-doi',
        heading: 'Úlcera que não dói',
        paragraphs: [
          'Ausência de dor não significa ausência de úlcera. Crianças, idosos e adultos cuja ferida foi causada por anti-inflamatório podem não apresentar os sintomas habituais, ou não apresentar sintoma nenhum. Nesses casos, a úlcera só é descoberta quando surge uma complicação, muitas vezes um sangramento. Apenas metade das pessoas com úlcera apresenta os sintomas característicos, o que mostra como a dor isolada é um critério frágil para decidir quem precisa de exame.',
          'Outra situação comum é atribuir a queimação a outra causa e tratar o sintoma sozinho. O antiácido alivia a sensação porque neutraliza o ácido do estômago, mas não remove a causa da ferida, e o alívio passageiro pode atrasar a procura por atendimento. Quando o desconforto volta com mais frequência, quando a dor acorda a pessoa à noite ou quando aparece junto de perda de peso sem explicação, o passo é a avaliação médica, e não uma dose maior de remédio por conta própria.',
        ],
      },
      {
        id: 'o-que-muda-a-dor',
        heading: 'O que muda a dor, e o que ela revela',
        paragraphs: [
          'A relação da dor com as refeições é um dos sinais mais úteis para entender a úlcera. Comer neutraliza temporariamente o ácido gástrico, então a dor da úlcera duodenal costuma ceder depois da refeição e retornar quando o estômago volta a ficar vazio. Leite, comida e antiácidos produzem o mesmo efeito, que dura pouco. Uma minoria das pessoas percebe apenas uma sensação de desconforto, o que dificulta identificar a ferida antes de uma complicação.',
          'A úlcera gástrica, por sua vez, não segue um padrão fixo: fazer uma refeição pode aliviar por alguns instantes e também pode provocar dor. Quando a úlcera gera inchaço ou cicatriz na região que liga o estômago ao intestino delgado, surgem sensação de saciedade excessiva após comer, distensão, náusea e vômito. Esse conjunto merece investigação mais rápida, porque indica que a passagem do alimento está prejudicada e pode levar a perda de peso e desidratação.',
        ],
      },
      {
        id: 'sinais-de-sangramento',
        heading: 'Sinais de que a úlcera está sangrando',
        paragraphs: [
          'O sangramento é a complicação mais frequente da úlcera péptica e pode ocorrer mesmo em ferida que nunca doeu. Os sinais mais evidentes aparecem no vômito e nas fezes: sangue vermelho-vivo, aglomerados marrom-avermelhados de sangue parcialmente digerido que se parecem com borra de café, fezes pretas ou, em alguns casos, fezes evidentemente com sangue. Qualquer um desses achados pede atendimento imediato, de preferência em serviço de emergência, porque o volume perdido pode ser maior do que parece.',
          'Nem toda perda de sangue é visível. Quantidades pequenas podem passar despercebidas nas fezes e, se a perda for persistente, acabar causando [anemia por falta de ferro](/doencas/anemia-ferropriva/), com cansaço, falta de ar aos esforços e palidez. Quando o sangramento é mais volumoso, aparecem fraqueza, queda da pressão ao levantar, suor, sede e desmaio. Esses sinais indicam perda circulante e não devem ser aguardados em casa, mesmo que a dor abdominal tenha melhorado.',
        ],
        bullets: [
          'Vômito com sangue vermelho-vivo',
          'Vômito com aspecto de borra de café',
          'Fezes pretas ou com sangue',
          'Fraqueza, suor e tontura ao levantar',
          'Cansaço progressivo, palidez e falta de ar aos esforços',
        ],
      },
      {
        id: 'dor-subita-e-intensa',
        heading: 'Dor súbita e intensa pode indicar perfuração',
        paragraphs: [
          'Uma dor abdominal súbita, intensa e contínua, que se espalha rapidamente por todo o abdome, pode indicar perfuração: a úlcera abre um buraco na parede do duodeno ou, com menos frequência, do estômago. A pessoa costuma sentir dor em um ou ambos os ombros, agravada pela respiração profunda ou por mudança de posição, e prefere ficar parada. O abdome fica sensível ao toque. Esse quadro é chamado de abdome agudo e exige cirurgia imediata, com antibiótico administrado pela veia.',
          'A perfuração pode se manifestar de forma mais leve em idosos, em quem usa corticoide ou imunossupressores e em pessoas muito debilitadas, o que atrasa o reconhecimento. Febre nesse contexto indica infecção na cavidade abdominal e, sem tratamento, o quadro pode evoluir para choque. Outra complicação que muda a rotina é a obstrução da saída do estômago, com vômitos repetidos, muitas vezes com grande volume de comida ingerida horas antes, perda de peso e desequilíbrio de sais no organismo.',
        ],
        bullets: [
          'Dor abdominal que começa de repente e não passa',
          'Abdome rígido, sensível ao toque e que dói ao pressionar',
          'Dor que piora ao respirar fundo ou mudar de posição',
          'Febre acompanhando a dor abdominal intensa',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer diante de um sinal grave',
        paragraphs: [
          'Diante de vômito com sangue, fezes pretas ou dor abdominal súbita e intensa, procure atendimento de emergência sem esperar. Se a pessoa estiver muito fraca, confusa ou desmaiada, ligue para o SAMU 192 e não a leve dirigindo sozinha. Não conte com o efeito de um antiácido em casa. Levar a lista dos medicamentos usados nos últimos dias, incluindo anti-inflamatórios tomados por conta própria, ajuda a equipe a entender a causa do sangramento e a decidir a conduta.',
          'Fora da emergência, a investigação começa no atendimento médico comum, que avalia a história e o exame físico e define quem precisa de endoscopia digestiva alta. O médico procura a origem do sangramento no estômago e no duodeno, e a própria endoscopia permite tratar a úlcera que sangra, seja cauterizando o ponto que sangra, seja injetando material que provoca a coagulação. Quem usa anti-inflamatório por indicação médica deve discutir a substituição com o profissional, em vez de suspender o tratamento por conta própria.',
        ],
        cta: {
          label: 'Veja a página sobre a úlcera péptica',
          href: '/doencas/ulcera-peptica/',
        },
      },
    ],
    diseaseSlugs: ['ulcera-peptica'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['ulcera-peptica-tratamento-e-helicobacter'],
    references: [
      {
        label: 'Úlcera péptica',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-digestivos/gastrite-e-%C3%BAlcera-p%C3%A9ptica/%C3%BAlcera-p%C3%A9ptica',
        publisher: 'Manual MSD Versão Saúde para a Família',
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
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'ulcera-peptica-tratamento-e-helicobacter',
    slug: 'ulcera-peptica-tratamento-e-helicobacter',
    metaTitle: 'Úlcera péptica: tratamento e H. pylori',
    title: 'Úlcera péptica: tratamento, Helicobacter pylori e como evitar o retorno',
    excerpt:
      'A úlcera péptica deixou de ser doença crônica sem fim quando se descobriu sua causa principal. Entenda a erradicação do H. pylori, os remédios que reduzem o ácido e o que fazer para não voltar a ter úlcera.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'duas-causas-que-mudam-o-tratamento',
        heading: 'Duas causas que mudam o tratamento',
        paragraphs: [
          'Tratar a úlcera sem tratar a causa é o que faz a doença voltar. As duas causas mais comuns são a infecção pela bactéria Helicobacter pylori e o uso de anti-inflamatórios não esteroides, como aspirina, ibuprofeno e naproxeno. A bactéria é responsável por mais de 50% das úlceras duodenais e por 30% a 50% das úlceras no estômago, segundo o Manual MSD, e os anti-inflamatórios respondem por mais da metade dos casos de úlcera péptica, ainda que a maioria de quem os usa não desenvolva a doença.',
          'Isso significa que o primeiro passo é identificar em qual grupo a pessoa está. A investigação é feita com exames que detectam o H. pylori e, quando necessário, com endoscopia digestiva alta, que permite ver a ferida no estômago ou no duodeno e coletar amostras para análise. Saber a causa define a duração do tratamento, a necessidade de antibiótico e o que precisa ser suspenso, e evita meses de alívio parcial com antiácidos.',
        ],
      },
      {
        id: 'erradicacao-do-helicobacter',
        heading: 'Como funciona a erradicação do H. pylori',
        paragraphs: [
          'Quando a infecção é confirmada, o tratamento combina dois antibióticos com um inibidor da bomba de prótons, às vezes acompanhados de subsalicilato de bismuto, esquema conhecido como terapia quádrupla. Existem também esquemas com dois antibióticos e o inibidor da bomba de prótons, a terapia tripla. Os antibióticos mais usados incluem amoxicilina, claritromicina, metronidazol e tetraciclina, e a escolha do esquema é feita pelo médico, considerando alergias, outros remédios em uso e a resistência bacteriana da região.',
          'Depois do tratamento, são realizados exames para confirmar que a bactéria foi de fato erradicada. Esse passo importa porque a resistência aos antibióticos tem crescido e porque a diferença de resultado é grande: quando a erradicação é bem-sucedida, cerca de 10% das pessoas voltam a ter úlcera; quando a bactéria continua lá, a úlcera retorna em cerca de 50% dos casos. Não completar o esquema por ter melhorado da dor é uma das razões mais comuns para a falha.',
        ],
      },
      {
        id: 'remedios-que-reduzem-o-acido',
        heading: 'Os remédios que reduzem a acidez',
        paragraphs: [
          'Enquanto a causa é tratada, o objetivo é tirar o ácido do caminho para que a ferida cicatrize. Os inibidores da bomba de prótons e os bloqueadores de histamina-2 reduzem a produção de ácido gástrico, e os primeiros cicatrizam a úlcera em menos tempo e em uma parcela maior de pessoas, por isso costumam ser preferidos. Antiácidos, líquidos ou comprimidos com carbonato de cálcio, apenas neutralizam o ácido já formado e servem para alívio momentâneo.',
          'Na maioria das pessoas, o tratamento que reduz a acidez é mantido por quatro a oito semanas. A cicatrização acontece independentemente da causa, o que explica por que tanta gente melhora sem jamais investigar o H. pylori e, depois, volta a ter dor. Dose, horário e duração devem seguir a prescrição, e a melhora inicial não é sinal de que o tratamento pode ser interrompido: é justamente a etapa em que a ferida ainda está fechando.',
        ],
      },
      {
        id: 'o-que-precisa-parar',
        heading: 'O que precisa ser suspenso ou ajustado',
        paragraphs: [
          'Se a úlcera está ligada a um anti-inflamatório, é preciso rever o medicamento com quem o receitou, avaliando se há alternativa, se a dose pode ser menor e se é necessário proteger o estômago durante o uso. A suspensão da causa faz parte do tratamento, e manter o anti-inflamatório costuma anular o efeito dos remédios que reduzem o ácido. Também é importante eliminar outras substâncias que irritam o estômago, como álcool e nicotina, e quem fuma tem úlceras que demoram mais para cicatrizar e tendem a voltar.',
          'Nenhum desses ajustes deve ser improvisado. Quem usa aspirina por recomendação médica, por exemplo, não deve interromper a medicação por conta própria depois de descobrir uma úlcera: a decisão envolve o risco cardiovascular e cabe ao médico escolher o esquema que protege o estômago sem criar outro problema. Levar as embalagens à consulta ajuda a equipe a enxergar o que está sendo tomado sem receita, inclusive os analgésicos usados em dias de dor de cabeça.',
        ],
        bullets: [
          'Anti-inflamatórios usados por conta própria',
          'Álcool durante o tratamento',
          'Cigarro, que atrasa a cicatrização e favorece o retorno da úlcera',
          'Alimentos que claramente pioram a dor e o inchaço',
        ],
      },
      {
        id: 'dieta-e-o-que-nao-acelera-a-cicatrizacao',
        heading: 'Dieta, leite e o que não acelera a cicatrização',
        paragraphs: [
          'A ideia de que existe uma dieta que cura úlcera não se sustenta. Dietas leves podem ajudar a reduzir a acidez, mas não há evidência de que acelerem a cicatrização das úlceras ou evitem que elas voltem. Comer e beber leite aliviam a dor da úlcera duodenal por algumas horas, porque neutralizam o ácido, e esse alívio é real, mas temporário. O que fecha a ferida é o tratamento que reduz o ácido e elimina a causa.',
          'Na prática, o critério mais útil é a observação individual: evite os alimentos que aparentemente causam dor ou aumentam a sensação de inchaço. Não há necessidade de proibições rígidas além das que têm fundamento, como o álcool e o tabaco. Manter os horários da medicação é mais decisivo para a cicatrização do que qualquer cardápio especial, e essa é uma mudança simples de sustentar depois que a dor passa.',
        ],
      },
      {
        id: 'prevenir-o-retorno',
        heading: 'Prevenir o retorno da úlcera',
        paragraphs: [
          'A prevenção acompanha as duas causas. Contra o H. pylori, limitam-se as oportunidades de transmissão: lavar as mãos depois de usar o banheiro e antes de comer, usar água tratada e higienizar bem os alimentos, já que a bactéria pode ser transmitida de pessoa para pessoa e tende a se concentrar em famílias. Uma parcela relevante da população mundial carrega a infecção, cerca de 40% segundo o V Consenso Brasileiro sobre o tema, e ela vem caindo com melhoria de higiene e saneamento.',
          'A segunda frente é o uso de anti-inflamatórios, evitando a automedicação repetida e discutindo com o médico a menor dose eficaz quando o uso é contínuo. Quem já teve úlcera deve dizer isso em qualquer consulta, inclusive antes de cirurgias e de novas prescrições. Com causa corrigida e tratamento completo, a úlcera péptica deixa de ser uma condenação de longo prazo: a ferida cicatriza, os sintomas desaparecem e o risco de complicações cai.',
        ],
        cta: {
          label: 'Veja a página sobre a úlcera péptica',
          href: '/doencas/ulcera-peptica/',
        },
      },
    ],
    diseaseSlugs: ['ulcera-peptica'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['ulcera-peptica-sintomas-e-quando-o-estomago-sangra'],
    references: [
      {
        label: 'Úlcera péptica',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-digestivos/gastrite-e-%C3%BAlcera-p%C3%A9ptica/%C3%BAlcera-p%C3%A9ptica',
        publisher: 'Manual MSD Versão Saúde para a Família',
      },
      {
        label: 'Infecção por Helicobacter pylori',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-digestivos/gastrite-e-%C3%BAlcera-p%C3%A9ptica/infec%C3%A7%C3%A3o-por-helicobacter-pylori',
        publisher: 'Manual MSD Versão Saúde para a Família',
      },
      {
        label: 'V Consenso Brasileiro sobre a infecção por Helicobacter pylori',
        url: 'https://www.scielo.br/j/ag/a/G9BpZdBB8tHTKdF9b5nmSbp/?lang=pt',
        publisher: 'Arquivos de Gastroenterologia (SciELO Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'hipotireoidismo-sintomas-e-exame-de-sangue',
    slug: 'hipotireoidismo-sintomas-e-exame-de-sangue',
    metaTitle: 'Hipotireoidismo: sintomas e exame',
    title: 'Hipotireoidismo: os sintomas e o exame de sangue que confirma',
    excerpt:
      'Cansaço, sensação de frio, prisão de ventre e pele seca podem apontar para a tireoide trabalhando pouco. Veja como o exame de TSH separa o hipotireoidismo de outras causas de cansaço.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-a-tireoide-controla',
        heading: 'O que a tireoide controla no corpo',
        paragraphs: [
          'A tireoide é uma glândula pequena situada na parte da frente do pescoço que fabrica hormônios, principalmente a tiroxina, chamada de T4. Esses hormônios funcionam como um acelerador do metabolismo: eles definem a velocidade com que cada célula usa energia, interferem na forma como o corpo aproveita calorias, atuam no controle da temperatura e são indispensáveis para o desenvolvimento do sistema nervoso.',
          'Quando a produção cai, o organismo inteiro reduz o ritmo, no estado que as diretrizes descrevem como hipometabolismo. É por isso que um único problema hormonal aparece como queixa em tantos lugares diferentes: energia, intestino, pele, cabelo, humor, memória, batimentos cardíacos e ciclo menstrual. Entender esse alcance explica por que o hipotireoidismo é frequentemente descoberto por médicos de outras especialidades, como ginecologistas e cardiologistas.',
        ],
      },
      {
        id: 'os-sintomas-mais-comuns',
        heading: 'Os sintomas que fazem suspeitar',
        paragraphs: [
          'Os primeiros sinais costumam ser discretos e insidiosos. O Manual MSD descreve como mais comuns a retenção de líquidos com inchaço, principalmente ao redor dos olhos, o cansaço, a intolerância ao frio e a sensação de confusão mental. A pele fica seca, grossa e descamativa, o cabelo ressecado e mais ralo, a voz sai rouca e os batimentos cardíacos diminuem.',
          'Outros achados completam o quadro: prisão de ventre, ganho de peso modesto ligado à retenção de líquidos e ao metabolismo mais lento, tristeza e esquecimentos, menstruação mais intensa e colesterol elevado. Em idosos, os sintomas tendem a ser menos específicos, com confusão, falta de apetite, quedas e dores musculares, o que faz o quadro ser atribuído à idade. Muitas vezes a pessoa percebe apenas que está rendendo menos do que antes.',
        ],
        bullets: [
          'Cansaço que não melhora com descanso',
          'Sensação de frio fora do comum',
          'Prisão de ventre',
          'Pele seca e cabelo ressecado e mais ralo',
          'Inchaço ao redor dos olhos e ganho de peso modesto',
          'Tristeza, esquecimentos e raciocínio mais lento',
        ],
      },
      {
        id: 'porque-os-sintomas-nao-bastam',
        heading: 'Por que o sintoma isolado não diagnostica',
        paragraphs: [
          'Nenhuma dessas queixas pertence só à tireoide. Cansaço tem causas que vão de sono ruim a anemia, e a própria descrição médica do hipotireoidismo fala em sinais discretos, inespecíficos e que surgem aos poucos. Os sintomas podem diferir bastante em pessoas idosas, e parcela relevante de quem tem a forma mais leve não sente nada. Ou seja: a intensidade do que a pessoa sente não acompanha o quanto o hormônio está baixo.',
          'Esse é o ponto em que a conversa sobre metabolismo lento perde valor. Metabolismo mais devagar é a consequência da falta de hormônio, não um diagnóstico que se possa fazer por intuição. A mesma queixa pode vir de outra doença que precisa de outro tratamento. Por isso, a suspeita levantada pelo sintoma precisa ser confirmada ou descartada por exame de sangue, e não por uma sensação. Vale o cuidado contrário também: atribuir toda queixa à tireoide faz deixar de investigar outras comorbidades que explicariam o sintoma e que as diretrizes mandam descartar quando o exame está controlado.',
        ],
      },
      {
        id: 'o-exame-de-sangue',
        heading: 'O exame de sangue: o TSH',
        paragraphs: [
          'O exame de escolha é a dosagem do TSH, o hormônio que a hipófise libera para estimular a tireoide. Normalmente, o nível de TSH no sangue é o melhor indicador da função da glândula: ele sobe quando a tireoide trabalha pouco, porque o corpo tenta forçá-la a produzir mais, e cai quando a glândula trabalha demais. Quando a investigação parte de uma suspeita de problema na tireoide, o TSH é sempre medido.',
          'A dosagem de T3 não é um exame sensível para diagnosticar hipotireoidismo, porque muitos pacientes mantêm o T3 normal mesmo com a glândula deficiente. Por isso o painel básico é TSH mais T4 livre. Se a causa autoimune for suspeitada, entram os anticorpos contra a tireoide, os chamados ATPO, presentes na grande maioria dos casos de tireoidite de Hashimoto. O ultrassom fica reservado para quando a glândula está aumentada ou tem nódulos. Na mesma consulta costumam ser pedidos hemograma e perfil de gorduras, porque o hipotireoidismo eleva o colesterol e pode causar anemia, dois achados que mudam a condução do caso.',
        ],
      },
      {
        id: 'o-que-o-resultado-significa',
        heading: 'Como interpretar o resultado',
        paragraphs: [
          'Para a população geral, a faixa de referência tradicional do TSH vai de 0,45 a 4,5 mU/L, segundo as diretrizes latino-americanas publicadas no Brasil. No hipotireoidismo primário, o TSH está elevado e o T4 livre, baixo. Na forma secundária, provocada por doença na hipófise ou no hipotálamo, os dois ficam baixos, situação rara que muda completamente a conduta. Resultado com TSH alto e T4 livre normal caracteriza o hipotireoidismo subclínico.',
          'Um número alterado não basta para começar tratamento. O TSH precisa ser repetido, porque elevações transitórias são comuns, assim como a variação dentro de uma mesma pessoa, e o limite superior do normal aumenta com a idade, o que faz idoso com valor levemente alto muitas vezes não ter doença. Também é preciso evitar interpretação em quem está internado com outra doença aguda, caso em que os exames tireoidianos ficam menos confiáveis.',
        ],
        bullets: [
          'TSH elevado com T4 livre baixo aponta hipotireoidismo primário',
          'TSH elevado com T4 livre normal aponta forma subclínica',
          'TSH e T4 ambos baixos levantam a hipótese de forma secundária',
          'TSH levemente alto em idoso exige repetição antes de qualquer conclusão',
        ],
      },
      {
        id: 'quem-deve-fazer-o-exame',
        heading: 'Quem deve fazer o exame',
        paragraphs: [
          'Adultos com sintomas merecem investigação, e as diretrizes apontam grupos em que a procura ativa por casos vale mais: mulheres acima de 60 anos, gestantes e mulheres que pretendem engravidar, pessoas que já receberam iodo radioativo ou fizeram cirurgia na tireoide e quem convive com outra doença autoimune, como diabetes tipo 1 ou vitiligo. Nos idosos, a frequência é maior: cerca de 10% das mulheres e 6% dos homens depois dos 65 anos têm hipotireoidismo.',
          'Fora desses grupos, testar todo mundo não é a recomendação. Diversas sociedades médicas se posicionaram contra o rastreamento populacional em adultos sem sintoma, para evitar tratar alterações laboratoriais leves que não precisariam de terapia. A exceção é universal e vale no Brasil inteiro: todo recém-nascido deve ser testado, pelo teste do pezinho, porque o hipotireoidismo congênito causa dano irreversível no desenvolvimento quando o tratamento atrasa.',
        ],
        cta: {
          label: 'Veja a página sobre o hipotireoidismo',
          href: '/doencas/hipotireoidismo/',
        },
      },
    ],
    diseaseSlugs: ['hipotireoidismo'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['hipotireoidismo-tratamento-com-levotiroxina'],
    references: [
      {
        label: 'Hipotireoidismo',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-hormonais-e-metab%C3%B3licos/dist%C3%BArbios-da-tireoide/hipotireoidismo',
        publisher: 'Manual MSD Versão Saúde para a Família',
      },
      {
        label: 'Considerações gerais sobre a tireoide',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-hormonais-e-metab%C3%B3licos/dist%C3%BArbios-da-tireoide/considera%C3%A7%C3%B5es-gerais-sobre-a-tireoide',
        publisher: 'Manual MSD Versão Saúde para a Família',
      },
      {
        label: 'Diretrizes clínicas práticas para o manejo do hipotiroidismo',
        url: 'https://www.scielo.br/j/abem/a/RyCDtMtQqCKP5vG8hVSwpQC/?lang=pt',
        publisher: 'Arquivos de Endocrinologia e Metabologia (SciELO Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'hipotireoidismo-tratamento-com-levotiroxina',
    slug: 'hipotireoidismo-tratamento-com-levotiroxina',
    metaTitle: 'Hipotireoidismo: tratamento com levotiroxina',
    title: 'Hipotireoidismo: como a levotiroxina é tomada e ajustada',
    excerpt:
      'O tratamento do hipotireoidismo repõe o hormônio que falta com um comprimido diário. Horário, jejum, café, cálcio e ferro mudam o resultado, e a dose é individualizada pelo médico.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'a-droga-de-escolha',
        heading: 'A levotiroxina é a droga de escolha',
        paragraphs: [
          'O tratamento do hipotireoidismo é uma reposição: devolve ao corpo o hormônio que a tireoide deixou de produzir. A levotiroxina, forma sintética do T4, é a droga de escolha, com recomendação máxima nas diretrizes. As diretrizes também não recomendam o uso rotineiro de combinação entre levotiroxina e tri-iodotironina, porque o efeito desse hormônio é curto e produz picos no sangue.',
          'A dose é individualizada e não existe um valor padrão para todos. Ela depende da idade, do peso, da capacidade de absorção e das outras doenças da pessoa, e é ajustada até o TSH voltar à faixa média ou normal. Em pessoas idosas ou com doença cardíaca, o médico começa com dose baixa e sobe devagar, reavaliando o exame a cada seis semanas até chegar à dose de manutenção, porque o coração precisa de tempo para acompanhar a mudança. O alvo declarado nas diretrizes é a menor dose capaz de devolver o TSH à faixa média ou normal, nem acima nem abaixo dela.',
        ],
      },
      {
        id: 'como-tomar-em-jejum',
        heading: 'Jejum, horário e o café da manhã',
        paragraphs: [
          'A absorção da levotiroxina depende do estômago vazio. As diretrizes recomendam administrar o comprimido em jejum de 30 minutos, ou após pelo menos duas horas sem comida, o que na prática significa tomar o remédio ao acordar e esperar antes do café. Existe alternativa para quem não consegue: a dose à noite também é prevista nas recomendações, mantido o intervalo sem alimentos. O que não funciona é tomar o comprimido de qualquer hora, junto das refeições, porque nessa condição parte da dose simplesmente não chega à corrente sanguínea.',
          'Parece um detalhe pequeno diante da lista de sintomas, mas é o ponto em que mais tratamento fracassa. Um estudo citado nas próprias diretrizes mostra que a ingestão incorreta do comprimido está entre as razões de TSH persistentemente alto, ao lado da falta de adesão e de interações com outros produtos. Trocar o horário de forma desorganizada, tomá-lo junto com o café ou pular dias porque a pessoa se sente bem desfaz o ajuste que o médico fez.',
        ],
      },
      {
        id: 'o-que-atrapalha-a-absorcao',
        heading: 'O que atrapalha a absorção do hormônio',
        paragraphs: [
          'Alguns alimentos e medicamentos reduzem a absorção intestinal da levotiroxina. Entre os alimentos estão o café expresso, a proteína de soja e as fibras dietéticas. Entre os medicamentos, a lista inclui ferro, cálcio, magnésio, colestiramina, sucralfato, hidróxido de alumínio e os inibidores da bomba de prótons. Não é preciso abandoná-los; é preciso separá-los do horário do comprimido, com orientação de quem prescreveu.',
          'O intervalo exato entre a levotiroxina e cada um desses produtos varia conforme o caso e a rotina da pessoa, por isso é definido com o médico ou com o farmacêutico, e não por tabela genérica. Também pesa a marca do medicamento: há diferenças de absorção entre preparações, e o painel recomenda evitar troca de preparação ao longo do tratamento. Quando a troca acontecer, o TSH deve ser verificado após dois meses.',
        ],
        bullets: [
          'Café, principalmente tomadas próximas ao comprimido',
          'Suplementos de ferro e de cálcio',
          'Antiácidos com hidróxido de alumínio e sucralfato',
          'Medicamentos para reduzir o ácido do estômago',
          'Alimentos com proteína de soja e fibras em excesso',
        ],
      },
      {
        id: 'ajustes-e-exames-de-controle',
        heading: 'Ajuste de dose e exames de controle',
        paragraphs: [
          'O resultado do tratamento é medido no exame. As diretrizes recomendam monitorar o TSH de seis a oito semanas depois de qualquer alteração de dose e, quando o nível se estabiliza, fazer o controle uma vez por ano, ao longo da vida. Nas pessoas com hipotireoidismo secundário, o parâmetro muda e é o T4 livre que deve ficar na faixa média ou normal, depois de avaliar o cortisol, porque iniciar a reposição sem essa checagem pode precipitar crise suprarrenal.',
          'Na tireoidite de Hashimoto, a causa mais comum, a reposição costuma ser para sempre. Com a dose certa, os sintomas regridem e a vida segue normal: a anemia que acompanha o quadro se corrige, o colesterol tende a voltar a patamares menores e o intestino volta a funcionar. Por isso a melhora não é motivo para interromper o comprimido, e sim sinal de que ele está funcionando.',
        ],
      },
      {
        id: 'sintomas-que-persistem',
        heading: 'Quando os sintomas continuam mesmo tratando',
        paragraphs: [
          'Sentir cansaço com o exame controlado é uma queixa frequente, e a resposta não é aumentar a dose. Revisões com testes sensíveis não demonstraram benefício claro da levotiroxina sobre cognição e humor em pessoas com a forma subclínica, e as diretrizes afirmam que o aumento da dose ou a combinação com tri-iodotironina não são recomendados. O caminho indicado pelas diretrizes é descartar outras comorbidades que expliquem o sintoma, em vez de subir a dose.',
          'Esse também é o motivo pelo qual a automedicação com hormônio tireoidiano é perigosa. Excesso de levotiroxina em idosos aumenta o risco de fibrilação atrial, e a busca de um valor de TSH mais baixo do que o normal não tem evidência sólida que a apoie. Houve estudo que encontrou melhora do cansaço com a reposição na forma subclínica, mas os resultados entre pesquisas são divergentes, e é por isso que a decisão de tratar ou apenas acompanhar é individual. Ajuste de dose é decisão médica, feita sobre exame repetido, e não sobre como a pessoa se sente naquele dia.',
        ],
      },
      {
        id: 'gravidez-bebes-e-sinais-de-alerta',
        heading: 'Gravidez, recém-nascidos e situações de risco',
        paragraphs: [
          'A gravidez muda o manejo: a necessidade de levotiroxina aumenta, e as diretrizes defendem busca ativa do diagnóstico em gestantes e em mulheres que pretendem engravidar, porque o hipotireoidismo nesse período se associa a complicações para a mãe e para o bebê. O acompanhamento da dose e do TSH é mais frequente, e a reposição não deve ser interrompida por medo do efeito do hormônio sobre a criança.',
          'No recém-nascido, a história é outra e o prazo é curto. No Brasil, o teste do pezinho detecta o hipotireoidismo congênito pela dosagem de TSH em sangue coletado em papel-filtro entre o 3º e o 5º dia de vida, com incidência de cerca de um caso para cada 2.500 nascidos vivos. Como o hormônio é essencial para o desenvolvimento do sistema nervoso, o tratamento com tiroxina por via oral precisa começar de imediato: adiado, deixa lesão irreversível. Sonolência intensa, corpo muito frio e respiração lenta em pessoa com hipotireoidismo conhecido são emergência e pedem atendimento imediato.',
        ],
        cta: {
          label: 'Veja a página sobre o hipotireoidismo',
          href: '/doencas/hipotireoidismo/',
        },
      },
    ],
    diseaseSlugs: ['hipotireoidismo'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['hipotireoidismo-sintomas-e-exame-de-sangue'],
    references: [
      {
        label: 'Diretrizes clínicas práticas para o manejo do hipotiroidismo',
        url: 'https://www.scielo.br/j/abem/a/RyCDtMtQqCKP5vG8hVSwpQC/?lang=pt',
        publisher: 'Arquivos de Endocrinologia e Metabologia (SciELO Brasil)',
      },
      {
        label: 'Hipotireoidismo, edição profissional',
        url: 'https://www.msdmanuals.com/pt/profissional/dist%C3%BArbios-end%C3%B3crinos-e-metab%C3%B3licos/dist%C3%BArbios-da-tireoide/hipotireoidismo',
        publisher: 'Manual MSD Edição para Profissionais',
      },
      {
        label: 'Hipotireoidismo Congênito Primário',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hipotireoidismo-congenito-primario',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'infeccao-urinaria-sintomas-e-quando-procurar-atendimento',
    slug: 'infeccao-urinaria-sintomas-e-quando-procurar-atendimento',
    metaTitle: 'Infecção urinária: sintomas',
    title: 'Infecção urinária: sintomas e quando procurar atendimento',
    excerpt:
      'Ardência ao urinar, vontade urgente de ir ao banheiro e urina turva são sinais de cistite. Febre, calafrios e dor nas costas mudam a urgência do caso. Veja como reconhecer cada situação.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'o-que-se-sente-na-cistite',
        heading: 'O que se sente na cistite',
        paragraphs: [
          'A infecção da bexiga costuma começar de repente, sem aviso. O sinal mais típico é a ardência ou a dor enquanto a urina sai, acompanhada de uma vontade frequente e urgente de ir ao banheiro, mesmo quando sai pouca urina. Muita gente descreve a sensação de que a bexiga nunca esvazia de verdade. A urgência pode ser tão grande que escapa urina sem controle, e a noite passa a ser interrompida por idas ao banheiro, o que cansa e atrapalha a rotina de trabalho.',
          'A urina pode sair turva e com odor diferente do habitual, e é comum sentir dor no baixo ventre, acima do osso púbico, por vezes também na região lombar. Uma parte das infecções, porém, passa quase despercebida: em idosos, a cistite pode se manifestar como febre ou confusão mental em vez de queixa ao urinar, e em crianças os sinais são leves e mais difíceis de reconhecer. Por isso, mudança de comportamento em quem já tem esses fatores de risco também é informação clínica relevante para a avaliação, e não deve ser tratada como algo esperado da idade.',
        ],
      },
      {
        id: 'quando-a-infeccao-sobe-para-os-rins',
        heading: 'Quando a infecção sobe para os rins',
        paragraphs: [
          'Quando as bactérias sobem da bexiga até os rins pelo caminho da urina, o quadro passa a se chamar pielonefrite, e a apresentação é outra. Os sintomas costumam iniciar de súbito, com febre e calafrios intensos, dor na região lombar de um lado ou dos dois, dor abdominal, enjoo e vômito. A pessoa pode estar tão mal que não consegue manter o antibiótico oral nem os líquidos, o que por si só já pede avaliação urgente. Ao toque, a região lombar do lado afetado fica sensível, e um ou ambos os rins podem aumentar de tamanho.',
          'Cerca de 30% das pessoas com pielonefrite também têm sintomas de cistite, como a micção frequente e dolorosa, o que ajuda a entender que se trata do mesmo processo em um ponto mais alto do trato urinário. O risco de infecção renal aumenta na gravidez, porque o útero que cresce comprime os ureteres e facilita o refluxo da urina. Diabetes, sistema imunológico enfraquecido, transplante renal e qualquer obstrução do fluxo urinário tornam a pielonefrite mais provável e mais grave, e justificam menos tolerância à espera.',
        ],
      },
      {
        id: 'o-que-parece-infeccao-urinaria',
        heading: 'O que mais pode parecer infecção urinária',
        paragraphs: [
          'Ardência ao urinar não indica, por si só, infecção da bexiga. A infecção da uretra, chamada uretrite, é geralmente causada por bactérias de infecções sexualmente transmissíveis, como a gonorreia e a clamídia, e os sintomas se parecem muito. Homens com infecção urinária costumam ter envolvimento da próstata, a prostatite, que causa episódios repetidos de cistite e uretrite e exige tratamento por tempo mais longo, porque poucos antibióticos penetram bem nessa glândula.',
          'Nas mulheres, a secura e o afinamento dos tecidos vaginais depois da menopausa provocam ardência e urgência urinária sem infecção, e a cistite intersticial é um distúrbio em que a bexiga inflama sem que haja microrganismo envolvido. O cálculo renal é outra fonte de confusão: ele obstrui o fluxo da urina, provoca dor lombar intensa e, ao permitir que as bactérias fiquem retidas na bexiga, aumenta o risco de infecção. Infecções vaginais por fungos também causam desconforto ao urinar. São situações com conduções diferentes, e a distinção depende de exame e de história, não da intensidade de um sintoma isolado.',
        ],
      },
      {
        id: 'quando-procurar-atendimento-no-mesmo-dia',
        heading: 'Quando procurar atendimento no mesmo dia',
        paragraphs: [
          'Procure avaliação no mesmo dia se tiver febre com calafrios, dor na região lombar ou vômito junto dos sintomas urinários, porque esse conjunto aponta para infecção renal. Gestantes com qualquer sintoma de infecção urinária devem ser avaliadas de imediato, dada a maior chance de pielonefrite. Homens com ardência e urgência ao urinar também não devem esperar, já que o envolvimento da próstata muda a duração e a escolha do tratamento. Quem tem diabetes, imunidade enfraquecida ou cateter na bexiga entra no mesmo grupo de menos tolerância à espera.',
          'Se você já teve infecção urinária recente e os sintomas voltaram, a reavaliação também é necessária. O retorno permite verificar se o episódio anterior foi realmente tratado, se a bactéria é a mesma e se a urina ainda contém bactérias depois do medicamento. Episódios que se repetem três ou mais vezes por ano pedem investigação da causa, e isso se organiza na consulta, não por conta própria. Levar o resultado de exames anteriores e o nome do antibiótico usado na última vez economiza tempo e evita repetição de tratamento que não funcionou.',
        ],
      },
      {
        id: 'sinais-de-emergencia',
        heading: 'Sinais de emergência',
        paragraphs: [
          'Existem situações em que a espera deixa de ser segura. Confusão mental, sonolência excessiva e queda acentuada do estado geral podem indicar infecção na corrente sanguínea, a sepse, que em idosos, em pessoas com bexiga prejudicada por lesão nervosa e em quem usa cateter por muito tempo pode ser a única manifestação de uma pielonefrite. Nessas circunstâncias, o atendimento de emergência precisa ser imediato, porque a evolução é rápida e o tratamento não pode esperar o dia seguinte.',
          'Vômito que impede de tomar líquido e de manter o medicamento oral é outro motivo para ir à emergência, já que o tratamento precisa continuar. Também merece atendimento urgente a dor lombar intensa com febre em gestante, em pessoa transplantada do rim ou em quem está em tratamento que enfraquece o sistema de defesa. Se a pessoa estiver sozinha, peça ajuda a alguém por perto enquanto o atendimento é acionado, e evite dirigir sozinho em caso de febre alta e mal-estar importante.',
        ],
        bullets: [
          'Confusão mental ou sonolência anormal',
          'Piora rápida do estado geral, com sonolência ou queda de atenção',
          'Febre alta com vômito que impede de tomar líquido',
          'Dor lombar com febre em gestante ou pessoa transplantada',
          'Sintomas urinários em quem usa cateter e está com febre',
        ],
      },
      {
        id: 'o-que-esperar-da-consulta',
        heading: 'O que esperar da consulta',
        paragraphs: [
          'A consulta começa com a descrição dos sintomas e do tempo de evolução, seguida de exame físico e de análise da urina. É recolhida uma amostra do jato médio, em recipiente limpo, para evitar a contaminação pelas bactérias da pele. Uma fita reagente pesquisa nitritos, liberados por bactérias, e a esterase leucocitária, enzima que sugere reação de defesa contra a infecção. Em mulheres adultas com sintomas típicos, esses podem ser os únicos exames necessários para iniciar o tratamento.',
          'A urocultura entra quando a infecção é de repetição, quando houve falha de tratamento, nos homens e nas crianças, ou quando há suspeita de bactéria menos comum. Ela mostra qual microrganismo cresce e quais medicamentos podem combatê-lo. Exames de imagem não fazem parte da rotina da cistite simples, mas podem ser pedidos se houver febre persistente, suspeita de obstrução, cálculo renal ou lesão renal. O profissional também verifica condições que agravam a infecção, como diabetes e imunidade enfraquecida, porque elas mudam o antibiótico escolhido e o tempo de uso.',
        ],
        cta: {
          label: 'Veja a página sobre a infecção urinária',
          href: '/doencas/infeccao-urinaria/',
        },
      },
    ],
    diseaseSlugs: ['infeccao-urinaria'],
    topicSlugs: ['doencas-infecciosas', 'saude-da-mulher'],
    relatedArticleSlugs: ['infeccao-urinaria-prevencao-e-cuidados'],
    references: [
      {
        label: 'Infecção da bexiga (cistite), versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-do-trato-urin%C3%A1rio-itus/infec%C3%A7%C3%A3o-da-bexiga',
        publisher: 'Manual MSD',
      },
      {
        label: 'Infecção renal (pielonefrite), versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-do-trato-urin%C3%A1rio-itus/infec%C3%A7%C3%A3o-renal',
        publisher: 'Manual MSD',
      },
      {
        label: 'Considerações gerais sobre infecções do trato urinário (ITUs), versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-do-trato-urin%C3%A1rio-itus/considera%C3%A7%C3%B5es-gerais-sobre-infec%C3%A7%C3%B5es-do-trato-urin%C3%A1rio-itus',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'infeccao-urinaria-prevencao-e-cuidados',
    slug: 'infeccao-urinaria-prevencao-e-cuidados',
    metaTitle: 'Infecção urinária: prevenção',
    title: 'Infecção urinária: prevenção e cuidados que reduzem as recaídas',
    excerpt:
      'Beber água, urinar depois da relação sexual e não usar antibiótico por conta própria estão entre as medidas que mais ajudam quem tem cistite de repetição. Veja o que tem sustentação.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-a-infeccao-volta',
        heading: 'Por que a infecção volta',
        paragraphs: [
          'A bactéria que causa a maior parte das infecções urinárias vem do próprio intestino, e a subida pela uretra é o caminho mais frequente. Em quem tem episódios repetidos, quase sempre existe um fator que facilita essa subida: a uretra feminina é curta e sua abertura fica perto da vagina e do ânus, a relação sexual pode levar bactérias até essa abertura, e o uso de diafragma com espermicida reduz as bactérias protetoras da vagina, o que favorece o crescimento das que causam cistite.',
          'Outros fatores mantêm o ciclo. Urinar pouco e segurar a urina por muitas horas reduzem a limpeza natural da bexiga, e esvaziamento incompleto, por obstrução, prolapso da bexiga ou aumento da próstata, deixa urina parada onde as bactérias se multiplicam. Histórico familiar conta: ter mãe ou irmã com infecções de repetição aumenta a chance. Quem teve a primeira infecção em idade jovem, quem usa antibiótico com frequência e quem tem incontinência também fica mais exposto, e identificar o que se aplica a você é o primeiro passo do plano de prevenção.',
        ],
      },
      {
        id: 'agua-e-habito-de-urinar',
        heading: 'Água e o hábito de urinar',
        paragraphs: [
          'Aumentar o consumo de líquidos ao longo do dia é a medida mais simples e uma das que mais ajudam. Mais urina significa mais passagem pelo trato urinário, e o fluxo remove muitas bactérias da bexiga antes que elas se multipliquem; as defesas naturais do corpo cuidam do restante. Não existe uma quantidade mágica: o objetivo é urinar várias vezes por dia, com urina clara, e beber mais em dias quentes, durante atividade física e em viagens longas, quando a água costuma ser esquecida.',
          'Urinar com frequência importa tanto quanto beber. Segurar a urina por horas, situação comum em quem trabalha em pé, em plantões ou em trânsito, permite que as bactérias fiquem em contato prolongado com a parede da bexiga. Esvaziar a bexiga por completo, sem pressa, ajuda quem tem esvaziamento incompleto. Quem percebe que anda urinando menos que o habitual, com urina escura, deve revisar a rotina de líquidos antes de atribuir o desconforto a outra causa, e vale lembrar que levantar várias vezes à noite faz parte da infecção em curso, e não é motivo para deixar de urinar.',
        ],
      },
      {
        id: 'higiene-e-vida-sexual',
        heading: 'Higiene, vida sexual e o que evitar',
        paragraphs: [
          'Depois de evacuar, a limpeza da região genital deve ser feita da frente para trás, o que evita levar bactérias do ânus para a abertura da uretra. Duchas íntimas não previnem infecção e podem remover justamente a proteção microbiana da vagina, que ajuda a impedir o crescimento das bactérias causadoras da cistite. São dois gestos simples que a pessoa faz sozinha, sem receita e sem exame, e que mudam o risco diário de quem tem episódios repetidos.',
          'Para quem nota que as infecções aparecem depois da relação sexual, urinar assim que for possível ajuda a expulsar as bactérias deslocadas. Evitar espermicida e diafragma, revendo o método contraceptivo com o profissional, é outra medida com efeito real nesses casos. Preservativo com espermicida também aumenta o risco. A conversa sobre contracepção faz parte da prevenção de infecção urinária de repetição, e quem tem parceiro novo no último ano deve mencionar isso na consulta, porque o histórico recente muda a leitura do padrão de episódios.',
        ],
      },
      {
        id: 'antibiotico-sem-excesso',
        heading: 'Antibiótico sem excesso',
        paragraphs: [
          'O antibiótico certo encurta muito os sintomas, mas a escolha não é indiferente. Usar sobra de tratamento anterior, dividir a caixa com outra pessoa ou repetir o medicamento que uma conhecida usou pode atingir a bactéria errada, tratar por tempo insuficiente e deixar bactérias resistentes para trás. O uso indevido e o uso em excesso de antibióticos estão entre os principais fatores que geram resistência, segundo a Organização Mundial da Saúde, e a resistência torna infecções futuras mais difíceis e mais caras de tratar, além de aumentar o risco de complicações.',
          'Por isso, o medicamento deve vir de avaliação, e o tratamento deve durar exatamente o tempo orientado, mesmo que a ardência melhore nos primeiros dias. Em mulheres com infecção sem complicação, o curso costuma ser curto; nos homens, costuma ser longo, porque a próstata costuma estar envolvida e poucos antibióticos penetram bem nela. Quem precisa usar antibiótico com frequência para prevenir episódios deve fazer isso com orientação, com dose e duração definidas por quem prescreve, e reavaliar a necessidade em cada retorno, inclusive sobre alternativas e ajustes de hábito.',
        ],
      },
      {
        id: 'grupos-que-precisam-de-plano',
        heading: 'Grupos que precisam de plano próprio',
        paragraphs: [
          'Gestantes merecem plano individual, porque a gravidez atrapalha o esvaziamento da bexiga e aumenta o risco de pielonefrite: o útero que cresce comprime os ureteres e facilita o refluxo da urina. Sintoma urinário na gravidez deve ser avaliado sem demora, e o acompanhamento confirma que a infecção passou. Mulheres na pós-menopausa com secura vaginal, dor durante a relação sexual, urgência e infecções repetidas podem se beneficiar de estrogênio aplicado na vulva ou de supositório vaginal, sempre com receita e indicação individuais.',
          'Homens com cistite precisam de investigação da causa, pois prostatite é a origem mais comum e exige tratamento mais longo. Crianças pequenas com infecção urinária e pessoas com três ou mais episódios por ano entram na lista de quem deve ter a causa procurada, o que pode incluir ultrassom ou outros exames de imagem. Quem usa cateter por longo período, quem tem lesão medular com bexiga neurogênica, quem tem diabetes ou imunidade enfraquecida e quem recebeu transplante renal completam o grupo que não deve tratar episódio por episódio de forma isolada.',
        ],
      },
      {
        id: 'plano-de-prevencao',
        heading: 'Montando o plano de prevenção',
        paragraphs: [
          'Um plano de prevenção funciona melhor por escrito. Ele reúne o que você já ajusta sozinho, como beber mais líquidos, urinar sem segurar, urinar depois da relação sexual, limpar da frente para trás e evitar duchas íntimas, e o que depende de decisão clínica, como trocar o método contraceptivo, tratar a secura vaginal, revisar o antibiótico preventivo e investigar obstrução ou refluxo. Produtos de oxicoco podem ser úteis em alguns pacientes com infecções de repetição, mas o benefício varia de pessoa para pessoa e eles não substituem a avaliação.',
          'Depois de montar o plano, vale observar por alguns meses e anotar cada episódio, o que aconteceu antes dele e como foi tratado. Na consulta seguinte, esse registro mostra se a frequência caiu e o que ainda precisa mudar. A mudança de alguns hábitos costuma ser suficiente para muita gente; para as que seguem tendo episódios, existem alternativas que só o acompanhamento oferece. O ponto decisivo é não naturalizar a dor ao urinar como parte da rotina, porque infecção de repetição com obstrução ou refluxo pode lesionar os rins.',
        ],
        cta: {
          label: 'Veja a página sobre a infecção urinária',
          href: '/doencas/infeccao-urinaria/',
        },
      },
    ],
    diseaseSlugs: ['infeccao-urinaria'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: ['infeccao-urinaria-sintomas-e-quando-procurar-atendimento'],
    references: [
      {
        label: 'Considerações gerais sobre infecções do trato urinário (ITUs), versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-do-trato-urin%C3%A1rio-itus/considera%C3%A7%C3%B5es-gerais-sobre-infec%C3%A7%C3%B5es-do-trato-urin%C3%A1rio-itus',
        publisher: 'Manual MSD',
      },
      {
        label: 'Infecção da bexiga (cistite), versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-do-trato-urin%C3%A1rio-itus/infec%C3%A7%C3%A3o-da-bexiga',
        publisher: 'Manual MSD',
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
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'cancer-de-pele-sinais-na-pele-que-pedem-atendimento',
    slug: 'cancer-de-pele-sinais-na-pele-que-pedem-atendimento',
    metaTitle: 'Câncer de pele: sinais na pele',
    title: 'Câncer de pele: sinais na pele que pedem atendimento',
    excerpt:
      'Mancha que coça e descama, pinta que muda de forma e ferida que não cicatriza em quatro semanas são os sinais que o Ministério da Saúde lista como motivo de exame. Veja como observar a pele e o que acontece na consulta.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'o-que-observar-na-pele',
        heading: 'O que observar na pele',
        paragraphs: [
          'A pele muda o tempo todo, e quase sempre a mudança é benigna: uma pinta nova na juventude, uma mancha clara depois do verão, um pequeno caroço que está ali há anos sem alteração. O que pede atenção é o comportamento diferente, e o Ministério da Saúde resume isso em três situações: manchas que coçam, descamam ou sangram; sinais ou pintas que mudam de tamanho, forma ou cor; e feridas que não cicatrizam em quatro semanas.',
          'A essas três situações soma-se uma regra geral, também do Ministério da Saúde: deve-se suspeitar de qualquer mudança persistente na pele, e ao identificar lesões suspeitas um especialista deve ser procurado para confirmar o diagnóstico e iniciar o tratamento. Quanto mais precoce a identificação, melhores são os resultados. Isso vale para os dois grandes grupos: o não melanoma, o mais frequente no Brasil, tem alta chance de cura quando detectado cedo, mas pode deixar mutilações expressivas se não for tratado de forma adequada.',
        ],
      },
      {
        id: 'regra-abcde',
        heading: 'A regra do ABCDE',
        paragraphs: [
          'Para as pintas, o INCA descreve uma regra adotada internacionalmente, o ABCDE, que reúne os sinais sugestivos de tumor de pele do tipo melanoma. Ela serve para orientar a observação e para decidir quem precisa de exame, e não para dar diagnóstico em casa, porque a ausência desses sinais não transforma toda lesão em algo tranquilo, e a presença deles não faz de uma lesão um câncer.',
          'O próprio material do INCA lembra que, na maior parte das vezes, alterações como essas na pele não são causadas por câncer, mas precisam ser investigadas por um médico, principalmente se não melhorarem em poucos dias. O diagnóstico precoce aumenta as chances de tratamento e de cura. Rastreamento organizado em pessoas sem sinal nem sintoma, esse sim, não é recomendado até o momento: não há evidência científica de que traga mais benefício do que risco.',
        ],
        bullets: [
          'Assimetria: uma metade do sinal é diferente da outra',
          'Bordas irregulares: contorno mal definido',
          'Cor variável: várias cores na mesma lesão, preta, castanha, branca, avermelhada ou azul',
          'Diâmetro: maior que 6 milímetros',
          'Evolução: mudanças no tamanho, na forma ou na cor',
        ],
      },
      {
        id: 'sinais-do-nao-melanoma',
        heading: 'Os sinais do tipo não melanoma',
        paragraphs: [
          'A ferida que não cicatriza em até quatro semanas é o sinal mais característico do câncer de pele não melanoma, que também se apresenta como manchas que coçam, ardem, descamam ou sangram. Essas lesões aparecem principalmente nas áreas do corpo mais expostas ao sol, como rosto, pescoço e orelhas, e podem se manifestar como ferida ou como nódulo. O carcinoma basocelular, o mais comum de todos e o menos agressivo, tem evolução lenta, e é justamente a lentidão que faz a pessoa adiar a consulta.',
          'O carcinoma epidermoide também surge por meio de uma ferida ou sobre uma cicatriz, principalmente aquelas decorrentes de queimadura, e sua maior gravidade vem da possibilidade de se espalhar para outros órgãos. O caminho, nesses casos, não é trocar curativo nem passar produto por conta própria: o INCA orienta procurar o mais rápido possível o médico dermatologista diante de manchas que coçam, ardem, descamam ou sangram e de feridas que não cicatrizam em quatro semanas.',
        ],
      },
      {
        id: 'sinais-que-sugerem-melanoma',
        heading: 'O que sugere melanoma',
        paragraphs: [
          'O melanoma pode surgir a partir da pele normal ou de uma lesão pigmentada que já existia. Na pele normal, a manifestação se dá pelo aparecimento de uma pinta escura de bordas irregulares, acompanhada de coceira e descamação. Quando a lesão já estava ali, o que muda é o comportamento dela: aumento no tamanho, alteração na coloração e na forma, e surgimento de bordas irregulares.',
          'Ele pode aparecer em qualquer parte do corpo, na pele ou nas mucosas, na forma de manchas, pintas ou sinais. Em pessoas de pele negra, é mais comum nas áreas claras, como palmas das mãos e plantas dos pés, justamente onde ninguém costuma olhar. O prognóstico é considerado bom quando o tumor é detectado na fase inicial, e a sobrevida melhorou nos últimos anos, principalmente pelo diagnóstico precoce e pela chegada dos novos medicamentos imunoterápicos.',
        ],
      },
      {
        id: 'quando-procurar-atendimento',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'A orientação do Ministério da Saúde é direta: procure sempre um médico especializado se perceber qualquer sintoma. Na prática, isso significa não esperar a lesão sumir sozinha, já que o INCA pede investigação de toda mudança que não melhora em poucos dias. A pressa tem um motivo concreto: em estágios iniciais, a retirada da lesão pode ser feita em nível ambulatorial, sem internação, e o resultado do tratamento depende muito do tamanho e do estágio do tumor.',
          'Há situações em que a espera é menos justificável. Quem trabalha sob exposição direta ao sol, quem tem pele clara, olhos claros ou albinismo, quem já teve câncer de pele, quem tem história pessoal ou familiar da doença, quem tem doenças cutâneas prévias, quem usa imunossupressores e quem se expôs a câmeras de bronzeamento artificial devem observar a pele com mais regularidade. Em pessoas de pele negra, somam-se as lesões das palmas das mãos e das plantas dos pés.',
        ],
        bullets: [
          'Ferida que não cicatriza em quatro semanas',
          'Pinta que aumenta, muda de cor ou ganha borda irregular',
          'Mancha que coça, arde, descama ou sangra',
          'Lesão que reaparece no lugar já tratado',
          'Mancha escura na palma da mão ou na planta do pé',
        ],
      },
      {
        id: 'o-que-esperar-da-consulta',
        heading: 'O que acontece na consulta',
        paragraphs: [
          'O diagnóstico normalmente é feito pelo dermatologista por meio de exame clínico. Em algumas situações, o especialista usa a dermatoscopia, exame com um aparelho que permite visualizar camadas da pele não vistas a olho nu, e alguns casos exigem a biópsia, que é o exame indicado para confirmar a doença. O material coletado é encaminhado ao laboratório de anatomia patológica, que emite o laudo, e outros exames podem ser necessários para determinar o estágio e decidir o tratamento mais adequado.',
          'Levar informação aproveita melhor a consulta: quando a lesão apareceu, o que mudou desde então, se ela já foi tratada antes, se existe outra pinta diferente do grupo, se alguém da família teve câncer de pele e como é a rotina de sol e de trabalho ao ar livre. Com o laudo em mãos, fica fácil guardar o documento e as datas para os retornos. Ambos os tipos de câncer de pele são tratados de forma integral e gratuita pelo Sistema Único de Saúde (SUS).',
        ],
        cta: {
          label: 'Veja o verbete completo sobre câncer de pele',
          href: '/doencas/cancer-de-pele/',
        },
      },
    ],
    diseaseSlugs: ['cancer-de-pele'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['cancer-de-pele-prevencao-e-protetor-solar'],
    references: [
      {
        label: 'Câncer de pele melanoma, versão para população',
        url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/pele-melanoma/versao-para-populacao',
        publisher: 'Instituto Nacional de Câncer (INCA)',
      },
      {
        label: 'Câncer de pele não melanoma, versão para população',
        url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/pele-nao-melanoma/versao-para-populacao',
        publisher: 'Instituto Nacional de Câncer (INCA)',
      },
      {
        label: 'Câncer de pele, saúde de A a Z',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/cancer-de-pele',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'cancer-de-pele-prevencao-e-protetor-solar',
    slug: 'cancer-de-pele-prevencao-e-protetor-solar',
    metaTitle: 'Câncer de pele: prevenção',
    title: 'Câncer de pele: prevenção e uso do protetor solar',
    excerpt:
      'Evitar o sol entre 10h e 16h, proteger-se com roupa e chapéu de abas largas e reaplicar o filtro solar a cada duas horas: a fotoproteção recomendada no Brasil, explicada peça por peça.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'por-que-a-exposicao-importa',
        heading: 'Por que a exposição acumulada importa',
        paragraphs: [
          'O principal fator de risco do câncer de pele é a radiação ultravioleta (UV), que vem do sol e também das câmeras de bronzeamento artificial. O dano que ela deixa nas células se acumula ao longo dos anos, e é por isso que o risco depende do histórico de cada pessoa, e não de uma tarde isolada. A Organização Mundial da Saúde coloca na lista de medidas de prevenção evitar a exposição à radiação ultravioleta, obtida principalmente do sol e de dispositivos artificiais de bronzeamento, e usar medidas de fotoproteção.',
          'Nos materiais do INCA, a exposição prolongada e repetida ao sol aparece como fator de risco dos dois grupos, melanoma e não melanoma, principalmente quando ocorre na infância e na adolescência. A idade média dos casos vem caindo, porque pessoas jovens se expõem de forma constante aos raios solares, como registra o Ministério da Saúde. Cuidar da pele cedo é uma medida cujo efeito aparece décadas depois, e não uma preocupação só de quem já teve a doença.',
        ],
      },
      {
        id: 'horario-e-sombra',
        heading: 'Horário e sombra',
        paragraphs: [
          'A principal recomendação do Ministério da Saúde é evitar a exposição ao sol, principalmente nos horários em que os raios solares são mais intensos, entre 10h e 16h. Quando a permanência na rua nesse intervalo é inevitável, orienta-se procurar áreas cobertas que forneçam sombra, como embaixo de árvores, marquises e toldos, para minimizar os efeitos da radiação. A página do ministério sobre insolação repete a mesma janela: evitar permanecer sob o sol entre as 10 e as 16 horas.',
          'Sombra tem uma vantagem prática: reduz a dose recebida sem depender de produto e sem precisar lembrar de reaplicar nada. Ela vale para quem almoça na rua, para quem espera no ponto de ônibus e para quem trabalha em área externa. Nas atividades ocupacionais, o Ministério da Saúde aponta que pode ser necessário reformular as jornadas de trabalho ou a organização das tarefas ao longo do dia, o que na prática significa deslocar o esforço feito a céu aberto para a manhã ou para o fim da tarde.',
        ],
      },
      {
        id: 'roupa-chapeu-e-oculos',
        heading: 'Roupa, chapéu e óculos',
        paragraphs: [
          'A proteção física vem antes do filtro solar na lista oficial: roupas que protegem o corpo, chapéus de abas largas, bonés, óculos de sol com proteção UV, sombrinhas e guarda-sol. O Ministério da Saúde lembra que já existem no mercado roupas e acessórios com proteção UV, que dão maior proteção contra os raios solares, e recomenda usar também o protetor labial, porque o lábio recebe a mesma radiação do rosto e costuma ser esquecido.',
          'Para quem trabalha fora, o INCA acrescenta detalhes: agricultores, trabalhadores da construção civil, pescadores, carteiros e profissionais da limpeza urbana estão entre os mais expostos, e a orientação é usar roupas de proteção, chapéu, óculos e protetor solar, seguir as normas de segurança do trabalho e observar regularmente a pele para identificar alterações precocemente. Em atividades que envolvem radiação ou substâncias químicas, deve-se usar corretamente o equipamento de proteção individual indicado e participar dos treinamentos oferecidos no local de trabalho.',
        ],
      },
      {
        id: 'protetor-solar-certo',
        heading: 'Como usar o protetor solar',
        paragraphs: [
          'O filtro solar com fator de proteção solar (FPS) 15 ou mais é fundamental, principalmente quando a exposição ao sol é inevitável, e deve ser aplicado na pele antes de se expor. O ponto que passa despercebido é que o real fator de proteção desses produtos varia com a espessura da camada aplicada, a frequência da aplicação, a perspiração e a exposição à água. Em outras palavras, a quantidade e a reaplicação importam tanto quanto o número escrito no rótulo.',
          'A reaplicação deve acontecer a cada duas horas durante a exposição solar, assim como após mergulho ou grande transpiração, e o Ministério da Saúde é explícito: mesmo os filtros solares ditos à prova de água devem ser reaplicados. Em dias nublados, as proteções necessárias também são recomendadas. Para a rotina de sol forte, a página sobre insolação pede protetor com FPS 30 ou mais e orienta evitar queimaduras na pele, que são o sinal visível de que a dose recebida passou do ponto.',
        ],
      },
      {
        id: 'mitos-que-aumentam-a-exposicao',
        heading: 'Crenças que aumentam a exposição',
        paragraphs: [
          'Protetor solar não é licença para ficar mais tempo no sol. A recomendação central continua sendo evitar a exposição, sobretudo entre 10h e 16h, e o filtro entra como recurso quando ela não pode ser evitada. Quem depende apenas do creme, sem chapéu nem sombra, recebe a mesma radiação de quem não usou nada na primeira metade do dia: as medidas se somam, e é a combinação de horário, sombra, roupa e filtro que reduz a dose recebida ao longo dos anos.',
          'Câmeras de bronzeamento artificial entram na lista de fatores de risco do INCA para melanoma e não melanoma, e a radiação que elas emitem é exatamente a que se quer evitar. Não existe, nas orientações oficiais, maneira segura de usar esses dispositivos. Outro hábito que merece atenção é o das tatuagens: elas podem esconder lesões, por isso pedem observação redobrada, como lembra o Ministério da Saúde.',
        ],
      },
      {
        id: 'grupos-que-precisam-de-rotina-mais-rigida',
        heading: 'Quem precisa de rotina mais rígida',
        paragraphs: [
          'Recomendações especiais devem ser direcionadas aos bebês e às crianças, porque a infância é o período da vida mais suscetível aos efeitos danosos da radiação UV, que se manifestam mais tardiamente, na fase adulta. Isso não significa afastar a criança do sol: significa escolher o horário, usar roupa e chapéu, buscar sombra e aplicar filtro nas áreas que ficam de fora da roupa, reaplicando ao longo do dia.',
          'Existem também pessoas mais sensíveis à ação dos raios solares: as de pele muito clara, as com albinismo ou vitiligo e as em tratamento com imunossupressores. Somam-se a elas quem já teve câncer de pele, quem tem história pessoal ou familiar da doença, quem tem doenças cutâneas prévias e quem trabalha sob exposição direta ao sol. Para esse grupo, a fotoproteção é rotina permanente, e a observação da pele faz parte do acompanhamento, junto com os retornos nas datas marcadas por quem trata.',
        ],
      },
      {
        id: 'montando-a-rotina',
        heading: 'Montando a sua rotina de proteção',
        paragraphs: [
          'A proteção funciona melhor quando vira combinação de hábitos simples e repetidos: guardar o chapéu junto da chave, manter o filtro solar no bolso do jaleco ou na bolsa, escolher a rota do trajeto a pé para atravessar trechos descobertos fora do intervalo entre 10h e 16h, e reservar a parte molhada do dia, piscina ou praia, para reaplicar o produto sem pressa. Vale também verificar a validade do filtro que ficou seis meses no porta-luvas do carro.',
          'Quem já teve câncer de pele acrescenta a essa rotina o calendário de retorno. O INCA orienta que, nos tratamentos não cirúrgicos, a pessoa procure o especialista a cada seis meses ou diante de sinal de recidiva, e que as lesões pré-cancerosas sejam monitoradas. O sol continua sendo bom para a saúde, mas, em excesso, pode provocar envelhecimento precoce, lesões nos olhos e câncer de pele: dá para manter o benefício sem pagar esse preço.',
        ],
        cta: {
          label: 'Veja o verbete completo sobre câncer de pele',
          href: '/doencas/cancer-de-pele/',
        },
      },
    ],
    diseaseSlugs: ['cancer-de-pele'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['cancer-de-pele-sinais-na-pele-que-pedem-atendimento'],
    references: [
      {
        label: 'Câncer de pele, saúde de A a Z',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/cancer-de-pele',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Insolação, saúde de A a Z',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/i/insolacao',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Cancer: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/cancer',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'gota-crise-de-dor-no-pe-e-o-que-fazer',
    slug: 'gota-crise-de-dor-no-pe-e-o-que-fazer',
    metaTitle: 'Gota: crise de dor no pé',
    title: 'Gota: crise de dor no pé e o que fazer',
    excerpt:
      'A gota costuma começar de madrugada, com o dedão do pé quente, vermelho e inchado. Entenda como reconhecer a crise, o que fazer nas primeiras horas e quando procurar atendimento.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'como-comeca-a-crise',
        heading: 'Como a crise de gota começa',
        paragraphs: [
          'A gota aparece quando o ácido úrico elevado no sangue forma cristais dentro da articulação, e a reação do organismo é uma inflamação explosiva. O padrão é tão característico que os reumatologistas o reconhecem pela descrição do paciente: a dor costuma começar durante a madrugada, forte o suficiente para acordar a pessoa no meio da noite. Ela não surge aos poucos ao longo do dia, nem depois de um esforço físico. Acorda quem estava dormindo e, por isso, muita gente lembra exatamente a hora em que a crise começou.',
          'Os primeiros ataques geralmente atingem apenas uma articulação, quase sempre nos membros inferiores. A dor vem acompanhada de inchaço, calor local e vermelhidão na pele sobre a junta, que fica sensível a ponto de o contato do lençol incomodar. Alguns pacientes também apresentam febre, batimento cardíaco mais rápido e sensação de mal-estar geral. Esse conjunto de sinais ajuda o médico a suspeitar de gota, mas também pode aparecer em outros quadros, como infecção na articulação, o que exige avaliação.',
        ],
      },
      {
        id: 'o-que-sente-no-pe',
        heading: 'Por que a dor costuma ficar no pé',
        paragraphs: [
          'O alvo mais frequente da primeira crise é a articulação do dedão do pé, o hálux. Quando ele incha, dói e fica vermelho por causa da gota, o quadro recebe até um nome próprio: podagra. A explicação está na física da doença. O ácido úrico circula no sangue e, quando ultrapassa o limite de solubilidade, cristaliza. Regiões mais frias do corpo e extremidades favorecem essa cristalização, e o dedão do pé reúne as duas condições.',
          'Tornozelos e joelhos também são acometidos com frequência, e qualquer articulação pode ser atingida. Fora delas, o excesso de ácido úrico se deposita em outros tecidos e forma caroços sob a pele, chamados tofos, que aparecem nos dedos, cotovelos, joelhos, pés e orelhas. Em algumas pessoas, os cristais se organizam no trato urinário e provocam cálculos, com cólica renal. Por isso a gota é uma doença do corpo inteiro, mesmo quando a dor se concentra em um pé só.',
        ],
      },
      {
        id: 'o-que-fazer-nas-primeiras-horas',
        heading: 'O que fazer nas primeiras horas',
        paragraphs: [
          'Nas primeiras horas, o que você pode fazer em casa é simples e não depende de prescrição: pare a atividade que estava fazendo e deixe a articulação em repouso. Movimentar, massagear ou tentar amassar o inchaço só aumenta a dor. Além do medicamento, o repouso, a imobilização da junta e a aplicação de gelo são medidas usadas para aliviar a crise. Se a gota pegou o pé, evite calçado apertado e procure ficar com a perna apoiada enquanto a dor não cede.',
          'Se você já tem diagnóstico de gota e recebeu da equipe de saúde um plano para a crise, siga-o. O alívio costuma começar horas depois do início do tratamento prescrito, o que dá uma referência importante: uma crise que responde ao plano tende a ser gota, enquanto uma crise que não responde merece reavaliação. Registre a hora em que a dor começou, qual articulação foi atingida e o que você comeu ou bebeu nos dias anteriores. Essas informações ajudam na consulta.',
        ],
      },
      {
        id: 'o-que-evitar-durante-a-crise',
        heading: 'O que evitar durante a crise',
        paragraphs: [
          'Dois erros se repetem nesse momento. O primeiro é tratar a crise com medicamento sobrando em casa, receitado para outra pessoa ou usado em outra ocasião. A dose e a escolha dependem da função dos rins, do coração e do estômago, e um anti-inflamatório inadequado pode complicar a hipertensão, a úlcera ou a doença renal. O segundo erro é suspender por conta própria o remédio de uso contínuo, como o diurético controlado pelo médico, que trata outra condição importante.',
          'O outro ponto é a mesa. Cerveja e vinho tinto estão entre os desencadeantes mais citados de uma crise, e refeições ricas em purina, com excesso de carne vermelha, miúdos, sardinha e frutos do mar, alimentam exatamente o que está em excesso no seu sangue. Bebidas adoçadas com xarope de milho rico em frutose também pioram o cenário. Aumente a ingestão de água ao longo do dia: manter um bom volume urinário favorece a eliminação do ácido úrico.',
        ],
      },
      {
        id: 'quando-procurar-atendimento',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Se é a sua primeira crise, procure avaliação antes de tratar por conta própria. O diagnóstico da gota depende da história clínica e do exame da articulação, e, em alguns casos, da análise do líquido retirado da junta em busca de cristais. A dosagem de ácido úrico no sangue sozinha não confirma nada, porque muita gente tem o valor elevado sem nunca ter tido uma crise. Buscar a origem da dor é o que evita tratar a doença errada por meses.',
          'Vá a uma UBS ou a um pronto atendimento quando a dor for intensa demais para apoiar o peso do corpo, quando o inchaço aumentar rápido ou se não houver melhora com o plano combinado com a equipe de saúde. Febre alta com calafrios junto de uma articulação quente e muito dolorosa é motivo de atendimento imediato, porque pode indicar infecção na articulação ou outro problema que não é gota. A demora aumenta o risco de complicação.',
        ],
        cta: {
          label: 'Veja a página sobre a gota',
          href: '/doencas/gota/',
        },
      },
      {
        id: 'entre-uma-crise-e-outra',
        heading: 'Entre uma crise e outra',
        paragraphs: [
          'Passada a crise, vem a parte que mais gente pula. A crise leve costuma desaparecer em um ou dois dias sem tratamento nenhum, e a mais grave pode durar uma semana ou mais antes de ceder. Depois, os sintomas somem por completo e a função da articulação volta ao normal, sem nenhuma queixa evidente até o próximo ataque. Essa trégua total dá a sensação de que o episódio foi um acidente isolado e resolvido, quando na verdade a gota permanece ativa.',
          'Sem acompanhamento, o intervalo entre as crises tende a diminuir e a intensidade, aumentar. Com o tempo, surgem os tofos e as articulações podem se deformar. É por isso que o cuidado verdadeiro começa depois da dor: existe medicação específica para reduzir o nível de ácido úrico no sangue, que é iniciada quando a crise aguda se resolve por completo e mantida a longo prazo, mesmo nos meses sem sintoma algum. Esse tratamento é o que protege a articulação, e não o remédio da dor.',
        ],
      },
    ],
    diseaseSlugs: ['gota'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: ['gota-tratamento-e-alimentacao'],
    references: [
      {
        label: 'Gota',
        url: 'https://www.reumatologia.org.br/doencas-reumaticas/gota/',
        publisher: 'Sociedade Brasileira de Reumatologia',
      },
      {
        label: 'Gota, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-%C3%B3sseos-articulares-e-musculares/gota-e-artrite-por-pirofosfato-de-c%C3%A1lcio/gota',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'gota-tratamento-e-alimentacao',
    slug: 'gota-tratamento-e-alimentacao',
    metaTitle: 'Gota: tratamento e alimentação',
    title: 'Gota: tratamento, alimentação e o que muda na rotina',
    excerpt:
      'Tratar a crise e controlar o ácido úrico são duas frentes diferentes do tratamento da gota. Veja como cada uma funciona e o que muda no prato, na bebida e no acompanhamento.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'dois-objetivos-do-tratamento',
        heading: 'O tratamento tem dois objetivos diferentes',
        paragraphs: [
          'Confundir as duas frentes é o erro mais comum no tratamento da gota, e ele custa caro. De um lado está a crise aguda, que se controla com medicamento anti-inflamatório, colchicina ou corticoide, escolhidos conforme a avaliação médica. Essas medicações desligam a inflamação e aliviam a dor, mas não reduzem a quantidade de ácido úrico no sangue. Elas tratam o episódio, não a doença que o produziu. Muitas pessoas se convencem de que estão curadas porque a dor respondeu bem ao remédio.',
          'Do outro lado está a prevenção das próximas crises. Medicações com objetivo específico de diminuir os níveis de ácido úrico devem ser iniciadas e mantidas a longo prazo, com o cuidado de aguardar a resolução completa da crise aguda para começar. É essa frente que impede novos episódios e evita lesão nas articulações. Ela exige continuidade mesmo em quem está sem sintoma há meses, justamente porque o risco mora no valor que não aparece no dia a dia.',
        ],
      },
      {
        id: 'tratamento-de-longo-prazo',
        heading: 'A longo prazo, a meta é o ácido úrico',
        paragraphs: [
          'A terapia de redução do urato tem uma meta clara: levar a concentração de ácido úrico no sangue para baixo do ponto em que ele cristaliza, o que significa manter o valor abaixo de 6,0 mg/dL e prevenir a formação de novos cristais. É uma referência numérica, não um alívio momentâneo. Enquanto a taxa ficar acima desse ponto, a tendência é de deposição contínua nos tecidos, mesmo sem dor nenhuma no período.',
          'O alopurinol é o medicamento mais usado no Brasil para reduzir o nível de ácido úrico. O ajuste de dose é individual: começa baixo, sobe gradualmente e acompanha os exames até o controle. Outros medicamentos existem para quem não tolera o alopurinol ou para quem não responde a ele, e a escolha depende da função renal e das outras doenças. Nos primeiros meses, novas crises podem aparecer, porque a variação do nível no sangue mobiliza depósitos antigos, e por isso se associa proteção nesse período.',
        ],
      },
      {
        id: 'tratamento-da-crise',
        heading: 'Como a crise aguda é tratada',
        paragraphs: [
          'A crise aguda pode ser controlada com colchicina, medicamentos anti-inflamatórios ou a associação dos dois, com alívio em geral poucas horas depois da dose inicial. Em algumas pessoas, a dor começa a diminuir entre 12 e 24 horas do início do tratamento com colchicina. Quando a inflamação é intensa ou a pessoa não tolera essas opções, o corticoide pode ser indicado, por via oral ou injetado na articulação afetada, conforme a avaliação.',
          'Essas medicações devem ser usadas sempre sob prescrição, com cautela em quem tem insuficiência renal, hipertensão, úlcera péptica ou gastrite. O tratamento costuma continuar por alguns dias após a dor e o inchaço desaparecer, para evitar a recaída. Suspender assim que a melhora aparece é um erro frequente. Quem tem doença renal precisa de atenção redobrada, porque vários desses medicamentos dependem do rim para ser eliminados e o risco de efeito adverso aumenta.',
          'Fora do medicamento, existem medidas de apoio que a pessoa pode fazer em casa enquanto a crise cede: repouso da articulação atingida, imobilização da junta com tala e aplicação de gelo local, citadas como recurso para reduzir a dor. Os primeiros ataques costumam durar de sete a dez dias quando não tratados. Nenhuma dessas medidas substitui o tratamento prescrito, e elas também não alteram o nível de ácido úrico no sangue, que continua sendo o alvo da fase seguinte do cuidado.',
        ],
      },
      {
        id: 'alimentacao-e-bebida',
        heading: 'O que muda no prato e no copo',
        paragraphs: [
          'A orientação alimentar mais citada na gota é reduzir os alimentos ricos em purina. Com os níveis de ácido úrico altos, vale evitar frutos do mar, sardinha, miúdos como rim e fígado, excesso de carne vermelha e pele de aves, porque você pode desencadear uma crise. Essa restrição também não é para sempre: sob tratamento, com os níveis controlados, os alimentos podem ser ingeridos sem exagero.',
          'A bebida merece capítulo próprio. Cerveja e vinho tinto estão entre os desencadeantes mais frequentes, e a combinação de dieta rica em purina com álcool piora o cenário, porque essas bebidas aumentam a produção de ácido úrico e ainda interferem na sua eliminação pelos rins. Refrigerantes e produtos adoçados com xarope de milho rico em frutose também contribuem, elevando a produção da substância. Com o ácido úrico controlado, o consumo de álcool pode acontecer sem exageros.',
        ],
      },
      {
        id: 'peso-e-doencas-associadas',
        heading: 'Peso, água e as outras doenças',
        paragraphs: [
          'Evitar dieta hipercalórica faz parte do tratamento, porque a obesidade é um fator de risco para quem tem gota e o excesso de peso ainda sobrecarrega articulações já inflamadas. Conforme a pessoa perde peso gradualmente, os níveis de ácido úrico no sangue costumam diminuir. Aqui existe um limite importante: essa queda sozinha geralmente não é suficiente para dissolver os depósitos já formados, o que mostra por que a alimentação complementa, mas não substitui a medicação.',
          'Aumentar a ingestão de líquidos ajuda a otimizar o fluxo urinário e a eliminação do ácido úrico. Também vale revisar o que você já usa: diuréticos são gatilho reconhecido de crise, e em quem toma diurético para hipertensão existe a opção de substituição por outro anti-hipertensivo, avaliada pelo médico. Essa troca não cura lesão articular já existente e não deve ser feita por conta própria, porque o diurético pode ser essencial para prevenir AVC e infarto.',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Como é o acompanhamento no dia a dia',
        paragraphs: [
          'O acompanhamento se apoia em exame e em conversa. Nas consultas de retorno, a equipe verifica o nível de ácido úrico, a frequência das crises, a tolerância ao medicamento e a função dos rins, e ajusta a dose a partir desses números. O tratamento da gota também caminha junto com o controle das doenças associadas, como hipertensão arterial e diabetes, que costumam aparecer na mesma pessoa e influenciam as escolhas de remédio.',
          'No SUS, o cuidado começa na UBS, onde a equipe pode solicitar a dosagem de ácido úrico e encaminhar para acompanhamento especializado quando há crises recorrentes. Manter o tratamento nos períodos sem sintoma é o ponto que mais define o resultado, e a interrupção silenciosa é comum justamente porque a doença não dói entre as crises. Vale levar à consulta o registro das crises do último ano, com data, articulação atingida e possível desencadeante.',
        ],
        cta: {
          label: 'Veja a página sobre a gota',
          href: '/doencas/gota/',
        },
      },
    ],
    diseaseSlugs: ['gota'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['gota-crise-de-dor-no-pe-e-o-que-fazer'],
    references: [
      {
        label: 'Gota',
        url: 'https://www.reumatologia.org.br/doencas-reumaticas/gota/',
        publisher: 'Sociedade Brasileira de Reumatologia',
      },
      {
        label: 'Revisão crítica do tratamento medicamentoso da gota no Brasil',
        url: 'https://www.scielo.br/j/rbr/a/mFvgxkXjD8DqzHkSXxJd8mR/?lang=pt',
        publisher: 'Revista Brasileira de Reumatologia',
      },
      {
        label: 'Gota, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-%C3%B3sseos-articulares-e-musculares/gota-e-artrite-por-pirofosfato-de-c%C3%A1lcio/gota',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'doenca-falciforme-sinais-de-alerta-na-crianca',
    slug: 'doenca-falciforme-sinais-de-alerta-na-crianca',
    metaTitle: 'Doença falciforme: sinais na criança',
    title: 'Doença falciforme: sinais de alerta que a criança pede atendimento',
    excerpt:
      'Febre, dor nas mãos e nos pés, falta de ar e palidez súbita são sinais que uma criança com doença falciforme não deve esperar em casa. Veja como reconhecer cada situação.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'porque-a-crianca-e-mais-vulneravel',
        heading: 'Por que a criança é mais vulnerável',
        paragraphs: [
          'A doença falciforme costuma dar seus primeiros sinais a partir do primeiro ano de vida, e é na infância que várias complicações aparecem com mais força. O Ministério da Saúde descreve que as manifestações clínicas começam nesse período e acompanham a criança por toda a vida. Por isso, reconhecer precocemente os sinais de alerta faz tanta diferença nos primeiros anos, quando os sintomas ainda estão se tornando visíveis para a família. Os pais costumam notar, antes de tudo, que o filho, antes ativo, passa a se cansar mais rápido, e é essa mudança gradual que primeiro chama a atenção.',
          'Duas particularidades tornam a criança mais exposta. A primeira é o baço, órgão que ajuda a combater infecções: na doença falciforme ele pode se lesionar cedo, o que aumenta o risco de infecções graves. A segunda é que complicações como a síndrome torácica aguda são mais comuns justamente entre crianças, segundo o Manual MSD. Saber identificar esses sinais mais cedo é uma forma concreta de proteção, e não apenas informação para guardar.',
        ],
      },
      {
        id: 'dor-e-sindrome-mao-pe',
        heading: 'Dor e síndrome mão-pé',
        paragraphs: [
          'O primeiro sinal que muitos pais percebem é a dor, que em bebês pode se manifestar de um jeito específico: a síndrome mão-pé. Nessa situação, as mãos e os pés incham e doem, e a criança chora quando são tocados ou evita apoiar os pés no chão. O Ministério da Saúde lista a síndrome mão-pé entre as principais manifestações da doença, e ela costuma ser um dos primeiros motivos de procura por atendimento.',
          'Conforme a criança cresce, as crises de dor passam a atingir os ossos longos dos braços e das pernas, o tórax e o abdome, como descreve o Manual MSD. A intensidade varia muito: há crianças com poucos episódios e outras com crises repetidas que atrapalham a escola, o sono e a brincadeira. Dor que se repete, mesmo sem febre, merece avaliação, e não deve ser tratada como algo esperado da doença.',
        ],
      },
      {
        id: 'febre-nunca-e-somente-uma-gripe',
        heading: 'Febre nunca é só mais um episódio',
        paragraphs: [
          'Entre os sinais de alerta na criança com doença falciforme, a febre é o que exige menos hesitação. Como o baço pode estar comprometido, as infecções evoluem com mais rapidez e gravidade do que em outras crianças. Por isso, febre não deve ser conduzida em casa como um episódio comum, principalmente quando vem acompanhada de prostração, recusa de alimentar-se ou dificuldade para respirar. Uma febre que surge de repente e se mantém, sobretudo nas primeiras horas, é o momento de agir, e não de reconfirmar a temperatura várias vezes dentro de casa.',
          'O passo recomendado é procurar atendimento no mesmo dia, levando o cartão de vacinas e, se possível, o nome do serviço que acompanha a criança. Nem toda febre indica algo grave, mas nesse grupo a margem para observar e esperar é menor. Até sintomas leves de infecção viral, como tosse e coriza com febre, pedem reavaliação, porque infecções podem agravar a anemia e desencadear uma crise de dor.',
        ],
      },
      {
        id: 'sinais-no-peito-e-na-respiracao',
        heading: 'Sinais no peito e na respiração',
        paragraphs: [
          'A síndrome torácica aguda é uma das complicações mais importantes da doença falciforme, e as crianças são o grupo em que ela surge com mais frequência. O Manual MSD a descreve como um quadro de dor intensa e dificuldade para respirar, que pode vir com febre, tosse e queda da saturação de oxigênio. Ela acontece quando vasos dos pulmões ficam entupidos ou quando aparece uma infecção no tórax.',
          'Reconhecer o sinal cedo muda o desfecho. Respiração rápida, peito puxando entre as costelas, lábios com tom arroxeado e a criança que não consegue terminar uma frase sem pausas para respirar são motivos para atendimento imediato. Segundo o Manual MSD, a síndrome torácica aguda pode ser fatal, e por isso não deve ser aguardada em casa até o dia seguinte. Esses sinais costumam piorar ao longo de horas, o que torna a espera em casa uma estratégia insegura. Diante de falta de ar importante, o pronto-socorro é a decisão segura.',
        ],
      },
      {
        id: 'palidez-e-aumento-da-barriga',
        heading: 'Palidez súbita e aumento da barriga',
        paragraphs: [
          'Um alerta mais silencioso é a piora repentina da anemia. Quando muitas células em foice ficam retidas no baço ou no fígado, o abdome aumenta rápido e a criança fica muito pálida e fraca. É o que o Manual MSD chama de crise de sequestro esplênico ou hepático, mais frequente em crianças, e que agrava a anemia de uma hora para outra. A criança pode ficar sonolenta, com o coração acelerado e a respiração mais rápida, sinais de que a anemia ficou grave subitamente. Barriga dura e dolorosa com palidez intensa pede atendimento sem demora.',
          'Existe ainda a crise aplásica, em que a produção de glóbulos vermelhos cai durante a infecção por alguns vírus, tornando a anemia mais grave, como explicam o Manual MSD e o Ministério da Saúde. Ela costuma vir com muita prostração e palidez, sem necessariamente haver febre alta. Por isso, uma mudança brusca de cor e de disposição em criança com doença falciforme não deve ser lida como simples cansaço do dia.',
        ],
      },
      {
        id: 'o-que-fazer-no-atendimento',
        heading: 'O que fazer na hora do atendimento',
        paragraphs: [
          'Alguns sinais, menos frequentes na infância, também pedem emergência imediata. Fraqueza em um lado do corpo, boca torta, fala enrolada ou perda de equilíbrio podem indicar acidente vascular encefálico, que o Ministério da Saúde inclui entre as manifestações graves da doença. Em adolescentes do sexo masculino, uma ereção prolongada e dolorosa (priapismo) é urgência, pois pode causar lesão permanente quando não tratada rapidamente.',
          'Na hora do atendimento, ajude a equipe com informações objetivas: o diagnóstico da criança, o último exame de hemoglobina, os medicamentos em uso e o que parecia ter disparado a crise. Esse resumo economiza tempo e evita repetir condutas que não funcionaram. Se a equipe indicar internação, não hesite em aceitar o cuidado especializado, pois muitas complicações da doença respondem bem quando tratadas cedo. O reconhecimento rápido, seguido de avaliação qualificada, é o que separa uma crise passageira de uma complicação que deixa sequelas.',
        ],
        cta: {
          label: 'Veja a página sobre a doença falciforme',
          href: '/doencas/doenca-falciforme/',
        },
      },
    ],
    diseaseSlugs: ['doenca-falciforme'],
    topicSlugs: ['doencas-cronicas', 'saude-infantil'],
    relatedArticleSlugs: ['doenca-falciforme-tratamento-e-acompanhamento-no-sus'],
    references: [
      {
        label: 'Anemia falciforme, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-sangue/anemia/anemia-falciforme',
        publisher: 'Manual MSD',
      },
      {
        label: 'Doença Falciforme',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-falciforme',
        publisher: 'Ministério da Saúde do Brasil',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },

  {
    id: 'doenca-falciforme-tratamento-e-acompanhamento-no-sus',
    slug: 'doenca-falciforme-tratamento-e-acompanhamento-no-sus',
    metaTitle: 'Doença falciforme: tratamento no SUS',
    title: 'Doença falciforme: tratamento e acompanhamento no SUS',
    excerpt:
      'Do Teste do Pezinho à hidroxiureia, veja como o Sistema Único de Saúde organiza o cuidado de quem vive com doença falciforme e o que acompanhar ao longo da vida.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'como-o-sus-organiza-o-cuidado',
        heading: 'Como o SUS organiza o cuidado',
        paragraphs: [
          'O acompanhamento da doença falciforme começa antes dos sintomas, ainda na maternidade. Em 2001, o Programa Nacional de Triagem Neonatal incorporou a detecção das hemoglobinopatias ao Sistema Único de Saúde, como recorda o Instituto Nacional de Saúde da Mulher, da Criança e do Adolescente Fernandes Figueira, da Fiocruz. O Teste do Pezinho identifica a criança com a doença e permite iniciar o cuidado antes da primeira crise grave. Esse cuidado precoce, lembra a Fiocruz, marcou o início da mudança da história natural da doença no Brasil.',
          'Em 2005, foi publicada a Portaria nº 1.391, que instituiu no SUS as diretrizes da Política Nacional de Atenção Integral às Pessoas com Doença Falciforme e outras Hemoglobinopatias. Na prática, isso organiza uma rede de serviços especializados, que oferece o diagnóstico pela eletroforese de hemoglobina, disponível no SUS, e o acompanhamento continuado. Crianças a partir de quatro meses, jovens e adultos sem diagnóstico também podem fazer o exame pelo sistema público.',
        ],
      },
      {
        id: 'prevenir-crise-com-medicamentos',
        heading: 'Prevenir a crise com medicamentos e vacinas',
        paragraphs: [
          'Um dos pilares do tratamento é reduzir a frequência e a intensidade das crises. O Manual MSD descreve a hidroxiureia como um dos medicamentos usados para esse fim: ela aumenta a produção de uma hemoglobina de padrão fetal e diminui o número de glóbulos em foice, o que ajuda a prevenir as crises de dor e a síndrome torácica aguda. A escolha e a dose são definidas pela equipe que acompanha o caso, de acordo com a resposta de cada pessoa. A resposta ao tratamento é individual, e por isso nenhum desses medicamentos deve ser iniciado ou ajustado por conta própria.',
          'A proteção contra infecções ocupa lugar central, sobretudo na infância. Por isso, crianças com a forma mais grave costumam receber penicilina por via oral até, no mínimo, os cinco anos, e há recomendação de vacinas contra pneumococo, meningococo, gripe e Haemophilus influenzae tipo b, segundo o Manual MSD. O acompanhamento também prevê a suplementação com ácido fólico, que apoia a produção de novos glóbulos vermelhos. Nenhuma dessas medidas deve ser iniciada ou ajustada por conta própria.',
        ],
      },
      {
        id: 'transfusao-e-monitoramento',
        heading: 'Transfusão e monitoramento',
        paragraphs: [
          'As transfusões de sangue fazem parte do manejo de situações específicas, como a piora acentuada da anemia ou certas complicações. O Manual MSD explica que elas corrigem a anemia quando necessário, e que o controle da crise pode envolver também oxigênio e líquidos pela veia. Cada indicação de transfusão é decidida em contexto clínico, pesando o benefício imediato contra os efeitos do uso repetido ao longo dos anos. O procedimento acontece em serviço de referência, com avaliação antes e acompanhamento durante a transfusão.',
          'Esse uso repetido exige monitoramento. O Ministério da Saúde alerta para complicações tardias relacionadas à sobrecarga de ferro secundária às transfusões, condição em que o excesso de ferro se acumula e pode danificar órgãos. Por isso, quem recebe transfusões com frequência precisa de acompanhamento regular dos níveis de ferro e da função de órgãos, como fígado e coração. Os exames de rotina fazem parte do tratamento, não apenas as consultas de crise.',
        ],
      },
      {
        id: 'o-que-acontece-na-crise',
        heading: 'O que acontece durante uma crise',
        paragraphs: [
          'Quando uma crise vaso-oclusiva se instala, o atendimento busca três coisas ao mesmo tempo: aliviar a dor, desfazer o gatilho e vigiar as complicações. O Manual MSD descreve que crises intensas podem exigir internação, com oxigênio, soluções pela veia e medicamentos para a dor. Quadros que possam ter desencadeado a crise, como uma infecção, são tratados em paralelo, porque ignorar o gatilho faz a dor voltar. Além da internação, a equipe procura identificar e corrigir a causa que disparou o episódio, o que evita que a dor retorne nos dias seguintes.',
          'Alguns episódios mudam de urgência e pedem atenção imediata, como a síndrome torácica aguda, o sequestro esplênico e os sinais de AVC. O mesmo cuidado vale para a febre em criança com a doença. A experiência de quem acompanha mostra que levar informações objetivas, como o último exame de hemoglobina e os medicamentos em uso, agiliza a conduta. Reconhecer cedo, procurar atendimento e não naturalizar a dor são as decisões que a família controla.',
        ],
      },
      {
        id: 'cura-e-novos-tratamentos',
        heading: 'Cura e novos tratamentos',
        paragraphs: [
          'Nem toda a doença se limita ao controle de sintomas. O Manual MSD informa que o transplante de células-tronco pode curar a anemia falciforme, quando há um doador compatível, e que a terapia genética, técnica pela qual se implantam genes funcionais nas células que produzem sangue, também está disponível. Ambas são opções para casos selecionados e exigem avaliação especializada, com riscos e benefícios discutidos individualmente.',
          'Existem ainda medicamentos que ajudam a controlar sintomas e complicações da doença, citados pelo Manual MSD, como a L-glutamina e o crizanlizumabe. A disponibilidade desses tratamentos no sistema público depende de avaliação e de incorporação de tecnologia, e por isso a conversa sobre alternativas acontece com a equipe de referência, não por iniciativa isolada. Independentemente do caminho, o objetivo permanece o mesmo: menos crises, menos lesão de órgãos e mais qualidade de vida.',
        ],
      },
      {
        id: 'acompanhar-a-vida-toda',
        heading: 'Acompanhando a vida toda',
        paragraphs: [
          'A doença falciforme é crônica, então o plano de acompanhamento atravessa as fases da vida. Na infância, o foco está em vacinas em dia, na profilaxia com antibiótico quando indicada e na vigilância de infecções. Já na adolescência e na vida adulta, entram no radar as complicações renais e oculares, as úlceras nas pernas e a sobrecarga de ferro, descritos pelo Ministério da Saúde e pelo Manual MSD como efeitos que se acumulam com o tempo. A passagem do cuidado da infância para a vida adulta deve ser planejada com a equipe, para que o acompanhamento não se interrompa.',
          'O cotidiano também pede combinações claras com a equipe: evitar frio intenso, esforço excessivo e desidratação, tratar infecções cedo e manter um registro das crises. Para quem pretende ter filhos, há duas portas de cuidado no SUS: o aconselhamento genético, que esclarece o risco de transmitir a doença, e a eletroforese de hemoglobina na rotina do pré-natal, oferecida à gestante e ao parceiro. Combinar esses saberes com o acompanhamento regular é o que mantém a doença sob controle ao longo dos anos.',
        ],
        cta: {
          label: 'Veja a página sobre a doença falciforme',
          href: '/doencas/doenca-falciforme/',
        },
      },
    ],
    diseaseSlugs: ['doenca-falciforme'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: ['doenca-falciforme-sinais-de-alerta-na-crianca'],
    references: [
      {
        label: 'Doença Falciforme',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-falciforme',
        publisher: 'Ministério da Saúde do Brasil',
      },
      {
        label: 'Anemia falciforme, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-do-sangue/anemia/anemia-falciforme',
        publisher: 'Manual MSD',
      },
      {
        label: 'A Doença Falciforme no Brasil',
        url: 'https://portaldeboaspraticas.iff.fiocruz.br/biblioteca/a-doenca-falciforme-no-brasil/',
        publisher: 'IFF/Fiocruz',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'esteatose-hepatica-descobri-no-check-up',
    slug: 'esteatose-hepatica-descobri-no-check-up',
    title: 'Descobri gordura no fígado no check-up: e agora?',
    excerpt:
      'O achado no ultrassom é comum e não significa tratamento imediato. Veja quais exames ajudam a medir o risco e como organizar o acompanhamento.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'achado-comum',
        heading: 'Um achado comum, quase sempre sem sintomas',
        paragraphs: [
          'Receber o resultado de uma ultrassonografia com a frase gordura no fígado é mais comum do que parece. A esteatose costuma ser silenciosa e aparece em exames pedidos por outros motivos, como dor abdominal, check-up ou acompanhamento de diabetes. Na maioria das vezes, não é uma emergência.',
          'O achado não significa que a pessoa precise começar um remédio no mesmo dia. Significa que existe gordura acumulada no fígado e que vale investigar se há inflamação, fibrose e fatores metabólicos associados. O primeiro passo é entender o contexto, não entrar em pânico. Na rede pública, o primeiro atendimento costuma ser na unidade básica de saúde, que organiza os exames e os encaminhamentos conforme o risco.',
          'Também vale lembrar que o laudo do ultrassom não substitui a consulta. O médico precisa saber se há diabetes, pressão alta, uso de medicamentos e quanto a pessoa bebe para interpretar o achado e decidir o próximo passo. Levar exames antigos ajuda a comparar a evolução. O laudo deve ser lido junto com a história clínica, e não isoladamente.',
        ],
      },
      {
        id: 'o-que-o-exame-mostra',
        heading: 'O que o ultrassom mostra e o que ele não diz',
        paragraphs: [
          'A ultrassonografia mostra o fígado mais claro e, muitas vezes, aumentado. Ela também pode sugerir o grau de gordura, mas não consegue dizer se o tecido está inflamado ou se já há fibrose. Em casos de gordura leve ou de obesidade importante, a sensibilidade do exame cai.',
          'Por isso, um ultrassom normal não descarta a doença, e um ultrassom alterado não mede a gravidade sozinho. O próximo passo depende da história clínica, dos exames de sangue e, em alguns casos, da elastografia.',
          'O grau descrito no laudo, como leve, moderado ou acentuado, se refere à quantidade de gordura e não à gravidade da doença. Duas pessoas com o mesmo grau podem ter riscos diferentes, dependendo da fibrose e dos fatores metabólicos. Por isso, o número do laudo não deve ser lido como um diagnóstico completo.',
        ],
        bullets: [
          'Mostra gordura e aumento do fígado',
          'Não confirma inflamação nem fibrose',
          'Pode ser menos sensível em gordura leve e obesidade',
          'Não substitui a avaliação clínica',
        ],
      },
      {
        id: 'confirmar-o-risco',
        heading: 'Como saber se há inflamação ou fibrose',
        paragraphs: [
          'A elastografia transitória mede a rigidez do fígado e a quantidade de gordura, de forma indolor. Valores mais altos de rigidez sugerem fibrose mais avançada, mas a interpretação precisa ser feita pelo profissional, considerando idade, peso e outras condições.',
          'Exames de sangue e escores como o FIB-4 ajudam a triar quem precisa de investigação mais detalhada. A biópsia hepática, que confirma inflamação e lesão das células, fica reservada para casos selecionados, porque é invasiva.',
          'Não existe um exame de sangue que substitua a avaliação completa. Os escores ajudam a organizar o risco, mas a decisão de investigar mais depende do conjunto de informações e do acesso aos métodos disponíveis na rede. O acesso à elastografia varia entre os serviços e pode exigir encaminhamento.',
        ],
      },
      {
        id: 'fatores-que-mudam-o-plano',
        heading: 'O que muda o plano de acompanhamento',
        paragraphs: [
          'Alguns fatores tornam o acompanhamento mais próximo: diabetes ou pré-diabetes, obesidade, hipertensão, colesterol alto, idade e alterações nas enzimas do fígado. Também contam o consumo de álcool, o uso de medicamentos e o histórico familiar de doença hepática.',
          'Quanto mais fatores, maior a chance de a gordura progredir. O plano pode incluir nutrição, atividade física, controle das doenças metabólicas e exames periódicos. Em alguns casos, o médico avalia medicamentos, mas eles não substituem a mudança de hábitos.',
          'O histórico familiar também entra na conversa, porque algumas formas de doença hepática têm componente genético. Além disso, a idade e o tempo de exposição aos fatores metabólicos ajudam a estimar o risco acumulado. Quanto mais cedo esses fatores são identificados, mais chance há de intervir antes da fibrose.',
        ],
        bullets: [
          'Diabetes ou pré-diabetes',
          'Obesidade, sobretudo com gordura abdominal',
          'Pressão alta e colesterol alto',
          'Consumo de álcool',
          'Alterações nas enzimas do fígado',
        ],
      },
      {
        id: 'primeiros-passos',
        heading: 'Os primeiros passos depois do diagnóstico',
        paragraphs: [
          'Procure a unidade básica de saúde (UBS) com o resultado em mãos. O clínico geral vai revisar o histórico, medir peso e pressão, pedir exames de sangue e decidir se há necessidade de encaminhamento. Leve também a lista de medicamentos em uso.',
          'Não é preciso esperar a próxima consulta para começar a mudar hábitos. Reduzir bebidas açucaradas, evitar álcool, caminhar na maioria dos dias e diminuir ultraprocessados já ajuda. Mudanças pequenas e sustentadas valem mais do que planos radicais.',
          'Se a UBS não tiver todos os exames, o encaminhamento para um serviço especializado pode ser necessário. Levar os resultados anteriores e anotar as dúvidas ajuda a aproveitar melhor a consulta e evita repetir pedidos. O profissional também pode orientar sobre o que é possível mudar na rotina desde já.',
        ],
        bullets: [
          'Leve o resultado do exame e a lista de medicamentos',
          'Informe seu consumo de álcool',
          'Peça exames de glicemia, colesterol e enzimas do fígado',
          'Comece com mudanças pequenas e possíveis',
          'Evite dietas radicais e produtos milagrosos',
        ],
      },
      {
        id: 'acompanhamento',
        heading: 'Com que frequência voltar',
        paragraphs: [
          'A frequência das consultas e dos exames depende do grau de risco. Quem tem apenas gordura, sem inflamação ou fibrose, pode ser acompanhado em intervalos mais longos. Quem tem diabetes, fibrose ou alterações persistentes precisa de acompanhamento mais próximo.',
          'O importante é não abandonar o seguimento quando os sintomas desaparecem, porque a doença continua silenciosa. O acompanhamento é o que permite perceber a evolução e agir cedo. Manter as consultas em dia permite comparar exames e ajustar o plano antes que a fibrose avance. Isso vale mesmo quando os exames estão normais.',
          'Anotar os resultados de peso, pressão e exames em um caderno ou no aplicativo da unidade ajuda a enxergar a trajetória. Esses dados tornam a conversa com a equipe mais objetiva e facilitam decisões sobre o tratamento. Se aparecerem sintomas novos, não espere o retorno marcado.',
        ],
        cta: {
          label: 'Veja a página completa sobre a esteatose hepática',
          href: '/doencas/esteatose-hepatica/',
        },
      },
    ],
    diseaseSlugs: ['esteatose-hepatica'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
      'esteatose-hepatica-como-reverter-com-habitos',
      'esteatose-hepatica-o-que-acontece-sem-tratamento',
      'esteatose-hepatica-causas-e-mitos',
    ],
    references: [
      {
        label: 'Esteatose hepática: o que é, causas, sintomas e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Métodos de diagnóstico da esteato-hepatite associada à disfunção metabólica (MASH)',
        url: 'https://sbhepatologia.org.br/publicacoes/artigos/metodos-de-diagnostico-da-esteato-hepatite-associada-a-disfuncao-metabolica-mash/',
        publisher: 'Sociedade Brasileira de Hepatologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'esteatose-hepatica-o-que-acontece-sem-tratamento',
    slug: 'esteatose-hepatica-o-que-acontece-sem-tratamento',
    title: 'O que acontece quando a gordura no fígado não é tratada',
    excerpt:
      'A progressão é lenta e silenciosa, mas pode chegar à cirrose e ao câncer de fígado. Entenda as etapas e por que o risco cardiovascular também conta.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'progressao-lenta',
        heading: 'Uma progressão lenta e silenciosa',
        paragraphs: [
          'A esteatose hepática não vira cirrose de um dia para o outro. O caminho costuma ser longo: a gordura se acumula, o fígado pode inflamar, surgem cicatrizes e, em uma parte dos casos, a função do órgão se deteriora. Cada etapa pode durar anos.',
          'Como quase não há sintomas, a pessoa pode passar muito tempo sem saber que a doença está avançando. É por isso que o acompanhamento com exames periódicos importa, sobretudo em quem tem diabetes, obesidade ou histórico de doença hepática. Na prática, isso significa que um exame alterado hoje não deve ser deixado para depois: a avaliação de risco define quando repetir exames e como agir.',
          'A velocidade varia de pessoa para pessoa. Diabetes mal controlado, obesidade, consumo de álcool e hipertensão podem acelerar o processo, enquanto o controle desses fatores pode estabilizar o quadro. Não existe um prazo único, e é justamente por isso que o seguimento individual é importante. A cada consulta, o plano é revisado e inclui o controle de peso, glicemia, pressão e colesterol.',
        ],
      },
      {
        id: 'esteato-hepatite',
        heading: 'Quando a gordura vira inflamação',
        paragraphs: [
          'A inflamação é o primeiro ponto de virada. Quando o fígado acumula gordura e sofre lesão celular, o quadro passa a ser chamado de esteato-hepatite. A inflamação pode ser silenciosa e só ser percebida em exames ou na biópsia.',
          'Nem todo mundo com gordura evolui para inflamação, e nem toda inflamação evolui para cirrose. Ainda assim, a esteato-hepatite aumenta o risco de fibrose e precisa de acompanhamento mais próximo. A presença de inflamação muda a frequência do seguimento e pode indicar a necessidade de avaliação especializada.',
          'A esteato-hepatite é diagnosticada quando há inflamação e lesão das células do fígado, além da gordura. Em muitos casos, ela não causa sintomas, e o médico só percebe a alteração pelas enzimas ou pela elastografia. A biópsia, quando indicada, confirma o quadro com mais precisão.',
        ],
      },
      {
        id: 'fibrose-e-cirrose',
        heading: 'Fibrose e cirrose',
        paragraphs: [
          'A fibrose é a cicatriz que se forma quando a inflamação se repete. No começo, o fígado ainda consegue funcionar; com o tempo, o tecido cicatricial substitui o tecido saudável e o órgão perde flexibilidade. A cirrose é o estágio avançado desse processo.',
          'Cerca de 20% dos casos de esteato-hepatite não tratados podem evoluir para cirrose. Quando a cirrose avança, podem aparecer acúmulo de líquido no abdome, sangramentos, confusão mental e icterícia. Nessa fase, o transplante de fígado pode ser a única opção. O acompanhamento inclui exames de imagem e avaliação da função do fígado, além do tratamento das causas.',
          'A fibrose pode ser medida de forma indireta pela elastografia, que estima a rigidez do fígado. O acompanhamento permite identificar se a rigidez está aumentando e se o risco de cirrose está subindo. Quanto mais cedo a fibrose é detectada, maior a chance de intervir antes que a cirrose se instale.',
        ],
        bullets: [
          'Esteato-hepatite (inflamação)',
          'Fibrose (cicatriz)',
          'Cirrose (estágio avançado)',
          'Falência do fígado',
        ],
      },
      {
        id: 'cancer-de-figado',
        heading: 'Risco de câncer de fígado',
        paragraphs: [
          'A cirrose é um fator de risco importante para o carcinoma hepatocelular, o câncer de fígado mais comum. O tumor pode surgir também em pessoas com gordura no fígado sem cirrose, embora seja mais raro.',
          'Por isso, quem tem fibrose avançada ou cirrose costuma fazer acompanhamento específico, com exames de imagem periódicos. O objetivo é detectar lesões cedo, quando ainda há mais opções de tratamento. Esse calendário é definido pela equipe e deve ser seguido mesmo sem sintomas.',
          'O risco de câncer não se limita a quem tem cirrose. Pessoas com fibrose avançada e fatores metabólicos também precisam de atenção, e o acompanhamento pode incluir exames de imagem periódicos. O objetivo não é alarmar, mas detectar precocemente quando ainda há tratamento.',
        ],
      },
      {
        id: 'coracao-e-metabolismo',
        heading: 'O risco que vai além do fígado',
        paragraphs: [
          'A MASLD não é só um problema do fígado. Ela costuma caminhar junto com obesidade, diabetes, pressão alta e alterações de colesterol, condições que aumentam o risco de infarto e AVC.',
          'As doenças cardiovasculares estão entre as principais causas de morte, e o risco cardíaco pode pesar tanto quanto o hepático. Por isso, o tratamento não se resume a olhar as enzimas do fígado: inclui peso, glicemia, pressão, colesterol, sono e atividade física. Controlar a pressão e o colesterol, parar de fumar e tratar a apneia do sono fazem parte do mesmo cuidado.',
          'O elo entre fígado e coração passa pela resistência à insulina, pela inflamação crônica e pelo acúmulo de gordura visceral. Melhorar um lado costuma ajudar o outro: perder peso e controlar a glicemia reduz o risco hepático e cardiovascular ao mesmo tempo. Por isso, o plano é único, e não uma soma de tratamentos separados.',
        ],
        bullets: [
          'Infarto e AVC',
          'Diabetes e piora do controle glicêmico',
          'Alterações de colesterol e triglicerídeos',
          'Apneia do sono e outros problemas metabólicos',
        ],
      },
      {
        id: 'da-para-reverter',
        heading: 'Ainda dá para reverter',
        paragraphs: [
          'A boa notícia é que a doença pode regredir, especialmente antes de a fibrose avançar. Perder 5% do peso reduz a gordura no fígado; perdas acima de 10% podem melhorar a inflamação e a fibrose. O corpo tem capacidade de reparar parte do dano quando o agente agressor é retirado.',
          'Mesmo quando já existe fibrose, o acompanhamento pode estabilizar o quadro e reduzir o risco de progressão. O momento de agir é agora, independentemente do estágio em que o diagnóstico foi feito. Quanto mais cedo o diagnóstico, maior a chance de estabilizar o quadro.',
          'A reversão é mais provável quando a fibrose ainda é leve. Mesmo em estágios mais avançados, o acompanhamento pode desacelerar a progressão e reduzir complicações. O tratamento não é uma promessa de cura para todos, mas é a diferença entre um quadro estável e um quadro que piora. Isso reforça a importância do seguimento regular.',
        ],
        cta: {
          label: 'Veja a página completa sobre a esteatose hepática',
          href: '/doencas/esteatose-hepatica/',
        },
      },
    ],
    diseaseSlugs: ['esteatose-hepatica'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
      'esteatose-hepatica-como-reverter-com-habitos',
      'esteatose-hepatica-descobri-no-check-up',
      'esteatose-hepatica-causas-e-mitos',
    ],
    references: [
      {
        label: 'Esteatose hepática: o que é, causas, sintomas e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Esteatose hepática: tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica/tratamento',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Modificação do estilo de vida em MASLD/MASH: fatos e evidências',
        url: 'https://sbhepatologia.org.br/publicacoes/artigos/modificacao-do-estilo-de-vida-em-masld-mash-fatos-e-evidencias/',
        publisher: 'Sociedade Brasileira de Hepatologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'esteatose-hepatica-causas-e-mitos',
    slug: 'esteatose-hepatica-causas-e-mitos',
    title: 'Gordura no fígado: causas e mitos',
    excerpt:
      'Não é só comida gordurosa: álcool, açúcar, peso, diabetes e até remédios entram na conta. Veja por que pessoas magras também podem ter esteatose.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'nao-e-so-gordura',
        heading: 'Não é só questão de comida gordurosa',
        paragraphs: [
          'Um dos mitos mais comuns é que a gordura no fígado vem apenas de comer frituras. A alimentação importa, mas o acúmulo de gordura no fígado é resultado de um conjunto de fatores metabólicos, do consumo de álcool e até de medicamentos. Fatores como resistência à insulina, excesso de peso abdominal e consumo de álcool pesam tanto quanto a quantidade de óleo na comida.',
          'O corpo produz e transporta gordura de várias formas. Quando há excesso de calorias, resistência à insulina ou alterações no metabolismo, o fígado passa a armazenar mais gordura do que consegue exportar. Por isso, uma pessoa pode comer pouco e ainda assim desenvolver esteatose. O peso na balança, sozinho, não explica o risco metabólico.',
          'O fígado também recebe gordura produzida pelo próprio corpo, a partir do excesso de carboidratos e da resistência à insulina. Por isso, uma dieta aparentemente pobre em gordura, mas rica em açúcar e ultraprocessados, pode favorecer o acúmulo. Olhar apenas para a quantidade de óleo não conta a história toda.',
        ],
      },
      {
        id: 'alcool',
        heading: 'O papel do álcool',
        paragraphs: [
          'O álcool é metabolizado no fígado e, em excesso, favorece o acúmulo de gordura e a inflamação. O risco não depende só da quantidade total: beber de forma frequente, mesmo sem grandes quantidades em uma única ocasião, também pode sobrecarregar o órgão.',
          'Em quem já tem esteatose, a recomendação é eliminar a bebida alcoólica do dia a dia. O álcool pode somar-se a outros fatores e acelerar a progressão, por isso não deve ser tratado como um hábito sem importância. A conversa sobre bebida deve fazer parte da consulta, sem julgamento e com metas realistas.',
          'O álcool não é a única causa, mas é uma das mais evitáveis. Em pessoas que já têm gordura no fígado, ele pode acelerar a inflamação e a fibrose, mesmo quando o consumo parece social e moderado. Reduzir ou eliminar a bebida é uma das mudanças com maior impacto.',
        ],
      },
      {
        id: 'metabolismo',
        heading: 'Peso, açúcar e resistência à insulina',
        paragraphs: [
          'O excesso de peso, especialmente a gordura acumulada na barriga, é um dos principais motores da MASLD. O sobrepeso e a obesidade respondem por cerca de 60% dos casos de gordura no fígado não alcoólica. A gordura visceral, aquela que fica em volta dos órgãos, é mais prejudicial do que a gordura localizada em outras partes do corpo.',
          'Diabetes tipo 2, pré-diabetes, colesterol alto, pressão alta, síndrome dos ovários policísticos, hipotireoidismo e apneia do sono também aumentam o risco. Muitas vezes, esses fatores aparecem juntos, e cada um piora o outro.',
          'A resistência à insulina faz o corpo produzir mais insulina e favorece o armazenamento de gordura, inclusive no fígado. O excesso de gordura abdominal é um marcador desse processo. Por isso, medir a circunferência da cintura ajuda tanto quanto olhar o peso na balança.',
        ],
        bullets: [
          'Excesso de peso e gordura abdominal',
          'Diabetes tipo 2 ou pré-diabetes',
          'Colesterol e triglicerídeos altos',
          'Pressão alta',
          'Síndrome metabólica',
        ],
      },
      {
        id: 'medicamentos',
        heading: 'Medicamentos e outras causas',
        paragraphs: [
          'Alguns medicamentos podem contribuir para a gordura no fígado, como corticoides, estrogênio, amiodarona, antirretrovirais, diltiazem e tamoxifeno. Isso não significa que a pessoa deva parar o remédio por conta própria; a decisão precisa ser conversada com o médico que fez a prescrição. A lista de medicamentos em uso deve ser revista em cada consulta, incluindo fitoterápicos e suplementos.',
          'Outras condições também entram na lista: hepatites crônicas, gravidez, variações muito rápidas de peso e doenças metabólicas raras, sobretudo em crianças pequenas. Por isso, a investigação não se limita a perguntar sobre alimentação.',
          'Nenhuma medicação deve ser suspensa sem orientação. Em alguns casos, o médico pode trocar ou ajustar o remédio, mas isso depende do motivo pelo qual ele foi prescrito e das alternativas disponíveis. O histórico de medicações é uma parte essencial da investigação da gordura no fígado.',
        ],
        bullets: [
          'Corticoides e estrogênio',
          'Amiodarona, diltiazem e tamoxifeno',
          'Antirretrovirais',
          'Hepatites crônicas e outras doenças do fígado',
        ],
      },
      {
        id: 'pessoas-magras',
        heading: 'Pessoas magras também podem ter',
        paragraphs: [
          'A esteatose não é exclusiva de quem está acima do peso. Pessoas magras, sem alterações de colesterol ou glicemia, podem desenvolver a doença, embora isso seja menos comum. Nesses casos, a alimentação, o álcool e alterações metabólicas sutis podem pesar.',
          'Por isso, o peso normal não dispensa a avaliação quando há sintomas, alterações de exames ou histórico familiar. O diagnóstico é feito com base no conjunto, e não apenas no número da balança. A investigação costuma incluir glicemia, perfil lipídico, enzimas do fígado e avaliação da gordura abdominal.',
          'Em pessoas magras, a investigação precisa ser ainda mais cuidadosa, porque a aparência pode atrasar o diagnóstico. Alterações sutis de glicemia, gordura abdominal e histórico familiar podem explicar o quadro. O peso normal não deve ser usado como argumento para ignorar exames alterados.',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: 'O que fazer com essa informação',
        paragraphs: [
          'Entender as causas ajuda a escolher o que mudar. Se o álcool está presente, ele precisa sair. Se há excesso de peso, o foco é emagrecer de forma gradual. Se há diabetes ou colesterol alto, essas condições precisam de tratamento.',
          'Não existe uma fórmula única, e o plano deve ser ajustado com a equipe de saúde. O importante é não tratar a gordura no fígado como algo inevitável ou inofensivo: ela pode regredir, mas também pode avançar quando é ignorada.',
          'Começar por uma mudança possível costuma funcionar melhor do que tentar corrigir tudo ao mesmo tempo. Se o álcool é o fator mais presente, ele vem primeiro; se o peso é o principal, o foco inicial é a alimentação e a atividade. A equipe ajuda a definir a ordem e a ajustar o plano ao longo do tempo. O plano pode começar por uma meta pequena e ser ampliado conforme a rotina permite.',
        ],
        cta: {
          label: 'Veja a página completa sobre a esteatose hepática',
          href: '/doencas/esteatose-hepatica/',
        },
      },
    ],
    diseaseSlugs: ['esteatose-hepatica'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
      'esteatose-hepatica-como-reverter-com-habitos',
      'esteatose-hepatica-descobri-no-check-up',
      'esteatose-hepatica-o-que-acontece-sem-tratamento',
    ],
    references: [
      {
        label: 'Esteatose hepática: o que é, causas, sintomas e tratamento',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Esteatose hepática: prevenção',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica/prevencao',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Atualização na nomenclatura para doenças hepáticas associadas a esteatose: de NASH para MASH',
        url: 'https://sbhepatologia.org.br/publicacoes/artigos/atualizacao-na-nomenclatura-para-doencas-hepaticas-associadas-a-esteatose-de-nash-para-mash/',
        publisher: 'Sociedade Brasileira de Hepatologia',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'pneumonia-vacina-protecao',
    slug: 'pneumonia-vacina-protecao',
    title: 'Pneumonia: quais vacinas protegem e quando tomar',
    excerpt:
      'Vacinas contra pneumococo, Hib e influenza reduzem o risco de pneumonia e de casos graves. Veja o que o calendário do SUS oferece e quem deve conversar com a equipe.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'protecao-que-comeca-antes',
        heading: 'Uma proteção que começa antes da doença',
        paragraphs: [
          'A vacina não impede toda pneumonia, mas ensina o sistema imunológico a reconhecer agentes que costumam causar a doença. Com isso, o corpo responde mais rápido e o risco de formas graves, internação e morte cai. É uma proteção que começa antes de qualquer sintoma. A proteção é maior quando o esquema é completado nas idades recomendadas, mas atrasos podem ser corrigidos depois.',
          'No Brasil, o Calendário Nacional de Vacinação reúne as principais vacinas e oferece boa parte delas gratuitamente pelo SUS. A recomendação muda com a idade, a condição de saúde e o histórico de doses. Por isso, a caderneta é o documento que orienta a conversa na unidade básica de saúde. A caderneta também ajuda a identificar vacinas recomendadas para quem convive com doenças crônicas.',
          'Nenhuma vacina cobre todos os agentes. Vírus, bactérias e fungos podem causar pneumonia, e a proteção contra um grupo não elimina o risco dos demais. Vacinar-se continua sendo o passo com maior impacto, mas convive com higiene, ambientes ventilados e controle das doenças crônicas.',
        ],
      },
      {
        id: 'pneumococica',
        heading: 'Vacina pneumocócica: contra o agente mais comum',
        paragraphs: [
          'O pneumococo é a bactéria mais frequente na pneumonia adquirida na comunidade. No calendário infantil, a vacina pneumocócica conjugada é aplicada aos 2 e 4 meses, com reforço aos 12 meses. Ela reduz as formas graves e ajuda a proteger quem convive com a criança.',
          'A vacina não trata a infecção nem substitui o antibiótico. Ela prepara a defesa para quando o pneumococo tenta invadir o pulmão ou a corrente sanguínea. Crianças vacinadas ainda podem ter pneumonia por outros agentes, mas o risco das apresentações mais sérias diminui. Quem já recebeu uma dose não deve repetir sem orientação.',
          'Adultos e pessoas idosas com fatores de risco devem perguntar na UBS se a vacina pneumocócica está indicada. A resposta depende do calendário vigente, das condições clínicas e das doses já recebidas. Não é uma decisão para tomar por conta própria nem para resolver fora da orientação da equipe. A equipe também verifica se há necessidade de doses adicionais em pessoas com condições específicas.',
        ],
      },
      {
        id: 'influenza-hib-e-outras',
        heading: 'Influenza, Hib e outras vacinas do calendário',
        paragraphs: [
          'A influenza é outra porta de entrada importante. A vacina é anual para crianças de 6 meses a menores de 6 anos, pessoas idosas e grupos de risco, conforme o calendário. Como o vírus muda de temporada para temporada, a dose precisa ser repetida. A vacina pode ser aplicada junto com outras do calendário, conforme a orientação local.',
          'A pentavalente protege contra o Hib e é aplicada aos 2, 4 e 6 meses. O Hib é uma bactéria que pode causar pneumonia e outras infecções graves. Manter o esquema completo é parte da proteção contra a pneumonia, mesmo que a vacina não leve esse nome. Quem tem dúvida sobre o próprio esquema deve levar a caderneta à UBS.',
          'Sarampo e coqueluche também entram nessa conta, porque a pneumonia é uma complicação frequente dessas doenças. A vacinação de rotina, mesmo quando não fala diretamente de pulmão, reduz o caminho para infecções respiratórias. A caderneta mostra quais doses estão atrasadas.',
        ],
      },
      {
        id: 'quem-deve-procurar-a-ubs',
        heading: 'Quem deve conversar com a equipe',
        paragraphs: [
          'A conversa sobre vacinas é mais importante para crianças menores de cinco anos, pessoas com 65 anos ou mais, quem tem asma ou DPOC sem controle, fumantes e pessoas com imunidade baixa. Também merece atenção quem tem dificuldade para engolir, vive em abrigo coletivo ou já teve pneumonia grave.',
          'Nesses grupos, a pneumonia tende a ser mais frequente e mais séria. A equipe pode indicar doses adicionais, antecipar esquemas ou explicar por que determinada vacina não se aplica naquele momento. Nada disso substitui a avaliação individual. A decisão é feita caso a caso, com base no que a pessoa já recebeu e no risco atual.',
          'Levar a caderneta, a lista de remédios e o histórico de internações ajuda. A unidade básica de saúde consegue ver o que falta e orientar o próximo passo. Quem não tem caderneta pode começar o acompanhamento na própria UBS.',
        ],
      },
      {
        id: 'vacina-nao-e-tudo',
        heading: 'A vacina reduz o risco, mas não fecha todas as portas',
        paragraphs: [
          'Higiene das mãos, ambientes ventilados, amamentação exclusiva nos primeiros seis meses e nada de fumo dentro de casa completam a proteção. Quem convive com asma ou DPOC deve manter o tratamento em dia, porque o pulmão descontrolado adoece com mais facilidade. Essas medidas não exigem receita e podem começar hoje.',
          'Pessoas vacinadas ainda podem adoecer por outros agentes ou por cepas não cobertas. Por isso, febre que não cede, tosse que piora, falta de ar ou confusão em idosos exigem avaliação. Não se deve usar sobra de antibiótico nem esperar a doença avançar.',
          'A vacinação é um ato de cuidado coletivo. Quanto mais pessoas protegidas, menor a circulação dos agentes e menor a pressão sobre o sistema de saúde. Para quem tem risco, a conversa com a equipe é o melhor caminho.',
        ],
        cta: {
          label: 'Veja a página completa sobre pneumonia',
          href: '/doencas/pneumonia/',
        },
      },
      {
        id: 'onde-se-vacinar',
        heading: 'Onde se vacinar e o que levar',
        paragraphs: [
          'As vacinas do calendário estão disponíveis nas unidades básicas de saúde. A aplicação é gratuita pelo SUS e não exige encaminhamento para a maioria das doses. O atendimento segue a agenda local, que pode variar de cidade para cidade.',
          'Quem perdeu uma dose não precisa recomeçar tudo sem orientação. A equipe avalia o esquema e indica como retomar. Levar um documento e a caderneta facilita o registro e evita doses repetidas. A data da próxima dose pode ser anotada na caderneta.',
          'Se houver febre alta ou mal-estar no dia da aplicação, a equipe decide se é melhor adiar. Reações leves, como dor no braço e febre baixa, costumam passar sozinhas. Qualquer dúvida deve ser levada à UBS, não resolvida em grupos de mensagem. O registro correto evita que uma dose seja aplicada duas vezes sem necessidade.',
        ],
      },
    ],
    diseaseSlugs: ['pneumonia'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: [
      'pneumonia-sinais-de-alerta-quando-procurar-atendimento',
      'pneumonia-tratamento-e-recuperacao',
      'pneumonia-em-criancas',
      'pneumonia-em-idosos',
    ],
    references: [
      {
        label: 'Calendário Nacional de Vacinação',
        url: 'https://www.gov.br/saude/pt-br/vacinacao/calendario',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Pneumonia in children: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Pneumonia adquirida na comunidade, edição profissional',
        url: 'https://www.msdmanuals.com/pt/profissional/dist%C3%BArbios-pulmonares/pneumonia/pneumonia-adquirida-na-comunidade',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'pneumonia-em-criancas',
    slug: 'pneumonia-em-criancas',
    title: 'Pneumonia em crianças: sinais, cuidados e quando buscar ajuda',
    excerpt:
      'Respiração rápida, peito puxando para dentro e recusa de alimento são sinais que mudam a urgência. Saiba o que observar, como tratar e quando ir ao pronto atendimento.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'por-que-criancas-adoecem-mais',
        heading: 'Por que crianças adoecem mais',
        paragraphs: [
          'As vias aéreas da criança são mais estreitas e a imunidade ainda está em formação. Isso facilita que uma infecção respiratória desça até os alvéolos e provoque pneumonia. Vírus como o sincicial respiratório e bactérias como o pneumococo estão entre os agentes frequentes. Bebês prematuros e crianças com doenças crônicas merecem atenção especial desde os primeiros meses.',
          'A pneumonia é a principal causa infecciosa de morte em crianças pequenas no mundo. A maioria dos casos, porém, pode ser tratada e evolui bem quando os sinais são reconhecidos cedo. O risco maior está nos menores de cinco anos, sobretudo nos bebês.',
          'Crianças com asma, prematuridade, desnutrição ou imunidade baixa adoecem com mais facilidade. Conviver com fumaça de cigarro, lenha ou carvão em ambiente fechado também pesa. Reconhecer esses fatores ajuda a família a procurar avaliação sem esperar demais. A caderneta de vacinação e o acompanhamento na UBS ajudam a identificar esses riscos.',
        ],
      },
      {
        id: 'sinais-que-importam',
        heading: 'Os sinais que mudam a urgência',
        paragraphs: [
          'Nem toda criança com tosse tem pneumonia, mas alguns sinais pedem avaliação imediata. Respiração rápida, peito puxando para dentro, gemência e dificuldade para mamar ou comer são os mais importantes. Em bebês, a respiração pode parecer mais curta e frequente. A contagem deve ser feita com a criança calma, de preferência por um minuto inteiro.',
          'A febre pode estar presente ou não, e a intensidade não mede a gravidade. O que pesa é o conjunto: criança prostrada, sem energia para brincar, com lábios ou pontas dos dedos arroxeados, ou que não consegue beber água. Esses sinais indicam que o corpo está sofrendo com a falta de oxigênio. A saturação de oxigênio é medida na unidade de saúde.',
          'A Organização Mundial da Saúde orienta contar a respiração e observar a retração da parte de baixo do tórax em menores de cinco anos. Esse olhar treinado ajuda a separar um resfriado de um quadro que precisa de atendimento. Na dúvida, a unidade de saúde deve ser procurada. Não é preciso esperar piorar para procurar ajuda quando a respiração muda.',
        ],
      },
      {
        id: 'tosse-nao-vira-pneumonia',
        heading: 'Tosse não vira pneumonia por si só',
        paragraphs: [
          'A pneumonia é causada por um microrganismo que chega ao pulmão, não pela tosse em si. Uma criança com resfriado pode tossir por dias e não desenvolver pneumonia. O que muda o cenário é a infecção se instalar nos alvéolos, com febre, queda do estado geral e dificuldade respiratória. Por isso, tratar apenas a tosse não resolve a infecção que está no pulmão.',
          'Xaropes que bloqueiam a tosse não ajudam quando há catarro e podem atrapalhar a eliminação da secreção. Em crianças pequenas, muitos desses produtos não são indicados. O mesmo vale para sobras de antibiótico e receitas caseiras sem orientação. A automedicação pode mascarar sinais e atrasar o diagnóstico.',
          'Crises de asma e bronquiolite também causam chiado, tosse e falta de ar. Elas precisam de avaliação para não serem confundidas com pneumonia. O exame do médico, a saturação de oxigênio e, quando necessário, a radiografia ajudam a separar os quadros.',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Como é o tratamento',
        paragraphs: [
          'Quando a suspeita bacteriana é firme, o antibiótico começa cedo. O esquema e o tempo de uso são definidos pelo médico, e o tratamento deve ser completado mesmo depois que a febre passa. Interromper antes favorece a volta da infecção.',
          'Nem toda pneumonia precisa de internação. Crianças que respiram bem, conseguem beber e comer e têm saturação adequada podem ser tratadas em casa, com retorno marcado. A internação entra quando falta oxigênio, há confusão, recusa alimentar importante ou piora apesar do tratamento.',
          'Hidratação, alimentação leve e repouso completam o cuidado. Em casos graves, podem ser necessários oxigênio, hidratação venosa e antibiótico na veia. A equipe também observa complicações como derrame pleural e sepse, que exigem manejo hospitalar. O retorno é importante para confirmar a melhora e ajustar o cuidado.',
        ],
      },
      {
        id: 'cuidados-em-casa',
        heading: 'Cuidados em casa e sinais de retorno',
        paragraphs: [
          'Em casa, o essencial é oferecer líquidos ao longo do dia e manter a alimentação que a criança aceitar. Não force a comida, mas observe se ela está bebendo e urinando. Um ambiente ventilado e sem fumaça ajuda o pulmão a se recuperar, e ninguém deve fumar dentro de casa. Ventilar os quartos todos os dias também reduz a circulação de vírus.',
          'Anote a temperatura, a frequência da respiração e o aspecto do catarro. Febre que volta depois de dias de melhora, falta de ar nova, catarro com sangue ou sonolência fora do normal pedem avaliação antes da data marcada. Se a criança estiver muito sonolenta ou não urinar, procure atendimento no mesmo dia.',
          'A melhora pode ser gradual: a febre cede primeiro, mas a tosse e o cansaço podem durar semanas. A radiografia demora mais para normalizar. Mesmo assim, a criança deve voltar à consulta para que a equipe confirme a recuperação.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir o risco',
        paragraphs: [
          'As vacinas contra pneumococo, Hib e influenza estão no calendário do SUS e reduzem as formas graves. A amamentação exclusiva nos primeiros seis meses, a higiene das mãos e os ambientes ventilados completam a proteção. Nada de fumo dentro de casa.',
          'Crianças com asma ou outras doenças crônicas devem manter o tratamento em dia. Evitar contato próximo com pessoas doentes e não compartilhar copos ou utensílios também ajuda. Quando há um caso confirmado na turma, a escola e a creche devem ser avisadas e reforçar a ventilação e a higiene das mãos, para reduzir o risco de surtos.',
          'Reconhecer cedo os sinais e procurar a unidade de saúde é parte da prevenção das formas graves. A vacina reduz o risco, mas não elimina a necessidade de avaliação quando a criança piora. Manter a caderneta de vacinação atualizada é uma tarefa contínua, que acompanha as consultas de rotina.',
        ],
        cta: {
          label: 'Entenda a pneumonia na página da doença',
          href: '/doencas/pneumonia/',
        },
      },
    ],
    diseaseSlugs: ['pneumonia'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: [
      'pneumonia-sinais-de-alerta-quando-procurar-atendimento',
      'pneumonia-tratamento-e-recuperacao',
      'pneumonia-vacina-protecao',
      'pneumonia-em-idosos',
    ],
    references: [
      {
        label: 'Pneumonia in children: folha informativa',
        url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Pneumonia adquirida na comunidade, edição profissional',
        url: 'https://www.msdmanuals.com/pt/profissional/dist%C3%BArbios-pulmonares/pneumonia/pneumonia-adquirida-na-comunidade',
        publisher: 'Manual MSD',
      },
      {
        label: 'Considerações gerais sobre pneumonia, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-pulmonares-e-das-vias-respirat%C3%B3rias/pneumonia/considera%C3%A7%C3%B5es-gerais-sobre-pneumonia',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'pneumonia-em-idosos',
    slug: 'pneumonia-em-idosos',
    title: 'Pneumonia em idosos: quando a confusão é o primeiro sinal',
    excerpt:
      'Em pessoas idosas, pneumonia pode começar sem febre, com confusão, fraqueza e recusa de comida. Saiba por que isso acontece e quando procurar atendimento.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    body: [
      {
        id: 'sem-febre-nao-e-alivio',
        heading: 'Sem febre não significa menos grave',
        paragraphs: [
          'Em pessoas idosas, a pneumonia pode começar sem o trio clássico de febre, tosse e falta de ar. O primeiro sinal pode ser confusão súbita, fraqueza, sonolência ou recusa de comida. Quem conhece a rotina da pessoa percebe que algo mudou antes de qualquer exame. A família costuma ser a primeira a notar que a pessoa não está como antes.',
          'Essa apresentação atípica não quer dizer doença leve. Pelo contrário: quanto mais velha e frágil a pessoa, maior o risco de desidratação, queda, piora da função renal e internação. A ausência de febre pode atrasar a busca por ajuda. Por isso, qualquer mudança abrupta merece avaliação, mesmo sem febre.',
          'Também podem aparecer quedas, tontura, falta de ar aos esforços e piora de uma doença crônica já conhecida. Nenhum desses sinais é exclusivo de pneumonia, mas o conjunto deve levar à avaliação. Não se deve atribuir tudo à idade.',
        ],
      },
      {
        id: 'por-que-mais-grave',
        heading: 'Por que a pneumonia pesa mais nessa idade',
        paragraphs: [
          'Com o envelhecimento, a resposta imunológica fica menos eficiente e o reflexo de tosse pode ser mais fraco. Isso facilita a entrada de microrganismos e dificulta a eliminação de secreção. Doenças crônicas, como DPOC, diabetes e problemas cardíacos, somam risco. Manter as doenças crônicas controladas reduz a chance de descompensação.',
          'A dificuldade para engolir é outro ponto importante. Alimento, líquido ou saliva podem descer para as vias aéreas e provocar pneumonia por aspiração. Quem tem AVC, Parkinson ou demência tem risco maior e precisa de cuidado na alimentação. A equipe pode orientar a alimentação e a posição durante as refeições.',
          'Desnutrição, imunidade baixa e vida em abrigo coletivo também aumentam a exposição. Pessoas acamadas e com úlceras por pressão merecem atenção redobrada. A avaliação não olha apenas o pulmão, mas o corpo inteiro e a rotina. A vacinação e o acompanhamento regular ajudam a reduzir esse risco.',
        ],
      },
      {
        id: 'confusao-subita',
        heading: 'Confusão súbita não é “normal da idade”',
        paragraphs: [
          'Uma mudança abrupta de comportamento, com desorientação, agitação ou sonolência, pode ser delirium. Na pessoa idosa, o delirium costuma ser a primeira manifestação de infecção, desidratação, efeito de remédio ou dor. Chamar isso de “normal da idade” atrasa o diagnóstico. O delirium é um sinal de alerta e pede avaliação rápida.',
          'A família deve comparar com o estado habitual: a pessoa está mais confusa do que ontem? Parou de comer? Está urinando menos? Teve febre, tosse ou chiado? Essas informações ajudam muito na consulta e no pronto atendimento. Fotos e informações sobre os remédios ajudam o profissional a comparar.',
          'A avaliação precisa procurar a causa. Pneumonia, infecção urinária, distúrbios metabólicos e medicamentos podem se apresentar assim. Quanto antes a origem é identificada, menor o risco de complicações. A hidratação e a alimentação também entram na investigação.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como o diagnóstico é feito',
        paragraphs: [
          'O médico escuta a história, examina o pulmão e mede a saturação de oxigênio. Em pessoas idosas, a ausculta pode ser discreta e a radiografia pode não mostrar tudo de imediato. Por isso, a avaliação clínica e o acompanhamento valem tanto quanto o exame. A oximetria deve ser feita em repouso e, se possível, comparada com valores anteriores.',
          'A radiografia de tórax costuma confirmar a área de consolidação. A tomografia entra quando há dúvida ou quando se suspeita de outra doença. Exames de sangue ajudam a avaliar gravidade, hidratação e resposta à infecção. A equipe pode repetir o exame se a primeira imagem não explicar o quadro.',
          'A decisão de internar considera a saturação, a frequência respiratória, a capacidade de beber e comer, a confusão e as doenças de base. Escores clínicos organizam essa avaliação, mas não substituem o olhar para a pessoa e sua rotina. A decisão também considera o suporte disponível em casa, e a família deve levar a lista de remédios e os exames recentes.',
        ],
      },
      {
        id: 'tratamento-e-recuperacao',
        heading: 'Tratamento e recuperação',
        paragraphs: [
          'O antibiótico é iniciado quando a suspeita bacteriana é firme, sem esperar todos os resultados. A equipe observa a resposta nas primeiras 48 a 72 horas e ajusta o esquema se necessário. Hidratação, alimentação e controle da febre completam o cuidado.',
          'A recuperação costuma ser mais lenta do que em pessoas jovens. A febre pode ceder antes da tosse e do cansaço, e a radiografia demora a normalizar. A alta não significa que o risco acabou: é preciso manter o retorno e observar mudanças de comportamento. A família deve manter as consultas e observar o comportamento.',
          'Idosos que não conseguem beber, comer ou tomar o remédio, que têm falta de ar em repouso ou confusão importante precisam de hospital. A internação também entra quando o oxigênio cai ou quando as doenças crônicas descompensam. A decisão é sempre individual. O retorno precoce evita que uma piora passe despercebida.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir',
        paragraphs: [
          'A vacina contra a influenza, oferecida a cada temporada para pessoas idosas, é a medida de maior impacto. Manter as demais vacinas em dia conforme a orientação da unidade de saúde, controlar asma e DPOC e evitar fumo dentro de casa também reduz o risco. A higiene das mãos e os ambientes ventilados contam. A orientação vale para quem vive com a pessoa idosa.',
          'Cuidar da alimentação e da hidratação, tratar a dificuldade para engolir e revisar remédios que causam sonolência ajuda a prevenir aspiração e quedas. A cadeira deve ficar em posição adequada durante as refeições, e a pessoa não deve comer deitada. A refeição deve ser feita com calma e sem distração.',
          'A família deve conhecer o estado habitual do idoso para reconhecer mudanças cedo. Febre, tosse, falta de ar, confusão ou recusa de comida exigem avaliação. Não espere o quadro avançar para procurar a unidade de saúde. Uma lista de sinais de alerta afixada na geladeira ajuda a família a agir.',
        ],
        cta: {
          label: 'Saiba mais sobre pneumonia',
          href: '/doencas/pneumonia/',
        },
      },
    ],
    diseaseSlugs: ['pneumonia'],
    topicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedArticleSlugs: [
      'pneumonia-sinais-de-alerta-quando-procurar-atendimento',
      'pneumonia-tratamento-e-recuperacao',
      'pneumonia-vacina-protecao',
      'pneumonia-em-criancas',
    ],
    references: [
      {
        label: 'Pneumonia adquirida na comunidade, edição profissional',
        url: 'https://www.msdmanuals.com/pt/profissional/dist%C3%BArbios-pulmonares/pneumonia/pneumonia-adquirida-na-comunidade',
        publisher: 'Manual MSD',
      },
      {
        label: 'Considerações gerais sobre pneumonia, versão saúde para a família',
        url: 'https://www.msdmanuals.com/pt/casa/dist%C3%BArbios-pulmonares-e-das-vias-respirat%C3%B3rias/pneumonia/considera%C3%A7%C3%B5es-gerais-sobre-pneumonia',
        publisher: 'Manual MSD',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'insuficiencia-cardiaca-transplante-cardiaco',
    slug: 'insuficiencia-cardiaca-transplante-cardiaco',
    title: 'Transplante cardíaco: quando a insuficiência cardíaca chega ao fim da linha',
    excerpt:
      'O transplante é reservado a casos avançados, sem resposta ao tratamento otimizado. Entenda a avaliação, a lista única do SUS e o que muda depois da cirurgia.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'quando-o-transplante-entra',
        heading: 'Quando o transplante entra na conversa',
        paragraphs: [
          'A insuficiência cardíaca é uma doença crônica e, na maioria dos casos, o tratamento com remédios, dieta e acompanhamento consegue controlar sintomas e internações. O transplante não é a primeira etapa do cuidado. Ele aparece quando o coração já não responde ao tratamento otimizado e a doença limita a vida de forma importante.',
          'Nessa situação, a cirurgia substitui o coração doente pelo coração de um doador. O objetivo é devolver ao corpo um bombeamento capaz de sustentar as atividades do dia a dia. A indicação é feita por uma equipe especializada, depois de esgotadas as outras possibilidades e de confirmado que o benefício supera os riscos.',
          'Não se trata de uma decisão tomada apenas pela gravidade dos sintomas. A avaliação olha o coração, os outros órgãos, as infecções, o histórico de saúde e o suporte disponível. Por isso, duas pessoas com o mesmo diagnóstico podem ter indicações diferentes. O histórico de outras doenças e o apoio familiar entram na mesma conversa.',
        ],
      },
      {
        id: 'quem-e-avaliado',
        heading: 'Quem é avaliado e o que pesa na decisão',
        paragraphs: [
          'A avaliação começa pela confirmação de que a insuficiência cardíaca é avançada e de que o tratamento foi realmente otimizado. Isso inclui as quatro classes de remédios, quando indicadas, e o controle de sal, peso e fatores que descompensam. Só depois dessa etapa a equipe discute o transplante.',
          'O paciente passa por exames do coração e de outros órgãos. A equipe verifica se há infecções ativas, doenças que contraindicam a cirurgia e condições que possam comprometer a recuperação. Também avalia se a pessoa consegue manter os retornos e seguir o tratamento depois da alta. Exames de imagem e de sangue ajudam a completar esse retrato.',
          'A decisão é individual e considera o conjunto, não um único exame ou um número isolado. A equipe explica benefícios, riscos e o que muda na rotina. O paciente e a família participam da conversa e precisam entender que o transplante não cura a doença de base, mas troca um coração que falha por outro que precisa de cuidado permanente.',
        ],
      },
      {
        id: 'a-lista-unica',
        heading: 'A lista única e os critérios de prioridade',
        paragraphs: [
          'No Brasil, a lista de espera é única e vale tanto para pacientes do SUS quanto para os da rede privada. O sistema é informatizado e auditável, e a ordem não depende de escolha pessoal. Os critérios de compatibilidade e de gravidade alimentam o algoritmo que define quem é chamado.',
          'Entre os critérios de compatibilidade estão o grupo sanguíneo, o peso e a altura. A gravidade também pesa: quem usa circulação extracorpórea ou está com o coração transplantado falhando tem prioridade máxima. Depois vêm os pacientes que usam medicamentos vasoativos por mais de seis meses, os que usam por menos tempo e, por fim, quem espera em casa.',
          'Essa organização explica por que a posição na lista pode mudar. Uma piora clínica, uma internação ou uma nova necessidade de suporte alteram a prioridade. A equipe do programa de transplante acompanha essa evolução e mantém os dados atualizados no sistema.',
        ],
      },
      {
        id: 'tempo-de-espera',
        heading: 'Quanto tempo se espera',
        paragraphs: [
          'O tempo de espera varia conforme a compatibilidade, a prioridade e a oferta de doadores. Em 2023, entre janeiro e 27 de agosto, 27,5% dos pacientes transplantados no Brasil receberam o coração em menos de 30 dias. Outros 29% esperaram de 30 a 90 dias, o que significa que mais da metade (52,3%) foi operada em até três meses.',
          'Esses números mostram que a fila anda, mas não garantem prazo para ninguém. Há pessoas que esperam muito mais, sobretudo quando o grupo sanguíneo, o peso ou a altura tornam a compatibilidade mais difícil. A equipe costuma explicar essa incerteza desde o início para evitar expectativas irreais.',
          'Enquanto espera, o paciente mantém o tratamento, as vacinas e o acompanhamento. Evitar infecções e reconhecer sinais de piora também faz parte, porque uma descompensação pode antecipar a internação e mudar a prioridade. O contato com a equipe deve ser frequente.',
        ],
      },
      {
        id: 'o-que-o-sus-cobre',
        heading: 'O que o SUS cobre',
        paragraphs: [
          'Pelo SUS, o paciente recebe assistência integral: exames preparatórios, a cirurgia, o acompanhamento e os medicamentos usados depois do transplante. O atendimento é gratuito e não depende de plano de saúde. A rede pública responde por cerca de 90% das cirurgias de transplante no país.',
          'O Brasil tem o maior sistema público de transplantes do mundo. No primeiro semestre de 2023, foram realizados 206 transplantes de coração, um aumento de 16% em relação ao mesmo período do ano anterior. Os números são do Sistema Nacional de Transplantes, ligado ao Ministério da Saúde.',
          'A doação depende da autorização da família. Por isso, falar sobre o desejo de doar ainda em vida é importante: a decisão não pode ser tomada por outra pessoa sem essa conversa. Quem recebe um órgão passa a depender de acompanhamento e de medicamentos, e o sistema cobre esse percurso.',
        ],
      },
      {
        id: 'depois-da-cirurgia',
        heading: 'Depois da cirurgia',
        paragraphs: [
          'Depois da cirurgia, o acompanhamento continua por toda a vida. O organismo precisa de tempo para se adaptar ao novo coração, e a equipe ajusta os medicamentos conforme os exames. O retorno às atividades é gradual e depende da recuperação e da orientação recebida. As primeiras semanas exigem mais consultas e exames frequentes.',
          'O uso contínuo dos remédios que controlam a rejeição é parte central do cuidado. Interromper por conta própria é perigoso. Febre, falta de ar, ganho de peso rápido ou qualquer mudança importante devem ser comunicados à equipe, que orienta o que fazer e onde buscar atendimento.',
          'A rotina depois do transplante inclui consultas, exames e cuidado com infecções. O paciente aprende a reconhecer o próprio estado habitual e a pedir ajuda cedo. O transplante devolve uma oportunidade de vida, mas não dispensa o acompanhamento nem o autocuidado.',
        ],
        cta: {
          label: 'Entenda a insuficiência cardíaca na página da doença',
          href: '/doencas/insuficiencia-cardiaca/',
        },
      },
    ],
    diseaseSlugs: ['insuficiencia-cardiaca'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento',
      'insuficiencia-cardiaca-tratamento-e-vida-diaria',
      'insuficiencia-cardiaca-apos-alta',
      'insuficiencia-cardiaca-o-que-pode-ser-confundido',
    ],
    references: [
      {
        label: 'Insuficiência cardíaca com fração de ejeção reduzida: protocolo clínico e diretrizes terapêuticas, resumo',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/PCDTResumidoInsuficinciaCardacafinal.pdf',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Em 2023, espera por transplante de coração foi menor que 30 dias para 27,5% dos pacientes',
        url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2023/agosto/em-2023-no-brasil-espera-por-transplante-de-coracao-foi-menor-que-30-dias-para-27-5-dos-pacientes/',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas de insuficiência cardíaca com fração de ejeção reduzida',
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/i/insuficiencia-cardiaca-com-fracao-de-ejecao-reduzida',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'insuficiencia-cardiaca-apos-alta',
    slug: 'insuficiencia-cardiaca-apos-alta',
    title: 'Insuficiência cardíaca: o que fazer nas primeiras semanas depois da alta',
    excerpt:
      'Peso diário, sal, líquidos, remédios e sinais de alerta: o período em casa exige um plano claro para evitar nova internação.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'alta-nao-e-fim',
        heading: 'A alta não é o fim do tratamento',
        paragraphs: [
          'A alta hospitalar acontece quando a congestão melhora e a respiração fica mais estável, mas não significa que a doença acabou. As primeiras semanas em casa são um período de ajuste, em que o corpo ainda responde aos remédios e o risco de nova descompensação é real.',
          'Antes de sair, o paciente deve entender qual é o plano: quais remédios tomar, em que horário, qual dose de resgate foi combinada e quando será o retorno. Também precisa saber quais sinais exigem contato imediato. Dúvidas anotadas evitam que a família improvise em casa. Perguntar sobre os horários e repetir a explicação em voz alta ajuda a fixar o plano.',
          'A transição entre hospital e casa é parte do tratamento, não o fim dele. Quem sai sem compreender o plano tende a interromper remédios ou a demorar para buscar ajuda. Levar a receita, a lista de exames e o telefone da unidade reduz esse risco.',
        ],
      },
      {
        id: 'peso-todos-os-dias',
        heading: 'Pesar todos os dias, sempre do mesmo jeito',
        paragraphs: [
          'O peso é o principal termômetro em casa. O protocolo brasileiro recomenda pesar todos os dias, em jejum e depois de urinar, sempre na mesma balança e com roupa parecida. O valor deve ser anotado, porque a tendência ao longo dos dias importa mais do que um número isolado. Pesar-se sempre no mesmo momento do dia evita comparações distorcidas.',
          'Um ganho de 2 kg em três dias, ou um inchaço que aumenta, costuma indicar líquido acumulado. Nesse caso, a orientação é contatar a unidade de saúde em vez de aumentar o diurético por conta própria. Aumentar a dose sem combinação pode desidratar, baixar a pressão e prejudicar os rins.',
          'Além do peso, vale observar a falta de ar, a necessidade de mais travesseiros para dormir e o tamanho do inchaço nas pernas. Anotar esses sinais ajuda a equipe a entender a evolução. O diário de peso e sintomas é uma ferramenta simples e útil na consulta.',
        ],
      },
      {
        id: 'sal-e-liquidos',
        heading: 'Sal e líquidos: o que vale para cada pessoa',
        paragraphs: [
          'A alimentação tem papel direto no controle da congestão. O protocolo brasileiro orienta uma dieta com sal normal, em torno de 7 g por dia, sem excesso de ultraprocessados, temperos prontos e embutidos. Restringir muito o sal não traz benefício comprovado e pode piorar o apetite. Temperos naturais, como alho, cebola e ervas, podem substituir o sal sem perder sabor.',
          'A restrição de líquidos não vale para todos. Ela fica reservada a quem tem congestão persistente, classe funcional avançada ou sódio baixo no sangue, na faixa de 1,5 a 2 litros por dia. Quem está estável e urina bem não precisa beber menos sem orientação.',
          'Montar o prato com comida fresca, cozinhar em casa e ler os rótulos ajuda mais do que procurar substitutos milagrosos. O sal escondido em embutidos, molhos e salgadinhos costuma pesar mais do que o saleiro. A família inteira se beneficia quando a cozinha muda junto.',
        ],
      },
      {
        id: 'remedios-sem-ferias',
        heading: 'Remédios sem férias',
        paragraphs: [
          'Os remédios da insuficiência cardíaca funcionam em conjunto e precisam ser tomados nos horários certos. Nas formas com fração de ejeção reduzida, o protocolo reúne quatro classes: inibidor da enzima de conversão ou sacubitril-valsartana, betabloqueador, espironolactona e inibidor do SGLT2. Cada uma tem um papel.',
          'Sentir-se melhor não é motivo para suspender nada. O ajuste de dose é feito com exames de potássio, sódio e função renal, e a suspensão por conta própria pode descompensar o coração. Anti-inflamatórios não esteroides também podem piorar a retenção de líquido e a função dos rins.',
          'Quando aparece um efeito colateral, o caminho é falar com a equipe, não mudar a dose sozinho. O diurético de resgate só deve ser usado na dose escrita no plano de cuidado. Remédios de outras especialidades, fitoterápicos e suplementos precisam ser informados ao médico. Uma lista atualizada de remédios, com doses e horários, deve ficar à vista em casa.',
        ],
      },
      {
        id: 'movimento-e-vacinas',
        heading: 'Movimento, vacinas e rotina',
        paragraphs: [
          'O exercício aeróbico supervisionado melhora a disposição e a capacidade física, mas não pode começar durante uma descompensação. Ele é contraindicado em arritmia não controlada, doença valvar grave e classe funcional IV. A liberação é feita pela equipe, de preferência dentro de um programa de reabilitação cardíaca. Começar devagar e aumentar conforme a tolerância é mais seguro do que buscar desempenho.',
          'As vacinas contra influenza, pneumococo e covid-19 fazem parte do cuidado. Infecções respiratórias estão entre os gatilhos de descompensação, e a vacinação reduz esse risco. Ambientes muito cheios em época de gripe e exposição ao frio também merecem atenção.',
          'Caminhar, manter peso saudável, dormir bem e evitar álcool e cigarro ajudam o coração a trabalhar com menos esforço. A rotina não precisa ser perfeita: pequenos ajustes sustentados ao longo das semanas costumam valer mais do que mudanças radicais que não duram.',
        ],
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Alguns sinais exigem atendimento imediato. Falta de ar intensa em repouso, sensação de afogamento, tosse com catarro rosado e espumoso, dor no peito que não melhora ou desmaio pedem SAMU (192) ou pronto atendimento. Não espere a próxima consulta.',
          'Confusão mental, dificuldade para despertar, lábios ou extremidades arroxeadas e pele fria também são emergência. Palpitações com tontura e inchaço que sobe rápido junto de falta de ar crescente completam a lista. Na dúvida, ligar para o serviço de emergência é mais seguro do que esperar.',
          'Entre uma consulta e outra, manter o plano de cuidado, o diário de peso e os remédios em dia é o que sustenta a estabilidade. A família deve saber onde estão a receita, os exames e o telefone da unidade. O retorno não é uma formalidade: é parte do tratamento. Anotar as dúvidas antes da consulta ajuda a aproveitar melhor o tempo com a equipe.',
        ],
        cta: {
          label: 'Conheça a página da insuficiência cardíaca',
          href: '/doencas/insuficiencia-cardiaca/',
        },
      },
    ],
    diseaseSlugs: ['insuficiencia-cardiaca'],
    topicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedArticleSlugs: [
      'insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento',
      'insuficiencia-cardiaca-tratamento-e-vida-diaria',
      'insuficiencia-cardiaca-transplante-cardiaco',
      'insuficiencia-cardiaca-o-que-pode-ser-confundido',
    ],
    references: [
      {
        label: 'Insuficiência cardíaca com fração de ejeção reduzida: protocolo clínico e diretrizes terapêuticas, resumo',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/PCDTResumidoInsuficinciaCardacafinal.pdf',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas de insuficiência cardíaca com fração de ejeção reduzida',
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/i/insuficiencia-cardiaca-com-fracao-de-ejecao-reduzida',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Insuficiência cardíaca: especialista explica fatores de risco, sintomas e tratamento',
        url: 'https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-norte/hdt-ufnt/insuficiencia-cardiaca-especialista-explica-fatores-de-risco-sintomas-e-tratamento',
        publisher: 'Rede Ebserh e Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
  {
    id: 'insuficiencia-cardiaca-o-que-pode-ser-confundido',
    slug: 'insuficiencia-cardiaca-o-que-pode-ser-confundido',
    title: 'Falta de ar e inchaço: o que pode ser confundido com insuficiência cardíaca',
    excerpt:
      'Asma, DPOC, insuficiência venosa, doença renal e problemas do pericárdio imitam o quadro. Entenda como a avaliação separa cada causa.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    body: [
      {
        id: 'sintomas-compartilhados',
        heading: 'Sintomas que muitas doenças compartilham',
        paragraphs: [
          'Falta de ar, cansaço e inchaço são sintomas comuns a muitas doenças. Sentir o peito apertado ao subir uma escada, por exemplo, pode vir do coração, do pulmão, dos rins ou das pernas. O sintoma isolado não fecha diagnóstico. O mesmo sintoma pode ter causas diferentes em pessoas diferentes.',
          'A diferença está no conjunto e no contexto. Histórico de doença cardíaca, inchaço que piora ao deitar, necessidade de mais travesseiros e veias do pescoço cheias apontam para o coração. Já chiado, tosse crônica e histórico de fumo apontam para o pulmão.',
          'O exame físico e os exames complementares organizam essa investigação. O médico escuta o pulmão, examina o coração, o pescoço e as pernas e pergunta sobre peso, sono e remédios. A avaliação inicial não precisa de tecnologia para começar a separar os cenários. A ordem da investigação segue o que é mais frequente, sem esquecer as causas menos comuns.',
        ],
      },
      {
        id: 'asma-e-dpoc',
        heading: 'Asma e DPOC',
        paragraphs: [
          'Asma e DPOC causam chiado, tosse e falta de ar, e podem ser confundidas com insuficiência cardíaca. Na asma, as crises costumam responder ao broncodilatador habitual. Na DPOC, o histórico de fumo e a tosse crônica são pistas importantes.',
          'A insuficiência cardíaca também pode dar chiado, sobretudo quando há líquido no pulmão. Por isso, o histórico de doença pulmonar não elimina a suspeita cardíaca. Um episódio de falta de ar que surge de repente e não responde ao tratamento de sempre merece avaliação. A resposta ao broncodilatador de sempre é uma pista, mas não fecha o diagnóstico.',
          'O ecocardiograma ajuda a separar os quadros ao mostrar o tamanho das câmaras, as válvulas e a fração de ejeção. A radiografia de tórax e o BNP ou NT-proBNP completam a investigação. O tratamento de cada doença é diferente, e tratar a errada atrasa a melhora.',
        ],
      },
      {
        id: 'inchaco-das-pernas',
        heading: 'Inchaço nas pernas',
        paragraphs: [
          'Inchaço nos tornozelos e nos pés tem muitas causas. A insuficiência venosa das pernas provoca inchaço, mas costuma vir sem falta de ar ao deitar e sem congestão no pulmão. Ficar muito tempo em pé, calor e efeito de alguns remédios também contribuem.',
          'Na insuficiência cardíaca, o inchaço costuma ser acompanhado de falta de ar aos esforços, necessidade de mais travesseiros e ganho de peso em poucos dias. A barriga inchada e as veias do pescoço mais visíveis reforçam a suspeita. O conjunto pesa mais do que o tornozelo isolado. O ganho de peso em poucos dias é um dos sinais que mais ajudam a diferenciar.',
          'A avaliação inclui examinar as pernas, o abdome e o pescoço, além de perguntar sobre a rotina e os remédios. Quando a causa não é clara, o ecocardiograma e os exames de sangue ajudam. Tratar o inchaço como se fosse só questão de circulação periférica pode adiar o diagnóstico.',
        ],
      },
      {
        id: 'rim-e-figado',
        heading: 'Rins e fígado também retêm líquido',
        paragraphs: [
          'Doença renal e cirrose também retêm líquido e causam inchaço. Nos rins, os exames de sangue e de urina mostram alterações próprias, e a urina pode diminuir. Na cirrose, a barriga costuma acumular líquido e há sinais de doença hepática. Os exames de urina e de sangue mostram alterações próprias de cada órgão.',
          'A confusão acontece porque o coração e os rins dependem um do outro. A congestão que não melhora sobrecarrega os rins e pode piorar a função renal. Por isso, a avaliação de uma pessoa com inchaço inclui olhar o coração e os rins ao mesmo tempo. Por isso, quem tem as duas doenças precisa de acompanhamento conjunto.',
          'O BNP ou NT-proBNP ajuda a separar a falta de ar de origem cardíaca de outras causas. Em quem ainda não usa remédio para o coração, valores abaixo de 35 pg/mL (BNP) ou 125 pg/mL (NT-proBNP) tornam a doença improvável, embora possam subir na doença renal e na idade avançada. O resultado é interpretado junto com o quadro clínico.',
        ],
      },
      {
        id: 'pericardio',
        heading: 'Problemas do pericárdio',
        paragraphs: [
          'Doenças do pericárdio, a membrana que envolve o coração, também imitam a insuficiência cardíaca. Um derrame pericárdico volumoso comprime o coração e dificulta o enchimento. A pericardite constritiva deixa a membrana rígida e produz o mesmo efeito ao longo do tempo. O histórico de cirurgia cardíaca ou de inflamação prévia pode levantar a suspeita. O diagnóstico exige essa checagem.',
          'Nesses casos, falta de ar e cansaço aparecem, mas o músculo cardíaco pode estar preservado. O ecocardiograma é o exame que mostra o derrame e ajuda a identificar a constrição. Sem ele, o quadro pode ser atribuído ao coração fraco por engano.',
          'A distinção importa porque o tratamento é diferente. Drenar um derrame ou tratar a inflamação não é o mesmo que ajustar os remédios da insuficiência cardíaca. A avaliação especializada define o caminho.',
        ],
      },
      {
        id: 'como-separa',
        heading: 'Como a avaliação separa as causas',
        paragraphs: [
          'A avaliação começa pela história e pelo exame físico. O médico pergunta sobre falta de ar ao deitar, despertares noturnos, ganho de peso e remédios em uso. Depois examina o pulmão, o coração, as veias do pescoço e as pernas. Perguntar sobre o sono e sobre o número de travesseiros faz parte da entrevista.',
          'O ecocardiograma é o exame central: mostra o tamanho das câmaras, o funcionamento das válvulas e a fração de ejeção. O BNP ou NT-proBNP ajuda em casos de dúvida. Eletrocardiograma, radiografia e exames de sangue completam a investigação.',
          'Nenhum exame substitui o olhar para a pessoa e sua rotina. Um resultado normal em um exame isolado não descarta a doença, e um resultado alterado não confirma sozinho. A combinação de história, exame e exames complementares é o que separa a insuficiência cardíaca das imitações. A conversa com quem convive com o paciente também costuma trazer informações úteis.',
        ],
        cta: {
          label: 'Veja como a insuficiência cardíaca é diagnosticada',
          href: '/doencas/insuficiencia-cardiaca/',
        },
      },
    ],
    diseaseSlugs: ['insuficiencia-cardiaca'],
    topicSlugs: ['doencas-cronicas'],
    relatedArticleSlugs: [
      'insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento',
      'insuficiencia-cardiaca-tratamento-e-vida-diaria',
      'insuficiencia-cardiaca-transplante-cardiaco',
      'insuficiencia-cardiaca-apos-alta',
    ],
    references: [
      {
        label: 'Insuficiência cardíaca com fração de ejeção reduzida: protocolo clínico e diretrizes terapêuticas, resumo',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/PCDTResumidoInsuficinciaCardacafinal.pdf',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Insuficiência cardíaca: especialista explica fatores de risco, sintomas e tratamento',
        url: 'https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-norte/hdt-ufnt/insuficiencia-cardiaca-especialista-explica-fatores-de-risco-sintomas-e-tratamento',
        publisher: 'Rede Ebserh e Ministério da Saúde (Brasil)',
      },
      {
        label: 'Protocolo Clínico e Diretrizes Terapêuticas de insuficiência cardíaca com fração de ejeção reduzida',
        url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/i/insuficiencia-cardiaca-com-fracao-de-ejecao-reduzida',
        publisher: 'Ministério da Saúde (Brasil)',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-21',
    updatedAt: '2026-10-21',
    isPlaceholder: true,
  },
];
