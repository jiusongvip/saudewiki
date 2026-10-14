import type { LocalizedTopic } from '../../types';

/**
 * Health topics, keyed by slug.
 *
 * `scope` is the list of lines under "O que este tema cobre". It is matched by
 * position against the Portuguese list, so the translated array must keep the
 * same number of entries.
 */
export const zhTopics: Record<string, LocalizedTopic> = {
  'doencas-infecciosas': {
    title: '傳染病',
    description:
      '傳染病如何傳播、有哪些症狀，以及如何降低病毒、細菌與其他病原體造成感染的風險，涵蓋蟲媒病毒疾病、愛滋病毒與病毒性肝炎。',
    scope: [
      '傳播途徑與潛伏期',
      '有助於分辨相似病症的症狀',
      '日常生活中的預防措施',
      '疾病需要立即就醫評估的情況',
      '公立醫療體系中可免費獲得治療的疾病',
    ],
    references: [
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
        label: '登革熱與重症登革熱：概況',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/tuberculosis',
        label: '結核病：概況',
        publisher: '世界衛生組織',
      },
    ],
  },
  prevencao: {
    title: '預防',
    description:
      '真正能降低生病風險的做法：從病媒控制、疫苗接種到藥物預防，都是可以在家中、工作場所與家庭日常裡實施的措施。',
    scope: [
      '孳生源與病媒的控制',
      '疫苗接種與預防性追蹤',
      '接觸傳染病後的預防性處理',
      '能降低慢性病風險的習慣',
      '病情惡化前應何時就醫',
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue',
        label: '登革熱：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        label: '國家疫苗接種時程表',
        publisher: '巴西衛生部',
      },
    ],
  },
  'doencas-cronicas': {
    title: '慢性病',
    description:
      '需要長期持續追蹤的病症，例如糖尿病、高血壓、慢性呼吸道疾病與心血管併發症。',
    scope: [
      '疾病隨時間發展的過程',
      '居家監測與追蹤檢查',
      '飲食、活動與病情控制之間的關係',
      '併發症以及降低其風險的方法',
      '心血管急症及其辨識方法',
    ],
    references: [
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/diabetes',
        label: '糖尿病：概況',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/hypertension',
        label: '高血壓：概況',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
        label: '心血管疾病：概況',
        publisher: '世界衛生組織',
      },
    ],
  },
  'saude-infantil': {
    title: '兒童健康',
    description: '生長發育的追蹤、疫苗接種，以及提示孩子需要就醫評估的訊號。',
    scope: [
      '疫苗接種時程表，以及為何必須持續接種',
      '幼兒的警示訊號',
      '生長發育的常規追蹤',
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        label: '國家疫苗接種時程表',
        publisher: '巴西衛生部',
      },
    ],
  },
  'saude-da-mulher': {
    title: '女性健康',
    description: '本主題正在籌備中。此區目前尚無已撰寫或已審核的內容，需通過編輯審核後才會發布。',
    scope: ['內容開發中', '此區尚未發布任何醫療指引'],
  },
};
