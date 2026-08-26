// src/app/umrah-packages/page.tsx
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { UmrahPackageTabs } from "@/components/umrah-packages/umrah-package-tabs";
import { UmrahPackagesSEOContent } from "@/components/umrah-packages/umrah-packages-seo-content";

import { CtaSection } from "@/components/cta-section";
import { Users, CalendarClock, Star } from "lucide-react";

export default function UmrahPackagesPage() {
  return (
    <main>
      {/* 1. Page Header with 3 Custom Features */}
      <PageHeader 
        title="Umrah Packages 2026" 
        subtitle="Tailored for Every Pilgrim"
        description="Find the best affordable with all inclusive and cheap Umrah packages 2026 from UK. As a reputable name in the industry, we take pride in presenting our exclusive 3-star, 4-star, and 5-star Umrah packages, carefully designed to cater to your diverse needs and preferences."
        image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop"
      >
        <div className="flex items-center gap-2 text-white text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
          <Users className="h-4 w-4 text-brand-secondary" />
          1000+ Happy Pilgrims
        </div>
        <div className="flex items-center gap-2 text-white text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
          <CalendarClock className="h-4 w-4 text-brand-secondary" />
          20+ Years Experience
        </div>
        <div className="flex items-center gap-2 text-white text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
          <Star className="h-4 w-4 text-brand-secondary" />
          4.9/5 Rating
        </div>
      </PageHeader>

      {/* 2. Plan Umrah Form Section */}
      <section className="py-16 bg-[#f8f5f0] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PlanUmrahForm />
        </div>
      </section>

      {/* 3. SEO Content Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d201d] mb-6">
            Explore All Inclusive Umrah Packages 2026
          </h2>
          <div className="space-y-5 text-[#4f4a47] text-base sm:text-lg leading-[1.8]">
            <p>
              Explore All Inclusive Umrah Packages 2026 and elevate your pilgrimage with our exclusive 5 star Umrah packages UK. Designed for Careful pilgrims, these umrah packages 2026 offer all-inclusive excellence: direct flights from UK, swift visa services, 5-star accommodations overlooking the Grand Mosque, private VIP transfers, and expert-guided tours of sacred sites. Indulge in luxury Umrah packages featuring gourmet halal dining, personalized prayer schedules, and premium iftar experiences during Ramadan.
            </p>
            <p>
              Our Haram Trip umrah packages from UK, including specialized umrah packages Birmingham with seamless local pickups, ensure stress-free journeys from start to finish. Perfect for families or travelers, these 5 star Umrah packages UK from Haram Trip Trusted best comfort, and custom services book your transformative 2026 Umrah with Haram Trip today and step into Truly holy.
            </p>
          </div>
        </div>
      </section>

      {/* 4. NEW: Package Tabs Section */}
      <UmrahPackageTabs />

       {/* 5. NEW: Massive SEO Content Section */}
      <UmrahPackagesSEOContent />

      {/* 6. Reusable CTA */}
      <CtaSection 
        title="Need Help Choosing a Package?"
        description="Our UK travel specialists are available 7 days a week to help you find the perfect package for your family and budget."
      />
    </main>
  );
}