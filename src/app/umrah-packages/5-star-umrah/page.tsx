// src/app/umrah-packages/5-star-umrah/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageDetailCard } from "@/components/umrah-packages/package-detail-card";
import { FiveStarSeoContent } from "@/components/umrah-packages/five-star-seo-content";

import { umrahPackageDetails } from "@/data/umrah-package-details";
import { ramadanUmrahPackages } from "@/data/ramadan-umrah-packages";
import { decemberUmrahPackages } from "@/data/december-umrah-packages";
import { easterUmrahPackages } from "@/data/easter-umrah-packages";

import { Users, CalendarClock, Star } from "lucide-react";

export const metadata = getPageMetadata("/umrah-packages/5-star-umrah");

export default function FiveStarUmrahPage() {
  // Only the 4 genuine (non-seasonal) 5 Star packages appear under the main heading
  const generalFiveStar = umrahPackageDetails.filter(p => p.category === "5 Star");
  // Seasonal 5 Star packages get their own sections further down the page
  const ramadan5Star = ramadanUmrahPackages.filter(p => p.category === "5 Star");
  const december5Star = decemberUmrahPackages.filter(p => p.category === "5 Star");
  const easter5Star = easterUmrahPackages.filter(p => p.category === "5 Star");

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="5 Star Umrah Packages" 
        subtitle="Premium Spiritual Journey"
        description="Embark on a premium spiritual journey with our 5 Star Umrah Packages. Certified by ATOL and IATA, Haram Trip ensures comfort and peace of mind with luxury hotels near Haram, convenient transport, and visa assistance creating a truly seamless and unforgettable Umrah experience for every pilgrim."
        image="/page-headers-images/5 Star Umrah Packages.jpg"
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

      {/* 3. SEO Content */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Explore All Inclusive Umrah Packages 2026
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-[1.8]">
            Let’s delve into the specifics of each Umrah package 2026, so you can make an informed choice based on your budget and desires. We offer 5 Star, 4 Star, and 3 Star Umrah packages Options according to your needs and requirements.
          </p>
        </div>
      </section>

      {/* 4. General 5-Star Cards Grid */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 border-l-4 border-brand-secondary pl-4">
            5 Star Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalFiveStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/5-star-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 5 Star Ramadan Umrah Packages */}
      <section className="pb-16 sm:pb-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 border-l-4 border-brand-secondary pl-4">
            5 Star Ramadan Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ramadan5Star.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/ramadan-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. 5 Star December Umrah Packages */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 border-l-4 border-brand-secondary pl-4">
            5 Star December Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {december5Star.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/december-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. 5 Star Easter Umrah Packages */}
      <section className="pb-16 sm:pb-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 border-l-4 border-brand-secondary pl-4">
            5 Star Easter Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {easter5Star.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/easter-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Massive 5-Star SEO Content Section */}
      <FiveStarSeoContent />


    </main>
  );
}