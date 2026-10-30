// @ts-check

import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'zh', 'ja', 'ko', 'vi', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ['@luisfuturist/ui'],
      include: [
        'use-sync-external-store',
        'use-sync-external-store/with-selector',
        'use-sync-external-store/with-selector.js',
        'use-sync-external-store/shim',
        'use-sync-external-store/shim/with-selector',
        'use-sync-external-store/shim/with-selector.js',
        '@luisfuturist/ui > @base-ui/react',
        '@luisfuturist/ui > @hookform/resolvers',
        '@luisfuturist/ui > @radix-ui/react-dropdown-menu',
        '@luisfuturist/ui > @radix-ui/react-slot',
        '@luisfuturist/ui > class-variance-authority',
        '@luisfuturist/ui > clsx',
        '@luisfuturist/ui > cmdk',
        '@luisfuturist/ui > cn',
        '@luisfuturist/ui > date-fns',
        '@luisfuturist/ui > embla-carousel-react',
        '@luisfuturist/ui > input-otp',
        '@luisfuturist/ui > next-themes',
        '@luisfuturist/ui > radix-ui',
        '@luisfuturist/ui > react-day-picker',
        '@luisfuturist/ui > react-hook-form',
        '@luisfuturist/ui > react-resizable-panels',
        '@luisfuturist/ui > recharts',
        '@luisfuturist/ui > sonner',
        '@luisfuturist/ui > tailwind-merge',
        '@luisfuturist/ui > vaul',
        '@luisfuturist/ui > zod',
      ],
    },
    resolve: {
      dedupe: ['use-sync-external-store'],
    },
    ssr: {
      noExternal: ['@luisfuturist/ui'],
    },
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'jsx',
      }),
      svgr(),
      paraglideVitePlugin({
        project: './project.inlang',
        outdir: './src/paraglide',
        emitTsDeclarations: true,
        strategy: ['url', 'globalVariable', 'baseLocale'],
        urlPatterns: [
          {
            pattern: '/:path(.*)?',
            localized: [
              ['pt-br', '/pt-br/:path(.*)?'],
              ['zh', '/zh/:path(.*)?'],
              ['ja', '/ja/:path(.*)?'],
              ['ko', '/ko/:path(.*)?'],
              ['vi', '/vi/:path(.*)?'],
              ['id', '/id/:path(.*)?'],
              ['en', '/:path(.*)?'],
            ],
          },
        ],
      }),
    ],
  },

  integrations: [react()],
  adapter: cloudflare(),
})
