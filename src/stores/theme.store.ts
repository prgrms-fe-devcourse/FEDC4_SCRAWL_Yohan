import { create } from "zustand";

import { DARK_MODE_THEME, LIGHT_MODE_THEME, Theme } from "@constants/theme";

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: LIGHT_MODE_THEME,
  toggleTheme: () =>
    set(({ theme }) => ({
      theme: theme.type === "LIGHT" ? DARK_MODE_THEME : LIGHT_MODE_THEME
    }))
}));
