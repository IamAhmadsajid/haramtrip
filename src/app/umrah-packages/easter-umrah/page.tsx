// src/app/umrah-packages/easter-umrah/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageFilterBar } from "@/components/umrah-packages/package-filter-bar";
import { EasterSeoContent } from "@/components/umrah-packages/easter-seo-content";
import { easterUmrahPackages } from "@/data/easter-umrah-packages";
import { Users, CalendarClock, Star } from "lucide-react";

export const metadata = getPageMetadata("/umrah-packages/easter-umrah");

export default function EasterUmrahPage() {
  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="Easter Umrah Packages" 
        subtitle="Transform your spring break"
        description="Transform your spring break into something sacred. Haram Trip Easter Umrah Packages 2026 are ideal for families seeking both rest and reflection. Enjoy luxury stays, guided Ziyarat tours, and flexible travel plans that fit around your routine."
        image="/page-headers-images/Easter Umrah Packages.jpg"
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

      {/* 3. SEO Content Intro */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Easter Umrah Packages from UK 2026
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-[1.8]">
            At Haram Trip, we offer affordable Easter Umrah Packages that cater to all your spiritual needs. Whether you’re looking for all-inclusive Umrah packages or a tailored experience, we have something for everyone. Our 2026 Easter Umrah packages are designed to make your journey comfortable, with guided tours and all necessary Comforts included. Our Umrah Packages from UK ensure a hassle-free experience from your doorstep to the holy lands.
          </p>
        </div>
      </section>

      {/* 4. Filters and Cards Section */}
      <PackageFilterBar
        packages={easterUmrahPackages}
        quickFilters={["All", "5 Star", "4 Star", "3 Star"]}
        filterKey="category"
        basePath="/umrah-packages/easter-umrah"
      />

      {/* 7. Massive SEO Content Section */}
      <EasterSeoContent />

    </main>
  );
}