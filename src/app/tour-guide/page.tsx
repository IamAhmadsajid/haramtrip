// src/app/tour-guide/page.tsx
import { PageHeader } from "@/components/page-header";
import { CrownAttraction } from "@/components/tour-guide/crown-attraction";
import { SideToursExperiences } from "@/components/tour-guide/side-tours-experiences"; // <-- Add Import
import { SITE_CONFIG } from "@/lib/site-config";
import { MessageCircle, Phone, BadgeCheck, Bus, Zap } from "lucide-react";
import Link from "next/link";

export default function TourGuidePage() {
  return (
    <main>
      {/* 1. Dynamic Page Header */}
      <PageHeader 
        title="Haram Trip Get Guide • Sacred Tours & Side Experiences"
        subtitle="Explore Makkah, Madinah & Sacred Saudi Landmarks"
        description="Curated historical Ziyarat, museum tickets, VIP culinary tours & cultural excursions during your Umrah or holiday. All prices transparently guaranteed in Pounds (£)."
        image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop"
      >
        <div className="flex items-center gap-2 text-foreground dark:text-white text-[10px] sm:text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
          <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-secondary" />
          100% Licensed Saudi Guides
        </div>
        <div className="flex items-center gap-2 text-foreground dark:text-white text-[10px] sm:text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
          <Bus className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-secondary" />
          Hotel Pickup & AC Transport
        </div>
        <div className="flex items-center gap-2 text-foreground dark:text-white text-[10px] sm:text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
          <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-secondary" />
          Direct WhatsApp Instant Confirmation
        </div>
      </PageHeader>

      {/* 2. Crown Highlight Attraction Section */}
      <CrownAttraction />

      {/* 3. Side Tours & Experiences Grid Section */}
      <SideToursExperiences />
    </main>
  );
}