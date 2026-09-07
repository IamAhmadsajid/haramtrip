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

  // IMPORTANT: Replace this with your actual YouTube video ID
  const videoId = "w5phwa3WZDA"; 

  return (
    <>
      <section 
        className="relative overflow-hidden border-b border-border -mt-[88px] pt-[88px]"
        style={{
          // Fallback image while video loads or if it fails
          backgroundImage: "url('/images/hero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >



        {/* ============================================================
            YOUTUBE BACKGROUND VIDEO
            ============================================================ */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.78vh]"
            // Added enablejsapi=1, origin, and cc_load_policy=0 to match reference site
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&origin=https://staging.haramtrip.co.uk`}
            title="Haram Trip Background Video"
            frameBorder="0"
            // Expanded allow attributes to match reference site exactly
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>



                {/* ============================================================
            HTML5 BACKGROUND VIDEO (Self-Hosted)
            ============================================================ */}
        {/* <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero1.jpg" // Backup image while video loads
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div> */}



        {/* ============================================================
            OVERLAYS (Kept exactly the same for text readability)
            ============================================================ */}

        {/* Base Dark Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/45"
        />

        {/* Cinematic Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/70"
        />

        {/* Subtle Green / Gold Tint */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,91,70,0.18),transparent_65%)]"
        />

        {/* ============================================================
            HERO CONTENT
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