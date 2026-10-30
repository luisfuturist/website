import { localizeHref } from '@/paraglide/runtime.js'

export interface LinkifyLink {
  href: string
  text: string
}

/** Localizes internal links; leaves external links untouched. */
export function localizeInternalHref(href: string): string {
  return href.startsWith('/') ? localizeHref(href) : href
}

export type LinkifyPart = string | LinkifyLink

/**
 * Splits a rendered message into plain-text and link parts, so messages
 * can place `{placeholder}` link texts at any position in a sentence.
 */
export function linkify(text: string, links: LinkifyLink[]): LinkifyPart[] {
  const parts: LinkifyPart[] = []
  let rest = text

  while (rest) {
    let index = -1
    let match: LinkifyLink | undefined

    for (const link of links) {
      const i = rest.indexOf(link.text)
      if (i !== -1 && (index === -1 || i < index)) {
        index = i
        match = link
      }
    }

    if (!match) {
      break
    }

    if (index > 0) {
      parts.push(rest.slice(0, index))
    }
    parts.push(match)
    rest = rest.slice(index + match.text.length)
  }

  if (rest) {
    parts.push(rest)
  }

  return parts
}
