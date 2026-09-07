// src/components/about/faq-content.tsx
"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown, AlertTriangle, ExternalLink } from "lucide-react";
import { CtaSection } from "@/components/cta-section"; 

type FAQCategory =
  | "All Questions"
  | "Payments & ATOL"
  | "Visa & Regulations"
  | "Special Needs & Women"
  | "Flights & Check-in"
  | "Hotels & Rooms";

interface FAQItem {
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "All Questions">;
}

const faqCategories: FAQCategory[] = [
  "All Questions", "Payments & ATOL", "Visa & Regulations", "Special Needs & Women", "Flights & Check-in", "Hotels & Rooms",
];

const faqItems: FAQItem[] = [
  { question: "How does ATOL Protection safeguard my Umrah booking?", category: "Payments & ATOL", answer: "Haram Trip is an ATOL protected travel company under UK Civil Aviation Authority Licence #74904. This protects your financial investment and provides additional peace of mind when booking your Umrah arrangements. When you book an ATOL protected package, you receive an official ATOL Certificate detailing your passenger and flight arrangements." },
  { question: "What are the deposit and payment terms?", category: "Payments & ATOL", answer: "Our payment terms depend on the package, travel dates and booking conditions. Your dedicated consultant will explain the required deposit, remaining balance and applicable payment deadlines before you confirm your booking." },
  { question: "How long does the Saudi Umrah visa process take?", category: "Visa & Regulations", answer: "Visa processing times can vary depending on the application and current Saudi travel requirements. Our team will guide you through the process and let you know what documents are required before your application is submitted." },
  { question: "How do you support families travelling with autistic or neurodiverse children?", category: "Special Needs & Women", answer: "We take the individual needs of every family into account when arranging accommodation, transfers and other aspects of your journey. Speak with our team before booking so we can understand your requirements and recommend suitable options." },
  { question: "Can women travel for Umrah without a Mahram, and what guidance do you give Reverts?", category: "Special Needs & Women", answer: "We understand that pilgrims can have different circumstances and requirements. Our team can explain the current travel arrangements and help Reverts and female pilgrims understand the practical requirements for their journey." },
  { question: "What are the sequence rules for airline tickets and airport check-in?", category: "Flights & Check-in", answer: "Your consultant will provide your confirmed flight details and explain the required check-in arrangements before departure. We recommend checking your final itinerary carefully and allowing sufficient time at the airport." },
  { question: "How are hotel star ratings and bedding configurations determined?", category: "Hotels & Rooms", answer: "Hotel ratings and room configurations are based on the accommodation selected for your package. Bedding arrangements can vary by hotel and room type, so our team will confirm the available configuration when preparing your booking." },
  { question: "Do I need an ESTA if my flight transits through the United States?", category: "Flights & Check-in", answer: "If your itinerary involves travelling through the United States, you may need an approved ESTA or another appropriate travel authorisation depending on your circumstances. Our team can help you identify what you need to check before travelling." },
];

export function FaqContent() {
  const [faqCategory, setFaqCategory] = useState<FAQCategory>("All Questions");
  const [faqSearch, setFaqSearch] = useState("");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const filteredFAQs = useMemo(() => {
    const search = faqSearch.trim().toLowerCase();
    return faqItems.filter((faq) => {
      const matchesCategory = faqCategory === "All Questions" || faq.category === faqCategory;
      const matchesSearch = !search || faq.question.toLowerCase().includes(search) || faq.answer.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [faqCategory, faqSearch]);

  return (
    <div className="flex flex-col gap-12">
      <div className="mx-auto w-full max-w-[1040px]">
        <div className="rounded-[18px] border border-border bg-card px-5 py-6 shadow-sm dark:shadow-[0_2px_6px_rgba(0,0,0,0.3)] sm:px-7 sm:py-8">
          
          {/* HEADER */}
          <div className="flex flex-col gap-4 border-b border-border pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.08em] text-brand-secondary">Guidance & Clear Answers</div>
              <h2 className="mt-1 font-serif text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-3xl">Frequently Asked Questions</h2>
              <p className="mt-2 text-sm leading-[1.5] text-muted-foreground">Everything you need to know about booking, visas, hotels, flights, and special pilgrim care.</p>
            </div>
            <div className="relative w-full lg:w-[280px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" />
              <input type="text" value={faqSearch} onChange={(e) => setFaqSearch(e.target.value)} placeholder="Search FAQs..." className="h-11 w-full rounded-[8px] border border-border bg-background text-foreground pl-9 pr-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div className="mt-5 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-2">
              {faqCategories.map((category) => {
                const isActive = faqCategory === category;
                return (
                  <button key={category} type="button" onClick={() => setFaqCategory(category)} className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${isActive ? "bg-brand-primary dark:bg-brand-secondary border-brand-primary dark:border-brand-secondary text-white dark:text-brand-primary" : "border-border bg-card text-muted-foreground dark:bg-white/5 dark:text-white/80 hover:bg-muted dark:hover:bg-white/10"}`}>
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ESTA NOTICE - Dynamic Warning Box */}
          <div className="mt-6 flex flex-col gap-3 rounded-[10px] border border-amber-300/60 bg-amber-50 dark:border-amber-700/40 dark:bg-amber-900/20 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-300">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200">Important Notice for Itineraries Transiting via the UK</h4>
                <p className="mt-1 text-xs leading-[1.4] text-amber-700 dark:text-amber-400">If your flights involve transit or arrival in the United Kingdom, you must obtain an approved ESTA prior to departure.</p>
              </div>
            </div>
            <a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-amber-600 dark:bg-amber-700 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-amber-700 dark:hover:bg-amber-600">
              Official ESTA Site <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* FAQ LIST */}
          <div className="mt-6 space-y-3">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const isOpen = openFAQ === faq.question;
                return (
                  <div key={faq.question} className="overflow-hidden rounded-[10px] border border-border bg-muted/50 dark:bg-white/5">
                    <button type="button" onClick={() => setOpenFAQ(isOpen ? null : faq.question)} className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted dark:hover:bg-white/10">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-muted dark:bg-white/10 text-xs font-bold text-muted-foreground dark:text-white/60">{String(index + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-serif text-sm font-bold leading-[1.35] text-foreground sm:text-base">{faq.question}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border bg-background dark:bg-card px-4 py-3 pl-[60px]">
                        <p className="text-sm leading-[1.65] text-muted-foreground">{faq.answer}</p>
                        <div className="mt-3">
                          <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">{faq.category}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="rounded-[10px] border border-dashed border-border bg-muted/30 dark:bg-white/5 px-5 py-12 text-center">
                <Search className="mx-auto h-6 w-6 text-muted-foreground/70" />
                <h3 className="mt-2 font-serif text-base font-bold text-foreground">No questions found</h3>
                <p className="mt-1 text-sm text-muted-foreground">Try a different search term or select another category.</p>
                <button type="button" onClick={() => { setFaqSearch(""); setFaqCategory("All Questions"); }} className="mt-4 rounded-full bg-brand-primary dark:bg-brand-secondary px-4 py-2 text-xs font-bold text-white dark:text-brand-primary transition-colors hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}