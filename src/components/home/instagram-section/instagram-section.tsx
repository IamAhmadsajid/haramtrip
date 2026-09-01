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
        <section className="relative overflow-hidden bg-[#fcfbf8] py-16 sm:py-20 lg:py-24">

            {/* =========================================================
                SUBTLE DECORATIVE BACKGROUND
            ========================================================== */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-[180px] opacity-[0.08]"
            >
                <div className="absolute -left-24 top-16 h-[420px] w-[420px] rounded-full border border-[#cda64a]" />
                <div className="absolute -left-16 top-28 h-[300px] w-[300px] rounded-full border border-[#cda64a]" />
            </div>

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">

                    {/* =====================================================
                        LEFT — CONTENT
                    ====================================================== */}
                    <div className="relative z-10 order-2 lg:order-1">

                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">

                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c99e3d] sm:text-xs">
                                Real Pilgrim Stories
                            </span>

                            <span className="h-px w-16 bg-[#d9b35a]" />

                            <span className="text-[#d2a744]">✦</span>
                        </div>

                        {/* Heading */}
                        <h2 className="mx-auto max-w-[620px] font-serif text-[42px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#11151b] sm:text-5xl md:text-[58px] lg:mx-0 lg:text-[54px] xl:text-[60px]">
                            Begin Your
                            <br />
                            Sacred Journey
                            <br />
                            with Confidence
                        </h2>

                        {/* Description */}
                        <div className="mx-auto mt-6 max-w-[560px] space-y-3 text-center text-[15px] leading-7 text-[#60646a] sm:text-base lg:mx-0 lg:text-left">
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
                                    bg-[#e8bf5b]
                                    px-7
                                    text-sm
                                    font-bold
                                    text-[#151515]
                                    shadow-[0_8px_24px_rgba(190,148,48,0.18)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[#dcae3f]
                                    hover:shadow-[0_12px_30px_rgba(190,148,48,0.25)]
                                "
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#11151b] text-white">
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
                                    border-[#e3d5b5]
                                    bg-white
                                    px-7
                                    text-sm
                                    font-bold
                                    text-[#17191d]
                                    shadow-[0_4px_15px_rgba(0,0,0,0.03)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-[#d1a844]
                                    hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)]
                                "
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#d9c79e]">
                                    <InstagramIcon className="h-3.5 w-3.5 text-[#b88b2e]" />
                                </span>

                                View More

                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                        </div>

                        {/* =================================================
                            TRUST / SUPPORT STRIP
                        ================================================== */}
                        <div className="mt-7 flex max-w-[560px] items-center divide-x divide-[#e7dfcf] rounded-2xl border border-[#e9e1d1] bg-white px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.025)]">

                            <div className="flex flex-1 items-center gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4e5bb]">
                                    <Star className="h-5 w-5 fill-[#cda343] text-[#cda343]" />
                                </div>

                                <div>
                                    <div className="text-base font-bold text-[#16181c]">
                                        4.9/5
                                    </div>
                                    <div className="text-xs text-[#777a7f]">
                                        pilgrim rating
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-1 items-center gap-3 pl-5">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4e5bb]">
                                    <Headphones className="h-5 w-5 text-[#c49b3b]" />
                                </div>

                                <div>
                                    <div className="text-base font-bold text-[#16181c]">
                                        UK-based
                                    </div>
                                    <div className="text-xs text-[#777a7f]">
                                        support
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* =====================================================
                        RIGHT — INSTAGRAM CARD
                    ====================================================== */}
{/* =====================================================
    RIGHT — INSTAGRAM VIDEO
====================================================== */}
<div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">

    {/* Soft background glow */}
    <div
        aria-hidden="true"
        className="absolute inset-x-8 top-8 h-[85%] rounded-[32px] bg-[#d7b45f]/10 blur-3xl"
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
            border-[#e7dcc2]
            bg-white
            shadow-[0_20px_60px_rgba(32,25,10,0.12)]
        "
    >

        {/* Custom header */}
        <div className="flex items-center justify-between border-b border-[#eee7da] bg-white px-5 py-4">

            <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4e6bd]">
                    <InstagramIcon className="h-5 w-5 text-[#b58a31]" />
                </div>

                <div>
                    <div className="text-sm font-bold text-[#17191d]">
                        Haram Trip
                    </div>

                    <div className="text-xs text-[#85868a]">
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
                    border-[#e5d6b5]
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-[#a77d29]
                    transition-colors
                    hover:bg-[#faf5e8]
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
        <div className="flex items-center justify-between border-t border-[#eee7da] bg-white px-5 py-4">

            <span className="text-xs font-medium text-[#686a6e]">
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
                    text-[#a47b29]
                    transition-colors
                    hover:text-[#775719]
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