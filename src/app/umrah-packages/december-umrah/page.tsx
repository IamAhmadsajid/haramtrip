// src/app/umrah-packages/december-umrah/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageFilterBar } from "@/components/umrah-packages/package-filter-bar";
import { DecemberSeoContent } from "@/components/umrah-packages/december-seo-content";
import { decemberUmrahPackages } from "@/data/december-umrah-packages";
import { Users, CalendarClock, Star } from "lucide-react";

export const metadata = getPageMetadata("/umrah-packages/december-umrah");

export default function DecemberUmrahPage() {
  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="December Umrah Packages" 
        subtitle="End the year with renewal"
        description="End the year with renewal. Our December Umrah Packages blend comfort, convenience, and calm. With mild weather, shorter queues, and carefully timed departures, you’ll experience Umrah at a slower, more reflective pace."
        image="/page-headers-images/December umrah packages.jpg"
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
            Best December Umrah Packages 2026
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-[1.8]">
            Haram Trip offers exceptional umrah packages tailored to make your spiritual journey seamless and memorable. Our 5 star umrah packages UK provide top-notch accommodations, guided tours, and hassle-free transport, ensuring your comfort throughout the trip. For pilgrims traveling from the UK, we have exclusive umrah packages from UK with flexible dates and affordable rates. December is a perfect month to perform Umrah, and with Haram Trip, you can enjoy a stress-free journey with all arrangements managed professionally. Don’t miss the opportunity to embark on a spiritually enriching trip with our carefully curated December Umrah 2026 offerings.
          </p>
        </div>
      </section>

      {/* 4. Filters and Cards Section */}
      <PackageFilterBar
        packages={decemberUmrahPackages}
        quickFilters={["All", "5 Star", "4 Star", "3 Star"]}
        filterKey="category"
        basePath="/umrah-packages/december-umrah"
      />

      {/* 7. Massive SEO Content Section */}
      <DecemberSeoContent />

    </main>
  );
}