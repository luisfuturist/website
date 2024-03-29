import clsx from "clsx";
import type { ComponentProps } from "preact";
import ThemeSwitch from "./ThemeSwitch";
import Link from "./Link";

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
    <ul class="flex gap-2 justify-end items-center">
      {
        items.map((item) => (
          <li>
            <Link href={item.href} >
              {item.label}
            </Link>
          </li>
        ))
      }
      <li class="ml-4">
        <ThemeSwitch />
      </li>
    </ul>
  </nav>
}

export default Nav;
