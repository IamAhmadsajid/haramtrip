// src/app/umrah-packages/women-umrah/page.tsx
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { WomenPackagesSlider } from "@/components/umrah-packages/women-packages-slider";
import { CtaSection } from "@/components/cta-section";
import { Users, CalendarClock, Star, Headphones, ShieldCheck, BookOpen, MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WomenTestimonialsSlider } from "@/components/women-testimonials-slider";

// New data array for the Exclusive Package Cards
const womenExclusivePackages = [
  {
    image: "/images/umrah-packages/five-star1.webp",
    rating: "5.0",
    category: "Luxury 5 Star",
    title: "10 Nights 5 Star Ramadan Umrah Package",
    price: "£1450",
    makkahHotel: "Swissotel Makkah",
    makkahNights: "5 Nights",
    madinahHotel: "The Oberoi Madinah",
    madinahNights: "5 Nights",
  },
  {
    image: "/images/umrah-packages/five-star2.webp",
    rating: "5.0",
    category: "Premium 4 Star",
    title: "10 Nights 4 Star Ramadan Umrah Package",
    price: "£1150",
    makkahHotel: "Emaar Grand Hotel",
    makkahNights: "5 Nights",
    madinahHotel: "Emaar Elite Hotel",
    madinahNights: "5 Nights",
  },
  {
    image: "/images/umrah-packages/five-star3.webp",
    rating: "4.9",
    category: "Standard 3 Star",
    title: "7 Nights 3 Star Easter Umrah Package",
    price: "£899",
    makkahHotel: "Al Safwah Hotel",
    makkahNights: "4 Nights",
    madinahHotel: "Al Eiman Taibah",
    madinahNights: "3 Nights",
  },
];

export default function WomenUmrahPage() {
  const facilities = [
    { icon: Headphones, title: "24/7 Female Call Assistant", desc: "24/7 Female Call Assistant will be provided." },
    { icon: ShieldCheck, title: "Verified Safe Hotels & Women’s Entrances", desc: "Properties handpicked directly adjacent to ladies' prayer gates (Gates 74–88 in Madinah) with 24/7 guarded security and female staff." },
    { icon: Users, title: "Women Group Pairings & Companion Option", desc: "Optional pairing with other solo women or female tour groups for shared Tawaf, meals, and group encouragement." },
    { icon: BookOpen, title: "Women-Led Ziyarat & Rawdah Booking", desc: "Step-by-step assistance booking women’s Rawdah Shareef permits via Nusuk app and women-led historical tours in Madinah & Makkah." }
  ];

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader 
        title="Women Umrah Packages" 
        subtitle="Women Umrah Packages & Women Groups"
        description="Empowering female pilgrims to fulfill their spiritual journey with total peace of mind, dedicated 24/7 female support desks, verified safe hotel corridors near women's gates, and warm Muslimah companionship."
        image="/images/hero1.jpg"
      >
        <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-full h-11 px-6 text-sm font-semibold shadow-sm transition-all">
          <MessageCircle className="h-4 w-4" /> Enquire Women Package on WhatsApp
        </a>
      </PageHeader>

      {/* 2. Plan Umrah Form Section */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PlanUmrahForm />
        </div>
      </section>

      {/* 3. Dedicated Facilities */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Dedicated Facilities for Female Pilgrims</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">We remove every anxiety for Muslimah travelers heading to Makkah and Madinah alone. From your UK departure to your return, you are cared for with dignity and active assistance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all dark:bg-white/5 dark:border-white/10">
                <div className="p-3 rounded-xl bg-muted dark:bg-white/10 text-brand-primary dark:text-brand-secondary w-fit mb-4">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${SITE_CONFIG.phoneLink}`} className="flex items-center gap-2 bg-brand-primary dark:bg-brand-secondary text-white dark:text-brand-primary rounded-full h-12 px-8 text-sm font-bold shadow-md hover:bg-brand-primary/90 dark:hover:bg-brand-secondary/90 transition-all">
              <Phone className="h-4 w-4" /> Request Female Advisor Call
            </a>
            <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white rounded-full h-12 px-8 text-sm font-bold shadow-md hover:bg-green-600 transition-all">
              <MessageCircle className="h-4 w-4" /> WhatsApp Female Team
            </a>
          </div>
        </div>
      </section>

      {/* 4. Safe Corridor Section */}
      <section className="py-16 bg-muted/50 dark:bg-zinc-900 border-y border-border dark:border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <ShieldCheck className="h-12 w-12 text-brand-secondary mx-auto mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-foreground dark:text-white">Verified Safe Corridor</h2>
          <p className="text-muted-foreground dark:text-white/80 text-lg leading-[1.8]">Safe, Empowered & Supported. Dedicated female advisors, private chauffeurs, and women’s gate proximity in Makkah & Madinah.</p>
        </div>
      </section>

      {/* 5. NEW: Exclusive Women Package Offers */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Exclusive Women Package Offers</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">Handpicked packages designed specifically for female pilgrims, featuring secure hotels and dedicated support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {womenExclusivePackages.map((pkg, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 dark:bg-white/5 dark:border-white/10 flex flex-col">
                
                {/* Image Area */}
                <div className="relative h-52 overflow-hidden">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 z-10 inline-flex items-center px-3 py-1.5 rounded-full bg-brand-secondary text-brand-primary text-[10px] font-extrabold tracking-wider shadow-md uppercase">
                    {pkg.category}
                  </span>

                  {/* Star Rating Badge */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    {pkg.rating}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">{pkg.title}</h3>
                  
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-2xl font-bold text-brand-primary dark:text-brand-secondary">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>

                  {/* Hotel Details */}
                  <div className="space-y-3 mb-6 border-t border-border pt-4 dark:border-white/10">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-brand-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-foreground">Makkah Hotel</p>
                        <p className="text-xs text-muted-foreground">{pkg.makkahHotel} ({pkg.makkahNights})</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-brand-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-foreground">Madinah Hotel</p>
                        <p className="text-xs text-muted-foreground">{pkg.madinahHotel} ({pkg.madinahNights})</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <a href={`tel:${SITE_CONFIG.phoneLink}`} className="flex items-center justify-center gap-2 h-11 rounded-full border border-border text-foreground text-xs font-bold hover:bg-muted transition-all dark:hover:bg-white/10">
                        <Phone className="h-4 w-4" /> Call
                      </a>
                      <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-11 rounded-full bg-green-500 text-white text-xs font-bold hover:bg-green-600 transition-all">
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                    </div>
                    <button className="flex w-full items-center justify-center gap-1.5 text-sm font-bold text-brand-primary dark:text-brand-secondary hover:underline">
                      View Package Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Tailored Packages Slider */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Tailored Umrah Packages</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">Women Umrah Packages: Curated packages for independent female pilgrims featuring 24/7 dedicated assistance, proximity hotels near women's gates, and ATOL protection.</p>
          </div>
          <WomenPackagesSlider />
        </div>
      </section>

      {/* 7. Feedback Slider */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">What Female Pilgrims Say</h2>
          <p className="text-muted-foreground mb-12">Real feedback from UK Muslimah travelers who journeyed with us.</p>
          
          {/* Render the dynamic slider */}
          <WomenTestimonialsSlider />
          
        </div>
      </section>

    </main>
  );
}