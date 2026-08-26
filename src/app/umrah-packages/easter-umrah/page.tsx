// src/app/umrah-packages/easter-umrah/page.tsx
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { PackageDetailCard } from "@/components/umrah-packages/package-detail-card";
import { EasterSeoContent } from "@/components/umrah-packages/easter-seo-content";
import { CtaSection } from "@/components/cta-section";
import { easterUmrahPackages } from "@/data/easter-umrah-packages";
import { Users, CalendarClock, Star } from "lucide-react";

export default function EasterUmrahPage() {
  const threeStar = easterUmrahPackages.filter(p => p.category === "3 Star");
  const fourStar = easterUmrahPackages.filter(p => p.category === "4 Star");
  const fiveStar = easterUmrahPackages.filter(p => p.category === "5 Star");

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="Easter Umrah Packages" 
        subtitle="Transform your spring break"
        description="Transform your spring break into something sacred. Haram Trip Easter Umrah Packages 2026 are ideal for families seeking both rest and reflection. Enjoy luxury stays, guided Ziyarat tours, and flexible travel plans that fit around your routine."
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d201d] mb-6">
            Easter Umrah Packages from UK 2026
          </h2>
          <p className="text-[#4f4a47] text-base sm:text-lg leading-[1.8]">
            At Haram Trip, we offer affordable Easter Umrah Packages that cater to all your spiritual needs. Whether you’re looking for all-inclusive Umrah packages or a tailored experience, we have something for everyone. Our 2026 Easter Umrah packages are designed to make your journey comfortable, with guided tours and all necessary Comforts included. Our Umrah Packages from UK ensure a hassle-free experience from your doorstep to the holy lands.
          </p>
        </div>
      </section>

      {/* 4. 3 Star Easter Packages */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d201d] mb-8 border-l-4 border-brand-secondary pl-4">
            3 Star Easter Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/easter-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4 Star Easter Packages */}
      <section className="pb-16 sm:pb-20 bg-[#f8f5f0] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d201d] mb-8 border-l-4 border-brand-secondary pl-4">
            4 Star Easter Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fourStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/easter-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. 5 Star Easter Packages */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d201d] mb-8 border-l-4 border-brand-secondary pl-4">
            5 Star Easter Umrah Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveStar.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} basePath="/umrah-packages/easter-umrah" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Massive SEO Content Section */}
      <EasterSeoContent />

      {/* 8. CTA */}
      <CtaSection />
    </main>
  );
}