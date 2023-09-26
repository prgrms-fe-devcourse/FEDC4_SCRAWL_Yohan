export type Theme = Readonly<{
  type: "LIGHT" | "DARK";
  BACKGROUND100: string;
  BACKGROUND200: string;
  BACKGROUND300: string;
  BORDER100: string;
  TEXT100: string;
  TEXT300: string;
  TEXT600: string;
  SHADOW: string;
  PRIMARY: string;
  SECONDARY: string;
}>;

export const LIGHT_MODE_THEME: Theme = {
  type: "LIGHT",
  BACKGROUND100: "#FFFFFF",
  BACKGROUND200: "#FAFAFA",
  BACKGROUND300: "#F0F0F0",
  BORDER100: "#D9D9D9",
  TEXT100: "#D9D9D9",
  TEXT300: "#5C5E64",
  TEXT600: "#080C1E",
  SHADOW: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
  PRIMARY: "#007AFF",
  SECONDARY: "rgb(255, 30, 30)"
};

export const DARK_MODE_THEME: Theme = {
  type: "DARK",
  BACKGROUND100: "#161A23",
  BACKGROUND200: "#2D2F39",
  BACKGROUND300: "#161A23",
  BORDER100: "#5C5F65",
  TEXT100: "#5C5F65",
  TEXT300: "#CFCFCF",
  TEXT600: "#C0C0C0",
  SHADOW: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
  PRIMARY: "#007AFF",
  SECONDARY: "rgb(255, 100, 100)"
};

export const THEME_KEY = "THEME_";
