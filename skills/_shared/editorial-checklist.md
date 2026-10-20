# 巴西葡语疾病文章编辑与质检清单

拟定文章结构、初稿润色和终检时使用本清单。应根据具体疾病调整内容与措辞；但 **section 的划分以医典正文的 H2 子主题为准、数量上限 15 节**（见 `SKILL.md` 5.3），不因"某个标题对读者没有实际价值"而省略医典中的 H2 小节。清单按「结构 → 语言 → 本地与医学事实 → 终检」四个阶段组织。

## 一、结构与内容覆盖

**结构基准（硬规则）**：本站 section 逐条对齐医典**正文的 H2 子主题层**——医典每个顶层栏正文里的每个 H2 小节（例如"并发症""相关检查""就医/诊断""日常预防""鉴别诊断""高风险人群"）都建一个**独立 section**；H2 之下的 H3/H4 不建节，降为该节的 `bullets`/段落，子标题作 bullet 首词保留，内容一律不删（医典 8 栏只作排序与归属框架，不自身成节）。**缺哪个 H2 就补哪个，且一律新增独立 section（新 id，两语言一致，避开保留 id），不得改写已有 section 的语义去承载新 H2。** 医典中不属于正文小节的内容（摘要表格、零散问答）不要为了凑节数硬造节。**整个词条的 section 总数不得超过 15 节，超出时按 `SKILL.md` 5.3 的合并规则（仅同栏内、仅同父同类的兄弟、只降层级不删内容）归并。** 唯一例外：危险信号警示块必须独立成节，不随医典结构变化。下列逐项内容，凡医典中有对应 H2 的都必须独立成节：

1. `name`（页面 H1 由视图渲染）包含疾病的规范名称和最有价值的搜索意图。
2. 用两个短段落说明疾病是什么，以及为什么及时就医很重要。
3. 如果疾病可能快速或隐蔽地恶化，添加醒目的警示块（独立 section + `bullets`）。
4. 摘要表格在本站数据结构中无对应字段，改用 `bullets` 或短段落表达。
5. 定义与病因。
6. 传播方式或危险因素。
7. 症状以及有临床意义的阶段或类型。
8. 危险信号和需要紧急就医的情况。
9. 较高风险人群。
10. 诊断和适当检查；只有经过核实时才写检测时间窗。
11. 有助于避免错误自我诊断时，说明需要鉴别的疾病。
12. 治疗、居家护理、用药禁忌以及医院治疗的边界。
13. 恢复、预后和可能的并发症。
14. 预防和疫苗信息（如适用）。
15. 使用巴西用户自然搜索问法的常见问题。
16. 免责声明不写入数据（本站的数据文件不存放免责声明文本），由视图统一渲染。
17. H2 落地为 `sections[]` 对象：`id` 用 ASCII 且两语言完全一致，`heading` 是该节标题，正文放 `paragraphs` 或 `bullets`，需要引导阅读时加 `cta`。
18. 内链写在段落里用 `[label](/path/)`，独立引导用 `cta: { label, href }`，路径均为根路径。每篇只挂一个 `cta`，放在**语义上引导读者进入疾病页最自然的那个实质内容 section** 上（**不固定于末节**）——哪一节讲完、读者最可能想进一步了解该病，就挂在哪一节；不得为安置跳转链接而新开一个只复述疾病页有哪些栏目的凑数 section（如「Onde entender mais sobre a doença」／「在哪裡進一步了解此疾病」），也不得为凑节数、凑字数新增无实质信息的 section。
19. **派生文章的深度标准**：正文 **900 至 1200 词**（口径：只数 body 各 section 的 `paragraphs` 与 `bullets`；标题、导语、各节小标题、`cta` 标签与 `references` 的 label 不计入。`scripts/check-editorial.mjs` 的 `wordcount` 规则对此硬校验）、每节 2 至 3 段；**section 的数量与每节内容由该篇主题决定**——先看这个题目该分几节、每节具体写什么，再据此组织，不固定节数，也不要求每个 section 都套「是什么 / 为什么 / 怎么办」三层，每节的深浅跟着自身主题走，不是把词条段落换词重排。重写或加厚既有文章时按同一标准对齐。
20. **文章零臆造**：文章里每个具体断言（数字、百分比、剂量、天数、分级或分型、检测时间窗、就医路径、风险人群、操作步骤）都必须能对应到疾病词条自身的 section / faq，或已列入 `references` 的来源；核不到来源的断言一律删除，或改写为不含具体细节的定性表述，不得凭常识或记忆补充。所引来源一律取自共享资料库 `skills/_shared/sources/library.json`（先 `node scripts/references.mjs search` 查库、未命中再取源并 `references.mjs add` 回写），不得引用库外或未核实链接。
21. **结构体检（终检必做）**：把医典的 8 栏及其正文 H2 子主题与本站 `sections[].id` + `heading` 列成对照表，逐 H2 核对；缺的 H2 一律**新增独立 section**补齐（并同步 `zh-Hant` 孪生），不得并入已有 section 带过；确认 H3/H4 已降为 `bullets`/段落且内容未删、顶层 8 栏未各自成节；确认 section 总数 ≤15，若曾合并则列出被并项与承载 `id`。若某个 H2 的内容当前散落在别节，把它迁移到新节并在原节删除重复，已有 section 的 `id` 保持不变。

