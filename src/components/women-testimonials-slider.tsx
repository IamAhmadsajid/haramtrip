// src/components/women-testimonials-slider.tsx
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { womenTestimonials } from "@/data/women-umrah-testimonials";

export function WomenTestimonialsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    
    // Get the width of the first card to scroll exactly one card at a time
    const card = sliderRef.current.querySelector(".testimonial-card") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 32 : 400;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 mb-10">
        <button 
          onClick={() => scrollSlider("left")} 
          className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-foreground shadow-md hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all dark:bg-white/10 dark:border-white/10 dark:text-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => scrollSlider("right")} 
          className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-foreground shadow-md hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all dark:bg-white/10 dark:border-white/10 dark:text-white"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slider Track */}
      <div 
        ref={sliderRef} 
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {womenTestimonials.map((t) => (
          <article 
            key={t.id} 
            className="testimonial-card flex-shrink-0 w-full md:w-[calc(100%-2rem)] lg:w-[600px] snap-center bg-card p-8 sm:p-10 rounded-3xl border border-border shadow-lg relative dark:bg-white/5 dark:border-white/10"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-brand-secondary/20 pointer-events-none">
              <Quote className="h-16 w-16" fill="currentColor" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="flex items-center justify-center w-16 h-16 bg-brand-secondary text-brand-primary rounded-full font-bold text-2xl shadow-md mb-5">
                {t.initial}
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 text-brand-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              
              {/* Name & Role */}
              <h3 className="font-serif text-xl font-bold text-foreground">{t.name} ({t.location})</h3>
              <p className="text-xs text-brand-secondary font-bold uppercase tracking-wider mb-6 mt-1">
                {t.role}
              </p>

              {/* Text */}
              <blockquote className="text-muted-foreground text-base sm:text-lg italic leading-[1.8] max-w-xl">
                “{t.text}”
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}