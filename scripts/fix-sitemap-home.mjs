// House URL rule: the root home carries no trailing slash, while every other
// path — the `/zh-Hant/` home included — keeps one. `@astrojs/sitemap` emits the
// root as `https://www.saudewiki.com/`, which would then disagree with the
// canonical the layout writes (see the `dropRootSlash` helper in BaseLayout).
// Run after `astro build` so dist/ exists.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist', import.meta.url));
const home = 'https://www.saudewiki.com';

if (!existsSync(dist)) {
  console.log('[fix-sitemap-home] dist/ not found, skipping');
  process.exit(0);
}

const files = readdirSync(dist).filter((f) => f.startsWith('sitemap') && f.endsWith('.xml'));

for (const file of files) {
  const p = join(dist, file);
  const before = readFileSync(p, 'utf8');
  // Only the exact root form is rewritten; `/zh-Hant/` and every deeper path is
  // left untouched because its slash is not followed by the closing tag/quote.
  const after = before
    .replaceAll(`<loc>${home}/</loc>`, `<loc>${home}</loc>`)
    .replaceAll(`href="${home}/"`, `href="${home}"`);
  if (after !== before) {
    writeFileSync(p, after, 'utf8');
    console.log(`[fix-sitemap-home] fixed home trailing slash in ${file}`);
  }
}
