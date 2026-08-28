// src/components/theme-switcher.tsx
"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Settings, Sun, Moon, Monitor } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative flex shrink-0 items-center gap-2">
      {/* Gear Icon & Dropdown */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hover:text-brand-secondary transition-colors relative"
        aria-label="Theme settings"
      >
        <Settings className="h-3.5 w-3.5" />
      </button>

      {menuOpen && (
        <div className="absolute right-0 top-full mt-2 w-28 rounded-lg border border-border bg-popover p-1.5 shadow-lg z-[100]">
          <button onClick={() => { setTheme("light"); setMenuOpen(false); }} className="flex w-full items-center gap-2 rounded-md p-1.5 text-xs hover:bg-muted transition-colors">
            <Sun className="h-3 w-3" /> Light
          </button>
          <button onClick={() => { setTheme("dark"); setMenuOpen(false); }} className="flex w-full items-center gap-2 rounded-md p-1.5 text-xs hover:bg-muted transition-colors">
            <Moon className="h-3 w-3" /> Dark
          </button>
          <button onClick={() => { setTheme("system"); setMenuOpen(false); }} className="flex w-full items-center gap-2 rounded-md p-1.5 text-xs hover:bg-muted transition-colors">
            <Monitor className="h-3 w-3" /> System
          </button>
        </div>
      )}

      {/* Simple CSS Toggle (No Framer Motion) */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors"
        style={{ 
          backgroundColor: isDark ? "#1A1A1A" : "#F9EDD1", 
          border: "1px solid #EEC971" 
        }}
        aria-label="Toggle theme"
      >
        <div
          className="z-10 flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary shadow-sm transition-transform duration-300"
          style={{ transform: isDark ? "translateX(20px)" : "translateX(0px)" }}
        >
          {isDark ? <Moon className="h-3 w-3 text-brand-primary" /> : <Sun className="h-3 w-3 text-brand-primary" />}
        </div>
      </button>
    </div>
  );
}