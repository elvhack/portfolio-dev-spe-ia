// src/components/ThemeSwitcher.tsx
"use client";

import { THEMES, ThemeId } from "./index";
import { useTheme } from "@/theme/ThemeProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleChange = (value: string) => {
    setTheme(value as ThemeId);
  };

  return (
    <Select value={theme} onValueChange={handleChange}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {THEMES.map((t) => (
          <SelectItem key={t.id} value={t.id}>
            {t.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
