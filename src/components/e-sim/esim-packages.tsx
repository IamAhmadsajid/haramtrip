// src/components/e-sim/esim-packages.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Phone, MessageCircle, Zap, Globe, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

type Category = "saudi" | "dubai" | "global" | "all";

interface PackageData {
  id: number;
  badge?: string;
  title: string;
  price: string;
  validity: string;
  data: string;
  networks: string[];
  features: string[];
  category: Category[];
  highlighted?: boolean;
}

const packages: PackageData[] = [
  // --- SAUDI ARABIA PACKAGES ---
  {
    id: 1,
    title: "Saudi Arabia Umrah 5GB",
    price: "£14.99",
    validity: "7 Days Pass",
    data: "5 GB 5G Data",
    networks: ["STC 5G", "Mobily 5G"],
    features: [
      "All-Inclusive Data",
      "0% Roaming Surcharge",
      "Saudi Network Coverage",
      "Coverage in Makkah, Madinah, Jeddah & Riyadh",
      "Ultra-fast STC & Mobily 5G Network Access",
      "Instant QR Code Delivery via WhatsApp",
      "Keep your UK WhatsApp Number Active",
      "Hotspot & Data Tethering Enabled",
    ],
    category: ["saudi", "all"],
  },
  {
    id: 2,
    badge: "Most Popular for 10-12 Days Pilgrims",
    title: "Saudi Arabia Umrah 10GB",
    price: "£22.99",
    validity: "15 Days Pass",
    data: "10 GB 5G Data",
    networks: ["STC 5G", "Mobily 5G", "Zain 5G"],
    features: [
      "All-Inclusive Data",
      "0% Roaming Surcharge",
      "Saudi Network Coverage",
      "Perfect for 10-14 Days Umrah Trips",
      "Auto-connect to Best Signal (STC / Mobily / Zain)",
      "High-Definition Video Calling to Family in UK",
      "Instant Activation upon landing at Jeddah or Madinah",
      "24/7 Agent WhatsApp Support",
    ],
    category: ["saudi", "all"],
    highlighted: true,
  },
  {
    id: 3,
    title: "Saudi Arabia Pro 20GB",
    price: "£34.99",
    validity: "30 Days Pass",
    data: "20 GB 5G Data",
    networks: ["STC 5G", "Mobily 5G", "Zain 5G"],
    features: [
      "All-Inclusive Data",
      "0% Roaming Surcharge",
      "Saudi Network Coverage",
      "Full Month High-Speed 5G Coverage",
      "Ideal for Long Umrah Stay & Ramadan Pilgrims",
      "Seamless Live Streaming & Maps Navigation",
      "Multi-Device Tethering Supported",
      "Zero Roaming Surcharges",
    ],
    category: ["saudi", "all"],
  },
  {
    id: 4,
    badge: "VIP Unlimited Choice",
    title: "Saudi Arabia Unlimited 5G Pass",
    price: "£49.99",
    validity: "14 Days Pass",
    data: "Unlimited Data",
    networks: ["STC 5G Premium"],
    features: [
      "All-Inclusive Data",
      "0% Roaming Surcharge",
      "Saudi Network Coverage",
      "Unthrottled Unlimited 5G Speeds",
      "STC Premium Priority Network Access",
      "Ideal for Video Broadcasts & Heavy Work",
      "Instant QR Profile via WhatsApp",
      "Full 14 Days Coverage",
    ],
    category: ["saudi", "all"],
  },

  // --- SAUDI & DUBAI / REGIONAL COMBO PACKAGES ---
  {
    id: 5,
    badge: "Best for Umrah + Dubai Stopovers",
    title: "Saudi & Dubai Combo 10GB",
    price: "£29.99",
    validity: "15 Days Pass",
    data: "10 GB Regional Data",
    networks: ["STC (Saudi)", "du / Etisalat (UAE)"],
    features: [
      "All-Inclusive Data",
      "0% Roaming Surcharge",
      "Saudi Network Coverage",
      "Works seamlessly in Saudi Arabia AND Dubai (UAE)",
      "1 Single eSIM for your entire multi-city journey",
      "Auto switch networks across borders without changing settings",
      "Instant QR Delivery to WhatsApp",
      "Hotspot Sharing Supported",
    ],
    category: ["dubai", "all"],
  },
  {
    id: 6,
    title: "Middle East Grand Tour 20GB",
    price: "£42.99",
    validity: "30 Days Pass",
    data: "20 GB Regional Data",
    networks: ["Saudi Arabia", "UAE", "Turkey", "Egypt"],
    features: [
      "All-Inclusive Data",
      "0% Roaming Surcharge",
      "Saudi Network Coverage",
      "Covers Saudi Arabia, UAE (Dubai), Turkey & Egypt",
      "Perfect for Multi-Country Umrah Holiday Packages",
      "30 Days Validity across all regional destinations",
      "Zero Roaming Surprises",
      "Dedicated WhatsApp Helpdesk",
    ],
    category: ["dubai", "all"],
  },

  // --- GLOBAL PACKAGES ---
  {
    id: 7,
    title: "Global Traveller 10GB (130+ Countries)",
    price: "£39.99",
    validity: "30 Days Pass",
    data: "10 GB Global Data",
    networks: ["130+ Global Carriers"],
    features: [
      "All-Inclusive Data",
      "0% Roaming Surcharge",
      "Saudi Network Coverage",
      "Valid in 130+ Countries including UK, Saudi, UAE, Turkey, USA",
      "Ideal for frequent international travellers",
      "Keep your primary UK SIM active for calls/SMS",
      "Full 30 Days Validity",
      "Instant setup in 2 minutes",
    ],
    category: ["global", "all"],
  },
];

