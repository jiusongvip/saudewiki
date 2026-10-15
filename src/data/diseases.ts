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
          'Diminuição da urina ou sinais de desidratação',
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
          'Medicamentos à base de ácido acetilsalicílico e anti-inflamatórios não esteroides devem ser evitados durante a suspeita, pelo risco de sangramento. Isso inclui o ácido acetilsalicílico (AAS ou aspirina), o ibuprofeno, o diclofenaco, o naproxeno e as combinações para gripe ou dor que contenham essas substâncias.',
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
          'Diminuição importante da urina',
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
