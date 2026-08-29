// src/components/referral-popup.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Gift,
  Users,
  X,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function ReferralPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = SITE_CONFIG.phoneLink.replace(/\D/g, "");

  const [form, setForm] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    preferences: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Referral submission:", form);
    setIsOpen(false);
  };

  return (
    <>
      {/* ============================================================
          FLOATING LEFT ACTIONS (DESKTOP)
          ============================================================ */}
      <div className="fixed bottom-12 left-6 z-[90] hidden flex-col items-start gap-3 sm:flex">
        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Haram Trip on WhatsApp"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
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

        {/* REFERRAL BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open referral program"
          className="group flex items-center gap-2 rounded-full border border-border bg-background dark:bg-brand-primary px-5 py-3.5 text-sm font-bold text-foreground dark:text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-muted dark:hover:bg-[#2c2725]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
            <Gift className="h-4 w-4" />
          </span>
          <span>Refer & Earn £80</span>
        </button>
      </div>

      {/* ============================================================
          FLOATING LEFT ACTIONS (MOBILE)
          ============================================================ */}
      <div className="fixed bottom-5 left-5 z-[90] flex flex-col items-center gap-3 sm:hidden">
        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Haram Trip on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105"
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

        {/* REFERRAL BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open referral program"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background dark:bg-brand-primary text-brand-secondary shadow-lg transition-all hover:scale-105"
        >
          <Gift className="h-6 w-6" />
        </button>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="referral-title"
            className="relative max-h-[90vh] w-full max-w-[640px] overflow-y-auto rounded-[18px] bg-background shadow-[0_25px_80px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
          >
            {/* DYNAMIC HEADER (White in light mode, Black in dark mode) */}
            <div className="bg-background dark:bg-brand-primary px-5 py-5 text-foreground dark:text-white border-b border-border sm:px-7 sm:py-6">
              
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                
                {/* Brand Logo & Text */}
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1.5 rounded-md border border-border">
                    <Image 
                      src="/haramtrip-logo.png" 
                      alt="Haram Trip Logo" 
                      width={32} 
                      height={32} 
                      className="h-8 w-8 object-contain" 
                    />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold leading-none text-foreground dark:text-white">
                      Haram <span className="text-brand-secondary">Trip</span>
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground dark:text-white/70">
                      Spiritual & Luxury Journeys
                    </div>
                  </div>
                </div>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close referral popup"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border dark:border-white/10 bg-muted dark:bg-white/10 text-foreground dark:text-white/70 transition-colors hover:bg-muted-foreground/20 dark:hover:bg-white/15 dark:hover:text-white sticky top-4"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Referral badge */}
              <div className="mt-5 flex justify-end">
                <div className="inline-flex items-center gap-2 rounded-md border border-brand-secondary/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-secondary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Referral Program
                </div>
              </div>

              {/* Main heading */}
              <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <h2
                    id="referral-title"
                    className="font-serif text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground dark:text-white sm:text-3xl"
                  >
                    Refer a Friend & Receive <span className="text-brand-secondary">£80</span>
                  </h2>
                  <p className="mt-2 max-w-[400px] text-xs leading-[1.6] text-muted-foreground dark:text-white/85 sm:text-sm">
                    Recommend Haram Trip to your friends or family. When they book an Umrah or holiday package with us, you will receive an £80 cash reward paid directly to you. <strong className="text-brand-secondary">£80 cash reward</strong> directly.
                  </p>
                </div>

                {/* Reward Card */}
                <div className="flex items-center gap-3 rounded-xl border border-brand-secondary/40 bg-muted dark:bg-white/[0.03] px-4 py-3 sm:min-w-[180px]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-secondary/40 bg-brand-secondary/10 text-brand-secondary">
                    <Gift className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground dark:text-white/60">
                      Your Reward
                    </div>
                    <div className="mt-0.5 font-serif text-lg font-bold leading-none text-brand-secondary">
                      £80 Cash
                    </div>
                    <div className="mt-1 text-[10px] text-muted-foreground dark:text-white/60">
                      Per confirmed booking
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="px-5 py-5 sm:px-7 sm:py-6">
              
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                
                {/* REFERRER */}
                <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2.5 border-b border-border pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-secondary/50 bg-brand-secondary-2/50 text-brand-secondary dark:bg-secondary/50">
                      <User className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">
                      1. Your Details (Referrer)
                    </h3>
                  </div>

                  <div className="mt-3 space-y-3">
                    <ReferralInput label="Your Full Name" required placeholder="e.g. Tariq Mahmood" value={form.referrerName} onChange={(value) => updateField("referrerName", value)} />
                    <ReferralInput label="Your Email Address" type="email" required placeholder="e.g. tariq@gmail.com" value={form.referrerEmail} onChange={(value) => updateField("referrerEmail", value)} />
                    <ReferralInput label="Your Phone Number" type="tel" required placeholder="e.g. +44 7123 456789" value={form.referrerPhone} onChange={(value) => updateField("referrerPhone", value)} />
                  </div>
                </div>

                {/* REFEREE */}
                <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2.5 border-b border-border pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-secondary/50 bg-brand-secondary-2/50 text-brand-secondary dark:bg-secondary/50">
                      <Users className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">
                      2. Friend's Details (Referee)
                    </h3>
                  </div>

                  <div className="mt-3 space-y-3">
                    <ReferralInput label="Friend's Full Name" required placeholder="e.g. Bilal Ahmed" value={form.friendName} onChange={(value) => updateField("friendName", value)} />
                    <ReferralInput label="Friend's Email Address" type="email" required placeholder="e.g. bilal@gmail.com" value={form.friendEmail} onChange={(value) => updateField("friendEmail", value)} />
                    <ReferralInput label="Friend's Phone Number" type="tel" required placeholder="e.g. +44 7987 654321" value={form.friendPhone} onChange={(value) => updateField("friendPhone", value)} />
                  </div>
                </div>
              </div>

              {/* PREFERENCES */}
              <div className="mt-5">
                <label htmlFor="referral-preferences" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Travel Plans or Special Preferences <span className="text-muted-foreground/70">(Optional)</span>
                </label>
                <input
                  id="referral-preferences"
                  type="text"
                  value={form.preferences}
                  onChange={(event) => updateField("preferences", event.target.value)}
                  placeholder="e.g. Interested in 5-Star Umrah in Ramadan or Family Dubai Tour"
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/30 dark:bg-input/30"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-secondary text-sm font-bold text-brand-primary shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-secondary/90"
              >
                <Gift className="h-4 w-4" />
                Submit Referral & Claim £80 Reward
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* TRUST POINTS */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
                  ATOL Protected UK Agency
                </div>
                <span className="text-border">•</span>
                <div className="flex items-center gap-1.5">
                  <Gift className="h-3.5 w-3.5 text-brand-secondary" />
                  £80 Cash Payout Upon Confirmed Booking
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/* ========================================================= */
/* INPUT COMPONENT */
/* ========================================================= */

interface ReferralInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}

function ReferralInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: ReferralInputProps) {
  return (
    <div>
      <label className="mb-1 block text-[11px] font-medium text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-brand-secondary">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/30 dark:bg-input/30"
      />
    </div>
  );
}