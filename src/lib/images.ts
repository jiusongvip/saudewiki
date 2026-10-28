/**
 * The one place a slug is turned into a picture.
 *
 * Kept out of `src/data/*` on purpose: the content files are the editorial
 * record (what a disease is, who wrote it, whether it has been reviewed) and
 * they should stay readable without a wall of file paths in them. This module
 * is the join between that record and `public/img/`.
 *
 * The photographs the home layout is built from are not here. They are not
 * content: they belong to one template, they are not addressed by slug, and
 * they are named in `src/pages/index.astro` where they are used.
 *
 * Every photo goes through one shared treatment, applied once in CSS via
 * `--img-filter` in `global.css` and not baked into the files, so the whole set
 * can be pushed to monochrome or back to colour from a single line.
 *
 * Alt text is written for a screen reader in pt-BR and describes what is in
 * the frame, not what the page is about. No dashes of any kind: the preflight
 * gate rejects them in `alt` attributes.
 */
import type { Locale } from '../types';
import { zhImageAlts } from '../data/zh-Hant/image-alts';

export interface SiteImage {
  src: string;
  alt: string;
  /**
   * Set when the picture may not be shown until the reader opens it. Absent
   * means the picture is shown as it is, which is the case for every article
   * photograph outside an operating room. See `SensitiveImage`.
   */
  sensitive?: boolean;
}
/**
 * One picture per disease. Every entry is an illustrated plate: the mechanism
 * in cross-section, a clinical sign in the inset at the upper right and the
 * main symptoms as a row of circular badges. The captions live in the picture,
 * so the file is the same in both languages and only the `alt` changes.
 */
