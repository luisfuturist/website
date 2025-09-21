import MaterialMenuSharp from '~icons/material-symbols/menu-sharp'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import links from './navbar-links'
import { ThemeToggleMenuItems } from './ThemeToggleMenuItems'

export function NavbarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-augmented-ui="tr-clip bl-clip both" className="aug-button p-4 text-foreground bg-background-secondary">
          <MaterialMenuSharp className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map(link => (
          <DropdownMenuItem key={link.href}>
            <a href={link.href}>{link.label}</a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <ThemeToggleMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
