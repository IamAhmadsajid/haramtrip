// src/components/umrah-packages/package-detail-view.tsx
import Image from "next/image";
import Link from "next/link";
import { PackageEnquiryForm } from "@/components/forms/package-enquiry-form";
import { PageHeader } from "@/components/page-header";
import { UmrahPackageDetail } from "@/data/umrah-package-details";
import { Users, Plane, Hotel, Car, CalendarDays, CheckCircle2, Info, ArrowLeft } from "lucide-react";

// Added backLabel prop with a default fallback
export function PackageDetailView({ pkg, backHref, backLabel = "Back to Packages" }: { pkg: UmrahPackageDetail; backHref: string; backLabel?: string }) {
  const attributes = [
    { icon: Users, label: "Sharing", value: pkg.sharing },
    { icon: Plane, label: "Flight", value: pkg.flight },
    { icon: Hotel, label: "Hotel", value: pkg.category },
    { icon: Car, label: "Transfer", value: pkg.transfer },
    { icon: CalendarDays, label: "Duration", value: pkg.duration },
  ];

  return (
    <main className="bg-background">
      <PageHeader 
        title={pkg.packageName}
        subtitle={pkg.groupTitle}
        description={pkg.overview}
        image={pkg.image}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb - Uses the dynamic backHref and backLabel */}
        <div className="py-8">
          <Link href={backHref} className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-brand-secondary transition-colors">
            <ArrowLeft className="h-4 w-4" /> {backLabel}
          </Link>
        </div>

        {/* Attributes Grid */}
        {/* Replaced bg-white with bg-card */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 p-6 bg-card rounded-2xl border border-border shadow-sm dark:bg-white/5 dark:border-white/10">
          {attributes.map((attr) => (
            <div key={attr.label} className="flex flex-col items-center text-center gap-2">
              <div className="p-3 rounded-xl bg-muted dark:bg-white/10 text-brand-primary dark:text-brand-secondary">
                <attr.icon className="h-6 w-6" />
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{attr.label}</p>
              <p className="text-sm font-bold text-foreground">{attr.value}</p>
            </div>
          ))}
        </div>

        {/* Overview & Hotel Details Section */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Replaced text-[#2d201d] with text-foreground */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">Overview</h2>
            {/* Replaced text-[#4f4a47] with text-muted-foreground */}
            <p className="text-muted-foreground text-base leading-[1.8] mb-6">{pkg.overview}</p>
            
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">Package Highlights:</h3>
            <ul className="space-y-2">
              {pkg.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotels & Price Card */}
          {/* Replaced bg-white with bg-card */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden sticky top-24 dark:bg-white/5 dark:border-white/10">
            <div className="relative h-56 w-full overflow-hidden">
              <Image src={pkg.image} alt={pkg.packageName} fill className="object-cover" sizes="100vw" />
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6 pb-6 border-b border-dashed border-border dark:border-white/10">
                <div className="flex items-start gap-3">
                  {/* Replaced bg-black/5 with bg-muted */}
                  <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-muted dark:bg-white/10 shrink-0 p-1.5">
                    <Image src="/images/makkah-icon.webp" alt="Makkah" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Makkah Hotel</p>
                    <p className="text-sm font-bold text-foreground">{pkg.makkahHotel}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Nights: {pkg.makkahNights}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/10 shrink-0 p-1.5">
                    <Image src="/images/madinah-icon.webp" alt="Madinah" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Madinah Hotel</p>
                    <p className="text-sm font-bold text-foreground">{pkg.madinahHotel}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Nights: {pkg.madinahNights}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-xs text-muted-foreground font-medium">Starting From</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-brand-primary dark:text-brand-secondary">{pkg.price}</span>
                <span className="text-sm text-muted-foreground font-medium">/Person</span>
              </div>
            </div>
          </div>
        </section>

        {/* Notes Section - Dynamic Amber Colors for Dark Mode */}
        <section className="mb-12 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-300/60 dark:border-amber-700/40">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 dark:text-amber-200 mb-2">Important Notes:</h3>
              <ul className="space-y-1.5 list-disc list-inside text-amber-700 dark:text-amber-300 text-sm">
                {pkg.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Futuristic Form */}
        <section className="py-10">
          <PackageEnquiryForm 
            defaultPackageName={pkg.packageName} 
            defaultHotelType={pkg.category} 
            defaultDuration={pkg.duration} 
          />
        </section>
      </div>
      

    </main>
  );
}