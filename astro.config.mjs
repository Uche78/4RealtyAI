import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Important! This enables API routes
  adapter: netlify(),
  integrations: [tailwind()],
  site: 'https://4realtyai.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
