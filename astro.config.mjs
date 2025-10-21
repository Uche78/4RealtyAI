import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Important! This enables API routes
  integrations: [tailwind()],
  site: 'https://4realtyai.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
