// src/components/mobile-nav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Smart Click-Outside Listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // If click is outside the menu AND outside the trigger button, close the menu
      if (open && !target.closest('[data-mobile-menu]') && !target.closest('[data-mobile-trigger]')) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const toggleAccordion = (label: string) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  return (
    <div className="absolute inset-y-0 right-0 left-0 flex justify-end items-center pr-6 lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        data-mobile-trigger // Marker for click listener
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        aria-label="Open menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Dropdown Menu Container */}
            <motion.div 
              data-mobile-menu // Marker for click listener
              className="absolute top-full left-[-1px] right-[-1px] mt-2 bg-popover border border-border rounded-3xl shadow-lg z-50 flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <nav className="flex-1 overflow-y-auto px-6 py-2 max-h-[70vh]">
                {SITE_CONFIG.navLinks.map((link) => (
                  <div key={link.label} className="border-b border-border/50 last:border-0">
                    {link.href ? (
                      <Link
                        href={link.href}
                        className={cn(
                          "block py-3 text-base font-medium text-left hover:text-brand-secondary transition-colors",
                          pathname === link.href ? "text-brand-secondary" : "text-foreground/90"
                        )}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => toggleAccordion(link.label)}
                          className="flex w-full items-center justify-between py-3 text-base font-medium text-left text-foreground/90 hover:text-brand-secondary transition-colors"
                        >
                          {link.label}
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 transition-transform", 
                              activeAccordion === link.label && "rotate-180"
                            )} 
                          />
                        </button>
                        {activeAccordion === link.label && (
                          <div className="flex flex-col gap-1 pl-4 mb-2 border-l border-border ml-1">
                            {link.dropdown?.map((item) => (
                              <Link
                                key={item.href + item.label}
                                href={item.href!}
                                className="block py-2 text-sm text-left text-muted-foreground hover:text-brand-secondary transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Bottom Action Buttons */}
              <div className="p-4 flex flex-col gap-3 bg-muted/30 items-center">
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 rounded-full h-11 px-8 text-sm font-semibold w-full justify-center"
                  )}
                >
                  <Phone className="mr-2 h-4 w-4" /> Book A Call
                </a>
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full h-11 px-8 text-sm font-semibold w-full justify-center"
                  )}
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Enquiry ({SITE_CONFIG.phoneDisplay})
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}