import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@luisfuturist/ui'
import MaterialSettingsSharp from '~icons/material-symbols/settings-sharp'
import { m } from '@/paraglide/messages.js'
import { LanguageMenuItems } from './LanguageMenuItems'
import { ThemeToggleMenuItems } from './ThemeToggleMenuItems'

export function SettingsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={null} data-augmented-ui="tr-clip bl-clip both" className="aug-button p-4 text-foreground bg-background-secondary">
          <MaterialSettingsSharp className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>{m.menu_settings()}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ThemeToggleMenuItems />
        <DropdownMenuSeparator />
        <LanguageMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
