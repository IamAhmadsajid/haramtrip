// src/app/tour-umrah-packages/dubai/page.tsx
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { TourPackageFilters } from "@/components/tour-umrah/tour-package-filters";
import { TourCustomPlanDialog } from "@/components/tour-umrah/tour-custom-plan-dialog";
import { dubaiTourPackages } from "@/data/dubai-tour-packages"; // <-- Import specific data
import { BadgeCheck, ShieldCheck, SlidersHorizontal } from "lucide-react";

export default function DubaiToursPage() {
  const [customOpen, setCustomOpen] = useState(false);

  return (
    <main>
      {/* 1. Header */}
      <PageHeader 
        title="Umrah + Dubai Stopover Deals" 
        subtitle="Dubai Umrah & Holiday Packages 2026"
        description="Combine your holy Umrah pilgrimage to Makkah & Madinah with an unforgettable holiday stopover in Dubai. All-inclusive packages with 5-Star, 4-Star, and 3-Star hotels, UK flights, visas, and transfers."
        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
      >
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <BadgeCheck className="h-4 w-4 text-brand-secondary" /> Official UK Travel Agency
        </div>
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <ShieldCheck className="h-4 w-4 text-brand-secondary" /> Visas, Flights & Ground Transport Included
        </div>
      </PageHeader>

      {/* 2. CTA Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#2d201d] mb-4">Looking for tailored dates or hotels?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Create a custom package tailored for your family, budget, special needs assistance, or multi-country holiday desires.</p>
          <button 
            onClick={() => setCustomOpen(true)}
            className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary rounded-full h-12 px-8 text-sm font-bold shadow-md hover:bg-brand-secondary/90 transition-all"
          >
            <SlidersHorizontal className="h-4 w-4" /> Make Your Customised Plan
          </button>
        </div>
      </section>

      {/* 3. Filters & Cards */}
      <TourPackageFilters 
        packages={dubaiTourPackages} 
        destinationLabel="Dubai Stay"
        destinationIcon="🏙️"
        onOpenCustomise={() => setCustomOpen(true)} // <-- ADD THIS LINE TO ALL 3 PAGES
      />

      {/* Render Dialog at page level too so CTA button works */}
      <TourCustomPlanDialog open={customOpen} onOpenChange={setCustomOpen} />
    </main>
  );
}