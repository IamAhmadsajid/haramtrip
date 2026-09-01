// src/components/home/hero/hero.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  SlidersHorizontal,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PlanUmrahDialog } from "@/components/home/hero/custom-dialogs/plan-umrah-dialog";
import { CustomPlanDialog } from "@/components/home/hero/custom-plan/custom-plan-dialog";

export function Hero() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [customPlanOpen, setCustomPlanOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border -mt-[88px] pt-[88px]">
        {/* ============================================================
            BACKGROUND IMAGE
            ============================================================ */}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero1.jpg')",
          }}
        />

        {/* ============================================================
            IMAGE DARK OVERLAY
            ============================================================ */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/45"
        />

        {/* ============================================================
            CINEMATIC COLOR SHADOW
            ============================================================ */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/70"
        />

        {/* ============================================================
            SUBTLE GREEN / GOLD TINT
            ============================================================ */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,91,70,0.18),transparent_65%)]"
        />

        {/* ============================================================
            HERO CONTENT

            IMPORTANT:
            This keeps the SAME spacing system as your original hero:
              mobile -> py-14
              sm     -> py-20
              lg     -> py-24

            This is what allows your existing overflowing navbar
            to continue behaving correctly.
            ============================================================ */}

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-20 lg:py-24">
          <motion.div
            className="flex w-full max-w-5xl flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
          >
            {/* ========================================================
                SMALL LABEL
                ======================================================== */}

            <motion.div
              className="mb-5 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >
              <span className="h-px w-8 bg-brand-secondary sm:w-12" />

              <span className="text-[10px] font-bold tracking-[0.3em] text-brand-secondary sm:text-xs">
                HARAM TRIP
              </span>

              <span className="h-px w-8 bg-brand-secondary sm:w-12" />
            </motion.div>

            {/* ========================================================
                MAIN HEADING
                ======================================================== */}

            <motion.h1
              className="font-serif font-semibold tracking-[-0.035em] text-white"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
            >
              <span className="block text-[2.85rem] leading-[0.98] sm:text-5xl lg:text-[4.8rem] xl:text-[5.2rem]">
                Meaningful
              </span>

              <span className="block text-[2.85rem] leading-[0.98] sm:text-5xl lg:text-[4.8rem] xl:text-[5.2rem]">
                Umrah Journeys
              </span>

              <span className="mt-3 block text-[2.7rem] leading-[1.02] text-brand-secondary sm:text-[3.2rem] lg:text-[4.2rem] xl:text-[4.6rem]">
                Planned Around
              </span>

              <span className="block text-[2.7rem] leading-[1.02] text-brand-secondary sm:text-[3.2rem] lg:text-[4.2rem] xl:text-[4.6rem]">
                Your Comfort
              </span>
            </motion.h1>

            {/* ========================================================
                DESCRIPTION
                ======================================================== */}

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/85 sm:mt-7 sm:text-[1.05rem] sm:leading-7"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
            >
              Welcome to{" "}
              <span className="font-semibold text-brand-secondary">
                Haram Trip
              </span>
              . We arrange affordable and personalised Umrah packages from
              the UK with carefully selected flights, accommodation and
              transport.
            </motion.p>

            {/* ========================================================
                CTA BUTTONS
                ======================================================== */}

            <motion.div
              className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
            >
              {/* Plan Your Umrah */}
              <button
                type="button"
                onClick={() => setConsultOpen(true)}
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  }),
                  "h-12 w-full rounded-none bg-emerald-800 px-7 text-[14px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] sm:w-auto"
                )}
              >
                <CalendarDays className="mr-2 h-[18px] w-[18px]" />
                Plan Your Umrah
              </button>

              {/* Create Your Package */}
              <button
                type="button"
                onClick={() => setCustomPlanOpen(true)}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "h-12 w-full rounded-none border-white/80 bg-transparent px-7 text-[14px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-emerald-900 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] sm:w-auto"
                )}
              >
                <SlidersHorizontal className="mr-2 h-[18px] w-[18px]" />
                Create Your Package
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          DIALOGS
          ================================================================ */}

      <PlanUmrahDialog
        open={consultOpen}
        onOpenChange={setConsultOpen}
      />

      <CustomPlanDialog
        open={customPlanOpen}
        onOpenChange={setCustomPlanOpen}
      />
    </>
  );
}