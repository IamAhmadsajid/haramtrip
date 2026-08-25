// src/components/home/hero/hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Building2,
  LifeBuoy,
  ShieldCheck,
  CheckCircle2,
  Compass,
  ArrowRight,
  Heart,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ConsultationDialog } from "@/components/home/hero/consultation-dialog/consultation-dialog";
import { CustomPlanDialog } from "@/components/home/hero/custom-plan/custom-plan-dialog";

const features = [
  {
    icon: Building2,
    title: "Hotels Steps Away From Haram",
    desc: "Premium accommodations right next to the holy sites.",
  },
  {
    icon: LifeBuoy,
    title: "Easy Customer Support",
    desc: "24/7 dedicated assistance throughout your journey.",
  },
  {
    icon: ShieldCheck,
    title: "100% ATOL Protected",
    desc: "Financial peace of mind with complete protection.",
  },
];

const tickItems = [
  "Hotels Very Close to Haram",
  "Qualified Agents",
  "24/7 Qualified Staff & Support",
];

const typewriterPhrases = [
  "Autism-Friendly Family Support",
  "Revert Muslims",
  "Women travelling without Mahram",
];

export function Hero() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [customPlanOpen, setCustomPlanOpen] = useState(false);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    const currentLength = text.length;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentLength < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, currentLength + 1));
      }, 80);
    } else if (!isDeleting && currentLength === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && currentLength > 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, currentLength - 1));
      }, 40);
    } else if (isDeleting && currentLength === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      setText("");
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-hidden bg-background border-b border-border">
      {/* ============================================================
          HERO BACKGROUND
          ============================================================ */}

      {/* Moving dots */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(238, 201, 113, 0.75) 1.8px, transparent 2px)`,
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            "32px 18px",
            "64px 0px",
            "32px -18px",
            "0px 0px",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_12%_35%,rgba(238,201,113,0.12),transparent_25%),radial-gradient(circle_at_82%_22%,rgba(238,201,113,0.09),transparent_25%)] dark:bg-[radial-gradient(circle_at_12%_35%,rgba(238,201,113,0.07),transparent_25%),radial-gradient(circle_at_82%_22%,rgba(238,201,113,0.05),transparent_25%)]"
      />

      {/* Decorative curved lines */}
      <div aria-hidden="true" className="absolute z-0 h-[220px] w-3/4 opacity-80 rounded-[50%] border-t-2 border-brand-secondary/40 shadow-[0_0_18px_rgba(238,201,113,0.12)] pointer-events-none top-[17%] left-[-12%] -rotate-6 sm:w-3/4" />
      <div aria-hidden="true" className="absolute z-0 h-[220px] w-3/4 opacity-80 rounded-[50%] border-t-2 border-brand-secondary/40 shadow-[0_0_18px_rgba(238,201,113,0.12)] pointer-events-none top-[42%] right-[-18%] -rotate-[8deg]" />
      <div aria-hidden="true" className="absolute z-0 h-[220px] w-3/4 opacity-40 rounded-[50%] border-t-2 border-brand-secondary/40 shadow-[0_0_18px_rgba(238,201,113,0.12)] pointer-events-none bottom-[2%] left-[-15%] rotate-[5deg]" />

      {/* Floating Dots */}
      <motion.span
        aria-hidden="true"
        className="absolute z-0 h-2 w-2 rounded-full bg-brand-secondary shadow-[0_0_0_6px_rgba(238,201,113,0.1),0_0_20px_rgba(238,201,113,0.32)] pointer-events-none top-[18%] left-[5%]"
        animate={{ x: [0, 90, 180, 260, 210, 120, -20, -90, -30, 70, 0], y: [0, -45, 20, 90, 150, 115, 55, -30, -90, -35, 0], opacity: [0.25, 0.45, 0.6, 0.4, 0.55, 0.35, 0.5, 0.3, 0.5, 0.35, 0.25], scale: [1, 1.15, 0.9, 1.25, 1, 0.85, 1.15, 0.95, 1.1, 1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute z-0 h-2.5 w-2.5 rounded-full bg-brand-secondary shadow-[0_0_0_6px_rgba(238,201,113,0.1),0_0_20px_rgba(238,201,113,0.32)] pointer-events-none top-[37%] right-[8%]"
        animate={{ x: [0, -120, -230, -150, -40, 100, 220, 300, 180, 50, 0], y: [0, 60, 20, -100, -170, -130, -40, 70, 140, 70, 0], opacity: [0.2, 0.4, 0.55, 0.3, 0.5, 0.35, 0.6, 0.4, 0.55, 0.3, 0.2], scale: [1, 0.85, 1.2, 0.95, 1.1, 0.9, 1.25, 1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute z-0 h-3 w-3 rounded-full bg-brand-secondary shadow-[0_0_0_6px_rgba(238,201,113,0.1),0_0_20px_rgba(238,201,113,0.32)] pointer-events-none bottom-[12%] left-[36%]"
        animate={{ x: [0, 140, 260, 340, 270, 160, 40, -80, -150, -70, 0], y: [0, 80, 40, -50, -140, -190, -120, -40, 70, 110, 0], opacity: [0.15, 0.35, 0.5, 0.3, 0.45, 0.25, 0.5, 0.3, 0.45, 0.25, 0.15] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ============================================================
          HERO CONTENT
          ============================================================ */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:py-24">
        {/* ============================================================
            LEFT SIDE
            ============================================================ */}

        <motion.div
          className="flex flex-col gap-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Heading */}
          <h1 className="flex flex-col gap-1 font-bold tracking-tight">
            <span className="text-3xl leading-tight text-foreground sm:text-4xl lg:text-[3.25rem]">
              Unforgettable Spiritual Journeys,
            </span>

            <motion.span
              className="inline-block text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem] bg-clip-text text-transparent bg-gradient-to-r from-[#e85d04] via-[#eec971] to-[#e85d04] bg-[length:200%_auto] sm:bg-[length:250%_auto]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              With Gentle Support Every Step
            </motion.span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
            <span className="font-semibold text-brand-secondary">
              Haram Trip
            </span>{" "}
            specializes in peaceful Umrah pilgrimages and custom holiday tours.
            We proudly offer Autism-friendly travel solutions, ensuring a
            comfortable and supported experience for every family.
          </p>

          {/* Typewriter Badge */}
          <div
            className={cn(
              "inline-flex min-h-[46px] items-center gap-3 self-center rounded-full px-5 py-3 lg:self-start w-fit border border-brand-secondary/45 bg-brand-secondary-2/65 backdrop-blur shadow-sm dark:bg-secondary/90 dark:border-brand-secondary/35 text-foreground"
            )}
          >
            <Heart className="h-5 w-5 shrink-0 text-brand-primary dark:text-brand-secondary" />
            <span>{text}</span>
            <motion.span
              className="inline-block h-5 w-[2px] bg-brand-primary dark:bg-brand-secondary"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-1 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={() => setConsultOpen(true)}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-14 rounded-full bg-brand-secondary px-8 text-base text-brand-primary shadow-sm transition-all hover:bg-brand-secondary/90 hover:shadow-md"
              )}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book A Consultation
            </button>

            <button
              onClick={() => setCustomPlanOpen(true)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 rounded-full border-brand-secondary/50 bg-background px-8 text-base text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md"
              )}
            >
              <Compass className="mr-2 h-5 w-5" />
              Customise Your Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* DIVIDER */}
          <div className="mt-2 border-t border-border/80" />

          {/* SMALL BENEFITS */}
          <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {tickItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-left">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                <span className="text-xs font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ============================================================
            RIGHT SIDE
            ============================================================ */}

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.25 + index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="group flex items-start gap-4 rounded-2xl p-5 sm:p-6 border border-border/85 bg-card/92 backdrop-blur-md shadow-lg transition-all hover:border-brand-secondary/45 hover:shadow-xl dark:bg-card/94 dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary text-brand-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-brand-secondary">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}

          {/* CALL DIRECT */}
          <motion.a
            href={`tel:${SITE_CONFIG.phoneLink}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.7, ease: "easeOut" }}
            whileHover={{ y: -2 }}
            className="group flex items-center justify-between gap-4 rounded-2xl px-5 py-3.5 sm:px-6 border border-brand-secondary/30 bg-brand-primary shadow-lg transition-all hover:border-brand-secondary/55 hover:shadow-xl"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-secondary text-brand-primary">
                <Phone className="h-4 w-4" />
              </div>

              <div className="flex min-w-0 flex-col sm:flex-row sm:items-center sm:gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-secondary sm:text-xs">
                  Call Direct:
                </p>
                <h3 className="truncate text-sm font-bold text-white sm:text-base">
                  {SITE_CONFIG.phoneDisplay}
                </h3>
              </div>
            </div>

            <span
              className={cn(
                buttonVariants({ variant: "default" }),
                "shrink-0 rounded-full bg-brand-secondary px-4 py-2 text-xs text-brand-primary transition-colors hover:bg-white"
              )}
            >
              Call Now
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* DIALOGS */}
      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
      <CustomPlanDialog open={customPlanOpen} onOpenChange={setCustomPlanOpen} />
    </section>
  );
}