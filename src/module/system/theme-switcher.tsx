"use client";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useThemeStore } from "./theme-store";

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    themeChange(theme === "dark");
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="btn" onClick={handleThemeChange}>
      {theme}
    </button>
  );
}
