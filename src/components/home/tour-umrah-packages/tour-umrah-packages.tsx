"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import "./tour-umrah-packages.css";

const tourPackages = [
  {
    title: "Dubai Holidays",
    description: "Luxury desert, skyline & family attractions",
    href: "/tour-umrah-packages/dubai",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "DUBAI",
  },
  {
    title: "Egypt Holidays",
    description: "Ancient Pyramids, Nile cruises & Islamic Cairo",
    href: "/tour-umrah-packages/egypt",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "EGYPT",
  },
  {
    title: "Turkey Holidays",
    description: "Istanbul Bosphorus, Cappadocia & cultural tours",
    href: "/tour-umrah-packages/turkey",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "TURKEY",
  },
];

export function TourUmrahPackages() {
  return (
    <section className="tour-umrah">
      <div className="tour-umrah__container">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}
        <div className="tour-umrah__header">
          <span className="tour-umrah__eyebrow">
            BEYOND THE PILGRIMAGE
          </span>

          <h2>Umrah Holiday Packages</h2>

          <p>
            Combine your sacred Umrah with memorable cultural stopovers
          </p>
        </div>


        {/* =====================================================
            CARDS
            ===================================================== */}
        <div className="tour-umrah__cards">
          {tourPackages.map((pkg) => (
            <article
              key={pkg.href}
              className="tour-umrah-card"
            >

              {/* =================================================
                  IMAGE
                  ================================================= */}
              <div className="tour-umrah-card__image">

                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="
                    (max-width: 640px) 86vw,
                    (max-width: 1024px) 45vw,
                    33vw
                  "
                  className="tour-umrah-card__image-element"
                />

                <div className="tour-umrah-card__image-overlay" />

                {/* IMAGE BADGE */}
                <span className="tour-umrah-card__badge">
                  {pkg.badge}
                </span>

              </div>


              {/* =================================================
                  CONTENT
                  ================================================= */}
              <div className="tour-umrah-card__content">

                <h3>{pkg.title}</h3>

                <p>{pkg.description}</p>

                <Link
                  href={pkg.href}
                  className="tour-umrah-card__button"
                >
                  <span>Explore Package</span>
                  <ArrowRight />
                </Link>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}