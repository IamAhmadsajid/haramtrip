// src/components/umrah-packages/five-star-seo-content.tsx
import { CheckCircle2, Info, ShieldCheck, CalendarDays, Plane, Hotel, Users, FileCheck, MapPin, Car } from "lucide-react";

export function FiveStarSeoContent() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20">
        
        {/* 1. Intro & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#2d201d] mb-4">5 Star Umrah Packages 2026</h2>
            <div className="space-y-4 text-[#4f4a47] text-base leading-[1.8]">
              <p>Welcome to Haram Trip’s 5-Star Umrah Packages in 2026, where excellence, comfort, and devotion come together. We take pride in offering luxurious and fully customisable Umrah packages, carefully designed to make your spiritual journey to Saudi Arabia truly unforgettable.</p>
              <p>With years of experience in delivering high-quality, 5-star all-inclusive Umrah packages, we are committed to making your Umrah journey both memorable and truly enriching. Every detail is thoughtfully planned to ensure comfort, reliability, and peace of mind throughout your pilgrimage.</p>
            </div>
          </div>
          <div className="bg-brand-secondary-2 rounded-2xl border border-brand-secondary/30 p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-4">5 Star Umrah Packages from the UK for 2026</h3>
            <div className="space-y-4 text-[#4f4a47] text-sm leading-[1.7]">
              <p>A 5 star Umrah package from the UK brings the major parts of your pilgrimage together in one planned journey, typically combining flights, accommodation in Makkah and Madinah, Saudi travel arrangements and ground transport according to the package selected. The main difference at the 5-star level is usually the standard and location of your hotels, together with greater choice over rooms, flights and transfers.</p>
              <p>At Haram Trip, our aim is to help you compare those details clearly before deciding what level of comfort is right for your journey.</p>
            </div>
          </div>
        </div>

        {/* 2. What is Included & Differences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-brand-secondary-2 rounded-2xl border border-brand-secondary/30 p-8">
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-6">What Is Included in a 5 Star Umrah Package?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Return flights from a UK airport", "Hotel accommodation in Makkah", "Hotel accommodation in Madinah", "Saudi visa assistance", "Airport transfers", "Transport between Makkah and Madinah", "Selected meal arrangements", "Optional Ziyarat", "Private or shared transport", "Booking support before departure"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#302c2a]">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground italic">The exact inclusions matter more than the label “all-inclusive”. Ask for your flights, hotel names, number of nights, room occupancy, transfer type and any additional charges to be written into your quotation.</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-2">What Makes a 5 Star Umrah Package Different?</h3>
              <p className="text-sm text-[#4f4a47] leading-[1.7]">A 5-star package is primarily about reducing avoidable travel friction while maintaining a high standard of accommodation. For many pilgrims, luxury means getting to prayers with less walking, having a suitable room after a physically demanding day, travelling comfortably, and knowing exactly how the journey has been organised.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-border rounded-xl">
              <MapPin className="h-5 w-5 text-brand-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#2d201d] text-sm">Hotel Location Matters as Much as Star Rating</h4>
                <p className="text-xs text-[#4f4a47] mt-1">Two hotels carrying the same star classification may offer very different experiences. Ask for the exact property name and its practical distance from the relevant mosque. In Makkah, consider the route to Masjid al-Haram rather than relying only on wording such as “near the Haram”.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Flights, Transfers & Rooms */}
        <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-6">Flights, Transfers and Room Arrangements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[#2d201d] mb-3 flex items-center gap-2"><Plane className="h-5 w-5 text-brand-secondary" /> Flight Itinerary</h4>
              <ul className="space-y-2 text-sm text-[#4f4a47]">
                {["Direct versus connecting flights", "Departure airport", "Arrival airport in Saudi Arabia", "Connection duration", "Baggage allowance", "Arrival and departure times"].map(item => (
                  <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span> {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#2d201d] mb-3 flex items-center gap-2"><Car className="h-5 w-5 text-brand-secondary" /> Transfers & Rooms</h4>
              <p className="text-sm text-[#4f4a47] mb-3">Families should confirm the proposed room layout. A headline per-person price may be based on quad sharing, while double, triple or family-room arrangements may change the final quotation.</p>
              <p className="text-sm text-[#4f4a47]">Confirm whether airport and inter-city journeys are private or shared, which journeys are included and whether Ziyarat transport is separate.</p>
            </div>
          </div>
        </div>

        {/* 4. Durations */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#2d201d] mb-8 text-center">Choose the Right Duration</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-brand-secondary-2 rounded-xl border border-brand-secondary/30">
              <CalendarDays className="h-8 w-8 text-brand-primary mb-3" />
              <h4 className="font-bold text-[#2d201d] mb-2">7-Night Packages</h4>
              <p className="text-xs text-[#4f4a47]">May suit working professionals, couples and travellers with limited annual leave. Convenient flight timings and hotel location become particularly important to maximize usable time.</p>
            </div>
            <div className="p-6 bg-brand-secondary-2 rounded-xl border border-brand-secondary/30">
              <CalendarDays className="h-8 w-8 text-brand-primary mb-3" />
              <h4 className="font-bold text-[#2d201d] mb-2">10-Night Packages</h4>
              <p className="text-xs text-[#4f4a47]">Provide a useful balance for many UK travellers. Allows a less compressed stay between Makkah and Madinah without requiring a full two-week absence from work or other responsibilities.</p>
            </div>
            <div className="p-6 bg-brand-secondary-2 rounded-xl border border-brand-secondary/30">
              <CalendarDays className="h-8 w-8 text-brand-primary mb-3" />
              <h4 className="font-bold text-[#2d201d] mb-2">14-Night Packages</h4>
              <p className="text-xs text-[#4f4a47]">Offers considerably more flexibility. Appeals to pilgrims who want longer stays in both holy cities, more recovery time between travel days or a less rushed itinerary.</p>
            </div>
          </div>
        </div>

        {/* 5. Cost & Planning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-4">What Affects the Cost?</h3>
            <p className="text-sm text-muted-foreground mb-4">There is no single fixed Umrah price. The most important cost factors include:</p>
            <div className="grid grid-cols-2 gap-3">
              {["Travel dates (Ramadan, holidays)", "Hotel selection & location", "Room occupancy (Double vs Quad)", "UK departure airport", "Direct vs connecting flights", "Length of stay", "Private vs shared transport", "Meals and extras"].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#302c2a]">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span> {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-4">Planning Around Ramadan and UK Holidays</h3>
            <p className="text-[#4f4a47] text-sm leading-[1.8] mb-4">Ramadan attracts particularly strong demand. Travellers considering this period should pay close attention to hotel location, crowd levels, meal arrangements and flight availability.</p>
            <p className="text-[#4f4a47] text-sm leading-[1.8] mb-4">UK school holidays can also make Easter and December attractive for families because children may travel without missing school. However, demand can affect hotel and flight availability.</p>
            <div className="flex flex-wrap gap-2">
              {["Ramadan", "Easter", "December", "School Holidays"].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-brand-secondary-2 text-brand-primary text-xs font-bold rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Booking Checklist */}
        <div className="bg-[#211d1c] rounded-[22px] p-8 sm:p-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <FileCheck className="h-8 w-8 text-brand-secondary" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">What to Check Before Paying</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {[
              "Exact travel dates", "Airline and flight itinerary", "Baggage allowance", "Exact Makkah & Madinah hotels", "Number of nights in each city", "Room occupancy", "Meal basis", "Airport & intercity transfer arrangements", "Visa assistance included", "Ziyarat included or excluded", "Total price per person", "Deposit and balance dates", "Amendment & cancellation conditions", "Financial protection information", "ATOL information for flight-inclusive packages"
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /> {item}
              </div>
            ))}
          </div>
        </div>

        {/* 7. Visa & Health */}
        <div className="p-6 rounded-2xl bg-[#fff9e8] border border-[#f5d58a]">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-[#d88900] shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#654515] mb-2">Visa, Travel Documents and Health Preparation</h3>
              <p className="text-sm text-[#775d2d] mb-4">Travel requirements can change, so check the rules that apply to your nationality, travel dates and visa type before departure. Do not rely on an old checklist or a previous pilgrimage for current entry rules.</p>
              <ul className="space-y-2">
                {["Check your passport and entry requirements", "Confirm the visa or travel authorisation being used", "Retain copies of important travel documents", "Check current Saudi health requirements", "Arrange suitable travel insurance", "Discuss mobility or medical requirements before booking", "Carry essential prescribed medication appropriately"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#775d2d]">
                    <CheckCircle2 className="h-4 w-4 text-[#d88900] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 8. Why Book With Us & Request Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2d201d] mb-4">Why Book Through Haram Trip?</h3>
            <p className="text-[#4f4a47] text-sm leading-[1.8] mb-4">The value of using an Umrah travel provider should come from organisation, transparency and accessible support rather than promotional claims. Haram Trip offers a range of 5-star package options with different hotels, durations and price points.</p>
            <p className="text-[#4f4a47] text-sm leading-[1.8]">We understand that the “best” package is personal. Tell us what matters to you first. That gives our team the information needed to build or recommend an appropriate option rather than simply quoting the first available package.</p>
          </div>
          <div className="bg-brand-secondary-2 rounded-2xl border border-brand-secondary/30 p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-4">Request a 5 Star Umrah Quote</h3>
            <p className="text-sm text-muted-foreground mb-4">To receive a useful quotation, provide:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Preferred departure date", "Preferred UK airport", "Number of adults and children", "Required duration", "Preferred room arrangement", "Desired hotel standard", "Any mobility requirements", "Direct or connecting flights", "Private or shared transfer"].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4f4a47] bg-[#f8f5f0] p-3 rounded-lg border border-[#e3dfda]">
                  <ShieldCheck className="h-4 w-4 text-green-500 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}