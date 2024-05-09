import { psitta } from '@psitta/core'
import messages from './messages.js'
import { getTranslationBoilerplate } from './lib/utils'

psitta({
  locales: ['en', 'pt'],
  messages,
})

declare module '@psitta/core' {
  interface Register {
    messages: typeof messages
  }
}

if(import.meta.env.DEV) {
  console.log(getTranslationBoilerplate())
}
