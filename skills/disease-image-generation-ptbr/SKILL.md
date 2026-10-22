---
name: disease-image-generation-ptbr
description: 为本站 src/data/diseases.ts 里的疾病词条生成统一风格的「医学插画板」配图（AI 生成），覆盖新增疾病首次配图、以及把照片风格或风格不一致的旧图重做为插画板。先用脚本从 diseases.ts 提取该疾病的 summary 与症状 bullets 作为素材，据此确定主图剖面、右上角临床插图与下方四个症状图标，再以既有插画板为版式参照图、套用固定提示词模板用 GenerateImage 生成 2240x1680 图，用 sharp 去除生成器水印（必要时填背景并用 SVG 重画第 4 个标签）并按原比例缩到 1024x768 转码为 webp，逐张核图后成对登记 pt-BR 与 zh-Hant 两语言层的 alt，并跑通 check-i18n.mjs 门禁。单个疾病可只处理它自己；一批补做时按本文批量执行。不用于文章配图（文章图走 article-derivation-ptbr 的 Unsplash / Pexels 搜图流程），不用于个人诊断。
---

# 巴西葡语疾病配图（医学插画板）

为疾病词条生成配图。本站疾病配图**不是实拍照片，而是统一风格的「医学插画板」**（illustrated plates）：写实 3D 解剖剖面主图 + 右上角临床照片插图 + 下方四个圆形线性症状图标，`images.ts` 里以 `Ilustração médica de...` 开头的 `alt` 即此类。**黄金参照图**：`public/img/doenca-dengue.webp`（构图、留白、图标样式、葡语标注位置都照它对齐）。

## 与现有 skill 的关系（先读这段）

- 本 skill 是**疾病配图**的唯一权威流程，反映当前实际做法。
- [疾病医典 skill 5.6](../disease-encyclopedia-ptbr/SKILL.md) 现已指向本 skill：疾病配图一律用 AI 生成的医学插画板，不再从 Unsplash / Pexels 找照片。执行疾病配图时**以本 skill 为准**。
- **文章配图是另一条流程**：每篇派生文章配 1 张 Unsplash / Pexels 真实照片，细则见 [派生文章 skill 的图片节](../article-derivation-ptbr/SKILL.md)；两条流程不得互换，也不得用 AI 生成图给文章配图。
- 补做/重做配图属于「纯图片替换 + `alt` 文字修正」，按[工作流文档第三节](../disease-article-workflow.md)**不走三轮质检**，只需跑通门禁 `check-i18n.mjs`。只有当改动触及医学表述、数字、危险信号等正文时，才回到疾病医典 skill 的完整流程。

## 插画板风格规范（每张都必须满足）

1. **主图**（占画面左侧约 2/3）：该疾病直接受累器官/组织的**写实 3D 解剖剖面**，病理点要可视化（如炎症发红、结晶、狭窄、异常放电信号、镰状红细胞堵塞）。软浅灰影棚背景。
2. **右上角插图**：一张**圆角矩形临床照片 inset**，取该病最易辨认的**外部体征/患者场景**（如黄热黄疸人脸、哮喘儿童喘息、糖尿病足溃疡），带**细白引线 + 白色圆点**指向主图对应部位，并用**葡语**短标签标注该体征。
3. **右下角 4 个图标**：圆形白底**细黑线条线性图标**，一字排开，各带一个**葡语症状标签**（取自 `diseases.ts` 该病症状 `bullets` 的前 4 项）。
4. **尺寸/比例**：`1024x768`（4:3）。**命名**：`public/img/doenca-<slug>.webp`（slug 本身已带 `doenca-` 前缀时会双写，如 `doenca-falciforme` → `doenca-doenca-falciforme.webp`，与 `images.ts` 的 `src` 一致）。
5. **葡语标注必须拼写正确、变音符号齐全**（这是成图里唯一会暴露错误的地方，核图重点检查）。

## 工作流程

### 0. 前置：确认 slug 与登记契约

- 在 `src/data/diseases.ts` 按 `slug` 找到该疾病，确认它**可构建**（非 `draft`）——`draft` 条目不配图。
- 配图**成对登记**，key 均为 slug：`src/lib/images.ts` 的 `diseaseImages`（pt-BR `alt`）与 `src/data/zh-Hant/image-alts.ts`（繁中 `alt`）。缺任一即门禁报错。
- 重做旧图时：先 Read 现有 `doenca-<slug>.webp` 看是照片还是插画板，并对照 `images.ts` 里该 key 的 `alt` 是否以 `Ilustração médica` 开头——开头即为已是插画板风格（可能只需微调），未开头（照片描述）即需重做。

### 1. 采集素材（主图/inset/4 标签的来源）

