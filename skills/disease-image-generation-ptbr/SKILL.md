---
name: disease-image-generation-ptbr
description: 为本站 src/data/diseases.ts 的疾病词条生成统一风格的「医学插画板」配图（AI 生成，纯文生图，全程不传任何参考图）。版式取自百度健康医典那类医学词条配图：整张画布铺平的中灰底，左侧约 58% 为出血裁切的剖面主图（3 条白点引线解剖标注），右上 1 张写实照片插图（临床照片、患者场景、影像片、检验单、器械、量表按病挑，只放最能说明问题的那一张并放大），右下 4 个白底圆盘彩色卡通症状图标，底部一行加粗葡语小结。先用脚本从 diseases.ts 提取 summary 与症状 bullets 定六格内容，再套用编号契约式英文模板（干净医用信息图上色，禁水彩笔触；含安全红线：不切开人体躯干、不露血肉、不渗液、不铺密细小血管、不要标本质感）用 ImageGen 出 4:3 图，sharp 去水印转 webp 到 1024x768，逐张核图后成对登记 pt-BR 与 zh-Hant 两语言层 alt 并跑通 check-i18n 门禁。覆盖新增疾病首次配图与旧照片风格配图重做。不用于文章配图（文章图走 article-derivation-ptbr 的 Pexels / Unsplash 搜图），不用于个人诊断。
---

# 巴西葡语疾病配图（医学插画板 · 纯文生图）

给疾病词条配图。本站疾病配图**不是实拍照片，是统一风格的「医学插画板」**（illustrated plate）。`images.ts` 里以 `Ilustração médica de...` 开头的 `alt` 就是这一类。

**三条不可谈判的前提**，任何一步都不能为了省事绕开：

1. **纯文生图。** `ImageGen` 的 `image1` / `image2` / `image3` **一律不传**。版式与画法全部写在提示词里。喂参考图会把参考图中的中文标签和平台水印一起带进成图，也会让同一批图的版式各写各的。
2. **图上文字只有巴西葡语。** 不得出现任何中文字符（参照版式来自中文图，最容易串味），不得出现 logo、签名、平台水印。
3. **观感安全。** 面向大众健康教育，不惊悚：不切开人体躯干、不露血肉、不渗液、不铺密细小血管、不要标本质感。

站内既有的老图是「写实 3D 渲染、单插图、无图上标注、无底部小结」的另一套写法。**新图与重做一律按本文件**，不要回退。

## 一、目标画面：六格契约

整张图由六个固定格子组成。提示词就是把这六格写死，只替换每格的内容。

| 格 | 位置 | 内容 | 硬约束 |
|---|---|---|---|
| ① 画布 | 全幅 | 平的中灰底 `#9e9e9e`，edge to edge | 无渐变、无暗角、无投影、无边框 |
| ② 主图 | 左 58%，上下出血 | 该病直接受累器官/组织的**简化剖面**，病理点可视化 | 扁平上色 + 柔和体积，非照片、非 3D 渲染、非标本 |
| ③ 解剖标注 | 压在主图上 | 细白引线 + 小实心白点 + 短标签，3 条 | 白点必须**落在它所指的结构上**；灰底上的标签用 `#4a4a4a` |
| ④ 右上照片 | 右上整列 | **写实照片 1 张**（圆角 + 细白边），从画面上缘铺到圆盘上方 | 只放一张、要放大；与手绘主图形成对比，这是本版式的关键特征 |
| ⑤ 症状圆盘 | 右下 | 4 个等大白色圆盘，内嵌**彩色扁平卡通小场景** | 不是线稿、不是黑描边图标；每盘下方一行深灰标签 |
| ⑥ 底部小结 | 圆盘正下方 | 一行加粗深灰葡语短句 | 概括典型表现，≤34 字符 |

主图与照片的对比（画的 vs 真的）、灰底的克制、圆盘的整排节奏，是这张图「像医典配图」的全部原因。任何一格走形，整张就变成模板拼贴。

**尺寸与命名**：`1536x1152` 生成（4:3）→ 缩到 `1024x768` → `public/img/doenca-<slug>.webp`。slug 自带 `doenca-` 前缀时会双写（`doenca-falciforme` → `doenca-doenca-falciforme.webp`），**以 `images.ts` 里现成的 `src` 为准**，不要自己改路径。

## 二、内容设计：六格从哪来

不臆造病理与症状。主图受累器官、3 条解剖标注、右上照片、4 个症状标签、底部小结，全部来自该疾病在 `diseases.ts` 的 `summary`、各 section 的 `bullets` 与诊断节里最常见的检查。