## 二、巴西医疗文案编辑的表达准则

成稿应读起来像巴西本土医疗编辑或健康媒体撰写的原创文章，而不是由 AI 根据其他语言的资料改写的文本。语法正确和句子通顺只是底线；以下逐项判断。

### 语域与声音

- 面向读者直接称呼，用 `você`；给行动建议用命令式，例如 `procure atendimento`、`lave as mãos`、`não use`。
- 用短段落和直接句，一段只讲一层意思，避免长句套叠。
- 专业术语第一次出现时用巴西读者熟悉的话解释，避免中文直译。
- 使用摄氏度、公制单位、巴西数字标点习惯；日期采用 `日/月/年` 顺序。
- 采用巴西卫生传播中通行的疾病名称和语法性别。
- 语气克制、准确，避免耸动比喻（如把疾病写成 `assassina silenciosa`）和 `a melhor e mais eficaz opção` 一类绝对化模板说法。
- FAQ 标题使用真实搜索意图，例如 `É contagiosa?`、`Quanto tempo dura?`、`Pode voltar?`、`Qual remédio evitar?`。

### 句子、指代与并列结构

- 避免 `ele`、`ela`、`seu`、`sua` 在同一句中同时指向人、病毒、昆虫或器官。先行词性别或单复数不一致时必须重复名词：`diferenciá-las` 指代含阳性名词的混合列表，应写成 `diferenciar essas doenças`。
- 物主代词指代不明时同样重复名词：用 `... e a forma como os sintomas evoluem`，而不是可能被读成指代别的对象的 `... e sua evolução`。
- 优先主动、直接表达，例如 `Isso reduz a chance...`；不要为书面感使用生硬无人称结构，例如 `Reduz-se a chance...`。
- 用 `e`、`ou`、`nem` 连接时，各并列项语法结构必须一致。动词与名词短语混列会断裂：`Evite a exposição à fumaça e a produtos...` 应重复动词，写成 `Evite a fumaça... e evite produtos...`。
- FAQ 和段落开头使用完整回答，例如 `Não. A dengue não é transmitida pelo contato cotidiano entre pessoas.`，不要保留中文式省略或残缺句。
- 一个长句只放一个意思；代词、从句或并列项可能造成歧义时，拆句或明确重复主语。

### 患者语言与自然搭配

- 优先使用患者容易理解的动词和搭配，例如 `urinar muito menos`、`voltar para a reavaliação`、`se hidratar`、`se recuperar`、`procurar atendimento`。
- 能直接给出行动时用具体动词，例如用 `podem ser usados`，而不是笼统的 `podem ser opções`。
- 面向普通读者，少用行政化表达，例如 `comparecer à reavaliação`、`manter uma hidratação adequada`，改成患者用语。
- 使用自然的巴西时间表达，例如 `em uma ou duas semanas`，不要机械保留不符合巴西习惯的直译结构。
- 使用疾病领域真实存在的固定搭配，但不要把某病的固定短语机械套用到其他病。登革热的 `eliminar criadouros`、`pratinhos dos vasos` 只是语境示例。
- 使用巴西通行的通用名和说法，例如 `clínico geral`（而非 `clínico`）、`antialérgicos`、`soro fisiológico`。

