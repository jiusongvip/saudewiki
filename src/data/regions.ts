import type { BodyRegion } from '../types';

/**
 * The body map: the third door into the encyclopedia, next to the disease list
 * and the themes.
 *
 * People arrive asking "what is wrong with my chest", not "which of these
 * diagnoses do I have", so the regions are ordered the way a reader scans a
 * body: head down, then the trunk, then what covers and moves it.
 *
 * Three rules kept this file honest.
 *
 * 1. A disease enters a region only when its own entry says that place is
 *    affected. `hipertensao` writes that "visão embaçada" can appear, so it is
 *    under `olhos`; it never mentions the kidneys, so it is not under `rins`,
 *    even though hypertensive nephropathy is real and would belong there. The
 *    gap is a to-do list, not an error: fill it by writing the sentence in the
 *    disease entry first.
 * 2. Every region carries two prose blocks even when it has no entries yet:
 *    `globalOverview` (what usually goes wrong with that part worldwide) and
 *    `lusophoneOverview` (what is typical across Portuguese-speaking countries,
 *    and why). A page is never left as an empty promise.
 * 3. The lusophone paragraphs stay with stable epidemiology: no case counts,
 *    no outbreak dates, nothing that quietly goes stale. Claims that needed
 *    checking against WHO, Pan American Health Organization, Ministério da
 *    Saúde or Instituto Butantan sources were checked on 2026-10-15.
 *
 * `spot` is a percentage of the anatomy figure's own box, measured against
 * `public/img/anatomia-corpo.webp` (1024 x 1536). If that picture is redrawn or
 * cropped, every spot has to be re-measured against it.
 */
