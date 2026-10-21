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
];
