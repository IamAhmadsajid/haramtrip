// src/components/home/trustpilot-reviews/trustpilot-reviews.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  PenLine,
  Star,
  ThumbsUp,
} from "lucide-react";

const reviews = [
  {
    name: "Isra",
    initial: "I",
    color: "#20b47e",
    title: "Great experience from start to finish…",
    text: "Great experience from start to finish for my umrah package. Aqsa was incredibly comparative and humble.",
    date: "Aug 27, 2026",
    ago: "17 hours ago",
    helpful: 0,
  },
  {
    name: "Ali Abbas",
    initial: "A",
    color: "#1c9b8b",
    title: "Good experience",
    text: "Good experience in dealing with them. Professional and considerate in making arrangements based on customer's plans, affordable package for a spiritual journey.",
    date: "Aug 18, 2026",
    ago: "Aug 18, 2026",
    helpful: 0,
  },
  {
    name: "Syed Mustafa",
    initial: "S",
    color: "#279e78",
    title: "A seamless and stress-free Umrah experience",
    text: "As a first-time Umrah pilgrim traveling all the way from the USA, everything felt a bit overwhelming at first, but the Haramtrip team made the entire experience seamless and stress-free. They were incredibly helpful, polite, and deeply knowledgeable about all the surrounding Ziyarat sites, making the historical and spiritual visits truly meaningful. Furthermore, the accommodations provided exceeded expectations and were completely accurate to what was promised in the package. Truly a professional and trustworthy Umrah team—highly recommended for anyone traveling from abroad!",
    date: "Aug 8, 2026",
    ago: "Aug 8, 2026",
    helpful: 0,
  },
  {
    name: "Mo",
    initial: "M",
    color: "#4d38f4",
    title: "Very nice experience with this company",
    text: "Very nice experience with this company.",
    date: "Jul 25, 2026",
    ago: "Jul 25, 2026",
    helpful: 0,
  },
  {
    name: "fizza muaaz",
    initial: "F",
    color: "#e87900",
    title: "It was a great experience with haramtrip",
    text: "It was a great experience with haramtrip. Their process is so smooth.",
    date: "Jul 25, 2026",
    ago: "Jul 25, 2026",
    helpful: 0,
  },
  {
    name: "Syed Abbas",
    initial: "S",
    color: "#9b36ef",
    title: "Best Planner",
    text: "They provide full support to the spiritual journey planning. The complete package planning and execution becomes easy with their help and guidance. I admire their focus and details on different options and helped us select the right one. Full support and confidence to their team.",
    date: "Jul 24, 2026",
    ago: "Jul 24, 2026",
    helpful: 0,
  },
  {
    name: "Nighat Batool",
    initial: "N",
    color: "#a100ff",
    title: "Very comfortable experience",
    text: "It was nice very comfatable if i could ill give it 6 stars.",
    date: "Jul 16, 2026",
    ago: "Jul 16, 2026",
    helpful: 0,
  },
  {
    name: "Syeda Rida Zainab",
    initial: "S",
    color: "#20b47e",
    title: "Well deserved 5-star review",
    text: "Well deserved for getting 5 star review. Had a great experience with them Agent Ahmed was helpful in arranging my package.",
    date: "Jul 15, 2026",
    ago: "Jul 15, 2026",
    helpful: 0,
  },
  {
    name: "Fahad Ali Gul",
    initial: "F",
    color: "#279e78",
    title: "An affordable option for Umrah",
    text: "An affordable option for everyone who wants to go Umrah. Ayesha was the one messaged me and she went through every details and made sure of passengers details on track. Ayesha can give you what you want price cheap, definitely recommend.",
    date: "Mar 26, 2026",
    ago: "Mar 26, 2026",
    helpful: 0,
  },
];

// Reusable Stars Component
function TrustpilotStars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="flex h-6 w-6 items-center justify-center rounded-md bg-[#20b47e] text-white"
        >
          <Star fill="currentColor" className="h-3.5 w-3.5" />
        </span>
      ))}
    </div>
  );
}

