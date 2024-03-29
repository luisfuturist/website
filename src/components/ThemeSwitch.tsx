import clsx from "clsx";
import type { ComponentProps } from "preact";
import { useEffect } from "preact/hooks";
import { getClientTheme, listenToPrefersDark, toggleClientTheme } from "../../lib/design/theme/client";
import { getTheme } from "../../lib/design/theme/state";
import { theme } from "../store";
import Icon from "./Icon";
import logoLight from '/fav-light.png?url';
import logoDark from '/fav.png?url';

interface Props extends ComponentProps<'label'> { }

const ThemeSwitch = (props: Props) => {
  const { class: className, ...rest } = props;

  const handleToggle = () => {
    const newTheme = toggleClientTheme();
    theme.value = newTheme;

    const favEl = document.querySelector('#fav-icon')! as HTMLLinkElement
    favEl.href = newTheme === 'dark' ? logoDark : logoLight
  }

  if (typeof window === 'undefined') {
    theme.value = getTheme()
  } else {
    theme.value = getClientTheme()
  }

  useEffect(() => {
    const dispose = listenToPrefersDark();

    return () => dispose()
  }, [])

  return (
    <label class={clsx("border border-azure-2 dark:border-azure-6 relative w-12 h-6 rounded-full inline-flex items-center cursor-pointer px-1", className)} {...rest}>
      <input type="checkbox" checked={theme.value !== 'dark'} class="sr-only peer" onChange={handleToggle} />

      <div class="peer-checked:translate-x-[1.5rem] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:size-4 transition-all">
        <Icon
          name={theme.value !== "dark" ? "moon-fill" : "sun-fill"}
          class={clsx(["text-sm", theme.value !== "dark" ? "text-azure-4" : "text-yellow-5"])}
        />
      </div>
    </label>
  )
}

export default ThemeSwitch;
