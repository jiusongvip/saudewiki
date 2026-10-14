/**
 * Photograph captions in Traditional Chinese, keyed exactly like the Portuguese
 * ones in `lib/images.ts`.
 *
 * The `src` never changes between languages: the same file is shown, only the
 * description a screen reader reads is localised. An entry missing here falls
 * back to the Portuguese alt, which is wrong enough to be noticed rather than
 * silently blank — `scripts/check-i18n.mjs` reports it.
 *
 * No dashes of any kind: the preflight gate rejects them in `alt` attributes.
 */
export const zhImageAlts: Record<string, string> = {
  dengue: '埃及斑蚊停在人類皮膚上',
  diabetes: '血糖機、試紙、胰島素筆與藥錠擺在白色背景上',
  hipertensao: '數位血壓計與袖帶擺在一起',
  chikungunya: '物理治療師為患者的肩膀按摩',
  zika: '成人雙手握著嬰兒的雙腳',
  malaria: '蚊子停在綠葉上',
  tuberculose: '雙手捧著一盒防護口罩',
  'hiv-aids': '實驗室顯微鏡，物鏡在畫面前景',
  'hepatites-virais': '牆面板上掛著血壓計與臨床器械',
  'asma-e-dpoc': '藍色定量吸入器放在淺色檯面上',
  'infarto-e-avc': '聽診器與眼鏡放在心電圖圖紙上',

  'sintomas-iniciais-da-dengue': '深色表面上蚊子的近距離特寫',
  'como-prevenir-a-dengue': '蚊子停在葉片與細枝之間',
  'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue': '醫療專業人員檢查患者的手臂',
  'diabetes-tipo-2-o-que-muda-no-dia-a-dia': '血糖機放在白色桌面上，已插入試紙',
  'hipertensao-como-medir-a-pressao-em-casa': '圓形錶盤的血壓計與袖帶放在淺色背景上',
  'vacinacao-o-que-e-o-calendario-basico': '手握注射器針筒，旁邊放著疫苗瓶',
  'chikungunya-dor-nas-articulacoes-quanto-tempo-dura': '白色檯面上的藥錠與數位體溫計',
  'chikungunya-e-dengue-como-diferenciar': '綠葉上蚊子的近距離特寫',
  'zika-na-gestacao-o-que-a-infeccao-pode-causar': '男子雙手放在孕婦的腹部上',
  'zika-como-se-proteger-em-areas-com-transmissao': '逆著天空拍攝的長腿蚊子',
  'malaria-sintomas-e-quando-buscar-atendimento': '數位體溫計擱在格紋布上',
  'malaria-como-se-prevenir-em-viagens-para-a-amazonia': '蚊子停在一片葉子上',
  'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta': '戴著防護口罩的人',
  'tuberculose-o-tratamento-tem-cura-e-e-gratuito': '淺色背景上散落的膠囊與藥錠',
  'hiv-o-que-fazer-nas-primeiras-72-horas': '注射器針筒放在金屬托盤上',
  'indetectavel-intransmissivel-o-que-significa': '醫療專業人員戴藍手套站在顯微鏡旁',
  'hepatites-virais-quais-tem-vacina': '疫苗瓶在托盤上排成一排',
  'hepatite-c-tem-cura': '淺色背景上粉色與白色的膠囊',
  'asma-crise-o-que-fazer-enquanto-espera-atendimento': '急救中後門敞開的救護車',
  'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro': '擱在紙鈔上已熄滅的香煙',
  'infarto-quais-sao-os-sinais-e-o-que-fazer': '印在心電圖紙上的波形',
  'avc-como-reconhecer-os-sinais-e-agir-rapido': '白色檯面上的聽診器',

  'doencas-infecciosas': '戴口罩與防護鏡的醫療專業人員',
  prevencao: '在水龍頭下用泡沫洗手的雙手',
  'doencas-cronicas': '淺色檯面上散落的圓形藥錠',
  'saude-infantil': '戴帽嬰兒在大人腿上伸手碰綠葉',
  'saude-da-mulher': '孕婦靠著牆，雙手放在腹部上',
};
