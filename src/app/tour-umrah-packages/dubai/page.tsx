// src/app/tour-umrah-packages/dubai/page.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { PageHeader } from "@/components/page-header";
import { TourPackageFilters } from "@/components/tour-umrah/tour-package-filters";
import { TourCtaSection } from "@/components/tour-umrah/tour-cta-section";
import { dubaiTourPackages } from "@/data/dubai-tour-packages";
import { BadgeCheck, ShieldCheck } from "lucide-react";

const TourCustomPlanDialog = dynamic(
  () => import("@/components/tour-umrah/tour-custom-plan-dialog").then((mod) => mod.TourCustomPlanDialog),
  { ssr: false }
);

export default function DubaiToursPage() {
  const [customOpen, setCustomOpen] = useState(false);

  return (
    <main>
      {/* 1. Header */}
      <PageHeader 
        title="Umrah + Dubai Stopover Deals" 
        subtitle="Dubai Umrah & Holiday Packages 2026"
        description="Combine your holy Umrah pilgrimage to Makkah & Madinah with an unforgettable holiday stopover in Dubai. All-inclusive packages with 5-Star, 4-Star, and 3-Star hotels, UK flights, visas, and transfers."
        image="/images/tour-umrah/tinified/Dubai.webp"
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

      {/* 3. Filters & Cards */}
      <TourPackageFilters 
        packages={dubaiTourPackages} 
        destinationLabel="Dubai Stay"
        destinationIcon="🏙️"
        onOpenCustomise={() => setCustomOpen(true)} 
      />

      {/* Render Dialog */}
      <TourCustomPlanDialog open={customOpen} onOpenChange={setCustomOpen} />
    </main>
  );
}