export const diseaseImages: Record<string, SiteImage> = {
  'cancer-de-estomago': {
    src: '/img/doenca-cancer-de-estomago.webp',
    alt: 'Ilustração médica de um estômago aberto em corte, com a mucosa e um tumor ulcerado na parede interna, com recorte da endoscopia digestiva e detalhe do exame do abdome, e quatro ícones de falta de apetite, dor no abdome, azia e perda de peso',
  },
  'leucemia-linfoblastica-aguda': {
    src: '/img/doenca-leucemia-linfoblastica-aguda.webp',
    alt: 'Ilustração médica de um osso longo aberto em corte, com a medula óssea cheia de linfoblastos, com recorte da coleta de sangue e detalhe da lâmina no microscópio, e quatro ícones de cansaço, palidez, febre e sangramentos',
  },
  'cancer-de-mama': {
    src: '/img/doenca-cancer-de-mama.webp',
    alt: 'Ilustração médica de uma mama em corte, com a glândula mamária, os ductos e um nódulo endurecido; ao lado, uma fotografia de uma mulher em pé junto ao aparelho de mamografia, com o peito posicionado entre as placas; abaixo, quatro ícones circulares de nódulo, secreção, retração e linfonodo',
  },
  'cancer-de-prostata': {
    src: '/img/doenca-cancer-de-prostata.webp',
    alt: 'Ilustração médica da pelve masculina em corte, com a bexiga, a próstata e a uretra e um nódulo dentro da próstata; ao lado, uma fotografia de uma coleta de sangue no braço do paciente, com o garrote e o tubo do exame; abaixo, quatro ícones de jato fraco, urinar muito, hematúria e dor óssea',
  },
  'cancer-de-pulmao': {
    src: '/img/doenca-cancer-de-pulmao.webp',
    alt: 'Ilustração médica de um pulmão em corte, com os brônquios e um tumor na região central; ao lado, uma fotografia de um médico auscultando as costas do paciente com o estetoscópio; abaixo, quatro ícones de tosse, falta de ar, dor no peito e rouquidão',
  },
  'cancer-colorretal': {
    src: '/img/doenca-cancer-colorretal.webp',
    alt: 'Ilustração médica de um trecho do intestino grosso aberto, com a mucosa e um tumor na parede; ao lado, uma fotografia de uma colonoscopia, com o paciente deitado na maca e mãos enluvadas segurando o tubo do aparelho; abaixo, quatro ícones de sangue, diarreia, cansaço e anemia',
  },
  dengue: {
    src: '/img/doenca-dengue.webp',
    alt: 'Ilustração médica de um Aedes aegypti cravado na pele e liberando o vírus na corrente sanguínea, com recorte de um cotovelo coberto de manchas e quatro ícones circulares de febre alta, manchas, sangramento e dor muscular',
  },
  diabetes: {
    src: '/img/doenca-diabetes.webp',
    alt: 'Ilustração médica do pâncreas liberando insulina num vaso cheio de cristais de glicose, com recorte da sola do pé com uma ferida aberta e quatro ícones de sede excessiva, visão embaçada, formigamento e cansaço',
  },
  hipertensao: {
    src: '/img/doenca-hipertensao.webp',
    alt: 'Ilustração médica de uma artéria de parede espessada e luz estreita sob pressão, ao lado de um braço com a braçadeira do esfigmomanômetro, com recorte da medição da pressão e quatro ícones de dor de cabeça, palpitação, visão embaçada e zumbido',
  },
  chikungunya: {
    src: '/img/doenca-chikungunya.webp',
    alt: 'Ilustração médica de um joelho em corte com a membrana sinovial inchada e partículas do vírus, um mosquito no canto superior, com recorte de mãos com as articulações inflamadas e quatro ícones de febre alta, dor articular, manchas na pele e conjuntivite',
  },
  zika: {
    src: '/img/doenca-zika.webp',
    alt: 'Ilustração médica de um Aedes aegypti picando a pele e liberando partículas azuis do vírus no sangue, com recorte de uma gestante com as mãos na barriga e quatro ícones de manchas na pele, conjuntivite, febre baixa e coceira',
  },
  malaria: {
    src: '/img/doenca-malaria.webp',
    alt: 'Ilustração médica de um mosquito Anopheles injetando esporozoítos num vaso onde hemácias infectadas se rompem, com recorte de uma pessoa tremendo de calafrios sob a coberta e quatro ícones de febre em ciclos, sudorese, olhos amarelados e dor de cabeça',
  },
  tuberculose: {
    src: '/img/doenca-tuberculose.webp',
    alt: 'Ilustração médica de um pulmão em corte com uma cavidade cheia de bacilos no lobo superior, com recorte de uma pessoa tossindo num lenço com riscos de sangue e quatro ícones de tosse persistente, febre à tarde, suor noturno e emagrecimento',
  },
  'hiv-aids': {
    src: '/img/doenca-hiv-aids.webp',
    alt: 'Ilustração médica de um vírus HIV em corte aderido ao receptor CD4 de uma célula de defesa, com recorte de uma mão com luva azul segurando um teste rápido ao lado de uma gota de sangue no dedo e quatro ícones de febre, gânglios inchados, perda de peso e suor noturno',
  },
  'hepatites-virais': {
    src: '/img/doenca-hepatites.webp',
    alt: 'Ilustração médica de um fígado em corte com uma área inflamada, partículas virais e a vesícula biliar embaixo, com recorte de um olho com a esclera amarelada e quatro ícones de cansaço, dor no abdômen, urina escura e fezes claras',
  },
  asma: {
    src: '/img/doenca-asma.webp',
    alt: 'Ilustração médica comparando dois brônquios em corte, o da esquerda aberto com o ar passando e o da direita contraído, vermelho e cheio de muco amarelo, com recorte de uma pessoa usando um inalador com espaçador e quatro ícones de chiado no peito, aperto no peito, tosse e piora à noite',
  },
  dpoc: {
    src: '/img/doenca-dpoc.webp',
    alt: 'Ilustração médica de um pulmão em corte que compara alvéolos sadios com o tecido destruído pelo enfisema, um cigarro soltando fumaça no canto, com recorte de uma pessoa idosa curvada com as mãos nos joelhos e quatro ícones de tabagismo, ar preso, tosse com catarro e piora gradual',
  },
  'infarto-e-avc': {
    src: '/img/doenca-infarto-avc.webp',
    alt: 'Ilustração médica de um coração em corte com a coronária entupida por placa e coágulo ligada por um vaso até um cérebro com uma artéria bloqueada, com recorte de uma pessoa com a mão no peito e quatro ícones de dor no peito, boca torta, fraqueza em um lado e tempo é crucial',
  },
  'faringite-e-amigdalite': {
    src: '/img/doenca-faringite-amigdalite.webp',
    alt: 'Ilustração médica de uma cabeça e do pescoço em corte lateral mostrando as amígdalas inchadas com placas de pus, com recorte de uma boca aberta com espátula lingual e quatro ícones de dor ao engolir, febre, gânglios inchados e calafrios',
  },
  gastroenterite: {
    src: '/img/doenca-gastroenterite.webp',
    alt: 'Ilustração médica de um estômago e de um intestino em corte com a mucosa inflamada, vírus presos às vilosidades e líquido escorrendo para a luz do intestino, com recorte de uma mãe dando soro de reidratação oral com colher a uma criança e quatro ícones de diarreia, vômitos, cólica e boca seca',
  },
  enxaqueca: {
    src: '/img/doenca-enxaqueca.webp',
    alt: 'Ilustração médica de uma cabeça em corte lateral mostrando o cérebro com uma artéria dilatada e latejando de um só lado e ondas de dor, com recorte de uma mulher pressionando a têmpora com a mão e quatro ícones de dor latejante, um lado só, náusea e sensibilidade à luz e ao som',
  },
  'otite-media-aguda': {
    src: '/img/doenca-otite-media-aguda.webp',
    alt: 'Ilustração médica de um ouvido em corte mostrando o ouvido médio atrás do tímpano inchado e cheio de pus e a tuba auditiva bloqueada, com recorte de uma criança pequena puxando a orelha e chorando e quatro ícones de dor de ouvido, febre, ouvido tampado e choro fácil',
  },
  pneumonia: {
    src: '/img/doenca-pneumonia.webp',
    alt: 'Ilustração médica de um pulmão em corte com um lobo inferior consolidado e cheio de pus enquanto o outro permanece saudável, com recorte de um idoso tossindo com a mão no peito e quatro ícones de febre alta, tosse, dor no peito e falta de ar',
  },
  'insuficiencia-cardiaca': {
    src: '/img/doenca-insuficiencia-cardiaca.webp',
    alt: 'Ilustração médica de um coração em corte, aumentado, com uma câmara dilatada e a parede fraca e líquido azul represado no pulmão e nas pernas, com recorte de tornozelos e pés inchados e quatro ícones de falta de ar, inchaço, cansaço e ganho de peso',
  },
  'esteatose-hepatica': {
    src: '/img/doenca-esteatose-hepatica.webp',
    alt: 'Ilustração médica comparando um fígado saudável de um lado com um fígado gordurodo do outro, amarelado e cheio de gotículas de gordura dentro das células, com a vesícula biliar embaixo, com recorte de uma mão pressionando a parte superior direita da barriga e quatro ícones de silenciosa, cansaço, desconforto e gordura',
  },
  'colesterol-alto': {
    src: '/img/doenca-colesterol-alto.webp',
    alt: 'Ilustração médica de uma artéria em corte com uma placa amarelada de colesterol estreitando o canal ao lado de uma artéria saudável e aberta, com recorte de uma mancha amarelada de gordura na pálpebra e quatro ícones de sem sinal, placa, LDL alto e risco cardíaco',
  },
  'doenca-renal-cronica': {
    src: '/img/doenca-renal-cronica.webp',
    alt: 'Ilustração médica de um rim em corte, encolhido, com o córtex afinado e os glomérulos cicatrizados, com recorte de pés e tornozelos inchados e quatro ícones de inchaço, cansaço, coceira e urinar à noite',
  },
  hanseniase: {
    src: '/img/doenca-hanseniase.webp',
    alt: 'Ilustração médica de um bloco de pele em corte com bacilos e um nervo periférico engrossado e inflamado correndo pelo tecido, com recorte de uma mancha clara e dormente no antebraço e quatro ícones de mancha, dormência, nervo grosso e fraqueza',
  },
  'anemia-ferropriva': {
    src: '/img/doenca-anemia-ferropriva.webp',
    alt: 'Ilustração médica de um vaso sanguíneo em corte com poucas hemácias pequenas e pálidas por falta de ferro, com recorte de uma pálpebra puxada para baixo mostrando o interior pálido e quatro ícones de palidez, cansaço, falta de ar e tontura',
  },
  catarata: {
    src: '/img/doenca-catarata.webp',
    alt: 'Ilustração médica de um olho em corte com o cristalino opaco e esbranquiçado no centro, espalhando a luz em vez de focá-la na retina, com recorte de um olho com a pupila esbranquiçada e quatro ícones de visão embaçada, cores desbotadas, ofuscamento e pior à noite',
  },
  'parasitoses-intestinais': {
    src: '/img/doenca-parasitoses-intestinais.webp',
    alt: 'Ilustração médica de um intestino em corte com a mucosa levemente inflamada e vermes parasitas na luz, uma lombriga grande e oxiúros finos presos à parede, com recorte de uma criança com a barriga inchada e quatro ícones de dor, diarreia, estufada e coceira',
  },
  'artrite-reumatoide': {
    src: '/img/doenca-artrite-reumatoide.webp',
    alt: 'Ilustração médica de uma articulação do dedo em corte com a membrana sinovial espessada, vermelha e inflamada corroendo a cartilagem e o osso, com recorte de duas mãos com os nós dos dedos inchados e vermelhos e quatro ícones de rigidez, inchaço, dois lados e dor',
  },
  epilepsia: {
    src: '/img/doenca-epilepsia-v2.webp',
    alt: 'Ilustração médica de uma cabeça em corte lateral mostrando o cérebro com um foco de descarga elétrica anormal e faíscas se espalhando, com recorte de uma criança com o olhar fixo e ausente de uma crise de ausência e quatro ícones de convulsão, desmaio, rigidez e aura',
  },
  glaucoma: {
    src: '/img/doenca-glaucoma-v2.webp',
    alt: 'Ilustração médica de um globo ocular em corte com o ângulo de drenagem bloqueado, a pressão elevada e o nervo óptico lesionado na parte de trás, com recorte de um olho vermelho e dolorido e quatro ícones de campo visual reduzido, olho vermelho, halos e dor',
  },
  'rinite-alergica': {
    src: '/img/doenca-rinite-alergica-v2.webp',
    alt: 'Ilustração médica de um nariz em corte lateral mostrando a mucosa nasal inchada e inflamada com ácaros e grãos de pólen, com recorte de uma pessoa espirrando num lenço de papel e quatro ícones de espirros, coriza, coceira e nariz entupido',
  },
  bronquiolite: {
    src: '/img/doenca-bronquiolite-v2.webp',
    alt: 'Ilustração médica de um par de pulmões comparando um bronquíolo aberto e saudável com outro inchado, vermelho e cheio de muco, com recorte de um bebê com esforço para respirar e quatro ícones de chiado, respiração rápida, febre e tosse',
  },
  'fibrilacao-atrial': {
    src: '/img/doenca-fibrilacao-atrial-v2.webp',
    alt: 'Ilustração médica de um coração em corte mostrando os átrios tremendo com descargas elétricas desorganizadas, com recorte de um monitor com o traçado irregular do eletrocardiograma e quatro ícones de palpitação, falta de ar, fraqueza e tontura',
  },
  'cirrose-hepatica': {
    src: '/img/doenca-cirrose-hepatica-v2.webp',
    alt: 'Ilustração médica de um fígado em corte, encolhido, com a superfície coberta de nódulos e cicatrizes e a vesícula biliar embaixo, com recorte de uma barriga inchada de ascite e quatro ícones de ascite, icterícia, varizes e confusão mental',
  },
  'ulcera-peptica': {
    src: '/img/doenca-ulcera-peptica-v2.webp',
    alt: 'Ilustração médica de uma parede do estômago em corte com uma ferida em forma de cratera e bactérias Helicobacter pylori ao lado, com recorte de uma mão pressionando a boca do estômago e quatro ícones de queimação, dor, vômito com sangue e fezes escuras',
  },
  hipotireoidismo: {
    src: '/img/doenca-hipotireoidismo-v2.webp',
    alt: 'Ilustração médica de um pescoço em corte mostrando a tireoide diminuída e pouco ativa liberando poucas partículas de hormônio com uma seta para baixo, com recorte de um rosto inchado e cansado e quatro ícones de cansaço, frio, pele seca e ganho de peso',
  },
  'infeccao-urinaria': {
    src: '/img/doenca-infeccao-urinaria-v2.webp',
    alt: 'Ilustração médica de uma bexiga e da uretra em corte com a parede inflamada e bactérias na urina, com recorte de uma mão pressionando o baixo ventre e quatro ícones de ardência, urgência, febre e dor lombar',
  },
  'cancer-de-pele': {
    src: '/img/doenca-cancer-de-pele-v2.webp',
    alt: 'Ilustração médica de um bloco de pele em corte por camadas mostrando células atípicas de uma pinta se multiplicando e invadindo a derme, com recorte de uma pinta irregular de cores misturadas e quatro ícones de assimetria, bordas irregulares, cores variadas e crescimento',
  },
  gota: {
    src: '/img/doenca-gota-v2.webp',
    alt: 'Ilustração médica de uma articulação do dedão do pé em corte com cristais em forma de agulha depositados dentro dela e a membrana inchada e inflamada, com recorte de um dedão vermelho e inchado e quatro ícones de dor, inchaço, vermelhidão e calor',
  },
  'doenca-falciforme': {
    src: '/img/doenca-doenca-falciforme-v2.webp',
    alt: 'Ilustração médica de um vaso sanguíneo em corte comparando hemácias redondas normais com hemácias em forma de foice que se aglomeram e entopem o vaso, com recorte de uma criança pálida e cansada e quatro ícones de crise de dor, anemia, inchaço e febre',
  },
  'sindrome-cardiopulmonar-por-hantavirus': {
    src: '/img/doenca-sindrome-cardiopulmonar-por-hantavirus.webp',
    alt: 'Ilustração médica de um corte do tórax com os pulmões inflamados e cheios de nódulos e líquido espumoso, com recorte de um homem deitado no hospital usando máscara de oxigênio e quatro ícones de febre alta, tosse seca, dor muscular e pressão baixa',
  },
  elefantiase: {
    src: '/img/doenca-elefantiase.webp',
    alt: 'Ilustração médica de um corte da perna com vasos linfáticos dilatados e obstruídos por vermes adultos enrolados, cercados por tecido endurecido e inchaço crônico, com recorte de uma perna muito inchada e pele espessa e quatro ícones de edema, pele espessa, hidrocele e febre',
  },
  leishmaniose: {
    src: '/img/doenca-leishmaniose.webp',
    alt: 'Ilustração médica de um corte da pele sendo picada por um mosquito palha, com parasitas se multiplicando dentro de macrófagos e formando uma lesão inflamada na derme, com recorte de uma ferida na perna com bordas elevadas e quatro ícones de feridas, lesão nasal, febre e palidez',
  },
  esquistossomose: {
    src: '/img/doenca-esquistossomose.webp',
    alt: 'Ilustração médica de um fígado com faixas esbranquiçadas de fibrose na superfície e o baço aumentado ao lado dos vasos do sistema portal, com recorte de uma barriga distendida por ascite e quatro ícones de febre, diarreia, sangramento e baço grande',
  },
  tracoma: {
    src: '/img/doenca-tracoma.webp',
    alt: 'Ilustração médica de um olho em corte com a parte interna da pálpebra vermelha e cheia de pequenos folículos, com recorte de um olho vermelho com secreção amarelada e quatro ícones de coceira, fotofobia, secreção e visão turva',
  },
  helmintiases: {
    src: '/img/doenca-helmintiases.webp',
    alt: 'Ilustração médica de um intestino delgado em corte com vermes cilíndricos no interior e um verme preso à parede sugando sangue, com recorte de uma criança com o rosto pálido e quatro ícones de cólica, diarreia, anemia e cansaço',
  },
  cisticercose: {
    src: '/img/doenca-cisticercose.webp',
    alt: 'Ilustração médica de um cérebro em corte com cistos arredondados cheios de líquido no tecido e nos ventrículos, com recorte de uma paciente deitada na cama com os braços rígidos e quatro ícones de cefaleia, náusea, visão turva e confusão',
  },
  obesidade: {
    src: '/img/doenca-obesidade.webp',
    alt: 'Ilustração médica de um corte do abdome com camada espessa de gordura subcutânea e gordura visceral em volta do fígado, do estômago e dos intestinos, com recorte de uma fita métrica em volta da cintura e quatro ícones de falta de ar, ronco alto, dor articular e azia',
  },
  gripe: {
    src: '/img/doenca-gripe.webp',
    alt: 'Ilustração médica de um corte da cabeça e do tórax com a mucosa do nariz, da faringe, da traqueia e dos brônquios vermelha e inchada e partículas do vírus influenza na via aérea, com recorte de uma pessoa febril na cama e quatro ícones de febre alta, tosse seca, dor no corpo e calafrios',
  },
  'febre-tifoide': {
    src: '/img/doenca-febre-tifoide.webp',
    alt: 'Ilustração médica de um corte do íleo com placas de Peyer aumentadas e ulceradas e bactérias no intestino, com recorte de manchas rosadas no tronco e quatro ícones de febre alta, dor de cabeça, falta de apetite e dor abdominal',
  },
  'espondilose-lombar': {
    src: '/img/doenca-espondilose-lombar.webp',
    alt: 'Ilustração médica de uma coluna lombar em corte, com osteófitos nas bordas das vértebras, um disco desgastado e uma raiz nervosa vermelha comprimida no forame, com recorte de um homem com a mão na lombar e quatro ícones de dor lombar, dor na perna, formigamento e fraqueza',
  },
  'cancer-do-colo-do-utero': {
    src: '/img/doenca-cancer-do-colo-do-utero.webp',
    alt: 'Ilustração médica de um útero em corte com uma massa tumoral avermelhada no colo e partículas do HPV ao redor, com recorte de mãos enluvadas segurando um espéculo durante o exame ginecológico e quatro ícones de sangramento, corrimento, dor pélvica e dor ao sexo',
  },
  depressao: {
    src: '/img/doenca-depressao.webp',
    alt: 'Ilustração médica de um cérebro em corte com metade do córtex em tom azulado, o circuito límbico destacado e sinais neurais enfraquecidos, com recorte de uma mulher sentada na beira da cama com a cabeça baixa e quatro ícones de tristeza, sem prazer, insônia e cansaço',
  },
  'doenca-arterial-coronariana': {
    src: '/img/doenca-doenca-arterial-coronariana.webp',
    alt: 'Ilustração médica de um coração em corte com uma artéria coronária estreitada por placa amarelada e coágulo e uma área pálida de músculo isquêmico, com recorte de um homem com a mão no peito e quatro ícones de dor no peito, dor no braço, falta de ar e suor frio',
  },
  raiva: {
    src: '/img/doenca-raiva.webp',
    alt: 'Ilustração médica de um corte da cabeça com o cérebro inflamado e partículas do vírus subindo por um nervo até o sistema nervoso central, com recorte de uma mordida no braço e quatro ícones de hidrofobia, agitação, salivação e convulsão',
  },
  ascaridiase: {
    src: '/img/doenca-ascaridiase.webp',
    alt: 'Ilustração médica de um corte do intestino delgado com lombrigas enroladas no interior e uma delas obstruindo a passagem, com recorte de uma criança com o abdome distendido e quatro ícones de cólica, diarreia, náusea e tosse',
  },
  'infeccao-por-helicobacter-pylori': {
    src: '/img/doenca-infeccao-por-helicobacter-pylori.webp',
    alt: 'Ilustração médica de um estômago em corte com a mucosa avermelhada e inflamada, uma úlcera rasa na parte inferior e bactérias Helicobacter pylori em espiral atravessando a camada de muco, com recorte de uma pessoa com a mão sobre a boca do estômago e quatro ícones circulares de azia, estufamento, náusea e falta de apetite',
  },
  shigelose: {
    src: '/img/doenca-shigelose.webp',
    alt: 'Ilustração médica de um corte do intestino grosso com a mucosa vermelha e inflamada, úlceras rasas com sangramento e conteúdo amarelado com muco e sangue, além de bactérias Shigella em forma de bastonete próximas à parede, com recorte de uma pessoa com as duas mãos sobre o abdome e quatro ícones de diarreia, tenesmo, sangue e febre',
  },
  coqueluche: {
    src: '/img/doenca-coqueluche.webp',
    alt: 'Ilustração médica de um corte da traqueia e dos brônquios com a mucosa vermelha e inflamada, cílios destruídos, muco espesso obstruindo parte da via aérea e bactérias Bordetella pertussis na parede, com recorte de uma criança em crise de tosse e quatro ícones de tosse seca, estridor, vômito e apneia',
  },
  amebiase: {
    src: '/img/doenca-amebiase.webp',
    alt: 'Ilustração médica de um corte do intestino grosso com a mucosa aberta em úlceras sangrentas em forma de frasco e trofozoítos de Entamoeba histolytica no interior, com recorte de uma pessoa deitada com as mãos no abdome e quatro ícones de diarreia, disenteria, cólica e febre',
  },
  giardiase: {
    src: '/img/doenca-giardiase.webp',
    alt: 'Ilustração médica de um corte do intestino delgado com as vilosidades achatadas e dezenas de trofozoítos de Giardia presos à superfície, gotículas de gordura no lúmen e mucosa avermelhada, com recorte de uma criança com a barriga inchada e quatro ícones de diarreia, gases, cansaço e inchaço',
  },
  ancilostomiase: {
    src: '/img/doenca-ancilostomiase.webp',
    alt: 'Ilustração médica de um corte do intestino delgado com ancilostomídeos presos à mucosa pela cápsula bucal e pequenos pontos de sangramento onde se alimentam, com recorte de uma mão e de um olho com palidez e quatro ícones de cansaço, palidez, falta de ar e tontura',
  },
  tricuriase: {
    src: '/img/doenca-tricuriase.webp',
    alt: 'Ilustração médica de um corte do cólon com tricocéfalos de corpo fino e extremidade espessa mergulhados na mucosa inflamada e avermelhada, com pontos de sangramento e muco, com recorte de uma criança pálida e quatro ícones de diarreia, disenteria, cólica e prolapso',
  },
  oxiuriase: {
    src: '/img/doenca-oxiuriase.webp',
    alt: 'Ilustração médica de um corte sagital do reto e do canal anal com uma fêmea de oxiúro saindo pelo ânus e ovos minúsculos espalhados na pele ao redor, com recorte de uma criança deitada à noite e quatro ícones de coceira anal, sono agitado, irritação e cólica',
  },
  hidatidose: {
    src: '/img/doenca-hidatidose.webp',
    alt: 'Ilustração médica de um corte do fígado com um cisto hidático grande de parede espessa contendo cistos filhos, com recorte de um rosto com pele e olhos amarelados e quatro ícones de dor no abdome, tosse seca, falta de ar e urticária',
  },
  'febre-amarela': {
    src: '/img/doenca-febre-amarela.webp',
    alt: 'Ilustração médica de um fígado em corte, com três áreas lesionadas e partículas virais, com recorte de olhos com a parte branca amarelada e detalhe de um mosquito Aedes pousado na pele, e quatro ícones de febre alta, dor no corpo, náuseas e urina escura',
  },
  varicela: {
    src: '/img/doenca-varicela.webp',
    alt: 'Ilustração médica de um bloco de pele em três camadas com uma mancha vermelha, uma vesícula de líquido claro e uma crosta seca na superfície, com recorte das costas de uma criança com bolhas e detalhe de crostas na pele, e quatro ícones de coceira, febre baixa, bolhas e manchas',
  },
  sarampo: {
    src: '/img/doenca-sarampo.webp',
    alt: 'Ilustração médica de uma via aérea aberta em corte, com a mucosa avermelhada e partículas virais no interior, com recorte do rosto de uma criança com manchas nas bochechas e detalhe de um olho vermelho, e quatro ícones de febre alta, tosse seca, conjuntivite e manchas',
  },
  tetano: {
    src: '/img/doenca-tetano.webp',
    alt: 'Ilustração médica de uma mandíbula com o músculo da mastigação tenso e partículas de toxina junto a uma terminação nervosa, com recorte de um ferimento com terra na perna, e quatro ícones de boca travada, rigidez, espasmos e falta de ar',
  },
  'meningite-meningococica': {
    src: '/img/doenca-meningite-meningococica.webp',
    alt: 'Ilustração médica de um cérebro em corte com a membrana que o envolve espessada e uma fina camada de líquor, com recorte de manchas roxas no antebraço e detalhe do exame de rigidez de nuca, e quatro ícones de febre alta, náusea, nuca rígida e manchas',
  },
  'covid-19': {
    src: '/img/doenca-covid-19.webp',
    alt: 'Ilustração médica de um par de pulmões com o pulmão direito aberto em corte, mostrando os alvéolos cheios de líquido e partículas de vírus na via aérea, com recorte de um dedo com oxímetro, e quatro ícones de tosse seca, febre, falta de ar e cansaço',
  },
  leptospirose: {
    src: '/img/doenca-leptospirose.webp',
    alt: 'Ilustração médica de um rim aberto em corte, com a camada externa escura, o miolo com estrias claras, áreas inflamadas e bactérias em espiral, com recorte de pernas dentro de água de enchente, e quatro ícones de febre, dor muscular, icterícia e cansaço',
  },
  sifilis: {
    src: '/img/doenca-sifilis.webp',
    alt: 'Ilustração médica de um bloco de pele em corte com uma ferida rasa de borda endurecida e bactérias em espiral no tecido, com recorte de mãos com teste rápido, e quatro ícones de cancro duro, manchas, ínguas e ausência de sintomas',
  },
  gonorreia: {
    src: '/img/doenca-gonorreia.webp',
    alt: 'Ilustração médica de um trecho de uretra aberto em corte, com a mucosa avermelhada, secreção clara e bactérias redondas na superfície, com recorte de mãos com pote de urina, e quatro ícones de ardor, corrimento, dor pélvica e sangramento',
  },
  osteoporose: {
    src: '/img/doenca-osteoporose.webp',
    alt: 'Ilustração médica de um osso longo aberto em corte, com o interior esponjoso esburacado e traves ósseas quebradas; ao lado, uma fotografia de uma perna e um pé apoiados no suporte do aparelho de densitometria óssea, com mãos enluvadas ajustando a tira no tornozelo; abaixo, quatro ícones de dor lombar, coluna curva, altura menor e fraturas',
  },
  'doenca-do-refluxo-gastroesofagico': {
    src: '/img/doenca-doenca-do-refluxo-gastroesofagico.webp',
    alt: 'Ilustração médica do esôfago e do estômago em corte, com o esfíncter aberto e gotas de suco gástrico subindo pelo esôfago; ao lado, uma fotografia de mãos apoiadas sobre a parte alta do abdome durante o exame; abaixo, quatro ícones de azia, refluxo, tosse e rouquidão',
  },
  toxoplasmose: {
    src: '/img/doenca-toxoplasmose.webp',
    alt: 'Ilustração médica de um olho em corte, com a retina, a coroide e um cisto com parasitas na parede interna; ao lado, uma fotografia de uma gestante com as mãos sobre a barriga e outra de uma pá cheia de areia de gato; abaixo, quatro ícones de gânglios inchados, visão turva, febre e cansaço',
  },
  clamidia: {
    src: '/img/doenca-clamidia.webp',
    alt: 'Ilustração médica do aparelho reprodutor feminino em corte, com o útero, as trompas e os ovários e a área inflamada marcada na parede do útero; ao lado, uma fotografia de mãos enluvadas segurando o copo da coleta de urina e outra de um preservativo fora da embalagem; abaixo, quatro ícones de corrimento, ardor ao urinar, dor pélvica e ausência de sintomas',
  },
  hpv: {
    src: '/img/doenca-hpv.webp',
    alt: 'Ilustração médica de um corte da pele, com a epiderme, uma verruga saliente e partículas do vírus na base da lesão; ao lado, uma fotografia da vacina aplicada no braço e outra da coleta com swab para o teste de HPV; abaixo, quatro ícones de verruga, coceira, sangramento e ausência de sintomas',
  },
  hipertireoidismo: {
    src: '/img/doenca-hipertireoidismo.webp',
    alt: 'Ilustração médica da tireoide em corte sobre a traqueia, com os folículos cheios de coloide e a glândula aumentada; ao lado, uma fotografia de mãos apalpando o pescoço e outra da coleta de sangue para a dosagem de TSH; abaixo, quatro ícones de palpitação, tremor, calor e perda de peso',
  },
  'calculo-renal': {
    src: '/img/doenca-calculo-renal.webp',
    alt: 'Ilustração médica de um rim em corte, com os cálices, o ureter e um cálculo alojado na pelve renal; ao lado, uma fotografia de uma pessoa com a mão na lombar e outra do transdutor do ultrassom apoiado no flanco; abaixo, quatro ícones de dor em cólica, sangue na urina, náusea e vontade de urinar',
  },
  'trombose-venosa-profunda': {
    src: '/img/doenca-trombose-venosa-profunda.webp',
    alt: 'Ilustração médica de uma veia profunda aberta em corte, com as hemácias e um coágulo preso à parede do vaso; ao lado, uma fotografia de uma perna inchada sendo medida com fita métrica e outra do transdutor do ultrassom apoiado na panturrilha; abaixo, quatro ícones de inchaço, dor, calor e vermelhidão',
  },
  'hiperplasia-prostatica-benigna': {
    src: '/img/doenca-hiperplasia-prostatica-benigna.webp',
    alt: 'Ilustração médica de uma próstata em corte, com o lobo aumentado estreitando a uretra; ao lado, uma fotografia do transdutor do ultrassom apoiado no abdome e outra de um frasco de exame de urina na mão; abaixo, quatro ícones de urinar muito, noctúria, jato fraco e urgência',
  },
  'lupus-eritematoso-sistemico': {
    src: '/img/doenca-lupus-eritematoso-sistemico.webp',
    alt: 'Ilustração médica de um corte da pele, com a epiderme, uma área de inflamação e anticorpos em forma de Y no tecido; ao lado, uma fotografia da mancha avermelhada no rosto e outra da coleta de sangue no braço; abaixo, quatro ícones de cansaço, dor nas juntas, manchas e febre',
  },
  'doenca-de-alzheimer': {
    src: '/img/doenca-doenca-de-alzheimer.webp',
    alt: 'Ilustração médica de um cérebro em corte, com o córtex, o hipocampo e placas de amiloide; ao lado, uma fotografia de um teste cognitivo feito com papel e caneta; abaixo, quatro ícones de esquecimento, repetição, confusão e agitação',
  },
};

