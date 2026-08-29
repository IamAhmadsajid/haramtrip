// src/components/home/specialized-umrah-packages/specialized-umrah-packages.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const packages = [
  {
    title: "5 Star Umrah Packages",
    description: "Luxury 5-star accommodations",
    href: "/umrah-packages/5-star-umrah",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "5 STAR",
  },
  {
    title: "Ramadan Umrah",
    description: "Perform Umrah in the holy month",
    href: "/umrah-packages/ramadan-umrah",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "RAMADAN",
  },
  {
    title: "December Umrah",
    description: "Winter break Umrah packages",
    href: "/umrah-packages/december-umrah",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "WINTER",
  },
  {
    title: "Easter Umrah",
    description: "Family Umrah during Easter holidays",
    href: "/umrah-packages/easter-umrah",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "FAMILY",
  },
  {
    title: "Women Umrah Packages",
    description: "100% safe & 24/7 supported female pilgrimages",
    href: "/umrah-packages/women-umrah",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "WOMEN",
  },
];

export function SpecializedUmrahPackages() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      ".specialized-umrah-card"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 22;
    const amount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-visible py-14 md:py-20 lg:py-24 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">        
        {/* =====================================================
            HEADER
            ===================================================== */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end mb-8 sm:mb-9">
          <div className="max-w-[650px]">
            <span className="inline-flex items-center mb-2.5 text-brand-secondary text-[10px] font-bold tracking-[0.16em]">
              CURATED FOR YOUR JOURNEY
            </span>
            <h2 className="m-0 font-serif text-[31px] sm:text-[clamp(32px,4vw,46px)] leading-[1.08] font-bold tracking-[-0.03em] text-foreground">
              Specialized Umrah Packages
            </h2>
            <p className="max-w-[590px] mt-3 text-[13px] sm:text-sm leading-[1.65] text-muted-foreground">
              Carefully selected Umrah experiences designed around different seasons, needs and ways of travelling.
            </p>
          </div>

          {/* TOP RIGHT NAVIGATION */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              aria-label="Previous Umrah Packages"
              className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 border border-border rounded-full bg-card text-foreground cursor-pointer shadow-sm transition-all duration-200 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary hover:-translate-y-0.5 dark:shadow-[0_5px_16px_rgba(0,0,0,0.30)]"
              onClick={() => scrollSlider("left")}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next Umrah packages"
              className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 border border-border rounded-full bg-card text-foreground cursor-pointer shadow-sm transition-all duration-200 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary hover:-translate-y-0.5 dark:shadow-[0_5px_16px_rgba(0,0,0,0.30)]"
              onClick={() => scrollSlider("right")}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* =====================================================
            SLIDER
            ===================================================== */}
        <div className="relative w-full">
          
          {/* LEFT SIDE BUTTON */}
          <button
            type="button"
            aria-label="Previous Umrah packages"
            className="absolute top-1/2 left-0 z-20 hidden md:flex items-center justify-center w-[46px] h-[46px] border border-border rounded-full bg-background text-foreground cursor-pointer shadow-md -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary hover:scale-105 dark:shadow-[0_5px_16px_rgba(0,0,0,0.30)]"
            onClick={() => scrollSlider("left")}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* TRACK */}
          <div
            ref={sliderRef}
            className="flex gap-[22px] w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2 px-0.5 pb-5"
          >
            {packages.map((pkg) => (
              <article
                key={pkg.href}
                className="specialized-umrah-card group relative flex-shrink-0 w-[calc(100vw-72px)] max-w-[360px] md:w-[310px] lg:w-[calc((100%-44px)/3)] xl:w-[calc((100%-66px)/4)] min-w-0 overflow-hidden bg-card border border-border rounded-2xl snap-start shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-secondary/70 hover:shadow-xl dark:shadow-[0_8px_22px_rgba(0,0,0,0.22)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.30)]"
              >
                {/* IMAGE */}
                <div className="relative w-full h-[205px] md:h-[190px] overflow-hidden bg-brand-secondary/15">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 900px) 46vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.055]"
                  />
                  {/* Image darkening overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
                  {/* TOP LEFT BADGE */}
                  <span className="absolute top-3.5 left-3.5 z-10 inline-flex items-center px-2.5 py-1.5 rounded-md bg-brand-secondary text-brand-primary text-[9px] font-extrabold tracking-[0.10em] shadow-md">
                    {pkg.badge}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col min-h-[190px] p-5">
                  <h3 className="m-0 font-serif text-xl leading-[1.2] font-bold tracking-[-0.02em] text-foreground">
                    {pkg.title}
                  </h3>
                  <p className="mt-2.5 mb-4 text-xs leading-[1.55] text-muted-foreground">
                    {pkg.description}
                  </p>
                  <Link
                    href={pkg.href}
                    className="group/btn mt-auto flex items-center justify-center gap-2 w-full min-h-[42px] px-3.5 rounded-full bg-foreground text-background text-[11px] font-bold transition-all duration-200 hover:bg-brand-secondary hover:text-brand-primary hover:-translate-y-0.5"
                  >
                    <span>Explore Package</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT SIDE BUTTON */}
          <button
            type="button"
            aria-label="Next Umrah packages"
            className="absolute top-1/2 right-0 z-20 hidden md:flex items-center justify-center w-[46px] h-[46px] border border-border rounded-full bg-background text-foreground cursor-pointer shadow-md translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary hover:scale-105 dark:shadow-[0_5px_16px_rgba(0,0,0,0.30)]"
            onClick={() => scrollSlider("right")}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}