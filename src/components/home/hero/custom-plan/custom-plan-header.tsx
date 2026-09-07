// src/components/custom-plan/custom-plan-header.tsx
"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { SITE_CONFIG } from "@/lib/site-config";

interface CustomPlanHeaderProps {
  onClose: () => void;
}

export function CustomPlanHeader({
  onClose,
}: CustomPlanHeaderProps) {
  return (
    <div
      className="
        shrink-0
        bg-background
        dark:bg-brand-primary
        text-foreground
        dark:text-white
        border-b
        border-border
        dark:border-white/10
        px-5
        pb-5
        pt-5
        sm:px-7
        sm:pb-6
        sm:pt-6
      "
    >
      {/* ======================================================
          Brand + Close Button
      ====================================================== */}
      <div className="flex items-start justify-between gap-4">
        {/* Brand */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Logo */}
          <div
            className="
              relative
              h-[58px]
              w-[58px]
              shrink-0
              overflow-hidden
              rounded-full
              bg-white
              ring-1
              ring-border
              dark:ring-brand-secondary/70
              sm:h-[66px]
              sm:w-[66px]
            "
          >
            <Image
              src="/haramtrip-logo2.png"
              alt={`${SITE_CONFIG.name} logo`}
              fill
              sizes="66px"
              className="object-contain p-1"
              priority
            />
          </div>

          {/* Brand Text */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="
                  font-serif
                  text-[20px]
                  font-bold
                  leading-tight
                  text-foreground
                  dark:text-white
                  sm:text-[22px]
                "
              >
                Haram Trip
              </span>

              <span
                className="
                  rounded
                  bg-brand-secondary
                  px-1.5
                  py-0.5
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-wide
                  text-brand-primary
                  sm:text-[10px]
                "
              >
                TRAVEL
              </span>
            </div>

            <p
              className="
                mt-0.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-muted-foreground
                dark:text-white/75
                sm:text-[10px]
              "
            >
              SPIRITUAL &amp; LUXURY JOURNEYS
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close custom plan"
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-muted
            dark:bg-white/10
            text-muted-foreground
            dark:text-white/80
            transition
            hover:bg-muted-foreground/20
            dark:hover:bg-white/20
            hover:text-foreground
            dark:hover:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-brand-secondary
            sm:h-10
            sm:w-10
          "
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* ======================================================
          Custom Plan Heading
      ====================================================== */}
      <div className="mt-4 sm:mt-5">
        <h2
          id="custom-plan-dialog-title"
          className="
            font-serif
            text-[25px]
            font-bold
            leading-tight
            text-foreground
            dark:text-white
            sm:text-[28px]
          "
        >
          Customise Your Sacred Plan
        </h2>

        <p className="mt-1 text-[11px] leading-4 text-muted-foreground dark:text-white/75 sm:text-xs">
          Tell us your travel preferences and our London specialists
          will craft a personalised itinerary.
        </p>
      </div>
    </div>
  );
}