单病直接 Read 条目即可；批量补做时先写一个临时脚本 `.tmp-content/dump-<n>.mjs`，把每个 slug 的 `summary` 与各 section 的 `bullets` 导到 `.tmp-content/dump-<n>.txt` 供设计每图。

每张图定这六件事：

1. **主图** = 受累器官 + 简化剖面方式 + 该病特有的病理视觉点。写这一格只用「器官名 + 剖开的方向 + 里面能看到什么」，例如 `a thick blood vessel cut open lengthwise, its cut face an oval opening at the lower left`。**不要写** `cut-away torso`、`cross-section of the body`、`flesh`、`specimen`——这些词会直接把图推向解剖标本。腔内/内部颜色要**明写**（血管写 `a smooth deep red interior`），否则调色板里的 cream 会把管腔染成米黄，整张读起来像肠道。
2. **3 条解剖标注** = 该病最核心的三个解剖/病理名词（`Vaso sanguíneo` / `Hemácias` / `Insulina`），每条 **≤18 字符**，并明确写出**白点落在哪个结构上**。
3. **右上照片（固定 1 张）** = 先问「读者看这个病最需要看到什么」，从临床照片 / 患者场景 / 影像片 / 检验单 / 器械 / 量表里挑**最能说明问题的那一张**，放大占满右上整列（上缘铺到圆盘上方）。**不要为了凑格塞第二张**——两张挤在一起会让右列失去呼吸感，这也是本站改成固定一张的原因。挑的时候优先「读者能一眼认出的场景」（采血、量血压、X 光片），而不是器械静物特写。
4. **4 个症状标签** = 症状 `bullets` 里最具代表性的 4 项，每个 **≤12 字符**，并写出**圆盘里画什么**（`a person drinking a glass of water`）。图标画面要具体到动作与物件，写「口渴」这种抽象词会得到黑线稿。
5. **底部小结** = 一句概括典型表现的葡语短句，**≤34 字符**（`Sede, fome, urina e emagrecimento`）。
6. **照片说明 1 条** = 深灰短标注（`Teste de glicemia`）。

图上葡语文字合计 **9 条**：3 解剖 + 1 照片 + 4 圆盘 + 1 小结。这是成图里唯一会暴露错误的地方，字数上限不是审美要求，是为了不换行、不粘连、不被裁切。

## 三、提示词模板（实测版，直接复制改内容）

模板是**编号契约式**：先把风格与画布定死，再 1→5 逐格写。实测比散文式描述稳得多，因为模型对编号格子的遵循度明显高于段落。

```
Editorial medical illustration for a health encyclopedia, horizontal 4:3, layout contract below must be followed exactly, with exactly one photograph in the whole picture.

STYLE: clean modern medical infographic illustration, soft airbrushed gradients on smooth clean shapes, gentle volume shading, rounded simplified forms, saturated palette of crimson red, salmon pink, cream and pale yellow-green, matte dry surfaces, thin soft outlines only where they help reading. No watercolor, no visible paint strokes, no brush texture, no grain. Not a photograph, not a 3D render, not an anatomical specimen, not flat vector art. Calm, friendly, suitable for public health education.

CANVAS: the entire background is one flat uniform mid-gray (#9e9e9e), edge to edge, no vignette, no gradient, no shadow, no frame.

1. LEFT, about 58 percent of the width, from the top edge to the bottom edge: one large illustration of [器官 + 剖开方向 + 里面有什么], [病理视觉点]. Smooth and dry, no pores, no fibers, no fat, no dripping blood, nothing gory.

2. EXACTLY THREE CALLOUTS, three dots and three labels, no more: each is a small solid white dot placed exactly on the structure it names, with a thin white leader line running from that dot outward into the empty gray space to a short one-line label. Dot one on [结构1], label reads exactly "[解剖1]". Dot two on [结构2], label reads exactly "[解剖2]". Dot three on [结构3], label reads exactly "[解剖3]". The three labels are three different words, each appears once only, do not repeat a label and do not add a fourth callout. Every dot must touch its own structure, never the empty lumen or the background. Labels are dark charcoal gray #4a4a4a, at a readable size about 2.5 percent of the canvas height, no box, no arrow, never tiny.

3. UPPER RIGHT, filling the right column from the top edge down to just above the badges, about 40 percent of the canvas width and about half the canvas height: one single rounded rectangle with a thin white border holding a real close-up photograph of [照片内容], tight crop with no faces, soft natural light, muted colors. A short dark-gray caption centered under it reads exactly "[照片标注]". This is the only photograph in the picture, do not add a second image.

4. LOWER RIGHT, directly under the photograph: one row of exactly four identical white circular badges side by side, the whole row spanning about 40 percent of the canvas width, each holding a small flat colored cartoon vignette in warm skin tones and muted colors, painted in the same clean style, not a line icon, not an outline icon, no black line art: [图标画面1]; [图标画面2]; [图标画面3]; [图标画面4]. Under each badge a short dark-gray caption reading exactly "[症状1]", "[症状2]", "[症状3]", "[症状4]".

5. BOTTOM CENTER, under the badges, one bold dark-gray line reading exactly "[小结]".

TYPOGRAPHY: clean humanist sans-serif, every word Brazilian Portuguese, spelled letter for letter as written, accents correct, no additional words anywhere, no Chinese characters, no logo, no signature, no watermark, no border around the canvas.
```

