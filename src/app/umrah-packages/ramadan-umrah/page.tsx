// src/app/umrah-packages/ramadan-umrah/page.tsx
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageFilterBar } from "@/components/umrah-packages/package-filter-bar";
import { RamadanSeoContent } from "@/components/umrah-packages/ramadan-seo-content";
import { ramadanUmrahPackages } from "@/data/ramadan-umrah-packages";
import { Users, CalendarClock, Star } from "lucide-react";

export default function RamadanUmrahPage() {
  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="Ramadan Umrah Packages" 
        subtitle="Make your Ramadan truly meaningful"
        description="Make your Ramadan truly meaningful with Haram Trip Ramadan Umrah Packages 2026. Feel the spirit of the holy month in Makkah and Madinah while enjoying hand-picked hotels near Haram, and trusted guidance throughout."
        image="/page-headers-images/Ramadan Umrah Packages.jpg"
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
            Explore All-Inclusive Ramadan Umrah Packages
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-[1.8]">
            Explore our exclusive Ramadan Umrah Packages with Haram Trip. Whether you’re looking for a peaceful pilgrimage or the best Umrah packages 2026, we offer tailor-made solutions for your spiritual journey. Our Ramadan Umrah packages ensure a fulfilling experience, with comprehensive services including flights, accommodation, and transportation. Book your best Umrah deal today and make your sacred journey seamless and memorable with Haram Trip.
          </p>
        </div>
      </section>

      {/* 4. Filters and Cards Section */}
      <PackageFilterBar
        packages={ramadanUmrahPackages}
        quickFilters={["All", "5 Star", "4 Star", "3 Star"]}
        filterKey="category"
        basePath="/umrah-packages/ramadan-umrah"
      />

      {/* 7. Massive SEO Content Section */}
      <RamadanSeoContent />

    </main>
  );
}