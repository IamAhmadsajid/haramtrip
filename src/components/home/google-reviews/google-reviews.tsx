// src/components/home/google-reviews/google-reviews.tsx
"use client";

import { useState } from "react";
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
    type: "Local Guide • Google Reviewer",
    time: "1 week ago",
    helpful: 24,
    rating: 5,
    text: `I went to Umrah by Al Musafir Travel. My overall experience from the beginning till the end it was amazing with them. They have told me everything step-by-step, which is very helpful for me and my family. The person who guide me he's name is umar he was very friendly and make sure we understand everything he has said to us. He was also helping us throughout the journey even when we're in Makka & Medinah.`,
  },
  {
    name: "Ahmed Family",
    initial: "A",
    type: "Google Reviewer",
    time: "2 weeks ago",
    helpful: 18,
    rating: 5,
    text: `Excellent service from start to finish. The team explained every part of our Umrah journey clearly and were always available whenever we needed help. Everything was organised very professionally.`,
  },
  {
    name: "Fatima A.",
    initial: "F",
    type: "Google Reviewer",
    time: "3 weeks ago",
    helpful: 21,
    rating: 5,
    text: `A very smooth and peaceful Umrah experience. The team were helpful, responsive and made everything easy for our family. We would definitely recommend Al Musafir Travel.`,
  },
  {
    name: "Mohammed R.",
    initial: "M",
    type: "Local Guide • Google Reviewer",
    time: "1 month ago",
    helpful: 15,
    rating: 5,
    text: `Very professional service and excellent communication throughout our trip. The guidance we received before and during Umrah was especially helpful.`,
  },
  {
    name: "Aisha Khan",
    initial: "A",
    type: "Google Reviewer",
    time: "1 month ago",
    helpful: 12,
    rating: 5,
    text: `Our family had a wonderful experience. Everything was explained clearly and the support from the team gave us real peace of mind throughout the journey.`,
  },
  {
    name: "Bilal S.",
    initial: "B",
    type: "Google Reviewer",
    time: "1 month ago",
    helpful: 19,
    rating: 5,
    text: `From booking to returning home, the service was excellent. The team were friendly and always ready to answer our questions.`,
  },
  {
    name: "Sana M.",
    initial: "S",
    type: "Google Reviewer",
    time: "2 months ago",
    helpful: 11,
    rating: 5,
    text: `A brilliant experience for our family. We felt supported throughout the whole Umrah journey and would happily travel with them again.`,
  },
];

