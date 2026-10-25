// src/app/umrah-packages/budget-umrah/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageFilterBar } from "@/components/umrah-packages/package-filter-bar";
import { ramadanUmrahPackages } from "@/data/ramadan-umrah-packages";
import { decemberUmrahPackages } from "@/data/december-umrah-packages";
import { easterUmrahPackages } from "@/data/easter-umrah-packages";

import { Users, CalendarClock, Star } from "lucide-react";

export const metadata = getPageMetadata("/umrah-packages/budget-umrah");

export default function BudgetUmrahPage() {
  // "Budget Friendly" = the 3 Star tier from each season's package range
  const budgetPackages = [
    ...ramadanUmrahPackages.filter((p) => p.category === "3 Star").map((p) => ({ ...p, season: "Ramadan" as const })),
    ...decemberUmrahPackages.filter((p) => p.category === "3 Star").map((p) => ({ ...p, season: "December" as const })),
    ...easterUmrahPackages.filter((p) => p.category === "3 Star").map((p) => ({ ...p, season: "Easter" as const })),
  ];

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader
        title="Budget Friendly Umrah Packages"
        subtitle="Affordable Spiritual Journey"
        description="Embark on a blessed spiritual journey without breaking the bank with our Budget Friendly Umrah Packages from the UK. Certified by ATOL and IATA, Haram Trip ensures comfort and peace of mind with carefully selected hotels, convenient transport, and visa assistance creating a truly seamless and affordable Umrah experience for every pilgrim."
        image="/page-headers-images/Budget Friendly umrah packages.jpg"
      >
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <Users className="h-4 w-4 text-brand-secondary" /> Many Happy Pilgrims
        </div>
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <CalendarClock className="h-4 w-4 text-brand-secondary" /> Many Years Experience
        </div>
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <Star className="h-4 w-4 text-brand-secondary" /> 4.9/5 Rating
        </div>
      </PageHeader>

      {/* 2. Plan Umrah Form Section */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PlanUmrahForm />
        </div>
      </section>

      {/* 3. Filters and Cards Section */}
      <PackageFilterBar
        packages={budgetPackages}
        quickFilters={["All", "Ramadan", "December", "Easter"]}
        filterKey="season"
      />

      {/* 4. SEO Content Section */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Cheap Umrah Packages from the UK
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-[1.8]">
            At Haram Trip, we believe that every Muslim should have the opportunity to perform Umrah regardless of their financial situation. That is why we offer a wide range of cheap Umrah packages tailored to meet the needs of budget-conscious pilgrims. Our affordable Umrah packages do not compromise on quality; we provide comfortable accommodations, reliable transportation, and excellent customer service to ensure your journey is spiritually fulfilling and hassle-free. Whether you are traveling alone, with family, or in a group, we have the perfect package for you. Book your budget Umrah package today and embark on a journey of a lifetime.
          </p>
        </div>
      </section>

  
    </main>
  );
}