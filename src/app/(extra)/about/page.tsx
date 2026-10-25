// src/app/(extra)/about/page.tsx
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Info, HelpCircle } from "lucide-react";
import { AboutUsContent } from "@/components/about/about-us-content";
import { FaqContent } from "@/components/about/faq-content";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="About Haram Trip" 
        subtitle="Trusted UK Umrah Specialists"
        description="British, ATOL protected travel specialists dedicated to transparent, personal, and stress-free sacred journeys."
        image="/page-headers-images/about us.jpg"
      />

      {/* 2. Custom Tabs Section */}
      <div className="flex justify-center px-4 pt-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-background dark:bg-zinc-900 p-1.5 shadow-lg border border-border">
          
          <button onClick={() => setActiveTab("about")} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "about" ? "bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary shadow-sm" : "text-muted-foreground dark:text-white/80 hover:bg-muted dark:hover:bg-white/10"}`}>
            <span className={`p-1 rounded-full transition-colors ${activeTab === "about" ? "bg-brand-secondary text-brand-primary dark:bg-transparent dark:text-brand-secondary" : "bg-muted text-muted-foreground dark:bg-white/10 dark:text-white/60"}`}>
              <Info className="h-3 w-3" />
            </span>
            About Us & Our Story
          </button>

          <button onClick={() => setActiveTab("faq")} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "faq" ? "bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary shadow-sm" : "text-muted-foreground dark:text-white/80 hover:bg-muted dark:hover:bg-white/10"}`}>
            <span className={`p-1 rounded-full transition-colors ${activeTab === "faq" ? "bg-brand-secondary text-brand-primary dark:bg-transparent dark:text-brand-secondary" : "bg-muted text-muted-foreground dark:bg-white/10 dark:text-white/60"}`}>
              <HelpCircle className="h-3 w-3" />
            </span>
            FAQs
          </button>

        </div>
      </div>

      {/* 3. Tab Content Area */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {activeTab === "about" && <AboutUsContent />}
        {activeTab === "faq" && <FaqContent />}
      </div>
    </main>
  );
}