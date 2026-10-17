# 仓库规则（面向所有成员与所有 AI 工具）

本文件是仓库规则的唯一入口。不同工具读不同文件：Trae 读 `.trae/rules/project_rules.md`（只有触发条件，指向本文件），Codex、Cursor、Copilot、Cline、Claude Code、Zed、Warp、Jules 等读根目录的 `AGENTS.md`。两者冲突时以本文件为准。

## 一、疾病词条与派生文章必须走固定工作流

「疾病词条」与「派生文章」由两个 skill 分别负责，串成一条链式工作流：

- **Skill A（疾病词条）**：`skills/disease-encyclopedia-ptbr/SKILL.md`
- **Skill B（派生文章）**：`skills/article-derivation-ptbr/SKILL.md`
- **共享资产**（两 skill 只此一份）：`skills/_shared/editorial-checklist.md`、`skills/_shared/qc-workflow.md`、`skills/_shared/scripts/find_disease.py`

当用户要求**新增一个疾病词条**、**修改某个已有疾病词条**，或为该疾病**补充或重写派生文章与配图**时，按下面的链式流程执行，不得跳过：

1. **跑 Skill A**：先完整读 `skills/disease-encyclopedia-ptbr/SKILL.md`，按其「工作流程」执行：第 0 步先判定是**新增模式**还是**修改模式**，再定位来源、建立事实清单、核实医学结论，产出 `pt-BR`（编辑源）与 `zh-Hant`（繁体孪生）两个语言层，写入 `src/data/diseases.ts` 及对应孪生，并完成主题、分类、图片接线。
2. **跑 Skill B**：读 `skills/article-derivation-ptbr/SKILL.md`，先确认目标疾病词条已存在（不存在则回到第 1 步），再定位医典页面读取「相关阅读」模块，按条目数决定篇数（无该模块不生成；1–5 条按条数；大于 5 条取 5 篇），核实事实后写文，写入 `src/data/articles.ts` 及对应孪生，并完成主题、图片与双向接线。用户只要疾病词条且明确不需要文章时，可跳过本步。
3. 两个 skill 都必须执行 `skills/_shared/qc-workflow.md` 规定的**三轮质检**（第一轮医学与安全、第二轮巴西本地事实与本地化、第三轮巴西葡语语言），每轮对照 `skills/_shared/editorial-checklist.md` 的对应章节逐条核对。
4. **交付门禁**：三轮质检后的综合评分必须为 10 分且不存在关键错误；未达标时按扣分项修改并**重跑三轮**，直到达标。未达标不得交付，也不得用一次自检代替三轮质检。
5. 第三轮质检与交付门禁都要跑 `node scripts/check-editorial.mjs`（或 `npm run check:editorial`）：它把清单里可机械化的红线变成硬门禁。与 `scripts/editorial-baseline.json` 比对，只允许减少不允许新增；修好旧问题后跑 `--update-baseline` 收缩基线。

## 二、改文案的两条硬约束

- 不要在没有读过对应 skill（`skills/disease-encyclopedia-ptbr/SKILL.md` 或 `skills/article-derivation-ptbr/SKILL.md`）与共享清单（`skills/_shared/`）的情况下直接改 `src/data` 下的疾病或文章文案。
- 语言修改不得改动医学事实：数字、检测时间窗、危险信号、用药禁忌和巴西政策表述只能因**核实**而变，不能为语言流畅而变。

## 三、不触发三轮质检的例外

纯图片替换、`alt` 文字修正或个别字词校正，不构成「新增/修改疾病词条」，按最小改动处理即可，不必走三轮。

但只要改动触及医学表述、数字、检测时间窗、危险信号、巴西政策、section 结构或派生文章正文，就仍按第一节的三轮质检执行。

## 四、门禁命令（与编辑器、AI 工具无关，任何成员都能跑）

```bash
npm run check:editorial      # 编辑红线，必须通过（与 scripts/editorial-baseline.json 比对，只减不增）
node scripts/check-i18n.mjs  # 双语结构不变量与繁体字形，判断标准是与既有问题的差异，不要求全绿
npm run build                # 必须成功；新增词条要确认新路由已生成，修改模式要确认原路由未被破坏
```

程序化执行时以 `check:editorial` 与 `build` 的退出码为准；`check-i18n` 目前对既有问题也返回 0，需人读输出比对。
