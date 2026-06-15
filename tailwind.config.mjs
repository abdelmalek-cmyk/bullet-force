/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bf-dark':    '#0a0a0f',
        'bf-darker':  '#06060a',
        'bf-orange':  '#f97316',
        'bf-orange-dark': '#ea580c',
        'bf-surface': '#111118',
        'bf-surface-2': '#1a1a24',
        'bf-border':  '#2a2a38',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
