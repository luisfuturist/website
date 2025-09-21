import React from 'react'
import MaterialComputerSharp from '~icons/material-symbols/computer-sharp'
import MaterialDarkModeSharp from '~icons/material-symbols/dark-mode-sharp'
import MaterialLightModeSharp from '~icons/material-symbols/light-mode-sharp'
import MaterialSettingsSharp from '~icons/material-symbols/settings-sharp'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function SettingsMenu() {
  const [theme, setThemeState] = React.useState<
    'theme-light' | 'dark' | 'system'
  >('theme-light')

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  React.useEffect(() => {
    const isDark
      = theme === 'dark'
        || (theme === 'system'
          && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

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
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={value => setThemeState(value as typeof theme)}>
          <DropdownMenuRadioItem value="system">
            <MaterialComputerSharp className="size-6" />
            System
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="theme-light">
            <MaterialLightModeSharp className="size-6" />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <MaterialDarkModeSharp className="size-6" />
            Dark
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
