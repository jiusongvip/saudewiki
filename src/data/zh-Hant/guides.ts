import type { GuidePage } from '../guides';
import type { LocalizedSection } from '../../types';

/**
 * The list-page guides in the reader's language.
 *
 * Matched by section id against `data/guides.ts`, so the structure, the links
 * and the order live in one place only: a paragraph count that differs from the
 * source is a gap in this file, never a difference between the two languages.
 * The internal paths stay in their Portuguese root form — `lib/prose.ts` turns
 * them into anchors and `lib/i18n.ts` adds the locale prefix.
 */
export const zhListGuides: Record<GuidePage, LocalizedSection[]> = {
  diseases: [
    {
      id: 'anatomia-de-um-verbete',
      heading: '這份清單的每個頁面如何寫成',
      paragraphs: [
        '條目的區塊順序始終一致：這是什麼疾病、如何傳染、有哪些症狀、何時該就醫、怎麼診斷、容易與什麼混淆、如何治療、如何預防。這種一致性有實際理由：在第一個條目學會的閱讀方式，適用於之後所有的條目。',
        '並非每個區塊都出現在每個頁面。[登革熱](/doencas/dengue/)有整整一章談傳染途徑，因為蚊子就是故事的核心；[高血壓](/doencas/hipertensao/)處理的是參考數值與長期追蹤，而它回答「高血壓會傳染嗎？」只為把這個問題結案。疾病本身不要求的章節，不會出現在條目裡。',
        '標題寫成疑問句，因為疑慮就是這樣到來的。沒有人搜尋「病理生理學」才打開頁面；人們搜尋的是「有哪些症狀」、「怎麼診斷」、「能不能治癒」。頁面上方的摘要也因同樣的理由存在：不必捲動，就能知道這個條目談的是不是您要找的事。',
        '每個頁面另附那個主題最常被問到的常見問題、支撐文字的官方來源，以及最後修訂日期。審查狀態與執筆身分一起標示：文字發布前一律經過本專案審查組檢核，若由審查者署名，姓名會直接顯示在頁面上。',
      ],
      ctaLabel: '了解 Saudewiki 如何核實每一段文字',
    },
    {
      id: 'por-onde-comecar',
      heading: '該從哪裡開始讀',
      paragraphs: [
        '如果您手上已經有名稱，請使用搜尋：它比對標題、摘要，以及人們在日常對話裡使用的說法，例如「喉嚨痛」「腹瀉」「腦中風」，而且一律使用您当前所在頁面的語言。',
        '如果您手上的是一個不舒服的身體部位，請從[身體部位地圖](/por-regiao/)開始，它依受影響的部位歸類條目，從腦部到關節。會出現在多個部位的疾病，在每一個部位底下各列一次。',
        '如果您手上的是一種情境而不是一種疾病，主題頁依角度把閱讀串起來：[預防](/temas/prevencao/)、[傳染病](/temas/doencas-infecciosas/)、[慢性病](/temas/doencas-cronicas/)、[兒童健康](/temas/saude-infantil/)。',
      ],
      bullets: [
        '第一次接觸這個主題：先讀「這是什麼」與「症狀」，其餘留給之後；治療章節要拿到專業醫囑之後才有意義。',
        '已經有診斷：直接看「如何治療」與「併發症」，再找談那種狀況日常照護的文章。',
        '是預防而不是疾病：從文章開始，它們是為了塞進健康者日常而寫的。',
      ],
    },
    {
      id: 'sinais-de-alerta',
      heading: '不必讀完就該行動的訊號',
      paragraphs: [
        '有些狀況，頁面應該攤在桌上，而電話要先打出去。下面的條目帶著各自的來源描述每一個訊號；這份清單用來辨識「該就醫了」，不是用來判定您得了哪種病。',
      ],
      bullets: [
        '身體一側無力或麻木、口角歪斜、說話含糊或突然失去視力：[心肌梗塞與腦卒中](/doencas/infarto-e-avc/)。時間會改變治療方式，巴西的緊急醫療由 SAMU 負責。',
        '胸口壓迫或疼痛延伸到頸部、下顎、背部或手臂：同一個頁面，以及文章[心肌梗塞：有哪些訊號以及該怎麼做](/artigos/infarto-quais-sao-os-sinais-e-o-que-fazer/)。',
        '退燒開始之後接著出現劇烈腹痛、持續嘔吐、出血、頭暈或尿量明顯減少：[登革熱](/doencas/dengue/)，危急期。',
        '胸口喘鳴、無法說完一整句話、嘴唇發紫或緩解藥物毫無反應：[氣喘](/doencas/asma/)。',
        '腹瀉合併口乾、眼窩凹陷、孩子哭泣沒有眼淚或過度嗜睡：[腸胃炎（感染性腹瀉）](/doencas/gastroenterite/)。',
        '咳嗽持續三週或更久，尤其伴傍晚發燒、夜間盜汗與體重下降：[肺結核](/doencas/tuberculose/)。檢查由公共衛生系統提供。',
        '出現暴露於愛滋病毒的高風險情境：暴露後預防用藥必須在 72 小時內開始，時限的算法見文章[愛滋病毒：暴露後頭 72 小時該怎麼做](/artigos/hiv-o-que-fazer-nas-primeiras-72-horas/)。',
      ],
    },
    {
      id: 'episodio-e-convivencia',
      heading: '一次發作的病與長相隨的病',
      paragraphs: [
        '這份清單裡多數條目描述的是一次發作：人會生病、就醫、接受治療，然後康復。對這些疾病，頁面要交付的是辨識病情與該就醫的時刻。[登革熱](/doencas/dengue/)、[瘧疾](/doencas/malaria/)與[腸胃炎（感染性腹瀉）](/doencas/gastroenterite/)屬於這一組，所以它們的頁面從分期與訊號開始。',
        '另一些描述的是長相隨的狀況：[糖尿病](/doencas/diabetes/)、[高血壓](/doencas/hipertensao/)、[氣喘](/doencas/asma/)與[慢性阻塞性肺病](/doencas/dpoc/)。對它們，最有用的文字不是發作當下，而是控制：哪些檢查要重複、間隔多久，藥物在完全沒有症狀的每一天做了什麼，以及為什麼中斷治療通常就是併發症的由來。',
        '這種分別不是擺設。對一次發作，拖延造成傷害；對慢性狀況，造成傷害的是中斷。這份清單的兩個群組，[傳染病](/temas/doencas-infecciosas/)與[慢性病](/temas/doencas-cronicas/)，正是依這條軸線安排閱讀順序。',
      ],
    },
    {
      id: 'como-esta-lista-cresce',
      heading: '這份清單如何成長',
      paragraphs: [
        '健康百科不是一篇連貫的長文：它逐條成長。每個公布的條目帶著自己的來源、日期與審查狀態加入清單，而某種疾病缺少的章節，不會為了補足而寫進另一個頁面。',
        '上方卡片的順序是百科的收錄順序，而不是嚴重程度的階梯：這裡沒有任何疾病因為較輕或較重而被擺在某個位置。要找特定名稱，搜尋比往下捲更快。',
        '[聯絡頁面](/contato/)是新主題的入口。身體圖譜記錄了百科已經走過的地方，每一則建議都會在下一輪撰寫之前被讀過。',
      ],
      ctaLabel: '向專案建議主題',
    },
  ],

  articles: [
    {
      id: 'o-que-um-artigo-responde',
      heading: '一篇文章回答什麼',
      paragraphs: [
        '條目描述整種疾病。文章取下一個疑問，並跟到底：屈公病之後關節疼痛可能持續多久，暴露於愛滋病毒的高風險情境後頭 72 小時該做什麼，以及在家量血壓如何避開那些會改變數字的錯誤。',
        '篇幅的差異是刻意的。深夜出現的疑問很短，而一篇三千字談整種疾病的文章不是它的答案。每篇文章結尾都指向對應的條目，那裡完整處理整個主題：問題以短句到來，長篇說明只差一次點擊。',
        '因此這份清單的文章可以跳著讀。沒有任何一篇依賴先讀過前一篇，而每一篇都帶著自己的來源、審閱日期與文字審查狀態，與一個條目完全相同。',
      ],
      ctaLabel: '打開疾病百科',
    },
    {
      id: 'tres-perguntas',
      heading: '打開幾乎所有問題的三個提問',
      paragraphs: [
        '辨識：多數文章之所以存在，是因為兩種相似的疾病以同一張臉到來。[屈公病與登革熱：如何區分？](/artigos/chikungunya-e-dengue-como-diferenciar/) 把兩個病情並列比較，[登革熱的早期症狀有哪些？](/artigos/sintomas-iniciais-da-dengue/) 描述最初的幾個小時，而[腦卒中：如何辨識訊號並迅速應對](/artigos/avc-como-reconhecer-os-sinais-e-agir-rapido/) 談的是腦卒中——在那裡，辨識本身就是治療。',
        '在對的時刻行動：有些文章帶著時鐘。[愛滋病毒：暴露後頭 72 小時該怎麼做](/artigos/hiv-o-que-fazer-nas-primeiras-72-horas/) 與[懷疑感染登革熱時，何時該就醫？](/artigos/quando-procurar-atendimento-em-caso-de-suspeita-de-dengue/) 標出期限；[氣喘發作：等待就醫期間該怎麼做](/artigos/asma-crise-o-que-fazer-enquanto-espera-atendimento/) 描述的是打完電話到救援抵達之間的那段時間。',
        '支撐治療：第三組談的不是急症，而是日常。[第二型糖尿病：日常生活會有哪些改變？](/artigos/diabetes-tipo-2-o-que-muda-no-dia-a-dia/)、[高血壓：如何在家中測量血壓](/artigos/hipertensao-como-medir-a-pressao-em-casa/) 與[慢性阻塞性肺病與吸菸：為何戒菸會改變病情](/artigos/dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro/) 談的是規律、習慣與追蹤——慢性狀況正是在那裡被守住或被失掉。',
      ],
    },
    {
      id: 'como-um-artigo-se-liga',
      heading: '文章如何與其他頁面相連',
      paragraphs: [
        '每篇文章宣告它談的是哪些疾病，而它就是憑這份宣告出現的。文章頁面列出被提及的疾病；疾病清單把文章顯示在對應條目之下；部位頁面不自行列出文章，而是從文章所點名的疾病自動推導而來。',
        '對讀者而言，這代表一件事：跟隨一篇文章會到三個不同的地方，而它們談的都是同一個主題。如果起點是[瘧疾：前往亞馬遜旅遊該如何預防](/artigos/malaria-como-se-prevenir-em-viagens-para-a-amazonia/)，那麼那種疾病的條目與預防主題都只差一次點擊。',
      ],
    },
    {
      id: 'leitura-por-situacao',
      heading: '三種情境，三種閱讀順序',
      paragraphs: [
        '在有登革熱循環的地區突然發燒：從[登革熱的早期症狀有哪些？](/artigos/sintomas-iniciais-da-dengue/)開始，接著讀[懷疑感染登革熱時，何時該就醫？](/artigos/quando-procurar-atendimento-em-caso-de-suspeita-de-dengue/)，如果猶豫的是登革熱與屈公病之間，就到[屈公病與登革熱：如何區分？](/artigos/chikungunya-e-dengue-como-diferenciar/)。完整的條目位於這條路的盡頭，而不是開頭。',
        '剛到手的糖尿病診斷：先讀條目，再讀[第二型糖尿病：日常生活會有哪些改變？](/artigos/diabetes-tipo-2-o-que-muda-no-dia-a-dia/)。第二次閱讀才把診斷變成日常；少了它，醫學文字就停在原地。',
        '在生病之前防護：順序是[兒童預防接種：什麼是基本預防接種時程表？](/artigos/vacinacao-o-que-e-o-calendario-basico/)、[病毒性肝炎：哪些有疫苗？](/artigos/hepatites-virais-quais-tem-vacina/) 與[茲卡病毒：在傳播地區如何自我防護](/artigos/zika-como-se-proteger-em-areas-com-transmissao/)。這裡的目標不是辨識症狀，而是不讓症狀出現。',
      ],
    },
  ],

  regions: [
    {
      id: 'da-queixa-a-regiao',
      heading: '從不適到身體部位',
      paragraphs: [
        '尋找健康資訊的人很少從疾病名稱開始，而是從位置開始：發緊的胸口、久不緩解的關節、模糊的視線。下面的清單接住常見的主訴，並指出對應的條目已經聚集在哪個部位。',
      ],
      bullets: [
        '胸痛、胸口壓迫、心悸或活動時喘不過氣：[心臟與血管](/por-regiao/coracao-e-vasos/)。',
        '口角歪斜、說話含糊、身體一側無力或突然而劇烈的頭痛：[腦與神經](/por-regiao/cerebro-e-nervos/)。',
        '視力模糊、眼球後方疼痛或單側視力喪失：[眼睛](/por-regiao/olhos/)。',
        '喉嚨痛、吞嚥困難、耳朵疼痛或反覆出現的鼻塞：[耳鼻喉](/por-regiao/ouvidos-nariz-e-garganta/)。',
        '持續數週的咳嗽、胸口喘鳴或夜間加重的呼吸困難：[肺與呼吸道](/por-regiao/pulmoes/)。',
        '腹痛、腹瀉、嘔吐或腹部脹大：[胃與腸](/por-regiao/estomago-e-intestinos/)。',
        '異常口渴、頻繁排尿、健檢發現血糖過高：[胰臟與代謝](/por-regiao/pancreas-e-metabolismo/)。',
        '尿量減少、腳部水腫、背部絞痛：[腎臟](/por-regiao/rins/)。',
        '紅斑、搔癢、久不癒合的傷口或皮膚發黃：[皮膚](/por-regiao/pele/)。',
        '關節腫脹、早晨僵硬、發燒後疼痛持續數週：[關節與肌肉](/por-regiao/articulacoes-e-musculos/)。',
        '疲倦、蒼白、反覆感染或血液檢查顯示貧血：[血液與免疫](/por-regiao/sangue-e-defesas/)。',
        '肝功能檢查異常、家族中有肝炎病例：[肝臟](/por-regiao/figado/)。',
      ],
    },
    {
      id: 'quando-a-regiao-nao-era-a-porta',
      heading: '如果部位不是正確的入口',
      paragraphs: [
        '依身體部位分類能解決一種搜尋，但解決不了全部。一種波及全身的疾病，例如愛滋病毒或登革熱，會出現在多個部位之下，理由是：每個條目描述的是自身病程會觸及的部位。用名稱而不是位置找疾病的人，可以在[全部疾病](/doencas/)讀到完整清單。',
        '尋找主題的人，例如疫苗或旅遊預防，在[健康主題](/temas/prevencao/)能找到更多，那裡依疑問的角度安排閱讀。而只想要一個具體答案的人，通常最先找到的是[文章](/artigos/)，那正是為了裝進一個問題而設計的形式。',
      ],
    },
  ],
};

