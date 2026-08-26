// src/components/cta-section.tsx
import { Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

interface CtaSectionProps {
  title?: string;
  description?: string;
}

export function CtaSection({
  title = "Ready to Plan Your Sacred Umrah Journey?",
  description = "Our UK travel specialists are available 7 days a week to understand your needs and build a bespoke quote tailored around your family, dates, and budget."
}: CtaSectionProps) {
  return (
    <section className="bg-muted/30 py-16 sm:py-20 border-t border-border">
      <div className="mx-auto w-full max-w-[980px] px-4 sm:px-6">
        {/* Updated inner card to bg-card and border-border */}
        <div className="rounded-[22px] border border-border bg-card px-6 py-10 text-center shadow-lg sm:px-10 sm:py-12">
          <h2 className="mx-auto max-w-[620px] font-serif text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[590px] text-sm leading-[1.7] text-muted-foreground sm:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a 
              href={`tel:${SITE_CONFIG.phoneLink}`} 
              className="inline-flex h-12 min-w-[240px] items-center justify-center gap-2 rounded-[10px] bg-brand-primary dark:bg-brand-secondary px-6 text-sm font-bold text-white dark:text-brand-primary shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#302b29] dark:hover:bg-brand-secondary/90"
            >
              <Phone className="h-4 w-4" /> Book Consultation Call
            </a>
            <a 
              href={SITE_CONFIG.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex h-12 min-w-[240px] items-center justify-center gap-2 rounded-[10px] bg-green-500 px-6 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-green-600"
            >
              <MessageCircle className="h-4 w-4" /> Instant WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}