**为什么把照片固定成一张**：两张上下叠放时，右列被切成四段（照片、照片、圆盘、小结），每段都薄，主图的呼吸感也没了；一张放大反而让「画的 vs 真的」这组对比更清楚。**代价是右列上方不能空**——所以模板里必须写死 `filling the right column from the top edge down to just above the badges` 加尺寸，只写 `UPPER RIGHT: a photograph` 会得到一张缩在角落的小图、右列留一大片灰。

### 措辞表：哪些词必须留，哪些词会毁图

这张版式对措辞极其敏感。下表每一行都是实测踩出来的，改词之前先看后果。

| 现象 | 原因 | 措辞 |
|---|---|---|
| 出成水彩、颜色发浑、像旧课本插图 | 写了 `flat hand-painted` / `hand-painted medical textbook` | **不要**用 hand-painted；用 `clean modern medical infographic illustration` + `soft airbrushed gradients on smooth clean shapes`，并显式加 `No watercolor, no visible paint strokes, no brush texture, no grain` |
| 出成写实 3D 解剖、露骨露脂肪、有血肉质感 | 只写 `NOT a 3D render` 不够 | 必须同时给反向细节：`no pores, no fibers, no fat, no dripping blood, nothing gory` + `not an anatomical specimen` |
| 圆盘里是黑色细线图标 | 只写 `cartoon icon` 不够 | `small flat colored cartoon vignette in warm skin tones and muted colors, not a line icon, not an outline icon, no black line art` |
| 右上多出第二张图、出现两台器械 | 没限制照片总数 | 开头写 `with exactly one photograph in the whole picture`，第 3 条收尾再写 `do not add a second image` |
| 右上照片缩在角落、右列上方留一大片灰 | 只写 `UPPER RIGHT: a photograph` | 写 `filling the right column from the top edge down to just above the badges, about 40 percent of the canvas width and about half the canvas height` |
| 白点指空、引线落在空腔或灰底上 | 没写「点在哪个结构上」 | 逐条写 `Dot two on one dark-red disc-shaped cell`，并加 `Every dot must touch its own structure` |
| 某个标签被写了两遍、凑成四个点 | 只写 `THREE CALLOUTS` 不够，模型会复制一个凑数 | 写 `EXACTLY THREE CALLOUTS, three dots and three labels, no more` + `each appears once only, do not add a fourth callout`；核图时**先数标签个数** |
| 标注字忽大忽小、整体偏小 | 没给字号基准 | `at a readable size about 2.5 percent of the canvas height, never tiny` |
| 照片里出现人脸或半身 | 只写 `close-up photo` 会给出场景照 | 写 `tight crop with no faces`；要人物时只拍手、脚、腰腹、背部等局部 |
| 灰底上的标签看不清 | 白字压中灰底 | 灰底标签一律 `dark charcoal gray #4a4a4a`；只有压在图上深色区域的字才用白 |
| 主图太小、右侧留一大片灰 | 只写 `about 55 percent` | 写 `from the top edge to the bottom edge`，并给出血方向 |
| 圆盘太小、像缩略图，或整排溢出右列 | 只写 `four badges`，或逐个给宽度 | 给**整排**宽度：`the whole row spanning about 40 percent of the canvas width` |
| 画面串进中文、仿平台水印 | 参照版式来自中文图 | `TYPOGRAPHY` 段里 `no Chinese characters, no logo, no signature, no watermark` 每张都要留 |

## 四、生成