### 翻译腔的典型形态

逐句对应其他语言的痕迹通常表现为以下几类，发现即改写：

- **名词化堆叠**：`realizar a avaliação da respiração` → `avaliar a respiração`；`efetuar a limpeza do nariz` → `limpar o nariz`；`proceder à análise` → `analisar`。
- **冗余框架词**：滥用 `através de`、`no sentido de`、`no que diz respeito a`、`de forma ...`；改用 `para`、`sobre`、`quanto a` 或直接动词。
- **定义式展开**：把概念拉长成描述。用凝练专业表达 `caracterizada pela elevação persistente da pressão arterial`，而不是 `a pressão do sangue dentro das artérias fica elevada de forma permanente`。
- **过度被动或无人称**：`é recomendado que se faça` → `recomenda-se` 或直接命令式。
- **抽象名词直译**：`possibilidade de ocorrência` → `pode ocorrer`；`a totalidade dos casos` → `todos os casos`。
- **汉语式铺垫与元解释**：`O nome da doença está relacionado à...` 一类开头，直接写表现。
- **冠词省略**：`substitui consulta médica, exame físico nem orientação` → `substitui uma consulta médica, um exame físico nem a orientação individual`。

### AI 模板感的可计数红线

终检时逐项打勾；超出上限即判模板感，需改写结构，而不是替换同义词：

- 模板开场和过渡句 `Além disso`、`Vale destacar`、`É importante ressaltar`、`Em resumo`、`Por outro lado`、`A boa notícia é que`、`O ponto mais importante é este`：全文合计 ≤1 次。
- `Trata-se de ...` 作段落开头，除真正需要界定概念外，视为红旗。
- 同一节内连续的 `- **术语:** 说明` 冒号式列表 ≤3 条，超出后必须换结构（改用整段、表格或不同句式）。**例外：分类、分型、分级、按器官枚举的并发症、以及两项逐项对照的鉴别清单属于医学内容里必要的枚举结构，应原样保留，不受 3 条上限约束。** 判据：整节是连续的枚举块、冒号前是短枚举名（≤ 28 字）且各条标签互不重复；带加粗术语的 `- **术语:** 说明` 不属例外。
- 成对破折号插入语（`— ... —`）每篇 ≤2 处；破折号密度过高是明显的生成痕迹。
- 出现总结句的小节 ≥3 个即判模板感；不要每节都收口总结。
- `não apenas ... mas também`、三段排比、每段等长且句式节奏一致，均属模板化标志，按语境拆散。

### 医疗科普的专业度与一致性

- 面向普通人描述生活建议时用 `efeitos colaterais`，而不是笼统的 `desconforto`；避免耸动表达，优先克制、准确的机构式说法。
- 临床解释部分用 `paciente`，面向大众的生活建议用 `pessoa`，按上下文固定选择，不要随机切换。
- 同一篇文章内语言风格、称呼和术语保持一致；不同疾病页面之间保持统一的语气和术语习惯。
- 像个巴西医疗网站的原创内容：机构名称、药品通用名、就医路径和搭配都要真实存在并使用自然。

### 常见生硬表达与首选改写

以下为易出现的生硬搭配与推荐写法；按语境判断，不要机械套用。**每篇文章审校中发现的新生硬表达，必须回写本表**，让清单随生产持续更新：

