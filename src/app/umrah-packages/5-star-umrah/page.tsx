// src/app/umrah-packages/5-star-umrah/page.tsx
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageDetailCard } from "@/components/umrah-packages/package-detail-card";
import { FiveStarSeoContent } from "@/components/umrah-packages/five-star-seo-content";

import { CtaSection } from "@/components/cta-section";
import { fiveStarUmrahPackages } from "@/data/five-star-umrah-packages";
import { Users, CalendarClock, Star } from "lucide-react";

export default function FiveStarUmrahPage() {
  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="5 Star Umrah Packages" 
        subtitle="Premium Spiritual Journey"
        description="Embark on a premium spiritual journey with our 5 Star Umrah Packages from the UK. Certified by ATOL and IATA, Haram Trip ensures comfort and peace of mind with luxury hotels near Haram, convenient transport, and visa assistance creating a truly seamless and unforgettable Umrah experience for every pilgrim."
        image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop"
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d201d] mb-6">
            Explore All Inclusive Umrah Packages 2026
          </h2>
          <p className="text-[#4f4a47] text-base sm:text-lg leading-[1.8]">
            Let’s delve into the specifics of each Umrah package 2026, so you can make an informed choice based on your budget and desires. We offer 5 Star, 4 Star, and 3 Star Umrah packages Options according to your needs and requirements.
          </p>
        </div>
      </section>

      {/* 4. 5-Star Cards Grid */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveStarUmrahPackages.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/5-star-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEW: Massive 5-Star SEO Content Section */}
      <FiveStarSeoContent />

      {/* 5. CTA */}
      <CtaSection />
    </main>
  );
}