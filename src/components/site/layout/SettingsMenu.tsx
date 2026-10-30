import { SettingsMenu as LfdsSettingsMenu } from '@luisfuturist/ui'
import { m } from '@/paraglide/messages.js'
import { LanguageMenuItems } from './LanguageMenuItems'

export function SettingsMenu() {
  return (
    <LfdsSettingsMenu
      labels={{
        settings: m.menu_settings(),
        theme: m.menu_theme(),
        light: m.menu_theme_light(),
        dark: m.menu_theme_dark(),
        system: m.menu_theme_system(),
      }}
    >
      <LanguageMenuItems />
    </LfdsSettingsMenu>
  )
}
