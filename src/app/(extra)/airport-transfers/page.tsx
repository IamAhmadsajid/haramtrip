// src/app/(extra)/airport-transfers/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import {
  Plane,
  Building2,
  Hotel,
  MessageCircle,
  Phone,
  Clock,
  BadgeDollarSign,
  UserCheck,
  Car,
  CalendarDays,
  Users,
  ChevronDown,
  ArrowRight,
  Send,
} from "lucide-react";
import Link from "next/link";

import { SITE_CONFIG } from "@/lib/site-config";
import { FORMSPREE_ENDPOINTS, submitToFormspree } from "@/lib/formspree";

// Adjusted import path to match your project structure
const PlanUmrahDialog = dynamic(
  () => import("@/components/home/hero/custom-dialogs/plan-umrah-dialog").then((mod) => mod.PlanUmrahDialog),
  { ssr: false }
);

const routes = [
  {
    icon: Plane,
    title: "Jeddah (JED) → Makkah",
    desc: "Direct transfer from Jeddah Airport to your Makkah hotel in 60-75 minutes, including toll fees.",
    duration: "60-75 minutes",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Makkah → Madinah",
    desc: "Comfortable 4-hour highway sedan transfer between the two holy cities, with a scheduled rest stop.",
    duration: "Around 4 hours",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Hotel,
    title: "Madinah (MED) → Hotel",
    desc: "Quick 20-minute transfer from Madinah Airport to hotels surrounding the Prophet's Mosque.",
    duration: "Around 20 minutes",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
  },
];

const heroBadges = [
  { icon: Clock, label: "24/7 Service" },
  { icon: Car, label: "Private Vehicles" },
  { icon: Plane, label: "Flight Tracking" },
  { icon: UserCheck, label: "Professional Drivers" },
];

