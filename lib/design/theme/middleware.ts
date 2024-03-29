import { defineMiddleware } from "astro:middleware";
import { getThemeConfig, parseColorScheme } from "./utils";
import type { Theme } from "./types";
import { setTheme } from "./state";

export default defineMiddleware((c, next) => {
  const config = getThemeConfig()
  const defaultColorScheme = parseColorScheme(config.colorScheme)

  const themeCookie = c.cookies.get('theme')?.value as Theme;
  const theme = themeCookie || defaultColorScheme.primary;
  c.locals.theme = theme;

  setTheme(theme);

  return next()
})
