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
        <Button size={null} data-augmented-ui="tr-clip bl-clip both" className="aug-button p-4 text-foreground bg-background-secondary">
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
