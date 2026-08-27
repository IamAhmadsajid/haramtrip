// src/components/home/instagram-section/instagram-section.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

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

        // Check if Instagram embed.js is already loaded
        const existingScript = document.querySelector(
            'script[src="https://www.instagram.com/embed.js"]'
        );

        if (existingScript) {
            processInstagramEmbed();
            return;
        }

        // Load Instagram's official embed script
        const script = document.createElement("script");

        script.src = "https://www.instagram.com/embed.js";
        script.async = true;

        script.onload = processInstagramEmbed;

        document.body.appendChild(script);
    }, []);

    return (
        <section className="bg-background py-16 sm:py-20 border-b border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* =========================================================
              LEFT COLUMN — SECTION CONTENT
          ========================================================== */}
                    <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">

                        <p className="text-sm font-bold uppercase tracking-widest text-brand-secondary">
                            Real Pilgrim Testimonials On Instagram
                        </p>

                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                            Begin Your Sacred Journey with Confidence
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-[1.8]">
                            <p>
                                See authentic moments and video feedback straight from Makkah
                                Mukarramah and Madinah Munawwarah.
                            </p>

                            <p>
                                Discover helpful Umrah guidance, travel inspiration, and
                                practical information from Haram Trip. Learn about flights,
                                airport transfers, accommodation, and essential preparations
                                for a comfortable journey to Makkah and Madinah.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

                            {/* Follow Instagram */}
                            <Link
                                href={INSTAGRAM_PROFILE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-secondary hover:text-brand-primary"
                            >
                                <InstagramIcon className="w-4 h-4" />
                                Follow Us on Instagram
                            </Link>

                            {/* View More */}
                            <Link
                                href={INSTAGRAM_REEL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-transparent border border-border dark:border-white/20 text-foreground text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-muted hover:border-brand-secondary"
                            >
                                View More Testimonials
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                        </div>
                    </div>

                    {/* =========================================================
              RIGHT COLUMN — OFFICIAL INSTAGRAM EMBED
          ========================================================== */}
                    {/* Changed max-w to 326px (Instagram native) and used mx-auto to center it in its half of the screen */}
                    <div className="w-full max-w-[326px] mx-auto order-1 lg:order-2">

                        <div className="w-full rounded-2xl overflow-hidden border border-border dark:border-white/10 shadow-2xl bg-black">

                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={INSTAGRAM_REEL_URL}
                                data-instgrm-version="14"
                                style={{
                                    background: "#000",
                                    border: 0,
                                    borderRadius: 0,
                                    boxShadow: "none",
                                    margin: 0,
                                    maxWidth: "100%",
                                    minWidth: "100%",
                                    padding: 0,
                                    width: "100%",
                                }}
                            >
                                <div className="flex min-h-[400px] items-center justify-center p-6 text-center">
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
                    </div>

                </div>
            </div>
        </section>
    );
}