// src/app/page.tsx
import { Hero } from "@/components/home/hero/hero";
import { TravelServices } from "@/components/home/travel-services/travel-services";
import { UmrahPackages } from "@/components/home/umrah-packages/umrah-packages";
import { TourUmrahPackages } from "@/components/home/tour-umrah-packages/tour-umrah-packages";
import { GoogleReviews } from "@/components/home/google-reviews/google-reviews";
import { TrustpilotReviews } from "@/components/home/trustpilot-reviews/trustpilot-reviews";
import { PilgrimTrustCta } from "@/components/home/pilgrim-trust-cta/pilgrim-trust-cta";
import { AtolProtection } from "@/components/home/atol-protection/atol-protection";


import { PackageCard } from "@/components/package-card";
import packagesData from "@/data/packages.json";
import Link from "next/link";
import { Plane, ShieldCheck, Sparkles } from "lucide-react";
import type { Package } from "@/lib/types";

const packages = packagesData as Package[];
const featuredPackages = packages.slice(0, 3);

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section (Now pulled behind the navbar) */}
      <Hero />

      {/* 2. Travel Services */}
      <TravelServices />

      {/* 3. Umrah Packages */}
      <UmrahPackages />

      {/* 4 Tour Umrah Packages */}
      <TourUmrahPackages />

      {/* 5 Google Reviews */}
      <GoogleReviews />

      {/* 6 Trust Reviews */}
      <TrustpilotReviews />

      {/* 7 Pilgram Trust CTA */}
     <PilgrimTrustCta />

      {/* 8. ATOL Financial Protection */}
      <AtolProtection />

    </main>
  );
}