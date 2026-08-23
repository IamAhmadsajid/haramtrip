// src/components/navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, Phone, 
  Star, Moon, Snowflake, CalendarHeart, Users,
  Landmark, Globe, Building2, Map, 
  Info, FileText, Bus, Plane, Newspaper, LucideIcon 
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";

const iconMap: Record<string, LucideIcon> = {
  Star, Moon, Snowflake, CalendarHeart, Users, Landmark, Globe, Building2, Map, Info, FileText, Bus, Plane, Newspaper, Phone
};

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 py-3">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={cn(
            "relative flex h-16 items-center justify-between rounded-full border border-border bg-background/95 backdrop-blur-md px-6 transition-all duration-300",
            scrolled ? "shadow-md shadow-black/5" : "shadow-sm"
          )}
        >
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/haramtrip-logo.png" 
              alt="Haram Trip Logo" 
              width={160} 
              height={92} 
              className="h-8 w-auto object-contain" 
              priority
            />
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            {SITE_CONFIG.navLinks.map((link) => {
              const TriggerComponent = link.href ? Link : "button";
              
              // Check if the current page is the main link OR any of its dropdown children
              const isParentActive = pathname === link.href || link.dropdown?.some(item => item.href === pathname);
              
              return (
                <div key={link.label} className="relative group">
                                     <TriggerComponent
                    href={link.href || "#"}
                    className={cn(
                      "flex items-center text-sm leading-5 px-3 py-2 rounded-full transition-all duration-200",
                      isParentActive
                        // Active state: Gold text + Bold to make it sharp
                        ? "bg-foreground/5 dark:bg-foreground/10 text-brand-secondary font-bold" 
                        // Default: pure black text. Hover: Gold text + Bold
                        : "text-foreground font-medium hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:text-brand-secondary hover:font-bold" 
                    )}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </TriggerComponent>
                  
                  {/* Mega Menu Dropdown */}
                  {link.dropdown && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="rounded-xl border border-border bg-popover p-2 shadow-lg shadow-black/20 grid grid-cols-1 gap-1">
                        
                        {/* Dropdown Heading and HR Line */}
                        {link.dropdownTitle && (
                          <div className="px-2 pt-1 pb-2">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                              {link.dropdownTitle}
                            </h3>
                          </div>
                        )}
                        <div className="border-t border-border my-1 mx-1"></div>

                        {/* Dropdown Items */}
                        {link.dropdown.map((item) => {
                          const Icon = iconMap[item.icon || "Info"];
                          const isItemActive = pathname === item.href; // Check if this specific dropdown item is active
                          
                          return (
                            <Link
                              key={item.href + item.label}
                              href={item.href!}
                              className={cn(
                                "flex items-start gap-3 p-2.5 rounded-lg transition-colors group/item",
                                isItemActive
                                  ? "bg-brand-secondary/10" // Active dropdown background (Light Gold)
                                  : "hover:bg-muted" // Hover dropdown background (Light Grey)
                              )}
                            >
                              <div className={cn(
                                "p-2 rounded-md transition-colors",
                                isItemActive 
                                  ? "bg-brand-secondary text-brand-primary" // Active icon box (Solid Gold)
                                  : "bg-muted text-brand-secondary group-hover/item:bg-brand-secondary group-hover/item:text-brand-primary"
                              )}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className={cn(
                                  "text-sm font-semibold transition-colors",
                                  isItemActive ? "text-brand-secondary" : "text-foreground" // Active text becomes Gold
                                )}>
                                  {item.label}
                                </p>
                                {item.description && (
                                  <p className={cn("text-xs mt-0.5", isItemActive ? "text-brand-secondary/80" : "text-muted-foreground")}>
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Desktop Book a Call Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 rounded-full h-11 px-8 text-sm font-semibold shadow-sm"
              )}
            >
              <Phone className="mr-2 h-4 w-4" /> Book A Call
            </a>
          </div>

          {/* Mobile Nav (Absolute positioned to perfectly match navbar width) */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}