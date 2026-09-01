// src/components/home/travel-services/travel-services.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CarFront,
  Wifi,
  Compass,
  Plane,
  LucideIcon,
  ShieldCheck,
  Users,
  BadgeDollarSign,
  Headphones,
  Sparkles,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  button: string;
  href: string;
  icon: LucideIcon;
  image: string;
}

const services: Service[] = [
  {
    title: "Airport Transfers",
    description: "Reliable, private chauffeur-driven transfers between Jeddah/Madinah airports and your hotel.",
    button: "Arrange Transfer",
    href: "/airport-transfers",
    icon: CarFront,
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "E-SIM & Internet",
    description: "Stay connected with instant 5G data across Saudi Arabia. No roaming fees, direct to your phone.",
    button: "Get Connected",
    href: "/e-sim",
    icon: Wifi,
    image: "/images/esim-internet.jpeg",
  },
  {
    title: "Guided Pilgrim Tours",
    description: "Explore meaningful important religious and historical places in Makkah and Madinah with expert local guides.",
    button: "Explore Tours",
    href: "/tour-guide",
    icon: Compass,
    image: "/images/guided-pilgarams.jpeg",
  },
  {
    title: "Flight Booking",
    description: "Find the most suitable and affordable flights from the UK to Saudi Arabia for your Umrah journey.",
    button: "Book a Flight",
    href: "/flights",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
  },
];

const trustFeatures = [
  { icon: Users, label: "One Trusted UK Team" },
  { icon: BadgeDollarSign, label: "Clear Pricing" },
  { icon: Headphones, label: "Support When You Need It" },
];

export function TravelServices() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = 390;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 bg-background border-b border-border">
      
      <div className="mx-auto w-[calc(100%-24px)] md:w-[min(100%-28px,760px)] lg:w-[min(1180px,calc(100%-32px))]">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          {/* Sub-heading with Icon (Moved to Top) */}
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-secondary mb-4">
            <Sparkles className="h-4 w-4" />
            Travel with peace of mind
          </div>

          <h2 className="m-0 font-serif text-3xl md:text-[clamp(30px,3vw,38px)] leading-[1.15] font-bold tracking-[-0.025em] text-foreground mb-3">
            Everything You Need for a Smooth Umrah
          </h2>
          <p className="mx-auto mt-2.5 max-w-[560px] text-sm md:text-base leading-1.6 text-muted-foreground">
            We provide complete travel solutions to ensure your pilgrimage is comfortable, connected, and spiritually fulfilling.
          </p>
        </div>

        {/* Slider Area */}
        <div className="relative flex items-center w-full px-0 md:px-[55px] lg:px-[70px]">
          
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous travel services"
            className="absolute z-10 hidden md:flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card text-foreground shadow-md transition-all duration-200 hover:scale-105 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary dark:bg-white/5 dark:border-white/10 left-1.5 lg:left-2"
            onClick={() => scrollSlider("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            className="flex w-full gap-5 md:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory py-6 pb-8 px-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group snap-start flex-shrink-0 w-[min(310px,calc(100vw-54px))] md:w-[320px] lg:w-[350px] bg-card border border-border rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white/5 dark:border-white/10 overflow-hidden"
                >
                  {/* Image Area */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 310px, 350px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Content Area */}
                  <div className="relative flex flex-col items-center text-center px-6 pb-6">
                    
                    {/* Icon Circle (Overlapping the image) */}
                    <div className="flex items-center justify-center w-16 h-16 mb-4 -mt-12 rounded-full bg-card border-4 border-card text-brand-secondary shadow-lg z-10 dark:bg-[#111c30] dark:border-[#111c30]">
                      <Icon className="h-8 w-8 [stroke-width:1.8]" />
                    </div>

                    <h3 className="m-0 font-serif text-lg leading-[1.2] font-bold uppercase text-foreground mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-[1.5] mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={service.href}
                      className="group/btn mt-auto flex items-center justify-center gap-2 w-full min-h-[44px] px-4 rounded-full bg-foreground dark:bg-brand-secondary text-background dark:text-brand-primary no-underline text-xs font-bold transition-all duration-200 hover:bg-brand-secondary hover:text-brand-primary dark:hover:bg-brand-secondary/90 hover:-translate-y-0.5"
                    >
                      <span>{service.button}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next travel services"
            className="absolute z-10 hidden md:flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card text-foreground shadow-md transition-all duration-200 hover:scale-105 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary dark:bg-white/5 dark:border-white/10 right-1.5 lg:right-2"
            onClick={() => scrollSlider("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Bottom Features */}
        <div className="mt-14 flex flex-col items-center text-center">
          {/* Horizontal Feature Items */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10 md:gap-14">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className="flex flex-row items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted dark:bg-white/10 text-brand-secondary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-foreground text-left">{feature.label}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}