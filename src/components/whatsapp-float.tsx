// src/components/whatsapp-float.tsx
"use client";

import { SITE_CONFIG } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <>
      {/* Desktop — sits directly above the Customize Packages button */}
      <a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Haram Trip on WhatsApp"
        className="fixed bottom-[92px] left-6 z-[90] hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl sm:flex"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.19c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.4-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.37s1.01 2.75 1.15 2.94c.14.19 1.98 3.02 4.79 4.23.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.11.55-.08 1.65-.68 1.88-1.34.23-.66.23-1.23.16-1.34-.07-.12-.26-.19-.54-.33z" />
          <path d="M16.01 3.2c-7.05 0-12.77 5.72-12.77 12.77 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.59-1.73a12.73 12.73 0 0 0 6.22 1.61h.01c7.05 0 12.77-5.72 12.77-12.77S23.06 3.2 16.01 3.2zm0 23.39h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.91 1.03 1.04-3.81-.25-.39a10.58 10.58 0 1 1 8.92 4.88z" />
        </svg>
      </a>

      {/* Mobile — sits directly above the Customize Packages button */}
      <a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Haram Trip on WhatsApp"
        className="fixed bottom-[80px] left-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105 sm:hidden"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.19c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.4-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.37s1.01 2.75 1.15 2.94c.14.19 1.98 3.02 4.79 4.23.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.11.55-.08 1.65-.68 1.88-1.34.23-.66.23-1.23.16-1.34-.07-.12-.26-.19-.54-.33z" />
          <path d="M16.01 3.2c-7.05 0-12.77 5.72-12.77 12.77 0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.59-1.73a12.73 12.73 0 0 0 6.22 1.61h.01c7.05 0 12.77-5.72 12.77-12.77S23.06 3.2 16.01 3.2zm0 23.39h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.91 1.03 1.04-3.81-.25-.39a10.58 10.58 0 1 1 8.92 4.88z" />
        </svg>
      </a>
    </>
  );
}
