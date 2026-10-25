// src/components/umrah-packages/package-detail-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronRight, MessageCircle } from "lucide-react";
import { UmrahPackageDetail } from "@/data/umrah-package-details";
import { SITE_CONFIG } from "@/lib/site-config";

// Add basePath prop with a default fallback
export function PackageDetailCard({ pkg, basePath = "/umrah-packages" }: { pkg: UmrahPackageDetail; basePath?: string }) {
  const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.packageName)}`;

  return (
    // Replaced bg-white with bg-card
    <div className="group flex flex-col bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden dark:bg-white/5 dark:border-white/10">
      
      {/* Top Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={pkg.image} 
          alt={pkg.packageName} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Star Rating Badge on Image */}
        <div className="absolute top-4 right-4 bg-brand-secondary text-brand-primary text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
          {pkg.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        {/* Group & Package Title */}
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-secondary mb-1">
            {pkg.groupTitle}
          </p>
          {/* Replaced text-[#2d201d] with text-foreground */}
          <h3 className="font-serif text-xl font-bold leading-tight text-foreground">
            {pkg.packageName}
          </h3>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-dashed border-border dark:border-white/10">
          <span className="text-3xl font-extrabold text-brand-primary dark:text-brand-secondary">{pkg.price}</span>
          <span className="text-xs text-muted-foreground font-medium">per person</span>
        </div>

        {/* Hotels Info */}
        <div className="space-y-4 flex-1">
          {/* Makkah */}
          <div className="flex items-start gap-3">
            {/* Replaced bg-black/5 with bg-muted */}
            <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-muted dark:bg-white/10 shrink-0 p-1.5">
              <Image 
                src="/images/makkah-icon.webp" 
                alt="Makkah Icon" 
                width={24} 
                height={24} 
                className="object-contain" 
              />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Makkah Hotel</p>
              <p className="text-sm font-bold text-foreground">{pkg.makkahHotel}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Nights: {pkg.makkahNights}</p>
            </div>
          </div>

          {/* Madinah */}
          <div className="flex items-start gap-3">
            <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/10 shrink-0 p-1.5">
              <Image 
                src="/images/madinah-icon.webp" 
                alt="Madinah Icon" 
                width={24} 
                height={24} 
                className="object-contain" 
              />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Madinah Hotel</p>
              <p className="text-sm font-bold text-foreground">{pkg.madinahHotel}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Nights: {pkg.madinahNights}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          {/* Grid for Call and WhatsApp */}
          <div className="grid grid-cols-2 gap-3">
            <a 
              href={SITE_CONFIG.phoneLink}
              className="flex items-center justify-center gap-2 w-full h-12 bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90 hover:shadow-md"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 w-full h-12 bg-green-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all hover:bg-green-600 hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          
          {/* View Details Button - Uses basePath */}
          <Link 
            href={`${basePath}/${pkg.slug}`} 
            className="flex items-center justify-center gap-1 w-full h-12 text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors"
          >
            View Package Details <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}