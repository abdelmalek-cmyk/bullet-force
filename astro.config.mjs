import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bulletforce.io',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
