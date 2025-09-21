// @ts-check

import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'astro/config'

import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'jsx',
      }),
      svgr(),
    ],
  },

  integrations: [react()],
})
