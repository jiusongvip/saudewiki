import type { LocalizedArticle } from '../../types';

/** First half of the article translations, keyed by the Portuguese `slug`. */
export const zhArticlesA: Record<string, LocalizedArticle> = {
  'sintomas-iniciais-da-dengue': {
    title: '登革熱的早期症狀有哪些？',
    excerpt:
      '突發高燒、眼後疼痛與全身酸痛是登革熱的起點。了解病程三階段、警示徵象，以及如何與屈公病、茲卡區分。',
    body: [
      {
        id: 'o-que-observar-primeiro',
        heading: '登革熱最先出現的症狀是什麼？',
        paragraphs: [
          '登革熱最先出現的症狀通常是突發高燒、頭痛、眼後疼痛，以及劇烈的肌肉與關節酸痛。體溫常達 39°C 至 40°C，並可能伴隨噁心、嘔吐與食慾不振。',
          '感染登革病毒不一定會發病。估計每四起感染中約只有一起出現症狀，且多數病例屬於輕症或無症狀。這也是登革熱容易在社區中默默傳播的原因。',
          '一旦出現症狀，發病往往相當突然：患者會在幾個小時內從正常狀態轉為高燒。最初 24 到 48 小時內，也可能出現臉部潮紅與咽喉發紅等容易被忽略的徵象。',
        ],
      },
      {
        id: 'quanto-tempo-para-aparecer',
        heading: '被叮咬後多久會出現症狀？',
        paragraphs: [
          '登革熱的潛伏期為四到十天，以五到七天最為常見。因此在有傳播的地區，若在這段期間內出現發燒，即使沒有其他明顯徵象，也應提高警覺。',
          '發燒通常持續兩到七天，也可能呈現雙相變化：先退燒，再回升，最後才真正退去。完全康復則需要一到兩週。',
          '急性期過後，疲倦感可能持續數週。康復的時間因人而異，並不是退燒就代表已經完全復原。',
        ],
      },
      {
        id: 'fases-da-doenca',
        heading: '登革熱會經歷哪些階段？',
        paragraphs: [
          '登革熱的病程通常分為三個階段。第一是發熱期，持續兩到七天，以高燒、頭痛、眼後疼痛、全身酸痛為主，許多患者會出現皮疹。這段期間病毒在血液中循環，也是檢驗最能直接偵測病毒的時機。',
          '第二是關鍵期，從退燒時開始，大約持續 24 到 48 小時。部分患者在此時好轉，但血漿滲漏明顯的人可能在幾小時內進展為重症。即使已出現休克前兆，患者外觀仍可能看起來還好。',
          '第三是恢復期，滲出的液體被重新吸收。尿量增加、心跳可能變慢，皮膚可能脫屑並伴隨搔癢。這是好轉的階段，但仍需要持續觀察。',
        ],
      },
      {
        id: 'primeiros-sinais',
        heading: '症狀出現的順序為何？',
        bullets: [
          '突發高燒，通常介於 39°C 至 40°C',
          '劇烈頭痛，常位於眼後',
          '全身、肌肉與關節酸痛',
          '噁心、嘔吐與食慾不振',
          '皮膚出現斑丘疹，通常在第三到第六天出現',
          '輕微出血，例如牙齦出血、流鼻血或皮膚出現小瘀斑',
          '淋巴結腫大，部分患者會出現肝臟腫大',
          '最初 24 到 48 小時可能出現臉部潮紅與咽喉發紅',
        ],
      },
      {
        id: 'sinais-de-alarme',
        heading: '哪些徵象代表登革熱正在惡化？',
        paragraphs: [
          '警示徵象通常出現在第三到第七天、體溫開始下降的時候。劇烈腹痛、持續嘔吐、液體蓄積、黏膜出血、嗜睡或躁動、肝臟腫大、頭暈與呼吸困難，都是需要警覺的表現。',
          '大約每二十位登革熱患者中，會有一位進展為重症，特徵是明顯的血漿滲漏、嚴重出血或器官受損。在這個關鍵窗口接受醫療評估，往往決定了一個病例是平安度過還是演變為急症。',
        ],
        ctaLabel: '查看登革熱頁面中的警示徵象',
      },
      {
        id: 'dengue-ou-outra-doenca',
        heading: '如何區分登革熱、屈公病、茲卡與流感？',
        paragraphs: [
          '屈公病同樣由斑蚊傳播，發病也很突然，但關節疼痛往往是最主要的表現：劇烈、使人難以活動，且可能持續數週甚至數月。登革熱的全身酸痛雖然明顯，卻較少持續這麼久。',
          '茲卡通常較輕微。結膜炎、搔癢與皮疹很常見，發燒多半不高，而且很大比例沒有症狀。最大的風險在於懷孕期間感染，可能造成胎兒畸形。',
          '流感則以呼吸道症狀為主，例如咳嗽、喉嚨痛與流鼻水，這些並不是登革熱的典型表現。儘管如此，這幾種蚊媒疾病的表現高度重疊，仍需靠實驗室檢驗確認。',
        ],
      },
      {
        id: 'o-que-nao-e-sintoma',
        heading: '哪些症狀不是登革熱的典型表現？',
        paragraphs: [
          '頻繁打噴嚏、流鼻水與鼻塞，較可能提示感冒或其他呼吸道感染，而非登革熱。這不能取代專業評估，但有助於釐清懷疑的方向。',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: '懷疑感染登革熱時該怎麼做？',
        paragraphs: [
          '最初較安全的做法是補充水分、休息，並使用乙醯胺酚（paracetamol）退燒止痛。請避免阿斯匹靈（乙醯水楊酸）、布洛芬等消炎藥，以及肌肉注射，因為它們會增加出血風險。',
          '檢驗的時機很重要。症狀出現的前五天，以 NS1 或 RT-PCR 直接偵測病毒最合適；從第六天起，抗體檢驗的參考價值較高。實際該做哪一種檢驗，由醫療人員依情況判斷。',
          '請到醫療機構接受評估。若出現任何警示徵象，請立即尋求急診協助，不要等待症狀自行緩解。',
        ],
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue',
        label: '登革熱：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
        label: '登革熱與重症登革熱：簡介',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.cdc.gov/dengue/hcp/clinical-signs/index.html',
        label: '登革熱的臨床表現',
        publisher: '美國疾病管制與預防中心（CDC）',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/chikungunya',
        label: '屈公病：簡介',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/zika-virus',
        label: '茲卡病毒感染：簡介',
        publisher: '世界衛生組織',
      },
    ],
  },
  'como-prevenir-a-dengue': {
    title: '如何預防登革熱？',
    excerpt:
      '由於沒有針對此病毒的特定治療，預防的重點在於清除蚊蟲的孳生場所並避免叮咬。了解實際可行的做法。',
    body: [
      {
        id: 'por-que-a-prevencao-e-central',
        heading: '為何預防是關鍵',
        paragraphs: [
          '目前沒有針對登革熱的特定抗病毒藥物。因此，預防的核心是減少蚊子數量並避免叮咬。巴西公共衛生系統（SUS）也提供登革熱疫苗，接種對象與地區依衛生部策略而定，請向您所在地區的醫療衛生機構確認。',
          '埃及斑蚊在靜水中繁殖。任何裝有乾淨靜水的容器，無論多小，都可能成為孳生場所。',
        ],
      },
      {
        id: 'criadouros',
        heading: '容易被忽略的孳生場所',
        bullets: [
          '會積水的盆栽與觀葉植物底盤',
          '堵塞的排水管與有積水點的樓頂平台',
          '放置在戶外的輪胎、水桶、瓶子與玩具',
          '沒有蓋子的水箱、儲水桶與蓄水池',
          '寵物飲水盆與很少使用的水溝蓋',
          '空置房內的馬桶與儲水設施',
        ],
      },
      {
        id: 'rotina',
        heading: '每週十分鐘的例行工作',
        paragraphs: [
          '固定選一個日子檢查庭院與公共區域，比偶爾的一次性大掃除更有效。蚊蟲的繁殖週期很短，每週檢查能在新的成蚊出現之前中斷這個週期。',
        ],
      },
      {
        id: 'evitar-picada',
        heading: '如何降低被叮咬的風險',
        paragraphs: ['這種蚊蟲在白天活動，清晨與傍晚最為活躍。'],
        bullets: [
          '使用驅蚊劑，並遵循廠商的使用說明',
          '在活動高峰時段，請盡量穿著覆蓋手臂與腿部的衣物',
          '在窗戶安裝紗窗，並在傳播較嚴重地區使用蚊帳',
        ],
      },
      {
        id: 'o-que-nao-funciona',
        heading: '無法取代預防的措施',
        paragraphs: [
          '維生素、茶飲與自制配方無法預防感染。控制蚊蟲取決於持續清除孳生場所，而非一時性的措施。',
        ],
        ctaLabel: '在登革熱頁面了解傳播方式',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue',
        label: '登革熱：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
        label: '登革熱與重症登革熱：簡介',
        publisher: '世界衛生組織',
      },
    ],
  },
  'quando-procurar-atendimento-em-caso-de-suspeita-de-dengue': {
    title: '懷疑感染登革熱時，何時該就醫？',
    metaTitle: '登革熱：何時該就醫',
    excerpt:
      '多數病例透過補充水分與休息即可良好康復。但某些徵象提示有發展為重症的風險，需要立即評估：以下說明是哪些徵象。',
    body: [
      {
        id: 'regra-geral',
        heading: '一般原則',
        paragraphs: [
          '在登革熱有傳播的地區，若出現發燒伴隨全身酸痛，請到醫療機構接受評估。專業人員會判斷是否需要進一步檢查與更密切的追蹤。',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: '需要立即就醫的警示徵象',
        paragraphs: [
          '這些徵象通常出現在體溫開始下降的階段，而非發燒的最高峰。正因如此，很多人會忽略它們。',
        ],
        bullets: [
          '持續而劇烈的腹痛',
          '持續嘔吐以致無法補充水分',
          '牙齦、鼻腔、尿液或糞便出血',
          '過度嗜睡、易怒或意識混亂',
          '尿量明顯減少或其他脫水徵象',
          '四肢冰冷、蒼白或呼吸困難',
        ],
      },
      {
        id: 'grupos-de-maior-risco',
        heading: '需要格外注意的人群',
        bullets: [
          '幼童與長者',
          '孕婦',
          '患有慢性疾病者，如糖尿病與高血壓',
          '服用抗凝血藥物者',
        ],
        ctaLabel: '了解更多關於高血壓的資訊',
      },
      {
        id: 'o-que-nao-fazer',
        heading: '等待就醫期間不應做的事',
        paragraphs: [
          '由於有出血風險，請勿自行使用含乙醯水楊酸的藥物或非類固醇消炎藥。請保持水分補充，避免自行用藥。',
        ],
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue',
        label: '登革熱：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
        label: '登革熱與重症登革熱：簡介',
        publisher: '世界衛生組織',
      },
    ],
  },
  'diabetes-tipo-2-o-que-muda-no-dia-a-dia': {
    title: '第二型糖尿病：日常生活會有哪些改變？',
    excerpt:
      '確診第二型糖尿病並不意味著一長串的禁忌清單，而是意味著追蹤照護、逐步調整與監測：了解真正會改變的是哪些。',
    body: [
      {
        id: 'o-que-muda',
        heading: '確診後，日常生活真正會改變的是什麼？',
        paragraphs: [
          '與第二型糖尿病共處的日常生活，重點不在一次到位的劇烈改變，而是三件實事：監測血糖、安排飲食、保持活動，並在專業人員長期追蹤下進行。',
          '第二型糖尿病是一種慢性疾病，需要長期治療。實際上，日常生活會新增三件事：監測、有計畫的飲食與規律的活動。',
          '這些改變不需要一次到位。在數週內持續的小幅調整，往往比只維持幾天的大改變更容易長久。',
        ],
      },
      {
        id: 'monitoramento',
        heading: '日常生活中該如何監測血糖？',
        paragraphs: [
          '在有需要時於家中監測血糖，有助於了解身體對不同食物、進食時間與活動量的反應。追蹤檢查的項目由專業醫療人員決定。',
          '除了偶發的血糖值，糖化血色素（HbA1c）檢查能反映過去數個月的平均狀況，是追蹤的重要指標之一（巴西衛生部）。',
        ],
        bullets: [
          '記錄測量值時一併註明日期、時間，以及是餐前或餐後',
          '就診時帶上紀錄，以便與專業人員一起調整計畫',
          '不要只憑單次測量就自行調整劑量或時間',
        ],
      },
      {
        id: 'alimentacao',
        heading: '飲食上需要做哪些調整？',
        paragraphs: [
          '並沒有適用於所有人的禁忌食物清單（巴西衛生部）；通常有幫助的是：固定進食時間、控制份量。',
        ],
        bullets: [
          '減少含糖飲料與超加工食品',
          '盡量讓每天的進食時間相近',
          '在餐食中加入纖維（蔬菜、豆類、全穀類）',
          '不要省略正餐：長時間空腹可能使血糖起伏不穩',
        ],
      },
      {
        id: 'movimento',
        heading: '規律運動有什麼重要性？',
        paragraphs: [
          '規律的活動能改善身體對胰島素的反應。世界衛生組織（WHO）建議每週至少 150 分鐘中等強度的身體活動，有助於降低第二型糖尿病的風險；個別建議應在專業人員追蹤下制訂。',
          '即使是短而頻繁的散步也有幫助；重點在於規律，而非單次強度。',
        ],
        bullets: [
          '盡量把活動分散在一週當中',
          '若原本沒有運動習慣，請從漸進的方式開始',
        ],
      },
      {
        id: 'medicamentos',
        heading: '藥物是如何作用的？',
        paragraphs: [
          '許多第二型糖尿病患者會使用藥物來協助控制血糖。用藥方式由專業醫療人員制訂，並依追蹤結果調整。',
          '在巴西，糖尿病藥物可憑處方經 SUS（全民健康系統）取得（巴西衛生部）。',
        ],
        bullets: [
          '按指示的劑量與時間服藥，不要自行中斷',
          '若漏服一劑，請依照專業人員或藥物說明書的建議；下一劑不要加倍',
          '不要只憑單次血糖測量就自行調整治療',
        ],
      },
      {
        id: 'hipoglicemia',
        heading: '發生低血糖時該怎麼辦？',
        paragraphs: [
          '血糖過低（低血糖）可能發生，使用某些藥物的人尤其要注意。常見徵兆包括發抖、出汗、頭暈、無力與混亂。',
          '若出現低血糖徵兆，一般作法是依照美國疾病管制與預防中心（CDC）所稱的「15-15 法則」：攝取約 15 克吸收快速的糖（如果汁或葡萄糖），等候 15 分鐘後再評估；若未改善，應尋求協助。',
        ],
        bullets: [
          '隨身準備可快速補糖的來源（果汁、葡萄糖、糖果）',
          '讓身邊的人知道徵兆以及該怎麼做',
          '若症狀強烈或沒有改善，應就醫',
        ],
      },
      {
        id: 'acompanhamento',
        heading: '為什麼長期追蹤很重要？',
        paragraphs: [
          '第二型糖尿病需要長年管理。規律追蹤（巴西衛生部）有助於及早發現並處理併發症。',
        ],
        bullets: [
          '就診時測量血壓',
          '留意雙腳：每日檢查並穿著合適的鞋',
          '依指示接受眼睛檢查（視網膜病變）',
          '依專業人員安排接受腎功能與足部相關檢查',
          '保持規律的口腔護理',
        ],
      },
      {
        id: 'duvidas-comuns',
        heading: '關於日常生活，最常見的疑問有哪些？',
        paragraphs: [
          '可以吃水果嗎？可以，水果可以納入飲食；重點在於份量與規律，而非完全禁止。',
          '需要完全不吃糖嗎？重點是減少含大量添加糖的飲料與食物，而不是剔除每一克糖。',
          '第二型糖尿病會好嗎？它是一種慢性疾病；妥善控制能讓血糖維持在理想範圍並降低風險，但並無「保證痊癒」一說。',
          '可以喝酒嗎？酒精會影響血糖；請與專業人員討論份量與時機。',
        ],
      },
      {
        id: 'onde-entender-mais',
        heading: '在哪裡進一步了解此疾病',
        paragraphs: ['糖尿病頁面提供了各類型、症狀與併發症的總覽。'],
        ctaLabel: '前往糖尿病頁面',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/diabetes',
        label: '糖尿病：指引與資料',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/diabetes',
        label: '糖尿病：簡介',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
        label: '身體活動：概覽',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.cdc.gov/diabetes/treatment/treatment-low-blood-sugar-hypoglycemia.html',
        label: '低血糖（血糖過低）的處置',
        publisher: '美國疾病管制與預防中心（CDC）',
      },
    ],
  },
  'hipertensao-como-medir-a-pressao-em-casa': {
    title: '高血壓：如何在家中測量血壓',
    metaTitle: '高血壓：在家測量血壓',
    excerpt:
      '在家測量對血壓控制很有幫助，前提是測量方式正確。以下說明會影響結果的注意事項。',
    body: [
      {
        id: 'por-que-medir-em-casa',
        heading: '為何要在家測量',
        paragraphs: [
          '血壓會在全天波動，並隨情況而變。在家中、於不同日期反覆測量，能幫助專業醫療人員了解實際的血壓模式。',
        ],
      },
      {
        id: 'antes-de-medir',
        heading: '測量前',
        bullets: [
          '測量前 30 分鐘內避免咖啡、香菸與體力活動',
          '先排空膀胱',
          '測量前先坐著休息幾分鐘',
        ],
      },
      {
        id: 'durante-a-medicao',
        heading: '測量時',
        bullets: [
          '坐下時讓背部有支撐、雙腳踩地',
          '讓手臂有支撐，並保持在與心臟同高',
          '測量期間不要說話',
          '至少測量兩次，兩次之間間隔一分鐘',
        ],
      },
      {
        id: 'interpretar',
        heading: '如何使用這些數值',
        paragraphs: [
          '儀器測量的只是某個瞬間，並不能用來下診斷。請記錄數值並註明日期與時間，就醫時攜帶這份紀錄。解讀與治療決定由專業醫療人員作出。',
        ],
        ctaLabel: '在完整頁面了解高血壓',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hipertensao',
        label: '高血壓：資料與指引',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/hypertension',
        label: '高血壓：簡介',
        publisher: '世界衛生組織',
      },
    ],
  },
  'vacinacao-o-que-e-o-calendario-basico': {
    title: '兒童預防接種：什麼是基本預防接種時程表？',
    excerpt:
      '預防接種時程表整理了各年齡層建議接種的疫苗。了解它如何運作，以及為何需要持續追蹤。',
    body: [
      {
        id: 'o-que-e-o-calendario',
        heading: '什麼是預防接種時程表',
        paragraphs: [
          '時程表是一份進度表，指出各年齡建議接種哪些疫苗。衛生主管機關會依據新的實證與新的疫苗產品定期更新它。',
        ],
      },
      {
        id: 'por-que-seguir',
        heading: '為何要遵循時程表',
        paragraphs: [
          '保護力是逐步建立的。有些疫苗需要接種加強劑，免疫系統的反應才能隨著時間持續。',
        ],
      },
      {
        id: 'onde-consultar',
        heading: '在哪裡查詢最新的時程表',
        paragraphs: [
          '由於建議會改變，現行時程表應一律以官方來源查詢。兒童預防接種手冊就是記錄這段接種歷史的檔案。',
        ],
        ctaLabel: '查看兒童健康主題',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        label: '國家預防接種時程表',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/health-topics/vaccines-and-immunization',
        label: '免疫接種：主題總覽',
        publisher: '世界衛生組織',
      },
    ],
  },
  'mitos-e-verdades-sobre-dengue': {
    title: '關於登革熱的迷思與真相',
    excerpt: '保留在建置之外的編輯草稿，用於驗證狀態過濾。',
    body: [
      {
        id: 'rascunho',
        heading: '草稿',
        paragraphs: ['在通過編輯審核之前，這段文字不應出現在網站上。'],
      },
    ],
    references: [],
  },
  'chikungunya-dor-nas-articulacoes-quanto-tempo-dura': {
    title: '屈公病：關節疼痛會持續多久？',
    metaTitle: '屈公病：關節疼痛會持續多久',
    excerpt:
      '關節疼痛是屈公病的特徵，對部分患者而言，它會在高燒退去後持續。了解疾病的各階段，以及有助於康復的方法。',
    body: [
      {
        id: 'por-que-a-dor-e-tao-forte',
        heading: '為何關節疼痛如此劇烈',
        paragraphs: [
          '感染屈公病時，病毒會在關節引起強烈的發炎。這正是此病最顯著的特徵：疼痛通常比登革熱更劇烈、更集中於特定關節，且常伴隨腫脹。',
          '最受影響的是手部、足部、腳踝與膝蓋的關節。某些情況下，疼痛劇烈到會妨礙走路或拿取物品。',
        ],
      },
      {
        id: 'tres-fases',
        heading: '疾病的三個階段',
        paragraphs: [
          '屈公病的病程通常被描述為三個階段，這有助於了解為何每個人的康復情況並不相同。',
        ],
        bullets: [
          '急性期：14 天以內，有高燒與劇烈的關節疼痛',
          '亞急性期：15 至 90 天，此時高燒退去，但疼痛可能持續',
          '慢性期：超過 90 天，關節疼痛持續，並需要開始接受追蹤',
        ],
      },
      {
        id: 'quanto-tempo-dura',
        heading: '實際上會持續多久',
        paragraphs: [
          '多數人在幾週內會改善。部分病例的疼痛會持續數月，而少數人會長時間承受關節症狀。',
          '無法事先預測誰會發展成長期病程。年齡較長、原本已有關節疼痛，以及急性期症狀較劇烈，都被認為與較慢的康復相關。',
        ],
      },
      {
        id: 'o-que-ajuda',
        heading: '什麼有助於康復',
        paragraphs: [
          '在最初幾週，照護方式與其他蟲媒病毒疾病相同：休息、補充水分，並在專業指導下緩解疼痛。在尚未排除登革熱之前，應避免含乙醯水楊酸的藥物與非類固醇消炎藥。',
          '當疼痛持續時，物理治療通常會成為治療的一環，透過漸進式的運動幫助維持關節的活動度與力量。相關處置會依個別情況決定。',
        ],
        ctaLabel: '查看屈公病的完整頁面',
      },
      {
        id: 'quando-voltar',
        heading: '何時該再次回到醫療機構',
        paragraphs: [
          '若疼痛未改善、出現明顯腫脹、關節失去活動能力，或出現劇烈腹痛、持續嘔吐、出血或嗜睡等警示徵象，請再次就醫。',
        ],
        ctaLabel: '對照登革熱的徵象',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/chikungunya',
        label: '屈公病：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/chikungunya',
        label: '屈公病：簡介',
        publisher: '世界衛生組織',
      },
    ],
  },
  'chikungunya-e-dengue-como-diferenciar': {
    title: '屈公病與登革熱：如何區分？',
    excerpt:
      '這兩種疾病由同一種蚊蟲傳播，都以高燒與全身酸痛發病。主要差別在於關節疼痛，而這會影響處置方式。',
    body: [
      {
        id: 'por-que-confunde',
        heading: '為何兩者容易混淆',
        paragraphs: [
          '登革熱與屈公病由相同的蚊蟲傳播，在同一地區流行，發病方式也很相似：突發高燒、頭痛、全身酸痛與不適感。',
          '因此，能區分兩者的很少是單一症狀，而是各項徵象的組合與強度，才指引出懷疑的方向。',
        ],
      },
      {
        id: 'diferencas',
        heading: '通常會出現的差異',
        bullets: [
          '關節疼痛：屈公病往往非常劇烈、令人難以活動；登革熱則常見，但較不集中於特定關節',
          '關節腫脹：屈公病更為常見',
          '皮膚斑疹：兩者都可能出現，但時機不同',
          '眼後疼痛：較具登革熱的特徵',
          '持續時間：屈公病的關節疼痛可能延續數週或數月',
        ],
      },
      {
        id: 'o-que-nao-serve',
        heading: '不能用來區分的依據',
        paragraphs: [
          '單憑是否出血並不能確診登革熱，而沒有皮膚斑疹也無法排除其中任何一種。也無法依居住地或季節來區分，因為兩者會同時流行。',
          '只有在醫療機構接受評估，透過身體檢查，並在有需要時進行實驗室檢查，才能確定病因。',
        ],
      },
      {
        id: 'por-que-importa',
        heading: '為何這種差異很重要',
        paragraphs: [
          '兩種疾病都沒有特定的抗病毒藥物，初期治療也相似。差異在於追蹤照護：登革熱需要留意體溫下降時出現的警示徵象，而屈公病可能需要長期追蹤關節疼痛。',
          '兩種情況下，在排除登革熱之前都應避免含乙醯水楊酸的藥物與非類固醇消炎藥，以防出血風險。',
        ],
        ctaLabel: '了解登革熱的警示徵象',
      },
      {
        id: 'o-que-fazer',
        heading: '有疑問時該怎麼辦',
        paragraphs: [
          '請到醫療機構接受評估，告知您居住的地方或近幾日的旅行史，並描述所有症狀，包括關節疼痛的強度。請不要嘗試在家中自行區分，也不要自行用藥。',
        ],
        ctaLabel: '查看屈公病頁面',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/chikungunya',
        label: '屈公病：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
        label: '登革熱與重症登革熱：簡介',
        publisher: '世界衛生組織',
      },
    ],
  },
  'zika-na-gestacao-o-que-a-infeccao-pode-causar': {
    title: '懷孕期間感染茲卡病毒：可能造成什麼後果？',
    excerpt:
      '懷孕期間感染茲卡病毒可能影響寶寶的神經系統。了解為何產前追蹤至關重要，以及如何降低風險。',
    body: [
      {
        id: 'por-que-a-gestacao-e-diferente',
        heading: '為何懷孕是關鍵節點',
        paragraphs: [
          '對多數人而言，茲卡病毒感染屬於輕微的感染。問題在於從孕婦傳給胎兒：病毒可能影響正在發育的神經系統，造成畸形。',
          '所謂的先天性茲卡病毒症候群，涵蓋寶寶可能出現的一系列異常，包括大腦大小與發育的改變、視覺與聽覺問題，以及運動發育的異常。',
        ],
      },
      {
        id: 'sintomas-na-gestante',
        heading: '需要立即注意的症狀',
        paragraphs: [
          '孕婦的症狀與其他患者相同，且可能很輕微：皮膚出現發癢的紅斑、低燒、眼睛發紅但無分泌物、關節疼痛與頭痛。',
          '由於感染可能毫無明顯跡象，建議在懷孕期間只要出現上述任何徵象，即使看起來很輕微，也應就醫。',
        ],
      },
      {
        id: 'acompanhamento',
        heading: '追蹤照護是怎麼進行的',
        paragraphs: [
          '懷孕期間一旦懷疑感染，產前照護就會改變。醫療機構可能安排檢查以追查感染，並進行更密切的追蹤，透過影像檢查評估寶寶的發育。',
          '寶寶出生後仍需持續追蹤，評估其發育情況，並在必要時轉介至早期療育及其他專科。',
        ],
      },
      {
        id: 'como-reduzir-o-risco',
        heading: '如何降低風險',
        bullets: [
          '懷孕期間避免前往有茲卡病毒傳播的地區，並在任何出行前先與醫療機構討論',
          '使用驅蚊劑，並遵循廠商的使用說明',
          '請盡量穿著覆蓋手臂與腿部的衣物',
          '在窗戶與門安裝紗窗，睡覺時使用蚊帳',
          '整個懷孕期間的性行為都應使用保險套，因為茲卡病毒亦可經由性接觸傳播',
          '清除家中及周遭環境的蚊蟲孳生場所',
        ],
        ctaLabel: '查看茲卡病毒頁面中的防護措施',
      },
      {
        id: 'parceiros',
        heading: '對伴侶同樣適用的事項',
        paragraphs: [
          '由於茲卡病毒可經由性接觸傳播，防護不只是孕婦個人的事。整個懷孕期間使用保險套，能保護孕婦免於感染，進而避免影響寶寶。',
        ],
        ctaLabel: '了解茲卡病毒的傳播方式',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/z/zika-virus',
        label: '茲卡病毒：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/zika-virus',
        label: '茲卡病毒：簡介',
        publisher: '世界衛生組織',
      },
    ],
  },
  'zika-como-se-proteger-em-areas-com-transmissao': {
    title: '茲卡病毒：在傳播地區如何自我防護',
    excerpt:
      '目前沒有對抗茲卡病毒的疫苗。防護有賴於避免蚊蟲叮咬，並減少家中及周遭環境的孳生場所。',
    body: [
      {
        id: 'sem-vacina',
        heading: '沒有疫苗，防護取決於行為',
        paragraphs: [
          '目前沒有可用的茲卡病毒疫苗，也沒有特定的抗病毒藥物。這意味著減少接觸蚊蟲是核心策略。',
          '埃及斑蚊在白天活動，清晨與傍晚最為活躍。它在乾淨的靜水中繁殖，任何容器無論多小都可能成為孳生場所。',
        ],
      },
      {
        id: 'criadouros',
        heading: '容易被忽略的孳生場所',
        bullets: [
          '會積水的盆栽與觀葉植物底盤',
          '堵塞的排水管與有積水點的樓頂平台',
          '放置在戶外的輪胎、水桶、瓶子與玩具',
          '沒有蓋子的水箱、儲水桶與蓄水池',
          '寵物飲水盆與很少使用的水溝蓋',
          '空置房內的儲水設施',
        ],
      },
      {
        id: 'protecao-pessoal',
        heading: '個人防護',
        bullets: [
          '在裸露的皮膚上施用驅蚊劑，並遵循廠商的使用說明',
          '在蚊蟲活動高峰時段，請盡量穿著覆蓋手臂與腿部的衣物',
          '在窗戶與門安裝紗窗',
          '在傳播較嚴重地區睡覺時使用蚊帳',
        ],
      },
      {
        id: 'transmissao-sexual',
        heading: '性接觸傳播同樣要留意',
        paragraphs: [
          '與登革熱和屈公病不同，茲卡病毒也可能經由性接觸傳播。使用保險套是預防的一環，尤其在有懷孕可能時更是如此。',
        ],
        ctaLabel: '延伸閱讀：懷孕期間感染茲卡病毒',
      },
      {
        id: 'o-que-nao-funciona',
        heading: '無法取代預防的措施',
        paragraphs: [
          '維生素、茶飲與自制配方無法預防感染。控制蚊蟲取決於持續清除孳生場所，而非零星的做法。',
        ],
        ctaLabel: '查看登革熱預防指南，兩者的傳播蚊蟲相同',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/z/zika-virus',
        label: '茲卡病毒：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.paho.org/pt/topicos/zika',
        label: '茲卡病毒：資訊與指引',
        publisher: '泛美衛生組織',
      },
    ],
  },
  'malaria-sintomas-e-quando-buscar-atendimento': {
    title: '瘧疾：症狀與何時就醫',
    excerpt:
      '在傳播地區出現發燒伴隨寒顫，就應當天就醫。瘧疾可以治癒，但可能在幾天內加重。',
    body: [
      {
        id: 'sintomas-iniciais',
        heading: '早期症狀',
        paragraphs: [
          '瘧疾的最初症狀通常在遭叮咬後七到三十天出現，看起來像流行性感冒：發燒、頭痛、全身酸痛與疲勞。',
          '發燒可能一陣一陣地發作，並伴隨寒顫與出汗。某些情況下會出現噁心、嘔吐與食慾不振。',
        ],
      },
      {
        id: 'regra-de-ouro',
        heading: '最重要的原則：在傳播地區發燒',
        paragraphs: [
          '在有瘧疾傳播的地區，任何發燒都應於當天接受檢查。檢查方式很簡單，透過厚血滴抹片或快篩測試進行，並可在巴西公共衛生系統（SUS）取得。',
          '之所以急迫，理由是相當務實的：早期診斷能避免發展為重症。等待發燒自行退去，是代價最高的錯誤。',
        ],
      },
      {
        id: 'sinais-de-gravidade',
        heading: '重症徵象',
        paragraphs: ['有些徵象表示疾病已發展為重症，屬於緊急情況：'],
        bullets: [
          '意識混亂、嗜睡或抽搐',
          '呼吸困難',
          '尿量大幅減少',
          '明顯黃疸或出血',
          '持續嘔吐以致無法補充水分',
          '極度虛弱，難以站立',
        ],
      },
      {
        id: 'por-que-nao-esperar',
        heading: '為何不能等待',
        paragraphs: [
          '由惡性瘧原蟲（Plasmodium falciparum）引起的瘧疾可能快速進展，在幾天內造成併發症。這正是官方建議在傳播地區一旦發燒就應就醫、不要嘗試居家治療的原因。',
        ],
      },
      {
        id: 'tratamento-e-seguimento',
        heading: '治療與後續追蹤',
        paragraphs: [
          '在巴西公共衛生系統（SUS）中治療是免費的，而用藥取決於檢查所辨識出的寄生蟲種類。依照指示的療程完整服藥，對避免復發與抗藥性至關重要。',
        ],
        ctaLabel: '查看瘧疾的完整頁面',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria',
        label: '瘧疾：症狀、預防與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/malaria',
        label: '瘧疾：簡介',
        publisher: '世界衛生組織',
      },
    ],
  },
};
