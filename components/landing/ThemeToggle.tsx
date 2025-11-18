"use client";

import { Sun, Moon, MonitorCog } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

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

  // Cycle through: light -> dark -> system -> light
  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  // Get the appropriate icon and label based on current theme setting
  const getThemeIcon = () => {
    if (theme === "dark") {
      return <Moon className="h-4 w-4" />;
    } else if (theme === "system") {
      return <MonitorCog className="h-4 w-4" />;
    } else {
      return <Sun className="h-4 w-4" />;
    }
  };

  const getThemeLabel = () => {
    if (theme === "dark") {
      return "Switch to system theme";
    } else if (theme === "system") {
      return "Switch to light mode";
    } else {
      return "Switch to dark mode";
    }
  };

  return (
    <Button
      variant="glass-secondary"
      size="icon"
      aria-label={getThemeLabel()}
      title={getThemeLabel()}
      onClick={handleThemeToggle}
      className="cursor-pointer"
    >
      {getThemeIcon()}
    </Button>
  );
};

export default ThemeToggle;