不臆造病理与症状：主图受累器官、右上角体征、四个症状标签全部来自该疾病在 `diseases.ts` 的 `summary` 与症状 `bullets`。批量补做时先提取素材，例如写一个临时脚本 `.tmp-content/dump-<n>.mjs`，对每个 slug 从 `diseases.ts` 抓出 `summary` 与各 section 的 `bullets`，输出到 `.tmp-content/dump-<n>.txt` 供设计每图（单病可跳过脚本，直接读条目）。

据此为每张定三件事：
- **主图** = 该病直接受累器官的剖面 + 该病特有的病理视觉点；
- **右上角 inset** = summary/首节里最直观的外部体征或患者场景；
- **4 个图标标签** = 症状 `bullets` 里最具代表性的 4 项，**每个不超过 12 个字符**（超长就短化，如 `Pele espessa`、`Lesão nasal`），`alt` 按短化后的词登记。

### 2. 拼提示词（固定模板，只换三部分）

先把一张已达标的插画板作为**版式参照图**传给生成器（`doenca-pneumonia.webp` 或 `doenca-dengue.webp`），再用下面的英文模板（`[...]` 内按第 1 步替换）：

```
Website medical infographic plate, 4:3. Photorealistic 3D medical illustration in the same clean editorial style and layout as <image 1>: main subject on the left on a soft light-gray studio background; a rounded-rectangle clinical photograph inset in the upper right with a thin white leader line and a small white dot pointing to [主图对应部位], labeled in Brazilian Portuguese "[葡语体征标注]"; four small circular line-art icons (thin dark strokes on white discs) in a single row at the lower right, each with a small one-line Portuguese caption under it. Main subject: [疾病剖面主图，含该病特有的病理可视化点]. Inset: [最易辨认的外部体征/患者场景]. Every Portuguese word must be spelled exactly like this, letter for letter, with the accents: inset caption "[葡语体征标注]"; the four captions "[症状1]", "[症状2]", "[症状3]", "[症状4]". Do not add any other word anywhere. Keep the icon row and captions compact and end them before 85 percent of the image width, leaving the bottom right corner of the frame completely empty background. Clean editorial medical infographic style, soft realistic lighting.
```

三条硬性补充：

- **拼写锁定段不能删**：直接把 5 个葡语词原文写进提示词，并保留 `letter for letter` 与 `Do not add any other word anywhere`。生成器仍会错拼，这段只是降低概率。
- **标签必须短**：每个标签控制在 12 个字符内，否则会换行或与相邻标签粘连。用短化写法（如 `Pele espessa` 而不是 `Pele endurecida`，`Lesão nasal` 而不是 `Lesões no nariz`），并在第 6 步按短化后的词登记 `alt`。
- **右下角留空**：`end them before 85 percent of the image width, leaving the bottom right corner completely empty` 是为了让生成器水印落在空白处，必须保留。

### 3. 用 GenerateImage 生成

- 调 `GenerateImage`，`size` 传 `2240x1680`（`landscape_4_3`），`image_paths` 传版式参照图的绝对路径（第 1 项即模板里的 `<image 1>`），`path` 用 `.tmp-content/plates/v<N>-<slug>`，`prompt` 用第 2 步拼好的模板。**不要传 `1024x768`**：工具要求总像素不少于 3,686,400，直接传小尺寸会失败。
- 同批图**共用同一张参照图**，否则版式会各写各的。
- 成图先按原比例缩到 `1024x768`（4:3 到 4:3，不裁不拉伸）。**不要裁底**：裁底会把圆盘压成椭圆、把标签推到底边，正是「和之前效果不一样」的来源。
- 偶发 `40500` 服务器错误**直接重试即可**（同一 prompt 再跑一次通常成功）。
- **一次做多个疾病时**，把互不依赖的 `GenerateImage` 调用并行发出。

### 4. 去水印 + 转 webp（sharp）

生成器在图**右下角加「AI 生成」水印，落位不固定，而且往往正好压住第 4 个标签**。**不要再用裁底解决**（裁底会连带削掉标签、并把整图纵向拉伸）。按落位分两种处理（参考实现 `.tmp-content/v6-to-webp.mjs`，临时目录会被清理，按下面步骤重写即可）：

