import { ErrorPage } from '@luisfuturist/ui'

interface ErrorSectionProps {
  code: string
  heading: string
  lines: [string, string]
  returnLabel: string
}

export default function ErrorSection({ code, heading, lines, returnLabel }: ErrorSectionProps) {
  return (
    <ErrorPage
      code={code}
      heading={heading}
      lines={lines}
      action={
        <a
          href="/"
          className="w-fit font-mono text-sm text-foreground no-underline uppercase transition-opacity duration-300 hover:text-link-primary-hover"
        >
          {'['}
          {returnLabel}
          {']'}
        </a>
      }
    />
  )
}
