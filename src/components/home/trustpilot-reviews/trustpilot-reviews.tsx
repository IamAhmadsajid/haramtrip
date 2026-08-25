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
    name: "Hafsa",
    initial: "H",
    color: "#a100ff",
    title: "Very warm and welcoming interaction",
    text: `Very warm and welcoming interaction. I will recommend your service to friends and family. The hotel in Makkah was just a short walk to the Haram!`,
    date: "Jun 17, 2026",
    ago: "1 review",
    helpful: 12,
  },
  {
    name: "Jamila",
    initial: "J",
    color: "#1c9b8b",
    title: "First time umrah, and it went so smoothly",
    text: `First time umrah, and it went so smoothly, had a few issues but Mutieba would reassure me and solve the problems straight away definitely will be returning!`,
    date: "Jun 18, 2026",
    ago: "2 days ago",
    helpful: 18,
  },
  {
    name: "Sabih",
    initial: "S",
    color: "#279e78",
    title: "Extraordinary service & attention to detail",
    text: `My call was handled by an agent called Safaura, who was exceptionally helpful and knowledgeable. She took the time to make enquiries on my behalf and came back with clear answers.`,
    date: "Jun 10, 2026",
    ago: "Jun 10, 2026",
    helpful: 23,
  },
  {
    name: "Raheem Mumin Abolore Desmond",
    initial: "R",
    color: "#4d38f4",
    title: "Classic customer service & timely response",
    text: `Classic customer service. Always on time with accurate information and prompt flight updates. Extremely trustworthy UK travel agency.`,
    date: "Jun 19, 2026",
    ago: "3 days ago",
    helpful: 16,
  },
  {
    name: "Waqas Ahmed",
    initial: "W",
    color: "#e87900",
    title: "I strongly encourage you use Al Musafir...",
    text: `I strongly encourage you use Al Musafir as they were more than they had said. Our agent brother Umar in particular made sure that from booking our tickets to our return everything was handled.`,
    date: "Jun 16, 2026",
    ago: "6 days ago",
    helpful: 20,
  },
  {
    name: "Zubair",
    initial: "Z",
    color: "#9b36ef",
    title: "Excellent support throughout our journey",
    text: `The support throughout our Umrah journey was excellent. The team were responsive, helpful and made everything much easier for our family.`,
    date: "Jun 14, 2026",
    ago: "8 days ago",
    helpful: 14,
  },
];

// Reusable Stars Component
function TrustpilotStars() {
  return (
    <div className="flex gap-[3px] text-[#20b47e]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="flex items-center justify-center w-[18px] h-[18px] rounded-sm bg-[#20b47e] text-white">
          <Star fill="currentColor" className="w-3 h-3" />
        </span>
      ))}
    </div>
  );
}

