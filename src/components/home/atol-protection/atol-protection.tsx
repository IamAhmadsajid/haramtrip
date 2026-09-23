// src/components/home/atol-protection/atol-protection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  ExternalLink,
  FileCheck2,
  Info,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const protectedItems = [
  "Flights from the UK",
  "Makkah & Madinah hotels",
  "Transfers & ground arrangements",
];

export function AtolProtection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped((prev) => !prev);

  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(24,37,58,0.18),transparent_42%),#09111f] py-16 text-white sm:py-20">
      {/* Same container as Hero / AboutPreview / Reviews */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* =====================================================
            HEADER
            ===================================================== */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-secondary sm:text-base">
            Financial Protection
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground sm:mt-4 sm:text-4xl lg:text-5xl">
            Book with{" "}
            <span className="text-[#f2c62e]">
              ATOL Protection
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base">
            Haram Trip ensures that your eligible flight-inclusive packages are financially protected under ATOL 74904, giving you added confidence and peace of mind when booking your Umrah journey with us.
          </p>
        </header>

        {/* =====================================================
            MAIN GRID
            ===================================================== */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-center gap-10 sm:mt-16 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-14">

          {/* ===================================================
              FLIPPABLE ATOL CARD
              =================================================== */}
          <div className="relative mx-auto h-[470px] w-full max-w-[380px] [perspective:1200px]">
            <div
              className={`relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
            >

              {/* FRONT */}
              <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-[rgb(242,198,46,0.45)] bg-[linear-gradient(145deg,#111c30_0%,#0d1728_55%,#101b2d_100%)] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.25)] [backface-visibility:hidden] sm:p-7">

                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-7 items-center rounded-full border border-[rgb(242,198,46,0.6)] px-3 text-[11px] font-extrabold uppercase tracking-wide text-[#f2c62e]">
                    CAA Registered
                  </span>

                  <button
                    type="button"
                    onClick={flipCard}
                    tabIndex={isFlipped ? -1 : 0}
                    aria-label="Flip ATOL card to see certificate coverage"
                    className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-[rgb(139,158,185,0.22)] bg-[rgb(94,115,145,0.13)] px-3 text-xs font-semibold text-[#8f9db3] transition-all duration-200 hover:-translate-y-px hover:border-[rgb(24,199,138,0.45)] hover:bg-[rgb(24,199,138,0.08)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2c62e]"
                  >
                    Flip Card
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* ATOL Logo */}
                <div className="relative mx-auto mt-6 h-28 w-28 overflow-hidden rounded-full border border-border bg-white p-2 shadow-[0_6px_16px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/images/atol-protected-logo.jpeg"
                    alt="ATOL Protected"
                    fill
                    sizes="112px"
                    className="object-contain p-2"
                  />
                </div>

                {/* Title */}
                <h3 className="m-0 mt-5 text-center font-serif text-2xl font-bold tracking-[-0.02em] text-[#f2c62e]">
                  100% ATOL Protected
                </h3>
                <p className="m-0 mt-1.5 text-center text-sm text-[#c8d0dc]">
                  Official UK Financial Protection
                </p>

                {/* License box */}
                <div className="mt-5 rounded-xl border border-[rgb(112,135,168,0.22)] bg-[rgb(28,44,66,0.55)] px-4 py-3 text-center">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#8f9db3]">
                    Licence Number
                  </span>
                  <strong className="mt-1 block font-mono text-lg font-bold tracking-wide text-white">
                    ATOL 74904
                  </strong>
                </div>

                {/* Bottom */}
                <div className="mt-auto flex items-center justify-between border-t border-[rgb(125,144,171,0.14)] pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18c78a]">
                    <LockKeyhole className="h-4 w-4" />
                    100% Secure Payments
                  </span>
                  <span className="font-mono text-xs text-[#8d9aae]">
                    UK CAA Standard
                  </span>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-[rgb(24,199,138,0.55)] bg-[linear-gradient(145deg,#101b2d_0%,#0d1728_55%,#111d30_100%)] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.25)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7">

                {/* Back header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#18c78a]">
                    <BadgeCheck className="h-4 w-4 shrink-0" />
                    Certificate Coverage
                  </div>

                  <button
                    type="button"
                    onClick={flipCard}
                    tabIndex={isFlipped ? 0 : -1}
                    aria-label="Flip ATOL card back to front"
                    className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-[rgb(139,158,185,0.22)] bg-[rgb(94,115,145,0.13)] px-3 text-xs font-semibold text-[#8f9db3] transition-all duration-200 hover:-translate-y-px hover:border-[rgb(242,198,46,0.45)] hover:bg-[rgb(242,198,46,0.08)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2c62e]"
                  >
                    Flip Back
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* What's protected */}
                <div className="mt-5 rounded-xl border border-[rgb(108,132,166,0.28)] bg-[linear-gradient(145deg,rgba(27,43,66,0.78),rgba(20,33,53,0.9))] p-4 sm:p-5">
                  <h4 className="m-0 text-xs font-black uppercase tracking-wider text-[#f2c62e]">
                    What&apos;s Protected
                  </h4>

                  <ul className="m-0 mt-3 flex list-none flex-col gap-2.5 p-0">
                    {protectedItems.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-[#e1e6ee]">
                        <BadgeCheck className="h-4 w-4 shrink-0 text-[#18c78a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="mt-4 rounded-xl border border-[rgb(108,132,166,0.28)] bg-[rgb(20,33,53,0.6)] p-4 text-sm sm:p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-[#8f9db3]">Licence</span>
                    <strong className="font-mono text-white">ATOL 74904</strong>
                  </div>
                  <div className="mt-2.5 flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-[#8f9db3]">Telephone</span>
                    <strong className="text-white">+44 77 0017 1892</strong>
                  </div>
                  <div className="mt-2.5 flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-[#8f9db3]">Verify online</span>
                    <a
                      href="https://www.atol.org.uk/ATOLCertificate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f28a20] no-underline hover:underline"
                    >
                      atol.org.uk/ATOLCertificate
                    </a>
                  </div>
                </div>

                <p className="m-0 mt-auto pt-4 text-center text-xs leading-relaxed text-[#8f9db3]">
                  Your ATOL Certificate is issued with every eligible protected
                  booking.
                </p>
              </div>

            </div>
          </div>

          {/* ===================================================
              INFORMATION
              =================================================== */}
          <div className="flex flex-col gap-5">

            {/* Complete Financial Protection */}
            <div className="flex items-start gap-4 rounded-2xl border border-[rgb(109,131,162,0.32)] bg-[linear-gradient(135deg,rgba(26,42,65,0.86),rgba(19,32,51,0.82))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgb(242,198,46,0.55)] bg-[rgb(242,198,46,0.07)] text-[#f2c62e]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="m-0 font-serif text-xl font-bold leading-snug text-white">
                  Complete Financial Protection
                </h3>
                <p className="m-0 mt-2 text-sm leading-relaxed text-[#c1cbd9]">
                  At Haram Trip, eligible bookings are protected under the ATOL scheme. If the responsible ATOL holder stops trading, your travel investment remains safe and secure.
                </p>
              </div>
            </div>

            {/* ATOL Certificate Provided */}
            <div className="flex items-start gap-4 rounded-2xl border border-[rgb(109,131,162,0.32)] bg-[linear-gradient(135deg,rgba(26,42,65,0.86),rgba(19,32,51,0.82))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgb(0,168,236,0.55)] bg-[rgb(0,168,236,0.08)] text-[#12b9f4]">
                <FileCheck2 className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="m-0 font-serif text-xl font-bold leading-snug text-white">
                  ATOL Certificate Provided
                </h3>
                <p className="m-0 mt-2 text-sm leading-relaxed text-[#c1cbd9]">
                  When you book with Haram Trip, you will receive an ATOL Certificate after making a payment for an eligible package. It confirms exactly what is protected and identifies the responsible ATOL holder.
                </p>
              </div>
            </div>

            {/* Verification CTA */}
            <div className="flex flex-col items-start justify-between gap-3 rounded-xl border border-[rgb(242,198,46,0.42)] bg-[linear-gradient(90deg,rgba(28,45,68,0.95),rgba(27,43,65,0.85))] p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#f2c62e]">
                <Info className="h-5 w-5 shrink-0" />
                <span>Need assistance verifying your protection details?</span>
              </div>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-extrabold text-[#f2c62e] no-underline transition-all duration-200 hover:translate-x-0.5 hover:text-white"
              >
                Verify Protection
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>

        {/* =====================================================
            MANDATORY ATOL DISCLOSURE (kept visible — required by CAA)
            ===================================================== */}
        <footer className="mx-auto mt-12 max-w-4xl border-t border-[rgb(125,144,171,0.14)] pt-8 text-center sm:mt-16">
          <p className="m-0 text-xs leading-relaxed text-[#8f9db3] sm:text-sm">
              Some of the flights and flight-inclusive holidays on this website are financially protected by the ATOL scheme. But ATOL protection does not apply to all holiday and travel services listed on this website. Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL Certificate then the booking will not be ATOL protected. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. Please see our booking conditions for information, or for more information about financial protection and the ATOL Certificate go to www.atol.org.uk/ATOLCertificate.
            <strong className="text-[#c5ccd8]">Tel: +44 77 0017 1892</strong> ·{" "}
            <strong className="text-[#c5ccd8]">Licence: ATOL 74904</strong> ·{" "}
            <a
              href="https://www.atol.org.uk/ATOLCertificate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f28a20] no-underline hover:underline"
            >
              www.atol.org.uk/ATOLCertificate
            </a>
          </p>
        </footer>

      </div>
    </section>
  );
}