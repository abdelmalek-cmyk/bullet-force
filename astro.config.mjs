import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bulletforce.io',
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
