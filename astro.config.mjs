import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), preact()],
  output: 'server',
  adapter: cloudflare({
    runtime: {
      mode: "local",
    },
  }),
});
