import type { LocalizedArticle } from '../../types';

/** Second half of the article translations, keyed by the Portuguese `slug`. */
export const zhArticlesB: Record<string, LocalizedArticle> = {
  'malaria-como-se-prevenir-em-viagens-para-a-amazonia': {
    title: '瘧疾：前往亞馬遜旅遊該如何預防',
    metaTitle: '瘧疾：旅遊預防措施',
    excerpt:
      '巴西絕大多數瘧疾病例發生在亞馬遜法定地區（Amazônia Legal）。前往該地區旅行的人，需要做好防止蚊蟲叮咬的措施。',
    body: [
      {
        id: 'onde-esta-o-risco',
        heading: '風險在哪裡',
        paragraphs: [
          '在巴西，瘧疾傳播集中在亞馬遜法定地區。森林、採礦與屯墾地區的風險更高，尤其是靠近清水又有樹蔭的地方。',
          '瘧蚊（Anopheles，俗稱「黑蚊」mosquito-prego）在夜間與晨昏活動。正因如此，防護措施的重點放在黃昏時分與夜間。',
        ],
      },
      {
        id: 'antes-da-viagem',
        heading: '出發前',
        bullets: [
          '出發前數週，先諮詢醫療機構或旅遊醫學參考中心',
          '說明行程與住宿型態，因為這會改變風險評估的結果',
          '詢問是否有藥物預防（化學預防）的指徵，此類藥物僅應在專業指導下使用',
          '攜帶足以應付整個行程的防蚊液',
        ],
      },
      {
        id: 'durante-a-viagem',
        heading: '旅途中',
        bullets: [
          '使用經殺蟲劑處理的蚊帳入睡',
          '在窗戶與門裝設紗網（在有條件的地方）',
          '在外露皮膚塗抹防蚊液，並依製造商指示補塗',
          '在蚊蟲活動最頻繁的時段穿長袖上衣與長褲',
          '在傳播地區避免於黃昏與夜間停留在戶外',
        ],
      },
      {
        id: 'depois-da-viagem',
        heading: '返回後',
        paragraphs: [
          '瘧疾可能在旅行數週後才發作。從傳播地區返回後一個月內若出現發燒，請就醫並告知您的移動史，這項資訊會改變檢查的方向。',
        ],
        ctaLabel: '瘧疾症狀請見瘧疾頁面',
      },
      {
        id: 'o-que-nao-funciona',
        heading: '沒有效果的做法',
        paragraphs: [
          '維生素、草本茶與自制防蚊液都無法取代上述防護措施。巴西目前也沒有可供常規使用的疫苗，因此預防仍取決於避免蚊蟲叮咬。',
        ],
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
        label: '瘧疾：實況報導',
        publisher: '世界衛生組織',
      },
    ],
  },

  'tuberculose-quando-a-tosse-persistente-e-sinal-de-alerta': {
    title: '咳嗽超過三週：何時是警示訊號？',
    metaTitle: '咳嗽超過三週',
    excerpt:
      '持續咳嗽是肺結核最常見的症狀。三週是應該開始追查的時間門檻。',
    body: [
      {
        id: 'o-limite-das-tres-semanas',
        heading: '三週這個門檻',
        paragraphs: [
          '咳嗽三週或以上，是公共衛生用來啟動肺結核追查的判定標準。這個數字並非任意訂定：一般原因引起的咳嗽到此時早該停止了。',
          '有痰的咳嗽與乾咳都適用，即使沒有其他症狀也同樣適用。',
        ],
      },
      {
        id: 'sinais-que-acompanham',
        heading: '常見的同時訊號',
        bullets: [
          '低燒，多出現在黃昏時段',
          '夜間盜汗，有時需要更換衣物',
          '體重無明顯原因地下降',
          '疲倦與食慾不佳',
          '痰中帶血',
        ],
      },
      {
        id: 'como-e-a-investigacao',
        heading: '追查如何進行',
        paragraphs: [
          '追查從社區基本衛生機構開始，包括痰液檢查，例如抗酸菌塗片檢查與分子快速檢測，以及在有指徵時進行胸部 X 光。整套流程在巴西公共衛生系統（SUS）中均免費。',
          '若有疑似案例，與患者同住者也會一併接受評估，因為傳播發生在密閉空間的空氣中。',
        ],
      },
      {
        id: 'o-que-nao-e',
        heading: '什麼不是肺結核的訊號',
        paragraphs: [
          '只持續數天、通常與感冒或病毒感染相關的咳嗽，並不代表肺結核。打噴嚏與流鼻水也不是典型症狀。改變判斷的關鍵是持續時間。',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: '該怎麼做',
        paragraphs: [
          '請前往最近的衛生機構，告知咳嗽已經持續多久，並說明其他症狀。及早診斷能保護您，也能中斷對同住者的傳播。',
        ],
        ctaLabel: '肺結核完整頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tuberculose',
        label: '肺結核：症狀、診斷與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/tuberculosis',
        label: '肺結核：實況報導',
        publisher: '世界衛生組織',
      },
    ],
  },

  'tuberculose-o-tratamento-tem-cura-e-e-gratuito': {
    title: '肺結核：治療免費且可以治癒',
    metaTitle: '肺結核：治療可以治癒',
    excerpt:
      '肺結核療程通常為六個月，在巴西公共衛生系統（SUS）中免費提供，只要完成整個療程即可治癒。',
    body: [
      {
        id: 'como-funciona',
        heading: '治療如何進行',
        paragraphs: [
          '治療使用多種抗生素組合，通常為期六個月。之所以必須合併用藥，是因為只使用一種藥物時，細菌可能產生耐藥性。',
          '藥物由巴西公共衛生系統（SUS）免費提供，追蹤照護則包括定期回診。',
        ],
      },
      {
        id: 'por-que-nao-interromper',
        heading: '為何不可中斷',
        paragraphs: [
          '療程結束前中斷，是復發與耐藥性最主要的原因。一旦細菌產生耐藥性，治療就會變得漫長許多、更複雜，不良反應也更多。',
          '頭幾週感覺好轉是預期中的現象，並不代表疾病已經結束，也不代表已經可以停藥。',
        ],
      },
      {
        id: 'transmissao-cai-rapido',
        heading: '傳播很快下降',
        paragraphs: [
          '接受治療數週後，傳播力會大幅下降。這對同住者極為重要，也說明了為何盡早開始治療能保護整個家庭。',
        ],
      },
      {
        id: 'efeitos-e-apoio',
        heading: '治療反應與支持',
        paragraphs: [
          '部分藥物可能造成噁心、視覺改變或不適等反應。這些情況應告知醫療團隊，由團隊調整處置，絕不可自行中斷治療。',
          '醫療團隊與家屬的協助有助於持續治療，其重要性與藥物相當，是治療的一部分。',
        ],
        ctaLabel: '肺結核完整頁面請見這裡',
      },
      {
        id: 'infeccao-latente',
        heading: '潛伏感染呢？',
        paragraphs: [
          '已感染但未發病的人，可能處於所謂的潛伏感染狀態：沒有症狀，也不會傳播。在這些情況下，衛生機構會評估是否有預防性治療的指徵，尤其是風險較高的人。',
        ],
        ctaLabel: '肺結核傳播機制請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tuberculose',
        label: '肺結核：症狀、診斷與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/tuberculosis',
        label: '肺結核：實況報導',
        publisher: '世界衛生組織',
      },
    ],
  },

  'hiv-o-que-fazer-nas-primeiras-72-horas': {
    title: '愛滋病毒：暴露後頭 72 小時該怎麼做',
    metaTitle: '愛滋病毒：暴露後 72 小時內該怎麼做',
    excerpt:
      '有一項預防措施需要在風險情況發生後 72 小時內開始。愈早開始，生效的機會愈大。',
    body: [
      {
        id: 'o-que-e-a-pep',
        heading: '什麼是暴露後預防',
        paragraphs: [
          '暴露後預防又稱 PEP，指的是曾處於愛滋病毒（HIV）感染風險情況的人使用抗反轉錄病毒藥物，以防止病毒在體內立足。',
          '它既不是一般的治療，也不是個人的選擇：而是一項緊急措施，需在衛生機構評估後依指示使用。',
        ],
      },
      {
        id: 'janela-de-72-horas',
        heading: '72 小時的窗口',
        paragraphs: [
          'PEP 必須盡早開始，最遲不超過暴露後 72 小時。超過這個期限就不再建議使用，因為生效的機會大幅下降。',
          '一旦開始服用，必須依衛生機構指示的整個期間持續使用，通常為 28 天。提前中斷會降低保護效果。',
        ],
      },
      {
        id: 'situacoes',
        heading: '建議接受評估的情況',
        bullets: [
          '與感染狀況不明、或感染愛滋病毒卻未接受治療的伴侶，發生未使用保險套或保險套破損的性行為',
          '共用針頭或注射器',
          '被銳利或可穿刺的物料造成意外',
          '性暴力，此情況必須立即就醫',
        ],
      },
      {
        id: 'onde-procurar',
        heading: '到哪裡求助',
        paragraphs: [
          'PEP 在巴西公共衛生系統（SUS）中免費提供，可透過急診服務與參考中心取得，且照護過程保密。',
          '除了 PEP 之外，衛生機構也會評估是否需要其他措施，例如接種疫苗以及檢測其他感染。',
        ],
      },
      {
        id: 'depois',
        heading: '之後呢',
        paragraphs: [
          '追蹤照護包括隨後數月內的多次檢測，因為近期的感染可能在最初的檢查中尚未顯現。按時回診是照護的一部分。',
        ],
        ctaLabel: '延伸閱讀：檢測不到＝不會傳染',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hiv-aids',
        label: '愛滋病毒與愛滋病：預防、診斷與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/hiv-aids',
        label: '愛滋病毒與愛滋病：實況報導',
        publisher: '世界衛生組織',
      },
    ],
  },

  'indetectavel-intransmissivel-o-que-significa': {
    title: '檢測不到＝不會傳染（U=U）：這是什麼意思？',
    metaTitle: '檢測不到：這是什麼意思',
    excerpt:
      '當愛滋病毒的治療按時進行、病毒量維持在檢測不到的水準時，病毒不會經由性行為傳播。說明這句話在實務上的意義。',
    body: [
      {
        id: 'o-que-e-carga-viral',
        heading: '什麼是病毒量',
        paragraphs: [
          '病毒量指的是血液中循環的病毒數量，以檢測衡量。當抗反轉錄病毒治療成效良好時，這個數量會下降到檢測無法定出的程度。',
          '這樣的結果稱為檢測不到。這並不表示病毒已經從體內消失，而是表示病毒受到控制。',
        ],
      },
      {
        id: 'o-que-significa',
        heading: '這句話的意義',
        paragraphs: [
          '依靠按時治療維持檢測不到的病毒量，意味著愛滋病毒不會經由性行為傳播。這就是被稱為「檢測不到＝不會傳染」（U=U）概念的基礎。',
          '這有長期研究作為支撐：研究對象為一方感染愛滋病毒、另一方未感染的伴侶，在病毒量維持檢測不到期間，沒有發生任何經性行為的傳播。',
        ],
      },
      {
        id: 'condicoes',
        heading: '成立所需的條件',
        paragraphs: [
          '這個概念在特定條件下才成立，忽略這些條件就會完全改變意義：',
        ],
        bullets: [
          '病毒量持續檢測不到，並透過定期檢測確認',
          '抗反轉錄病毒治療持續使用，未曾中斷',
          '定期接受衛生機構的追蹤照護',
          '這個說法指的是性行為傳播，不涉及經血液或共用針頭的傳播',
        ],
      },
      {
        id: 'por-que-importa',
        heading: '為何這很重要',
        paragraphs: [
          '除了對感染者的健康有直接影響之外，這個概念在對抗污名方面也有重要作用：它打破了「感染愛滋病毒就必然傳播病毒」的想法。',
          '這也進一步說明了為何治療提供給所有確診者，不論其免疫細胞數量為何。',
        ],
      },
      {
        id: 'o-que-nao-muda',
        heading: '不變的部分',
        paragraphs: [
          '檢測不到不是治癒，也不能取代追蹤照護。病毒量必須持續監測，而中斷治療會讓病毒重新開始循環。',
        ],
        ctaLabel: '愛滋病毒與愛滋病完整頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hiv-aids',
        label: '愛滋病毒與愛滋病：預防、診斷與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://unaids.org.br/',
        label: '愛滋病毒數據與資訊',
        publisher: '聯合國艾滋病規劃署巴西辦事處',
      },
    ],
  },

  'hepatites-virais-quais-tem-vacina': {
    title: '病毒性肝炎：哪些有疫苗？',
    excerpt:
      'A 型與 B 型肝炎有疫苗，而 B 型肝炎疫苗同時也能預防 D 型肝炎。C 型與 E 型肝炎則尚無可用疫苗。',
    body: [
      {
        id: 'o-mapa-das-vacinas',
        heading: '各型疫苗的狀況',
        bullets: [
          'A 型肝炎：有疫苗，在巴西公共衛生系統（SUS）中提供',
          'B 型肝炎：有疫苗，各年齡層均可接種',
          'D 型肝炎：沒有專屬疫苗，但 B 型肝炎疫苗能提供保護，因為 D 型肝炎只會發生在已有 B 型肝炎的人身上',
          'C 型肝炎：沒有可用疫苗',
          'E 型肝炎：沒有可用疫苗',
        ],
      },
      {
        id: 'por-que-a-b-e-tao-importante',
        heading: '為何 B 型肝炎疫苗如此重要',
        paragraphs: [
          '當感染轉為慢性，B 型肝炎可能進展為肝硬化與肝癌。感染年齡越早，慢性化的風險越高：嬰兒的感染多數會轉為慢性。疫苗是主要的預防方式，且在巴西公共衛生系統（SUS）免費提供。',
          '由於 D 型肝炎必須依賴 B 型肝炎才能發生，接種 B 型肝炎疫苗也一併消除了 D 型肝炎的風險。',
        ],
      },
      {
        id: 'sem-vacina',
        heading: '沒有疫苗時該怎麼做',
        paragraphs: [
          '至於 C 型與 E 型肝炎，預防要靠其他措施。E 型肝炎經由受污染的水與食物傳播，這凸顯了個人衛生與環境衛生設施的重要。',
          'C 型肝炎經血液傳播，預防做法包括不共用針頭、注射器、刀片，以及任何會切割或穿刺的物品，並使用保險套。',
        ],
      },
      {
        id: 'alem-da-vacina',
        heading: '疫苗之外',
        bullets: [
          '接受檢測，巴西公共衛生系統（SUS）免費提供',
          '性行為時使用保險套',
          '不共用會切割或穿刺的個人用品',
          '在刺青、穿洞等程序中確認使用滅菌物料',
          '完成完整的產前照護，其中包含檢測',
        ],
        ctaLabel: '病毒性肝炎完整頁面請見這裡',
      },
      {
        id: 'onde-vacinar',
        heading: '到哪裡接種',
        paragraphs: [
          '疫苗在社區基本衛生機構提供。由於各年齡層與各風險狀況的建議會隨時間調整，現行接種日程應查閱官方來源，或直接向您就診的衛生機構確認。',
        ],
        ctaLabel: '查詢預防接種日程',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hepatites-virais',
        label: '病毒性肝炎：預防、診斷與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-b',
        label: '乙型肝炎：實況報導',
        publisher: '世界衛生組織',
      },
    ],
  },

  'hepatite-c-tem-cura': {
    title: '丙型肝炎可以治癒：治療有何改變',
    excerpt:
      '丙型肝炎已不再是無可治療的疾病。使用直接作用抗病毒藥物後，多數人能治癒，而且治療免費提供。',
    body: [
      {
        id: 'o-que-mudou',
        heading: '改變了什麼',
        paragraphs: [
          '直到幾年前，丙型肝炎仍是一種療程困難、不良反應明顯的慢性疾病。直接作用抗病毒藥物的出現改變了局面，這類藥物直接作用於病毒的複製過程。',
          '如今，接受治療的多數人都能達到治癒，療程更短，耐受性也更好。',
        ],
      },
      {
        id: 'por-que-tratar',
        heading: '為何沒有症狀也要治療',
        paragraphs: [
          '丙型肝炎往往在數十年間毫無聲息。沒有症狀並不表示沒有損害：慢性感染可能進展為肝硬化與肝癌。',
          '盡早治療能中止這種進展。這正是建議所有成年人一生中至少接受一次檢測的原因。',
        ],
      },
      {
        id: 'como-e-o-tratamento',
        heading: '治療如何進行',
        paragraphs: [
          '治療以口服藥物進行，期間由醫療專業人員決定，並在巴西公共衛生系統（SUS）中免費提供。',
          '追蹤照護包括評估治療反應與肝臟狀況的檢測。是否治癒以療程結束後的檢測確認。',
        ],
      },
      {
        id: 'cura-nao-e-imunidade',
        heading: '治癒不等於免疫',
        paragraphs: [
          '治癒後並不受到保護，仍可能再次感染。丙型肝炎沒有疫苗，因此預防仍然必要：不共用會切割或穿刺的物品，並使用保險套。',
        ],
        ctaLabel: '延伸閱讀：哪些肝炎有疫苗',
      },
      {
        id: 'como-descobrir',
        heading: '如何知道自己是否感染',
        paragraphs: [
          '診斷透過血液檢測完成，衛生機構也提供快速檢測。由於疾病毫無聲息，接受檢測是唯一的確認途徑。',
        ],
        ctaLabel: '病毒性肝炎完整頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hepatites-virais',
        label: '病毒性肝炎：預防、診斷與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-c',
        label: '丙型肝炎：實況報導',
        publisher: '世界衛生組織',
      },
    ],
  },

  'asma-crise-o-que-fazer-enquanto-espera-atendimento': {
    title: '氣喘發作：等待就醫期間該怎麼做',
    metaTitle: '氣喘發作：該怎麼做',
    excerpt:
      '氣喘發作可能在數分鐘內惡化。辨識嚴重程度的訊號並迅速應對，是避免惡化的關鍵。',
    body: [
      {
        id: 'o-que-e-uma-crise',
        heading: '什麼是發作',
        paragraphs: [
          '氣喘患者的氣道因發炎而對誘發因子產生反應並收窄。發作就是收窄到妨礙空氣通過的時刻，隨即出現喘鳴、呼吸困難與胸口壓迫感。',
          '常見的誘發因子包括灰塵、黴菌、煙霧、天氣變化、呼吸道感染，以及與動物的接觸。',
        ],
      },
      {
        id: 'primeiros-passos',
        heading: '第一步',
        bullets: [
          '依您先前從衛生機構獲得的指示使用緩解藥物',
          '若誘發因子可以辨識，請離開該因子',
          '坐直並保持冷靜；躺下可能讓呼吸困難的感覺更明顯',
          '不要吸菸，也避免處於有煙霧的環境',
          '若未迅速改善，請就醫',
        ],
      },
      {
        id: 'sinais-de-gravidade',
        heading: '嚴重程度的訊號',
        paragraphs: [
          '以下訊號代表嚴重發作，需要立即接受急診照護：',
        ],
        bullets: [
          '無法說出完整的句子',
          '呼吸時明顯使用頸部與肋骨的肌肉',
          '嘴唇或指尖呈藍紫色',
          '發作期間出現嗜睡或意識混亂',
          '對緩解藥物沒有反應',
          '即使依平常方式治療仍持續惡化',
        ],
      },
      {
        id: 'o-que-nao-fazer',
        heading: '不該做的事',
        paragraphs: [
          '發作時不要用緩解藥物取代控制藥物。兩者功能不同：緩解藥物在當下打開氣道，控制藥物則長期處理發炎。',
          '出現嚴重訊號時，也不要等待發作自行過去。',
        ],
      },
      {
        id: 'depois-da-crise',
        heading: '發作之後',
        paragraphs: [
          '發作意味著病情控制可能不足。建議把這次情況帶到門診討論：通常需要調整控制藥物、檢視吸入器的使用技巧，或找出先前被忽略的誘發因子。',
        ],
        ctaLabel: '氣喘頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        label: '氣喘：指引與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/asthma',
        label: '氣喘：實況報導',
        publisher: '世界衛生組織',
      },
    ],
  },

  'dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro': {
    title: '慢性阻塞性肺病與吸菸：為何戒菸會改變病情',
    metaTitle: '慢性阻塞性肺病與吸菸：為何要戒菸',
    excerpt:
      '對慢性阻塞性肺病而言，戒菸是最能改變疾病進程的措施。說明會有哪些改變，以及為何戒菸的協助有差別。',
    body: [
      {
        id: 'relacao',
        heading: '吸菸與慢性阻塞性肺病的關係',
        paragraphs: [
          '慢性阻塞性肺病是一種進行性疾病，氣道與肺組織逐漸遭到破壞。吸菸是主要的風險因子，其影響取決於多年來累積的暴露量。',
          '不只是市售香菸：在密閉空間中暴露於柴火、煤炭與其他物料燃燒的煙霧，同樣會造成影響。',
        ],
      },
      {
        id: 'o-que-muda',
        heading: '戒菸後的改變',
        paragraphs: [
          '戒菸無法逆轉已經造成的損害，但能減緩肺功能流失的速度。實務上代表發作較少、住院較少，對費力的耐受度也較好。',
          '無論年齡多大、疾病到了哪個階段，都能獲益。愈早戒菸，收穫愈大，但何時開始都不算太晚。',
        ],
      },
      {
        id: 'nao-e-so-vontade',
        heading: '不只是意志力的問題',
        paragraphs: [
          '尼古丁成癮是一種可以治療的狀況。巴西公共衛生系統（SUS）為想戒菸的人提供支持，包括追蹤照護，以及在有指徵時提供藥物。',
          '過去未能成功並不代表失敗：多數戒菸成功的人都試過不止一次。',
        ],
      },
      {
        id: 'outras-medidas',
        heading: '其他有幫助的措施',
        bullets: [
          '依衛生指引接種流感疫苗與其他呼吸道感染的疫苗',
          '以正確的方式並持續使用吸入型藥物',
          '在有指徵時參與肺部復健',
          '避免暴露於任何來源的煙霧，包括被動吸菸',
          '在專業指導下維持符合自身狀況的身體活動',
        ],
        ctaLabel: '慢性阻塞性肺病頁面請見這裡',
      },
      {
        id: 'quando-procurar',
        heading: '何時就醫',
        paragraphs: [
          '若呼吸困難加劇、痰液出現變化、發燒，或需要更頻繁使用緩解藥物，請就醫。說話困難、嘴唇呈藍紫色或嗜睡屬於急症。',
        ],
        ctaLabel: '延伸閱讀：氣喘發作該怎麼做',
      },
    ],
    references: [
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        label: '慢性阻塞性肺病（COPD）：實況報導',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tabagismo',
        label: '吸菸：指引與治療',
        publisher: '巴西衛生部',
      },
    ],
  },

  'dpoc-sinais-de-alerta-quando-procurar-atendimento': {
    title: '慢性阻塞性肺病：警示徵兆與何時就醫',
    metaTitle: '慢性阻塞性肺病：警示徵兆',
    excerpt:
      '呼吸困難快速加劇、痰液變深或發燒，可能代表慢性阻塞性肺病急性惡化。了解哪些是警示徵兆，哪些屬於急症。',
    body: [
      {
        id: 'o-que-e-uma-crise',
        heading: '什麼是急性惡化',
        paragraphs: [
          '慢性阻塞性肺病的急性惡化，是指症狀突然加重、持續兩天以上且無法自行緩解。呼吸困難加劇，痰液變多或顏色變深，也可能出現發燒。',
          '多數情況由呼吸道感染引發。暴露於煙霧與粉塵、空氣污染，以及中斷治療，也都可能誘發一次發作。',
        ],
      },
      {
        id: 'sinais-de-piora',
        heading: '病情惡化的徵兆',
        paragraphs: ['以下徵兆代表病情已失去控制，值得進一步評估：'],
        bullets: [
          '從事以往輕而易舉的活動時，呼吸困難加重',
          '需要更頻繁使用緩解型藥物',
          '痰液顏色變深、變得更黏稠或量變多',
          '發燒、咳嗽與喘鳴比平時更嚴重',
        ],
      },
      {
        id: 'quando-procurar',
        heading: '何時就醫',
        paragraphs: [
          '若惡化持續兩天以上，請到平時追蹤此病的醫療院所或急診就醫。及早評估可避免發作加重。',
          '急性惡化越早治療，住院風險越低。治療通常包括加強支氣管擴張劑，必要時加上類固醇與抗生素。',
        ],
      },
      {
        id: 'emergencia',
        heading: '何時屬於急症',
        paragraphs: ['若出現以下情況，請立即前往急診或撥打當地急救電話：'],
        bullets: [
          '難以完整說出一句話',
          '呼吸時明顯看見頸部與肋骨的肌肉在用力',
          '嘴唇或指尖呈現青紫色',
          '惡化期間嗜睡或意識混亂',
          '使用緩解型藥物後沒有改善',
          '儘管依循常規治療，病情仍持續加重',
        ],
        ctaLabel: '慢性阻塞性肺病頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        label: '慢性阻塞性肺病（COPD）：事實摘要',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/20220912_PCDT_Resumido_DPOC_final.pdf/@@download/file',
        label: '慢性阻塞性肺病臨床診療指引（PCDT）',
        publisher: '巴西衛生部',
      },
    ],
  },

  'dpoc-como-e-diagnosticada': {
    title: '慢性阻塞性肺病：如何診斷',
    excerpt:
      '肺功能檢查（肺量計）是確診慢性阻塞性肺病的關鍵。了解診斷如何進行、這項檢查測量什麼，以及為何重要。',
    body: [
      {
        id: 'como-e-confirmado',
        heading: '如何確認診斷',
        paragraphs: [
          '慢性阻塞性肺病的診斷不能只靠症狀，而是綜合臨床病史、身體檢查，以及一項稱為肺功能檢查（肺量計）的檢查來判斷。',
          '肺功能檢查是確診的必要條件，也是區分慢性阻塞性肺病與氣喘及其他狀況的關鍵。',
        ],
      },
      {
        id: 'espirometria',
        heading: '肺功能檢查',
        paragraphs: [
          '檢查時，受檢者先深吸一口氣，再用力對儀器吹氣。測量會在使用支氣管擴張劑前後各進行一次。',
          '在慢性阻塞性肺病中，使用支氣管擴張劑後，第一秒用力呼氣量（FEV1）與用力肺活量（FVC）的比值仍低於 0.70。這代表阻塞無法完全回復，也有助於排除氣喘——氣喘的改善通常較明顯。',
        ],
      },
      {
        id: 'outros-exames',
        heading: '其他有幫助的檢查',
        paragraphs: ['除了肺功能檢查，也可能安排其他檢查來評估嚴重程度與其他狀況：'],
        bullets: [
          '胸部 X 光，用以排除其他疾病',
          '胸部電腦斷層，當病情懷疑有其他狀況時',
          '血氧飽和度監測，必要時進行動脈血氣體分析，以評估血液中的氧氣',
          '運動或行走測試，用於需要評估運動耐受度時',
        ],
      },
      {
        id: 'quando-suspeitar',
        heading: '何時該懷疑並就醫評估',
        paragraphs: ['若有持續的呼吸道症狀並伴隨風險因素，建議就醫評估，例如：'],
        bullets: [
          '呼吸困難逐漸出現，並在活動時加重',
          '咳嗽帶痰持續數週或數月',
          '有吸菸史，或長期暴露於粉塵與煙霧',
          '反覆發生呼吸道感染',
        ],
        ctaLabel: '慢性阻塞性肺病頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        label: '慢性阻塞性肺病（COPD）：事實摘要',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/20220912_PCDT_Resumido_DPOC_final.pdf/@@download/file',
        label: '慢性阻塞性肺病臨床診療指引（PCDT）',
        publisher: '巴西衛生部',
      },
    ],
  },

  'dpoc-tratamento-e-cuidados': {
    title: '慢性阻塞性肺病：治療與日常照護',
    excerpt:
      '慢性阻塞性肺病的治療結合吸入型藥物、肺部復健與日常調整。了解持續照護包含哪些內容。',
    body: [
      {
        id: 'tratamento-continuo',
        heading: '治療是持續的',
        paragraphs: [
          '慢性阻塞性肺病無法治癒，但有治療方法。目標是緩解症狀、改善呼吸、減少發作，並維持生活品質。',
          '治療結合藥物、肺部復健與生活型態調整，並會隨時間依個人症狀與發作情況調整。',
        ],
      },
      {
        id: 'medicamentos',
        heading: '吸入型藥物',
        paragraphs: [
          '治療的基礎是吸入型支氣管擴張劑。在特定情況下，醫療團隊可能加上其他類別，例如吸入型類固醇。',
          '維持型藥物每天都要使用，即使感覺良好時也不例外。緩解型藥物用於呼吸困難發作，不能取代維持型治療。',
        ],
      },
      {
        id: 'tecnica-do-inalador',
        heading: '吸入劑的使用技巧',
        paragraphs: ['正確使用吸入劑至關重要：技巧錯誤會讓藥物無法進入肺部。'],
        bullets: [
          '回診時帶著吸入劑，以便重新確認使用技巧',
          '依照裝置指示的時間間隔與吸入次數操作',
          '若有指示，使用輔助器（spacer）幫助藥物進入肺部',
          '使用含類固醇的吸入劑後漱口',
        ],
      },
      {
        id: 'reabilitacao-e-oxigenio',
        heading: '肺部復健與氧氣',
        paragraphs: [
          '肺部復健包含運動、健康教育，以及協助與呼吸困難共處的支持，能改善運動耐受度與生活品質。',
          '血氧偏低的人可能需要在家使用氧氣治療，每天至少使用 15 小時。是否有需要，會依檢查結果決定。',
        ],
      },
      {
        id: 'dia-a-dia',
        heading: '日常照護',
        paragraphs: ['有些習慣屬於持續照護的一部分：'],
        bullets: [
          '依醫療院所的指引按時完成疫苗接種',
          '在專業人員指導下，從事適合自身狀況的體能活動',
          '練習呼吸技巧，例如縮唇呼吸',
          '保持居家通風，遠離煙霧、塵埃與黴菌',
          '規律回診，且在沒有症狀的期間也不要中斷治療',
        ],
        ctaLabel: '慢性阻塞性肺病頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/20220912_PCDT_Resumido_DPOC_final.pdf/@@download/file',
        label: '慢性阻塞性肺病臨床診療指引（PCDT）',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tabagismo',
        label: '吸菸：相關說明與戒菸治療',
        publisher: '巴西衛生部',
      },
    ],
  },

  'dpoc-como-prevenir-crises-e-o-papel-das-vacinas': {
    title: '慢性阻塞性肺病：如何預防發作與疫苗的角色',
    metaTitle: '慢性阻塞性肺病：如何預防發作',
    excerpt:
      '按時接種疫苗、遠離煙霧並持續治療，有助於減少慢性阻塞性肺病的發作。了解自己能做些什麼。',
    body: [
      {
        id: 'vacinas',
        heading: '有幫助的疫苗',
        paragraphs: [
          '慢性阻塞性肺病患者屬於流感疫苗的優先接種族群，疫苗每年提供。感染流感病毒會增加發作與併發症的風險。',
          '另有其他建議接種的疫苗，例如肺炎鏈球菌與 COVID-19 疫苗。實際的接種時程由醫療團隊依個人情況說明。',
        ],
        bullets: [
          '流感疫苗：每年接種一次，依全國接種計畫辦理',
          'COVID-19 疫苗：依當地指引接種',
          '肺炎鏈球菌疫苗：建議呼吸道慢性疾病患者接種',
        ],
      },
      {
        id: 'evitar-gatilhos',
        heading: '避免誘發因素',
        paragraphs: ['許多發作是由感染與可避免的刺激物所引起：'],
        bullets: [
          '不要吸菸，並避免在家中與工作場所接觸菸霧',
          '避免在密閉空間接觸柴火、木炭及其他物料燃燒的煙霧',
          '減少暴露於粉塵、黴菌與刺激性清潔用品',
          '勤洗手，並避免接觸感冒的人',
        ],
      },
      {
        id: 'tratamento-em-dia',
        heading: '持續治療不中斷',
        paragraphs: [
          '即使沒有症狀，每天持續治療，也是預防發作最有效的方式之一。',
          '回診的目的在於調整藥物、重新確認吸入劑技巧，並檢查疫苗接種。',
        ],
      },
      {
        id: 'quando-revisar',
        heading: '何時該回診重新評估',
        paragraphs: [
          '若發作變得更頻繁，或呼吸困難加劇，請就醫重新評估治療。',
          '新出現或持續存在的症狀，不應只歸因於慢性阻塞性肺病：其他狀況也可能需要進一步檢查。',
        ],
        ctaLabel: '慢性阻塞性肺病頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        label: '國家疫苗接種行事曆',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)',
        label: '慢性阻塞性肺病（COPD）：事實摘要',
        publisher: '世界衛生組織',
      },
    ],
  },

  'infarto-quais-sao-os-sinais-e-o-que-fazer': {
    title: '心肌梗塞：有哪些訊號以及該怎麼做',
    excerpt:
      '胸部疼痛或壓迫感，並延伸到手臂、頸部或下顎，是心肌梗塞最常見的訊號。一旦懷疑，請立即求助。',
    body: [
      {
        id: 'sinais-classicos',
        heading: '最常見的訊號',
        paragraphs: [
          '急性心肌梗塞發生在為心臟輸血的動脈遭到阻塞時。最常見的訊號是胸痛或胸部壓迫感，可能延伸到左臂、頸部、下顎或背部。',
        ],
        bullets: [
          '胸部疼痛或壓迫，伴隨重量感',
          '疼痛延伸到手臂、頸部、下顎或背部',
          '冒冷汗與臉色蒼白',
          '呼吸困難',
          '噁心或嘔吐',
          '瀕死感或強烈的焦慮',
        ],
      },
      {
        id: 'formas-atipicas',
        heading: '當心肌梗塞的疼痛不如預期',
        paragraphs: [
          '糖尿病患者與年長者的心肌梗塞，可能沒有劇烈疼痛。在這些情況下，訊號可能只是呼吸困難、異常疲倦、不適或意識混亂。',
          '也有以胃痛呈現的情形，常被誤認為消化不良。這種相似之處之所以危險，正在於它會延遲就醫。',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: '懷疑時的應對',
        bullets: [
          '立即撥打當地急救電話求助',
          '若在場另有他人，不要自己開車',
          '不要等待症狀過去才就醫',
          '不要自行服用藥物',
          '記下症狀開始的時間',
        ],
      },
      {
        id: 'por-que-o-tempo-conta',
        heading: '為何時間如此關鍵',
        paragraphs: [
          '心肌在缺乏氧氣數分鐘後就開始壞死。血液流動愈快恢復，永久損傷的範圍就愈小。這正是急診照護成為治療中最重要一環的原因。',
        ],
      },
      {
        id: 'prevencao',
        heading: '如何降低風險',
        paragraphs: [
          '長年控制風險因子，是降低心肌梗塞風險最有效的方式。高血壓、糖尿病、膽固醇過高、吸菸與缺乏運動是主要的目標。',
        ],
        ctaLabel: '延伸閱讀：如何辨識腦卒中的訊號',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doencas-cardiovasculares',
        label: '心血管疾病：預防與照護',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
        label: '心血管疾病：實況報導',
        publisher: '世界衛生組織',
      },
    ],
  },

  'avc-como-reconhecer-os-sinais-e-agir-rapido': {
    title: '腦中風：如何辨識症狀並把握黃金時間',
    excerpt:
      '身體單側無力、嘴角歪斜、說話困難，是腦中風最常見的徵兆。FAST 口訣能幫助快速辨識，一旦懷疑應立刻撥打急救電話。',
    body: [
      {
        id: 'o-que-e',
        heading: '什麼是腦中風？',
        paragraphs: [
          '腦中風是一種急症：每拖延一分鐘，就有更多腦細胞受損。能否及早辨識徵兆並立刻求救，往往決定了能不能完全康復，還是留下永久後遺症。',
          '腦中風發生於供應腦部的血管阻塞或破裂，使該區域因缺血而失去功能。主要有兩大型態：缺血性腦中風由血栓阻塞造成，約佔八成五；出血性腦中風由血管破裂引起，約佔一成五。此外，短暫性腦缺血發作（俗稱小中風）的症狀會在數分鐘內緩解，卻是即將發生中風的重要警訊。',
        ],
      },
      {
        id: 'sinais',
        heading: '腦中風有哪些症狀與前兆？',
        paragraphs: [
          '腦中風的徵兆通常突然出現，且多半只影響身體一側。依據世界衛生組織與各國衛生單位的整理，應留意以下症狀：',
        ],
        bullets: [
          '單側臉部無力或麻木，嘴角下垂',
          '身體一側的手臂或腿部無力',
          '說話困難，或聽不懂別人說的話',
          '單眼或雙眼突然視力喪失',
          '嚴重暈眩、失去平衡或行走困難',
          '突發且劇烈的頭痛，找不到明顯原因',
        ],
      },
      {
        id: 'teste-rapido',
        heading: '如何用 FAST 口訣辨識腦中風？',
        paragraphs: [
          'FAST 是最簡單、任何人都能做的辨識口訣，每個字母對應一項觀察重點：',
          '請對方笑一笑（Face 臉：一側是否歪斜？）、舉起雙手（Arms 手：一隻是否垂落？）、說一句簡單的話（Speech 說：是否口齒不清？）。任一項異常，T（Time 時間）就代表要立刻撥打急救電話。台灣腦中風學會也以 FAST 作為對民眾的衛教口訣，提醒把握黃金時間就醫；測試正常並不能完全排除中風，但能避免漏掉典型個案。',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: '懷疑腦中風時該怎麼做？',
        paragraphs: [
          '一旦懷疑是中風，必須立刻啟動急救。搶在到達醫院前的黃金時間內就醫，才打得開治療的選項。',
        ],
        bullets: [
          '立刻撥打當地急救電話，並說明懷疑是腦中風',
          '記下症狀開始的確切時間',
          '不要給患者進食、喝水或自行用藥',
          '不要讓患者獨處，必要時協助平躺',
          '切勿自行開車送醫：請救護車，讓急救處置在送往醫院途中就能展開',
        ],
      },
      {
        id: 'tempo',
        heading: '為什麼黃金時間這麼重要？',
        paragraphs: [
          '中風講求分秒必爭。根據美國 CDC，最有效的中風治療，必須在症狀出現後約三小時內就醫才能使用；因此記下發作時間、立刻求救，和診斷本身一樣重要。',
        ],
      },
      {
        id: 'fatores-risco',
        heading: '哪些因素會增加腦中風風險？',
        paragraphs: [
          '多項因素會提高腦中風的風險，其中許多可以長期控制：',
        ],
        bullets: [
          '高血壓，最主要的風險因子',
          '第二型糖尿病',
          '膽固醇過高',
          '吸菸',
          '體重過重與肥胖',
          '缺乏規律運動的靜態生活',
          '過量飲酒或使用非法藥物',
          '年齡增長、家族病史，以及心房顫動等心律不整',
        ],
      },
      {
        id: 'prevencao',
        heading: '如何降低腦中風風險？',
        paragraphs: [
          '多數中風其實可以靠日常調整與控制風險因子來預防。依照世界衛生組織的建議，控制血壓、不吸菸、均衡飲食、規律運動、並治療糖尿病與高膽固醇，是降低風險最有效的幾項措施。',
        ],
        ctaLabel: '高血壓完整頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/stroke',
        label: '卒中：實況報導',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        label: '腦中風：症狀、類型與預防',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.cdc.gov/stroke/signs-symptoms/index.html',
        label: '腦中風的徵兆與症狀（B.E. F.A.S.T.）',
        publisher: '美國疾病管制與預防中心（CDC）',
      },
    ],
  },

  'asma-sintomas-e-sinais-de-alerta': {
    title: '氣喘的症狀與警示訊號',
    excerpt: '喘鳴、呼吸困難與時好時壞的咳嗽是氣喘最常見的表現。認清嚴重程度的訊號，才能避免發作惡化。',
    body: [
      {
        id: 'sintomas',
        heading: '哪些症狀代表氣喘',
        paragraphs: [
          '氣喘最常見的症狀是喘鳴、呼吸困難、胸口緊縮或壓迫感，以及咳嗽，咳嗽多為乾咳。這些症狀以發作的形式出現，有時會自行緩解，有時需要治療。',
          '嚴重程度因人而異：有人症狀輕微且間隔很久，有人則經常發作。症狀在夜間或清晨加重也很常見。',
        ],
        bullets: [
          '胸部發出哮鳴聲，即所謂的喘鳴',
          '呼吸困難，且在用力時加劇',
          '胸部有緊縮或壓迫感',
          '乾咳且持續，尤其在夜間',
          '夜間因呼吸困難或咳嗽而醒來',
        ],
      },
      {
        id: 'variacao',
        heading: '症狀為何時好時壞',
        paragraphs: [
          '氣喘患者的氣道處於發炎狀態，也較為敏感。接觸誘發因子時氣道收窄，症狀隨之出現；遠離誘發因子或治療穩定時，情況就會改善。',
          '這種起伏讓不少人在狀況好的時候低估了疾病。其實即使沒有症狀，發炎仍然存在，因此控制型藥物不應因為感覺良好而中斷。',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: '警示訊號',
        paragraphs: ['以下訊號代表嚴重發作，請立即撥打當地急救電話或前往急診：'],
        bullets: [
          '難以完整說出一句話',
          '呼吸時明顯看見頸部與肋骨的肌肉在用力',
          '嘴唇或指尖呈現青紫色',
          '發作時嗜睡或意識混亂',
          '使用緩解型藥物後沒有改善',
          '儘管依循常規治療，病情仍持續加重',
        ],
      },
      {
        id: 'quando-procurar',
        heading: '何時就醫',
        paragraphs: [
          '若症狀每週出現超過兩次、夜間因此醒來，或影響日常活動，代表控制並不理想，建議把這些情況帶到門診討論。',
          '不要等到嚴重發作才求助：調整治療通常不複雜，卻能明顯改善生活品質。',
        ],
        ctaLabel: '氣喘頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        label: '氣喘：指引與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/asthma',
        label: '氣喘：事實摘要',
        publisher: '世界衛生組織',
      },
    ],
  },

  'asma-diagnostico-e-exames': {
    title: '氣喘是如何診斷的',
    excerpt: '氣喘的診斷結合了時好時壞的症狀病史，以及測量肺部氣流的檢查。',
    body: [
      {
        id: 'historia-e-exame',
        heading: '病史與身體檢查',
        paragraphs: [
          '診斷始於與專業人員的對話及身體檢查。會特別重視時好時壞的症狀、在夜間或清晨加重，以及接觸誘發因子後才出現的症狀。',
          '過敏、鼻炎與家族氣喘史，以及吸菸、接觸塵埃與黴菌等因素，也都納入評估。',
        ],
      },
      {
        id: 'espirometria',
        heading: '肺功能檢查',
        paragraphs: [
          '肺功能檢查是確認氣道阻塞的檢查。它測量空氣進出肺部的狀況，並記錄第一秒用力呼氣量（VEF1）。',
          '檢查會在吸入支氣管擴張劑後再做一次。若 VEF1 增加至少 12% 且達 200 毫升，代表阻塞具可逆性，這是氣喘的特徵。',
        ],
      },
      {
        id: 'outros-exames',
        heading: '其他有幫助的檢查',
        bullets: [
          '支氣管激發試驗，用於症狀疑似但肺功能檢查正常時',
          '部分情況下測量尖峰呼氣流速，用來追蹤控制狀況',
          '過敏原檢測，在需要找出相關過敏原時使用',
          '用於排除其他原因的檢查，例如胸部 X 光與鼻炎的評估',
        ],
      },
      {
        id: 'diagnostico-em-criancas',
        heading: '兒童的診斷',
        paragraphs: [
          '年幼孩童較難配合肺功能檢查，因為這項檢查需要配合動作。在這些情況下，診斷主要依賴症狀與對治療的反應。',
          '在判定為氣喘之前，醫師必須排除其他造成咳嗽與喘鳴的原因，例如細支氣管炎、過敏性鼻炎與胃食道逆流。',
        ],
      },
      {
        id: 'depois-do-diagnostico',
        heading: '確診之後',
        paragraphs: [
          '確診之後，下一步是建立長期的治療計畫，並學會辨識病情加重的訊號。規律的追蹤才是讓氣喘維持控制的關鍵。',
        ],
        ctaLabel: '氣喘頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        label: '氣喘：指引與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma/pcdt',
        label: '氣喘：臨床診療指引（PCDT）',
        publisher: '巴西衛生部',
      },
    ],
  },

  'asma-tratamento-e-controle': {
    title: '氣喘的治療與日常控制',
    excerpt: '氣喘的治療結合每天使用的控制型藥物，以及發作時使用的緩解型藥物。持之以恆才能讓病情穩定。',
    body: [
      {
        id: 'medicamentos',
        heading: '控制型藥物與緩解型藥物',
        paragraphs: [
          '氣喘的藥物分為兩類，功能不同。控制型藥物減輕氣道發炎，必須每天使用，即使沒有症狀也不例外；緩解型藥物在發作時打開氣道，並不能取代控制型藥物。',
          '頻繁只使用緩解型藥物，代表控制並不理想，因為它無法處理症狀背後的發炎。治療的調整目標，是用能維持控制的最低必要劑量，以減少副作用。',
        ],
        bullets: [
          '主要的控制型藥物是吸入型類固醇，例如倍氯米松。',
          '緩解型藥物是支氣管擴張劑，例如沙丁胺醇。',
          '某些情況下，專業人員會把兩者合在同一支吸入器裡，方便使用。',
        ],
      },
      {
        id: 'inalador',
        heading: '吸入器的使用技巧',
        paragraphs: [
          '吸入器的使用技巧是治療的一部分。技巧錯誤時，大部分藥物會留在口腔與喉嚨，而沒有進入肺部，效果因此打折。',
          '常見的正確步驟是：搖勻吸入器、完全呼氣、雙唇含住咬嘴、一邊按壓一邊緩慢深吸、屏住呼吸幾秒鐘後再吐氣。使用吸入型類固醇的人，事後通常會漱口，以避免聲音沙啞與鵝口瘡。',
        ],
        bullets: [
          '不妨在門診請專業人員確認您的技巧。',
          '詢問是否需要搭配輔助裝置，讓孩童或協調有困難的人更容易使用。',
        ],
      },
      {
        id: 'sus',
        heading: '巴西公共衛生系統的免費治療',
        paragraphs: [
          '在巴西公共衛生系統（SUS），氣喘的治療是免費的。自 2011 年起，「大眾藥房計畫」（Farmácia Popular）憑國民稅號（CPF）與醫師處方，免費提供三種藥物：吸入型的倍氯米松與沙丁胺醇，以及異丙托溴銨。這三種都列在巴西衛生部的氣喘臨床診療指引中。',
          '在較嚴重的發作時，專業人員可能會開立口服類固醇，例如潑尼松，作為持續用藥之外的補充。建議前往基層衛生單位（UBS），在那裡接受治療與追蹤。',
        ],
      },
      {
        id: 'acompanhamento',
        heading: '追蹤照護',
        bullets: [
          '即使沒有症狀，也按時回診追蹤。',
          '每天使用控制型藥物，不要自行中斷。',
          '記錄發作與其誘發因子，回診時提供給專業人員。',
          '定期檢視吸入器的使用技巧與是否需要調整劑量。',
          '讓疫苗維持在接種時程，尤其是流感疫苗，因為呼吸道感染是引發發作的常見誘因。',
        ],
      },
      {
        id: 'plano-de-acao',
        heading: '書面行動計畫',
        paragraphs: [
          '許多醫療單位會提供一份書面的行動計畫，說明日常該怎麼做、症狀惡化時該怎麼辦、何時該就醫。它把治療轉化為清楚的步驟，減少發作當下的慌亂。',
          '把這份計畫放在手邊、並在回診時一起複習，有助於及早發現控制失靈的訊號。請向專業人員索取這份計畫：它是照護的一部分，不是額外的要求。',
        ],
      },
      {
        id: 'quando-buscar-socorro',
        heading: '何時需要緊急就醫',
        paragraphs: [
          '氣喘可能很嚴重；在極端而罕見的情況下，若發作沒有得到正確治療，甚至可能致命。因此某些警訊需要立即就醫，不能等例行門診。',
          '一旦出現下列任一警訊，請立刻就醫；若有疑慮，可撥打當地急救電話或前往最近的急診。',
        ],
        bullets: [
          '嚴重呼吸困難，連說完整句子或平躺都有困難。',
          '嘴唇或指甲發紫，是缺氧的訊號。',
          '使用緩解型藥物後沒有緩解，或緩解的時間很短。',
          '嗜睡、意識混亂，或呼吸極度費力而疲倦。',
          '儘管治療，症狀仍快速惡化。',
        ],
      },
      {
        id: 'adesao',
        heading: '為什麼遵從治療很重要',
        paragraphs: [
          '控制型藥物只有在持續使用時才發揮保護作用。症狀消失就自行停藥，是氣喘再次發作最常見的原因之一，因為發炎會在症狀出現之前悄悄回來。',
          '每天持續用藥、檢視技巧、不自行加量，都是維持控制簡單而關鍵的做法。只要有正確且持續的追蹤，大多數氣喘患者都能過正常生活。',
        ],
      },
      {
        id: 'duvidas-comuns',
        heading: '關於治療的常見疑問',
        paragraphs: [
          '感覺好了可以停藥嗎？不行。控制型藥物作用在發炎，而發炎可能在毫無預警下復發。在專業人員指示之前，請維持每天使用。',
          '吸入器會上癮嗎？氣喘藥物不會造成依賴。緩解型藥物是在發作時打開氣道；用得很頻繁代表控制需要重新評估，而不是藥物會上癮。',
          '運動會誘發發作嗎？在控制不理想的人身上有可能。只要治療調整得當，體能活動反而是照護的一部分，並能改善呼吸能力。',
        ],
      },
      {
        id: 'quando-reavaliar',
        heading: '何時需要重新評估控制',
        paragraphs: [
          '經常發作、夜間醒來，以及反覆使用緩解型藥物，都代表需要重新檢視治療計畫。請把這些情況告知衛生機構，不要自行增加劑量。',
        ],
        ctaLabel: '氣喘頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        label: '氣喘：指引與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma/pcdt',
        label: '氣喘：臨床診療指引（PCDT）',
        publisher: '巴西衛生部',
      },
    ],
  },

  'asma-como-evitar-crises': {
    title: '如何避免氣喘發作',
    excerpt: '找出誘發因子、照顧居家環境，並讓疫苗與治療維持在軌道上，是減少發作最有幫助的幾件事。',
    body: [
      {
        id: 'gatilhos',
        heading: '找出誘發因子',
        paragraphs: [
          '每個人都有自己的誘發因子。最常見的是塵蟎與塵埃、黴菌、動物毛屑、香菸煙霧、天氣變化、呼吸道感染與運動。',
          '記下發作的時間與地點，有助於找出模式，並減少接觸最常見的誘發因子。',
        ],
      },
      {
        id: 'casa',
        heading: '居家環境的照顧',
        bullets: [
          '保持住家通風並讓陽光照射',
          '減少容易積塵的物品，例如地毯、窗簾與絨毛玩具',
          '經常清洗寢具與毛毯',
          '處理滲漏與潮濕，避免黴菌滋生',
          '不要在家中吸菸，並避免任何來源的煙霧',
        ],
      },
      {
        id: 'vacinas',
        heading: '疫苗按時接種',
        paragraphs: [
          '呼吸道感染是引發發作的主要原因之一，因此按時接種疫苗也是氣喘控制的一部分。',
          '使用吸入型或全身性皮質類固醇的中度或重度氣喘患者，屬於每年流感疫苗接種活動的優先族群。',
        ],
      },
      {
        id: 'vida-ativa',
        heading: '保持活躍與病情控制',
        paragraphs: [
          '體能活動是治療的一部分，能改善呼吸能力。若運動經常引發發作，代表控制可能並不理想，治療通常會隨之調整。',
          '維持健康體重並每天使用控制型藥物，可降低發作機會，包括由運動引起的發作。',
        ],
      },
      {
        id: 'plano-de-acao',
        heading: '書面的行動計畫',
        paragraphs: [
          '許多衛生機構會提供書面的行動計畫，說明症狀加重時該怎麼做、何時該求助。建議把它放在隨手可取的地方，並在回診時重新檢視。',
        ],
        ctaLabel: '氣喘頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/asma',
        label: '氣喘：指引與治療',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/vacinacao',
        label: '疫苗接種：接種時程與優先族群',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/asthma',
        label: '氣喘：事實摘要',
        publisher: '世界衛生組織',
      },
    ],
  },

  'infarto-e-avc-fatores-de-risco': {
    metaTitle: '心肌梗塞與腦卒中：風險因子',
    title: '心肌梗塞與腦卒中：有哪些風險因子',
    excerpt: '高血壓、糖尿病、膽固醇過高、吸菸與久坐不動，是多數病例背後的原因。其中大部分風險因子都可以控制。',
    body: [
      {
        id: 'fatores-comuns',
        heading: '心肌梗塞與腦卒中的共同點',
        paragraphs: [
          '兩者都發生在一條動脈被阻塞、部分組織得不到氧氣的時候。因此，長年損害血管的各種因子，會同時提高心肌梗塞與腦卒中的風險。',
          '多數病例背後是動脈粥狀硬化：脂肪斑塊堆積在動脈壁上，一旦破裂就會形成血栓，中斷血流。',
        ],
      },
      {
        id: 'hipertensao',
        heading: '高血壓',
        paragraphs: [
          '[高血壓](/doencas/hipertensao/) 是腦卒中的首要風險因子，也是心肌梗塞的主要風險因子之一。血壓過高會磨損動脈壁，同時提高血管阻塞與腦部血管破裂的機率。',
          '控制血壓靠的是長期追蹤：量血壓、每天按時服藥，必要時調整劑量。因為血壓改善就自行停藥，是血壓再度升高最常見的原因之一。',
        ],
        bullets: [
          '在家中或衛生單位定期量測血壓',
          '按醫囑時間服藥，不要自行中斷',
          '減少飲食中的鹽分，避免超加工食品',
          '把量到的數值記錄下來，回診時帶給醫師',
        ],
      },
      {
        id: 'outros-fatores',
        heading: '其他重要的風險因子',
        paragraphs: [
          '糖尿病與膽固醇過高、吸菸、體重過重、久坐不動、飲酒過量、高齡與家族史，都在這份清單上。糖尿病與高血壓同時存在時影響更大：在這種情況下，發生心肌梗塞的機率是其他人的二到四倍。',
        ],
        bullets: [
          '糖尿病者把血糖控制在目標範圍',
          '膽固醇過高者依照醫師指示接受治療',
          '戒菸',
          '維持適當體重，並減少鹽分與油脂',
          '規律進行體能活動',
          '減少飲酒，不要使用非法藥物',
          '治療心房顫動，以免形成跑到腦部的血栓',
        ],
      },
      {
        id: 'o-que-muda',
        heading: '哪些是可以改變的',
        paragraphs: [
          '年齡、家族史與性別無法改變，但大部分的風險取決於可以治療與追蹤的因子。有高血壓、糖尿病或膽固醇過高的人，只要持續治療，就能明顯降低發作的機率。',
          '辨識徵兆也是一種預防：及早到達醫療現場，才能接受可避免後遺症的治療。',
        ],
        ctaLabel: '心肌梗塞與腦卒中頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/i/infarto',
        label: '心肌梗塞：症狀、風險因子與就醫',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        label: '腦卒中：類型、徵兆、治療與復健',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
        label: '心血管疾病：事實摘要',
        publisher: '世界衛生組織',
      },
    ],
  },

  'infarto-e-avc-como-e-diagnosticado': {
    metaTitle: '心肌梗塞與腦卒中：如何診斷',
    title: '心肌梗塞與腦卒中：如何診斷',
    excerpt: '心肌梗塞靠心電圖與心肌旋轉蛋白確認心臟受損；腦卒中靠腦部電腦斷層分辨是阻塞還是出血。',
    body: [
      {
        id: 'na-urgencia',
        heading: '診斷在急診現場完成',
        paragraphs: [
          '兩者的診斷都在急診的處置過程中完成，而不是事後在門診慢慢檢查。目標是確認事件類型，並盡快開始治療。',
          '因此，出現症狀時的第一步是呼救，而不是自行找地方做檢查。',
        ],
      },
      {
        id: 'infarto',
        heading: '心肌梗塞如何確認',
        paragraphs: [
          '患者一到院就會接受評估：生命徵象、臨床檢查，以及能顯示冠狀動脈阻塞典型變化的心電圖。',
          '血液檢查測的是心肌旋轉蛋白，這是心肌受損時出現的蛋白。有些情況需要重複心電圖與檢驗，才能確認或排除心肌梗塞。',
        ],
        bullets: [
          '一抵達就做的心電圖',
          '血液中的心肌旋轉蛋白檢驗',
          '需要從血管內部觀察冠狀動脈時的心導管檢查',
        ],
      },
      {
        id: 'avc',
        heading: '腦卒中如何確認',
        paragraphs: [
          '腦部電腦斷層是初步評估最常用的影像檢查。它能區分由阻塞造成的缺血性腦卒中與由血管破裂造成的出血性腦卒中，而這個差別決定了治療方式。',
          '影像檢查之外，醫療團隊也會確認血壓、血糖，以及症狀開始的準確時間。最後這項資訊，決定了是否還來得及進行血栓溶解治療。',
        ],
        bullets: ['腦部電腦斷層', '血壓與血糖', '症狀開始時間的記錄'],
      },
      {
        id: 'acompanhamento',
        heading: '追蹤檢查',
        paragraphs: [
          '有風險因子的人會定期追蹤血壓、血糖、膽固醇與其他指標。心肌梗塞或腦卒中之後的追蹤，則包括重新評估治療，以及找出病因的檢查，例如心房顫動。',
        ],
      },
      {
        id: 'o-que-nao-esperar',
        heading: '不能等待的情況',
        bullets: [
          '胸痛、呼吸困難、冷汗或突然昏厥',
          '身體一側無力、說話改變或突然喪失視力',
          '突發且極其劇烈的頭痛',
          '意識混亂或平衡感改變',
        ],
        ctaLabel: '心肌梗塞與腦卒中頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        label: '腦卒中：類型、徵兆、治療與復健',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/i/infarto',
        label: '心肌梗塞：症狀、風險因子與就醫',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
        label: '心血管疾病：事實摘要',
        publisher: '世界衛生組織',
      },
    ],
  },

  'infarto-e-avc-tratamento-e-reabilitacao': {
    metaTitle: '心肌梗塞與腦卒中：治療與復健',
    title: '心肌梗塞與腦卒中：治療與復健',
    excerpt: '盡快恢復血流是治療的核心。事件之後，復健與持續追蹤決定了恢復的程度。',
    body: [
      {
        id: 'primeiras-horas',
        heading: '治療從最初幾個小時開始',
        paragraphs: [
          '兩種情況的治療目標，都是在更多組織壞死之前恢復血流。這就是為什麼從症狀開始到就醫之間的間隔，會改變結果。',
          '照護依循 SUS 的準則。心肌梗塞方面，急性心肌梗塞照護流程從 SAMU 開始，由它完成初步處置並通知轉介醫院。',
        ],
      },
      {
        id: 'avc-isquemico',
        heading: '缺血性腦卒中',
        paragraphs: [
          '治療在急診照護中心進行。能溶解血栓的靜脈血栓溶解治療，若能在症狀開始後四小時半內展開，就可以列入考慮。',
          '出血性腦卒中則以控制血壓與出血為重點，依情況可能需要手術或血管內處置。',
        ],
      },
      {
        id: 'infarto',
        heading: '心肌梗塞',
        paragraphs: [
          '首選處置是緊急心導管介入治療，也就是用導管從血管內部打通動脈，通常會置入支架。若無法在所需時間內進行，就改用溶解血栓的血栓溶解劑。',
          '2026 年 9 月，巴西一項法律擴大了 SUS 急診與緊急照護網絡（包括 UPA）血栓溶解劑的供應，讓治療可以在更接近患者所在之處開始。',
        ],
      },
      {
        id: 'reabilitacao',
        heading: '事件之後的復健',
        paragraphs: [
          '恢復不會在出院時結束。腦卒中方面，及早開始的物理治療與語言治療，對動作與語言有明顯幫助，復健可在專科復健中心（CER）進行。',
          '心肌梗塞方面，出院後的追蹤包括調整藥物，以及依醫療團隊的指示逐步恢復活動。',
        ],
        bullets: ['物理治療，協助恢復動作', '語言治療，協助說話與吞嚥', '逐步恢復日常活動', '在回診時調整藥物'],
      },
      {
        id: 'nao-interromper',
        heading: '支撐恢復的關鍵',
        paragraphs: [
          '心肌梗塞或腦卒中之後，每天按時服藥並維持追蹤，才能降低再次發作的風險。',
        ],
        bullets: [
          '按醫囑時間服藥，不要自行中斷',
          '把血壓、血糖與膽固醇控制在目標範圍',
          '不吸菸、減少飲酒，並依指示維持體能活動',
          '按時回診追蹤',
        ],
        ctaLabel: '心肌梗塞與腦卒中頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/i/infarto',
        label: '心肌梗塞：症狀、風險因子與就醫',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/avc',
        label: '腦卒中：類型、徵兆、治療與復健',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/sancionada-lei-que-preve-oferta-de-tromboliticos-para-tratamento-de-infarto-e-avc-na-rede-de-urgencia-e-emergencia-do-sus',
        label: 'SUS 擴大心肌梗塞與腦卒中的血栓溶解劑供應',
        publisher: '巴西衛生部',
      },
    ],
  },
  'faringite-e-amigdalite-sinais-de-alerta': {
    title: '喉嚨痛：警訊與何時該就醫',
    metaTitle: '喉嚨痛：警訊',
    excerpt:
      '大多數喉嚨痛幾天內會自行好轉，但有些警訊代表感染嚴重、需要立即評估。了解該注意什麼。',
    body: [
      {
        id: 'quadro-habitual',
        heading: '通常會是什麼樣子',
        paragraphs: [
          '病毒性的喉嚨痛常伴隨流鼻水、咳嗽與輕微發燒，幾天內不用抗生素就會好轉。',
          '細菌性扁桃腺炎則傾向造成較高的發燒、吞嚥時劇烈疼痛，以及扁桃腺上的化膿斑塊。即使如此，兩者較輕的表現很像，真正改變處置方向的是重症警訊。',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: '需要立即評估的警訊',
        paragraphs: ['有些警訊代表感染已經超出喉嚨的範圍，或正在堵住呼吸道，不能在家等待。'],
        bullets: [
          '呼吸困難或有窒息感',
          '連吞嚥自己的口水都有困難，口水會從嘴角流出',
          '喉嚨只有一側腫起，且張口困難',
          '高燒使用退燒藥後仍不退',
          '身體出現皮疹或頸部僵硬',
          '幼兒拒絕喝水、精神萎靡或非常嗜睡',
        ],
      },
      {
        id: 'emergencia',
        heading: '什麼情況算急症',
        paragraphs: [
          '呼吸困難是急症。這種情況請撥打當地急救電話，或把患者送到最近的急診。',
          '喉嚨只有一側腫起並伴隨張口困難，可能代表扁桃腺周圍積膿，需要在醫療院所接受評估與治療。',
        ],
      },
      {
        id: 'prazo',
        heading: '通常建議就醫的期限',
        paragraphs: [
          '喉嚨痛超過四天完全沒有好轉，或已經無法吃喝時，即使沒有重症警訊，也建議就醫。',
          '一年之內喉嚨痛反覆發作多次的人也值得檢查，因為反覆發作背後可能有其他原因，例如胃食道逆流。',
        ],
        ctaLabel: '咽喉炎與扁桃腺炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        label: '扁桃腺炎（Amidalite ou amigdalite）',
        publisher: '巴西衛生部──健康虛擬圖書館',
      },
    ],
  },
  'faringite-e-amigdalite-como-se-transmite': {
    title: '咽喉炎與扁桃腺炎：如何傳染？',
    excerpt:
      '急性期會透過飛沫與共用物品在人與人之間傳播。了解感染如何擴散，以及在家能做些什麼來降低風險。',
    body: [
      {
        id: 'pelo-ar',
        heading: '透過空氣中的飛沫',
        paragraphs: [
          '感染者咳嗽、打噴嚏或說話時，會噴出帶有病毒或細菌的小飛沫。身旁的人吸入這些飛沫就可能生病。',
        ],
      },
      {
        id: 'maos-e-objetos',
        heading: '透過雙手與共用物品',
        paragraphs: [
          '雙手會把喉嚨的病原體帶到杯子、餐具、水瓶與牙刷上。共用這些物品，感染就找到另一個人。',
          '沾到病原體的手再摸嘴巴、鼻子或眼睛，也足以讓病原體進入體內。',
        ],
      },
      {
        id: 'ambientes-fechados',
        heading: '密閉環境更容易傳播',
        paragraphs: [
          '在密閉擁擠的場所，飛沫在空氣中停留更久，人與人之間的距離也更近。這就是喉嚨感染在冬天更常見的原因，因為大家都待在密閉空間裡。',
          '學校與托兒所聚集許多兒童，傳播在這些場所也會增加。',
        ],
      },
      {
        id: 'nao-e-contagioso',
        heading: '什麼不會傳染',
        paragraphs: [
          '一年反覆發作多次的扁桃腺炎通常另有原因，例如胃食道逆流，不會在人與人之間傳染。',
          '喉嚨痛也可能來自乾燥空氣、煙霧與其他刺激物，這種情況沒有感染可以傳播。',
        ],
      },
      {
        id: 'reduzir-em-casa',
        heading: '如何降低家中的傳播',
        bullets: [
          '經常洗手',
          '不共用杯子、餐具與牙刷',
          '咳嗽、打噴嚏時用手臂遮住口鼻',
          '讓環境通風，避免待在密閉擁擠的空間',
          '感冒期間避免嘴對嘴親吻',
        ],
        ctaLabel: '咽喉炎與扁桃腺炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        label: '扁桃腺炎（Amidalite ou amigdalite）',
        publisher: '巴西衛生部──健康虛擬圖書館',
      },
    ],
  },
  'faringite-e-amigdalite-como-e-diagnosticada': {
    title: '咽喉炎與扁桃腺炎：專業人員如何分辨病因？',
    metaTitle: '咽喉炎與扁桃腺炎：診斷',
    excerpt:
      '病毒與細菌在喉嚨造成的症狀很像，在家無法分辨。看看專業人員如何做出診斷。',
    body: [
      {
        id: 'consulta',
        heading: '門診時的檢查',
        paragraphs: [
          '診斷從問診與檢查喉嚨開始。專業人員會用壓舌板觀察扁桃腺的顏色、有無化膿斑塊，以及頸部淋巴結的大小。',
          '高燒、吞嚥時劇烈疼痛與化膿斑塊會提高細菌感染的懷疑。咳嗽與流鼻水則較指向病毒。',
        ],
      },
      {
        id: 'exames',
        heading: '什麼時候用檢驗確認細菌',
        paragraphs: [
          '由於症狀會重疊，專業人員可能採檢喉嚨分泌物，做培養或快速檢驗，在開立抗生素前先確認是否為鏈球菌。',
          '這類檢驗能避免不必要的抗生素，它對病毒無效，還會讓抗藥性細菌更強勢。',
        ],
      },
      {
        id: 'nao-da-em-casa',
        heading: '為什麼在家無法判斷',
        paragraphs: [
          '對著鏡子看喉嚨無法分辨病毒與細菌，因為白色的斑塊在兩種情況都可能出現。判斷病因與是否需要抗生素，靠的是專業評估。',
        ],
      },
      {
        id: 'outras-causas',
        heading: '喉嚨痛的其他原因',
        paragraphs: [
          '不是所有喉嚨痛都來自感染。乾燥空氣、煙霧、胃食道逆流與長時間用聲也會刺激喉嚨並造成疼痛，背後沒有感染源。',
        ],
        ctaLabel: '咽喉炎與扁桃腺炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        label: '扁桃腺炎（Amidalite ou amigdalite）',
        publisher: '巴西衛生部──健康虛擬圖書館',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/rheumatic-heart-disease',
        label: '風濕性心臟病：事實摘要',
        publisher: '世界衛生組織',
      },
    ],
  },
  'faringite-e-amigdalite-tratamento-e-cuidados': {
    title: '喉嚨痛：治療與居家照護',
    excerpt:
      '大多數情況靠休息、補充水分與止痛藥就能好轉。抗生素只在病因是細菌時使用，而且必須吃完整個療程。',
    body: [
      {
        id: 'cuidados-virais',
        heading: '病毒性感染的照護',
        paragraphs: ['病因是病毒時，身體會自行清除感染。治療的目的是緩解症狀，讓患者保持舒適與水分充足。'],
        bullets: [
          '整天分次補充水分',
          '選擇柔軟、溫熱、較容易吞嚥的食物',
          '依醫療院所指示使用止痛或退燒藥',
          '充分休息與睡眠',
          '空氣太乾時為環境加濕',
        ],
      },
      {
        id: 'antibiotico',
        heading: '細菌性感染使用抗生素',
        paragraphs: [
          '細菌性扁桃腺炎由專業人員開立抗生素，即使疼痛消退也要服用到最後一劑。',
          '提前停藥可能讓細菌留在體內並造成合併症，例如侵犯關節、可能傷及心臟的風濕熱，以及腎臟發炎。',
        ],
      },
      {
        id: 'nao-ajuda',
        heading: '沒有幫助的做法',
        paragraphs: [
          '病毒性喉嚨痛自行使用抗生素不會加快康復，因為它對病毒無效、會帶來副作用，還會增加細菌的抗藥性。',
          '喉片與喉嚨噴劑只能短暫止痛，無法處理病因。',
        ],
      },
      {
        id: 'reavaliacao',
        heading: '什麼時候需要回診',
        paragraphs: [
          '如果疼痛幾天內沒有好轉、反而加重，或出現吞嚥困難，請回到醫療院所重新評估。',
          '呼吸困難是急症，請立即撥打當地急救電話求助。',
        ],
        ctaLabel: '咽喉炎與扁桃腺炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        label: '扁桃腺炎（Amidalite ou amigdalite）',
        publisher: '巴西衛生部──健康虛擬圖書館',
      },
      {
        url: 'https://bvsms.saude.gov.br/febre-reumatica/',
        label: '風濕熱（Febre reumática）',
        publisher: '巴西衛生部──健康虛擬圖書館',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance',
        label: '抗微生物藥物抗藥性：事實摘要',
        publisher: '世界衛生組織',
      },
    ],
  },
  'faringite-e-amigdalite-prevencao': {
    title: '如何預防咽喉炎與扁桃腺炎？',
    excerpt:
      '沒有對抗一般喉嚨痛的疫苗，但有些習慣能減少病原體在家中、學校與工作場所的傳播。',
    body: [
      {
        id: 'higiene',
        heading: '手部與物品的清潔',
        paragraphs: ['喉嚨的病原體多半先到手上與個人物品上，之後才到另一個人的嘴裡。'],
        bullets: [
          '用肥皂與清水洗手，尤其在咳嗽、打噴嚏或碰觸共用物品之後',
          '不共用杯子、餐具、水瓶與牙刷',
          '避免用手摸嘴巴、鼻子與眼睛',
        ],
      },
      {
        id: 'ambiente',
        heading: '環境與生活習慣',
        paragraphs: [
          '通風良好、不擁擠的環境能減少接觸到感染者飛沫的機會。',
          '吸菸或二手菸會刺激喉嚨並增加扁桃腺感染的機會，因此遠離菸霧也是預防的一部分。',
        ],
        bullets: ['開窗讓空氣流通', '流行期間避免長時間待在密閉擁擠的場所', '不吸菸並遠離二手菸', '空氣太乾時為環境加濕'],
      },
      {
        id: 'crises-de-repeticao',
        heading: '反覆發作的人',
        paragraphs: [
          '對於一年反覆發作多次扁桃腺炎的人，值得檢查維持發炎的原因，例如胃食道逆流與長期暴露於菸霧。',
          '治療感冒與過敏性問題（例如鼻炎）有助於減少因喉嚨痛就醫的次數。',
        ],
      },
      {
        id: 'o-que-nao-previne',
        heading: '無法預防的做法',
        paragraphs: [
          '鹽水漱口、高劑量維生素 C 與偏方都無法阻止感染。冷風與冰品也不會造成咽喉炎，因為病因是病毒與細菌。',
          '洗手、通風與遠離生病的人，是效果最好的措施。',
        ],
        ctaLabel: '咽喉炎與扁桃腺炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/',
        label: '扁桃腺炎（Amidalite ou amigdalite）',
        publisher: '巴西衛生部──健康虛擬圖書館',
      },
    ],
  },
  'gastroenterite-sintomas': {
    title: '胃腸炎：症狀、警訊與如何辨認',
    excerpt:
      '腹瀉、嘔吐、噁心與絞痛常來得突然。了解最常見的症狀、什麼屬於正常表現，以及哪些情況代表水分流失已超出限度。',
    body: [
      {
        id: 'sintomas-principais',
        heading: '通常會出現哪些症狀',
        paragraphs: [
          '急性胃腸炎來得突然，最具特徵的表現是腹瀉。巴西衛生部將 24 小時內出現三次以上液狀或軟便的情形列為急性腹瀉疾病。',
          '腹瀉常伴隨噁心與嘔吐、腹部絞痛與腹痛。發燒可能出現也可能不出現；若病因是細菌或寄生蟲，糞便可能帶有黏液或血。',
        ],
        bullets: [
          '腹瀉，糞便呈液狀或軟便',
          '噁心與嘔吐',
          '腹部絞痛與腹痛',
          '發燒，但不一定出現',
          '部分情況糞便帶血或黏液',
        ],
      },
      {
        id: 'como-o-quadro-comeca',
        heading: '病程通常怎麼開始',
        paragraphs: [
          '多數情況下，胃腸道症狀先出現，並在一天之中逐漸明顯，沒有清楚的預告。病人上廁所的次數增加，也覺得身體比平常疲倦。',
          '並非每次發作的表現都相同。最常見的是輕微型，腹瀉與不適在幾天內減輕。若嘔吐反覆出現，或腹瀉不但沒好轉反而加重，就需要多加留意。',
        ],
      },
      {
        id: 'sinais-gerais',
        heading: '伴隨的全身性表現',
        paragraphs: [
          '除了胃腸道症狀，胃腸炎常伴隨全身性的表現，例如發燒、頭痛、全身痠痛與不適感。',
          '這些表現是身體對感染的反應之一，通常會隨腹瀉一起減輕。真正影響病程的不是發燒本身，而是流失的水分與鹽分有多少。',
        ],
      },
      {
        id: 'sinais-de-desidratacao',
        heading: '脫水的訊號',
        paragraphs: [
          '當流失的水分多於補回的量，就會出現脫水的訊號。這些訊號決定是否需要盡快就醫。',
          '巴西衛生部建議，出現兩項以上下列訊號時，應立即前往最近的醫療機構。',
        ],
        bullets: [
          '眼窩凹陷',
          '嬰兒哭泣時沒有淚水',
          '口腔與舌頭乾燥',
          '非常口渴，想快速喝水',
          '尿量減少',
          '嬰兒囟門凹陷',
        ],
      },
      {
        id: 'o-que-foge-do-esperado',
        heading: '不符合預期的表現',
        paragraphs: [
          '多數發作在幾天內好轉，不需要特定治療。但有些表現並不符合預期，需要評估：糞便帶血或黏液、腹瀉不減反增，以及反覆嘔吐導致無法留住液體。',
          '腹瀉超過 14 天就不再屬於急性，而歸類為持續性腹瀉，需要進一步檢查。若兩天內沒有好轉，巴西衛生部也建議回到醫療機構。',
        ],
      },
      {
        id: 'nem-toda-diarreia-e-gastroenterite',
        heading: '並非所有腹瀉都是胃腸炎',
        paragraphs: [
          '腹瀉也可能出現在沒有感染的狀況。抗生素與瀉藥等藥物、乳糖不耐、乳糜瀉、腸躁症，以及發炎性腸道疾病，都可能造成沒有病原體需要治療的腹瀉。',
          '當腹瀉拖延、合併體重下降、糞便帶血或排便習慣改變時，專業人員會進一步檢查其他病因。因此，反覆發作的人應由專業人員評估，而不是自行處理。',
        ],
        ctaLabel: '胃腸炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        label: '急性腹瀉疾病（DDA）',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        label: '腹瀉疾病：事實摘要',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://bvsms.saude.gov.br/diarreia-e-desidratacao/',
        label: '腹瀉與脫水',
        publisher: '巴西衛生部（虛擬健康圖書館）',
      },
    ],
  },
  'gastroenterite-duvidas-frequentes': {
    title: '胃腸炎：腹瀉與嘔吐的常見疑問',
    excerpt:
      '會傳染嗎？會持續多久？孩子可以吃東西嗎？抗生素什麼時候才需要？針對胃腸炎最常見的疑問，直接回答。',
    body: [
      {
        id: 'e-contagiosa',
        heading: '胃腸炎會傳染嗎？',
        paragraphs: [
          '會。傳播途徑是糞口傳染：病原體從糞便排出，經由受污染的水與食物、沒洗過的手，以及與病人的直接接觸，再從嘴巴進入另一個人體內。',
          '因此，用肥皂洗手與處理飲用水，是家中最能降低風險的措施。諾羅病毒尤其常在密閉環境造成群聚感染。',
        ],
      },
      {
        id: 'quanto-tempo-dura',
        heading: '會持續多久？',
        paragraphs: [
          '多數情況是幾天。此病具自限性，通常持續到 14 天。當腹瀉超過這個期間，就歸類為持續性腹瀉，需要進一步檢查。',
          '該回到醫療機構的時間界線是兩天沒有好轉，或腹瀉加重，即使沒有其他嚴重訊號也是如此。',
        ],
      },
      {
        id: 'crianca-deve-parar-de-comer',
        heading: '孩子腹瀉時要停止進食嗎？',
        paragraphs: [
          '不需要。停止進食會讓病情更糟，也拖慢康復。正確做法是維持平常的飲食與母乳哺餵，並另外以少量、頻繁的方式提供口服補液鹽。',
          '嬰兒在整個病程中都應繼續哺乳。少量、多次提供的清淡飲食較容易被接受。詳見[胃腸炎期間該吃什麼](/artigos/gastroenterite-alimentacao/)。',
        ],
      },
      {
        id: 'antibiotico-ajuda',
        heading: '抗生素對腹瀉有幫助嗎？',
        paragraphs: [
          '多數情況沒有幫助。常見的胃腸炎屬病毒性，或會自行好轉；只有在專業人員判定為痢疾（糞便帶血或黏液）或霍亂時，才需要在醫療監督下使用抗生素。',
          '自行服用抗生素不但不會縮短腹瀉，還會助長微生物對藥物的抗藥性。',
        ],
      },
      {
        id: 'posso-tomar-remedio-para-parar',
        heading: '可以吃止瀉藥嗎？',
        paragraphs: [
          '不應自行服用，尤其是兒童。讓腸道停止蠕動的藥物無法治療病因，也無法補回流失的水分與鹽分，還可能掩蓋嚴重訊號。',
          '真正有效的是從第一次腹瀉就開始補液。原因請見[為什麼不該用藥物止瀉](/artigos/gastroenterite-remedios/)。',
        ],
      },
      {
        id: 'quando-procurar-atendimento',
        heading: '什麼時候該就醫？',
        paragraphs: [
          '若兩天沒有好轉，或出現糞便帶血或黏液、反覆嘔吐、非常口渴、尿量減少、過度嗜睡，請回到醫療機構。',
          '就醫可以先到最近的基礎醫療單位。若情況嚴重、脫水明顯，請前往緊急照護單位或醫院的急診。',
        ],
        ctaLabel: '胃腸炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        label: '急性腹瀉疾病（DDA）',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        label: '腹瀉疾病：事實摘要',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192',
        label: 'SAMU 192',
        publisher: '巴西衛生部',
      },
    ],
  },
  'gastroenterite-remedios': {
    title: '胃腸炎：為什麼不該用藥物止瀉',
    excerpt:
      '止瀉藥無法治療病因，還可能掩蓋嚴重訊號。了解真正有效的方法，以及哪些情況下的用藥該由專業人員決定。',
    body: [
      {
        id: 'por-que-evitar-antidiarreico',
        heading: '為什麼不要用止瀉藥',
        paragraphs: [
          '止瀉藥作用在症狀上，而不是病因。胃腸炎多數由病毒引起並會自行好轉，決定結果的是補回流失的水分與鹽分，而不是阻止排便。',
          '這類藥物除了無法治療感染，還可能掩蓋代表嚴重的訊號，例如腹瀉加重或糞便帶血。因此不應自行服用，尤其不應用於兒童。',
        ],
      },
      {
        id: 'o-que-realmente-funciona',
        heading: '真正有效的是什麼',
        paragraphs: [
          '照護的基礎是口服補液鹽，從第一次腹瀉起就以少量、頻繁的方式飲用。它能以恰當比例補回水分與電解質，避免脫水。',
          '對兒童，巴西衛生部另建議鋅，每天一次、連續 10 至 14 天，可縮短病程。維持進食與母乳哺餵也有助於康復。',
        ],
      },
      {
        id: 'remedio-para-vomito',
        heading: '止吐藥呢？',
        paragraphs: [
          '反覆嘔吐導致無法留住液體屬於警訊，需要評估，而不是自行服藥。這類藥物同樣不能取代補液。',
          '當病人無法飲水時，補液可在醫療機構進行；情況嚴重者需以靜脈輸液補液，方式依專業人員評估的脫水程度而定。',
        ],
      },
      {
        id: 'antibiotico',
        heading: '抗生素什麼時候才有必要',
        paragraphs: [
          '抗生素對大多數腹瀉沒有幫助。依據巴西衛生部，它應保留給糞便帶血或黏液且合併整體狀況惡化的病例，或合併嚴重脫水的霍亂，且一律需在醫療監督下使用。',
          '懷疑這類情況時，糞便檢體須在使用抗生素之前採集，以免影響檢驗結果。',
        ],
      },
      {
        id: 'automedicacao-e-resistencia',
        heading: '自行用藥的風險',
        paragraphs: [
          '未經處方使用抗生素不但無法治好腹瀉，還會助長更大的問題：微生物對抗生素的抗藥性。世界衛生組織將抗微生物藥物抗藥性視為公共衛生最主要的威脅之一。',
          '自行購買止瀉藥也是如此。沒有任何方法能取代專業人員的評估，只有他們能分辨單純的腹瀉與需要特定治療的狀況。',
        ],
      },
      {
        id: 'quando-o-profissional-indica',
        heading: '什麼時候由專業人員決定',
        paragraphs: [
          '任何用藥都由醫療專業人員決定，並在評估脫水程度、盡可能找出病原後才開立。治療依照補液計畫安排，從在家照護到靜脈輸液。',
          '因此，面對腹瀉最安全的做法是補液，並在出現警訊時就醫。',
        ],
        ctaLabel: '胃腸炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        label: '急性腹瀉疾病（DDA）',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance',
        label: '抗微生物藥物抗藥性：事實摘要',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        label: '腹瀉疾病：事實摘要',
        publisher: '世界衛生組織',
      },
    ],
  },
  'gastroenterite-alimentacao': {
    title: '胃腸炎：在家該吃什麼與如何補水',
    excerpt:
      '不必停止進食，但補水優先。了解有助康復的作法、如何自製口服補液鹽，以及腹瀉期間該避免什麼。',
    body: [
      {
        id: 'hidratacao-primeiro',
        heading: '補水比進食更重要',
        paragraphs: [
          '面對腹瀉，關鍵不在於吃什麼，而在於補回多少液體。第一步是增加白開水與口服補液鹽的攝取，並在一天中以少量多次的方式飲用。',
          '巴西衛生部建議，每次腹瀉後飲用 50 到 100 毫升液體，另外持續補充口服補液鹽。這樣可避免水分流失演變成脫水。',
        ],
      },
      {
        id: 'soro-caseiro',
        heading: '如何自製口服補液鹽',
        paragraphs: [
          '手邊沒有口服補液鹽時，巴西衛生部教導自製口服補液鹽：在一公升礦泉水、濾過或煮沸後放涼的水中，加入一小匙（咖啡匙）鹽與一大匙（湯匙）糖。',
          '攪拌均勻後，在一天中分次以小湯匙餵給病人。依照建議的份量調配，才能維持鹽與糖的適當比例。',
        ],
      },
      {
        id: 'mantenha-a-alimentacao',
        heading: '不必停止進食',
        paragraphs: [
          '停止進食不但沒有幫助，還會拖慢康復。正確做法是維持平常的飲食，包括母乳，只是調整提供的方式。',
          '清淡、容易消化的食物，以少量、多次的方式提供，在病程中較容易被接受。',
        ],
        bullets: [
          '以清淡食物為主，例如白飯、清湯、湯品與水果',
          '少量、多次提供',
          '嬰兒應繼續哺乳',
          '隨著腹瀉減緩，慢慢恢復平常的飲食',
        ],
      },
      {
        id: 'o-que-evitar',
        heading: '腹瀉期間該避免什麼',
        paragraphs: [
          '有些食物會讓腹瀉更嚴重，在好轉前應先避開。依據世界衛生組織，過甜的飲料會增加水分流失，使病情加重。',
          '也應避免生食或未煮熟的食物，以及未煮沸或未殺菌的牛奶，這些都是容易促成感染的來源。',
        ],
        bullets: [
          '汽水與過甜的果汁',
          '生食或未煮熟的食物，尤其是肉類與魚類',
          '未煮沸或未殺菌的生乳',
          '酒精飲料',
        ],
      },
      {
        id: 'bebes-e-criancas',
        heading: '嬰兒與兒童',
        paragraphs: [
          '嬰兒在病程中應繼續哺乳，這有助於提升對腹瀉的抵抗力。使用配方奶的嬰兒，可在專業人員指導下，於腹瀉期間改用低乳糖配方。',
          '對兒童，巴西衛生部建議鋅，每天一次、連續 10 至 14 天，可縮短病程並降低併發症風險。',
        ],
      },
      {
        id: 'quando-a-comida-nao-desce',
        heading: '當無法進食或喝水時',
        paragraphs: [
          '若病人拒絕進食、無法留住液體，或出現脫水訊號，在家照護就不足夠。此時應前往最近的醫療機構。',
          '反覆嘔吐、非常口渴、尿量減少與糞便帶血都是需要就醫的訊號，而不是調整飲食就能處理。',
        ],
        ctaLabel: '胃腸炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        label: '急性腹瀉疾病（DDA）',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://bvsms.saude.gov.br/diarreia-e-desidratacao/',
        label: '腹瀉與脫水',
        publisher: '巴西衛生部（虛擬健康圖書館）',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        label: '腹瀉疾病：事實摘要',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://cdn.who.int/media/docs/default-source/2021-dha-docs/pnadk428.pdf',
        label: 'Pocket book of hospital care for children (WHO)',
        publisher: '世界衛生組織',
      },
    ],
  },
  'gastroenterite-pode-ser-grave': {
    title: '胃腸炎可能很嚴重嗎？風險何時成真',
    excerpt:
      '多數發作屬於輕微，但脫水可能導致嚴重狀況。了解誰的風險較高、哪些訊號屬於急症，以及什麼時候不能等待就醫。',
    body: [
      {
        id: 'quase-sempre-leve',
        heading: '多數情況下屬於輕微',
        paragraphs: [
          '急性胃腸炎通常具自限性，幾天內就會好轉。多數發作由病毒引起，不需要特定治療，只需補液。',
          '這並不代表可以忽視。同樣一次發作，在健康成人身上幾天就好，卻可能讓幼兒或長者很快脫水。',
        ],
      },
      {
        id: 'desidratacao-e-o-risco',
        heading: '脫水才是真正的風險',
        paragraphs: [
          '胃腸炎最主要的併發症是脫水。依據巴西衛生部，腹瀉疾病若處理不當或未處理，可能導致嚴重脫水與水電解質失衡，甚至死亡。',
          '當合併營養不良或免疫力低下時，這個風險會升高。這也是為什麼補液的速度對結果影響這麼大。',
        ],
      },
      {
        id: 'quem-corre-mais-risco',
        heading: '誰更容易脫水',
        paragraphs: [
          '幼兒與長者脫水得更快，巴西衛生部指出，他們一旦發病就應盡快就醫。',
          '營養不良與免疫力低下（例如感染 HIV）的人風險也較高。在這些族群中，同樣一次發作可能在幾小時內演變成嚴重脫水。',
        ],
      },
      {
        id: 'sinais-de-alerta',
        heading: '警訊',
        paragraphs: [
          '巴西衛生部建議，只要出現下列任何一項訊號，即使病人看起來還好，也應立即回到醫療機構。',
        ],
        bullets: [
          '腹瀉加重',
          '反覆嘔吐',
          '非常口渴',
          '拒絕進食',
          '糞便帶血',
          '尿量減少',
          '眼窩凹陷、口乾、哭泣時沒有淚水',
          '過度嗜睡或極度虛弱',
        ],
      },
      {
        id: 'desidratacao-grave-e-emergencia',
        heading: '嚴重脫水屬於急症',
        paragraphs: [
          '依據世界衛生組織，出現以下情況即為嚴重脫水：病人嗜睡或意識不清、眼窩凹陷、無法喝水或喝得很差，且皮膚捏起後需要兩秒以上才回復。',
          '出現這些訊號時，請立即前往醫院急診或緊急照護單位。對嬰兒與長者，情況可能幾小時內就惡化。',
          '在立即危及生命的情況下，可撥打 SAMU，號碼是 192。單純的嘔吐與腹瀉並不是叫 SAMU 的理由。',
        ],
      },
      {
        id: 'complicacoes',
        heading: '併發症與影響結果的關鍵',
        paragraphs: [
          '除了脫水，水分與鹽分的流失還可能造成電解質改變，例如鈉與鉀，使病情加重。若發作拖長，持續性腹瀉會導致體重下降與營養不良，兒童尤其如此。',
          '這些狀況大多可以透過從一開始就補液，以及在出現警訊時盡早就醫來避免。',
        ],
        ctaLabel: '胃腸炎頁面請見這裡',
      },
    ],
    references: [
      {
        url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda',
        label: '急性腹瀉疾病（DDA）',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
        label: '腹瀉疾病：事實摘要',
        publisher: '世界衛生組織',
      },
      {
        url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192',
        label: 'SAMU 192',
        publisher: '巴西衛生部',
      },
      {
        url: 'https://bvsms.saude.gov.br/diarreia-e-desidratacao/',
        label: '腹瀉與脫水',
        publisher: '巴西衛生部（虛擬健康圖書館）',
      },
    ],
  },
};
