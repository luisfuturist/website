import type { Theme } from "./types";
import { getThemeConfig, parseColorScheme } from "./utils";

export function getTheme(): Theme {
  const config = getThemeConfig();
  const { primary } = parseColorScheme(config.colorScheme);
  return ((globalThis as any).theme) as Theme || primary as Theme
}

export function setTheme(theme?: Theme) {
  const config = getThemeConfig();
  const { primary } = parseColorScheme(config.colorScheme);

  const newLocale = theme || primary;
  (globalThis as any).theme = newLocale;
}
