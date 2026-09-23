// src/app/umrah-packages/women-umrah/page.tsx
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { WomenPackagesSlider } from "@/components/umrah-packages/women-packages-slider";
import { Users, Headphones, ShieldCheck, BookOpen, MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WomenTestimonialsSlider } from "@/components/women-testimonials-slider";

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
        image="/page-headers-images/women umrah packages.jpg"
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

      {/* 3. Exclusive Women Package Offers */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Exclusive Women Package Offers</h2>
          </div>
          {/* Placeholder paragraph — exact wording to be confirmed with the client */}
          <p className="max-w-3xl mx-auto text-center text-muted-foreground leading-[1.8]">
            We are putting together a set of exclusive, handpicked Umrah package offers designed specifically for female pilgrims, featuring secure hotels near women&apos;s gates and dedicated female support. Speak to our team today to hear about our current offers and find the package that suits your journey.
          </p>
        </div>
      </section>

      {/* 4. Tailored Packages Slider */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Tailored Umrah Packages</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">Women Umrah Packages: Curated packages for independent female pilgrims featuring 24/7 dedicated assistance, proximity hotels near women's gates, and ATOL protection.</p>
          </div>
          <WomenPackagesSlider />
        </div>
      </section>

      {/* 5. Dedicated Facilities */}
      <section className="py-16 sm:py-20 bg-brand-secondary-2">
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

      {/* 6. Safe Corridor Section */}
      <section className="py-16 bg-muted/50 dark:bg-zinc-900 border-y border-border dark:border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <ShieldCheck className="h-12 w-12 text-brand-secondary mx-auto mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-foreground dark:text-white">Verified Safe Corridor</h2>
          <p className="text-muted-foreground dark:text-white/80 text-lg leading-[1.8]">Safe, Empowered & Supported. Dedicated female advisors, private chauffeurs, and women’s gate proximity in Makkah & Madinah.</p>
        </div>
      </section>

      {/* 7. Feedback Slider (Reviews) */}
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