export const articleImages: Record<string, SiteImage> = {
  'gonorreia-como-prevenir': {
    src: '/img/artigo-gonorreia-como-prevenir.webp',
    alt: 'Mãos segurando uma cartela com preservativos sobre o colo',
  },
  'leptospirose-sintomas-e-sinais-de-alerta': {
    src: '/img/artigo-leptospirose-sintomas-e-sinais-de-alerta.webp',
    alt: 'Pessoa deitada sob cobertores segurando um termômetro digital',
  },
  'leptospirose-como-se-prevenir-em-enchentes': {
    src: '/img/artigo-leptospirose-como-se-prevenir-em-enchentes.webp',
    alt: 'Rua alagada com água acumulada sobre o asfalto',
  },
  'sifilis-sintomas-e-estagios': {
    src: '/img/artigo-sifilis-sintomas-e-estagios.webp',
    alt: 'Mão coçando o antebraço',
  },
  'sifilis-teste-rapido-e-tratamento': {
    src: '/img/artigo-sifilis-teste-rapido-e-tratamento.webp',
    alt: 'Gota de sangue na ponta do dedo após a picada',
  },
  'sifilis-na-gestacao-e-sifilis-congenita': {
    src: '/img/artigo-sifilis-na-gestacao-e-sifilis-congenita.webp',
    alt: 'Gestante com as mãos sobre a barriga',
  },
  'sifilis-parcerias-e-reinfeccao': {
    src: '/img/artigo-sifilis-parcerias-e-reinfeccao.webp',
    alt: 'Casal conversando sentado no sofá',
  },
  'neurossifilis-sintomas-e-sinais-de-alerta': {
    src: '/img/artigo-neurossifilis-sintomas-e-sinais-de-alerta.webp',
    alt: 'Homem de óculos com a mão na testa, com expressão de dor de cabeça',
  },
  'covid-19-sintomas-e-sinais-de-alerta': {
    src: '/img/artigo-covid-19-sintomas-e-sinais-de-alerta.webp',
    alt: 'Mulher assoando o nariz com um lenço de papel no sofá',
  },
  'covid-19-como-se-transmite-e-como-se-proteger': {
    src: '/img/artigo-covid-19-como-se-transmite-e-como-se-proteger.webp',
    alt: 'Mulher usando máscara descartável ao ar livre',
  },
  'covid-19-teste-positivo-o-que-fazer': {
    src: '/img/artigo-covid-19-teste-positivo-o-que-fazer.webp',
    alt: 'Mão segurando um teste rápido de antígeno',
  },
  'covid-19-vacina-e-doses-de-reforco': {
    src: '/img/artigo-covid-19-vacina-e-doses-de-reforco.webp',
    alt: 'Mãos de profissional de saúde segurando uma seringa',
  },
  'covid-19-covid-longa-sintomas-e-recuperacao': {
    src: '/img/artigo-covid-19-covid-longa-sintomas-e-recuperacao.webp',
    alt: 'Homem sentado com as mãos na cabeça, com expressão de cansaço',
  },
  'obesidade-sintomas-e-quando-buscar-ajuda': {
    src: '/img/artigo-obesidade-sintomas-e-quando-buscar-ajuda.webp',
    alt: 'Fita métrica amarela contornando a cintura de uma pessoa',
  },
  'obesidade-como-emagrecer-com-saude': {
    src: '/img/artigo-obesidade-como-emagrecer-com-saude.webp',
    alt: 'Tábua de madeira com brócolis, pimentão, cenoura, repolho e temperos verdes',
  },
  'gripe-sintomas-e-sinais-de-alerta': {
    src: '/img/artigo-gripe-sintomas-e-sinais-de-alerta.webp',
    alt: 'Mulher sentada no sofá assoando o nariz com um lenço de papel',
  },
  'gripe-vacina-e-como-se-proteger': {
    src: '/img/artigo-gripe-vacina-e-como-se-proteger.webp',
    alt: 'Profissional de luvas azuis aplicando uma injeção no braço de uma pessoa',
  },
  'febre-tifoide-sintomas-e-diagnostico': {
    src: '/img/artigo-febre-tifoide-sintomas-e-diagnostico.webp',
    alt: 'Mãos segurando uma gradil com tubos de coleta de sangue',
  },
  'febre-tifoide-como-se-prevenir': {
    src: '/img/artigo-febre-tifoide-como-se-prevenir.webp',
    alt: 'Mãos ensaboadas sob água corrente em uma pia branca',
  },
  'sintomas-iniciais-da-dengue': {
    src: '/img/artigo-sintomas-dengue.webp',
    alt: 'Mosquito em detalhe sobre uma superfície escura',
  },
  'como-prevenir-a-dengue': {
    src: '/img/artigo-prevenir-dengue.webp',
    alt: 'Mosquito pousado entre folhas e galhos finos',
  },
  'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue': {
    src: '/img/artigo-atendimento.webp',
    alt: 'Profissional de saúde examinando o braço de um paciente',
  },
  'dengue-pode-matar': {
    src: '/img/artigo-malaria-prevencao.webp',
    alt: 'Inseto de pernas longas pousado em uma folha verde, visto de frente',
  },
  'dengue-segunda-infeccao': {
    src: '/img/artigo-chikungunya-dengue.webp',
    alt: 'Mosquito em detalhe sobre uma folha verde',
  },
  'diabetes-tipo-2-o-que-muda-no-dia-a-dia': {
    src: '/img/artigo-diabetes-dia-a-dia.webp',
    alt: 'Medidor de glicose sobre uma mesa branca com a tira de teste encaixada',
  },
  'diabetes-sinais-e-sintomas': {
    src: '/img/artigo-diabetes-sinais.webp',
    alt: 'Glicosímetro, caneta de insulina, caixas de comprimidos e lancetas dispostos sobre fundo laranja',
  },
  'diabetes-fatores-de-risco': {
    src: '/img/artigo-diabetes-risco.webp',
    alt: 'Família caminhando ao ar livre num campo de grama, vista de longe',
  },
  'diabetes-pre-diabetes': {
    src: '/img/artigo-diabetes-pre-diabetes.webp',
    alt: 'Mão com luva segurando um tubo de coleta de sangue diante de outros tubos de ensaio',
  },
  'diabetes-hipoglicemia': {
    src: '/img/artigo-diabetes-hipoglicemia.webp',
    alt: 'Cubos de açúcar empilhados sobre fundo claro, vistos de perto',
  },
  'hipertensao-como-medir-a-pressao-em-casa': {
    src: '/img/artigo-medir-pressao.webp',
    alt: 'Esfigmomanômetro com mostrador redondo e braçadeira sobre fundo claro',
  },
  'hipertensao-alimentacao-e-sal': {
    src: '/img/artigo-hipertensao-alimentacao-e-sal.webp',
    alt: 'Salada de alface com tomate-cereja, pepino e cebola-roxa em uma tigela, vista de cima sobre mesa de madeira',
  },
  'hipertensao-posso-parar-o-remedio': {
    src: '/img/artigo-hipertensao-posso-parar-o-remedio.webp',
    alt: 'Mão segurando uma cápsula branca sobre uma caixa organizadora semanal de comprimidos, com pastilhas coloridas nos compartimentos',
  },
  'hipertensao-metas-de-pressao': {
    src: '/img/artigo-hipertensao-metas-de-pressao.webp',
    alt: 'Braço com a braçadeira de um esfigmomanômetro manual sendo inflada por uma mão, com o mostrador redondo em destaque',
  },
  'hipertensao-perigo-mesmo-sem-sintomas': {
    src: '/img/artigo-hipertensao-perigo-mesmo-sem-sintomas.webp',
    alt: 'Casal de idosos caminhando de costas por uma alameda arborizada de parque, ao lado de um lago',
  },
  'vacinacao-o-que-e-o-calendario-basico': {
    src: '/img/artigo-vacinacao.webp',
    alt: 'Mão segurando uma seringa com frasco de vacina ao lado',
  },
  'chikungunya-dor-nas-articulacoes-quanto-tempo-dura': {
    src: '/img/artigo-chikungunya-articulacoes.webp',
    alt: 'Comprimidos e termômetro digital sobre uma superfície branca',
  },
  'chikungunya-e-dengue-como-diferenciar': {
    src: '/img/artigo-chikungunya-dengue.webp',
    alt: 'Mosquito em detalhe sobre uma folha verde',
  },
  'zika-na-gestacao-o-que-a-infeccao-pode-causar': {
    src: '/img/artigo-zika-gestacao.webp',
    alt: 'Homem com as mãos sobre a barriga de uma gestante',
  },
  'zika-como-se-proteger-em-areas-com-transmissao': {
    src: '/img/artigo-zika-protecao.webp',
    alt: 'Mosquito de pernas longas visto contra o céu',
  },
  'malaria-sintomas-e-quando-buscar-atendimento': {
    src: '/img/artigo-malaria-sintomas.webp',
    alt: 'Termômetro digital apoiado sobre tecido xadrez',
  },
  'malaria-como-se-prevenir-em-viagens-para-a-amazonia': {
    src: '/img/artigo-malaria-prevencao.webp',
    alt: 'Mosquito pousado sobre uma folha',
  },
  'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta': {
    src: '/img/artigo-tosse-persistente.webp',
    alt: 'Pessoa usando máscara de proteção respiratória',
  },
  'tuberculose-o-tratamento-tem-cura-e-e-gratuito': {
    src: '/img/artigo-tuberculose-tratamento.webp',
    alt: 'Cápsulas e comprimidos espalhados sobre fundo claro',
  },
  'hiv-o-que-fazer-nas-primeiras-72-horas': {
    src: '/img/artigo-hiv-72-horas.webp',
    alt: 'Seringa apoiada sobre uma bandeja metálica',
  },
  'indetectavel-intransmissivel-o-que-significa': {
    src: '/img/artigo-indetectavel.webp',
    alt: 'Profissional com luvas azuis ao lado de um microscópio de laboratório',
  },
  'hiv-como-se-transmite-e-o-que-nao-transmite': {
    src: '/img/artigo-hiv-como-se-transmite-e-o-que-nao-transmite.webp',
    alt: 'Amigos reunidos à mesa compartilhando uma refeição',
  },
  'hiv-como-e-quando-fazer-o-teste': {
    src: '/img/artigo-hiv-como-e-quando-fazer-o-teste.webp',
    alt: 'Mão aplicando uma gota de sangue do dedo sobre uma tira de teste',
  },
  'hiv-prep-prevencao-antes-da-exposicao': {
    src: '/img/artigo-hiv-prep-prevencao-antes-da-exposicao.webp',
    alt: 'Comprimidos brancos arredondados vistos de perto',
  },
  'hepatites-virais-quais-tem-vacina': {
    src: '/img/artigo-hepatites-vacina.webp',
    alt: 'Frascos de vacina enfileirados em uma bandeja',
  },
  'hepatite-c-tem-cura': {
    src: '/img/artigo-hepatite-c.webp',
    alt: 'Cápsulas cor de rosa e brancas sobre fundo claro',
  },
  'asma-crise-o-que-fazer-enquanto-espera-atendimento': {
    src: '/img/artigo-asma-crise.webp',
    alt: 'Ambulância em atendimento com a porta traseira aberta',
  },
  'asma-sintomas-e-sinais-de-alerta': {
    src: '/img/artigo-asma-sintomas.webp',
    alt: 'Ilustração anatômica dos pulmões humanos sobre fundo bege',
  },
  'asma-diagnostico-e-exames': {
    src: '/img/artigo-asma-diagnostico.webp',
    alt: 'Médico de braços cruzados segurando um estetoscópio vermelho',
  },
  'asma-tratamento-e-controle': {
    src: '/img/artigo-asma-tratamento.webp',
    alt: 'Máscara de nebulização transparente ao lado de um aparelho branco',
  },
  'asma-como-evitar-crises': {
    src: '/img/artigo-asma-evitar-crises.webp',
    alt: 'Mulher de luvas amarelas limpando a casa',
  },
  'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro': {
    src: '/img/artigo-dpoc-tabagismo.webp',
    alt: 'Cigarros apagados sobre cédulas de dinheiro',
  },
  'dpoc-sinais-de-alerta-quando-procurar-atendimento': {
    src: '/img/artigo-dpoc-sinais-de-alerta.webp',
    alt: 'Criança usando máscara de nebulização sentada em casa',
  },
  'dpoc-como-e-diagnosticada': {
    src: '/img/artigo-dpoc-diagnostico.webp',
    alt: 'Pessoa soprando em um espirômetro diante de um monitor',
  },
  'dpoc-tratamento-e-cuidados': {
    src: '/img/artigo-dpoc-tratamento.webp',
    alt: 'Mão segurando uma máscara de nebulização',
  },
  'dpoc-como-prevenir-crises-e-o-papel-das-vacinas': {
    src: '/img/artigo-dpoc-prevencao.webp',
    alt: 'Profissional aplicando vacina no braço de um paciente',
  },
  'infarto-quais-sao-os-sinais-e-o-que-fazer': {
    src: '/img/artigo-infarto-sinais.webp',
    alt: 'Traçado de eletrocardiograma impresso em papel',
  },
  'avc-como-reconhecer-os-sinais-e-agir-rapido': {
    src: '/img/artigo-avc-sinais.webp',
    alt: 'Estetoscópio sobre uma superfície branca',
  },
  'infarto-e-avc-fatores-de-risco': {
    src: '/img/artigo-infarto-avc-risco.webp',
    alt: 'Mulher correndo ao ar livre',
  },
  'infarto-e-avc-como-e-diagnosticado': {
    src: '/img/artigo-infarto-avc-diagnostico.webp',
    alt: 'Aparelho de imagem médica com mesa deslizante em sala clara',
  },
  'infarto-e-avc-tratamento-e-reabilitacao': {
    src: '/img/artigo-infarto-avc-reabilitacao.webp',
    alt: 'Pessoa apoiando as mãos numa barra paralela de caminhar durante sessão de reabilitação, ao lado de um profissional de saúde de avental branco, em sala com espaldar de madeira e desenhos na parede',
  },
  'faringite-e-amigdalite-sinais-de-alerta': {
    src: '/img/artigo-faringite-sinais-de-alerta.webp',
    alt: 'Mulher levando a mão ao pescoço, com expressão de dor na garganta',
  },
  'faringite-e-amigdalite-como-se-transmite': {
    src: '/img/artigo-faringite-transmissao.webp',
    alt: 'Homem cobrindo o rosto com a mão ao tossir, com a outra mão erguida à frente',
  },
  'faringite-e-amigdalite-como-e-diagnosticada': {
    src: '/img/artigo-faringite-diagnostico.webp',
    alt: 'Estetoscópio preto sobre fundo azul claro',
  },
  'faringite-e-amigdalite-tratamento-e-cuidados': {
    src: '/img/artigo-faringite-tratamento.webp',
    alt: 'Xícara de chá quente com biscoitos e rodelas de limão sobre uma mesa',
  },
  'faringite-e-amigdalite-prevencao': {
    src: '/img/artigo-faringite-prevencao.webp',
    alt: 'Mãos sob a água corrente enquanto são lavadas',
  },
  'gastroenterite-sintomas': {
    src: '/img/artigo-gastroenterite-sintomas.webp',
    alt: 'Mulher com as mãos sobre a barriga, indicando desconforto abdominal',
  },
  'gastroenterite-duvidas-frequentes': {
    src: '/img/artigo-gastroenterite-duvidas-frequentes.webp',
    alt: 'Mãos cobertas de espuma sendo esfregadas sob a água da torneira',
  },
  'gastroenterite-remedios': {
    src: '/img/artigo-gastroenterite-remedios.webp',
    alt: 'Mãos em concha recolhendo água corrente',
  },
  'gastroenterite-alimentacao': {
    src: '/img/artigo-gastroenterite-alimentacao.webp',
    alt: 'Tigela escura com uma sopa quente de legumes',
  },
  'gastroenterite-pode-ser-grave': {
    src: '/img/artigo-gastroenterite-pode-ser-grave.webp',
    alt: 'Profissional de saúde posicionando um cateter no braço do paciente',
  },
  'enxaqueca-sinais-de-alerta-quando-procurar-atendimento': {
    src: '/img/artigo-enxaqueca-sinais-alerta.webp',
    alt: 'Homem de olhos fechados pressionando as têmporas com as duas mãos',
  },
  'enxaqueca-tratamento-e-cuidados': {
    src: '/img/artigo-enxaqueca-repouso.webp',
    alt: 'Mulher deitada num colchão com o braço sobre os olhos',
  },
  'catarata-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-catarata-exame-visao.webp',
    alt: 'Profissional de saúde apontando para as letras de uma escala de acuidade visual na parede',
  },
  'catarata-tratamento-e-cirurgia': {
    src: '/img/artigo-catarata-cirurgia.webp',
    alt: 'Dois cirurgiões de touca e máscara operando sob as luzes de um centro cirúrgico',
  },
  'otite-media-aguda-sinais-de-alerta-quando-procurar-atendimento': {
    src: '/img/artigo-otite-crianca-febre.webp',
    alt: 'Criança pequena com adesivo refrescante na testa, apoiada no braço de um adulto',
  },
  'otite-media-aguda-tratamento-e-cuidados': {
    src: '/img/artigo-otite-otoscopio.webp',
    alt: 'Close de um otoscópio azul aplicado ao ouvido de uma pessoa',
  },
  'pneumonia-sinais-de-alerta-quando-procurar-atendimento': {
    src: '/img/artigo-pneumonia-rx.webp',
    alt: 'Radiografia de tórax com manchas claras espalhadas nos dois pulmões',
  },
  'pneumonia-tratamento-e-recuperacao': {
    src: '/img/artigo-pneumonia-soro.webp',
    alt: 'Bolsa de soro pendurada no pé de infusão em uma sala de hospital',
  },
  'pneumonia-vacina-protecao': {
    src: '/img/artigo-pneumonia-vacina-protecao.webp',
    alt: 'Profissional de saúde com luvas aplicando vacina no braço de um adulto',
  },
  'pneumonia-em-criancas': {
    src: '/img/artigo-pneumonia-em-criancas.webp',
    alt: 'Médico auscultando o peito de uma criança com estetoscópio',
  },
  'pneumonia-em-idosos': {
    src: '/img/artigo-pneumonia-em-idosos.webp',
    alt: 'Profissional de cuidado se inclina para ajudar uma idosa em cadeira de rodas',
  },
  'insuficiencia-cardiaca-sinais-de-alerta-quando-procurar-atendimento': {
    src: '/img/artigo-insuficiencia-cardiaca-rx.webp',
    alt: 'Radiografia de tórax mostrando o contorno alargado do coração',
  },
  'insuficiencia-cardiaca-tratamento-e-vida-diaria': {
    src: '/img/artigo-insuficiencia-cardiaca-balanca.webp',
    alt: 'Pés descalços sobre uma balança digital de banheiro',
  },
  'insuficiencia-cardiaca-transplante-cardiaco': {
    src: '/img/artigo-catarata-cirurgia.webp',
    alt: 'Dois cirurgiões de touca e máscara operando sob as luzes de um centro cirúrgico',
  },
  'insuficiencia-cardiaca-apos-alta': {
    src: '/img/artigo-medir-pressao.webp',
    alt: 'Esfigmomanômetro com mostrador redondo e braçadeira sobre fundo claro',
  },
  'insuficiencia-cardiaca-o-que-pode-ser-confundido': {
    src: '/img/artigo-asma-diagnostico.webp',
    alt: 'Médico de braços cruzados segurando um estetoscópio vermelho',
  },
  'esteatose-hepatica-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-esteatose-ultrassom.webp',
    alt: 'Profissional de luvas pretas segurando o transdutor de um aparelho de ultrassom',
  },
  'esteatose-hepatica-como-reverter-com-habitos': {
    src: '/img/artigo-esteatose-cozinha.webp',
    alt: 'Pessoa picando legumes numa tábua de cozinha',
  },
  'esteatose-hepatica-descobri-no-check-up': {
    src: '/img/artigo-esteatose-checkup.webp',
    alt: 'Profissional de saúde medindo a pressão arterial de uma paciente numa consulta',
  },
  'esteatose-hepatica-o-que-acontece-sem-tratamento': {
    src: '/img/artigo-esteatose-figado.webp',
    alt: 'Médico conversando com uma paciente enquanto segura um prontuário',
  },
  'esteatose-hepatica-causas-e-mitos': {
    src: '/img/artigo-esteatose-causas.webp',
    alt: 'Prato com salada, legumes e ovo sobre uma mesa de madeira',
  },
  'parasitoses-intestinais-sinais-de-alerta-quando-procurar-atendimento': {
    src: '/img/artigo-parasitoses-crianca.webp',
    alt: 'Criança sentada na cama, com expressão cansada',
  },
  'parasitoses-intestinais-tratamento-e-prevencao': {
    src: '/img/artigo-parasitoses-higiene.webp',
    alt: 'Criança curvada lavando os pés numa bacia branca',
  },
  'colesterol-alto-como-detectar-e-quando-procurar-atendimento': {
    src: '/img/artigo-colesterol-tubos.webp',
    alt: 'Fileiras de tubos de coleta de sangue com tampas coloridas numa bandeja de laboratório',
  },
  'colesterol-alto-tratamento-e-mudancas-de-habitos': {
    src: '/img/artigo-colesterol-aveia.webp',
    alt: 'Tigela de aveia com leite e sementes sobre fundo branco',
  },
  'doenca-renal-cronica-sinais-de-alerta-quando-procurar-atendimento': {
    src: '/img/artigo-renal-modelo.webp',
    alt: 'Mão segurando um modelo anatômico de rim aberto ao meio',
  },
  'doenca-renal-cronica-tratamento-e-convivencia': {
    src: '/img/artigo-renal-dialise.webp',
    alt: 'Aparelho de hemodiálise com tela e linhas de circuito numa sala de tratamento',
  },
  'hanseniase-sinais-na-pele-quando-procurar-atendimento': {
    src: '/img/artigo-hanseniase-sensibilidade.webp',
    alt: 'Mão tocando o antebraço de outra pessoa durante o teste de sensibilidade da pele',
  },
  'hanseniase-tratamento-gratuito-no-sus': {
    src: '/img/artigo-hanseniase-medicamentos.webp',
    alt: 'Blíster fechado de cápsulas azuis e brancas sobre a mesa',
  },
  'artrite-reumatoide-sinais-iniciais-quando-procurar-atendimento': {
    src: '/img/artigo-artrite-maos.webp',
    alt: 'Mão que massageia os dedos da outra mão cerrada',
  },
  'artrite-reumatoide-tratamento-e-cuidados-com-as-juntas': {
    src: '/img/artigo-artrite-juntas.webp',
    alt: 'Close da mão enrugada de uma pessoa idosa, com os dedos abertos',
  },
  'anemia-ferropriva-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-anemia-fadiga.webp',
    alt: 'Mulher de óculos reclinada no sofá, com o rosto cansado',
  },
  'anemia-ferropriva-tratamento-e-alimentacao': {
    src: '/img/artigo-anemia-alimentacao.webp',
    alt: 'Tigela com grão-de-bico, lentilha, abacate, milho e folhas verdes',
  },
  'epilepsia-crise-o-que-fazer-e-quando-chamar-o-samu': {
    src: '/img/artigo-epilepsia-crise-o-que-fazer-e-quando-chamar-o-samu.webp',
    alt: 'Equipe do serviço de emergência ao lado de uma ambulância, com a maca preparada',
  },
  'epilepsia-tratamento-e-dia-a-dia': {
    src: '/img/artigo-epilepsia-tratamento-e-dia-a-dia.webp',
    alt: 'Mão segurando um organizador semanal de comprimidos com cápsulas coloridas',
  },
  'glaucoma-como-descobrir-cedo': {
    src: '/img/artigo-glaucoma-como-descobrir-cedo.webp',
    alt: 'Lâmpada de fenda e um equipamento de exame oftalmológico em uma sala clara',
  },
  'glaucoma-tratamento-e-colirios': {
    src: '/img/artigo-glaucoma-tratamento-e-colirios.webp',
    alt: 'Frasco de colírio branco em primeiro plano e óculos desfocados ao fundo',
  },
  'rinite-alergica-sintomas-e-gatilhos': {
    src: '/img/artigo-rinite-alergica-sintomas-e-gatilhos.webp',
    alt: 'Caixa de lenços de papel sobre fundo amarelo',
  },
  'rinite-alergica-como-controlar-em-casa': {
    src: '/img/artigo-rinite-alergica-como-controlar-em-casa.webp',
    alt: 'Pessoa com luvas passando o aspirador sobre um colchão',
  },
  'bronquiolite-sinais-de-alerta-no-bebe': {
    src: '/img/artigo-bronquiolite-sinais-de-alerta-no-bebe.webp',
    alt: 'Bebê deitado com a mão de um adulto ao lado da cabeça, em uma sala clara',
  },
  'bronquiolite-tratamento-e-cuidados-em-casa': {
    src: '/img/artigo-bronquiolite-tratamento-e-cuidados-em-casa.webp',
    alt: 'Máscara de nebulização transparente conectada ao aparelho, em close',
  },
  'fibrilacao-atrial-sintomas-e-o-risco-de-avc': {
    src: '/img/artigo-fibrilacao-atrial-sintomas-e-o-risco-de-avc.webp',
    alt: 'Traçado de eletrocardiograma impresso em papel quadriculado',
  },
  'fibrilacao-atrial-tratamento-e-anticoagulantes': {
    src: '/img/artigo-fibrilacao-atrial-tratamento-e-anticoagulantes.webp',
    alt: 'Mão aberta com vários comprimidos e cápsulas de cores diferentes',
  },
  'cirrose-hepatica-sinais-de-alerta': {
    src: '/img/artigo-cirrose-hepatica-sinais-de-alerta.webp',
    alt: 'Mãos de um profissional apoiadas sobre a barriga de uma pessoa deitada',
  },
  'cirrose-hepatica-o-que-parar-e-o-que-muda': {
    src: '/img/artigo-cirrose-hepatica-o-que-parar-e-o-que-muda.webp',
    alt: 'Taças de vinho sobre uma mesa posta, com garrafas e pratos ao fundo',
  },
  'ulcera-peptica-sintomas-e-quando-o-estomago-sangra': {
    src: '/img/artigo-ulcera-peptica-sintomas-e-quando-o-estomago-sangra.webp',
    alt: 'Mulher com as mãos sobre a barriga, em uma sala clara',
  },
  'ulcera-peptica-tratamento-e-helicobacter': {
    src: '/img/artigo-ulcera-peptica-tratamento-e-helicobacter.webp',
    alt: 'Frasco de remédio tombado com cápsulas verdes espalhadas sobre uma superfície escura',
  },
  'hipotireoidismo-sintomas-e-exame-de-sangue': {
    src: '/img/artigo-hipotireoidismo-sintomas-e-exame-de-sangue.webp',
    alt: 'Braço apoiado em uma cama com gaze e fita no local da coleta, tubo conectado e manguito de pressão no braço',
  },
  'hipotireoidismo-tratamento-com-levotiroxina': {
    src: '/img/artigo-hipotireoidismo-tratamento-com-levotiroxina.webp',
    alt: 'Copo de água sobre uma mesa escura ao lado de dois comprimidos brancos',
  },
  'infeccao-urinaria-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-infeccao-urinaria-sintomas-e-quando-procurar-atendimento.webp',
    alt: 'Mão com luva segurando um tubo de amostra com líquido amarelo',
  },
  'infeccao-urinaria-prevencao-e-cuidados': {
    src: '/img/artigo-infeccao-urinaria-prevencao-e-cuidados.webp',
    alt: 'Jarra de água e um copo sobre a mesa, com luz do dia ao fundo',
  },
  'cancer-de-pele-sinais-na-pele-que-pedem-atendimento': {
    src: '/img/artigo-cancer-de-pele-sinais-na-pele-que-pedem-atendimento.webp',
    alt: 'Close da pele de um braço com muitas pintas e sinais castanhos',
  },
  'cancer-de-pele-prevencao-e-protetor-solar': {
    src: '/img/artigo-cancer-de-pele-prevencao-e-protetor-solar.webp',
    alt: 'Pernas com protetor solar aplicado em formas de sol e coração, ao lado de um tubo de filtro solar',
  },
  'gota-crise-de-dor-no-pe-e-o-que-fazer': {
    src: '/img/artigo-gota-crise-de-dor-no-pe-e-o-que-fazer.webp',
    alt: 'Pé descalço em close, com os dedos apoiados no chão e luz suave',
  },
  'gota-tratamento-e-alimentacao': {
    src: '/img/artigo-gota-tratamento-e-alimentacao.webp',
    alt: 'Prato com arroz, feijão, carne, batata frita e legumes',
  },
  'doenca-falciforme-sinais-de-alerta-na-crianca': {
    src: '/img/artigo-doenca-falciforme-sinais-de-alerta-na-crianca.webp',
    alt: 'Fotografia em preto e branco de um adulto ao lado do berço de hospital onde uma criança está deitada',
  },
  'doenca-falciforme-tratamento-e-acompanhamento-no-sus': {
    src: '/img/artigo-doenca-falciforme-tratamento-e-acompanhamento-no-sus.webp',
    alt: 'Bolsa de sangue pendurada com o tubo de transfusão e a etiqueta de identificação',
  },
  'hantavirose-sintomas-e-quando-ir-ao-hospital': {
    src: '/img/artigo-hantavirose-sintomas.webp',
    alt: 'Dois médicos de jaleco examinando uma radiografia de tórax ao lado de um paciente deitado na maca',
  },
  'hantavirose-como-se-transmite-e-como-prevenir': {
    src: '/img/artigo-hantavirose-transmissao.webp',
    alt: 'Rato silvestre de pelo castanho caminhando sobre folhas secas e terra',
  },
  'elefantiase-sintomas-e-quando-procurar-ajuda': {
    src: '/img/artigo-elefantiase-sintomas.webp',
    alt: 'Mãos segurando e apalpando a panturrilha de uma perna para avaliar o inchaço',
  },
  'elefantiase-como-se-transmite-e-como-prevenir': {
    src: '/img/artigo-elefantiase-transmissao.webp',
    alt: 'Mosquito pousado sobre a pele humana, visto de perto',
  },
  'leishmaniose-sintomas-e-quando-procurar-ajuda': {
    src: '/img/artigo-leishmaniose-sintomas.webp',
    alt: 'Mão com pequenas feridas de pele já cicatrizando',
  },
  'leishmaniose-como-se-transmite-e-como-prevenir': {
    src: '/img/artigo-leishmaniose-prevencao.webp',
    alt: 'Janela de casa com cortinas claras nas laterais e a folha da janela fechada',
  },
  'esquistossomose-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-esquistossomose-sintomas-e-quando-procurar-atendimento.webp',
    alt: 'Médico medindo a pulsação de um paciente sentado na maca',
  },
  'tracoma-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-tracoma-sintomas-e-quando-procurar-atendimento.webp',
    alt: 'Menina apoiada em aparelho de exame ocular',
  },
  'tracoma-como-se-transmite-e-como-prevenir': {
    src: '/img/artigo-tracoma-como-se-transmite-e-como-prevenir.webp',
    alt: 'Médica examinando a garganta de uma criança com lanterna',
  },
  'tracoma-tratamento-e-cirurgia': {
    src: '/img/artigo-tracoma-tratamento-e-cirurgia.webp',
    alt: 'Pessoa apoiada em lâmpada de fenda durante exame ocular',
  },
  'tracoma-pode-causar-cegueira': {
    src: '/img/artigo-tracoma-pode-causar-cegueira.webp',
    alt: 'Close do olho de uma pessoa idosa',
  },
  'helmintiases-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-helmintiases-sintomas-e-quando-procurar-atendimento.webp',
    alt: 'Médica de luvas azuis ausculta o tórax de um paciente com estetoscópio',
  },
  'helmintiases-como-se-transmite-e-como-prevenir': {
    src: '/img/artigo-helmintiases-como-se-transmite-e-como-prevenir.webp',
    alt: 'Adulto e criança lavam as mãos juntos sob a torneira da pia',
  },
  'cisticercose-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-cisticercose-sintomas-e-quando-procurar-atendimento.webp',
    alt: 'Médico examina o olho de uma criança com um oftalmoscópio portátil',
  },
  'cisticercose-como-se-transmite-e-como-prevenir': {
    src: '/img/artigo-cisticercose-como-se-transmite-e-como-prevenir.webp',
    alt: 'Cortes de carne suína crua sobre tábua de madeira ao lado de uma faca',
  },
  'espondilose-lombar-sintomas-e-quando-procurar-atendimento': {
    src: '/img/artigo-espondilose-lombar-sintomas-e-quando-procurar-atendimento.webp',
    alt: 'Médico conversando com uma paciente enquanto segura um prontuário',
  },
  'espondilose-lombar-exercicios-e-cuidados-no-dia-a-dia': {
    src: '/img/artigo-espondilose-lombar-exercicios-e-cuidados-no-dia-a-dia.webp',
    alt: 'Casal de idosos caminhando de costas por uma alameda arborizada de parque, ao lado de um lago',
  },
  'cancer-do-colo-do-utero-sintomas-e-sinais-de-alerta': {
    src: '/img/artigo-cancer-do-colo-do-utero-sintomas-e-sinais-de-alerta.webp',
    alt: 'Profissional de saúde medindo a pressão arterial de uma paciente numa consulta',
  },
  'cancer-do-colo-do-utero-hpv-vacina-e-rastreamento': {
    src: '/img/artigo-cancer-do-colo-do-utero-hpv-vacina-e-rastreamento.webp',
    alt: 'Frascos de vacina enfileirados em uma bandeja',
  },
  'depressao-sintomas-e-quando-procurar-ajuda': {
    src: '/img/artigo-depressao-sintomas-e-quando-procurar-ajuda.webp',
    alt: 'Mulher de óculos reclinada no sofá, com o rosto cansado',
  },
  'depressao-tratamento-e-como-ajudar-alguem': {
    src: '/img/artigo-depressao-tratamento-e-como-ajudar-alguem.webp',
    alt: 'Amigos reunidos à mesa compartilhando uma refeição',
  },
  'doenca-arterial-coronariana-sintomas-e-sinais-de-infarto': {
    src: '/img/artigo-doenca-arterial-coronariana-sintomas-e-sinais-de-infarto.webp',
    alt: 'Traçado de eletrocardiograma impresso em papel',
  },
  'doenca-arterial-coronariana-como-prevenir-e-controlar': {
    src: '/img/artigo-doenca-arterial-coronariana-como-prevenir-e-controlar.webp',
    alt: 'Salada de alface com tomate-cereja, pepino e cebola-roxa em uma tigela, vista de cima sobre mesa de madeira',
  },
  'ascaridiase-como-saber-se-a-crianca-tem-lombriga': {
    src: '/img/artigo-ascaridiase-como-saber-se-a-crianca-tem-lombriga.webp',
    alt: 'Mãe com a mão na testa de uma criança deitada no sofá, coberta por um cobertor branco',
  },
  'ascaridiase-quando-a-lombriga-sai-do-intestino': {
    src: '/img/artigo-ascaridiase-quando-a-lombriga-sai-do-intestino.webp',
    alt: 'Médico ausculta o tórax de um menino em uma sala de atendimento, com a mãe sentada ao lado',
  },
  'ascaridiase-como-prevenir-em-casa': {
    src: '/img/artigo-ascaridiase-como-prevenir-em-casa.webp',
    alt: 'Mãos com espuma de sabão sendo esfregadas sob a água corrente de uma torneira',
  },
  'ascaridiase-tratamento-periodico-de-vermifugos': {
    src: '/img/artigo-ascaridiase-tratamento-periodico-de-vermifugos.webp',
    alt: 'Mão segurando um comprimido branco contra um fundo amarelo',
  },
  'ascaridiase-lombriga-passa-de-pessoa-para-pessoa': {
    src: '/img/artigo-ascaridiase-lombriga-passa-de-pessoa-para-pessoa.webp',
    alt: 'Família reunida em um quintal gramado, com uma mesa posta ao fundo',
  },
  'raiva-mordida-de-animal-quando-procurar-atendimento': {
    src: '/img/artigo-raiva-mordida-de-animal-quando-procurar-atendimento.webp',
    alt: 'Cão de focinho claro encostando o nariz na mão de uma pessoa',
  },
  'raiva-quais-animais-transmitem-no-brasil': {
    src: '/img/artigo-raiva-quais-animais-transmitem-no-brasil.webp',
    alt: 'Morcego de pelo escuro pousado em uma superfície de pedra',
  },
  'raiva-vacina-antirrabica-esquema-e-seguranca': {
    src: '/img/artigo-raiva-vacina-antirrabica-esquema-e-seguranca.webp',
    alt: 'Profissional com luvas verdes segurando o braço de uma pessoa para a aplicação da vacina',
  },
  'raiva-profilaxia-pos-exposicao-soro-e-vacina': {
    src: '/img/artigo-raiva-profilaxia-pos-exposicao-soro-e-vacina.webp',
    alt: 'Mãos enrolando uma faixa de gaze branca no braço de uma pessoa',
  },
  'raiva-como-prevenir-vacinacao-de-caes-e-gatos': {
    src: '/img/artigo-raiva-como-prevenir-vacinacao-de-caes-e-gatos.webp',
    alt: 'Veterinário com seringa ao lado de um cão segurado por um voluntário de camiseta azul',
  },
  'helicobacter-pylori-sintomas-e-quando-investigar': {
    src: '/img/artigo-helicobacter-pylori-sintomas-e-quando-investigar.webp',
    alt: 'Mulher de blusa rosa com as mãos sobre a parte alta da barriga, em fundo claro',
  },
  'helicobacter-pylori-transmissao-e-prevencao': {
    src: '/img/artigo-helicobacter-pylori-transmissao-e-prevencao.webp',
    alt: 'Mãos cobertas de espuma sendo lavadas sob a torneira de uma pia de aço',
  },
  'helicobacter-pylori-tratamento-e-erradicacao': {
    src: '/img/artigo-helicobacter-pylori-tratamento-e-erradicacao.webp',
    alt: 'Mão de uma pessoa idosa segurando um comprimido branco perto da boca',
  },
  'helicobacter-pylori-gastrite-atrofica-e-cancer-gastrico': {
    src: '/img/artigo-helicobacter-pylori-gastrite-atrofica-e-cancer-gastrico.webp',
    alt: 'Dois profissionais de saúde de avental cirúrgico e máscara durante um procedimento',
  },
  'helicobacter-pylori-alimentacao-durante-o-tratamento': {
    src: '/img/artigo-helicobacter-pylori-alimentacao-durante-o-tratamento.webp',
    alt: 'Prato com batata doce assada, couve flor, tomate, feijão e limão sobre uma mesa roxa',
  },
  'shigelose-e-diarreia-como-diferenciar': {
    src: '/img/artigo-shigelose-e-diarreia-como-diferenciar.webp',
    alt: 'Rolo de papel higiênico preso a um suporte de metal na parede clara do banheiro',
  },
  'shigelose-exame-de-fezes-e-coprocultura': {
    src: '/img/artigo-shigelose-exame-de-fezes-e-coprocultura.webp',
    alt: 'Tubos de ensaio com etiquetas de identificação enfileirados em uma gradela de laboratório',
  },
  'shigelose-por-que-nao-parar-a-diarreia': {
    src: '/img/artigo-shigelose-por-que-nao-parar-a-diarreia.webp',
    alt: 'Cartelas de comprimidos e cápsulas de cores diferentes espalhadas sobre uma superfície branca',
  },
  'shigelose-como-se-transmite-e-como-prevenir-em-casa': {
    src: '/img/artigo-shigelose-como-se-transmite-e-como-prevenir-em-casa.webp',
    alt: 'Mãos lavando folhas de alface sob a água corrente da torneira, com legumes na bancada ao lado',
  },
  'shigelose-em-criancas-febre-alta-sem-diarreia': {
    src: '/img/artigo-shigelose-em-criancas-febre-alta-sem-diarreia.webp',
    alt: 'Menina deitada na cama com um termômetro na boca e a mão sobre a testa',
  },
  'coqueluche-tosse-noturna-que-passa-por-resfriado': {
    src: '/img/artigo-coqueluche-tosse-noturna-que-passa-por-resfriado.webp',
    alt: 'Menina de cabelos ruivos deitada na cama segurando um lenço de papel sobre o rosto',
  },
  'amebiase-diarreia-com-sangue-quando-investigar': {
    src: '/img/artigo-amebiase-diarreia-com-sangue-quando-investigar.webp',
    alt: 'Mulher sentada na beira da cama com as mãos sobre o abdome, com expressão de desconforto',
  },
  'amebiase-agua-alimentos-e-prevencao': {
    src: '/img/artigo-amebiase-agua-alimentos-e-prevencao.webp',
    alt: 'Mãos lavando folhas de alface sob a água corrente da torneira',
  },
  'giardiase-diarreia-que-nao-passa-exame-de-fezes': {
    src: '/img/artigo-giardiase-diarreia-que-nao-passa-exame-de-fezes.webp',
    alt: 'Profissional de laboratório com luvas preparando uma lâmina para exame ao microscópio',
  },
  'giardiase-em-criancas-creche-e-reinfeccao': {
    src: '/img/artigo-giardiase-em-criancas-creche-e-reinfeccao.webp',
    alt: 'Duas crianças brincando com blocos de montar no chão de uma sala de creche',
  },
  'ancilostomiase-anemia-por-verme': {
    src: '/img/artigo-ancilostomiase-anemia-por-verme.webp',
    alt: 'Profissional de saúde coletando sangue do braço de um paciente com luvas descartáveis',
  },
  'ancilostomiase-andar-descalco-e-solo-contaminado': {
    src: '/img/artigo-ancilostomiase-andar-descalco-e-solo-contaminado.webp',
    alt: 'Pés descalços sobre terra escura e úmida',
  },
  'tricuriase-em-criancas-diarreia-persistente': {
    src: '/img/artigo-tricuriase-em-criancas-diarreia-persistente.webp',
    alt: 'Menino sentado com um rolo de papel nas mãos, com expressão abatida',
  },
  'tricuriase-saneamento-e-tratamento-periodico': {
    src: '/img/artigo-tricuriase-saneamento-e-tratamento-periodico.webp',
    alt: 'Vista aérea dos tanques circulares de uma estação de tratamento de água entre árvores',
  },
  'oxiuriase-criancas-coceira-noturna': {
    src: '/img/artigo-oxiuriase-criancas-coceira-noturna.webp',
    alt: 'Menina dormindo em uma cama de lençóis brancos com o abajur aceso ao lado',
  },
  'oxiuriase-tratar-a-familia-e-limpeza-da-casa': {
    src: '/img/artigo-oxiuriase-tratar-a-familia-e-limpeza-da-casa.webp',
    alt: 'Mãos colocando roupa de cama limpa em um travesseiro',
  },
  'oxiuriase-ou-ascaridiase-como-diferenciar': {
    src: '/img/artigo-oxiuriase-ou-ascaridiase-como-diferenciar.webp',
    alt: 'Médica de jaleco branco examinando uma menina com estetoscópio em um consultório',
  },
  'hidatidose-cisto-descoberto-no-exame': {
    src: '/img/artigo-hidatidose-cisto-descoberto-no-exame.webp',
    alt: 'Profissional de jaleco branco aplicando um transdutor de ultrassom no abdome de uma paciente, com o monitor exibindo a imagem ao fundo',
  },
  'hidatidose-caes-ovinos-e-hortas': {
    src: '/img/artigo-hidatidose-caes-ovinos-e-hortas.webp',
    alt: 'Grupo de ovelhas pastando em um campo com vegetação alta diante de uma casa de madeira antiga e árvores',
  },
  'febre-amarela-vacina-para-quem-vai-viajar': {
    src: '/img/artigo-febre-amarela-vacina-para-quem-vai-viajar.webp',
    alt: 'Mãos com luvas azuis aplicam uma injeção no braço de uma pessoa de camiseta lilás',
  },
  'febre-amarela-forma-grave-sinais-de-alarme': {
    src: '/img/artigo-febre-amarela-forma-grave-sinais-de-alarme.webp',
    alt: 'Enfermaria de hospital com camas vazias, frascos de soro e equipamentos ao lado de cada leito',
  },
  'varicela-crianca-pode-voltar-a-escola': {
    src: '/img/artigo-varicela-crianca-pode-voltar-a-escola.webp',
    alt: 'Crianças sentadas em carteiras escolares durante uma aula',
  },
  'varicela-em-adultos-e-gestantes': {
    src: '/img/artigo-varicela-em-adultos-e-gestantes.webp',
    alt: 'Gestante de vestido verde claro em pé ao ar livre, com as mãos sobre a barriga',
  },
  'sarampo-sintomas-e-manchas-como-reconhecer': {
    src: '/img/artigo-sarampo-sintomas-e-manchas-como-reconhecer.webp',
    alt: 'Mulher de máscara mede a temperatura do filho com um termômetro infravermelho no sofá de casa',
  },
  'sarampo-vacina-e-bloqueio-em-surtos': {
    src: '/img/artigo-sarampo-vacina-e-bloqueio-em-surtos.webp',
    alt: 'Mãos com luvas verdes seguram o braço de uma pessoa durante um atendimento',
  },
  'tetano-ferimento-e-vacina-quando-procurar': {
    src: '/img/artigo-tetano-ferimento-e-vacina-quando-procurar.webp',
    alt: 'Duas pessoas enrolam gaze branca na mão de um homem',
  },
  'tetano-sintomas-e-tratamento': {
    src: '/img/artigo-tetano-sintomas-e-tratamento.webp',
    alt: 'Leito de unidade de terapia intensiva com monitor cardíaco, respirador e cortinas ao lado',
  },
  'meningite-meningococica-sintomas-e-sinais-de-alerta': {
    src: '/img/artigo-meningite-meningococica-sintomas-e-sinais-de-alerta.webp',
    alt: 'Médica de jaleco branco com estetoscópio vermelho examina uma criança de costas',
  },
  'meningite-meningococica-vacina-e-contatos': {
    src: '/img/artigo-meningite-meningococica-vacina-e-contatos.webp',
    alt: 'Profissional de saúde de jaleco branco segura uma seringa com a agulha para cima',
  },
  'osteoporose-sem-sintomas-quando-fazer-densitometria': {
    src: '/img/artigo-osteoporose-sem-sintomas-quando-fazer-densitometria.webp',
    alt: 'Paciente deitada na maca de um aparelho de imagem enquanto o técnico ajusta o equipamento',
  },
  'osteoporose-primeira-fratura-e-o-risco-de-outra': {
    src: '/img/artigo-osteoporose-primeira-fratura-e-o-risco-de-outra.webp',
    alt: 'Pessoa com o antebraço imobilizado em tipoia azul e o punho envolvido em atadura branca',
  },
  'osteoporose-calcio-vitamina-d-e-alimentacao': {
    src: '/img/artigo-osteoporose-calcio-vitamina-d-e-alimentacao.webp',
    alt: 'Tigelas de vidro com iogurte coberto por morangos picados sobre uma bancada',
  },
  'osteoporose-coluna-curva-e-perda-de-altura': {
    src: '/img/artigo-osteoporose-coluna-curva-e-perda-de-altura.webp',
    alt: 'Vista de costas de uma mulher idosa de cabelos brancos com as mãos na nuca',
  },
  'osteoporose-mitos-e-verdades-sobre-os-ossos': {
    src: '/img/artigo-osteoporose-mitos-e-verdades-sobre-os-ossos.webp',
    alt: 'Mulher idosa em uma área verde fazendo exercício com faixa elástica nos braços',
  },
  'refluxo-dor-no-peito-refluxo-ou-infarto': {
    src: '/img/artigo-refluxo-dor-no-peito-refluxo-ou-infarto.webp',
    alt: 'Homem de camisa azul sentado em um sofá com as duas mãos sobre o peito',
  },
  'refluxo-omeprazol-por-conta-propria': {
    src: '/img/artigo-refluxo-omeprazol-por-conta-propria.webp',
    alt: 'Frasco de vidro com comprimidos brancos ao lado de um copo de água sobre a mesa de cabeceira',
  },
  'refluxo-alimentos-que-pioram-a-azia': {
    src: '/img/artigo-refluxo-alimentos-que-pioram-a-azia.webp',
    alt: 'Copo de café ao lado de salgados fritos sobre uma mesa de madeira',
  },
  'refluxo-como-dormir-melhor-com-azia': {
    src: '/img/artigo-refluxo-como-dormir-melhor-com-azia.webp',
    alt: 'Pessoa deitada na cama à noite, acordada, com o lençol cobrindo o peito',
  },
  'refluxo-barrett-e-risco-de-cancer': {
    src: '/img/artigo-refluxo-barrett-e-risco-de-cancer.webp',
    alt: 'Médica de jaleco branco conversando com um paciente idoso em um consultório',
  },
  'trombose-venosa-profunda-perna-inchada-e-emergencia': {
    src: '/img/artigo-trombose-venosa-profunda-perna-inchada-e-emergencia.webp',
    alt: 'Pessoa deitada em maca hospitalar com a perna estendida e um curativo na panturrilha',
  },
  'trombose-venosa-profunda-quando-o-risco-aumenta': {
    src: '/img/artigo-trombose-venosa-profunda-quando-o-risco-aumenta.webp',
    alt: 'Passageiros sentados em poltronas de avião durante a viagem',
  },
  'lupus-eritematoso-sistemico-gravidez': {
    src: '/img/artigo-lupus-eritematoso-sistemico-gravidez.webp',
    alt: 'Gestante de vestido terracota com a mão apoiada na barriga, em pé ao ar livre',
  },
  'lupus-eritematoso-sistemico-tratamento-e-medicamentos': {
    src: '/img/artigo-lupus-eritematoso-sistemico-tratamento-e-medicamentos.webp',
    alt: 'Cartelas de comprimidos e cápsulas sobre uma mesa de madeira',
  },
  'lupus-eritematoso-sistemico-primeiros-sinais': {
    src: '/img/artigo-lupus-eritematoso-sistemico-primeiros-sinais.webp',
    alt: 'Pessoa de camiseta roxa pressionando o punho com a outra mão',
  },
  'lupus-eritematoso-sistemico-sem-mancha-no-rosto': {
    src: '/img/artigo-lupus-eritematoso-sistemico-sem-mancha-no-rosto.webp',
    alt: 'Rosto de mulher em close, olhando para o lado',
  },
  'lupus-eritematoso-sistemico-nao-e-contagioso': {
    src: '/img/artigo-lupus-eritematoso-sistemico-nao-e-contagioso.webp',
    alt: 'Duas mulheres conversando de perto ao ar livre',
  },
  'hiperplasia-prostatica-benigna-quando-a-urina-nao-sai': {
    src: '/img/artigo-hiperplasia-prostatica-benigna-quando-a-urina-nao-sai.webp',
    alt: 'Homem idoso de avental hospitalar com cateter nasal, sentado na cama',
  },
  'hiperplasia-prostatica-benigna-cirurgia-rtu': {
    src: '/img/artigo-hiperplasia-prostatica-benigna-cirurgia-rtu.webp',
    alt: 'Cirurgião de avental estéril e luvas em sala de operação',
  },
  'hiperplasia-prostatica-benigna-vida-sexual-apos-cirurgia': {
    src: '/img/artigo-hiperplasia-prostatica-benigna-vida-sexual-apos-cirurgia.webp',
    alt: 'Casal de idosos sentados juntos, o homem sorrindo e a mulher inclinada na direção dele',
  },
  'hiperplasia-prostatica-benigna-tem-cura': {
    src: '/img/artigo-hiperplasia-prostatica-benigna-tem-cura.webp',
    alt: 'Médica de estetoscópio conversando com um paciente idoso em um consultório',
  },
  'hiperplasia-prostatica-benigna-nodulo-e-calcificacao': {
    src: '/img/artigo-hiperplasia-prostatica-benigna-nodulo-e-calcificacao.webp',
    alt: 'Médico fazendo ultrassonografia em uma paciente deitada na maca, com o monitor ao lado',
  },
};

