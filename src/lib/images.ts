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
export interface SiteImage {
  src: string;
  alt: string;
}

export const diseaseImages: Record<string, SiteImage> = {
  dengue: {
    src: '/img/doenca-dengue.jpg',
    alt: 'Mosquito Aedes aegypti pousado sobre a pele humana',
  },
  diabetes: {
    src: '/img/doenca-diabetes.jpg',
    alt: 'Glicosímetro com tira de teste, caneta de insulina e comprimidos sobre fundo branco',
  },
  hipertensao: {
    src: '/img/doenca-hipertensao.jpg',
    alt: 'Aparelho digital de medir pressão com a braçadeira ao lado',
  },
  chikungunya: {
    src: '/img/doenca-chikungunya.jpg',
    alt: 'Fisioterapeuta aplicando massagem no ombro de um paciente',
  },
  zika: {
    src: '/img/doenca-zika.jpg',
    alt: 'Mãos de adulto segurando os pés de um bebê',
  },
  malaria: {
    src: '/img/doenca-malaria.jpg',
    alt: 'Mosquito pousado sobre folhas verdes',
  },
  tuberculose: {
    src: '/img/doenca-tuberculose.jpg',
    alt: 'Mãos segurando uma caixa de máscara respiratória',
  },
  'hiv-aids': {
    src: '/img/doenca-hiv-aids.jpg',
    alt: 'Microscópio de laboratório com as lentes objetivas em primeiro plano',
  },
  'hepatites-virais': {
    src: '/img/doenca-hepatites.jpg',
    alt: 'Painel de parede com esfigmomanômetro e instrumentos clínicos',
  },
  'asma-e-dpoc': {
    src: '/img/doenca-asma-dpoc.jpg',
    alt: 'Inalador azul de dose medida sobre uma superfície clara',
  },
  'infarto-e-avc': {
    src: '/img/doenca-infarto-avc.jpg',
    alt: 'Estetoscópio e óculos sobre um traçado de eletrocardiograma',
  },
};

