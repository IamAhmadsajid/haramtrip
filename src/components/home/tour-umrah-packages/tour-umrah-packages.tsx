// src/components/home/tour-umrah-packages/tour-umrah-packages.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tourPackages = [
  {
    title: "Dubai Holidays",
    description: "Luxury desert, skyline & family attractions",
    href: "/tour-umrah-packages/dubai",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "DUBAI",
  },
  {
    title: "Egypt Holidays",
    description: "Ancient Pyramids, Nile cruises & Islamic Cairo",
    href: "/tour-umrah-packages/egypt",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "EGYPT",
  },
  {
    title: "Turkey Holidays",
    description: "Istanbul Bosphorus, Cappadocia & cultural tours",
    href: "/tour-umrah-packages/turkey",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "TURKEY",
  },
];

export function TourUmrahPackages() {
  return (
    // Section Wrapper
    <section className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* =====================================================
            SECTION HEADER
            ===================================================== */}
        <div className="max-w-[720px] mb-8 sm:mb-10 mx-auto text-center">
          <span className="inline-flex items-center mb-2.5 text-brand-secondary text-[10px] font-bold tracking-[0.16em]">
            BEYOND THE PILGRIMAGE
          </span>
          <h2 className="m-0 font-serif text-[32px] sm:text-[clamp(34px,4vw,48px)] leading-[1.08] font-bold tracking-[-0.03em] text-foreground">
            Umrah Holiday Packages
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] leading-1.6 text-muted-foreground text-center">
            Combine your sacred Umrah with memorable cultural stopovers
          </p>
        </div>

        {/* =====================================================
            CARDS (Grid on Desktop, Horizontal Slider on Mobile)
            ===================================================== */}
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-6 md:overflow-visible px-0 md:px-0 pb-4 md:pb-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {tourPackages.map((pkg) => (
            <article
              key={pkg.href}
              className="group relative flex-shrink-0 w-[calc(100vw-56px)] max-w-[380px] md:w-auto md:max-w-none min-w-0 overflow-hidden bg-card border border-border rounded-2xl snap-start shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-secondary/70 hover:shadow-xl dark:shadow-[0_8px_22px_rgba(0,0,0,0.22)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.30)]"
            >
              
              {/* IMAGE */}
              <div className="relative w-full h-[205px] sm:h-[210px] md:h-[235px] overflow-hidden bg-brand-secondary/15">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 45vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.055]"
                />
                
                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

                {/* IMAGE BADGE */}
                <span className="absolute top-3.5 left-3.5 z-10 inline-flex items-center px-3 py-1.5 rounded-md bg-brand-secondary text-brand-primary text-[9px] font-extrabold tracking-[0.11em] shadow-md">
                  {pkg.badge}
                </span>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col min-h-[180px] md:min-h-[188px] p-5">
                <h3 className="m-0 font-serif text-[19px] md:text-[22px] leading-[1.2] font-bold tracking-[-0.02em] text-foreground">
                  {pkg.title}
                </h3>
                <p className="mt-2.5 mb-4 text-[13px] leading-1.6 text-muted-foreground">
                  {pkg.description}
                </p>
                
                <Link
                  href={pkg.href}
                  className="group/btn mt-auto flex items-center justify-center gap-2 w-full min-h-[43px] px-4 rounded-full bg-foreground text-background text-[11px] font-bold transition-all duration-200 hover:bg-brand-secondary hover:text-brand-primary hover:-translate-y-0.5"
                >
                  <span>Explore Package</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}