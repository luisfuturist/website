import { getDefaultLocale } from "@psitta/core";

export function getLocale() {
  return ((globalThis as any).locale) as string || (getDefaultLocale()) as string
}

export function setLocale(locale?: string) {
  const newLocale = locale || getDefaultLocale();
  (globalThis as any).locale = newLocale;
}
