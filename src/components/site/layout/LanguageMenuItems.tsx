import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@luisfuturist/ui'
import MaterialLanguageSharp from '~icons/material-symbols/language'
import { m } from '@/paraglide/messages.js'
import { getLocale, locales, localizeHref } from '@/paraglide/runtime.js'

const LANGUAGE_NAMES: Record<string, string> = {
  'en': 'English',
  'pt-br': 'Português (Brasil)',
  'zh': '中文',
  'ja': '日本語',
  'ko': '한국어',
  'vi': 'Tiếng Việt',
  'id': 'Bahasa Indonesia',
}

export function LanguageMenuItems() {
  const handleSelect = (locale: string) => {
    localStorage.setItem('preferred-locale', locale)
    window.location.href = localizeHref(
      window.location.pathname + window.location.search + window.location.hash,
      { locale: locale as typeof locales[number] },
    )
  }

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <MaterialLanguageSharp className="size-6" />
        {m.menu_language()}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={getLocale()} onValueChange={handleSelect}>
            {locales.map(locale => (
              <DropdownMenuRadioItem key={locale} value={locale}>
                {LANGUAGE_NAMES[locale]}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}
