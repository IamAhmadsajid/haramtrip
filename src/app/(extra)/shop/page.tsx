// src/app/(extra)/shop/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  MessageCircle,
  CheckCircle2,
  Ruler,
  Scale,
  Layers,
  WashingMachine,
  Star,
  Phone,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { PlanUmrahDialog } from "@/components/home/hero/custom-dialogs/plan-umrah-dialog";

const ihramProducts = [
  {
    id: "ihram-adults",
    name: "Ihram for Adults",
    price: "£15.00",
    image: "/images/ihram-adults.webp",
    description: "Standard 2-Piece Combed Cotton Ihram. Crafted from 100% pure combed cotton. Extra absorbent, unstitched, breathable, and designed for optimal comfort during Tawaf and Sa’i.",
    features: [
      "100% Pure Combed Cotton (Zero Synthetic Blends)",
      "Fully Shariah Compliant Seamless 2-Piece Set",
      "Superior Absorbency & Breathable Weave",
      "Soft Non-Chafing Texture for Long Walks",
      "Includes Upper Sheet (Rida) & Lower Sheet (Izar)"
    ],
    specs: [
      { icon: Ruler, label: "Dimensions", value: "110 cm × 220 cm" },
      { icon: Scale, label: "Weight", value: "~1200g - 1400g" },
      { icon: Layers, label: "Material", value: "100% High-Grade Cotton" },
      { icon: WashingMachine, label: "Care", value: "Machine washable" }
    ]
  },
  {
    id: "ihram-children",
    name: "Ihram for Children",
    price: "£10.00",
    image: "/images/ihram-adults.webp",
    description: "Junior Sized 2-Piece Cotton Ihram for Boys. Proportioned specifically for children and young boys performing Umrah. Lightweight, soft on sensitive skin, and tailored to prevent dragging.",
    features: [
      "Tailored Child/Junior Proportions (Ages 4-12)",
      "Ultra-Lightweight & Non-Restrictive Fit",
      "Hypoallergenic Soft Breathable Cotton",
      "Fully Shariah Compliant Seamless Design",
      "Easy to Secure with Standard Belts"
    ],
    specs: [
      { icon: Ruler, label: "Dimensions", value: "75 cm × 150 cm" },
      { icon: Scale, label: "Weight", value: "~650g - 800g" },
      { icon: Layers, label: "Material", value: "100% Soft Cotton" },
      { icon: WashingMachine, label: "Care", value: "Machine washable" }
    ]
  }
];

const kitProducts = [
  {
    id: "kit-basic",
    name: "Umrah Basic Kit",
    price: "£25.00",
    tagline: "Essential Starter Kit",
    description: "The fundamental essentials pack covering your primary ritual and hygienic requirements during Umrah in Makkah and Madinah.",
    features: [
      "Unscented / Fragrance-Free Soap Bar (Ihram Safe)",
      "Unscented Wet Wipes & Sanitiser (Alcohol-Free)",
      "Adjustable Ihram Waist Belt with Secure Zip Pockets",
      "Digital Tally Finger Counter (for Tawaf & Dhikr)",
      "Waterproof Shoe / Slipper Drawstring Bag",
      "Pocket Umrah Step-by-Step Dua & Guide Booklet"
    ],
    isPopular: false
  },
  {
    id: "kit-premium",
    name: "Umrah Premium Kit",
    price: "£30.00",
    tagline: "Most Popular All-in-One Pack",
    description: "Comprehensive pilgrim pack with added comfort accessories, personal care items, and anti-theft security features for complete peace of mind.",
    features: [
      "All Items Included in the Basic Kit",
      "Anti-Theft Hidden Neck & Chest Passport Pouch",
      "Foldable Pocket Travel Prayer Mat with Compass",
      "Unscented Body Wash & Shampoo (Travel Size)",
      "Miswak (Natural Toothbrush) with Protective Case",
      "Silicone Tawaf Counter Ring & Safety Pin Set",
      "Heavy-Duty Luggage Essentials Organizer"
    ],
    isPopular: true
  },
  {
    id: "kit-luxury",
    name: "Umrah Luxury Kit",
    price: "£35.00",
    tagline: "Ultimate Comfort & Full Pack",
    description: "Our top-tier executive pilgrim kit featuring premium velvet accessories, complete fragrance-free travel toiletries, and protective gear.",
    features: [
      "All Items Included in Basic & Premium Kits",
      "Padded Velvet Foldable Travel Prayer Mat",
      "Ergonomic Ihram Belt with RFID Security Pocket",
      "Full Fragrance-Free Toiletries Set (Soap, Lotion, Lip Balm, Sanitiser)",
      "Stainless Steel Folding Scissors (for Halq/Taqseer)",
      "Universal UK-to-Saudi Multi-Plug Travel Adapter",
      "Water-Resistant Shoulder Travel Bag"
    ],
    isPopular: false
  }
];

