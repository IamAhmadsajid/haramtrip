// src/components/tour-umrah/tour-package-side-panel.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { TourPackage } from "@/data/dubai-tour-packages";
import { SITE_CONFIG } from "@/lib/site-config";
import { X, Plane, CheckCircle2, Star, Phone, Send } from "lucide-react"; // Removed Video
import { toast } from "sonner";
import { FORMSPREE_ENDPOINTS, submitToFormspree } from "@/lib/formspree";

interface SidePanelProps {
  pkg: TourPackage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destinationLabel?: string;
  destinationIcon?: string;
}

export function TourPackageSidePanel({ 
  pkg, 
  open, 
  onOpenChange, 
  destinationLabel = "Dubai Stay", 
  destinationIcon = "🏙️" 
}: SidePanelProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!pkg) return null;

  const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}`;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("package", pkg.title);

    try {
      await submitToFormspree(FORMSPREE_ENDPOINTS.tourPackageSidePanel, formData);
      onOpenChange(false);
      router.push("/thank-you");
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
      setLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 flex flex-col">
        {/* Dynamic Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-background dark:bg-brand-primary text-foreground dark:text-white shrink-0">
          <SheetHeader>
            <SheetTitle className="font-serif text-lg text-foreground dark:text-white">{pkg.title}</SheetTitle>
          </SheetHeader>
          <SheetClose render={<button className="p-2 rounded-full hover:bg-muted dark:hover:bg-white/10 text-muted-foreground dark:text-white/70 hover:text-foreground dark:hover:text-white"><X className="h-5 w-5" /></button>} />
        </div>

        {/* Dynamic Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-10 space-y-8 bg-muted/30 dark:bg-zinc-900">
          
          {/* Price & Duration */}
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm flex justify-between items-center">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold">{pkg.type}</p>
              <p className="text-sm font-bold text-foreground">{pkg.duration}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Price Per Adult</p>
              <p className="text-2xl font-extrabold text-brand-primary dark:text-brand-secondary">£{pkg.price}</p>
            </div>
          </div>

          {/* Airline */}
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-foreground mb-2"><Plane className="h-5 w-5 text-brand-secondary" /> Airline</h3>
            <p className="text-sm font-medium text-foreground">{pkg.airline}</p>
            <p className="text-xs text-muted-foreground mt-1">Luggage: {pkg.luggage}</p>
          </div>

          {/* Stays */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-foreground">Accommodation Details</h3>
            
            {/* Makkah */}
            <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕋</span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">Makkah Stay</p>
                  <p className="text-sm font-bold text-foreground">{pkg.makkahHotel}</p>
                  <p className="text-xs text-muted-foreground mt-1">{pkg.makkahStar} | {pkg.makkahNights.split('|')[0].trim()}</p>
                  <p className="text-xs text-muted-foreground">{pkg.makkahRoomType}</p>
                </div>
              </div>
            </div>

            {/* Madinah */}
            <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕌</span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">Madinah Stay</p>
                  <p className="text-sm font-bold text-foreground">{pkg.madinahHotel}</p>
                  <p className="text-xs text-muted-foreground mt-1">{pkg.madinahStar} | {pkg.madinahNights.split('|')[0].trim()}</p>
                  <p className="text-xs text-muted-foreground">{pkg.madinahRoomType}</p>
                </div>
              </div>
            </div>

            {/* Dynamic Destination Stay */}
            <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{destinationIcon}</span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">{destinationLabel}</p>
                  <p className="text-sm font-bold text-foreground">{pkg.tourHotel}</p>
                  <p className="text-xs text-muted-foreground mt-1">{pkg.tourStar} | {pkg.tourNights.split('|')[0].trim()}</p>
                  <p className="text-xs text-muted-foreground">{pkg.tourRoomType}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inclusions */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-3">Inclusions</h3>
            <ul className="space-y-2 bg-card p-4 rounded-xl border border-border shadow-sm">
              {pkg.detailedInclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> {inc}
                </li>
              ))}
            </ul>
          </div>

          {/* Review */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-3">Verified Customer Experience</h3>
            <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5 text-brand-secondary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4" fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold text-muted-foreground">Google Review</span>
              </div>
              <blockquote className="text-sm italic text-muted-foreground border-l-2 border-brand-secondary pl-3">“{pkg.review.text}”</blockquote>
              <p className="text-xs font-bold text-foreground mt-2">{pkg.review.author}</p>
              <p className="text-xs text-muted-foreground">{pkg.review.date}</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card border-t-4 border-brand-secondary shadow-lg rounded-xl p-6">
            <h3 className="font-serif text-lg font-bold text-foreground mb-1">Enquire & Confirm Availability</h3>
            <p className="text-xs text-muted-foreground mb-4">Our UK desk will confirm seat & room availability instantly.</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <input type="text" name="fullName" required placeholder="Full Name *" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />
              <input type="tel" name="phone" required placeholder="Phone / WhatsApp Number *" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />
              <input type="email" name="email" placeholder="Email Address (Optional)" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />

              <button type="submit" disabled={loading} className="w-full h-11 bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90 disabled:opacity-50">
                <Send className="h-4 w-4" /> {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          </div>

          {/* Direct Contact Button (Video Call removed, WhatsApp full width) */}
          <div className="bg-card shadow-lg rounded-xl p-6">
            <h3 className="font-serif text-lg font-bold text-foreground mb-4 text-center">Prefer to talk to us directly?</h3>
            {/* Changed from grid grid-cols-2 to w-full */}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full h-11 bg-green-500 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
              <Phone className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}