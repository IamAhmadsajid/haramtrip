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

export function ReferralPopup() {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* FLOATING REFERRAL BUTTON (Desktop) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open referral program"
        className="fixed bottom-6 left-6 z-[90] hidden items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-primary px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2c2725] sm:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
          <Gift className="h-4 w-4" />
        </span>
        <span>Refer & Earn £70</span>
      </button>

      {/* Mobile floating button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open referral program"
        className="fixed bottom-5 left-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full border border-brand-secondary/50 bg-brand-primary text-brand-secondary shadow-lg transition-all hover:scale-105 sm:hidden"
      >
        <Gift className="h-6 w-6" />
      </button>

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
            className="relative flex max-h-[95vh] w-full max-w-[760px] flex-col overflow-hidden rounded-[18px] bg-[#faf9f7] shadow-[0_25px_80px_rgba(0,0,0,0.3)]"
          >
            {/* DARK HEADER */}
            <div className="shrink-0 bg-brand-primary px-6 pb-8 pt-6 text-white sm:px-8 sm:pb-8 sm:pt-7">
              
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                
                {/* Brand Logo & Text */}
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1.5 rounded-md border border-border">
                    <Image 
                      src="/haramtrip-logo.png" 
                      alt="Haram Trip Logo" 
                      width={40} 
                      height={40} 
                      className="h-10 w-10 object-contain" 
                    />
                  </div>
                  <div>
                    <div className="font-serif text-xl font-bold leading-none text-white">
                      Haram <span className="text-brand-secondary">Trip</span>
                    </div>
                    <div className="mt-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/70">
                      Spiritual & Luxury Journeys
                    </div>
                  </div>
                </div>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close referral popup"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Referral badge */}
              <div className="mt-6 flex justify-end">
                <div className="inline-flex items-center gap-2 rounded-md border border-brand-secondary/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-secondary">
                  <Sparkles className="h-4 w-4" />
                  Referral Program
                </div>
              </div>

              {/* Main heading */}
              <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <h2
                    id="referral-title"
                    className="font-serif text-3xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-4xl"
                  >
                    Refer a Friend & Receive <span className="text-brand-secondary">£70</span>
                  </h2>
                  <p className="mt-3 max-w-[490px] text-sm leading-[1.7] text-white/85 sm:text-base">
                    Recommend Haram Trip to your friends or family. When they book an Umrah or holiday package, we will transfer your <strong className="text-brand-secondary">£70 cash reward</strong> directly.
                  </p>
                </div>

                {/* Reward Card */}
                <div className="flex items-center gap-4 rounded-xl border border-brand-secondary/40 bg-white/[0.03] px-5 py-4 sm:min-w-[220px]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-secondary/40 bg-brand-secondary/10 text-brand-secondary">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.08em] text-white/60">
                      Your Reward
                    </div>
                    <div className="mt-1 font-serif text-xl font-bold leading-none text-brand-secondary">
                      £70 Cash
                    </div>
                    <div className="mt-1.5 text-xs text-white/60">
                      Per confirmed booking
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                
                {/* REFERRER */}
                <div className="rounded-xl border border-[#dedad5] bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-[#ece8e3] pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-secondary/50 bg-brand-secondary-2/50 text-brand-secondary">
                      <User className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#302c2a]">
                      1. Your Details (Referrer)
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <ReferralInput label="Your Full Name" required placeholder="e.g. Tariq Mahmood" value={form.referrerName} onChange={(value) => updateField("referrerName", value)} />
                    <ReferralInput label="Your Email Address" type="email" required placeholder="e.g. tariq@gmail.com" value={form.referrerEmail} onChange={(value) => updateField("referrerEmail", value)} />
                    <ReferralInput label="Your Phone Number" type="tel" required placeholder="e.g. +44 7123 456789" value={form.referrerPhone} onChange={(value) => updateField("referrerPhone", value)} />
                  </div>
                </div>

                {/* REFEREE */}
                <div className="rounded-xl border border-[#dedad5] bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-[#ece8e3] pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-secondary/50 bg-brand-secondary-2/50 text-brand-secondary">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#302c2a]">
                      2. Friend's Details (Referee)
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <ReferralInput label="Friend's Full Name" required placeholder="e.g. Bilal Ahmed" value={form.friendName} onChange={(value) => updateField("friendName", value)} />
                    <ReferralInput label="Friend's Email Address" type="email" required placeholder="e.g. bilal@gmail.com" value={form.friendEmail} onChange={(value) => updateField("friendEmail", value)} />
                    <ReferralInput label="Friend's Phone Number" type="tel" required placeholder="e.g. +44 7987 654321" value={form.friendPhone} onChange={(value) => updateField("friendPhone", value)} />
                  </div>
                </div>
              </div>

              {/* PREFERENCES */}
              <div className="mt-6">
                <label htmlFor="referral-preferences" className="mb-2 block text-sm font-medium text-[#504a46]">
                  Travel Plans or Special Preferences <span className="text-muted-foreground">(Optional)</span>
                </label>
                <input
                  id="referral-preferences"
                  type="text"
                  value={form.preferences}
                  onChange={(event) => updateField("preferences", event.target.value)}
                  placeholder="e.g. Interested in 5-Star Umrah in Ramadan or Family Dubai Tour"
                  className="h-11 w-full rounded-lg border border-[#d9d5d0] bg-white px-4 text-sm text-[#302c2a] outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/30"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-secondary text-sm font-bold text-brand-primary shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-secondary/90"
              >
                <Gift className="h-5 w-5" />
                Submit Referral & Claim £70 Reward
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* TRUST POINTS */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#68615c]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  ATOL Protected UK Agency
                </div>
                <span className="text-[#d1cbc4]">•</span>
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-brand-secondary" />
                  £70 Cash Payout Upon Confirmed Booking
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
      <label className="mb-2 block text-xs font-medium text-[#504a46]">
        {label}
        {required && <span className="ml-1 text-brand-secondary">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-[#d9d5d0] bg-white px-4 text-sm text-[#302c2a] outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/30"
      />
    </div>
  );
}