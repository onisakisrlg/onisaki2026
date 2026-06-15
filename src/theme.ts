import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";
export type Language = "日本語" | "English" | "简体中文" | "繁體中文";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: "日本語",
  setLanguage: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}
