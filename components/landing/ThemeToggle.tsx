"use client";

import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  // Use a subscription to detect when we're on the client to avoid hydration mismatches
  // This is a workaround for next-themes hydration issues
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // During SSR or before mount, render a placeholder to prevent hydration mismatch
  // Show a neutral state that matches the initial client render
  if (!isClient || !resolvedTheme) {
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
        title="Toggle theme"
        className="cursor-pointer"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="cursor-pointer"
    >
      {isDark ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
