// src/app/e-sim/page.tsx
import { PageHeader } from "@/components/page-header";
import { EsimHero } from "@/components/e-sim/esim-hero";
import { EsimPackages } from "@/components/e-sim/esim-packages";
import { EsimCta } from "@/components/e-sim/esim-cta";
import { EsimHowItWorks } from "@/components/e-sim/esim-how-it-works";
import { EsimCompatibility } from "@/components/e-sim/esim-compatibility";
import { EsimFaq } from "@/components/e-sim/esim-faq";
import { SITE_CONFIG } from "@/lib/site-config";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function EsimPage() {
  return (
    <main>
      <PageHeader 
        title="High-Speed 5G eSIM for Makkah & Madinah"
        subtitle="Seamless Connectivity for Pilgrims"
        description="Stay connected with instant 5G data, zero roaming fees, and reliable coverage across Makkah and Madinah. Delivered to your phone in under 2 minutes via WhatsApp."
        image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop"
      >
        <Link href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-full h-11 px-6 text-sm font-semibold shadow-sm transition-all">
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp to Buy
        </Link>
        <Link href={`tel:${SITE_CONFIG.phoneLink}`} className="flex items-center gap-2 bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 rounded-full h-11 px-6 text-sm font-semibold shadow-sm transition-all">
          <Phone className="h-4 w-4" /> Call Agent
        </Link>
      </PageHeader>

      <EsimHero />
      <EsimPackages />
      <EsimCta />
      <EsimHowItWorks />
      <EsimCompatibility />
      
      {/* 7. FAQ Section */}
      <EsimFaq />
    </main>
  );
}