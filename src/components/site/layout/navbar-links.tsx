import { m } from '@/paraglide/messages.js'

const links = [
  {
    href: '/#readme',
    label: () => m.nav_readme(),
  },
  {
    href: '/#projects',
    label: () => m.nav_projects(),
  },
  {
    href: 'https://x.com/luisfuturist',
    label: () => 'X',
  },
  {
    href: 'https://www.linkedin.com/in/luisfuturist',
    label: () => 'LinkedIn',
  },
  {
    href: '/#footer',
    label: () => m.nav_contact(),
  },
]

export default links
