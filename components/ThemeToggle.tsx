"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/Icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // Initialize theme from document class on mount
  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const nextTheme = theme === "dark" ? "light" : "dark";
    
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
    
    setTheme(nextTheme);
  };

  if (theme === null) {
    // Return a placeholder button with the same spacing during hydration to prevent shift
    return (
      <div className="h-8 w-8 rounded-full border border-border-muted bg-surface-raised" aria-hidden="true" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-muted bg-surface-raised text-text-primary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:bg-surface hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="sr-only">Toggle Theme</span>
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4 animate-fade-in text-text-secondary transition-colors hover:text-text-primary" />
      ) : (
        <MoonIcon className="h-4 w-4 animate-fade-in text-text-secondary transition-colors hover:text-text-primary" />
      )}
    </button>
  );
}
