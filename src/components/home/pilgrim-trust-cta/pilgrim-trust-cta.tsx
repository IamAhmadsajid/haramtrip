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
    <section className="relative w-full pt-[34px] pb-[66px] max-[900px]:pt-[30px] max-[900px]:pb-[58px] max-[640px]:pt-6 max-[640px]:pb-[52px] bg-background">
      <div className="flex flex-col max-[640px]:items-stretch sm:flex-row items-center justify-between gap-10 max-[900px]:gap-6 max-[640px]:gap-5 w-[min(896px,calc(100%-32px))] max-[900px]:w-[min(760px,calc(100%-28px))] max-[640px]:w-[calc(100%-28px)] min-h-[137px] max-[640px]:min-h-0 mx-auto px-8 max-[900px]:px-6 max-[640px]:px-[19px] max-[400px]:px-4 border border-[#e4e0dc] dark:border-white/10 rounded-[21px] max-[640px]:rounded-[17px] bg-card shadow-[0_8px_18px_rgba(0,0,0,0.055),0_20px_35px_rgba(0,0,0,0.045)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
        
        <div className="flex items-start sm:items-center gap-[15px] max-[640px]:gap-3 min-w-0">
          
          {/* ICON */}
          <div className="flex items-center justify-center w-[51px] h-[51px] max-[640px]:w-11 max-[640px]:h-11 flex-[0_0_51px] max-[640px]:flex-[0_0_44px] border border-[#9ae8c9] dark:border-[#19b87e]/30 rounded-[14px] max-[640px]:rounded-xl bg-[#effff8] dark:bg-[#19b87e]/10 text-[#19b87e] shadow-sm">
            <ShieldCheck className="w-[26px] h-[26px] max-[640px]:w-[22px] max-[640px]:h-[22px]" />
          </div>

          {/* TEXT */}
          <div className="min-w-0">
            <h2 className="m-0 text-foreground font-serif text-[22px] max-[900px]:text-[20px] max-[640px]:text-[19px] max-[400px]:text-[18px] leading-[1.15] max-[640px]:leading-[1.2] font-bold tracking-[-0.02em]">
              Over 1,000+ Happy UK Pilgrims Served
            </h2>
            <p className="max-w-[500px] mt-1.5 max-[640px]:mt-[7px] text-muted-foreground text-xs max-[900px]:text-[11px] max-[400px]:text-[10px] leading-[1.45] max-[640px]:leading-[1.55]">
              Book your custom spiritual journey with complete peace of mind and 24/7 dedicated assistance.
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <Link 
          href="/contact" 
          className="group flex items-center justify-center gap-[9px] min-w-[290px] max-[900px]:min-w-[245px] max-[640px]:w-full max-[640px]:min-w-0 flex-[0_0_auto] min-h-[44px] max-[640px]:min-h-[45px] px-[19px] rounded-[13px] max-[640px]:rounded-[11px] bg-foreground text-background no-underline text-[10px] font-extrabold shadow-[0_7px_14px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-secondary hover:text-brand-primary hover:shadow-[0_9px_18px_rgba(0,0,0,0.14)]"
        >
          <MessageSquare className="w-4 h-4 text-[#19c58b] transition-colors group-hover:text-current" />
          <span>Speak With Travel Consultant</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-[3px]" />
        </Link>

      </div>
    </section>
  );
}