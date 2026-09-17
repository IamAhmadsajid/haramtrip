// src/components/umrah-packages/package-filter-bar.tsx
"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { PackageDetailCard } from "./package-detail-card";
import { UmrahPackageDetail } from "@/data/umrah-package-details";

export type FilterablePackage = UmrahPackageDetail & { season?: string };

function priceValue(pkg: UmrahPackageDetail) {
  return parseInt(pkg.price.replace(/[^0-9]/g, ""), 10) || 0;
}

function totalNights(pkg: UmrahPackageDetail) {
  // pkg.duration ("10/12/14/16 Days") includes travel days and is never
  // below 10, which made "Under 10 Days" permanently empty. The nights a
  // pilgrim actually stays (7/10/12/14, matching every package title) is
  // makkahNights + madinahNights instead.
  return pkg.makkahNights + pkg.madinahNights;
}

export function PackageFilterBar({
  packages,
  quickFilters,
  filterKey,
  basePath,
}: {
  packages: FilterablePackage[];
  /** First entry is treated as the "show everything" option (e.g. "All"). */
  quickFilters: string[];
  /** Which field on the package to compare against the active quick filter. */
  filterKey: "season" | "category";
  /** Constant base path for all packages. Omit when packages carry their own `season` — the
   * path is then derived per-package as /umrah-packages/{season}-umrah. */
  basePath?: string;
}) {
  const resolveBasePath = (pkg: FilterablePackage) =>
    basePath ?? `/umrah-packages/${pkg.season?.toLowerCase()}-umrah`;

  const [active, setActive] = useState(quickFilters[0]);
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState("All Prices");
  const [duration, setDuration] = useState("All Durations");
  const [sort, setSort] = useState("recommended");

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    if (active !== quickFilters[0]) {
      result = result.filter((p) => p[filterKey] === active);
    }
    if (search) {
      result = result.filter(
        (p) =>
          p.packageName.toLowerCase().includes(search.toLowerCase()) ||
          p.makkahHotel.toLowerCase().includes(search.toLowerCase()) ||
          p.madinahHotel.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (budget !== "All Prices") {
      if (budget === "Under £900") result = result.filter((p) => priceValue(p) < 900);
      if (budget === "£900 - £1,200") result = result.filter((p) => priceValue(p) >= 900 && priceValue(p) <= 1200);
      if (budget === "Over £1,200") result = result.filter((p) => priceValue(p) > 1200);
    }
    if (duration !== "All Durations") {
      if (duration === "Under 10 Nights") result = result.filter((p) => totalNights(p) < 10);
      if (duration === "10-12 Nights") result = result.filter((p) => totalNights(p) >= 10 && totalNights(p) <= 12);
      if (duration === "Over 12 Nights") result = result.filter((p) => totalNights(p) > 12);
    }

    if (sort === "price-asc") {
      result.sort((a, b) => priceValue(a) - priceValue(b));
    } else if (sort === "price-desc") {
      result.sort((a, b) => priceValue(b) - priceValue(a));
    }

    return result;
  }, [packages, active, quickFilters, filterKey, search, budget, duration, sort]);

  return (
    <>
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {quickFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${
                    active === f
                      ? "bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary border-brand-primary dark:border-brand-secondary"
                      : "bg-card text-muted-foreground dark:text-white/80 border-border hover:border-brand-primary dark:hover:bg-white/10"
                  }`}
                >
                  {f}
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
            <SelectDropdown
              label="Budget Range"
              value={budget}
              onChange={setBudget}
              options={["All Prices", "Under £900", "£900 - £1,200", "Over £1,200"]}
            />
            <SelectDropdown
              label="Stay Duration"
              value={duration}
              onChange={setDuration}
              options={["All Durations", "Under 10 Nights", "10-12 Nights", "Over 12 Nights"]}
            />
            <SelectDropdown
              label="Sort Packages"
              value={sort}
              onChange={setSort}
              options={[
                { value: "recommended", label: "Recommended" },
                { value: "price-asc", label: "Price: Lowest First" },
                { value: "price-desc", label: "Price: Highest First" },
              ]}
            />
          </div>

          <p className="text-sm text-muted-foreground mt-6">Showing {filteredPackages.length} verified packages</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <PackageDetailCard key={pkg.id} pkg={pkg} basePath={resolveBasePath(pkg)} />
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
    </>
  );
}

// =====================================================
// Custom Dropdown Helper Component
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

  const activeLabel = options.find((opt) => getVal(opt) === value);
  const displayLabel = activeLabel ? getLabel(activeLabel) : value;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

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
        onClick={() => setOpen((o) => !o)}
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
          {options.map((opt) => {
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
