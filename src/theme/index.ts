export type ThemeId = "theme-default" | "theme-slate" | "theme-neon";

export const THEMES: { id: ThemeId; label: string }[] = [
  { id: "theme-default", label: "Default (Light Turquoise)" },
  { id: "theme-slate", label: "Slate Dark" },
  { id: "theme-neon", label: "Neon" },
];

export const DEFAULT_THEME: ThemeId = "theme-default";
export const THEME_STORAGE_KEY = "portfolio-theme";
