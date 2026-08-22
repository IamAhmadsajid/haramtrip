// src/app/umrah-packages/page.tsx
import { PackageCard } from "@/components/package-card";
import packagesData from "@/data/packages.json";
import type { Package } from "@/lib/types";

const packages = packagesData as Package[];

export default function UmrahPackagesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-secondary dark:to-brand-secondary-2 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
          Umrah Packages 2024
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Choose from our wide range of Umrah packages tailored to suit your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </main>
  );
}