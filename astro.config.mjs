import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://4realtyai.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
