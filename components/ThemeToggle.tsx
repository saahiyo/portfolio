"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { SunIcon, MoonIcon } from "@/components/Icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Initialize theme from localStorage/system preferences on mount and sync classes
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialTheme = storedTheme === "light" || (!storedTheme && systemPrefersLight) ? "light" : "dark";
    
    if (initialTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme);
  }, []);

  // Sync state if theme is toggled externally (e.g. from Developer CLI)
  useEffect(() => {
    const handleThemeChange = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };
    window.addEventListener("theme-change", handleThemeChange);
    return () => {
      window.removeEventListener("theme-change", handleThemeChange);
    };
  }, []);

  const applyTheme = useCallback((nextTheme: "light" | "dark") => {
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
    setTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const nextTheme = theme === "dark" ? "light" : "dark";

    // Use View Transitions API for a smooth circular reveal effect
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      buttonRef.current
    ) {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      // Center of the toggle button
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      // Calculate the max radius to cover the entire viewport
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      // Scope CSS overrides to theme toggles only
      document.documentElement.classList.add("theme-transitioning");

      const transition = document.startViewTransition(() => {
        applyTheme(nextTheme);
      });

      transition.ready.then(() => {
        // Animate a circular clip-path expanding from the button
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 800,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });

      transition.finished.then(() => {
        document.documentElement.classList.remove("theme-transitioning");
      });
    } else {
      // Fallback for browsers without View Transitions API
      applyTheme(nextTheme);
    }
  };

  if (theme === null) {
    // Return a placeholder button with the same spacing during hydration to prevent shift
    return (
      <div className="h-8 w-8 rounded-full border border-border-muted bg-surface-raised" aria-hidden="true" />
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-muted bg-surface-raised text-text-primary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:bg-surface hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-text-primary"
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
