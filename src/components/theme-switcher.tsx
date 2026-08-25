// src/components/theme-switcher.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Settings, Sun, Moon, Monitor } from "lucide-react";

export function ThemeSwitcher() {
  // 1. Extract resolvedTheme instead of just theme
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // 2. Use resolvedTheme to check if the screen is actually dark right now
  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative flex items-center gap-2">
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
          <button
            onClick={() => { setTheme("light"); setMenuOpen(false); }}
            className="flex w-full items-center gap-2 rounded-md p-1.5 text-xs hover:bg-muted transition-colors"
          >
            <Sun className="h-3 w-3" /> Light
          </button>
          <button
            onClick={() => { setTheme("dark"); setMenuOpen(false); }}
            className="flex w-full items-center gap-2 rounded-md p-1.5 text-xs hover:bg-muted transition-colors"
          >
            <Moon className="h-3 w-3" /> Dark
          </button>
          <button
            onClick={() => { setTheme("system"); setMenuOpen(false); }}
            className="flex w-full items-center gap-2 rounded-md p-1.5 text-xs hover:bg-muted transition-colors"
          >
            <Monitor className="h-3 w-3" /> System
          </button>
        </div>
      )}

      {/* Drag Switch Track */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 20 }}
        dragElastic={0.1}
        onDragEnd={(e, info) => {
          if (info.offset.x > 5) setTheme("dark");
          else if (info.offset.x < -5) setTheme("light");
        }}
        // 3. Use isDark (which relies on resolvedTheme) for the toggle action
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative flex h-7 w-12 cursor-pointer items-center rounded-full p-1 transition-colors"
        style={{ 
          backgroundColor: isDark ? "#1A1A1A" : "#F9EDD1", 
          border: "1px solid #EEC971" 
        }}
      >
        {/* Dragger Thumb with Icon */}
        <motion.div
          className="z-10 flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary shadow-sm"
          animate={{ x: isDark ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
              >
                <Moon className="h-3 w-3 text-brand-primary" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
              >
                <Sun className="h-3 w-3 text-brand-primary" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}