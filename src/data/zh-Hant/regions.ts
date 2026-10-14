import type { LocalizedRegion } from '../../types';

/**
 * Body regions, keyed by slug.
 *
 * A region owns only a name and one line of description. The marker position and
 * the disease list stay in `data/regions.ts`, because a translation that moved a
 * marker would break the anatomy plate it points at.
 */
export const zhRegions: Record<string, LocalizedRegion> = {
  'cerebro-e-nervos': {
    name: '腦與神經',
    description: '影響腦、脊髓與神經的疾病，以及需要立即就醫的突發訊號。',
  },
  olhos: {
    name: '眼睛',
    description: '高血壓伴隨的視力模糊、登革熱造成的眼後疼痛，以及糖尿病經年累月對眼部微血管的損傷。',
  },
  'ouvidos-nariz-e-garganta': {
    name: '耳鼻喉',
    description: '耳、鼻、喉：許多經空氣傳播的感染都由此進入體內。',
  },
  pulmoes: {
    name: '肺與呼吸道',
    description: '空氣通過的氣道變得狹窄，以及感染在氧氣進入的組織中紮根。',
  },
  'coracao-e-vasos': {
    name: '心臟與血管',
    description: '當動脈被阻塞或破裂：心肌梗死發生在心肌，腦中風發生在腦部，而高血壓會同時提高這兩種風險。',
  },
  figado: {
    name: '肝臟',
    description: '由病毒引起的發炎，初期幾乎沒有症狀，以及能避免其演變為肝硬化與癌症的持續追蹤。',
  },
  'estomago-e-intestinos': {
    name: '胃與腸',
    description: '消化系統以及在其中表現出來的疾病，從腹痛到腹瀉。',
  },
  'pancreas-e-metabolismo': {
    name: '胰臟與代謝',
    description: '胰臟製造胰島素，一旦胰島素不足或身體對其反應變差，血糖便會升高。',
  },
  rins: {
    name: '腎臟',
    description: '身體的過濾器。糖尿病會隨著時間損傷它，而尿量減少是嚴重感染時的警示訊號。',
  },
  pele: {
    name: '皮膚',
    description: '紅斑、搔癢與皮膚發黃：登革熱、茲卡、屈公病、肝炎與瘧疾在皮膚上的表現。',
  },
  'articulacoes-e-musculos': {
    name: '關節與肌肉',
    description: '可能持續數週的關節疼痛，是屈公病的特徵，也包括其他蟲媒病毒疾病引起的肌肉疼痛。',
  },
  'sangue-e-defesas': {
    name: '血液與免疫',
    description: '影響整個系統而非單一器官的疾病：愛滋病毒攻擊人體的防禦細胞，瘧原蟲則在血液中大量繁殖。',
  },
};
