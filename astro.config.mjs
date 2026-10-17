import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { sitemapLastmod } from './src/lib/sitemap-lastmod';

export default defineConfig({
  site: 'https://www.saudewiki.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/busca/'),
      // Both languages use the same slugs, so a locale is the leading path
      // segment: `pt-BR` has none and `zh-Hant` is its own prefix. The
      // integration pairs entries by the path that is left over.
      i18n: {
        defaultLocale: 'pt-BR',
        locales: { 'pt-BR': 'pt-BR', 'zh-Hant': 'zh-Hant' },
      },
      // The config option is site-wide; the real dates come from the entries.
      serialize(item) {
        item.lastmod = sitemapLastmod(item.url);
        return item;
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // `dist` is 169 pages plus hashed assets, and `astro build` rewrites all
        // of it. Watching it while a build runs exhausts the file handles the dev
        // server needs, which surfaces as `EMFILE` and turns every route into a
        // 500 with nothing on screen to say why.
        ignored: ['**/dist/**', '**/.astro/**'],
      },
    },
  },
});
