---
name: source-library-ptbr
description: 为本站疾病词条与派生文章收集、核实、沉淀并复用官方来源。写作前先用 scripts/references.mjs 检索共享资料库 skills/_shared/sources/library.json，命中即复用（label/url/publisher 原样写进 references）；未命中才去打开无法打开的官方来源、逐条核实医学断言，再用 references.mjs add 回写资料库；核不到来源的断言一律降调或删除。交付前跑 npm run check:references，保证 references 的 url 都在库中且 host 在官方白名单内。可被疾病医典 skill 与派生文章 skill 调用，也可单独执行。不用于个人诊断或个体化治疗。
---

# 巴西葡语来源资料库

本 skill 负责**取源、核实、沉淀、复用**这一环，服务[疾病医典 skill](../disease-encyclopedia-ptbr/SKILL.md)与[派生文章 skill](../article-derivation-ptbr/SKILL.md)。它不写词条正文，也不写文章正文，只保证「正文里每个具体断言都能溯源」。

## 默认设置

- **唯一事实源**是共享资料库 `library.json`（本 skill 与两个兄弟 skill 只此一份）。任何写进数据文件 `references` 的链接，都必须先登记在库中。
- 读写一律通过 `node scripts/references.mjs <search|add|import|check>`，不要手工拼 `references` 对象。
- **host 白名单**：`gov.br`、`saude.gov.br`、`anvisa.gov.br`、`who.int`、`paho.org`、`cdc.gov`、`unaids.org.br`。成文与 `references` 都不得出现百度等未核实来源。
- 库内每条来源的 `supports` 记录它**逐条支撑的事实**（数字、时间窗、危险信号、用药建议、就医路径等）；这是把「断言 → 来源」对齐的依据。
- 共享资产：编辑清单 [`../_shared/editorial-checklist.md`](../_shared/editorial-checklist.md)、三轮质检 [`../_shared/qc-workflow.md`](../_shared/qc-workflow.md)、资料库说明 [`../_shared/sources/README.md`](../_shared/sources/README.md)。

## 工作流程

### 1. 先查库（默认动作，替代重复检索）

按目标疾病的 `slug`、主题关键词或断言关键词检索：

```bash
node scripts/references.mjs search gastroenterite
node scripts/references.mjs search "soro de reidratação oral"
```

- **命中** → 进入第 4 步「投影」，直接用，不再去搜。
- **未命中** → 进入第 2 步取源。

### 2. 取源（仅在库中查不到时）

- 打开官方页（浏览器或 WebFetch），**必须真的读到页面内容**，不得凭记忆或常识补来源。
- 只取白名单 host 的页面；百度、商业站点、聚合站一律不取。
- 一次取到多条来源时逐条登记。

### 3. 核实并回写

- 逐条把需要引用的断言对回来源页原文：定义、数字、时间窗、危险信号、用药建议与禁忌、就医路径、风险人群。
- 用 `add` 登记已核实的来源，**务必写 `supports`**（每条一句话，写清它支撑的事实）：

```bash
node scripts/references.mjs add '{"label":"Doenças diarreicas agudas (DDA)","url":"https://www.gov.br/saude/pt-br/assuntos/saude-a-a-z/d/dda","publisher":"Ministério da Saúde (Brasil)","topics":["diarreia","desidratação"],"diseases":["gastroenterite"],"supports":["定义：24 小时内 ≥3 次稀/水样便","口服补液盐 + 锌 10 到 14 天"]}'
```

- 若 URL 已在库中但仍是 `imported`、缺 `supports`：打开原页核实后，手工把该条目的 `supports` 与 `status: verified` 补上。

### 4. 投影到 `references`

- 命中的来源，其 `label` / `url` / `publisher` **原样**写入目标词条或文章的 `references`（`Reference` 三字段）。
- `pt-BR` 与 `zh-Hant` 孪生**逐字段镜像**：`references` 的 url 集合必须一致（孪生的 `label` / `publisher` 可译，`url` 不变）。

### 5. 核不到来源时的硬规则

- 任何无法对应到词条自身 section/faq、或库中 `verified` 来源的具体断言（数字、剂量、天数、分级、分型、时间窗、就医路径、风险人群、操作步骤）**一律降调为定性表述或删除**，不得凭常识保留。这是编辑清单第 20 条与 `qc-workflow` 的硬门槛。

### 6. 交付门禁

```bash
npm run check:references   # 库自检 + references 全部在库中 + host 合规
```

发现「url 引用但未登记」或「host 不合规」会非零退出，必须修到通过再交付。

### 7. 批量补齐历史引用（仅维护时用）

一次性把 `src/data` 里尚未登记的 url 汇入库：

```bash
node scripts/references.mjs import
```

这些条目会以 `status: imported` 入库（可用，但缺 `supports`）；后续如要引用其具体断言，应打开原页核实并升级为 `verified`。
