# luisfuturist website

Personal website built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [React](https://react.dev), deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Tech stack

- [Astro](https://astro.build) v5 with the [Cloudflare adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite`
- [React](https://react.dev) for interactive components
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for local preview and deployment
- [pnpm](https://pnpm.io) as the package manager

## Getting started

```sh
pnpm install
pnpm dev
```

The dev server starts at `http://localhost:4321` by default.

## Scripts

```sh
pnpm dev          # Start the dev server
pnpm build        # Type check and build for production
pnpm preview      # Build and preview with Wrangler locally
pnpm deploy       # Build and deploy to Cloudflare Pages
pnpm typecheck    # Run Astro check and ESLint
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint with auto-fix
```

## Project structure

```text
src/
  components/   # Astro and React components
  layouts/      # Page layouts
  lib/          # Shared utilities
  pages/        # Astro routes
```

- Top-level pages live in `src/pages/`.
- Site-specific sections and layout components are in `src/components/site/`.
- Reusable UI primitives (button, dropdown menu, etc.) are in `src/components/ui/`.