- `ImageGen`，`size` 传 `1536x1152`（4:3，实测可用，比 1024x768 细节足），`quality` 传 `high`，`output_dir` 用 `.tmp-content/plates`，**不传任何 image 参数**。
- 同批图**只用同一份模板**，只换六格内容。不要给某些张另写版式，也不要附参考图。
- 成图按原比例缩到 `1024x768`（4:3 → 4:3，不裁不拉伸）。**不要裁底**：裁底会把圆盘压成椭圆、把标签推到底边。
- 偶发 `503` / `40500` 服务器错误：**同一 prompt 直接重试**，通常第二次就过。
- 一次做多个疾病时，把互不依赖的调用**并行发出**。

## 五、去水印 + 转 webp（sharp）

生成器在**右下角**加「AI 生成」水印，落位不固定。本版式右下角是纯灰底，多数情况水印直接落在灰上，**填灰即可**；少数会压住第 4 个圆盘标签或底部小结，才需要重画文字。**不要用裁底解决。**

1. **水印落在灰底**：逐行取水印**左侧**干净背景列的像素填充水印矩形。每行对 y 方向取 11 个采样求**中位数**——否则水印自身的细线会被当成背景色复制成一条横贯画面的亮线。灰底是纯色，取中位数后与周围无缝。
2. **水印压住第 4 个标签或底部小结**（少数）：先按白色圆盘做连通域，合并出 4 个圆心与半径；用第 3 个标签的暗色像素包围盒定字号（`高度 / 0.72`）与基线；被压区域逐行填灰；再用 SVG 以 `Helvetica Neue, Helvetica, Arial` 在**第 4 个圆心正下方**重画该标签（小结被压则按同字号在底行重画）。超过 11 个字符的标签字号乘 `0.82`，避免与第 3 个标签粘连。
3. 处理完 `resize({ width: 1024, height: 768, fit: 'fill' })`（源图已是 4:3，不会变形），`webp({ quality: 82 })` 输出到 `public/img/doenca-<slug>.webp`。**顺序**：先 resize 出 1024×768 的 png buffer，再单独 `composite([svg])`；两者放同一 pipeline 会报 `Image to composite must have same dimensions or smaller`，SVG 按 1024 坐标系绘制。
4. **编码只用 `sharp`**（`node_modules` 已有）。本机无 `cwebp` / ImageMagick，`sips` 不支持 webp。目标文件已存在且确认无需重做时先跳过，避免重复覆盖。

## 六、核图（逐张 Read，不得跳过）

转码后**逐个 Read `public/img/doenca-<slug>.webp` 亲眼确认**：

1. **六格齐全**：中灰底、左侧出血主图、3 条白点引线标注、右上 **1 张**放大照片、右下 4 个白底圆盘、底部一行加粗小结。缺格按同一模板重生成，**不要后期补画**。
2. **画法没跑偏**：主图是干净上色 + 柔和体积，**不是**水彩、不是写实 3D、不是黑线稿；圆盘里是**彩色小场景**，不是线图标。跑偏回第三节按措辞表补强重生成。
3. **先数标签，再逐字核对**：解剖标注必须正好 3 条、三个不同的词，出现重复或第四条即重生成；合计 9 条葡语，拼写与变音必须正确，4 个症状标签确实对应该病，字号不得小到看不清。明显错拼就重生成，或用 SVG 重画该条。
4. **白点指对了**：每个白点落在它所指的结构上（血细胞的点不能落在血管壁上，分子的点不能落在空腔里）。
5. **无中文、无水印**：不得出现中文字符、logo、签名、平台水印。
6. **观感安全**：没有切入的人体躯干、没有血肉、没有湿亮反光的黏膜、没有渗液、没有密集细小血管、没有标本质感。不达标就回第三节补强重生成，**不做裁切或修图遮掩**。
7. **补丁不可见**：1024 宽下放大右下角，填充区无可见边界（无偏亮/偏暗色块）、无横贯画面的亮线或接缝；重画的标签与相邻标签字号、基线、字重视觉一致且为单行。
8. **敏感内容如实登记**：整张板子本来就会被遮罩（见第七节「敏感级别」），所以不必仅仅因为出现创面就重画；但主图或照片一旦有**开放伤口、血液、咬痕、手术或侵入性操作、生殖器部位**，就按第七节二选一执行：画面上不露创面，或 `alt` 里如实写出，读屏用户也要先知道那里有什么。

## 七、成对登记 alt