const tabs = [
  { label: "All Packages", value: "all" as Category },
  { label: "Saudi Arabia 5G (Makkah & Madinah)", value: "saudi" as Category },
  { label: "Saudi & Dubai Combo", value: "dubai" as Category },
  { label: "Global (130+ Countries)", value: "global" as Category },
];

export function EsimPackages() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredPackages = packages.filter((pkg) =>
    pkg.category.includes(activeTab)
  );

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
            Umrah & Multi-Country eSIM Data Plans
          </h2>
          <p className="text-base sm:text-lg leading-[1.6] text-muted-foreground">
            Choose from flexible 5G data bundles tailored for single Pilgrims, couples, or multi-destination holiday tours.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-bold transition-all duration-200 border ${
                activeTab === tab.value
                  ? "bg-foreground text-background border-foreground shadow-md"
                  : "bg-card text-foreground border-border hover:bg-muted hover:border-brand-secondary/50"
              }`}
            >
              {tab.value === "global" ? (
                <Globe className="w-4 h-4" />
              ) : tab.value === "saudi" ? (
                <MapPin className="w-4 h-4" />
              ) : (
                <Zap className="w-4 h-4" />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`relative flex flex-col rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  pkg.highlighted
                    ? "border-brand-secondary ring-2 ring-brand-secondary/20 lg:scale-[1.03]"
                    : "border-border"
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 flex justify-center">
                    <span className={`inline-block px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-sm whitespace-nowrap ${
                      pkg.highlighted 
                        ? "bg-brand-secondary text-brand-primary" 
                        : "bg-foreground text-background"
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-6 pt-8">
                  {/* Header Info */}
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-secondary uppercase tracking-wider mb-3">
                    <Zap className="w-3.5 h-3.5" />
                    <span>5G Ultra Speed</span>
                    <span className="text-border">•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {pkg.validity}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold leading-tight text-foreground mb-2">
                    {pkg.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-4">
                    {pkg.data} • All-Inclusive Data
                  </p>

                  {/* Network Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {pkg.networks.map((net) => (
                      <span key={net} className="inline-flex items-center text-[11px] font-semibold bg-muted text-foreground px-2.5 py-1 rounded-md border border-border">
                        {net}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <ul className="flex-1 space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link 
                      href={SITE_CONFIG.whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-foreground text-background text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-secondary hover:text-brand-primary"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Buy via WhatsApp Instant
                    </Link>
                    <Link 
                      href={SITE_CONFIG.phoneLink}
                      className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-transparent border border-border dark:border-white/20 text-foreground text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-muted hover:border-brand-secondary"
                    >
                      <Phone className="w-4 h-4" />
                      Call Agent to Order (+44 77 0017 1892)
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}