// Give the sitemap the conventional filename too. Run with: node scripts/sitemap-alias.mjs
//
// `@astrojs/sitemap` only ever writes `sitemap-index.xml` plus the numbered
// children. Search engines read the index from robots.txt, but a great many
// crawlers, audit tools, and AI engines ask for `/sitemap.xml` by convention and
// treat the 404 as "this site has no sitemap".
//
// The alias is a copy, not a redirect: `/sitemap.xml` is a valid sitemap index
// on its own, so a client that does not follow redirects still gets the real
// document. Run it after `astro build`, before anything publishes `dist/`.
import { copyFileSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const source = `${dist}sitemap-index.xml`;
const target = `${dist}sitemap.xml`;

if (!existsSync(source)) {
  console.error(`sitemap alias: ${source} does not exist — run this after \`astro build\`.`);
  process.exit(1);
}

// An index that lists no children means the build produced no URLs; copying it
// would publish an empty sitemap under a filename crawlers trust.
if (!readFileSync(source, 'utf8').includes('<urlset') && !readFileSync(source, 'utf8').includes('<sitemap')) {
  console.error('sitemap alias: the index lists no sitemaps — refusing to publish an empty /sitemap.xml.');
  process.exit(1);
}

copyFileSync(source, target);
console.log('sitemap alias: dist/sitemap.xml written from dist/sitemap-index.xml');
