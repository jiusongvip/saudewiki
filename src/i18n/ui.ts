import type { Locale, ReviewStatus } from '../types';

/**
 * Interface text, both languages, in one place.
 *
 * A string that a reader sees on more than one page lives here and is read
 * through the same key on every page — `site.mission` and the search placeholder
 * are each defined once and reused, never retyped per template. Adding copy to
 * a page means adding a key to `pt` and its twin to `zh`; leaving the second out
 * is a type error, which is what keeps the two languages from drifting.
 *
 * `{name}` placeholders are substituted by `fill()` from `lib/i18n.ts`.
 */
const pt = {
  site: {
    name: 'Saudewiki',
    tagline: 'Informação de saúde para todos.',
    mission:
      'O Saudewiki é um projeto sem fins lucrativos de educação em saúde, escrito de forma voluntária por estudantes de medicina para quem procura informação confiável.',
    description:
      'Plataforma gratuita e sem fins lucrativos de informação em saúde em português: doenças, sintomas e prevenção com linguagem clara e fontes públicas oficiais.',
    contact: 'contato@saudewiki.com',
    contactSubject: 'Saudewiki, contato',
    /** Every content entry names this as its author; translated once here. */
    authorTeam: 'Equipe editorial Saudewiki',
    legal: 'As informações deste site têm caráter educativo e não substituem a avaliação de um profissional de saúde. Em caso de dúvida ou agravamento de sintomas, procure um serviço de saúde.',
  },

  review: {
    draft: 'Rascunho',
    needs_review: 'Em revisão médica',
    reviewed: 'Revisado',
    published: 'Publicado',
  },

  nav: {
    diseases: 'Doenças',
    regions: 'Por região',
    articles: 'Artigos',
    topics: 'Temas de saúde',
    about: 'Sobre nós',
    search: 'Pesquisar',
    ariaMain: 'Navegação principal',
    breadcrumb: 'Trilha de navegação',
    ariaMobile: 'Navegação móvel',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    skip: 'Pular para o conteúdo',
    brandAria: '{site}, página inicial',
    language: 'Escolher idioma',
  },

  footer: {
    blurb:
      'Plataforma gratuita de informação em saúde, escrita em linguagem clara e baseada em fontes públicas oficiais. Não substitui consulta, diagnóstico ou tratamento profissional.',
    navigate: 'Navegar',
    institutional: 'Institucional',
    about: 'Sobre nós',
    editorial: 'Política editorial',
    disclaimer: 'Aviso médico',
    privacy: 'Política de privacidade',
    contact: 'Contato',
    ariaNavigate: 'Navegar',
    ariaInstitutional: 'Institucional',
  },

  common: {
    home: 'Início',
    tocTitle: 'Nesta página',
    sources: 'Fontes e referências',
    sourcesNote:
      'Fontes públicas consultadas na redação deste conteúdo. Cada link aponta para o documento específico, não para a página inicial da instituição.',
    pendingImage: 'imagem pendente',
    byAuthor: 'Por {author}',
    medicalReview: 'Revisão médica:',
    reviewAbsent: 'ainda não realizada',
    publishedOn: 'Publicado em:',
    lastUpdate: 'Última atualização:',
    updatedOn: 'Atualizado em {date}',
    readArticle: 'Ler artigo',
    readArticleAria: 'Ler artigo: {title}',
    seeDisease: 'Conhecer a doença',
    seeAllArticles: 'Ver todos os artigos',
    seeAllDiseases: 'Ver todas as doenças',
    sendCorrection: 'Enviar correção',
    correctionLead:
      'Correções de conteúdo médico são bem-vindas e passam por revisão antes de qualquer alteração.',
    placeholderLabel: 'Conteúdo de demonstração',
    placeholderBody:
      'Este texto ainda não passou por revisão médica. Ele não deve ser usado para tomar decisões sobre saúde.',
    placeholderLink: 'Encontrou um erro? Envie uma correção',
    inConstruction: 'Em construção',
    units: {
      diseaseOne: 'doença',
      diseaseMany: 'doenças',
      articleOne: 'artigo',
      articleMany: 'artigos',
      contentOne: 'conteúdo',
      contentMany: 'conteúdos',
    },
    countDisease: '{n} {unit}',
    /** The joiner inside a count line: "3 doenças · 5 artigos". */
    countSeparator: ' · ',
    contentInTopic: '{n} {unit} neste tema',
    topicInPreparation: 'Tema em preparação',
    relatedTopics: 'Temas relacionados',
    relatedArticles: 'Artigos relacionados',
  },

  search: {
    label: 'Pesquise doenças, sintomas ou tratamentos',
    placeholder: 'Pesquise doenças, sintomas ou tratamentos...',
    button: 'Pesquisar',
    popular: ['Dengue', 'Diabetes', 'Hipertensão', 'Vacinação', 'Saúde da mulher'],
    title: 'Resultados da busca',
    description:
      'Busque por doenças, sintomas, artigos e temas de saúde no Saudewiki. Resultados com conteúdo em português e fontes oficiais.',
    idle: 'Digite um termo para buscar por doenças, sintomas, artigos e temas.',
    resultOne: '1 resultado para “{q}”',
    resultMany: '{n} resultados para “{q}”',
    resultNone: 'Não encontramos resultados para “{q}”.',
    /** The browser tab title once a query is running; the h1 stays put. */
    browserTitle: '{q} | {title} | {site}',
    emptyLead:
      'Não encontramos resultados para esta pesquisa. Tente outro termo ou comece por uma busca popular:',
    noscript: 'A busca deste site precisa de JavaScript. Você pode navegar diretamente por',
    noscriptJoin: ', ',
    noscriptLast: ' ou ',
    noscriptTail: '.',
    noscriptDiseases: 'doenças',
    noscriptArticles: 'artigos',
    noscriptTopics: 'temas de saúde',
    typeDisease: 'Doença',
    typeArticle: 'Artigo',
    typeTopic: 'Tema',
  },

  home: {
    title: '{site} | Informação de saúde para todos',
    eyebrow: 'Atlas de anatomia',
    h1Line1: 'Entenda',
    h1Line2: 'seu corpo.',
    missionLead: 'Comece pela parte do corpo que lhe interessa.',
    markerHint: 'Cada ponto marca uma região do corpo. Clique e você chega às doenças daquele lugar.',
    mapCaption: 'Escolha uma parte do corpo para ver as doenças daquele lugar.',
    mapAria: 'Partes do corpo',
    figureAlt:
      'Desenho anatômico em linha, de um corpo humano visto de frente, com cérebro, olhos, garganta, pulmões, coração, fígado, estômago, pâncreas, rins, intestinos, vasos e articulações',
    markerCaptionEmpty: '{region}. Em construção.',
    markerCounts: '{region}. {diseases}, {articles}.',
    regionsTitle: 'Doze lugares do corpo',
    regionsCta: 'Abrir o mapa completo',
    diseasesTitle: 'Doenças em destaque',
    diseasesCta: 'Ver todas as doenças',
    allDiseases: 'Todas as doenças',
    articlesTitle: 'Leituras recentes',
    articlesCta: 'Ver todos os artigos',
    verifyTitle: 'Como verificamos',
    verifyLead:
      'Informação de saúde só serve se der para conferir. Estas são as regras que o projeto segue, e o que ele ainda não tem.',
    verifyCta: 'Ler a política editorial',
    verification: [
      {
        title: 'Fontes públicas',
        body: 'Ministério da Saúde, Fiocruz e OMS. Cada afirmação aponta para o documento que a sustenta.',
      },
      {
        title: 'Autoria e data',
        body: 'Toda página informa quem escreveu, o estado editorial do texto e quando foi atualizada.',
      },
      {
        title: 'Revisão declarada',
        body: 'Ainda não há corpo de revisores médicos formalizado, e a página diz isso, em vez de sugerir uma revisão que não houve.',
      },
      {
        title: 'Correção aberta',
        body: 'Qualquer pessoa pode reportar um erro; a correção é avaliada antes de o texto mudar.',
      },
    ],
    studentsTitle: 'Escrito por estudantes, de graça',
    studentsLead:
      'O que falta para o projeto crescer é texto: cada região do mapa que aparece como «Em construção» é uma página à espera de ser escrita.',
    studentsCta: 'Participar do projeto',
    howItWorks: 'Como o site funciona',
    altCollage: 'Profissionais de saúde reunidos em torno de uma mesa com documentos',
    altCuradoria: 'Médico de jaleco branco usando um celular',
  },

  diseasesIndex: {
    title: 'Doenças',
    h1: 'Doenças',
    description:
      'Enciclopédia de doenças em português: sintomas, transmissão, diagnóstico, tratamento e prevenção, com fontes públicas oficiais.',
    lead: 'Cada página reúne o que é a doença, quais são os sintomas, como ela é transmitida, como é feito o diagnóstico e o que reduz o risco, sempre com a fonte oficial indicada.',
    listAria: 'Lista de doenças',
  },

  diseasePage: {
    titleSuffix: 'sintomas, transmissão e prevenção',
    faq: 'Perguntas frequentes',
    errorOnPage: 'Encontrou um erro nesta página?',
    otherDiseases: 'Outras doenças relacionadas',
  },

  articlesIndex: {
    title: 'Artigos de saúde',
    h1: 'Artigos de saúde',
    description:
      'Artigos em português sobre sintomas, prevenção e cuidados com a saúde, ligados às páginas de doenças correspondentes.',
    lead: 'Textos curtos que respondem a dúvidas específicas e levam para a página da doença correspondente, onde o assunto é tratado por completo.',
    listAria: 'Lista de artigos',
    browseByTopic: 'Navegar por tema',
  },

  articlePage: {
    citedDiseases: 'Doenças citadas',
    knowMore: 'Saiba mais sobre {name}',
    relatedDiseases: 'Doenças relacionadas',
    readAlso: 'Leia também',
    errorOnArticle: 'Encontrou um erro neste artigo?',
  },

  topicsIndex: {
    title: 'Temas de saúde',
    h1: 'Temas de saúde',
    description:
      'Guias temáticos que reúnem doenças, artigos e medidas práticas em torno de um mesmo assunto de saúde.',
    lead: 'Um tema reúne tudo o que o site tem sobre uma área da saúde: as doenças envolvidas, os artigos relacionados e o que fazer na prática. Temas ainda sem conteúdo aparecem marcados como em preparação.',
    eyebrow: 'Tema de saúde',
  },

  topicPage: {
    emptyBody:
      'Ainda não há textos publicados neste tema. Enquanto isso, procure o assunto nas páginas de doenças e nos artigos de saúde.',
    scope: 'O que este tema cobre',
    diseases: 'Doenças deste tema',
    articles: 'Artigos deste tema',
    sources: 'Fontes deste tema',
  },

  regionsIndex: {
    title: 'Por região do corpo',
    h1: 'Explore por região do corpo',
    description:
      'Escolha uma parte do corpo e veja as doenças e os artigos que a atingem: cérebro, olhos, pulmões, coração, fígado, rins, pele, articulações e sangue.',
    lead: 'Nem todo mundo procura uma doença pelo nome. Esta é a mesma enciclopédia organizada pelo lugar que dói: a primeira página de cada região reúne as doenças que a atingem e os artigos que tratam daquele problema.',
    constructionHint: 'As regiões que ainda não têm textos aparecem marcadas como «Em construção».',
    schemaName: 'Por região do corpo',
    schemaDescription:
      'Índice das partes do corpo cobertas pelo Saudewiki, com as doenças e os artigos de cada uma.',
  },

  regionPage: {
    emptyBody:
      'Ainda não há textos publicados sobre esta parte do corpo. Escolha outra região do mapa ou veja a lista completa de doenças.',
    emptyInvite: 'Não encontrou o que procurava? Diga ao projeto qual assunto falta.',
    talkToProject: 'Falar com o projeto',
    countsHere: '{diseases} e {articles} nesta região.',
    diseasesHere: 'Doenças que atingem {region}',
    articlesHere: 'Leitura sobre estes problemas',
    sourcesNote:
      'Cada página de doença indica a fonte oficial que sustenta o texto e o estado editorial dele. Nenhuma parte deste site substitui a avaliação de um profissional de saúde.',
    allRegions: 'Ver todas as regiões do corpo',
    emptyMeta: '{region} no Saudewiki: ainda não há textos publicados sobre esta parte do corpo.',
    itemListName: 'Doenças que atingem {region}',
  },

  notFound: {
    title: 'Página não encontrada',
    description:
      'O endereço acessado não existe. Use a busca ou navegue pelas seções de doenças, artigos e temas de saúde.',
    eyebrow: 'Erro 404',
    h1: 'Esta página não existe.',
    lead: 'O endereço pode ter sido alterado, removido ou nunca ter existido. Nenhum conteúdo médico foi publicado com este endereço.',
    backHome: 'Voltar para a página inicial',
    /** `to` is a key of the URL table in `lib/i18n.ts`, so the route is named, not implied by order. */
    destinations: [
      { to: 'diseases', label: 'Doenças', description: 'Enciclopédia de doenças e condições' },
      { to: 'articles', label: 'Artigos', description: 'Respostas para dúvidas específicas' },
      { to: 'topics', label: 'Temas de saúde', description: 'Guias por área da saúde' },
      { to: 'about', label: 'Sobre o projeto', description: 'Missão, limites e princípios' },
    ],
  },
}

