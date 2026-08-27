// src/components/e-sim/esim-compatibility.tsx
"use client";

import { useState } from "react";
import { Search, CheckCircle2, Info, Smartphone, Tablet, BadgeCheck } from "lucide-react";

const deviceCategories = [
  {
    icon: Smartphone,
    name: "Apple iPhone",
    models: ["iPhone XR", "iPhone XS / XS Max", "iPhone 11 Series", "iPhone 12 Series", "iPhone 13 Series", "iPhone 14 Series", "iPhone 15 Series"]
  },
  {
    icon: Smartphone,
    name: "Samsung Galaxy",
    models: ["S20 / S21 / S22 Series", "S23 / S24 Series", "Z Fold / Z Flip Series", "Note 20 / 20 Ultra"]
  },
  {
    icon: Smartphone,
    name: "Google Pixel",
    models: ["Pixel 3 / 3a / 4 / 4a", "Pixel 5 / 5a", "Pixel 6 / 6a / 6 Pro", "Pixel 7 / 7a / 7 Pro", "Pixel 8 / 8 Pro"]
  },
  {
    icon: Tablet,
    name: "Apple iPad",
    models: ["iPad Pro (3rd Gen+)", "iPad Air (3rd Gen+)", "iPad Mini (5th Gen+)", "iPad (7th Gen+)"]
  },
  {
    icon: Smartphone,
    name: "Motorola & Others",
    models: ["Motorola Razr 2019/2020", "Motorola Edge+", "Microsoft Surface Duo", "Huawei P40 Series"]
  }
];

export function EsimCompatibility() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = deviceCategories.filter((category) => {
    if (searchQuery.trim() === "") return true;
    const q = searchQuery.toLowerCase();
    const inName = category.name.toLowerCase().includes(q);
    const inModels = category.models.some((model) => model.toLowerCase().includes(q));
    return inName || inModels;
  });

  const showNoResults = searchQuery.trim() !== "" && filteredCategories.length === 0;

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Dynamic Card Container */}
        <div className="relative overflow-hidden rounded-3xl bg-muted dark:bg-[#111c30] p-8 sm:p-10 lg:p-12 shadow-sm dark:shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-border dark:border-white/5">
          
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-secondary/5 dark:bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            
            {/* Header */}
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground dark:text-white mb-4">
                Is Your Phone eSIM Compatible?
              </h2>
              <p className="text-base sm:text-lg leading-[1.6] text-muted-foreground dark:text-white/70">
                Search for your device or find your model below. Most smartphones released after 2018 support eSIM functionality.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground dark:text-white/40" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search your phone model (e.g., iPhone 14, Galaxy S23)..."
                  className="w-full h-14 pl-12 pr-4 rounded-full bg-background dark:bg-white/5 border border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all"
                />
              </div>
            </div>

            {/* Device Categories Grid or No Results Fallback */}
            {showNoResults ? (
              <div className="max-w-2xl mx-auto text-center py-10 px-4 bg-background dark:bg-white/[0.03] border border-border dark:border-white/10 rounded-2xl">
                <p className="text-base text-foreground dark:text-white/80">
                  No direct match found for <span className="font-bold text-foreground dark:text-white">"{searchQuery}"</span>. Most iPhones from XS onwards and flagship Android phones from 2020+ are fully compatible.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((category, idx) => (
                  <div 
                    key={idx} 
                    className="relative bg-background dark:bg-white/[0.03] border border-border dark:border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    {/* Supported Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide bg-brand-secondary/10 text-brand-secondary px-2.5 py-1 rounded-full border border-brand-secondary/20">
                        <BadgeCheck className="w-3 h-3" /> Supported
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border dark:border-white/10">
                      <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center border border-brand-secondary/20">
                        <category.icon className="w-5 h-5 text-brand-secondary" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-foreground dark:text-white pr-16">{category.name}</h3>
                    </div>
                    
                    <ul className="space-y-2.5">
                      {category.models.map((model, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-foreground dark:text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                          {model}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Instant Check Code Tip */}
            <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 bg-muted dark:bg-brand-secondary/5 border border-border dark:border-brand-secondary/20 rounded-2xl p-5 text-center sm:text-left">
              <Info className="w-6 h-6 text-brand-secondary shrink-0" />
              <p className="text-sm text-muted-foreground dark:text-white/80">
                <span className="font-bold text-foreground dark:text-white">Instant Check Code:</span> Dial <span className="font-mono font-bold text-brand-primary dark:text-brand-secondary bg-background dark:bg-background/50 px-2 py-0.5 rounded-md">*#06#</span> on your phone. If an EID number appears on your screen, your device is eSIM compatible.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}