import { collect, formatToString, prepareFormat, type InferValues, type Locale, type RegisteredMessages, type Values } from '@psitta/core';
import { getLocale } from './state';

type ValueOf<T> = T[keyof T]

type EveryTranslationOf<D extends keyof RegisteredMessages> = Extract<
  ValueOf<RegisteredMessages[D]>,
  string
>

function t<T extends keyof RegisteredMessages>(
  message: T,
  values?: Partial<InferValues<T | EveryTranslationOf<T>>>,
  locale?: Locale,
) {
  if (import.meta.env.DEV) {
    collect(message, values as Values)
  }

  if (!locale)
    locale = getLocale()

  const { localizedMessage, formatOptions } = prepareFormat(message, locale)

  return formatToString(localizedMessage, values, formatOptions)
}

export default t;
