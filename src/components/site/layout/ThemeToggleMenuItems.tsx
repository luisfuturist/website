import { useEffect, useState } from 'react'
import MaterialComputerSharp from '~icons/material-symbols/computer-sharp'
import MaterialDarkMode from '~icons/material-symbols/dark-mode'
import MaterialLightMode from '~icons/material-symbols/light-mode'
import { DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu'

export type Theme = 'theme-light' | 'dark' | 'system'

export function ThemeToggleMenuItems() {
  const [theme, setThemeState] = useState<Theme>('theme-light')

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  useEffect(() => {
    const isDark
      = theme === 'dark'
        || (theme === 'system'
          && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  return (
    <>
      <DropdownMenuLabel>Theme</DropdownMenuLabel>
      <DropdownMenuRadioGroup value={theme} onValueChange={value => setThemeState(value as typeof theme)}>
        <DropdownMenuRadioItem value="system">
          <MaterialComputerSharp className="size-6" />
          System
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="theme-light">
          <MaterialLightMode className="size-6" />
          Light
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="dark">
          <MaterialDarkMode className="size-6" />
          Dark
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </>
  )
}
