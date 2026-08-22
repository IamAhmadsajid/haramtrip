// src/app/page.tsx
import { Hero } from "@/components/home/hero";
import { PackageCard } from "@/components/package-card";
import packagesData from "@/data/packages.json";
import Link from "next/link";
import { Plane, ShieldCheck, Sparkles } from "lucide-react";
import type { Package } from "@/lib/types";

const packages = packagesData as Package[];
const featuredPackages = packages.slice(0, 3);

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section (Now pulled behind the navbar) */}
      <Hero />

      {/* 2. Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-card ring-1 ring-foreground/10">
            <div className="p-3 rounded-full bg-brand-secondary-2 dark:bg-secondary">
              <ShieldCheck className="h-6 w-6 text-brand-primary dark:text-brand-secondary" />
            </div>
            <h3 className="font-semibold text-lg">100% ATOL Protected</h3>
            <p className="text-sm text-muted-foreground">Travel with absolute peace of mind. Your journey is fully secured.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-card ring-1 ring-foreground/10">
            <div className="p-3 rounded-full bg-brand-secondary-2 dark:bg-secondary">
              <Sparkles className="h-6 w-6 text-brand-primary dark:text-brand-secondary" />
            </div>
            <h3 className="font-semibold text-lg">Premium Hotels</h3>
            <p className="text-sm text-muted-foreground">Stay in carefully selected 4 and 5-star hotels steps away from the Haram.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-card ring-1 ring-foreground/10">
            <div className="p-3 rounded-full bg-brand-secondary-2 dark:bg-secondary">
              <Plane className="h-6 w-6 text-brand-primary dark:text-brand-secondary" />
            </div>
            <h3 className="font-semibold text-lg">Flights & Transfers</h3>
            <p className="text-sm text-muted-foreground">Complete packages including flights and ground transportation.</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Packages */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Packages</h2>
            <p className="mt-2 text-muted-foreground">Our most popular Umrah packages for this season.</p>
          </div>
          <Link href="/packages" className="text-sm font-medium text-brand-secondary hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>
    </main>
  );
}