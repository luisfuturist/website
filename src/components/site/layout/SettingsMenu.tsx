import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@luisfuturist/ui'
import MaterialSettingsSharp from '~icons/material-symbols/settings-sharp'
import { ThemeToggleMenuItems } from './ThemeToggleMenuItems'

export function SettingsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-augmented-ui="tr-clip bl-clip both" className="aug-button p-4 text-foreground bg-background-secondary">
          <MaterialSettingsSharp className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ThemeToggleMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
