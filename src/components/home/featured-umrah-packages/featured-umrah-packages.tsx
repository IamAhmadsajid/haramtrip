// src/components/home/featured-umrah-packages/featured-umrah-packages.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, MousePointerClick } from "lucide-react";

const packages = [
    {
        id: 1,
        title: "Luxury Umrah Packages",
        subtitle: "Comfort journeys & premium stays",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Budget-Friendly Umrah",
        subtitle: "Affordable & essential travel",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Women's Umrah Packages",
        subtitle: "Safe & supported female pilgrimages",
        image: "https://images.unsplash.com/photo-1617289748124-8d9b0d2b4f3e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Ramadan Umrah Packages",
        subtitle: "Spiritual journey in the holy month",
        image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Easter Umrah Packages",
        subtitle: "Family travel during holidays",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "December Umrah Packages",
        subtitle: "Winter break spiritual journeys",
        image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop",
    },
];

// Configuration for the parallax stars
const starsConfig = [
    { className: "left-[3%] top-[21%] text-2xl text-brand-secondary", speed: 120 },
    { className: "left-[43%] top-[9%] text-xl text-emerald-700 dark:text-emerald-500", speed: 80 },
    { className: "left-[47%] top-[39%] text-2xl text-brand-secondary", speed: -60 },
    { className: "right-[3%] top-[25%] text-xl text-emerald-700 dark:text-emerald-500", speed: 140 },
    { className: "right-[2%] top-[9%] text-2xl text-brand-secondary", speed: 100 },
    { className: "left-[34%] bottom-[10%] text-xl text-emerald-700 dark:text-emerald-500", speed: -100 },
    { className: "right-[18%] bottom-[8%] text-xl text-emerald-700 dark:text-emerald-500", speed: 160 },
];

