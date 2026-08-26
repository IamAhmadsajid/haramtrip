// src/app/umrah-packages/ramadan-umrah/page.tsx
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageDetailCard } from "@/components/umrah-packages/package-detail-card";
import { RamadanSeoContent } from "@/components/umrah-packages/ramadan-seo-content";
import { CtaSection } from "@/components/cta-section";
import { ramadanUmrahPackages } from "@/data/ramadan-umrah-packages";
import { Users, CalendarClock, Star } from "lucide-react";

export default function RamadanUmrahPage() {
  // Filter packages by category for the 3 separate grids
  const threeStar = ramadanUmrahPackages.filter(p => p.category === "3 Star");
  const fourStar = ramadanUmrahPackages.filter(p => p.category === "4 Star");
  const fiveStar = ramadanUmrahPackages.filter(p => p.category === "5 Star");

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="Ramadan Umrah Packages" 
        subtitle="Make your Ramadan truly meaningful"
        description="Make your Ramadan truly meaningful with Haram Trip Ramadan Umrah Packages 2026. Feel the spirit of the holy month in Makkah and Madinah while enjoying hand-picked hotels near Haram, and trusted guidance throughout."
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

      {/* 2. Plan Umrah Form */}
      <section className="py-16 bg-[#f8f5f0] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PlanUmrahForm />
        </div>
      </section>

      {/* 3. SEO Content Intro */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d201d] mb-6">
            Explore All-Inclusive Ramadan Umrah Packages
          </h2>
          <p className="text-[#4f4a47] text-base sm:text-lg leading-[1.8]">
            Explore our exclusive Ramadan Umrah Packages with Haram Trip. Whether you’re looking for a peaceful pilgrimage or the best Umrah packages 2026, we offer tailor-made solutions for your spiritual journey. Our Ramadan Umrah packages ensure a fulfilling experience, with comprehensive services including flights, accommodation, and transportation. Book your best Umrah deal today and make your sacred journey seamless and memorable with Haram Trip.
          </p>
        </div>
      </section>

      {/* 4. 3 Star Ramadan Packages */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d201d] mb-8 border-l-4 border-brand-secondary pl-4">
            3 Star Ramadan Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/ramadan-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4 Star Ramadan Packages */}
      <section className="pb-16 sm:pb-20 bg-[#f8f5f0] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d201d] mb-8 border-l-4 border-brand-secondary pl-4">
            4 Star Ramadan Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fourStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/ramadan-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. 5 Star Ramadan Packages */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d201d] mb-8 border-l-4 border-brand-secondary pl-4">
            5 Star Ramadan Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/ramadan-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Massive SEO Content Section */}
      <RamadanSeoContent />

      {/* 8. CTA */}
      <CtaSection />
    </main>
  );
}