import clsx from "clsx";
import type { ComponentProps } from "preact/compat";

export type NavItem = {
  label: string;
  href?: string;
}

interface Props extends ComponentProps<'nav'> {
  items: NavItem[]
}

const Nav = (props: Props) => {
  const { class: className, items, ...rest } = props;

  return <nav class={clsx([className])} {...rest}>
    <ul class="flex gap-2 justify-end">
      {
        items.map((item) => (
          <li>
            <a href={item.href} class="text-azure-6" >
              {item.label}
            </a>
          </li>
        ))
      }
    </ul>
  </nav >

}

export default Nav;
