// ============================================================
// File: src/components/consultation-dialog/whatsapp-consultation.tsx
// Purpose:
// WhatsApp consultation tab.
// Provides direct access to the official Haram Trip WhatsApp
// contact without requiring the user to fill out a form.
// ============================================================

"use client";

import { MessageCircle, ShieldCheck } from "lucide-react";

import { SITE_CONFIG } from "@/lib/site-config";

export function WhatsAppConsultation() {
  return (
    <div className="px-5 py-7 sm:px-7 sm:py-8">
      {/* ======================================================
          Main WhatsApp Icon
      ====================================================== */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50">
        <MessageCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
      </div>

      {/* ======================================================
          Heading
      ====================================================== */}
      <div className="mx-auto mt-5 max-w-xl text-center">
        <h3 className="font-serif text-[22px] font-bold text-foreground sm:text-[25px]">
          Instant WhatsApp Chat
        </h3>

        <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-muted-foreground sm:text-sm">
          Connect directly with our UK travel desk for instant
          answers, hotel proximity details, and customised quotes.
        </p>
      </div>

      {/* ======================================================
          Official Support Number
      ====================================================== */}
      <div className="mx-auto mt-6 max-w-md rounded-2xl border border-border bg-card px-5 py-4 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Official Support Number
        </p>

        <p className="mt-1 font-serif text-[22px] font-bold tracking-wide text-foreground sm:text-[25px]">
          {SITE_CONFIG.phoneLink}
        </p>
      </div>

      {/* ======================================================
          WhatsApp CTA
      ====================================================== */}
      <a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mx-auto
          mt-5
          flex
          min-h-[48px]
          w-full
          max-w-[620px]
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-emerald-500
          px-5
          py-3
          text-center
          text-sm
          font-bold
          text-black
          shadow-lg
          shadow-emerald-500/10
          transition
          hover:bg-emerald-400
          focus:outline-none
          focus:ring-2
          focus:ring-emerald-500
          focus:ring-offset-2
          dark:focus:ring-offset-background
        "
      >
        <MessageCircle className="h-5 w-5" />

        <span>
          Open WhatsApp Message ({SITE_CONFIG.phoneLink})
        </span>
      </a>
    </div>
  );
}