1. **水印落在空白背景**：逐行取水印**左侧**干净背景列的像素填充水印矩形。每一行对 y 方向取 11 个采样求**中位数**，否则水印自身的细线会被当成背景色复制成一条横贯画面的亮线。
2. **水印压住第 4 个标签**（最常见）：先按白色圆盘做连通域，合并出 4 个圆心与半径；用第 3 个标签的暗色像素包围盒确定字号（`高度 / 0.72`）与基线；把「从四个圆盘最低点 + 8px 到画面底、从第 3/4 圆心连线中点到右边缘」的整块区域逐行填成本地背景色；再用 SVG 以 `Helvetica Neue, Helvetica, Arial` 在**第 4 个圆心的正下方**重画该标签，字号与基线对齐第 3 个标签。超过 11 个字符的标签把字号乘 `0.82`，避免和第 3 个标签粘连。
3. 处理完 `resize({ width: 1024, height: 768, fit: 'fill' })`（源图已是 4:3，不会变形），`webp({ quality: 82 })` 输出到 `public/img/doenca-<slug>.webp`。**注意顺序**：先 resize 出 1024×768 的 png buffer，再单独 `composite([svg])`；把二者放在同一 pipeline 里会报 `Image to composite must have same dimensions or smaller`，SVG 要按 1024 坐标系绘制。
4. **编码只用 `sharp`**（`node_modules` 已有），本机无 `cwebp`/ImageMagick，`sips` 不支持 webp。目标文件已存在且确认无需重做时**先跳过**，避免重复覆盖。

### 5. 核图（逐张 Read，不得跳过）

转码后**逐个 Read `public/img/doenca-<slug>.webp` 亲眼确认**：
1. 构图三要素齐全（主图 / 右上角 inset+引线+葡语标注 / 4 圆形图标+葡语标签），与参照图风格一致；
2. **4 个葡语标签确实对应该病症状**；第 4 个标签（重画的那条）拼写与变音必须正确，其余三条逐字核对，明显错拼（如 `Dor mucular`）就重生成或同样用 SVG 重画；
3. **无残留水印**，且第 4 个标签已被正确重画。按第 4 步处理后仍看到水印压字，**不要加大裁切硬砍**（会削掉标签、把圆盘压成椭圆）——回到第 3 步修正补丁区域重转该张。
4. **补丁不可见**：在 1024 宽预览下放大右下角，确认补丁矩形**没有可见边界**（无偏亮/偏暗色块）、**没有横贯画面的亮线或接缝**、重画的第 4 标签与第 3 个标签**字号、基线、字重视觉一致**且为单行。

### 6. 成对登记 alt

- **pt-BR**（`images.ts`）：`'Ilustração médica de [主图] , com recorte de [右上角inset] e quatro ícones de [症状1], [症状2], [症状3] e [症状4]'`。
- **zh-Hant**（`image-alts.ts`）：`'醫學插畫：[主图]，右上角是[inset]，下方圖示為[症状1]、[症状2]、[症状3]与[症状4]'`。
- **alt 硬规则**（两语言层都适用）：只描述**画面内容**、不描述页面主题；**不得含任何形式的破折号**（`— – -` 都不要）；繁中**不得出现简体专用字形、不得使用 `你`**（用 `您`）。
- 只登记 `src` 未变的换图：覆盖同名 webp 时 `images.ts` 的 `src` 不改，只改 `alt`。
- 用 SearchReplace 一次改一批时，若个别条因与其他条目文本重复而命中多处，改用**未在下文重复出现的短语**扩大上下文重试。

### 7. 门禁

```bash
node scripts/check-i18n.mjs
```

必须**全绿**（`zh-Hant coverage complete: ... N images`，且无引用本次 slug 的问题、无新增问题）。脚本会校验每个 `diseaseImages` key 都有对应繁中 `alt`、`alt` 无破折号、繁中无简体字/无 `你`。构建与部署由用户自行执行，本 skill 不跑 `pnpm build` / `astro check` / 部署。

## 常见坑

- **水印落位随机**：一批里约半数会把水印斜压在第 4 个图标上。按第 4 步做「填背景 + SVG 重画第 4 标签」，不要靠重生成碰运气，也不要统一裁切。
- **双前缀命名**：slug 已含 `doenca-` 时文件名是 `doenca-doenca-<x>.webp`，登记 `src` 时以 `images.ts` 现值为准，别自行改路径。
- **葡语拼写**：即使把 5 个词逐字写进 prompt 并加 `letter for letter`，生成器**仍会错拼**（实测 `Pena inchánda`、`Feride na pele`、`Paldze`、`Dor mucular`、`Falta de or`、`Pressão balka`）。所以：标签控制在 12 字符内；被水印压住的第 4 个标签一律用 SVG 按正确拼写重画（第 4 步）；其余标签核图时逐字核对，成片缺陷严重就重生成该张。
- **繁中用字**：避免生僻/错字形（例如把「昏厥」写成「昏蕳」），拿不准就用常见规范繁体词。
- **范围克制**：只动被点名重做的**疾病插画板**，不牵连文章配图，也不改 `diseases.ts` 正文。
