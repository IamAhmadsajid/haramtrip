// src/components/about/about-us-content.tsx
import { ShieldCheck, UserRound, LifeBuoy, Users, Sparkles, UserCheck, Heart, Globe, Hotel, LucideIcon } from "lucide-react";
import { CtaSection } from "@/components/cta-section"; // <-- Import CtaSection

const offerings = [
  { icon: Users, title: "Family & Neurodiverse Care", desc: "Accessible travel arrangements, special assistance for autistic children, and family-friendly accommodations." },
  { icon: Sparkles, title: "Revert Muslim Support", desc: "Guidance on Umrah rituals, Islamic etiquette, and dedicated support for new Muslims." },
  { icon: UserCheck, title: "Solo Women Pilgrims", desc: "Safe, secure, and fully accommodated packages for women traveling without a Mahram." },
  { icon: Heart, title: "Honeymoon & Newlywed Umrah", desc: "Romantic and luxurious Umrah suites, special arrangements, and memorable experiences." },
  { icon: Globe, title: "Umrah & Holiday Combos", desc: "Combine your spiritual journey with a relaxing holiday in Dubai, Turkey, or Egypt." },
  { icon: Hotel, title: "Budget to Luxury Stays", desc: "From affordable 3-star hotels to premium 5-star stays steps away from the Haram." }
];

export function AboutUsContent() {
  return (
    <div className="flex flex-col gap-12">
      
      {/* Main Story Card */}
      <div className="mx-auto max-w-[816px] w-full">
        <div className="rounded-[18px] border border-[#e3dfda] bg-white px-7 py-8 shadow-[0_2px_6px_rgba(0,0,0,0.06)] sm:px-9 sm:py-9">

          {/* Eyebrow */}
          <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#e36b2c]">
            Our Mission & Experience
          </div>

          {/* Heading */}
          <h2 className="mt-1 font-serif text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-[#2d201d] sm:text-4xl">
            Every Umrah Journey Is Personal
          </h2>

          {/* Main Content */}
          <div className="mt-7 space-y-5 text-sm leading-[1.8] text-[#302c2a] sm:text-base">
            <p>
              At Al Musafir Travel UK, we believe every Umrah journey is personal. With years of experience in Umrah travel, we understand that no two pilgrims are the same. That is why we offer a wide variety of Umrah packages designed around different needs, circumstances and budgets. As a British, ATOL protected travel agency, we specialise in making Umrah simple, transparent and stress-free from flights, visas and hotels to transfers and Ziarat guidance.
            </p>
            <p>
              We understand that every pilgrim has a different story. Whether you are a first-time pilgrim, a revert Muslim, a woman who may not have a mahram to travel with, a newlywed looking to make your honeymoon special, or a family travelling with an autistic or neurodiverse child, we take the time to understand what you need. We pride ourselves on being the only UK Umrah travel agency offering such a diverse range of packages, giving pilgrims more choice and flexibility than ever before. From affordable 3-star options to luxury 5-star stays close to the Haram, family and group packages, and Umrah combined with destinations such as Dubai, Istanbul or Cairo, we aim to have an option for every type of traveller.
            </p>
            <p>
              Our team of qualified and experienced travel professionals understands that an Umrah journey is about much more than simply booking a trip. From your first enquiry, our dedicated team remains in contact with you throughout your journey, providing guidance, support and reassurance every step of the way. We don't simply make a sale and leave you to it. We stay connected with you from the moment you book, throughout your time in Saudi Arabia, and until you are safely back home. We pride ourselves on exceptional customer service, honest advice, transparency and customer satisfaction. The trust our customers place in us is reflected in our reviews across Google and Trustpilot.
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-[#e5e1dc]" />

          {/* 3 Feature Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="min-h-[160px] rounded-[12px] border border-[#e3dfda] bg-[#fcfbfa] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#e5e1dc] bg-white shadow-sm">
                <ShieldCheck className="h-5 w-5 text-[#f07832]" />
              </div>
              <h3 className="font-serif text-base font-bold leading-tight text-[#2d201d]">
                ATOL Protected #12831
              </h3>
              <p className="mt-2 text-xs leading-[1.6] text-[#4f4a47]">
                Full UK financial security and booking peace of mind backed by Civil Aviation Authority licensing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="min-h-[160px] rounded-[12px] border border-[#e3dfda] bg-[#fcfbfa] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#e5e1dc] bg-white shadow-sm">
                <UserRound className="h-5 w-5 text-[#159c70]" />
              </div>
              <h3 className="font-serif text-base font-bold leading-tight text-[#2d201d]">
                Tailored To Your Story
              </h3>
              <p className="mt-2 text-xs leading-[1.6] text-[#4f4a47]">
                Specialized care for Reverts, families with neurodiverse children, solo women, and multi-city combinations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="min-h-[160px] rounded-[12px] border border-[#e3dfda] bg-[#fcfbfa] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#e5e1dc] bg-white shadow-sm">
                <LifeBuoy className="h-5 w-5 text-[#f07832]" />
              </div>
              <h3 className="font-serif text-base font-bold leading-tight text-[#2d201d]">
                End-to-End Assistance
              </h3>
              <p className="mt-2 text-xs leading-[1.6] text-[#4f4a47]">
                Direct access to your dedicated consultant before booking, during your time in Saudi Arabia, and until you return home.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Comprehensive Offerings Section */}
      <div className="mx-auto w-full max-w-[980px]">
        <div className="rounded-[22px] border border-[#e3dfda] bg-white px-7 py-8 shadow-[0_2px_6px_rgba(0,0,0,0.06)] sm:px-9 sm:py-9">

          {/* Section Heading */}
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#e36b2c]">
              Comprehensive Offerings
            </div>
            <h2 className="mt-1 font-serif text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-[#2d201d] sm:text-3xl">
              Crafted for Every Circumstance & Budget
            </h2>
          </div>

          {/* Offering Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {offerings.map((item, index) => {
              const Icon = item.icon;
              const iconColors = [
                "text-[#f07832]", "text-[#159c70]", "text-[#7c3aed]", 
                "text-[#f59e0b]", "text-[#2563eb]", "text-[#4b4642]",
              ];

              return (
                <div
                  key={index}
                  className="min-h-[140px] rounded-[14px] border border-[#e3dfda] bg-[#fcfbfa] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`mt-1 h-5 w-5 shrink-0 ${iconColors[index]}`} strokeWidth={1.8} />
                    <h3 className="font-serif text-base font-bold leading-[1.2] text-[#2d201d]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-[1.6] text-[#4f4a47]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ---> ADD REUSABLE CTA SECTION HERE <--- */}
      <CtaSection />

    </div>
  );
}