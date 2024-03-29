import config from './config';
import { DEFAULT_THEME_CONFIG } from './constants'
import type { ColorScheme, ColorSchemeObject, Theme } from './types';

export function getThemeConfig() {
  return {
    ...DEFAULT_THEME_CONFIG,
    ...config,
  }
}

export function parseColorScheme(colorScheme: ColorScheme): ColorSchemeObject {
  const [primary, secondary] = colorScheme.split(" ") as [Theme, Theme?];
  return { primary, secondary };
}

export function getThemeMeta(theme: Theme) {
  const config = getThemeConfig()
  const { primary, secondary } = parseColorScheme(config.colorScheme)

  const schemes: Record<string, ColorScheme> = {
    light: "light dark",
    dark: "dark light",
  };
  const colorScheme = secondary
    ? schemes[theme || primary]
    : theme || primary;

  const themeClass = theme.replace("light", "");

  return { themeClass, colorScheme, theme };
}
