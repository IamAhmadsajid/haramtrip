// src/app/umrah-packages/december-umrah/page.tsx
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageDetailCard } from "@/components/umrah-packages/package-detail-card";
import { DecemberSeoContent } from "@/components/umrah-packages/december-seo-content";
import { CtaSection } from "@/components/cta-section";
import { decemberUmrahPackages } from "@/data/december-umrah-packages";
import { Users, CalendarClock, Star } from "lucide-react";

export default function DecemberUmrahPage() {
  const threeStar = decemberUmrahPackages.filter(p => p.category === "3 Star");
  const fourStar = decemberUmrahPackages.filter(p => p.category === "4 Star");
  const fiveStar = decemberUmrahPackages.filter(p => p.category === "5 Star");

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="December Umrah Packages" 
        subtitle="End the year with renewal"
        description="End the year with renewal. Our December Umrah Packages blend comfort, convenience, and calm. With mild weather, shorter queues, and carefully timed departures, you’ll experience Umrah at a slower, more reflective pace."
        image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop"
      >
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <Users className="h-4 w-4 text-brand-secondary" /> 1000+ Happy Pilgrims
        </div>
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <CalendarClock className="h-4 w-4 text-brand-secondary" /> 20+ Years Experience
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

      {/* 4. 3 Star December Packages */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 border-l-4 border-brand-secondary pl-4">
            3 Star December Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/december-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4 Star December Packages */}
      <section className="pb-16 sm:pb-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 border-l-4 border-brand-secondary pl-4">
            4 Star December Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fourStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/december-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. 5 Star December Packages */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 border-l-4 border-brand-secondary pl-4">
            5 Star December Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/december-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Massive SEO Content Section */}
      <DecemberSeoContent />

      {/* 8. CTA */}
      <CtaSection />
    </main>
  );
}