
"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

import "./pilgrim-trust-cta.css";

export function PilgrimTrustCta() {
  return (
    <section className="pilgrim-trust-cta">
      <div className="pilgrim-trust-cta__container">

        <div className="pilgrim-trust-cta__content">

          {/* =====================================================
              ICON
              ===================================================== */}

          <div className="pilgrim-trust-cta__icon">
            <ShieldCheck />
          </div>


          {/* =====================================================
              TEXT
              ===================================================== */}

          <div className="pilgrim-trust-cta__copy">

            <h2>
              Over 1,000+ Happy UK Pilgrims Served
            </h2>

            <p>
              Book your custom spiritual journey with complete peace
              of mind and 24/7 dedicated assistance.
            </p>

          </div>

        </div>


        {/* =======================================================
            CTA
            ======================================================= */}

        <Link
          href="/contact"
          className="pilgrim-trust-cta__button"
        >
          <MessageSquare />

          <span>
            Speak With Travel Consultant
          </span>

          <ArrowRight />

        </Link>

      </div>
    </section>
  );
}
