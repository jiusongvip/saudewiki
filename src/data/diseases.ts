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
    aliases: ['febre da dengue', 'dengue clássica', 'dengue grave', 'dengue hemorrágica'],
    summary:
      'Infecção viral transmitida pela picada do Aedes aegypti. A maioria dos casos é leve, mas a forma grave costuma começar quando a febre cede.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é dengue?',
        paragraphs: [
          'Dengue é uma infecção causada por quatro sorotipos do vírus dengue (DENV-1 a DENV-4), transmitidos principalmente pela picada da fêmea do Aedes aegypti. Quem se infecta por um sorotipo fica imune a ele por muito tempo, mas pode adoecer de novo ao entrar em contato com os outros três.',
          'A maior parte das infecções não causa sintoma ou causa um quadro leve. Uma parcela menor evolui para a forma grave, e isso costuma acontecer justamente quando a febre começa a ceder, e não no auge dela.',
          'No Brasil, a dengue circula de forma contínua desde a década de 1980, com surtos que se repetem e se concentram entre outubro e maio. O mosquito se cria em água limpa e parada e vive dentro ou ao redor das casas, o que explica por que a transmissão é mais intensa em cidades densamente ocupadas.',
          'A dengue não é um problema só do Brasil. A Organização Mundial da Saúde estima de 100 a 400 milhões de infecções por ano no mundo. Em 2024 foram notificados 14,6 milhões de casos e mais de 12 mil mortes, o maior número já registrado em doze meses, com boa parte nas Américas.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como a dengue é transmitida?',
        paragraphs: [
          'A transmissão acontece pela picada de uma fêmea do Aedes aegypti infectada. O mosquito tem hábitos diurnos, com atividade maior no começo da manhã e no fim da tarde, e costuma viver dentro ou muito perto das casas.',
          'Não existe transmissão direta de pessoa para pessoa. O que existe é um ciclo: o mosquito se infecta ao picar alguém com o vírus no sangue e, depois de alguns dias, passa o vírus adiante ao picar outra pessoa. Esse período de vírus no sangue começa até dois dias antes dos sintomas e segue até cerca de dois dias depois de a febre passar.',
          'Em situações raras, o vírus pode passar da gestante para o bebê, por transfusão de sangue ou por transplante de órgãos. O Aedes albopictus também é capaz de transmitir a dengue, mas tem papel secundário em relação ao Aedes aegypti.',
          'Por isso, quem está com dengue deve evitar novas picadas. Assim o mosquito não adquire o vírus e não o leva para outra pessoa da casa ou da vizinhança.',
        ],
      },
      {
        id: 'grupos-de-risco',
        heading: 'Quem tem maior risco de complicação?',
        paragraphs: [
          'Qualquer pessoa pode evoluir para dengue grave, inclusive quem nunca teve a doença antes. Alguns grupos, porém, precisam de acompanhamento mais próximo desde o primeiro atendimento:',
        ],
        bullets: [
          'Bebês e crianças pequenas, sobretudo menores de 2 anos',
          'Pessoas com 65 anos ou mais',
          'Gestantes e mulheres no pós-parto',
          'Pessoas com diabetes, hipertensão, doença renal, cardíaca, pulmonar ou do sangue',
          'Pessoas com obesidade',
          'Pessoas com imunidade comprometida',
          'Quem já teve dengue por outro sorotipo',
          'Quem tem dificuldade para se hidratar ou mora longe de um serviço de saúde',
        ],
      },
      {
        id: 'tipos',
        heading: 'Quais são os tipos de dengue?',
        paragraphs: [
          'A classificação usada hoje separa três situações: dengue sem sinais de alarme, dengue com sinais de alarme e dengue grave. A antiga divisão entre dengue clássica e dengue hemorrágica ainda aparece na conversa do dia a dia, mas não descreve bem todos os casos.',
          'A dengue sem sinais de alarme é a mais comum. Febre, dor de cabeça, dores no corpo e manchas na pele dominam o quadro, e a recuperação acontece na maioria das vezes com hidratação e acompanhamento.',
          'A dengue grave é definida por pelo menos uma destas condições: extravasamento importante de plasma, com choque ou acúmulo de líquido que atrapalha a respiração; sangramento intenso; ou comprometimento grave de órgãos como fígado, coração, cérebro e rins. É possível ter dengue grave sem nenhum sangramento visível, o que torna o termo dengue hemorrágica enganoso.',
        ],
        cta: {
          label: 'Leia também: dengue pode matar?',
          href: '/artigos/dengue-pode-matar/',
        },
      },
      {
        id: 'causas',
        heading: 'O que causa a dengue?',
        paragraphs: [
          'A causa é a infecção por um dos quatro sorotipos do vírus dengue, um flavivírus de RNA. Não há outra via: não se pega dengue pelo contato com uma pessoa doente, por alimentos ou por água.',
          'Depois da picada, o vírus se multiplica nas células de defesa da pele e dos gânglios e chega à corrente sanguínea. É nesse período, chamado de viremia, que um novo mosquito pode se infectar ao picar a pessoa.',
          'Na forma grave, o problema central é o aumento da permeabilidade dos vasos. O plasma escapa para o pulmão, para o abdômen ou para outros tecidos, o sangue fica mais concentrado e a circulação pode entrar em colapso. As paredes dos vasos não estão destruídas, e é por isso que a reposição de líquido em tempo costuma reverter o quadro.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas da dengue?',
        paragraphs: [
          'Os sintomas costumam começar entre quatro e dez dias depois da picada e durar de dois a sete dias. O início é abrupto: a pessoa passa de um estado normal para febre alta em poucas horas, com dor de cabeça, dor atrás dos olhos, dores no corpo e mal-estar.',
          'Nem todo mundo apresenta todos esses sinais. A febre pode ser baixa ou passar despercebida, e muitas infecções não causam sintoma nenhum. É comum haver vermelhidão no rosto e na garganta nos primeiros dias, o que costuma ser confundido com outras doenças.',
        ],
        bullets: [
          'Febre alta, em geral entre 39 °C e 40 °C, de início súbito',
          'Dor de cabeça intensa e dor atrás dos olhos, que piora ao mover os olhos',
          'Dores musculares e nas articulações, com sensação de corpo quebrado',
          'Náusea, vômito, falta de apetite e, às vezes, diarreia',
          'Manchas vermelhas na pele, que podem coçar e descamar depois',
          'Sangramentos leves, como gengiva sangrando ou pequenas manchas roxas',
          'Gânglios inchados e aumento do fígado em alguns casos',
        ],
        cta: {
          label: 'Leia também: quais são os primeiros sintomas da dengue?',
          href: '/artigos/sintomas-iniciais-da-dengue/',
        },
      },
      {
        id: 'fases-da-dengue',
        heading: 'Quais são as fases da dengue?',
        paragraphs: [
          'A doença costuma seguir três fases. Reconhecê-las ajuda a entender por que a piora pode acontecer justamente quando a febre baixa.',
          'Fase febril: dura de dois a sete dias e concentra febre alta, dor de cabeça, dor atrás dos olhos, dores no corpo e, em muitos casos, manchas na pele. É o período em que há mais vírus no sangue.',
          'Fase crítica: começa quando a febre cede, em geral entre o terceiro e o sétimo dia, e dura de 24 a 48 horas. É quando pode surgir o extravasamento de plasma, com dor abdominal intensa, vômitos persistentes, acúmulo de líquido e, nos casos mais graves, choque. A pessoa pode parecer bem no início dessa fase, o que atrasa a busca por atendimento.',
          'Fase de recuperação: o organismo reabsorve o líquido que saiu dos vasos, a urina volta ao volume habitual, o apetite retorna e as alterações do hemograma melhoram. Cansaço, manchas e coceira podem durar mais alguns dias.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e onde procurar atendimento',
        paragraphs: [
          'A melhora da febre não significa que o risco passou. Os sinais de alerta costumam aparecer entre o terceiro e o sétimo dia, quando a temperatura começa a cair, e indicam extravasamento de plasma ou sangramento.',
          'Procure atendimento imediatamente, mesmo sem febre, se aparecer algum destes sinais:',
        ],
        bullets: [
          'Dor abdominal intensa e contínua',
          'Vômitos frequentes que impedem a hidratação',
          'Sangramento de gengiva, nariz ou nas fezes',
          'Vômito com sangue ou fezes muito escuras',
          'Sonolência excessiva, confusão, agitação ou irritabilidade',
          'Tontura, desmaio ou queda de pressão',
          'Dificuldade para respirar ou respiração rápida',
          'Pele pálida, fria e úmida',
          'Fraqueza intensa',
          'Urinar muito menos que o habitual',
          'Barriga inchada de repente ou aumentando aos poucos',
          'Piora súbita depois que a febre baixa',
        ],
        cta: {
          label: 'Leia também: quando procurar atendimento em caso de suspeita de dengue',
          href: '/artigos/quando-procurar-atendimento-em-caso-de-suspeita-de-dengue/',
        },
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa na conversa e no exame físico. Febre alta de início súbito com dor de cabeça, dor atrás dos olhos, dores no corpo ou manchas na pele, em alguém que vive ou viajou para uma área com transmissão, já levanta a suspeita.',
          'O profissional também procura sinais de desidratação, sangramento, alteração da circulação e comprometimento de órgãos. A confirmação laboratorial ajuda a vigilância e a diferenciar de outras doenças, mas o atendimento não espera o resultado: ele começa pela avaliação clínica.',
          'O tipo de exame depende do dia da doença. Até o quinto dia, é possível detectar o vírus por RT-PCR ou pela pesquisa do antígeno NS1. A partir do sexto dia, o teste de anticorpos passa a ser o mais indicado, porque o vírus já deixou a corrente sanguínea em quantidade detectável.',
        ],
      },
      {
        id: 'exames',
        heading: 'Quais exames podem ser solicitados?',
        paragraphs: [
          'O hemograma é o exame mais usado no acompanhamento. Ele mostra queda de leucócitos e de plaquetas e, quando há extravasamento de plasma, aumento do hematócrito, que indica sangue mais concentrado.',
          'Exames bioquímicos avaliam fígado, rins, eletrólitos e coração. Alterações nas enzimas hepáticas são comuns e, em geral, leves. Em alguns casos aparecem marcadores de lesão cardíaca ou renal.',
          'A imagem entra quando há suspeita de complicação. Radiografia de tórax, ultrassom de abdômen e de tórax e tomografia ajudam a identificar líquido no pulmão, no abdômen ou ao redor do coração. O eletrocardiograma é solicitado quando há sintomas cardíacos ou alterações no exame.',
          'Nenhum exame isolado define a gravidade. A decisão de internar ou de reavaliar em 24 horas considera o estado geral, a pressão arterial, a diurese, o hematócrito e a forma como os sintomas evoluem.',
        ],
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'Quais doenças podem parecer dengue?',
        paragraphs: [
          'Febre com dores no corpo e manchas na pele aparece em várias doenças. Dependendo da região e do histórico da pessoa, o profissional considera outras hipóteses antes de fechar o diagnóstico.',
          'Não é seguro diferenciar essas doenças pelo aspecto das manchas ou pela intensidade da dor. Só a avaliação profissional, com exames quando indicado, separa uma da outra.',
        ],
        bullets: [
          'Chikungunya e zika',
          'Febre do Oropouche',
          'Covid-19 e influenza',
          'Leptospirose',
          'Malária',
          'Sarampo e rubéola',
          'Febre amarela',
          'Meningite e outras infecções',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento: o que ajuda e o que evitar',
        paragraphs: [
          'Não existe antiviral contra a dengue. O tratamento é de suporte: hidratação, repouso, alívio da dor e da febre e acompanhamento clínico, com retorno para reavaliação na data indicada.',
          'Em casa, beba líquidos ao longo de todo o dia, em pequenas quantidades e com frequência, mesmo sem sede. Observe a cor da urina e quantas vezes você urina. Coma o que conseguir, sem forçar, e deixe exercício intenso e bebida alcoólica para depois.',
          'Para febre e dor, o paracetamol é a opção mais usada. A dose depende da idade, do peso e de outras condições de saúde, e deve ser definida por um profissional. Não se automedique nem repita a dose antes do intervalo indicado.',
          'Enquanto houver suspeita de dengue, evite aspirina (AAS), ibuprofeno, diclofenaco, naproxeno e fórmulas para gripe que contenham essas substâncias. Todos aumentam o risco de sangramento.',
          'Se houver vômitos repetidos, desidratação, sinais de alerta ou dengue grave, pode ser necessário soro na veia, observação na unidade de saúde ou internação. Antibióticos não têm efeito sobre o vírus, e corticoides e transfusões não são indicados de rotina.',
        ],
      },
      {
        id: 'complicacoes',
        heading: 'Quais complicações podem surgir?',
        paragraphs: [
          'A complicação mais temida é o choque por extravasamento de plasma, que pode levar à falência da circulação. Sangramentos importantes, inclusive digestivos, também fazem parte da forma grave.',
          'O vírus e a resposta inflamatória podem comprometer órgãos. Miocardite e insuficiência cardíaca, encefalopatia ou encefalite, insuficiência renal aguda e lesão hepática grave são descritas em uma minoria dos pacientes e exigem cuidado hospitalar.',
          'Quem teve dengue pode sentir cansaço por algumas semanas. A maioria se recupera por completo, sem sequela, e a letalidade da forma grave cai muito quando o atendimento acontece cedo.',
        ],
      },
      {
        id: 'vida-diaria',
        heading: 'O que muda no dia a dia durante a recuperação?',
        paragraphs: [
          'A maioria das pessoas se recupera em uma ou duas semanas. O cansaço pode durar mais, e o retorno às atividades deve ser gradual: comece pelo que você dá conta e aumente conforme a energia volta.',
          'Durante a fase febril, fique em casa e evite novas picadas, para não alimentar o ciclo de transmissão. Use repelente e, se possível, durma com mosquiteiro.',
          'Volte ao serviço de saúde se os sintomas piorarem, se a febre voltar depois de dias sem ela, ou se aparecer falta de ar, sangramento, dor abdominal, tontura ou redução da urina.',
          'Álcool e exercício intenso devem esperar a recuperação completa. Só use remédios para dor com orientação, pelas mesmas razões que valem durante a fase aguda.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir a dengue?',
        paragraphs: [
          'Sem antiviral, a prevenção se apoia em duas frentes: reduzir o mosquito e evitar a picada. O controle do vetor é o principal método, segundo o Ministério da Saúde, e funciona melhor fora da temporada de surtos.',
          'O Aedes aegypti se cria em água limpa e parada, em qualquer recipiente. Os ovos resistem meses em superfícies secas, então não basta jogar a água fora: é preciso esfregar as paredes internas de vasos, caixas e tonéis.',
        ],
        bullets: [
          'Eliminar água parada em vasos, calhas, pneus e recipientes guardados',
          'Manter caixas d’água e tonéis tampados',
          'Limpar com frequência bebedouros de animais e ralos pouco usados',
          'Colocar areia nos pratinhos dos vasos ou retirá-los',
          'Guardar garrafas e baldes virados para baixo',
          'Manter piscinas tratadas e cobertas quando não estiverem em uso',
          'Verificar bandejas da geladeira e do ar-condicionado, que também acumulam água',
          'Usar repelente e roupas que cubram braços e pernas em áreas com transmissão',
          'Instalar telas em portas e janelas e usar mosquiteiro, sobretudo para bebês e pessoas acamadas',
        ],
        cta: {
          label: 'Veja o guia completo: como prevenir a dengue',
          href: '/artigos/como-prevenir-a-dengue/',
        },
      },
    ],
    faq: [
      {
        question: 'Dengue pega de outra pessoa?',
        answer:
          'Não. A transmissão ocorre pela picada do Aedes aegypti infectado, não pelo contato direto entre pessoas, por alimentos ou por água.',
      },
      {
        question: 'Quem já teve dengue pode ter de novo?',
        answer:
          'Sim. Como existem quatro sorotipos do vírus, uma nova infecção por um sorotipo diferente é possível, e a segunda infecção aumenta o risco de a doença evoluir para a forma grave.',
      },
      {
        question: 'Quanto tempo dura a dengue?',
        answer:
          'Os sintomas agudos costumam durar de dois a sete dias, e a maioria das pessoas se recupera em uma ou duas semanas. Cansaço e fraqueza podem persistir por mais tempo.',
      },
      {
        question: 'É possível ter dengue sem febre?',
        answer:
          'Sim. A febre pode ser baixa ou até não aparecer em algumas pessoas, e o uso de antitérmicos também pode reduzir a temperatura por algum tempo.',
      },
      {
        question: 'Dengue dá coceira?',
        answer:
          'Pode. A coceira costuma aparecer junto com as manchas ou durante a recuperação. Se for intensa, procure orientação antes de usar medicamentos ou cremes por conta própria.',
      },
      {
        question: 'Dengue baixa as plaquetas?',
        answer:
          'Pode baixar ao longo da doença, mas a gravidade não é definida só pelo número de plaquetas. O estado geral, a pressão arterial, a hidratação e outros exames também são avaliados.',
      },
      {
        question: 'Pode tomar ibuprofeno com suspeita de dengue?',
        answer:
          'Não é recomendado. O ibuprofeno, a aspirina e outros anti-inflamatórios podem aumentar o risco de sangramento. Procure orientação para escolher uma opção segura.',
      },
      {
        question: 'Dengue pode matar?',
        answer:
          'Sim, embora a maioria dos casos evolua bem. A forma grave pode levar a choque, sangramento intenso e falência de órgãos, e o risco cai muito quando o atendimento acontece cedo. Por isso, sinais de alerta exigem avaliação imediata.',
      },
      {
        question: 'Existe algum alimento ou suco que aumente as plaquetas?',
        answer:
          'Não há alimento ou bebida com comprovação de que eleve as plaquetas de forma imediata. Alimentação leve e boa hidratação ajudam na recuperação, mas não substituem o acompanhamento clínico.',
      },
      {
        question: 'Dengue tem cura?',
        answer:
          'Na maioria dos casos, o próprio organismo elimina o vírus e a pessoa se recupera com hidratação, repouso e acompanhamento. Não há antiviral específico, e o mais importante é observar os sinais de alerta e tratar rapidamente qualquer complicação.',
      },
      {
        question: 'Existe vacina contra dengue no SUS?',
        answer:
          'Sim. A vacina foi incorporada ao SUS em dezembro de 2023 e é oferecida em municípios selecionados por critérios de transmissão, para crianças e adolescentes de 10 a 14 anos, em duas doses com intervalo de três meses. O público e a lista de municípios são revistos a cada ano, então confirme na UBS da sua região.',
      },
    ],
    relatedArticleSlugs: [
      'sintomas-iniciais-da-dengue',
      'como-prevenir-a-dengue',
      'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue',
      'dengue-pode-matar',
      'dengue-segunda-infeccao',
    ],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['chikungunya', 'zika', 'malaria'],
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
          'A insulina é o hormônio que leva a glicose dos alimentos para dentro das células, onde ela é transformada em energia. Quando esse processo falha, a glicose se acumula no sangue e, ao longo dos anos, passa a prejudicar os vasos sanguíneos e os nervos.',
          'A glicemia é medida em mg/dL, e considera-se normal, em jejum, um valor abaixo de 100 mg/dL. Como a doença se desenvolve de forma gradual e silenciosa, muitas pessoas descobrem a alteração em um exame de rotina.',
        ],
      },
      {
        id: 'o-quanto-e-comum',
        heading: 'Quanto o diabetes é comum?',
        paragraphs: [
          'O diabetes é uma das condições crônicas mais frequentes no mundo. Segundo a Organização Mundial da Saúde, o número de pessoas que vivem com a doença passou de 200 milhões em 1990 para cerca de 830 milhões em 2022, e o crescimento é mais rápido nos países de renda baixa e média. Só em 2022, cerca de 14% dos adultos com 18 anos ou mais viviam com diabetes.',
          'No Brasil, o Ministério da Saúde estima, com base na Sociedade Brasileira de Diabetes, mais de 13 milhões de pessoas com a doença, o que representa cerca de 6,9% da população. O tipo 2 responde por cerca de 9 em cada 10 casos.',
          'Como o tipo 2 costuma ser silencioso por anos, boa parte das pessoas descobre a doença tarde, às vezes já com alguma complicação instalada. O rastreio depende de medidas simples de glicemia, e é por isso que quem tem fatores de risco deve conversar com a equipe de saúde sobre a periodicidade dos exames.',
        ],
      },
      {
        id: 'tipos-de-diabetes',
        heading: 'Quais são os tipos de diabetes?',
        paragraphs: [
          'Os tipos mais frequentes são o tipo 1, o tipo 2 e o diabetes gestacional. Também existe a pré-diabetes, uma fase intermediária que antecede a doença.',
        ],
        bullets: [
          'Diabetes tipo 1: o sistema imunológico ataca as células do pâncreas que produzem insulina. Costuma aparecer na infância e na adolescência, mas pode surgir em qualquer idade, e o tratamento exige insulina todos os dias.',
          'Diabetes tipo 2: o organismo ainda produz insulina, mas não a utiliza bem, o que se chama resistência à insulina, e com o tempo a produção também tende a diminuir. É o tipo mais comum e está associado a sobrepeso, sedentarismo, alimentação inadequada e histórico familiar.',
          'Diabetes gestacional: aparece durante a gravidez, quando a glicemia sobe acima do normal. Costuma ser detectado no pré-natal e, na maioria das vezes, melhora após o parto, mas a mulher passa a ter maior risco de desenvolver o tipo 2 mais tarde.',
          'Pré-diabetes: a glicemia está acima do normal, mas ainda não é alta o suficiente para confirmar a doença. É o momento em que as mudanças de hábito têm mais chance de evitar a evolução.',
        ],
      },
      {
        id: 'causas',
        heading: 'Quais são as causas do diabetes?',
        paragraphs: [
          'Cada tipo de diabetes tem uma origem diferente, e entender o mecanismo ajuda a entender por que o tratamento varia tanto de uma pessoa para outra.',
        ],
        bullets: [
          'Diabetes tipo 1: o sistema imunológico ataca as células do pâncreas que produzem insulina, e a produção cai a ponto de o corpo precisar de insulina injetável. A causa exata não é conhecida e não há como prevenir a doença.',
          'Diabetes tipo 2: o organismo passa a responder mal à própria insulina, o que se chama resistência à insulina, e com os anos a produção também diminui. A doença está ligada a sobrepeso, sedentarismo, triglicérides elevados, pressão alta e alimentação inadequada, além da predisposição genética.',
          'Diabetes gestacional: a glicemia sobe durante a gravidez e, na maioria das vezes, volta ao normal depois do parto. Ainda assim, a mulher e o bebê passam a ter risco maior de desenvolver diabetes tipo 2 mais tarde.',
          'Pré-diabetes: não é bem uma causa, e sim um estágio intermediário, em que a glicemia já está acima do normal, mas ainda não confirma a doença.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'O tipo 2 pode permanecer silencioso por anos. Quando há sintomas, costumam ser:',
          'Muitas pessoas descobrem a glicemia alterada em um exame de rotina ou só procuram ajuda quando já existe alguma complicação instalada.',
        ],
        bullets: [
          'Sede excessiva e necessidade frequente de urinar, inclusive à noite',
          'Fome frequente',
          'Cansaço e perda de peso sem causa aparente',
          'Visão embaçada',
          'Feridas e machucados que demoram a cicatrizar',
          'Formigamento, queimação ou dormência nos pés e nas mãos',
          'Infecções de repetição, como na bexiga, nos rins ou na pele',
          'Náuseas e vômitos',
        ],
        cta: {
          label: 'Leia também: como reconhecer os sinais do diabetes',
          href: '/artigos/diabetes-sinais-e-sintomas/',
        },
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Quem tem diabetes deve procurar um serviço de urgência, ou procurar atendimento de emergência, diante de sinais que podem indicar cetoacidose diabética ou estado hiperglicêmico hiperosmolar, duas emergências que exigem atendimento rápido:',
        ],
        bullets: [
          'Vômitos persistentes, dor abdominal e dificuldade para respirar',
          'Hálito com odor de fruta, sonolência intensa ou confusão mental',
          'Desmaio, convulsão ou dificuldade para acordar',
          'Glicemia muito alta que não cai, mesmo com o tratamento em dia',
          'Em quem usa insulina, hipoglicemia grave com desmaio ou convulsão',
          'Sinais de glicose muito baixa, como tremores, suor frio e palidez',
        ],
        cta: {
          label: 'Leia também: o que fazer quando a glicemia cai',
          href: '/artigos/diabetes-hipoglicemia/',
        },
      },
      {
        id: 'fatores-de-risco',
        heading: 'Quais fatores aumentam o risco do diabetes tipo 2?',
        paragraphs: [
          'Algumas condições aumentam a chance de desenvolver o diabetes tipo 2. Quem tem um ou mais desses fatores deve conversar com a equipe de saúde sobre a necessidade de medir a glicemia periodicamente:',
        ],
        bullets: [
          'Histórico de diabetes em pais, irmãos ou parentes próximos',
          'Sobrepeso, principalmente com gordura acumulada na região da cintura',
          'Sedentarismo e alimentação rica em açúcar e gordura',
          'Pressão alta e colesterol ou triglicérides alterados',
          'Pré-diabetes',
          'Diabetes gestacional ou histórico de bebê com mais de 4 kg ao nascer',
          'Síndrome dos ovários policísticos',
          'Apneia do sono',
          'Uso prolongado de medicamentos glicocorticoides',
        ],
        cta: {
          label: 'Leia também: quem corre mais risco de ter diabetes',
          href: '/artigos/diabetes-fatores-de-risco/',
        },
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
          'O diagnóstico é confirmado por exames de sangue, e a interpretação cabe ao profissional de saúde. Em geral, quando um único exame aparece alterado, o resultado é repetido para confirmação, exceto quando há sintomas claros e glicemia muito elevada.',
          'Confirma o diabetes: glicemia de jejum, com pelo menos 8 horas de jejum, de 126 mg/dL ou mais; glicemia de 2 horas no teste de tolerância oral à glicose (TOTG com 75 g) de 200 mg/dL ou mais; glicemia medida ao acaso de 200 mg/dL ou mais junto com sintomas; ou hemoglobina glicada (HbA1c) de 6,5% ou mais.',
          'Valores intermediários, que ainda não confirmam a doença, indicam pré-diabetes: glicemia de jejum entre 100 e 125 mg/dL, glicemia de 2 horas no TOTG entre 140 e 199 mg/dL, ou hemoglobina glicada entre 5,7% e 6,4%. Nessa faixa, o acompanhamento deve ser mais próximo.',
          'Para acompanhar o tratamento, a hemoglobina glicada é um dos exames mais usados, porque mostra a média da glicemia dos últimos meses. A meta costuma ficar em torno de 7%, mas o valor é definido caso a caso pelo profissional de saúde.',
          'No Brasil, o rastreio e o acompanhamento costumam começar na atenção básica, na unidade básica de saúde (UBS), com a equipe de clínico geral e de enfermagem. Quando o caso exige investigação mais específica, o paciente é encaminhado para avaliação com especialista.',
        ],
        cta: {
          label: 'Leia também: o que é pré-diabetes e o que fazer',
          href: '/artigos/diabetes-pre-diabetes/',
        },
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'O que pode ser confundido com diabetes?',
        paragraphs: [
          'Sentir muita sede e urinar com frequência não é exclusividade do diabetes: essas queixas podem ter outras causas, e só a medida da glicemia mostra se a origem é a doença.',
          'Uma glicemia alta isolada também não fecha o diagnóstico. Durante uma doença aguda, em situações de estresse ou com o uso de medicamentos corticoides, a glicose pode subir de forma passageira, e o valor precisa ser reavaliado com a pessoa já recuperada.',
          'Por isso, quando um único exame aparece alterado e não há sintomas claros, o resultado é repetido antes de confirmar a doença. Essa reavaliação evita tanto deixar um caso passar quanto tratar alguém que não tem diabetes.',
        ],
      },
      {
        id: 'complicacoes',
        heading: 'Quais complicações podem surgir ao longo do tempo?',
        paragraphs: [
          'A glicemia alta mantida por muitos anos danifica pequenos vasos sanguíneos e nervos, e é essa lesão que dá origem às complicações.',
          'Entre elas estão a retinopatia diabética, que compromete a visão e pode levar à cegueira; a nefropatia diabética, que reduz aos poucos a função dos rins; a neuropatia diabética, que causa dor, queimação ou perda de sensibilidade, principalmente nos pés; e o pé diabético, com feridas de difícil cicatrização e maior risco de infecção.',
          'Também são mais frequentes os problemas cardiovasculares, como infarto e AVC (derrame), e as infecções de repetição, pela maior dificuldade do organismo em se defender.',
          'Algumas dessas complicações começam antes de qualquer sintoma. Quem tem diabetes tipo 2 deve fazer o exame de fundo de olho logo após o diagnóstico, e quem tem tipo 1, após cinco anos de doença, repetindo a avaliação todo ano. O mesmo vale para o exame de urina em busca de albumina e para a avaliação da função dos rins.',
          'Cuidar dos pés faz parte da rotina: examine a planta dos pés, o espaço entre os dedos e as unhas, use calçados que não apertem e evite andar descalço, inclusive em casa.',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento combina alimentação adequada, atividade física, monitoramento da glicose e, quando indicado, medicamentos, sempre ajustados ao tipo da doença e às condições de cada pessoa. O acompanhamento contínuo é o que evita complicações nos olhos, rins, nervos e sistema cardiovascular.',
          'As metas são definidas caso a caso, mas em geral buscam manter a hemoglobina glicada em torno de 7% e a glicemia dentro de faixas seguras, além de controlar pressão, colesterol e peso. Metas mais rígidas ou mais flexíveis dependem da idade, de outras doenças e do risco de hipoglicemia.',
          'No diabetes tipo 1, o tratamento exige insulina todos os dias, aplicada na camada de gordura logo abaixo da pele, nas coxas, no abdômen, nos braços ou nos glúteos, variando o local. O tipo e a dose são definidos pelo profissional de saúde.',
          'No diabetes tipo 2, o tratamento começa por mudanças no estilo de vida e, quando necessário, inclui medicamentos orais. A metformina costuma ser o primeiro remédio indicado, e existem outras classes, como as sulfonilureias, os inibidores do SGLT2 e os inibidores que reduzem a absorção de carboidratos no intestino. A escolha depende da glicemia, de outras doenças e do risco de efeitos colaterais.',
          'O acompanhamento da glicemia em casa, com o glicosímetro, ajuda a entender como a doença responde à alimentação, à atividade física e aos medicamentos. A frequência das medições varia conforme o tipo de diabetes e o tratamento e é orientada pela equipe de saúde.',
          'No SUS, o tratamento é gratuito: a metformina, a glibenclamida, a glicazida e as insulinas NPH e regular estão disponíveis nas unidades básicas de saúde, e o programa Farmácia Popular também distribui esses medicamentos sem custo em farmácias credenciadas. Em algumas unidades também há glicosímetro, tiras reagentes e seringas para a aplicação da insulina.',
          'Em casos selecionados de diabetes tipo 2 com obesidade importante, a cirurgia bariátrica pode ser uma alternativa, sempre indicada por uma equipe de saúde após uma avaliação completa.',
        ],
      },
      {
        id: 'cuidados-diarios',
        heading: 'Quais cuidados fazem parte da rotina?',
        paragraphs: [
          'Conviver com diabetes envolve cuidados simples que se repetem todos os dias e são decisivos para evitar complicações. Boa parte deles não depende de tecnologia, e sim de rotina.',
        ],
        bullets: [
          'Medir a glicemia conforme a orientação da equipe de saúde, anotando os valores com data e horário para levar às consultas',
          'Não interromper nem ajustar medicamentos por conta própria, mesmo quando a glicemia parece boa',
          'Manter alimentação regular, sem pular refeições, e a atividade física como parte da rotina',
          'Redobrar a atenção em dias de febre, vômito ou infecção, quando a glicemia pode descompensar; nesses casos, procure orientação',
          'Levar sempre um documento que identifique a condição e uma fonte rápida de açúcar, para o caso de hipoglicemia',
        ],
        cta: {
          label: 'Leia também: o que muda no dia a dia com diabetes tipo 2',
          href: '/artigos/diabetes-tipo-2-o-que-muda-no-dia-a-dia/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir o risco de diabetes tipo 2?',
        paragraphs: [
          'No caso do tipo 2, mudanças de hábito têm impacto relevante:',
        ],
        bullets: [
          'Manter alimentação variada, com menos açúcar, sal e ultraprocessados, e mais frutas, verduras e grãos integrais',
          'Praticar pelo menos 150 minutos por semana de atividade física de intensidade moderada, como caminhada',
          'Perder peso quando houver sobrepeso, mesmo que a perda seja pequena',
          'Acompanhar peso e circunferência abdominal',
          'Não fumar e moderar o consumo de álcool',
          'Manter pressão, colesterol e triglicérides sob controle',
          'Fazer exames periódicos, sobretudo com histórico familiar',
        ],
      },
      {
        id: 'vacinacao',
        heading: 'Vacinas indicadas',
        paragraphs: [
          'Quem tem diabetes faz parte dos grupos prioritários da campanha anual de vacinação contra a gripe, e as infecções respiratórias podem descompensar a glicemia. Para receber a dose, leve à unidade de saúde um documento que comprove a condição, como receita, laudo médico ou cartão de acompanhamento. Na mesma visita, vale verificar com a equipe de saúde quais outras vacinas estão indicadas para o seu caso.',
        ],
      },
    ],
    faq: [
      {
        question: 'Diabetes é contagioso?',
        answer:
          'Não. O diabetes não é transmitido pelo contato entre pessoas, pelo ar, por alimentos ou por objetos. Ele surge de uma combinação de fatores genéticos, do funcionamento do próprio organismo e de hábitos de vida.',
      },
      {
        question: 'Diabetes tem cura?',
        answer:
          'Não existe cura para o diabetes, mas a doença pode ser controlada. Com tratamento adequado, alimentação saudável, atividade física e acompanhamento regular, a maioria das pessoas consegue manter a glicemia próxima do normal e reduzir o risco de complicações. Alguns casos de diabetes tipo 2 podem entrar em remissão com tratamento e mudanças de hábito.',
      },
      {
        question: 'Quais valores de glicemia indicam diabetes?',
        answer:
          'O diagnóstico é confirmado quando a glicemia de jejum é 126 mg/dL ou mais, quando a glicemia de 2 horas no TOTG é 200 mg/dL ou mais, quando a glicemia medida ao acaso é 200 mg/dL ou mais na presença de sintomas, ou quando a hemoglobina glicada é 6,5% ou mais.',
      },
      {
        question: 'Quem tem diabetes pode comer doce?',
        answer:
          'Pode, mas com moderação e planejamento. O ideal é conversar com o profissional de saúde ou com o nutricionista sobre a quantidade e os momentos mais adequados, e acompanhar a glicemia depois. Alimentos com açúcar não são proibidos, mas devem se encaixar no planejamento alimentar.',
      },
      {
        question: 'O que fazer em uma queda da glicemia?',
        answer:
          'A hipoglicemia costuma causar tremor, sudorese, palidez, fome repentina, tontura, palpitação e confusão. Se a pessoa estiver consciente, deve consumir algo doce de ação rápida e medir a glicemia novamente em seguida. Se houver desmaio, convulsão ou dificuldade para acordar, procure atendimento de emergência imediatamente, porque é uma emergência.',
      },
      {
        question: 'Comer muito açúcar causa diabetes?',
        answer:
          'Não é uma relação direta e simples. O desenvolvimento do tipo 2 envolve fatores genéticos, excesso de peso, sedentarismo e outros elementos; o consumo excessivo de açúcar contribui para o ganho de peso e para o aumento do risco.',
      },
    ],
    relatedArticleSlugs: [
      'diabetes-tipo-2-o-que-muda-no-dia-a-dia',
      'diabetes-sinais-e-sintomas',
      'diabetes-fatores-de-risco',
      'diabetes-pre-diabetes',
      'diabetes-hipoglicemia',
    ],
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
      {
        label: 'Tratamento da hipoglicemia (baixa de açúcar no sangue)',
        url: 'https://www.cdc.gov/diabetes/treatment/treatment-low-blood-sugar-hypoglycemia.html',
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
          'A pressão é medida em milímetros de mercúrio (mmHg) e registrada em dois números: a sistólica, que é a máxima, medida quando o coração se contrai, e a diastólica, que é a mínima, medida entre uma batida e outra.',
          'A pressão arterial depende da força com que o coração bombeia o sangue e da resistência que as artérias oferecem à passagem dele. Quando as artérias ficam mais estreitas ou o coração bombeia com mais força, a pressão sobe; na hipertensão, esse mecanismo deixa de se ajustar bem e a pressão permanece alta ao longo do dia e da noite, inclusive em repouso.',
          'Na maior parte das pessoas, a pressão alta não provoca sintoma nenhum durante anos e costuma ser descoberta em um exame de rotina. Quando fica elevada sem controle por muito tempo, prejudica aos poucos o coração, o cérebro, os rins e os olhos, e aumenta o risco de infarto, derrame e insuficiência renal. Cerca de 3 em cada 10 adultos brasileiros têm pressão alta, segundo o Vigitel 2023, do Ministério da Saúde.',
        ],
      },
      {
        id: 'epidemiologia',
        heading: 'Quanta gente tem pressão alta?',
        paragraphs: [
          'A hipertensão está entre as condições crônicas mais comuns. No Brasil, cerca de 3 em cada 10 adultos vivem com pressão alta, e uma parte deles não sabe que tem a doença. O Ministério da Saúde estima que a hipertensão esteja ligada a cerca de 388 mortes por dia no país, sobretudo por suas complicações cardiovasculares.',
          'No mundo, a Organização Mundial da Saúde calcula que cerca de 1,4 bilhão de adultos entre 30 e 79 anos tenham pressão alta, e que quase metade não tenha diagnóstico. A maior parte desses casos está em países de renda baixa e média.',
          'A doença fica mais frequente com o avançar da idade, em pessoas com diabetes ou doença renal e em pessoas negras. Ter parentes próximos com pressão alta também aumenta bastante o risco, o que reforça a importância de medir a pressão com regularidade mesmo sem sentir nada.',
        ],
      },
      {
        id: 'valores-de-referencia',
        heading: 'Quais valores indicam pressão alta?',
        paragraphs: [
          'A classificação usada no Brasil segue a Sociedade Brasileira de Cardiologia, indo da faixa ideal até os estágios mais altos da doença.',
          'Quando a sistólica e a diastólica ficam em faixas diferentes, vale o número mais alto para definir a classificação. A pré-hipertensão é uma faixa de alerta: ainda não confirma a doença, mas exige acompanhamento e mudanças de hábito, porque a chance de evoluir para hipertensão é maior.',
        ],
        bullets: [
          'Ótima: menos de 120 por 80 mmHg',
          'Normal: 120 a 129 por 80 a 84 mmHg',
          'Pré-hipertensão: 130 a 139 por 85 a 89 mmHg',
          'Hipertensão estágio 1: 140 a 159 por 90 a 99 mmHg',
          'Hipertensão estágio 2: 160 a 179 por 100 a 109 mmHg',
          'Hipertensão estágio 3: 180 ou mais por 110 ou mais mmHg',
        ],
      },
      {
        id: 'tipos-de-hipertensao',
        heading: 'Quais são os tipos de hipertensão?',
        paragraphs: [
          'Na hipertensão primária, que responde por cerca de 9 em cada 10 casos, não existe uma causa única. A pressão sobe pela combinação de fatores genéticos, idade e hábitos de vida, e o tratamento se concentra em controlar esses fatores e, quando necessário, usar medicamentos.',
          'Na hipertensão secundária, que representa cerca de 1 em cada 10 casos, existe uma doença por trás da pressão alta. Entre as causas estão doenças dos rins, distúrbios hormonais como o hiperaldosteronismo e o feocromocitoma, estreitamento da artéria que leva sangue ao rim, apneia do sono e o uso de alguns medicamentos, como anticoncepcionais e anti-inflamatórios. Tratar a causa pode reduzir e até resolver a pressão alta, e por isso a investigação é feita principalmente em pessoas mais jovens ou que não respondem bem ao tratamento.',
          'Dois padrões de medida podem confundir o diagnóstico. Na hipertensão do avental branco, a pressão sobe apenas quando é medida no consultório, por causa do nervosismo, e fica normal no restante do dia. Na hipertensão mascarada, acontece o contrário: a medida no consultório é normal, mas a pressão é alta em casa ou ao longo do dia.',
          'Já a hipertensão na gravidez surge durante a gestação, geralmente depois da 20ª semana, e pode evoluir para a pré-eclâmpsia, uma condição que exige acompanhamento próximo do pré-natal.',
        ],
      },
      {
        id: 'causas',
        heading: 'O que causa a pressão alta?',
        paragraphs: [
          'Na maior parte dos casos, a pressão alta não tem uma causa única. Ela surge da soma de fatores genéticos, idade e hábitos de vida, o que é chamado de hipertensão primária. O peso da herança é grande: segundo o Ministério da Saúde, a doença é herdada dos pais em cerca de 9 em cada 10 casos.',
          'Isso não significa que a pressão alta seja inevitável em quem tem casos na família. Significa que esses fatores merecem mais atenção ao longo dos anos, com medida regular da pressão e mudanças de hábito que reduzem o risco.',
          'Em uma parte menor dos casos, a pressão alta é consequência de outra condição, a hipertensão secundária. Como já citado nos tipos da doença, entre as causas estão doenças dos rins e distúrbios hormonais, além do uso de certos medicamentos, e por isso a investigação é feita principalmente em pessoas mais jovens ou que não respondem bem ao tratamento.',
        ],
      },
      {
        id: 'fatores-de-risco',
        heading: 'Quais fatores aumentam o risco?',
        paragraphs: [
          'A hipertensão resulta da soma de vários fatores, e quem tem um ou mais deles deve medir a pressão com regularidade na unidade de saúde, mesmo sem sentir nada. Os mais relevantes são:',
        ],
        bullets: [
          'Histórico de pressão alta em pais, irmãos ou outros parentes próximos',
          'Idade mais avançada, já que a pressão tende a subir com o passar dos anos',
          'Excesso de peso, principalmente com gordura acumulada na região da cintura',
          'Alimentação com muito sal e pouco potássio',
          'Consumo frequente de álcool',
          'Sedentarismo, ou seja, pouca atividade física no dia a dia',
          'Tabagismo',
          'Estresse prolongado',
          'Apneia do sono',
          'Diabetes, colesterol alto e doença renal crônica',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'A hipertensão costuma ser silenciosa: a maioria das pessoas não apresenta sintoma nenhum, principalmente nos estágios iniciais, e pode conviver com a pressão alta por anos sem perceber. Muitas vezes ela é descoberta em um exame de rotina.',
          'Quando algo aparece, os sinais mais comuns são dor de cabeça, muitas vezes na região da nuca e ao acordar, tontura, cansaço e falta de energia, palpitação ou sensação de coração acelerado, visão embaçada e zumbido no ouvido.',
          'Esses sintomas não são confiáveis para dizer se a pressão está alta ou controlada: é possível ter uma pressão muito elevada sem sentir nada e sentir dor de cabeça com a pressão normal. Por isso, o controle depende da medida, e não da sensação.',
          'Quando a pressão alta já vem causando dano ao organismo, podem surgir outros sinais, que se somam aos anteriores. É o caso de falta de ar aos esforços, dor no peito, inchaço nas pernas, piora da visão ou menos urina que o habitual. Esses sintomas indicam que algum órgão pode estar sendo afetado e pedem avaliação, sem serem atribuídos apenas à pressão.',
        ],
        cta: {
          label: 'Leia também: por que a pressão alta é perigosa mesmo sem sintomas',
          href: '/artigos/hipertensao-perigo-mesmo-sem-sintomas/',
        },
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Uma pressão muito alta, em geral a partir de 180/120 mmHg, acompanhada de alguns sintomas, é uma emergência médica. Em gestantes, dor de cabeça intensa, visão borrada, inchaço que piora de repente ou convulsão também exigem atendimento imediato.',
          'Nesses casos, procure atendimento de emergência imediatamente, sobretudo diante de:',
        ],
        bullets: [
          'Dor no peito, que pode irradiar para o braço ou para a mandíbula',
          'Falta de ar ou dificuldade para respirar',
          'Dor de cabeça muito forte e súbita',
          'Fraqueza ou dormência em um lado do corpo, boca torta ou dificuldade para falar',
          'Perda de visão ou visão muito embaçada de repente',
          'Confusão mental, convulsão ou desmaio',
          'Urinar muito menos que o habitual',
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
          'O diagnóstico começa pela medida da pressão no consultório e depende de medições repetidas, feitas em condições adequadas e em datas diferentes. Em geral, ele é confirmado quando a pressão é igual ou maior que 140/90 mmHg em pelo menos duas ocasiões, sem que a pessoa esteja usando medicamento para pressão.',
          'Também são usadas medidas feitas fora do consultório, que ajudam a afastar o efeito do nervosismo e a acompanhar a pressão ao longo do dia. Na medida residencial (MRPA), a média de 130/80 mmHg ou mais confirma a hipertensão; na monitorização ambulatorial de 24 horas (MAPA), vale o mesmo valor na média das 24 horas, sendo 135/85 mmHg no período de vigília e 120/70 mmHg no período de sono.',
          'Para que o resultado seja confiável, a medida precisa ser feita com técnica correta: descansar sentado por pelo menos 5 minutos antes, manter o braço apoiado na altura do coração e usar um aparelho de braço certificado. Na primeira consulta, costuma-se medir os dois braços e usar como referência o lado com valores mais altos.',
          'Depois de confirmar a hipertensão, o profissional investiga o impacto da doença e procura possíveis causas. Entre os exames de rotina estão a glicemia, o colesterol e os triglicérides, a creatinina e outros marcadores da função dos rins, os eletrólitos do sangue, a análise da urina e o eletrocardiograma; conforme o caso, podem ser pedidos ecocardiograma, exame de fundo de olho, ultrassonografia dos rins e testes para causas secundárias.',
          'Antes de fechar o diagnóstico, também é preciso afastar outras situações que confundem o quadro, como a pressão que sobe apenas pelo nervosismo no consultório ou a que só aparece fora dele. Além disso, valores altos podem ser consequência de outra doença ou de um medicamento em uso, e não o problema principal. Separar esses casos muda a conduta e evita tratar como hipertensão algo que tem outra origem.',
        ],
        cta: {
          label: 'Leia também: como medir a pressão arterial em casa',
          href: '/artigos/hipertensao-como-medir-a-pressao-em-casa/',
        },
      },
      {
        id: 'complicacoes',
        heading: 'Quais complicações podem surgir ao longo do tempo?',
        paragraphs: [
          'A pressão alta mantida por muitos anos desgasta as artérias e sobrecarrega órgãos importantes. Muitas dessas complicações se desenvolvem sem aviso, e manter a pressão sob controle é a forma mais eficaz de reduzir esse risco. As mais frequentes são:',
        ],
        bullets: [
          'Coração: infarto, insuficiência cardíaca e aumento do músculo do coração',
          'Cérebro: derrame (AVC), ataques isquêmicos transitórios e declínio da memória',
          'Rins: doença renal crônica, que reduz aos poucos a capacidade de filtrar o sangue',
          'Olhos: retinopatia hipertensiva, que danifica a visão e pode levar à perda permanente',
          'Aorta: aneurisma e dissecção, situações graves que exigem cirurgia',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento combina mudanças no estilo de vida e, quando preciso, medicamentos. As metas de pressão são definidas caso a caso: em geral, manter a pressão abaixo de 140/90 mmHg, sem deixá-la cair abaixo de 120/70 mmHg; para pessoas com diabetes, doença renal crônica, doença coronariana, insuficiência cardíaca ou que já tiveram um AVC, a meta costuma ser mais apertada, abaixo de 130/80 mmHg; e, em idosos e pessoas frágeis, o alvo é individualizado, para evitar quedas e efeitos do excesso de redução.',
          'As mudanças de hábito fazem parte do tratamento em todos os casos e podem, sozinhas, reduzir a pressão: limitar o sódio a menos de 2 g por dia, o equivalente a cerca de 5 g de sal, ficando atento ao sal escondido em temperos prontos, embutidos e alimentos industrializados; manter alimentação rica em frutas, verduras e grãos integrais, com menos gordura saturada; praticar pelo menos 150 minutos por semana de atividade física de intensidade moderada; perder peso quando há excesso, buscando um índice de massa corporal abaixo de 25; moderar o consumo de álcool e parar de fumar; e dormir bem e cuidar do estresse.',
          'A escolha do medicamento depende da saúde de cada pessoa, e muitas precisam de dois ou mais remédios combinados para atingir a meta. Os grupos mais usados são os diuréticos (como hidroclorotiazida e clortalidona, que ajudam a eliminar sal e água pela urina e pedem monitoramento do potássio); os inibidores da enzima conversora, os IECA (como captopril e enalapril, que podem causar tosse seca); os bloqueadores do receptor de angiotensina, os BRA (como a losartana, usados quando o IECA provoca tosse); os bloqueadores dos canais de cálcio (como anlodipino e nifedipino, que podem causar inchaço nos tornozelos e dor de cabeça); e os betabloqueadores (como atenolol, metoprolol e propranolol, indicados em situações como doença coronariana e arritmia).',
          'Os remédios não devem ser usados por conta própria nem compartilhados. Quem tem a pressão controlada por um medicamento não deve interrompê-lo sem orientação, porque a pressão tende a subir de novo quando o efeito passa. Interromper a medicação por conta própria é um dos erros mais comuns e mais perigosos.',
          'No SUS, o acompanhamento da hipertensão é feito principalmente na atenção básica, nas unidades básicas de saúde (UBS), com consultas, medidas de pressão, orientação e fornecimento gratuito de medicamentos. Entre os remédios oferecidos estão a hidroclorotiazida, a furosemida, a espironolactona, o captopril, o enalapril, a losartana, o anlodipino, o nifedipino, o atenolol, o metoprolol e o propranolol. Desde fevereiro de 2025, o Programa Farmácia Popular passou a distribuir sem custo todos os medicamentos de hipertensão do seu catálogo, em farmácias credenciadas.',
          'Em casos de difícil controle, com suspeita de causa secundária ou complicações, o paciente é encaminhado para avaliação com especialista.',
          'O primeiro contato costuma ser a unidade básica de saúde (UBS) de referência, onde o tratamento pode ser iniciado e acompanhado. Diante de sinais de emergência, o atendimento é feito no pronto atendimento mais próximo ou pelo SAMU 192, no telefone 192.',
          'Controlar a pressão alta também passa por cuidar dos fatores que costumam andar juntos, como colesterol alto, diabetes e tabagismo. Quando existe indicação, o especialista pode recorrer a outros tratamentos e procedimentos; essas decisões são individuais e dependem da causa e das condições de cada pessoa.',
        ],
        cta: {
          label: 'Leia também: quais são as metas de pressão',
          href: '/artigos/hipertensao-metas-de-pressao/',
        },
      },
      {
        id: 'crise-hipertensiva',
        heading: 'Crise hipertensiva: o que fazer',
        paragraphs: [
          'Uma crise hipertensiva acontece quando a pressão sobe de forma abrupta, em geral a partir de 180/120 mmHg. Ela pode vir acompanhada de sintomas ou acontecer sem nenhum aviso.',
          'Quando a pressão muito alta se soma a dor no peito, falta de ar, dor de cabeça súbita e intensa, alterações na visão, confusão ou fraqueza em um lado do corpo, trata-se de uma emergência médica. Esses sinais podem indicar lesão em órgãos como coração, cérebro e rins e exigem atendimento imediato: procure o pronto atendimento mais próximo ou ligue para o SAMU 192.',
          'Nessa situação, não tome remédio extra por conta própria, não dobre a dose e não use a medicação de outra pessoa. Baixar a pressão rápido demais, fora do hospital, pode ser perigoso.',
          'Se a medida está muito alta, mas você não tem nenhum desses sintomas, descanse alguns minutos, respire fundo e meça de novo. Se o valor continuar alto, procure atendimento no mesmo dia para reavaliar o tratamento.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'Manter hábitos saudáveis é a principal forma de prevenir a pressão alta, principalmente em quem tem histórico familiar ou outros fatores de risco:',
        ],
        bullets: [
          'Reduzir o consumo de sal e evitar alimentos industrializados ricos em sódio',
          'Manter o peso saudável e a cintura dentro da medida recomendada',
          'Praticar atividade física com regularidade ao longo da semana',
          'Não fumar e moderar o consumo de bebidas alcoólicas',
          'Cuidar do sono e do estresse',
          'Medir a pressão periodicamente, mesmo sem sintomas',
        ],
        cta: {
          label: 'Leia também: alimentação e sal no controle da pressão',
          href: '/artigos/hipertensao-alimentacao-e-sal/',
        },
      },
      {
        id: 'cuidados-no-dia-a-dia',
        heading: 'Cuidados no dia a dia',
        paragraphs: [
          'Controlar a pressão alta é uma tarefa de rotina, não só de consulta. Alguns cuidados diários fazem diferença no resultado do tratamento:',
        ],
        bullets: [
          'Tomar os medicamentos todos os dias, no horário combinado, e não interromper sozinho quando a pressão normaliza',
          'Medir a pressão em casa com a técnica correta e anotar os valores para levar à consulta',
          'Levar o aparelho de pressão às consultas de acompanhamento, para conferir se ele está calibrado',
          'Manter uma rotina de alimentação com pouco sal, atividade física regular e sono adequado',
          'Voltar à unidade de saúde nas datas marcadas e sempre que surgirem sintomas novos',
          'Antes de viajar de avião, engravidar ou doar sangue, conversar com a equipe de saúde, porque a orientação depende do controle da pressão',
        ],
        cta: {
          label: 'Leia também: posso parar o remédio quando a pressão normaliza?',
          href: '/artigos/hipertensao-posso-parar-o-remedio/',
        },
      },
    ],
    faq: [
      {
        question: 'Pressão alta tem cura?',
        answer:
          'Na maioria dos casos, a hipertensão não tem cura, mas pode ser controlada. Com tratamento adequado e mudanças de hábito, a pressão se mantém em níveis seguros e o risco de complicações cai bastante. Em alguns casos de hipertensão secundária, tratar a causa pode normalizar a pressão.',
      },
      {
        question: 'Quais valores indicam pressão alta?',
        answer:
          'No consultório, a hipertensão é confirmada a partir de 140/90 mmHg em pelo menos duas ocasiões diferentes. Na medida residencial, feita em casa, a média a partir de 130/80 mmHg confirma o diagnóstico, e o mesmo vale para a média das 24 horas na monitorização ambulatorial.',
      },
      {
        question: 'Pressão alta dá sintoma?',
        answer:
          'Nem sempre. A maioria das pessoas não sente nada, e é possível ter uma pressão muito alta sem nenhum sinal. Quando aparecem, os sintomas mais comuns são dor de cabeça, tontura, cansaço, palpitação e visão embaçada, mas eles não são confiáveis para saber se a pressão está alta ou controlada.',
      },
      {
        question: 'Posso parar o remédio quando a pressão normaliza?',
        answer:
          'Não por conta própria. A pressão normaliza justamente porque o medicamento está funcionando, e interromper sem orientação faz a pressão voltar a subir e aumenta o risco de complicações. Só o profissional de saúde pode ajustar a dose ou trocar o remédio.',
      },
      {
        question: 'Como o sal influencia a pressão?',
        answer:
          'O excesso de sal é um dos principais fatores que elevam a pressão. A recomendação é limitar o sódio a menos de 2 g por dia, o equivalente a cerca de 5 g de sal. Boa parte do sal consumido não vem do saleiro, e sim de temperos prontos, embutidos, conservas e alimentos industrializados.',
      },
      {
        question: 'Existe vacina contra a hipertensão?',
        answer:
          'Não. Não existe vacina para prevenir ou tratar a hipertensão. A prevenção e o controle dependem de hábitos saudáveis, do acompanhamento regular na unidade de saúde e do uso correto dos medicamentos quando eles são indicados.',
      },
    ],
    relatedArticleSlugs: [
      'hipertensao-como-medir-a-pressao-em-casa',
      'hipertensao-perigo-mesmo-sem-sintomas',
      'hipertensao-metas-de-pressao',
      'hipertensao-posso-parar-o-remedio',
      'hipertensao-alimentacao-e-sal',
    ],
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
    updatedAt: '2026-10-20',
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
      'Infecção viral transmitida pelos mosquitos Aedes aegypti e Aedes albopictus. A marca é a dor nas articulações, que pode durar semanas ou meses.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é chikungunya?',
        paragraphs: [
          'Chikungunya é uma arbovirose, ou seja, uma doença viral transmitida por mosquitos. Ela é causada pelo vírus chikungunya (CHIKV), transmitido pela picada dos mosquitos Aedes aegypti e Aedes albopictus, os mesmos que transmitem dengue e zika.',
          'O nome vem de uma expressão africana que descreve a postura curvada de quem sente dor nas articulações. Esse é o traço que diferencia a chikungunya das outras arboviroses: a dor articular costuma ser intensa, pode ser incapacitante e pode se prolongar bem depois de a febre passar.',
          'O vírus circula no Brasil desde 2014 e hoje há transmissão em todos os estados, com surtos que costumam aumentar nos meses mais quentes e chuvosos. A maioria das pessoas se recupera por completo, mas uma parcela menor evolui com complicações neurológicas, cardíacas ou renais, e os casos graves podem exigir internação.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como a chikungunya é transmitida?',
        paragraphs: [
          'A transmissão acontece pela picada de um mosquito fêmea infectado, principalmente durante o dia. O vírus passa para o mosquito quando ele pica uma pessoa durante o período em que o vírus está circulando no sangue, que costuma durar cerca de uma semana a partir do início dos sintomas. Depois de alguns dias, o mosquito se torna capaz de transmitir o vírus a outras pessoas ao picá-las.',
          'A chikungunya não passa pelo contato do dia a dia, como abraço, beijo ou tosse, nem pelo ar. A transmissão de mãe para filho existe, mas é rara e acontece quase sempre durante o parto, quando a gestante está com o vírus no sangue. Nesse caso, o recém-nascido pode desenvolver uma forma grave e precisa de acompanhamento hospitalar.',
          'O Aedes aegypti pica principalmente durante o dia e vive perto das casas, em qualquer recipiente que acumule água parada. Por isso, o risco aumenta em períodos de calor e chuva, em áreas urbanas e onde há acúmulo de recipientes.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os sintomas costumam surgir de 4 a 8 dias depois da picada, podendo aparecer entre o 2º e o 12º dia. O início é abrupto e a febre alta é frequente.',
          'A dor nas articulações é o que mais caracteriza a chikungunya. Ela pode ser tão forte que dificulta movimentos simples, como segurar um objeto ou andar, costuma piorar com o esforço e tender a ser mais intensa pela manhã. Em geral, atinge mãos, punhos, tornozelos e pés, mas também pode afetar joelhos e ombros.',
        ],
        bullets: [
          'Febre alta de início súbito',
          'Dor intensa nas articulações, às vezes com inchaço',
          'Dor nas costas e dor muscular',
          'Manchas vermelhas na pele, com ou sem coceira',
          'Dor de cabeça e dor atrás dos olhos',
          'Conjuntivite sem secreção',
          'Náuseas, vômitos e, em crianças, diarreia ou dor abdominal',
          'Dor de garganta e calafrios',
        ],
        cta: {
          label: 'Leia também: quanto tempo dura a dor nas articulações da chikungunya',
          href: '/artigos/chikungunya-dor-nas-articulacoes-quanto-tempo-dura/',
        },
      },
      {
        id: 'fases-da-chikungunya',
        heading: 'As três fases da doença',
        paragraphs: [
          'A chikungunya costuma evoluir em três fases:',
        ],
        bullets: [
          'Fase aguda (febril): dura de 5 a 14 dias. É o período em que aparecem a febre, a dor nas articulações e os demais sintomas.',
          'Fase pós-aguda: vai do 15º ao 90º dia. Muitas pessoas ainda sentem dor e rigidez nas articulações, mesmo com a febre já controlada.',
          'Fase crônica: ocorre quando os sintomas persistem por mais de 90 dias. Em mais da metade dos casos, a dor nas articulações se torna crônica e pode permanecer por anos.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'A chikungunya costuma ser uma doença que melhora sozinha, mas as formas graves podem surgir de forma rápida. A melhora da febre nem sempre significa que o quadro está controlado: se os sintomas piorarem ou surgirem novos sinais, volte ao serviço de saúde para reavaliação.',
          'Procure atendimento de urgência se surgir qualquer um destes sinais:',
        ],
        bullets: [
          'Vômitos persistentes',
          'Dor abdominal forte e contínua',
          'Sangramento nas gengivas ou no nariz, ou manchas roxas na pele',
          'Confusão mental, sonolência excessiva ou convulsões',
          'Fraqueza ou dificuldade para mover um lado do corpo',
          'Falta de ar, dor no peito ou palpitações',
          'Urinar muito menos que o habitual',
          'Pele e olhos amarelados',
        ],
        cta: {
          label: 'Veja os sinais de alerta da dengue, que são semelhantes',
          href: '/doencas/dengue/',
        },
      },
      {
        id: 'grupos-de-risco',
        heading: 'Quem tem mais risco de casos graves',
        paragraphs: [
          'A maioria das pessoas se recupera bem, mas alguns grupos têm maior chance de evoluir para formas graves.',
          'Nesses grupos, a doença pode levar a complicações e, em casos raros, ao óbito, por isso o acompanhamento médico deve ser mais próximo. Os principais são:',
        ],
        bullets: [
          'Recém-nascidos, principalmente os infectados no momento do parto ou picados nas primeiras semanas de vida',
          'Idosos, sobretudo os que têm diabetes, doenças do coração ou outras doenças crônicas',
          'Pessoas com a imunidade comprometida ou com doenças crônicas descompensadas',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico é feito por um médico, a partir dos sintomas, do exame físico e de um exame de sangue. Todos os testes necessários estão disponíveis no Sistema Único de Saúde (SUS), e o tipo de exame depende do dia da doença.',
        ],
        bullets: [
          'Até o 8º dia do início dos sintomas, pode ser feito o RT-PCR, que detecta o material genético do vírus',
          'A partir do 6º dia, pode ser feita a sorologia para anticorpos do tipo IgM',
          'O hemograma pode mostrar alterações leves, como redução de plaquetas e de leucócitos, mas serve de apoio e não confirma sozinho a chikungunya',
        ],
        cta: {
          label: 'Leia também: como diferenciar chikungunya e dengue',
          href: '/artigos/chikungunya-e-dengue-como-diferenciar/',
        },
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'Chikungunya, dengue ou zika: como diferenciar',
        paragraphs: [
          'As três doenças são transmitidas pelo mesmo mosquito e têm sintomas parecidos, o que torna a diferenciação difícil apenas pela aparência.',
          'Como a dengue pode provocar sangramentos graves, é importante que o médico descarte essa possibilidade antes de indicar certos medicamentos. Nunca use anti-inflamatórios por conta própria enquanto houver suspeita de dengue.',
        ],
        bullets: [
          'Dengue: febre alta de 4 a 7 dias, manchas vermelhas a partir do 4º dia em 30% a 50% dos casos, dor muscular frequente e dor articular leve',
          'Zika: febre ausente ou baixa de 1 a 2 dias, manchas vermelhas no 1º ou 2º dia em 90% a 100% dos casos, dor muscular e articular moderadas',
          'Chikungunya: febre alta de 2 a 3 dias, manchas vermelhas entre o 2º e o 5º dia em cerca de 50% dos casos, dor muscular menos frequente e dor articular intensa e incapacitante',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'Não existe antiviral específico contra o vírus da chikungunya. O tratamento alivia os sintomas e inclui repouso, ingestão de líquidos e medicamentos para a dor e a febre, sempre com orientação profissional.',
          'Para febre e dor, o profissional de saúde pode indicar dipirona ou paracetamol. Evite o ácido acetilsalicílico (aspirina) e os anti-inflamatórios não esteroides, como ibuprofeno, diclofenaco e nimesulida, porque aumentam o risco de sangramento, principalmente enquanto a dengue não é descartada. Corticoides também não devem ser usados sem indicação médica.',
          'Quando há dor persistente ou comprometimento das articulações, o médico pode recomendar fisioterapia para ajudar a recuperar os movimentos.',
        ],
        bullets: [
          'Descanse e beba bastante líquido ao longo do dia',
          'Prefira alimentos leves e evite bebidas alcoólicas',
          'Não tome remédios por conta própria',
          'Durante a primeira semana, proteja-se de picadas de mosquito para não infectar novos mosquitos e interromper a transmissão',
          'Volte ao serviço de saúde se os sintomas piorarem',
        ],
      },
      {
        id: 'recuperacao',
        heading: 'Recuperação e dores articulares que persistem',
        paragraphs: [
          'A maior parte das pessoas se recupera por completo em uma ou duas semanas. A dor e a rigidez nas articulações, no entanto, podem continuar por mais tempo e, em alguns casos, se tornar crônicas, com duração de meses a anos.',
          'Idade mais avançada e doenças crônicas aumentam a chance de a dor se prolongar. O acompanhamento com fisioterapia e o tratamento adequado da dor ajudam a manter a qualidade de vida durante essa fase. Também podem ocorrer complicações, como problemas oculares, cardíacos e neurológicos, que exigem avaliação médica.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'Não há antiviral específico, então a melhor forma de prevenção é impedir a reprodução do mosquito e evitar suas picadas. Reservar cerca de 10 minutos por semana para vistoriar o quintal é uma medida recomendada pelo Ministério da Saúde e ajuda a eliminar focos do mosquito.',
          'O repelente é considerado seguro na gravidez quando usado conforme as instruções do fabricante. Em crianças menores de 2 anos, ele só deve ser usado com orientação médica.',
        ],
        bullets: [
          'Tampar caixas d’água, tonéis e quaisquer reservatórios',
          'Não deixar água acumulada em vasos, calhas e ralos',
          'Colocar areia nos pratos das plantas',
          'Guardar garrafas e pneus virados para baixo ou em local coberto',
          'Manter o lixo fechado e descartar resíduos corretamente',
          'Usar repelente à base de DEET, IR3535 ou icaridina nas áreas expostas do corpo, seguindo as orientações do fabricante',
          'Vestir calças e camisas de manga comprida',
          'Instalar telas em portas e janelas e usar mosquiteiro, especialmente para crianças pequenas, pessoas acamadas e idosos',
        ],
      },
      {
        id: 'vacinacao',
        heading: 'Vacina contra a chikungunya no Brasil',
        paragraphs: [
          'O Brasil tem uma vacina contra a chikungunya registrada pela Anvisa. Desenvolvida pelo Instituto Butantan em parceria com a farmacêutica Valneva, ela foi aprovada em abril de 2025 e sua produção nacional foi autorizada em maio de 2026.',
          'A vacina está indicada para adultos de 18 a 59 anos com maior risco de exposição ao vírus e também pode ser aplicada em quem já teve a doença. Ela é contraindicada na gravidez e na amamentação e não deve ser usada em crianças.',
          'A vacina ainda não está disponível para toda a população. O Ministério da Saúde realiza uma estratégia piloto de vacinação, com aproximadamente 250 mil doses, em municípios selecionados segundo critérios epidemiológicos. Por isso, o controle do mosquito continua sendo a principal forma de prevenção para a maioria das pessoas.',
        ],
      },
    ],
    faq: [
      {
        question: 'Chikungunya pega de outra pessoa?',
        answer:
          'Não. A chikungunya não passa pelo contato do dia a dia, como abraço, beijo ou tosse, nem pelo ar; ela é transmitida pela picada do mosquito infectado. A transmissão de mãe para filho é rara, acontece quase sempre no momento do parto e não torna a chikungunya uma doença contagiosa entre pessoas.',
      },
      {
        question: 'A dor nas articulações passa?',
        answer:
          'Na maioria das pessoas a dor melhora em algumas semanas. Em mais da metade dos casos ela se prolonga e pode se tornar crônica, durando meses ou anos. O acompanhamento com profissional de saúde, com fisioterapia e tratamento adequado da dor, é o que orienta o cuidado.',
      },
      {
        question: 'Quanto tempo dura a chikungunya?',
        answer:
          'A fase aguda, com febre e dores, costuma durar de 5 a 14 dias. A dor nas articulações pode continuar por semanas, meses ou, em alguns casos, anos.',
      },
      {
        question: 'Qual remédio devo evitar?',
        answer:
          'Evite a aspirina e os anti-inflamatórios, como ibuprofeno, diclofenaco e nimesulida, por conta própria, porque aumentam o risco de sangramento enquanto a dengue não é descartada. Para febre e dor, use apenas dipirona ou paracetamol, seguindo a orientação de um profissional de saúde.',
      },
      {
        question: 'Quem já teve chikungunya pode ter de novo?',
        answer:
          'Depois de uma infecção, a pessoa tende a ficar protegida por um longo período, e novos episódios são considerados raros. Ainda assim, o mosquito continua sendo um risco para outras doenças transmitidas por ele, como dengue e zika.',
      },
      {
        question: 'Existe vacina disponível para todos no Brasil?',
        answer:
          'Existe uma vacina registrada no Brasil, mas ela é oferecida em uma estratégia piloto em municípios selecionados e não está disponível para toda a população. A prevenção continua dependendo do controle do mosquito e da proteção individual.',
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
          'Zika é uma arbovirose, ou seja, uma doença viral transmitida por mosquitos. Ela é causada pelo vírus zika, transmitido principalmente pela picada do mosquito Aedes aegypti, o mesmo que transmite dengue e chikungunya.',
          'O vírus ficou conhecido a partir do surto de 2015, quando o aumento de nascimentos com microcefalia foi relacionado à infecção e levou à declaração de emergência em saúde pública, primeiro no Brasil e depois internacionalmente. Desde então, o número de casos caiu bastante, mas o vírus continua circulando, com registro de casos todos os anos e maior atividade nos meses mais quentes e chuvosos.',
          'A infecção costuma ser leve e muitas pessoas não apresentam sintoma nenhum, o que faz com que muitos casos passem despercebidos. O problema maior está na gestação, porque a infecção nesse período pode atingir o feto e causar malformações no sistema nervoso do bebê.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como o zika é transmitido?',
        paragraphs: [
          'A via principal é a picada da fêmea do mosquito Aedes aegypti infectada, principalmente durante o dia. Esse mosquito vive perto das casas, em recipientes que acumulam água parada, por isso a doença se espalha com facilidade em áreas urbanas.',
          'A zika não passa pelo contato do dia a dia, como abraço, beijo ou compartilhamento de objetos. O vírus já foi encontrado na saliva, na urina e no leite materno, mas não há comprovação de transmissão por esses fluidos.',
          'Diferente da dengue e da chikungunya, o zika também pode passar de outras maneiras:',
        ],
        bullets: [
          'Da mãe para o feto, durante a gestação, em qualquer trimestre e mesmo quando a mãe não tem sintomas',
          'Por via sexual, já que o vírus pode permanecer no sêmen por semanas após o início dos sintomas',
          'Por transfusão de sangue, embora esse risco seja baixo por causa da triagem de doadores',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'A maioria das pessoas infectadas não apresenta sintomas. Quando eles aparecem, surgem de 2 a 7 dias após a picada e costumam ser leves.',
          'O conjunto dos sintomas dura, em geral, de 2 a 7 dias, e a maioria das pessoas melhora sem tratamento específico. Os sinais mais comuns são:',
        ],
        bullets: [
          'Manchas vermelhas na pele, que aparecem cedo',
          'Febre baixa, abaixo de 38,5 °C, ou ausência de febre',
          'Conjuntivite sem secreção e olhos avermelhados',
          'Dor de cabeça, dor nas articulações e dor muscular',
          'Cansaço',
          'Coceira intensa, que pode atrapalhar o sono',
          'Inchaço ao redor das articulações e gânglios aumentados',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais que exigem avaliação médica',
        paragraphs: [
          'A zika costuma ser leve, mas pode vir acompanhada de complicações neurológicas. Procure atendimento médico sem demora se notar algum destes sinais:',
          'Esses sinais podem indicar síndrome de Guillain-Barré, encefalite, mielite ou neurite óptica e precisam de investigação. Alterações visuais devem ser avaliadas por um oftalmologista.',
        ],
        bullets: [
          'Formigamento ou fraqueza nos braços ou nas pernas',
          'Dificuldade para mover o rosto ou fraqueza que progride',
          'Alteração do nível de consciência, confusão ou sonolência excessiva',
          'Alterações na visão',
        ],
      },
      {
        id: 'zika-na-gravidez',
        heading: 'Zika na gravidez: risco de microcefalia',
        paragraphs: [
          'A infecção pelo vírus Zika durante a gestação pode passar para o feto em qualquer trimestre, mesmo quando a gestante não tem sintomas. Estima-se que cerca de 26% das gestantes infectadas transmitam o vírus ao feto, e o risco de malformações congênitas é maior quando a infecção ocorre no primeiro trimestre.',
          'As alterações causadas pela infecção congênita formam um conjunto chamado síndrome congênita do vírus Zika. Ela pode incluir microcefalia, alterações do sistema nervoso central, problemas de visão e de audição e dificuldades no desenvolvimento neuropsicomotor. As crianças afetadas podem ter deficiências intelectuais, físicas e sensoriais ao longo da vida e precisam de acompanhamento com uma equipe multiprofissional.',
          'Detectar a infecção o mais cedo possível e manter o pré-natal em dia é fundamental. Gestantes com suspeita de zika devem procurar o serviço de saúde imediatamente, mesmo que os sintomas sejam leves, e ser acompanhadas conforme os protocolos de pré-natal do Ministério da Saúde, com exames de imagem do bebê quando indicado.',
        ],
        cta: {
          label: 'Leia também: o que o zika pode causar na gestação',
          href: '/artigos/zika-na-gestacao-o-que-a-infeccao-pode-causar/',
        },
      },
      {
        id: 'grupos-de-risco',
        heading: 'Quem tem mais risco',
        paragraphs: [
          'Todas as pessoas são suscetíveis ao vírus Zika, independentemente de idade ou sexo, mas a atenção maior é para dois grupos:',
        ],
        bullets: [
          'Gestantes, pelo risco de transmissão ao feto e de malformações congênitas',
          'Pessoas acima de 60 anos e pessoas com doenças crônicas, que têm mais chance de desenvolver complicações',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa pela avaliação clínica, feita por um médico, e é confirmado por exames laboratoriais. Todos os exames necessários estão disponíveis no Sistema Único de Saúde (SUS). Como os sintomas da zika se parecem com os da dengue e da chikungunya, a confirmação depende de exame laboratorial, e o tipo de exame depende do dia da doença:',
          'A sorologia pode apresentar reação cruzada com a dengue, por isso as amostras costumam ser testadas em paralelo para as duas doenças. Quando a zika é confirmada, o caso deve ser notificado ao Ministério da Saúde em até 24 horas. Durante a gestação, qualquer suspeita deve ser avaliada com prioridade, e recém-nascidos com suspeita de comprometimento neurológico precisam de exames de imagem, como ultrassom, tomografia ou ressonância magnética.',
        ],
        bullets: [
          'RT-PCR, que detecta o material genético do vírus; a urina pode ser usada para confirmar a infecção até o 15º dia do início dos sintomas',
          'Sorologia para IgM, que identifica anticorpos produzidos pelo corpo',
        ],
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'Zika, dengue ou chikungunya: como diferenciar',
        paragraphs: [
          'As três doenças são transmitidas pelo mesmo mosquito, o que torna a diferenciação difícil apenas pelos sintomas.',
          'A zika é a que mais se associa a malformações congênitas. Como a dengue pode provocar sangramentos graves, é importante que o médico descarte essa possibilidade antes de indicar certos medicamentos.',
        ],
        bullets: [
          'Dengue: febre alta de 4 a 7 dias, manchas vermelhas a partir do 4º dia em 30% a 50% dos casos, dor muscular frequente e dor articular leve',
          'Zika: febre ausente ou baixa de 1 a 2 dias, manchas vermelhas no 1º ou 2º dia em 90% a 100% dos casos, dor muscular e articular moderadas',
          'Chikungunya: febre alta de 2 a 3 dias, manchas vermelhas entre o 2º e o 5º dia em cerca de 50% dos casos, dor muscular menos frequente e dor articular intensa e incapacitante',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'Não existe antiviral específico contra o vírus Zika. O tratamento alivia os sintomas e inclui repouso, ingestão de líquidos e medicamentos para a dor e a febre.',
          'Para dor e febre, podem ser usados paracetamol ou dipirona, conforme a orientação do profissional de saúde. Não use ácido acetilsalicílico (aspirina) e evite anti-inflamatórios por conta própria, porque aumentam o risco de sangramento enquanto a dengue não é descartada. Quando há coceira intensa, anti-histamínicos podem ser indicados por um profissional de saúde.',
          'Gestantes com suspeita de zika devem seguir as orientações do pré-natal e ser acompanhadas de perto, com avaliação do bebê quando necessário.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'Não há vacina disponível contra a zika. Por isso, a prevenção se baseia em impedir a reprodução do mosquito, evitar suas picadas e prevenir a transmissão por via sexual.',
          'O repelente é considerado seguro na gravidez quando usado conforme as instruções do fabricante. Em crianças menores de 2 anos, ele só deve ser usado com orientação médica. Gestantes devem redobrar os cuidados nos horários de maior atividade do mosquito, como o amanhecer e o fim da tarde. Para prevenir a transmissão por via sexual, o uso de preservativo é recomendado, especialmente durante a gravidez, e a gestante deve manter relações protegidas ao longo de toda a gestação quando houver suspeita ou confirmação de zika no parceiro.',
        ],
        bullets: [
          'Tampar caixas d’água, tonéis e quaisquer reservatórios',
          'Não deixar água acumulada em vasos, calhas e ralos',
          'Colocar areia nos pratos das plantas',
          'Guardar garrafas e pneus virados para baixo ou em local coberto',
          'Manter o lixo fechado e descartar resíduos corretamente',
          'Usar repelente à base de DEET, IR3535 ou icaridina nas áreas expostas do corpo, seguindo as orientações do fabricante',
          'Vestir calças e camisas de manga comprida',
          'Instalar telas em portas e janelas e usar mosquiteiro, sobretudo para gestantes, crianças pequenas e pessoas que dormem durante o dia',
        ],
        cta: {
          label: 'Leia também: como se proteger do zika em áreas com transmissão',
          href: '/artigos/zika-como-se-proteger-em-areas-com-transmissao/',
        },
      },
    ],
    faq: [
      {
        question: 'Zika é perigoso para todo mundo?',
        answer:
          'Para a maior parte das pessoas a infecção é leve e passa sozinha, e muitas nem apresentam sintomas. O risco maior é a infecção durante a gestação, pelo efeito no desenvolvimento do bebê.',
      },
      {
        question: 'Existe vacina contra zika?',
        answer:
          'Ainda não. Nenhuma vacina está disponível para a população, e a prevenção depende do controle do mosquito, da proteção contra picadas e do uso de preservativo nas relações sexuais.',
      },
      {
        question: 'Zika pode ser transmitido pelo beijo ou pelo abraço?',
        answer:
          'Não pelo contato do dia a dia, como abraço, beijo ou uso de objetos compartilhados. A transmissão conhecida é pela picada do mosquito, por via sexual, por transfusão e da gestante para o feto.',
      },
      {
        question: 'Zika na gravidez sempre causa microcefalia?',
        answer:
          'Não. A maioria das gestantes infectadas não transmite o vírus ao feto, e a malformação não ocorre em todos os casos de transmissão. O risco é maior quando a infecção acontece no primeiro trimestre da gestação.',
      },
      {
        question: 'Como uma gestante pode se proteger?',
        answer:
          'Usando repelente autorizado e adequado para a gravidez, vestindo roupas que cubram o corpo, instalando telas e mosquiteiro, evitando os horários de maior atividade do mosquito e mantendo o pré-natal em dia. As relações sexuais também devem ser protegidas durante a gestação.',
      },
      {
        question: 'A zika deixa sequelas?',
        answer:
          'Na maioria das pessoas, não. As complicações neurológicas, como a síndrome de Guillain-Barré, são raras, mas exigem atendimento médico imediato quando surgem.',
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
      'Causada por protozoários do gênero Plasmodium e transmitida pela picada do mosquito Anopheles. Tem tratamento gratuito e cura, mas pode se agravar rápido.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é malária?',
        paragraphs: [
          'Malária é uma doença infecciosa causada por parasitas (protozoários) do gênero Plasmodium, transmitidos pela picada da fêmea do mosquito Anopheles, conhecido no Brasil como mosquito-prego, carapanã ou muriçoca. Ela provoca febre, calafrios e mal-estar, e no Brasil a transmissão se concentra na região amazônica.',
          'Duas espécies concentram a maior parte dos casos no Brasil. O Plasmodium vivax é o mais comum e costuma provocar uma forma menos grave, mas com risco de recaídas. O Plasmodium falciparum é o mais perigoso e pode levar à malária grave, com risco de morte. Com menos frequência, ocorrem infecções por P. malariae e P. ovale.',
          'A transmissão acontece quando a fêmea de um mosquito Anopheles infectado pica uma pessoa. O parasita segue para o fígado e depois para o sangue, onde invade e destrói os glóbulos vermelhos. Essa destruição é o que provoca a febre e os demais sintomas.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como a malária é transmitida?',
        paragraphs: [
          'O parasita passa para a pessoa pela picada da fêmea do mosquito Anopheles. Esse mosquito costuma picar ao entardecer e à noite, dentro e ao redor das casas, e se reproduz em água limpa, como igarapés, represas e áreas alagadas, o que explica a concentração de casos em áreas de floresta e de garimpo.',
          'A malária não passa de uma pessoa para outra pelo contato do dia a dia, como abraço, beijo ou tosse, nem pelo ar. Em situações raras, a transmissão pode ocorrer por transfusão de sangue ou pelo compartilhamento de agulhas e seringas.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os primeiros sintomas surgem, em geral, de 10 a 15 dias depois da picada, mas esse intervalo pode variar. No início, a malária se parece com outras doenças febris: febre, dor de cabeça, calafrios e dores no corpo.',
          'Tremores, sudorese, cansaço, perda de apetite, náuseas e vômitos também são comuns. Em crianças, a febre pode ser o primeiro sinal. Os sintomas mais frequentes são:',
        ],
        bullets: [
          'Febre alta, muitas vezes com calafrios e tremores',
          'Sudorese e cansaço',
          'Dor de cabeça e dor no corpo',
          'Náusea, vômito e falta de apetite',
          'Fraqueza',
          'Palidez e coloração amarelada da pele e dos olhos, em alguns casos',
        ],
        cta: {
          label: 'Leia também: sintomas da malária e quando buscar atendimento',
          href: '/artigos/malaria-sintomas-e-quando-buscar-atendimento/',
        },
      },
      {
        id: 'ciclo-de-febre',
        heading: 'O ciclo de febre que se repete',
        paragraphs: [
          'Em parte dos casos, os sintomas se organizam em crises que se repetem, chamadas de acessos maláricos. A crise começa com frio intenso e tremores, que duram de alguns minutos a uma hora. Depois vem a fase de calor, com febre alta que pode passar de 40 °C e durar de duas a seis horas. Por fim, vem o suor intenso, quando a temperatura cai e a pessoa fica exausta.',
          'Nas formas típicas, essas crises se repetem a cada 48 horas na malária por P. vivax ou a cada 72 horas na malária por P. malariae. O padrão, porém, pode ser irregular, sobretudo na infecção por P. falciparum, o que torna o diagnóstico apenas pela febre pouco confiável.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'Os sinais abaixo indicam malária grave e exigem atendimento de urgência:',
          'A malária grave é mais frequente na infecção por P. falciparum, mas pode ocorrer em qualquer tipo. Ela pode surgir em poucas horas, mesmo depois de sintomas que pareciam leves, por isso toda febre em quem mora ou esteve na região amazônica precisa ser investigada com rapidez.',
        ],
        bullets: [
          'Confusão mental, sonolência excessiva ou dificuldade para acordar',
          'Convulsões',
          'Dificuldade para respirar',
          'Urina escura ou avermelhada',
          'Pele e olhos amarelados',
          'Sangramentos',
          'Fraqueza extrema',
        ],
      },
      {
        id: 'grupos-de-risco',
        heading: 'Quem tem mais risco',
        paragraphs: [
          'Toda pessoa pode ter malária, mas alguns grupos têm maior chance de evoluir para a forma grave. Viver ou viajar para a região amazônica também aumenta a exposição ao mosquito, e quem nunca teve malária ou chegou há pouco tempo a uma área de transmissão tem menos proteção e adoece com mais facilidade.',
          'Os principais grupos de risco são:',
        ],
        bullets: [
          'Crianças, principalmente as menores de 5 anos',
          'Gestantes, porque nelas a doença pode causar parto prematuro e baixo peso ao nascer',
          'Pessoas infectadas pela primeira vez',
          'Pessoas com a imunidade comprometida, como quem tem HIV ou aids',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa com a avaliação médica e é confirmado por exames que identificam o parasita no sangue. O exame de referência no Brasil é a gota espessa, uma gota de sangue analisada no microscópio, capaz de identificar o parasita e a espécie, o que define o tratamento.',
          'Também existem testes rápidos, que detectam proteínas do parasita em cerca de 15 minutos e são usados em áreas de difícil acesso. Os dois exames estão disponíveis gratuitamente no SUS. Todo caso suspeito deve ser investigado e a malária deve ser notificada às autoridades de saúde. Em algumas situações, o médico pode repetir o exame ao longo de alguns dias, porque a quantidade de parasitas no sangue varia com o tempo.',
        ],
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'Malária ou dengue: como diferenciar',
        paragraphs: [
          'A malária e a dengue começam com febre e dores no corpo, mas têm transmissor e sinais diferentes. A malária é transmitida pelo mosquito Anopheles, que pica ao entardecer e à noite; a dengue é transmitida pelo Aedes aegypti, de hábitos diurnos.',
          'O diagnóstico correto depende do exame de sangue. Saber onde a pessoa esteve nos últimos dias ajuda o médico a suspeitar de malária e a pedir o teste certo.',
        ],
        bullets: [
          'Mosquito transmissor: Anopheles, com picada no fim do dia e à noite, na malária; Aedes aegypti, com picada durante o dia, na dengue',
          'Tempo até os sintomas: cerca de 10 a 15 dias na malária; 4 a 7 dias na dengue',
          'Febre: pode vir em ciclos, com calafrios e sudorese, na malária; alta e contínua, de 4 a 7 dias, na dengue',
          'Manchas na pele: incomuns na malária; frequentes na dengue, a partir do 4º dia',
          'Sinais que chamam atenção: calafrios, tremores e suor intenso, com pele amarelada nas formas graves, na malária; dor atrás dos olhos e, nas formas graves, sangramentos, na dengue',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'A malária tem cura, e o tratamento é gratuito no SUS. O medicamento escolhido depende da espécie do parasita, do peso, da idade e do fato de a pessoa estar grávida, por isso o tratamento só deve ser feito com orientação de um profissional de saúde.',
          'Na malária por P. vivax ou P. ovale, o tratamento combina cloroquina por três dias com primaquina por sete dias. A primaquina elimina as formas do parasita que ficam no fígado e causam as recaídas. Na malária por P. falciparum, o tratamento usa combinações de medicamentos à base de artemisinina.',
          'O tratamento deve ser concluído exatamente como prescrito, mesmo que os sintomas melhorem. Interromper os medicamentos antes do fim permite que o parasita volte a se multiplicar e favorece as recaídas, e tomar remédios por conta própria também atrasa o diagnóstico correto. Alguns pontos exigem atenção:',
        ],
        bullets: [
          'Gestantes, puérperas com até um mês de amamentação e crianças menores de 6 meses não podem usar primaquina, pelo risco de destruição dos glóbulos vermelhos',
          'Antes de usar primaquina na malária por P. vivax, é obrigatório um teste que mede a atividade da enzima glicose-6-fosfato desidrogenase (G6PD); quem tem deficiência dessa enzima corre risco de destruição dos glóbulos vermelhos',
          'Gestantes com malária por P. vivax recebem cloroquina por três dias e seguem com uma dose profilática semanal de cloroquina até o fim do primeiro mês de amamentação',
          'Em casos selecionados de P. vivax, o médico pode indicar a tafenoquina, um medicamento de dose única oferecido pelo SUS desde 2024, com apresentação infantil desde 2026',
        ],
      },
      {
        id: 'recuperacao',
        heading: 'Recaídas, complicações e recuperação',
        paragraphs: [
          'A maioria das pessoas se recupera por completo quando o tratamento é feito corretamente. A doença pode voltar de duas formas diferentes. Na malária por P. vivax e P. ovale, o parasita pode permanecer adormecido no fígado e provocar recaídas semanas ou meses depois, mesmo sem uma nova picada. Na malária por P. falciparum, pode haver recrudescência, quando o parasita reaparece porque o tratamento não foi completado.',
          'Nas formas graves, a malária pode comprometer o cérebro (malária cerebral), os rins e o fígado, além de provocar anemia intensa e dificuldade para respirar. Uma complicação rara é a hemoglobinúria malárica, conhecida como febre da água negra, com destruição maciça de glóbulos vermelhos e urina muito escura, mais comum em quem tem deficiência de G6PD. Esses casos exigem internação.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'Não existe vacina contra a malária disponível para a população brasileira, por isso a prevenção depende de evitar a picada do mosquito, com cuidados individuais e ações coletivas.',
          'Quem vai viajar para a região amazônica deve procurar um serviço de saúde antes da viagem. Em alguns casos, o médico pode indicar medicamentos para prevenir a infecção durante a estadia.',
          'Os principais cuidados são:',
        ],
        bullets: [
          'Usar mosquiteiro, sobretudo ao dormir, de preferência impregnado com inseticida',
          'Usar repelentes indicados por um profissional de saúde e reaplicar conforme a orientação',
          'Vestir roupas que cubram braços e pernas, principalmente no fim do dia e à noite',
          'Instalar telas em portas e janelas e usar espirais e vaporizadores nas horas de maior atividade do mosquito',
          'Seguir as ações coletivas das equipes de saúde nas áreas de risco, como borrifação residual nas casas, distribuição de mosquiteiros impregnados e drenagem de criadouros',
        ],
        cta: {
          label: 'Leia também: como se prevenir da malária em viagens para a Amazônia',
          href: '/artigos/malaria-como-se-prevenir-em-viagens-para-a-amazonia/',
        },
      },
      {
        id: 'vacinacao',
        heading: 'Vacina contra a malária',
        paragraphs: [
          'Não há vacina contra a malária disponível no Brasil. As vacinas recomendadas pela Organização Mundial da Saúde (OMS), RTS,S e R21, são usadas em crianças de países da África, onde a transmissão por P. falciparum é muito alta, e não fazem parte do calendário de vacinação brasileiro.',
          'A pesquisa de uma vacina nacional avançou em 2026, quando a Anvisa autorizou o início dos testes em humanos de uma vacina contra o P. vivax desenvolvida com tecnologia brasileira. Os estudos ainda estão na fase inicial, sem previsão de uso na população, e a prevenção segue baseada no controle do mosquito e na proteção contra picadas.',
        ],
      },
    ],
    faq: [
      {
        question: 'Malária pega de outra pessoa?',
        answer:
          'Não. A malária não passa de uma pessoa para outra pelo contato, pelo beijo nem pelo ar. A transmissão acontece pela picada do mosquito Anopheles infectado. Em situações raras, pode ocorrer por transfusão de sangue ou pelo compartilhamento de agulhas e seringas.',
      },
      {
        question: 'Malária tem cura?',
        answer:
          'Sim. A malária tem cura, e o tratamento é gratuito e eficaz quando é feito corretamente. Quanto mais cedo o diagnóstico e o início do tratamento, menores são o risco de complicações e a chance de a doença se agravar.',
      },
      {
        question: 'Quanto tempo a malária demora para aparecer?',
        answer:
          'Os primeiros sintomas costumam surgir de 10 a 15 dias depois da picada do mosquito infectado, mas esse intervalo pode variar.',
      },
      {
        question: 'Quem já teve malária pode ter de novo?',
        answer:
          'Sim, uma pessoa pode ter malária várias vezes. A infecção por P. vivax e P. ovale pode reaparecer semanas ou meses depois por causa das formas do parasita que ficam no fígado, e uma nova picada também pode provocar uma nova infecção.',
      },
      {
        question: 'Como saber se a febre é malária?',
        answer:
          'Não dá para saber apenas pelos sintomas, porque a malária se parece com outras doenças febris. Se você mora ou esteve na região amazônica e teve febre, procure um serviço de saúde para fazer o exame, que é gratuito no SUS.',
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
      'Doença infecciosa causada por uma bactéria que ataca principalmente os pulmões. Tem cura, e o tratamento é gratuito no SUS.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é tuberculose?',
        paragraphs: [
          'Tuberculose é uma doença infecciosa e transmissível causada pela bactéria Mycobacterium tuberculosis, também conhecida como bacilo de Koch. Ela atinge principalmente os pulmões, na chamada forma pulmonar, mas pode comprometer outros órgãos e sistemas, como gânglios, ossos, rins e as membranas que envolvem o cérebro.',
          'Essa forma, chamada de extrapulmonar, é mais comum em pessoas que vivem com HIV e aids, sobretudo quando a imunidade está baixa. A doença tem cura, e o fator que mais pesa no resultado é começar o tratamento cedo e levá-lo até o fim. Por isso, qualquer tosse que dure três semanas ou mais deve ser investigada em uma unidade de saúde.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como a tuberculose é transmitida?',
        paragraphs: [
          'A transmissão acontece pelo ar. Quando uma pessoa com tuberculose pulmonar ou laríngea ativa, sem tratamento, tosse, fala ou espirra, ela lança no ambiente aerossóis, partículas muito pequenas que podem ficar suspensas por horas. Quem respira essas partículas pode se infectar. Em uma comunidade, calcula-se que uma pessoa doente sem tratamento consiga infectar, em média, de 10 a 15 pessoas ao longo de um ano.',
          'A tuberculose não passa pelo compartilhamento de objetos. O bacilo que se deposita em roupas, lençóis, copos e talheres dificilmente se espalha pelo ar, então esses itens não têm papel importante na transmissão.',
          'Depois que o tratamento começa, a transmissão cai aos poucos e, em geral, após cerca de 15 dias o risco já é bem menor. Mesmo assim, vale manter alguns cuidados até que o exame do catarro dê negativo: cubra a boca com o antebraço ou um lenço ao tossir e espirrar, e deixe os ambientes bem ventilados e com luz do sol. O bacilo é sensível à luz solar, e a circulação de ar ajuda a dispersar as partículas.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'O sintoma mais comum da tuberculose pulmonar é a tosse, que pode ser seca ou com catarro. Com o tempo, ela pode vir acompanhada de secreção com pus ou sangue. Toda pessoa com tosse por três semanas ou mais deve ser examinada para tuberculose, mesmo que os outros sintomas pareçam leves, e em grupos mais vulneráveis a recomendação é investigar a doença mesmo quando a tosse dura menos tempo. Os sinais mais frequentes são:',
        ],
        bullets: [
          'Tosse por três semanas ou mais, com ou sem expectoração',
          'Febre, geralmente no fim da tarde',
          'Suor noturno',
          'Emagrecimento e falta de apetite',
          'Cansaço excessivo',
          'Sangue no catarro, em alguns casos',
        ],
        cta: {
          label: 'Leia também: quando a tosse persistente é sinal de alerta',
          href: '/artigos/tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta/',
        },
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Alguns sinais pedem avaliação imediata, em pronto atendimento ou emergência:',
          'Em crianças e em pessoas que vivem com HIV e aids, também merecem atenção a sonolência excessiva, a dor de cabeça forte e a rigidez no pescoço, que podem indicar o comprometimento das membranas que envolvem o cérebro.',
        ],
        bullets: [
          'Tosse com sangue',
          'Falta de ar',
          'Dor no peito',
          'Febre alta que não cede',
        ],
      },
      {
        id: 'grupos-de-risco',
        heading: 'Grupos com maior risco de adoecer',
        paragraphs: [
          'Além de fatores ligados à imunidade de cada pessoa, o adoecimento por tuberculose está diretamente relacionado às condições de vida. Segundo o Ministério da Saúde, o risco de ter tuberculose é cerca de 54 vezes maior entre pessoas em situação de rua, 26 vezes maior entre a população privada de liberdade, 23 vezes maior entre pessoas que vivem com HIV e aids e 5,8 vezes maior entre imigrantes. A população indígena também adoece mais do que a média.',
          'Outras situações que elevam o risco são:',
        ],
        bullets: [
          'Imunidade baixa, como em quem usa medicamentos imunossupressores, faz diálise ou tem diabetes',
          'Desnutrição',
          'Uso de álcool e de drogas',
          'Convivência em locais fechados, pouco ventilados e aglomerados',
          'Trabalho em serviços de saúde, sobretudo em áreas de internação e em laboratórios que lidam com a bactéria',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico combina a avaliação clínica com exames, todos disponíveis gratuitamente no SUS. Os principais são:',
          'A radiografia de tórax entra como exame de apoio. Quando a doença está fora do pulmão, a equipe de saúde pode coletar amostras de outros locais, de acordo com os sintomas. No Brasil, a tuberculose é uma doença de notificação compulsória: todo caso confirmado é registrado pelo serviço de saúde no sistema de vigilância, o que ajuda a acompanhar a doença no país e a planejar as ações de saúde pública.',
        ],
        bullets: [
          'Teste rápido molecular para tuberculose (TRM-TB) ou baciloscopia, feitos a partir de uma amostra de catarro',
          'Cultura, que confirma a presença da bactéria',
          'Teste de sensibilidade aos fármacos, que mostra se a bactéria é resistente a algum medicamento',
        ],
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'O que pode ser confundido com tuberculose',
        paragraphs: [
          'Tosse prolongada, febre e emagrecimento aparecem em várias outras doenças, como pneumonia, bronquite e até câncer de pulmão. Por isso, o exame do catarro é o que confirma a tuberculose, evitando que ela seja tratada como outra infecção ou que outra doença passe despercebida.',
          'Em pessoas que já têm alguma condição pulmonar, os sintomas podem se confundir, o que reforça a necessidade dos exames.',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento da tuberculose é gratuito e está disponível exclusivamente no Sistema Único de Saúde (SUS). Ele dura no mínimo seis meses; em alguns casos de crianças com a forma sensível e sem gravidade, é possível usar um esquema mais curto, de quatro meses.',
          'O esquema básico reúne quatro medicamentos: rifampicina, isoniazida, pirazinamida e etambutol. Nos dois primeiros meses, os quatro são usados em conjunto, na chamada fase intensiva. Nos quatro meses seguintes, geralmente permanecem a rifampicina e a isoniazida, na fase de manutenção. Em muitos serviços, os comprimidos vêm combinados em uma única apresentação, o que ajuda a tomar a dose certa todos os dias.',
          'Nas primeiras semanas, é comum a pessoa já se sentir melhor, mas isso não quer dizer que a doença esteja curada. Interromper o tratamento ou tomar os remédios de forma irregular pode levar à tuberculose resistente, que é mais difícil de tratar e exige mais tempo. Alguns cuidados com os medicamentos merecem atenção:',
        ],
        bullets: [
          'A rifampicina e a isoniazida podem causar inflamação no fígado, às vezes grave; avise a equipe de saúde se a pele ou os olhos ficarem amarelados, se a urina ficar escura ou se aparecerem náusea, vômitos ou dor na barriga',
          'É esperada uma cor alaranjada na urina, no suor e nas lágrimas por causa da rifampicina; isso é normal e não é perigoso',
          'Alguns medicamentos podem interagir com o tratamento, e os anticoncepcionais, por exemplo, podem ter a eficácia reduzida; por isso, conte ao profissional tudo o que você usa',
          'Evite bebidas alcoólicas durante o tratamento, porque o álcool aumenta o risco de dano ao fígado',
        ],
        cta: {
          label: 'Leia também: o tratamento da tuberculose é gratuito e tem cura',
          href: '/artigos/tuberculose-o-tratamento-tem-cura-e-e-gratuito/',
        },
      },
      {
        id: 'tratamento-observado',
        heading: 'Acompanhamento e tratamento diretamente observado',
        paragraphs: [
          'Uma das principais estratégias de apoio é o tratamento diretamente observado (TDO). Nele, a pessoa toma o medicamento na presença de um profissional de saúde ou de outro profissional capacitado, na unidade de saúde ou até na própria residência. Desde 2023, a observação também pode ser feita por meios digitais, como vídeo, foto, chamada de voz ou mensagem com a confirmação da tomada do remédio.',
          'O TDO deve acontecer, de preferência, todos os dias úteis da semana. O local e o horário são combinados entre a pessoa e o serviço de saúde.',
        ],
      },
      {
        id: 'recuperacao',
        heading: 'Recuperação e possíveis complicações',
        paragraphs: [
          'Com o tratamento correto até o fim, a maioria das pessoas se recupera bem. Quando a doença não é tratada ou o tratamento é irregular, podem ocorrer complicações, como destruição do pulmão, sangramento e acúmulo de ar na cavidade torácica. Nas formas graves, a doença pode atingir as membranas que envolvem o cérebro; entre pessoas que vivem com HIV e aids, é uma das principais causas de morte por doença infecciosa.',
          'Depois da cura, é possível ter tuberculose de novo. Por isso, quem já teve a doença e volta a apresentar tosse por três semanas ou mais deve procurar avaliação.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'A prevenção combina a vacinação na infância com medidas que evitam a transmissão. Para isso:',
        ],
        bullets: [
          'Vacinar as crianças com a BCG, que protege contra as formas graves da doença',
          'Manter ambientes ventilados e com entrada de luz solar',
          'Adotar a higiene da tosse, cobrindo a boca com o antebraço ou um lenço ao tossir e espirrar',
          'Evitar aglomerações em locais fechados',
          'Investigar a tosse que dura três semanas ou mais',
          'Realizar o tratamento até o fim, o que interrompe a transmissão',
          'Avaliar e, quando indicado, tratar a infecção latente em pessoas com maior risco',
        ],
      },
      {
        id: 'vacinacao',
        heading: 'Vacina BCG',
        paragraphs: [
          'A vacina BCG, oferecida pelo SUS, protege as crianças das formas mais graves da doença, como a tuberculose miliar e a meningite tuberculosa. Ela é aplicada ao nascer ou, no máximo, até os 4 anos, 11 meses e 29 dias, e está disponível nas salas de vacinação das unidades básicas de saúde e em algumas maternidades.',
          'Desde fevereiro de 2019, o Ministério da Saúde não recomenda mais revacinar crianças que não ficaram com a cicatriz. Bebês prematuros com menos de 2 kg não podem receber a vacina nesse momento. A BCG não impede todos os casos, por isso as demais medidas de prevenção continuam importantes.',
        ],
      },
      {
        id: 'infeccao-latente',
        heading: 'Infecção latente pelo bacilo (ILTB)',
        paragraphs: [
          'Nem toda pessoa que entra em contato com o bacilo adoece. Em algumas, a bactéria fica no corpo sem causar sintomas, em uma condição chamada infecção latente pelo Mycobacterium tuberculosis, ou ILTB. Essa situação pode se manter por anos e só se transformar em doença se a imunidade cair. O maior risco de adoecer se concentra nos dois primeiros anos depois da infecção.',
          'O tratamento preventivo é indicado por um profissional de saúde, conforme o caso. Entre as opções estão a isoniazida, que reduz em cerca de 60% o risco de a doença se manifestar, a rifampicina por quatro meses e a combinação de rifapentina com isoniazida por 12 semanas.',
          'Diagnosticar e tratar a ILTB é uma das principais formas de evitar a doença, especialmente em:',
        ],
        bullets: [
          'Pessoas que moram com alguém diagnosticado com tuberculose',
          'Crianças',
          'Pessoas que vivem com HIV e aids',
          'Pessoas que usam medicamentos que baixam a imunidade',
        ],
      },
    ],
    faq: [
      {
        question: 'Tuberculose tem cura?',
        answer:
          'Sim. Quando o tratamento é feito de forma correta até o fim, a tuberculose tem cura. O risco maior está em interromper os remédios antes do tempo, o que pode levar à forma resistente da doença.',
      },
      {
        question: 'A tuberculose é contagiosa?',
        answer:
          'A tuberculose pulmonar e a laríngea ativa, sem tratamento, passam de uma pessoa para outra pelo ar, pela tosse, pela fala e pelo espirro. Já a forma latente, sem sintomas, não transmite a doença.',
      },
      {
        question: 'A tuberculose passa pelo beijo, por copos ou por talheres?',
        answer:
          'Não. A transmissão acontece pelo ar, ao respirar as partículas lançadas por uma pessoa doente. Objetos compartilhados, como roupas, lençóis, copos e talheres, não têm papel importante nessa transmissão.',
      },
      {
        question: 'Quanto tempo dura o tratamento?',
        answer:
          'No mínimo seis meses. Em alguns casos de crianças com a forma sensível e sem gravidade, o tratamento pode ser mais curto, de quatro meses.',
      },
      {
        question: 'Existe vacina contra tuberculose?',
        answer:
          'Sim. A vacina BCG está disponível no SUS e protege as crianças das formas mais graves da doença. Ela não impede todos os casos, por isso as demais medidas de prevenção continuam importantes.',
      },
      {
        question: 'Peguei tuberculose de alguém, isso é motivo de vergonha?',
        answer:
          'Não. Tuberculose é uma doença infecciosa como qualquer outra, transmitida pelo ar. O estigma é um dos principais obstáculos ao diagnóstico precoce.',
      },
      {
        question: 'Conviver com quem tem tuberculose é perigoso?',
        answer:
          'Nas primeiras semanas de tratamento, a transmissão cai muito. Quem convive com um caso confirmado deve ser avaliado pelo serviço de saúde, para verificar se há infecção latente ou doença ativa.',
      },
      {
        question: 'O tratamento é gratuito?',
        answer:
          'Sim. O tratamento da tuberculose é gratuito e está disponível exclusivamente no SUS, em qualquer unidade de saúde.',
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
          'O HIV é o vírus da imunodeficiência humana, que ataca as células que coordenam a defesa do corpo, chamadas de linfócitos T-CD4+. Ao destruir essas células de forma constante, o HIV enfraquece o sistema imunológico e abre caminho para infecções e tumores que, em condições normais, seriam contidos.',
          'HIV e aids não são a mesma coisa. O HIV é o vírus, e uma pessoa pode viver com ele por anos sem apresentar sintomas. A aids é o estágio mais avançado da infecção, quando a imunidade já está gravemente comprometida e aparecem as chamadas doenças oportunistas.',
          'Descobrir a infecção cedo e iniciar o tratamento muda o curso da doença: hoje, quem faz o tratamento corretamente vive bem e não transmite o vírus por via sexual.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como o HIV é transmitido?',
        paragraphs: [
          'O HIV passa de uma pessoa para outra pelo contato com fluidos específicos: sangue, sêmen, secreções vaginais e leite materno. Ele não sobrevive fora do corpo e não se espalha pelo ar, pela água ou pelo toque. As principais formas de transmissão são:',
        ],
        bullets: [
          'Sexo vaginal, anal ou oral sem camisinha e sem o uso de PrEP; a relação anal em que a pessoa recebe o pênis é a prática com maior risco',
          'Compartilhamento de seringas, agulhas e outros materiais que cortam ou furam',
          'Da mãe para o bebê, durante a gestação, o parto ou a amamentação',
          'Transfusão de sangue ou transplante de órgãos, algo muito raro hoje, porque no Brasil todos os doadores são testados',
        ],
      },
      {
        id: 'nao-transmite',
        heading: 'O que não transmite HIV',
        paragraphs: [
          'Muita gente ainda tem dúvidas sobre o que não oferece risco. O HIV não sobrevive fora do corpo e não se espalha pelo ar, pela água ou pelo toque. Entender isso ajuda a combater o preconceito: conviver, estudar e trabalhar com quem vive com HIV não oferece risco.',
          'Estas situações não transmitem o HIV:',
        ],
        bullets: [
          'Beijo no rosto ou na boca, abraço e aperto de mão',
          'Suor e lágrima',
          'Picada de inseto',
          'Compartilhar talheres, copos, sabonete, toalha ou lençóis',
          'Usar ônibus, piscina ou banheiro',
          'Doar sangue',
          'Pelo ar',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'A infecção pelo HIV costuma passar por três fases. Na infecção aguda, que aparece nas primeiras semanas, os sinais lembram uma gripe: febre, dores no corpo e mal-estar. Como são leves e passageiros, muitas pessoas não percebem que foram infectadas.',
          'Depois vem a fase assintomática, que pode durar vários anos, na qual a pessoa não apresenta sinais visíveis. Sem tratamento, a infecção avança para a aids, quando as defesas estão muito enfraquecidas e surgem as doenças oportunistas.',
          'Como os sintomas não são confiáveis para identificar a infecção, a única forma de saber é fazer o teste. As três fases costumam se apresentar assim:',
        ],
        bullets: [
          'Infecção aguda: quadro parecido com uma gripe forte, com febre, mal-estar, dor de garganta e gânglios inchados, que passa sozinho, ou nenhum sintoma',
          'Fase assintomática: pode durar vários anos, geralmente sem sintomas, mesmo sem tratamento',
          'Aids: perda de peso, febre persistente, suores noturnos, diarreia prolongada, infecções de repetição e alguns tipos de câncer',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure um serviço de saúde se você passou por uma situação de risco ou se apresenta sintomas persistentes, como febre prolongada, suores noturnos, diarreia por várias semanas, perda de peso sem explicação ou gânglios inchados por muito tempo. O diagnóstico precoce muda o curso da infecção.',
          'Se você teve uma exposição de risco, como sexo sem camisinha ou um acidente com material cortante, busque atendimento imediatamente. A PEP deve começar o quanto antes, no máximo até 72 horas depois da exposição; quanto mais cedo, melhor. Passado esse prazo, ela não está mais indicada.',
        ],
      },
      {
        id: 'grupos-de-risco',
        heading: 'Quem está mais exposto ao HIV',
        paragraphs: [
          'Qualquer pessoa pode se infectar. O risco não está ligado a um tipo de pessoa, e sim a situações e práticas. Algumas circunstâncias aumentam a exposição ao vírus:',
        ],
        bullets: [
          'Sexo sem camisinha, sobretudo a relação anal receptiva',
          'Compartilhar seringas e agulhas',
          'Ter outras infecções sexualmente transmissíveis, que facilitam a entrada do vírus',
          'Relação sexual com alguém que vive com HIV e não faz tratamento',
          'Acidentes com material biológico, como acontece com profissionais de saúde',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico do HIV é simples, gratuito e pode ser feito de forma anônima no SUS. Os testes rápidos usam uma gota de sangue da ponta do dedo e dão o resultado em cerca de 30 minutos; estão disponíveis em unidades de saúde e nos Centros de Testagem e Aconselhamento (CTA). Existe também o autoteste, que a própria pessoa faz com fluido oral ou sangue, no momento e no lugar que preferir.',
          'Fazer o teste cedo muda o desfecho: quanto antes o tratamento começa, melhor a resposta e menor o impacto na saúde. No Brasil, tanto a infecção pelo HIV quanto a aids estão na lista nacional de notificação compulsória, e os casos confirmados são registrados no sistema de vigilância, o que ajuda a acompanhar a epidemia e a planejar as ações de saúde pública.',
        ],
      },
      {
        id: 'janela-imunologica',
        heading: 'A janela imunológica e os exames de acompanhamento',
        paragraphs: [
          'Os testes rápidos e os exames laboratoriais buscam anticorpos contra o HIV. O corpo leva um tempo para produzi-los, em média de 30 a 60 dias. Esse intervalo é a janela imunológica. Quem faz o teste dentro desse período pode receber um resultado negativo mesmo estando infectado. Por isso, depois de uma situação de risco, o ideal é testar e repetir o exame cerca de 30 dias depois.',
          'Depois do diagnóstico, o SUS oferece exames para acompanhar a infecção:',
        ],
        bullets: [
          'Carga viral, que mede a quantidade de vírus no sangue',
          'Contagem de linfócitos T-CD4+, que mostra como está a imunidade',
          'Genotipagem, que identifica mutações do vírus e ajuda a escolher o tratamento',
        ],
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'O que pode ser confundido com o HIV',
        paragraphs: [
          'Os primeiros sintomas do HIV lembram os de uma gripe ou de outras infecções virais, o que faz muita gente adiar o teste. Apenas um exame confirma a infecção.',
          'Nem os sintomas nem o histórico de exposição substituem o teste, então não espere aparecer algum sintoma para se testar depois de uma situação de risco.',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'Não existe cura nem vacina para o HIV, mas o tratamento permite viver com boa qualidade de vida por muitos anos. Desde 1996, o Brasil distribui os medicamentos antirretrovirais (ARV) de forma gratuita a todas as pessoas que vivem com HIV e precisam de tratamento.',
          'A recomendação atual é iniciar o tratamento assim que o diagnóstico é confirmado, independentemente de sintomas ou da contagem de T-CD4+. Os medicamentos impedem a multiplicação do vírus no organismo e ajudam a recuperar a imunidade. Muitas pessoas usam hoje um comprimido único que combina lamivudina e dolutegravir, de alta eficácia e boa tolerância.',
          'O ponto central é a adesão: tomar os remédios todos os dias, no horário certo, é o que mantém o vírus sob controle. Quando o tratamento é feito corretamente, a carga viral cai a níveis indetectáveis e a pessoa deixa de transmitir o HIV por via sexual, o que se chama de tratamento como prevenção. Como qualquer medicamento, os ARV podem causar efeitos colaterais, que variam conforme a combinação:',
        ],
        bullets: [
          'Alguns efeitos são passageiros, como náusea e dor de cabeça nas primeiras semanas',
          'Outros pedem ajuste do esquema, então avise a equipe de saúde se algo incomodar',
          'O acompanhamento é feito com consultas periódicas e exames de carga viral e T-CD4+, que mostram se o tratamento está funcionando',
        ],
        cta: {
          label: 'Leia também: indetectável igual a intransmissível',
          href: '/artigos/indetectavel-intransmissivel-o-que-significa/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'A prevenção do HIV hoje é pensada de forma combinada, ou seja, somando várias estratégias de acordo com a necessidade de cada pessoa:',
        ],
        bullets: [
          'Camisinha, disponível gratuitamente no SUS, que também protege de outras infecções sexualmente transmissíveis',
          'PrEP (profilaxia pré-exposição), medicamento tomado por quem tem maior risco de exposição, de uso diário ou sob demanda, sempre com testagem periódica',
          'PEP (profilaxia pós-exposição), usada após uma situação de risco, em até 72 horas, por 28 dias',
          'Testagem regular, que permite descobrir a infecção cedo',
          'Tratamento de quem vive com HIV, que reduz a transmissão',
        ],
        cta: {
          label: 'Leia também: o que fazer nas primeiras 72 horas após uma exposição',
          href: '/artigos/hiv-o-que-fazer-nas-primeiras-72-horas/',
        },
      },
      {
        id: 'transmissao-materno-infantil',
        heading: 'Da mãe para o bebê',
        paragraphs: [
          'O HIV pode passar da mãe para o bebê na gestação, no parto ou na amamentação. Com o tratamento antirretroviral durante a gestação, o risco de transmissão cai para menos de 1%; sem tratamento, esse risco é muito maior.',
          'O pré-natal inclui o teste de HIV para todas as gestantes. Quando o diagnóstico é feito e o tratamento começa cedo, o parto pode ser por cesariana e a amamentação pode ser substituída, conforme a orientação da equipe de saúde.',
        ],
      },
    ],
    faq: [
      {
        question: 'Viver com HIV é o mesmo que ter aids?',
        answer:
          'Não. O HIV é o vírus que ataca o sistema imunológico. A aids é o estágio mais avançado da infecção, quando a imunidade está gravemente comprometida e surgem as doenças oportunistas. Com tratamento, muitas pessoas vivem com HIV sem chegar a esse estágio.',
      },
      {
        question: 'HIV tem cura?',
        answer:
          'Não existe cura nem vacina até hoje. Com o tratamento antirretroviral correto, a infecção fica controlada, a pessoa vive com boa qualidade de vida e não transmite o vírus por via sexual.',
      },
      {
        question: 'Dá para pegar HIV pelo beijo ou por talheres?',
        answer:
          'Não. O HIV não passa pelo beijo, pelo abraço, por talheres, copos, toalhas, piscina, banheiro nem pelo ar. A transmissão exige contato com sangue, sêmen, secreção vaginal ou leite materno.',
      },
      {
        question: 'Quanto tempo depois da exposição o teste detecta o HIV?',
        answer:
          'Os testes buscam anticorpos, e o corpo leva de 30 a 60 dias para produzi-los em quantidade detectável. Esse é o período da janela imunológica. Um teste feito antes disso pode dar negativo mesmo com a pessoa infectada, por isso o exame deve ser repetido cerca de 30 dias depois da situação de risco.',
      },
      {
        question: 'Existe prevenção depois de uma relação sem camisinha?',
        answer:
          'Sim. É a PEP, que deve ser iniciada em até 72 horas após a exposição, o quanto antes. O tratamento dura 28 dias, e a PEP pode ser obtida gratuitamente em serviços de saúde.',
      },
      {
        question: 'Quem vive com HIV em tratamento pode transmitir o vírus?',
        answer:
          'Não, quando o tratamento é feito corretamente e a carga viral está indetectável. Nessas condições, a pessoa não transmite o HIV por via sexual.',
      },
      {
        question: 'O tratamento é gratuito?',
        answer:
          'Sim. Os medicamentos antirretrovirais são distribuídos gratuitamente pelo SUS a todas as pessoas que vivem com HIV e precisam de tratamento.',
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
      'Inflamações do fígado por vírus diferentes, transmitidos por água e alimentos ou por sangue e fluidos. Costumam ser silenciosas e podem se tornar crônicas.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que são hepatites virais?',
        paragraphs: [
          'As hepatites virais são inflamações do fígado provocadas por vírus. Existem cinco tipos principais, identificados pelas letras A, B, C, D e E. Cada um tem uma forma diferente de transmissão, um tempo próprio até os primeiros sintomas e uma evolução distinta: alguns provocam infecções que passam sozinhas, outros se tornam crônicos e podem, com os anos, levar à cirrose ou ao câncer de fígado.',
          'O fígado é o órgão que processa os nutrientes, filtra substâncias tóxicas e produz a bile. Quando um vírus da hepatite ataca esse órgão, as células ficam inflamadas e passam a funcionar pior. Não são a mesma doença com nomes diferentes: os vírus são distintos, as formas de transmissão mudam e as consequências também.',
          'Vírus diferentes causam doenças diferentes. As hepatites A e E chegam pelo que a pessoa come e bebe. As hepatites B, C e D entram pelo sangue e pelas relações sexuais. A hepatite D é um caso à parte: ela só se desenvolve em quem já tem o vírus da hepatite B. No Brasil, os tipos mais comuns são A, B e C; o vírus D aparece com mais frequência na região Norte do país, e o vírus E é menos frequente por aqui.',
        ],
      },
      {
        id: 'tipos-de-hepatites',
        heading: 'Visão geral das cinco hepatites',
        paragraphs: [
          'Grande parte das pessoas infectadas não apresenta sintomas. Quando eles aparecem, costumam ser inespecíficos, como cansaço, mal-estar, enjoo e dor abdominal, e podem ser confundidos com uma gripe ou um problema digestivo. As cinco hepatites, no entanto, se comportam de formas bem diferentes:',
        ],
        bullets: [
          'Hepatite A: transmitida por água e alimentos contaminados, pela via fecal-oral; não costuma se tornar crônica; existe vacina; o tratamento é de suporte, sem antiviral específico',
          'Hepatite B: transmitida por sangue, relações sexuais e da mãe para o filho; torna-se crônica com frequência; existe vacina; há medicamentos que controlam a infecção',
          'Hepatite C: transmitida por sangue e material contaminado; torna-se crônica com frequência; não existe vacina; há antivirais que curam mais de 95% dos casos',
          'Hepatite D: mesmas vias da hepatite B, que precisa estar presente; torna-se crônica; a vacina da hepatite B também protege; o tratamento é feito com alfapeginterferona, em serviço especializado',
          'Hepatite E: transmitida por água e alimentos contaminados, pela via fecal-oral; raramente se torna crônica, sobretudo em pessoas imunodeprimidas; não existe vacina; o tratamento é de suporte',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como cada hepatite é transmitida?',
        paragraphs: [
          'As formas de transmissão se dividem em dois grupos, e essa diferença define as medidas de prevenção. Nas hepatites A e E, os vírus saem pelas fezes de uma pessoa infectada e chegam a outra pela boca, o que se chama transmissão fecal-oral. Isso acontece quando falta saneamento básico ou quando a higiene é insuficiente: água ou alimentos contaminados por esgoto, mãos sujas no preparo da comida. A transmissão também ocorre entre pessoas próximas, como quem mora na mesma casa, crianças em creches e pessoas que vivem em instituições de longa permanência. O vírus A ainda pode circular em práticas sexuais que envolvem contato com fezes, e a hepatite E pode vir de carne mal cozida de animais infectados, de transfusão de sangue contaminado e da mãe para o filho.',
          'Nas hepatites B, C e D, os vírus passam pelo contato com sangue contaminado e, no caso da B e da D, também por via sexual. As situações mais comuns são compartilhar agulhas, seringas, cachimbos e outros equipamentos para uso de drogas, dividir objetos de uso pessoal como lâminas de barbear, escovas de dente e alicates de unha, fazer tatuagem ou colocar piercing sem as normas de higiene, e realizar procedimentos odontológicos, cirúrgicos ou de hemodiálise sem os devidos cuidados de biossegurança. As hepatites B e C também podem passar da mãe para o filho na gestação ou no parto.',
          'A hepatite C não passa pelo leite materno, pela comida, pela água nem pelo contato do dia a dia, como abraçar, beijar ou compartilhar alimentos e bebidas com uma pessoa infectada. Já a hepatite D não tem transmissão própria: para se replicar, o vírus D depende do vírus B. Por isso, quem se protege da hepatite B se protege também da D.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Na maioria dos casos, as hepatites virais não provocam sintomas. A pessoa pode viver anos com o vírus sem saber, e a doença acaba descoberta décadas depois, em um exame de rotina ou na doação de sangue.',
          'Quando aparecem, os sintomas são parecidos entre os tipos e pouco específicos: cansaço, febre, mal-estar, tontura, enjoo, vômitos, dor abdominal, pele e olhos amarelados (icterícia), urina escura e fezes claras. O tempo até os primeiros sintomas varia conforme o vírus: na hepatite A, aparecem de 15 a 50 dias após a infecção e duram menos de dois meses; na hepatite C, cerca de 80% das pessoas não têm sintomas, e entre as que têm, o intervalo pode ser de 2 a 12 semanas; a hepatite E costuma provocar uma infecção aguda que se resolve sozinha em 2 a 6 semanas. A idade também influencia: a hepatite A é pouco sintomática em crianças menores de 6 anos e mais grave em adultos, sobretudo acima de 50 anos.',
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
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Procure ajuda com urgência se a pele e os olhos ficarem amarelados, se a urina ficar muito escura e as fezes clarearem, se houver confusão ou sonolência, vômitos que não param, sangramento fácil nas gengivas ou no nariz, ou dor abdominal intensa. Esses sinais podem indicar insuficiência hepática aguda, uma situação de risco.',
          'Também procure o serviço de saúde se houver uma situação de risco recente, como relação sexual desprotegida ou compartilhamento de agulhas, para avaliar a testagem.',
        ],
      },
      {
        id: 'grupos-de-risco',
        heading: 'Quem corre mais risco',
        paragraphs: [
          'Algumas situações aumentam a exposição à infecção, e outras aumentam o risco de a doença evoluir de forma grave:',
        ],
        bullets: [
          'Compartilhar equipamentos de uso de drogas',
          'Ter relações sexuais sem preservativo',
          'Viver em locais sem saneamento básico adequado, o que pesa mais para as hepatites A e E',
          'Trabalhar com exposição a sangue, como em serviços de saúde',
          'Estar grávida, principalmente no segundo e no terceiro trimestre, no caso da hepatite E',
          'Já ter outra doença do fígado',
          'Viver com HIV ou outra condição que enfraquece a imunidade',
          'Usar medicamentos que suprimem a imunidade ou ter passado por transplante de órgãos',
          'Ser adulto acima de 50 anos, no caso da hepatite A',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa com um exame de sangue. Nas unidades básicas de saúde (UBS), o teste rápido para as hepatites B e C é gratuito e o resultado sai em poucos minutos. Qualquer pessoa pode pedir o teste, mesmo sem sintomas, e a testagem é indicada para todas as pessoas adultas pelo menos uma vez na vida. Toda gestante deve fazer os exames para as hepatites B e C durante o pré-natal, já na primeira consulta. As hepatites virais são doenças de notificação compulsória: todo caso confirmado é registrado pelos serviços de saúde, o que ajuda o país a acompanhar a doença e a planejar as ações de saúde pública.',
          'Quando o teste de triagem é reagente, o médico pede exames complementares para confirmar a infecção ativa e avaliar o fígado:',
        ],
        bullets: [
          'Hepatite A: anticorpo anti-HAV IgM na triagem, que indica infecção recente, e anti-HAV IgG na confirmação, que mostra infecção passada ou resposta à vacina',
          'Hepatite B: antígeno HBsAg na triagem e carga viral (HBV-DNA) na confirmação',
          'Hepatite C: anticorpos anti-HCV na triagem e carga viral (HCV-RNA) na confirmação',
          'Hepatite D: anticorpos anti-HDV na triagem e carga viral (HDV-RNA) ou exame de tecido do fígado na confirmação',
          'Hepatite E: anticorpo IgM anti-HEV na triagem e material genético do vírus nas fezes (RT-PCR) na confirmação',
        ],
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'Outras causas de fígado inflamado',
        paragraphs: [
          'Ter um fígado inflamado, por si só, não indica uma hepatite viral. A icterícia e as alterações nas enzimas do fígado também aparecem em outras situações, como leptospirose, malária, febre amarela, efeitos de medicamentos e consumo excessivo de álcool.',
          'Por isso, o diagnóstico não deve ser feito sozinho, a partir de um único sintoma ou de um resultado isolado: quem interpreta os exames junto com o quadro clínico é o médico.',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'As hepatites A e E não têm tratamento específico. O corpo elimina o vírus sozinho na maioria dos casos. O cuidado consiste em repouso, hidratação e alimentação adequada, com medicamentos para aliviar os sintomas quando necessário. Não se automedique: remédios desnecessários ou tóxicos para o fígado podem piorar o quadro. A internação fica reservada aos casos mais graves, como a insuficiência hepática aguda.',
          'A hepatite B não tem cura, mas tem tratamento. O SUS oferece medicamentos que controlam a infecção e reduzem o risco de cirrose, câncer de fígado e morte: alfapeginterferona, tenofovir desoproxila (TDF), entecavir e tenofovir alafenamida (TAF).',
          'A hepatite C tem cura. O tratamento usa os antivirais de ação direta (DAA), que eliminam o vírus em mais de 95% dos casos, geralmente em 12 ou 24 semanas. O SUS fornece esses medicamentos, inclusive para crianças a partir de 3 anos. Nos casos iniciais, o tratamento pode começar na própria unidade básica de saúde.',
          'A hepatite D é tratada em serviço especializado. O único medicamento disponível é a alfapeginterferona 2a, usada junto com os medicamentos da hepatite B. O objetivo é controlar o dano ao fígado, já que a infecção não tem cura. Quem tem hepatite D não deve consumir bebida alcoólica.',
        ],
        cta: {
          label: 'Leia também: hepatite C tem cura',
          href: '/artigos/hepatite-c-tem-cura/',
        },
      },
      {
        id: 'recuperacao',
        heading: 'Recuperação, formas crônicas e complicações',
        paragraphs: [
          'As hepatites A e E costumam se resolver sozinhas e não se tornam crônicas. Já as hepatites B, C e D frequentemente se tornam crônicas, o que significa que o vírus permanece no corpo por mais de seis meses e mantém o fígado inflamado por anos, muitas vezes sem sintomas. A hepatite D é considerada a forma mais grave de hepatite viral, com maior risco de cirrose.',
          'Quando a infecção crônica avança, o fígado pode desenvolver fibrose e cirrose, o que aumenta o risco de câncer de fígado e pode exigir transplante. Na hepatite C, cerca de 70% dos casos agudos se tornam crônicos, e o risco de cirrose fica entre 15% e 30% em 20 anos.',
          'Em casos raros, a doença evolui de forma fulminante, com falência rápida do fígado, situação que pode ser fatal. Esse risco é maior em gestantes com hepatite E no segundo ou no terceiro trimestre.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'A prevenção combina vacinação, cuidados de higiene e saneamento e medidas de barreira. O preservativo é distribuído gratuitamente na rede pública de saúde; quem não sabe onde retirar pode ligar para o Disque Saúde, no número 136. Além da vacinação, ajudam a reduzir a transmissão:',
        ],
        bullets: [
          'Lavar as mãos depois de usar o banheiro, antes de preparar alimentos e depois de trocar fraldas',
          'Lavar frutas, verduras e legumes em água corrente; o que for consumido cru deve ficar 15 minutos em solução clorada, feita com 1 litro de água e 10 ml de água sanitária a 2,5%, sem perfume e indicada para uso em alimentos',
          'Cozinhar bem os alimentos, principalmente carne suína, mariscos, peixes e frutos do mar',
          'Usar preservativo em todas as relações sexuais',
          'Não compartilhar agulhas, seringas, cachimbos nem objetos de uso pessoal que possam ter contato com sangue, como lâminas de barbear, escovas de dente e alicates de unha',
          'Exigir material esterilizado em tatuagens, piercings, procedimentos odontológicos e sessões de manicure',
          'Manter a higiene e o saneamento em casa, em creches, escolas e restaurantes',
        ],
      },
      {
        id: 'vacinacao',
        heading: 'Vacinas contra as hepatites',
        paragraphs: [
          'A vacinação é a principal medida de prevenção contra as hepatites A e B. A vacina contra a hepatite B também protege contra a hepatite D, porque o vírus D depende do B para causar infecção.',
          'A vacina contra a hepatite B está disponível gratuitamente no SUS para todas as pessoas que ainda não foram vacinadas, em qualquer idade. Para crianças, o esquema tem quatro doses: ao nascer e aos 2, 4 e 6 meses de idade, sendo as três últimas aplicadas na vacina pentavalente. Para adolescentes, adultos e pessoas idosas, o esquema completo costuma ter três doses.',
          'A vacina contra a hepatite A faz parte do calendário infantil, em dose única aos 15 meses de idade, podendo ser aplicada entre 12 meses e 4 anos, 11 meses e 29 dias. Também está disponível nos Centros de Referência para Imunobiológicos Especiais (CRIE) para pessoas com condições específicas, como hepatopatias crônicas, pessoas vivendo com HIV e candidatos a transplante.',
          'Quando a mãe tem hepatite B, o recém-nascido recebe a vacina e a imunoglobulina anti-hepatite B nas primeiras 24 horas de vida, medida que previne mais de 90% das transmissões da mãe para o bebê.',
        ],
        cta: {
          label: 'Leia também: como se proteger das hepatites A e B',
          href: '/artigos/hepatites-virais-quais-tem-vacina/',
        },
      },
    ],
    faq: [
      {
        question: 'Hepatite tem cura?',
        answer:
          'A hepatite C tem cura com o tratamento disponível no SUS. A hepatite B não tem cura, mas o tratamento controla a infecção e reduz as complicações. As hepatites A e E costumam se resolver sozinhas.',
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
      {
        question: 'Hepatite é contagiosa? Pega pelo beijo?',
        answer:
          'Depende do tipo. As hepatites A e E passam pela água e pelos alimentos contaminados e pelo contato fecal-oral, inclusive em algumas práticas sexuais. As hepatites B, C e D passam pelo sangue e pelas relações sexuais. A hepatite C não passa pelo beijo, pelo abraço nem pelo compartilhamento de alimentos.',
      },
      {
        question: 'Quais são os primeiros sintomas de hepatite?',
        answer:
          'Os primeiros sintomas costumam ser cansaço, febre, mal-estar, dores musculares, enjoo e dor abdominal. Muitas pessoas não têm nenhum sintoma, e a pele e os olhos amarelados podem aparecer depois.',
      },
      {
        question: 'Onde faço o teste e quanto custa?',
        answer:
          'O teste rápido para as hepatites B e C é gratuito e está disponível nas unidades básicas de saúde do SUS. O resultado sai em poucos minutos, e você pode pedir o teste mesmo sem sintomas.',
      },
      {
        question: 'Quem já teve hepatite A pode ter de novo?',
        answer:
          'Não. Quem se recupera da hepatite A desenvolve imunidade duradoura e não contrai a doença novamente. O mesmo vale para quem foi vacinado.',
      },
      {
        question: 'Quem tem hepatite pode doar sangue?',
        answer:
          'Quem tem hepatite C não deve doar sangue nem sêmen. Nos bancos de sangue, a triagem também impede a doação de pessoas com as outras formas de hepatite.',
      },
      {
        question: 'Como evitar passar hepatite para o bebê na gravidez?',
        answer:
          'Toda gestante faz os exames de hepatite B e C no pré-natal. Se o resultado for reagente, o serviço de saúde indica o acompanhamento e as medidas para proteger o bebê. Quando a mãe tem hepatite B, o recém-nascido recebe a vacina e a imunoglobulina anti-hepatite B nas primeiras 24 horas de vida.',
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
    id: 'asma',
    slug: 'asma',
    name: 'Asma',
    aliases: ['asma', 'crise de asma', 'bronquite asmática', 'asma brônquica'],
    summary:
      'Doença inflamatória crônica das vias aéreas, com obstrução reversível do fluxo de ar. Os sintomas vão e voltam, e o controle depende de tratamento contínuo.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é asma?',
        paragraphs: [
          'A asma é uma doença inflamatória crônica das vias aéreas. Essa inflamação deixa as vias mais sensíveis e faz com que elas se estreitem com facilidade em contato com poeira, mofo, fumaça, mudanças de tempo e infecções respiratórias.',
          'Quando as vias aéreas se estreitam, o ar passa com dificuldade. O resultado é chiado, falta de ar, aperto no peito e tosse, que aparecem em episódios chamados crises e se alternam com períodos de controle.',
          'A asma atinge cerca de 4,6% dos adultos e 12,1% das crianças no Brasil, segundo o Protocolo Clínico e Diretrizes Terapêuticas da asma do Ministério da Saúde, publicado em 2026. O país registra em média cerca de seis mortes por dia pela doença, a maior parte evitável com tratamento adequado.',
        ],
      },
      {
        id: 'tipos-de-asma',
        heading: 'Asma tem tipos diferentes?',
        paragraphs: [
          'A asma é uma só doença, mas pode ser classificada de formas diferentes, e essa classificação ajuda a orientar o tratamento:',
        ],
        bullets: [
          'Asma alérgica: a forma mais comum, em que as crises são desencadeadas por alérgenos como ácaros, poeira, pelos de animais e mofo.',
          'Asma não alérgica: as crises são provocadas por outros gatilhos, como infecções respiratórias, fumaça, exercício, ar frio e estresse.',
          'Asma leve, moderada ou grave: classificação pela frequência dos sintomas e pelo tipo de tratamento necessário para manter a doença controlada.',
          'Asma ocupacional: surge ou piora por causa de substâncias presentes no ambiente de trabalho, como poeiras, vapores e produtos químicos.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os sintomas da asma vão e voltam, e a intensidade varia de pessoa para pessoa e ao longo do tempo. Os mais comuns são:',
        ],
        bullets: [
          'Chiado no peito, chamado de sibilância',
          'Falta de ar, que piora com esforço',
          'Aperto ou pressão no peito',
          'Tosse, muitas vezes seca e persistente, sobretudo à noite',
          'Piora dos sintomas à noite ou no início da manhã',
          'Cansaço para atividades que antes eram fáceis',
          'Acordar durante a noite por falta de ar ou tosse',
        ],
        cta: {
          label: 'Leia também: o que fazer em uma crise de asma',
          href: '/artigos/asma-crise-o-que-fazer-enquanto-espera-atendimento/',
        },
      },
      {
        id: 'transmissao',
        heading: 'Asma é contagiosa?',
        paragraphs: [
          'Não. A asma é uma doença crônica não transmissível: ela não passa de uma pessoa para outra, nem pelo ar, nem pelo contato.',
          'Uma infecção respiratória, como um resfriado ou uma gripe, pode desencadear uma crise em quem tem asma, mas isso não significa que a doença tenha sido transmitida.',
        ],
      },
      {
        id: 'fatores-de-risco',
        heading: 'O que aumenta o risco de asma?',
        paragraphs: [
          'Alguns fatores aumentam a chance de desenvolver asma ou de ter crises mais frequentes. Entre eles:',
        ],
        bullets: [
          'História familiar de asma, rinite alérgica ou dermatite atópica',
          'Exposição à fumaça do tabaco, sobretudo durante a gravidez e na primeira infância',
          'Contato frequente com ácaros, poeira, mofo e pelos de animais',
          'Infecções respiratórias de repetição na infância',
          'Obesidade',
          'Exposição a substâncias irritantes no ambiente de trabalho',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa pela história clínica e pelo exame físico. São valorizados sintomas que vão e voltam, que pioram à noite ou no início da manhã e que aparecem depois do contato com um gatilho.',
          'A confirmação vem da espirometria, um exame que mede como o ar entra e sai dos pulmões e registra o volume expiratório forçado no primeiro segundo, o VEF1. A prova é feita antes e depois do uso de um broncodilatador: um aumento do VEF1 de pelo menos 12% e 200 mL confirma que a obstrução é reversível, característica da asma.',
          'Em crianças pequenas, a espirometria pode ser difícil de realizar, e o diagnóstico fica apoiado nos sintomas e na resposta ao tratamento. Nesses casos, o médico também precisa descartar outras causas de tosse e chiado, como bronquiolite, rinite alérgica e refluxo.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir as crises',
        paragraphs: [
          'Com o tratamento de controle bem feito e alguns cuidados no dia a dia, é possível reduzir a frequência e a gravidade das crises:',
        ],
        bullets: [
          'Não fumar e evitar a exposição à fumaça do tabaco, inclusive a passiva',
          'Reduzir o contato com ácaros, poeira, mofo e pelos de animais, mantendo a casa ventilada e sem acúmulo de objetos que juntam pó',
          'Manter as vacinas em dia, sobretudo contra a gripe: pessoas com asma em uso de corticoide inalatório ou sistêmico, na forma moderada ou grave, estão entre os grupos prioritários da campanha anual de vacinação',
          'Usar o medicamento de controle todos os dias, mesmo nos períodos sem sintomas',
          'Reconhecer e evitar os gatilhos pessoais',
          'Manter atividade física e peso saudável, com orientação profissional',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento da asma tem duas frentes. O medicamento de controle reduz a inflamação das vias aéreas e deve ser usado todos os dias, mesmo quando a pessoa está bem. O medicamento de alívio abre a via aérea durante a crise, mas não substitui o de controle.',
          'Segundo o Protocolo Clínico e Diretrizes Terapêuticas da asma, do Ministério da Saúde, todo paciente deve ter acesso a um broncodilatador de ação rápida para alívio dos sintomas e, quando os sintomas são frequentes ou há histórico de crises graves, o tratamento de controle começa com um corticosteroide inalatório.',
          'No SUS, o tratamento é gratuito: beclometasona e salbutamol inalatórios e prednisona estão disponíveis nas unidades de saúde para o controle da asma.',
          'Usar o inalador do jeito certo é parte do tratamento, porque a técnica errada faz o medicamento não chegar aos pulmões. Vale pedir ao profissional de saúde que observe a sua técnica na próxima consulta.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'Uma crise grave é uma emergência. Procure atendimento de emergência ou vá imediatamente a um pronto atendimento, sem esperar a crise melhorar sozinha, se houver:',
        ],
        bullets: [
          'Dificuldade para falar frases completas',
          'Uso visível da musculatura do pescoço e das costelas para respirar',
          'Lábios ou pontas dos dedos azulados',
          'Sonolência ou confusão durante a crise',
          'Falta de resposta ao medicamento de alívio',
          'Piora progressiva apesar do tratamento habitual',
          'Chiado muito intenso ou, ao contrário, peito silencioso, sem chiado audível, com grande dificuldade para respirar',
        ],
      },
    ],
    faq: [
      {
        question: 'Asma tem cura?',
        answer:
          'A asma não tem cura, mas pode ser controlada. Com o tratamento de controle feito corretamente, a maior parte das pessoas vive sem crises frequentes e sem limitação nas atividades do dia a dia.',
      },
      {
        question: 'Posso usar só a bombinha de alívio quando sinto falta de ar?',
        answer:
          'Não. O medicamento de alívio trata o sintoma, mas não a inflamação das vias aéreas. Usar apenas o de alívio com frequência indica que o controle está inadequado e exige reavaliação profissional.',
      },
      {
        question: 'Quem tem asma pode fazer exercício físico?',
        answer:
          'Sim. A atividade física faz parte do tratamento e melhora a capacidade respiratória. Se o exercício provoca crises com frequência, o controle pode estar inadequado, e o tratamento costuma ser ajustado para permitir a prática sem sintomas.',
      },
    ],
    relatedArticleSlugs: [
      'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      'asma-sintomas-e-sinais-de-alerta',
      'asma-diagnostico-e-exames',
      'asma-tratamento-e-controle',
      'asma-como-evitar-crises',
    ],
    relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedDiseaseSlugs: ['dpoc', 'hipertensao'],
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
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'dpoc',
    slug: 'dpoc',
    name: 'DPOC',
    aliases: ['DPOC', 'bronquite crônica', 'enfisema', 'doença pulmonar obstrutiva crônica'],
    summary:
      'Doença pulmonar obstrutiva crônica: limitação progressiva do fluxo de ar, ligada sobretudo ao tabagismo. Tem tratamento e dá para viver melhor com ela.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é DPOC?',
        paragraphs: [
          'A DPOC, sigla de doença pulmonar obstrutiva crônica, é uma doença crônica que obstrui a passagem do ar nos pulmões e reúne o enfisema e a bronquite crônica.',
          'A obstrução é progressiva e está ligada sobretudo ao tabagismo, mas não só a ele: a poeira e a fumaça do trabalho e de casa também pesam. É a terceira causa de morte no mundo, segundo a Organização Mundial da Saúde, e costuma se manifestar depois dos 40 anos.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os sintomas da DPOC surgem de forma gradual e pioram com o tempo.',
        ],
        bullets: [
          'Chiado no peito, chamado de sibilância',
          'Falta de ar, que piora com esforço',
          'Aperto ou pressão no peito',
          'Tosse, muitas vezes com catarro',
          'Piora dos sintomas à noite ou no início da manhã',
          'Cansaço para atividades que antes eram fáceis',
          'Perda de peso e de apetite nas fases mais avançadas',
        ],
      },
      {
        id: 'fatores-de-risco',
        heading: 'O que aumenta o risco?',
        paragraphs: [
          'O cigarro é o principal fator de risco, e o risco cresce com a quantidade e o tempo de exposição. A fumaça de segunda mão e a fumaça de lenha ou carvão em ambientes fechados também adoecem.',
          'Outros fatores pesam: a poeira e os vapores químicos no trabalho, a poluição do ar, as infecções respiratórias na infância, a asma e a deficiência de alfa-1 antitripsina, uma condição genética rara.',
        ],
        bullets: [
          'Fumar, em qualquer quantidade, e conviver com quem fuma',
          'Trabalhar exposto a poeira, sílica, cimento ou vapores químicos sem proteção',
          'Cozinhar ou aquecer a casa com lenha ou carvão em ambiente sem ventilação',
          'Ter história familiar, asma de difícil controle ou infecções respiratórias repetidas na infância',
        ],
      },
      {
        id: 'transmissao',
        heading: 'DPOC é contagiosa?',
        paragraphs: [
          'Não. A DPOC é uma doença crônica não transmissível. Uma infecção respiratória pode desencadear uma piora, mas a doença em si não passa de uma pessoa para outra.',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa pela história clínica e pelo exame físico, e é confirmado pela espirometria, um exame que mede como o ar entra e sai dos pulmões. Na DPOC, a obstrução não melhora de forma significativa depois do broncodilatador, o que ajuda a diferenciá-la da asma.',
          'O critério adotado pelas diretrizes é a relação entre o volume expirado no primeiro segundo (VEF1) e a capacidade vital forçada (CVF) abaixo de 0,70 depois do broncodilatador. A gravidade é classificada a partir do VEF1.',
        ],
        cta: {
          label: 'Leia também: como a DPOC é diagnosticada',
          href: '/artigos/dpoc-como-e-diagnosticada/',
        },
      },
      {
        id: 'exacerbacao',
        heading: 'O que é uma exacerbação?',
        paragraphs: [
          'A exacerbação, ou crise, é uma piora súbita dos sintomas que dura dois dias ou mais e não melhora sozinha. A falta de ar aumenta, o catarro fica mais abundante ou mais escuro e pode aparecer febre.',
          'Na maioria das vezes uma infecção respiratória dispara a crise. O tratamento costuma incluir reforço dos broncodilatadores e, quando indicado, corticoide e antibiótico. Crise grave exige atendimento de emergência.',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'O tratamento da DPOC inclui broncodilatadores inalatórios, reabilitação pulmonar e, principalmente, parar de fumar, a medida que mais muda a evolução da doença.',
          'Usar o inalador do jeito certo é parte do tratamento: a técnica errada faz o medicamento não chegar aos pulmões. Em quem tem baixa de oxigênio no sangue, pode ser indicada a oxigenoterapia em casa, usada por pelo menos 15 horas por dia.',
        ],
        cta: {
          label: 'Leia também: tratamento e cuidados na DPOC',
          href: '/artigos/dpoc-tratamento-e-cuidados/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Como reduzir crises e a progressão',
        bullets: [
          'Não fumar e evitar a exposição à fumaça do tabaco, inclusive passiva',
          'Evitar contato com poeira, fumaça e outros poluentes',
          'Manter as vacinas em dia, sobretudo contra a gripe, contra a covid-19 e contra o pneumococo',
          'Seguir o tratamento todos os dias, mesmo nos períodos sem sintomas',
          'Controlar peso e manter atividade física, com orientação profissional',
          'Revisar a técnica do inalador nas consultas de acompanhamento',
        ],
        cta: {
          label: 'Leia também: o que ajuda a prevenir as crises',
          href: '/artigos/dpoc-como-prevenir-crises-e-o-papel-das-vacinas/',
        },
      },
      {
        id: 'complicacoes',
        heading: 'Complicações e outras condições',
        paragraphs: [
          'A DPOC costuma vir acompanhada de outras condições, que se influenciam entre si e merecem acompanhamento na mesma rotina de consultas.',
        ],
        bullets: [
          'Doenças cardiovasculares, como insuficiência cardíaca e arritmias',
          'Osteoporose, sobretudo em quem usa corticoide com frequência',
          'Ansiedade e depressão',
          'Perda de peso e de massa muscular',
          'Apneia do sono e, em quem fumou por muitos anos, maior risco de câncer de pulmão',
        ],
      },
      {
        id: 'vida-diaria',
        heading: 'Vida diária com DPOC',
        paragraphs: [
          'Com tratamento e acompanhamento, a maioria das pessoas consegue manter uma rotina ativa. Alguns ajustes ajudam a viver melhor com a doença.',
        ],
        bullets: [
          'Manter alimentação equilibrada e peso saudável, porque os músculos da respiração também dependem de nutrição adequada',
          'Praticar atividade física adaptada à condição, com orientação profissional',
          'Treinar a respiração, como a respiração com os lábios franzidos e a respiração diafragmática',
          'Deixar a casa ventilada e livre de fumaça, poeira e mofo',
          'Manter consultas regulares e revisar os medicamentos com a equipe de saúde',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'Uma piora grave é uma emergência. Procure atendimento de emergência ou vá imediatamente a um pronto atendimento, sem esperar melhorar sozinho, se houver:',
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
          label: 'Leia também: sinais de alerta na DPOC',
          href: '/artigos/dpoc-sinais-de-alerta-quando-procurar-atendimento/',
        },
      },
    ],
    faq: [
      {
        question: 'Parar de fumar ajuda quem já tem DPOC?',
        answer:
          'Sim. É a medida que mais altera a evolução da doença: reduz a velocidade da perda de função pulmonar e melhora os sintomas.',
      },
      {
        question: 'DPOC tem cura?',
        answer:
          'Não existe cura que devolva a função pulmonar perdida, mas o tratamento controla os sintomas, reduz as crises e permite manter uma vida ativa.',
      },
      {
        question: 'Quem tem DPOC precisa tomar vacinas?',
        answer:
          'Sim. A vacina contra a gripe é recomendada todos os anos, e há outras indicadas, como a do pneumococo e a da covid-19. A equipe de saúde orienta quais são as suas.',
      },
    ],
    relatedArticleSlugs: [
      'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro',
      'dpoc-sinais-de-alerta-quando-procurar-atendimento',
      'dpoc-como-e-diagnosticada',
      'dpoc-tratamento-e-cuidados',
      'dpoc-como-prevenir-crises-e-o-papel-das-vacinas',
    ],
    relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedDiseaseSlugs: ['asma', 'hipertensao'],
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
      {
        label: 'Calendário Nacional de Vacinação',
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        publisher: 'Ministério da Saúde (Brasil)',
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
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-15',
    isPlaceholder: true,
  },
  {
    id: 'infarto-e-avc',
    slug: 'infarto-e-avc',
    name: 'Infarto e AVC',
    aliases: ['ataque cardíaco', 'infarto agudo do miocárdio', 'IAM', 'derrame', 'acidente vascular cerebral', 'AVC'],
    summary:
      'Duas emergências cardiovasculares em que cada minuto conta. Reconhecer os sinais e buscar atendimento de emergência imediatamente muda o desfecho.',
    category: 'Doenças crônicas',
    categorySlug: 'doencas-cronicas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que são infarto e AVC?',
        paragraphs: [
          'O infarto agudo do miocárdio, também chamado de ataque cardíaco, acontece quando uma artéria que leva sangue ao coração é obstruída por um coágulo e uma parte do músculo cardíaco fica sem oxigênio.',
          'O AVC, acidente vascular cerebral, acontece quando uma artéria do cérebro é obstruída ou se rompe, e uma região do cérebro deixa de receber sangue.',
          'São eventos diferentes, mas têm o mesmo mecanismo: tecido sem oxigênio começa a morrer em minutos. Por isso os dois são emergências, e o tempo é o fator que mais pesa no desfecho.',
          'As doenças cardiovasculares são a principal causa de morte no mundo, e o infarto e o AVC respondem pela maior parte dessas mortes.',
        ],
      },
      {
        id: 'tipos',
        heading: 'Quais são os tipos?',
        paragraphs: [
          'O AVC tem dois tipos principais. O AVC isquêmico, causado pela obstrução de uma artéria, responde por cerca de 85% dos casos. O AVC hemorrágico, causado pelo rompimento de um vaso, é menos comum, mas costuma levar a quadros mais graves.',
          'No infarto, o que varia entre os casos é o mecanismo da obstrução e o tamanho da área do coração afetada, o que influencia o tratamento e o prognóstico.',
          'Existe ainda o ataque isquêmico transitório, em que os sintomas do AVC desaparecem sozinhos. Ele funciona como sinal de alerta e precisa de avaliação com urgência, porque o risco de AVC aumenta nos dias e meses seguintes.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sinais?',
        paragraphs: [
          'No infarto, o sinal mais comum é a dor ou o aperto no peito, que pode irradiar para o braço esquerdo, o pescoço, a mandíbula ou as costas. A dor costuma vir acompanhada de suor frio, palidez, falta de ar, náusea e sensação de desmaio.',
          'Em pessoas com diabetes e em idosos, o infarto pode se manifestar sem dor intensa, apenas com falta de ar, cansaço ou mal-estar. Nesses casos, a dor pode aparecer no abdômen, parecida com uma gastrite, o que atrasa a busca por atendimento.',
          'No AVC, os sinais costumam ser súbitos e atingir apenas um lado do corpo:',
        ],
        bullets: [
          'Fraqueza ou formigamento de um lado do rosto, do braço ou da perna',
          'Boca torta ou dormência em um lado do rosto',
          'Dificuldade para falar ou para entender o que é dito',
          'Confusão mental',
          'Alteração da visão em um ou nos dois olhos',
          'Dor de cabeça súbita e muito intensa, sem causa aparente',
          'Alteração do equilíbrio, tontura ou dificuldade para andar',
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
          'Não. São doenças cardiovasculares, ligadas a fatores de risco como pressão alta, diabetes, tabagismo e colesterol elevado, e não se transmitem de uma pessoa para outra.',
        ],
      },
      {
        id: 'fatores-de-risco',
        heading: 'Quais são os fatores de risco?',
        paragraphs: [
          'Boa parte dos fatores de risco é comum aos dois eventos: hipertensão, diabetes, colesterol alto, tabagismo, excesso de peso, alimentação inadequada, sedentarismo, uso excessivo de álcool, idade avançada e histórico familiar. Diabetes e hipertensão aumentam de duas a quatro vezes o risco de infarto.',
          'No AVC, a fibrilação atrial merece atenção especial: quando o coração bate de forma irregular, um coágulo pode se formar e viajar até uma artéria do cérebro.',
        ],
        bullets: [
          'Pressão alta, que é o principal fator de risco para o AVC',
          'Diabetes e colesterol alto',
          'Tabagismo e uso excessivo de álcool',
          'Excesso de peso e alimentação rica em sal e ultraprocessados',
          'Sedentarismo',
          'Fibrilação atrial e outras arritmias',
          'Idade avançada e histórico familiar',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'Nos dois casos o diagnóstico é feito no atendimento de urgência, a partir dos sintomas, do exame clínico e de exames de imagem e de sangue. Nada disso deve atrasar o pedido de ajuda.',
          'No infarto, o eletrocardiograma é feito assim que a pessoa chega e o exame de sangue mede a troponina, marcador de lesão do músculo cardíaco.',
          'No AVC, a tomografia computadorizada de crânio é o exame de imagem mais usado na avaliação inicial, porque diferencia o AVC isquêmico do hemorrágico e orienta a escolha do tratamento. Também são verificados a pressão arterial, a glicemia e o horário exato de início dos sintomas.',
          'Quem tem fatores de risco também faz acompanhamento regular para avaliar pressão, glicose, colesterol e outros indicadores, o que permite agir antes do evento.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir',
        paragraphs: [
          'A [hipertensão](/doencas/hipertensao/) é o principal fator de risco para o AVC e um dos principais para o infarto. Boa parte da prevenção é o controle dos fatores de risco ao longo dos anos.',
        ],
        bullets: [
          'Medir a pressão periodicamente e tratar a hipertensão',
          'Controlar a glicose, no caso do diabetes',
          'Não fumar e não usar drogas ilícitas',
          'Reduzir o consumo de álcool',
          'Manter uma alimentação saudável, com menos sal e ultraprocessados',
          'Manter o peso adequado e praticar atividade física regularmente',
          'Tratar arritmias, como a fibrilação atrial, quando diagnosticadas',
          'Tomar a medicação todos os dias, sem interromper por conta própria',
        ],
        cta: {
          label: 'Leia também: os sinais do infarto e o que fazer',
          href: '/artigos/infarto-quais-sao-os-sinais-e-o-que-fazer/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Tratamento e reabilitação',
        paragraphs: [
          'O tratamento começa no atendimento de urgência, com medidas para restabelecer o fluxo de sangue o mais rápido possível. No infarto, a angioplastia primária é o procedimento preferido, e o trombolítico é usado quando essa opção não está disponível no tempo necessário.',
          'No AVC isquêmico, a trombólise endovenosa pode ser indicada quando iniciada em até 4 horas e meia do começo dos sintomas, conforme os protocolos do SUS.',
          'No SUS, o AVC é tratado nos Centros de Atendimento de Urgência, os hospitais de referência para esses casos, e o infarto segue a Linha de Cuidado do Infarto Agudo do Miocárdio, que começa no SAMU. Desde setembro de 2026, uma lei ampliou a oferta de medicamentos trombolíticos na rede de urgência e emergência, incluindo as UPAs.',
          'Depois do evento, o acompanhamento inclui medicamentos, reabilitação e mudanças de hábito. No AVC, a fisioterapia e a fonoaudiologia iniciadas cedo fazem diferença na recuperação dos movimentos e da fala, e a reabilitação pode ser feita nos Centros Especializados em Reabilitação (CER).',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'O que fazer diante de uma suspeita',
        paragraphs: [
          'Chame ajuda imediatamente pelo serviço de emergência local. Se não for possível, leve a pessoa ao serviço de urgência mais próximo. Não espere os sintomas passarem e não leve a pessoa para casa para observar.',
        ],
        bullets: [
          'Anote o horário em que os sintomas começaram: essa informação muda o tratamento',
          'Não ofereça comida, bebida ou medicamento por conta própria',
          'Não deixe a pessoa sozinha',
          'Peça a alguém por perto que chame ajuda, em vez de dirigir você mesmo',
          'Se houver perda de consciência, mantenha as vias aéreas livres e siga as orientações do serviço de emergência',
        ],
      },
    ],
    faq: [
      {
        question: 'Quanto tempo tenho para procurar ajuda em um AVC?',
        answer:
          'Procure ajuda o mais rápido possível. No AVC isquêmico, a trombólise pode ser indicada em até 4 horas e meia do início dos sintomas, e a demora reduz as chances de recuperação.',
      },
      {
        question: 'Dor no peito sempre significa infarto?',
        answer:
          'Não. Existem outras causas de dor no peito, algumas graves. Como não dá para saber em casa qual é a causa, procure atendimento imediatamente.',
      },
      {
        question: 'Pressão alta tem relação com o AVC?',
        answer:
          'Sim. A hipertensão é o principal fator de risco para o AVC, e por isso o controle da pressão ao longo dos anos é uma das medidas mais eficazes de prevenção.',
      },
      {
        question: 'Infarto e AVC são a mesma coisa?',
        answer:
          'Não. No infarto, a artéria obstruída é uma das que levam sangue ao coração; no AVC, o problema está em uma artéria do cérebro. O que os dois têm em comum é serem emergências em que cada minuto conta.',
      },
    ],
    relatedArticleSlugs: [
      'infarto-quais-sao-os-sinais-e-o-que-fazer',
      'avc-como-reconhecer-os-sinais-e-agir-rapido',
      'infarto-e-avc-fatores-de-risco',
      'infarto-e-avc-como-e-diagnosticado',
      'infarto-e-avc-tratamento-e-reabilitacao',
    ],
    relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
    relatedDiseaseSlugs: ['hipertensao', 'diabetes'],
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
        label: 'Linha de cuidados em AVC na rede de atenção às urgências e emergências',
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/pcdt-cuidados-avc.pdf',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'SUS amplia a oferta de trombolíticos para infarto e AVC',
        url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/sancionada-lei-que-preve-oferta-de-tromboliticos-para-tratamento-de-infarto-e-avc-na-rede-de-urgencia-e-emergencia-do-sus',
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
    id: 'faringite',
    slug: 'faringite-e-amigdalite',
    name: 'Faringite e amigdalite',
    metaTitle: 'Faringite e amigdalite: sintomas e transmissão',
    aliases: ['dor de garganta', 'amigdalite', 'faringite', 'faringoamigdalite', 'inflamação na garganta'],
    summary:
      'Infecção da garganta e das amígdalas, na maioria das vezes viral. Melhora em poucos dias, e o antibiótico só tem lugar quando a causa é bacteriana.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que são faringite e amigdalite?',
        paragraphs: [
          'Faringite é a inflamação da garganta, e amigdalite é a inflamação das amígdalas, duas estruturas de defesa que ficam no fundo da boca. As duas costumam aparecer juntas na mesma infecção, e a dor de garganta está entre os motivos de consulta mais frequentes em qualquer idade.',
          'A causa mais comum é viral. Segundo o Ministério da Saúde, os vírus predominam nas crianças, enquanto as bactérias, em especial o estreptococo do grupo A, atingem mais os jovens e os adultos. Na maioria das vezes a infecção é leve e passa sozinha em poucos dias, mas a forma bacteriana precisa de antibiótico e de tratamento completo, porque complicações como a febre reumática podem aparecer quando o remédio é interrompido antes do fim.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os sintomas se sobrepõem entre as causas virais e bacterianas, e quem distingue é a avaliação profissional.',
        ],
        bullets: [
          'Dor de garganta, pior ao engolir',
          'Febre, calafrios e mal-estar',
          'Gânglios do pescoço inchados e doloridos',
          'Amígdalas vermelhas, por vezes com placas de pus',
          'Falta de apetite',
          'Na causa viral, costumam acompanhar tosse e corrimento nasal',
        ],
      },
      {
        id: 'transmissao',
        heading: 'É contagiosa? Como se transmite?',
        paragraphs: [
          'Sim, a forma aguda é contagiosa. Os germes da garganta circulam pelas gotículas que a pessoa infectada libera ao tossir, espirrar ou falar, e também pelos objetos de uso pessoal compartilhados, como copos, talheres e escovas de dente. Ambientes fechados e aglomerados favorecem a transmissão.',
          'A amigdalite de repetição costuma ter outras causas por trás, como o refluxo gastroesofágico, e nesse caso não é uma infecção que passa de uma pessoa para outra.',
        ],
      },
      {
        id: 'como-e-diagnosticada',
        heading: 'Como o profissional diferencia a causa?',
        paragraphs: [
          'Não dá para saber em casa se a dor de garganta é viral ou bacteriana, porque os sintomas se parecem. O profissional examina a garganta e as amígdalas com um abaixador de língua e observa febre, gânglios do pescoço e a presença de placas de pus.',
          'Quando a suspeita é de estreptococo, ele pode pedir um exame da secreção da garganta, como a cultura ou o teste rápido, para confirmar a bactéria antes de indicar antibiótico. Tosse e corrimento nasal apontam mais para causa viral, que não responde a antibiótico.',
        ],
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento?',
        paragraphs: [
          'A dor de garganta viral se resolve sozinha em poucos dias. Procure atendimento quando ela durar mais de quatro dias sem sinal de melhora, quando impedir beber líquidos, ou quando vier acompanhada de sinais que pedem avaliação imediata.',
        ],
        bullets: [
          'Dificuldade para respirar ou para engolir a própria saliva',
          'Febre alta que não cede',
          'Inchaço importante em um lado da garganta, com dificuldade para abrir a boca',
          'Manchas no corpo ou rigidez na nuca',
          'Criança pequena que recusa líquidos ou fica prostrada',
        ],
        cta: {
          label: 'Veja os sinais de alerta na dor de garganta',
          href: '/artigos/faringite-e-amigdalite-sinais-de-alerta/',
        },
      },
      {
        id: 'tratamento',
        heading: 'Como se trata?',
        paragraphs: [
          'Na infecção viral, o cuidado é de suporte: repouso, líquidos e analgésicos ou antitérmicos orientados por profissional de saúde. Não há medicamento que encurte muito a duração, e a garganta melhora sozinha.',
          'Na amigdalite bacteriana, o antibiótico específico é indicado pelo profissional, e o tratamento precisa ser concluído até o fim, mesmo depois de a dor passar. Interromper o antibiótico antes da hora permite complicações, como a febre reumática, que pode atingir o coração, e a resistência bacteriana, um problema de saúde pública.',
          'Antibiótico por conta própria em dor de garganta viral não acelera a melhora: ele não age sobre vírus, traz efeitos colaterais e fortalece bactérias resistentes.',
        ],
        cta: {
          label: 'Leia sobre o tratamento e os cuidados em casa',
          href: '/artigos/faringite-e-amigdalite-tratamento-e-cuidados/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Dá para prevenir?',
        paragraphs: [
          'Não existe vacina contra a dor de garganta comum, então a prevenção depende de hábitos que reduzem a circulação dos germes.',
        ],
        bullets: [
          'Lavar as mãos com frequência, sobretudo depois de tocar objetos de uso coletivo',
          'Não compartilhar copos, talheres, garrafas e escovas de dente',
          'Evitar beijos na boca quando estiver com resfriado ou dor de garganta',
          'Manter os ambientes ventilados e evitar aglomerações fechadas',
          'Não fumar e ficar longe do cigarro, porque o tabagismo favorece as infecções das amígdalas',
          'Investigar e tratar o refluxo gastroesofágico nos casos de amigdalite de repetição',
        ],
        cta: {
          label: 'Veja como reduzir o risco de novas infecções',
          href: '/artigos/faringite-e-amigdalite-prevencao/',
        },
      },
    ],
    faq: [
      {
        question: 'Dor de garganta precisa de antibiótico?',
        answer:
          'Na maioria das vezes, não. A maior parte das faringites é viral e se resolve em poucos dias sem antibiótico. Ele só se justifica quando o profissional de saúde identifica amigdalite bacteriana, e então deve ser tomado até a última dose prescrita.',
      },
      {
        question: 'Ar frio ou sorvete causam faringite?',
        answer:
          'A infecção é causada por vírus e bactérias, não pela temperatura. O frio ajuda a espalhar essas infecções porque empurra as pessoas para ambientes fechados e aglomerados, onde as gotículas circulam mais.',
      },
      {
        question: 'Amigdalite de repetição precisa de cirurgia?',
        answer:
          'Só em situações específicas, quando as crises são muito frequentes ou surgem complicações, e a decisão é do profissional. Retirar as amígdalas não elimina a dor de garganta, porque faringites e laringites continuam possíveis.',
      },
    ],
    relatedArticleSlugs: [
      'faringite-e-amigdalite-sinais-de-alerta',
      'faringite-e-amigdalite-como-se-transmite',
      'faringite-e-amigdalite-como-e-diagnosticada',
      'faringite-e-amigdalite-tratamento-e-cuidados',
      'faringite-e-amigdalite-prevencao',
    ],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['infarto-e-avc', 'hiv-aids', 'tuberculose'],
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
        label: 'Rheumatic heart disease: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/rheumatic-heart-disease',
        publisher: 'Organização Mundial da Saúde',
      },
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-16',
  },
  {
    id: 'gastroenterite',
    slug: 'gastroenterite',
    name: 'Gastroenterite aguda (diarreia infecciosa)',
    metaTitle: 'Gastroenterite aguda: sintomas e prevenção',
    aliases: [
      'diarreia',
      'infecção intestinal',
      'gastroenterite viral',
      'gastroenterite aguda',
      'virose',
      'diarreia infecciosa',
    ],
    summary:
      'Infecção do estômago e do intestino que causa diarreia e vômitos. Quase sempre viral e passageira, mas a desidratação é o risco real, e o tratamento começa em casa, com soro de reidratação oral.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é gastroenterite aguda?',
        paragraphs: [
          'Gastroenterite aguda é a inflamação do estômago e do intestino causada, na maioria das vezes, por vírus, bactérias ou parasitas. Ela se manifesta como diarreia, que a Organização Mundial da Saúde define como três ou mais evacuações de fezes moles ou líquidas em um dia.',
          'É uma doença comum em qualquer idade, mas os grupos mais vulneráveis são as crianças pequenas e as pessoas idosas, em quem a perda de água e sais pode evoluir rápido. A maioria dos episódios é leve e passa sozinha em poucos dias; o que mais muda o desfecho é a rapidez com que a hidratação é reposta.',
          'Segundo o Ministério da Saúde, as doenças diarreicas agudas atingem sobretudo crianças menores de cinco anos, e a diarreia segue entre as principais causas de morte nessa faixa de idade onde o acesso a água tratada e saneamento é limitado.',
        ],
        cta: {
          label: 'Veja as dúvidas mais frequentes sobre gastroenterite',
          href: '/artigos/gastroenterite-duvidas-frequentes/',
        },
      },
      {
        id: 'tipos',
        heading: 'Quais são os tipos de gastroenterite aguda?',
        paragraphs: [
          'A gastroenterite pode ser infecciosa ou não infecciosa. A forma infecciosa é a mais comum e tem origem em vírus, bactérias ou parasitas. A forma não infecciosa aparece por medicamentos que irritam o estômago e o intestino, por intolerâncias alimentares ou por doenças inflamatórias do intestino.',
          'Quanto ao tempo, a maioria dos episódios é aguda e se resolve em poucos dias. Quando a diarreia passa de 14 dias, ela é classificada como persistente e pede investigação, porque outras causas entram na lista.',
        ],
      },
      {
        id: 'causas',
        heading: 'O que causa a gastroenterite aguda?',
        paragraphs: [
          'Vírus, bactérias e parasitas são as causas mais comuns. Entre os vírus, o rotavírus é o que mais adoece crianças pequenas e o norovírus é o que costuma provocar surtos, enquanto adenovírus e astrovírus aparecem com menos frequência. Entre as bactérias estão a Escherichia coli, a Salmonella, a Shigella e a Campylobacter, além do Vibrio cholerae, causador da cólera. Entre os parasitas, os mais frequentes são a giárdia, a ameba e o Cryptosporidium.',
          'A gastroenterite também pode ter causas não infecciosas. Antibióticos e outros medicamentos, intolerância à lactose, doença celíaca, síndrome do intestino irritável e doenças inflamatórias intestinais, como a doença de Crohn e a retocolite ulcerativa, são quadros que imitam a infecção sem que exista germe a tratar.',
        ],
      },
      {
        id: 'fatores-de-risco',
        heading: 'O que aumenta o risco?',
        paragraphs: [
          'Alguns grupos adoecem com mais facilidade e desidratam mais rápido. Outros fatores têm mais a ver com o ambiente e com os hábitos do dia a dia.',
        ],
        bullets: [
          'Crianças pequenas, sobretudo com menos de seis meses, e pessoas idosas',
          'Interrupção precoce da amamentação e desnutrição',
          'Imunidade reduzida, como em pessoas que vivem com HIV',
          'Ambientes coletivos, como creches e escolas',
          'Água sem tratamento, alimentos crus ou malconservados e saneamento precário',
          'Uso prolongado de antibióticos sem orientação profissional',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'O quadro costuma começar de repente, com sintomas digestivos e, às vezes, febre. A diarreia é o sinal mais característico: para a Organização Mundial da Saúde, fala-se em diarreia a partir de três evacuações de fezes moles ou líquidas em um dia.',
        ],
        bullets: [
          'Diarreia, com fezes moles ou líquidas',
          'Vômitos e náuseas',
          'Dor e cólica abdominal',
          'Febre, nem sempre presente',
          'Sangue ou muco nas fezes, quando a causa é bacteriana ou parasitária',
        ],
        cta: {
          label: 'Veja os sintomas da gastroenterite',
          href: '/artigos/gastroenterite-sintomas/',
        },
      },
      {
        id: 'sintomas-gerais',
        heading: 'Quais outros sinais podem aparecer?',
        paragraphs: [
          'Além dos sintomas digestivos, a gastroenterite costuma vir acompanhada de sinais gerais, como febre, dor de cabeça, dores no corpo e sensação de mal-estar.',
          'Quando a perda de líquidos é grande, surgem os sinais de desidratação, que são os que mais preocupam e os que definem a urgência do atendimento.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como se espalha?',
        paragraphs: [
          'A transmissão é fecal-oral: os germes saem das fezes e entram pela boca. Isso acontece por água e alimentos contaminados, por mãos que não foram lavadas e pelo contato direto com uma pessoa doente ou com objetos contaminados.',
          'Norovírus costuma causar surtos em ambientes fechados, e o rotavírus é o vírus que mais adoece crianças pequenas, segundo a Organização Mundial da Saúde. A diarreia também é um marcador de saneamento: onde falta água tratada, os mesmos micróbios voltam a cada temporada.',
        ],
      },
      {
        id: 'como-e-diagnosticada',
        heading: 'Como é diagnosticada?',
        paragraphs: [
          'Na maioria dos casos, o diagnóstico é clínico, pela história e pelo exame do estado de hidratação, sem necessidade de exame. O que orienta a conduta não é saber o nome do micróbio, e sim o quanto a pessoa perdeu de água e sais.',
          'Quando há sangue ou muco nas fezes, desidratação grave ou suspeita de surto, o profissional pode pedir exames de fezes: coprocultura, exame parasitológico e pesquisa de vírus. Nesses casos, a amostra deve ser colhida antes do uso de antibióticos, para não atrapalhar o resultado.',
          'Quando a desidratação é importante, exames de sangue ajudam a acompanhar os eletrólitos, como sódio e potássio, e o estado geral do paciente.',
          'Nem toda diarreia é infecciosa. Medicamentos, intolerância à lactose, doença celíaca e síndrome do intestino irritável também causam diarreia, e nesses casos não há germe a tratar.',
        ],
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento?',
        paragraphs: [
          'Na diarreia, o que orienta a decisão não é quantos dias dura, mas como a pessoa está. Volte ao serviço de saúde se não houver melhora em dois dias ou se aparecer algum dos sinais abaixo, sobretudo em bebê, criança pequena ou pessoa idosa.',
          'O atendimento pode começar na unidade básica de saúde (UBS) mais próxima, que acompanha o caso e orienta a hidratação. Em quadros graves, com desidratação intensa, procure uma unidade de pronto atendimento (UPA) ou a emergência de um hospital. Em emergência, ligue para o SAMU, no 192; vômitos e diarreia, por si sós, não são motivo para acionar o SAMU.',
        ],
        bullets: [
          'Sangue ou muco nas fezes',
          'Vômitos repetidos que impedem de reter líquidos',
          'Muita sede, boca seca, urina rara e escura',
          'Olhos fundos, moleira afundada em bebês, choro sem lágrimas',
          'Sonolência excessiva, fraqueza ou recusa de alimentos',
        ],
        cta: {
          label: 'Veja quando a gastroenterite pode ser grave',
          href: '/artigos/gastroenterite-pode-ser-grave/',
        },
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'Como diferenciar de outras causas?',
        paragraphs: [
          'Nem toda diarreia é uma gastroenterite infecciosa. Uso de antibióticos, intolerância à lactose, doença celíaca e síndrome do intestino irritável provocam diarreia sem germe, e nesses casos o tratamento é outro.',
          'Quando a diarreia se prolonga, vem com perda de peso, sangue nas fezes ou mudança no hábito intestinal, o profissional investiga causas mais graves, como doenças inflamatórias do intestino e câncer colorretal.',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Como se trata?',
        paragraphs: [
          'O tratamento gira em torno de repor o que se perdeu. O soro de reidratação oral (SRO) é a base do cuidado e deve ser oferecido em pequenos goles e com frequência, desde o primeiro episódio de diarreia. Água e alimentos comuns também contam, mas o SRO repõe água e sais na proporção certa.',
          'Em crianças, a Organização Mundial da Saúde e o Ministério da Saúde recomendam os sais de reidratação oral com zinco por 10 a 14 dias, o que encurta o episódio e reduz o risco de complicações. Manter a alimentação e a amamentação acelera a recuperação.',
          'Quando a perda é maior, a reidratação pode ser feita na unidade de saúde e, nos casos graves, por via intravenosa. Esse plano de reposição é definido pelo profissional após avaliar o grau de desidratação.',
          'Medicamentos que param a diarreia e remédios para vômito não devem ser usados por conta própria, sobretudo em crianças: eles não tratam a causa e não substituem a reposição de líquidos. O antibiótico só tem lugar quando o profissional identifica disenteria, cólera ou outra causa bacteriana ou parasitária específica.',
        ],
        cta: {
          label: 'Veja por que não parar a diarreia com remédio',
          href: '/artigos/gastroenterite-remedios/',
        },
      },
      {
        id: 'complicacoes',
        heading: 'Quais complicações podem aparecer?',
        paragraphs: [
          'A desidratação é a complicação mais comum e a que mais pesa no desfecho. Ela começa com sede e urina escura e, se não for corrigida, evolui para queda da pressão, sonolência e choque.',
          'Quando a perda de líquidos e sais é grande, podem aparecer alterações dos eletrólitos, como queda de sódio e de potássio, que agravam o quadro. Em episódios que se arrastam, a diarreia persistente leva à perda de peso e à desnutrição, sobretudo em crianças.',
          'Em pessoas já debilitadas, o mesmo episódio que passa sozinho em um adulto saudável pode desidratar rápido.',
        ],
      },
      {
        id: 'cuidados-em-casa',
        heading: 'Cuidados e monitoramento em casa',
        paragraphs: [
          'Em casa, o cuidado se concentra em repor líquidos e observar o estado da pessoa ao longo do dia. Alguns hábitos simples também reduzem a transmissão para o resto da família.',
        ],
        bullets: [
          'Separar os utensílios da pessoa doente e, quando possível, o banheiro',
          'Desinfetar superfícies, o vaso sanitário e os objetos tocados com frequência',
          'Lavar as mãos com sabão depois de trocar fraldas, limpar vômito ou usar o banheiro',
          'Anotar o número de evacuações por dia, a presença de sangue ou muco e a temperatura',
          'Observar boca seca, lágrimas ao chorar, quantidade e cor da urina e, em bebês, as fraldas molhadas',
        ],
      },
      {
        id: 'vida-diaria',
        heading: 'Alimentação e rotina durante a doença',
        paragraphs: [
          'Não é preciso parar de comer. Preparações leves e de fácil digestão, oferecidas em porções pequenas e mais vezes ao dia, ajudam na recuperação e não pioram a diarreia.',
          'Em bebês, a amamentação deve continuar. Quem usa fórmula pode receber, com orientação do profissional, uma versão sem lactose durante o episódio. O repouso também faz parte do cuidado, porque o corpo gasta energia para se recuperar.',
        ],
        bullets: [
          'Prefira preparações leves, como arroz, caldo, sopa e frutas',
          'Evite refrigerantes e sucos muito açucarados, que pioram a diarreia',
          'Beba água e soro de reidratação oral ao longo do dia, em pequenos goles',
          'Volte à alimentação habitual aos poucos, conforme a diarreia cede',
        ],
        cta: {
          label: 'Veja o que comer e como se hidratar em casa',
          href: '/artigos/gastroenterite-alimentacao/',
        },
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'Água tratada, saneamento e lavagem das mãos com sabão, antes de comer e depois de usar o banheiro, são a base da prevenção, como destaca a Organização Mundial da Saúde. Também vale higienizar bem frutas, verduras e utensílios de cozinha e manter a amamentação nos primeiros meses de vida.',
          'Contra o rotavírus, o calendário do SUS oferece a vacina oral em duas doses, aos dois e aos quatro meses de idade. Ela não impede toda diarreia, mas reduz muito as formas graves que levam a criança ao hospital.',
        ],
      },
    ],
    faq: [
      {
        question: 'Criança com diarreia deve parar de comer?',
        answer:
          'Não. Suspender a alimentação piora o quadro. Ofereça o soro de reidratação oral à parte, em goles frequentes, e mantenha a comida habitual e a amamentação, em pequenas porções ao longo do dia.',
      },
      {
        question: 'Quanto tempo dura a gastroenterite?',
        answer:
          'Na maioria dos casos, alguns dias. Quando a diarreia passa de 14 dias, ela é classificada como persistente e precisa de investigação, porque aí outras causas entram na lista.',
      },
      {
        question: 'Antibiótico ajuda na diarreia?',
        answer:
          'Na maioria dos casos, não. A gastroenterite comum é viral ou se resolve sozinha, e o antibiótico pode até atrapalhar. Ele só se justifica quando o profissional de saúde identifica disenteria, cólera ou outro agente que exige tratamento específico.',
      },
      {
        question: 'O que comer durante a gastroenterite?',
        answer:
          'Não é preciso ficar sem comer. Prefira preparações leves e de fácil digestão, como arroz, caldo e sopa, em porções pequenas e mais vezes ao dia. Evite refrigerantes e sucos muito açucarados. Em bebês, mantenha a amamentação.',
      },
    ],
    relatedArticleSlugs: [
      'gastroenterite-sintomas',
      'gastroenterite-duvidas-frequentes',
      'gastroenterite-remedios',
      'gastroenterite-alimentacao',
      'gastroenterite-pode-ser-grave',
    ],
    relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
    relatedDiseaseSlugs: ['dengue', 'hepatites-virais', 'hiv-aids'],
    references: [
      {
        label: 'Doenças diarreicas agudas (DDA)',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Rotavírus',
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/rotavirus',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'Diarrhoeal disease: fact sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        publisher: 'Organização Mundial da Saúde',
      },
      {
        label: 'Calendário Nacional de Vacinação — rotavírus',
        url: 'https://www.gov.br/saude/pt-br/vacinacao/calendario?id=0',
        publisher: 'Ministério da Saúde (Brasil)',
      },
      {
        label: 'SAMU 192',
        url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192',
        publisher: 'Ministério da Saúde (Brasil)',
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
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-19',
  },
  {
      id: 'enxaqueca',
      slug: 'enxaqueca',
      name: 'Enxaqueca',
      aliases: ['migrânea', 'hemicrania', 'enxaqueca com aura', 'enxaqueca crônica'],
      summary:
        'Doença do sistema nervoso que vem em crises repetidas de dor de cabeça pulsante, com náusea e incômodo com luz e barulho, durando de 4 a 72 horas. Tem gatilhos identificáveis, remédio para a crise e prevenção para quem acumula dias com dor.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é enxaqueca?',
          paragraphs: [
            'Enxaqueca não é só uma dor de cabeça forte: é uma doença do sistema nervoso. Nela o cérebro processa os sinais de dor de maneira amplificada, os nervos que levam a sensibilidade da cabeça ficam mais excitáveis e as vias de dor se sensibilizam a cada crise. É por isso que a enxaqueca vem com náusea e com incômodo marcado à luz e ao barulho, e não apenas com dor.',
            'O padrão mais comum é o de crises repetidas, separadas por intervalos sem dor. As cefaleias estão entre as condições neurológicas mais frequentes do mundo: cerca de 40% da população, ou 3,1 bilhões de pessoas em 2021, segundo a Organização Mundial da Saúde, com predomínio nas mulheres. A enxaqueca costuma começar na puberdade e pesa mais entre os 35 e os 45 anos. Mesmo sendo uma das maiores causas de anos vividos com limitação, só uma minoria das pessoas afetadas recebe diagnóstico e tratamento adequados, e estima-se que metade trate a dor por conta própria.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Como é uma crise de enxaqueca?',
          paragraphs: [
            'A crise típica dura de 4 a 72 horas sem tratamento. Durante a dor é comum haver náusea ou vômito e incômodo marcado com luz e barulho, o que leva a interromper o que estava sendo feito e procurar um quarto escuro e silencioso. Há também sinais que avisam antes e depois: nas horas ou nos um a dois dias que antecedem a crise podem aparecer fadiga, dificuldade de concentração, rigidez no pescoço, visão borrada, bocejos e palidez; depois que a dor passa, cansaço e dificuldade de concentração podem durar até 48 horas.',
            'Para receber o diagnóstico, a pessoa precisa ter tido pelo menos cinco crises, com dor que reúna ao menos duas destas quatro características:',
          ],
          bullets: [
            'Localização em um lado da cabeça ou atrás de um dos olhos',
            'Caráter pulsátil',
            'Intensidade moderada ou forte',
            'Piora com atividade física rotineira, como caminhar ou subir escadas',
          ],
        },
        {
          id: 'aura',
          heading: 'O que é a aura?',
          paragraphs: [
            'Parte das pessoas tem crises precedidas de aura: sintomas neurológicos transitórios e completamente reversíveis, que costumam surgir antes da dor e duram minutos. O tipo mais comum é visual, descrito como um zigue-zague brilhante ou uma mancha que cresce no campo de visão. Vêm em seguida os sintomas sensoriais, um formigueiro que caminha lentamente por um lado do corpo, da face ou da língua e pode deixar dormência no rastro, e com menos frequência a dificuldade com a fala.',
            'Um sintoma de aura típico se instala devagar, ao longo de 5 minutos ou mais, e cada um costuma durar entre 5 e 60 minutos. Esse ritmo importa para o diagnóstico: o AVC e o ataque isquêmico transitório começam de súbito, e por isso uma aura que aparece pela primeira vez depois dos 40 anos, uma aura prolongada demais ou curta demais, ou feita apenas de perda de visão, precisa de investigação para excluir outras causas. Estudos de base populacional mostram risco duplicado de AVC isquêmico em quem tem enxaqueca com aura, associação que não aparece de forma consistente na enxaqueca sem aura. [Veja como reconhecer os sinais de AVC](/artigos/avc-como-reconhecer-os-sinais-e-agir-rapido/).',
          ],
        },
        {
          id: 'tipos-de-cefaleia',
          heading: 'Enxaqueca, dor de cabeça tensional ou outra coisa?',
          paragraphs: [
            'A confusão mais comum é com a cefaleia do tipo tensão, descrita como pressão ou aperto, muitas vezes como uma faixa ao redor da cabeça, às vezes vindo do pescoço. Diferente da enxaqueca, ela costuma não piorar com esforço físico e não vem acompanhada de náusea. Sua forma episódica, que ocorre em menos de 15 dias por mês, é relatada por mais de 70% de algumas populações e dura de algumas horas a vários dias. A forma crônica pode ser contínua e é mais incapacitante que a episódica.',
            'Existe ainda a cefaleia em salvas, rara (menos de 1 em cada 1.000 adultos), de dor intensíssima em torno de um olho, com olho vermelho, lágrima e nariz entupido do mesmo lado, em crises curtas que podem voltar várias vezes ao dia. E existe a cefaleia secundária, causada por outra condição, cujo exemplo mais comum no mundo é a cefaleia por uso excessivo de medicamentos. Um mesmo paciente pode ter dois tipos de cefaleia ao mesmo tempo, e cada tipo merece seu próprio diagnóstico.',
          ],
        },
        {
          id: 'gatilhos-e-fatores-de-risco',
          heading: 'O que desencadeia e quem tem mais chance',
          paragraphs: [
            'A causa exata da enxaqueca ainda não é conhecida; aceita-se que haja liberação de substâncias inflamatórias que produzem dor ao redor dos nervos e dos vasos sanguíneos da cabeça. É mais comum em mulheres, possivelmente pela influência hormonal, e menos de 10% delas têm crises ligadas à maioria dos ciclos menstruais, geralmente mais longas e com náusea mais intensa. Em crianças e adolescentes, as crises podem durar de 2 a 72 horas, a dor é mais frequentemente dos dois lados da cabeça e os sintomas abdominais aparecem com mais força. Ansiedade e depressão são significativamente mais frequentes em quem tem enxaqueca, e as crises repetidas, junto com o medo da próxima, atingem estudo, trabalho e vida familiar.',
            'Os gatilhos variam de pessoa para pessoa, mas a OMS descreve estes:',
          ],
          bullets: [
            'Bebida alcoólica',
            'Sono desarrumado, tanto de menos quanto de mais',
            'Certos alimentos',
            'Pular refeições e beber pouca água ao longo do dia',
            'Gatilhos próprios, que só aparecem registrados em um diário de dor de cabeça',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'O diagnóstico é clínico. Não existe exame de sangue nem de imagem que confirme a enxaqueca: o que resolve é o relato das crises, com duração, frequência, características e o que a pessoa faz para a dor passar. Quando o padrão está confuso, um diário preenchido por algumas semanas desenha a doença e ainda mostra quanto remédio está sendo usado de verdade.',
            'Exames entram quando há sinal de outra causa ou quando o padrão muda. Vale medir a pressão arterial: o Ministério da Saúde recomenda que toda pessoa com mais de 20 anos faça a aferição pelo menos uma vez por ano, e ela está disponível na unidade básica de saúde (UBS). Pressão alta, diabetes e tabagismo são os fatores que abrem caminho para o AVC, e por isso entram na conta de quem tem dor de cabeça frequente.',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Como tratar a crise e reduzir a frequência',
          paragraphs: [
            'Na crise, o que faz diferença é tomar o analgésico no primeiro sinal de que ela começou, inclusive quando o aviso é a aura, e não esperar a dor se instalar. Antieméticos e medicamentos específicos para enxaqueca, como os triptanos, estão entre as opções que o médico pode escolher para cada caso, assim como os medicamentos preventivos, tomados todos os dias por quem tem muitos dias com dor.',
            'Antes de escalar remédios, a OMS destaca o que funciona de forma simples: restringir ou eliminar o álcool, beber água ao longo do dia, arrumar o sono e usar um calendário de cefaleia para identificar gatilhos. O acompanhamento médico serve também para revisar a frequência dos analgésicos, porque o uso excessivo é justamente o que transforma uma enxaqueca episódica em dor quase diária.',
          ],
          cta: {
            label: 'Leia também: tratamento e cuidados na enxaqueca',
            href: '/artigos/enxaqueca-tratamento-e-cuidados/',
          },
        },
        {
          id: 'complicacoes',
          heading: 'Quando a dor de cabeça passa a ser quase todo dia',
          paragraphs: [
            'Usar remédio para dor de cabeça com muita frequência tem efeito contrário: a cefaleia por uso excessivo de medicamentos, antes chamada de cefaleia de rebote. Ela aparece como dor em 15 ou mais dias por mês em quem já tinha uma cefaleia e passou a usar medicamento agudo em excesso por mais de três meses. O limite depende do fármaco: 10 ou mais dias por mês para triptanos, ergotamina, opioides e analgésicos combinados, e 15 ou mais dias por mês para analgésicos simples, como paracetamol e anti-inflamatórios. É a cefaleia secundária mais comum do mundo, atinge até 5% de algumas populações, mais mulheres do que homens, e mais da metade das pessoas com dor em 15 ou mais dias por mês tem esse diagnóstico.',
            'A maior parte dessas pessoas melhora quando o uso excessivo é interrompido com acompanhamento, e a resposta ao tratamento preventivo também melhora depois disso. A enxaqueca em si pode cronificar: fala-se em enxaqueca crônica quando há dor em 15 ou mais dias por mês por mais de três meses, com pelo menos oito dias trazendo características de enxaqueca. Uma crise incapacitante que se arrasta por mais de 72 horas é chamada de estado migranoso e pede atendimento médico.',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'A maioria das dores de cabeça não é emergência. Há, porém, sinais que apontam para outra causa e valem atendimento imediato: ligue para o SAMU (192) ou vá a um pronto atendimento sem esperar melhorar sozinho se aparecer:',
          ],
          bullets: [
            'Dor de cabeça que explode e atinge a intensidade máxima em menos de um minuto',
            'Fraqueza ou paralisia de um lado do corpo, boca torta, fala embolada, dormência súbita ou perda de visão',
            'Febre com rigidez no pescoço, dor intensa e incômodo à luz',
            'Confusão mental, convulsão, dificuldade para despertar ou manchas vermelhas e roxas na pele',
            'Aura diferente das habituais, principalmente a primeira depois dos 40 anos',
            'Dor de cabeça nova que aparece durante esforço físico, tosse forte ou relação sexual',
            'Dor de cabeça persistente e diferente de tudo que você já sentiu, depois dos 60 anos',
          ],
          cta: {
            label: 'Leia também: sinais de alerta na enxaqueca',
            href: '/artigos/enxaqueca-sinais-de-alerta-quando-procurar-atendimento/',
          },
        },
      ],
      faq: [
        {
          question: 'Enxaqueca tem cura?',
          answer:
            'Não existe cura, e a enxaqueca costuma acompanhar a pessoa por anos. O controle é real: tratar a crise no começo, usar prevenção quando há muitos dias com dor, ajustar sono, álcool e hidratação e registrar as crises em um diário. O objetivo do tratamento é reduzir frequência, intensidade e o quanto a dor atrapalha a rotina.',
        },
        {
          question: 'Quanto tempo dura uma crise de enxaqueca?',
          answer:
            'Sem tratamento, a crise típica dura de 4 a 72 horas. Em crianças e adolescentes abaixo de 18 anos pode durar de 2 a 72 horas, e a dor costuma atingir os dois lados da cabeça. Uma crise que passa de 72 horas e incapacita é considerada complicação e deve ser avaliada por um médico.',
        },
        {
          question: 'Tomar remédio para dor de cabeça toda semana faz mal?',
          answer:
            'Sim, e esse é um dos pontos mais sensíveis do cuidado com a enxaqueca. Uso regular e excessivo de analgésicos, triptanos e anti-inflamatórios por mais de três meses pode levar à cefaleia por uso excessivo de medicamentos, que instala dor em quase todos os dias. O padrão de uso deve ser revisado com o médico, e costuma melhorar quando o excesso é interrompido.',
        },
      ],
      relatedArticleSlugs: [
        'enxaqueca-sinais-de-alerta-quando-procurar-atendimento',
        'enxaqueca-tratamento-e-cuidados',
      ],
      relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedDiseaseSlugs: ['infarto-e-avc', 'hipertensao'],
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
        {
          label: 'Hipertensão: como medir a pressão e acompanhamento no SUS',
          url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hipertensao',
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
      id: 'otite-media-aguda',
      slug: 'otite-media-aguda',
      name: 'Otite média aguda',
      aliases: ['otite', 'infecção de ouvido', 'dor de ouvido', 'otite do ouvido médio'],
      summary:
        'Infecção do ouvido médio, o espaço de ar que fica atrás do tímpano, mais comum entre os três meses e os três anos. A dor costuma ceder em poucos dias, e o antibiótico só entra quando o caso não evolui bem.',
      category: 'Doenças infecciosas',
      categorySlug: 'doencas-infecciosas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é otite média aguda?',
          paragraphs: [
            'A otite média aguda é uma infecção do ouvido médio, a câmara de ar que fica atrás da membrana timpânica. Ela quase sempre aparece no meio de um resfriado ou de uma crise de alergia: o inchaço do nariz bloqueia a saída natural desse espaço, o líquido se acumula, pressiona o tímpano por dentro, e a dor vem.',
            'É a infecção de ouvido mais comum na primeira infância, com pico entre os três meses e os três anos de idade. Em adultos e crianças maiores a apresentação é semelhante, só menos frequente: a tuba que drena o ouvido médio é curta e imatura nos pequenos, o que favorece o acúmulo de secreção.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'O sinal típico é a dor de ouvido de surgimento repentino, que costuma piorar à noite e ao deitar.',
          ],
          bullets: [
            'Dor de ouvido, muitas vezes em um lado só',
            'Febre, que pode ser alta no início',
            'Irritabilidade, choro fácil e dificuldade para dormir na criança pequena',
            'Bebês levam a mão à orelha com frequência',
            'Sensação de ouvido tampado e audição abafada',
            'Saída de líquido ou pus pelo ouvido quando o tímpano se fura, que costuma aliviar a dor',
          ],
        },
        {
          id: 'transmissao',
          heading: 'Otite média aguda é contagiosa?',
          paragraphs: [
            'Não. A otite em si não passa de uma pessoa para outra. O que circula entre as pessoas é a infecção respiratória que costuma dar origem a ela: os vírus e as bactérias do resfriado e da [faringite e amigdalite](/doencas/faringite-e-amigdalite/).',
            'Na maioria das vezes, o ouvido médio inflama depois dessas infecções, sem contato direto com alguém doente. Por isso, a criança que pega muitos resfriados tem mais otites.',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'A idade é o fator que mais pesa, porque o ouvido médio da criança pequena drena mal. O resto vem do que inflama o nariz.',
          ],
          bullets: [
            'Ter entre três meses e três anos de idade',
            'Estar exposto a resfriados com frequência, como quem vive com irmãos maiores ou frequenta creche',
            'Ter alergia respiratória, rinite ou [asma](/doencas/asma/) em crise',
            'Conviver com fumaça de cigarro dentro de casa',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'A suspeita nasce da história, e a confirmação vem do exame do ouvido: com um otoscópio, o profissional vê o tímpano vermelho, abaulado e com pouca mobilidade, sinais de que o ouvido médio está cheio de líquido infectado.',
            'Exames de imagem ou coleta de líquido são reservados a casos complicados ou que não respondem ao tratamento. Em casa, o que orienta a conduta é a evolução da dor e do estado geral nas primeiras 48 a 72 horas.',
          ],
          cta: {
            label: 'Leia também: otite média aguda, sinais de alerta',
            href: '/artigos/otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento/',
          },
        },
        {
          id: 'tratamento',
          heading: 'Como se trata?',
          paragraphs: [
            'A maioria das otites médias agudas melhora sem antibiótico, e por isso a primeira medida é tratar a dor, com analgésicos pela boca, na dose ajustada à idade e ao peso pela equipe de saúde.',
            'O antibiótico passa a ser necessário quando a criança piora ou não melhora entre 48 e 72 horas do início dos sintomas, e nos casos de maior gravidade, como os de bebê muito pequeno ou com pus escorrendo pelo ouvido. Quando indicado, a amoxicilina é a primeira escolha consagrada nas diretrizes brasileiras. Remédios para alergia e descongestionantes não têm espaço no tratamento: o benefício é pequeno e os efeitos colaterais, reais.',
          ],
          cta: {
            label: 'Leia também: tratamento e cuidados na otite média aguda',
            href: '/artigos/otite-media-aguda-tratamento-e-cuidados/',
          },
        },
        {
          id: 'complicacoes',
          heading: 'Otite com líquido, audição e complicações',
          paragraphs: [
            'Depois de uma otite, é comum sobrar líquido no ouvido médio sem infecção ativa. Isso tem nome, otite média secretora, e se manifesta como audição abafada, sem dor nem febre; o líquido pode persistir por semanas a meses e costuma sumir sozinho.',
            'Quando o líquido não sai ou as otites se repetem, a criança pode ouvir mal por tempo demais, o que atrapalha a fala e a aprendizagem. Nesses casos, a avaliação da audição e o encaminhamento ao otorrinolaringologista se justificam, e a colocação de um pequeno tubo de ventilação no tímpano é opção para situações selecionadas. Complicações graves, como a infecção do osso que fica atrás do ouvido, são raras, mas exigem atendimento imediato.',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'Dor de ouvido que não melhora em dois ou três dias pede avaliação na unidade de saúde. Sem esperar essa hora, procure um pronto atendimento se aparecer:',
          ],
          bullets: [
            'Inchaço, vermelhidão e dor no osso atrás do ouvido',
            'Febre alta persistente, vômitos ou criança muito sonolenta',
            'Rigidez no pescoço, confusão ou dificuldade para despertar',
            'Saída de pus pelo ouvido com febre que não cede',
            'Piora apesar do tratamento já iniciado',
          ],
          cta: {
            label: 'Veja também quando a otite vira urgência',
            href: '/artigos/otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento/',
          },
        },
      ],
      faq: [
        {
          question: 'Toda otite média aguda precisa de antibiótico?',
          answer:
            'Não. A maior parte melhora sem antibiótico, e o remédio é reservado aos casos que pioram ou não melhoram entre 48 e 72 horas do início dos sintomas, além dos de maior gravidade. Quando necessário, a amoxicilina costuma ser a primeira escolha.',
        },
        {
          question: 'Otite pode deixar a criança surda?',
          answer:
            'Durante a crise e no período seguinte, é comum a audição sair abafada, e ela volta ao normal quando o líquido some. O que merece atenção é a audição prejudicada por meses a fio, sinal da otite média secretora: nesses casos valem o teste de audição e a avaliação pelo especialista.',
        },
        {
          question: 'Posso pingar remédio no ouvido por conta própria?',
          answer:
            'Não pingue nada sem orientação profissional. A dor da otite média vem de trás do tímpano, onde a gota não chega, e alguns remédios podem fazer mal quando o tímpano está perfurado. O analgésico dado pela boca costuma bastar para a dor.',
        },
      ],
      relatedArticleSlugs: [
        'otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento',
        'otite-media-aguda-tratamento-e-cuidados',
        'faringite-e-amigdalite-sinais-de-alerta',
        'asma-como-evitar-crises',
      ],
      relatedTopicSlugs: ['doencas-infecciosas', 'prevencao', 'saude-infantil'],
      relatedDiseaseSlugs: ['faringite-e-amigdalite', 'asma'],
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
      id: 'pneumonia',
      slug: 'pneumonia',
      name: 'Pneumonia',
      aliases: ['pneumonia adquirida na comunidade', 'pneumonia bacteriana', 'pulmonite', 'infecção pulmonar'],
      summary:
        'Infecção que se instala nos pulmões e enche os alvéolos de pus e líquido, dificultando a respiração. A maioria dos casos tem tratamento sem internação, mas queda do oxigênio é sinal de alerta.',
      category: 'Doenças infecciosas',
      categorySlug: 'doencas-infecciosas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é pneumonia?',
          paragraphs: [
            'A pneumonia é uma infecção que se instala nos pulmões, mais precisamente nos alvéolos, os pequenos sacos de ar por onde o oxigênio entra no sangue. Em vez de ar, o alvéolo infectado se enche de pus e de líquido, respirar passa a doer e o corpo recebe menos oxigênio.',
            'É a maior causa infecciosa de morte no mundo: só em 2019, a pneumonia matou 740.180 crianças com menos de cinco anos, 14% de todas as mortes nessa faixa etária, segundo a Organização Mundial da Saúde. A forma mais comum é a pneumonia adquirida na comunidade, pega no dia a dia, fora do ambiente hospitalar.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'Febre, tosse e falta de ar costumam chegar juntos e de forma relativamente rápida.',
          ],
          bullets: [
            'Febre alta, muitas vezes com calafrios',
            'Tosse, seca ou com catarro',
            'Dor no peito que piora ao respirar fundo ou tossir',
            'Respiração rápida e falta de ar até em repouso',
            'Cansaço intenso e mal-estar geral',
            'Em pessoas idosas, confusão súbita ou moleza pode ser o único sinal visível',
          ],
        },
        {
          id: 'transmissao',
          heading: 'Como a pneumonia aparece?',
          paragraphs: [
            'Vários agentes podem causá-la. Entre as bactérias, o pneumococo é a causa mais comum de pneumonia bacteriana em crianças, seguido do Haemophilus influenzae tipo b (Hib); entre os vírus, o sincicial respiratório lidera.',
            'Esses microrganismos circulam pelas gotículas da tosse e do espirro, e muita gente os carrega no nariz e na garganta sem adoecer. A pneumonia aparece quando o agente desce até os pulmões e as defesas do corpo não conseguem contê-lo, em geral depois de um resfriado ou em quem está mais vulnerável.',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'A pneumonia procura quem tem os pulmões ou as defesas comprometidas, e boa parte desses fatores dá para mudar ou prevenir.',
          ],
          bullets: [
            'Ter menos de cinco anos ou mais de 60',
            'Conviver com [asma](/doencas/asma/) ou [DPOC](/doencas/dpoc/) sem controle',
            'Fumar, e cozinhar com lenha ou carvão em ambiente fechado',
            'Estar com a vacinação contra pneumococo, Hib e influenza incompleta',
            'Ter a imunidade fragilizada, como na aids e na desnutrição',
            'Morar em ambiente aglomerado',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'O diagnóstico combina a história clínica, o exame físico com o estetoscópio e a saturação de oxigênio medida no oxímetro de pulso, quase sempre com a radiografia de tórax confirmando a área de consolidação, a sombra do tecido onde os alvéolos estão preenchidos.',
            'Em crianças pequenas, a Organização Mundial da Saúde destaca a contagem da respiração: entre os menores de cinco anos com tosse ou dificuldade para respirar, a respiração rápida ou a retração da parte de baixo do tórax já definem a pneumonia. Distinguir a pneumonia da [tuberculose](/doencas/tuberculose/) também importa: a pneumonia costuma melhorar em poucos dias de tratamento adequado, enquanto a marca da tuberculose é a tosse por três semanas ou mais, com febre de fim de tarde, suor noturno e emagrecimento.',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Como se trata?',
          paragraphs: [
            'Suspeitando-se de pneumonia bacteriana, o antibiótico começa o quanto antes. Nas crianças, a amoxicilina oral é a primeira escolha recomendada pela OMS, e a maior parte dos casos em gente jovem e sem outras doenças se trata em casa.',
            'Quem decide o local do tratamento é a gravidade, não a febre. Saturação de oxigênio abaixo de 90% em ar ambiente, frequência respiratória acima de 30 incursões por minuto, confusão ou incapacidade de beber e comer empurram a internação, com direito a oxigênio e antibiótico na veia quando necessário.',
          ],
          cta: {
            label: 'Leia também: tratamento e recuperação da pneumonia',
            href: '/artigos/pneumonia-tratamento-e-recuperacao/',
          },
        },
        {
          id: 'prevencao',
          heading: 'Como prevenir',
          paragraphs: [
            'Vacina e menos fumaça fazem muita diferença. O Calendário Nacional de Vacinação do SUS oferece gratuitamente as proteções contra as principais causas, e as medidas do cotidiano completam o serviço:',
          ],
          bullets: [
            'Vacina pneumocócica conjugada aos dois e quatro meses de vida, com reforço aos 12 meses',
            'Vacina pentavalente, que inclui a proteção contra o Hib, aos dois, quatro e seis meses',
            'Vacina contra a influenza a cada temporada, para crianças a partir de seis meses e pessoas idosas',
            'Vacinas do sarampo e da coqueluche, que também previnem a pneumonia, uma complicação comum',
            'Aleitamento materno exclusivo nos primeiros seis meses',
            'Ambiente sem fumaça de cigarro e sem lenha dentro de casa',
          ],
          cta: {
            label: 'Leia também: o que é o calendário básico de vacinação',
            href: '/artigos/vacinacao-o-que-e-o-calendario-basico/',
          },
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'Falta de ar que aparece ou piora depressa é emergência. Ligue para o SAMU (192) ou vá a um pronto atendimento sem esperar para ver se passa, se houver:',
          ],
          bullets: [
            'Dificuldade para respirar em repouso ou para falar frases completas',
            'Lábios ou pontas dos dedos azulados',
            'Confusão súbita, moleza ou sonolência, sobretudo em pessoas idosas',
            'Incapacidade de beber água ou tomar a medicação',
            'Dor no peito intensa com febre alta que não cede',
            'Na criança: tórax puxando para dentro ao respirar, gemência ou recusa do peito e do bico',
          ],
          cta: {
            label: 'Leia também: pneumonia, sinais de alerta',
            href: '/artigos/pneumonia-sinais-de-alerta-quando-procurar-atendimento/',
          },
        },
      ],
      faq: [
        {
          question: 'Pneumonia é contagiosa?',
          answer:
            'Não de forma direta. O que se transmite de pessoa a pessoa são os microrganismos, pelas gotículas da tosse e do espirro, e quase todo mundo convive com eles sem adoecer. A pneumonia aparece quando esses agentes descem até os pulmões em quem está com as defesas fragilizadas.',
        },
        {
          question: 'Toda pneumonia precisa internar?',
          answer:
            'Não. A maioria dos casos em gente jovem e sem outras doenças se trata em casa, com antibiótico oral e retorno marcado. A internação entra quando o oxigênio no sangue cai, quando há confusão ou incapacidade de se alimentar, ou quando outras doenças pesam muito.',
        },
        {
          question: 'Quanto tempo dura a recuperação?',
          answer:
            'Com o tratamento certo, a febre e o fôlego começam a melhorar nos primeiros dias, mas a tosse e o cansaço podem acompanhar a pessoa por várias semanas, e a radiografia demora ainda mais para normalizar. Voltar à unidade de saúde para a reavaliação faz parte do cuidado.',
        },
      ],
      relatedArticleSlugs: [
        'pneumonia-sinais-de-alerta-quando-procurar-atendimento',
        'pneumonia-tratamento-e-recuperacao',
        'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta',
        'asma-crise-o-que-fazer-enquanto-espera-atendimento',
      ],
      relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
      relatedDiseaseSlugs: ['asma', 'dpoc', 'tuberculose'],
      references: [
        {
          label: 'Pneumonia in children: folha informativa',
          url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia',
          publisher: 'Organização Mundial da Saúde',
        },
        {
          label: 'Calendário Nacional de Vacinação',
          url: 'https://www.gov.br/saude/pt-br/vacinacao/calendario',
          publisher: 'Ministério da Saúde (Brasil)',
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
      publishedAt: '2026-10-19',
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
  {
      id: 'insuficiencia-cardiaca',
      slug: 'insuficiencia-cardiaca',
      name: 'Insuficiência cardíaca',
      aliases: ['IC', 'falência cardíaca', 'insuficiência cardíaca congestiva'],
      summary:
        'Condição crônica em que o músculo do coração bombeia menos sangue do que o corpo pede. O líquido volta e se acumula nas pernas e no pulmão, causando falta de ar, cansaço e inchaço.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é insuficiência cardíaca?',
          paragraphs: [
            'Na insuficiência cardíaca, o músculo do coração perde força para bombear. O sangue sai com menos eficiência, o retorno das veias encontra resistência e a pressão dentro delas sobe. O líquido então escapa para os tecidos: aparecem inchaço nos tornozelos e na barriga e, nos casos mais intensos, congestão dentro do pulmão, que é o que dá a sensação de falta de ar.',
            'A doença costuma ser a etapa final de outras condições que castigam o coração por anos, como a pressão alta, o infarto e o diabetes. Insuficiência cardíaca não quer dizer que o coração parou, e sim que ele bombeia menos do que o corpo precisa e depende de tratamento contínuo. Cálculos internacionais apontam cerca de 23 milhões de pessoas com a condição no mundo; no Brasil, materiais de hospitais da rede Ebserh citam em torno de 2 milhões de pessoas convivendo com ela e mais de 240 mil casos novos por ano.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'Os sintomas mudam conforme a parte do coração mais afetada e a quantidade de líquido acumulado. No começo eles surgem só ao esforço, depois em atividades simples e, nas fases avançadas, até em repouso:',
          ],
          bullets: [
            'Falta de ar ao subir escadas, caminhar ou carregar peso',
            'Necessidade de usar mais travesseiros para dormir, por causa da falta de ar deitado',
            'Inchaço nos tornozelos, nos pés e na barriga',
            'Cansaço fora do comum e queda de disposição para as tarefas de casa',
            'Ganho de peso rápido, em poucos dias, por retenção de líquido',
            'Tosse noturna e vontade de urinar durante a noite',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'O risco se acumula ao longo dos anos, e as condições que mais levam à insuficiência cardíaca são justamente as mais comuns no país. Quanto mais delas uma pessoa reúne, mais cedo o coração pode se desgastar.',
          ],
          bullets: [
            'Pressão alta sem controle, a causa mais frequente',
            'Infarto prévio ou doença das artérias do coração',
            'Diabetes, especialmente associado à pressão alta',
            'Obesidade, sedentarismo e apneia do sono',
            'Doenças das válvulas do coração',
            'Álcool em excesso e alguns medicamentos oncológicos',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'O diagnóstico começa com a história e o exame físico, e é confirmado com exames. A dosagem do BNP ou do NT-proBNP no sangue ajuda a separar uma falta de ar de origem cardíaca de outras causas; quando esses marcadores vêm normais, a chance de insuficiência cardíaca é baixa.',
            'O exame central é o ecocardiograma, um ultrassom do coração. Ele mostra a fração de ejeção, a porcentagem de sangue que o ventrículo consegue expulsar a cada batimento, e divide a doença em dois grandes grupos: fração de ejeção reduzida e fração de ejeção preservada. A separação importa porque os remédios com comprovada capacidade de mudar o curso da doença foram estudados sobretudo na forma com fração de ejeção reduzida, que é o alvo do protocolo nacional de tratamento.',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Como é o tratamento?',
          paragraphs: [
            'Na forma com fração de ejeção reduzida, o protocolo aprovado pelo Ministério da Saúde em 2024 reúne quatro classes de medicamentos, chamadas de quatro pilares: o inibidor da enzima de conversão ou a associação sacubitril-valsartana, o betabloqueador, o antagonista da aldosterona (a espironolactona) e o inibidor do SGLT2, como a dapagliflozina. As diretrizes brasileiras recomendam iniciar as quatro classes o mais cedo possível e ajustar as doses em consultas próximas, em vez de esgotar uma antes de começar a outra.',
            'Os diuréticos, como a furosemida, tiram o líquido acumulado e aliviam a falta de ar e o inchaço, mas não substituem os quatro pilares, que são os remédios ligados à redução de internações e de morte. Quando o quadro permanece grave mesmo com as doses otimizadas, avaliam-se dispositivos como marca-passos especiais e cardiodesfibriladores, cirurgia de válvula ou revascularização, e transplante cardíaco, este último reservado a casos selecionados.',
            'Parte importante do ajuste do tratamento vem de informação colhida em casa: pesar-se sempre no mesmo horário e anotar o resultado é a maneira mais barata de perceber uma piora antes de ela virar emergência. Ganho de peso em poucos dias, tornozelos mais inchados ou a necessidade de mais travesseiros à noite costumam indicar acúmulo de líquido, e não gordura.',
          ],
          cta: {
            label: 'Leia também: tratamento e vida diária com insuficiência cardíaca',
            href: '/artigos/insuficiencia-cardiaca-tratamento-e-vida-diaria/',
          },
        },
        {
          id: 'vida-diaria',
          heading: 'Dia a dia: sal, líquidos e atividade física',
          paragraphs: [
            'Na alimentação, a orientação atual é menos radical do que a fama do sal zero. Dietas muito restritivas em sódio foram associadas a piores desfechos nos estudos que baseiam o protocolo nacional. O caminho prático é reduzir ultraprocessados, temperos prontos e congelados industrializados, que concentram sódio, em vez de comer comida sem graça. A restrição de líquidos não vale para todo mundo: ela é reservada a pacientes com congestão persistente, sintomas importantes ou sódio baixo no sangue, sempre com volume definido pela equipe.',
            'Quem está estável se beneficia de atividade física aeróbica supervisionada. Os programas de reabilitação cardíaca combinam avaliação médica, exercício prescrito, orientação à família e apoio psicossocial. Há oferta pública, inclusive em equipamentos como as Academias da Saúde e os Núcleos de Apoio à Saúde da Família vinculados à atenção básica, mas a disponibilidade varia muito entre cidades. O passo seguro é pedir à unidade de saúde a indicação para um programa com avaliação antes de começar, principalmente para quem teve internação recente ou tem arritmia.',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'Uma descompensação grave é emergência. Ligue para o SAMU (192) ou vá a um pronto atendimento se aparecer algum destes sinais:',
          ],
          bullets: [
            'Falta de ar intensa em repouso ou sensação de afogamento',
            'Dor no peito que não melhora',
            'Desmaio, confusão mental ou dificuldade para despertar',
            'Lábios, mãos ou pés arroxeados',
            'Palpitações com tontura ou sensação de desmaio iminente',
            'Inchaço que sobe rápido junto de falta de ar crescente e ganho de peso em poucos dias',
          ],
          cta: {
            label: 'Leia também: sinais de alerta na insuficiência cardíaca',
            href: '/artigos/insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento/',
          },
        },
        {
          id: 'prevencao',
          heading: 'Dá para prevenir?',
          paragraphs: [
            'Uma parcela relevante dos casos pode ser adiada ou evitada, porque as portas de entrada da doença são controláveis. O Ministério da Saúde e a Organização Mundial da Saúde apontam o mesmo conjunto de cuidados para quem já tem fator de risco.',
          ],
          bullets: [
            'Manter a pressão arterial na meta e não interromper o remédio receitado',
            'Controlar a glicemia, no caso do diabetes',
            'Parar de fumar em qualquer idade',
            'Caminhar com regularidade e manter peso saudável',
            'Reduzir ultraprocessados ricos em sal',
            'Tratar apneia do sono e doenças de tireoide',
          ],
        },
      ],
      faq: [
        {
          question: 'Insuficiência cardíaca é o mesmo que infarto?',
          answer:
            'Não. O infarto acontece quando uma artéria entope e um pedaço do músculo do coração morre por falta de sangue. A insuficiência cardíaca é uma possível consequência de um infarto extenso ou de vários infartos ao longo dos anos, mas também decorre de pressão alta, diabetes e doença de válvula. Nem todo infarto deixa o coração fraco, e nem toda insuficiência cardíaca vem de infarto.',
        },
        {
          question: 'Estou com os pés inchados. Isso quer dizer que tenho insuficiência cardíaca?',
          answer:
            'Inchaço nos tornozelos tem muitas causas, como problema de veias nas pernas, calor, ficar muito tempo em pé, doença renal e efeito de alguns remédios. A suspeita de coração fica mais forte quando o inchaço vem junto de falta de ar ao esforço, necessidade de mais travesseiros para dormir e ganho de peso em poucos dias. Na dúvida, procure a unidade básica de saúde: a avaliação clínica e, se necessário, o BNP e o ecocardiograma resolvem a maioria das dúvidas.',
        },
        {
          question: 'Quem tem insuficiência cardíaca pode trabalhar e fazer exercício?',
          answer:
            'Na maioria dos casos estáveis, sim. Com tratamento ajustado, muitas pessoas seguem trabalhando, viajando e fazendo atividade física, de preferência dentro de um programa de reabilitação cardíaca com avaliação médica prévia. Exercício é contraindicado enquanto houver descompensação, arritmia não controlada ou doença de válvula grave, situações em que a equipe libera a retomada depois do controle do quadro.',
        },
      ],
      relatedArticleSlugs: [
        'insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento',
        'insuficiencia-cardiaca-tratamento-e-vida-diaria',
      ],
      relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedDiseaseSlugs: ['infarto-e-avc', 'hipertensao', 'diabetes', 'dpoc'],
      references: [
        {
          label: 'Protocolo Clínico e Diretrizes Terapêuticas de insuficiência cardíaca com fração de ejeção reduzida',
          url: 'https://www.gov.br/saude/pt-br/assuntos/pcdt/i/insuficiencia-cardiaca-com-fracao-de-ejecao-reduzida',
          publisher: 'Ministério da Saúde (Brasil)',
        },
        {
          label: 'Diretriz Brasileira de Insuficiência Cardíaca Crônica',
          url: 'https://www.scielo.br/j/abc/a/XrJZJkL945HZqpd3dZgdPrf/?lang=pt',
          publisher: 'Sociedade Brasileira de Cardiologia',
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
      updatedAt: '2026-10-19',
      isPlaceholder: true,
    },
  {
      id: 'esteatose-hepatica',
      slug: 'esteatose-hepatica',
      name: 'Esteatose hepática',
      aliases: ['gordura no fígado', 'esteatose', 'MASLD', 'doença hepática gordurosa', 'esteato-hepatite'],
      summary:
        'Acúmulo de gordura dentro das células do fígado, quase sempre silencioso no início e ligado ao metabolismo e ao álcool. Tem reversão com mudança de hábitos.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é esteatose hepática?',
          paragraphs: [
            'A esteatose hepática, conhecida no dia a dia como gordura no fígado, acontece quando a gordura se acumula dentro das células do órgão. É uma condição comum, quase sempre silenciosa nas fases iniciais, e hoje está entre as principais causas de doença hepática crônica no mundo.',
            'Por muito tempo, esse quadro foi chamado de doença hepática gordurosa não alcoólica. Em 2023, as sociedades de hepatologia adotaram um nome novo: doença hepática esteatótica associada à disfunção metabólica, a MASLD, em inglês. A mudança destaca que a gordura no fígado está ligada ao metabolismo, e não apenas à ausência de álcool. O fígado é um órgão silencioso, e a esteatose costuma aparecer primeiro em um exame de rotina, antes de causar qualquer queixa.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'A maioria das pessoas com esteatose hepática não sente nada. Quando surgem, os sinais são vagos e costumam ser atribuídos a outras causas:',
          ],
          bullets: [
            'Desconforto ou peso na parte superior direita da barriga',
            'Cansaço ao longo do dia, sem explicação',
            'Fraqueza e diminuição do apetite',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'O excesso de peso e a resistência à insulina estão no centro da esteatose metabólica. A condição é frequente em quem tem [diabetes](/doencas/diabetes/) e sobrepeso, e o risco aumenta quanto mais fatores cardiometabólicos a pessoa reúne.',
          ],
          bullets: [
            'Sobrepeso e obesidade, sobretudo com gordura concentrada na barriga',
            'Glicemia alta ou diabetes tipo 2',
            'Colesterol e triglicerídeos elevados',
            'Pressão alta',
            'Alimentação rica em ultraprocessados e vida sedentária',
            'Uso prolongado de alguns medicamentos, como corticoides',
          ],
        },
        {
          id: 'tipos',
          heading: 'Gordura de origem alcoólica e de origem metabólica',
          paragraphs: [
            'Nem toda gordura no fígado tem a mesma origem. Quando o consumo de álcool é intenso e prolongado, fala-se em esteatose alcoólica; sem essa exposição, o quadro é chamado de esteatose metabólica, a MASLD. As duas situações podem conviver na mesma pessoa, e por isso a equipe de saúde sempre pergunta quanto você bebe antes de fechar o diagnóstico.',
            'Outras condições hepáticas podem somar-se à esteatose e acelerar o dano no órgão, como as [hepatites virais](/doencas/hepatites-virais/) e o [colesterol alto](/doencas/colesterol-alto/). Por isso, o acompanhamento da gordura no fígado costuma incluir também o controle dessas doenças.',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'A esteatose costuma aparecer primeiro em um exame de imagem pedido por outro motivo. A ultrassonografia de abdome mostra o fígado mais claro e muitas vezes aumentado, e as transaminases, enzimas liberadas quando as células hepáticas se lesionam, podem vir levemente elevadas no exame de sangue de rotina.',
            'Para saber se já houve inflamação ou fibrose, que é a cicatrização progressiva do tecido, o método mais usado é a elastografia transitória, exame indolor que mede a rigidez do fígado. A biópsia hepática fica reservada a casos selecionados, em que a equipe precisa de informação adicional.',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Tratamento e mudança de hábitos',
          paragraphs: [
            'Nas fases iniciais, a esteatose hepática é reversível, e o que faz a diferença é a mudança de hábitos. Perder 5% do peso corporal já reduz a gordura acumulada no fígado; perdas de 10% ou mais se associam à melhora da inflamação e, em muitos casos, também da fibrose.',
            'Não existe remédio que tire a gordura do fígado sozinho. O manejo combina alimentação equilibrada, atividade física regular e controle das condições que alimentam o acúmulo de gordura, como o [diabetes](/doencas/diabetes/) e o colesterol elevado. Medicamentos entram quando a doença já evoluiu ou quando há outras indicações, sempre com prescrição médica.',
          ],
          cta: {
            label: 'Leia também: como a esteatose pode ser revertida com hábitos',
            href: '/artigos/esteatose-hepatica-como-reverter-com-habitos/',
          },
        },
        {
          id: 'complicacoes',
          heading: 'Possíveis complicações',
          paragraphs: [
            'Sem controle, a gordura pode desencadear inflamação persistente, a esteato-hepatite, que ao longo de anos evolui para fibrose e, em alguns casos, para cirrose. A progressão é mais provável em quem tem diabetes e excesso de peso importante.',
          ],
          bullets: [
            'Cirrose, com perda progressiva da função do fígado',
            'Maior risco de câncer de fígado',
            'Piora do controle glicêmico em quem já tem diabetes',
            'Associação com doenças cardiovasculares, como infarto e AVC',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'A esteatose em si raramente é uma emergência. Procure atendimento médico com urgência se aparecerem sinais de que o fígado deixou de funcionar bem:',
          ],
          bullets: [
            'Pele e olhos amarelados (icterícia)',
            'Aumento rápido do volume da barriga ou inchaço das pernas',
            'Vômito com sangue ou fezes muito escuras',
            'Confusão mental, sonolência ou desorientação',
            'Dor forte e persistente no lado superior direito do abdome',
            'Febre alta que não cede',
          ],
          cta: {
            label: 'Leia também: sinais de alerta na esteatose hepática',
            href: '/artigos/esteatose-hepatica-sintomas-e-quando-procurar-atendimento/',
          },
        },
      ],
      faq: [
        {
          question: 'Gordura no fígado é grave?',
          answer:
            'Na fase inicial, quase sempre não. A esteatose simples costuma ser silenciosa e reversível com mudança de hábitos. O que exige vigilância é a progressão para inflamação e fibrose, mais comum em quem tem diabetes e obesidade relevante.',
        },
        {
          question: 'Emagrecer resolve a esteatose hepática?',
          answer:
            'Sim, na maior parte dos casos. A perda de 5% do peso já reduz a gordura no fígado, e perdas de 10% ou mais podem reverter a inflamação e melhorar a fibrose. O benefício se mantém quando as mudanças são sustentadas, de preferência com acompanhamento profissional.',
        },
        {
          question: 'Existe remédio para tirar a gordura do fígado?',
          answer:
            'Nas fases iniciais, nenhum medicamento substitui a mudança de hábitos. Remédios podem ser necessários quando há esteato-hepatite avançada, controle difícil do diabetes ou do colesterol, ou outras orientações do hepatologista. Nunca faça uso por conta própria.',
        },
      ],
      relatedArticleSlugs: [
        'esteatose-hepatica-sintomas-e-quando-procurar-atendimento',
        'esteatose-hepatica-como-reverter-com-habitos',
      ],
      relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedDiseaseSlugs: ['diabetes', 'hepatites-virais', 'colesterol-alto'],
      references: [
        {
          label: 'Esteatose hepática: o que é, causas, sintomas e tratamento',
          url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esteatose-hepatica',
          publisher: 'Ministério da Saúde (Brasil)',
        },
        {
          label: 'Modificação do estilo de vida em MASLD/MASH: fatos e evidências',
          url: 'https://sbhepatologia.org.br/publicacoes/artigos/modificacao-do-estilo-de-vida-em-masld-mash-fatos-e-evidencias/',
          publisher: 'Sociedade Brasileira de Hepatologia',
        },
        {
          label: 'Atualização na nomenclatura para doenças hepáticas associadas a esteatose: de NASH para MASH',
          url: 'https://sbhepatologia.org.br/publicacoes/artigos/atualizacao-na-nomenclatura-para-doencas-hepaticas-associadas-a-esteatose-de-nash-para-mash/',
          publisher: 'Sociedade Brasileira de Hepatologia',
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
      id: 'colesterol-alto',
      slug: 'colesterol-alto',
      name: 'Colesterol alto (dislipidemia)',
      aliases: ['dislipidemia', 'colesterol elevado', 'hipercolesterolemia', 'gordura no sangue'],
      summary:
        'Alteração do metabolismo das gorduras do sangue, com excesso de colesterol LDL e, muitas vezes, de triglicerídeos. Não dói nem dá sinal, mas alimenta a aterosclerose e, em graus extremos, pode inflamar o pâncreas.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é colesterol alto?',
          paragraphs: [
            'Ter colesterol alto, ou dislipidemia, é ter gordura demais circulando no sangue, sobretudo colesterol LDL (o chamado colesterol ruim) e triglicerídeos, com pouco colesterol HDL. A situação define um distúrbio do metabolismo das gorduras: o corpo produz e retira essas moléculas o dia inteiro, e é o equilíbrio entre os dois lados que se perde. Por isso o tema mora na página de pâncreas e metabolismo, e não apenas na do coração.',
            'O LDL é essencial: ele transporta gordura para as células. O problema começa quando sobra LDL circulando, porque parte dele se deposita na parede das artérias e alimenta a aterosclerose, o endurecimento e o estreitamento dos vasos. Os triglicerídeos cumprem papel parecido como reserva de energia. Há ainda um caso extremo que vale conhecer: triglicerídeos acima de 500 mg/dL podem precipitar um ataque de pancreatite aguda, inflamação súbita e dolorosa do pâncreas.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'Nenhum, na imensa maioria dos casos. O colesterol alto não dá dor, nem cansaço, nem sinal visível, e as diretrizes brasileiras lembram que, em pelo menos metade das pessoas, o primeiro indício da doença aterosclerótica é um evento coronário agudo. Quem sente alguma coisa costuma estar diante de uma forma genética grave ou de triglicerídeos muito elevados:',
          ],
          bullets: [
            'Manchas amareladas na pele ao redor dos olhos (xantelasma)',
            'Nódulos de gordura nos tendões, sobretudo no calcanhar e nos dedos da mão',
            'Aro claro ao redor da córnea, visível em pessoas jovens',
            'Dor abdominal intensa e súbita com vômitos, quando os triglicerídeos sobem demais',
            'História de infarto ou AVC na família em idade jovem',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'Herança genética, alimentação e doenças que mexem no metabolismo explicam quase todos os casos. Estudos de base populacional citados no protocolo brasileiro de dislipidemia apontam prevalências de 43% a 60% entre adultos, o que ajuda a entender por que o achado é tão comum em exame de rotina.',
          ],
          bullets: [
            'Alimentação rica em gordura saturada, ultraprocessados e açúcar',
            'Sobrepeso, obesidade e sedentarismo',
            'Diabetes e resistência à insulina',
            'Pressão alta e doença renal',
            'Tabagismo e consumo de álcool',
            'Hipotireoidismo não tratado',
            'História familiar de colesterol muito alto ou infarto precoce',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'O diagnóstico vem do perfil lipídico, um exame de sangue que mede colesterol total, HDL, LDL (calculado) e triglicerídeos. A exigência de jejum mudou: as diretrizes brasileiras dispensam jejum para colesterol total, HDL, LDL calculado e colesterol não HDL, o que facilita a coleta em qualquer horário. A fórmula que calcula o LDL perde a validade quando os triglicerídeos passam de 400 mg/dL, situação em que o laboratório usa outra medida.',
            'Não existe um número único de LDL considerado normal para todo mundo. A meta de LDL, e o alvo secundário de colesterol não HDL, dependem do risco cardiovascular da pessoa, calculado com idade, pressão arterial, tabagismo, diabetes e histórico familiar. Um LDL a partir de 190 mg/dL em adulto já coloca a pessoa em risco alto por si só e levanta a suspeita de hipercolesterolemia familiar, forma genética que exige investigar irmãos, pais e filhos.',
          ],
          cta: {
            label: 'Leia também: como detectar o colesterol alto e quando procurar atendimento',
            href: '/artigos/colesterol-alto-como-detectar-e-quando-procurar-atendimento/',
          },
        },
        {
          id: 'complicacoes',
          heading: 'Possíveis complicações',
          paragraphs: [
            'O dano é silencioso e se constrói em anos. A aterosclerose fecha lentamente as artérias do coração, do cérebro e das pernas, e o primeiro aviso pode ser um infarto ou um AVC.',
          ],
          bullets: [
            'Infarto do miocárdio e angina',
            'AVC isquêmico e seus sintomas passageiros',
            'Doença arterial periférica, com dor ao caminhar',
            'Pancreatite aguda quando os triglicerídeos ultrapassam 500 mg/dL',
            'Esteatose hepática e piora do controle do diabetes',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Como baixar o colesterol?',
          paragraphs: [
            'O tratamento começa pela alimentação e pelo movimento, mas quem tem risco alto ou doença cardiovascular estabelecida precisa de remédio. A estatina é a primeira linha nas diretrizes brasileiras, com recomendação forte e evidência de nível máximo: ela reduz LDL, eventos cardiovasculares e mortalidade, e o perfil de segurança é bom, com efeitos adversos pouco frequentes. A dose e a meta são definidas pelo risco individual, não por um número fixo para todos.',
            'As queixas musculares merecem resposta objetiva. A dor muscular por estatina é rara, costuma aparecer entre quatro e doze semanas do início, em grupos musculares grandes e dos dois lados do corpo, e melhora quando a dose é revista; medir a enzima CK de rotina, sem sintoma, não faz parte do acompanhamento. Fígado e glicemia também entram na conversa: as transaminases são pedidas na entrada do tratamento e reavaliadas só se houver queixa, e o pequeno aumento de casos novos de diabetes descrito com estatinas potentes não anula o benefício cardiovascular de quem tem risco alto. Triglicerídeos acima de 500 mg/dL mudam de prioridade: aí o objetivo imediato é evitar a pancreatite, e o protocolo nacional prevê fibratos para essa situação.',
          ],
          cta: {
            label: 'Leia também: tratamento do colesterol alto e mudanças de hábitos',
            href: '/artigos/colesterol-alto-tratamento-e-mudancas-de-habitos/',
          },
        },
        {
          id: 'vida-diaria',
          heading: 'Alimentação e rotina que mudam o número',
          paragraphs: [
            'A Organização Mundial da Saúde dá referências claras para a gordura da dieta: no máximo 30% das calorias do dia vindas de gordura, no máximo 10% de gordura saturada, quase nada de gordura trans, e açúcares livres abaixo de 10% das calorias, com menos de 5% sendo ainda melhor. No mesmo pacote entram pelo menos 400 g por dia de frutas e verduras para quem tem mais de dez anos e cerca de 25 g de fibras.',
            'Na prática, o que move o ponteiro é trocar, não só cortar: arroz branco por arroz integral, carne processada por feijão com ovo ou peixe, biscoito recheado por fruta, óleo de fritura por azeite na finalização. Atividade física aeróbica regular ajuda sobretudo no HDL e nos triglicerídeos e no controle do peso, e parar de fumar reduz o risco cardiovascular de forma mais rápida do que qualquer dieta.',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'Colesterol alto por si não é emergência. O que exige atendimento imediato é o que ele provoca, ou o quadro de triglicerídeos muito elevados. Ligue para o SAMU (192) ou vá a um pronto atendimento se aparecer:',
          ],
          bullets: [
            'Dor no peito forte, opressiva, com irradiação para braço, mandíbula ou costas',
            'Boca torta, fala embolada ou fraqueza súbita em um braço',
            'Dor abdominal intensa e contínua, acima do umbigo, com vômitos e sem alívio',
            'Falta de ar súbita aos esforços, em quem trata doença arterial',
            'Dor na perna ao caminhar que surge do nada e não melhora com descanso',
          ],
        },
        {
          id: 'prevencao',
          heading: 'Dá para prevenir?',
          paragraphs: [
            'Boa parte dos casos pode ser atrasada com hábitos, e a investigação de quem tem histórico familiar permite tratar antes do primeiro evento. As recomendações do protocolo brasileiro e da Organização Mundial da Saúde se encontram no mesmo ponto.',
          ],
          bullets: [
            'Checar o perfil lipídico na consulta de rotina, a partir da idade que a equipe definir',
            'Manter peso saudável e medida da cintura controlada',
            'Praticar atividade física aeróbica na maioria dos dias',
            'Reduzir gordura saturada, fritura e ultraprocessados',
            'Não fumar e limitar álcool',
            'Investigar a família quando o LDL passa de 190 mg/dL',
          ],
        },
      ],
      faq: [
        {
          question: 'Preciso fazer jejum para dosar o colesterol?',
          answer:
            'Para o perfil lipídico padrão, não. As diretrizes brasileiras dispensam jejum para colesterol total, HDL, LDL calculado e colesterol não HDL, o que permite colher o exame em qualquer horário. A exceção prática são os triglicerídeos: quando eles vêm muito altos, acima de 400 mg/dL, o LDL calculado perde a confiabilidade, e a equipe pode pedir nova coleta em jejum para interpretar melhor esse valor.',
        },
        {
          question: 'Qual é o colesterol normal?',
          answer:
            'Não existe um número único válido para todo mundo. O alvo de LDL depende do risco cardiovascular: para quem já teve infarto ou AVC, ou tem diabetes com outros fatores, a meta é bem mais baixa do que para um jovem saudável. Um LDL de 100 mg/dL pode estar ótimo em uma pessoa e insuficiente em outra. É por isso que a leitura do exame é feita com a classificação de risco, e não comparando com o valor de referência impresso no papel do laboratório.',
        },
        {
          question: 'Estatina faz mal ao fígado ou aos músculos?',
          answer:
            'Efeitos colaterais existem, mas são pouco frequentes. A queixa muscular por estatina costuma aparecer nas primeiras semanas, em músculos grandes e dos dois lados do corpo, e tende a ceder com reavaliação da dose; dosar CK sem sintoma não é parte do acompanhamento. As transaminases são verificadas no início e depois só se houver sintoma de alteração hepática, como pele amarelada, urina escura ou dor abdominal. Sentir dor muscular não é motivo para abandonar o remédio por conta própria: a equipe pode trocar de estatina, reduzir a dose ou associar outra classe.',
        },
      ],
      relatedArticleSlugs: [
        'colesterol-alto-como-detectar-e-quando-procurar-atendimento',
        'colesterol-alto-tratamento-e-mudancas-de-habitos',
      ],
      relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedDiseaseSlugs: ['diabetes', 'infarto-e-avc', 'hipertensao', 'esteatose-hepatica'],
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
      id: 'doenca-renal-cronica',
      slug: 'doenca-renal-cronica',
      name: 'Doença renal crônica',
      aliases: ['DRC', 'insuficiência renal crônica', 'doença renal do diabetes'],
      summary:
        'Perda lenta e progressiva da capacidade dos rins de filtrar o sangue. Quase sempre silenciosa no início, suas duas principais causas são diabetes e hipertensão.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é doença renal crônica?',
          paragraphs: [
            'A doença renal crônica é a perda progressiva e irreversível da função dos rins, os dois órgãos em forma de feijão que filtram o sangue, devolvem ao corpo o que é aproveitado e eliminam o que sobra na urina. Quando a filtração cai, toxinas, minerais e líquido se acumulam, e o corpo inteiro sente, do osso ao coração.',
            'A definição médica usa dois achados: uma taxa de filtração glomerular estimada (TFGe) abaixo de 60 ml/min/1,73 m² em duas medidas feitas com pelo menos 90 dias de intervalo, ou a presença de albumina na urina acima do normal com o mesmo tempo de evolução. Na prática clínica, a classificação em cinco estágios ajuda a orientar a conduta, do estágio 1, com função quase normal e sinal de dano renal, ao estágio 5, em que a filtração cai abaixo de 15 ml/min/1,73 m².',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'Nas primeiras fases, nenhum. Os rins têm margem de reserva grande, e a doença costuma avançar sem queixa alguma; por isso a Organização Mundial da Saúde estima que centenas de milhões de pessoas convivem com o diagnóstico sem saber. Os sintomas aparecem tarde, quando a filtração já caiu muito, e raramente apontam direto para os rins:',
          ],
          bullets: [
            'Cansaço, falta de ar e palidez, pela anemia comum na doença renal',
            'Inchaço nas pernas, nos pés e ao redor dos olhos',
            'Coceira generalizada, sem lesão de pele',
            'Cãibras musculares, sobretudo à noite',
            'Perda de apetite, náuseas e vômitos',
            'Sono irregular, sonolência diurna e dificuldade de concentração',
            'Urinhar muito à noite, ou urinar em pouca quantidade nas fases finais',
          ],
        },
        {
          id: 'causas',
          heading: 'O que causa a doença renal crônica?',
          paragraphs: [
            'Diabetes e hipertensão respondem pela maior parte dos casos, e a doença renal do diabetes e da hipertensão é a principal porta de entrada da diálise no Brasil. Nos dois casos, o excesso de açúcar no sangue ou a pressão dentro dos pequenos filtros do rim lesionam o rim ao longo dos anos. O caminho inverso também existe: doença renal crônica causa e é causada por doença cardiovascular, e quem já teve infarto ou insuficiência cardíaca tem mais chance de desenvolver o problema.',
            'As outras causas explicam boa parte do que sobra. Nefrites e glomerulonefrites (inflamação dos filtros), rins policísticos e outras doenças genéticas, infecções urinárias de repetição com refluxo, obstruções por cálculo renal, uso prolongado de medicamentos agressivos ao rim e doenças infecciosas como hepatite B, hepatite C, HIV e tuberculose podem todas evoluir para perda renal crônica.',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'Quem está mais exposto?',
          paragraphs: [
            'O Ministério da Saúde brasileiro lista as condições que pedem vigilância renal, e a maior parte delas é comum na consulta de rotina. Ter um fator de risco não significa ter a doença, mas é o sinal de que os exames de triagem devem entrar na agenda.',
          ],
          bullets: [
            'Diabetes tipo 1 ou tipo 2',
            'Pressão alta igual ou acima de 140/90, em duas medidas com intervalo de uma a duas semanas',
            'Idade avançada',
            'Obesidade, com índice de massa corporal acima de 30',
            'Histórico de doença coronariana, AVC, doença arterial periférica ou insuficiência cardíaca',
            'História de doença renal na família',
            'Tabagismo e uso frequente de analgésicos e anti-inflamatórios',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'Três exames simples detectam quase todos os casos, e podem ser pedidos na unidade básica de saúde. A creatinina no sangue, combinada com idade e sexo, gera a taxa de filtração glomerular estimada (TFGe), o número que mede quanto o rim ainda filtra. A pesquisa de albumina na urina, feita pela relação albumina/creatinina (RAC), pega o dano renal mais cedo, antes de a filtração cair; valores acima de 30 mg/g são considerados elevados. O exame comum de urina (EAS ou urinálise) mostra proteína, sangue e sinais de infecção, e a ultrassonografia de rins e vias urinárias avalia tamanho, cistos e obstruções.',
            'Os estágios organizam a conduta, do 1 ao 5, e a velocidade de progressão importa tanto quanto o número: dois exames com 90 dias de distância mostram se o rim está estável ou perdendo função. As diretrizes da Sociedade Brasileira de Nefrologia recomendam dosar creatinina e pedir urinálise uma vez por ano em pessoas com fatores de risco, e triagem de idosos, cardiopatas e quem tem história familiar de doença renal.',
          ],
          cta: {
            label: 'Leia também: sinais de alerta na doença renal crônica',
            href: '/artigos/doenca-renal-cronica-sinais-de-alerta-quando-procurar-atendimento/',
          },
        },
        {
          id: 'estagios',
          heading: 'Os cinco estágios, em linguagem simples',
          paragraphs: [
            'Os estágios descrevem quanto o rim ainda filtra, medido pela TFGe, e a partir deles muda o tipo de acompanhamento. Estar em estágio 3 não é estar à beira da diálise, e muita gente permanece anos nessa fase.',
          ],
          bullets: [
            'Estágio 1: filtração igual ou acima de 90, com sinal de dano renal, como proteína na urina',
            'Estágio 2: filtração entre 60 e 89, com marcador de lesão renal',
            'Estágio 3a: filtração entre 45 e 59',
            'Estágio 3b: filtração entre 30 e 44',
            'Estágio 4: filtração entre 15 e 29, fase de preparação',
            'Estágio 5: filtração abaixo de 15, com sintomas importantes e necessidade de tratamento substitutivo',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Como é o tratamento?',
          paragraphs: [
            'Nas fases iniciais, o objetivo não é recuperar o que já se perdeu, e sim conter o avanço. Isso se faz controlando a pressão arterial e a glicemia, tratando colesterol e triglicerídeos, ajustando a dieta, mantendo peso saudável, praticando atividade física e parando de fumar. O nefrologista é o especialista que acompanha a doença renal, e a unidade básica de saúde coordena as consultas, os exames e o encaminhamento quando a fase avança.',
            'Chegar ao estágio 5 não significa começar a diálise no dia seguinte. Existe a fase conservadora e, depois, a pré-diálise, em que a equipe prepara o corpo e o acesso para o tratamento substitutivo. A escolha entre hemodiálise e diálise peritoneal é compartilhada com a pessoa, idealmente planejada no ambulatório, e a indicação urgente só aparece quando há sintomas intratáveis ou alterações de laboratório com risco de vida. O transplante de rim, quando possível, costuma dar mais qualidade de vida do que a diálise, e a fila segue as regras de compatibilidade do Sistema Nacional de Transplantes.',
          ],
          cta: {
            label: 'Leia também: tratamento e convivência com a doença renal crônica',
            href: '/artigos/doenca-renal-cronica-tratamento-e-convivencia/',
          },
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'Alguns sintomas pedem avaliação rápida, porque indicam que a doença avançou ou que surgiram complicações. Procure atendimento médico com urgência se aparecer:',
          ],
          bullets: [
            'Falta de ar importante, com inchaço generalizado',
            'Queda do volume de urina ou ausência de urina por um dia',
            'Confusão mental, sonolência excessiva ou convulsão',
            'Dor no peito, palpitações ou desmaio',
            'Febre com dor lombar e urina turva ou com sangue',
            'Cólica renal intensa, com vômitos que não passam',
            'Fraqueza muscular importante, com coração acelerado, que pode indicar potássio alto',
          ],
          cta: {
            label: 'Veja a página sobre doença renal crônica',
            href: '/doencas/doenca-renal-cronica/',
          },
        },
        {
          id: 'prevencao',
          heading: 'Dá para prevenir?',
          paragraphs: [
            'Como a doença é consequência majoritária de diabetes e hipertensão, a prevenção começa muito antes do rim. A orientação da Sociedade Brasileira de Nefrologia é simples: controlar as doenças que sobrecarregam o filtro e não fazer uso prolongado de medicamentos agressivos ao rim, sem orientação médica.',
          ],
          bullets: [
            'Manter glicemia e pressão arterial nas metas definidas pela equipe',
            'Usar analgésicos e anti-inflamatórios apenas com orientação',
            'Não fumar',
            'Manter peso saudável e atividade física regular',
            'Tratar infecções urinárias de repetição',
            'Investigar rins e vias urinárias na gestação e na infância, quando indicado',
          ],
        },
        {
          id: 'vida-diaria',
          heading: 'Vida diária com doença renal',
          paragraphs: [
            'Alimentação é parte do tratamento, e não enfeite. Nas fases mais avançadas, entra na conta o controle de sódio (inchaço e pressão), de potássio (frutas como banana, laranja e abacate em excesso podem ser problema) e de fósforo (presente em refrigerantes, lácteos e ultraprocessados). A Sociedade Brasileira de Nefrologia tem uma lista inusitada e importante: a carambola é o único alimento proibido para quem está nos estágios 4 e 5, porque, em pessoas com função renal muito reduzida, pode causar soluços, confusão mental, convulsão e coma.',
            'A rotina também é feita de atenção simples: pesar-se nos mesmos horários ajuda a perceber a retenção de líquido, anotar a pressão arterial evita consultas no escuro, e comparar o volume de urina ao longo dos dias dá pistas precoces. O acompanhamento ambulatorial regular, incluindo controle da pressão, permite retardar a chegada à diálise e preservar qualidade de vida. O apoio psicológico e a reabilitação são parte do cuidado, sobretudo quando o tratamento substitutivo é planejado com antecedência.',
          ],
        },
      ],
      faq: [
        {
          question: 'Doença renal crônica tem cura?',
          answer:
            'O rim perdido não volta, e por isso a palavra cura não se aplica à doença estabelecida. O que se consegue é conter o avanço: pacientes em estágio 1, 2 ou 3 podem permanecer anos sem precisar de diálise, desde que pressão, glicemia, colesterol e peso sejam controlados, e que os medicamentos agressivos ao rim sejam evitados. Nos casos de rim transplantado, a pessoa pode viver muitos anos com função renal normal, sob uso contínuo de imunossupressores.',
        },
        {
          question: 'Quanto tempo demora para chegar à diálise?',
          answer:
            'Não existe resposta única, e essa é a razão de ser do acompanhamento regular. Muita gente com diabetes ou hipertensão chega ao estágio 3 e permanece ali por anos, controlada, e uma parte nunca chega ao estágio 5. Quem está em estágio 4 entra na fase de preparação: a equipe decide com você quando e qual tratamento substitutivo, se possível de forma planejada e eletiva, o que evita a diálise de urgência, situação de pior prognóstico.',
        },
        {
          question: 'Posso tomar dipirona, paracetamol ou ibuprofeno?',
          answer:
            'A Sociedade Brasileira de Nefrologia chama atenção para os anti-inflamatórios não esteroidais, como ibuprofeno, diclofenaco e nimesulida: usados com frequência e sem orientação médica, reduzem o fluxo sanguíneo do rim e podem acelerar a perda de função, sobretudo em idosos, hipertensos e pessoas com diabetes. Dipirona e paracetamol costumam ser alternativas para uso pontual, mas em doença renal estabelecida a dose deve ser ajustada pelo médico. Nunca faça uso contínuo por conta própria, e informe todos os remédios e chás que toma em cada consulta.',
        },
      ],
      relatedArticleSlugs: [
        'doenca-renal-cronica-sinais-de-alerta-quando-procurar-atendimento',
        'doenca-renal-cronica-tratamento-e-convivencia',
      ],
      relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedDiseaseSlugs: ['diabetes', 'hipertensao', 'anemia-ferropriva'],
      references: [
        {
          label: 'Doença renal crônica',
          url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/drc',
          publisher: 'Ministério da Saúde (Brasil)',
        },
        {
          label: 'Nefropatias, glomerulopatias e síndrome nefrítica, orientações e tratamento',
          url: 'https://sbn.org.br/publico/orientacoes-e-tratamento/como-se-prevenir/',
          publisher: 'Sociedade Brasileira de Nefrologia',
        },
        {
          label: 'Manual Pronto para Doença Renal Crônica, 4ª e 5ª edições',
          url: 'https://sbn.org.br/wp-content/uploads/2024/11/ManualProntoDRC4e5_compressed.pdf',
          publisher: 'Sociedade Brasileira de Nefrologia',
        },
        {
          label: 'Renal disease, folha informativa',
          url: 'https://www.who.int/news-room/fact-sheets/detail/kidney-disease',
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
      id: 'hanseniase',
      slug: 'hanseniase',
      name: 'Hanseníase',
      aliases: ['lepra', 'doença de Hansen', 'hanseníase paucibacilar', 'hanseníase multibacilar'],
      summary:
        'Infecção crônica causada pela bactéria Mycobacterium leprae. Atinge principalmente a pele e os nervos periféricos, tem cura, e o tratamento é gratuito no SUS.',
      category: 'Doenças infecciosas',
      categorySlug: 'doencas-infecciosas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é hanseníase?',
          paragraphs: [
            'A hanseníase é uma doença infecciosa de evolução lenta, causada pela bactéria Mycobacterium leprae, também conhecida como bacilo de Hansen. A doença atinge principalmente a pele e os nervos periféricos, o que explica o aparecimento de manchas com perda de sensibilidade e a dormência nas mãos e nos pés.',
            'A hanseníase tem cura, e o tratamento está disponível gratuitamente no Sistema Único de Saúde (SUS). O diagnóstico precoce é o que evita que a infecção deixe sequelas nos nervos e nas articulações. Segundo a Organização Mundial da Saúde, o Brasil está entre os países que ainda registram o maior número de casos novos no mundo, o que levou o país a manter um programa público permanente de busca ativa, diagnóstico e tratamento.',
          ],
        },
        {
          id: 'transmissao',
          heading: 'Como a hanseníase é transmitida?',
          paragraphs: [
            'A transmissão acontece pelas vias respiratórias. Uma pessoa com a forma multibacilar, ainda sem tratamento, elimina o bacilo ao tossir, espirrar ou falar, e essa eliminação exige convívio próximo e prolongado para infectar outra pessoa. Mesmo em quem entra em contato com o bacilo, só uma pequena parte desenvolve a doença.',
            'A hanseníase não passa pelo abraço, pelo beijo, pelo aperto de mão nem pelo compartilhamento de talheres, copos, roupas ou objetos. Ela também não é hereditária e não é transmitida pelo sangue. Uma pessoa em tratamento, mesmo nas primeiras semanas, deixa de transmitir a infecção.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sinais?',
          paragraphs: [
            'O sinal mais frequente é uma mancha na pele que perde a sensibilidade, com alterações térmicas (ao calor e ao frio), dolorosas (à dor) ou táteis (ao toque). Outros sinais podem acompanhar:',
          ],
          bullets: [
            'Manchas brancas, avermelhadas ou amarronzadas em áreas expostas ou no tronco',
            'Áreas de pele seca, com queda de pelos e diminuição do suor',
            'Formigamento, fisgadas ou dormência, sobretudo nas mãos e nos pés',
            'Engrossamento de nervos, percebido como cordões doloridos nos braços e nas pernas',
            'Perda de força na face, nas mãos ou nos pés',
            'Nódulos (caroços) avermelhados e dolorosos, em alguns casos',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'A hanseníase raramente é uma emergência, mas alguns sinais pedem avaliação imediata, porque indicam que o nervo está sendo lesionado em ritmo acelerado:',
          ],
          bullets: [
            'Mancha que não arde, não sente toque e não cicatriza há mais de três meses',
            'Dormência ou formigamento que piora rápido nas mãos, nos pés ou no rosto',
            'Perda de força para segurar objetos, fechar a mão ou mover o pé',
            'Dor em queimação ao longo de um nervo, no braço ou na perna',
            'Úlceras nos pés ou feridas que não sarar em quem já teve diagnóstico',
            'Olho que não fecha completamente, ardência ou visão embaçada',
          ],
          cta: {
            label: 'Leia também: sinais na pele que pedem avaliação',
            href: '/artigos/hanseniase-sinais-na-pele-quando-procurar-atendimento/',
          },
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'O diagnóstico é clínico, feito pela avaliação da pele e dos nervos em qualquer unidade básica de saúde (UBS). O exame combina a inspeção das manchas com testes simples de sensibilidade, térmica, dolorosa e tátil, e a palpação dos troncos nervosos. Quando a apresentação é duvidosa, o caso é encaminhado a uma unidade de referência, que pode solicitar baciloscopia, biópsia de pele ou de nervo e exames eletroneuromiográficos.',
            'Todo caso diagnosticado deve ser notificado pelo serviço de saúde às autoridades sanitárias. Essa notificação alimenta o sistema de vigilância e permite identificar áreas de transmissão, investigar as pessoas que convivem com o caso e planejar as ações de controle.',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'A hanseníase pode acometer pessoas de qualquer idade e sexo. Ela está ligada a condições de vida que favorecem o convívio prolongado em espaços fechados, ao acesso tardio aos serviços de saúde e a outras situações que sobrecarregam o sistema imunológico.',
          ],
          bullets: [
            'Conviver de forma próxima e prolongada com pessoa em tratamento ou ainda não diagnosticada',
            'Morar em regiões com alta transmissão, sobretudo no Centro-Oeste, Norte e Nordeste',
            'Viver em condições socioeconômicas desfavoráveis e com acesso tardio à saúde',
            'Diabetes, desnutrição ou outras condições que comprometem a resposta imune',
            'História familiar de hanseníase na mesma residência',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Tratamento e cuidados',
          paragraphs: [
            'O tratamento é feito com a poliquimioterapia (PQT-U), combinação de três antibióticos fornecidos gratuitamente pelo SUS: rifampicina, dapsona e clofazimina. Nas formas paucibacilares, o esquema dura seis meses; nas multibacilares, doze meses. A medicação é distribuída na UBS, sem necessidade de internação.',
            'Na consulta mensal, a dose do primeiro medicamento é supervisionada por um profissional de saúde, e as demais cartelas são tomadas em casa. Nos primeiros dias de tratamento, a pessoa deixa de transmitir a infecção. Ao completar todas as doses dentro do prazo previsto e passar pela avaliação final, recebe alta por cura.',
          ],
          cta: {
            label: 'Leia também: como funciona o tratamento gratuito no SUS',
            href: '/artigos/hanseniase-tratamento-gratuito-no-sus/',
          },
        },
        {
          id: 'prevencao',
          heading: 'Como prevenir e evitar sequelas',
          paragraphs: [
            'Não existe vacina específica contra a hanseníase. A prevenção combina o diagnóstico precoce, o tratamento completo e a vigilância sobre as pessoas que tiveram contato prolongado com um caso. A vacinação com BCG, usada na rotina infantil, pode ser aplicada nos contatos que não têm cicatriz vacinal, como parte das medidas adotadas pela equipe de saúde.',
          ],
          bullets: [
            'Procurar a UBS diante de qualquer mancha que não dói, não coça e persiste há mais de três meses',
            'Levar todo o tratamento até o fim, sem interromper por melhora dos sintomas',
            'Submeter à avaliação os familiares, colegas de trabalho e demais contatos próximos',
            'Manter autocuidado diário com mãos, pés e olhos, sobretudo durante o tratamento',
            'Voltar às consultas de acompanhamento para vigiar reações e sinais de neuropatia',
          ],
        },
        {
          id: 'vida-diaria',
          heading: 'Vida diária durante e depois do tratamento',
          paragraphs: [
            'Hanseníase é uma doença infecciosa curável como qualquer outra, e o diagnóstico deve ser recebido sem culpa e sem vergonha. Com tratamento regular, a pessoa continua a trabalhar, estudar e conviver com a família normalmente.',
            'Gravidez e amamentação não contraindicam o tratamento. Quem faz uso de anticoncepcionais orais deve avisar a equipe, porque a rifampicina pode reduzir a eficácia. As reações e neurites que surgem durante ou depois do tratamento são tratadas pela equipe de referência, e o autocuidado diário com mãos, pés e olhos é o que mais evita as lesões que levam a deformidades.',
          ],
        },
      ],
      faq: [
        {
          question: 'Hanseníase tem cura?',
          answer:
            'Sim. A doença tem cura e o tratamento é gratuito no SUS. A alta por cura é dada quando a pessoa conclui todas as doses dentro do prazo do esquema prescrito, seis ou doze meses conforme a forma clínica.',
        },
        {
          question: 'Hanseníase passa pelo abraço, pelo beijo ou pelo compartilhamento de talheres?',
          answer:
            'Não. A transmissão ocorre pelas vias respiratórias e exige contato próximo e prolongado com uma pessoa que esteja na forma infectante, sem tratamento. Abraço, beijo, copos, talheres, roupas e assentos não transmitem a doença.',
        },
        {
          question: 'Quem teve hanseníase pode voltar a ter a doença?',
          answer:
            'Sim, é possível. Depois da cura a pessoa não fica imune. Por isso, qualquer mancha nova que perca a sensibilidade deve voltar a ser avaliada na unidade de saúde, mesmo em quem já foi tratado.',
        },
      ],
      relatedArticleSlugs: [
        'hanseniase-sinais-na-pele-quando-procurar-atendimento',
        'hanseniase-tratamento-gratuito-no-sus',
      ],
      relatedTopicSlugs: ['doencas-infecciosas', 'prevencao'],
      relatedDiseaseSlugs: ['tuberculose', 'diabetes'],
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
      id: 'anemia-ferropriva',
      slug: 'anemia-ferropriva',
      name: 'Anemia ferropriva (falta de ferro)',
      aliases: ['anemia por deficiência de ferro', 'falta de ferro', 'anemia hipocrômica microcítica'],
      summary:
        'Anemia causada pela falta de ferro, o mineral necessário para produzir hemoglobina. É o distúrbio nutricional mais comum e atinge sobretudo crianças, adolescentes e mulheres.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é anemia ferropriva?',
          paragraphs: [
            'A anemia ferropriva é a anemia causada pela falta de ferro. O ferro é matéria-prima da hemoglobina, a proteína que transporta o oxigênio dentro das hemácias. Quando ele falta, o sangue passa a levar menos oxigênio para os músculos e para os órgãos, e é daí que vêm o cansaço e a palidez.',
            'A deficiência de ferro é o distúrbio nutricional mais comum no mundo e a principal causa de anemia: estimativas associam a falta de ferro a mais da metade dos casos globais. Pode aparecer em qualquer fase da vida, mas é mais frequente em crianças pequenas, em adolescentes e nas mulheres, por causa da menstruação e da gravidez.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'No começo, a anemia ferropriva pode não dar sinal, porque o corpo vai usando o ferro que tinha guardado. Conforme a reserva cai, surgem:',
          ],
          bullets: [
            'Cansaço e fraqueza desproporcionais ao esforço',
            'Palidez, sobretudo no rosto, na gengiva e na parte interna das pálpebras',
            'Falta de ar aos esforços e palpitações',
            'Dor de cabeça, tontura e dificuldade de concentração',
            'Unhas quebradiças e queda de cabelo mais intensa',
            'Vontade de comer itens sem valor nutricional, como gelo ou terra',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que causa e o que aumenta o risco?',
          paragraphs: [
            'A anemia ferropriva aparece quando o ferro que entra e é absorvido não acompanha o que o corpo perde ou precisa. Os fatores mais comuns são:',
          ],
          bullets: [
            'Dieta pobre em ferro, com pouca carne, feijão e verduras de folhas escuras',
            'Maior necessidade de ferro na infância, na adolescência, na gravidez e no pós-parto',
            'Menstruação volumosa ou sucessivas gestações sem reposição adequada',
            'Perda de sangue oculta, por úlcera, hemorroida ou outra lesão do trato digestivo',
            'Verminoses, como a [parasitose intestinal](/doencas/parasitoses-intestinais/), que consomem o ferro do organismo',
            'Dificuldade de absorção, depois de cirurgia bariátrica ou por doenças do intestino',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'A suspeita nasce do exame clínico somado a um hemograma. A hemoglobina abaixo dos valores de referência para a idade e o sexo indica anemia, e hemácias menores e mais pálidas apontam para a falta de ferro. A ferritina, que reflete o ferro armazenado, costuma vir reduzida nesse tipo de anemia.',
            'Esses números devem ser lidos pelo médico junto do quadro inteiro, e não isoladamente. Nem toda anemia vem de ferro: na [doença renal crônica](/doencas/doenca-renal-cronica/), por exemplo, o rim produz menos eritropoietina, o hormônio que estimula a produção de hemácias, e a lógica de tratamento é outra. Por isso a reposição por conta própria pode mascarar um diagnóstico que exige investigação, inclusive da origem de perdas de sangue.',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Tratamento e cuidados',
          paragraphs: [
            'O tratamento combina a reposição de ferro com a correção da causa. Nos casos leves e moderados, o ferro por via oral é a primeira escolha, e a hemoglobina costuma começar a subir nas primeiras semanas. Sentir-se melhor, porém, não é o fim do caminho: a ferritina ainda está baixa, e os estoques costumam levar de dois a seis meses para se repletar. Por isso o médico mantém o suplemento mesmo depois da melhora e pede novos exames para acompanhar.',
            'O ferro oral pode causar desconforto estomacal, náusea, intestino preso e fezes mais escuras, efeitos que em geral melhoram com o ajuste da toma orientado pelo profissional. Ingerir a dose junto de alimentos ricos em vitamina C, como um suco de laranja, favorece a absorção. A transfusão de sangue fica reservada para os casos graves ou muito sintomáticos, por exemplo quando há dor no peito, falta de ar em repouso ou perda sanguínea intensa.',
          ],
          cta: {
            label: 'Leia também: como tratar e o que comer',
            href: '/artigos/anemia-ferropriva-tratamento-e-alimentacao/',
          },
        },
        {
          id: 'prevencao',
          heading: 'Como prevenir',
          paragraphs: [
            'Prevenir a anemia ferropriva passa por garantir ferro na dieta e atenção aos períodos de maior necessidade. Algumas medidas ajudam:',
          ],
          bullets: [
            'Incluir carnes, feijões, lentilha e verduras de folhas escuras com regularidade',
            'Consumir frutas ricas em vitamina C na mesma refeição, o que aumenta a absorção do ferro',
            'Evitar leite, café ou chá junto das principais refeições, pois reduzem a absorção',
            'Fazer o acompanhamento pré-natal e usar a reposição de ferro indicada na gestação',
            'Manter o tratamento das verminoses e investigar sangramentos persistentes',
          ],
        },
        {
          id: 'complicacoes',
          heading: 'Possíveis complicações',
          paragraphs: [
            'Quando não é tratada, a anemia ferropriva vai além do cansaço. A queda prolongada de oxigênio afeta o desempenho no trabalho e na escola e pesa mais sobre a gravidez e sobre o desenvolvimento das crianças:',
          ],
          bullets: [
            'Prejuízo de atenção, memória e rendimento escolar em crianças e adolescentes',
            'Maior risco de parto prematuro e de baixo peso ao nascer',
            'Piora de doenças cardíacas já existentes e, em casos graves, insuficiência cardíaca',
            'Cansaço intenso que limita a rotina diária e a disposição para atividades físicas',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'A maioria dos casos evolui devagar e é resolvida na atenção básica. Ainda assim, procure atendimento imediato ou uma emergência se houver:',
          ],
          bullets: [
            'Falta de ar em repouso ou ao fazer esforços muito leves',
            'Dor no peito, palpitações rápidas ou sensação de desmaio',
            'Palidez muito acentuada acompanhada de confusão mental ou sonolência',
            'Fezes pretas tipo borra de café ou vômito com sangue, sinais de sangramento',
            'Anemia conhecida em gestante, em criança pequena ou em pessoa com doença cardíaca que piora rápido',
          ],
          cta: {
            label: 'Leia também: sintomas e quando procurar atendimento',
            href: '/artigos/anemia-ferropriva-sintomas-e-quando-procurar-atendimento/',
          },
        },
      ],
      faq: [
        {
          question: 'Anemia ferropriva é só falta de ferro na comida?',
          answer:
            'Nem sempre. A dieta pobre em ferro é uma causa importante, mas o quadro também surge quando a necessidade aumenta, como na infância, na gravidez e na menstruação volumosa, ou quando há perda de sangue, por verminose, úlcera ou hemorroida. Além de repor o ferro, é preciso identificar e tratar a origem do problema.',
        },
        {
          question: 'Quanto tempo leva para tratar a anemia por falta de ferro?',
          answer:
            'A hemoglobina costuma subir ao longo de algumas semanas, mas os estoques de ferro demoram mais, muitas vezes de dois a seis meses, para se repletar. Interromper assim que o cansaço passa é o erro mais comum. Siga o tempo definido pelo médico e refaça os exames de controle.',
        },
        {
          question: 'Tomar ferro por conta própria faz mal?',
          answer:
            'Pode. A suplementação sem exame não confirma o tipo de anemia, pode mascarar causas que exigem investigação, como sangramentos, e provocar efeitos no estômago e no intestino. Em excesso, o ferro também faz mal. O ideal é dosar hemoglobina e ferritina e seguir a orientação profissional.',
        },
      ],
      relatedArticleSlugs: [
        'anemia-ferropriva-sintomas-e-quando-procurar-atendimento',
        'anemia-ferropriva-tratamento-e-alimentacao',
      ],
      relatedTopicSlugs: ['doencas-cronicas', 'prevencao', 'saude-da-mulher', 'saude-infantil'],
      relatedDiseaseSlugs: ['doenca-renal-cronica', 'parasitoses-intestinais'],
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
        {
          label: 'Principais questões sobre anemia ferropriva na criança',
          url: 'https://portaldeboaspraticas.iff.fiocruz.br/atencao-crianca/principais-questoes-sobre-anemia-ferropriva-na-crianca/',
          publisher: 'Fiocruz',
        },
        {
          label: 'Carências nutricionais: anemia ferropriva',
          url: 'https://portaldeboaspraticas.iff.fiocruz.br/atencao-crianca/carencias-nutricionais-anemia-ferropriva/',
          publisher: 'Fiocruz',
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
      id: 'catarata',
      slug: 'catarata',
      name: 'Catarata',
      aliases: ['catarata senil', 'catarata nuclear', 'catarata subcapsular', 'catarata cortical'],
      summary:
        'Opacificação do cristalino do olho, que deixa a visão turva. É a principal causa de cegueira evitável no mundo e tem tratamento cirúrgico eficaz.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é catarata?',
          paragraphs: [
            'A catarata é a opacificação progressiva do cristalino, a lente natural que fica dentro do olho e foca a luz na retina. Quando o cristalino perde a transparência, a visão fica embaçada, as cores perdem intensidade e a pessoa passa a enxergar como se estivesse olhando por um vidro fosco.',
            'Embora o envelhecimento seja a causa mais frequente, a catarata também pode aparecer em jovens, por traumas, uso prolongado de certos medicamentos ou doenças como a diabetes. Segundo a Organização Mundial da Saúde, cerca de 94 milhões de pessoas vivem com perda visual causada por catarata, o que a mantém como a maior causa de cegueira evitável no mundo.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'A catarata evolui de forma gradual, e muitos só percebem a perda visual quando ela já atrapalha as atividades do dia a dia.',
          ],
          bullets: [
            'Visão embaçada ou turva, que piora com o tempo',
            'Cores desbotadas ou amareladas',
            'Sensibilidade aumentada à luz e ao ofuscamento, sobretudo ao dirigir à noite',
            'Necessidade de trocar a prescrição dos óculos com frequência',
            'Visão dupla em um mesmo olho',
            'Dificuldade para ler ou reconhecer rostos em ambientes com pouca iluminação',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'O envelhecimento é o fator de risco mais importante: após os 60 anos, o cristalino tende a perder transparência. Mas outros fatores aceleram esse processo.',
            'A exposição solar sem proteção, o tabagismo, a diabetes descontrolada e o uso prolongado de corticoides são as principais causas modificáveis da catarata precoce.',
          ],
          bullets: [
            'Envelhecimento natural do cristalino',
            'Exposição a raios ultravioleta sem proteção, em trabalhos ao ar livre ou no dia a dia',
            'Diabetes, especialmente quando a glicemia está descontrolada por longos períodos',
            'Uso prolongado de medicamentos corticoides, por via oral, inalatória ou em colírios',
            'Traumas oculares, cirurgias prévias no olho ou inflamações crônicas',
            'Tabagismo e consumo excessivo de álcool',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'O diagnóstico é feito pelo oftalmologista com exame de acuidade visual e biomicroscopia com lâmpada de fenda, que permite observar o grau de opacificação do cristalino. O exame é indolor e rápido.',
            'A avaliação do fundo de olho complementa o diagnóstico, pois ajuda a verificar se a retina e o nervo óptico estão saudáveis e se a cirurgia tem boa perspectiva de recuperação visual.',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Tratamento e cirurgia',
          paragraphs: [
            'Nas fases iniciais, a troca de óculos e o ajuste da iluminação podem melhorar o conforto visual, mas não impedem a progressão da catarata. Quando a perda visual atrapalha a rotina, a cirurgia está indicada.',
            'A cirurgia de catarata no Brasil é oferecida pelo SUS e consiste em remover o cristalino opacificado e substituí-lo por uma lente intraocular artificial. O procedimento é breve, indolor e tem alta taxa de sucesso. Nos últimos anos, o Ministério da Saúde ampliou a oferta, inclusive com técnicas que tratam catarata e glaucoma na mesma intervenção.',
          ],
          cta: {
            label: 'Leia também: como funciona a cirurgia de catarata',
            href: '/artigos/catarata-tratamento-e-cirurgia/',
          },
        },
        {
          id: 'prevencao',
          heading: 'Como reduzir o risco',
          paragraphs: [
            'Não é possível impedir a catarata ligada ao envelhecimento, mas medidas simples reduzem o risco de desenvolvimento precoce e retardam a progressão.',
          ],
          bullets: [
            'Usar óculos de sol com filtro UV ao ar livre, mesmo em dias nublados',
            'Manter a diabetes controlada, com acompanhamento médico regular',
            'Não fumar e moderar o consumo de álcool',
            'Usar chapéu ou boné em trabalhos sob sol intenso',
            'Realizar exames oftalmológicos periódicos, sobretudo após os 50 anos',
            'Evitar o uso prolongado de corticoides sem orientação médica',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'A catarata evolui devagar e não costuma ser uma urgência. Porém, há sinais que pedem avaliação oftalmológica imediata, porque podem indicar outras condições ou complicações:',
          ],
          bullets: [
            'Perda visual súbita em um olho',
            'Dor ocular intensa, acompanhada de náusea ou vômito',
            'Alucinações visuais ou manchas escuras que surgem de repente',
            'Visão dupla persistente que não melhora ao fechar um olho',
            'Empeçamento rápido da visão em semanas, fora do padrão habitual',
          ],
          cta: {
            label: 'Leia também: sintomas da catarata e quando procurar atendimento',
            href: '/artigos/catarata-sintomas-e-quando-procurar-atendimento/',
          },
        },
        {
          id: 'vida-diaria',
          heading: 'Vida diária com catarata',
          paragraphs: [
            'Enquanto a catarata está em fase leve, ajustes na rotina ajudam a manter a segurança e a autonomia:',
          ],
          bullets: [
            'Reforçar a iluminação da casa, com lâmpadas mais claras e luz direta nas áreas de leitura',
            'Evitar dirigir à noite ou sob chuva forte, quando o ofuscamento é maior',
            'Usar óculos com aumento adequado à prescrição atual',
            'Manter consultas oftalmológicas regulares para acompanhar a progressão',
            'Após a cirurgia, seguir as orientações de repouso e uso de colírios para garantir a recuperação',
          ],
        },
      ],
      faq: [
        {
          question: 'Catarata tem cura sem cirurgia?',
          answer:
            'Não existe medicamento ou exercício que reverta a opacificação do cristalino. Nos estágios iniciais, óculos e boa iluminação aliviam os sintomas; quando a visão já interfere na rotina, a cirurgia é o único tratamento que devolve a transparência.',
        },
        {
          question: 'A catarata pode voltar depois da cirurgia?',
          answer:
            'A catarata não retorna porque o cristalino natural é removido. Porém, alguns meses ou anos após a cirurgia, a cápsula que sustenta a lente intraocular pode ficar opaca (chamada catarata secundária), o que se resolve com uma aplicação rápida de laser no consultório.',
        },
        {
          question: 'O SUS faz cirurgia de catarata?',
          answer:
            'Sim. O Sistema Único de Saúde oferece cirurgia de catarata de forma gratuita, em hospitais credenciados. O gargalo costuma ser a fila de espera, não a técnica: o Ministério da Saúde tem ampliado a oferta de procedimentos e atualizado o protocolo cirúrgico.',
        },
      ],
      relatedArticleSlugs: [
        'catarata-sintomas-e-quando-procurar-atendimento',
        'catarata-tratamento-e-cirurgia',
      ],
      relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedDiseaseSlugs: ['diabetes', 'hipertensao'],
      references: [
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
      id: 'parasitoses-intestinais',
      slug: 'parasitoses-intestinais',
      name: 'Parasitoses intestinais',
      aliases: ['verminose', 'parasita intestinal', 'helmintíases intestinais'],
      summary:
        'Infecções causadas por parasitos que se instalam no intestino, dos vermes como a lombriga e o oxiúro a protozoários como a giárdia. Boa parte dos casos se resolve na unidade básica de saúde, mas anemia, obstrução intestinal e diarreia com desidratação são sinais de alerta.',
      category: 'Doenças infecciosas',
      categorySlug: 'doencas-infecciosas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que são parasitoses intestinais?',
          paragraphs: [
            'As parasitoses intestinais são infecções causadas por organismos que se instalam no intestino humano: vermes, como a lombriga, o oxiúro, o verme-chicote e os ancilóstomos, ou protozoários microscópicos, como a giárdia e a ameba Entamoeba histolytica. Uma parte considerável das pessoas infectadas não sente nada, e a parasitose aparece por acaso, num exame de fezes pedido por outro motivo.',
            'O termo verminose designa as formas causadas por vermes, o grupo mais comum no Brasil e no mundo. A Organização Mundial da Saúde estima 1,5 bilhão de pessoas infectadas pelos vermes transmitidos pelo solo, 24% da população do planeta, quase todas concentradas onde o saneamento é incompleto. No Brasil, a carga é maior no Norte e no Nordeste, e as crianças são o grupo mais atingido.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'Os sintomas intestinais costumam ser vagos, a ponto de imitar outras causas de barriga irritada, como a [gastroenterite](/doencas/gastroenterite/). O sinal mais fácil de reconhecer é a coceira anal que piora à noite, típica do oxiúro.',
          ],
          bullets: [
            'Dor ou desconforto abdominal espalhado, em cólica leve',
            'Diarreia ou fezes moles que vão e voltam por semanas',
            'Náuseas e vômitos',
            'Barriga estufada e excesso de gases',
            'Coceira ao redor do ânus, pior durante a noite',
            'Perda de apetite e de peso, ou ganho de peso insuficiente na criança',
            'Cansaço e palidez quando a anemia se instala',
          ],
        },
        {
          id: 'transmissao',
          heading: 'Como se pega?',
          paragraphs: [
            'O caminho mais comum começa com fezes de uma pessoa infectada contaminando o ambiente. Os ovos eliminados nas fezes fertilizam o solo e a água e entram no corpo seguinte pela boca, junto com a mão que não foi lavada depois do banheiro, com a verdura crua mal lavada ou com a água contaminada. É assim que se pegam a lombriga, o verme-chicote, a giárdia e a ameba.',
            'Há dois atalhos adicionais. Os ancilóstomos, causadores do amarelo, vivem como larvas no solo e penetram a pele de quem anda descalço na terra contaminada, sem precisar ser ingerida. O oxiúro funciona por reinfecção: os ovos depositados ao redor do ânus passam para as mãos e para baixo das unhas quando a pessoa se coça e voltam à própria boca, e circulam com facilidade entre os moradores da mesma casa.',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'As parasitoses intestinais acompanham as condições de moradia e a primeira infância, e quase todo fator de risco tem solução conhecida:',
          ],
          bullets: [
            'Viver sem saneamento básico ou com abastecimento de água irregular',
            'Caminhar descalço em terra contaminada',
            'Beber água não tratada, de poço ou de fonte',
            'Lavar mal as mãos antes das refeições e depois do banheiro',
            'Ser criança pequena, que leva objetos e dedos à boca',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'O exame padrão é o parasitológico de fezes, que procura ovos, cistos ou larvas dos parasitos ao microscópio. Como a eliminação dos ovos é irregular ao longo dos dias, uma amostra negativa não descarta a infecção: a conduta habitual é colher três amostras em dias alternados antes de concluir.',
            'Para o oxiúro existe um atalho. Quando a coceira anal noturna é o retrato do problema, o médico pode pedir a prova da fita adesiva, pressionada ao redor do ânus ao acordar, antes do banho, para capturar os ovos e identificá-los no microscópio. Exames de sangue ajudam a avaliar as complicações, como a anemia.',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Como se trata?',
          paragraphs: [
            'O remédio certo depende do parasita. Contra os vermes, as opções mais usadas são o albendazol e o mebendazol, em geral em tratamento curto; contra a giárdia e a ameba, são eficazes a nitazoxanida e os medicamentos da família do metronidazol. Os remédios contra vermes não eliminam protozoários, e é por isso que a automedicação falha com frequência: a dose se define pela idade e pelo peso, e o remédio se define pelo agente encontrado no exame.',
            'No Brasil, o tratamento das geo-helmintíases está disponível na rede pública, com o albendazol fornecido pelo SUS nas unidades básicas de saúde, e campanhas de tratamento periódico acontecem em áreas de alta transmissão, coordenadas pelo Ministério da Saúde. No caso do oxiúro, a família inteira toma o remédio no mesmo dia, porque os ovos compartilhados em cama e banheiro reinfestam quem ficou de fora.',
          ],
          cta: {
            label: 'Leia também: tratamento e prevenção das parasitoses intestinais',
            href: '/artigos/parasitoses-intestinais-tratamento-e-prevencao/',
          },
        },
        {
          id: 'complicacoes',
          heading: 'Que problemas elas causam?',
          paragraphs: [
            'A carga parasitária pesa mais na infância: os vermes competem pelo alimento do corpo e, somados à diarreia de repetição, derrubam o estado nutricional, atrapalham o ganho de peso e o crescimento e prejudicam a atenção e o rendimento escolar. Os ancilóstomos vão além: fixam-se à parede do intestino e se alimentam de sangue, e a perda contínua de sangue leva à [anemia ferropriva](/doencas/anemia-ferropriva/), a anemia por falta de ferro.',
            'Complicações francas são menos frequentes, mas existem: uma carga grande de lombrigas pode se ajuntar e bloquear o intestino ou as vias biliares, quadro que exige atendimento imediato. A giárdia de longa duração produz diarreia persistente, perda de peso e má absorção de nutrientes. E coçar o ânus fere a pele e abre porta para infecções bacterianas secundárias.',
          ],
        },
        {
          id: 'prevencao',
          heading: 'Como prevenir',
          paragraphs: [
            'Quebrar o ciclo dos ovos e dos cistos passa por medidas de rotina, conhecidas e baratas:',
          ],
          bullets: [
            'Lavar as mãos com água e sabão depois de usar o banheiro e antes de comer',
            'Lavar muito bem as frutas, as verduras e os legumes que serão consumidos crus',
            'Beber só água tratada, fervida ou filtrada',
            'Usar calçados ao caminhar em terra ou areia',
            'Manter unhas curtas e trocar roupa íntima e lençóis com frequência quando há oxiúro em casa',
          ],
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Sinais de alerta e quando procurar atendimento',
          paragraphs: [
            'Na maioria das vezes, a parasitose intestinal é problema de consulta marcada, e não de emergência. Há, porém, situações que pedem atendimento imediato:',
          ],
          bullets: [
            'Dor abdominal forte e em cólica, com vômitos e interrupção das fezes e dos gases, sugestiva de obstrução intestinal',
            'Sangue nas fezes acompanhado de febre ou dor intensa',
            'Barriga muito distendida, endurecida ou muito sensível ao toque',
            'Sinais de desidratação, como boca seca, ausência de lágrimas, pouca urina e moleza excessiva',
            'Palidez acentuada com falta de ar, fraqueza importante ou coração acelerado, sugestiva de anemia grave',
            'Criança que emagrece, para de crescer ou perde o rendimento escolar ao longo das semanas',
          ],
          cta: {
            label: 'Leia também: parasitoses intestinais, sinais de alerta',
            href: '/artigos/parasitoses-intestinais-sinais-de-alerta-quando-procurar-atendimento/',
          },
        },
      ],
      faq: [
        {
          question: 'Como sei que tenho parasitoses intestinais?',
          answer:
            'Muitas infecções não dão sinal nenhum. Quando aparecem sintomas, eles são vagos: dor abdominal, fezes moles de vai e volta, gases, perda de apetite, e no caso do oxiúro a coceira anal noturna. O que resolve a dúvida é o parasitológico de fezes, de preferência com três coletas em dias alternados, porque uma única amostra pode não pegar o parasito.',
        },
        {
          question: 'Vermes podem dar anemia e atrapalhar o crescimento das crianças?',
          answer:
            'Sim. Os ancilóstomos se alimentam de sangue no intestino, e a perda contínua produz anemia ferropriva. Na criança, a carga parasitária de longa duração compete com a nutrição: piora o apetite, o ganho de peso, o crescimento e o rendimento escolar. Por isso palidez e cansaço que persistem depois do remédio de verme pedem reavaliação.',
        },
        {
          question: 'Dá para tomar remédio de verme comprado na farmácia sem fazer exame?',
          answer:
            'Não é o melhor caminho. O remédio depende do parasito: albendazol e mebendazol funcionam contra os vermes, mas giárdia e ameba exigem outros medicamentos, e o quadro volta sem explicação quando a escolha erra o alvo. A dose muda com a idade e o peso, e a gravidez muda a opção de remédio. O atendimento na UBS define o tratamento correto e, no caso das geo-helmintíases, o SUS fornece o medicamento.',
        },
      ],
      relatedArticleSlugs: [
        'parasitoses-intestinais-sinais-de-alerta-quando-procurar-atendimento',
        'parasitoses-intestinais-tratamento-e-prevencao',
      ],
      relatedTopicSlugs: ['doencas-infecciosas', 'prevencao', 'saude-infantil'],
      relatedDiseaseSlugs: ['anemia-ferropriva', 'gastroenterite'],
      references: [
        {
          label: 'Geo-helmintíases transmitidas pelo solo: folha informativa',
          url: 'https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections',
          publisher: 'Organização Mundial da Saúde',
        },
        {
          label: 'Geo-helmintíase: o que é, sintomas e tratamento',
          url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/geo-helmintiase',
          publisher: 'Ministério da Saúde (Brasil)',
        },
        {
          label: 'Ascaridíase, versão saúde para a família',
          url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-parasit%C3%A1rias-nematelmintos-nemat%C3%B3deos/ascarid%C3%ADase',
          publisher: 'Manual MSD',
        },
        {
          label: 'Ancilostomíase, versão saúde para a família',
          url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-parasit%C3%A1rias-nematelmintos-nemat%C3%B3deos/ancilostom%C3%ADase',
          publisher: 'Manual MSD',
        },
        {
          label: 'Giardíase, versão saúde para a família',
          url: 'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-parasit%C3%A1rias-protozo%C3%A1rios-intestinais-e-microspor%C3%ADdios/giard%C3%ADase',
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
      id: 'artrite-reumatoide',
      slug: 'artrite-reumatoide',
      name: 'Artrite reumatoide',
      aliases: ['AR', 'poliartrite crônica', 'doença reumatoide articular'],
      summary:
        'Doença autoimune que inflama as articulações de forma simétrica e persistente. Tem tratamento, e começar cedo faz diferença para preservar as juntas.',
      category: 'Doenças crônicas',
      categorySlug: 'doencas-cronicas',
      sections: [
        {
          id: 'o-que-e',
          heading: 'O que é artrite reumatoide?',
          paragraphs: [
            'A artrite reumatoide é uma doença autoimune crônica em que o sistema de defesa ataca por engano a membrana sinovial, o tecido que reveste as articulações. Essa membrana inflama, engrossa e, com o tempo, vai destruindo a cartilagem e o osso da junta.',
            'O resultado é dor, inchaço e rigidez, em geral nas duas mãos, nos punhos e nos pés ao mesmo tempo. É a doença que mais precisa de diagnóstico precoce: tratada no início, protege a articulação da deformidade; tratada tarde, o dano já está feito.',
          ],
        },
        {
          id: 'sintomas',
          heading: 'Quais são os sintomas?',
          paragraphs: [
            'Os sintomas costumam aparecer aos poucos, piorar pela manhã e atingir as articulações dos dois lados do corpo.',
          ],
          bullets: [
            'Rigidez nas juntas ao acordar, que dura mais de meia hora',
            'Dor e inchaço nos dedos, nos punhos e na base das mãos',
            'Sintomas simétricos, presentes dos dois lados do corpo ao mesmo tempo',
            'Calor e sensibilidade nas articulações atingidas',
            'Cansaço desproporcional ao esforço',
            'Dor que melhora com o movimento e piora com o repouso prolongado',
          ],
        },
        {
          id: 'fatores-de-risco',
          heading: 'O que aumenta o risco?',
          paragraphs: [
            'A doença pode começar em qualquer idade, mas aparece com mais frequência entre os 40 e os 60 anos. As mulheres são duas a três vezes mais afetadas que os homens, segundo a Organização Mundial da Saúde.',
            'Ter um familiar com a doença aumenta o risco, e fumar é o fator que mais se consegue mudar: o cigarro piora a inflamação e reduz a resposta ao tratamento.',
          ],
          bullets: [
            'Ser mulher, sobretudo a partir dos 40 anos',
            'Fumar, ou ter fumado por muitos anos',
            'Ter caso de artrite reumatoide na família',
            'Viver com excesso de peso',
          ],
        },
        {
          id: 'diagnostico',
          heading: 'Como é feito o diagnóstico?',
          paragraphs: [
            'O diagnóstico é clínico e cabe ao reumatologista. Além de examinar as articulações, ele pede exames de sangue que medem a inflamação e procuram anticorpos como o fator reumatoide e o anti-CCP, e radiografias ou ultrassonografia das juntas.',
            'Não existe um exame único que confirme a doença, e os primeiros resultados podem vir normais. Por isso o médico junta a história, o exame físico e os resultados ao longo das semanas antes de fechar o diagnóstico.',
          ],
          cta: {
            label: 'Leia também: sinais iniciais da artrite reumatoide',
            href: '/artigos/artrite-reumatoide-sinais-iniciais-quando-procurar-atendimento/',
          },
        },
        {
          id: 'diagnostico-diferencial',
          heading: 'Dor nas juntas depois de uma arbovirose',
          paragraphs: [
            'Nem toda junta inchada é artrite reumatoide. As epidemias de chikungunya que atingiram o Brasil deixaram dor articular prolongada em parte das pessoas infectadas, e essa dor persistente pode se parecer muito com a artrite reumatoide. A [chikungunya](/doencas/chikungunya/) costuma começar de forma abrupta, com febre alta e muitas juntas atingidas ao mesmo tempo, enquanto a artrite reumatoide entra de mansinho e se arrasta por meses.',
            'A [dengue](/doencas/dengue/) também dói nas juntas e nos músculos, mas ali a dor é passageira e acompanha a fase aguda da infecção. Saber de onde vem a dor muda a conduta, e só o reumatologista consegue separar uma coisa da outra.',
          ],
        },
        {
          id: 'tratamento',
          heading: 'Tratamento',
          paragraphs: [
            'Quanto mais cedo o tratamento começa, maior a chance de conter a inflamação antes que a articulação se danifique. O objetivo é a remissão, a fase em que a doença fica quieta e a pessoa segue a vida normalmente.',
            'As medicações e a sequência de tratamento são definidas pelo reumatologista, conforme as opções disponíveis no serviço, e o SUS mantém um protocolo próprio para a doença. Nunca ajuste a dose nem pare o remédio por conta própria: muitas dessas medicações demoram semanas para agir, e sentir melhora não significa que a doença sumiu.',
          ],
          cta: {
            label: 'Leia também: tratamento e cuidados com as juntas',
            href: '/artigos/artrite-reumatoide-tratamento-e-cuidados-com-as-juntas/',
          },
        },
        {
          id: 'sinais-de-alerta',
          heading: 'Quando procurar atendimento',
          paragraphs: [
            'Dor e inchaço em várias juntas que duram mais de seis semanas pedem avaliação de um reumatologista, e vale procurar a unidade de saúde de referência para conseguir esse encaminhamento. Procure atendimento sem demora se houver:',
          ],
          bullets: [
            'Uma única articulação muito inchada, quente e dolorida, sobretudo com febre',
            'Febre alta, perda de peso e cansaço intenso junto com a dor nas juntas',
            'Piora rápida da dor ou do inchaço',
            'Dor que impede de mover a mão, o punho ou o pé',
            'Sinal de infecção na pele ou febre durante o tratamento',
          ],
        },
        {
          id: 'complicacoes',
          heading: 'Complicações',
          paragraphs: [
            'Sem tratamento, a inflamação contínua vai deformando as articulações e limita gestos simples do dia a dia. A doença também pode atingir outras partes do corpo.',
          ],
          bullets: [
            'Deformidade e perda de função nas mãos, nos punhos e nos pés',
            'Perda de massa óssea e risco maior de fraturas',
            'Inflamação que pode envolver os olhos, os pulmões e o coração',
            'Cansaço persistente e menor qualidade de vida',
          ],
        },
        {
          id: 'vida-diaria',
          heading: 'Vida diária com a doença',
          paragraphs: [
            'Com acompanhamento e tratamento em dia, a maioria das pessoas mantém uma rotina ativa. Alguns cuidados ajudam a poupar as articulações.',
          ],
          bullets: [
            'Manter atividade física regular, com exercícios de mobilidade e de fortalecimento orientados por profissional',
            'Fazer fisioterapia e usar órteses quando o reumatologista indicar',
            'Distribuir as tarefas e usar os dois lados do corpo para não sobrecarregar as juntas',
            'Aplicar calor morno nas juntas rígidas e frio nas muito inchadas',
            'Não fumar, cuidar do peso e voltar às consultas de acompanhamento',
          ],
        },
      ],
      faq: [
        {
          question: 'Artrite reumatoide tem cura?',
          answer:
            'Não há cura, mas o tratamento controla a inflamação e pode levar à remissão. Quanto mais cedo o tratamento começa, menor a chance de deformidade e de perda de função.',
        },
        {
          question: 'Qual a diferença entre a artrite reumatoide e a dor nas juntas depois de chikungunya?',
          answer:
            'A dor da chikungunya aparece de repente, com febre, logo depois da infecção pelo mosquito. A artrite reumatoide entra aos poucos, atinge as juntas dos dois lados e dura meses. As duas podem causar dor articular prolongada parecida, e só o reumatologista consegue diferenciar uma da outra.',
        },
        {
          question: 'Preciso esperar as juntas incharem para procurar um reumatologista?',
          answer:
            'Não. Rigidez matinal e dor persistente por mais de seis semanas já justificam a avaliação. Buscar o reumatologista logo protege a articulação, e a espera por essa consulta costuma ser longa nas grandes cidades.',
        },
      ],
      relatedArticleSlugs: [
        'artrite-reumatoide-sinais-iniciais-quando-procurar-atendimento',
        'artrite-reumatoide-tratamento-e-cuidados-com-as-juntas',
      ],
      relatedTopicSlugs: ['doencas-cronicas', 'prevencao'],
      relatedDiseaseSlugs: ['chikungunya', 'dengue', 'hipertensao'],
      references: [
        {
          label: 'Artrite reumatoide: folha informativa',
          url: 'https://www.who.int/news-room/fact-sheets/detail/rheumatoid-arthritis',
          publisher: 'Organização Mundial da Saúde',
        },
        {
          label: 'Artrite reumatoide',
          url: 'https://www.reumatologia.org.br/doencas-reumaticas/artrite-reumatoide/',
          publisher: 'Sociedade Brasileira de Reumatologia',
        },
        {
          label: 'Protocolo Clínico e Diretrizes Terapêuticas de Artrite Reumatoide',
          url: 'https://www.gov.br/conitec/pt-br/midias/relatorios/2017/pcdt_ar_final.pdf/@@download/file',
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
];