| 不自然或生硬 | 首选改写 |
|---|---|
| `uma opção habitual` | `a opção mais usada` |
| `substâncias que provocam reações alérgicas, chamadas alérgenos`（定义式冗长） | `substâncias chamadas alérgenos` |
| `médico clínico` | `clínico geral` |
| `não significa, por si só, uma infecção`（搭配不自然） | `, por si só, não indica uma infecção` |
| `diferenciá-las`（指代混合单复数先行词） | 重复名词：`diferenciar essas doenças` |
| `o conjunto dos sintomas e sua evolução`（`sua` 指代不明） | `... e a forma como os sintomas evoluem` |
| `Evite a exposição à fumaça e a produtos...`（并列断裂） | 重复动词：`Evite a fumaça... e evite produtos...` |
| `o líquor, o líquido que envolve o cérebro`（同句实词三连） | 换词：`o fluido que envolve o cérebro` |
| `em questão de horas a um dia`（两种时间表达堆叠） | `em poucas horas ou em até um dia` |
| `hábito diurno ... maior atividade durante o dia`（语义重叠） | 只保留一种，如 `costumam picar durante o dia` |
| `observou muitas picadas de mosquito` | `sofreu muitas picadas de mosquito` |
| `mortandade de macacos` | `mortes de macacos na região` 或 `registro de mortes de macacos` |
| `É daí que vêm...`（口语化解释衔接） | 直接说明，如 `Esses comprometimentos podem causar...` |
| `o fígado, os rins e a coagulação do sangue podem ser afetados`（被动、器官与功能混列） | 主动式：`a doença pode comprometer o fígado, os rins e a coagulação do sangue` |
| `tratamento dos sintomas` | `tratamento sintomático` |
| `esses sinais`（实际指症状时） | `esses sintomas` |
| `redução da produção de urina` | `diminuição do volume urinário` |
| `a vacina usada no país é a atenuada`（省略式，不清晰） | `a vacina utilizada no Brasil ... utiliza a cepa atenuada 17DD` |
| `produzida com vírus atenuado pelo Instituto`（`pelo` 修饰归属不清） | `produzida pelo Instituto ... e utiliza a cepa atenuada ...` |
| `urina muito escura ou urinar muito menos que o habitual`（并列结构不齐） | `urina muito escura ou diminuição importante do volume urinário` |
| `a proteção é considerada válida a partir de 10 dias`（行政、证件腔） | `começa a oferecer proteção cerca de 10 dias após a aplicação` |
| `O nome da doença está relacionado à...`（元解释式铺垫） | 直接写表现，如 `Nas formas graves, a febre amarela pode causar icterícia, que deixa...` |
| `de 20% a 50% dos casos graves levam ao óbito`（同句重复 graves） | `entre 20% e 50% dos pacientes podem morrer` |
| 免责声明省略冠词，如 `substitui consulta médica, exame físico nem orientação` | `substitui uma consulta médica, um exame físico nem a orientação individual` |
| `têm a mesma lógica`（用于解释发病机制） | `têm o mesmo mecanismo` |
| `é uma das causas mais comuns de descompensação`（术语化，患者不易懂） | `é uma das causas mais comuns de a pressão voltar a subir` |
| `Diabéticos e hipertensos têm ... mais chance`（把患者写成标签式名词，且同句重复 `ter`） | `Diabetes e hipertensão aumentam ... o risco de` |
| `merece atenção à parte` | `merece atenção especial` |
| `atingir um lado do corpo apenas`（状语后置生硬） | `atingir apenas um lado do corpo` |
| `Nada disso deve atrasar a chamada por ajuda`（`chamada por ajuda` 不自然） | `Nada disso deve atrasar o pedido de ajuda` |
| `aumentam o risco dos dois ao mesmo tempo`（`dos dois` 指代含糊） | `aumentam ao mesmo tempo o risco de infarto e de AVC` |
| `confirmar o quadro`（万能用词 `quadro`） | `confirmar ou afastar o infarto` |
| `o trombolítico entra quando...`（口语化动词 `entrar`） | `o trombolítico é usado quando...` |
| `Chame ajuda ... , ou pelos bombeiros, no 193, ou leve a pessoa...`（三项并列结构断裂） | 拆句：`Chame ajuda ... ou pelo Corpo de Bombeiros, no 193. Se não for possível, leve a pessoa...` |
| `Chame ajuda em vez de dirigir você mesmo`（主语与动作错位） | `Peça a alguém por perto que chame ajuda` |
| `Comparecer às consultas de acompanhamento`（行政腔） | `Voltar às consultas de acompanhamento` |
| `Manter alimentação saudável`（冠词省略） | `Manter uma alimentação saudável` |
| `Pressão alta tem relação com AVC?`（冠词省略） | `Pressão alta tem relação com o AVC?` |
| FAQ 用 `O quanto antes.` 作开头（残句） | `Procure ajuda o mais rápido possível.` |
| `Como não é possível diferenciar sozinho em casa`（`diferenciar` 缺宾语） | `Como não dá para saber em casa qual é a causa` |
| `o AVC é tratado nos ... e o infarto segue a ...`（被动与主动并列，机构名无解释） | 补同位语并统一句式：`o AVC é tratado nos Centros de Atendimento de Urgência, os hospitais de referência para esses casos, e o infarto segue a ...` |
| `A doença não é um problema apenas brasileiro`（铺垫式泛化） | 直接限定范围：`A dengue não é um problema só do Brasil` |
| `É o período de maior quantidade de vírus no sangue`（名词化堆叠） | `É o período em que há mais vírus no sangue` |

