# 巴西常见疾病 100 项清单（具体病名版）

> 用途：`saudewiki` 选题与覆盖度盘点。全部为**具体疾病名称**，不使用「心血管疾病」「寄生虫病」这类泛指分类。
> 状态列已对照 `src/data/diseases.ts` 实际内容核对（当前 **80** 条疾病词条）。

## 一、选入口径

不是按「谁最常被搜索」排的，而是四层叠加：

1. **死因与疾病负担**：巴西死因前三位是循环系统疾病、恶性肿瘤、外部原因；糖尿病、慢性肾病、下呼吸道感染的排位持续上升。
2. **法定通报清单**：巴西《全国强制通报疾病清单》（Lista Nacional de Notificação Compulsória）里的病种，国家必须监测，公共卫生权重高。
3. **巴西特异性**：虫媒病（登革、基孔肯雅、寨卡、奥罗普切、黄热）、被忽视热带病（恰加斯病、利什曼病、血吸虫病、淋巴丝虫病、副球孢子菌病）、镰状细胞病——这些在别国词条库里往往缺席，在巴西是主线。
4. **初级卫生保健实际就诊量**：高血压、糖尿病、尿路感染、幽门螺杆菌、焦虑抑郁、腰痛这类在 UBS 天天见的病。

排序是「负担 + 公共卫生优先级」的综合判断，**不是精确流行病学排名**。同一指标在 DATASUS、Vigitel、GBD、INCA 之间口径不同，所以这里不硬贴发病率数字。

## 二、清单（100 项）

### A. 虫媒病毒病与出疹性病毒感染（10）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 1 | Dengue | 登革热 | ✅ `dengue` |
| 2 | Chikungunya | 基孔肯雅热 | ✅ `chikungunya` |
| 3 | Zika | 寨卡病毒病 | ✅ `zika` |
| 4 | Febre amarela | 黄热病 | ✅ `febre-amarela` |
| 5 | Febre do Oropouche | 奥罗普切热 | ➕ 待新增 |
| 6 | Malária | 疟疾 | ✅ `malaria` |
| 7 | Hantavirose | 汉坦病毒病（肺综合征） | ✅ `sindrome-cardiopulmonar-por-hantavirus` |
| 8 | Raiva | 狂犬病 | ✅ `raiva` |
| 9 | Sarampo | 麻疹 | ✅ `sarampo` |
| 10 | Varicela | 水痘 | ✅ `varicela` |

> 奥罗普切热 2024 年在亚马逊流域及东北部出现远超往年的暴发，并首次确认垂直传播与死亡病例，是当前最该补的虫媒病词条。

### B. 结核、麻风与其他细菌性疾病（7）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 11 | Tuberculose | 结核病 | ✅ `tuberculose` |
| 12 | Hanseníase | 麻风病 | ✅ `hanseniase` |
| 13 | Coqueluche | 百日咳 | ✅ `coqueluche` |
| 14 | Tétano acidental | 破伤风 | ✅ `tetano` |
| 15 | Meningite meningocócica | 流行性脑脊髓膜炎 | ✅ `meningite-meningococica` |
| 16 | Leptospirose | 钩端螺旋体病 | ✅ `leptospirose` |
| 17 | Febre tifoide | 伤寒 | ✅ `febre-tifoide` |

> 白喉（difteria）在巴西年报告病例已是个位数，未进榜，但仍属强制通报病种。

### C. 性传播感染与病毒性肝炎（10）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 18 | HIV/Aids | 艾滋病 | ✅ `hiv-aids` |
| 19 | Sífilis | 梅毒 | ✅ `sifilis` |
| 20 | Sífilis congênita | 先天性梅毒 | ➕ 待新增（现仅为 `sifilis` 内一节） |
| 21 | Gonorreia | 淋病 | ✅ `gonorreia` |
| 22 | Infecção por clamídia | 衣原体感染 | ➕ 待新增 |
| 23 | HPV / condiloma acuminado | HPV 感染／尖锐湿疣 | ➕ 待新增 |
| 24 | Hepatite A | 甲型肝炎 | ◐ 仅合并条目 `hepatites-virais` |
| 25 | Hepatite B | 乙型肝炎 | ◐ 仅合并条目 `hepatites-virais` |
| 26 | Hepatite C | 丙型肝炎 | ◐ 仅合并条目 `hepatites-virais` |
| 27 | Hepatite D | 丁型肝炎 | ◐ 仅合并条目 `hepatites-virais` |