export const topicImages: Record<string, SiteImage> = {
  'doencas-infecciosas': {
    src: '/img/tema-infecciosas.webp',
    alt: 'Profissional de saúde com máscara e óculos de proteção',
  },
  prevencao: {
    src: '/img/tema-prevencao.webp',
    alt: 'Mãos cobertas de espuma sendo lavadas sob a torneira',
  },
  'doencas-cronicas': {
    src: '/img/tema-cronicas.webp',
    alt: 'Comprimidos redondos espalhados sobre superfície clara',
  },
  'saude-infantil': {
    src: '/img/tema-infantil.webp',
    alt: 'Bebê de chapéu alcançando folhas verdes no colo de um adulto',
  },
  'saude-da-mulher': {
    src: '/img/tema-mulher.webp',
    alt: 'Gestante apoiada em uma parede com as mãos sobre a barriga',
  },
};

/**
 * Article photographs that are covered too: the ones taken inside an operating
 * room. Everything else in `articleImages` is a room, a hand, a plate of food or
 * a test tube, and is shown as it is.
 */
const surgicalArticleImages = new Set([
  'catarata-tratamento-e-cirurgia',
  'insuficiencia-cardiaca-transplante-cardiaco',
  'hiperplasia-prostatica-benigna-cirurgia-rtu',
]);

