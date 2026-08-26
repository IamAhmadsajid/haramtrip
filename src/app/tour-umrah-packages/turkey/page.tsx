// src/app/tour-umrah-packages/turkey/page.tsx
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { TourPackageFilters } from "@/components/tour-umrah/tour-package-filters";
import { TourCustomPlanDialog } from "@/components/tour-umrah/tour-custom-plan-dialog";
import { TourCtaSection } from "@/components/tour-umrah/tour-cta-section";
import { turkeyTourPackages } from "@/data/turkey-tour-packages";
import { BadgeCheck, ShieldCheck, SlidersHorizontal } from "lucide-react";

export default function TurkeyToursPage() {
  const [customOpen, setCustomOpen] = useState(false);

  return (
    <main>
      {/* 1. Header */}
      <PageHeader 
        title="Umrah + Turkey Stopover Deals" 
        subtitle="Turkey Umrah & Holiday Packages 2026"
        description="Combine your sacred Umrah journey to Makkah & Madinah with an enriching holiday experience in historic Istanbul, Turkey. All-inclusive 5-Star, 4-Star, and 3-Star options with UK flights, visas, and transfers included."
        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
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

      {/* 3. Filters & Cards (Passing Turkey packages and destination labels) */}
      <TourPackageFilters 
        packages={turkeyTourPackages} 
        destinationLabel="Turkey Stay"
        destinationIcon="🇹🇷"
        onOpenCustomise={() => setCustomOpen(true)}
      />

      {/* Render Dialog */}
      <TourCustomPlanDialog open={customOpen} onOpenChange={setCustomOpen} />
    </main>
  );
}