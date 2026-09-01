
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
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlanUmrahDialog } from "@/components/home/hero/custom-dialogs/plan-umrah-dialog";
import { CustomPlanDialog } from "@/components/home/hero/custom-plan/custom-plan-dialog";

const features = [
  {
    icon: Building2,
    eyebrow: "CONVENIENT LOCATIONS",
    title: "Hotels Near the Haram",
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
          PREMIUM BACKGROUND
          ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main warm glow */}
        <div
          className="absolute left-[-15%] top-[15%] h-[520px] w-[520px] rounded-full blur-3xl dark:opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(238,201,113,0.16) 0%, rgba(238,201,113,0) 70%)",
          }}
        />

        {/* Green glow behind visual */}
        <div
          className="absolute right-[-10%] top-[5%] h-[650px] w-[650px] rounded-full blur-3xl dark:opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(32,91,70,0.14) 0%, rgba(32,91,70,0) 70%)",
          }}
        />

        {/* Subtle vertical light */}
        <div
          className="absolute inset-x-0 top-0 h-[45%] opacity-50"
          style={{
            background:
              "linear-gradient(to bottom, rgba(238,201,113,0.045), transparent)",
          }}
        />
      </div>

      {/* ============================================================
          DECORATIVE ORBIT
          ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[240px] top-[-260px] h-[650px] w-[650px] rounded-full border border-brand-secondary/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[190px] top-[-210px] h-[550px] w-[550px] rounded-full border border-brand-secondary/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[130px] top-[-150px] h-[430px] w-[430px] rounded-full border border-brand-secondary/10"
      />

      {/* ============================================================
          HERO CONTENT
          ============================================================ */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:py-24 xl:gap-16">
        {/* ============================================================
            LEFT — EDITORIAL CONTENT
            ============================================================ */}

        <motion.div
          className="relative flex flex-col text-center lg:text-left"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Small visual marker */}
          <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-brand-secondary" />
            <span className="text-[10px] font-bold tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
              HARAM TRIP
            </span>
            <span className="h-px w-8 bg-brand-secondary lg:hidden" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif font-semibold tracking-[-0.035em]">
            <span className="block text-[2.85rem] leading-[0.98] text-foreground sm:text-5xl lg:text-[3.55rem] xl:text-[4.05rem]">
              Meaningful
            </span>

            <span className="block text-[2.85rem] leading-[0.98] text-foreground sm:text-5xl lg:text-[3.55rem] xl:text-[4.05rem]">
              Umrah Journeys
            </span>

            <span className="mt-3 block text-[2.7rem] leading-[1.02] text-brand-secondary sm:text-[3.2rem] lg:text-[3.45rem] xl:text-[3.75rem]">
              Planned Around
            </span>

            <span className="block text-[2.7rem] leading-[1.02] text-brand-secondary sm:text-[3.2rem] lg:text-[3.45rem] xl:text-[3.75rem]">
              Your Comfort
            </span>
          </h1>

          {/* Introductory Text */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-[1.05rem] lg:mx-0 lg:mt-7">
            Welcome to{" "}
            <span className="font-semibold text-emerald-700 dark:text-emerald-500">
              Haram Trip
            </span>
            . We arrange affordable and personalised Umrah packages from the
            UK with carefully selected flights, accommodation and transport.
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
                "h-12 rounded-lg bg-emerald-800 px-6 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(20,116,82,0.16)] transition-all hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-[0_12px_28px_rgba(20,116,82,0.22)] dark:bg-emerald-700 dark:hover:bg-emerald-600"
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
                "h-12 rounded-lg border border-emerald-700/40 bg-background/70 px-6 text-[15px] font-semibold text-emerald-800 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-md dark:border-emerald-500/40 dark:bg-white/[0.03] dark:text-emerald-400 dark:hover:bg-white/10"
              )}
            >
              <SlidersHorizontal className="mr-2 h-[18px] w-[18px]" />
              Create Your Package
            </button>
          </div>
        </motion.div>

        {/* ============================================================
            RIGHT — NEW JOURNEY VISUAL
            ============================================================ */}

        <motion.div
          className="relative min-h-[520px] sm:min-h-[580px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          {/* ========================================================
              LARGE CENTRAL VISUAL
              ======================================================== */}

          <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 sm:h-[470px] sm:w-[470px]">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-brand-secondary/20"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner ring */}
            <motion.div
              className="absolute inset-[38px] rounded-full border border-emerald-800/10 dark:border-emerald-400/10"
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Soft center */}
            <div className="absolute inset-[70px] rounded-full bg-gradient-to-br from-brand-secondary/10 via-background to-emerald-900/[0.06] shadow-[0_30px_100px_rgba(32,91,70,0.10)] dark:from-brand-secondary/10 dark:to-emerald-400/[0.04]" />

            {/* Center architectural shape */}
            <div className="absolute left-1/2 top-1/2 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[170px] sm:w-[170px]">
              <div className="absolute inset-0 rounded-full bg-brand-secondary/10 blur-2xl" />

              <div className="relative flex h-[105px] w-[105px] flex-col items-center justify-center rounded-[28px] border border-brand-secondary/30 bg-background/90 shadow-[0_20px_50px_rgba(43,51,44,0.12)] backdrop-blur-xl sm:h-[125px] sm:w-[125px]">
                {/* Kaaba-inspired architectural mark */}
                <div className="relative h-[48px] w-[48px] rounded-[5px] bg-emerald-900 shadow-lg dark:bg-emerald-800 sm:h-[56px] sm:w-[56px]">
                  <div className="absolute left-0 right-0 top-[13px] h-[4px] bg-brand-secondary sm:top-[16px]" />
                  <div className="absolute left-[8px] right-[8px] top-[24px] h-px bg-white/20 sm:top-[29px]" />
                  <div className="absolute bottom-0 left-0 h-[13px] w-full bg-black/10 sm:h-[15px]" />
                </div>

                <div className="mt-2 flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-secondary" />
                  <span className="h-px w-5 bg-border" />
                  <span className="h-1 w-1 rounded-full bg-brand-secondary" />
                </div>
              </div>
            </div>

            {/* Orbit marker */}
            <motion.div
              className="absolute left-[9%] top-[26%] h-3 w-3 rounded-full bg-brand-secondary shadow-[0_0_0_6px_rgba(238,201,113,0.10)]"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-[18%] right-[10%] h-2.5 w-2.5 rounded-full bg-emerald-700 shadow-[0_0_0_6px_rgba(32,91,70,0.08)] dark:bg-emerald-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
          </div>

          {/* ========================================================
              TOP FLOATING CARD
              ======================================================== */}

          <motion.div
            className="absolute right-0 top-4 w-[245px] rounded-2xl border border-border bg-background/90 p-4 shadow-[0_20px_50px_rgba(43,51,44,0.10)] backdrop-blur-xl sm:right-2 sm:w-[275px]"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground dark:bg-white/10">
                <Building2 className="h-5 w-5" strokeWidth={1.6} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-bold tracking-[0.1em] text-emerald-700 dark:text-emerald-500">
                  {features[0].eyebrow}
                </p>

                <h2 className="mt-1 font-serif text-[1.05rem] font-semibold leading-tight text-foreground">
                  {features[0].title}
                </h2>
              </div>

              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </div>
          </motion.div>

          {/* ========================================================
              LEFT FLOATING CARD
              ======================================================== */}

          <motion.div
            className="absolute left-0 top-[175px] w-[250px] rounded-2xl border border-border bg-background/90 p-4 shadow-[0_20px_50px_rgba(43,51,44,0.10)] backdrop-blur-xl sm:left-[-15px] sm:w-[285px]"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground dark:bg-white/10">
                <Headphones className="h-5 w-5" strokeWidth={1.6} />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-bold tracking-[0.1em] text-emerald-700 dark:text-emerald-500">
                  {features[1].eyebrow}
                </p>

                <h2 className="mt-1 font-serif text-[1.05rem] font-semibold leading-tight text-foreground">
                  {features[1].title}
                </h2>

                <p className="mt-1.5 line-clamp-2 text-[11px] leading-[1.5] text-muted-foreground">
                  {features[1].desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              BOTTOM FLOATING CARD
              ======================================================== */}

          <motion.div
            className="absolute bottom-5 right-0 w-[270px] rounded-2xl border border-brand-secondary/25 bg-background/95 p-4 shadow-[0_25px_55px_rgba(43,51,44,0.12)] backdrop-blur-xl sm:right-[-5px] sm:w-[300px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/15 text-emerald-800 dark:text-brand-secondary">
                <FileCheck2 className="h-5 w-5" strokeWidth={1.6} />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-bold tracking-[0.1em] text-emerald-700 dark:text-emerald-500">
                  {features[2].eyebrow}
                </p>

                <h2 className="mt-1 font-serif text-[1.05rem] font-semibold leading-tight text-foreground">
                  {features[2].title}
                </h2>

                <p className="mt-1.5 line-clamp-2 text-[11px] leading-[1.5] text-muted-foreground">
                  {features[2].desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              MAP PIN DECORATION
              ======================================================== */}

          <motion.div
            className="absolute bottom-[115px] left-[18%] hidden h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/30 bg-background/90 shadow-lg backdrop-blur-md sm:flex"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MapPin className="h-4 w-4 text-brand-secondary" />
          </motion.div>
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