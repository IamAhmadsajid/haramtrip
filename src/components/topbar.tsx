// src/components/topbar.tsx
"use client";

import { Globe } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useEffect, useRef, useState } from "react";

export function TopBar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      if (currentScrollY <= 10) {
        setVisible(true);
      } else if (currentScrollY < previousScrollY) {
        setVisible(true);
      } else if (currentScrollY > previousScrollY) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-[60]
        bg-brand-secondary-2 dark:bg-brand-primary
        text-brand-primary dark:text-brand-secondary-2
        border-b border-brand-primary/10 dark:border-brand-secondary/20
        transition-transform duration-300 ease-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* w-full goes on the inner container, NOT the fixed element */}
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6">
        <div className="flex h-9 w-full items-center justify-between text-xs">

          {/* LEFT — Language */}
          <div className="flex min-w-0 shrink-0 items-center">
            <button
              type="button"
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap hover:text-brand-secondary transition-colors"
            >
              <Globe className="h-3.5 w-3.5 shrink-0" />
              <span className="font-medium">EN</span>
            </button>
          </div>

          {/* RIGHT — Theme */}
          <div className="ml-auto flex shrink-0 items-center justify-end">
            <ThemeSwitcher />
          </div>

        </div>
      </div>
    </div>
  );
}