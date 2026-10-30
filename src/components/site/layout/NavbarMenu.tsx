import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@luisfuturist/ui'
import MaterialMenuSharp from '~icons/material-symbols/menu-sharp'
import { localizeInternalHref } from '@/lib/i18n'
import { m } from '@/paraglide/messages.js'
import { LanguageMenuItems } from './LanguageMenuItems'
import links from './navbar-links'
import { ThemeToggleMenuItems } from './ThemeToggleMenuItems'

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
        <ThemeToggleMenuItems />
        <DropdownMenuSeparator />
        <LanguageMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
