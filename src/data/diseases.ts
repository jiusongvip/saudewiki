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
          'A infecção por um sorotipo gera imunidade duradoura contra ele, mas não protege contra os outros três. Por isso, uma nova infecção por outro sorotipo pode aumentar o risco de a doença evoluir para a forma grave.',
          'A doença é mais comum em regiões tropicais e subtropicais, sobretudo em áreas urbanas com acúmulo de água parada e alta densidade de mosquitos.',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como a dengue é transmitida?',
        paragraphs: [
          'A transmissão acontece pela picada de um mosquito fêmea infectado, sobretudo durante o dia. Não há transmissão direta de pessoa para pessoa.',
          'O mosquito se reproduz em água parada, o que explica por que os casos aumentam em períodos de chuva e calor.',
          'O Aedes aegypti costuma picar no início da manhã e no fim da tarde e vive perto das pessoas. Por isso, quem está com dengue deve evitar novas picadas: isso reduz a chance de o mosquito adquirir o vírus e transmiti-lo a outras pessoas.',
          'Em situações raras, o vírus também pode ser transmitido da gestante para o bebê, por transfusão de sangue ou por transplante de órgãos.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas da dengue?',
        paragraphs: [
          'Os primeiros sinais costumam aparecer entre quatro e dez dias após a picada do mosquito.',
          'Os sintomas variam bastante: nem todas as pessoas têm febre alta, manchas na pele ou todas essas manifestações ao mesmo tempo, e muitas infecções não causam sintoma nenhum.',
        ],
        bullets: [
          'Febre alta de início súbito, geralmente entre 39 °C e 40 °C',
          'Dor de cabeça intensa e dor atrás dos olhos, que piora ao movimentar os olhos',
          'Dores musculares e nas articulações',
          'Náusea, vômito e falta de apetite',
          'Manchas vermelhas na pele, que podem surgir mais tarde',
          'Coceira, sobretudo quando as manchas aparecem',
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
          'A dengue costuma passar por três fases. Reconhecê-las ajuda a entender por que a piora pode acontecer justamente quando a febre começa a baixar.',
          'Fase febril: dura de dois a sete dias, com febre, dores no corpo, dor de cabeça e mal-estar. A desidratação pode ocorrer pela febre, pelos vômitos ou pela baixa ingestão de líquidos.',
          'Fase crítica: começa quando a febre diminui, em geral entre o terceiro e o sétimo dia, e pode durar de 24 a 48 horas. Em quem evolui para a forma grave, é nesse período que podem surgir o extravasamento de plasma, os sangramentos e o choque.',
          'Fase de recuperação: o organismo reabsorve o líquido que saiu dos vasos, o apetite volta e as alterações dos exames tendem a regredir. Cansaço, manchas e coceira podem permanecer por algum tempo.',
        ],
      },
      {
        id: 'dengue-grave',
        heading: 'O que é dengue grave?',
        paragraphs: [
          'A dengue grave é a forma da doença associada a pelo menos uma destas complicações: extravasamento importante de plasma, com choque ou acúmulo de líquido que prejudica a respiração; sangramento intenso; ou comprometimento grave de órgãos, como fígado, coração, cérebro e rins.',
          'O termo “dengue hemorrágica” ainda é usado popularmente, mas não descreve todos os casos: uma pessoa pode ter dengue grave sem apresentar sangramento evidente.',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Sinais de alerta e quando procurar atendimento',
        paragraphs: [
          'A melhora da febre não significa que o risco acabou: os sinais de alerta costumam surgir quando a temperatura começa a baixar, geralmente entre o terceiro e o sétimo dia da doença.',
          'Procure atendimento imediatamente, mesmo que a febre tenha baixado, se aparecer algum destes sinais:',
        ],
        bullets: [
          'Dor abdominal intensa e contínua',
          'Vômitos persistentes ou dificuldade de beber líquidos',
          'Sangramento de gengiva, nariz ou nas fezes',
          'Vômito com sangue ou fezes muito escuras',
          'Sonolência excessiva, confusão, agitação ou irritabilidade',
          'Tontura, desmaio ou queda de pressão',
          'Dificuldade para respirar',
          'Pele pálida, fria e úmida',
          'Fraqueza intensa',
          'Urinar muito menos que o habitual ou sinais de desidratação',
          'Barriga inchada de forma repentina ou progressiva',
          'Piora súbita depois que a febre baixa',
        ],
        cta: {
          label: 'Leia também: quando procurar atendimento médico em caso de suspeita de dengue',
          href: '/artigos/quando-procurar-atendimento-em-caso-de-suspeita-de-dengue/',
        },
      },
      {
        id: 'grupos-de-risco',
        heading: 'Quem tem maior risco de complicações?',
        paragraphs: [
          'Qualquer pessoa pode desenvolver dengue grave, mas alguns grupos precisam de acompanhamento mais atento:',
        ],
        bullets: [
          'Bebês e crianças pequenas',
          'Pessoas com 65 anos ou mais',
          'Gestantes e mulheres no pós-parto',
          'Pessoas que já tiveram dengue',
          'Pessoas com diabetes, hipertensão, doença renal, doença cardíaca, doença respiratória ou doenças do sangue',
          'Pessoas com obesidade',
          'Pessoas com imunidade comprometida',
          'Pessoas com dificuldade para se hidratar ou sem acesso rápido a atendimento',
        ],
      },
      {
        id: 'diagnostico',
        heading: 'Como é feito o diagnóstico?',
        paragraphs: [
          'O diagnóstico começa pela avaliação clínica: sintomas, dia em que começaram e histórico de moradia ou viagem em área com circulação do vírus. No exame físico, o profissional procura sinais de desidratação, sangramento, alterações na circulação e comprometimento de órgãos.',
          'O tipo de exame depende do momento da doença. Nos primeiros dias, geralmente até o quinto dia, o RT-PCR e o teste de antígeno NS1 podem identificar o vírus; a partir do sexto dia, a sorologia detecta os anticorpos produzidos contra ele.',
          'O hemograma ajuda a acompanhar leucócitos, hematócrito e plaquetas, mas não confirma a dengue sozinho. Exames de função hepática e renal, testes de coagulação e exames de imagem podem ser solicitados conforme o quadro.',
          'A queda das plaquetas é comum, mas o número isolado não define a gravidade nem indica transfusão por si só: o risco é avaliado em conjunto com o estado geral, a pressão arterial, a hidratação e outros exames.',
        ],
      },
      {
        id: 'diagnostico-diferencial',
        heading: 'Quais doenças podem parecer dengue?',
        paragraphs: [
          'Febre, dores no corpo e manchas na pele também aparecem em outras doenças. Dependendo da região e dos sintomas, o profissional pode considerar outros diagnósticos.',
          'Não é seguro diferenciar essas doenças apenas pela aparência das manchas ou pela intensidade da dor: a avaliação profissional é necessária.',
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
        heading: 'Tratamento e cuidados',
        paragraphs: [
          'Não há medicamento antiviral específico. O manejo se baseia em hidratação, alívio dos sintomas e acompanhamento clínico, sempre com orientação de um profissional de saúde.',
          'Em quadros leves, os cuidados incluem repouso, ingestão frequente de líquidos, alimentação leve conforme o apetite, observação da quantidade de urina e retorno para reavaliação na data indicada.',
          'Para febre e dor, o paracetamol pode ser indicado, mas a escolha e a dose dependem da idade, do peso e de outras condições, e devem ser definidas por um profissional de saúde. Não se automedique.',
          'Enquanto houver suspeita de dengue, evite aspirina (AAS), ibuprofeno, diclofenaco, naproxeno e remédios para gripe ou dor que contenham essas substâncias: eles aumentam o risco de sangramento.',
          'Se houver vômitos repetidos, desidratação, sinais de alerta ou dengue grave, pode ser necessário receber soro na veia, ficar em observação ou ser internado. A quantidade e a velocidade da hidratação intravenosa são definidas pela equipe de saúde.',
          'Antibióticos não têm efeito contra o vírus, e corticoides e transfusões não são indicados de rotina: dependem de avaliação médica específica.',
        ],
      },
      {
        id: 'recuperacao',
        heading: 'Recuperação e cuidados',
        paragraphs: [
          'A maioria das pessoas se recupera em uma ou duas semanas. O cansaço e a fraqueza podem persistir por mais tempo, mesmo depois que a febre e as dores desaparecem.',
          'O retorno às atividades deve ser gradual, e é melhor evitar exercício intenso, consumo de álcool e automedicação durante a recuperação.',
          'Procure novamente o serviço de saúde se os sintomas voltarem ou se aparecer falta de ar, sangramento, dor abdominal, tontura ou redução da quantidade de urina.',
          'Com reconhecimento precoce e manejo adequado, a maioria dos casos graves pode ser tratada com sucesso.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir a dengue?',
        paragraphs: [
          'Como não existe tratamento específico para eliminar o vírus, a prevenção combina eliminação de criadouros, proteção contra picadas e vacinação quando indicada.',
          'Os ovos do mosquito podem permanecer viáveis por meses em superfícies secas. Por isso, não basta descartar a água: é importante esfregar as paredes internas dos recipientes.',
          'Repelentes com icaridina, DEET ou IR3535 podem ser usados conforme o rótulo e as orientações para cada faixa etária, inclusive na gestação.',
          'No Brasil existem vacinas contra a dengue aprovadas pela Anvisa. A indicação depende da idade, das condições de saúde e das recomendações vigentes, e a oferta pode variar conforme o município. Consulte uma unidade de saúde para saber se a vacina é indicada para você. Mesmo quem foi vacinado deve continuar eliminando os criadouros e evitando a picada.',
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
          'Não. A transmissão ocorre pela picada do mosquito Aedes aegypti infectado, não pelo contato direto entre pessoas.',
      },
      {
        question: 'Quem já teve dengue pode ter de novo?',
        answer:
          'Sim. Como existem quatro sorotipos do vírus, uma nova infecção por um sorotipo diferente é possível e pode aumentar o risco de a doença evoluir para a forma grave.',
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
        question: 'Existe vacina contra dengue?',
        answer:
          'Sim. O SUS oferece vacina contra a dengue, mas para o público e as regiões definidos pela estratégia do Ministério da Saúde, que mudam com o tempo. A vacina não substitui as medidas para reduzir a proliferação do mosquito. Informe-se na UBS da sua região.',
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
          'A insulina é o hormônio que leva a glicose dos alimentos para dentro das células, onde ela é transformada em energia. Quando esse processo falha, a glicose se acumula no sangue e, ao longo dos anos, passa a prejudicar os vasos sanguíneos e os nervos.',
          'A glicemia é medida em mg/dL, e considera-se normal, em jejum, um valor abaixo de 100 mg/dL. Como a doença se desenvolve de forma gradual e silenciosa, muitas pessoas descobrem a alteração em um exame de rotina.',
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
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Quem tem diabetes deve procurar um serviço de urgência, ou ligar para o SAMU 192, diante de sinais que podem indicar cetoacidose diabética ou estado hiperglicêmico hiperosmolar, duas emergências que exigem atendimento rápido:',
        ],
        bullets: [
          'Vômitos persistentes, dor abdominal e dificuldade para respirar',
          'Hálito com odor de fruta, sonolência intensa ou confusão mental',
          'Desmaio, convulsão ou dificuldade para acordar',
          'Glicemia muito alta que não cai, mesmo com o tratamento em dia',
          'Em quem usa insulina, hipoglicemia grave com desmaio ou convulsão',
          'Sinais de glicose muito baixa, como tremores, suor frio e palidez',
        ],
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
          'No diabetes tipo 1, o tratamento exige insulina todos os dias, aplicada na camada de gordura logo abaixo da pele, nas coxas, no abdômen, nos braços ou nos glúteos, variando o local. O tipo e a dose são definidos pelo profissional de saúde.',
          'No diabetes tipo 2, o tratamento começa por mudanças no estilo de vida e, quando necessário, inclui medicamentos orais. A metformina costuma ser o primeiro remédio indicado, e existem outras classes, como as sulfonilureias e os inibidores que reduzem a absorção de carboidratos no intestino. A escolha depende da glicemia, de outras doenças e do risco de efeitos colaterais.',
          'O acompanhamento da glicemia em casa, com o glicosímetro, ajuda a entender como a doença responde à alimentação, à atividade física e aos medicamentos. A frequência das medições varia conforme o tipo de diabetes e o tratamento e é orientada pela equipe de saúde.',
          'No SUS, o tratamento é gratuito: a metformina, a glibenclamida, a glicazida e as insulinas NPH e regular estão disponíveis nas unidades básicas de saúde, e o programa Farmácia Popular também distribui esses medicamentos sem custo em farmácias credenciadas. Em algumas unidades também há glicosímetro, tiras reagentes e seringas para a aplicação da insulina.',
          'Em casos selecionados de diabetes tipo 2 com obesidade importante, a cirurgia bariátrica pode ser uma alternativa, sempre indicada por uma equipe de saúde após uma avaliação completa.',
        ],
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
          'A hipoglicemia costuma causar tremor, sudorese, palidez, fome repentina, tontura, palpitação e confusão. Se a pessoa estiver consciente, deve consumir algo doce de ação rápida e medir a glicemia novamente em seguida. Se houver desmaio, convulsão ou dificuldade para acordar, acione o SAMU 192 imediatamente, porque é uma emergência.',
      },
      {
        question: 'Comer muito açúcar causa diabetes?',
        answer:
          'Não é uma relação direta e simples. O desenvolvimento do tipo 2 envolve fatores genéticos, excesso de peso, sedentarismo e outros elementos; o consumo excessivo de açúcar contribui para o ganho de peso e para o aumento do risco.',
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
          'A pressão é medida em milímetros de mercúrio (mmHg) e registrada em dois números: a sistólica, que é a máxima, medida quando o coração se contrai, e a diastólica, que é a mínima, medida entre uma batida e outra.',
          'A pressão arterial depende da força com que o coração bombeia o sangue e da resistência que as artérias oferecem à passagem dele. Quando as artérias ficam mais estreitas ou o coração bombeia com mais força, a pressão sobe; na hipertensão, esse mecanismo deixa de se ajustar bem e a pressão permanece alta ao longo do dia e da noite, inclusive em repouso.',
          'Na maior parte das pessoas, a pressão alta não provoca sintoma nenhum durante anos e costuma ser descoberta em um exame de rotina. Quando fica elevada sem controle por muito tempo, prejudica aos poucos o coração, o cérebro, os rins e os olhos, e aumenta o risco de infarto, derrame e insuficiência renal. Cerca de 3 em cada 10 adultos brasileiros têm pressão alta, segundo o Vigitel 2023, do Ministério da Saúde.',
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
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'Quando procurar atendimento',
        paragraphs: [
          'Uma pressão muito alta, em geral a partir de 180/120 mmHg, acompanhada de alguns sintomas, é uma emergência médica. Em gestantes, dor de cabeça intensa, visão borrada, inchaço que piora de repente ou convulsão também exigem atendimento imediato.',
          'Nesses casos, procure um serviço de urgência ou ligue para o SAMU 192, sobretudo diante de:',
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
      'Doença causada por protozoários do gênero Plasmodium e transmitida pela picada do mosquito Anopheles. Tem tratamento gratuito e cura, mas pode se agravar rápido.',
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
      'Inflamações do fígado causadas por vírus diferentes, transmitidos por água e alimentos ou por sangue e fluidos. Costumam ser silenciosas e podem se tornar crônicas.',
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
          'Uma crise grave é uma emergência. Ligue para o SAMU (192) ou vá imediatamente a um pronto atendimento, sem esperar a crise melhorar sozinha, se houver:',
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
          'Uma piora grave é uma emergência. Ligue para o SAMU (192) ou vá imediatamente a um pronto atendimento, sem esperar melhorar sozinho, se houver:',
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
      'Duas emergências cardiovasculares em que cada minuto conta. Reconhecer os sinais e chamar o SAMU no 192 imediatamente muda o desfecho.',
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
          'No SUS, o AVC é tratado nos Centros de Atendimento de Urgência, os hospitais de referência para esses casos, e o infarto segue a Linha de Cuidado do Infarto Agudo do Miocárdio, que começa no SAMU 192. Desde setembro de 2026, uma lei ampliou a oferta de medicamentos trombolíticos na rede de urgência e emergência, incluindo as UPAs.',
          'Depois do evento, o acompanhamento inclui medicamentos, reabilitação e mudanças de hábito. No AVC, a fisioterapia e a fonoaudiologia iniciadas cedo fazem diferença na recuperação dos movimentos e da fala, e a reabilitação pode ser feita nos Centros Especializados em Reabilitação (CER).',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: 'O que fazer diante de uma suspeita',
        paragraphs: [
          'Chame ajuda imediatamente pelo SAMU, no número 192, ou pelo Corpo de Bombeiros, no 193. Se não for possível, leve a pessoa ao serviço de urgência mais próximo. Não espere os sintomas passarem e não leve a pessoa para casa para observar.',
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
    metaTitle: 'Faringite e amigdalite',
    aliases: ['dor de garganta', 'amigdalite', 'inflamação na garganta'],
    summary:
      'Infecção da garganta e das amígdalas, na maioria das vezes viral. Melhora em poucos dias, e o antibiótico só tem lugar quando a causa é bacteriana.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é faringite?',
        paragraphs: [
          'Faringite é a inflamação da garganta, e amigdalite é a inflamação das amígdalas, dois gânglios que ficam no fundo da boca. As duas costumam aparecer juntas, e a dor de garganta é um dos motivos de consulta mais frequentes em qualquer país.',
          'A causa mais comum é viral. Segundo o Ministério da Saúde, os vírus são os agentes mais frequentes nas crianças, enquanto as bactérias atingem mais os jovens e os adultos.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: [
          'Os sintomas se sobrepoem entre as causas virais e bacterianas, e quem distingue é a avaliação profissional.',
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
        heading: 'Faringite é contagiosa?',
        paragraphs: [
          'Sim. Os germes da garganta circulam pelas gotículas que a pessoa infectada libera ao tossir, espirrar ou falar, e também pelas mãos que tocam o rosto. Ambientes fechados e aglomerados favorecem a transmissão.',
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
      },
      {
        id: 'tratamento',
        heading: 'Como se trata?',
        paragraphs: [
          'Na infecção viral, o cuidado é de suporte: repouso, líquidos e analgésicos ou antitérmicos orientados por profissional de saúde. Não há medicamento que encurte muito a duração, e a garganta melhora sozinha.',
          'Na amigdalite bacteriana, o antibiótico específico é indicado pelo profissional, e o tratamento precisa ser concluído até o fim, mesmo depois de a dor passar. Interromper o antibiótico antes da hora permite complicações, como a febre reumática, que pode atingir o coração, e a resistência bacteriana, um problema de saúde pública.',
          'Antibiótico por conta própria em dor de garganta viral não acelera a melhora: ele não age sobre vírus, traz efeitos colaterais e fortalece bactérias resistentes.',
        ],
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
    ],
    relatedArticleSlugs: [],
    relatedTopicSlugs: [],
    relatedDiseaseSlugs: ['gripe', 'hipertensao'],
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
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
  },
  {
    id: 'gastroenterite',
    slug: 'gastroenterite',
    name: 'Gastroenterite (diarreia infecciosa)',
    metaTitle: 'Gastroenterite',
    aliases: ['diarreia', 'infecção intestinal', 'gastroenterite viral'],
    summary:
      'Infecção que inflama o estômago e o intestino, causando diarreia e vômitos. O principal perigo é a desidratação, e o tratamento começa com soro de reidratação oral.',
    category: 'Doenças infecciosas',
    categorySlug: 'doencas-infecciosas',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é gastroenterite?',
        paragraphs: [
          'Gastroenterite é a infecção que inflama o revestimento do estômago e do intestino. Ela se manifesta como diarreia, que a Organização Mundial da Saúde define como três ou mais fezes moles ou líquidas em um dia.',
          'É uma doença comum em todas as idades. A maioria passa em poucos dias, mas em crianças pequenas e pessoas idosas a desidratação pode evoluir depressa.',
          'Segundo o Ministério da Saúde, as doenças diarreicas agudas atingem sobretudo crianças menores de cinco anos, e a diarreia segue entre as principais causas de morte nessa idade onde o acesso a água tratada é limitado.',
        ],
      },
      {
        id: 'sintomas',
        heading: 'Quais são os sintomas?',
        paragraphs: ['O quadro costuma começar de repente, com sintomas digestivos gerais.'],
        bullets: [
          'Diarreia, fezes moladas ou líquidas',
          'Vômitos e náuseas',
          'Dor e cólica abdominal',
          'Febre, nem sempre presente',
          'Sinais de desidratação: boca seca, pouca urina escura, falta de lágrimas ao chorar, sonolência ou irritação',
        ],
      },
      {
        id: 'transmissao',
        heading: 'Como se espalha?',
        paragraphs: [
          'Pelos germes que entram pela boca: água e alimentos contaminados, mãos que não foram lavadas e contato de pessoa a pessoa. Norovírus causa surtos em ambientes fechados, e o rotavírus é o mais comum dos vírus que adoecem crianças pequenas, segundo a OMS.',
          'A diarreia é um marcador de saneamento. Onde falta água tratada, o mesmo micróbio reaparece a cada estação, e campanhas de reidratação oral são a resposta que mais salva vidas.',
        ],
      },
      {
        id: 'quando-procurar',
        heading: 'Quando procurar atendimento?',
        paragraphs: [
          'Na diarreia, o que orienta a decisão não é quantos dias dura, mas como a pessoa está. Vá a um serviço de saúde se aparecer qualquer sinal de desidratação, especialmente em bebê, criança pequena ou pessoa idosa.',
        ],
        bullets: [
          'Sangue nas fezes',
          'Vômito que impede de reter líquidos',
          'Febre alta mantida',
          'Boca seca, urina rara, olhos fundos, criança que chora sem lágrimas',
          'Sonolência excessiva ou recusa de alimentos',
        ],
      },
      {
        id: 'tratamento',
        heading: 'Como se trata?',
        paragraphs: [
          'O primeiro passo é repor o que se perdeu: soro de reidratação oral, distribuído gratuitamente pelo SUS, em pequenos goles e com frequência, desde o início da diarreia. A água e os alimentos comuns também contam, mas o soro repõe na medida certa a água e os sais perdidos.',
          'Nas crianças, a OMS recomenda os sais de reidratação oral e o zinco dispersável, que encurtam o episódio e reduzem o risco de complicações. A amamentação e a alimentação devem continuar.',
          'Remédios que param a diarreia não devem ser usados por conta própria, especialmente em crianças: eles seguram no intestino justamente os micróbios que o corpo está tentando eliminar.',
          'O antibiótico ou antiparasitário só tem lugar quando o profissional de saúde identifica a causa bacteriana ou parasitária.',
        ],
      },
      {
        id: 'prevencao',
        heading: 'Como prevenir?',
        paragraphs: [
          'Água tratada, saneamento e lavagem das mãos com sabão, antes de comer e depois de usar o banheiro, são a base da prevenção, como destaca a OMS.',
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
        question: 'Antibiótico ajuda na diarreia?',
        answer:
          'Na maioria dos casos, não. A gastroenterite comum é viral ou se resolve sozinha, e o antibiótico pode até atrapalhar. Ele só se justifica quando o profissional de saúde identifica bactéria ou parasita que exigem tratamento específico.',
      },
    ],
    relatedArticleSlugs: [],
    relatedTopicSlugs: [],
    relatedDiseaseSlugs: ['dengue', 'hepatites-virais'],
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
    ],
    author: 'Equipe editorial Saudewiki',
    reviewer: null,
    reviewStatus: 'needs_review',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
  },
];
