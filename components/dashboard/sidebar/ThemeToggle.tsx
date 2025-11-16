"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isClient || !resolvedTheme) {
    return (
      <SidebarMenuButton
        variant="outline"
        aria-label="Toggle theme"
        title="Toggle theme"
        className="cursor-pointer"
      >
        <Sun className="h-4 w-4" />
        Toggle theme
      </SidebarMenuButton>
    );
  }

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

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
    <SidebarMenuItem>
      <SidebarMenuButton
        aria-label={getThemeLabel()}
        title={getThemeLabel()}
        onClick={handleThemeToggle}
        className="cursor-pointer"
      >
        {getThemeIcon()}
        Toggle theme
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default ThemeToggle;
