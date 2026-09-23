// src/components/floating-actions.tsx
"use client";

import { SlidersHorizontal } from "lucide-react";

import { CustomPlanDialog } from "@/components/home/hero/custom-plan/custom-plan-dialog";
import { useState } from "react";

export function FloatingActions() {
  const [customPlanOpen, setCustomPlanOpen] = useState(false);

  return (
    <>
      {/* ============================================================
          DESKTOP / TABLET FLOATING ACTIONS (BOTTOM LEFT)
          ============================================================ */}

      <div className="fixed bottom-12 left-6 z-[90] hidden sm:flex">
        {/* CUSTOMIZE PACKAGES */}
        <button
          type="button"
          onClick={() => setCustomPlanOpen(true)}
          aria-label="Customize your Umrah package"
          className="group flex items-center gap-3 rounded-full border border-border bg-background/95 py-2 pl-2 pr-4 text-sm font-semibold text-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-brand-primary/95 dark:text-white"
        >
          {/* Green circular icon */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-brand-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-secondary/90">
            <SlidersHorizontal className="h-[18px] w-[18px]" />
          </span>

          {/* Button title */}
          <span className="whitespace-nowrap">
            Customize Packages
          </span>

          {/* Green notification dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
        </button>
      </div>

      {/* ============================================================
          MOBILE FLOATING ACTIONS (BOTTOM LEFT)
          ============================================================ */}

      <div className="fixed bottom-5 left-5 z-[90] flex sm:hidden">
        {/* CUSTOMIZE PACKAGES */}
        <button
          type="button"
          onClick={() => setCustomPlanOpen(true)}
          aria-label="Customize your Umrah package"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-all hover:scale-105 dark:bg-brand-primary dark:text-white"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
            {/* Green notification dot */}
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background dark:ring-brand-primary" />

            <SlidersHorizontal className="h-5 w-5" />
          </span>
        </button>
      </div>

      {/* CUSTOM PLAN DIALOG */}
      <CustomPlanDialog
        open={customPlanOpen}
        onOpenChange={setCustomPlanOpen}
      />
    </>
  );
}