> 四种肝炎目前挤在一条 `hepatites-virais` 里。乙型和丙型的传播途径、自然史、治疗路径差别很大，拆成独立词条更符合搜索意图；丁型肝炎只在亚马逊西部流行，但属于巴西特色。

### D. 寄生虫病与地方性真菌病（10）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 28 | Doença de Chagas | 恰加斯病 | ➕ 待新增 |
| 29 | Leishmaniose visceral (calazar) | 内脏利什曼病 | ◐ 仅合并条目 `leishmaniose` |
| 30 | Leishmaniose tegumentar americana | 美洲皮肤利什曼病 | ◐ 仅合并条目 `leishmaniose` |
| 31 | Esquistossomose mansônica | 曼氏血吸虫病 | ✅ `esquistossomose` |
| 32 | Filariose linfática | 淋巴丝虫病（象皮病） | ✅ `elefantiase` |
| 33 | Ascaridíase | 蛔虫病 | ✅ `ascaridiase` |
| 34 | Ancilostomíase | 钩虫病 | ✅ `ancilostomiase` |
| 35 | Cisticercose | 囊虫病 | ✅ `cisticercose` |
| 36 | Toxoplasmose | 弓形虫病 | ➕ 待新增 |
| 37 | Paracoccidioidomicose | 副球孢子菌病 | ➕ 待新增 |

> 恰加斯病是巴西最具标识性的被忽视热带病，估算仍有百万级感染者，词条库里完全空缺。副球孢子菌病是拉美特有的系统性真菌病，巴西报告病例占全球多数。

### E. 心血管疾病（8）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 38 | Hipertensão arterial sistêmica | 高血压 | ✅ `hipertensao` |
| 39 | Infarto agudo do miocárdio | 急性心肌梗死 | ✅ `infarto-e-avc` |
| 40 | Acidente vascular cerebral | 脑卒中 | ✅ `infarto-e-avc` |
| 41 | Insuficiência cardíaca | 心力衰竭 | ✅ `insuficiencia-cardiaca` |
| 42 | Fibrilação atrial | 心房颤动 | ✅ `fibrilacao-atrial` |
| 43 | Doença arterial coronariana | 冠状动脉疾病 | ✅ `doenca-arterial-coronariana` |
| 44 | Dislipidemia | 血脂异常 | ✅ `colesterol-alto` |
| 45 | Trombose venosa profunda | 深静脉血栓形成 | ➕ 待新增 |

> 心梗和卒中目前合在 `infarto-e-avc` 一条里，两者急救时间窗、二级预防用药完全不同，建议拆开。

### F. 代谢与内分泌疾病（7）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 46 | Diabetes mellitus tipo 2 | 2 型糖尿病 | ✅ `diabetes` |
| 47 | Diabetes mellitus tipo 1 | 1 型糖尿病 | ➕ 待新增 |
| 48 | Obesidade | 肥胖症 | ✅ `obesidade` |
| 49 | Hipotireoidismo | 甲状腺功能减退症 | ✅ `hipotireoidismo` |
| 50 | Hipertireoidismo | 甲状腺功能亢进症 | ➕ 待新增 |
| 51 | Gota | 痛风 | ✅ `gota` |
| 52 | Osteoporose | 骨质疏松症 | ✅ `osteoporose` |

### G. 肾脏、泌尿与血液疾病（6）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 53 | Doença renal crônica | 慢性肾脏病 | ✅ `doenca-renal-cronica` |
| 54 | Litíase renal | 肾结石 | ➕ 待新增 |
| 55 | Infecção do trato urinário | 尿路感染 | ✅ `infeccao-urinaria` |
| 56 | Anemia ferropriva | 缺铁性贫血 | ✅ `anemia-ferropriva` |
| 57 | Anemia falciforme | 镰状细胞贫血 | ✅ `doenca-falciforme` |
| 58 | Hiperplasia prostática benigna | 良性前列腺增生 | ➕ 待新增 |

