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
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlanUmrahDialog } from "@/components/home/hero/custom-dialogs/plan-umrah-dialog";
import { CustomPlanDialog } from "@/components/home/hero/custom-plan/custom-plan-dialog";

const features = [
  {
    icon: Building2,
    eyebrow: "CONVENIENT LOCATIONS",
    title: "Hotels Near the Haramain",
    desc: "Choose suitable accommodation in Makkah and Madinah based on your budget, comfort and preferred walking distance.",
  },
  {
    icon: Headphones,
    eyebrow: "PERSONALISED SUPPORT",
    title: "Helpful Umrah Assistance",
    desc: "Our friendly travel team helps you understand your flights, hotels, transfers, visa support and package options.",
  },
  {
    icon: FileCheck2,
    eyebrow: "CLEAR QUOTATIONS",
    title: "Travel With Confidence",
    desc: "Receive a detailed quotation explaining your proposed flights, hotels, transport, inclusions and total package price.",
  },
];

export function Hero() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [customPlanOpen, setCustomPlanOpen] = useState(false);

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* ============================================================
          BACKGROUND DECORATION
          ============================================================ */}

      {/* Soft warm background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 dark:opacity-60"
        style={{
          background: `
            radial-gradient(
              circle at 22% 48%,
              rgba(238, 201, 113, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 42%,
              rgba(238, 201, 113, 0.10),
              transparent 30%
            )
          `,
        }}
      />

      {/* Subtle dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.16] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(32, 91, 70, 0.45) 1px, transparent 1.5px)",
          backgroundSize: "34px 34px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* ============================================================
          DECORATIVE CORNER CURVES
          ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-20 z-0 h-72 w-72 rounded-full border border-brand-secondary/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 -top-28 z-0 h-80 w-80 rounded-full border border-brand-secondary/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-20 z-0 h-80 w-80 rounded-full border border-brand-secondary/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 z-0 h-96 w-96 rounded-full border border-brand-secondary/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 z-0 h-96 w-96 rounded-full border border-brand-secondary/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-28 z-0 h-[420px] w-[420px] rounded-full border border-brand-secondary/10"
      />

      {/* ============================================================
          DECORATIVE STARS
          ============================================================ */}

      <span aria-hidden="true" className="absolute left-[3%] top-[21%] z-0 text-2xl text-brand-secondary">
        ✦
      </span>

      <span aria-hidden="true" className="absolute left-[43%] top-[9%] z-0 text-xl text-emerald-700 dark:text-emerald-500">
        ✦
      </span>

      <span aria-hidden="true" className="absolute left-[47%] top-[39%] z-0 text-2xl text-brand-secondary">
        ✦
      </span>

      <span aria-hidden="true" className="absolute right-[3%] top-[25%] z-0 text-xl text-emerald-700 dark:text-emerald-500">
        ✦
      </span>

      <span aria-hidden="true" className="absolute right-[2%] top-[9%] z-0 text-2xl text-brand-secondary">
        ✦
      </span>

      <span aria-hidden="true" className="absolute left-[34%] bottom-[10%] z-0 text-xl text-emerald-700 dark:text-emerald-500">
        ✦
      </span>

      <span aria-hidden="true" className="absolute right-[18%] bottom-[8%] z-0 text-xl text-emerald-700 dark:text-emerald-500">
        ✦
      </span>

      {/* ============================================================
          HERO CONTENT
          ============================================================ */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-24">
        {/* ============================================================
            LEFT CONTENT
            ============================================================ */}

        <motion.div
          className="flex flex-col text-center lg:text-left"
          initial={{ opacity: 1, x: -20 }} // Changed opacity to 1
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <h1 className="font-serif font-semibold tracking-[-0.025em]">
            <span className="block text-[2.9rem] leading-[0.98] text-foreground sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]">
              Meaningful
            </span>

            <span className="block text-[2.9rem] leading-[0.98] text-foreground sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]">
              Umrah Journeys
            </span>

            <span className="mt-3 block text-[2.75rem] leading-[1.02] text-brand-secondary sm:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.8rem]">
              Planned Around
            </span>

            <span className="block text-[2.75rem] leading-[1.02] text-brand-secondary sm:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.8rem]">
              Your Comfort
            </span>
          </h1>

          {/* Introductory Text */}
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-[1.05rem] lg:mt-7">
            Welcome to{" "}
            <span className="font-semibold text-emerald-700 dark:text-emerald-500">Haram Trip</span>.
            We arrange affordable and personalised Umrah packages from the UK
            with carefully selected flights, accommodation and transport.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:mt-8 lg:justify-start">
            <button
              onClick={() => setConsultOpen(true)}
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
                "h-12 rounded-lg bg-emerald-800 dark:bg-emerald-700 px-6 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(20,116,82,0.16)] transition-all hover:bg-emerald-900 dark:hover:bg-emerald-600 hover:shadow-[0_8px_22px_rgba(20,116,82,0.22)]"
              )}
            >
              <CalendarDays className="mr-2 h-[18px] w-[18px]" />
              Plan Your Umrah
            </button>

            <button
              onClick={() => setCustomPlanOpen(true)}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "h-12 rounded-lg border border-emerald-700/50 dark:border-emerald-500/50 bg-background/80 px-6 text-[15px] font-semibold text-emerald-800 dark:text-emerald-400 shadow-sm backdrop-blur-sm transition-all hover:bg-muted dark:hover:bg-white/10 hover:shadow-md"
              )}
            >
              <SlidersHorizontal className="mr-2 h-[18px] w-[18px]" />
              Create Your Package
            </button>
          </div>
        </motion.div>

        {/* ============================================================
            RIGHT FEATURE CARDS
            ============================================================ */}

        <motion.div
          className="flex flex-col gap-4 lg:gap-5"
          initial={{ opacity: 1, x: 25 }} // Changed opacity to 1
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.12,
            ease: "easeOut",
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 14px 30px rgba(48, 58, 48, 0.10)",
                }}
                className="group flex min-h-[125px] items-center gap-5 rounded-2xl border border-border bg-card/95 px-5 py-5 shadow-[0_7px_22px_rgba(43,51,44,0.07)] backdrop-blur-sm transition-all dark:bg-white/5 dark:border-white/10 sm:px-6"
              >
                {/* Icon Circle */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted dark:bg-white/10 text-foreground transition-all duration-300 group-hover:bg-muted-foreground/10 dark:group-hover:bg-white/20 group-hover:scale-105 sm:h-[60px] sm:w-[60px]">
                  <Icon className="h-7 w-7 stroke-[1.5]" />
                </div>

                {/* Card Content */}
                <div className="min-w-0">
                  <p className="font-sans text-[10px] font-bold tracking-[0.045em] text-emerald-700 dark:text-emerald-500 sm:text-[11px]">
                    {feature.eyebrow}
                  </p>

                  <h2 className="mt-1 font-serif text-[1.25rem] font-semibold leading-tight text-foreground sm:text-[1.4rem]">
                    {feature.title}
                  </h2>

                  <p className="mt-1.5 max-w-lg font-sans text-[12px] leading-[1.55] text-muted-foreground sm:text-[13px]">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ============================================================
          DIALOGS
          ============================================================ */}

      <PlanUmrahDialog
        open={consultOpen}
        onOpenChange={setConsultOpen}
      />

      <CustomPlanDialog
        open={customPlanOpen}
        onOpenChange={setCustomPlanOpen}
      />
    </section>
  );
}