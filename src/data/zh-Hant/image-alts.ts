/**
 * Image captions in Traditional Chinese, keyed exactly like the Portuguese
 * ones in `lib/images.ts`.
 *
 * The `src` never changes between languages: the same file is shown, only the
 * description a screen reader reads is localised. An entry missing here falls
 * back to the Portuguese alt, which is wrong enough to be noticed rather than
 * silently blank — `scripts/check-i18n.mjs` reports it.
 *
 * The disease plates carry their own Portuguese labels inside the artwork, so
 * the caption names what is drawn rather than quoting those labels.
 *
 * No dashes of any kind: the preflight gate rejects them in `alt` attributes.
 */
export const zhImageAlts: Record<string, string> = {
  dengue: '醫學插畫：埃及斑蚊叮入人體皮膚並把病毒釋放到血管中，右上角是長滿紅疹的手肘，下方四個圓形圖示為高燒、皮疹、出血與肌肉痛',
  diabetes: '醫學插畫：胰臟把胰島素釋放到佈滿葡萄糖結晶的血管中，右上角是腳底的慢性潰瘍，下方圖示為口乾、視力模糊、腳部刺痛與疲倦',
  hipertensao: '醫學插畫：動脈管壁變厚、管腔變窄，血流在壓力下擠壓血管，旁邊是綁著血壓計袖帶的手臂，下方圖示為頭痛、心悸、視力模糊與耳鳴',
  chikungunya: '醫學插畫：切開的膝關節滑膜紅腫並帶有病毒顆粒，左上角有一隻叮咬的斑蚊，右上角是腫痛的雙手，下方圖示為高燒、關節痛、皮疹與結膜炎',
  zika: '醫學插畫：斑蚊叮入皮膚後把藍色病毒顆粒釋放到血流中，右上角是孕婦把雙手放在腹部，下方圖示為皮疹、結膜炎、低燒與搔癢',
  malaria: '醫學插畫：瘧蚊把子孢子注入血管，受感染的紅血球破裂，右上角是蓋著毯子發抖的病人，下方圖示為週期性發燒、盜汗、眼睛發黃與頭痛',
  tuberculose: '醫學插畫：切開的肺臟上葉有乾酪樣空洞與桿菌，右上角是用紙巾捂嘴咳嗽、紙巾上帶有血絲的人，下方圖示為久咳、午後發燒、夜間盜汗與體重減輕',
  'hiv-aids': '醫學插畫：愛滋病毒附著在免疫細胞的 CD4 接受器上，右上角是戴藍色手套的手拿著快速檢測片與指尖的一滴血，下方圖示為發燒、淋巴結腫大、體重下降與夜間盜汗',
  'hepatites-virais': '醫學插畫：切開的肝臟有發炎區域、病毒顆粒與下方的膽囊，右上角是鞏膜發黃的眼睛，下方圖示為疲倦、腹部疼痛、尿色變深與淺色糞便',
  asma: '醫學插畫：兩條支氣管的對照剖面，左側管腔通暢、氣流順行，右側收縮紅腫並堆滿黃色黏液，右上角是使用附間隔器吸入器的人，下方圖示為喘鳴、胸悶、咳嗽與夜間加重',
  dpoc: '醫學插畫：切開的肺臟對照健康的肺泡與被肺氣腫破壞的空腔，左上角是一支冒煙的香煙，右上角是彎腰喘氣的長者，下方圖示為吸菸、空氣滯留、咳痰與逐漸惡化',
  'infarto-e-avc': '醫學插畫：切開的心臟冠狀動脈被斑塊與血塊堵塞，同一段血管延伸到腦部並在那裡形成阻塞，右上角是按住胸口的病人，下方圖示為胸痛、口角下垂、單側無力與把握時間',
  'faringite-e-amigdalite': '醫學插畫：頭部與頸部的側面剖面，扁桃腺紅腫並帶有白色膿斑，右上角是用壓舌板張開的口腔，下方圖示為吞嚥疼痛、發燒、淋巴結腫大與畏寒',
  gastroenterite: '醫學插畫：切開的胃與小腸黏膜紅腫，病毒附在絨毛上，液體流入腸腔，右上角是母親用湯匙餵幼兒口服補液鹽，下方圖示為腹瀉、嘔吐、腹絞痛與口乾',

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
  'asma-sintomas-e-sinais-de-alerta': '米色背景上的人類肺部解剖插圖',
  'asma-diagnostico-e-exames': '醫師雙臂交疊，手中握著紅色聽診器',
  'asma-tratamento-e-controle': '透明霧化面罩與白色霧化器',
  'asma-como-evitar-crises': '戴著黃色手套打掃的婦女',
  'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro': '擱在紙鈔上已熄滅的香煙',
  'dpoc-sinais-de-alerta-quando-procurar-atendimento': '戴著霧化面罩的小孩',
  'dpoc-como-e-diagnosticada': '在螢幕旁對著肺功能儀器吹氣的人',
  'dpoc-tratamento-e-cuidados': '手中拿著霧化面罩',
  'dpoc-como-prevenir-crises-e-o-papel-das-vacinas': '醫護人員為患者手臂注射疫苗',
  'infarto-quais-sao-os-sinais-e-o-que-fazer': '印在心電圖紙上的波形',
  'avc-como-reconhecer-os-sinais-e-agir-rapido': '白色檯面上的聽診器',
  'infarto-e-avc-fatores-de-risco': '在戶外跑步的女子',
  'infarto-e-avc-como-e-diagnosticado': '淺色房間裡附滑動床的醫學影像設備',
  'infarto-e-avc-tratamento-e-reabilitacao': '在復健室握著平行桿的人，旁邊站著穿白袍的醫護人員，牆上有木製肋木與插畫',
  'faringite-e-amigdalite-sinais-de-alerta': '一名女性把手放在頸部，表情因喉嚨痛而痛苦',
  'faringite-e-amigdalite-como-se-transmite': '一名男性咳嗽時用手遮住口鼻，另一手向前舉起',
  'faringite-e-amigdalite-como-e-diagnosticada': '淺藍色背景上的黑色聽診器',
  'faringite-e-amigdalite-tratamento-e-cuidados': '桌上有一杯熱茶、餅乾與檸檬片',
  'faringite-e-amigdalite-prevencao': '雙手在水龍頭下沖洗',
  'doencas-infecciosas': '戴口罩與防護鏡的醫療專業人員',
  prevencao: '在水龍頭下用泡沫洗手的雙手',
  'doencas-cronicas': '淺色檯面上散落的圓形藥錠',
  'saude-infantil': '戴帽嬰兒在大人腿上伸手碰綠葉',
  'saude-da-mulher': '孕婦靠著牆，雙手放在腹部上',
};
