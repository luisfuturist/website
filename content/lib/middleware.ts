import "../config";
import { setLocale } from "./state";

import { detectLocaleFromAcceptLanguage, detectLocaleFromCookie, detectLocaleFromPathname, getConfig } from "@psitta/core"
import { defineMiddleware } from "astro:middleware"

export default defineMiddleware((c, next) => {
  const { defaultLocale } = getConfig()
  const pathname = c.url.pathname

  const { urlWithoutLocale, locale } = detectLocaleFromPathname(pathname)

  if (!locale) {
    const cookie = c.cookies.get("locale")?.value

    let locale = detectLocaleFromCookie(cookie || undefined)

    if (!locale) {
      const header = c.request.headers.get('accept-language')
      locale = header
        ? detectLocaleFromAcceptLanguage(header)?.language || defaultLocale
        : defaultLocale
    }

    if (locale !== defaultLocale && pathname === urlWithoutLocale) {
      return c.redirect(`/${locale}${urlWithoutLocale}`)
    }
  }

  c.locals.locale = locale || defaultLocale

  setLocale(locale);

  return next()
})
