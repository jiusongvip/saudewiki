---
name: disease-image-generation-ptbr
description: 为本站 src/data/diseases.ts 里的疾病词条生成统一风格的「医学插画板」配图（AI 生成），覆盖新增疾病首次配图、以及把照片风格或风格不一致的旧图重做为插画板。先用脚本从 diseases.ts 提取该疾病的 summary 与症状 bullets 作为素材，据此确定主图剖面、右上角临床插图与下方四个症状图标，套用固定提示词模板用 ImageGen 生成 1024x768 图，用 sharp 去除生成器水印并转码为 webp，逐张核图后成对登记 pt-BR 与 zh-Hant 两语言层的 alt，并跑通 check-i18n.mjs 门禁。单个疾病可只处理它自己；一批补做时按本文批量执行。不用于文章配图（文章图仍走 disease-encyclopedia-ptbr 5.6 的照片流程），不用于个人诊断。
---

# 巴西葡语疾病配图（医学插画板）

为疾病词条生成配图。本站疾病配图**不是实拍照片，而是统一风格的「医学插画板」**（illustrated plates）：写实 3D 解剖剖面主图 + 右上角临床照片插图 + 下方四个圆形线性症状图标，`images.ts` 里以 `Ilustração médica de...` 开头的 `alt` 即此类。**黄金参照图**：`public/img/doenca-dengue.webp`（构图、留白、图标样式、葡语标注位置都照它对齐）。

## 与现有 skill 的关系（先读这段）

- 本 skill 是**疾病配图**的唯一权威流程，反映当前实际做法。
- [疾病医典 skill 5.6](../disease-encyclopedia-ptbr/SKILL.md) 旧条文写的是「图源只限 Unsplash/Pexels 真实照片、禁止 AI 生图」。**该条与现状不符**：自早期疾病词条起，配图就是 AI 生成的医学插画板。执行疾病配图时**以本 skill 为准**；5.6 的照片流程仅保留给**文章配图**。
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
- **4 个图标标签** = 症状 `bullets` 里最具代表性的 4 项（用葡语原词或短化）。

### 2. 拼提示词（固定模板，只换三部分）

英文模板（`[...]` 内按第 1 步替换）：

```
Photorealistic 3D medical illustration plate, 4:3. Main subject on the left filling most of the frame: [疾病剖面主图，含该病特有的病理可视化点] on a soft light-gray studio background. In the upper-right corner, a rounded-rectangle clinical photograph inset of [最易辨认的外部体征/患者场景], with a thin white leader line and a small white dot pointing to [主图对应部位], labeled in Brazilian Portuguese "[葡语体征标注]". In the lower-right corner, four circular line-art icons (thin dark strokes on white discs) in a row, each labeled below in Brazilian Portuguese: "[症状1]", "[症状2]", "[症状3]", "[症状4]". Clean editorial medical infographic style, accurate Portuguese spelling, soft realistic lighting.
```

### 3. 用 ImageGen 生成

- 调 `ImageGen`，`size` 传 `1024x768`，`name` 用 `plate-<slug>`，`prompt` 用第 2 步拼好的模板。生成器把 png 写到 `C:\Users\<user>\.qoder-cn\vibe_images\`。
- 偶发 `40500` 服务器错误**直接重试即可**（同一 prompt 再跑一次通常成功）。
- **一次做多个疾病时**，把互不依赖的 `ImageGen` 调用并行发出。

### 4. 去水印 + 转 webp（sharp）

生成器在图**右下角加「Qoder AI 生成」水印，落位不固定**。写一个 `.tmp-content/plates-to-webp.mjs` 批量转码：

```js
import sharp from 'sharp'; import path from 'path';
const SRC = 'C:/Users/<user>/.qoder-cn/vibe_images', OUT = 'public/img', CROP_BOTTOM = 24;
const map = { '<slug>': { png: '<生成的png名>', webp: 'doenca-<slug>.webp' }, /* ... */ };
for (const [slug, { png, webp }] of Object.entries(map)) {
  const m = await sharp(path.join(SRC, png)).metadata();
  await sharp(path.join(SRC, png))
    .extract({ left: 0, top: 0, width: m.width, height: m.height - CROP_BOTTOM })
    .resize({ width: 1024, height: 768, fit: 'fill' })
    .webp({ quality: 82 }).toFile(path.join(OUT, webp));
}
```

- 裁底 24px 足以去掉落在干净底部边缘的水印；**编码只用 `sharp`**（`node_modules` 已有），本机无 `cwebp`/ImageMagick，`sips` 不支持 webp。
- 目标文件已存在且确认无需重做时**先跳过**，避免重复覆盖。

### 5. 核图（逐张 Read，不得跳过）

转码后**逐个 Read `public/img/doenca-<slug>.webp` 亲眼确认**：
1. 构图三要素齐全（主图 / 右上角 inset+引线+葡语标注 / 4 圆形图标+葡语标签），与参照图风格一致；
2. **4 个葡语标签拼写与变音正确**，且确实对应该病症状；
3. **无残留水印**。若水印仍压住第 4 个图标/标签（裁底不够干净），**不要加大裁切硬砍**（会削掉标签）——回到第 3 步**重生成该张**，直到水印落在干净底部；必要时在 prompt 里加 `shifted toward the center-left` 与 `keep the bottom-right corner empty` 把图标左移、让出右下角。个别图标签本就偏上、单行，可单独用 `CROP_BOTTOM=48` 重转该张。

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

- **水印落位随机**：一批里约半数会把水印斜压在第 4 个图标上，唯一可靠解法是**重生成那张**直到落位干净，别指望统一裁切。
- **双前缀命名**：slug 已含 `doenca-` 时文件名是 `doenca-doenca-<x>.webp`，登记 `src` 时以 `images.ts` 现值为准，别自行改路径。
- **葡语拼写**：成图里的葡语标签由模型生成，偶尔错拼/漏变音（如 `Urgência`、`Icterícia`、`Hemácias`），核图时逐字核对。
- **繁中用字**：避免生僻/错字形（例如把「昏厥」写成「昏蕳」），拿不准就用常见规范繁体词。
- **范围克制**：只动被点名重做的**疾病插画板**，不牵连文章配图，也不改 `diseases.ts` 正文。
