# 疾病词条与派生文章：触发条件与固定工作流

本文件是**触发入口**：当你（任何 AI 工具或成员）接到下面这类请求时，按本文件走固定工作流，不得跳过。

**规则全文见仓库根目录的 [`AGENTS.md`](../AGENTS.md)，动手前必须先读它。** 本文件只保留触发条件与工作流骨架，内容与 `AGENTS.md` 冲突时以 `AGENTS.md` 为准。

下列路径均相对**仓库根目录**。

## 一、触发条件

用户要求做以下任一件事时触发：

- **新增疾病词条**；
- **修改已有疾病词条**；
- 为某疾病**补写 / 重写派生文章与配图**。

## 二、固定工作流（链式，按序执行）

1. **疾病词条**：读 `skills/disease-encyclopedia-ptbr/SKILL.md` 走全流程
   （第 0 步先判**新增**还是**修改** → 定位来源 → 建立事实清单 → 核实 → 写入 `pt-BR` 与 `zh-Hant` 两层 → 主题、分类、图片接线）。
2. **派生文章**：读 `skills/article-derivation-ptbr/SKILL.md`
   - 先确认目标疾病词条**已存在**（不存在则回到第 1 步）；
   - 再读医典「相关阅读」模块，按条目数决定篇数：**无该模块不生成；1–5 条按条数；大于 5 条取 5 篇**；
   - 核实事实后写文，写入 `src/data/articles.ts` 及对应孪生，完成主题、图片与双向接线。
   - 用户只要词条且明确不需要文章时，可跳过本步。
3. **三轮质检**：两个 skill 都读 `skills/_shared/qc-workflow.md`，走满三轮
   （第一轮医学与安全、第二轮巴西本地事实与本地化、第三轮巴西葡语语言），每轮逐条对照 `skills/_shared/editorial-checklist.md` 的对应章节。
4. **交付门禁**：三轮质检后的综合评分必须为 **10 分且无关键错误**；未达标按扣分项修改并**重跑三轮**，达标方可交付。
5. **门禁命令**：
   ```bash
   npm run check:editorial      # 编辑红线，必须通过（与 scripts/editorial-baseline.json 比对，只减不增）
   node scripts/check-i18n.mjs  # 双语结构不变量与繁体字形，判断标准是与既有问题的差异
   npm run build                # 必须成功；新增词条确认新路由已生成，修改模式确认原路由未被破坏
   ```

**配图分工**：疾病配图走 `skills/disease-image-generation-ptbr/SKILL.md` 的医学插画板（AI 生成，不再搜照片）；派生文章配图走 `skills/article-derivation-ptbr/SKILL.md` 的 Unsplash / Pexels 搜图。两条流程不得互换。

## 三、不触发三轮质检的例外

纯图片替换、`alt` 文字修正或个别字词校正，不构成「新增/修改疾病词条」，按最小改动处理即可，不必走三轮。

但只要改动触及**医学表述、数字、检测时间窗、危险信号、巴西政策、section 结构或派生文章正文**，就仍按第二节执行三轮质检。

## 四、两条硬约束

- 不要在没有读过对应 skill（`skills/disease-encyclopedia-ptbr/SKILL.md` 或 `skills/article-derivation-ptbr/SKILL.md`）与共享清单（`skills/_shared/`）的情况下，直接改 `src/data` 下的疾病或文章文案。
- 语言修改不得改动医学事实：数字、检测时间窗、危险信号、用药禁忌和巴西政策表述只能因**核实**而变，不能为语言流畅而变。
