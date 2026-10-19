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
          'Na prática, ofereça preparações leves em porções pequenas e mais vezes ao dia, sem forçar. Em bebês, a amamentação deve continuar durante todo o episódio. Se a criança recusar tudo por muitas horas, procure orientação. Veja mais em [o que comer durante a gastroenterite](/artigos/gastroenterite-alimentacao/).',
        ],
      },
      {
        id: 'antibiotico-ajuda',
        heading: 'Antibiótico ajuda na diarreia?',
        paragraphs: [
          'Na maioria dos casos, não. A gastroenterite comum é viral ou se resolve sozinha, e o antibiótico só se justifica quando o profissional identifica disenteria, com sangue ou muco nas fezes, ou cólera, sempre com acompanhamento médico.',
          'Usar antibiótico contra uma infecção viral não encurta a diarreia e ainda elimina bactérias que fazem parte da flora intestinal, o que pode agravar o quadro. O uso sem indicação também favorece a resistência dos microrganismos aos medicamentos, um problema que a Organização Mundial da Saúde trata como uma das principais ameaças à saúde pública.',
          'Quando há suspeita de causa bacteriana, a coleta de fezes é feita antes do antibiótico, para não prejudicar o resultado do exame. Quem começa o remédio por conta própria pode tornar essa investigação mais difícil e atrasar o tratamento correto.',
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
          'O mesmo vale para remédios para parar a diarreia comprados por conta própria. Nada substitui a avaliação de quem consegue distinguir uma diarreia simples de um quadro que exige tratamento específico. Quem tem dúvida sobre um remédio deve perguntar a um profissional antes de tomar.',
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
          'Em crianças, o Ministério da Saúde recomenda o zinco, uma vez ao dia por 10 a 14 dias, o que encurta o episódio e reduz o risco de complicações. O suplemento é indicado pelo profissional e não substitui o soro, e a alimentação segue em paralelo.',
        ],
      },
      {
        id: 'quando-a-comida-nao-desce',
        heading: 'Quando a pessoa não consegue comer ou beber',
        paragraphs: [
          'Se a pessoa recusa alimentos, não consegue reter líquidos ou apresenta sinais de desidratação, o cuidado em casa não é suficiente. Nesses casos, procure a unidade de saúde mais próxima; quanto antes a avaliação, menor a chance de precisar de internação.',
          'Vômitos repetidos impedem que a reposição pela boca acompanhe a perda, e a desidratação avança mesmo que a pessoa esteja tentando beber. Sangue nas fezes e diminuição da urina também mudam a conduta. Nenhum desses sinais se resolve com ajuste de dieta.',
          'Nessa situação, adiar o atendimento só aumenta o risco. A reidratação na unidade, com avaliação do grau de desidratação, é o passo seguinte, e o profissional decide a via e a velocidade da reposição conforme o exame.',
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
          'O que separa os dois cenários não é a agressividade do agente, e sim a velocidade com que o corpo repõe o que perde. Começar a oferecer líquidos cedo é o que mais aproxima um caso do desfecho leve.',
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
          'Se houver mais de um sinal ao mesmo tempo, a urgência aumenta. Em bebês e pessoas idosas, procure atendimento ao primeiro sinal, sem aguardar o próximo, e anote quando cada um apareceu para agilizar a consulta.',
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
          ],
          bullets: [
            'Dor de cabeça que explode e atinge a intensidade máxima em menos de um minuto',
            'Fraqueza ou paralisia de um lado do corpo, boca torta, fala embolada ou perda de visão súbita',
            'Febre com rigidez no pescoço e dor de cabeça intensa',
            'Confusão mental, convulsão, dificuldade para despertar ou manchas vermelhas e roxas na pele',
            'Dor de cabeça que surge durante esforço físico, tosse forte ou relação sexual',
            'Uma aura diferente do habitual, ou a primeira aura depois dos 40 anos',
            'Dor de cabeça persistente e inédita depois dos 60 anos',
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
            'Quem convive com a enxaqueca tem um padrão, e o que deve chamar a atenção é a quebra desse padrão. Uma aura que aparece pela primeira vez depois dos 40 anos, uma aura feita só de perda de campo visual, ou uma aura que se estende muito além de uma hora pede investigação para separar a migrânea do ataque isquêmico transitório. Uma dor de cabeça nova e persistente em pessoa com mais de 60 anos deve fazer pensar em arterite de células gigantes, inflamação de artérias da cabeça que pode causar cegueira e se anuncia muitas vezes com dor ao mastigar e couro cabeludo dolorido.',
            'A pressão alta também entra nessa conta. Seus sintomas costumam aparecer apenas quando a pressão sobe muito, e incluem dor de cabeça, tontura e visão embaçada. Por isso, medir a pressão antes de concluir que é a crise de sempre é um bom hábito: o Ministério da Saúde recomenda a aferição pelo menos uma vez por ano para maiores de 20 anos, e ela é feita na unidade básica de saúde (UBS). Leia mais em [como medir a pressão arterial em casa](/artigos/hipertensao-como-medir-a-pressao-em-casa/).',
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
      ],
      diseaseSlugs: ['enxaqueca'],
      topicSlugs: ['doencas-cronicas'],
      relatedArticleSlugs: ['enxaqueca-tratamento-e-cuidados'],
      references: [
        {
          label: 'Cefaleias, folha de dados sobre distúrbios de dor de cabeça',
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
      updatedAt: '2026-10-19',
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
            'Quando o analgésico comum não dá conta, o médico dispõe de outras classes: antieméticos para a náusea e o vômito, medicamentos específicos para a enxaqueca, como os triptanos, e, em alguns casos, associações. A escolha depende do seu padrão de crises, de outras doenças e dos remédios que você já usa. Por isso o tratamento da enxaqueca é individualizado, e a bula alheia raramente funciona.',
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
            'Existe uma segunda frente de tratamento, feita de medicamento tomado todos os dias, mesmo sem dor, para reduzir frequência, intensidade e duração das crises. Ela entra em cena quando a enxaqueca ocupa muitos dias do mês ou atrapalha demais a vida, e seu efeito é gradual: a resposta é avaliada pelo médico ao longo das semanas, e não na primeira caixa.',
            'A meta do tratamento é declarada pelo paciente, com base no que ele quer recuperar, e por isso vale levar números para a consulta: quantos dias com dor no mês, quantos dias de trabalho ou estudo perdidos, quantos comprimidos por semana. Aproveite para falar de sono, álcool e também de humor, já que ansiedade e depressão são mais frequentes em quem tem enxaqueca e pioram o quadro quando ficam sem cuidado.',
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
          id: 'gatilhos-na-rotina',
          heading: 'Cuidados que reduzem a frequência das crises',
          paragraphs: [
            'Medidas simples aparecem nas recomendações da OMS e funcionam como base do tratamento, junto com os medicamentos. Elas só valem se forem sustentáveis, e o diário de cefaleia é o instrumento que mostra o que muda alguma coisa para você:',
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
          label: 'Cefaleias, folha de dados sobre distúrbios de dor de cabeça',
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
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
  {
      id: 'otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento',
      slug: 'otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento',
      metaTitle: 'Otite média aguda: quando procurar atendimento',
      title: 'Otite média aguda: sinais de alerta e quando procurar atendimento',
      excerpt:
        'Dor de ouvido e febre costumam ceder em poucos dias, e a otite nem sempre precisa de antibiótico. Saiba o que observar em casa, a partir de quando a espera deixa de ser segura e quais sinais levam direto ao pronto atendimento.',
      category: 'Doenças infecciosas',
      categorySlug: 'doencas-infecciosas',
      body: [
        {
          id: 'curso-esperado',
          heading: 'O que é esperado nos primeiros dias',
          paragraphs: [
            'Na otite média aguda, a dor de ouvido aparece de repente, muitas vezes à noite, acompanhada de febre e irritabilidade. Nos primeiros dois ou três dias, o quadro tende a melhorar: a dor cede, a febre perde força e a criança volta a dormir.',
            'Essa melhora espontânea não é sorte, é a regra. A maioria das pessoas com otite média aguda melhora sem antibiótico, e o tratamento inicial é contra a dor, com analgésico ajustado à idade e ao peso.',
          ],
        },
        {
          id: 'observar-em-casa',
          heading: 'O que observar em casa',
          paragraphs: [
            'Enquanto espera a melhora, a observação conta tanto quanto o remédio. Anote a evolução da dor, da febre e do comportamento, e procure avaliação se notar:',
          ],
          bullets: [
            'Dor que segue igual ou pior depois de 48 a 72 horas',
            'Febre que não cede a partir do terceiro dia',
            'Líquido ou pus escorrendo pelo ouvido',
            'Criança que não aceita líquidos ou mamada',
            'Sons abafados e surdez que seguem depois de a dor passar',
          ],
        },
        {
          id: 'quando-a-ubs',
          heading: 'Quando ir à unidade de saúde',
          paragraphs: [
            'A regra das 48 a 72 horas é o marco que separa a observação segura da consulta necessária. Se a criança piora ou não melhora dentro desse prazo, a unidade de saúde avalia se chegou a vez do antibiótico, que em geral é a amoxicilina.',
            'Quanto mais nova a criança, mais cedo a avaliação se justifica: bebês pequenos, sobretudo os que ainda não completaram seis meses, merecem ser vistos mais rápido. Sinais de complicação não esperam prazo nenhum.',
          ],
        },
        {
          id: 'emergencia',
          heading: 'Quando é emergência',
          paragraphs: [
            'Vá a um pronto atendimento sem esperar, e leve a criança para avaliação imediata, se junto com a dor de ouvido aparecer:',
          ],
          bullets: [
            'Inchaço, vermelhidão e dor no osso atrás do ouvido',
            'Pescoço rigido, confusão, sonolência excessiva ou vômitos que não param',
            'Febre alta que não cede em bebê muito pequeno',
            'Rosto torto ou perda de força em um lado da face',
            'Choro sem lágrima, boca seca e pouca urina, sinais de desidratação',
          ],
          cta: {
            label: 'Veja a página sobre a otite média aguda',
            href: '/doencas/otite-media-aguda/',
          },
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
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
  {
      id: 'otite-media-aguda-tratamento-e-cuidados',
      slug: 'otite-media-aguda-tratamento-e-cuidados',
      metaTitle: 'Otite média aguda: tratamento e cuidados',
      title: 'Otite média aguda: tratamento e cuidados do dia a dia',
      excerpt:
        'Na otite, a dor vem de trás do tímpano. Entenda como aliviar a dor, quando o antibiótico vale a pena, o que não funciona e como acompanhar a audição depois que a crise passa.',
      category: 'Doenças infecciosas',
      categorySlug: 'doencas-infecciosas',
      body: [
        {
          id: 'dor-antes-de-tudo',
          heading: 'Tratar a dor é o primeiro passo',
          paragraphs: [
            'O incômodo da otite média aguda nasce do líquido acumulado no ouvido médio, pressionando o tímpano por dentro. Por isso, a primeira medida do tratamento é a dor, não a infecção: analgésicos dados pela boca, como paracetamol ou ibuprofeno, conforme a orientação da equipe de saúde, que ajusta a dose à idade e ao peso.',
            'Entre as opções sem antibiótico, o ibuprofeno tem evidência de alívio da dor na otite. Nada de duplicar remédios por conta própria: dois analgésicos com o mesmo princípio ativo somam risco sem somar benefício.',
          ],
        },
        {
          id: 'antibiotico-quando',
          heading: 'Quando o antibiótico entra',
          paragraphs: [
            'O critério prático é o tempo: piora ou falta de melhora entre 48 e 72 horas do início dos sintomas pedem antibiótico, assim como os casos de maior gravidade, como bebê muito pequeno ou pus escorrendo pelo ouvido.',
            'Quando indicado, a amoxicilina segue como primeira escolha nas diretrizes brasileiras. O tratamento dura o tempo receitado e deve ser completo, e o retorno de avaliação faz parte do cuidado. Se a criança melhora antes do fim do remédio, não é hora de interromper sem orientação.',
          ],
        },
        {
          id: 'o-que-nao-ajuda',
          heading: 'O que não ajuda e pode atrapalhar',
          paragraphs: [
            'Anti-histamínicos e descongestionantes não têm lugar no tratamento da otite: revisões sistemáticas mostram benefício pequeno e risco real de efeitos colaterais, e os anti-histamínicos ainda prolongam o líquido no ouvido médio. Corticoide em associação com antibiótico também não melhora o resultado.',
            'Gota no ouvido sem prescrição é outro erro comum: a dor vem de trás do tímpano, onde o líquido medicado não chega, e algumas formulações fazem mal quando o tímpano está perfurado. Receita caseira, algodão molhado e sopro no ouvido ficam de fora.',
          ],
        },
        {
          id: 'liquido-que-permanece',
          heading: 'O líquido que sobra e a audição',
          paragraphs: [
            'Passada a crise, o ouvido médio pode guardar líquido sem infecção ativa por semanas a meses, a chamada otite média secretora. A criança não sente dor, mas passa a ouvir abafado, como se o ouvido estivesse entupido.',
            'A maior parte desses casos se resolve sozinha, e a conduta é observar e reavaliar. Quando o líquido persiste, a audição fica prejudicada por tempo demais ou as otites se repetem, vale fazer teste de audição e conversar com o otorrinolaringologista: em situações selecionadas, a colocação de um tubo de ventilação no tímpano ajuda a drenar o ouvido médio.',
          ],
          cta: {
            label: 'Veja a página sobre a otite média aguda',
            href: '/doencas/otite-media-aguda/',
          },
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
      updatedAt: '2026-10-19',
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
            'Na pneumonia, o termômetro diz menos do que parece. Um adulto pode estar febril e respirando bem, enquanto outro, com temperatura normal, tem o oxigênio caindo sem aviso. Os três sinais que realmente importam são a respiração, o estado de alerta e a saturação de oxigênio, medida em segundos com o oxímetro de pulso.',
            'A febre alta que não cede, a dor no peito que aumenta e a falta de ar que aparece até em repouso são a combinação que encurta o caminho até o atendimento. Na dúvida entre esperar e ir, a pneumonia recomenda ir.',
          ],
        },
        {
          id: 'sinais-em-adultos',
          heading: 'Sinais de alerta em adultos e idosos',
          paragraphs: [
            'Para adultos, os critérios objetivos mais usados pelos profissionais separam o tratamento caseiro da internação. Vá atrás de atendimento, sem esperar o dia seguinte, se houver:',
          ],
          bullets: [
            'Respiração acima de 30 incursões por minuto em repouso',
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
            'Nos menores de cinco anos, a Organização Mundial da Saúde ensina a avaliar a pneumonia sem aparelho: contar a respiração e olhar o tórax. A respiração rápida e a parte de baixo do peito puxando para dentro ao inspirar já são pneumonia.',
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
            'Em pessoas idosas, a pneumonia pode se esconder: nenhuma tosse, febre baixa, e de repente a pessoa fica confusa, desorientada, caída, sem fome. Uma mudança súbita de comportamento em quem mora sozinho ou é acompanhado em casa justifica avaliação no mesmo dia.',
            'O mesmo vale para quem tem [DPOC](/doencas/dpoc/) ou [asma](/doencas/asma/): uma piora que não responde à medicação de costume pode ser pneumonia por cima da doença de base, e não simples crise.',
          ],
        },
        {
          id: 'onde-procurar',
          heading: 'Onde procurar atendimento, e o que não esperar',
          paragraphs: [
            'A UBS resolve a maior parte das pneumonias leves: ouve o pulmão, mede a saturação, inicia o antibiótico e marca o retorno. A UPA e o hospital entram quando falta oxigênio, há confusão, ou a pessoa não consegue beber e tomar a medicação. Falta de ar intensa, lábios azulados ou sonolência anormal são motivo para chamar o SAMU (192).',
            'Uma última linha: a pneumonia típica melhora em dias de tratamento. A tosse que dura três semanas ou mais, com febre de fim de tarde, suor noturno e emagrecimento, é o retrato da [tuberculose](/doencas/tuberculose/), doença de investigação e tratamento diferentes, oferecidos de forma integral pelo SUS.',
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
      updatedAt: '2026-10-19',
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
            'Quando a avaliação sugere pneumonia bacteriana, o antibiótico é iniciado o quanto antes. Estudos de organização de serviço mostram que tratar cedo reduz complicações, tempo de internação e mortalidade, e é por isso que o médico não espera o resultado de cultura para decidir.',
            'Nas crianças, a amoxicilina oral é a primeira escolha recomendada pela OMS, e a maioria dos casos leves do adulto também se trata com antibiótico por via oral, em casa, com retorno marcado. Quem decide se o local do tratamento é o domicílio, o hospital ou a UTI é a gravidade medida no atendimento.',
          ],
        },
        {
          id: 'no-hospital',
          heading: 'Quando é preciso internar',
          paragraphs: [
            'A queda do oxigênio no sangue é a principal porta da internação: muitos médicos tratam a hipoxemia como indicação absoluta de internamento, e a saturação abaixo de 90% no ar ambiente pede oxigênio e observação hospitalar.',
            'Os escores de gravidade, como o CURB-65, ajudam o médico a escolher o local do tratamento, pesando idade, confusão, frequência respiratória alta, pressão baixa e ureia elevada. Choque séptico e insuficiência respiratória que exige ventilação mecânica levam à UTI. Nos demais casos, o antibiótico venoso, a hidratação e o oxigênio fazem o resto do serviço.',
          ],
        },
        {
          id: 'em-casa',
          heading: 'Os cuidados durante o tratamento em casa',
          paragraphs: [
            'O tratamento ambulatorial só funciona com colaboração. O essencial:',
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
            'A melhora começa antes do que a cura: a febre cede nos primeiros dias e o fôlego volta aos poucos, mas a tosse e o cansaço podem acompanhar por várias semanas. Até a radiografia demora mais que o corpo: os sinais no exame costumam atrasar a resolução clínica em várias semanas.',
            'Sinais de alerta na convalescença pedem retorno imediato: febre que volta, tosse com sangue, falta de ar nova ou piora do estado geral. E a tosse que se arrasta por três semanas ou mais, com suor noturno e emagrecimento, deve ser investigada para tuberculose, não tratada como resto de pneumonia.',
          ],
        },
        {
          id: 'vacinas',
          heading: 'As vacinas que o SUS oferece',
          paragraphs: [
            'A forma mais barata e eficaz de evitar a pneumonia é a vacina contra as bactérias e vírus que a causam com mais frequência. O Calendário Nacional de Vacinação reúne as principais, com acesso gratuito pelo SUS.',
          ],
          bullets: [
            'Pneumocócica conjugada para crianças: doses aos 2 e 4 meses, reforço aos 12 meses',
            'Pentavalente (que inclui o Hib) aos 2, 4 e 6 meses',
            'Influenza para crianças a partir de 6 meses e para idosos, uma dose a cada temporada',
            'Pneumocócica para pessoas idosas, indicada no calendário de vacinação da pessoa idosa',
            'Sarampo e coqueluche, doenças que preparam o terreno para a pneumonia',
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
      updatedAt: '2026-10-19',
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
            'Na insuficiência cardíaca, o músculo do coração já bombeia com pouca eficiência, e qualquer desequilíbrio aumenta a pressão dentro das veias. O líquido sai dos vasos e se instala onde a gravidade e o próprio pulmão permitem: tornozelos, barriga e, por fim, os espaços entre os alvéolos. É essa sequência que transforma uma semana de inchaço discreto em uma falta de ar que acorda a pessoa à noite.',
            'Por isso a maioria das internações evitáveis poderia ter sido cortada antes. Os sinais de alarme aparecem dias antes da crise, e a pessoa que os conhece pode avisar a equipe de saúde em vez de esperar a urgência. Estudos usados pelas diretrizes brasileiras tratam a variação de peso em poucos dias como um dos melhores marcadores de acúmulo de líquido.',
          ],
        },
        {
          id: 'sinais-para-vigiar-em-casa',
          heading: 'Sinais para vigiar em casa',
          paragraphs: [
            'Nem todo desconforto exige um pronto atendimento no mesmo minuto. Estes sinais pedem contato com a equipe que acompanha o coração em até 24 horas:',
          ],
          bullets: [
            'Ganho de peso em poucos dias, sem mudança de alimentação',
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
            'Há sinais que não admitem espera. Ligue para o SAMU (192) ou vá imediatamente a um pronto atendimento se aparecer:',
          ],
          bullets: [
            'Falta de ar intensa em repouso ou sensação de afogamento',
            'Dor no peito que não alivia',
            'Desmaio, confusão mental ou sonolência anormal',
            'Lábios, mãos ou pés arroxeados',
            'Palpitações com tontura ou sensação de desmaio iminente',
            'Falta de ar crescente junto de inchaço que sobe rápido',
          ],
        },
        {
          id: 'enquanto-o-atendimento-chega',
          heading: 'Enquanto o atendimento chega',
          paragraphs: [
            'Sentar a pessoa ereta, com as pernas para baixo, e afrouxar roupas apertadas costuma aliviar a falta de ar. Abra a janela e mantenha a calma: tentar caminhar ou deitar agrava a sensação de afogamento. Não leve a pessoa andando até o hospital se ela estiver muito curta de ar, e não a coloque para dirigir.',
            'Aumentar a dose do diurético por conta própria é uma decisão que só cabe ao médico que conhece o caso. Alguns protocolos preveem dose extra orientada por telefone, mas sem esse plano escrito combinado com a equipe, o risco de desidratar e prejudicar os rins é real. Se houver medicação receitada de resgate, use exatamente como foi orientado.',
          ],
        },
        {
          id: 'onde-ser-atendido',
          heading: 'Onde buscar atendimento',
          paragraphs: [
            'Para sinais que preocupam mas não são emergenciais, o caminho é a unidade básica de saúde (UBS) de referência ou, fora do horário, a unidade de pronto atendimento (UPA). Leve a lista de remédios com as doses, a caderneta de peso diário e os exames mais recentes, inclusive a última dosagem de potássio e de função renal, porque esses números guiam o ajuste.',
            'Quem tem doença avançada, internação recente, fração de ejeção muito baixa ou suspeita de arritmia costuma precisar de serviço com cardiologista e leito de observação. O Sistema Único de Saúde organiza esse percurso por regulação de vagas, então o encaminhamento pode não ser para o hospital mais próximo. Se a pessoa já é acompanhada por um serviço de referência, ligue para ele antes: muitas equipes têm canal para orientar a descompensação e evitar a ida ao pronto atendimento.',
          ],
        },
      ],
      diseaseSlugs: ['insuficiencia-cardiaca'],
      topicSlugs: ['doencas-cronicas'],
      relatedArticleSlugs: ['insuficiencia-cardiaca-tratamento-e-vida-diaria'],
      references: [
        {
          label: 'Insuficiência cardíaca: especialista explica fatores de risco, sintomas e tratamento',
          url: 'https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-norte/hdt-ufnt/insuficiencia-cardiaca-especialista-explica-fatores-de-risco-sintomas-e-tratamento',
          publisher: 'Rede Ebserh e Ministério da Saúde (Brasil)',
        },
        {
          label: 'Diretriz Brasileira de Insuficiência Cardíaca Crônica',
          url: 'https://www.scielo.br/j/abc/a/XrJZJkL945HZqpd3dZgdPrf/?lang=pt',
          publisher: 'Sociedade Brasileira de Cardiologia',
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
      updatedAt: '2026-10-19',
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
            'O protocolo nacional para a insuficiência cardíaca com fração de ejeção reduzida, aprovado pelo Ministério da Saúde em 2024, reúne quatro classes de medicamentos. São eles: o inibidor da enzima de conversão ou a associação sacubitril-valsartana; o betabloqueador; o antagonista da aldosterona, que no Brasil é a espironolactona; e o inibidor do SGLT2, como a dapagliflozina, remédio criado para o diabetes e que se mostrou útil no coração.',
            'As diretrizes recomendam começar as quatro classes o mais cedo possível e subir as doses em consultas próximas, em vez de esgotar uma antes de iniciar a outra. Cada uma atua em um mecanismo diferente do desgaste cardíaco, e o benefício cresce quando elas trabalham juntas. Por isso, sentir-se melhor não é motivo para suspender nenhuma delas por conta própria.',
          ],
        },
        {
          id: 'diureticos-e-alivio-de-sintomas',
          heading: 'Diuréticos aliviam, mas não bastam',
          paragraphs: [
            'A furosemida e outros diuréticos são o remédio que traz alívio rápido: retiram o líquido que congestionou pulmão e pernas. Eles convivem com os quatro pilares, não os substituem. Quem usa só diurético respira melhor por alguns dias e segue exposto às internações que as outras classes ajudam a evitar. A dose do diurético costuma mudar conforme o peso e o inchaço, e é comum a equipe orientar ajuste dentro de uma faixa combinada.',
          ],
        },
        {
          id: 'balanca-como-instrumento',
          heading: 'A balança como instrumento de monitoramento',
          paragraphs: [
            'Pesar-se todo dia é a forma mais barata de perceber a piora antes da crise. As diretrizes brasileiras usam a variação de peso em poucos dias, somada ao inchaço periférico, como marcador confiável de acúmulo de líquido. O pedido costuma ser simples, e a regularidade vale mais do que a precisão da balança.',
          ],
          bullets: [
            'Pese-se uma vez por dia, sempre no mesmo horário, logo ao acordar',
            'Vá ao banheiro antes e use a mesma roupa, ou nenhuma',
            'Anote o número em papel ou aplicativo, sem esquecer o dia',
            'Observe tornozelos e abdome junto do peso',
            'Avise a equipe ao notar a mudança que ela definiu como limite',
            'Leve a caderneta às consultas, inclusive quando estiver tudo bem',
          ],
        },
        {
          id: 'sal-e-liquidos-na-pratica',
          heading: 'Sal e líquidos na prática',
          paragraphs: [
            'Reduzir sal continua fazendo sentido, mas o extremo de sal zero não é a meta. Dietas muito restritivas em sódio foram associadas a piores resultados nos estudos que sustentam o protocolo brasileiro. O ganho real está em cortar as fontes invisíveis: temperos prontos, macarrão instantâneo, embutidos, congelados industrializados, sopas de pacote e pão de forma comprado fora de casa.',
            'Temperar com alho, cebola, limão e ervas frescas substitui bem o saleiro. Já a restrição de água não vale para todos: ela é indicada apenas em situações como congestão persistente, sintomas importantes ou sódio baixo no sangue, com volume definido pela equipe. Beber água demais pode piorar a congestão; beber de menos, por ordem médica e sem necessidade, pode desidratar e sobrecarregar os rins.',
          ],
        },
        {
          id: 'movimento-e-reabilitacao',
          heading: 'Movimento e reabilitação cardíaca',
          paragraphs: [
            'Repouso absoluto ficou para trás. Em pacientes estáveis, o exercício aeróbico supervisionado melhora disposição, capacidade física e adesão ao tratamento, dentro de programas de reabilitação cardíaca que combinam avaliação médica, prescrição de atividade, apoio psicossocial e orientação à família.',
            'Há oferta pública nesse caminho, incluindo equipamentos vinculados à atenção básica, como as Academias da Saúde e os Núcleos de Apoio à Saúde da Família, além de serviços de reabilitação em hospitais referenciados. A disponibilidade varia bastante entre municípios, e nem toda cidade tem programa pronto. Antes de começar, peça avaliação médica: arritmia não controlada, doença de válvula grave e descompensação atual são contraindicações temporárias ou definitivas para o exercício.',
          ],
          cta: {
            label: 'Veja a página sobre insuficiência cardíaca',
            href: '/doencas/insuficiencia-cardiaca/',
          },
        },
        {
          id: 'acompanhamento-e-sus',
          heading: 'Acompanhamento no SUS',
          paragraphs: [
            'A atenção primária é o eixo do cuidado: ajustar remédios, pedir exames de função renal e potássio, encaminhar quando necessário e sustentar o vínculo entre as consultas. A avaliação especializada fica reservada a quem teve internação recente, permanece com sintomas intensos ou precisa avaliar dispositivo cardíaco, cirurgia ou transplante.',
            'O SUS financia o percurso que vai do exame à cirurgia: consultas, ecocardiograma, os medicamentos do protocolo, implante de dispositivos e transplante cardíaco, coordenado pelo Sistema Nacional de Transplantes. Na prática, o acesso depende de regulação, fila e da rede disponível na região, e o país concentra os serviços de alta complexidade em poucas capitais. Quem mora longe se beneficia de um plano de acompanhamento firmado com a UBS, para não perder as revisões.',
          ],
          cta: {
            label: 'Leia também: como medir a pressão arterial em casa',
            href: '/artigos/hipertensao-como-medir-a-pressao-em-casa/',
          },
        },
      ],
      diseaseSlugs: ['insuficiencia-cardiaca'],
      topicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedArticleSlugs: ['insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento'],
      references: [
        {
          label: 'Protocolo Clínico e Diretrizes Terapêuticas de insuficiência cardíaca com fração de ejeção reduzida',
          url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/i/insuficiencia-cardiaca-com-fracao-de-ejecao-reduzida',
          publisher: 'Ministério da Saúde (Brasil)',
        },
        {
          label: 'Relatório de Recomendação da CONITEC para o protocolo de insuficiência cardíaca',
          url: 'https://www.gov.br/conitec/pt-br/midias/relatorios/2024/relatorio-de-recomendacao-no-808-pcdt-insuficiencia-cardiaca-com-fracao-de-ejecao-reduzida',
          publisher: 'CONITEC',
        },
        {
          label: 'Diretriz Brasileira de Insuficiência Cardíaca Crônica',
          url: 'https://www.scielo.br/j/abc/a/XrJZJkL945HZqpd3dZgdPrf/?lang=pt',
          publisher: 'Sociedade Brasileira de Cardiologia',
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
      id: 'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
      slug: 'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
      metaTitle: 'Esteatose hepática: sinais de alerta',
      title: 'Esteatose hepática: sintomas e quando procurar atendimento',
      excerpt:
        'A gordura no fígado costuma ser silenciosa e aparecer em exames de rotina. Saiba queixas que merecem investigação e quais sinais pedem atendimento imediato.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      body: [
        {
          id: 'silenciosa-no-inicio',
          heading: 'Por que quase não há sintomas',
          paragraphs: [
            'A esteatose hepática, a gordura no fígado, raramente dá sinal no começo. O fígado é um órgão silencioso: mesmo acumulando gordura nas suas células, continua trabalhando e não dói. É por isso que a maioria dos diagnósticos vem de um exame pedido por outro motivo.',
            'Quando os sintomas aparecem, são vagos: desconforto ou peso na parte superior direita da barriga, cansaço ao longo do dia e diminuição do apetite. Nenhuma dessas queixas é exclusiva da esteatose, e por isso só a investigação com exame de sangue e de imagem confirma o quadro.',
          ],
        },
        {
          id: 'como-e-descoberta',
          heading: 'Como a esteatose costuma ser descoberta',
          paragraphs: [
            'Na rotina, o primeiro indício vem da ultrassonografia de abdome, exame de imagem que mostra o fígado mais claro e, em muitos casos, aumentado de tamanho.',
            'No exame de sangue, as transaminases podem vir levemente elevadas, o que levanta a suspeita e leva a avaliar o fígado com atenção. Quem tem fatores de risco, como [diabetes](/doencas/diabetes/), sobrepeso ou colesterol alto, deve pedir a avaliação mesmo sem sentir nada.',
          ],
        },
        {
          id: 'sinais-de-piora',
          heading: 'Sinais de que o fígado piorou',
          paragraphs: [
            'A gordura isolada costuma ser estável. O que muda o cenário é a inflamação, que ao longo dos anos pode evoluir para cicatriz, a fibrose. Procure reavaliação se aparecerem:',
          ],
          bullets: [
            'Cansaço que aumenta e não melhora com descanso',
            'Dor persistente no lado superior direito do abdome',
            'Sensação de estômago cheio ou estufado quase todo dia',
            'Pele e olhos com tom amarelado',
            'Perda de peso sem esforço e sem explicação',
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
            'Vá a um pronto atendimento ou ligue para o SAMU (192) se, em alguém com doença no fígado, surgirem sinais de complicação grave:',
          ],
          bullets: [
            'Confusão mental, sonolência ou desorientação',
            'Vômito com sangue ou fezes muito escuras',
            'Barriga muito inchada e endurecida de repente',
            'Febre alta com dor intensa no abdome',
            'Pele e olhos amarelados que aparecem rápido',
          ],
        },
        {
          id: 'onde-fazer-o-acompanhamento',
          heading: 'Onde fazer o acompanhamento',
          paragraphs: [
            'O primeiro passo é procurar a unidade básica de saúde (UBS) de referência. De lá, quem tem esteatose com fatores de risco pode ser encaminhado a um clínico geral, a um gastroenterologista ou a um hepatologista, o médico que cuida especificamente do fígado.',
            'O acompanhamento inclui repetir exames de sangue, avaliar o peso e medir a rigidez do fígado com a elastografia, quando indicada. Manter as consultas em dia é o que permite detectar uma progressão cedo, quando ainda dá para reverter.',
          ],
        },
      ],
      diseaseSlugs: ['esteatose-hepatica'],
      topicSlugs: ['doencas-cronicas'],
      relatedArticleSlugs: ['esteatose-hepatica-como-reverter-com-habitos'],
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
      publishedAt: '2026-10-19',
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
  {
      id: 'esteatose-hepatica-como-reverter-com-habitos',
      slug: 'esteatose-hepatica-como-reverter-com-habitos',
      title: 'Esteatose hepática: como reverter com hábitos',
      excerpt:
        'Perder peso e mexer-se mudam a história da gordura no fígado. Entenda quanto emagrecer faz diferença e como o SUS organiza o acompanhamento desse cuidado.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      body: [
        {
          id: 'o-que-reverte',
          heading: 'O que faz a gordura regredir',
          paragraphs: [
            'A esteatose hepática responde à mudança de hábitos mais do que a qualquer medicamento. Os dois pilares são perder peso e aumentar a atividade física, e o efeito aparece de forma proporcional: quanto maior e mais mantida a perda de peso, maior a redução da gordura no fígado.',
            'A equipe de saúde costuma usar metas simples. Perder 5% do peso já reduz a gordura acumulada; chegar a 10% ou mais se associa à melhora da inflamação e, em muitos casos, da fibrose. São números que servem de referência, e o ritmo certo cabe a cada pessoa, com orientação profissional.',
          ],
        },
        {
          id: 'alimentacao',
          heading: 'Alimentação que ajuda o fígado',
          paragraphs: [
            'Não há uma dieta única, mas o padrão que mais protege o fígado é o que também protege o coração: menos ultraprocessados, menos açúcar e menos bebida alcoólica, mais comida de verdade.',
          ],
          bullets: [
            'Reduzir refrigerantes, doces e farinhas refinadas, que viram gordura no fígado',
            'Diminir frituras e alimentos ultraprocessados, ricos em gordura e sal',
            'Aumentar verduras, legumes, frutas e feijão em cada refeição',
            'Trocar parte dos cereais refinados por integrais',
            'Cortar ou reduzir muito o álcool, que agride diretamente o fígado',
          ],
        },
        {
          id: 'movimento',
          heading: 'Atividade física mesmo sem emagrecer',
          paragraphs: [
            'Mexer-se ajuda o fígado por outro caminho: o exercício melhora a forma como o corpo usa a insulina e a glicose, o que reduz a gordura hepática mesmo antes de o ponteiro da balança cair.',
            'Para começar, vale o ritmo que dá para manter. Uma caminhada de 30 minutos na maioria dos dias da semana já traz benefício, e somar exercícios de força duas vezes por semana ajuda ainda mais. Quem é sedentário deve aumentar a intensidade de forma gradual.',
          ],
        },
        {
          id: 'pelo-sus',
          heading: 'Como o SUS organiza esse cuidado',
          paragraphs: [
            'O acompanhamento da esteatose começa na unidade básica de saúde (UBS), onde o clínico geral avalia exames, peso e fatores de risco. Quando é preciso investigar inflamação ou fibrose, a pessoa pode ser encaminhada a um gastroenterologista ou hepatologista.',
            'Nas consultas de rotina, a equipe ajusta metas de peso, orienta alimentação e atividade física e trata as condições que alimentam a esteatose, como [diabetes](/doencas/diabetes/) e [colesterol alto](/doencas/colesterol-alto/). Revisitar os exames periodicamente é o que permite notar uma melhora ou uma piora a tempo.',
          ],
        },
        {
          id: 'o-que-nao-faz-milagres',
          heading: 'O que não existe: pílula que limpa o fígado',
          paragraphs: [
            'Detox, chá emagrecedor e suplemento prometendo limpar o fígado não revertem a esteatose, e alguns podem até sobrecarregar o órgão. Antes de tomar qualquer produto, mesmo natural, fale com a equipe de saúde: o que funciona é o que se sustenta ao longo dos meses.',
          ],
        },
        {
          id: 'acompanhamento',
          heading: 'Como saber se está funcionando',
          paragraphs: [
            'A evolução aparece nos exames e não nos sintomas, justamente porque a esteatose é silenciosa. A transaminase tende a normalizar, e a ultrassonografia pode mostrar o fígado com menos gordura.',
            'O mais importante é não abandonar o cuidado quando o resultado melhora. Uma parcela das pessoas volta a acumular gordura quando recupera o peso, e por isso o acompanhamento continua mesmo depois da reversão.',
          ],
          cta: {
            label: 'Veja a página completa sobre a esteatose hepática',
            href: '/doencas/esteatose-hepatica/',
          },
        },
      ],
      diseaseSlugs: ['esteatose-hepatica'],
      topicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedArticleSlugs: ['esteatose-hepatica-sintomas-e-quando-procurar-atendimento'],
      references: [
        {
          label: 'Modificação do estilo de vida em MASLD/MASH: fatos e evidências',
          url: 'https://sbhepatologia.org.br/publicacoes/artigos/modificacao-do-estilo-de-vida-em-masld-mash-fatos-e-evidencias/',
          publisher: 'Sociedade Brasileira de Hepatologia',
        },
        {
          label: 'Esteatose hepática: o que é, causas, sintomas e tratamento',
          url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica',
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
            'A dosagem faz parte da rotina de quem já tem fator de risco, e nesses casos o pedido costuma vir junto da consulta de acompanhamento. Pergunte à equipe de saúde se é hora do exame se você se reconhece em alguma destas situações:',
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
            'Exame alterado sem sintoma não é caso de pronto atendimento. O caminho é a unidade básica de saúde (UBS), com o resultado em mãos, para classificar o risco, repetir o que for preciso e decidir entre mudança de hábitos e medicamento. Procure avaliação com mais urgência se aparecerem sinais de que as artérias já foram afetadas:',
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
            'Ligue para o SAMU (192) ou vá a um pronto atendimento sem esperar, se surgir:',
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
      updatedAt: '2026-10-19',
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
      updatedAt: '2026-10-19',
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
            'Cada rim abriga cerca de um milhão de filtros minúsculos, os néfrons, que separam do sangue o que deve virar urina. A doença renal crônica é justamente a perda progressiva e irreversível desses filtros, e o órgão tem margem de reserva: boa parte da função pode se perder antes de qualquer queixa aparecer. É por isso que a Organização Mundial da Saúde estima que a maioria das pessoas com doença renal no mundo não sabe que a tem.',
            'O que aparece primeiro, quase sempre, não é sintoma e sim exame. A albumina na urina sobe antes da filtração cair, e a creatinina no sangue, convertida em taxa de filtração glomerular estimada (TFGe), revela o que o corpo ainda não reclama. Nos estágios 1, 2 e 3, a pessoa pode levar uma vida inteira sem perceber nada de errado.',
          ],
        },
        {
          id: 'o-que-muda-no-corpo',
          heading: 'O que muda no corpo quando o rim perde função',
          paragraphs: [
            'Quando a filtração cai de verdade, o acúmulo de toxinas, líquido e minerais mexe com o organismo inteiro. Os sinais mais comuns nessa fase são vagos e atribuídos a outras causas:',
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
            'Nem tudo vira emergência, mas alguns achados justificam marcar consulta rápido, especialmente em quem tem [diabetes](/doencas/diabetes/) ou [pressão alta](/doencas/hipertensao/):',
          ],
          bullets: [
            'Volume de urina que cai dia após dia',
            'Espuma persistente na urina, sinal de proteína',
            'Inchaço novo nos tornozelos ou no rosto, sobretudo de manhã',
            'Pressão arterial que sai do controle, mesmo com remédio em dia',
            'Cansaço progressivo, com palidez',
            'Urinhar muito à noite, acordando duas ou mais vezes',
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
            'A Sociedade Brasileira de Nefrologia recomenda, para quem tem fator de risco, creatinina e urinálise uma vez por ano, além de triagem de idosos, cardiopatas e pessoas com história familiar de doença renal. Se você nunca fez esses exames e se reconhece nos fatores de risco, leve o pedido de exame na próxima consulta e peça que eles entrem na rotina.',
          ],
        },
        {
          id: 'quando-e-emergencia',
          heading: 'Quando é emergência',
          paragraphs: [
            'Ligue para o SAMU (192) ou vá a um pronto atendimento se, em alguém com doença renal conhecida ou suspeita, aparecer:',
          ],
          bullets: [
            'Falta de ar intensa, com inchaço generalizado',
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
            'A rede brasileira tem uma linha de cuidado específica para doença crônica, e o tratamento dialítico é ofertado pelo Sistema Único de Saúde em clínicas conveniadas. Quem tem estágio 4 ou 5 deve ter acompanhamento programado, com conversa antecipada sobre hemodiálise, diálise peritoneal e transplante, porque a preparação evita a diálise de urgência, feita em pior condição clínica.',
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
      updatedAt: '2026-10-19',
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
            label: 'Leia também: como medir a pressão arterial em casa',
            href: '/artigos/hipertensao-como-medir-a-pressao-em-casa/',
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
      updatedAt: '2026-10-19',
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
            'A hanseníase se manifesta, quase sempre, por manchas na pele que perdem a sensibilidade. Podem ser claras, avermelhadas, acastanhadas ou amarronzadas, de contorno irregular, e surgem no tronco, nos braços, nas pernas ou no rosto. O que distingue a mancha da hanseníase de qualquer outra mancha é simples: ela não sente direito o toque, o calor, o frio ou a dor.',
            'Muitas pessoas só percebem a mancha quando alguém chama a atenção, porque ela não coça, não dói e não arde. Também não descama de forma intensa nem melhora com creme comum. Passam meses, às vezes anos, convivendo com a lesão antes de procurar uma unidade de saúde.',
          ],
        },
        {
          id: 'testando-a-sensibilidade',
          heading: 'Como testar a sensibilidade da mancha',
          paragraphs: [
            'Esse teste pode ser feito em casa, com objetos simples, e serve apenas para levantar suspeita, não para dar diagnóstico. Em uma sala bem iluminada, compare a área da mancha com a pele ao redor:',
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
            'Nem toda mancha clara na pele é hanseníase. Pano branco (pitiríase versicolor), dermatite, vitiligo e até marcas deixadas por espinhas ou queimaduras são queixas muito mais comuns. Nenhuma dessas condições costuma vir acompanhada de perda de sensibilidade na área da mancha.',
            'Mancha que coça muito, arde ou descama costuma apontar para outra causa. Da mesma forma, a hanseníase não se transmite pelo beijo, pelo abraço, pelo uso do mesmo banheiro nem pelo compartilhamento de talheres e roupas, e não é hereditária. Nada disso deve atrasar a investigação: se a mancha persiste e perde sensibilidade, a avaliação na UBS é o caminho.',
          ],
        },
        {
          id: 'quando-procurar-a-ubs',
          heading: 'Quando procurar a unidade básica de saúde',
          paragraphs: [
            'Vale ir à UBS em qualquer um dos cenários abaixo, mesmo sem sintoma geral:',
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
            'Na UBS, o profissional examina a pele, testa a sensibilidade das manchas e palpa os troncos nervosos dos braços e das pernas. Não é preciso jejum nem preparo prévio. Se o exame bastar para fechar o diagnóstico, a equipe já explica o esquema de tratamento e o organiza dentro do calendário da unidade.',
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
      updatedAt: '2026-10-19',
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
            'O tratamento da hanseníase é feito com a poliquimioterapia (PQT-U), uma combinação de três medicamentos antibióticos fornecidos gratuitamente pelo Sistema Único de Saúde: rifampicina, dapsona e clofazimina. A associação dos três foi desenhada para evitar a resistência do bacilo, o que acontecia quando o tratamento usava apenas uma droga.',
            'O esquema é tomado em cartelas, na forma de comprimidos, e começa no dia em que o diagnóstico é confirmado na unidade básica de saúde (UBS). A primeira dose do mês é supervisionada por um profissional de saúde; as demais doses são tomadas em casa. O tratamento dispensa internação e não afasta a pessoa do trabalho, da escola ou da rotina familiar.',
          ],
        },
        {
          id: 'duracao-dos-esquemas',
          heading: 'Quanto tempo dura o tratamento',
          paragraphs: [
            'A duração depende da forma clínica da doença. Na hanseníase paucibacilar, com poucas manchas e menos bacilos, o esquema dura seis meses. Na hanseníase multibacilar, com mais lesões e maior carga de bacilos, o esquema é de doze meses.',
            'A alta por cura é dada quando a pessoa toma todas as doses previstas dentro do prazo e passa pela avaliação final. Interromper o tratamento antes do fim é o que pode levar à resistência, uma situação mais difícil de tratar e que exige esquemas substitutivos, também oferecidos de graça pelo SUS.',
          ],
        },
        {
          id: 'transmissao-cai-no-inicio',
          heading: 'No início do tratamento, a transmissão cai',
          paragraphs: [
            'Logo que a poliquimioterapia começa, a pessoa deixa de eliminar o bacilo pelas vias respiratórias e, portanto, deixa de transmitir a infecção. Não é necessário isolamento, nem afastar o paciente da mesa de jantar, do banheiro ou do convívio com crianças pequenas.',
            'Esse dado ajuda a desfazer o estigma que ainda cerca a doença: a pessoa em tratamento pode abraçar a família, dividir os mesmos objetos e continuar a rotina. As primeiras semanas podem trazer reações inflamatórias, chamadas reações hansênicas, que não significam falha do tratamento e devem ser avaliadas pela equipe.',
          ],
        },
        {
          id: 'quem-convive-com-o-caso',
          heading: 'Quem convive com a pessoa diagnosticada',
          paragraphs: [
            'A investigação de contatos faz parte do protocolo. São avaliadas as pessoas que convivem ou conviveram por período prolongado com o caso confirmado, em casa, no trabalho ou na escola. O exame de pele e dos nervos é feito na UBS, sem custo, e serve para detectar lesões que ainda não deram sinal.',
            'Entre os contatos, o Ministério da Saúde também recomenda a aplicação da vacina BCG em quem não tem cicatriz vacinal, dentro das regras previstas pela equipe de saúde. Contatos que apresentam manchas são tratados como caso novo; quem não tem sinal recebe orientação de retorno e continua sendo acompanhado por alguns anos.',
          ],
        },
        {
          id: 'cuidado-com-maos-pes-e-olhos',
          heading: 'Autocuidado com mãos, pés e olhos',
          paragraphs: [
            'A hanseníase pode deixar áreas do corpo sem sensibilidade. Sem dor, pequenos ferimentos passam despercebidos e podem evoluir para úlceras. O autocuidado diário é parte do tratamento:',
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
            'Hanseníase é uma doença infecciosa como qualquer outra, transmitida por via respiratória apenas em convívio próximo e prolongado, e com cura. Uma pessoa em tratamento não é perigo para a família, para os colegas nem para a escola. Se a equipe de saúde ou o empregador apresentar dúvida, vale mostrar o conteúdo oficial do Ministério da Saúde sobre o assunto.',
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
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
  {
      id: 'anemia-ferropriva-sintomas-e-quando-procurar-atendimento',
      slug: 'anemia-ferropriva-sintomas-e-quando-procurar-atendimento',
      metaTitle: 'Anemia ferropriva: sintomas',
      title: 'Anemia ferropriva: sintomas e quando procurar atendimento',
      excerpt:
        'Cansaço, palidez e falta de ar aos esforços são os primeiros sinais da anemia por falta de ferro. Veja como reconhecê-los, o que mais se parece com anemia e quando procurar uma UBS.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      body: [
        {
          id: 'os-primeiros-sinais',
          heading: 'Os primeiros sinais costumam ser discretos',
          paragraphs: [
            'A anemia por falta de ferro costuma chegar devagar. O corpo começa usando o ferro que estava guardado e só quando essa reserva acaba é que a hemoglobina cai o suficiente para dar sinais. Por isso muitas pessoas convivem semanas com o quadro sem perceber.',
            'O retrato mais clássico é o cansaço que não combina com o esforço feito, acompanhado de palidez. Esse par de sintomas é tão comum que acaba sendo atribuído a sono ruim ou estresse, mas vale investigar quando persiste.',
          ],
        },
        {
          id: 'sinais-que-passam-despercebidos',
          heading: 'Sinais que costumam passar despercebidos',
          paragraphs: [
            'Além do cansaço e da palidez, a anemia ferropriva traz sinais que muitas pessoas não associam à falta de ferro:',
          ],
          bullets: [
            'Falta de ar ao subir escadas ou caminhar em ritmo mais rápido',
            'Palpitações e tontura ao se levantar',
            'Dificuldade para se concentrar e queda de rendimento no trabalho ou na escola',
            'Unhas quebradiças, que em casos antigos assumem formato de colher',
            'Secura e queda de cabelo mais intensas que o habitual',
          ],
        },
        {
          id: 'o-que-mais-parece-anemia',
          heading: 'O que mais se parece com anemia ferropriva',
          paragraphs: [
            'Nem todo cansaço vem de anemia, e nem toda anemia é por falta de ferro. Alterações da tireoide, apneia do sono, infecções prolongadas e outros tipos de anemia dão sintomas parecidos. Por isso a confirmação depende de exame de sangue, não da sensação isolada.',
            'Há ainda uma diferença que importa: a anemia associada à [doença renal crônica](/doencas/doenca-renal-cronica/) tem outro mecanismo e exige outra abordagem. Antes de iniciar ferro por conta própria, é essencial saber qual é o tipo de anemia em jogo.',
          ],
        },
        {
          id: 'quando-procurar-a-ubs',
          heading: 'Quando procurar a unidade básica de saúde',
          paragraphs: [
            'A UBS resolve a maior parte dos casos, e ir até lá mais cedo faz diferença. Procure atendimento quando:',
          ],
          bullets: [
            'O cansaço e a palidez persistem por mais de duas ou três semanas',
            'Há falta de ar, palpitação ou tontura atrapalhando as atividades do dia',
            'A menstruação é muito volumosa ou a gravidez veio acompanhada desses sinais',
            'As fezes ficam pretas ou aparece sangue, indício de perda de sangue',
            'A pessoa já tem doença cardíaca e nota piora da disposição ou do fôlego',
          ],
        },
        {
          id: 'na-consulta',
          heading: 'O que acontece na consulta',
          paragraphs: [
            'Na UBS, o profissional avalia a história e o exame físico e solicita o hemograma. Os valores de hemoglobina e de ferritina, interpretados junto do quadro e da idade e do sexo da pessoa, indicam se a anemia é por falta de ferro e qual a provável causa. Em alguns casos, o médico investiga a origem da perda de sangue.',
            'Se o caso é leve, o acompanhamento pode seguir na própria unidade. Se há piora rápida, anemia intensa ou doença associada, a pessoa é encaminhada para avaliação especializada. Entender o tipo de anemia é o primeiro passo de um tratamento que funciona.',
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
      updatedAt: '2026-10-19',
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
            'O tratamento da anemia ferropriva tem duas frentes: repor o ferro que falta e corrigir a causa da perda ou do consumo excessivo. Nos casos leves e moderados, o ferro por via oral resolve, e a hemoglobina costuma começar a subir em algumas semanas.',
            'A melhora do cansaço, porém, não encerra o tratamento. Enquanto a ferritina, que mede o estoque de ferro, não se repletar, a reposição continua; isso costuma levar de dois a seis meses. O tempo exato e a forma de tomar são definidos pelo médico, conforme o caso. A transfusão de sangue fica reservada para as situações graves ou muito sintomáticas.',
          ],
        },
        {
          id: 'ferro-na-dieta',
          heading: 'Ferro na dieta',
          paragraphs: [
            'A alimentação ajuda na prevenção e durante o tratamento, mas não substitui a reposição quando a anemia já está instalada. Bons exemplos de alimentos com ferro:',
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
            'A maneira de montar o prato interfere bastante na absorção do ferro. Estratégias simples fazem diferença:',
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
            'O ferro oral é seguro, mas pode incomodar. Náusea, desconforto estomacal, intestino preso e fezes mais escuras são queixas frequentes no início.',
            'Nada disso é motivo para interromper o tratamento por conta própria. Ajustar o horário da toma, iniciar com frequência menor ou trocar a apresentação são soluções que o profissional conhece, e que costumam resolver o incômodo sem comprometer o resultado.',
          ],
        },
        {
          id: 'gravidez-e-criancas',
          heading: 'Gravidez, infância e adolescência',
          paragraphs: [
            'Na gravidez, a necessidade de ferro aumenta junto do volume de sangue e do crescimento do bebê, e o pré-natal costuma prever a suplementação. O acompanhamento é essencial para reduzir o risco de anemia materna, parto prematuro e baixo peso ao nascer.',
            'Na infância e na adolescência, o ritmo de crescimento e, entre as meninas, o início da menstruação elevam a exigência de ferro. Crianças com anemia podem ficar mais cansadas, irritadas e com menos rendimento na escola. A suplementação nessas fases deve seguir a orientação da equipe de saúde.',
          ],
        },
        {
          id: 'acompanhar-resultados',
          heading: 'Acompanhar com exames, não apenas com a sensação',
          paragraphs: [
            'O tratamento da anemia ferropriva se acompanha com exames, porque os sintomas melhoram antes de o estoque de ferro se repletar. Pontos de atenção no acompanhamento:',
          ],
          bullets: [
            'Repetir hemograma e ferritina nos prazos definidos pelo médico, mesmo depois da melhora',
            'Manter o ferro pelo tempo indicado, sem interromper assim que o cansaço passa',
            'Investigar sangramentos persistentes e casos que não respondem à reposição',
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
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
  {
      id: 'catarata-sintomas-e-quando-procurar-atendimento',
      slug: 'catarata-sintomas-e-quando-procurar-atendimento',
      metaTitle: 'Catarata: sintomas e quando procurar atendimento',
      title: 'Catarata: sintomas, evolução e quando procurar atendimento',
      excerpt:
        'Entenda como a catarata progride, quais são os sinais de que a visão está piorando e em que situação é preciso buscar um oftalmologista com urgência.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      body: [
        {
          id: 'como-a-visao-muda',
          heading: 'Como a visão muda com a catarata',
          paragraphs: [
            'A catarata provoca a opacificação do cristalino, a lente natural do olho. Isso faz a imagem chegar embaçada à retina e a pessoa percebe que está enxergando pior, como se houvesse uma névoa na frente dos olhos.',
            'No início, o embaçamento é discreto e muitas vezes só notado à noite ou sob luz forte. A progressão é lenta, e na maioria dos casos leva anos até a visão ficar realmente prejudicada. O oftalmologista consegue medir essa perda em cada consulta e indicar o momento certo de intervir.',
          ],
        },
        {
          id: 'sinais-de-piora',
          heading: 'Sinais de que a catarata está avançando',
          paragraphs: [
            'Alguns sinais mostram que a opacificação do cristalino está aumentando e a cirurgia deve ser considerada:',
          ],
          bullets: [
            'Precisar de luz muito forte para conseguir ler ou costurar',
            'Sentir ofuscamento ao dirigir à noite ou com farol contrário',
            'Perceber as cores desbotadas, com tom amarelado ou acinzentado',
            'Ter que trocar a receita dos óculos a cada poucos meses',
          ],
        },
        {
          id: 'ritmo-da-progressao',
          heading: 'Em quanto tempo a catarata piora a visão',
          paragraphs: [
            'A catarata avança devagar e sem dor, muitas vezes ao longo de anos. Os dois olhos costumam ser afetados, mas quase nunca no mesmo ritmo: é comum enxergar melhor de um lado e só perceber a diferença na consulta.',
            'Há um detalhe que confunde muita gente. Quando a opacificação se forma no centro do cristalino, a mudança no foco pode melhorar a visão de perto por um período, e a pessoa volta a ler sem óculos. Isso não é o olho melhorando: é o grau mudando ao redor da área turva.',
            'O que não faz parte desse ritmo é a perda súbita. Uma queda de visão em horas ou em poucos dias não é comportamento de catarata e precisa de avaliação no mesmo dia.',
          ],
        },
        {
          id: 'nenhum-colirio-resolve',
          heading: 'Nenhum colírio desfaz a catarata',
          paragraphs: [
            'A cirurgia é o único tratamento que cura a catarata. Não há colírio nem medicamento que faça a opacificação do cristalino desaparecer, e a lente turvada não volta a ficar transparente sozinha.',
            'Por isso, produtos que prometem reverter a catarata merecem desconfiança: além de não cumprirem o que anunciam, podem atrasar uma avaliação que já deveria ter acontecido. Suplementos vitamínicos também não têm efeito comprovado sobre a progressão.',
          ],
        },
        {
          id: 'quando-procurar',
          heading: 'Quando procurar atendimento',
          paragraphs: [
            'Se você percebe a visão embaçada e o embaçamento está piorando, marque uma consulta com oftalmologista. Na UBS mais próxima, é possível conseguir o encaminhamento para o serviço de oftalmologia do SUS.',
            'A catarata não é urgência. Porém, se houver perda visual súbita, dor ocular intensa, surgimento de manchas escuras flutuantes ou alucinações visuais, procure atendimento no mesmo dia, pois podem indicar outras condições que exigem intervenção rápida.',
          ],
          cta: {
            label: 'Veja a página sobre a catarata',
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
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
  {
      id: 'catarata-tratamento-e-cirurgia',
      slug: 'catarata-tratamento-e-cirurgia',
      metaTitle: 'Catarata: tratamento e cirurgia',
      title: 'Catarata: tratamento cirúrgico, recuperação e acesso pelo SUS',
      excerpt:
        'A cirurgia de catarata é segura, eficaz e oferecida pelo SUS. Saiba como funciona o procedimento, o que esperar da recuperação e como acessar o tratamento.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      body: [
        {
          id: 'quando-operar',
          heading: 'Quando a cirurgia está indicada',
          paragraphs: [
            'A cirurgia é recomendada quando a opacificação do cristalino atrapalha atividades diárias, como dirigir, trabalhar, ler ou cuidar da casa. Não existe grau mínimo obrigatório: a indicação é funcional, baseada no impacto que a perda visual causa na vida da pessoa.',
            'Não é preciso esperar a catarata "amadurecer". Adiar a cirurgia em casos avançados pode tornar o procedimento mais delicado e a recuperação, mais lenta.',
          ],
        },
        {
          id: 'condicoes-cronicas',
          heading: 'Diabetes e problema cardíaco impedem a cirurgia?',
          paragraphs: [
            'A cirurgia de catarata pode ser feita em pessoas de qualquer idade, e é considerada segura também em quem tem diabetes ou doença cardíaca, desde que essas condições estejam em acompanhamento.',
            'A indicação depende do quanto a visão já atrapalha, não do tempo desde o diagnóstico. Enquanto a rotina segue possível, não há vantagem em operar antes da hora. A exceção é rara: quando a catarata provoca inflamação no olho ou eleva a pressão dentro dele, o oftalmologista pode recomendar cirurgia imediata.',
          ],
        },
        {
          id: 'como-e-a-cirurgia',
          heading: 'Como funciona o procedimento',
          paragraphs: [
            'A técnica mais usada é a facoemulsificação: o oftalmologista fragmenta o cristalino opacificado por ultrassom e o aspira, substituindo-o por uma lente intraocular artificial que devolve a transparência ao eixo visual.',
            'A cirurgia é feita sob anestesia local, dura em média 20 a 30 minutos e não exige internação. O paciente recebe alta no mesmo dia. O SUS oferece o procedimento gratuitamente em hospitais credenciados, e o Ministério da Saúde tem ampliado a capacidade cirúrgica, inclusive com protocolos que tratam catarata e glaucoma em uma única intervenção.',
          ],
        },
        {
          id: 'recuperacao',
          heading: 'Recuperação e cuidados no pós-operatório',
          paragraphs: [
            'A recuperação costuma ser rápida, e muitos já enxergam melhor em 24 a 48 horas. O oftalmologista prescreve colírios antibiótico e anti-inflamatório para evitar infecção e controlar a inflamação:',
          ],
          bullets: [
            'Evitar esfregar o olho operado por pelo menos um mês',
            'Usar protetor ocular para dormir nos primeiros dias',
            'Suspender atividades físicas intensas e trabalhos com poeira por orientação médica',
            'Retornar às consultas de acompanhamento para verificar a cicatrização e a acuidade visual',
          ],
        },
        {
          id: 'a-catarata-volta',
          heading: 'A catarata volta depois da cirurgia?',
          paragraphs: [
            'A catarata em si não volta, porque o cristalino natural já foi removido. O que acontece, em cerca de uma a cada quatro pessoas operadas, é a cápsula fina que ficou no olho para sustentar a lente artificial ficar opaca meses ou anos depois. É a chamada catarata secundária, e o resultado é parecido com o anterior: a visão volta a ficar embaçada.',
            'O tratamento não é uma nova cirurgia de catarata. Na maioria dos casos, o oftalmologista usa um laser para abrir um pequeno orifício nessa cápsula e permitir a passagem da luz.',
          ],
          cta: {
            label: 'Veja a página sobre a catarata',
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
      updatedAt: '2026-10-19',
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
            'O que muda o cenário são algumas cenas específicas, descritas abaixo. Elas envolvem obstrução do intestino, perda de sangue, desidratação e anemia, e nenhuma delas melhora com medida caseira.',
          ],
        },
        {
          id: 'observar-em-casa',
          heading: 'O que observar em casa',
          paragraphs: [
            'Enquanto a consulta chega, vale anotar a evolução dos pontos que mostram como o parasita está afetando o conjunto:',
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
            'As crianças pagam o preço maior das parasitoses, porque o parasita compete justamente com a fase da vida em que o corpo mais precisa de alimento. Leve a criança de novo à unidade de saúde, sem esperar o fim do tratamento, se notar:',
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
          id: 'emergencia',
          heading: 'Quando é emergência',
          paragraphs: [
            'Poucas situações ligam o sinal vermelho, mas elas existem. Procure um pronto atendimento sem esperar se aparecer:',
          ],
          bullets: [
            'Dor abdominal forte em cólica, com vômitos e interrupção das fezes e dos gases, sugestiva de obstrução intestinal',
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
            'A UBS resolve a maior parte dos casos: faz a pergunta certa, pede o parasitológico de fezes, escolhe o remédio conforme o parasita e marca a reavaliação. Em regiões de alta transmissão, o Ministério da Saúde coordena campanhas de tratamento periódico, e quem recebe o diagnóstico em casa não precisa esperar crise para levar as crianças à consulta.',
            'Leve os exames de volta na data combinada, inclusive quando o resultado negativo não explicar os sintomas, porque uma única amostra pode não ter pego o parasito. E se o quadro for de diarreia com vômitos e desidratação, o cuidado imediato é o da [gastroenterite](/doencas/gastroenterite/), enquanto a [anemia ferropriva](/doencas/anemia-ferropriva/) explica a palidez e o cansaço que persistem depois de tratar os vermes.',
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
      updatedAt: '2026-10-19',
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
            'Contra os vermes, as opções mais usadas são o albendazol e o mebendazol, em geral em tratamento curto. Contra protozoários como a giárdia e a ameba, funcionam a nitazoxanida e os medicamentos da família do metronidazol, e é aí que a automedicação tropeça: a caixa comprada na farmácia para vermes não elimina protozoários, e o quadro volta sem explicação.',
            'A dose se define pela idade e pelo peso, e a gravidez muda a escolha do remédio, por isso bebê, criança e gestante merecem avaliação individual. No Brasil, o tratamento das geo-helmintíases está disponível na rede pública, com o albendazol fornecido pelo SUS nas unidades básicas de saúde.',
          ],
        },
        {
          id: 'na-pratica',
          heading: 'Como conduzir o tratamento',
          paragraphs: [
            'Feita a prescrição, o resto depende de casa:',
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
            'Sem quebrar o ciclo, o remédio limpa hoje e o parasita reentra amanhã. Os ovos dos vermes transmitidos pelo solo amadurecem na terra e voltam à boca pela mão mal lavada, pela verdura crua ou pela água contaminada; os cistos da giárdia resistem em água mal tratada; e os ovos do oxiúro vivem no lençol, na roupa e nas unhas de quem se coça à noite.',
            'A reinfecção é o motor da carga parasitária nas crianças, que trocam ovos entre si em casa, na creche e na escola. Por isso o tratamento do oxiúro é da família toda, e por isso a higiene não é detalhe decorativo: é a metade do remédio.',
          ],
        },
        {
          id: 'prevencao',
          heading: 'Prevenção no dia a dia',
          paragraphs: [
            'As medidas que fecham a porta de entrada do parasita são simples, baratas e valem para todos os tipos de parasitose intestinal:',
          ],
          bullets: [
            'Lavar as mãos com água e sabão depois de usar o banheiro e antes de comer',
            'Lavar muito bem as frutas, as verduras e os legumes que serão consumidos crus',
            'Beber só água tratada, fervida ou filtrada',
            'Usar calçados ao caminhar em terra ou areia',
            'Manter as unhas curtas e limpas, principalmente nas crianças',
            'Em áreas de alta transmissão, participar das campanhas de tratamento periódico oferecidas pelo SUS',
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
      updatedAt: '2026-10-19',
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
            'A artrite reumatoide raramente começa de uma vez. Ela vai aparecendo em detalhes que a pessoa aprende a ignorar, e são justamente esses detalhes que o reumatologista procura.',
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
            'A dor da artrite reumatoide segue um desenho próprio: atinge articulações pequenas, das mãos e dos pés, e quase sempre dos dois lados do corpo ao mesmo tempo. O punho e a base dos dedos são lugares típicos.',
            'Outra marca é o horário. A rigidez é maior depois do repouso, ao acordar ou depois de um longo período parado, e melhora quando a pessoa se mexe. Dor que só piora com o uso da junta, ao fim do dia, costuma apontar para artrose, não para artrite reumatoide.',
          ],
        },
        {
          id: 'duracao-importa',
          heading: 'Por que a duração importa',
          paragraphs: [
            'Uma junta que dói por dois ou três dias, depois de um esforço ou de uma virose, não acende alerta. O sinal que muda a história é a persistência: inflamação que fica seis semanas ou mais, sempre nas mesmas articulações, merece avaliação.',
            'Esse é também o ponto que separa a artrite reumatoide da dor articular deixada por arboviroses. Depois da [chikungunya](/doencas/chikungunya/) a dor pode durar meses, mas ela costuma ter começado de forma abrupta, com febre alta, logo após as picadas do mosquito. A [dengue](/doencas/dengue/) dói muito na fase aguda e depois alivia.',
          ],
        },
        {
          id: 'quando-procurar',
          heading: 'Quando procurar atendimento',
          paragraphs: [
            'O primeiro passo é a unidade de saúde de referência, que avalia a persistência do inchaço e encaminha ao reumatologista. A lista de espera por reumatologia nas grandes cidades é longa, e por isso vale buscar o encaminhamento assim que a rigidez matinal se repete por semanas, sem esperar a junta deformar.',
            'Nem tudo é emergência, mas há situações que pedem atendimento no mesmo dia. Uma única articulação inchada, quente e dolorida, ainda mais com febre, pode ser infecção na junta e precisa ser vista logo. Dor que impede de mover a mão, o punho ou o pé também merece avaliação urgente.',
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
      updatedAt: '2026-10-19',
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
            'O tratamento da artrite reumatoide tem uma meta clara: apagar a inflamação antes que ela danifique a articulação. Alcançada a remissão, a doença fica quieta, a dor recua e a pessoa mantém o uso das juntas.',
            'Por isso o início precoce é tão decisivo. Nos primeiros meses a inflamação é mais fácil de conter, e cada articulação preservada é função garantida no futuro. Esperar para ver é a pior escolha.',
          ],
        },
        {
          id: 'medicamentos',
          heading: 'As medicações e o acompanhamento',
          paragraphs: [
            'O reumatologista escolhe as medicações e monta a sequência de tratamento conforme as opções disponíveis no serviço, ajustando tudo ao tipo de junta atingida e à resposta de cada pessoa. O SUS mantém um protocolo clínico específico para a artrite reumatoide, que organiza esse caminho.',
            'Vale lembrar que muitos desses medicamentos demoram semanas para mostrar efeito, e o alívio rápido costuma vir de outros recursos usados no início. Nunca mude a dose nem pare por conta própria, e mantenha os exames de acompanhamento, que vigiam o fígado e o sangue durante o tratamento.',
          ],
        },
        {
          id: 'cuidados',
          heading: 'Cuidados que poupam as juntas',
          paragraphs: [
            'O remédio controla a inflamação, e o cuidado diário poupa a articulação. Alguns hábitos fazem diferença ao lado do tratamento.',
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
          id: 'conviver',
          heading: 'Conviver e acompanhar',
          paragraphs: [
            'A artrite reumatoide é crônica, e o acompanhamento é o que mantém a doença controlada ao longo dos anos. Voltar às consultas, mesmo quando tudo vai bem, permite ajustar o tratamento antes de a dor voltar a subir.',
            'Parar de fumar, manter o peso e cuidar das vacinas recomendadas ajudam o resto do corpo a acompanhar as juntas. Em caso de cirurgia, de infecção ou de febre durante o tratamento, avise o reumatologista antes de tomar qualquer providência.',
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
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
];
