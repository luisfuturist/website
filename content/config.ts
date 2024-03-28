import { initPsitta } from '@psitta/core'
import messages from './messages.js'
import { getTranslationBoilerplate } from './lib/utils'

initPsitta({
  locales: ['en', 'pt'],
  translations: messages,
  datetimeFormats: { en: 'en-US', pt: 'pt-BR' },
  numberFormats: { en: 'en-US', pt: 'pt-BR' },
})

declare module '@psitta/core' {
  interface Register {
    messages: typeof messages
  }
}

if(import.meta.env.DEV) {
  console.log(getTranslationBoilerplate())
}
