// src/components/e-sim/esim-hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Wifi,
  Clock,
  Signal,
  MapPin,
  RadioTower,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function EsimHero() {
  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* =========================================================
              LEFT COLUMN — TEXT & FEATURES
          ========================================================== */}
          <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Instant 5G Connectivity, Zero Hassles
            </h2>
            
            <p className="text-base sm:text-lg leading-[1.8] text-muted-foreground">
              Avoid expensive roaming charges and unreliable local SIM cards. Our digital eSIM connects you instantly to Saudi Arabia's top 5G networks directly on your phone.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl border border-border bg-card shadow-sm">
                <Wifi className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-bold text-sm text-foreground">Zero Roaming Fees</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl border border-border bg-card shadow-sm">
                <Signal className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-bold text-sm text-foreground">STC / Mobily 5G</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl border border-border bg-card shadow-sm">
                <Clock className="w-6 h-6 text-brand-secondary" />
                <h3 className="font-bold text-sm text-foreground">&lt; 2 Mins Delivery</h3>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link 
                href={SITE_CONFIG.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-secondary hover:text-brand-primary"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp to Buy
              </Link>
              <Link 
                href={`tel:${SITE_CONFIG.phoneLink}`} 
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-transparent border border-border dark:border-white/20 text-foreground text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-muted hover:border-brand-secondary"
              >
                <Phone className="w-4 h-4" />
                Call Agent
              </Link>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN — INTERACTIVE 5G ENGINE
          ========================================================== */}
          <div className="relative w-full h-[400px] flex items-center justify-center order-1 lg:order-2">
            
            {/* Pulsing Background Rings */}
            <motion.div 
              className="absolute w-64 h-64 rounded-full border-2 border-brand-secondary/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute w-64 h-64 rounded-full border-2 border-brand-secondary/10"
              animate={{ scale: [1.1, 1.3, 1.1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <motion.line 
                x1="50%" y1="50%" x2="20%" y2="20%" 
                stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                className="text-brand-secondary/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.line 
                x1="50%" y1="50%" x2="80%" y2="80%" 
                stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                className="text-brand-secondary/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              <motion.line 
                x1="50%" y1="50%" x2="80%" y2="20%" 
                stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                className="text-brand-secondary/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.line 
                x1="50%" y1="50%" x2="20%" y2="80%" 
                stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                className="text-brand-secondary/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </svg>

            {/* Center Core: Phone Icon */}
            <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center bg-card border border-brand-secondary/30 shadow-2xl">
              <Smartphone className="w-12 h-12 text-brand-secondary" />
            </div>

            {/* Node 1: Makkah 5G (Top Left) */}
            <div className="absolute top-8 left-8 flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-lg z-10">
              <MapPin className="w-4 h-4 text-brand-primary dark:text-brand-secondary" />
              <span className="text-xs font-bold text-foreground">Makkah 5G</span>
            </div>

            {/* Node 2: Madinah 5G (Bottom Right) */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-lg z-10">
              <MapPin className="w-4 h-4 text-brand-primary dark:text-brand-secondary" />
              <span className="text-xs font-bold text-foreground">Madinah 5G</span>
            </div>

            {/* Node 3: STC Network (Top Right) */}
            <div className="absolute top-8 right-8 flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-lg z-10">
              <RadioTower className="w-4 h-4 text-brand-primary dark:text-brand-secondary" />
              <span className="text-xs font-bold text-foreground">STC Network</span>
            </div>

            {/* Node 4: Mobily Network (Bottom Left) */}
            <div className="absolute bottom-8 left-8 flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-lg z-10">
              <RadioTower className="w-4 h-4 text-brand-primary dark:text-brand-secondary" />
              <span className="text-xs font-bold text-foreground">Mobily Network</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}