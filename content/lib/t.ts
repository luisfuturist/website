import { collect, formatToString, getConfig, getDefaultLocale, getFormatOptions, localizeKey, type InferValues, type Locale, type RegisteredMessages, type Values, collection, getTranslationsObject } from '@psitta/core';
import { getLocale } from './state';

type ValueOf<T> = T[keyof T]

type EveryTranslationOf<D extends keyof RegisteredMessages> = Extract<
  ValueOf<RegisteredMessages[D]>,
  string
>

function t<T extends keyof RegisteredMessages>(
  key: T,
  values?: Partial<InferValues<T | EveryTranslationOf<T>>>,
  locale?: Locale,
) {
  if (import.meta.env.DEV) {
    collect(key, values as Values)
  }

  const options = getConfig()

  if (!locale)
    locale = getLocale()

  const message = localizeKey(key, locale, options)
  const formatOptions = getFormatOptions(locale, options)

  return formatToString(message, values, formatOptions)
}

export default t;