const orderSteps = [
  {
    title: "Direct WhatsApp Inquiry",
    desc: "Click any product button to open WhatsApp with your pre-selected items. Tell us your delivery postcode or preferred collection date.",
  },
  {
    title: "Payment & Confirmation",
    desc: "Receive secure payment details (bank transfer or card) and get an immediate order receipt with tracking confirmation.",
  },
  {
    title: "Delivery or Office Pick-Up",
    desc: "Dispatched via Royal Mail 1st Class / Tracked 24, or collect directly from our central London office before your flight.",
  },
];

export default function ShopPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"ihram" | "kits">("ihram");

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader
        title="Ihram & Umrah Shop"
        subtitle="Essential Pilgrimage Supplies"
        description="Premium quality Ihram, prayer mats, and travel accessories curated for your spiritual journey. High-absorbency, seam-free white cotton sheets designed for maximum comfort in Saudi heat."
        image="/page-headers-images/Ihram & Umrah Shop.jpg"
      />

      {/* 2. Product Browser — segmented tabs, no grid-of-matching-cards */}
      <section className="border-b border-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          {/* Segmented Toggle */}
          <div className="mx-auto mb-14 flex w-full max-w-md items-center rounded-full border border-border bg-muted/40 p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("ihram")}
              className={`flex-1 rounded-full py-2.5 text-sm font-bold transition-all ${
                activeTab === "ihram"
                  ? "bg-brand-primary text-white shadow-sm dark:bg-brand-secondary dark:text-brand-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Ihram Garments
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("kits")}
              className={`flex-1 rounded-full py-2.5 text-sm font-bold transition-all ${
                activeTab === "kits"
                  ? "bg-brand-primary text-white shadow-sm dark:bg-brand-secondary dark:text-brand-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Umrah Kits
            </button>
          </div>

          {/* ================= IHRAM TAB — alternating zig-zag layout ================= */}
          {activeTab === "ihram" && (
            <div className="flex flex-col gap-16">
              {ihramProducts.map((product, index) => {
                const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.price)})`;
                const reversed = index % 2 === 1;

                return (
                  <div
                    key={product.id}
                    className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14`}
                  >
                    <div className={`relative h-72 overflow-hidden rounded-[28px] sm:h-96 ${reversed ? "lg:order-2" : ""}`}>
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      <div className="absolute left-5 top-5 rounded-full bg-brand-secondary px-4 py-1.5 text-sm font-extrabold text-brand-primary shadow-md">
                        {product.price}
                      </div>
                    </div>

                    <div className={reversed ? "lg:order-1" : ""}>
                      <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{product.name}</h3>
                      <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">{product.description}</p>

                      <ul className="mt-6 space-y-2.5">
                        {product.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" /> {feat}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4 border-t border-border pt-6">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="flex items-center gap-2">
                            <spec.icon className="h-4 w-4 shrink-0 text-brand-secondary" />
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{spec.label}</p>
                              <p className="text-xs font-medium text-foreground">{spec.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-600"
                      >
                        <MessageCircle className="h-5 w-5" /> Order on WhatsApp ({product.price})
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ================= KITS TAB — single unified tiered comparison ================= */}
          {activeTab === "kits" && (
            <div className="overflow-hidden rounded-[28px] border border-border shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {kitProducts.map((kit, index) => {
                  const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I%20would%20like%20to%20order%20${encodeURIComponent(kit.name)}%20(${encodeURIComponent(kit.price)})`;

                  return (
                    <div
                      key={kit.id}
                      className={`flex flex-col p-8 ${index > 0 ? "border-t border-border lg:border-l lg:border-t-0" : ""} ${
                        kit.isPopular ? "bg-brand-primary text-white dark:bg-[#0d1728]" : "bg-card dark:bg-white/[0.02]"
                      }`}
                    >
                      {kit.isPopular && (
                        <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-brand-secondary px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-primary">
                          <Star className="h-3 w-3 fill-current" /> Most Popular
                        </span>
                      )}

                      <h3 className={`font-serif text-xl font-bold ${kit.isPopular ? "text-white" : "text-foreground"}`}>{kit.name}</h3>
                      <p className={`mt-1 text-xs font-bold uppercase tracking-wide ${kit.isPopular ? "text-brand-secondary" : "text-brand-secondary"}`}>
                        {kit.tagline}
                      </p>

                      <p className={`mt-4 text-3xl font-extrabold ${kit.isPopular ? "text-white" : "text-brand-primary dark:text-brand-secondary"}`}>
                        {kit.price}
                      </p>

                      <p className={`mt-4 text-sm leading-[1.7] ${kit.isPopular ? "text-white/75" : "text-muted-foreground"}`}>
                        {kit.description}
                      </p>

                      <ul className="mt-6 flex-1 space-y-3">
                        {kit.features.map((feat) => (
                          <li key={feat} className={`flex items-start gap-2 text-sm ${kit.isPopular ? "text-white/85" : "text-muted-foreground"}`}>
                            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${kit.isPopular ? "text-brand-secondary" : "text-green-500"}`} /> {feat}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-8 flex h-12 items-center justify-center gap-2 rounded-full text-sm font-bold shadow-sm transition-colors ${
                          kit.isPopular
                            ? "bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90"
                            : "bg-green-500 text-white hover:bg-green-600"
                        }`}
                      >
                        <MessageCircle className="h-5 w-5" /> Order {kit.name}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. How to Order — connected timeline instead of boxed cards */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">How to Order & Delivery Information</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Simple, transparent ordering directly managed by our dedicated customer support team.
            </p>
          </div>

          <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:gap-6">
            <div className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-border md:block" />

            {orderSteps.map((step, index) => (
              <div key={step.title} className="relative flex flex-1 flex-col items-center gap-3 text-center">
                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-muted/30 bg-brand-secondary text-lg font-extrabold text-brand-primary">
                  {index + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">{step.title}</h3>
                <p className="max-w-xs text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA — image-backed, two column */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0">
          <Image
            src="/page-headers-images/Ihram & Umrah Shop.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/97 via-brand-primary/90 to-brand-primary/70" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-24">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-secondary">
              <ShoppingBag className="h-3.5 w-3.5" /> Ready to Ship UK-Wide
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Questions About Sizes or Bulk Group Orders?
            </h2>

            <p className="mt-4 max-w-lg text-base leading-[1.65] text-white/75 sm:text-lg">
              Our Umrah advisors are available 7 days a week to help you pick the right kit and get it delivered before your flight.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <p className="text-2xl font-bold text-brand-secondary">7 Days</p>
                <p className="text-xs text-white/60">A Week Support</p>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <p className="text-2xl font-bold text-brand-secondary">UK-Wide</p>
                <p className="text-xs text-white/60">Tracked Delivery</p>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <p className="text-2xl font-bold text-brand-secondary">London</p>
                <p className="text-xs text-white/60">Office Pick-Up</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-white">Chat Now on WhatsApp</p>
                <p className="text-sm text-white/60">Fastest way to place your order</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={() => setIsDialogOpen(true)}
              className="group flex items-center gap-4 rounded-2xl border border-brand-secondary/40 bg-brand-secondary/10 p-5 text-left backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-brand-secondary/15"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-white">Request a Callback</p>
                <p className="text-sm text-white/60">Speak to an advisor about your order</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      <PlanUmrahDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

    </main>
  );
}
