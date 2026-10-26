# 仓库规则（面向所有成员与所有 AI 工具）

本文件是仓库规则的唯一入口。不同工具读不同文件：Trae 读 `.trae/rules/project_rules.md`（只有触发条件，指向本文件），Codex、Cursor、Copilot、Cline、Claude Code、Zed、Warp、Jules 等读根目录的 `AGENTS.md`。两者冲突时以本文件为准。

## 一、疾病词条与派生文章必须走固定工作流

「疾病词条」与「派生文章」由两个 skill 分别负责，串成一条链式工作流：

- **Skill A（疾病词条）**：`skills/disease-encyclopedia-ptbr/SKILL.md`
- **Skill B（派生文章）**：`skills/article-derivation-ptbr/SKILL.md`
- **共享资产**（两 skill 只此一份）：`skills/_shared/editorial-checklist.md`、`skills/_shared/qc-workflow.md`、`skills/_shared/scripts/find_disease.py`、来源资料库 `skills/_shared/sources/library.json`（读写见 `skills/source-library-ptbr/SKILL.md`）

当用户要求**新增一个疾病词条**、**修改某个已有疾病词条**，或为该疾病**补充或重写派生文章与配图**时，按下面的链式流程执行，不得跳过：

1. **跑 Skill A**：先完整读 `skills/disease-encyclopedia-ptbr/SKILL.md`，按其「工作流程」执行：第 0 步先判定是**新增模式**还是**修改模式**，再定位来源、建立事实清单、核实医学结论，产出 `pt-BR`（编辑源）与 `zh-Hant`（繁体孪生）两个语言层，写入 `src/data/diseases.ts` 及对应孪生，并完成主题、分类、图片接线。
2. **跑 Skill B**：读 `skills/article-derivation-ptbr/SKILL.md`，先确认目标疾病词条已存在（不存在则回到第 1 步），再定位医典页面读取「相关阅读」模块，按条目数决定篇数（无该模块时从词条 section 固定生成 2 篇；1–5 条按条数；大于 5 条取 5 篇），核实事实后写文，**先把本次全部篇目（含孪生）写完并写入** `src/data/articles.ts` 及对应孪生、完成主题与双向接线，**全部写完之后再统一定配图**。用户只要疾病词条且明确不需要文章时，可跳过本步。
3. 两个 skill 都必须执行 `skills/_shared/qc-workflow.md` 规定的**三轮质检**（第一轮医学与安全、第二轮巴西本地事实与本地化、第三轮巴西葡语语言），每轮对照 `skills/_shared/editorial-checklist.md` 的对应章节逐条核对。
4. **交付门禁**：三轮质检后的综合评分必须为 10 分且不存在关键错误；未达标时按扣分项修改并**重跑三轮**，直到达标。未达标不得交付，也不得用一次自检代替三轮质检。
5. 第三轮质检与交付门禁都要跑 `node scripts/check-editorial.mjs`（或 `npm run check:editorial`）：它把清单里可机械化的红线变成硬门禁。与 `scripts/editorial-baseline.json` 比对，只允许减少不允许新增；修好旧问题后跑 `--update-baseline` 收缩基线。
6. **来源先查后写**：Skill A 第 3 步与 Skill B 第 2 步核实事实时，先跑 `node scripts/references.mjs search <疾病或主题>` 查共享资料库；命中即复用（`label`/`url`/`publisher` 原样写进 `references`），未命中才打开官方页核实，并用 `references.mjs add` 回写资料库、记 `supports`；核不到来源的断言一律降调或删除。详见 `skills/source-library-ptbr/SKILL.md`。
7. **配图分工**：**疾病配图**统一用 `skills/disease-image-generation-ptbr/SKILL.md` 生成医学插画板（3D 解剖剖面 + 右上角临床照片 inset + 4 个症状图标），不再从 Unsplash / Pexels 找照片；**派生文章配图**仍用 Pexels / Unsplash 真实照片搜索（**Pexels 优先**，且必须在全部文章写完之后再做），流程见 `skills/article-derivation-ptbr/SKILL.md` 的图片节。两条流程不得互换，也不得用 AI 生成图给文章配图。