export function TrustpilotReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = reviews[currentIndex];

  const goToReview = (index: number) => {
    if (index < 0) return setCurrentIndex(reviews.length - 1);
    if (index >= reviews.length) return setCurrentIndex(0);
    setCurrentIndex(index);
  };

  // Auto Rotation — resets whenever the user picks manually
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) =>
        previous === reviews.length - 1 ? 0 : previous + 1
      );
    }, 8000);
    return () => window.clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative w-full border-b border-border bg-background py-16 sm:py-20">
      {/* Marquee keyframes (CSS animation so hover-pause works) */}
      <style>{`
        @keyframes tp-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Same container as Hero / AboutPreview */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* =====================================================
            TOP MARQUEE
            ===================================================== */}
        <div className="group relative h-11 w-full overflow-hidden rounded-xl bg-[#063f31] shadow-md dark:bg-[#032d23] sm:h-12">
          <div
            className="flex h-full w-max items-center group-hover:[animation-play-state:paused]"
            style={{ animation: "tp-marquee 40s linear infinite" }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap pr-10 text-white"
              >
                <span className="inline-flex h-5 min-w-[44px] items-center justify-center rounded bg-[#24b47e] px-1.5 text-[11px] font-extrabold text-white">
                  ★ 5.0
                </span>
                <strong className="font-serif text-sm font-semibold italic">
                  &ldquo;{review.title}&rdquo;
                </strong>
                <span className="text-xs text-[#7dd3b0]">— {review.name}</span>
                <span className="text-[#27a77e]">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            HEADER
            ===================================================== */}
        <header className="flex flex-col items-start gap-4 pt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-12">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20b681] text-white shadow-sm">
              <Star fill="currentColor" className="h-6 w-6" />
            </div>

            <h2 className="m-0 font-serif text-3xl font-bold leading-none tracking-[-0.025em] text-foreground sm:text-4xl">
              Trustpilot
              <span className="mt-1 block text-xl font-medium text-[#19b57e] sm:ml-3 sm:mt-0 sm:inline sm:text-2xl">
                Verified Reviews
              </span>
            </h2>

            <a
              href="https://uk.trustpilot.com/review/haramtrip.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex min-h-[38px] items-center gap-2 rounded-lg border border-border bg-card px-4 text-xs font-semibold text-foreground no-underline shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-[#1db783]"
            >
              <PenLine className="h-4 w-4 text-[#1db783]" />
              <span>Write a Review</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>

          <div className="flex min-h-[42px] items-center gap-2.5 self-start rounded-lg border border-[#92e9c7] bg-[#f5fffb] px-4 text-[#303632] shadow-sm dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22b883] shadow-[0_0_0_3px_#c7f5e4] dark:shadow-[0_0_0_3px_rgba(34,184,131,0.3)]" />
            <strong className="whitespace-nowrap text-sm">Excellent 4.5</strong>
            <div className="flex gap-0.5 text-[#20b47d] dark:text-[#2fd39a]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} fill="currentColor" className="h-4 w-4" />
              ))}
            </div>
          </div>
        </header>

        <p className="m-0 mb-8 mt-4 text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base">
          Authentic pilgrim feedback from our verified Trustpilot reviews
        </p>

        {/* =====================================================
            MAIN REVIEW AREA
            ===================================================== */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,1fr)] lg:gap-6">

          {/* FEATURED REVIEW */}
          <article className="relative flex min-h-[500px] flex-col overflow-hidden rounded-2xl border border-border border-t-4 border-t-[#20b881] bg-card p-6 shadow-lg dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)] sm:min-h-[540px] sm:p-8">

            {/* Decorative watermark — corner, never collides */}
            <div className="pointer-events-none absolute -right-3 -top-8 select-none font-serif text-[150px] font-bold leading-none text-foreground/[0.04] dark:text-white/[0.05] sm:text-[180px]">
              99
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-[1] flex flex-1 flex-col"
            >
              <TrustpilotStars />

              <h3 className="mb-4 mt-5 max-w-2xl font-serif text-xl font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-2xl">
                &ldquo;{currentReview.title}&rdquo;
              </h3>

              <div className="rounded-xl border border-border bg-background/80 p-4 dark:bg-white/[0.03] sm:p-5">
                <p className="m-0 text-sm italic leading-[1.7] text-foreground/90 sm:text-base">
                  {currentReview.text}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl font-serif text-lg font-bold text-white"
                    style={{ backgroundColor: currentReview.color }}
                  >
                    {currentReview.initial}
                  </div>
                  <div>
                    <strong className="block font-serif text-sm font-semibold text-foreground sm:text-base">
                      {currentReview.name}
                    </strong>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {currentReview.ago} · {currentReview.date}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex min-h-[38px] cursor-pointer items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:bg-white/5"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Helpful
                </button>
              </div>
            </motion.div>

            {/* Footer bar — in flow, no magic numbers */}
            <div className="relative z-[1] mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
              <div className="flex flex-wrap items-center gap-1.5">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToReview(index)}
                    aria-label={`Show review ${index + 1}`}
                    className={`h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-200 ${
                      index === currentIndex
                        ? "w-6 bg-[#1fb67d]"
                        : "w-2 bg-border hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                  {String(currentIndex + 1).padStart(2, "0")}
                  <span className="mx-1 text-muted-foreground/50">/</span>
                  {String(reviews.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => goToReview(currentIndex - 1)}
                  aria-label="Previous review"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-background text-foreground transition-all duration-200 hover:-translate-y-px hover:border-[#1db783] hover:shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goToReview(currentIndex + 1)}
                  aria-label="Next review"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-background text-foreground transition-all duration-200 hover:-translate-y-px hover:border-[#1db783] hover:shadow-sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>

          {/* RIGHT REVIEW LIST */}
          <aside className="flex min-w-0 flex-col">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
                More Verified Stories
              </span>
              <strong className="text-xs font-bold uppercase tracking-wide text-[#18ad77]">
                {reviews.length} Reviews
              </strong>
            </div>

            <div className="flex max-h-[560px] flex-col gap-3 overflow-y-auto pr-1.5 [scrollbar-width:thin] [scrollbar-color:#b9ddd0_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#b9ddd0] hover:[&::-webkit-scrollbar-thumb]:bg-[#20b47e]">
              {reviews.map((review, index) => (
                <button
                  key={`${review.name}-${index}`}
                  type="button"
                  onClick={() => goToReview(index)}
                  className={`flex w-full cursor-pointer items-start gap-3.5 rounded-xl border bg-card p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-[#a9ddca] hover:shadow-md dark:hover:border-emerald-500/40 ${
                    index === currentIndex
                      ? "border-[#19b67d] shadow-[0_4px_12px_rgba(25,182,125,0.12)] dark:border-emerald-500/60"
                      : "border-border"
                  }`}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-serif text-sm font-bold text-white"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.initial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2.5">
                      <strong className="overflow-hidden font-serif text-sm font-bold text-foreground text-ellipsis whitespace-nowrap">
                        {review.name}
                      </strong>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {review.ago}
                      </span>
                    </div>
                    <h4 className="my-1 mb-1.5 overflow-hidden text-sm font-bold leading-snug text-foreground/90 text-ellipsis whitespace-nowrap">
                      {review.title}
                    </h4>
                    <p className="m-0 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}