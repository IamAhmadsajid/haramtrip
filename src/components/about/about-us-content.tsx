// src/components/about/about-us-content.tsx
import { ShieldCheck, UserRound, LifeBuoy, Users, Sparkles, UserCheck, Heart, Globe, Hotel } from "lucide-react";

const offerings = [
  { icon: Users, title: "Family & Neurodiverse Care", desc: "Accessible travel arrangements, special assistance for autistic children, and family-friendly accommodations." },
  { icon: Sparkles, title: "Revert Muslim Support", desc: "Guidance on Umrah rituals, Islamic etiquette, and dedicated support for new Muslims." },
  { icon: UserCheck, title: "Women Pilgrims", desc: "Safe, secure, and fully accommodated packages for women traveling without a Mahram." },
  { icon: Heart, title: "Honeymoon & Newlywed Umrah", desc: "Romantic and luxurious Umrah suites, special arrangements, and memorable experiences." },
  { icon: Globe, title: "Umrah & Holiday Combos", desc: "Combine your spiritual journey with a relaxing holiday in Dubai, Turkey, or Egypt." },
  { icon: Hotel, title: "Budget to Luxury Stays", desc: "From affordable 3-star hotels to premium 5-star stays steps away from the Haram." }
];

export function AboutUsContent() {
  return (
    <div className="flex flex-col gap-12">
      
      {/* Main Story Card */}
      <div className="mx-auto max-w-[816px] w-full">
        {/* Updated to bg-card and border-border */}
        <div className="rounded-[18px] border border-border bg-card px-7 py-8 shadow-sm dark:shadow-[0_2px_6px_rgba(0,0,0,0.3)] sm:px-9 sm:py-9">

          {/* Eyebrow */}
          <div className="text-xs font-bold uppercase tracking-[0.08em] text-brand-secondary">
            Our Mission & Experience
          </div>

          {/* Heading */}
          <h2 className="mt-1 font-serif text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl">
            Every Umrah Journey Is Personal
          </h2>

          {/* Main Content */}
          <div className="mt-7 space-y-5 text-sm leading-[1.8] text-muted-foreground sm:text-base">
            <p>
              At Haram Trip UK, we believe every Umrah journey is personal. With years of experience in Umrah travel, we understand that no two pilgrims are the same. That is why we offer a wide variety of Umrah packages designed around different needs, circumstances and budgets. As a British, ATOL protected travel agency, we specialise in making Umrah simple, transparent and stress-free from flights, visas and hotels to transfers and Ziarat guidance.
            </p>
            <p>
              We understand that every pilgrim has a different story. Whether you are a first-time pilgrim, a revert Muslim, a woman who may not have a mahram to travel with, a newlywed looking to make your honeymoon special, or a family travelling with an autistic or neurodiverse child, we take the time to understand what you need. We pride ourselves on being the only UK Umrah travel agency offering such a diverse range of packages, giving pilgrims more choice and flexibility than ever before. From affordable 3-star options to luxury 5-star stays close to the Haram, family and group packages, and Umrah combined with destinations such as Dubai, Istanbul or Cairo, we aim to have an option for every type of traveller.
            </p>
            <p>
              Our team of qualified and experienced travel professionals understands that an Umrah journey is about much more than simply booking a trip. From your first enquiry, our dedicated team remains in contact with you throughout your journey, providing guidance, support and reassurance every step of the way. We don't simply make a sale and leave you to it. We stay connected with you from the moment you book, throughout your time in Saudi Arabia, and until you are safely back home. We pride ourselves on exceptional customer service, honest advice, transparency and customer satisfaction. The trust our customers place in us is reflected in our reviews across Google and Trustpilot.
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-border" />

          {/* 3 Feature Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="min-h-[160px] rounded-[12px] border border-border bg-muted/50 dark:bg-white/5 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] border border-border bg-card dark:bg-white/10 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="font-serif text-base font-bold leading-tight text-foreground">
                ATOL Protected #74904
              </h3>
              <p className="mt-2 text-xs leading-[1.6] text-muted-foreground">
                Full UK financial security and booking peace of mind backed by Civil Aviation Authority licensing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="min-h-[160px] rounded-[12px] border border-border bg-muted/50 dark:bg-white/5 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] border border-border bg-card dark:bg-white/10 shadow-sm">
                <UserRound className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="font-serif text-base font-bold leading-tight text-foreground">
                Tailored To Your Story
              </h3>
              <p className="mt-2 text-xs leading-[1.6] text-muted-foreground">
                Specialized care for Reverts, families with neurodiverse children, solo women, and multi-city combinations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="min-h-[160px] rounded-[12px] border border-border bg-muted/50 dark:bg-white/5 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] border border-border bg-card dark:bg-white/10 shadow-sm">
                <LifeBuoy className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="font-serif text-base font-bold leading-tight text-foreground">
                End-to-End Assistance
              </h3>
              <p className="mt-2 text-xs leading-[1.6] text-muted-foreground">
                Direct access to your dedicated consultant before booking, during your time in Saudi Arabia, and until you return home.
              </p>
            </div>
          </div>

        </div>
      </div>

 
      
    </div>
  );
}