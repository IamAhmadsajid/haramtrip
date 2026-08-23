"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./umrah-packages.css";

const packages = [
  {
    title: "5 Star Umrah Packages",
    description: "Luxury 5-star accommodations",
    href: "/umrah-packages/5-star",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "5 STAR",
  },
  {
    title: "Ramadan Umrah",
    description: "Perform Umrah in the holy month",
    href: "/umrah-packages/ramadan",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "RAMADAN",
  },
  {
    title: "December Umrah",
    description: "Winter break Umrah packages",
    href: "/umrah-packages/december",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "WINTER",
  },
  {
    title: "Easter Umrah",
    description: "Family Umrah during Easter holidays",
    href: "/umrah-packages/easter",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "FAMILY",
  },
  {
    title: "Women Umrah Packages",
    description: "100% safe & 24/7 supported female pilgrimages",
    href: "/umrah-packages/women",
    image: "/images/umrah-packages/five-star1.webp",
    badge: "WOMEN",
  },
];

export function UmrahPackages() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      ".specialized-umrah-card"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 22;

    const amount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="specialized-umrah">
      <div className="specialized-umrah__container">

        {/* =====================================================
            HEADER
            ===================================================== */}
        <div className="specialized-umrah__header">

          <div className="specialized-umrah__heading">
            <span className="specialized-umrah__eyebrow">
              CURATED FOR YOUR JOURNEY
            </span>

            <h2>Specialized Umrah Packages</h2>

            <p>
              Carefully selected Umrah experiences designed around
              different seasons, needs and ways of travelling.
            </p>
          </div>

          {/* TOP RIGHT NAVIGATION */}
          <div className="specialized-umrah__top-navigation">
            <button
              type="button"
              aria-label="Previous Umrah packages"
              className="specialized-umrah__top-button"
              onClick={() => scrollSlider("left")}
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              aria-label="Next Umrah packages"
              className="specialized-umrah__top-button"
              onClick={() => scrollSlider("right")}
            >
              <ChevronRight />
            </button>
          </div>

        </div>


        {/* =====================================================
            SLIDER
            ===================================================== */}
        <div className="specialized-umrah__slider-wrapper">

          {/* LEFT SIDE BUTTON */}
          <button
            type="button"
            aria-label="Previous Umrah packages"
            className="
              specialized-umrah__side-button
              specialized-umrah__side-button--left
            "
            onClick={() => scrollSlider("left")}
          >
            <ChevronLeft />
          </button>


          {/* TRACK */}
          <div
            ref={sliderRef}
            className="specialized-umrah__track"
          >
            {packages.map((pkg) => (
              <article
                key={pkg.href}
                className="specialized-umrah-card"
              >

                {/* =================================================
                    IMAGE
                    ================================================= */}
                <div className="specialized-umrah-card__image">

                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="
                      (max-width: 640px) 88vw,
                      (max-width: 900px) 46vw,
                      25vw
                    "
                    className="specialized-umrah-card__image-element"
                  />

                  {/* Image darkening overlay */}
                  <div className="specialized-umrah-card__image-overlay" />

                  {/* TOP LEFT BADGE */}
                  <span className="specialized-umrah-card__badge">
                    {pkg.badge}
                  </span>
                </div>


                {/* =================================================
                    CONTENT
                    ================================================= */}
                <div className="specialized-umrah-card__content">

                  <h3>{pkg.title}</h3>

                  <p>{pkg.description}</p>

                  <Link
                    href={pkg.href}
                    className="specialized-umrah-card__button"
                  >
                    <span>Explore Package</span>
                    <ArrowRight />
                  </Link>

                </div>

              </article>
            ))}
          </div>


          {/* RIGHT SIDE BUTTON */}
          <button
            type="button"
            aria-label="Next Umrah packages"
            className="
              specialized-umrah__side-button
              specialized-umrah__side-button--right
            "
            onClick={() => scrollSlider("right")}
          >
            <ChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}