/**
 * Resolve by slug with a deliberate fallback. A missing picture must degrade
 * to the halftone placeholder rather than throwing at build time, because a
 * new content entry should never be blocked on an image.
 *
 * The file is the same in both languages; only the caption changes. A slug with
 * no Chinese caption keeps its Portuguese one, which reads as unfinished in a
 * Chinese page and is reported by `scripts/check-i18n.mjs`.
 */
const withAlt = (image: SiteImage | undefined, slug: string, lang: Locale): SiteImage | undefined =>
  image && lang !== 'pt-BR' && zhImageAlts[slug] ? { src: image.src, alt: zhImageAlts[slug] } : image;

/**
 * A disease plate is always covered.
 *
 * Every plate is a clinical illustration: a cross-section with vessels and
 * blood, a sign in the inset, a row of symptom badges. Which of those a reader
 * wants to meet unasked is not a judgement the resolver should make per file, so
 * it makes none: the flag is set here, once, and the templates only read it.
 * That also means a new plate cannot be published uncovered by forgetfulness.
 */
export const imageForDisease = (slug: string, lang: Locale): SiteImage | undefined => {
  const image = withAlt(diseaseImages[slug], slug, lang);
  return image ? { ...image, sensitive: true } : undefined;
};

export const imageForArticle = (slug: string, lang: Locale): SiteImage | undefined => {
  const image = withAlt(articleImages[slug], slug, lang);
  return image && surgicalArticleImages.has(slug) ? { ...image, sensitive: true } : image;
};

export const imageForTopic = (slug: string, lang: Locale): SiteImage | undefined =>
  withAlt(topicImages[slug], slug, lang);
