// src/components/tour-umrah/tour-cta-section.tsx
import { SlidersHorizontal } from "lucide-react";

interface TourCtaProps {
  onOpenCustomise: () => void;
}

export function TourCtaSection({ onOpenCustomise }: TourCtaProps) {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Looking for tailored dates or hotels?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Create a custom package tailored for your family, budget, special needs assistance, or multi-country holiday desires.</p>
        <button 
          onClick={onOpenCustomise}
          className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary rounded-full h-12 px-8 text-sm font-bold shadow-md hover:bg-brand-secondary/90 transition-all"
        >
          <SlidersHorizontal className="h-4 w-4" /> Make Your Customised Plan
        </button>
      </div>
    </section>
  );
}