补充规则：

- FAQ 回答若只剩名词短语，应补足主谓：用 `A vacina é indicada para crianças a partir dos 9 meses...`，而不是 `Crianças a partir dos 9 meses e pessoas de 5 a 59 anos...`。
- 同一句内避免重复同一定语或名词（如 `formas graves` 与 `casos graves`），改用 `pacientes`、`casos` 等。
- 全文避免反复使用同一个万能用词（如 `quadro`）；按语境换用 `forma leve`、`o estado do paciente`、`a doença pode evoluir` 等。
- FAQ 与正文的术语保持一致（如统一用 `é transmitida pela picada`），不要为避免重复而在两处改用不同术语。
- 已经自然、通顺的句子不要为追求「更像母语者」而反复替换同义词；稳定、统一的语气优先于同义改写。
- 语言审校与医学事实核查分开：疫苗、药物、危险信号、检测时间窗和数字不得为语言流畅而改动含义。

### 去重复与章节分工

- 同一核心信息（例如「通常没有症状」「不能治愈但可控制」）可以在摘要表、正文和 FAQ 各出现一次，但每一部分承担不同任务：摘要表给结论，正文解释原因或机制，FAQ 直接回答读者提问。
- 避免每个章节都使用相同的解释句式和过渡节奏，防止文章像是在逐项填充模板。
- FAQ 开头用完整、直接的回答，不重复长篇背景介绍。

## 三、本地校准与巴西本地信息

### 本地校准（终检动作）

去翻译腔和 AI 腔最可靠的手段，是对照真实巴西来源核对语气与搭配，而不是只排查坏模式：

- 终检前选 1-2 篇同主题的巴西权威来源，例如 MSD Manuais 葡语版、Drauzio Varella、`gov.br` / Ministério da Saúde 患者页、SBP 或 ASBAI 指南。
- 核对语气是否同频：`você` 直呼、命令式建议、短段落；核对称呼是否一致（`paciente` / `pessoa` / `criança` 按语境固定）。
- 随机抽 3-5 个关键搭配，在巴西来源中确认真实存在后再保留，不要凭翻译直觉造词。

### 巴西本地化边界

- 疾病定义、常见症状、传播机制和一般危险信号通常属于通用医学事实，但仍需按当前权威资料核对。
- `UBS`、`UPA`、`SUS`、`Anvisa`、巴西药品通用名、疫苗供应、公共卫生项目、就医路径和流行病学数据属于巴西本地信息，使用前必须独立核实。
- 不得把中国资料中的机构、政策、疫苗供应、药物选择或转诊路径直接改写成巴西版本；无法核实的内容应删除。
- 文章只面向巴西读者，只使用巴西葡语表达、机构和政策信息。

### 中国语境过滤

发现下列内容时必须标记并检查；除非它本身对解释疾病不可或缺，否则删除或替换：

