// src/components/home/hero/hero.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Headphones,
  FileCheck2,
  CalendarDays,
  SlidersHorizontal,
  Plane,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlanUmrahDialog } from "@/components/home/hero/custom-dialogs/plan-umrah-dialog";
import { CustomPlanDialog } from "@/components/home/hero/custom-plan/custom-plan-dialog";

const manifestItems = [
  {
    icon: Building2,
    title: "Hotels near the Haram",
    desc: "Accommodation in Makkah and Madinah matched to your budget, comfort and preferred walking distance.",
  },
  {
    icon: Headphones,
    title: "Personal Umrah assistance",
    desc: "A travel team you can call about flights, hotels, transfers, visas and package options.",
  },
  {
    icon: FileCheck2,
    title: "One clear quotation",
    desc: "A single, itemised price covering every flight, hotel, transfer and inclusion — nothing hidden.",
  },
];

// Deterministic bar heights for the ticket's barcode strip
const barcodePattern = Array.from({ length: 34 }, (_, i) => 10 + ((i * 13) % 18));

export function Hero() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [customPlanOpen, setCustomPlanOpen] = useState(false);

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Single signature background device: a flight path from the UK to the Haramain */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.35] dark:opacity-[0.22]"
      >
        <path
          d="M -40 420 Q 380 60 1240 150"
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="2 10"
          strokeLinecap="round"
          className="stroke-brand-secondary"
        />
        <circle cx="-40" cy="420" r="4" className="fill-emerald-700 dark:fill-emerald-500" />
        <circle cx="1240" cy="150" r="4" className="fill-brand-secondary" />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-24">
        {/* ============================================================
            LEFT: EDITORIAL COPY
            ============================================================ */}
        <motion.div
          className="flex flex-col text-left"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Plane className="h-4 w-4 -rotate-45 text-emerald-700 dark:text-emerald-500" />
            <span>London to Makkah &amp; Madinah</span>
          </div>

          <h1 className="mt-4 font-serif font-semibold tracking-[-0.02em] text-foreground">
            <span className="block text-[2.75rem] leading-[1.05] sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem]">
              Meaningful Umrah journeys,
            </span>
            <span className="block text-[2.75rem] leading-[1.05] text-brand-secondary sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem]">
              planned around your comfort.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground sm:text-[1.05rem]">
            Haram Trip arranges affordable, personalised Umrah packages from
            the UK — flights, accommodation and transport chosen and
            confirmed for you before you travel.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <button
              onClick={() => setConsultOpen(true)}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-12 rounded-lg bg-emerald-800 px-6 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(20,116,82,0.16)] transition-all hover:bg-emerald-900 hover:shadow-[0_8px_22px_rgba(20,116,82,0.22)] dark:bg-emerald-700 dark:hover:bg-emerald-600"
              )}
            >
              <CalendarDays className="mr-2 h-[18px] w-[18px]" />
              Plan your Umrah
            </button>

            <button
              onClick={() => setCustomPlanOpen(true)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-lg border border-emerald-700/50 bg-background/80 px-6 text-[15px] font-semibold text-emerald-800 shadow-sm backdrop-blur-sm transition-all hover:bg-muted hover:shadow-md dark:border-emerald-500/50 dark:text-emerald-400 dark:hover:bg-white/10"
              )}
            >
              <SlidersHorizontal className="mr-2 h-[18px] w-[18px]" />
              Build your own package
            </button>
          </div>
        </motion.div>

        {/* ============================================================
            RIGHT: BOARDING-PASS STYLE ITINERARY STUB
            ============================================================ */}
        <motion.div
          className="relative flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-black text-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            {/* stub cutout notches, colour-matched to the page background so they read as die-cut holes */}
            <span className="absolute -left-3 top-[132px] h-6 w-6 rounded-full bg-background" />
            <span className="absolute -right-3 top-[132px] h-6 w-6 rounded-full bg-background" />

            <div className="flex items-start justify-between px-6 pt-6">
              <div>
                <p className="text-[11px] text-white/50">Umrah itinerary</p>
                <p className="mt-0.5 font-serif text-lg font-semibold">Haram Trip</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-white/50">Reference</p>
                <p className="mt-0.5 font-mono text-sm text-brand-secondary">HT-UK-2601</p>
              </div>
            </div>

            <div className="mt-6 flex items-center px-6 text-sm font-semibold">
              <span>LON</span>
              <span className="mx-3 flex-1 border-t border-dashed border-white/25" />
              <Plane className="h-4 w-4 rotate-90 shrink-0 text-brand-secondary" />
              <span className="mx-3 flex-1 border-t border-dashed border-white/25" />
              <span>MAK / MAD</span>
            </div>

            <div className="mt-6 border-t border-dashed border-white/20" />

            <div className="divide-y divide-white/10 px-6">
              {manifestItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="flex gap-4 py-4"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                    <div className="min-w-0">
                      <p className="font-serif text-[15px] font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[12.5px] leading-[1.55] text-white/60">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* barcode strip */}
            <div className="flex h-10 items-end gap-[3px] border-t border-white/10 bg-white/[0.03] px-6 pb-4 pt-3">
              {barcodePattern.map((h, i) => (
                <span
                  key={i}
                  className="w-[2px] bg-white/30"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============================================================
          DIALOGS
          ============================================================ */}

      <PlanUmrahDialog open={consultOpen} onOpenChange={setConsultOpen} />
      <CustomPlanDialog open={customPlanOpen} onOpenChange={setCustomPlanOpen} />
    </section>
  );
}