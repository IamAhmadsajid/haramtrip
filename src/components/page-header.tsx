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
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden -mt-22">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/50 to-transparent" />
      
      {/* Added pt-50 to push the text down so it doesn't hide behind the navbar */}
      <div className="relative z-10 mx-auto max-w-3xl w-full px-4 sm:px-6 pt-50 pb-16 text-center flex flex-col items-center">
        <p className="text-brand-secondary uppercase tracking-widest text-xs md:text-sm font-semibold mb-3">
          {subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="max-w-2xl text-white/90 text-sm md:text-base mb-8 drop-shadow">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {children ?? (
            <>
              <div className="flex items-center gap-2 text-white text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <BadgeCheck className="h-4 w-4 text-brand-secondary" />
                Official UK Travel Agency
              </div>
              <div className="flex items-center gap-2 text-white text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-brand-secondary" />
                ATOL Protected #12831
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}