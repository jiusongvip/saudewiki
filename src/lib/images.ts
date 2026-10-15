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
export const diseaseImages: Record<string, SiteImage> = {
  dengue: {
    src: '/img/doenca-dengue.webp',
    alt: 'Mosquito Aedes aegypti pousado sobre a pele humana',
  },
  diabetes: {
    src: '/img/doenca-diabetes.webp',
    alt: 'Glicosímetro com tira de teste, caneta de insulina e comprimidos sobre fundo branco',
  },
  hipertensao: {
    src: '/img/doenca-hipertensao.webp',
    alt: 'Aparelho digital de medir pressão com a braçadeira ao lado',
  },
  chikungunya: {
    src: '/img/doenca-chikungunya.webp',
    alt: 'Fisioterapeuta aplicando massagem no ombro de um paciente',
  },
  zika: {
    src: '/img/doenca-zika.webp',
    alt: 'Mãos de adulto segurando os pés de um bebê',
  },
  malaria: {
    src: '/img/doenca-malaria.webp',
    alt: 'Mosquito pousado sobre folhas verdes',
  },
  tuberculose: {
    src: '/img/doenca-tuberculose.webp',
    alt: 'Mãos segurando uma caixa de máscara respiratória',
  },
  'hiv-aids': {
    src: '/img/doenca-hiv-aids.webp',
    alt: 'Microscópio de laboratório com as lentes objetivas em primeiro plano',
  },
  'hepatites-virais': {
    src: '/img/doenca-hepatites.webp',
    alt: 'Painel de parede com esfigmomanômetro e instrumentos clínicos',
  },
  'asma-e-dpoc': {
    src: '/img/doenca-asma-dpoc.webp',
    alt: 'Inalador azul de dose medida sobre uma superfície clara',
  },
  'infarto-e-avc': {
    src: '/img/doenca-infarto-avc.webp',
    alt: 'Estetoscópio e óculos sobre um traçado de eletrocardiograma',
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
  'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro': {
    src: '/img/artigo-dpoc-tabagismo.webp',
    alt: 'Cigarros apagados sobre cédulas de dinheiro',
  },
  'infarto-quais-sao-os-sinais-e-o-que-fazer': {
    src: '/img/artigo-infarto-sinais.webp',
    alt: 'Traçado de eletrocardiograma impresso em papel',
  },
  'avc-como-reconhecer-os-sinais-e-agir-rapido': {
    src: '/img/artigo-avc-sinais.webp',
    alt: 'Estetoscópio sobre uma superfície branca',
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
