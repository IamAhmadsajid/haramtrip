// src/components/home/atol-protection/atol-protection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  FileCheck2,
  Info,
  LockKeyhole,
  ShieldCheck,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";

export function AtolProtection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <section 
      className="relative w-full py-[72px] pb-[78px] max-[900px]:py-[62px] max-[900px]:pb-[68px] max-[640px]:py-[52px] max-[640px]:pb-[58px] overflow-hidden text-white bg-[radial-gradient(circle_at_50%_0%,rgba(24,37,58,0.18),transparent_42%),#09111f]"
    >
      <div className="mx-auto w-[min(1030px,calc(100%-32px))]">
        
        {/* HEADER */}
        <div className="max-w-[670px] mx-auto mb-[42px] max-[900px]:mb-[34px] max-[640px]:mb-[30px] text-center">
          <h2 className="m-0 font-serif text-[35px] max-[900px]:text-[31px] max-[640px]:text-[27px] max-[400px]:text-[24px] leading-[1.18] max-[640px]:leading-[1.16] font-bold tracking-[-0.025em] text-white">
            100% Financial Protection with{" "}
            <span className="text-[#f2c62e]">ATOL Coverage</span>
          </h2>
          <p className="max-w-[570px] mx-auto mt-[13px] max-[640px]:mt-[11px] text-[#c5ccd8] text-[11px] max-[640px]:text-[10px] leading-[1.7] max-[640px]:leading-[1.65]">
            Your sacred pilgrimage and family holiday payments are completely protected under UK financial regulations. Book your package with absolute peace of mind.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-[347px_minmax(0,1fr)] max-[900px]:grid-cols-[310px_minmax(0,1fr)] max-[760px]:grid-cols-1 max-[760px]:max-w-[540px] max-[760px]:mx-auto items-center gap-[85px] max-[900px]:gap-[42px] max-[640px]:gap-[28px]">
          
          {/* ===================================================
              FLIPPABLE ATOL CARD
              =================================================== */}
          <div className="relative w-[347px] h-[369px] max-[900px]:w-[310px] max-[900px]:h-[355px] max-[760px]:w-full max-[760px]:max-w-[347px] max-[760px]:mx-auto max-[640px]:h-[365px] max-[400px]:h-[360px] [perspective:1200px]">
            
            <div 
              className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
            >
              
              {/* FRONT */}
              <div className="absolute inset-0 w-full h-full min-h-0 box-border overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden] p-[26px_27px_24px] max-[900px]:px-[23px] max-[640px]:p-[21px_18px_20px] border border-[rgb(242,198,46,0.45)] rounded-[20px] max-[640px]:rounded-[17px] bg-[linear-gradient(145deg,#111c30_0%,#0d1728_55%,#101b2d_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.025)]">
                
                {/* Top row */}
                <div className="flex items-center justify-between mb-[28px] max-[640px]:mb-[24px]">
                  <span className="inline-flex items-center justify-center min-h-[24px] px-[11px] border border-[rgb(242,198,46,0.6)] rounded-full text-[#f2c62e] text-[8px] leading-none font-extrabold tracking-[0.04em]">
                    CAA REGISTERED
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-[5px] min-h-[24px] px-[9px] border border-[rgb(139,158,185,0.22)] rounded-full bg-[rgb(94,115,145,0.13)] text-[#8f9db3] text-[8px] leading-none font-medium cursor-pointer transition-all duration-200 hover:text-white hover:border-[rgb(24,199,138,0.45)] hover:bg-[rgb(24,199,138,0.08)] hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-[#f2c62e] focus-visible:outline-offset-2"
                    onClick={flipCard}
                    aria-label="Flip ATOL card to certificate coverage"
                  >
                    Flip Card
                    <RotateCcw className="w-[11px] h-[11px] flex-[0_0_auto]" />
                  </button>
                </div>

                {/* Logo */}
                <div className="relative flex items-center justify-center w-[116px] h-[86px] mx-auto mb-[14px] rounded-[14px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                  <div className="relative flex flex-col items-center justify-center w-[70px] h-[70px] border-2 border-[#111111] rounded-full text-[#111111]">
                    <div className="relative flex items-center justify-center w-[29px] h-[29px] mb-[2px]">
                      <span className="absolute left-[4px] top-[2px] text-[#050505] text-[31px] leading-none -rotate-[8deg]">◢</span>
                      <span className="absolute right-[2px] top-0 text-white text-[28px] leading-none rotate-[8deg]">◥</span>
                    </div>
                    <span className="relative z-[2] text-[7px] leading-none font-black tracking-[0.04em]">ATOL</span>
                    <span className="absolute bottom-[10px] left-1/2 w-max -translate-x-1/2 text-[5px] font-black tracking-[0.08em]">PROTECTED</span>
                  </div>
                  <span className="absolute right-[1px] bottom-[-5px] flex items-center justify-center w-[24px] h-[24px] border-2 border-[#09111f] rounded-full bg-[#18c78a] text-[#061c14] text-[12px] font-black">✓</span>
                </div>

                {/* Main title */}
                <h3 className="m-0 text-center font-serif text-[20px] max-[640px]:text-[19px] leading-[1.2] font-bold tracking-[-0.02em] text-[#f2c62e]">
                  100% ATOL PROTECTED
                </h3>

                <p className="mt-[7px] text-center text-[#c8d0dc] text-[9px] leading-[1.4]">
                  Official UK Financial Protection
                </p>

                {/* Description */}
                <div className="mt-[13px] p-[10px_12px] border border-[rgb(112,135,168,0.22)] rounded-[10px] bg-[rgb(28,44,66,0.55)] text-[#d0d7e2] text-center text-[9px] max-[640px]:text-[8.5px] leading-[1.55]">
                  Guaranteed financial security for your flights, Makkah &amp; Madinah hotels, and Umrah ground arrangements.
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-[25px] max-[640px]:mt-[22px] pt-[12px] border-t border-[rgb(125,144,171,0.14)]">
                  <span className="inline-flex items-center gap-[6px] text-[#18c78a] text-[9px] max-[400px]:text-[8px] leading-none font-bold">
                    <LockKeyhole className="w-[13px] h-[13px] flex-[0_0_auto]" />
                    100% Secure Payments
                  </span>
                  <span className="text-[#8d9aae] font-mono text-[8px] max-[400px]:text-[7px] leading-none">
                    UK CAA Standard
                  </span>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 w-full h-full min-h-0 box-border overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden] flex flex-col p-[25px_27px_20px] max-[900px]:px-[23px] max-[640px]:p-[21px_18px_18px] border border-[rgb(24,199,138,0.55)] rounded-[20px] max-[640px]:rounded-[17px] bg-[linear-gradient(145deg,#101b2d_0%,#0d1728_55%,#111d30_100%)] [transform:rotateY(180deg)] shadow-[0_20px_45px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.025)]">
                
                {/* Back header */}
                <div className="flex items-center justify-between gap-[10px] mb-[12px]">
                  <div className="flex items-center gap-[7px] min-w-0 text-[#18c78a] text-[9px] max-[640px]:text-[8px] max-[400px]:text-[7.5px] leading-none font-black tracking-[0.025em]">
                    <BadgeCheck className="w-[14px] h-[14px] flex-[0_0_auto]" />
                    <span>ATOL CERTIFICATE COVERAGE</span>
                  </div>
                  <span className="flex-[0_0_auto] text-[#8996a9] text-[8px] max-[640px]:text-[7px] leading-none font-semibold">
                    Back View
                  </span>
                </div>

                {/* Policy box */}
                <div className="flex-1 min-h-0 p-[13px_11px_12px] max-[640px]:p-[12px_10px_11px] border border-[rgb(108,132,166,0.28)] rounded-[11px] bg-[linear-gradient(145deg,rgba(27,43,66,0.78),rgba(20,33,53,0.9))] overflow-hidden">
                  <h4 className="m-0 mb-[8px] max-[640px]:mb-[7px] text-[#f2c62e] text-[8px] max-[640px]:text-[7.5px] leading-none font-black tracking-[0.04em]">
                    ATOL PROTECTION POLICY
                  </h4>
                  <p className="m-0 mb-[11px] max-[640px]:mb-[10px] text-[#e1e6ee] text-[8.5px] max-[640px]:text-[8px] max-[400px]:text-[7.6px] leading-[1.58] max-[640px]:leading-[1.52] max-[400px]:leading-[1.5]">
                    Many of the flights and flight inclusive holidays on this website are financially protected by the ATOL scheme. But ATOL protection does not apply to all holiday and flight services listed in this website. If you do not receive an ATOL Certificate then the booking will not be ATOL protected. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected.
                  </p>
                  <p className="m-0 mb-[11px] max-[640px]:mb-[10px] text-[#e1e6ee] text-[8.5px] max-[640px]:text-[8px] max-[400px]:text-[7.6px] leading-[1.58] max-[640px]:leading-[1.52] max-[400px]:leading-[1.5]">
                    Please ask us to confirm what protection may apply to your booking.
                  </p>
                  <div className="mt-[1px] text-[#e8edf4] text-[8.5px] max-[640px]:text-[8px] max-[400px]:text-[7.6px] leading-[1.4]">
                    <strong>Tel: 0203 504 1840</strong>
                  </div>
                  <div className="mt-[12px] max-[640px]:mt-[10px] text-[#e8edf4] text-[8.5px] max-[640px]:text-[8px] max-[400px]:text-[7.6px] leading-[1.4]">
                    <strong>License Number: ATOL 12831</strong>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-[3px] mt-[5px] text-[#e8edf4] text-[8.5px] max-[640px]:text-[8px] max-[400px]:text-[7.6px] leading-[1.4]">
                    <strong>ATOL Certificate:</strong>
                    <span className="text-[#f28a20]">www.atol.org.uk/ATOLCertificate</span>
                  </div>
                </div>

                {/* Flip back */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-[5px] self-center mt-[11px] max-[640px]:mt-[9px] p-0 border-0 bg-transparent text-[#f2c62e] text-[9px] max-[640px]:text-[8px] leading-none font-extrabold cursor-pointer transition-all duration-200 hover:text-white hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-[#f2c62e] focus-visible:outline-offset-2"
                  onClick={flipCard}
                  aria-label="Flip ATOL card back to front"
                >
                  <span>Flip Back</span>
                  <RotateCcw className="w-[13px] h-[13px] flex-[0_0_auto]" />
                </button>
              </div>

            </div>
          </div>

          {/* ===================================================
              INFORMATION
              =================================================== */}
          <div className="flex flex-col gap-[14px]">
            
            {/* Security */}
            <div className="flex items-start gap-[15px] min-h-[104px] max-[640px]:min-h-0 p-[18px_19px] max-[640px]:p-4 border border-[rgb(109,131,162,0.32)] rounded-[14px] max-[640px]:rounded-[13px] bg-[linear-gradient(135deg,rgba(26,42,65,0.86),rgba(19,32,51,0.82))] shadow-[inset_0_1px_0_rgba(255,255,255,0.018)]">
              <div className="flex items-center justify-center w-[39px] h-[39px] flex-[0_0_39px] rounded-[10px] border border-[rgb(242,198,46,0.55)] bg-[rgb(242,198,46,0.07)] text-[#f2c62e]">
                <ShieldCheck className="w-[18px] h-[18px]" />
              </div>
              <div className="min-w-0">
                <h3 className="mt-[1px] text-white font-serif text-[16px] max-[640px]:text-[15px] leading-[1.2] font-bold">
                  Complete Financial Security
                </h3>
                <p className="max-w-[500px] mt-[7px] text-[#c1cbd9] text-[9.5px] max-[640px]:text-[9px] leading-[1.6]">
                  All flight-inclusive packages are 100% financially protected under UK CAA guidelines. Your payments remain secure at all times.
                </p>
              </div>
            </div>

            {/* Certificate */}
            <div className="flex items-start gap-[15px] min-h-[104px] max-[640px]:min-h-0 p-[18px_19px] max-[640px]:p-4 border border-[rgb(109,131,162,0.32)] rounded-[14px] max-[640px]:rounded-[13px] bg-[linear-gradient(135deg,rgba(26,42,65,0.86),rgba(19,32,51,0.82))] shadow-[inset_0_1px_0_rgba(255,255,255,0.018)]">
              <div className="flex items-center justify-center w-[39px] h-[39px] flex-[0_0_39px] rounded-[10px] border border-[rgb(0,168,236,0.55)] bg-[rgb(0,168,236,0.08)] text-[#12b9f4]">
                <FileCheck2 className="w-[18px] h-[18px]" />
              </div>
              <div className="min-w-0">
                <h3 className="mt-[1px] text-white font-serif text-[16px] max-[640px]:text-[15px] leading-[1.2] font-bold">
                  Instant ATOL Certificate
                </h3>
                <p className="max-w-[500px] mt-[7px] text-[#c1cbd9] text-[9.5px] max-[640px]:text-[9px] leading-[1.6]">
                  An official CAA ATOL Certificate is generated instantly upon booking, detailing every aspect of your travel itinerary.
                </p>
              </div>
            </div>

            {/* Verification CTA */}
            <div className="flex items-center justify-between gap-[20px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[12px] min-h-[49px] max-[640px]:min-h-0 py-0 max-[640px]:py-[14px] px-[15px] border border-[rgb(242,198,46,0.42)] rounded-[12px] bg-[linear-gradient(90deg,rgba(28,45,68,0.95),rgba(27,43,65,0.85))]">
              <div className="flex items-center gap-[9px] min-w-0 text-[#f2c62e] text-[9px] leading-[1.3] font-bold">
                <Info className="w-[15px] h-[15px] flex-[0_0_auto]" />
                <span>Need assistance verifying your protection details?</span>
              </div>
              <Link 
                href="/customer-care/atol-protection" 
                className="inline-flex items-center gap-[5px] flex-[0_0_auto] max-[640px]:self-end text-[#f2c62e] no-underline text-[9px] leading-none font-extrabold transition-all duration-200 hover:text-white hover:translate-x-[2px]"
              >
                Verify Protection
                <ExternalLink className="w-[11px] h-[11px]" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}