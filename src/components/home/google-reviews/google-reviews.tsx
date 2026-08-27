// src/components/home/google-reviews/google-reviews.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Star,
  ThumbsUp,
} from "lucide-react";

const reviews = [
  {
    name: "Gulam Khan",
    initial: "G",
    color: "#4285f4",
    type: "Local Guide • Google Reviewer",
    time: "1 week ago",
    helpful: 24,
    rating: 5,
    text: `I went to Umrah by Al Musafir Travel. My overall experience from the beginning till the end it was amazing with them. They have told me everything step-by-step, which is very helpful for me and my family. The person who guide me he's name is umar he was very friendly and make sure we understand everything he has said to us. He was also helping us throughout the journey even when we're in Makka & Medinah.`,
  },
  {
    name: "Ahmed Family",
    initial: "A",
    color: "#1c9b8b",
    type: "Google Reviewer",
    time: "2 weeks ago",
    helpful: 18,
    rating: 5,
    text: `Excellent service from start to finish. The team explained every part of our Umrah journey clearly and were always available whenever we needed help. Everything was organised very professionally.`,
  },
  {
    name: "Fatima A.",
    initial: "F",
    color: "#e87900",
    type: "Google Reviewer",
    time: "3 weeks ago",
    helpful: 21,
    rating: 5,
    text: `A very smooth and peaceful Umrah experience. The team were helpful, responsive and made everything easy for our family. We would definitely recommend Al-Musafir Travel.`,
  },
  {
    name: "Mohammed R.",
    initial: "M",
    color: "#9b36ef",
    type: "Local Guide • Google Reviewer",
    time: "1 month ago",
    helpful: 15,
    rating: 5,
    text: `Very professional service and excellent communication throughout our trip. The guidance we received before and during Umrah was especially helpful.`,
  },
  {
    name: "Aisha Khan",
    initial: "A",
    color: "#12a5b0",
    type: "Google Reviewer",
    time: "1 month ago",
    helpful: 12,
    rating: 5,
    text: `Our family had a wonderful experience. Everything was explained clearly and the support from the team gave us real peace of mind throughout the journey.`,
  },
  {
    name: "Bilal S.",
    initial: "B",
    color: "#e0526e",
    type: "Google Reviewer",
    time: "1 month ago",
    helpful: 19,
    rating: 5,
    text: `From booking to returning home, the service was excellent. The team were friendly and always ready to answer our questions.`,
  },
  {
    name: "Sana M.",
    initial: "S",
    color: "#279e78",
    type: "Google Reviewer",
    time: "2 months ago",
    helpful: 11,
    rating: 5,
    text: `A brilliant experience for our family. We felt supported throughout the whole Umrah journey and would happily travel with them again.`,
  },
];

// Real Google "G" mark in official brand colors
function GoogleMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

// Reusable Stars Component
function GoogleStars({
  count = 5,
  className = "",
  iconClass = "h-4 w-4",
}: {
  count?: number;
  className?: string;
  iconClass?: string;
}) {
  return (
    <div
      className={`flex items-center gap-0.5 text-[#ffb000] ${className}`}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          fill="currentColor"
          strokeWidth={1.5}
          className={iconClass}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const review = reviews[current];

  const goToReview = (index: number) => {
    if (index < 0) return setCurrent(reviews.length - 1);
    if (index >= reviews.length) return setCurrent(0);
    setCurrent(index);
  };

  // Auto Rotation — resets on manual interaction (matches Trustpilot section)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => window.clearInterval(interval);
  }, [current]);

  return (
    <section className="relative w-full border-b border-border bg-background py-16 sm:py-20">
      {/* Same container as Hero / AboutPreview / Trustpilot */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* =====================================================
            HEADER
            ===================================================== */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
            What Our Pilgrims Say
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl">
            Verified Pilgrim Reviews on{" "}
            <span className="text-[#4285f4] dark:text-[#7babf7]">Google</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
            Real feedback from UK families and travellers who booked their
            sacred Umrah and holiday packages with Al-Musafir Travel.
          </p>
        </header>

        {/* =====================================================
            RATING ACTIONS
            ===================================================== */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">

          <div className="flex min-h-[48px] items-center gap-3.5 rounded-lg border border-border bg-card px-5 shadow-sm">
            <strong className="font-serif text-xl font-bold leading-none text-foreground">
              4.9
            </strong>
            <div className="flex flex-col gap-1">
              <GoogleStars />
              <span className="text-xs text-muted-foreground">
                4.9 rating on Google Reviews
              </span>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-lg border border-border bg-card px-4 text-xs font-semibold text-foreground no-underline shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-brand-secondary/60 hover:shadow-md"
          >
            <MessageSquare className="h-4 w-4 text-brand-secondary" />
            <span>Give Your Feedback</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
        </div>

        {/* =====================================================
            REVIEW CARD
            ===================================================== */}
        <article className="mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)] sm:mt-12">

          {/* TOP BAR */}
          <div className="flex flex-col items-start justify-between gap-3 px-6 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
            <div className="flex items-center gap-3">
              <GoogleMark className="h-7 w-7" />
              <div>
                <strong className="block text-sm font-bold text-foreground">
                  Google Review
                </strong>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Posted on Al-Musafir Travel Business Profile
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#79e1a5] bg-[#edfff4] px-3 py-1.5 text-xs font-bold leading-none text-[#32a866] dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-400">
              <BadgeCheck className="h-3.5 w-3.5" />
              Verified Pilgrim
            </span>
          </div>

          <div className="h-px bg-border" />

          {/* REVIEW BODY */}
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-serif text-lg font-bold text-white"
                  style={{ backgroundColor: review.color }}
                >
                  {review.initial}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-serif text-base font-bold leading-snug text-foreground">
                    {review.name}
                    <BadgeCheck className="h-4 w-4 fill-[#4285f4] text-white" />
                  </div>
                  <span className="mt-0.5 block text-xs font-semibold text-[#f07839] dark:text-[#ff9d68]">
                    {review.type}
                  </span>
                  <small className="mt-0.5 block text-xs text-muted-foreground">
                    {review.time}
                  </small>
                </div>
              </div>

              <GoogleStars count={review.rating} iconClass="h-[18px] w-[18px]" />
            </div>

            <blockquote className="m-0 mt-6 min-h-[110px] text-sm italic leading-[1.8] text-foreground/90 sm:min-h-[150px] sm:text-base">
              &ldquo;{review.text}&rdquo;
            </blockquote>
          </motion.div>

          <div className="h-px bg-border" />

          {/* FOOTER */}
          <footer className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 sm:px-8">
            <button
              type="button"
              className="inline-flex min-h-[38px] cursor-pointer items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:bg-white/5 dark:hover:bg-white/10"
            >
              <ThumbsUp className="h-4 w-4" />
              Helpful ({review.helpful})
            </button>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToReview(index)}
                    aria-label={`Show review ${index + 1}`}
                    className={`h-2 cursor-pointer rounded-full border-0 p-0 transition-all duration-200 ${
                      index === current
                        ? "w-6 bg-[#4285f4]"
                        : "w-2 bg-border hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                {String(current + 1).padStart(2, "0")}
                <span className="mx-1 text-muted-foreground/50">/</span>
                {String(reviews.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={() => goToReview(current - 1)}
                aria-label="Previous review"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-background text-foreground transition-all duration-200 hover:-translate-y-px hover:border-[#4285f4] hover:shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goToReview(current + 1)}
                aria-label="Next review"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-background text-foreground transition-all duration-200 hover:-translate-y-px hover:border-[#4285f4] hover:shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </footer>
        </article>

      </div>
    </section>
  );
}