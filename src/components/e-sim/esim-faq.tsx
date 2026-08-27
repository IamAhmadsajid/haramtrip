// src/components/e-sim/esim-faq.tsx
"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

type FaqCategory = "all" | "saudi" | "setup" | "compatibility";

interface FaqItem {
  question: string;
  answer: ReactNode; // Using ReactNode to allow JSX (buttons) inside the answer
  category: FaqCategory[];
}

const faqData: FaqItem[] = [
  {
    question: "What is an eSIM?",
    answer: "An eSIM (embedded SIM) is a digital SIM card built directly into your smartphone’s hardware. Instead of physically opening your phone tray and swapping plastic SIM cards, an eSIM allows you to install cellular data profiles electronically by simply scanning a QR code.",
    category: ["all"]
  },
  {
    question: "Why should I use an eSIM for my Umrah trip in Saudi Arabia?",
    answer: "Using an eSIM for Umrah saves you time and money. You avoid standing in long queues at Jeddah or Madinah airport SIM counters after a exhausting flight. You get instant 5G high-speed data as soon as your plane lands, save up to 80% compared to UK mobile roaming rates, and keep your UK physical SIM active for bank OTPs and calls.",
    category: ["all", "saudi"]
  },
  {
    question: "How do I activate the eSIM on my iPhone or Android device?",
    answer: "Activation takes under 2 minutes: 1) Open your device Settings -> Cellular / Mobile Data. 2) Tap \"Add eSIM\" or \"Add Cellular Plan\". 3) Scan the QR code sent by our WhatsApp agent. 4) Label your new line as \"Saudi eSIM\" and enable Data Roaming when you land in Saudi Arabia.",
    category: ["all", "setup"]
  },
  {
    question: "When is the best time to install the eSIM QR code?",
    answer: "We recommend scanning and adding the eSIM QR code to your phone in the UK before you board your flight. The data bundle validity counter only begins when the eSIM connects to a local Saudi network (STC, Mobily, or Zain) upon arrival at Jeddah, Madinah, or Riyadh airport.",
    category: ["all", "setup"]
  },
  {
    question: "Will my UK WhatsApp number and banking apps still work?",
    answer: "Yes, absolutely. Your eSIM is strictly for mobile data. You keep your physical UK SIM card in your phone to receive SMS and calls. Your WhatsApp stays completely tied to your UK number, and it automatically uses the eSIM's 5G data to send messages and make calls over the internet.",
    category: ["all"]
  },
  {
    question: "Which smartphones are compatible with eSIM technology?",
    answer: "Most smartphones manufactured from 2018 onwards support eSIM. This includes Apple iPhone XS, 11, 12, 13, 14, 15, 16 series; Samsung Galaxy S20, S21, S22, S23, S24, Z Flip, Z Fold series; Google Pixel 3 and newer; as well as recent iPad Cellular models. You dial *#06# on your phone—if an \"EID\" number appears, your phone supports eSIM.",
    category: ["all", "compatibility"]
  },
  {
    question: "Can I share my eSIM data via Mobile Hotspot with family members?",
    answer: "Yes! All our eSIM plans support personal hotspot and tethering. You can share your 5G connection with spouse, children, or elderly family members in Makkah, Madinah, or hotel rooms.",
    category: ["all", "saudi"]
  },
  {
    question: "How do I purchase an eSIM from Haram Trip Travel?",
    answer: (
      <div className="flex flex-col gap-4">
        <p>Simply click any \"Buy via WhatsApp\" or \"Call Agent on WhatsApp\" buttons on this page. Our travel agents will assist you immediately on WhatsApp ({SITE_CONFIG.phoneDisplay}), recommend the ideal data package for your trip duration, process secure payment, and deliver your QR code within 5 minutes.</p>
        <Link 
          href={SITE_CONFIG.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-green-500 text-white text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 hover:bg-green-600 w-fit"
        >
          <MessageCircle className="w-4 h-4" />
          Chat on WhatsApp Now
        </Link>
      </div>
    ),
    category: ["all", "setup"]
  },
];

const tabs = [
  { label: "All Questions", value: "all" as FaqCategory },
  { label: "Umrah & Saudi Travel", value: "saudi" as FaqCategory },
  { label: "Setup & Activation", value: "setup" as FaqCategory },
  { label: "Phone Compatibility", value: "compatibility" as FaqCategory },
];

export function EsimFaq() {
  const [activeTab, setActiveTab] = useState<FaqCategory>("all");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const filteredFaqs = faqData.filter((faq) => faq.category.includes(activeTab));

  const toggleAccordion = (index: number) => {
    setActiveAccordion((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
            Everything You Need to Know About eSIM
          </h2>
          <p className="text-base sm:text-lg leading-[1.6] text-muted-foreground">
            Get answers to all your questions about using digital eSIMs for Umrah and international travel.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => { setActiveTab(tab.value); setActiveAccordion(null); }}
              className={`inline-flex items-center h-10 px-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                activeTab === tab.value
                  ? "bg-foreground text-background border-foreground shadow-md"
                  : "bg-card text-foreground border-border hover:bg-muted hover:border-brand-secondary/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl border bg-card overflow-hidden transition-all duration-300 ${
                activeAccordion === index ? "border-brand-secondary/50 shadow-sm" : "border-border"
              }`}
            >
              
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                aria-expanded={activeAccordion === index}
              >
                <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    activeAccordion === index ? "bg-brand-secondary text-brand-primary" : "bg-muted text-foreground"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Answer Panel */}
              <AnimatePresence initial={false}>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}