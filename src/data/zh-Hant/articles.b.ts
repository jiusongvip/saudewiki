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
          '未使用保險套，或保險套破損的性行為',
          '與感染狀況不明的伴侶發生保險套破損',
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
        paragraphs: ['若出現以下情況，請立即前往急診或撥打 SAMU 192：'],
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
          '立即撥打巴西緊急醫療服務 SAMU 的 192 求助',
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
    title: '腦卒中：如何辨識訊號並迅速應對',
    excerpt:
      '身體單側無力、口角歪斜、說話困難，是腦卒中最常見的訊號。盡快辨識，才能在時間內完成治療。',
    body: [
      {
        id: 'o-que-acontece',
        heading: '腦卒中發生了什麼',
        paragraphs: [
          '腦卒中即腦血管意外，是腦部動脈遭到阻塞或破裂，使某個腦區不再獲得血液供應。多數病例屬於阻塞型。',
          '沒有血液，腦細胞在數分鐘內就開始死亡。就醫的迅速程度，決定了能保全多少腦組織。',
        ],
      },
      {
        id: 'sinais',
        heading: '必須辨識的訊號',
        paragraphs: [
          '腦卒中的訊號通常突然出現，且多只影響身體的一側：',
        ],
        bullets: [
          '一側臉部無力或麻木，嘴角下垂',
          '身體一側的手臂或腿部無力',
          '說話困難，或無法理解別人說的話',
          '單眼或雙眼突然喪失視力',
          '突然出現且非常劇烈的頭痛',
          '平衡不穩、嚴重暈眩或行走困難',
        ],
      },
      {
        id: 'teste-rapido',
        heading: '任何人都能做的快速測試',
        paragraphs: [
          '懷疑時，三個簡單的問題有助於辨識腦卒中：請對方笑一笑，觀察是否有一側臉沒有動作；請對方舉起雙手，看是否有一隻下垂；請對方重複一句簡單的話，觀察說話是否含糊或混亂。',
          '這三項之中任何一項異常，都應立即求助。測試結果正常並不能完全排除腦卒中，但有助於不漏掉典型的病例。',
        ],
      },
      {
        id: 'o-que-fazer',
        heading: '該怎麼做',
        bullets: [
          '撥打巴西緊急醫療服務 SAMU 的 192，並告知您懷疑是腦卒中',
          '記下症狀開始的確切時間',
          '不要提供食物、飲料或藥物',
          '不要讓患者獨處',
          '若失去意識，保持呼吸道通暢，並遵循緊急服務人員的指示',
        ],
      },
      {
        id: 'prevencao',
        heading: '如何降低風險',
        paragraphs: [
          '高血壓是腦卒中最主要的風險因子。長年控制血壓、治療糖尿病、不吸菸、按時用藥，是影響最大的幾項措施。',
        ],
        ctaLabel: '高血壓完整頁面請見這裡',
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
        paragraphs: ['以下訊號代表嚴重發作，請立即撥打 SAMU 192 或前往急診：'],
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
          '兩類藥物功能不同。控制型藥物減輕氣道發炎，必須每天使用，即使沒有症狀也不例外；緩解型藥物則在發作時打開氣道。',
          '頻繁只使用緩解型藥物，代表控制並不理想，因為它無法處理症狀背後真正的原因，也就是發炎。',
        ],
      },
      {
        id: 'inalador',
        heading: '吸入器的使用技巧',
        paragraphs: [
          '吸入器的使用技巧是治療的一部分。技巧錯誤時，大部分藥物會留在口腔與喉嚨，而沒有進入肺部。',
          '不妨在門診請專業人員確認您的技巧，並詢問是否需要搭配輔助裝置，讓孩童或協調有困難的人更容易使用。',
        ],
      },
      {
        id: 'sus',
        heading: '巴西公共衛生系統的免費治療',
        paragraphs: [
          '在巴西公共衛生系統（SUS），氣喘的治療是免費的。吸入型的倍氯米松與沙丁胺醇，以及口服的潑尼松，都可在地區衛生單位取得，依巴西衛生部的氣喘臨床診療指引提供。',
        ],
      },
      {
        id: 'acompanhamento',
        heading: '追蹤照護',
        bullets: [
          '即使沒有症狀，也按時回診追蹤',
          '每天使用控制型藥物，不要自行中斷',
          '記錄發作與其誘發因子，回診時提供給專業人員',
          '定期檢視吸入器的使用技巧與是否需要調整劑量',
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
          '照護依循 SUS 的準則。心肌梗塞方面，急性心肌梗塞照護流程從 SAMU 192 開始，由它完成初步處置並通知轉介醫院。',
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
};