export type UI = typeof pt;

const zh: UI = {
  site: {
    name: 'Saudewiki',
    tagline: '人人都能讀得懂的健康資訊。',
    mission:
      'Saudewiki 是一個非營利的健康教育項目，由醫學生義務撰寫，為想找得到可信健康資訊的人而做。',
    description:
      '免費、非營利的健康資訊平台：以淺白文字說明疾病、症狀與預防方法，內容一律附公家機關的公開來源。',
    contact: 'contato@saudewiki.com',
    contactSubject: 'Saudewiki 聯絡',
    authorTeam: 'Saudewiki 編輯團隊',
    legal:
      '本網站的資訊具教育性質，不能取代醫療專業人員的評估。若有疑問或症狀惡化，請尋求醫療協助。',
  },

  review: {
    draft: '草稿',
    needs_review: '醫學審查中',
    reviewed: '已審查',
    published: '已發布',
  },

  nav: {
    diseases: '疾病',
    regions: '依部位',
    articles: '文章',
    topics: '健康主題',
    about: '關於我們',
    search: '搜尋',
    ariaMain: '主要導航',
    breadcrumb: '導覽路徑',
    ariaMobile: '行動裝置導航',
    openMenu: '開啟菜單',
    closeMenu: '關閉菜單',
    skip: '跳到主要內容',
    brandAria: '{site}，首頁',
    language: '選擇語言',
  },

  footer: {
    blurb:
      '免費的健康資訊平台，以淺白文字撰寫，內容取自公家機關的公開來源。不能取代問診、診斷或治療。',
    navigate: '瀏覽',
    institutional: '關於本站',
    about: '關於我們',
    editorial: '編輯政策',
    disclaimer: '醫療免責聲明',
    privacy: '隱私政策',
    contact: '聯絡我們',
    ariaNavigate: '瀏覽',
    ariaInstitutional: '關於本站',
  },

  common: {
    home: '首頁',
    tocTitle: '本頁內容',
    sources: '來源與參考資料',
    sourcesNote: '撰寫本內容時查證的公開來源。每個連結都指向實際支撐該段落的具體文件，而非機關首頁。',
    pendingImage: '待配圖',
    byAuthor: '撰文：{author}',
    medicalReview: '醫學審查：',
    reviewAbsent: '尚未進行',
    publishedOn: '發布日期：',
    lastUpdate: '最後更新：',
    updatedOn: '更新於 {date}',
    readArticle: '閱讀文章',
    readArticleAria: '閱讀文章：{title}',
    seeDisease: '認識這種疾病',
    seeAllArticles: '查看所有文章',
    seeAllDiseases: '查看所有疾病',
    sendCorrection: '送出更正',
    correctionLead: '歡迎指出內容錯誤。所有更正都會先經過檢視，才會改動正文。',
    placeholderLabel: '示範內容',
    placeholderBody:
      '這段文字尚未通過醫學審查，不應用來做出健康相關的決定。',
    placeholderLink: '發現錯誤？送出更正',
    inConstruction: '建置中',
    units: {
      diseaseOne: '種疾病',
      diseaseMany: '種疾病',
      articleOne: '篇文章',
      articleMany: '篇文章',
      contentOne: '項內容',
      contentMany: '項內容',
    },
    countDisease: '{n} {unit}',
    countSeparator: '、',
    contentInTopic: '本主題共 {n} {unit}',
    topicInPreparation: '主題籌備中',
    relatedTopics: '相關主題',
    relatedArticles: '相關文章',
  },

  search: {
    label: '搜尋疾病、症狀或治療方式',
    placeholder: '搜尋疾病、症狀或治療方式……',
    button: '搜尋',
    popular: ['登革熱', '糖尿病', '高血壓', '預防接種', '女性健康'],
    title: '搜尋結果',
    description: '在 Saudewiki 搜尋疾病、症狀、文章與健康主題，結果均附官方來源。',
    idle: '輸入文字即可查詢疾病、症狀、文章與主題。',
    resultOne: '「{q}」找到 1 筆結果',
    resultMany: '「{q}」找到 {n} 筆結果',
    resultNone: '找不到符合「{q}」的內容。',
    browserTitle: '{q}｜{title}｜{site}',
    emptyLead: '找不到這次查詢的結果。請換一個字，或從常見的查詢開始：',
    noscript: '本站的搜尋需要 JavaScript。您也可以直接瀏覽',
    noscriptJoin: '、',
    noscriptLast: '或',
    noscriptTail: '。',
    noscriptDiseases: '疾病',
    noscriptArticles: '文章',
    noscriptTopics: '健康主題',
    typeDisease: '疾病',
    typeArticle: '文章',
    typeTopic: '主題',
  },

  home: {
    title: '{site}｜人人都能讀得懂的健康資訊',
    eyebrow: '人體解剖圖譜',
    h1Line1: '認識',
    h1Line2: '您的身體。',
    missionLead: '請先從您關心的身體部位開始瀏覽。',
    markerHint: '每個圓點代表一個身體部位，點下去就能找到會波及該處的疾病。',
    mapCaption: '選擇一個身體部位，即可看見該處的疾病。',
    mapAria: '身體部位',
    figureAlt:
      '線條人體解剖圖，正面視角，標示腦部、眼睛、咽喉、肺、心臟、肝臟、胃、胰臟、腎臟、腸道、血管與關節',
    markerCaptionEmpty: '{region}。建置中。',
    markerCounts: '{region}。{diseases}、{articles}。',
    regionsTitle: '身體的十二個部位',
    regionsCta: '開啟完整圖譜',
    diseasesTitle: '重點疾病',
    diseasesCta: '查看所有疾病',
    allDiseases: '所有疾病',
    articlesTitle: '最近的閱讀',
    articlesCta: '查看所有文章',
    verifyTitle: '我們如何查證',
    verifyLead: '健康資訊必須查得到出處才有用。以下是項目遵循的規則，以及目前還欠缺的部分。',
    verifyCta: '閱讀編輯政策',
    verification: [
      {
        title: '公開來源',
        body: '巴西衛生部的公開文件、衛生研究院 Fiocruz 與世界衛生組織。每項說法都指向支撐它的文件。',
      },
      {
        title: '署名與日期',
        body: '每個頁面都說明撰寫者、內容的編輯狀態與更新日期。',
      },
      {
        title: '如實說明審查狀態',
        body: '項目目前沒有正式的醫學審查團隊，頁面就直接說明，不會暗示做過並未進行的審查。',
      },
      {
        title: '開放更正',
        body: '任何人都可以回報錯誤；更正經檢視後才會改動正文。',
      },
    ],
    studentsTitle: '由學生義務撰寫',
    studentsLead:
      '項目要成長，缺的是內容：圖譜上每個標為「建置中」的部位，都是一張還在等待撰寫的頁面。',
    studentsCta: '參與這個項目',
    howItWorks: '這個網站如何運作',
    altCollage: '醫療專業人員圍著桌子和文件討論',
    altCuradoria: '穿白袍的醫師正在使用手機',
  },

  diseasesIndex: {
    title: '疾病',
    h1: '疾病',
    description: '疾病百科：症狀、傳染、診斷、治療與預防，均以淺白中文撰寫，並附公家機關的公開來源。',
    lead: '每個頁面整理這種疾病是什麼、有哪些症狀、如何傳染、怎樣診斷，以及什麼做法能降低風險，並標註引用的官方來源。',
    listAria: '疾病清單',
  },

  diseasePage: {
    titleSuffix: '症狀、傳染與預防',
    faq: '常見問題',
    errorOnPage: '在這個頁面發現錯誤了嗎？',
    otherDiseases: '其他相關疾病',
  },

  articlesIndex: {
    title: '健康文章',
    h1: '健康文章',
    description: '說明症狀、預防與健康照顧的文章，每篇都連結到對應的疾病頁面。',
    lead: '簡短的文章回答特定的疑問，並帶讀者到對應的疾病頁面，在那裡可以讀到完整的說明。',
    listAria: '文章清單',
    browseByTopic: '依主題瀏覽',
  },

  articlePage: {
    citedDiseases: '文中提及的疾病',
    knowMore: '深入瞭解：{name}',
    relatedDiseases: '相關疾病',
    readAlso: '延伸閱讀',
    errorOnArticle: '在這篇文章發現錯誤了嗎？',
  },

  topicsIndex: {
    title: '健康主題',
    h1: '健康主題',
    description: '主題導覽把疾病、文章與實務做法整理在同一個健康議題下。',
    lead: '一個主題彙集本站在某個健康領域裡所有的內容：相關的疾病、文章，以及實際該做的事。還沒有內容的主題會標註為籌備中。',
    eyebrow: '健康主題',
  },

  topicPage: {
    emptyBody:
      '這個主題還沒有已發布的內容。您可以先到疾病頁面與健康文章中查找相關的資訊。',
    scope: '本主題涵蓋的內容',
    diseases: '本主題的疾病',
    articles: '本主題的文章',
    sources: '本主題的來源',
  },

  regionsIndex: {
    title: '依身體部位',
    h1: '依身體部位探索',
    description: '選擇一個身體部位，看看哪些疾病與文章與它有關：腦、眼、肺、心臟、肝、腎、皮膚、關節與血液。',
    lead: '不是每個人都用病名找資料。這是同一部百科，改按會不舒服的地方來組織：每個部位的第一頁彙集會波及該處的疾病，以及處理這個問題的文章。',
    constructionHint: '還沒有文字的部位會標示為「建置中」。',
    schemaName: '依身體部位',
    schemaDescription: 'Saudewiki 涵蓋的身體部位索引，列出各部位的疾病與文章。',
  },

  regionPage: {
    emptyBody:
      '這個身體部位還沒有已發布的內容。您可以在地圖上選另一個部位，或查看完整的疾病清單。',
    emptyInvite: '沒有找到您想看的內容？告訴我們還缺哪個主題。',
    talkToProject: '聯絡項目',
    countsHere: '這個部位共有{diseases}與{articles}。',
    diseasesHere: '會波及{region}的疾病',
    articlesHere: '關於這些問題的閱讀',
    sourcesNote:
      '每個疾病頁面都會標出支撐內容的官方來源與該文的編輯狀態。本站任何內容都不能取代醫療專業人員的評估。',
    allRegions: '查看所有身體部位',
    emptyMeta: 'Saudewiki 的{region}頁面：這個部位還沒有已發布的內容。',
    itemListName: '會波及{region}的疾病',
  },

  notFound: {
    title: '找不到頁面',
    description: '您連到的網址並不存在。請使用搜尋，或從疾病、文章與健康主題分區瀏覽。',
    eyebrow: '錯誤 404',
    h1: '這個頁面不存在。',
    lead: '該網址可能已改版、被移除，或從未存在過。沒有任何醫學內容發布在這個網址上。',
    backHome: '回到首頁',
    destinations: [
      { to: 'diseases', label: '疾病', description: '疾病與狀況百科' },
      { to: 'articles', label: '文章', description: '特定疑問的解答' },
      { to: 'topics', label: '健康主題', description: '各領域導覽' },
      { to: 'about', label: '關於本項目', description: '使命、限度與原則' },
    ],
  },
};

export const ui: Record<Locale, UI> = {
  'pt-BR': pt,
  'zh-Hant': zh,
};

/**
 * The editorial status of a piece of content, in the reader's language.
 *
 * Lives here rather than next to `SITE` so the label for `needs_review` cannot
 * differ between the home page badge and a disease page.
 */
export const reviewLabel = (lang: Locale, status: ReviewStatus): string =>
  ui[lang].review[status];
