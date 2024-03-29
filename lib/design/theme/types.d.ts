export type Theme = "dark" | "light";

export type ColorScheme = "light dark" | "dark light" | "light" | "dark";

export type ColorSchemeObject = {
  primary: Theme;
  secondary?: Theme;
};

export type Config = {
  colorScheme: ColorScheme;
};