export const regions: BodyRegion[] = [
  {
    id: 'cerebro-e-nervos',
    slug: 'cerebro-e-nervos',
    name: 'Cérebro e nervos',
    description:
      'As doenças que atingem o cérebro, a medula e os nervos, e os sinais súbitos que pedem atendimento imediato.',
    diseaseSlugs: ['infarto-e-avc', 'zika'],
    globalOverview: [
      'No mundo, o AVC é uma das principais causas de morte e de incapacidade permanente, e a enxaqueca e outras cefaleias estão entre as causas mais frequentes de anos vividos com limitação. Epilepsia, demências e neuropatias completam o grupo das doenças neurológicas mais comuns.',
      'A maior parte dessas doenças não aparece de repente: elas acompanham fatores de risco que dão sinal, como pressão alta, diabetes e tabagismo. É por isso que o controle dessas condições faz parte da prevenção do AVC.',
    ],
    lusophoneOverview: [
      'No Brasil, o AVC mata e deixa sequela em quantidade alta porque a hipertensão é muito presente na população e nem sempre está controlada. Os sinais súbitos que exigem atendimento imediato, como boca torta e fala embolada, estão descritos na página de infarto e AVC deste site.',
      'Nas áreas tropicais do Brasil, arboviroses deixam sua marca no sistema nervoso: a zika pode virar síndrome de Guillain-Barré, e a infecção pelo vírus da dengue raramente causa encefalite.',
      'Em países africanos de língua portuguesa, como Guiné-Bissau, Angola e Moçambique, a malária cerebral é uma urgência pediátrica frequente, e a esquistossomose pode afetar o sistema nervoso em suas formas complicadas.',
    ],
    spot: { x: 48.5, y: 5.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'olhos',
    slug: 'olhos',
    name: 'Olhos',
    description:
      'A visão embaçada que acompanha a pressão alta, a dor atrás dos olhos da dengue e o que a diabetes faz, ao longo dos anos, com os vasos finos do olho.',
    diseaseSlugs: ['diabetes', 'hipertensao', 'dengue'],
    globalOverview: [
      'No mundo, a catarata continua sendo a maior causa de cegueira evitável, e o glaucoma, a principal causa de cegueira irreversível: a perda de visão ocorre sem dor e sem aviso, por isso o exame periódico é parte do cuidado.',
      'Os erros refrativos não corrigidos, como miopia e astigmatismo, são de longe a queixa visual mais comum do planeta, e a retinopatia diabética é hoje uma das maiores causas de perda de visão em idade produtiva.',
    ],
    lusophoneOverview: [
      'No Brasil, a cirurgia de catarata é oferecida pelo Sistema Único de Saúde, e o gargalo está na fila de espera, não no acesso à técnica. O problema que mais cresce é a retinopatia diabética: silenciosa no início, ela pede exame de fundo de olho periódico para quem tem diabetes.',
      'O tracoma, infecção ligada a saneamento e aglomeração, ainda existe em comunidades de algumas regiões do Brasil, sobretudo entre povos indígenas, e há projetos de eliminação em curso com acompanhamento da OMS e da OPAS.',
      'Em Angola e Moçambique, a cegueira por catarata não operada e por deficiência de vitamina A na infância pesa muito mais do que na Europa, onde o envelhecimento e o glaucoma dominam o cenário.',
    ],
    spot: { x: 46.5, y: 9 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'ouvidos-nariz-e-garganta',
    slug: 'ouvidos-nariz-e-garganta',
    name: 'Ouvidos, nariz e garganta',
    description:
      'Ouvido, nariz e garganta: a porta de entrada de boa parte das infecções que se espalham pelo ar.',
    diseaseSlugs: [],
    globalOverview: [
      'Nessas três portas de entrada, o mundo adoece muito: infecções das vias aéreas superiores, como faringites, amigdalites e sinusites, estão entre os motivos de consulta mais frequentes em qualquer país, e otite média é queixa comum na primeira infância.',
      'A maioria das dores de garganta é viral e se resolve sozinha em poucos dias. Antibiótico só se justifica quando há indicação profissional, e usá-lo por conta própria em infecção viral não acelera a melhora.',
      'A perda auditiva é um problema global subestimado: centenas de milhões de pessoas vivem com alguma redução da audição, boa parte dela evitável ou tratável, como mostram os programas da OMS sobre o tema.',
    ],
    lusophoneOverview: [
      'No Brasil, a sinusite de repetição e a rinite alérgica acompanham a poluição urbana das capitais, e a perda auditiva por exposição a ruído, no trabalho e no trânsito, é uma doença ocupacional reconhecida, com normas do Ministério da Saúde para prevenção.',
      'Em países africanos de língua portuguesa, otites de repetição na infância deixam sequelas na audição com mais frequência do que na Europa, porque o acesso a otorrinolaringologista e a tratamentos adequados é mais limitado fora das capitais.',
      'Portugal enfrenta o perfil oposto: ali a queixa dominante é a perda auditiva do envelhecimento, e a fila por aparelho auditivo no serviço público mobiliza política de saúde desde a década passada.',
    ],
    spot: { x: 50, y: 15.2 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'pulmoes',
    slug: 'pulmoes',
    name: 'Pulmões e vias aéreas',
    description:
      'O estreitamento das vias por onde o ar passa e a infecção que se instala no tecido onde o oxigênio entra.',
    diseaseSlugs: ['tuberculose', 'asma', 'dpoc'],
    globalOverview: [
      'No mundo, as infecções respiratórias baixas, como a pneumonia, estão entre as principais causas de morte, e a asma atinge centenas de milhões de pessoas, a maioria sem diagnóstico formal.',
      'A DPOC, em geral ligada ao tabagismo, é hoje uma das maiores causas de morte evitável, e o câncer de pulmão tem forte associação com o cigarro e com a poluição do ar interno e externo.',
    ],
    lusophoneOverview: [
      'No Brasil, a tuberculose circula sobretudo nos grandes centros urbanos, e a asma é subdiagnosticada: muita gente convive com chiado sem tratamento de controle, quando o SUS oferece ambos gratuitamente. A rede pública de combate ao tabagismo é referência mundial e reduziu de forma sustentada a prevalência de fumantes.',
      'Em Angola, Moçambique e Guiné-Bissau, a pneumonia mata crianças em número muito maior do que na Europa, e a tosse crônica que acaba revelando tuberculose convive com o HIV, que multiplica o risco de adoecer.',
      'Em Portugal, a DPOC entre fumantes mais velhos e o câncer de pulmão dominam as consultas de pneumologia, e a poluição urbana é um fator que hoje entra nas contas de saúde pública.',
    ],
    spot: { x: 43, y: 25.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'coracao-e-vasos',
    slug: 'coracao-e-vasos',
    name: 'Coração e vasos',
    description:
      'Quando uma artéria é obstruída ou se rompe: o infarto no músculo do coração, o AVC no cérebro, e a pressão alta que aumenta o risco dos dois.',
    diseaseSlugs: ['infarto-e-avc', 'hipertensao'],
    globalOverview: [
      'As doenças cardiovasculares são a principal causa de morte no mundo, e dentro delas o infarto e o AVC lideram. A hipertensão, presente em cerca de um em cada quatro adultos, é o maior fator de risco isolado e costuma ser silenciosa por anos.',
      'O que faz a diferença na prática é o controle continuado: medir a pressão, tratar quando indicada e não abandonar o medicamento. Nessas condições, infarto e AVC podem ser evitados ou chegam menos graves.',
    ],
    lusophoneOverview: [
      'No Brasil, a doença cardiovascular é a primeira causa de internação do país, e o SUS cobre do diagnóstico à cirurgia cardíaca. A dieta urbana, o sal em excesso e o sedentarismo empurram a curva de hipertensão para mais cedo, e a obesidade acompanha.',
      'A cardiopatia de Chagas, transmitida pelo barbeiro, e a reumática, consequência de infecção de garganta mal tratada na infância, quase desapareceram da Europa, mas ainda aparecem no Brasil e em países africanos de língua portuguesa, onde o ecocardiograma fora das capitais é raro.',
      'Portugal tem boa cobertura de tratamento para hipertensão e dislipidemia, e o infarto tende a chegar mais tarde do que no Brasil, o que não significa menos morte: significa população que envelhece com o coração doente.',
    ],
    spot: { x: 49.5, y: 27 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'figado',
    slug: 'figado',
    name: 'Fígado',
    description:
      'Inflamações causadas por vírus, quase sempre silenciosas no início, e o acompanhamento que evita a evolução para cirrose e câncer.',
    diseaseSlugs: ['hepatites-virais'],
    globalOverview: [
      'No mundo, as hepatites B e C, o álcool e a gordura no fígado associada à obesidade e ao diabetes estão entre as principais causas de cirrose e de câncer de fígado.',
      'Só o vírus da hepatite B causa infecção crônica em centenas de milhões de pessoas, e boa parte delas não sabe: o fígado é um órgão silencioso, e a doença aparece quando já há dano importante, por isso a testagem é parte da prevenção.',
    ],
    lusophoneOverview: [
      'A África subsaariana tem as maiores prevalências de hepatite B do mundo, e Angola e Moçambique estão nesse grupo. A diferença em relação à Europa é a dose da vacina ao nascer: onde ela é aplicada nas primeiras horas de vida, a infecção crônica na infância cai de forma marcante.',
      'No Brasil, a hepatite B é mais presente na região amazônica, onde a testagem e a vacinação foram priorizadas, e a febre amarela, que ataca o fígado, circula em áreas de mata, com campanhas de vacinação que marcam a rotina de quem vive perto dessas regiões.',
      'Em Portugal, o peso maior recai sobre o consumo de álcool e sobre a esteatose hepática associada à obesidade, tendência que sobe com o perfil metabólico da população.',
    ],
    spot: { x: 45, y: 33.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'estomago-e-intestinos',
    slug: 'estomago-e-intestinos',
    name: 'Estômago e intestinos',
    description: 'O aparelho digestivo e as doenças que se manifestam nele, da dor abdominal à diarreia.',
    diseaseSlugs: [],
    globalOverview: [
      'No mundo todo, as infecções intestinais, virais e bacterianas, são a doença mais comum de todas: gastroenterites de curta duração atingem crianças e adultos em qualquer país, e a diarreia segue sendo uma das grandes causas de morte na infância onde o acesso a água tratada é limitado.',
      'A úlcera gástrica tem causa identificada, a bactéria Helicobacter pylori, e tem tratamento definido. O refluxo, a síndrome do intestino irritável e as constipações crônicas acompanham a dieta urbana, e o câncer colorretal está entre os cânceres mais diagnosticados, com melhor resultado quando detectado cedo.',
      'Os parasitas intestinais, como lombrigas e giárdia, continuam comuns em escala global, sobretudo onde o saneamento é incompleto e o contato com solo acontece sem proteção.',
    ],
    lusophoneOverview: [
      'No Brasil, a hepatite A ligada a água e alimentos contaminados volta a circular em surtos urbanos, e a esquistossomose, a barriga-d\'água causada por um parasita de água doce, é endêmica no litoral Nordeste e em partes de Minas Gerais.',
      'Em Angola, Moçambique, Guiné-Bissau e Timor-Leste, a diarreia infantil por rotavírus, cólera e parasitas continua entre as causas que mais matam antes dos cinco anos, e o acesso ao soro de reidratação oral e à água tratada faz diferença direta na conta da mortalidade.',
      'Em Portugal, o câncer colorretal é um dos mais frequentes, e o rastreamento populacional, que detecta a doença antes dos sintomas, é hoje um eixo central da saúde pública do país.',
    ],
    spot: { x: 54, y: 33.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'pancreas-e-metabolismo',
    slug: 'pancreas-e-metabolismo',
    name: 'Pâncreas e metabolismo',
    description:
      'O pâncreas produz a insulina. Quando ela falta ou o corpo deixa de responder bem a ela, a glicose sobe no sangue.',
    diseaseSlugs: ['diabetes'],
    globalOverview: [
      'No mundo, centenas de milhões de pessoas vivem com diabetes, a imensa maioria do tipo 2, e a doença se tornou uma das principais causas de cegueira, diálise e amputação evitáveis.',
      'A pancreatite, em geral ligada a pedra na vesícula ou ao álcool, é a urgência mais comum desse conjunto, e a tireoide, apesar de não ser pâncreas, divide o capítulo metabólico: suas alterações estão entre as endocrinopatias mais frequentes.',
    ],
    lusophoneOverview: [
      'Brasil e Portugal fazem a mesma curva: ultraprocessados, ganho de peso e sedentarismo empurram o diabetes tipo 2 para idades cada vez mais jovens. No Brasil, o SUS distribui metformina e insulina gratuitamente e organiza o acompanhamento pelas unidades básicas de saúde.',
      'Em Angola e Moçambique, o diagnóstico costuma chegar tarde, já com complicação, porque exames como a hemoglobina glicada estão disponíveis em poucos laboratórios fora das capitais, e o acesso a insulina é desigual dentro dos próprios países.',
      'A diabetes gestacional segue o mesmo padrão urbano: rastreia-se bem no Brasil e em Portugal, onde o pré-natal é amplo, e ainda escapa em partes da África lusófona, onde a gravidez chega ao serviço de saúde tardiamente.',
    ],
    spot: { x: 51.5, y: 37.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'rins',
    slug: 'rins',
    name: 'Rins',
    description:
      'O filtro do corpo. A diabetes pode lesioná-lo com o tempo, e a queda do volume de urina é sinal de alerta em infecção grave.',
    diseaseSlugs: ['diabetes', 'dengue'],
    globalOverview: [
      'No mundo, a doença renal crônica afeta centenas de milhões de pessoas e cresce junto com diabetes e hipertensão, suas duas principais causas. Ela fica silenciosa até fases avançadas: por isso quem tem essas duas condições faz exame de função renal de rotina.',
      'A infecção urinária é uma das queixas mais frequentes entre mulheres, e a pedra no rim atinge parcela relevante da população adulta, com dor típica em cólica que irradia para as costas.',
    ],
    lusophoneOverview: [
      'No Brasil, a dengue grave pode lesionar o rim, e a leptospirose, contraída em água de enchente contaminada por urina de rato, é complicação conhecida das cheias urbanas: ela pode levar a insuficiência renal aguda e tem tratamento no SUS.',
      'A doença renal do diabetes e da hipertensão é a porta de entrada da diálise no país, e o tratamento renal substitutivo, concentrado em clínicas conveniadas, é um dos serviços mais disputados do SUS.',
      'Em Angola, Moçambique e Timor-Leste, a malária grave é causa frequente de lesão renal aguda, sobretudo em crianças, e a diálise está fora do alcance de grande parte da população: o que mais salva é o tratamento precoce da infecção que a origina.',
    ],
    spot: { x: 42.5, y: 38.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'pele',
    slug: 'pele',
    name: 'Pele',
    description:
      'Manchas vermelhas, coceira e pele amarelada: o que a pele mostra em dengue, zika, chikungunya, hepatite e malária.',
    diseaseSlugs: ['dengue', 'zika', 'chikungunya', 'hepatites-virais', 'malaria'],
    globalOverview: [
      'No mundo, o câncer de pele é o tipo de câncer mais diagnosticado, e a exposição ao sol sem proteção é o principal fator modificável. Dermatites, acne, micoses e escabiose estão entre as causas mais comuns de sofrimento cutâneo no dia a dia.',
      'A pele também é o mapa de doenças de fora: exantemas virais, feridas que não cicatrizam e placas de psoríase, que atinge de 2% a 3% da população mundial, mostram que o órgão reflete infecção, alergia e doença autoimune ao mesmo tempo.',
    ],
    lusophoneOverview: [
      'No Brasil, o câncer de pele é o mais frequente de todos os cânceres registrados, com incidência alta nas regiões de sol forte, e a fotoproteção é campanha permanente do Ministério da Saúde no verão.',
      'A hanseníase, doença que compromete pele e nervos, mantém o Brasil entre os países com mais casos no mundo, ao lado de Angola e Moçambique, e o diagnóstico tardio deixa deformidades que a detecção precoce evita.',
      'A leishmaniose tegumentar, que abre ferida de cura lenta depois da picada do mosquito-palha, circula em áreas de mata do Brasil, e a esporotricose urbana, transmitida por arranhadura ou mordedura de gato, se espalhou pelas capitais brasileiras na última década.',
    ],
    spot: { x: 27.5, y: 41 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'articulacoes-e-musculos',
    slug: 'articulacoes-e-musculos',
    name: 'Articulações e músculos',
    description:
      'A dor nas juntas que pode durar semanas, marca da chikungunya, e a dor muscular das outras arboviroses.',
    diseaseSlugs: ['chikungunya', 'dengue', 'zika'],
    globalOverview: [
      'No mundo, a dor lombar é a principal causa de anos vividos com incapacidade, e a artrose de joelho e quadril pesa sobretudo depois dos 50 anos, acompanhando o envelhecimento e a obesidade.',
      'A artrite reumatoide, autoimune, é o exemplo clássico de doença que precisa de diagnóstico precoce: tratada cedo, protege a articulação da deformidade; tratada tarde, o dano já está feito.',
    ],
    lusophoneOverview: [
      'Nos trópicos, o Aedes deixa marca nas juntas: as epidemias de chikungunya que atingiram o Brasil entre 2016 e 2018 deixaram dor articular prolongada em parte das pessoas infectadas, e o vetor segue circulando, o que mantém o risco vivo.',
      'A gota e a osteoporose acompanham o envelhecimento em Portugal, e as listas de espera por reumatologia nas grandes cidades brasileiras são o gargalo conhecido: muita gente convive com dor crônica sem diagnóstico.',
      'Em países africanos de língua portuguesa, as sequelas articulares de infecções mal tratadas e a falta de acesso a fisioterapia fazem da dor crônica um problema invisível nos dados e visível na vida.',
    ],
    spot: { x: 44, y: 68.5 },
    reviewStatus: 'needs_review',
  },
  {
    id: 'sangue-e-defesas',
    slug: 'sangue-e-defesas',
    name: 'Sangue e defesas',
    description:
      'Doenças do sistema, não de um órgão: o HIV ataca as células de defesa do organismo e o parasita da malária se multiplica no sangue.',
    diseaseSlugs: ['hiv-aids', 'malaria'],
    globalOverview: [
      'No mundo, a anemia por falta de ferro é o distúrbio nutricional mais comum e atinge sobretudo crianças e mulheres. As hemoglobinopatias, como a doença falciforme, estão entre as doenças genéticas mais prevalentes, e as coagulopatias, como a hemofilia, exigem tratamento continuado.',
      'O HIV permanece como a infecção crônica mais monitorada do planeta: sem tratamento, derruba a imunidade; com tratamento em dia, permite vida longa e reduz a transmissibilidade a ponto de impedir a transmissão sexual.',
    ],
    lusophoneOverview: [
      'Na África de língua portuguesa, a malária é a maior causa de anemia grave em crianças, e a doença falciforme é frequente nas populações de origem africana, com Angola e Moçambique entre os países de maior número de nascimentos afetados.',
      'O HIV ainda pesa muito em Moçambique e Angola, enquanto no Brasil o tratamento antirretroviral é universal pelo SUS e a doença falciforme entra no rastreio do teste do pezinho, que permite cuidado desde o primeiro ano de vida.',
      'Em Portugal, as hemoglobinopatias ganharam visibilidade com as comunidades de origem africana, e o tratamento oncológico das leucemias e linfomas, antes disperso, hoje se concentra em centros de referência.',
    ],
    spot: { x: 43.5, y: 77 },
    reviewStatus: 'needs_review',
  },
];