export function FeaturedUmrahPackages() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // activeIndex goes from 0 to packages.length - 1 (5)
    const activeIndex = useTransform(scrollYProgress, [0, 1], [0, packages.length - 1]);

    const handleManualNav = (direction: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top + window.scrollY;
        const containerHeight = rect.height;
        const scrollRange = containerHeight - window.innerHeight;
        const step = scrollRange / (packages.length - 1);

        const currentScroll = window.scrollY - containerTop;
        const currentStep = Math.round(currentScroll / step);

        let targetStep = currentStep + direction;
        targetStep = Math.max(0, Math.min(packages.length - 1, targetStep));

        window.scrollTo({
            top: containerTop + targetStep * step,
            behavior: "smooth"
        });
    };

    return (
        // Reduced mobile height to h-[220vh] to make it feel snappier
        <div
            ref={containerRef}
            className="relative h-[220vh] md:h-[300vh] border-b border-border bg-background"
        >
            <div className="sticky top-0 z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
                
                {/* ============================================================
                    BACKGROUND DECORATION
                ============================================================ */}
                
                {/* Soft warm background glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 dark:opacity-60"
                    style={{
                        background: `
                            radial-gradient(circle at 22% 48%, rgba(238, 201, 113, 0.12), transparent 30%),
                            radial-gradient(circle at 80% 42%, rgba(238, 201, 113, 0.10), transparent 30%)
                        `,
                    }}
                />

                {/* Subtle dotted texture */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 opacity-[0.16] dark:opacity-[0.08]"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(32, 91, 70, 0.45) 1px, transparent 1.5px)",
                        backgroundSize: "34px 34px",
                        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                    }}
                />

                {/* Decorative Corner Curves */}
                <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-20 z-0 h-72 w-72 rounded-full border border-brand-secondary/20" />
                <div aria-hidden="true" className="pointer-events-none absolute -left-36 -top-28 z-0 h-80 w-80 rounded-full border border-brand-secondary/10" />
                <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-20 z-0 h-80 w-80 rounded-full border border-brand-secondary/20" />
                <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-32 z-0 h-96 w-96 rounded-full border border-brand-secondary/10" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 z-0 h-96 w-96 rounded-full border border-brand-secondary/10" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -right-28 z-0 h-[420px] w-[420px] rounded-full border border-brand-secondary/10" />

                {/* Parallax Stars */}
                {starsConfig.map((star, index) => (
                    <ParallaxStar 
                        key={index} 
                        scrollYProgress={scrollYProgress} 
                        className={star.className} 
                        speed={star.speed} 
                    />
                ))}

                {/* ============================================================
                    CONTENT LAYER
                ============================================================ */}

                {/* Header */}
                <div className="absolute top-[15%] text-center px-4 z-20">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-3">
                        Explore Our Umrah Packages
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground">
                        Carefully curated Umrah experiences for every traveler.
                    </p>
                </div>

                {/* 3D Carousel Track */}
                <div
                    className="relative w-full h-[420px] md:h-[450px] flex items-center justify-center z-10"
                    style={{ perspective: 1400, perspectiveOrigin: "center center" }}
                >
                    {packages.map((pkg, index) => (
                        <CarouselCard
                            key={pkg.id}
                            pkg={pkg}
                            index={index}
                            activeIndex={activeIndex}
                            length={packages.length}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-[15%] flex items-center gap-6 z-20">
                    <button
                        onClick={() => handleManualNav(-1)}
                        className="flex items-center justify-center h-12 w-12 rounded-full border border-border bg-card/80 backdrop-blur-sm text-foreground shadow-sm hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all dark:bg-white/5 dark:border-white/10"
                        aria-label="Previous package"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground dark:text-white/70 uppercase tracking-wider">
                        <MousePointerClick className="h-4 w-4 text-brand-secondary" />
                        Drag or scroll to explore
                    </div>

                    <button
                        onClick={() => handleManualNav(1)}
                        className="flex items-center justify-center h-12 w-12 rounded-full border border-border bg-card/80 backdrop-blur-sm text-foreground shadow-sm hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all dark:bg-white/5 dark:border-white/10"
                        aria-label="Next package"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// Parallax Star Component
// ============================================================
interface ParallaxStarProps {
    scrollYProgress: MotionValue<number>;
    className: string;
    speed: number;
}

function ParallaxStar({ scrollYProgress, className, speed }: ParallaxStarProps) {
    // Drifts the star upwards (negative Y) based on scroll progress
    const y = useTransform(scrollYProgress, [0, 1], [0, -speed]);

    return (
        <motion.span
            aria-hidden="true"
            className={`pointer-events-none absolute z-0 ${className}`}
            style={{ y }}
        >
            ✦
        </motion.span>
    );
}

// ============================================================
// 3D Carousel Card Component
// ============================================================
interface CarouselCardProps {
    pkg: typeof packages[0];
    index: number;
    activeIndex: MotionValue<number>;
    length: number;
}

function CarouselCard({ pkg, index, activeIndex, length }: CarouselCardProps) {
    const distance = useTransform(activeIndex, (latest) => {
        let diff = index - latest;
        if (diff > length / 2) diff -= length;
        if (diff < -length / 2) diff += length;
        return diff;
    });

    const x = useTransform(distance, [-3, -2, -1, 0, 1, 2, 3], [-1020, -680, -340, 0, 340, 680, 1020]);
    const y = useTransform(distance, [-3, -2, -1, 0, 1, 2, 3], [60, 40, 15, 0, 15, 40, 60]);
    const z = useTransform(distance, [-3, -2, -1, 0, 1, 2, 3], [-100, -70, -30, 0, -30, -70, -100]);
    const rotateY = useTransform(distance, [-3, -2, -1, 0, 1, 2, 3], [-38, -28, -14, 0, 14, 28, 38]);
    const scale = useTransform(distance, [-3, -2, -1, 0, 1, 2, 3], [0.58, 0.68, 0.82, 1, 0.82, 0.68, 0.58]);
    const opacity = useTransform(distance, [-3, -2, -1, 0, 1, 2, 3], [0.55, 0.72, 0.9, 1, 0.9, 0.72, 0.55]);
    const zIndex = useTransform(distance, (d) => Math.round(100 - Math.abs(d) * 10));

    return (
        <motion.div
            className="
                absolute
                w-[270px]
                h-[390px]
                sm:w-[320px]
                sm:h-[430px]
                rounded-2xl
                overflow-hidden
                shadow-2xl
                border
                border-border
                dark:border-white/10
                cursor-pointer
                transform-gpu
            "
            style={{
                x,
                y,
                z,
                rotateY,
                scale,
                opacity,
                zIndex,
                transformStyle: "preserve-3d",
            }}
        >
            <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 768px) 270px, 320px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary mb-1">
                    0{pkg.id} / 0{length}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-1">
                    {pkg.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80">
                    {pkg.subtitle}
                </p>
            </div>
        </motion.div>
    );
}