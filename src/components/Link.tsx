import clsx from 'clsx'
import type { ComponentProps } from 'preact';

interface Props extends ComponentProps<'a'> {
  class?: string;
}

function Link(props: Props) {
  const { class: className, ...rest } = props;

  return <a
    class={clsx(["text-azure-2 dark:text-azure-6 underline hover:text-azure-1 dark:hover:text-azure-5", className])}
    {...rest}
  >
  </a>
}

export default Link
