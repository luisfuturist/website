import type { VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { buttonVariants } from './button-variants'

function Button({
  className,
  variant,
  size,
  'data-augmented-ui': dataAugmentedUi,
  asChild = false,
  ...props
}: React.ComponentProps<'button'>
  & VariantProps<typeof buttonVariants> & {
    'asChild'?: boolean
    'data-augmented-ui'?: string
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      data-augmented-ui={dataAugmentedUi}
      {...props}
    />
  )
}

export { Button }