- **pt-BR**（`src/lib/images.ts` 的 `diseaseImages`）：
  `'Ilustração médica de [主图], com recorte de [照片], e quatro ícones de [症状1], [症状2], [症状3] e [症状4]'`
- **zh-Hant**（`src/data/zh-Hant/image-alts.ts`）：
  `'醫學插畫：[主图]，右上角是[照片]，下方圖示為[症状1]、[症状2]、[症状3]與[症状4]'`
- **alt 硬规则**（两语言层都适用）：只描述**画面内容**，不描述页面主题；**不得含任何形式的破折号**（`— – -` 都不要）；繁中**不得出现简体专用字形、不得使用 `你`**（用 `您`）。
- 只换图不改路径：覆盖同名 webp 时 `src` 不动，只改 `alt`。
- **敏感级别**：`imageForDisease` 会给**每一张**疾病插画板打上 `sensitive: true`，卡片与详情页一律走 `SensitiveImage` / `TileVeil` 遮罩（模糊 + 「敏感內容 / 查看圖片」，pt-BR 为 `Conteúdo sensível` / `Ver imagem`，点开才显示），不再分「医疗图」与「敏感内容」两档。所以新板子**不需要登记任何白名单，也不存在漏标**——任何一张板子都会先被遮住。写新板子时仍按这条自查：主图或右上那张照片出现**开放伤口、血液、咬痕、手术或侵入性操作、生殖器部位**时，插图本身要么改画成不露创面，要么在 `alt` 里如实写出（读屏用户也应当先知道那里有什么）。
- **遮罩不是画血腥的许可证**：遮罩文案已经把「剖面、傷口、血液」写进去了，所以剖面主图不必刻意回避血液这类元素；但第三节的观感红线（不渗液、不露血肉、不要标本质感）仍然有效，二者不冲突。
- 批量改时若个别条因文本重复命中多处，用**未在下文重复出现的短语**扩大上下文重试。

## 八、门禁

```bash
node scripts/check-i18n.mjs
```

必须**全绿**（`zh-Hant coverage complete: ... N images`，且无引用本次 slug 的问题、无新增问题）。脚本校验每个 `diseaseImages` key 都有繁中 `alt`、`alt` 无破折号、繁中无简体字与 `你`。构建与部署由用户自行执行，本 skill 不跑 `pnpm build` / `astro check` / 部署。

## 九、常见坑

- **水印落位随机**：多数落在纯灰底，填灰即可；斜压在第 4 个标签或小结上时按第五节「填灰 + SVG 重画该条」，不要靠重生成碰运气，也不要统一裁切。
- **双前缀命名**：slug 已含 `doenca-` 时文件名是 `doenca-doenca-<x>.webp`，登记 `src` 时以 `images.ts` 现值为准。
- **葡语仍会错拼**：把 9 条词逐字写进 prompt 并加 `letter for letter` 也只是降低概率。所以标签一律短（圆盘 ≤12、解剖 ≤18）；被水印压住的那条一律用 SVG 按正确拼写重画；其余逐字核对，缺陷严重就重生成该张。
- **版式漂移**：纯文生图下偶尔跑版（照片跑到左侧、圆盘只有 3 个、小结跑到主图上）。这类单张按同一模板重生成，**不要为迁就某一张去改模板**；仍不稳时补一句版式重申（`layout exactly as described: gray background, main subject left, one photograph filling the upper right, four circular badges in one row lower right, one bold summary line at the bottom`），**不要重新引入参考图**。
- **照片选错**：右上那一张是给读者看「这个病长什么样、怎么查出来」的，不是填空位。优先能一眼认出的场景（采血、量血压、X 光片、皮疹特写），不要选器械静物或与主图重复的示意图。
- **退回写实或水彩**：偏「标本摄影」时补 `no pores, no fibers, no fat` + `not an anatomical specimen`；偏「水彩」时删掉所有 hand-painted 类词、补 `No watercolor, no visible paint strokes`。两边都不要靠后期降饱和或描边救。
- **串中文／带水印**：成图出现中文就重生成该张，不要用涂抹遮；`TYPOGRAPHY` 段不能删。
- **繁中用字**：避免生僻错字形（如把「昏厥」写成「昏蕳」），拿不准用常见规范繁体词。
- **范围克制**：只动被点名重做的**疾病插画板**，不牵连文章配图，也不改 `diseases.ts` 正文。

## 附：完整示例（糖尿病，实测可直接出图）

六格内容：

