# 资料来源库（Source Library）

本目录是疾病词条与派生文章**唯一的来源事实源**。任何进入 `references`（见 `src/types.ts` → `Reference`）的链接，都必须先登记在这里；写作时先查库复用，未命中才去检索，检索到的新来源核实后回写。

- 数据文件：`library.json`
- 读写工具：`node scripts/references.mjs <search|add|import|check>`
- 门禁：`npm run check:references`（= `node scripts/references.mjs check`），与 `check:editorial` 并列，交付前必须通过。
- 使用流程见 [`../skills/source-library-ptbr/SKILL.md`](../../source-library-ptbr/SKILL.md)。

## library.json schema

```json
{
  "version": 1,
  "updatedAt": "YYYY-MM-DD",
  "allowedHosts": ["gov.br", "saude.gov.br", "anvisa.gov.br", "who.int", "paho.org", "cdc.gov", "unaids.org.br"],
  "sources": [
    {
      "id": "ms-dda",
      "label": "Doenças diarreicas agudas (DDA)",
      "url": "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dda",
      "publisher": "Ministério da Saúde (Brasil)",
      "host": "www.gov.br",
      "lang": "pt",
      "topics": ["diarreia", "desidratação", "soro de reidratação oral", "zinco"],
      "diseases": ["gastroenterite"],
      "supports": ["定义：24 小时内 ≥3 次稀/水样便", "口服补液盐 + 锌 10 到 14 天"],
      "verifiedAt": "2026-10-19",
      "status": "verified"
    }
  ]
}
```

字段说明：

- `id`：库内唯一标识（kebab-case）。
- `label` / `url` / `publisher`：**与 `Reference` 完全对齐的三个字段**，命中后原样投影进数据文件的 `references`。
- `host`：`url` 的主机名，由脚本 `add` 自动填。
- `lang`：来源语言，通常 `pt` 或 `en`。
- `topics`：主题关键词（检索用）。
- `diseases`：关联疾病 `slug`（检索用）。
- `supports`：**核心字段** —— 该来源逐条支撑的具体断言（数字、时间窗、危险信号、用药建议等）。写作时据此把每条断言对应回来源；检索也匹配这里。
- `verifiedAt`：最近一次人工核实日期。
- `status`：
  - `verified`：已打开原页逐条核实，并填了 `supports`。
  - `imported`：从既有 `references` 批量汇入、尚未逐条核实（可用，但补 `supports` 后应升级为 `verified`）。

## 命令

```bash
# 检索（按 diseases/topics/supports/label/url 子串匹配）
node scripts/references.mjs search diarreia

# 登记一条已核实来源（JSON）
node scripts/references.mjs add '{"label":"...","url":"https://www.who.int/...","publisher":"...","topics":["..."],"diseases":["..."],"supports":["..."]}'

# 把 src/data 里尚未登记的 references url 批量汇入（status: imported）
node scripts/references.mjs import

# 校验：库内 id/url 唯一、host 在白名单内、且 src/data 引用的每个 url 都在库中
node scripts/references.mjs check
```

## 约定

- **白名单 host** 只收官方公共卫生机构：`gov.br` / `saude.gov.br` / `anvisa.gov.br` / `who.int` / `paho.org` / `cdc.gov` / `unaids.org.br`。百度等一律禁止。
- **只增不改语义**：`supports` 记录的是「来源支撑的事实」，与语言润色无关；医学事实只能因核实而改。
- `import` 用于一次性补齐历史引用；日常新增一律走 `add`，确保带 `supports` 与 `verified` 状态。
