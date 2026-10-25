// src/components/home/about-preview.tsx
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutPreview() {
  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
              About Us
            </p>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Discover the Best Umrah Experiences with Haram Trip
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-[1.8]">
              <p>
                Discover the best Umrah experiences with Haram Trip, your trusted partner for spiritual journeys. We offer a wide range of <Link className="text-[#F0CE7F]" href="/umrah-packages/">Umrah packages from UK</Link>, designed to suit every traveler’s needs. Whether you are looking for <Link className="text-[#F0CE7F]" href="/umrah-packages/budget-umrah/">affordable Umrah packages</Link> or seeking luxury, our <Link className="text-[#F0CE7F]" href="/umrah-packages/5-star-umrah/">5-star Umrah packages</Link> provide comfort and convenience throughout your pilgrimage. Our all-inclusive Umrah packages cover flights, accommodation, and guided tours, ensuring a hassle-free journey to the holy cities.
              </p>
              <p>
                Celebrate special occasions with our <Link className="text-[#F0CE7F]" href="/umrah-packages/easter-umrah/">Easter Umrah packages</Link> or immerse yourself in devotion during our <Link className="text-[#F0CE7F]" href="/umrah-packages/ramadan-umrah/">Ramadan Umrah packages</Link>, tailored for a unique spiritual experience. Planning ahead is easy with Umrah packages 2026, giving you flexibility and peace of mind. At Haram Trip, we prioritize your comfort, safety, and spiritual fulfillment, making every trip memorable. Choose us to experience a seamless and enriching pilgrimage that combines faith, comfort, and affordability.
              </p>
            </div>

            <div className="mt-4 flex justify-center lg:justify-start">
              <Link 
                href="/about" 
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90 rounded-full h-12 px-8 text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5"
                )}
              >
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border dark:border-white/10">
            <Image 
              src="/images/hero1.jpg" 
              alt="Makkah Holy City" 
              fill 
              className="object-cover" 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Subtle dark gradient at bottom for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}