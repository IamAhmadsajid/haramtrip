// src/app/tour-umrah-packages/egypt/page.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { PageHeader } from "@/components/page-header";
import { TourPackageFilters } from "@/components/tour-umrah/tour-package-filters";
import { TourCtaSection } from "@/components/tour-umrah/tour-cta-section";
import { egyptTourPackages } from "@/data/egypt-tour-packages";
import { BadgeCheck, ShieldCheck, SlidersHorizontal } from "lucide-react";

const TourCustomPlanDialog = dynamic(
  () => import("@/components/tour-umrah/tour-custom-plan-dialog").then((mod) => mod.TourCustomPlanDialog),
  { ssr: false }
);

export default function EgyptToursPage() {
  const [customOpen, setCustomOpen] = useState(false);

  return (
    <main>
      {/* 1. Header */}
      <PageHeader 
        title="Umrah + Egypt Stopover Deals" 
        subtitle="Egypt Umrah & Holiday Packages 2026"
        description="Combine your spiritual Umrah pilgrimage to Makkah & Madinah with an enriching holiday experience in Cairo & Egypt. All-inclusive 5-Star, 4-Star, and 3-Star hotel options with UK return flights, visas, and transfers included."
        image="/images/tour-umrah/tinified/Egypt.jpg"
      >
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <BadgeCheck className="h-4 w-4 text-brand-secondary" /> Official UK Travel Agency
        </div>
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <ShieldCheck className="h-4 w-4 text-brand-secondary" /> Visas, Flights & Ground Transport Included
        </div>
      </PageHeader>

      {/* 2. Reusable Tour CTA Section */}
      <TourCtaSection onOpenCustomise={() => setCustomOpen(true)} />

      {/* 3. Filters & Cards (Passing Egypt packages, custom tabs, and destination labels) */}
      <TourPackageFilters 
        packages={egyptTourPackages} 
        tabs={["All Packages", "Multi-Country Stopover", "Culture & Heritage"]}
        destinationLabel="Egypt Stay"
        destinationIcon="🏛️"
        onOpenCustomise={() => setCustomOpen(true)}
      />

      {/* Render Dialog */}
      <TourCustomPlanDialog open={customOpen} onOpenChange={setCustomOpen} />
    </main>
  );
}