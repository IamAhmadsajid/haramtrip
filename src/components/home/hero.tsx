// src/components/home/hero.tsx
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function Hero() {
  // -mt-[112px] exactly covers TopBar(36px) + Nav padding(12px) + Nav(64px)
  return (
    <section className="relative overflow-hidden -mt-[112px]">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary-2/50 to-background dark:from-secondary dark:to-background -z-10" />
      
      {/* pt-48 pushes the text content down so it's not hidden by the floating navbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-48 pb-24 sm:pt-56 sm:pb-32 text-center">
        <h1 className="bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-secondary dark:to-brand-secondary-2 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl tracking-tight">
          Your Journey to the Holy Land Starts Here
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Premium Umrah and Hajj packages tailored for comfort, affordability, and peace of mind.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/umrah-packages" className={buttonVariants({ size: "lg" })}>
            View Packages
          </Link>
          <a 
            href={SITE_CONFIG.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}