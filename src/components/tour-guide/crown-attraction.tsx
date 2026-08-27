// src/components/tour-guide/crown-attraction.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Clock,
  Check,
  MessageCircle,
  Phone,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/site-config";
import { PlanUmrahDialog } from "@/components/home/hero/custom-dialogs/plan-umrah-dialog";

export function CrownAttraction() {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-brand-secondary/20">
            👑 Crown Highlight Attraction
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mt-4">
            Flagship VIP Pilgrimage Experience
          </h2>
        </div>

        {/* Premium Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-border dark:border-white/10 bg-card dark:bg-[#111c30]">

          {/* =========================================================
              LEFT COLUMN — VISUAL & RATING
          ========================================================== */}
          <div className="relative h-[300px] lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200&auto=format&fit=crop"
              alt="Kaaba Cover Complex"
              fill
              priority
              className="object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

            {/* Rating Badge Overlay */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-bold text-white">
                4.98
              </span>
              <span className="text-xs text-white/70">
                (340+ Verified Pilgrims)
              </span>
            </div>

            {/* Bottom Title */}
            <div className="absolute bottom-0 left-0 p-6 lg:p-10 text-white lg:max-w-[80%]">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-2 drop-shadow-lg">
                Kaaba Cover Complex & Two Holy Mosques Exhibition Tour
              </h3>

              <div className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4 text-brand-secondary" />
                Makkah Al-Mukarramah
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN — DETAILS & PRICING
          ========================================================== */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col">

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border dark:border-white/10">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-secondary" />
                Duration: 5 hours
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-foreground">
                £364
              </span>

              <span className="text-sm font-medium text-muted-foreground">
                per person (All Inclusive)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-8">
              Witness the sacred art of crafting the Kiswah (the holy Kaaba
              cover woven from pure silk and gold-plated silver thread) at the
              King Abdulaziz Complex in Makkah. Tour accompanied by an expert
              Islamic historian with private luxury AC transfers, official
              entry permit coordination, and a visit to the Exhibition of Two
              Holy Mosques Architecture housing centuries of rare artifacts
              from Masjid al-Haram and Masjid al-Nabawi.
            </p>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
                Included Perks & Highlights:
              </h4>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Official Entrance Permit & VIP Booking Coordination",
                  "Private Luxury AC SUV / Van Hotel Transfer",
                  "Licenced English Speaking Historian Guide",
                  "Complimentary Zamzam Water & Refreshments",
                  "Exhibition of Two Holy Mosques Architecture Entrance",
                ].map((perk, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-foreground dark:text-white/90"
                  >
                    <span className="w-5 h-5 rounded-full bg-brand-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-secondary" />
                    </span>

                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================================
                CTAs
                ====================================================== */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">

              {/* WhatsApp */}
              <Link
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-foreground text-background dark:bg-brand-secondary dark:text-brand-primary text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-secondary hover:text-brand-primary"
              >
                <MessageCircle className="w-4 h-4" />
                Get Details & Forward to WhatsApp
              </Link>

              {/* Call Advisor → Plan Umrah Dialog */}
              <button
                type="button"
                onClick={() => setConsultOpen(true)}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-transparent border border-border dark:border-white/20 text-foreground dark:text-white text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-muted hover:border-brand-secondary"
              >
                <Phone className="w-4 h-4" />
                Call Advisor
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          PLAN UMRAH DIALOG
          ============================================================ */}
      <PlanUmrahDialog
        open={consultOpen}
        onOpenChange={setConsultOpen}
      />
    </section>
  );
}