import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bullet-force.org',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
