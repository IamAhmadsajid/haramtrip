// src/components/home/pilgrim-trust-cta/pilgrim-trust-cta.tsx
"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export function PilgrimTrustCta() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-background border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Main CTA Card */}
        <div className="relative overflow-hidden flex flex-col items-center justify-center text-center gap-6 sm:gap-7 py-12 sm:py-16 px-6 sm:px-10 border border-[#e4e0dc] dark:border-white/10 rounded-3xl bg-card shadow-[0_8px_18px_rgba(0,0,0,0.055),0_20px_35px_rgba(0,0,0,0.045)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
          
          {/* Decorative Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-secondary/5 dark:bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center gap-5 w-full">
              
            {/* ICON */}
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>

            {/* EYEBROW TEXT */}
            <span className="inline-flex items-center text-brand-secondary text-[10px] font-bold tracking-[0.16em] uppercase">
              Trusted UK Travel Experts
            </span>

            {/* TEXT */}
            <div className="max-w-2xl">
              <h2 className="m-0 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground">
                Over 1,000+ Happy UK Pilgrims Served
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-[1.6] text-muted-foreground">
                Book your custom spiritual journey with complete peace of mind and 24/7 dedicated assistance from our expert team.
              </p>
            </div>

            {/* CTA BUTTON */}
            <Link 
              href="/contact" 
              className="group mt-2 inline-flex items-center justify-center gap-2.5 min-h-[48px] px-8 rounded-full bg-foreground text-background no-underline text-sm font-bold shadow-[0_7px_14px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-secondary hover:text-brand-primary hover:shadow-[0_9px_18px_rgba(0,0,0,0.14)]"
            >
              <MessageSquare className="w-4 h-4 text-brand-secondary transition-colors group-hover:text-brand-primary" />
              <span>Speak With Travel Consultant</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}