export const articleImages: Record<string, SiteImage> = {
  'sintomas-iniciais-da-dengue': {
    src: '/img/artigo-sintomas-dengue.jpg',
    alt: 'Mosquito em detalhe sobre uma superfície escura',
  },
  'como-prevenir-a-dengue': {
    src: '/img/artigo-prevenir-dengue.jpg',
    alt: 'Mosquito pousado entre folhas e galhos finos',
  },
  'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue': {
    src: '/img/artigo-atendimento.jpg',
    alt: 'Profissional de saúde examinando o braço de um paciente',
  },
  'diabetes-tipo-2-o-que-muda-no-dia-a-dia': {
    src: '/img/artigo-diabetes-dia-a-dia.jpg',
    alt: 'Medidor de glicose sobre uma mesa branca com a tira de teste encaixada',
  },
  'hipertensao-como-medir-a-pressao-em-casa': {
    src: '/img/artigo-medir-pressao.jpg',
    alt: 'Esfigmomanômetro com mostrador redondo e braçadeira sobre fundo claro',
  },
  'vacinacao-o-que-e-o-calendario-basico': {
    src: '/img/artigo-vacinacao.jpg',
    alt: 'Mão segurando uma seringa com frasco de vacina ao lado',
  },
  'chikungunya-dor-nas-articulacoes-quanto-tempo-dura': {
    src: '/img/artigo-chikungunya-articulacoes.jpg',
    alt: 'Comprimidos e termômetro digital sobre uma superfície branca',
  },
  'chikungunya-e-dengue-como-diferenciar': {
    src: '/img/artigo-chikungunya-dengue.jpg',
    alt: 'Mosquito em detalhe sobre uma folha verde',
  },
  'zika-na-gestacao-o-que-a-infeccao-pode-causar': {
    src: '/img/artigo-zika-gestacao.jpg',
    alt: 'Homem com as mãos sobre a barriga de uma gestante',
  },
  'zika-como-se-proteger-em-areas-com-transmissao': {
    src: '/img/artigo-zika-protecao.jpg',
    alt: 'Mosquito de pernas longas visto contra o céu',
  },
  'malaria-sintomas-e-quando-buscar-atendimento': {
    src: '/img/artigo-malaria-sintomas.jpg',
    alt: 'Termômetro digital apoiado sobre tecido xadrez',
  },
  'malaria-como-se-prevenir-em-viagens-para-a-amazonia': {
    src: '/img/artigo-malaria-prevencao.jpg',
    alt: 'Mosquito pousado sobre uma folha',
  },
  'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta': {
    src: '/img/artigo-tosse-persistente.jpg',
    alt: 'Pessoa usando máscara de proteção respiratória',
  },
  'tuberculose-o-tratamento-tem-cura-e-e-gratuito': {
    src: '/img/artigo-tuberculose-tratamento.jpg',
    alt: 'Cápsulas e comprimidos espalhados sobre fundo claro',
  },
  'hiv-o-que-fazer-nas-primeiras-72-horas': {
    src: '/img/artigo-hiv-72-horas.jpg',
    alt: 'Seringa apoiada sobre uma bandeja metálica',
  },
  'indetectavel-intransmissivel-o-que-significa': {
    src: '/img/artigo-indetectavel.jpg',
    alt: 'Profissional com luvas azuis ao lado de um microscópio de laboratório',
  },
  'hepatites-virais-quais-tem-vacina': {
    src: '/img/artigo-hepatites-vacina.jpg',
    alt: 'Frascos de vacina enfileirados em uma bandeja',
  },
  'hepatite-c-tem-cura': {
    src: '/img/artigo-hepatite-c.jpg',
    alt: 'Cápsulas cor de rosa e brancas sobre fundo claro',
  },
  'asma-crise-o-que-fazer-enquanto-espera-atendimento': {
    src: '/img/artigo-asma-crise.jpg',
    alt: 'Ambulância em atendimento com a porta traseira aberta',
  },
  'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro': {
    src: '/img/artigo-dpoc-tabagismo.jpg',
    alt: 'Cigarros apagados sobre cédulas de dinheiro',
  },
  'infarto-quais-sao-os-sinais-e-o-que-fazer': {
    src: '/img/artigo-infarto-sinais.jpg',
    alt: 'Traçado de eletrocardiograma impresso em papel',
  },
  'avc-como-reconhecer-os-sinais-e-agir-rapido': {
    src: '/img/artigo-avc-sinais.jpg',
    alt: 'Estetoscópio sobre uma superfície branca',
  },
};

export const topicImages: Record<string, SiteImage> = {
  'doencas-infecciosas': {
    src: '/img/tema-infecciosas.jpg',
    alt: 'Profissional de saúde com máscara e óculos de proteção',
  },
  prevencao: {
    src: '/img/tema-prevencao.jpg',
    alt: 'Mãos cobertas de espuma sendo lavadas sob a torneira',
  },
  'doencas-cronicas': {
    src: '/img/tema-cronicas.jpg',
    alt: 'Comprimidos redondos espalhados sobre superfície clara',
  },
  'saude-infantil': {
    src: '/img/tema-infantil.jpg',
    alt: 'Bebê de chapéu alcançando folhas verdes no colo de um adulto',
  },
  'saude-da-mulher': {
    src: '/img/tema-mulher.jpg',
    alt: 'Gestante apoiada em uma parede com as mãos sobre a barriga',
  },
};

/**
 * Resolve by slug with a deliberate fallback. A missing picture must degrade
 * to the halftone placeholder rather than throwing at build time, because a
 * new content entry should never be blocked on an image.
 */
export const imageForDisease = (slug: string): SiteImage | undefined => diseaseImages[slug];
export const imageForArticle = (slug: string): SiteImage | undefined => articleImages[slug];
export const imageForTopic = (slug: string): SiteImage | undefined => topicImages[slug];
