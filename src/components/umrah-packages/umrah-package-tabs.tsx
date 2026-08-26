// src/components/umrah-packages/umrah-package-tabs.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { umrahPackageDetails } from "@/data/umrah-package-details";
import { PackageDetailCard } from "./package-detail-card";
import { cn } from "@/lib/utils";

const tabs = ["3 Star Umrah Packages", "4 Star Umrah Packages", "5 Star Umrah Packages"];

export function UmrahPackageTabs() {
  const [activeTab, setActiveTab] = useState("3 Star Umrah Packages");

  const filteredPackages = umrahPackageDetails.filter(pkg => {
    if (activeTab === "3 Star Umrah Packages") return pkg.category === "3 Star";
    if (activeTab === "4 Star Umrah Packages") return pkg.category === "4 Star";
    if (activeTab === "5 Star Umrah Packages") return pkg.category === "5 Star";
    return false;
  });

  return (
    <section className="bg-[#f8f5f0] py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d201d]">
            Browse Our Umrah Packages
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Select a category below to view our carefully crafted 2026 Umrah packages.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative flex flex-col sm:flex-row p-1.5 bg-white border border-border rounded-full shadow-sm gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative z-10 px-6 py-2.5 text-sm font-bold rounded-full transition-colors duration-300",
                  activeTab === tab ? "text-brand-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-brand-secondary rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPackages.map((pkg) => (
              <PackageDetailCard key={pkg.id} pkg={pkg} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}