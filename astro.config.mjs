import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ltsmobilemechanics.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://ltsmobilemechanics.com/',
      ],
      serialize(item) {
        if (item.url === 'https://ltsmobilemechanics.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/services/')) {
          item.priority = 0.8;
        } else if (item.url.includes('/areas/')) {
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
});
