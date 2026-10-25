// src/components/e-sim/esim-cta.tsx
"use client";

import Link from "next/link";
import { MessageCircle, Phone, QrCode, ShieldCheck, Languages } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function EsimCta() {
  return (
    <section className="bg-background py-12 sm:py-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Green Card Container */}
        {/* The green gradient works beautifully in both light and dark modes */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d5a3e] to-[#16875c] p-6 sm:p-8 lg:p-10 shadow-[0_20px_40px_rgba(13,90,62,0.2)]">
          
          {/* Subtle decorative glow inside the card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN — TEXT & BADGES */}
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Need Custom Data Allowance or Multi-Family eSIMs?
              </h2>
              
              <p className="text-sm sm:text-base leading-[1.6] text-white/85 max-w-2xl mx-auto lg:mx-0">
                Our dedicated UK travel support team is available 24/7 via WhatsApp to assist you with QR code setups, network queries, or bulk orders for your entire family.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-1">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  <QrCode className="w-3.5 h-3.5" /> Instant QR Delivery
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5" /> Secure UK Payment
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  <Languages className="w-3.5 h-3.5" /> Urdu, English Support
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN — CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link 
                href={SITE_CONFIG.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white text-[#16875c] text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90"
              >
                <MessageCircle className="w-4 h-4" />
                Buy or Enquire on WhatsApp
              </Link>
              
              <Link 
                href={SITE_CONFIG.phoneLink}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-transparent border-2 border-white/40 text-white text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:border-white"
              >
                <Phone className="w-4 h-4" />
                Call +44 77 0017 1892
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}