## 二、改文案的两条硬约束

- 不要在没有读过对应 skill（`skills/disease-encyclopedia-ptbr/SKILL.md` 或 `skills/article-derivation-ptbr/SKILL.md`）与共享清单（`skills/_shared/`）的情况下直接改 `src/data` 下的疾病或文章文案。
- 语言修改不得改动医学事实：数字、检测时间窗、危险信号、用药禁忌和巴西政策表述只能因**核实**而变，不能为语言流畅而变。

## 三、不触发三轮质检的例外

纯图片替换、`alt` 文字修正或个别字词校正，不构成「新增/修改疾病词条」，按最小改动处理即可，不必走三轮。

但只要改动触及医学表述、数字、检测时间窗、危险信号、巴西政策、section 结构或派生文章正文，就仍按第一节的三轮质检执行。

## 四、门禁命令（与编辑器、AI 工具无关，任何成员都能跑）

```bash
npm run verify               # 一次跑完三道门禁 + 接线自查，写作期的主力循环，约 1 秒
npm run verify -- --prefix <疾病>   # 只看某个疾病的文章，附字数与每节段落数
npm run verify -- --budget 6        # 顺带给出每节该写多少词
npm run build                # 必须成功；新增词条要确认新路由已生成，修改模式要确认原路由未被破坏
```

`npm run verify` 是 `check:editorial` + `check-i18n` + `check:references` 的并行封装，另外补上三道门禁都不管的**接线**：文章的疾病 / 主题 / 分类 / 配图 / CTA 是否都指向真实存在的条目，以及每篇文章的字数与每节段落数。它以退出码收口，可作任何脚本的最后一步。

单跑某一项时仍可用：

```bash
npm run check:editorial      # 编辑红线，必须通过（与 scripts/editorial-baseline.json 比对，只减不增）
npm run check:references     # 来源门禁，必须通过：references 的 url 须在资料库中且 host 合规
node scripts/check-i18n.mjs  # 双语结构不变量、繁体字形与繁体层残留葡语，判断标准是与既有问题的差异，不要求全绿
```

程序化执行时以 `check:editorial`、`verify` 与 `build` 的退出码为准；`check-i18n` 发现任何问题（含简体字形、`你`、繁体层残留葡语）即返回非 0，需人读输出比对。

## 五、写作循环：改一次数据只跑一次构建

1. **写作期不构建。** 改完 `src/data` 用 `npm run verify -- --prefix <疾病>` 收口，约 1 秒；构建只在交付前跑一次。修改期间反复构建，是这条工作流最大的时间浪费。**执行构建时把沙箱关掉**（AI 工具在沙箱外执行，人开终端本来就是沙箱外）：沙箱 fs 代理是那 60 秒的唯一来源，关掉后构建约 6 秒。
2. **先给每节定字数，再动笔。** 正文 900–1200 词、每节 2–3 段。先用 `npm run verify -- --budget <节数>` 拿到每节的目标词数（6 节即每节约 175 词），一次写到位；写短了再逐句补，会比一次写准慢数倍。
3. **整篇替换走 `scripts/draft.mjs`，不要手算行号。** `export` 取出现有文章为 JSON，改完 `check` 看字数与双语结构，`apply` 一次性写回 `articles.ts` 与孪生；`apply` 保留 `id`、`publishedAt`、`reviewStatus` 与署名，只改正文、接线与 `updatedAt`。整块替换不再需要 Python 行范围脚本，也不会再出现替换后括号失衡。
4. **构建被批量删除守卫拦下时**（`SAFE_DELETE_BULK_CONFIRM_REQUIRED`，`dist/` 清理触发），在命令前加 `CODEBUDDY_SAFE_DELETE_ENABLED=0`，只影响该次构建进程。

```bash
node scripts/draft.mjs export <slug...> --out .tmp-content/<疾病>.json
node scripts/draft.mjs check  .tmp-content/<疾病>.json
node scripts/draft.mjs apply  .tmp-content/<疾病>.json
npm run verify -- --prefix <疾病>
npm run build
```
