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
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const rawPathname = usePathname();
  // Normalize path because next.config.ts has trailingSlash: true
  const pathname = rawPathname !== "/" && rawPathname.endsWith("/") ? rawPathname.slice(0, -1) : rawPathname;

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar visual state
      setScrolled(currentScrollY > 12);

      // Top bar state
      if (currentScrollY <= 10) {
        setTopBarVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP
        setTopBarVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling DOWN
        setTopBarVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollY]);

  const umrahPackages =
    SITE_CONFIG.navLinks.find(
      (l) => l.label === "Umrah Packages"
    )?.dropdown || [];

  return (
    <header
      className={cn(
        "sticky z-50 w-full px-4 sm:px-6 py-3",
        "transition-[top] duration-300 ease-out",
        topBarVisible ? "top-9" : "top-0"
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={cn(
            "relative flex h-16 items-center justify-between",
            "rounded-full border border-border",
            "bg-background/95 backdrop-blur-md",
            "px-6",
            "transition-all duration-300",
            scrolled
              ? "shadow-md shadow-black/5"
              : "shadow-sm"
          )}
        >
          {/* =====================================================
              LEFT — LOGO
          ====================================================== */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/haramtrip-logo2.png"
              alt="Haram Trip Logo"
              width={120}
              height={120}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* =====================================================
              CENTER — DESKTOP NAV
          ====================================================== */}
          <nav className="hidden items-center gap-2 lg:flex">
            {SITE_CONFIG.navLinks.map((link) => {
              const TriggerComponent = link.href
                ? Link
                : "button";

              const isParentActive =
                pathname === link.href ||
                link.dropdown?.some(
                  (item) => item.href === pathname
                );

              return (
                <div
                  key={link.label}
                  className="relative group"
                >
                  <TriggerComponent
                    href={link.href || "#"}
                    className={cn(
                      "flex items-center text-sm leading-5",
                      "px-3 py-2 rounded-full",
                      "transition-all duration-200",
                      isParentActive
                        ? "bg-foreground/5 dark:bg-foreground/10 text-brand-secondary font-bold"
                        : "text-foreground font-medium hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:text-brand-secondary hover:font-bold"
                    )}
                  >
                    {link.label}

                    {link.dropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </TriggerComponent>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div
                      className="
                        absolute left-1/2
                        -translate-x-1/2
                        top-full
                        pt-4
                        w-56
                        opacity-0 invisible
                        group-hover:opacity-100
                        group-hover:visible
                        transition-all duration-200
                        z-50
                      "
                    >
                      <div
                        className="
                          rounded-xl
                          border border-border
                          bg-popover
                          p-2
                          shadow-lg shadow-black/20
                          grid grid-cols-1 gap-1
                        "
                      >
                        {link.dropdown.map((item) => {
                          const isItemActive =
                            pathname === item.href;

                          return (
                            <Link
                              key={
                                item.href +
                                item.label
                              }
                              href={item.href!}
                              className={cn(
                                "block px-3 py-2.5",
                                "rounded-lg",
                                "transition-colors",
                                "text-sm font-semibold",
                                isItemActive
                                  ? "bg-muted text-brand-secondary font-bold"
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

          {/* =====================================================
              RIGHT — BOOK A CALL
          ====================================================== */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "default",
                }),
                "bg-brand-secondary",
                "text-brand-primary",
                "hover:bg-brand-secondary/90",
                "rounded-full",
                "h-11",
                "px-8",
                "text-sm",
                "font-semibold",
                "shadow-sm"
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              Book A Call
            </a>
          </div>


                    {/* =====================================================
              CENTER — BOOK A CALL (MOBILE ONLY)
              Placed natively in the flex flow to avoid iOS pointer bugs
          ====================================================== */}
          <a
            href={SITE_CONFIG.phoneLink}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden inline-flex items-center gap-2 bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 rounded-full h-9 px-5 text-xs font-semibold shadow-sm transition-all"
          >
            <Phone className="h-3.5 w-3.5" />
            Book A Call
          </a>

          {/* =====================================================
              MOBILE
          ====================================================== */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}