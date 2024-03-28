import tokens from './lib/design/tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: tokens.color,
    },
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
      sans: ['Roboto Condensed', 'sans-serif'],
      display: ['Michroma', 'sans-serif'],
    },
  },
  plugins: [],
}
