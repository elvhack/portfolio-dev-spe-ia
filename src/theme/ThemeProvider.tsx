// src/theme/ThemeProvider.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, ThemeId } from "./";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(
      THEME_STORAGE_KEY
    ) as ThemeId | null;
    const initialTheme = stored ?? DEFAULT_THEME;

    setThemeState(initialTheme);
    applyThemeClass(initialTheme);
  }, []);

  const setTheme = (themeId: ThemeId) => {
    setThemeState(themeId);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, themeId);
    }
    applyThemeClass(themeId);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function applyThemeClass(theme: ThemeId) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("theme-default", "theme-slate", "theme-neon");
  root.classList.add(theme);
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
