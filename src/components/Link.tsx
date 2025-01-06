import clsx from 'clsx'
import type { ComponentProps } from 'preact';

interface Props extends ComponentProps<'a'> {
  class?: string;
}

function Link(props: Props) {
  const { class: className, ...rest } = props;

  return <a
    class={clsx(["text-slate-600 underline hover:text-slate-500", className])}
    {...rest}
  >
  </a>
}

export default Link
