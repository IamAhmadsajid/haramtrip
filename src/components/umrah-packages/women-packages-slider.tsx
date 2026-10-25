// src/components/umrah-packages/women-packages-slider.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone, MessageCircle, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

const packages = [
  {
    id: "w-1",
    image: "/images/umrah-packages/Women/Exclusive Woman Package.jpg",
    badge: "Abaya FREE",
    tag: "5★ Luxury",
    title: "Exclusive Woman Package",
    duration: "8 Days / 7 Nights",
    makkahHotel: "5★ Luxury Hotel",
    makkahDetail: "Near Haram (4 Nights)",
    madinahHotel: "4★ Near Gate 74",
    madinahDetail: "Women Gate (3 Nights)",
    inclusions: [
      "Flights & Umrah Visa Included",
      "5★ & 4★ Handpicked Accommodations",
      "All Airport & City Transfers Included",
      "24/7 Dedicated Female Support & Assistance",
      "Complimentary Abaya for Sister"
    ],
    price: "£1,199",
    priceLabel: "Starting from"
  },
  {
    id: "w-2",
    image: "/images/umrah-packages/Women/Supreme Women Umrah.jpg",
    badge: "Private Room",
    tag: "4★ Hotels",
    title: "Supreme Women Umrah",
    duration: "8 Days / 7 Nights",
    makkahHotel: "Al Ebaa Hotel",
    makkahDetail: "4 Nights (Double Room)",
    madinahHotel: "Zowar International",
    madinahDetail: "3 Nights (Gate 74)",
    inclusions: [
      "24/7 Female Advisor Telephone Contact",
      "Private Airport Transfer with Vetted Driver",
      "Hotel 2 Min from Madinah Women's Gate 74",
      "Women-Led Ziyarat & Rawdah Booking",
      "Complimentary Prayer Mat & Dua Booklet"
    ],
    price: "£899",
    priceLabel: "Price Per Person"
  },
  {
    id: "w-3",
    image: "/images/umrah-packages/Women/Ramadan Umrah for Female.jpg",
    badge: "Free Abaya",
    tag: "Ramadan 2026",
    title: "Ramadan Umrah for Female",
    duration: "11 Days / 10 Nights (10–20 Mar)",
    makkahHotel: "Al Massa Badar",
    makkahDetail: "6N (5★, 10–16 Mar)",
    madinahHotel: "Al Ansar Golden Tulip",
    madinahDetail: "4N (5★, 16–20 Mar)",
    inclusions: [
      "Flights & Umrah Visa Included",
      "5-Star Luxury Hotels (Makkah & Madinah)",
      "All Ground Transport & Transfers",
      "Complimentary Guided Ziyarat Included",
      "Complimentary Abaya for Sister"
    ],
    price: "£1,420",
    priceLabel: "Ramadan Package"
  },
  {
    id: "w-4",
    image: "/images/umrah-packages/Women/Exclusive 10 Days Woman.jpg",
    badge: "Free Abaya",
    tag: "5★ Exclusive",
    title: "Exclusive 10 Days Woman",
    duration: "10 Days Deal (02–12 Dec 2026)",
    makkahHotel: "Al Massa Badar",
    makkahDetail: "6N (5★, 02–08 Dec)",
    madinahHotel: "Al Ansar Golden Tulip",
    madinahDetail: "4N (5★, 08–12 Dec)",
    inclusions: [
      "Flights & ETA Visa Included",
      "5-Star Luxury Hotels Included",
      "All Ground Transport & Transfers",
      "Complimentary Ziyarat Included",
      "Free Abaya for Sister"
    ],
    price: "£1,299",
    priceLabel: "Total Package Price"
  }
];

export function WomenPackagesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    
    // Get the first card to measure its exact width
    const firstCard = sliderRef.current.querySelector("article");
    if (!firstCard) return;
    
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24; // This must match the 'gap-6' class below
    const amount = cardWidth + gap; 

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full flex items-center gap-4 md:gap-6">
      
      {/* Left Navigation Button */}
      <button 
        onClick={() => scrollSlider("left")} 
        className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-foreground shadow-sm hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all dark:bg-white/10 dark:border-white/10 dark:text-white"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Slider Track */}
      <div 
        ref={sliderRef} 
        className="flex-1 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {packages.map((pkg) => {
          const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}`;
          
          return (
            <article key={pkg.id} className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[calc(33.333%-16px)] snap-start group bg-card rounded-2xl border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col dark:bg-white/5 dark:border-white/10">
              
              {/* Image Header Area with Overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Overlaid Content (Badges & Title) */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-brand-secondary/90 backdrop-blur-sm px-2 py-1 rounded-full">{pkg.tag}</span>
                    <span className="text-[10px] font-bold text-white bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-full">{pkg.badge}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white leading-tight drop-shadow-md">{pkg.title}</h3>
                  <p className="text-xs text-white/80 mt-1">{pkg.duration}</p>
                </div>
              </div>

              {/* Hotel Details */}
              <div className="p-6 space-y-3 border-b border-dashed border-border dark:border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-brand-primary dark:text-brand-secondary mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{pkg.makkahHotel}</p>
                    <p className="text-xs text-muted-foreground">{pkg.makkahDetail}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{pkg.madinahHotel}</p>
                    <p className="text-xs text-muted-foreground">{pkg.madinahDetail}</p>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Inclusions:</h4>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" /> {inc === "Private Airport Transfer with Vetted Driver" ? (
                        <Link href="/airport-transfers/">{inc}</Link>
                      ) : inc === "Women-Led Ziyarat & Rawdah Booking" ? (
                        <Link href="/tour-guide/">{inc}</Link>
                      ) : inc}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">{pkg.priceLabel}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-brand-primary dark:text-brand-secondary">{pkg.price}</span>
                    <span className="text-xs text-muted-foreground">/ person</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <a href={SITE_CONFIG.phoneLink} className="flex items-center justify-center gap-1.5 h-10 bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary rounded-full text-xs font-bold hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90 transition-colors">
                    <Phone className="h-3.5 w-3.5" /> Book Now
                  </a>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 h-10 bg-green-500 text-white rounded-full text-xs font-bold hover:bg-green-600 transition-colors">
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Right Navigation Button */}
      <button 
        onClick={() => scrollSlider("right")} 
        className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-foreground shadow-sm hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all dark:bg-white/10 dark:border-white/10 dark:text-white"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}