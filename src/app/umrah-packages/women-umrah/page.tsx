// src/app/umrah-packages/women-umrah/page.tsx
import { PageHeader } from "@/components/page-header";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";
import { WomenPackagesSlider } from "@/components/umrah-packages/women-packages-slider";
import { CtaSection } from "@/components/cta-section";
import { Users, CalendarClock, Star, Headphones, ShieldCheck, BookOpen, Car, Video, MessageCircle, Phone, MapPin } from "lucide-react";
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
        image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070&auto=format&fit=crop"
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

      {/* 5. Exclusive Services */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Exclusive Women Services</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">Specialised Private Tours, Transport & Pre-Departure Call Consultations. Elevate your journey with private chauffeured transfers, women-led historical tours, and pre-departure video or audio guidance calls with our female travel desk.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* VIP Transport */}
            <div className="p-8 bg-card rounded-2xl border border-border shadow-sm dark:bg-white/5 dark:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-8 w-8 text-brand-secondary" />
                <h3 className="font-serif text-2xl font-bold text-foreground">VIP Option: Private Transport & Tours</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Travel in complete comfort with dedicated private GMC or sedan transfers between Jeddah airport, Makkah, Madinah, and specialised women's Ziyarat historical sites.</p>
              <ul className="space-y-3 mb-8">
                {["Private GMC / Sedan transfers with vetted, polite driver", "Direct door-to-door pick-up at airport and hotel lobby", "Private Ziyarat to Mount Uhud, Quba Mosque & Hira Cave", "Flexible schedule tailored entirely to your pace"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5 fill-brand-secondary" /> {item}
                  </li>
                ))}
              </ul>
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full h-12 bg-green-500 text-white rounded-full text-sm font-bold hover:bg-green-600 transition-all">
                <MessageCircle className="h-4 w-4" /> Enquire Private Transport & Tour
              </a>
            </div>

            {/* Pre-Departure Call */}
            <div className="p-8 bg-card rounded-2xl border border-border shadow-sm dark:bg-white/5 dark:border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Video className="h-8 w-8 text-brand-secondary" />
                <h3 className="font-serif text-2xl font-bold text-foreground">Pre-Departure Care: 1-on-1 Call</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Schedule a private 30–45 minute video or audio call with a female travel consultant before leaving the UK to walk through every step of your journey.</p>
              <ul className="space-y-3 mb-8">
                {["Live 1-on-1 WhatsApp Video or Audio consultation call", "Step-by-step guidance on Nusuk app Rawdah permit booking", "Detailed walk-through of Madinah Women's Gates 74–88", "Packing checklist, Abaya tips, and safety orientation"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5 fill-brand-secondary" /> {item}
                  </li>
                ))}
              </ul>
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full h-12 bg-green-500 text-white rounded-full text-sm font-bold hover:bg-green-600 transition-all">
                <MessageCircle className="h-4 w-4" /> Schedule Video / Audio Call
              </a>
            </div>
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

      {/* 8. CTA */}
      <CtaSection 
        title="Ready to Begin Your Safe Spiritual Journey?"
        description="Connect with our dedicated female travel desk today. We are here to answer every question and plan your perfect Umrah."
      />
    </main>
  );
}