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

import "./atol-protection.css";

export function AtolProtection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <section className="atol-protection">
      <div className="atol-protection__container">

        {/* HEADER */}
        <div className="atol-protection__header">
          <h2>
            100% Financial Protection with{" "}
            <span>ATOL Coverage</span>
          </h2>

          <p>
            Your sacred pilgrimage and family holiday payments are completely
            protected under UK financial regulations. Book your package with
            absolute peace of mind.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="atol-protection__grid">

          {/* ===================================================
              FLIPPABLE ATOL CARD
              =================================================== */}

          <div className={`atol-card-flipper ${isFlipped ? "is-flipped" : ""}`}>

            <div className="atol-card-flipper__inner">

              {/* =================================================
                  FRONT
                  ================================================= */}

              <div className="atol-card atol-card--front">

                {/* Top row */}
                <div className="atol-card__top">
                  <span className="atol-card__badge">
                    CAA REGISTERED
                  </span>

                  <button
                    type="button"
                    className="atol-card__flip"
                    onClick={flipCard}
                    aria-label="Flip ATOL card to certificate coverage"
                  >
                    Flip Card
                    <RotateCcw />
                  </button>
                </div>

                {/* Logo */}
                <div className="atol-card__logo">
                  <div className="atol-card__logo-inner">
                    <div className="atol-card__logo-mark">
                      <span className="atol-card__logo-shield">
                        ◢
                      </span>

                      <span className="atol-card__logo-cut">
                        ◥
                      </span>
                    </div>

                    <span className="atol-card__logo-text">
                      ATOL
                    </span>

                    <span className="atol-card__logo-protected">
                      PROTECTED
                    </span>
                  </div>

                  <span className="atol-card__verified">
                    ✓
                  </span>
                </div>

                {/* Main title */}
                <h3>
                  100% ATOL PROTECTED
                </h3>

                <p className="atol-card__subtitle">
                  Official UK Financial Protection
                </p>

                {/* Description */}
                <div className="atol-card__description">
                  Guaranteed financial security for your flights,
                  Makkah &amp; Madinah hotels, and Umrah ground
                  arrangements.
                </div>

                {/* Bottom */}
                <div className="atol-card__bottom">
                  <span className="atol-card__secure">
                    <LockKeyhole />
                    100% Secure Payments
                  </span>

                  <span className="atol-card__standard">
                    UK CAA Standard
                  </span>
                </div>

              </div>


              {/* =================================================
                  BACK
                  ================================================= */}

              <div className="atol-card atol-card--back">

                {/* Back header */}
                <div className="atol-card__back-header">

                  <div className="atol-card__back-title">
                    <BadgeCheck />

                    <span>
                      ATOL CERTIFICATE COVERAGE
                    </span>
                  </div>

                  <span className="atol-card__back-view">
                    Back View
                  </span>

                </div>


                {/* Policy box */}
                <div className="atol-card__policy">

                  <h4>
                    ATOL PROTECTION POLICY
                  </h4>

                  <p>
                    Many of the flights and flight inclusive holidays on this
                    website are financially protected by the ATOL scheme. But
                    ATOL protection does not apply to all holiday and flight
                    services listed in this website. If you do not receive an
                    ATOL Certificate then the booking will not be ATOL
                    protected. If you do receive an ATOL Certificate but all
                    the parts of your trip are not listed on it, those parts
                    will not be ATOL protected.
                  </p>

                  <p>
                    Please ask us to confirm what protection may apply to your
                    booking.
                  </p>

                  <div className="atol-card__contact">
                    <strong>
                      Tel: 0203 504 1840
                    </strong>
                  </div>

                  <div className="atol-card__license">
                    <strong>
                      License Number: ATOL 12831
                    </strong>
                  </div>

                  <div className="atol-card__certificate">
                    <strong>
                      ATOL Certificate:
                    </strong>

                    <span>
                      www.atol.org.uk/ATOLCertificate
                    </span>
                  </div>

                </div>


                {/* Flip back */}
                <button
                  type="button"
                  className="atol-card__flip-back"
                  onClick={flipCard}
                  aria-label="Flip ATOL card back to front"
                >
                  <span>Flip Back</span>
                  <RotateCcw />
                </button>

              </div>

            </div>
          </div>


          {/* ===================================================
              INFORMATION
              =================================================== */}

          <div className="atol-protection__details">

            {/* Security */}
            <div className="atol-info-card">

              <div className="atol-info-card__icon atol-info-card__icon--gold">
                <ShieldCheck />
              </div>

              <div className="atol-info-card__content">
                <h3>
                  Complete Financial Security
                </h3>

                <p>
                  All flight-inclusive packages are 100% financially
                  protected under UK CAA guidelines. Your payments
                  remain secure at all times.
                </p>
              </div>

            </div>


            {/* Certificate */}
            <div className="atol-info-card">

              <div className="atol-info-card__icon atol-info-card__icon--blue">
                <FileCheck2 />
              </div>

              <div className="atol-info-card__content">
                <h3>
                  Instant ATOL Certificate
                </h3>

                <p>
                  An official CAA ATOL Certificate is generated
                  instantly upon booking, detailing every aspect
                  of your travel itinerary.
                </p>
              </div>

            </div>


            {/* Verification CTA */}
            <div className="atol-verification">

              <div className="atol-verification__question">
                <Info />

                <span>
                  Need assistance verifying your protection details?
                </span>
              </div>

              <Link
                href="/customer-care/atol-protection"
                className="atol-verification__link"
              >
                Verify Protection
                <ExternalLink />
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
