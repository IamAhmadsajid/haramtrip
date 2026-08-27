// src/app/(extra)/airport-transfers/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { SITE_CONFIG } from "@/lib/site-config";
import { Plane, Building2, Hotel, Home, MessageCircle, Phone, Clock, BadgeDollarSign, UserCheck } from "lucide-react";
import Link from "next/link";

// Adjusted import path to match your project structure
import { PlanUmrahDialog } from "@/components/home/hero/custom-dialogs/plan-umrah-dialog";

const routes = [
  { icon: Plane, title: "Jeddah (JED) → Makkah", desc: "Direct transfer from Jeddah Airport to your Makkah hotel in 60-75 minutes, including toll fees." },
  { icon: Building2, title: "Makkah → Madinah", desc: "Comfortable 4-hour highway sedan transfer between the two holy cities, with a scheduled rest stop." },
  { icon: Hotel, title: "Madinah (MED) → Hotel", desc: "Quick 20-minute transfer from Madinah Airport to hotels surrounding the Prophet's Mosque." },
  { icon: Home, title: "UK Home → UK Airport", desc: "Stress-free door-to-airport transfers for all major UK airports, ensuring you never miss your flight." }
];

export default function AirportTransfersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="VIP Saudi Arabia & UK Airport Transfers" 
        subtitle="Seamless 24/7 Private Chauffeur Service"
        description="Seamless, 24/7 private chauffeured transfers between Jeddah Airport (JED), Makkah Hotels, Madinah Airport (MED), and UK Airports. Vetted professional drivers, flight tracking, and guaranteed door-to-door comfort."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop"
      >
        <Link href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-full h-11 px-6 text-sm font-semibold shadow-sm transition-all">
          <MessageCircle className="h-4 w-4" /> Book Airport Transfer on WhatsApp
        </Link>
        <button 
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-2 bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 rounded-full h-11 px-6 text-sm font-semibold shadow-sm transition-all"
        >
          <Phone className="h-4 w-4" /> Call Agent for Rates
        </button>
      </PageHeader>

      {/* Dialog Render */}
      <PlanUmrahDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

      {/* 2. Key Transfer Routes Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Key Transfer Routes Covered</h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground">
            Convenient transportation for individual pilgrims and groups, covering every leg of your journey with reliability and comfort.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4">
              <div className="p-3 rounded-xl bg-muted dark:bg-secondary text-brand-secondary">
                <route.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{route.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-6">{route.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Premium Transfer Service Section */}
      <section className="bg-muted/30 dark:bg-[#111c30] py-14 sm:py-16 lg:py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[22px] border border-border bg-card dark:bg-[#0d1728] p-6 shadow-sm dark:shadow-[0_20px_40px_rgba(0,0,0,0.2)] sm:p-8 lg:p-9">
            
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-9">

              {/* LEFT — IMAGE */}
              <div className="relative h-[360px] overflow-hidden rounded-[15px] sm:h-[405px]">
                <Image
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop"
                  alt="Saudia aircraft at airport"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Guaranteed Punctuality & Flight Tracking
                  </h3>
                  <p className="mt-2 max-w-[430px] text-sm leading-[1.45] text-white/95 sm:text-base">
                    Your driver monitors your flight status live and waits in the arrivals hall with a personalized name card.
                  </p>
                </div>
              </div>

              {/* RIGHT — CONTENT */}
              <div className="flex flex-col">
                <span className="mb-2 text-sm font-bold uppercase tracking-[0.08em] text-brand-secondary">
                  First-Class Service
                </span>
                <h2 className="max-w-[500px] font-serif text-3xl font-bold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-4xl">
                  Why Book Your Airport<br />Transfers With Us?
                </h2>
                <p className="mt-4 max-w-[500px] text-base leading-[1.65] text-muted-foreground">
                  Avoid long queue hassles, unreliable street taxis, or language misunderstandings after a long flight. Our pre-arranged private transfers provide complete peace of mind.
                </p>

                <div className="mt-6 space-y-4">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4 rounded-[14px] border border-border bg-background dark:bg-white/[0.03] px-4 py-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold leading-tight text-foreground">60-Min Complimentary Flight Buffer</h4>
                      <p className="mt-1 text-sm leading-[1.5] text-muted-foreground">Free waiting time at Jeddah & Madinah airports in case of immigration or luggage delays.</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4 rounded-[14px] border border-border bg-background dark:bg-white/[0.03] px-4 py-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
                      <BadgeDollarSign className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold leading-tight text-foreground">Fixed Transparent All-Inclusive Pricing</h4>
                      <p className="mt-1 text-sm leading-[1.5] text-muted-foreground">No hidden charges, parking fee surprises, or surge pricing. Tolls and luggage assistance included.</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-4 rounded-[14px] border border-border bg-background dark:bg-white/[0.03] px-4 py-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold leading-tight text-foreground">Polite, Vetted English & Urdu Speaking Drivers</h4>
                      <p className="mt-1 text-sm leading-[1.5] text-muted-foreground">Courteous chauffeurs who assist elderly pilgrims, families with strollers, and handle luggage with care.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-brand-secondary text-brand-primary px-6 text-sm font-bold shadow-md transition-all hover:-translate-y-0.5">
                    <MessageCircle className="h-4 w-4" /> Request Instant Transfer Quote
                  </Link>
                  
                  {/* Changed to button to open Dialog */}
                  <button 
                    onClick={() => setIsDialogOpen(true)}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-foreground text-background dark:bg-brand-secondary dark:text-brand-primary px-6 text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4 text-brand-secondary dark:text-brand-primary" /> Call Agent Desk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Choose Your Private Transfer Vehicle Section */}
      <section className="bg-background py-14 sm:py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-4xl">
              Choose Your Private Transfer Vehicle
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-base leading-[1.65] text-muted-foreground">
              All our vehicles are late-model, fully air-conditioned, and impeccably maintained for your safety and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
            
            {/* Vehicle 1: Executive Sedan */}
            <div className="flex flex-col rounded-[20px] border border-border bg-card dark:bg-white/[0.03] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4">
                <h3 className="font-serif text-xl font-bold text-foreground">Executive Sedan</h3>
                <p className="text-sm font-bold text-brand-secondary">1 - 3 Passengers</p>
              </div>
              <p className="flex-1 text-sm leading-[1.6] text-muted-foreground">
                Perfect for solo travelers or couples. Features efficient navigation, premium AC, and a sleek interior for a swift, comfortable ride.
              </p>
              <Link 
                href={SITE_CONFIG.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-foreground text-background dark:bg-brand-secondary dark:text-brand-primary px-5 text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5"
              >
                Book Executive Sedan
              </Link>
            </div>

            {/* Vehicle 2: VIP GMC Yukon/Tahoe (Most Popular) */}
            <div className="relative flex flex-col rounded-[20px] border-2 border-brand-secondary bg-card dark:bg-[#0d1728] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:scale-[1.03]">
              <span className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-brand-secondary text-brand-primary px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-sm">
                Most Popular
              </span>
              <div className="mb-4">
                <h3 className="font-serif text-xl font-bold text-foreground">VIP GMC Yukon/Tahoe</h3>
                <p className="text-sm font-bold text-brand-secondary">1 - 6 Passengers</p>
              </div>
              <p className="flex-1 text-sm leading-[1.6] text-muted-foreground">
                7-Seater SUV ideal for families. Offers luxurious leather seating, ample legroom, and powerful climate control.
              </p>
              <Link 
                href={SITE_CONFIG.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-brand-secondary text-brand-primary px-5 text-sm font-bold shadow-md transition-all hover:-translate-y-0.5"
              >
                Book VIP GMC SUV
              </Link>
            </div>

            {/* Vehicle 3: HiAce Van / Coaster Bus */}
            <div className="flex flex-col rounded-[20px] border border-border bg-card dark:bg-white/[0.03] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4">
                <h3 className="font-serif text-xl font-bold text-foreground">HiAce Van / Coaster Bus</h3>
                <p className="text-sm font-bold text-brand-secondary">7 - 25 Passengers</p>
              </div>
              <p className="flex-1 text-sm leading-[1.6] text-muted-foreground">
                10 to 25-seater options for large groups. Includes a spacious luggage compartment and comfortable bench seating.
              </p>
              <Link 
                href={SITE_CONFIG.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-foreground text-background dark:bg-brand-secondary dark:text-brand-primary px-5 text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5"
              >
                Enquire Group Coaster
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Immediate Airport Pickup CTA Section */}
      <section className="bg-foreground dark:bg-[#111c30] py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 text-center">
          
          <h2 className="font-serif text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-background dark:text-white sm:text-4xl lg:text-5xl">
            Need an Immediate Airport Pickup?
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-base leading-[1.65] text-background/70 dark:text-white/70 sm:text-lg">
            Our dispatchers are on duty 24/7. Provide your flight details, arrival date, and hotel name, and we will instantly confirm your booking and send your driver details.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            
            <Link 
              href={SITE_CONFIG.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-secondary text-brand-primary px-6 text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Instant WhatsApp Dispatch
            </Link>

            {/* Changed to button to open Dialog */}
            <button 
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border dark:border-white/20 bg-transparent px-6 text-sm font-bold text-background dark:text-white transition-all hover:-translate-y-0.5 hover:bg-muted/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Speak to Transfer Agent
            </button>

          </div>
        </div>
      </section>

    </main>
  );
}