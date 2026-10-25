// src/app/madinah-hotels/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { Users, CalendarClock, Star } from "lucide-react";
import { PlanUmrahForm } from "@/components/forms/plan-umrah-form";

const hotels = [
  { name: "Anwar Al Madinah Mövenpick Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/Anwar Al Madinah Mövenpick Hotel.jpg" },
  { name: "The Oberoi Madinah", address: "Al Masjid An Nawabi, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/The Oberoi Madinah.jpg" },
  { name: "Pullman Zamzam Madina", address: "Central Area, King Fahd St, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/Pullman Zamzam Madina.webp" },
  { name: "Dar Al Taqwa Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/Dar Al Taqwa Hotel.webp" },
  { name: "Madinah Hilton Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/Madinah Hilton Hotel.jpg" },
  { name: "Al Eiman Taibah Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/Al Eiman Taibah Hotel.jpg" },
  { name: "Al Eiman Royal Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/Al Eiman Royal Hotel.JPG" },
  { name: "Millennium Al Aqeeq Madinah Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/Millennium Al Aqeeq Madinah Hotel.jpeg" },
  { name: "Shaza Al Madina Hotel", address: "Central Area, Madinah 41411 Saudi Arabia", image: "/images/madinah-hotels/Shaza Al Madina Hotel.webp" },
];

export const metadata = getPageMetadata("/madinah-hotels");

export default function MadinahHotelsPage() {
  return (
    <main>
      {/* Page Header with 3 Custom Features */}
      <PageHeader 
        title="Madinah Hotels" 
        subtitle="Premium Accommodations"
        description="Stay steps away from Masjid an-Nabawi with our premium hotel selections. Fully ATOL and IATA certified, providing comprehensive support for a seamless and peaceful journey."
        image="/page-headers-images/Madina Hotel.jpg"
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
            We partner with the finest hotels in Madinah to ensure your stay is comfortable, luxurious, and just steps away from the Prophet&apos;s Mosque.
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