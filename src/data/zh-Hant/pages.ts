import type { StaticPage } from '../../types';

/**
 * The institutional pages in Traditional Chinese.
 *
 * Unlike the encyclopedia, these four pages are authored as whole records rather
 * than overrides: they carry no ids, dates or relations, and every sentence in
 * them is visible text. `slug` is the only field that must match `data/pages.ts`.
 *
 * Inside `sobre` the literal `{mission}` token is kept as written, because the
 * renderer substitutes it from the locale catalog. Internal link paths stay root
 * paths exactly as the Portuguese record spells them; `lib/i18n.ts` prefixes them
 * at render time, so only the anchor text is translated here.
 */
export const zhStaticPages: StaticPage[] = [
  {
    slug: 'sobre',
    title: '關於這個專案',
    description:
      'Saudewiki 是什麼、它為哪些人而存在、內容如何產出，以及它為自己所設定的邊界。',
    h1: '關於這個專案',
    sections: [
      {
        id: 'o-que-e',
        heading: 'Saudewiki 是什麼',
        paragraphs: [
          '{mission} 專案的目標，是把官方來源已經發布的健康資訊，整理成任何人都能閱讀、能理解、也能繼續瀏覽的形式。',
          '本站由三個相互串連的部分組成：疾病百科、回答特定疑問的文章，以及把某一健康領域所有內容彙整在一起的主題。第四個入口是[身體地圖](/por-regiao/)，它依照疾病出現的身體部位，把疾病彙整在同一個頁面下。',
        ],
      },
      {
        id: 'o-que-nao-e',
        heading: '這個網站不是什麼',
        bullets: [
          '不是診斷服務。沒有任何頁面會告訴您得了什麼病。',
          '不是門診諮詢、遠距醫療，也不是掛號預約。',
          '不是醫院、診所或醫事人員的名錄。',
          '不能取代專業醫事人員的評估。',
        ],
      },
      {
        id: 'limites-atuais',
        heading: '目前的邊界，在此公開說明',
        paragraphs: [
          '這個專案仍在建置之中。到目前為止，沒有任何內容經過正式的醫學審查，也沒有任何頁面作出相反的宣稱。已發布的文字用來驗證網站架構，並已標示為示範素材。',
          '撰寫者是醫學系學生，以義務方式參與、未領取報酬。這並不是醫學審查：沒有任何文字經過正式審查團隊的檢核，也沒有任何頁面作出相反的宣稱。目前也尚未與醫學院、專科醫學會或官方機構建立機構層級的合作。日後若有，會在這裡寫明名稱與日期。',
        ],
      },
      {
        id: 'como-trabalhamos',
        heading: '內容如何產出',
        paragraphs: [
          '每個頁面都以公開文件為出發點，例如巴西衛生部、Fiocruz（奧斯瓦爾多·拉克魯茲基金會）與世界衛生組織等機構發布的文件。重要的論述都指向支撐它的那份具體文件，而不是機構的首頁。',
          '完整的編輯與審查原則，請見[編輯政策](/politica-editorial/)。',
        ],
      },
      {
        id: 'contato',
        heading: '與本專案聯繫',
        paragraphs: [
          '勘誤、選題建議與內容移除請求，都可以透過[聯絡頁面](/contato/)送出。',
        ],
      },
    ],
  },
  {
    slug: 'politica-editorial',
    title: '編輯政策',
    description:
      'Saudewiki 的醫學內容如何撰寫、如何標註來源、如何審查與修正，以及每一個編輯狀態的意義。',
    h1: '編輯政策',
    intro: '以下就是本專案用來決定發布什麼內容、如何標註來源、如何修正的規則。',
    cardsAfter: 'estados',
    cards: [
      {
        title: '草稿',
        description:
          '仍在撰寫中、或還沒有來源的文字。不會被構建進網站：不出現在列表中、無法被連結，也不會進入網站地圖。',
      },
      {
        title: '醫學審查中',
        description:
          '文字已撰寫完成並已標註來源，但尚未交由具執業資格的人員審查。發布時會在該頁面顯示可見的告示。',
      },
      {
        title: '已審查',
        description: '已通過身分明確的專業人員審查。審查者姓名會連同日期一併顯示在頁面上。',
      },
      {
        title: '已發布',
        description: '已完成審查，並視為穩定內容而開放公開流通。',
      },
    ],
    sections: [
      {
        id: 'fontes',
        heading: '可採用的來源',
        paragraphs: [
          '內容優先取自獲認可的健康機構的公開文件，例如巴西衛生部、Fiocruz（奧斯瓦爾多·拉克魯茲基金會）與世界衛生組織。商業來源、個人部落格與宣傳素材，都不用作醫學論述的依據。',
          '每一項重要論述都指向支撐它的那份具體文件。泛指的引用，例如某個機構的首頁，不算作來源。',
        ],
      },
      {
        id: 'autoria',
        heading: '撰寫與審查',
        paragraphs: [
          '每個頁面都會說明撰寫者是誰、文字的編輯狀態為何、以及何時更新。若沒有身分明確的醫學審查者，頁面會明確指出審查並未進行。',
          '我們不會虛構並不存在的事實，包括審查者、證照與機構合作關係。日後若有具執業資格的人員完成審查，姓名與日期都會記載在該頁面上。',
        ],
      },
      {
        id: 'estados',
        heading: '編輯狀態',
      },
      {
        id: 'linguagem',
        heading: '用語與界線',
        bullets: [
          '文字面向一般大眾撰寫，不使用不必要的專門術語。',
          '不對痊癒、療效或時程作出承諾。',
          '不使用缺乏可查證來源的統計數字。',
          '不使用見證故事、評分，也不使用以患者身分呈現的人物照片。',
        ],
      },
      {
        id: 'correcoes',
        heading: '勘誤',
        paragraphs: [
          '任何人都可以透過[聯絡頁面](/contato/)回報錯誤。醫學內容的修正，在做出任何改動之前都會先經過評估；一旦套用，該頁面的更新日期也會隨之更改。',
        ],
      },
    ],
  },
  {
    slug: 'politica-de-privacidade',
    title: '隱私政策',
    description:
      'Saudewiki 收集哪些資料、用途為何，以及該如何請求移除。本文件仍在撰寫中，與巴西通用資料保護法（LGPD）保持一致。',
    h1: '隱私政策',
    notice: {
      title: '本文件仍在撰寫中',
      body: '這段文字描述的是網站目前實際的做法。在正式定稿發布之前，需要由法務負責人審閱，日後若加入分析工具、廣告或表單，更必須如此。',
    },
    sections: [
      {
        id: 'dados-coletados',
        heading: '目前會收集哪些資料',
        paragraphs: [
          'Saudewiki 不要求註冊，也沒有登入功能。瀏覽疾病、文章與主題頁面時，不會向本專案送出任何個人資料。',
          '本站尚未使用流量分析、廣告或第三方追蹤工具。若情況改變，本節會在變更上線之前先行更新，說明使用的是哪些工具、目的是什麼。',
        ],
      },
      {
        id: 'buscas',
        heading: '站內搜尋',
        paragraphs: [
          '站內搜尋完全在您的瀏覽器裡運作。您搜尋的文字會在本地端處理，既不會被送出，也不會存放在本專案的伺服器上。',
        ],
      },
      {
        id: 'links-externos',
        heading: '通往第三方網站的連結',
        paragraphs: [
          '各頁面會引用官方文件，並連向 gov.br、portal.fiocruz.br、who.int 等網站。當您跟著這些連結前往，就開始受該等網站的隱私政策約束，而這些政策不在我們的掌控之中。',
        ],
      },
      {
        id: 'contato-e-direitos',
        heading: '聯絡方式與資料主體的權利',
        paragraphs: [
          '若您透過[聯絡頁面](/contato/)送出訊息，您在訊息中提供的資料只會用於回覆該項請求。您可以隨時透過同一管道請求刪除這些訊息。',
          '依據巴西通用資料保護法（LGPD），您可以請求確認資料是否正被處理，並就已可能被收集的個人資料，提出更正、匿名化或刪除的請求。',
        ],
      },
      {
        id: 'alteracoes',
        heading: '本政策的變更',
        paragraphs: [
          '若有重大變更，下方的更新日期會隨之更改，而變更的內容也會在本頁面說明。',
        ],
      },
    ],
    updatedAt: '2026-10-13',
  },
  {
    slug: 'contato',
    title: '聯絡方式',
    description:
      '向 Saudewiki 回報內容錯誤、提出選題建議，或行使您的隱私權利。',
    h1: '聯絡方式',
    intro:
      '這個管道用於內容勘誤、選題建議與隱私相關事項。它不是醫療服務管道：請不要傳送症狀描述並期待獲得個人化的指引。',
    cards: [
      {
        title: '回報內容錯誤',
        description:
          '請提供該頁面的網址，以及看起來有誤的段落；若能一併附上支撐該項修正的來源，更為理想。',
      },
      {
        title: '提出選題建議',
        description: '您希望在本站看到說明的疾病、症狀或健康疑問。',
      },
      {
        title: '隱私與資料主體的權利',
        description: '依據巴西通用資料保護法（LGPD），提出資料查閱、更正或刪除的請求。',
      },
    ],
    sections: [
      {
        id: 'como-reportar',
        heading: '如何回報內容錯誤',
        paragraphs: ['為了讓修正更快獲得評估，請一併提供：'],
        bullets: [
          '該頁面的網址（URL）',
          '看起來有誤的確切段落',
          '支撐該項修正的公開來源（若有）',
        ],
      },
    ],
    outro:
      '若您出現症狀，或對自身健康存有疑問，請前往衛生機構，或使用官方的就醫服務。本站不提供個人化的健康指導。',
  },
];
