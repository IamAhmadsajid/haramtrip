// src/app/(extra)/shop/page.tsx
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { SITE_CONFIG } from "@/lib/site-config";
import { MessageCircle, CheckCircle2, Ruler, Scale, Layers, WashingMachine, Star, Phone } from "lucide-react";
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
      { icon: Ruler, label: "Dimensions", value: "110 cm × 220 cm (Each Piece)" },
      { icon: Scale, label: "Weight", value: "Approx. 1200g - 1400g Total" },
      { icon: Layers, label: "Material", value: "100% High-Grade Cotton" },
      { icon: WashingMachine, label: "Care", value: "Machine washable, colorfast white" }
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
      { icon: Ruler, label: "Dimensions", value: "75 cm × 150 cm (Each Piece)" },
      { icon: Scale, label: "Weight", value: "Approx. 650g - 800g Total" },
      { icon: Layers, label: "Material", value: "100% Soft Cotton" },
      { icon: WashingMachine, label: "Care", value: "Machine washable, quick dry" }
    ]
  }
];

const kitProducts = [
  {
    id: "kit-basic",
    name: "Umrah Basic Kit",
    price: "£25.00",
    tagline: "Essential Starter Kit for Pilgrims",
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
    tagline: "Most Popular All-in-One Pilgrim Pack",
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
    tagline: "Ultimate Comfort & Full Travel Pack",
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

export default function ShopPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader
        title="Ihram & Umrah Shop"
        subtitle="Essential Pilgrimage Supplies"
        description="Premium quality Ihram, prayer mats, and travel accessories curated for your spiritual journey. High-absorbency, seam-free white cotton sheets designed for maximum comfort in Saudi heat."
        image="/page-headers-images/Ihram & Umrah Shop.jpg"
      />

      {/* 2. Ihram Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Pure Combed Cotton Ihram Garments</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              High-absorbency, seam-free white cotton sheets designed for maximum comfort in Saudi heat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ihramProducts.map((product) => {
              const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.price)})`;

              return (
                <div key={product.id} className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col dark:bg-white/5 dark:border-white/10">
                  <div className="relative h-64 w-full overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-brand-secondary text-brand-primary text-sm font-extrabold px-3 py-1.5 rounded-full shadow-md">
                      {product.price}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{product.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">{product.description}</p>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 bg-muted/50 dark:bg-white/5 rounded-xl p-4 border border-border dark:border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Specifications</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="flex items-start gap-2">
                            <spec.icon className="h-4 w-4 text-brand-primary dark:text-brand-secondary mt-0.5 shrink-0" />
                            <div>
                              <p className="text-[10px] font-bold uppercase text-muted-foreground">{spec.label}</p>
                              <p className="text-xs text-foreground font-medium">{spec.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border dark:border-white/10 mt-auto">
                      <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full h-12 flex items-center justify-center gap-2 bg-green-500 text-white rounded-full text-sm font-bold hover:bg-green-600 transition-colors shadow-sm">
                        <MessageCircle className="h-5 w-5" /> Order on WhatsApp ({product.price})
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Umrah Kits Section */}
      <section className="py-16 sm:py-20 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Complete Pilgrimage Packs</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Umrah Essentials Kits: Curated packages containing fragrance-free hygiene items, security pouches, travel mats, and Tawaf accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {kitProducts.map((kit) => {
              const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I%20would%20like%20to%20order%20${encodeURIComponent(kit.name)}%20(${encodeURIComponent(kit.price)})`;

              return (
                <div
                  key={kit.id}
                  className={`bg-card rounded-2xl border shadow-lg flex flex-col relative dark:bg-white/5 ${kit.isPopular ? "border-brand-secondary border-2 lg:scale-105 z-10 dark:border-brand-secondary" : "border-border dark:border-white/10"
                    }`}
                >
                  <div className={`p-6 sm:p-8 flex-1 flex flex-col ${kit.isPopular ? 'pt-4' : ''}`}>

                    {kit.isPopular && (
                      <div className="flex justify-center mb-4">
                        <span className="bg-brand-secondary text-brand-primary text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" /> Most Popular Choice
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="font-serif text-2xl font-bold text-foreground">{kit.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-secondary mt-1">{kit.tagline}</p>
                      <div className="mt-4 flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-extrabold text-brand-primary dark:text-brand-secondary">{kit.price}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-[1.7] text-center mb-6 pb-6 border-b border-dashed border-border dark:border-white/10">
                      {kit.description}
                    </p>

                    <div className="flex-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Included In This Kit:</h4>
                      <ul className="space-y-3">
                        {kit.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6">
                      <a href={waLink} target="_blank" rel="noopener noreferrer" className={`w-full h-12 flex items-center justify-center gap-2 rounded-full text-sm font-bold transition-colors shadow-sm ${kit.isPopular
                          ? "bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90"
                          : "bg-green-500 text-white hover:bg-green-600"
                        }`}>
                        <MessageCircle className="h-5 w-5" /> Order {kit.name} ({kit.price})
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How to Order & Delivery Section */}
      <section className="py-16 sm:py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">How to Order & Delivery Information</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Simple, transparent ordering directly managed by our dedicated customer support team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center dark:bg-white/5 dark:border-white/10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center bg-muted dark:bg-white/10 text-brand-primary dark:text-brand-secondary rounded-full text-xl font-extrabold mb-4">1</div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">Direct WhatsApp Inquiry</h3>
              <p className="text-sm text-muted-foreground">Click any product button to open WhatsApp with your pre-selected items. Tell us your delivery postcode or preferred collection date.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center dark:bg-white/5 dark:border-white/10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center bg-muted dark:bg-white/10 text-brand-primary dark:text-brand-secondary rounded-full text-xl font-extrabold mb-4">2</div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">Payment & Confirmation</h3>
              <p className="text-sm text-muted-foreground">Receive secure payment details (bank transfer or card) and get an immediate order receipt with tracking confirmation.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center dark:bg-white/5 dark:border-white/10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center bg-muted dark:bg-white/10 text-brand-primary dark:text-brand-secondary rounded-full text-xl font-extrabold mb-4">3</div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">Delivery or Office Pick-Up</h3>
              <p className="text-sm text-muted-foreground">Dispatched via Royal Mail 1st Class / Tracked 24, or collect directly from our central London office before your flight.</p>
            </div>
          </div>

          {/* Dynamic CTA Block - Inverts colors based on mode */}
          <div className="bg-foreground text-background rounded-2xl p-8 text-center shadow-lg border border-border dark:border-white/10">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 text-background">Have questions about sizes or bulk orders for your group?</h3>
            <p className="text-background/70 text-sm mb-6 max-w-xl mx-auto">Our Umrah advisors are available 7 days a week to assist you.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground font-bold rounded-full h-12 px-8 text-sm shadow-md hover:bg-background/90 transition-colors"
              >
                <Phone className="h-4 w-4" /> Request Callback
              </button>

              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-full h-12 px-8 text-sm shadow-md hover:bg-green-600 transition-colors">
                <MessageCircle className="h-4 w-4" /> Chat Now
              </a>
            </div>
          </div>

        </div>
      </section>

      <PlanUmrahDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

    </main>
  );
}