- 中国、`chinês/chinesa`、`国内`、`我国`，以及中国省市名称；
- 中国医院、医生履历、科室、医学学会，或 `WS` 编号等中国诊断标准；
- 中国的流行月份、病例数、高危人群、死亡率估计或地理分布；
- 原文实际指中国，却写成 `no país`、`nacionalmente` 或 `aqui` 的模糊地区表述；
- 中国的疫苗供应、批准状态、隔离要求、药物选择或转诊路径；
- 原网站品牌、审核背书、引用编号、图片说明和从页面复制的参考资料。

不得仅把国家名称从中国替换成巴西。应独立核实巴西的事实；无法核实时直接删去。

## 四、医学安全与时效性

- 明确区分常见症状和需要急诊处理的危险信号。
- 如果退烧等表面好转可能先于病情恶化，应明确说明。
- 不得根据单一症状、照片或化验指标作出诊断。
- 如果检查效果与病程阶段有关，应说明检测时间的重要性。
- 除非用户明确要求临床专业范围且已有最新权威指南，否则不得建议处方治疗、超说明书用药、精确剂量、有创操作或输血阈值。
- 只有当前指南明确支持时才能列出应避免的药物；有帮助时补充巴西常用通用名。
- 不得承诺治愈、固定康复时间或保证某种结果。
- 疫苗适用人群、批准年龄、接种程序、公共项目覆盖范围和疫情数据都属于时效信息，每次执行都必须重新核实。
- 危险信号应配合冷静、明确的紧急就医建议，不能埋在文章末尾。
- **事实可溯优先于表达**：任何具体数字、剂量、分级标准、时间窗、就医路径与风险人群都必须有疾病词条或已核实来源支撑；语言流畅不能凌驾于来源之上，无法溯源的精确断言必须删除或降级为定性表述。

## 五、SEO、元数据与可读性

- 在 `name`、开头段落以及合适的小标题中自然出现疾病主关键词，不机械重复同一表达。
- 使用近义表达和用户真实提问；关键词自然融入句子，不要把搜索意图一个接一个堆叠。
- 本站没有独立的 keywords 字段：疾病把它写进 `aliases`，文章把它融入 `title` 与 `excerpt`。
- 元描述使用疾病的 `summary` 或文章的 `excerpt`，应提供信息，不能写成营销文案。
- 一篇文章只聚焦一种疾病；鉴别诊断仅用于提供必要背景，不能喧宾夺主。
- 即使正文葡语含重音符号，slug 也要使用 ASCII 字符，且两语言的 key 完全一致。

## 六、最终审查

资料入口检查：确认医典链接来自用户、疾病目录接口（脚本索引）或百度搜索结果中的医典卡片，已在浏览器核对疾病标题、医典标识和可读正文；不能把目录卡片摘要、工具报错或未验证的链接当作已经读取完整医典的证据。具体查找与失败处理流程见 `SKILL.md` 第 1 步。

