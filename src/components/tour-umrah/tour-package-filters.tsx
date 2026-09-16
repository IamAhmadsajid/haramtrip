// src/components/tour-umrah/tour-package-filters.tsx
"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, Phone, MessageCircle, ChevronDown, Check } from "lucide-react";
import { TourPackage } from "@/data/dubai-tour-packages";
import { SITE_CONFIG } from "@/lib/site-config";
import { TourPackageSidePanel } from "./tour-package-side-panel";

interface FiltersProps {
  packages: TourPackage[];
  tabs?: string[];
  destinationLabel?: string;
  destinationIcon?: string;
  onOpenCustomise?: () => void;
}

export function TourPackageFilters({ 
  packages, 
  tabs = ["All Packages", "Multi-Country Stopover", "Family Friendly"],
  destinationLabel = "Dubai Stay",
  destinationIcon = "🏙️",
  onOpenCustomise
}: FiltersProps) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All Packages");
  const [budget, setBudget] = useState("All Prices");
  const [duration, setDuration] = useState("All Durations");
  const [sort, setSort] = useState("recommended");
  
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleOpenPanel = (pkg: TourPackage) => {
    setSelectedPkg(pkg);
    setIsPanelOpen(true);
  };

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    if (search) {
      result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.makkahHotel.toLowerCase().includes(search.toLowerCase()));
    }
    if (type !== "All Packages") {
      result = result.filter(p => p.type === type);
    }
    if (budget !== "All Prices") {
      if (budget === "Under £1,200") result = result.filter(p => p.price < 1200);
      if (budget === "£1,200 - £1,500") result = result.filter(p => p.price >= 1200 && p.price <= 1500);
      if (budget === "Over £1,500") result = result.filter(p => p.price > 1500);
    }
    if (duration !== "All Durations") {
      if (duration === "Under 10 Days") result = result.filter(p => p.durationDays < 10);
      if (duration === "10-12 Days") result = result.filter(p => p.durationDays >= 10 && p.durationDays <= 12);
      if (duration === "Over 12 Days") result = result.filter(p => p.durationDays > 12);
    }

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [packages, search, type, budget, duration, sort]);

  return (
    <>
      {/* Updated to bg-muted/30 for dynamic dark mode */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tabs.map(t => (
                <button 
                  key={t} 
                  onClick={() => setType(t)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${type === t ? "bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary border-brand-primary dark:border-brand-secondary" : "bg-card text-muted-foreground dark:text-white/80 border-border hover:border-brand-primary dark:hover:bg-white/10"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search hotel, location..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-full border border-border bg-card text-foreground text-sm outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-white/5 dark:border-white/10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SelectDropdown label="Budget Range" value={budget} onChange={setBudget} options={["All Prices", "Under £1,200", "£1,200 - £1,500", "Over £1,500"]} />
            <SelectDropdown label="Stay Duration" value={duration} onChange={setDuration} options={["All Durations", "Under 10 Days", "10-12 Days", "Over 12 Days"]} />
            <SelectDropdown label="Sort Packages" value={sort} onChange={setSort} options={[{value: "recommended", label: "Recommended"}, {value: "price-asc", label: "Price: Lowest First"}, {value: "price-desc", label: "Price: Highest First"}]} />
          </div>

          <p className="text-sm text-muted-foreground mt-6">Showing {filteredPackages.length} verified packages</p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map(pkg => (
                <TourCard 
                  key={pkg.id} 
                  pkg={pkg} 
                  onOpenPanel={() => handleOpenPanel(pkg)} 
                  onOpenCustomise={onOpenCustomise} 
                  destinationLabel={destinationLabel} 
                  destinationIcon={destinationIcon} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl font-bold text-foreground">No packages found</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      <TourPackageSidePanel pkg={selectedPkg} open={isPanelOpen} onOpenChange={setIsPanelOpen} destinationLabel={destinationLabel} destinationIcon={destinationIcon} />
    </>
  );
}

// =====================================================
// Custom Dropdown Helper Component
// Replaces the native <select> so the option list always
// renders directly under the trigger button — native
// select popups are drawn by the browser/OS and can get
// mispositioned (e.g. jumping to the top-left) on pages
// that use CSS transforms for animation.
// =====================================================
type DropdownOption = string | { value: string; label: string };

function SelectDropdown({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: DropdownOption[];
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVal = (opt: DropdownOption) => (typeof opt === "string" ? opt : opt.value);
  const getLabel = (opt: DropdownOption) => (typeof opt === "string" ? opt : opt.label);

  const activeLabel = options.find(opt => getVal(opt) === value);
  const displayLabel = activeLabel ? getLabel(activeLabel) : value;

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="relative" ref={containerRef}>
      <label className="absolute -top-2 left-3 px-1 bg-muted/30 dark:bg-zinc-900 text-[10px] font-bold text-muted-foreground uppercase tracking-wider z-10">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full h-12 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 cursor-pointer dark:bg-white/5 dark:border-white/10 flex items-center justify-between gap-2 text-left"
      >
        <span className="truncate">{displayLabel}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full mt-2 z-30 rounded-xl border border-border bg-card shadow-lg dark:bg-zinc-900 dark:border-white/10 py-1.5 max-h-64 overflow-y-auto"
        >
          {options.map(opt => {
            const val = getVal(opt);
            const lbl = getLabel(opt);
            const isActive = val === value;

            return (
              <button
                key={val}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  onChange(val);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
                  isActive
                    ? "text-brand-primary dark:text-brand-secondary font-bold bg-brand-secondary-2/50 dark:bg-brand-secondary/10"
                    : "text-foreground hover:bg-muted dark:hover:bg-white/5"
                }`}
              >
                <span className="truncate">{lbl}</span>
                {isActive && <Check className="h-3.5 w-3.5 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Card Component
function TourCard({ pkg, onOpenPanel, onOpenCustomise, destinationLabel, destinationIcon }: { pkg: TourPackage; onOpenPanel: () => void; onOpenCustomise?: () => void; destinationLabel: string; destinationIcon: string; }) {
  const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}`;
  
  return (
    <div className="flex flex-col bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden dark:bg-white/5 dark:border-white/10">
      
      {/* Top Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={pkg.image} 
          alt={pkg.title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary bg-brand-secondary-2 dark:bg-brand-secondary/20 px-2 py-1 rounded-full shadow-sm">{pkg.type}</span>
          {pkg.isHolidayDeal && <span className="text-[10px] font-bold text-white bg-red-500 px-2 py-1 rounded-full shadow-sm">Holiday Deal</span>}
        </div>
      </div>
      
      {/* Title & Price */}
      <div className="p-6 border-b border-dashed border-border dark:border-white/10">
        <h3 className="font-serif text-lg font-bold text-foreground leading-tight">{pkg.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{pkg.duration}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-xs text-muted-foreground">Price Per Person</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-brand-primary dark:text-brand-secondary">£{pkg.price.toLocaleString()}</span>
        </div>
      </div>

      {/* Hotel Details */}
      <div className="p-6 space-y-3 border-b border-dashed border-border dark:border-white/10">
        <div className="flex items-start gap-3">
          <Image src="/images/makkah-icon.webp" alt="Makkah" width={24} height={24} className="mt-1 object-contain" />
          <div>
            <p className="text-sm font-bold text-foreground">Makkah: {pkg.makkahHotel}</p>
            <p className="text-xs text-muted-foreground">{pkg.makkahNights}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Image src="/images/madinah-icon.webp" alt="Madinah" width={24} height={24} className="mt-1 object-contain" />
          <div>
            <p className="text-sm font-bold text-foreground">Madinah: {pkg.madinahHotel}</p>
            <p className="text-xs text-muted-foreground">{pkg.madinahNights}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 mt-1 flex items-center justify-center text-lg">{destinationIcon}</div>
          <div>
            <p className="text-sm font-bold text-foreground">{destinationLabel.split(' ')[0]}: {pkg.tourHotel}</p>
            <p className="text-xs text-muted-foreground">{pkg.tourNights}</p>
          </div>
        </div>
      </div>

      {/* Inclusions */}
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Inclusions:</h4>
        <ul className="space-y-2 mb-6 flex-1">
          {pkg.inclusions.map((inc) => (
            <li key={inc} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span> {inc}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <button onClick={onOpenPanel} className="flex items-center justify-center gap-1.5 h-11 bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary rounded-full text-xs font-bold hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90 transition-colors">
            <Phone className="h-3.5 w-3.5" /> Enquire / Reserve
          </button>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 h-11 bg-green-500 text-white rounded-full text-xs font-bold hover:bg-green-600 transition-colors">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </div>
        
        <button onClick={onOpenCustomise} className="w-full h-11 border border-brand-secondary text-brand-secondary rounded-full text-xs font-bold hover:bg-brand-secondary/10 transition-colors">
          Customise
        </button>
      </div>
    </div>
  );
}