// src/components/flights/popular-routes.tsx
"use client";

import { Plane } from "lucide-react";

const routes = [
  { from: "London", to: "Jeddah", airline: "Saudia", price: "£345", duration: "6h 15m" },
  { from: "Manchester", to: "Jeddah", airline: "British Airways", price: "£380", duration: "7h 30m" },
  { from: "London", to: "Madinah", airline: "Saudia", price: "£410", duration: "7h 00m" },
  { from: "Birmingham", to: "Jeddah", airline: "Turkish Airlines", price: "£395", duration: "9h 45m" },
];

export function PopularRoutes() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
            Popular UK to Saudi Flight Routes
          </h2>
          <p className="text-base sm:text-lg leading-[1.6] text-muted-foreground">
            Handpicked Umrah flight fares from major UK airports. Prices are subject to seasonal availability.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, idx) => (
            <div 
              key={idx}
              className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-muted px-3 py-1 rounded-full text-foreground">
                  <Plane className="w-3 h-3 text-brand-secondary" /> {route.airline}
                </span>
                <span className="text-xs text-muted-foreground">{route.duration}</span>
              </div>

              {/* Route Path */}
              <div className="flex items-center gap-3 mb-6 py-4 border-y border-dashed border-border">
                <div>
                  <span className="block text-lg font-bold text-foreground">{route.from}</span>
                  <span className="block text-[11px] text-muted-foreground">UK</span>
                </div>
                
                <div className="flex-1 relative flex items-center justify-center">
                  <div className="w-full border-t border-dashed border-border"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center">
                    <Plane className="w-3.5 h-3.5 text-brand-secondary -rotate-90" />
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-lg font-bold text-foreground">{route.to}</span>
                  <span className="block text-[11px] text-muted-foreground">KSA</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-auto flex items-end justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">Starting From</span>
                  <span className="text-2xl font-bold text-foreground">{route.price}</span>
                </div>
                <button className="h-10 px-4 rounded-full border border-border text-foreground text-xs font-bold transition-all hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}