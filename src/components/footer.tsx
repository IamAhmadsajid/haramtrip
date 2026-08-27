// src/components/footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background dark:bg-brand-primary text-foreground dark:text-white border-t border-border transition-colors duration-300">
      {/* Background Glossing / Glow Effects */}
      <div className="absolute top-[-10%] left-[15%] w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-16">

          {/* =========================================================
              COLUMN 1 — BRAND
          ========================================================== */}
          <div className="space-y-6">

            {/* Brand Card */}
            {/* <div className="bg-muted dark:bg-zinc-900 border border-border rounded-xl p-4 flex items-center gap-4 shadow-sm max-w-md"> */}
            <div className="flex items-center gap-4 max-w-md">
              <div className="bg-white p-1.5 rounded-lg flex items-center justify-center shrink-0 border border-border/60 dark:border-white/10">
                <Image
                  src="/haramtrip-logo.png"
                  alt="Haram Trip Logo"
                  width={112}
                  height={112}
                  className="h-28 w-28 object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold leading-tight text-foreground dark:text-white">
                  Haram{" "}
                  <span className="bg-brand-secondary text-white px-2 py-0.5 rounded-md">
                    Trip
                  </span>
                </h3>

                <p className="text-sm text-muted-foreground dark:text-white/60 leading-tight mt-1">
                  Spiritual &amp; Luxury Journeys
                </p>
              </div>
            </div>

            {/* About Text */}
            <p className="text-sm text-muted-foreground dark:text-white/80 leading-6 max-w-md">
              <strong className="text-foreground dark:text-white">
                Haram Trip
              </strong>
              , an ATOL-protected and IATA-certified travel provider, proudly
              offers premium and exclusive{" "}
              <strong className="text-foreground dark:text-white">
                All-Inclusive Umrah &amp; Hajj Packages
              </strong>{" "}
              from the UK. Enjoy exceptional value with the best prices on
              complete travel arrangements — including return flights, luxury
              5-star hotel stays close to the Haram, and seamless customer
              support throughout your holy journey.
            </p>

            {/* =====================================================
                TRUST LOGOS
            ====================================================== */}
            <div className="flex items-center gap-4 pt-1">

              {/* IATA */}
              <div className="relative h-20 w-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md p-2 border border-border">
                <Image
                  src="/images/iata-logo-black-transparent.png"
                  alt="IATA Certified"
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              </div>

              {/* ATOL */}
              <div className="relative h-20 w-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md p-2 border border-border">
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

          {/* =========================================================
              COLUMN 2 — CUSTOMER CARE
          ========================================================== */}
          <div>

            <h4 className="text-base font-bold leading-6 uppercase tracking-wider text-brand-secondary mb-6">
              Customer Care
            </h4>

            <ul className="space-y-3 text-sm leading-6">

              <li>
                <Link
                  href="/rules-and-regulations"
                  className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors"
                >
                  Rules and Regulation
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors"
                >
                  Privacy and Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/umrah-visa-policy"
                  className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors"
                >
                  Umrah Visa Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/faqs"
                  className="text-foreground dark:text-white/80 hover:text-brand-secondary transition-colors"
                >
                  FAQs
                </Link>
              </li>

            </ul>
          </div>

          {/* =========================================================
              COLUMN 3 — GET IN TOUCH + SOCIAL
          ========================================================== */}
          <div>

            {/* Get in Touch */}
            <h4 className="text-base font-bold leading-6 uppercase tracking-wider text-brand-secondary mb-6">
              Get in Touch
            </h4>

            <div className="space-y-5 text-sm leading-6">

              {/* Phone */}
              <a
                href="tel:07700171892"
                className="flex items-start gap-3 text-foreground dark:text-white hover:text-brand-secondary transition-colors"
              >
                <span className="p-2 rounded-full bg-muted dark:bg-secondary text-brand-secondary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>

                <span className="pt-1">
                  07700171892
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@haramtrip.co.uk"
                className="flex items-start gap-3 text-foreground dark:text-white hover:text-brand-secondary transition-colors"
              >
                <span className="p-2 rounded-full bg-muted dark:bg-secondary text-brand-secondary shrink-0">
                  <Mail className="h-4 w-4" />
                </span>

                <span className="pt-1 break-all">
                  info@haramtrip.co.uk
                </span>
              </a>

              {/* London Address */}
              <div className="flex items-start gap-3 text-foreground dark:text-white">
                <span className="p-2 rounded-full bg-muted dark:bg-secondary text-brand-secondary shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>

                <span>
                  13 Station Road,
                  <br />
                  London SE25 5AH
                </span>
              </div>

              {/* Birmingham Address */}
              <div className="flex items-start gap-3 text-foreground dark:text-white">
                <span className="p-2 rounded-full bg-muted dark:bg-secondary text-brand-secondary shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>

                <span>
                  156 Great Charles St,
                  <br />
                  Queensway,
                  <br />
                  Birmingham B3 3HN
                </span>
              </div>
            </div>

            {/* =====================================================
                SOCIAL ACCOUNTS
            ====================================================== */}
            <div className="pt-8">

              <h4 className="text-base font-bold leading-6 uppercase tracking-wider text-brand-secondary mb-4">
                Follow &amp; Connect With Us
              </h4>

              <div className="flex flex-wrap gap-3">

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/haramtrip1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-muted dark:bg-white/10 text-foreground dark:text-white border border-border dark:border-white/10 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all"
                >
                  <InstagramIcon className="h-5 w-5" />
                </Link>

                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/profile.php?id=61585943232918"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-muted dark:bg-white/10 text-foreground dark:text-white border border-border dark:border-white/10 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all"
                >
                  <FacebookIcon className="h-5 w-5" />
                </Link>

                {/* Pinterest */}
                <Link
                  href="https://uk.pinterest.com/haramtrip/?actingBusinessId=1109574564352379024"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-muted dark:bg-white/10 text-foreground dark:text-white border border-border dark:border-white/10 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all"
                >
                  <PinterestIcon className="h-5 w-5" />
                </Link>

                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/@Haramtripuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-muted dark:bg-white/10 text-foreground dark:text-white border border-border dark:border-white/10 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all"
                >
                  <YouTubeIcon className="h-5 w-5" />
                </Link>

                {/* TikTok */}
                <Link
                  href="https://www.tiktok.com/@haramtripofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-muted dark:bg-white/10 text-foreground dark:text-white border border-border dark:border-white/10 hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all"
                >
                  <TikTokIcon className="h-5 w-5" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM COPYRIGHT BAR
      ========================================================== */}
      <div className="relative border-t border-border dark:border-white/5 bg-muted/50 dark:bg-black/20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground dark:text-white/50">

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Haram Trip. All rights reserved.
            </p>

            <span className="hidden sm:inline">|</span>

            <p>
              ATOL Protected &amp; IATA Certified.
            </p>
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