1. 完整阅读成稿两次：第一次检查医学逻辑和巴西本地事实，第二次只检查巴西葡语的自然度、指代、并列结构和患者用语。
2. 同时用中文和葡语搜索原网站品牌与中国语境词。
3. 对照核实记录检查每个日期、百分比、年龄、剂量、检测时间窗和政策结论。
4. 确认开头摘要与后文详细内容一致。
5. 确认危险信号和用药禁忌足够醒目，不会被误解为可忽略的背景知识。
6. 对照「巴西医疗文案编辑的表达准则」逐条检查：语域、指代与并列、患者用语、翻译腔形态、专业度与一致性，以及 AI 模板感的可计数红线；并对照「常见生硬表达与首选改写」表，确认没有可直接替换的生硬搭配，把新发现回写该表。
7. 完成「本地校准」：对照 1-2 篇巴西权威来源核对语气、称呼和关键搭配。
8. 确认元描述和标题读起来自然，而不是把搜索意图机械堆叠。
9. 跑数据门禁：写入前后各运行一次 `node scripts/check-i18n.mjs`，问题集合不得新增（本仓库基线并非全绿，判断标准是差异而不是全绿）；该脚本现已把「繁体层残留葡语」一并作为失败项（见第 10 条），新增的葡语残留会直接判红；`npm run build` 必须成功，且新路由已经生成（修改模式则确认原路由未被破坏）；`npm run check:references` 必须通过（`references` 的 url 全部在共享资料库中且 host 合规）。
10. 对照「结构不变量」逐条核对：section `id` 集合一致、逐节 `paragraphs`/`bullets` 数量相等、`ctaLabel` 与源的 `cta` 严格配对、`references` 的 url 集合一致、孪生不新增源没有的 `metaTitle`、无 `你`、无简体专用字形、**繁体层不残留葡语**；并确认没有使用视图已占用的 section id（`perguntas-frequentes`、`artigos-relacionados`、`temas-relacionados`、`outras-doencas`、`correcao`）。
11. **繁体层禁残留葡语（逐字段核对）**：繁体层每个读者可见字段都必须是繁中，最易漏译的是 `references` 的 `label` 与 `publisher`——它们不像正文那样有对应的葡语源句可对照，整条照抄葡语也不会触发任何结构不变量。允许原样保留的只有巴西专有名词与缩写（`SUS`、`Anvisa`、`Instituto Butantan`、`Farmácia Popular`、`SAMU 192`、`CPF`、`UBS`、`CONITEC`、`MAPA` 等）与 `url`；其余一律译为繁中。可用 `node scripts/check-i18n.mjs` 机械核验：它按「字符串不含中文字且带葡语特征（葡语虚词或葡语变音）」判定残留葡语。
12. 确认成文没有声称自己是翻译、改编、经过医学审核或来自参考页面。
13. 修改模式额外确认：slug 与已有 section 的 `id` 未变、`publishedAt` 未变、原有锚点与内链仍然有效、孪生已补齐。

## 评分标准（每项满分 10 分，综合评分为平均分）

每篇文章在交付前都应进行内部评分；如用户要求，再向用户展示分项分数。评分维度如下，每项满分均为 10 分：

| 评分维度 | 满分 |
|---|---|
| 医学准确性与安全性 | 10 |
| 巴西葡语自然度 | 10 |
| 巴西本地化 | 10 |
| 搜索结构与可读性 | 10 |
| 数据结构、SEO 元数据与免责声明 | 10 |

综合评分 = 五项得分的算术平均，满分同样是 10 分。综合评分低于 10 分（即任意一项未满分）时，不得直接交付。

其中「巴西葡语自然度」一项不笼统打分，而按下列葡语表达维度逐项评分（每项满分 10 分），取其算术平均（即「综合语言表现」）作为该项得分：

| 葡语表达维度 | 评分（满分 10 分） |
|---|---|
| 语法与基本正确性 | — |
| 巴西葡语自然度 | — |
| 医疗科普写作成熟度 | — |
| 母语编辑后的完成度 | — |
| 综合语言表现 | — |

综合评分达到 10 分还不等于自动合格。只要存在危险信号错误、用药安全错误、未核实的巴西疫苗政策、中文语境残留、严重葡语歧义、明显的 AI 模板化痕迹或翻译腔，就必须先修正，不能给出 10 分。

语言评分时至少确认：巴西读者是否会觉得文章由本地健康网站编辑撰写；是否存在逐句翻译痕迹；是否有需要回读才能理解的句子；是否使用了自然的患者用语和巴西健康传播搭配；以及是否存在模板化开头、机械过渡或固定句式密度过高。

### 未达 10 分时的返工流程

1. 列出每个扣分项，并区分语言、结构、巴西本地事实和医学安全问题。
2. 根据扣分项修改文章，不得为了提高分数改变未经核实的医学事实或加入不必要的本地政策。
3. 修改后重新完成医学、本地事实和语言三轮检查，再次评分。
4. 只有达到 10 分且不存在关键错误时，才能按完整合格版本交付。
5. 如果扣分来自无法核实的医学事实、政策时效或其他外部限制，不能靠语言润色硬凑分；应删除、限定或保留实际分数，并在交付说明中说明原因。