/**
 * The category definitions, keyed by the same slugs the source file uses.
 *
 * A group is defined once here and then shown on the disease list, the article
 * list and the topic page with the same slug, so the Chinese pages describe a
 * group in one wording as well.
 */
export const zhCategoryGuides: Record<string, LocalizedSection[]> = {
  'doencas-infecciosas': [
    {
      id: 'definicao-doencas-infecciosas',
      heading: '什麼是傳染病',
      paragraphs: [
        '它是由從體外進入身體的病原造成的疾病：病毒、細菌、寄生蟲或真菌。有兩個問題組織了幾乎所有需要認識的事，而這一組的條目都回答它們：病原怎麼進來，以及什麼做法能斷開那條路徑。',
        '進入的方式決定了該做什麼。登革熱、茲卡與屈公病透過蚊子叮咬進入身體，因此預防的根基在孳生源與皮膚；[屈公病](/doencas/chikungunya/)的疫苗已在巴西核准，目前於選定的城市接種，但這並未取代媒介控制的主要地位。[肺結核](/doencas/tuberculose/)透過空氣進入，所以阻斷傳染的是盡快診斷，接著把治療做完。[愛滋病毒](/doencas/hiv-aids/)與[病毒性肝炎](/doencas/hepatites-virais/)透過血液、無保護的性行為，以及從孕婦傳給胎兒，且各有期限明確的措施。[瘧疾](/doencas/malaria/)同樣跟著蚊子，但帶有地理條件：它流行於森林與河川地區，不在首都的柏油路上。',
        '這些條目共同的是時間。感染可以在幾小時內從輕度轉為重度，而兩者的分界通常看得見：以登革熱而言，它出現在退燒開始的時候，而不是體溫最高的時候。',
        '這一組幾乎所有疾病都有巴西公共衛生系統（SUS）免費提供的治療，其中一些明確可以治癒，例如肺結核與丙型肝炎。每個條目的文字都說明治療是什麼、在哪裡取得。',
      ],
    },
  ],
  'doencas-cronicas': [
    {
      id: 'definicao-doencas-cronicas',
      heading: '什麼是慢性病',
      paragraphs: [
        '它是留下來的狀況。不會被傳染，也不會傳染給別人：高血壓、糖尿病、氣喘與慢性阻塞性肺病陪伴一個人多年，而決定結果的不是一次發作，是照護是否持續。',
        '因此一個慢性病條目最有用的章節很少是症狀。高血壓是極端的例子：在併發症出現之前它通常沒有任何訊號，也正是因為如此，定期測量的價值高於描述一場幾乎沒有人感覺得到的發作。糖尿病真正重要的數字是數週之間的平均血糖，而不是一天的讀值。',
        '第二個差異在追蹤的是什麼。感染治療結束就結案；慢性狀況的追蹤本身就是治療。重複的檢查、調整過的劑量、即使毫無症狀也照常服用的藥：正是這個日常把併發症擋在眼睛、腎臟、雙足、心臟與腦部之外，而失控的這些疾病最終就停在那裡。',
        '能降低風險的做法是已知的，而且寫在這一組的條目裡：更少鹽、更少超加工食品、規律活動、控制體重、完全不菸，以及治療已經確診的問題。這些都不能取代負責照護者開立的藥物。',
      ],
    },
  ],
  prevencao: [
    {
      id: 'definicao-prevencao',
      heading: '預防這個群組包含什麼',
      paragraphs: [
        '預防是在生病之前做的事，而它有兩種速度。一種是習慣的速度，以年計算：戒菸、在家量血壓、少吃鹽、維持活動。另一種是時鐘的速度，以小時計算：暴露後 72 小時內開始的愛滋病毒預防用藥、出生數小時內的 B 型肝炎疫苗，以及從第一次腹瀉就啟動的口服補液鹽。',
        '這組文字談的是兩種。把它們分開的理由是實際的：習慣型措施有效，是因為能長期維持；時限型措施有效，是因為在情境出現之前就已知道。沒有人會在頭 72 小時開始的那一刻才決定該做什麼。',
        '巴西的預防很大一部分經由巴西公共衛生系統（SUS）進行，這組文字也說明每項措施在哪裡提供：疫苗是基層衛生單位的例行服務，不必預約、不收費；愛滋病毒與肝炎的快篩在公共網路可及；肺結核的治療與愛滋病毒暴露後預防各有指定的地點與時間。',
      ],
    },
  ],
  'saude-infantil': [
    {
      id: 'definicao-saude-infantil',
      heading: '兒童健康這個群組涵蓋什麼',
      paragraphs: [
        '孩子不是縮小的成人，適合成人的資訊並不總適合孩子。在嬰兒身上觀察的是不同的訊號：腹瀉時，算數的是口乾、哭泣沒有眼淚、眼窩凹陷與很少出現的尿液；就登革熱而言，幼兒屬於併發症風險較高的群組；而疫苗時程有精確的月齡，那是成人日常沒有的。',
        '這一組收集百科裡已經發布的兒童內容，並指出條目中特別談孩子的地方：[腸胃炎（感染性腹瀉）](/doencas/gastroenterite/)，那裡的脫水進展很快；[登革熱](/doencas/dengue/)，嬰兒屬於併發症高風險群組；以及[肺結核](/doencas/tuberculose/)，與患者同住者的調查在任何症狀出現之前就要開始。',
        '例行接種是這一組最常被查詢的文字，而且理由正當：[基本預防接種時程表](/artigos/vacinacao-o-que-e-o-calendario-basico/) 是本國免費提供、群體效果最大的預防措施之一。',
      ],
    },
  ],
  'saude-da-mulher': [
    {
      id: 'definicao-saude-da-mulher',
      heading: '這個主題涵蓋什麼',
      paragraphs: [
        '這本百科的許多條目裡都有女性健康，這個主題把它們依角度聚在一起，而不是依器官：懷孕、月經週期、中年，以及每個階段改變了什麼。',
        '懷孕橫跨傳染病清單的頭尾。[懷孕期間感染茲卡病毒：可能造成什麼後果？](/artigos/zika-na-gestacao-o-que-a-infeccao-pode-causar/) 描述感染可能對胎兒造成什麼，以及為什麼這個階段的防蚊方式不同；[登革熱](/doencas/dengue/) 把孕婦與產後女性列為併發症風險較高的群組；而[愛滋病毒與愛滋病](/doencas/hiv-aids/)的預防用藥屬於產前照護的一環，正是因為期限重要。',
        '在人生的其他階段，重量落在持續的追蹤上：[高血壓](/doencas/hipertensao/)，腦卒中主要的入口；以及[糖尿病](/doencas/diabetes/)，其妊娠型態由產前照護篩檢。條目談這些狀況的方式，是它們對多年照護者提出的要求，而女性健康主題正是沿這條路連回百科的其他部分。',
        '如何使用這個主題：接下來的頁面彙集談懷孕、月經週期與中年的條目與文章，每一篇都附有支撐它的官方來源。',
      ],
    },
  ],
};
