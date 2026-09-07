// src/components/footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin, Plane, Map, LifeBuoy, Briefcase } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/social-icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  const umrahPackages = SITE_CONFIG.navLinks.find(l => l.label === "Umrah Packages")?.dropdown || [];
  const holidayTours = SITE_CONFIG.navLinks.find(l => l.label === "Tour Umrah Packages")?.dropdown || [];
  const extraServices = SITE_CONFIG.navLinks.find(l => l.label === "Extra")?.dropdown || [];
  const customerCareLinks = SITE_CONFIG.customerCare || [];

  return (
    <footer className="relative overflow-hidden bg-background dark:bg-brand-primary text-foreground dark:text-white border-t border-border transition-colors duration-300">
      {/* Background Glossing/Glow Effects */}
      <div className="absolute top-[-10%] left-[15%] w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
          
          {/* Column 1: Brand Card & Contact */}
          <div className="space-y-6">
            <div className="bg-muted dark:bg-zinc-900 border border-border rounded-xl p-4 flex items-center gap-4 shadow-sm max-w-md">
              <div className="bg-white p-2 rounded-lg flex items-center justify-center shrink-0">
                <Image 
                  src="/haramtrip-logo2.png" 
                  alt="Haram Trip Logo" 
                  width={64} 
                  height={64} 
                  className="h-16 w-16 object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-tight text-foreground dark:text-white">
                  Haram <span className="bg-brand-secondary text-white px-2 py-0.5 rounded-md">Trip</span>
                </h3>
                <p className="text-sm text-muted-foreground dark:text-white/60 leading-tight mt-1">
                  Spiritual &amp; Luxury Journeys
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground dark:text-white/80 leading-6 max-w-md">
              Haram Trip, an ATOL-protected and IATA-certified travel provider, proudly offers premium and exclusive All-Inclusive Umrah &amp; Hajj Packages from the UK. Enjoy exceptional value with the best prices on complete travel arrangements.
            </p>
            
            <div className="space-y-4 text-sm leading-6 max-w-md">
              <a href={`tel:${SITE_CONFIG.phoneLink}`} className="flex items-center gap-3 text-foreground dark:text-white hover:text-brand-secondary transition-colors">
                <span className="p-2 rounded-full bg-muted dark:bg-secondary text-brand-secondary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-foreground dark:text-white hover:text-brand-secondary transition-colors">
                <span className="p-2 rounded-full bg-muted dark:bg-secondary text-brand-secondary shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-3 text-foreground dark:text-white">
                <span className="p-2 rounded-full bg-muted dark:bg-secondary text-brand-secondary shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>{SITE_CONFIG.address}</span>
              </div>
            </div>
            
            <div className="pt-2">
              <h4 className="text-base font-bold leading-6 uppercase tracking-wider text-brand-secondary mb-4">
                Connect With Us
              </h4>
              <div className="flex gap-3">
                <Link href={SITE_CONFIG.socials.facebook} aria-label="Facebook" className="flex items-center justify-center h-10 w-10 rounded-full bg-muted dark:bg-white/10 text-foreground dark:text-white border border-border dark:border-white/10 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link href={SITE_CONFIG.socials.instagram} aria-label="Instagram" className="flex items-center justify-center h-10 w-10 rounded-full bg-muted dark:bg-white/10 text-foreground dark:text-white border border-border dark:border-white/10 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link href={SITE_CONFIG.socials.twitter} aria-label="Twitter" className="flex items-center justify-center h-10 w-10 rounded-full bg-muted dark:bg-white/10 text-foreground dark:text-white border border-border dark:border-white/10 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Umrah Packages */}
          <div>
            <h4 className="flex items-center gap-2 text-base font-bold leading-6 uppercase tracking-wider text-brand-secondary mb-6">
              <Plane className="h-5 w-5 text-brand-secondary" /> Umrah Packages
            </h4>
            <ul className="space-y-3 text-sm leading-6">
              {umrahPackages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href!} className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Holiday Tours & Customer Care */}
          <div>
            <h4 className="flex items-center gap-2 text-base font-bold leading-6 uppercase tracking-wider text-brand-secondary mb-6">
              <Map className="h-5 w-5 text-brand-secondary" /> Holiday Tours
            </h4>
            <ul className="space-y-3 text-sm leading-6">
              {holidayTours.map((item) => (
                <li key={item.href}>
                  <Link href={item.href!} className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="flex items-center gap-2 text-base font-bold leading-6 uppercase tracking-wider text-brand-secondary mt-10 mb-6">
              <LifeBuoy className="h-5 w-5 text-brand-secondary" /> Customer Care
            </h4>
            <ul className="space-y-3 text-sm leading-6">
              {customerCareLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services & Info + Trust Badges */}
          <div>
            <h4 className="flex items-center gap-2 text-base font-bold leading-6 uppercase tracking-wider text-brand-secondary mb-6">
              <Briefcase className="h-5 w-5 text-brand-secondary" /> Travel Services &amp; Info
            </h4>
            <ul className="space-y-3 text-sm leading-6">
              {extraServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href!} className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badge Images */}
            <div className="flex items-center gap-4 mt-8">
              <div className="relative h-20 w-20 rounded-full bg-muted dark:bg-white flex items-center justify-center overflow-hidden shadow-md p-2 border border-border dark:border-transparent">
                <Image 
                  src="/images/iata-logo-black-transparent.png" 
                  alt="IATA Certified" 
                  fill
                  sizes="80px"
                  className="object-contain p-2" 
                />
              </div>
              <div className="relative h-20 w-20 rounded-full bg-muted dark:bg-white flex items-center justify-center overflow-hidden shadow-md p-2 border border-border dark:border-transparent">
                <Image 
                  src="/images/atol-protected-logo-black-tranparent.png" 
                  alt="ATOL Protected" 
                  fill
                  sizes="80px"
                  className="object-contain p-2" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative border-t border-border dark:border-white/5 bg-muted/50 dark:bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground dark:text-white/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© {new Date().getFullYear()} Haram Trip. All rights reserved.</p>
            <span className="hidden sm:inline">|</span>
            <p>ATOL Protected &amp; IATA Certified.</p>
          </div>
          
          <p>
            Powered by{" "}
            <a 
              href="https://crudics.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-brand-secondary hover:underline"
            >
              Crudics
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}