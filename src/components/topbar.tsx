// src/components/topbar.tsx
import { Globe } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function TopBar() {
  return (
   <div className="w-full bg-brand-secondary-2 dark:bg-brand-primary text-brand-primary dark:text-brand-secondary-2 border-b border-brand-primary/10 dark:border-brand-secondary/20 transition-colors">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex h-9 items-center justify-between text-xs">
          {/* Left Side: Language Switcher */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-brand-secondary transition-colors">
            <Globe className="h-3.5 w-3.5" />
            <span>EN</span> 
          </div>

          {/* Right Side: Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}