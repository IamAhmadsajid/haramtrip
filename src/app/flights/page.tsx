// src/app/flights/page.tsx
import { PageHeader } from "@/components/page-header";
import { FlightSearch } from "@/components/flights/flight-search";
import { PopularRoutes } from "@/components/flights/popular-routes";
import { FlightFeatures } from "@/components/flights/flight-features";
import { SITE_CONFIG } from "@/lib/site-config";
import { MessageCircle, Phone, Plane } from "lucide-react";
import Link from "next/link";

export default function FlightsPage() {
  return (
    <main>
      {/* 1. Dynamic Page Header */}
      <PageHeader 
        title="Umrah & Hajj Flight Booking"
        subtitle="Best UK Airlines for Pilgrims"
        description="Search and book cheap flights from the UK to Jeddah (JED) or Madinah (MED) with leading airlines. ATOL-protected packages and flexible Hajj/Umrah fares available."
        image="/images/hero1.jpg"
      >
        <Link href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-full h-11 px-6 text-sm font-semibold shadow-sm transition-all">
          <MessageCircle className="h-4 w-4" /> WhatsApp for Flight Quotes
        </Link>
        <Link href={`tel:${SITE_CONFIG.phoneLink}`} className="flex items-center gap-2 bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 rounded-full h-11 px-6 text-sm font-semibold shadow-sm transition-all">
          <Phone className="h-4 w-4" /> Call Flight Desk
        </Link>
      </PageHeader>

      {/* 2. Visual Flight Search Widget */}
      <FlightSearch />

      {/* 3. Popular UK to Saudi Flight Routes */}
      <PopularRoutes />

      {/* 4. Why Book Flights With Us */}
      <FlightFeatures />
    </main>
  );
}