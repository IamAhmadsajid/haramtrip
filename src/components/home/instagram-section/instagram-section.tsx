// src/components/home/instagram-section/instagram-section.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, Play, Star, Headphones } from "lucide-react";

// Custom Instagram SVG Icon
const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const INSTAGRAM_REEL_URL =
    "https://www.instagram.com/reel/DcRP-bfjnIf/";

const INSTAGRAM_PROFILE_URL =
    "https://www.instagram.com/haramtrip1/";

export function InstagramSection() {
    useEffect(() => {
        const processInstagramEmbed = () => {
            const instagram = (
                window as typeof window & {
                    instgrm?: {
                        Embeds?: {
                            process?: () => void;
                        };
                    };
                }
            ).instgrm;

            if (instagram?.Embeds?.process) {
                instagram.Embeds.process();
            }
        };

        const existingScript = document.querySelector(
            'script[src="https://www.instagram.com/embed.js"]'
        );

        if (existingScript) {
            processInstagramEmbed();
            return;
        }

        const script = document.createElement("script");

        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = processInstagramEmbed;

        document.body.appendChild(script);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#fcfbf8] dark:bg-background py-16 sm:py-20 lg:py-24">

            {/* =========================================================
                SUBTLE DECORATIVE BACKGROUND
            ========================================================== */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-[180px] opacity-[0.08] dark:opacity-[0.05]"
            >
                <div className="absolute -left-24 top-16 h-[420px] w-[420px] rounded-full border border-brand-secondary/30" />
                <div className="absolute -left-16 top-28 h-[300px] w-[300px] rounded-full border border-brand-secondary/20" />
            </div>

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">

                    {/* =====================================================
                        LEFT — CONTENT
                    ====================================================== */}
                    <div className="relative z-10 order-2 lg:order-1">

                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">

                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-secondary sm:text-xs">
                                Real Pilgrim Stories
                            </span>

                            <span className="h-px w-16 bg-brand-secondary/50" />

                            <span className="text-brand-secondary">✦</span>
                        </div>

                        {/* Heading */}
                        <h2 className="mx-auto max-w-[620px] font-serif text-[42px] font-semibold leading-[1.04] tracking-[-0.025em] text-foreground sm:text-5xl md:text-[58px] lg:mx-0 lg:text-[54px] xl:text-[60px]">
                            Begin Your
                            <br />
                            Sacred Journey
                            <br />
                            with Confidence
                        </h2>

                        {/* Description */}
                        <div className="mx-auto mt-6 max-w-[560px] space-y-3 text-center text-[15px] leading-7 text-muted-foreground sm:text-base lg:mx-0 lg:text-left">
                            <p>
                                See authentic moments and video feedback straight from
                                Makkah Mukarramah and Madinah Munawwarah.
                            </p>

                            <p>
                                Discover helpful Umrah guidance, travel inspiration, and
                                practical information from Haram Trip. Learn about flights,
                                airport transfers, accommodation, and essential preparations
                                for a comfortable journey to Makkah and Madinah.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

                            {/* Primary */}
                            <Link
                                href={INSTAGRAM_PROFILE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    inline-flex
                                    h-12
                                    items-center
                                    justify-center
                                    gap-2.5
                                    rounded-full
                                    bg-brand-secondary
                                    px-7
                                    text-sm
                                    font-bold
                                    text-brand-primary
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-brand-secondary/90
                                "
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground dark:bg-brand-primary text-background dark:text-brand-secondary">
                                    <Play className="ml-[1px] h-3 w-3 fill-current" />
                                </span>

                                Watch Pilgrim Stories
                            </Link>

                            {/* Secondary */}
                            <Link
                                href={INSTAGRAM_REEL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    inline-flex
                                    h-12
                                    items-center
                                    justify-center
                                    gap-2.5
                                    rounded-full
                                    border
                                    border-border
                                    bg-card
                                    px-7
                                    text-sm
                                    font-bold
                                    text-foreground
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-brand-secondary
                                    hover:shadow-md
                                    dark:bg-white/5
                                "
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border">
                                    <InstagramIcon className="h-3.5 w-3.5 text-brand-secondary" />
                                </span>

                                View More

                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                        </div>

                        {/* =================================================
                            TRUST / SUPPORT STRIP
                        ================================================== */}
                        <div className="mt-7 flex max-w-[560px] items-center divide-x divide-border rounded-2xl border border-border bg-card px-5 py-4 shadow-sm dark:bg-white/5">

                            <div className="flex flex-1 items-center gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted dark:bg-white/10">
                                    <Star className="h-5 w-5 fill-brand-secondary text-brand-secondary" />
                                </div>

                                <div>
                                    <div className="text-base font-bold text-foreground">
                                        4.9/5
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        pilgrim rating
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-1 items-center gap-3 pl-5">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted dark:bg-white/10">
                                    <Headphones className="h-5 w-5 text-brand-secondary" />
                                </div>

                                <div>
                                    <div className="text-base font-bold text-foreground">
                                        UK-based
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        support
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* =====================================================
                        RIGHT — INSTAGRAM CARD
                    ====================================================== */}
                    <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">

                        {/* Soft background glow */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-8 top-8 h-[85%] rounded-[32px] bg-brand-secondary/10 blur-3xl"
                        />

                        {/* Main card */}
                        <div
                            className="
                                relative
                                w-full
                                max-w-[520px]
                                overflow-hidden
                                rounded-[24px]
                                border
                                border-border
                                bg-card
                                shadow-lg
                                dark:bg-[#111c30]
                                dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                            "
                        >

                            {/* Custom header */}
                            <div className="flex items-center justify-between border-b border-border bg-card px-5 py-4 dark:bg-[#0d1728]">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted dark:bg-white/10">
                                        <InstagramIcon className="h-5 w-5 text-brand-secondary" />
                                    </div>

                                    <div>
                                        <div className="text-sm font-bold text-foreground">
                                            Haram Trip
                                        </div>

                                        <div className="text-xs text-muted-foreground">
                                            @haramtrip1
                                        </div>
                                    </div>

                                </div>

                                <Link
                                    href={INSTAGRAM_PROFILE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        rounded-full
                                        border
                                        border-border
                                        px-4
                                        py-2
                                        text-xs
                                        font-bold
                                        text-brand-secondary
                                        transition-colors
                                        hover:bg-muted
                                        dark:hover:bg-white/10
                                    "
                                >
                                    Instagram
                                </Link>

                            </div>


                            {/* =================================================
                                CLIPPED INSTAGRAM VIDEO
                            ================================================== */}
                            <div
                                className="
                                    instagram-video-window
                                    relative
                                    w-full
                                    overflow-hidden
                                    bg-black
                                "
                            >

                                <blockquote
                                    className="instagram-media instagram-reel-embed"
                                    data-instgrm-permalink={INSTAGRAM_REEL_URL}
                                    data-instgrm-version="14"
                                    style={{
                                        background: "#000",
                                        border: 0,
                                        borderRadius: 0,
                                        boxShadow: "none",
                                        margin: 0,
                                        padding: 0,
                                        width: "100%",
                                        minWidth: "100%",
                                        maxWidth: "100%",
                                    }}
                                >
                                    <div className="flex min-h-[500px] items-center justify-center p-6 text-center">
                                        <Link
                                            href={INSTAGRAM_REEL_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white/80 hover:text-white hover:underline"
                                        >
                                            View this Reel on Instagram
                                        </Link>
                                    </div>
                                </blockquote>

                            </div>


                            {/* Custom footer */}
                            <div className="flex items-center justify-between border-t border-border bg-card px-5 py-4 dark:bg-[#0d1728]">

                                <span className="text-xs font-medium text-muted-foreground">
                                    Real pilgrim experiences
                                </span>

                                <Link
                                    href={INSTAGRAM_REEL_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-1.5
                                        text-xs
                                        font-bold
                                        text-brand-secondary
                                        transition-colors
                                        dark:hover:text-brand-secondary/80
                                    "
                                >
                                    View Reel
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}