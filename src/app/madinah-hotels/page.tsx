// src/app/madinah-hotels/page.tsx
import { PageHeader } from "@/components/page-header";
import { Users, CalendarClock, Star } from "lucide-react";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";

const hotels = [
  { name: "Anwar Al Madinah Mövenpick Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop" },
  { name: "The Oberoi Madinah", address: "Al Masjid An Nawabi, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=800&auto=format&fit=crop" },
  { name: "Pullman Zamzam Madina", address: "Central Area, King Fahd St, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800&auto=format&fit=crop" },
  { name: "Dar Al Taqwa Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop" },
  { name: "Madinah Hilton Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop" },
  { name: "Al Eiman Taibah Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800&auto=format&fit=crop" },
  { name: "Al Eiman Royal Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop" },
  { name: "Millennium Al Aqeeq Madinah Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=800&auto=format&fit=crop" },
  { name: "Shaza Al Madina Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop" },
];

export default function MadinahHotelsPage() {
  return (
    <main>
      {/* Page Header with 3 Custom Features */}
      <PageHeader 
        title="Madinah Hotels" 
        subtitle="Premium Accommodations"
        description="Stay steps away from Masjid an-Nabawi with our premium hotel selections. Fully ATOL and IATA certified, providing comprehensive support for a seamless and peaceful journey."
        image="/images/hero1.jpg"
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
            We partner with the finest hotels in Madinah to ensure your stay is comfortable, luxurious, and just steps away from the Prophet's Mosque.
          </p>
        </div>

        {/* Hotel Grid */}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}