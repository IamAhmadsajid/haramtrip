// src/app/makkah-hotels/page.tsx
import { PageHeader } from "@/components/page-header";
import { Users, CalendarClock, Star } from "lucide-react";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";

// Array of hotels to keep the code clean
const hotels = [
  { name: "Al Ghufran Safwah Hotel", address: "Ajyad Street Safwa Towers, Mecca 21955 Saudi Arabia", image: "/images/makkah-hotels/Al Ghufran Safwah Hotel.webp" },
  { name: "Swissotel Makkah", address: "Ajyad Street King Abdul Aziz Endowment, Mecca 21955 Saudi Arabia", image: "/images/makkah-hotels/Swissotel Makkah.webp" },
  { name: "Le Méridien Makkah", address: "King Abdulaziz Road, Ajyad Area, Mecca 24231 Saudi Arabia", image: "/images/makkah-hotels/Le Méridien Makkah.webp" },
  { name: "Al Marwa Rayhaan by Rotana", address: "Aiyad Street Clock Tower Complex, Mecca 24231 Saudi Arabia", image: "/images/makkah-hotels/Al Marwa Rayhaan by Rotana.webp" },
  { name: "Elaf Kinda Hotel", address: "Ibrahim Khalil Street, Mecca 24231 Saudi Arabia", image: "/images/makkah-hotels/Elaf Kinda Hotel.webp" },
  { name: "Pullman Zamzam Makkah", address: "King Abdul Aziz Rd Abraj Albait Complex, Mecca 21955 Saudi Arabia", image: "/images/makkah-hotels/Pullman Zamzam Makkah.webp" },
  { name: "Mira Ajyad", address: "King Abdul Aziz Rd, Mecca 24231 Saudi Arabia", image: "/images/makkah-hotels/Mira Ajyad.webp" },
  { name: "Al Safwah Hotel Tower 1", address: "Abraj Al Safwah Opposite To Gate King Abdulaziz No 1, Mecca 24211 Saudi Arabia", image: "/images/makkah-hotels/Al Safwah Hotel Tower 1.webp" },
  { name: "Makkah Towers", address: "Ibrahim Al Khalil Street, Mecca 21955 Saudi Arabia", image: "/images/makkah-hotels/Makkah Towers.webp" },
];

export default function MakkahHotelsPage() {
  return (
    <main>
      {/* Page Header with 3 Custom Features */}
      <PageHeader 
        title="Makkah Hotels" 
        subtitle="Premium Accommodations"
        description="Haram Trip offers premium Umrah packages from all major UK cities. Fully ATOL and IATA certified, providing comprehensive support including hotels, visas, and flights for a seamless journey."
        image="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2070&auto=format&fit=crop"
      >
                <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <Users className="h-4 w-4 text-brand-secondary" />
          Many Happy Pilgrims
        </div>
                <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <CalendarClock className="h-4 w-4 text-brand-secondary" />
          Many Years Experience
        </div>
        <div className="flex items-center gap-2 text-foreground dark:text-white text-xs md:text-sm font-medium bg-white dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-sm rounded-full px-4 py-2">
          <Star className="h-4 w-4 text-brand-secondary" />
          4.9/5 Rating
        </div>
      </PageHeader>

      {/* Plan Umrah Form Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PlanUmrahForm />
        </div>
      </section>
      
      {/* Hotel Grid Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Browse Our Top Hotels</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We partner with the finest hotels in Makkah to ensure your stay is comfortable, luxurious, and just steps away from the Haram.
          </p>
        </div>

        {/* Hotel Grid (Maps over the 9 hotels) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div key={index} className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div 
                className="h-48 bg-muted bg-cover bg-center" 
                style={{ backgroundImage: `url('${hotel.image}')` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{hotel.address}</p>
                {/* View Details button removed here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}