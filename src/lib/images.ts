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
}
/**
 * Illustrated plates, not photographs. Each one shows the mechanism of the
 * disease in cross-section, a clinical sign in the inset at the upper right and
 * the main symptoms as a row of circular badges at the bottom. The captions
 * inside the artwork are in Portuguese, so the picture is the same in both
 * languages and only the `alt` changes.
 */
export const diseaseImages: Record<string, SiteImage> = {
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
};

export const articleImages: Record<string, SiteImage> = {
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
  'diabetes-tipo-2-o-que-muda-no-dia-a-dia': {
    src: '/img/artigo-diabetes-dia-a-dia.webp',
    alt: 'Medidor de glicose sobre uma mesa branca com a tira de teste encaixada',
  },
  'hipertensao-como-medir-a-pressao-em-casa': {
    src: '/img/artigo-medir-pressao.webp',
    alt: 'Esfigmomanômetro com mostrador redondo e braçadeira sobre fundo claro',
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

export const imageForDisease = (slug: string, lang: Locale): SiteImage | undefined =>
  withAlt(diseaseImages[slug], slug, lang);

export const imageForArticle = (slug: string, lang: Locale): SiteImage | undefined =>
  withAlt(articleImages[slug], slug, lang);

export const imageForTopic = (slug: string, lang: Locale): SiteImage | undefined =>
  withAlt(topicImages[slug], slug, lang);
