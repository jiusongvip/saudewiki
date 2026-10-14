import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.saudewiki.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      lastmod: new Date('2026-10-13'),
      filter: (page) => !page.includes('/busca/'),
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
