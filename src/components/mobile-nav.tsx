// src/components/mobile-nav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const pathname = usePathname();

  // Close menu whenever the route changes
  useEffect(() => {
    setOpen(false);
    setActiveAccordion(null);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        open &&
        !target.closest("[data-mobile-menu]") &&
        !target.closest("[data-mobile-trigger]")
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Prevent background page scrolling while menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleAccordion = (label: string) => {
    setActiveAccordion((current) =>
      current === label ? null : label
    );
  };

  return (
    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-end pr-6 lg:hidden">
      {/* =========================================================
          MOBILE MENU BUTTON
      ========================================================== */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        data-mobile-trigger
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          })
        )}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* =====================================================
                BACKDROP
            ====================================================== */}
            <motion.div
              className="fixed inset-0 top-0 z-40 bg-black/20 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* =====================================================
                MOBILE MENU
            ====================================================== */}
            <motion.div
              data-mobile-menu
              className="
                absolute
                top-full
                left-[-1px]
                right-[-1px]
                mt-2
                bg-popover
                border border-border
                rounded-3xl
                shadow-xl
                z-50
                flex flex-col
                overflow-hidden
              "
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              {/* ===================================================
                  NAVIGATION LINKS
              ==================================================== */}
              <nav className="flex-1 overflow-y-auto px-4 py-2 max-h-[65vh]">
                {SITE_CONFIG.navLinks.map((link) => {
                  const isParentActive =
                    pathname === link.href ||
                    link.dropdown?.some(
                      (item) => item.href === pathname
                    );

                  return (
                    <div
                      key={link.label}
                      className="border-b border-border/40 last:border-0 py-1"
                    >
                      {/* =================================================
                          NORMAL LINK
                      ================================================== */}
                      {link.href ? (
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center py-2.5 px-3 rounded-xl",
                            "text-base",
                            "transition-all duration-200",
                            isParentActive
                              ? "bg-foreground/5 dark:bg-foreground/10 text-brand-secondary font-bold"
                              : "text-foreground font-medium hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:text-brand-secondary hover:font-bold"
                          )}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        /* ===============================================
                           ACCORDION LINK
                        ================================================ */
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              toggleAccordion(link.label)
                            }
                            className={cn(
                              "flex w-full items-center justify-between",
                              "py-2.5 px-3 rounded-xl",
                              "text-base",
                              "transition-all duration-200",
                              isParentActive
                                ? "bg-foreground/5 dark:bg-foreground/10 text-brand-secondary font-bold"
                                : "text-foreground font-medium hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:text-brand-secondary hover:font-bold"
                            )}
                          >
                            <span>{link.label}</span>

                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                activeAccordion === link.label &&
                                  "rotate-180"
                              )}
                            />
                          </button>

                          {/* =============================================
                              DROPDOWN ITEMS
                          ============================================== */}
                          <AnimatePresence initial={false}>
                            {activeAccordion === link.label && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-1 pl-4 mb-2 mt-1 ml-2 border-l-2 border-border/40">
                                  {link.dropdown?.map((item) => {
                                    const isChildActive =
                                      pathname === item.href;

                                    return (
                                      <Link
                                        key={
                                          item.href +
                                          item.label
                                        }
                                        href={item.href!}
                                        onClick={() =>
                                          setOpen(false)
                                        }
                                        className={cn(
                                          "block py-2 px-3 rounded-lg",
                                          "text-sm",
                                          "transition-all duration-200",
                                          isChildActive
                                            ? "bg-muted text-foreground font-bold"
                                            : "text-foreground hover:bg-muted"
                                        )}
                                      >
                                        {item.label}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* =====================================================
                  BOTTOM ACTION BUTTONS
              ====================================================== */}
              <div className="p-4 flex flex-col gap-3 bg-muted/30">
                
                {/* Book A Call */}
                <a
                  href={SITE_CONFIG.phoneLink}
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
                    "w-full",
                    "justify-center"
                  )}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Book A Call
                </a>

                {/* WhatsApp */}
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "rounded-full",
                    "h-11",
                    "px-8",
                    "text-sm",
                    "font-semibold",
                    "w-full",
                    "justify-center"
                  )}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Enquiry ({SITE_CONFIG.phoneDisplay})
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}