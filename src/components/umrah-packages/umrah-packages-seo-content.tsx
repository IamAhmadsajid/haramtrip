// src/components/umrah-packages-seo-content.tsx
import { CheckCircle2, Plane, Hotel, CalendarDays, 
    Users, Info, ShieldCheck, MapPin, FileCheck, Moon, Snowflake  } from "lucide-react";

export function UmrahPackagesSEOContent() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20">
        
        {/* 1. Flights Included & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#2d201d] mb-4">
              Umrah Packages with Flights Included – Hassle-Free Travel
            </h2>
            <div className="space-y-4 text-[#4f4a47] text-base leading-[1.8]">
              <p>Experience seamless spiritual journeys with Haram Trip, offering Umrah packages with flights included – hassle-free travel for pilgrims from the UK. Our Umrah packages from UK are designed to suit every need, whether you are seeking luxury Umrah packages or more affordable Umrah packages 2026. For those looking for an exceptional experience during the holy month, our Ramadan Umrah packages provide premium services and comfort, while our 5 star Umrah packages UK cater to travelers who prefer top-notch accommodations and conveniences.</p>
              <p>Planning your journey around holidays is simple with our Easter Umrah packages 2026, ensuring a memorable spiritual experience without logistical worries. At Haram Trip, we prioritize convenience, combining flights, accommodation, and guided services into one effortless package. Enjoy peace of mind knowing your sacred journey is expertly handled, allowing you to focus entirely on devotion and reflection. Travel with ease, comfort, and faith with Haram Trip.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-4">Umrah Packages from the UK for 2026</h3>
            <div className="space-y-4 text-[#4f4a47] text-sm leading-[1.7]">
              <p>Planning Umrah from the UK involves more than choosing a flight and hotel. A well-organised Umrah package brings the main parts of your journey together, including flights, accommodation in Makkah and Madinah, ground transport and relevant travel support according to the package selected.</p>
              <p>At Haram Trip, our Umrah packages are designed for UK pilgrims with different budgets, travel dates, family sizes and accommodation preferences. You can compare 3-star, 4-star and 5-star options, choose shorter or longer stays, and request arrangements that suit your departure airport and travel priorities.</p>
              <p>The right package should give you clarity before you book. You should know where you are staying, how your journey is organised and what is included in the price so that you can concentrate on preparing for Umrah rather than managing avoidable travel uncertainty.</p>
            </div>
          </div>
        </div>

        {/* 2. What is Included & Budget Options */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#2d201d] mb-4">What Is Included & Choosing Your Budget</h2>
            <p className="text-muted-foreground">Umrah packages can differ considerably, so the package name alone should never be used to judge value. Choose the right package for your specific needs.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Inclusions List */}
            <div className="bg-[#f8f5f0] rounded-2xl border border-[#e3dfda] p-8">
              <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-6">Depending on your option, your package may include:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Return flights from the UK", "Accommodation in Makkah", "Accommodation in Madinah", "Airport transfers in Saudi Arabia",
                  "Transport between Makkah and Madinah", "Visa or travel-document assistance", "Shared or private ground transport", "Selected meal arrangements",
                  "Ziyarat arrangements where included", "Pre-departure booking support"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#302c2a]">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground italic">Always check the exact quotation before confirming. Hotel names, flight routes, room occupancy, meal basis, baggage allowance and transport arrangements may differ.</p>
            </div>

            {/* Budget Categories */}
            <div className="space-y-6">
              <BudgetCard 
                title="3-Star Umrah Packages" 
                text="Designed for pilgrims who want practical accommodation while keeping the overall cost of Umrah from the UK more manageable. May suit solo pilgrims, couples, groups and families whose main priority is completing their pilgrimage with essential travel arrangements." 
              />
              <BudgetCard 
                title="4-Star Umrah Packages" 
                text="Provides a middle ground between affordability and additional comfort. Often suitable for families and couples looking for comfortable hotels without moving into the highest accommodation category. Compare actual hotels, travel dates and room arrangements." 
              />
              <BudgetCard 
                title="5-Star and Luxury Umrah Packages" 
                text="Intended for pilgrims who value accommodation standard, convenient locations and enhanced comfort. May include premium hotels, different room categories, more convenient flights or private transfers. Practical access to the Haram is often the most valuable luxury." 
              />
            </div>
          </div>
        </div>

        {/* 3. Duration & Airports */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-border rounded-xl shadow-sm">
            <CalendarDays className="h-8 w-8 text-brand-secondary mb-3" />
            <h4 className="font-bold text-[#2d201d] mb-2">7-Day Packages</h4>
            <p className="text-xs text-[#4f4a47]">May suit pilgrims with limited time. Check flight timings and how nights are divided between Makkah and Madinah.</p>
          </div>
          <div className="p-6 bg-white border border-border rounded-xl shadow-sm">
            <CalendarDays className="h-8 w-8 text-brand-secondary mb-3" />
            <h4 className="font-bold text-[#2d201d] mb-2">10-Night Packages</h4>
            <p className="text-xs text-[#4f4a47]">Gives more time to divide your journey between the two holy cities without requiring a full two-week trip.</p>
          </div>
          <div className="p-6 bg-white border border-border rounded-xl shadow-sm">
            <CalendarDays className="h-8 w-8 text-brand-secondary mb-3" />
            <h4 className="font-bold text-[#2d201d] mb-2">14-Night Packages</h4>
            <p className="text-xs text-[#4f4a47]">Provides a relaxed schedule. Suits families with older relatives who prefer a less compressed itinerary.</p>
          </div>
          <div className="p-6 bg-white border border-border rounded-xl shadow-sm">
            <Plane className="h-8 w-8 text-brand-secondary mb-3" />
            <h4 className="font-bold text-[#2d201d] mb-2">UK Airports</h4>
            <p className="text-xs text-[#4f4a47]">London, Birmingham, Manchester. Consider total flight time, connections, baggage, and travel time to your UK airport.</p>
          </div>
        </div>

        {/* 4. Seasonal & Family */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#2d201d] mb-8 text-center">Specialized Umrah Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#f8f5f0] rounded-xl border border-[#e3dfda]">
              <Users className="h-8 w-8 text-brand-primary mb-3" />
              <h4 className="font-bold text-[#2d201d] mb-2">Family & Group</h4>
              <p className="text-xs text-[#4f4a47]">Requires planning for room arrangements, hotel access, luggage, and flight timings. The cheapest arrangement is not always the easiest for a family.</p>
            </div>
            <div className="p-6 bg-[#f8f5f0] rounded-xl border border-[#e3dfda]">
              <Moon className="h-8 w-8 text-brand-primary mb-3" />
              <h4 className="font-bold text-[#2d201d] mb-2">Ramadan Umrah</h4>
              <p className="text-xs text-[#4f4a47]">Highly sought-after period. Requires additional planning for hotel access and flight availability. Compare dates and locations early.</p>
            </div>
            <div className="p-6 bg-[#f8f5f0] rounded-xl border border-[#e3dfda]">
              <CalendarDays className="h-8 w-8 text-brand-primary mb-3" />
              <h4 className="font-bold text-[#2d201d] mb-2">Easter Umrah</h4>
              <p className="text-xs text-[#4f4a47]">Relevant to UK families influenced by school holidays. Makes it easier to organise a family pilgrimage without taking children out of school.</p>
            </div>
            <div className="p-6 bg-[#f8f5f0] rounded-xl border border-[#e3dfda]">
              <Snowflake className="h-8 w-8 text-brand-primary mb-3" />
              <h4 className="font-bold text-[#2d201d] mb-2">December Umrah</h4>
              <p className="text-xs text-[#4f4a47]">Popular for families using annual leave around Christmas. Prices vary according to exact dates, availability, and room occupancy.</p>
            </div>
          </div>
        </div>

        {/* 5. Cost & Hotel Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-4">How Much Does Umrah from the UK Cost?</h3>
            <p className="text-sm text-muted-foreground mb-4">There is no single price. The cost depends on several variables:</p>
            <div className="grid grid-cols-2 gap-3">
              {["Travel dates", "UK departure airport", "Airline and flight route", "Makkah & Madinah hotels", "Hotel location", "Room occupancy", "Length of stay", "Shared or private transport", "Meal basis", "Additional services requested"].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#302c2a]">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#2d201d] mb-4">Hotel Location Matters More Than Star Rating</h3>
            <p className="text-sm text-muted-foreground mb-4">A hotel may be described as close to the Haram, but actual accessibility can vary considerably. This is particularly important for:</p>
            <ul className="space-y-2">
              {["Elderly pilgrims", "Families with pushchairs", "Travellers with mobility limitations", "Pilgrims who expect to return to their hotel frequently", "People travelling during busy periods"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#302c2a]">
                  <MapPin className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 6. Booking Checklist */}
        <div className="bg-[#211d1c] rounded-[22px] p-8 sm:p-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <FileCheck className="h-8 w-8 text-brand-secondary" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">What to Check Before Booking</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {[
              "Exact departure & return dates", "Airline and flight route", "Baggage allowance", "Makkah & Madinah hotel names", "Nights in each city", "Room occupancy", "Meal arrangement", "Airport & intercity transfers", "Private or shared transport", "Visa assistance included", "Ziyarat included or excluded", "Total package price", "Additional compulsory charges", "Deposit amount & balance deadline", "Amendment & cancellation terms", "Financial protection applicable"
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0 mt-0.5" /> {item}
              </div>
            ))}
          </div>
        </div>

        {/* 7. Visa & Choosing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2d201d] mb-4">Umrah Visa and Travel Requirements</h3>
            <p className="text-[#4f4a47] text-sm leading-[1.8] mb-4">Saudi entry requirements can change. Before departure, make sure you check current requirements applicable to your nationality:</p>
            <ul className="space-y-2">
              {["Passport validity", "Appropriate Saudi visa or travel permission", "Current vaccination requirements", "Travel insurance", "Medication requirements", "Airline documentation", "Saudi pilgrimage procedures applicable to your dates"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#302c2a]">
                  <Info className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2d201d] mb-4">How to Choose the Right Umrah Package</h3>
            <p className="text-[#4f4a47] text-sm leading-[1.8] mb-4">Start by deciding what matters most to you. Choose your main priorities first, then compare packages against them:</p>
            <div className="flex flex-wrap gap-2">
              {["Budget", "Hotel category", "Hotel accessibility", "UK departure airport", "Direct flight preference", "Room type", "Journey length", "Makkah/Madinah night split", "Private transport", "Family requirements", "Mobility support", "Seasonal travel dates"].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-brand-secondary-2 text-brand-primary text-xs font-bold rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 8. Outro / Planning */}
        <div className="max-w-3xl mx-auto text-center border-t border-border pt-12">
          <h2 className="font-serif text-3xl font-bold text-[#2d201d] mb-4">Plan Your 2026 Umrah with Haram Trip</h2>
          <p className="text-muted-foreground mb-8">Haram Trip provides Umrah packages from the UK across different accommodation categories, travel durations and seasonal periods. When requesting a quotation, tell us your requirements. The more specific you are, the easier it becomes to compare suitable arrangements.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {["Preferred travel dates", "Departure airport", "Number of adults & children", "Preferred trip duration", "Hotel category", "Room requirements", "Transport preference", "Mobility requirements", "Approximate budget"].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#4f4a47] bg-white border border-border p-3 rounded-lg">
                <ShieldCheck className="h-4 w-4 text-green-500 shrink-0" /> {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Small helper component for budget cards
function BudgetCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
      <h4 className="font-serif text-lg font-bold text-[#2d201d] mb-2">{title}</h4>
      <p className="text-sm text-[#4f4a47] leading-[1.6]">{text}</p>
    </div>
  );
}