export function TrustpilotReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = reviews[currentIndex];

  const goToReview = (index: number) => {
    if (index < 0) {
      setCurrentIndex(reviews.length - 1);
      return;
    }
    if (index >= reviews.length) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(index);
  };

  // Auto Rotation
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous === reviews.length - 1 ? 0 : previous + 1));
    }, 8000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-5 pb-[65px] sm:py-7 sm:pb-[76px] lg:pb-[92px] bg-background border-b border-border">
      <div className="mx-auto w-[calc(100%-16px)] sm:w-[calc(100%-28px)] lg:w-[min(1280px,calc(100%-32px))]">
        
        {/* =====================================================
            TOP MARQUEE
            ===================================================== */}
        <div className="relative w-full h-[37px] overflow-hidden rounded-xl bg-[#063f31] shadow-md dark:bg-[#032d23] max-sm:rounded-none group">
          <motion.div 
            className="flex items-center h-full w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div key={`${review.name}-${index}`} className="flex items-center gap-2.5 whitespace-nowrap pr-[30px] text-white text-[9px] group-hover:[animation-play-state:paused]">
                <span className="inline-flex items-center justify-center min-w-[34px] h-[15px] rounded-sm bg-[#24b47e] text-white text-[7px] font-extrabold">
                  ★ 5.0
                </span>
                <strong className="font-serif text-[10px] italic font-bold">
                  "{review.title}"
                </strong>
                <span className="text-[#40bd94] text-[8px]">
                  — {review.name}
                </span>
                <span className="text-[#27a77e] text-sm">·</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            HEADER
            ===================================================== */}
        <header className="flex flex-col items-start gap-3.5 pt-6 pb-1 px-0 sm:flex-row sm:items-center sm:justify-between sm:gap-[30px] sm:pt-[27px] max-sm:px-3.5 max-sm:pt-[25px]">
          <div className="flex flex-wrap items-center gap-[9px]">
            <div className="flex items-center justify-center w-[29px] h-[29px] rounded-[7px] bg-[#20b681] text-white">
              <Star fill="currentColor" className="w-[17px] h-[17px]" />
            </div>
            <h2 className="m-0 text-foreground font-serif text-[25px] sm:text-[27px] leading-none font-bold tracking-[-0.025em] max-[400px]:text-[23px] max-md:text-[23px]">
              Trustpilot
              <span className="block ml-[5px] text-[#19b57e] font-medium mt-1 sm:inline sm:mt-0 sm:ml-[5px]">
                Verified Reviews
              </span>
            </h2>
            <a href="#" className="hidden md:inline-flex items-center gap-[5px] min-h-[28px] ml-[7px] px-[9px] border border-[#dedede] rounded-[7px] bg-card text-foreground no-underline text-[8px] font-bold shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-[#1db783]">
              <PenLine className="w-2.5 h-2.5 text-[#1db783]" />
              <span>Write a Review</span>
              <ExternalLink className="w-2 h-2 text-[#888]" />
            </a>
          </div>

          <div className="flex items-center self-start gap-[5px] min-h-[31px] px-2.5 border border-[#92e9c7] rounded-[9px] bg-[#f5fffb] text-[#303632] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#22b883] shadow-[0_0_0_3px_#c7f5e4]"></span>
            <strong className="text-[9px] whitespace-nowrap">Excellent 4.9</strong>
            <div className="flex gap-[2px] text-[#20b47d]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} fill="currentColor" className="w-[11px] h-[11px]" />
              ))}
            </div>
          </div>
        </header>

        <p className="m-0 mt-0 mb-5 mx-3.5 sm:mx-0 text-muted-foreground text-[9px] sm:text-[10px] leading-[1.4] sm:mt-3 max-sm:mt-3 max-sm:mb-5">
          Authentic 5-star pilgrim feedback, verified independently on Trustpilot UK
        </p>

        {/* =====================================================
            MAIN REVIEW AREA
            ===================================================== */}
        <div className="flex flex-col w-[calc(100%-28px)] mx-auto gap-[27px] sm:w-full sm:grid sm:grid-cols-[minmax(0,1.45fr)_minmax(330px,1fr)] sm:gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(270px,0.8fr)] md:gap-[15px]">
          
          {/* FEATURED REVIEW */}
          <article className="relative h-[390px] min-h-[390px] overflow-hidden p-[22px_18px_20px] border border-[#c7eadd] border-t-[3px] border-t-[#20b881] rounded-2xl bg-card shadow-lg max-sm:rounded-2xl sm:p-[25px_25px_21px] sm:rounded-[18px] max-[400px]:min-h-[405px] dark:shadow-[0_10px_25px_rgba(0,0,0,0.22)]">
            
            <TrustpilotStars />

            <h3 className="relative z-[1] max-w-[650px] mt-[17px] mb-[14px] text-foreground font-serif text-[21px] sm:text-[22px] leading-[1.2] font-bold tracking-[-0.02em]">
              "{currentReview.title}"
            </h3>

            <div className="relative z-[1] p-[16px_17px] border border-[#e4e2df] rounded-[13px] bg-background/80 dark:bg-white/[0.025]">
              <p className="m-0 text-[#35302d] text-[11px] sm:text-xs leading-[1.7] italic">
                {currentReview.text}
              </p>
            </div>

            <div className="flex items-center gap-2.5 mt-5">
              <div 
                className="flex items-center justify-center w-[35px] h-[35px] rounded-[10px] text-white font-serif text-[15px] font-bold" 
                style={{ backgroundColor: currentReview.color }}
              >
                {currentReview.initial}
              </div>
              <div>
                <strong className="block text-foreground font-serif text-[11px] leading-[1.2]">{currentReview.name}</strong>
                <span className="block mt-1 text-[#89847f] text-[7px]">{currentReview.ago} · {currentReview.date}</span>
              </div>
            </div>

            <button type="button" className="absolute right-[18px] bottom-[157px] sm:right-[25px] sm:bottom-[161px] flex items-center gap-1.5 min-h-[27px] px-2.5 border-0 rounded-lg bg-[#f5f5f4] text-[#77736e] text-[8px] font-semibold cursor-pointer">
              <ThumbsUp className="w-[11px] h-[11px]" />
              Helpful
            </button>

            <div className="absolute right-[24px] bottom-[55px] text-[#f6f7f5] font-serif text-[125px] leading-[0.7] font-bold tracking-[-0.1em] pointer-events-none select-none max-[400px]:text-[100px]">
              99
            </div>

            <div className="absolute right-[18px] bottom-[18px] left-[18px] sm:right-[25px] sm:bottom-[19px] sm:left-[25px] flex items-center justify-between pt-3 border-t border-[#eeeeeb]">
              <div className="flex items-center gap-[5px]">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`p-0 border-0 rounded-full cursor-pointer transition-all duration-200 ${
                      index === currentIndex ? "w-[22px] bg-[#1fb67d]" : "w-1.5 h-1.5 bg-[#dededb]"
                    }`}
                    onClick={() => goToReview(index)}
                    aria-label={`Show review ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="flex gap-1 mr-1 text-[#85817c] text-[8px] font-semibold">
                  {String(currentIndex + 1).padStart(2, "0")}
                  <small className="text-[#aaa]">/</small>
                  {String(reviews.length).padStart(2, "0")}
                </span>
                <button type="button" onClick={() => goToReview(currentIndex - 1)} aria-label="Previous review" className="flex items-center justify-center w-8 h-8 p-0 border border-[#e0dfdc] rounded-[9px] bg-[#fafafa] text-[#514d49] cursor-pointer transition-all duration-200 hover:-translate-y-px hover:border-[#bdbab5] hover:bg-white">
                  <ArrowLeft className="w-[13px] h-[13px]" />
                </button>
                <button type="button" onClick={() => goToReview(currentIndex + 1)} aria-label="Next review" className="flex items-center justify-center w-8 h-8 p-0 border border-[#e0dfdc] rounded-[9px] bg-[#fafafa] text-[#514d49] cursor-pointer transition-all duration-200 hover:-translate-y-px hover:border-[#bdbab5] hover:bg-white">
                  <ArrowRight className="w-[13px] h-[13px]" />
                </button>
              </div>
            </div>
          </article>

          {/* RIGHT REVIEW LIST */}
          <aside className="flex flex-col min-w-0 w-full max-sm:min-h-0 h-[390px] min-h-[390px]">
            <div className="flex items-center justify-between mx-1.5 mb-2">
              <span className="text-[#9c9893] text-[8px] leading-none font-extrabold tracking-[0.08em]">MORE VERIFIED STORIES</span>
              <strong className="text-[#18ad77] text-[8px] font-extrabold">{reviews.length} REVIEWS</strong>
            </div>

            <div className="flex flex-col gap-2 max-sm:gap-2 min-h-0 flex-1 overflow-y-auto pr-1.5 [scrollbar-width:thin] [scrollbar-color:#b9ddd0_transparent] [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#b9ddd0] [&::-webkit-scrollbar-thumb:hover]:bg-[#20b47e]">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  className={`flex items-start gap-3 w-full min-h-[70px] max-sm:min-h-[70px] sm:min-h-[82px] p-[12px_13px] border rounded-xl bg-card text-foreground text-left cursor-pointer shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-[#a9ddca] hover:shadow-md ${
                    index === currentIndex ? "border-[#19b67d] shadow-[0_4px_10px_rgba(25,182,125,0.08)]" : "border-[#e2e1df]"
                  }`}
                  onClick={() => goToReview(index)}
                >
                  <div 
                    className="flex items-center justify-center w-[29px] h-[29px] rounded-lg text-white font-serif text-xs font-bold" 
                    style={{ backgroundColor: review.color }}
                  >
                    {review.initial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2.5">
                      <strong className="overflow-hidden text-foreground font-serif text-[9px] leading-[1.2] font-bold text-ellipsis whitespace-nowrap">{review.name}</strong>
                      <span className="flex-[0_0_auto] text-[#96918c] text-[6.5px]">{review.ago}</span>
                    </div>
                    <h4 className="overflow-hidden my-1 mb-[3px] text-[#3c3733] text-[8px] leading-[1.25] font-bold text-ellipsis whitespace-nowrap">{review.title}</h4>
                    <p className="overflow-hidden m-0 text-[#716d68] text-[7px] leading-[1.4] line-clamp-2">
                      "{review.text}"
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