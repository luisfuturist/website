import clsx from 'clsx'

interface Props {
  name: string;
  class?: string;
}

function Icon(props: Props) {
  const { name, class: className, ...rest } = props;

  return <span
    role="img"
    class={clsx([`flex items-center justify-center bi-${name}`, className])}
    {...rest}>
  </span>
}

export default Icon