- 主图：粗血管纵向剖开，剖面在左下，血管向上弯出画面上缘；里面 5 个深红盘状红细胞、9 个淡黄绿小球（胰岛素）
- 标注：`Vaso sanguíneo`（白点落在血管外壁）/ `Hemácias`（落在红细胞上）/ `Insulina`（落在绿球上）
- 照片（1 张）：`Teste de glicemia`（指尖采血试纸，圆角白边，铺满右列上半）
- 圆盘：`Muita sede`（喝水）/ `Muita fome`（吃饭）/ `Urinar muito`（坐马桶）/ `Perda de peso`（松垮裤腰）
- 小结：`Sede, fome, urina e emagrecimento`

提示词（把第三节模板的 `[...]` 换成上面的内容即可）：

```
Editorial medical illustration for a health encyclopedia, horizontal 4:3, layout contract below must be followed exactly, with exactly one photograph in the whole picture.

STYLE: clean modern medical infographic illustration, soft airbrushed gradients on smooth clean shapes, gentle volume shading, rounded simplified forms, saturated palette of crimson red, salmon pink, cream and pale yellow-green, matte dry surfaces, thin soft outlines only where they help reading. No watercolor, no visible paint strokes, no brush texture, no grain. Not a photograph, not a 3D render, not an anatomical specimen, not flat vector art. Calm, friendly, suitable for public health education.

CANVAS: the entire background is one flat uniform mid-gray (#9e9e9e), edge to edge, no vignette, no gradient, no shadow, no frame.

1. LEFT, about 58 percent of the width, from the top edge to the bottom edge: one large illustration of a thick blood vessel cut open lengthwise, its cut face an oval opening at the lower left, the tube curving up and running off the top edge of the canvas. Wall smooth matte crimson outside, soft salmon pink along the cut edge. Inside the open lumen, a smooth deep red interior, with five dark-red disc-shaped red blood cells with soft shading and nine small pale yellow-green glossy spheres with a soft highlight. Smooth and dry, no pores, no fibers, no fat, no dripping blood, nothing gory.

2. EXACTLY THREE CALLOUTS, three dots and three labels, no more: each is a small solid white dot placed exactly on the structure it names, with a thin white leader line running from that dot outward into the empty gray space to a short one-line label. Dot one on the outer wall of the vessel, label reads exactly "Vaso sanguíneo". Dot two on one dark-red disc-shaped cell, label reads exactly "Hemácias". Dot three on one pale yellow-green sphere, label reads exactly "Insulina". The three labels are three different words, each appears once only, do not repeat a label and do not add a fourth callout. Every dot must touch its own structure, never the empty lumen or the background. Labels are dark charcoal gray #4a4a4a, at a readable size about 2.5 percent of the canvas height, no box, no arrow, never tiny.

3. UPPER RIGHT, filling the right column from the top edge down to just above the badges, about 40 percent of the canvas width and about half the canvas height: one single rounded rectangle with a thin white border holding a real close-up photograph of a fingertip being pricked with a glucose test strip and a drop of blood, tight crop of hands only with no face, soft natural light, muted colors. A short dark-gray caption centered under it reads exactly "Teste de glicemia". This is the only photograph in the picture, do not add a second image.

4. LOWER RIGHT, directly under the photograph: one row of exactly four identical white circular badges side by side, the whole row spanning about 40 percent of the canvas width, each holding a small flat colored cartoon vignette in warm skin tones and muted colors, painted in the same clean style, not a line icon, not an outline icon, no black line art: a person drinking a glass of water; a person eating from a bowl with a spoon; a person sitting on a toilet in a small bathroom; a person's waist in loose oversized trousers. Under each badge a short dark-gray caption reading exactly "Muita sede", "Muita fome", "Urinar muito", "Perda de peso".

5. BOTTOM CENTER, under the badges, one bold dark-gray line reading exactly "Sede, fome, urina e emagrecimento".

TYPOGRAPHY: clean humanist sans-serif, every word Brazilian Portuguese, spelled letter for letter as written, accents correct, no additional words anywhere, no Chinese characters, no logo, no signature, no watermark, no border around the canvas.
```

对应 alt：

- pt-BR：`'Ilustração médica de um vaso sanguíneo aberto em corte com hemácias e moléculas de insulina, com recorte do teste de glicemia na ponta do dedo, e quatro ícones de muita sede, muita fome, urina frequente e perda de peso'`
- zh-Hant：`'醫學插畫：剖開的血管裡有紅血球與胰島素分子，右上角是手指採血測血糖，下方圖示為口渴、飢餓、頻尿與體重下降'`
