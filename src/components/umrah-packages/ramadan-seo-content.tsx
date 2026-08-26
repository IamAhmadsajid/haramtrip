// src/components/umrah-packages/ramadan-seo-content.tsx
import { CheckCircle2, Info, ShieldCheck, Users, Hotel, Plane } from "lucide-react";

export function RamadanSeoContent() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2d201d] mb-4">Ramadan Umrah Packages from UK - Haram Trip</h2>
          <div className="space-y-4 text-[#4f4a47] text-base leading-[1.8]">
            <p>Welcome to Haram Trip’s Ramadan Umrah Packages 2026, where luxury, care, and devotion come together to create a truly meaningful journey. We specialise in offering premium, fully customisable Umrah packages from Birmingham, designed to make your spiritual visit to Saudi Arabia smooth, comfortable, and deeply fulfilling. Our affordable Umrah packages 2026 provide exceptional value without compromising on quality, including seamless accommodation, transportation, and visa support. With expert guidance and personalised attention, every aspect of your journey is carefully arranged so you can focus entirely on prayer, reflection, and connecting with the holy sites.</p>
            <p>With years of experience in delivering high-quality, 5-star all-inclusive Umrah packages, we are committed to making your Ramadan Umrah 2026 UK journey both memorable and truly rewarding. Every aspect of your travel is carefully arranged to ensure comfort, reliability, and peace of mind from start to finish.</p>
          </div>
        </div>

        {/* Families & Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2d201d] mb-4">Best Ramadan Umrah Packages for Families and Groups</h3>
            <p className="text-[#4f4a47] text-sm leading-[1.8] mb-4">Ramadan is a special time to travel for worship, reflection, and spiritual renewal. For many households, it is also the best season to plan a meaningful journey together. That is why so many pilgrims now search for Ramadan Umrah Packages that combine flights, hotels, transport, and support in one clear booking. Families and groups usually need more than a basic deal. They need comfort, coordination, and peace of mind from the very start.</p>
            <p className="text-[#4f4a47] text-sm leading-[1.8]">Haram Trip helps make that process easier by offering practical package options for different budgets, travel styles, and group sizes. Whether you are planning for parents, children, relatives, or a community group, the right package can make the whole experience smoother and more rewarding.</p>
          </div>
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h4 className="font-serif text-xl font-bold text-[#2d201d] mb-4">Why Ramadan Umrah is Ideal for Families</h4>
            <p className="text-sm text-[#4f4a47] leading-[1.7] mb-4">Traveling in Ramadan carries a special feeling that many pilgrims cherish for years. The atmosphere in Makkah and Madinah feels deeply moving, especially during the last ten nights. For families, this season gives everyone a shared spiritual experience that is hard to match at any other time of year.</p>
            <p className="text-sm text-[#4f4a47] leading-[1.7]">For groups, it creates a stronger sense of connection, support, and purpose throughout the journey. This is also why Ramadan Umrah Packages are in such high demand.</p>
          </div>
        </div>

        {/* Inclusions & Planning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#f8f5f0] rounded-2xl border border-[#e3dfda] p-8">
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-6">What Is Usually Included in the Best Packages</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Return flights from the UK", "Hotel accommodation in Makkah & Madinah", "Airport and intercity transfers", "Visa guidance or booking support", "Group-friendly room options", "Family room arrangements where available", "Optional ziyarat or guided local transport", "Economy, premium, and 5-star choices"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#302c2a]">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white border border-border rounded-xl shadow-sm">
              <h4 className="font-bold text-[#2d201d] mb-2 flex items-center gap-2"><Hotel className="h-5 w-5 text-brand-secondary" /> How Flights and Hotels Shape the Journey</h4>
              <p className="text-xs text-[#4f4a47] leading-[1.6]">A package with flights included may look more expensive at first, but separate bookings can quickly become costly. Hotel choice matters just as much. Choosing well-located hotels like Makkah Clock Royal Tower or Madinah Mövenpick Hotel may cost more, yet save energy every day.</p>
            </div>
            <div className="p-6 bg-white border border-border rounded-xl shadow-sm">
              <h4 className="font-bold text-[#2d201d] mb-2 flex items-center gap-2"><Users className="h-5 w-5 text-brand-secondary" /> What Families Need Most</h4>
              <p className="text-xs text-[#4f4a47] leading-[1.6]">Parents may need nearby hotels, easier transfers, and child-friendly arrangements. Group leaders may want smooth coordination and clear communication. A good package should reduce stress, not add to it.</p>
            </div>
          </div>
        </div>

        {/* Choosing the Right Package */}
        <div className="bg-[#211d1c] rounded-[22px] p-8 sm:p-12 text-white">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-8 text-center">How to Choose the Right Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-brand-secondary mb-2">Compare Total Value</h4>
              <p className="text-xs text-white/70">Compare flight routes, hotel distance, baggage allowance, and transfer details. A slightly higher price can sometimes save far more stress.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-brand-secondary mb-2">Match Group Size</h4>
              <p className="text-xs text-white/70">A couple, a family of six, and a community group all need different arrangements. We offer tailored solutions for every group size.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-brand-secondary mb-2">Think About Comfort</h4>
              <p className="text-xs text-white/70">Ramadan travel can be physically demanding. Choosing a sensible hotel location and reasonable travel timing can improve the whole experience.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-brand-secondary mb-2">Book Early</h4>
              <p className="text-xs text-white/70">Ramadan is one of the busiest seasons. The earlier you book, the more options you usually have for family rooms and premium hotels.</p>
            </div>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="max-w-4xl mx-auto text-center border-t border-border pt-12">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d201d] mb-4">Final Thoughts on Booking with Confidence</h3>
          <p className="text-muted-foreground mb-8">The best Ramadan Umrah Packages for families and groups are the ones that create balance. You want fair pricing, suitable flights, comfortable hotels, and support that makes the journey easier from start to finish. A strong package should protect your time, energy, and focus so your worship stays at the center of the experience.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Cheap Umrah Packages", "Luxury Umrah Packages", "VIP Umrah Packages 2026", "Umrah Packages Birmingham", "Umrah Packages London"].map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-brand-secondary-2 text-brand-primary text-xs font-bold rounded-full">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}