// Reusable Stars Component with Tailwind classes
function GoogleStars({ count = 5, className = "", iconClass = "w-[14px] h-[14px]" }: { count?: number; className?: string; iconClass?: string }) {
  return (
    <div className={`flex items-center gap-[2px] text-[#ffb000] ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} fill="currentColor" strokeWidth={1.5} className={iconClass} />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const review = reviews[current];

  const previousReview = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const nextReview = () => setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    // Section Wrapper (Converted from .google-reviews)
    <section className="relative w-full py-[60px] pb-[66px] sm:py-[72px] sm:pb-[78px] lg:py-[82px] lg:pb-[88px] bg-background border-b border-border">
      <div className="mx-auto w-[calc(100%-28px)] lg:w-[min(1280px,calc(100%-32px))]">
        
        {/* =====================================================
            HEADER
            ===================================================== */}
        <header className="max-w-[760px] mx-auto text-center">
          <h2 className="m-0 font-serif text-[31px] sm:text-[34px] lg:text-[clamp(36px,4.5vw,50px)] leading-[1.03] font-bold tracking-[-0.035em] text-foreground">
            Verified Pilgrim Reviews On
            <span className="block">Google</span>
          </h2>
          <p className="max-w-[690px] mt-[15px] sm:mt-[18px] mx-auto text-muted-foreground text-[11px] sm:text-xs leading-[1.65] sm:leading-[1.55]">
            Real feedback from UK families and travellers who booked their sacred Umrah and holiday packages with Al-Musafir Travel.
          </p>
        </header>

        {/* =====================================================
            RATING ACTIONS
            ===================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-[13px] mt-5 mb-[30px] sm:mt-[21px] sm:mb-[38px]">
          
          <div className="flex items-center min-h-[47px] sm:min-h-[49px] px-[17px] border border-[#cfd9e4] rounded-[13px] bg-card shadow-sm">
            <strong className="mr-[15px] text-[#182334] font-serif text-[21px] leading-none font-bold">4.9</strong>
            <div className="flex flex-col gap-[3px]">
              <GoogleStars />
              <span className="text-[#77736f] text-[7px] leading-none font-semibold">4.9 Rating on Google Reviews</span>
            </div>
          </div>

          <a href="#" className="inline-flex items-center justify-center gap-[7px] min-h-[39px] px-[13px] border border-border rounded-[9px] bg-card text-foreground no-underline text-[10px] leading-none font-bold shadow-md transition-all duration-200 hover:-translate-y-px hover:border-brand-secondary/55 hover:shadow-md">
            <MessageSquare className="w-3 h-3" />
            <span>Give Your Feedback</span>
            <ExternalLink className="w-2.5 h-2.5 text-muted-foreground" />
          </a>
        </div>

        {/* =====================================================
            REVIEW CARD
            ===================================================== */}
        <article className="w-[min(716px,100%)] mx-auto overflow-hidden border border-[#dedede] rounded-[16px] sm:rounded-[18px] bg-card shadow-md dark:shadow-[0_8px_25px_rgba(0,0,0,0.24)]">
          
          {/* TOP BAR */}
          <div className="flex flex-col items-start gap-3 p-[18px] pb-[15px] sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:min-h-[69px] sm:px-8 sm:py-0">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-[19px] h-[19px] text-[#4285f4] font-sans text-[17px] font-extrabold">G</div>
              <div>
                <strong className="block text-foreground text-[10px] leading-[1.2] font-bold">Google Review</strong>
                <span className="block mt-0.5 text-[#9a9691] text-[7px] leading-[1.2]">Posted on Al-Musafir Travel Business Profile</span>
              </div>
            </div>

            <div className="flex items-center w-full justify-between gap-1.5 sm:w-auto sm:justify-start sm:gap-2">
              <a href="#" className="inline-flex items-center gap-[5px] min-h-[28px] px-[9px] border border-[#e0e0e0] rounded-[7px] bg-white text-[#47433f] no-underline text-[6.5px] sm:text-[7px] font-bold dark:bg-card">
                <MessageSquare className="w-2.5 h-2.5 text-[#f07839]" />
                Give Your Feedback
                <ExternalLink className="w-2 h-2 text-[#999]" />
              </a>
              <span className="inline-flex items-center gap-[5px] min-h-[22px] px-[9px] border border-[#79e1a5] rounded-[6px] bg-[#edfff4] text-[#32a866] text-[6.5px] sm:text-[7px] leading-none font-bold">
                <BadgeCheck className="w-3 h-3" />
                Verified Pilgrim
              </span>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-[calc(100%-36px)] sm:w-[calc(100%-64px)] h-px mx-auto bg-[#eeeeee] dark:bg-white/10"></div>

          {/* REVIEW BODY */}
          <div className="relative p-[20px] px-[18px] pb-[23px] sm:p-[22px] sm:px-8 sm:pb-[25px]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-[42px] h-[42px] flex-shrink-0 rounded-xl bg-[#4b36f4] text-white font-serif text-[20px] font-bold">
                {review.initial}
              </div>
              <div>
                <div className="flex items-center gap-1 text-foreground font-serif text-sm leading-[1.2] font-bold">
                  {review.name}
                  <BadgeCheck className="w-3 h-3 fill-[#4285f4] text-white" />
                </div>
                <span className="block mt-[3px] text-[#f07839] text-[8px] font-bold">{review.type}</span>
                <small className="block mt-[3px] text-[#8e8a85] text-[7px]">{review.time}</small>
              </div>
            </div>

            <GoogleStars count={review.rating} className="mt-[18px] sm:absolute sm:mt-0 sm:top-[23px] sm:right-8" iconClass="w-[15px] h-[15px]" />

            <blockquote className="mt-[18px] sm:mt-[23px] text-[#25211f] text-xs sm:text-[13px] leading-[1.75] sm:leading-[1.8] italic font-medium">
              “{review.text}”
            </blockquote>
          </div>

          {/* DIVIDER */}
          <div className="w-[calc(100%-36px)] sm:w-[calc(100%-64px)] h-px mx-auto bg-[#eeeeee] dark:bg-white/10"></div>

          {/* FOOTER */}
          <footer className="flex items-center justify-between min-h-[68px] sm:min-h-[76px] px-[18px] sm:px-8 py-0">
            <button className="inline-flex items-center gap-[7px] min-h-[28px] px-2.5 border-0 rounded-lg bg-[#f6f5f3] text-[#67635f] text-[9px] font-semibold cursor-pointer dark:bg-white/5">
              <ThumbsUp className="w-3 h-3" />
              Helpful ({review.helpful})
            </button>

            <div className="flex items-center gap-3">
              <button onClick={previousReview} aria-label="Previous review" className="flex items-center justify-center w-8 h-8 p-0 border border-[#dedede] rounded-[9px] bg-[#fafafa] text-[#47433f] cursor-pointer transition-colors hover:bg-white hover:border-[#c6c2bd]">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="flex items-center gap-1.5 text-[#77736f] text-[9px] font-semibold">
                {current + 1}
                <small className="text-[#aaa] text-[8px]">/</small>
                {reviews.length}
              </span>
              <button onClick={nextReview} aria-label="Next review" className="flex items-center justify-center w-8 h-8 p-0 border border-[#dedede] rounded-[9px] bg-[#fafafa] text-[#47433f] cursor-pointer transition-colors hover:bg-white hover:border-[#c6c2bd]">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </footer>
        </article>

      </div>
    </section>
  );
}