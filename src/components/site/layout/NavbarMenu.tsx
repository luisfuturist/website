import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  ThemeToggleMenuItems,
} from '@luisfuturist/ui'
import MaterialMenuSharp from '~icons/material-symbols/menu-sharp'
import { localizeInternalHref } from '@/lib/i18n'
import { m } from '@/paraglide/messages.js'
import { LanguageMenuItems } from './LanguageMenuItems'
import links from './navbar-links'

export function NavbarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="augmented" size="icon-xl">
          <MaterialMenuSharp className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>{m.menu_navigation()}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map(link => (
          <DropdownMenuItem key={link.href}>
            <a href={localizeInternalHref(link.href)}>{link.label()}</a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <ThemeToggleMenuItems
          labels={{
            theme: m.menu_theme(),
            light: m.menu_theme_light(),
            dark: m.menu_theme_dark(),
            system: m.menu_theme_system(),
          }}
        />
        <DropdownMenuSeparator />
        <LanguageMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
