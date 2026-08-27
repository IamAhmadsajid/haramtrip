// src/components/page-header.tsx
import Image from "next/image";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  children?: ReactNode; 
}

export function PageHeader({
  title,
  subtitle = "Trusted UK Umrah Specialists",
  description = "British, ATOL protected travel specialists dedicated to transparent, personal, and stress-free sacred journeys.",
  image = "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop",
  children 
}: PageHeaderProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] md:h-[70vh] md:min-h-[500px] flex items-end justify-start overflow-hidden -mt-[88px] border-b border-border">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* 
        Dynamic Gradient:
        Light mode: White gradient so image shows through.
        Dark mode: Black gradient for moodiness.
      */}
      <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/70 dark:to-transparent transition-colors duration-300" />
      
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 pt-[150px] md:pt-[200px] pb-12 md:pb-16 text-left flex flex-col items-start">
        {/* Subtitle: Black in light mode, Gold in dark mode */}
        <p className="text-brand-primary dark:text-brand-secondary uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-semibold mb-3">
          {subtitle}
        </p>
        
        {/* Title: Black in light mode, White in dark mode */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground dark:text-white mb-4 drop-shadow-md">
          {title}
        </h1>
        <p className="max-w-2xl text-foreground/80 dark:text-white/90 text-xs sm:text-sm md:text-base mb-6 md:mb-8 drop-shadow-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 md:gap-6">
          {children ?? (
            <>
              {/* Default Badges: Solid white with black text in light mode. Glassy white in dark mode. */}
              <div className="flex items-center gap-2 text-foreground dark:text-white text-[10px] sm:text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-secondary" />
                Official UK Travel Agency
              </div>
              <div className="flex items-center gap-2 text-foreground dark:text-white text-[10px] sm:text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-secondary" />
                ATOL Protected #74904
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}