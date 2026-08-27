// src/components/home/travel-services/travel-services.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CarFront,
  Wifi,
  Compass,
  Plane,
  LucideIcon,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  button: string;
  href: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "Airport Transfer",
    description: "Reliable airport transfers in Jeddah and Madinah.",
    button: "Book Transfer",
    href: "/airport-transfers",
    icon: CarFront,
  },
  {
    title: "E-SIM and Internet",
    description: "Convenient mobile data and internet access across Saudi Arabia.",
    button: "Get E-SIM",
    href: "#", // Update this route when the page is created
    icon: Wifi,
  },
  {
    title: "Tour Guide",
    description: "Explore important religious and historical places with an experienced local guide.",
    button: "Book a Guide",
    href: "#", // Update this route when the page is created
    icon: Compass,
  },
  {
    title: "Flight Booking",
    description: "Find suitable flights from the UK to Saudi Arabia for your Umrah journey.",
    button: "Book a Flight",
    href: "/flight-services",
    icon: Plane,
  },
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
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-brand-secondary-2/20 dark:to-brand-secondary/5 border-b border-border">
      
      <div className="mx-auto w-[calc(100%-24px)] md:w-[min(100%-28px,760px)] lg:w-[min(1180px,calc(100%-32px))]">
        
        {/* Section Heading */}
        <div className="text-center mb-7 md:mb-10">
          <h2 className="m-0 font-serif text-3xl md:text-[clamp(30px,3vw,38px)] leading-[1.15] font-bold tracking-[-0.025em] text-foreground">
            Our Travel Services
          </h2>
          <p className="mx-auto mt-2.5 max-w-[560px] text-sm md:text-base leading-1.6 text-muted-foreground">
            Everything you need for a smooth, comfortable and well-supported journey.
          </p>
        </div>

        {/* Slider Area */}
        <div className="relative flex items-center w-full px-0 md:px-[55px] lg:px-[70px]">
          
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous travel services"
            className="absolute z-5 hidden md:flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card text-foreground shadow-md transition-all duration-200 hover:scale-105 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary dark:bg-white/5 dark:border-white/10 dark:shadow-[0_5px_16px_rgba(0,0,0,0.30)] left-1.5 lg:left-2"
            onClick={() => scrollSlider("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            className="flex w-full gap-3.5 md:gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory py-2 pb-4 px-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group snap-start flex-shrink-0 w-[min(310px,calc(100vw-54px))] md:w-[320px] lg:w-[350px] min-h-[280px] flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/40 hover:shadow-lg dark:bg-white/5 dark:border-white/10 dark:shadow-[0_8px_20px_rgba(0,0,0,0.22)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.30)]"
                >
                  {/* Icon Box */}
                  <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-2xl bg-muted text-brand-secondary shadow-sm transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-brand-primary dark:bg-white/10">
                    <Icon className="h-8 w-8 [stroke-width:1.8]" />
                  </div>

                  {/* Content */}
                  <h3 className="m-0 font-serif text-lg leading-[1.2] font-bold uppercase text-foreground mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-[1.5] mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className="group/btn mt-auto flex items-center justify-center gap-2 w-full min-h-[42px] px-4 rounded-full bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary no-underline text-xs font-bold transition-all duration-200 hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90 hover:-translate-y-0.5"
                  >
                    <span>{service.button}</span>
                    <ArrowRight className="h-[15px] w-[15px] transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next travel services"
            className="absolute z-5 hidden md:flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card text-foreground shadow-md transition-all duration-200 hover:scale-105 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary dark:bg-white/5 dark:border-white/10 dark:shadow-[0_5px_16px_rgba(0,0,0,0.30)] right-1.5 lg:right-2"
            onClick={() => scrollSlider("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  );
}