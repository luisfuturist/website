import { useSignal } from '@preact/signals';
import clsx from 'clsx';
import type { ComponentChildren } from 'preact';
import { createRef, useEffect, type HTMLAttributes } from 'preact/compat';
import Icon from './Icon';

export const translateAboutView = () => {
  const hash = location.hash.slice(1);

  if(hash === 'about') {
    const about = document.getElementById("__about")!;
    about.style.transform = 'translateY(-15dvh)';
    
    const title = document.getElementById("___title")!;
    title.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  }
}

export const resetTranslateAboutView = () => {
  const about = document.getElementById("__about")!;
  about.style.transform = 'translateY(0)';

  const title = document.getElementById("___title")!;
  title.style.backgroundColor = 'rgba(0, 0, 0)';
}

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  class?: string
  children?: ComponentChildren
  icon: string
  href?: string
  goBackMessage: string
}

function NavLink(props: Props) {
  const elRef = createRef<HTMLAnchorElement>();
  const { class: className, children, icon, href, ...rest } = props;
  const isBack = useSignal(false);

  // Fix the issue with the back button after navigating to a different page other than the home page
  const updateIsBack = () => {
    const hash = location.hash;
    const isHere = Boolean(href && hash === href.toString().replaceAll('/', ''));

    isBack.value = isHere;
  }

  useEffect(() => {
    updateIsBack()

    if (elRef.current) {
      elRef.current.style.opacity = '1';
    }

    window.addEventListener('popstate', updateIsBack)

    return () => window.removeEventListener('popstate', updateIsBack)
  })

  const navigate = () => {
    if (!href) return;

    const hash = href.slice(2);
    const element = document.getElementById("__" + hash);

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", "#" + hash);

    translateAboutView()
  }

  const goBack = () => {
    if (!href) return;

    resetTranslateAboutView()

    const hash = href.slice(2);
    history.pushState(null, "", "#" + hash);

    const home = document.getElementById("__home")!;
    home.scrollIntoView({ behavior: "smooth" });
    location.hash = '#home';
  }

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (!isBack.value) {
      isBack.value = true
      navigate()
      return;
    }

    isBack.value = false
    goBack()
  }

  return <a
    class={clsx(['transition-all duration-[600ms] opacity-0', className])}
    onClick={handleClick}
    href={href}
    ref={elRef}
    {...rest}
  >
    <div class="flex justify-center items-center gap-1 text-slate-600">
      <Icon
        class={clsx('transition-all delay-300 duration-[600ms]', { 'rotate-180': isBack.value })}
        name={icon}
      />
      {isBack.value ? props.goBackMessage : children}
    </div>
  </a>
}

export default NavLink
