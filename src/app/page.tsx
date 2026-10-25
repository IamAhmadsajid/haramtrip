// src/app/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { Hero } from "@/components/home/hero/hero";
import { FeaturedUmrahPackages } from "@/components/home/featured-umrah-packages/featured-umrah-packages";
import { TravelServices } from "@/components/home/travel-services/travel-services";
import { AboutPreview } from "@/components/home/about-preview";
import { TourUmrahPackages } from "@/components/home/tour-umrah-packages/tour-umrah-packages";
import { ExploreZiyarat } from "@/components/home/explore-ziyarat/explore-ziyarat";
import { TrustpilotReviews } from "@/components/home/trustpilot-reviews/trustpilot-reviews";
import { InstagramSection } from "@/components/home/instagram-section/instagram-section";
import { AtolProtection } from "@/components/home/atol-protection/atol-protection";

import { SpecializedUmrahPackages } from "@/components/home/specialized-umrah-packages/specialized-umrah-packages";
import { GoogleReviews } from "@/components/home/google-reviews/google-reviews";
import { PilgrimTrustCta } from "@/components/home/pilgrim-trust-cta/pilgrim-trust-cta";

export const metadata = getPageMetadata("/");

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. 3D Featured Umrah Packages Sticky Carousel */}
      <FeaturedUmrahPackages />

      {/* 3. Travel Services */}
      <TravelServices />

      {/* 4. NEW: About Us Preview Section */}
      <AboutPreview />

     {/* 5. Tour Umrah Packages */}
      <TourUmrahPackages />

      {/* 6. Explore Sacred Ziyarat Places */}
      <ExploreZiyarat />

      {/* 7. Umrah Packages (Tabs) */}
      {/* <SpecializedUmrahPackages /> */}

      {/* 8. Trust Reviews */}
      <TrustpilotReviews />

      {/* 9. NEW: Instagram Testimonials & CTA */}
      <InstagramSection />

      {/* 10. ATOL Financial Protection */}
      <AtolProtection />

      {/* 11. Google Reviews */}
      {/* <GoogleReviews /> */}

      {/* 12. Pilgrim Trust CTA */}
      {/* <PilgrimTrustCta /> */}
    </main>
  );
}