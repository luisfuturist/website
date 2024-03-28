import { collection, getTranslationsObject } from '@psitta/core';

export function getTranslationBoilerplate() {
  const boilerplate = {}

  Object.keys(collection).forEach((key) => {
    (boilerplate as any)[key] = getTranslationsObject(key)[key]
  })

  return JSON.stringify(boilerplate, null, 2)
}