### H. 孕产与妇科（4）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 59 | Endometriose | 子宫内膜异位症 | ➕ 待新增 |
| 60 | Síndrome dos ovários policísticos | 多囊卵巢综合征 | ➕ 待新增 |
| 61 | Pré-eclâmpsia | 子痫前期 | ➕ 待新增 |
| 62 | Diabetes gestacional | 妊娠期糖尿病 | ➕ 待新增 |

> 巴西孕产妇死亡的主因仍是妊娠高血压综合征，子痫前期绕不开。

### I. 呼吸系统疾病（8）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 63 | Asma | 哮喘 | ✅ `asma` |
| 64 | DPOC | 慢性阻塞性肺疾病 | ✅ `dpoc` |
| 65 | Rinite alérgica | 过敏性鼻炎 | ✅ `rinite-alergica` |
| 66 | Pneumonia adquirida na comunidade | 社区获得性肺炎 | ✅ `pneumonia` |
| 67 | Bronquiolite viral | 病毒性毛细支气管炎 | ✅ `bronquiolite` |
| 68 | Gripe (influenza) | 流行性感冒 | ✅ `gripe` |
| 69 | Covid-19 | 新冠肺炎 | ✅ `covid-19` |
| 70 | Otite média aguda | 急性中耳炎 | ✅ `otite-media-aguda` |

### J. 消化、风湿与骨骼肌肉疾病（10）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 71 | Doença do refluxo gastroesofágico | 胃食管反流病 | ✅ `doenca-do-refluxo-gastroesofagico` |
| 72 | Úlcera péptica | 消化性溃疡 | ✅ `ulcera-peptica` |
| 73 | Infecção por Helicobacter pylori | 幽门螺杆菌感染 | ✅ `infeccao-por-helicobacter-pylori` |
| 74 | Cirrose hepática | 肝硬化 | ✅ `cirrose-hepatica` |
| 75 | Esteatose hepática | 脂肪性肝病 | ✅ `esteatose-hepatica` |
| 76 | Doença de Crohn | 克罗恩病 | ➕ 待新增 |
| 77 | Artrite reumatoide | 类风湿关节炎 | ✅ `artrite-reumatoide` |
| 78 | Lúpus eritematoso sistêmico | 系统性红斑狼疮 | ➕ 待新增 |
| 79 | Osteoartrite | 骨关节炎 | ➕ 待新增 |
| 80 | Espondilose lombar | 腰椎退行性病变 | ✅ `espondilose-lombar` |

### K. 神经精神与眼科（10）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 81 | Depressão | 抑郁症 | ✅ `depressao` |
| 82 | Transtorno de ansiedade generalizada | 广泛性焦虑障碍 | ➕ 待新增 |
| 83 | Transtorno bipolar | 双相障碍 | ➕ 待新增 |
| 84 | Esquizofrenia | 精神分裂症 | ➕ 待新增 |
| 85 | Epilepsia | 癫痫 | ✅ `epilepsia` |
| 86 | Enxaqueca | 偏头痛 | ✅ `enxaqueca` |
| 87 | Doença de Alzheimer | 阿尔茨海默病 | ➕ 待新增 |
| 88 | Doença de Parkinson | 帕金森病 | ➕ 待新增 |
| 89 | Glaucoma | 青光眼 | ✅ `glaucoma` |
| 90 | Catarata | 白内障 | ✅ `catarata` |

### L. 恶性肿瘤（10）

