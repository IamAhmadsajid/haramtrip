// src/components/umrah-packages/easter-seo-content.tsx
import { CheckCircle2, Info, ShieldCheck, Users, Hotel, Plane, CalendarDays, Star, MapPin, FileCheck, PiggyBank, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export function EasterSeoContent() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20">
        
        {/* 1. Intro */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Luxury Easter Umrah Packages 2026 Experience</h2>
          <div className="space-y-4 text-muted-foreground text-base leading-[1.8]">
            <p>Welcome to Haram Trip’s 5-Star Umrah Packages 2026 — where luxury meets spirituality. We take pride in delivering premium umrah packages and fully customizable Umrah experiences that ensure maximum comfort and convenience throughout your pilgrimage. Our exclusive 5-star Umrah deals are carefully designed to fulfil all your needs, allowing you to focus only on worship, reflection, and strengthening your connection with Allah, while we handle every detail of your journey.</p>
            <p>With years of experience in delivering premium all-inclusive 5-star Umrah packages, Haram Trip is dedicated to making your Umrah 2026 journey smooth, meaningful, and truly unforgettable. Our carefully designed Umrah packages 2026 are tailored to meet the needs of every pilgrim, combining spiritual fulfillment with exceptional comfort.</p>
            <p>Each package includes return flights for added convenience, with the flexibility to choose between economy and business class, ensuring that your travel experience matches your comfort and preference from the very beginning of your pilgrimage.</p>
          </div>
        </div>

        {/* 2. High Demand & Good Package */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm dark:bg-white/5 dark:border-white/10">
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Why Easter Umrah Packages 2026 Are in High Demand</h3>
            <p className="text-sm text-muted-foreground leading-[1.7] mb-4">The Easter period has become one of the most attractive times for UK pilgrims to travel. Many people use the school holidays and annual leave period to plan a spiritual journey without needing a long break from everyday responsibilities. That is why Easter Umrah packages 2026 are expected to attract strong demand from travelers looking for convenience, value, and a well-timed travel window.</p>
            <p className="text-sm text-muted-foreground leading-[1.7]">This time of year also resonates with families planning trips. Parents frequently favor travel dates that align with their children’s school calendars. Meanwhile, adults with jobs value a holiday window that demands less time off. Because demand often rises quickly, early planning usually gives pilgrims better hotel choices, better flight timing, and more control over total costs.</p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-muted/30 dark:bg-white/5 rounded-xl border border-border dark:border-white/10">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><SlidersHorizontal className="h-5 w-5 text-brand-secondary" /> What Makes a Good Easter Umrah Package</h4>
              <p className="text-xs text-muted-foreground leading-[1.6]">Real value comes from balance. You want a fair price, but you also want hotel comfort, sensible flight timings, reliable transport, and responsive customer support. A well-crafted package should streamline your experience right from the beginning, removing any guesswork and minimizing surprise costs.</p>
            </div>
            <div className="p-6 bg-muted/30 dark:bg-white/5 rounded-xl border border-border dark:border-white/10">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><Plane className="h-5 w-5 text-brand-secondary" /> How Flights Affect Price and Comfort</h4>
              <p className="text-xs text-muted-foreground leading-[1.6]">Flights are one of the biggest factors in the total cost of Umrah. A package with flights included may appear more expensive at first glance, but it can often be better value than booking each item separately. A shorter route or better connection time can make a huge difference, especially for older parents or children.</p>
            </div>
          </div>
        </div>

        {/* 3. Inclusions & Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-muted/30 dark:bg-white/5 rounded-2xl border border-border dark:border-white/10 p-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">What Is Included in Easter Umrah Packages 2026 with Flights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Return flights from the UK", "Hotel accommodation in Makkah & Madinah", "Airport and intercity transfers", "Visa guidance or support", "Group coordination for shared travel", "Different room options for families", "Access to economy, premium, or 5-star", "Optional ziyarat or local transport"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground italic">All-inclusive Umrah packages can be especially helpful if you want one clear price instead of managing many separate bookings.</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Why Choose Haram Trip for Your Easter Journey</h3>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-4">Choosing the right travel partner matters just as much as choosing the right hotel or airline. Haram Trip aims to make the booking process simple, clear, and human. Instead of overwhelming travelers with vague offers, the focus is on practical support, honest package details, and options that suit different budgets.</p>
            <p className="text-muted-foreground text-sm leading-[1.8]">Many people booking Umrah want direct answers. They want to know the hotel distance, room type, baggage rules, visa steps, and flight schedule before making payment. Haram Trip understands that confidence comes from clarity.</p>
          </div>
        </div>

        {/* 4. Cheap Does Not Mean Poor Quality - Dynamic Amber Colors */}
        <div className="p-8 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-300/60 dark:border-amber-700/40">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4">Cheap Does Not Mean Poor Quality</h3>
              <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">Some people think low-cost packages always mean weak service, distant hotels, or poor planning. That is not always true. The real question is whether the package offers honest value. Many cheap Umrah packages are well organized and perfectly suitable for pilgrims who care more about reliability than luxury branding.</p>
              <p className="text-sm text-amber-700 dark:text-amber-300">For example, a hotel a little farther from the Haram may reduce the total package price without damaging the overall experience. Shared transport can also lower costs for travelers in Umrah group packages. The key is transparency. If an agency clearly explains hotel class, walking distance, transport arrangements, and room setup, then a budget package can still be a smart choice.</p>
            </div>
          </div>
        </div>

        {/* 5. Choosing the Right Package */}
        <div className="bg-muted/50 dark:bg-zinc-900 rounded-[22px] p-8 sm:p-12 border border-border dark:border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <FileCheck className="h-8 w-8 text-brand-secondary" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground dark:text-white">How to Choose the Right Package</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-muted dark:bg-white/5 rounded-xl border border-border dark:border-white/10">
              <PiggyBank className="h-7 w-7 text-brand-secondary mb-3" />
              <h4 className="font-bold text-foreground dark:text-white mb-2">Compare Value, Not Just Price</h4>
              <p className="text-xs text-muted-foreground dark:text-white/70">Compare hotel class, distance from Haram, transport type, baggage allowances, and flight timings. A slightly higher package may actually be the better deal if it saves you stress.</p>
            </div>
            <div className="p-5 bg-muted dark:bg-white/5 rounded-xl border border-border dark:border-white/10">
              <CheckCircle2 className="h-7 w-7 text-brand-secondary mb-3" />
              <h4 className="font-bold text-foreground dark:text-white mb-2">Check What Is Included</h4>
              <p className="text-xs text-muted-foreground dark:text-white/70">Always review what is included before booking. Some all-inclusive packages cover flights, hotels, transfers, and visa support, while others may exclude key services. Understand inclusions to avoid hidden costs.</p>
            </div>
            <div className="p-5 bg-muted dark:bg-white/5 rounded-xl border border-border dark:border-white/10">
              <Users className="h-7 w-7 text-brand-secondary mb-3" />
              <h4 className="font-bold text-foreground dark:text-white mb-2">Match the Package to Your Needs</h4>
              <p className="text-xs text-muted-foreground dark:text-white/70">Families may need flexible room options, while elderly pilgrims may prefer hotels closer to Haram. Some prioritize budget, while others prefer <Link className="text-[#F0CE7F]" href="/umrah-packages/5-star-umrah/">VIP Umrah packages 2026</Link> or premium stays like <Link className="text-[#F0CE7F]" href="/makkah-hotels/">Fairmont Makkah</Link>. Pilgrims can also arrange <Link className="text-[#F0CE7F]" href="/tour-guide/">guided Ziyarat tours</Link> to explore the holy sites.</p>
            </div>
            <div className="p-5 bg-muted dark:bg-white/5 rounded-xl border border-border dark:border-white/10">
              <CalendarDays className="h-7 w-7 text-brand-secondary mb-3" />
              <h4 className="font-bold text-foreground dark:text-white mb-2">Best Time to Book</h4>
              <p className="text-xs text-muted-foreground dark:text-white/70">Booking early is often the difference between getting a smooth package and settling for what is left. Holiday travel windows can fill quickly, especially when flights and nearby hotel rooms are limited.</p>
            </div>
            <div className="p-5 bg-muted dark:bg-white/5 rounded-xl border border-border dark:border-white/10">
              <Hotel className="h-7 w-7 text-brand-secondary mb-3" />
              <h4 className="font-bold text-foreground dark:text-white mb-2">Why Hotel Location Still Matters</h4>
              <p className="text-xs text-muted-foreground dark:text-white/70">A cheaper room far from the Haram may look good online, but the distance can feel heavy after long walks. A closer hotel may cost more but save time and energy. Always know what you are paying for.</p>
            </div>
            <div className="p-5 bg-muted dark:bg-white/5 rounded-xl border border-border dark:border-white/10">
              <ShieldCheck className="h-7 w-7 text-brand-secondary mb-3" />
              <h4 className="font-bold text-foreground dark:text-white mb-2">Book With Confidence</h4>
              <p className="text-xs text-muted-foreground dark:text-white/70">The best packages bring together fair pricing, suitable flights, reliable hotels, and support you can trust. Haram Trip focuses on affordable choices, family-friendly planning, and smooth booking experiences.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}