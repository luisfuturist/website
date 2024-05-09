import { getConfig } from "@psitta/core";

export function getLocale() {
  const { defaultLocale } = getConfig()
  return ((globalThis as any).locale) as string || defaultLocale
}

export function setLocale(locale?: string) {
  const { defaultLocale } = getConfig()
  const newLocale = locale || defaultLocale;
  (globalThis as any).locale = newLocale;
}
