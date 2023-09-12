import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  DARK_MODE_THEME,
  LIGHT_MODE_THEME,
  THEME_KEY,
  Theme
} from "@constants/theme";

import { isDarkMode } from "@utils/isDarkMode";

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: isDarkMode() ? DARK_MODE_THEME : LIGHT_MODE_THEME,
      toggleTheme: () =>
        set(({ theme }) => ({
          theme: theme.type === "LIGHT" ? DARK_MODE_THEME : LIGHT_MODE_THEME
        }))
    }),
    { name: THEME_KEY }
  )
);
