// Shoot every locale page to media/<locale>.png via `astro preview` + playwright.
// Usage:
//   pnpm screens              # shoot against existing dist/
//   pnpm screens --build      # build first, then shoot
//   pnpm screens --only en,ja # subset of locales

import { spawnSync } from 'node:child_process'
import { createServer } from 'node:http'
import { readFileSync, mkdirSync, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import { chromium } from 'playwright'

const PORT = 4322
const BASE = `http://localhost:${PORT}`
const VIEWPORT = { width: 1600, height: 900 }
const SETTLE_MS = 1200 // let fonts/animations settle

const args = process.argv.slice(2)
const only = args.includes('--only')
  ? args[args.indexOf('--only') + 1].split(',')
  : null
const theme = args.includes('--theme') ? args[args.indexOf('--theme') + 1] : 'dark'

const settings = JSON.parse(readFileSync('project.inlang/settings.json', 'utf8'))
const base = settings.baseLocale
const locales = settings.locales.filter((l) => !only || only.includes(l))

const route = (l) => (l === base ? '/' : `/${l}/`)

if (args.includes('--build')) {
  const r = spawnSync('pnpm', ['build'], { stdio: 'inherit' })
  if (r.status !== 0) process.exit(r.status)
}

if (!existsSync('dist')) {
  console.error('dist/ missing — run `pnpm build` or pass --build')
  process.exit(1)
}

// Static server for dist/ (Cloudflare adapter has no `astro preview`)
const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json',
}
const server = createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, BASE).pathname)
  for (const p of [pathname, `${pathname}.html`, `${pathname}/index.html`]) {
    const file = join('dist', p)
    if (existsSync(file) && statSync(file).isFile()) {
      res.writeHead(200, { 'content-type': MIME[extname(file)] ?? 'application/octet-stream' })
      return res.end(readFileSync(file))
    }
  }
  const fallback = join('dist', '404.html')
  res.writeHead(404, { 'content-type': 'text/html' })
  res.end(existsSync(fallback) ? readFileSync(fallback) : 'not found')
})
await new Promise((r) => server.listen(PORT, r))
process.on('exit', () => server.close())

mkdirSync('media', { recursive: true })
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: VIEWPORT,
  colorScheme: theme === 'light' ? 'light' : 'dark',
})
await ctx.addCookies([
  { name: 'theme', value: theme, url: BASE },
])
const page = await ctx.newPage()

for (const locale of locales) {
  await page.goto(`${BASE}${route(locale)}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(SETTLE_MS)
  const file = `media/${locale}.png`
  await page.screenshot({ path: file })
  console.log(`✓ ${file}`)
}

await browser.close()
server.close()
console.log(`done — ${locales.length} shot(s) → media/`)
