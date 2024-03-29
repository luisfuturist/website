import type { Theme } from "./types.d";
import Cookies from 'js-cookie'

export function setClientTheme(theme: Theme) {
  const classList = document.documentElement?.classList;
  classList.value = theme === "dark" ? "dark" : "";

  Cookies.set("theme", theme, {
    path: "/"
  });
}

export function getClientTheme(): Theme {
  const classList = document.documentElement?.classList;
  return classList.contains("dark") ? "dark" : "light";
}

export function toggleClientTheme() {
  const theme = (Cookies.get("theme") as Theme) || "light";
  const newTheme = theme === "dark" ? "light" : "dark";

  setClientTheme(newTheme);

  return newTheme;
}

export function listenToPrefersDark() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (event: MediaQueryListEvent) => {
    const newTheme = event.matches ? "dark" : "light";
    setClientTheme(newTheme);
  };

  prefersDark.addEventListener("change", handleChange);

  const dispose = () => {
    prefersDark.removeEventListener("change", handleChange)
  }

  return dispose;
}