| # | Português | 中文 | 状态 |
|---|---|---|---|
| 91 | Câncer de pele não melanoma | 非黑色素瘤皮肤癌 | ✅ `cancer-de-pele` |
| 92 | Melanoma | 黑色素瘤 | ➕ 待新增 |
| 93 | Câncer de mama | 乳腺癌 | ✅ `cancer-de-mama` |
| 94 | Câncer do colo do útero | 宫颈癌 | ✅ `cancer-do-colo-do-utero` |
| 95 | Câncer de próstata | 前列腺癌 | ✅ `cancer-de-prostata` |
| 96 | Câncer de pulmão | 肺癌 | ✅ `cancer-de-pulmao` |
| 97 | Câncer colorretal | 结直肠癌 | ✅ `cancer-colorretal` |
| 98 | Câncer de estômago | 胃癌 | ✅ `cancer-de-estomago` |
| 99 | Câncer de boca | 口腔癌 | ➕ 待新增 |
| 100 | Leucemia linfoblástica aguda | 急性淋巴细胞白血病 | ✅ `leucemia-linfoblastica-aguda` |

## 三、覆盖度盘点

| 状态 | 行数 | 说明 |
|---|---|---|
| ✅ 已有独立词条 | 68 | 对应 67 条既有词条（`infarto-e-avc` 同时覆盖心梗与卒中） |
| ◐ 仅有合并条目，需拆分 | 6 | `hepatites-virais` ×4、`leishmaniose` ×2 |
| ➕ 完全空缺 | 26 | 新增候选 |
| **合计** | **100** | |

另有一批既有词条不在本榜（共 11 条），它们要么是泛指分类，要么负担不足以进前 100：

`helmintiases`、`parasitoses-intestinais`、`gastroenterite`、`faringite-e-amigdalite`、`tracoma`、`amebiase`、`giardiase`、`tricuriase`、`oxiuriase`、`hidatidose`、`shigelose`

其中 `helmintiases` 与 `parasitoses-intestinais` 是重复的泛指条目，建议后续用具体病名替代后合并。

## 四、建议优先补的 10 个

按「负担重 × 词条库缺口大 × 搜索需求明确」排序：

1. **Doença de Chagas（恰加斯病）** — 巴西最具标识性的被忽视热带病，完全空缺
2. **Febre do Oropouche（奥罗普切热）** — 2024 年暴发的新兴病种，先发优势明显
3. **Doença de Alzheimer（阿尔茨海默病）** — 老龄化最快拉动的死因之一，词条库零覆盖
4. **Lúpus eritematoso sistêmico（系统性红斑狼疮）** — 巴西患病率高于全球均值，且以年轻女性为主
5. **Osteoartrite（骨关节炎）** — 高就诊量、高致残，现有库里只有腰椎病
6. **Toxoplasmose（弓形虫病）** — 孕妇与免疫抑制人群的常规咨询点
7. **Pré-eclâmpsia（子痫前期）** — 孕产妇死亡主因，H 组四篇可成系列
8. **Litíase renal（肾结石）** — 急诊与泌尿科最常见病种之一
9. **Hiperplasia prostática benigna（良性前列腺增生）** — 与已有前列腺癌形成互补
10. **Transtorno de ansiedade generalizada（广泛性焦虑）** — 巴西焦虑障碍患病率居世界前列，只有抑郁单条撑不住

**另有 3 项结构任务**（不是新增，是拆分）：`hepatites-virais` 拆 A/B/C/D；`leishmaniose` 拆内脏型/皮肤型；`infarto-e-avc` 拆心梗/卒中。

## 五、资料来源

- 巴西卫生部 *Saúde de A a Z*（`gov.br/saude/pt-br/assuntos/saude-de-a-a-z`）——逐字母核对病名拼写与官方口径
- 巴西卫生部 *Lista Nacional de Notificação Compulsória de Doenças*（强制通报病种清单）
- 巴西国家癌症研究所 INCA *Estimativa de Incidência de Câncer* ——癌症谱排序
- WHO *Global Health Estimates* / *The top 10 causes of death*（2026 版，覆盖 2000–2023）——死因结构
- 巴西卫生部 Vigitel（慢病危险因素电话调查）——高血压、糖尿病、肥胖的成人患病水平
- Fiocruz / SVS 虫媒病监测公报——登革、基孔肯雅、寨卡、奥罗普切、黄热的流行态势

> 注意：本文件只是选题地图，不是医学内容。真正写词条时，每个数字、检测时间窗、危险信号都必须按 `AGENTS.md` 第一节回到 `skills/_shared/sources/library.json` 与官方页核实，不能从本文件直接搬运。
