// src/components/navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";

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
              
              const isParentActive = pathname === link.href || link.dropdown?.some(item => item.href === pathname);
              
              return (
                <div key={link.label} className="relative group">
                  <TriggerComponent
                    href={link.href || "#"}
                    className={cn(
                      "flex items-center text-sm leading-5 px-3 py-2 rounded-full transition-all duration-200",
                      isParentActive
                        ? "bg-foreground/5 dark:bg-foreground/10 text-brand-secondary font-bold" 
                        : "text-foreground font-medium hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:text-brand-secondary hover:font-bold" 
                    )}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </TriggerComponent>
                  
                  {/* Mega Menu Dropdown */}
                  {link.dropdown && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="rounded-xl border border-border bg-popover p-2 shadow-lg shadow-black/20 grid grid-cols-1 gap-1">
                        
                        {/* Removed Top Heading and HR Line */}

                        {/* Dropdown Items */}
                        {link.dropdown.map((item) => {
                          const isItemActive = pathname === item.href;
                          
                          return (
                            <Link
                              key={item.href + item.label}
                              href={item.href!}
                              className={cn(
                                "block px-3 py-2.5 rounded-lg transition-colors text-sm font-semibold",
                                // Active and Hover state match exactly (Grey bg, Black text)
                                isItemActive
                                  ? "bg-muted text-foreground" 
                                  : "text-foreground hover:bg-muted" 
                              )}
                            >
                              {item.label}
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

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}