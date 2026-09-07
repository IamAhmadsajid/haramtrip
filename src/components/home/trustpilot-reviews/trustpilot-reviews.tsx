// src/components/home/trustpilot-reviews/trustpilot-reviews.tsx
"use client";

import {
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Star,
} from "lucide-react";

// The 9 detailed reviews from your old code
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

function TrustpilotStars({ small = false }: { small?: boolean }) {
  return (
    <div className={`flex items-center ${small ? "gap-[3px]" : "gap-1.5"}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={`flex items-center justify-center rounded-[3px] bg-[#00b67a] text-white ${small ? "h-[18px] w-[18px]" : "h-7 w-7"}`}>
          <Star fill="currentColor" className={small ? "h-3 w-3" : "h-4 w-4"} strokeWidth={2.5} />
        </span>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-[#d9e8e2] dark:border-white/20 bg-white dark:bg-white/10 px-2.5 py-1 text-[10px] font-medium text-[#52605a] dark:text-white/80 shadow-sm">
      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#00b67a] text-white">
        <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={3} />
      </span>
      Verified on Trustpilot
    </span>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <span className="h-px w-14 bg-[#d8b15a]/45 sm:w-20" />
      <span className="relative flex h-4 w-4 items-center justify-center">
        <span className="absolute inset-[3px] rotate-45 border border-[#d8b15a]" />
        <span className="h-1 w-1 rounded-full bg-[#d8b15a]" />
      </span>
      <span className="h-px w-14 bg-[#d8b15a]/45 sm:w-20" />
    </div>
  );
}

export function TrustpilotReviews() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-[#fbfaf6] dark:bg-background py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-stretch gap-7 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          
          {/* =====================================================
              LEFT TRUSTPILOT SUMMARY CARD
              ===================================================== */}
          <div className="relative min-h-[480px] overflow-hidden rounded-[16px] bg-[#043f31] dark:bg-[#032d23] px-6 py-7 shadow-[0_14px_35px_rgba(0,50,38,0.14)] sm:px-8 sm:py-8 lg:min-h-[500px]">
            {/* Soft radial glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0b7358]/25 blur-3xl" />

            {/* Decorative pattern */}
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 opacity-[0.18]">
              <div className="absolute inset-0 rotate-45 border border-[#d5b052]" />
              <div className="absolute inset-5 rotate-45 border border-[#d5b052]" />
              <div className="absolute inset-10 rotate-45 border border-[#d5b052]" />
              <div className="absolute inset-[60px] rotate-45 border border-[#d5b052]" />

              <div className="absolute left-1/2 top-0 h-full w-px bg-[#d5b052]" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-[#d5b052]" />
            </div>

            {/* Small decorative mosque / Trustpilot icon */}
            <div className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b25b]/70">
              <div className="relative flex h-7 w-7 items-end justify-center">
                <span className="absolute bottom-0 left-[5px] h-5 w-[17px] rounded-t-[2px] border border-[#d6b25b]" />
                <span className="absolute bottom-[4px] left-[8px] h-3 w-[11px] rounded-t-full border border-[#d6b25b]" />
                <span className="absolute bottom-0 left-[12px] h-[7px] w-[3px] bg-[#d6b25b]" />
                <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[#d6b25b]" />
                <span className="absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rotate-45 border border-[#d6b25b]" />
              </div>
            </div>

            {/* Eyebrow */}
            <div className="relative z-[1] mt-7">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d9b65f]">
                Verified Trustpilot Reviews
              </p>
              <div className="mt-3 h-px w-7 bg-[#d9b65f]" />
            </div>

            {/* Main heading */}
            <h2 className="relative z-[1] mt-5 max-w-[270px] font-serif text-[32px] font-medium leading-[1.08] tracking-[-0.025em] text-[#f8f4e9] sm:text-[36px]">
              Real journeys.
              <br />
              Real peace
              <br />
              of mind.
            </h2>

            {/* Rating */}
            <div className="relative z-[1] mt-7">
              <div className="flex items-center gap-2">
                <span className="text-[17px] font-semibold text-white">★ Trustpilot</span>
                <span className="text-[17px] font-medium text-[#37c995]">Excellent</span>
                <span className="text-[17px] font-medium text-[#d9b65f]">4.5</span>
              </div>
              <div className="mt-3">
                <TrustpilotStars />
              </div>
            </div>

            {/* Verified reviews */}
            <div className="relative z-[1] mt-5 flex items-center gap-2 text-sm text-[#dce9e4]">
              <ShieldCheck className="h-4 w-4 text-[#d9b65f]" />
              <span>Verified reviews</span>
            </div>

            {/* Trustpilot button */}
            <a href="https://uk.trustpilot.com/review/haramtrip.co.uk" target="_blank" rel="noopener noreferrer" className="relative z-[1] mt-6 inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[#d9b65f] bg-transparent px-5 text-sm font-semibold text-[#f7f0df] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d9b65f] hover:text-[#073c30]">
              View on Trustpilot
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* =====================================================
              RIGHT CONTENT
              ===================================================== */}
          <div className="flex min-w-0 flex-col">
            {/* Heading */}
            <header className="pb-6 text-center sm:pb-7">
              <h2 className="m-0 font-serif text-[28px] font-semibold leading-tight tracking-[-0.025em] text-[#16332b] dark:text-white sm:text-[34px] lg:text-[38px]">
                What pilgrims say on Trustpilot
              </h2>
              <div className="mt-4">
                <GoldDivider />
              </div>
            </header>

            {/* Review cards (Added scroll container for the 9 reviews) */}
            <div className="flex max-h-[500px] flex-col gap-3.5 overflow-y-auto pr-2 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#b9ddd0]">
              {reviews.map((review) => (
                <article key={review.name} className="group relative rounded-xl border border-[#eee9df] dark:border-white/10 bg-white dark:bg-card px-4 py-4 shadow-[0_4px_18px_rgba(35,47,42,0.045)] dark:shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-[#dce8e2] dark:hover:border-white/20 hover:shadow-[0_8px_25px_rgba(35,47,42,0.08)] sm:px-5 sm:py-5">
                  <div className="grid gap-4 sm:grid-cols-[120px_minmax(0,1fr)_150px] sm:items-center">
                    {/* Stars */}
                    <div className="flex items-start sm:justify-center">
                      <TrustpilotStars small />
                    </div>

                    {/* Review content */}
                    <div className="min-w-0">
                      <h3 className="m-0 font-serif text-[17px] font-semibold leading-tight text-[#1d2925] dark:text-white sm:text-[18px]">
                        {review.title}
                      </h3>
                      <p className="m-0 mt-1.5 max-w-2xl text-[11px] leading-[1.55] text-[#68736e] dark:text-muted-foreground sm:text-xs">
                        {review.text}
                      </p>
                    </div>

                                        {/* Reviewer */}
                    <div className="flex flex-col items-center gap-2 sm:items-end">
                      {/* Top Row: Circle & Name */}
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: review.color }}>
                          {review.initial}
                        </div>
                        <p className="m-0 truncate text-[11px] font-semibold text-[#28332f] dark:text-white">
                          {review.name}
                        </p>
                      </div>
                      
                      {/* Bottom Row: Verified Badge */}
                      <VerifiedBadge />
                    </div>


                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto flex justify-end pt-6 sm:pt-7">
              <a href="/packages" className="group inline-flex min-h-[42px] items-center gap-5 rounded-[10px] bg-[#f2bd55] dark:bg-brand-secondary px-5 text-xs font-bold text-[#18362d] dark:text-brand-primary no-underline shadow-[0_5px_15px_rgba(190,140,45,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#edb54a] dark:hover:bg-brand-secondary/90 hover:shadow-[0_8px_20px_rgba(190,140,45,0.2)]">
                <span>Plan with Confidence</span>
                <span className="text-base transition-transform duration-200 group-hover:translate-x-1">›</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}