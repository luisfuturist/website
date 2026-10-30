import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  astro: true,
  typescript: true,
  ignores: [
    'src/paraglide',
    'project.inlang',
  ],
})
