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
    metaTitle: '關於這個專案：本站定位與內容如何產出',
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
          '本站所有內容都還沒有經過正式的醫學審查，也沒有任何頁面作出相反的宣稱。已發布的文字一律標示為示範素材，請在做任何健康決定之前，先核對其所引用的官方來源。',
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
    metaTitle: '編輯政策：可採用來源、撰寫審查與勘誤',
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
    slug: 'aviso-medico',
    title: '醫療免責聲明',
    metaTitle: '醫療免責聲明：本站內容不是醫療建議',
    description:
      '這裡的內容不是醫療建議，也不能取代醫師的面對面診療。請了解不該拿本站內容做什麼、用藥為什麼必須遵照醫囑、哪些症狀要立刻就醫、資訊為什麼可能過時，以及本專案在資訊準確性與責任上的界線，並以官方發布的資訊為準。',
    h1: '醫療免責聲明',
    intro:
      '本聲明說明可以拿本站內容做什麼、不該拿它做什麼，以及本專案的責任到哪裡為止。本站是什麼，寫在[關於這個專案](/sobre/)裡，本頁不重複。',
    notice: {
      title: '遇到緊急狀況時，請不要使用本站',
      body: '請撥打 SAMU 192，或前往最近的衛生機構。若要洽詢衛生部的通則性指引，可撥打 Disque Saúde 136。',
    },
    sections: [
      {
        id: 'nao-e-aviso-medico',
        heading: '本站內容不是醫療建議',
        paragraphs: [
          '本頁與其他頁面的內容，都不構成問診、診斷、處方或治療方案。文字是為一般讀者寫的，不是為您的情況寫的，也不能取代合格專業人員的評估或面對面診療。',
        ],
      },
      {
        id: 'o-que-nao-fazer',
        heading: '不該拿本站內容做什麼',
        bullets: [
          '不要用這些頁面自我診斷，也不要藉此排除某種疾病的可能性。',
          '不要自行開始用藥、自行調整劑量，或自行停藥。',
          '不要因為讀了覺得安心，就延後已經排定的門診或檢查。',
          '不要拿本站取代已經約好的門診。',
          '不要用本站內容去指導別人的治療。',
        ],
      },
      {
        id: 'medicamentos',
        heading: '用藥必須有處方',
        paragraphs: [
          '疾病頁面會概括提到藥物的類別，用來說明這種病通常怎麼治。提到不等於推薦，本站沒有任何用藥指示。',
          '任何藥物都有不良反應與交互作用。藥物的選擇、劑量與療程長短，取決於您的體重、檢查結果，以及您正在服用的其他藥物。只有開立處方的人能決定這些。',
        ],
      },
      {
        id: 'alto-risco',
        heading: '重症與高風險情況',
        paragraphs: [
          '有些頁面談的是拖延代價很高的病症，例如重症登革熱、心肌梗塞、腦中風、HIV 與結核病。文字描述的是疾病通則，它對您的情況一無所知。',
          '在您自己身上認出文中描述的徵象，既不能確診，也不能排除。能為您檢查的是專業醫事人員，決定權也在他手上。',
        ],
      },
      {
        id: 'emergencia',
        heading: '需要立刻就醫的徵象',
        paragraphs: [
          '下列徵象不該靠閱讀來判斷：請立刻就醫，不要先經過本站。',
        ],
        bullets: [
          '呼吸困難或胸痛。',
          '昏厥或失去意識。',
          '出血不止。',
          '意識混亂，或是有傷害自己的念頭。',
        ],
      },
      {
        id: 'fontes-e-tempo',
        heading: '來源與過時',
        paragraphs: [
          '內容以公開文件為出發點，例如巴西衛生部、Fiocruz（奧斯瓦爾多·拉克魯茲基金會）與世界衛生組織發布的文件。話雖如此，醫學在變，公共政策也在變：發布當下正確的頁面，日後仍可能過時。',
          '在依照本站內容行動之前，請先向官方管道確認：衛生部網站、最近的衛生機構，或撥打 Disque Saúde 136。',
        ],
      },
      {
        id: 'sem-garantias',
        heading: '不作任何明示或暗示的保證',
        paragraphs: [
          '我們不作任何明示或暗示的保證，不保證內容正確、完整、即時，或適合任何特定用途。',
          '本站以現狀提供。服務可能中斷，頁面也可能在未預先告知的情況下變更或移除。',
        ],
      },
      {
        id: 'responsabilidade',
        heading: '責任的限制',
        paragraphs: [
          '對於因使用、信賴或無法使用本站而生的直接或間接損害，以及依照本站內容所作的健康決定，我們不負責任。',
          '把任何資訊套用到自身情況，是讀者自己的決定。本聲明不排除巴西法律所賦予您的權利，包括巴西通用資料保護法（LGPD）所定的權利。',
        ],
      },
      {
        id: 'outras-paginas',
        heading: '其餘內容在哪裡',
        paragraphs: [
          '本站由誰撰寫、聲明自己不是什麼、目前的邊界何在，都寫在[關於這個專案](/sobre/)。內容如何撰寫、如何標註來源與如何修正，寫在[編輯政策](/politica-editorial/)。本頁不重複這兩者。',
        ],
      },
      {
        id: 'contato',
        heading: '發現本聲明有誤？',
        paragraphs: [
          '請透過[聯絡頁面](/contato/)寫信給我們。法律文字的修正，與其他內容修正一樣都會先經過評估。',
        ],
      },
    ],
    updatedAt: '2026-10-15',
  },
  {
    slug: 'politica-de-privacidade',
    title: '隱私政策',
    metaTitle: '隱私政策：收集哪些資料與資料主體權利',
    description:
      'Saudewiki 收集哪些資料、用途為何，以及依據巴西通用資料保護法（LGPD）該如何請求刪除。',
    h1: '隱私政策',
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
    metaTitle: '聯絡方式：回報錯誤、提出選題與隱私權利',
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