export default function AirportTransfersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const router = useRouter();

  const handleQuoteSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuoteLoading(true);

    try {
      await submitToFormspree(
        FORMSPREE_ENDPOINTS.airportTransferQuote,
        new FormData(event.currentTarget)
      );
      router.push("/thank-you");
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
      setQuoteLoading(false);
    }
  };

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative -mt-[88px] flex w-full flex-col justify-end overflow-hidden border-b border-border pb-28 pt-[160px] sm:pb-36 md:pt-[200px]">
        <Image
          src="/page-headers-images/Airport transfer.jpg"
          alt="Airport Transfers for Your Umrah Journey"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary sm:text-sm">
            Private • Reliable • 24/7
          </p>

          <h1 className="mb-4 max-w-2xl font-serif text-3xl font-bold leading-[1.05] text-white drop-shadow-md sm:text-4xl md:text-6xl">
            VIP Saudi Arabia & UK Airport Transfers
          </h1>

          <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base md:mb-8">
            Seamless, 24/7 private chauffeured transfers between Jeddah Airport (JED), Makkah Hotels, Madinah Airport (MED), and UK Airports. Vetted professional drivers, flight tracking, and guaranteed door-to-door comfort.
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-10">
            <Link
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded-full bg-green-500 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-600"
            >
              <MessageCircle className="h-4 w-4" /> Book Airport Transfer on WhatsApp
            </Link>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="flex h-11 items-center gap-2 rounded-full bg-brand-secondary px-6 text-sm font-semibold text-brand-primary shadow-sm transition-all hover:bg-brand-secondary/90"
            >
              <Phone className="h-4 w-4" /> Call Agent for Rates
            </button>
          </div>

          {/* Stat / badge strip */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6">
            {heroBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <badge.icon className="h-4 w-4 text-brand-secondary" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog Render */}
      <PlanUmrahDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

      {/* 2. Plan Your Transfer — quote widget overlapping the hero */}
      <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-4 sm:-mt-20 sm:px-6">
        <form
          onSubmit={handleQuoteSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
        >
          <h2 className="mb-1 font-serif text-xl font-bold text-foreground sm:text-2xl">
            Plan Your Transfer
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Book your airport transfer in just a few steps.
          </p>

          <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">From</label>
              <input
                type="text"
                name="fromLocation"
                required
                placeholder="e.g. Jeddah Airport (JED)"
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none transition-all focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">To</label>
              <input
                type="text"
                name="toLocation"
                required
                placeholder="e.g. Makkah Hotel"
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none transition-all focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" /> Travel Date
              </label>
              <input
                type="date"
                name="travelDate"
                required
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none transition-all focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                <Users className="h-3.5 w-3.5" /> Passengers
              </label>
              <input
                type="number"
                name="passengers"
                min="1"
                defaultValue="1"
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none transition-all focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
              />
            </div>

            <div className="relative">
              <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">Vehicle</label>
              <select
                name="vehicle"
                defaultValue="Executive Sedan (1-3 Passengers)"
                className="h-11 w-full appearance-none rounded-xl border border-border bg-background px-3 pr-9 text-sm font-semibold text-foreground outline-none transition-all focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
              >
                <option>Executive Sedan (1-3 Passengers)</option>
                <option>VIP GMC Yukon/Tahoe (1-6 Passengers)</option>
                <option>HiAce Van / Coaster Bus (7-25 Passengers)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-[38px] h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <button
            type="submit"
            disabled={quoteLoading}
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-bold text-background shadow-md transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 dark:bg-brand-secondary dark:text-brand-primary sm:w-auto"
          >
            <Send className="h-4 w-4" />
            {quoteLoading ? "Sending..." : "Get My Transfer Quote"}
          </button>
        </form>
      </div>

      {/* 3. Key Transfer Routes Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Key Transfer Routes Covered</h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Convenient transportation for individual pilgrims and groups, covering every leg of your journey with reliability and comfort.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 w-full">
                <Image src={route.image} alt={route.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-brand-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-primary">
                  {route.title}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-secondary">
                  <Clock className="h-3.5 w-3.5" /> {route.duration}
                </div>

                <h3 className="text-lg font-bold text-foreground">{route.title}</h3>
                <p className="flex-1 text-sm leading-6 text-muted-foreground">{route.desc}</p>

                <Link
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-secondary transition-all hover:gap-2.5"
                >
                  Book This Route <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Why Book Your Airport Transfers With Us? */}
      <section className="border-y border-border bg-muted/30 py-14 dark:bg-[#111c30] sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-[0.08em] text-brand-secondary">
              First-Class Service
            </span>
            <h2 className="font-serif text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl">
              Why Book Your Airport Transfers With Us?
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-muted-foreground">
              Avoid long queue hassles, unreliable street taxis, or language misunderstandings after a long flight. Our pre-arranged private transfers provide complete peace of mind.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "60-Min Complimentary Flight Buffer",
                desc: "Free waiting time at Jeddah & Madinah airports in case of immigration or luggage delays.",
              },
              {
                icon: BadgeDollarSign,
                title: "Fixed Transparent All-Inclusive Pricing",
                desc: "No hidden charges, parking fee surprises, or surge pricing. Tolls and luggage assistance included.",
              },
              {
                icon: UserCheck,
                title: "Polite, Vetted English & Urdu Speaking Drivers",
                desc: "Courteous chauffeurs who assist elderly pilgrims, families with strollers, and handle luggage with care.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-background p-6 text-center shadow-sm dark:bg-white/[0.03]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold leading-tight text-foreground">{feature.title}</h3>
                <p className="text-sm leading-[1.6] text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-brand-secondary px-6 text-sm font-bold text-brand-primary shadow-md transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Request Instant Transfer Quote
            </Link>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-foreground px-6 text-sm font-bold text-background shadow-sm transition-all hover:-translate-y-0.5 dark:bg-brand-secondary dark:text-brand-primary"
            >
              <Phone className="h-4 w-4 text-brand-secondary dark:text-brand-primary" /> Call Agent Desk
            </button>
          </div>
        </div>
      </section>

      {/* 5. Choose Your Private Transfer Vehicle Section */}
      <section className="border-t border-border bg-background py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-4xl">
              Choose Your Private Transfer Vehicle
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-base leading-[1.65] text-muted-foreground">
              All our vehicles are late-model, fully air-conditioned, and impeccably maintained for your safety and comfort.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">

            {/* Vehicle 1: Executive Sedan */}
            <div className="flex flex-col overflow-hidden rounded-[20px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white/[0.03]">
              <div className="relative h-44 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                  alt="Executive Sedan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
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
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-foreground px-5 text-sm font-bold text-background shadow-sm transition-all hover:-translate-y-0.5 dark:bg-brand-secondary dark:text-brand-primary"
                >
                  Book Executive Sedan
                </Link>
              </div>
            </div>

            {/* Vehicle 2: VIP GMC Yukon/Tahoe (Most Popular) */}
            <div className="relative flex flex-col overflow-hidden rounded-[20px] border-2 border-brand-secondary bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-[#0d1728] md:scale-[1.03]">
              <span className="absolute right-6 top-4 z-10 rounded-full bg-brand-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-primary shadow-sm">
                Most Popular
              </span>
              <div className="relative h-44 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop"
                  alt="VIP GMC Yukon/Tahoe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
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
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-brand-secondary px-5 text-sm font-bold text-brand-primary shadow-md transition-all hover:-translate-y-0.5"
                >
                  Book VIP GMC SUV
                </Link>
              </div>
            </div>

            {/* Vehicle 3: HiAce Van / Coaster Bus */}
            <div className="flex flex-col overflow-hidden rounded-[20px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white/[0.03]">
              <div className="relative h-44 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop"
                  alt="HiAce Van / Coaster Bus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
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
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-foreground px-5 text-sm font-bold text-background shadow-sm transition-all hover:-translate-y-0.5 dark:bg-brand-secondary dark:text-brand-primary"
                >
                  Enquire Group Coaster
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Immediate Airport Pickup CTA Section */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0">
          <Image
            src="/page-headers-images/Airport transfer.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/97 via-brand-primary/90 to-brand-primary/70" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-24">

          {/* LEFT — urgency + stats */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-secondary" />
              </span>
              Dispatch Agents Online Now
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Landed & Need a Ride Right Now?
            </h2>

            <p className="mt-4 max-w-lg text-base leading-[1.65] text-white/75 sm:text-lg">
              Our dispatchers are on duty 24/7. Provide your flight details, arrival date, and hotel name, and we will instantly confirm your booking and send your driver details.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <p className="text-2xl font-bold text-brand-secondary">2 min</p>
                <p className="text-xs text-white/60">Avg. Response Time</p>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <p className="text-2xl font-bold text-brand-secondary">24/7</p>
                <p className="text-xs text-white/60">Live Dispatch Desk</p>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <p className="text-2xl font-bold text-brand-secondary">60 min</p>
                <p className="text-xs text-white/60">Free Flight Buffer</p>
              </div>
            </div>
          </div>

          {/* RIGHT — contact cards */}
          <div className="flex flex-col gap-4">
            <Link
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-white">Instant WhatsApp Dispatch</p>
                <p className="text-sm text-white/60">Fastest way to reach us — usually under 2 minutes</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => setIsDialogOpen(true)}
              className="group flex items-center gap-4 rounded-2xl border border-brand-secondary/40 bg-brand-secondary/10 p-5 text-left backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-brand-secondary/15"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-white">Speak to Transfer Agent</p>
                <p className="text-sm text-white/60">Call now for live rates & availability</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}
