"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CarFront,
  FileCheck2,
  Plane,
} from "lucide-react";

import "./travel-services.css";

const services = [
  {
    title: "Airport Transfers",
    description: "Jeddah, Madinah & UK",
    button: "Book Transfer",
    href: "/extra/airport-transfers",
    icon: CarFront,
  },
  {
    title: "Visa Services",
    description: "Saudi Tourist & Umrah",
    button: "Express Visa",
    href: "/extra/visa-services",
    icon: FileCheck2,
  },
  {
    title: "Flight Services",
    description: "Flexible flights for your journey",
    button: "Find Flights",
    href: "/extra/flight-services",
    icon: Plane,
  },
];

export function TravelServices() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = 390;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="travel-services">
      <div className="travel-services__container">

        {/* Section Heading */}
        <div className="travel-services__heading">
          <h2>Our Travel Services</h2>

          <p>
            Everything you need for a smooth, comfortable and
            well-supported journey.
          </p>
        </div>

        {/* Slider Area */}
        <div className="travel-services__slider-wrapper">

          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous travel services"
            className="travel-services__arrow travel-services__arrow--left"
            onClick={() => scrollSlider("left")}
          >
            <ChevronLeft />
          </button>

          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            className="travel-services__track"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="travel-service-card"
                >
                  {/* Icon */}
                  <div className="travel-service-card__icon">
                    <Icon />
                  </div>

                  {/* Content */}
                  <div className="travel-service-card__content">
                    <h3>{service.title}</h3>

                    <span className="travel-service-card__badge">
                      {service.description}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="travel-service-card__button"
                  >
                    <span>{service.button}</span>
                    <ArrowRight />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next travel services"
            className="travel-services__arrow travel-services__arrow--right"
            onClick={() => scrollSlider("right")}
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}