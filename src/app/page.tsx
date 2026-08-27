// src/app/page.tsx
import { Hero } from "@/components/home/hero/hero";
import { TravelServices } from "@/components/home/travel-services/travel-services";
import { AboutPreview } from "@/components/home/about-preview";
import { FeaturedUmrahPackages } from "@/components/home/featured-umrah-packages/featured-umrah-packages";
import { UmrahPackages } from "@/components/home/umrah-packages/umrah-packages";
import { TourUmrahPackages } from "@/components/home/tour-umrah-packages/tour-umrah-packages";
import { TrustpilotReviews } from "@/components/home/trustpilot-reviews/trustpilot-reviews";
import { InstagramSection } from "@/components/home/instagram-section/instagram-section";
import { AtolProtection } from "@/components/home/atol-protection/atol-protection";
import { GoogleReviews } from "@/components/home/google-reviews/google-reviews";
import { PilgrimTrustCta } from "@/components/home/pilgrim-trust-cta/pilgrim-trust-cta";


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

      {/* 6. Umrah Packages (Tabs) */}
      <UmrahPackages />

      {/* 7. Trust Reviews */}
      <TrustpilotReviews />

      {/* 8. NEW: Instagram Testimonials & CTA */}
      <InstagramSection />

      {/* 9. ATOL Financial Protection */}
      <AtolProtection />

      {/* 10. Google Reviews */}
      {/* <GoogleReviews /> */}

      {/* 11. Pilgrim Trust CTA */}
      {/* <PilgrimTrustCta /> */}
    </main>
  );
}