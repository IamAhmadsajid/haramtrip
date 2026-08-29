// src/components/tour-guide/side-tours-experiences.tsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, MapPin, Clock, ArrowUpDown, MessageCircle, LayoutGrid, List } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { TourDetailsDialog } from "./tour-details-dialog";

type Category = "all" | "makkah" | "madinah";
type SortOrder = "featured" | "price-asc" | "price-desc" | "rating-desc";
type ViewMode = "grid" | "list";

interface Tour {
  id: number;
  location: string;
  title: string;
  duration: string;
  shortDesc: string;
  included: string[]; // Using 'included' to map the 'highlights' to avoid breaking the Dialog interface
  fullDesc: string;
  rating: number;
  reviews: number;
  price: number; // 0 means no price (Guided Visit)
  categories: Category[];
  image: string;
}

const tours: Tour[] = [
  // --- MAKKAH ZIYARAT ---
  {
    id: 1,
    location: "Makkah",
    title: "Jabal Sor",
    duration: "1–2 hours",
    shortDesc: "Visit Jabal Sor, the historic mountain where Prophet Muhammad ﷺ and Abu Bakr (RA) took refuge during the Hijrah.",
    included: ["Historic Cave", "Panoramic mountain views", "Hijrah history explained"],
    fullDesc: "Visit Jabal Sor, the historic mountain where Prophet Muhammad ﷺ and Abu Bakr (RA) took refuge during the Hijrah. Experience the profound history of the cave and enjoy panoramic views of the surrounding landscape.",
    rating: 4.95,
    reviews: 142,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image5.jpg"
  },
  {
    id: 2,
    location: "Makkah",
    title: "Jabal al-Rahmah",
    duration: "45–60 minutes",
    shortDesc: "Explore the well-known hill located on the sacred Plain of Arafat.",
    included: ["Located within Arafat", "Important Hajj landscape", "Guided historical explanation"],
    fullDesc: "Explore Jabal al-Rahmah, the well-known hill located on the sacred Plain of Arafat. Learn about its importance during Hajj and enjoy the guided historical explanation of this sacred landscape.",
    rating: 4.93,
    reviews: 98,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image4.jpg"
  },
  {
    id: 3,
    location: "Makkah",
    title: "Jabal Hira & Cave Hira",
    duration: "1–2 hours",
    shortDesc: "See the mountain containing Cave Hira, where the first Quranic revelation was received.",
    included: ["Historic Cave Hira", "First-revelation history", "Views overlooking Makkah"],
    fullDesc: "See Jabal Hira, the mountain containing Cave Hira, where the first Quranic revelation was received by Prophet Muhammad ﷺ. A deeply spiritual climb with stunning views overlooking Makkah.",
    rating: 4.98,
    reviews: 285,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image14.jpg"
  },
  {
    id: 4,
    location: "Makkah",
    title: "Maidan Arafat",
    duration: "45–60 minutes",
    shortDesc: "Visit the sacred plain where pilgrims gather for the most important rite of Hajj.",
    included: ["Sacred Hajj location", "Jabal al-Rahmah view", "Hajj history and guidance"],
    fullDesc: "Visit Maidan Arafat, the sacred plain where pilgrims gather for the most important rite of Hajj. Take in the spiritual magnitude of the location with a guided explanation of its history.",
    rating: 4.94,
    reviews: 110,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image9.jpg"
  },
  {
    id: 5,
    location: "Makkah",
    title: "Mina",
    duration: "45–60 minutes",
    shortDesc: "Explore the historic valley where pilgrims stay and perform important rituals during Hajj.",
    included: ["Famous tent city", "Important Hajj location", "Guided route through Mina"],
    fullDesc: "Explore Mina, the historic valley where pilgrims stay and perform important rituals during Hajj. Drive through the famous tent city and learn about the rituals performed here.",
    rating: 4.92,
    reviews: 85,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image6.jpg"
  },
  {
    id: 6,
    location: "Makkah",
    title: "Masjid Namirah",
    duration: "30–45 minutes",
    shortDesc: "Visit the prominent Arafat mosque associated with the Farewell Sermon and Hajj prayers.",
    included: ["Historic Arafat mosque", "Farewell Sermon connection", "Exterior sightseeing stop"],
    fullDesc: "Visit Masjid Namirah, the prominent Arafat mosque associated with the Farewell Sermon (Khutbah Hajjatul Wida) and Hajj prayers. A key exterior sightseeing stop during your Arafat visit.",
    rating: 4.96,
    reviews: 76,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image8.jpg"
  },
  {
    id: 7,
    location: "Makkah",
    title: "Muzdalifah",
    duration: "30–45 minutes",
    shortDesc: "Discover the sacred area where Hajj pilgrims spend the night and collect pebbles.",
    included: ["Sacred overnight location", "Hajj ritual explanation", "Open landscape views"],
    fullDesc: "Discover Muzdalifah, the sacred area where Hajj pilgrims spend the night and collect pebbles for the Jamarat. Learn about the rituals performed here while enjoying the open landscape views.",
    rating: 4.91,
    reviews: 64,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image3.jpg"
  },
  {
    id: 8,
    location: "Makkah",
    title: "Jamarat",
    duration: "30–45 minutes",
    shortDesc: "See the site in Mina where pilgrims perform the symbolic stoning ritual during Hajj.",
    included: ["Jamarat Bridge", "Hajj ritual site", "Guided ritual explanation"],
    fullDesc: "See the Jamarat, the site in Mina where pilgrims perform the symbolic stoning of the devil ritual during Hajj. View the impressive multi-level bridge structure and learn about its significance.",
    rating: 4.90,
    reviews: 58,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image9.jpg"
  },
  {
    id: 9,
    location: "Makkah",
    title: "Masjid al-Jinn",
    duration: "30–45 minutes",
    shortDesc: "Visit a historic mosque associated with Prophet Muhammad’s ﷺ encounter with a group of jinn.",
    included: ["Historic Makkah mosque", "Near the Grand Mosque", "Islamic history explained"],
    fullDesc: "Visit Masjid al-Jinn, a historic mosque associated with Prophet Muhammad’s ﷺ encounter with a group of jinn who accepted Islam. Located very near the Grand Mosque.",
    rating: 4.89,
    reviews: 42,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image7.jpg"
  },
  {
    id: 10,
    location: "Makkah",
    title: "Jannat al-Mualla",
    duration: "30–45 minutes",
    shortDesc: "Visit Makkah’s historic cemetery, where several relatives and companions of the Prophet ﷺ are buried.",
    included: ["Historic cemetery", "Resting place of notable figures", "Respectful guided visit"],
    fullDesc: "Visit Jannat al-Mualla, Makkah’s historic cemetery, where several relatives and companions of the Prophet ﷺ are buried, including his beloved wife Khadijah (RA). A respectful guided visit.",
    rating: 4.97,
    reviews: 150,
    price: 0,
    categories: ["makkah", "all"],
    image: "/images/image17.jpg"
  },

  // --- MADINAH ZIYARAT ---
  {
    id: 11,
    location: "Madinah",
    title: "Jannat al-Baqi",
    duration: "30–45 minutes",
    shortDesc: "Visit Madinah’s historic cemetery, where many companions and members of the Prophet’s ﷺ family are buried.",
    included: ["Near the Prophet’s Mosque", "Historic Islamic cemetery", "Respectful guided visit"],
    fullDesc: "Visit Jannat al-Baqi, Madinah’s historic cemetery, where thousands of companions (Sahaba) and members of the Prophet’s ﷺ family are buried. Located just adjacent to the Prophet's Mosque.",
    rating: 4.99,
    reviews: 320,
    price: 0,
    categories: ["madinah", "all"],
    image: "/images/image2.jpg"
  },
  {
    id: 12,
    location: "Madinah",
    title: "Uhud Martyrs’ Cemetery",
    duration: "45–60 minutes",
    shortDesc: "Visit the resting place of the companions who were martyred during the Battle of Uhud.",
    included: ["Mount Uhud views", "Martyrs’ cemetery", "Battle of Uhud history"],
    fullDesc: "Visit the Uhud Martyrs’ Cemetery, the resting place of the 70 companions who were martyred during the Battle of Uhud, including the Prophet's uncle Hamza (RA). Features stunning views of Mount Uhud.",
    rating: 4.98,
    reviews: 210,
    price: 0,
    categories: ["madinah", "all"],
    image: "/images/image13.jpg"
  },
  {
    id: 13,
    location: "Madinah",
    title: "Masjid al-Qiblatain",
    duration: "30–45 minutes",
    shortDesc: "Explore the historic mosque associated with the change of the prayer direction towards the Holy Kaaba.",
    included: ["Historic change of Qiblah", "Beautiful mosque architecture", "Opportunity to offer prayer"],
    fullDesc: "Explore Masjid al-Qiblatain, the historic mosque associated with the divine command to change the prayer direction (Qiblah) from Jerusalem to the Holy Kaaba in Makkah.",
    rating: 4.96,
    reviews: 180,
    price: 0,
    categories: ["madinah", "all"],
    image: "/images/image16.jpg"
  },
  {
    id: 14,
    location: "Madinah",
    title: "Masjid Quba",
    duration: "45–60 minutes",
    shortDesc: "Visit the first mosque established in Islamic history following the Prophet’s ﷺ arrival in Madinah.",
    included: ["First mosque in Islam", "Opportunity to offer prayer", "Historic Hijrah route"],
    fullDesc: "Visit Masjid Quba, the first mosque established in Islamic history following the Prophet’s ﷺ arrival in Madinah. Offering two rak'ahs of prayer here holds the reward of an Umrah.",
    rating: 4.99,
    reviews: 340,
    price: 0,
    categories: ["madinah", "all"],
    image: "/images/image12.jpg"
  },
  {
    id: 15,
    location: "Madinah",
    title: "Masjid al-Khandaq",
    duration: "45–60 minutes",
    shortDesc: "Explore the historic mosque area associated with the Battle of the Trench and the Seven Mosques.",
    included: ["Battle of the Trench site", "Seven Mosques area", "Guided historical explanation"],
    fullDesc: "Explore Masjid al-Khandaq (and the Seven Mosques area), the historic site associated with the famous Battle of the Trench (Ghazwah al-Khandaq). Learn about the strategic defense of Madinah.",
    rating: 4.95,
    reviews: 140,
    price: 0,
    categories: ["madinah", "all"],
    image: "/images/image11.jpg"
  },
  {
    id: 16,
    location: "Madinah",
    title: "Bir Ghars",
    duration: "30–45 minutes",
    shortDesc: "Visit a historic Madinah well closely associated with Prophet Muhammad ﷺ and early Islamic heritage.",
    included: ["Historic Ghars Well", "Prophetic-era connection", "Restored heritage location"],
    fullDesc: "Visit Bir Ghars, a historic Madinah well closely associated with Prophet Muhammad ﷺ. It is one of the famous wells from the Prophetic era, beautifully restored as a heritage location.",
    rating: 4.93,
    reviews: 65,
    price: 0,
    categories: ["madinah", "all"],
    image: "/images/image1.jpg"
  },
  {
    id: 17,
    location: "Madinah",
    title: "Masjid al-Jummah",
    duration: "30–45 minutes",
    shortDesc: "Visit the site where Prophet Muhammad ﷺ offered the first Friday prayer after arriving near Madinah.",
    included: ["Historic Friday prayer site", "Located near Masjid Quba", "Opportunity to offer prayer"],
    fullDesc: "Visit Masjid al-Jummah, the historic site where Prophet Muhammad ﷺ offered the first Friday (Jummah) prayer after arriving near Madinah during the Hijrah. Located very close to Masjid Quba.",
    rating: 4.94,
    reviews: 88,
    price: 0,
    categories: ["madinah", "all"],
    image: "/images/image18.jpeg"
  }
];

const filters: { label: string; value: Category }[] = [
  { label: "All Ziyarats (17)", value: "all" },
  { label: "Makkah (10)", value: "makkah" },
  { label: "Madinah (7)", value: "madinah" },
];

export function SideToursExperiences() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredTours = useMemo(() => {
    let result = tours.filter((tour) => tour.categories.includes(activeFilter));

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (tour) =>
          tour.title.toLowerCase().includes(q) ||
          tour.location.toLowerCase().includes(q) ||
          tour.included.some((inc) => inc.toLowerCase().includes(q))
      );
    }

    switch (sortOrder) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeFilter, searchQuery, sortOrder]);

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
            Explore Makkah & Madinah Ziyarat Experiences
          </h2>
          <p className="text-base sm:text-lg leading-[1.6] text-muted-foreground">
            Showing {filteredTours.length} verified sacred Ziyarat locations
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Ziyarat locations (e.g. Cave Hira, Uhud, Baqi)..."
                className="w-full h-12 pl-12 pr-4 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* View Toggle */}
              <div className="flex items-center gap-1 border border-border rounded-full p-1 bg-card h-12 px-1">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`h-9 w-9 rounded-full flex items-center justify-center transition-colors ${viewMode === "grid" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`h-9 w-9 rounded-full flex items-center justify-center transition-colors ${viewMode === "list" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative flex-1 md:w-64">
                <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                  className="w-full h-12 pl-11 pr-4 rounded-full bg-card border border-border text-foreground text-sm focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="featured">Featured Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Rating: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`inline-flex items-center h-10 px-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  activeFilter === filter.value
                    ? "bg-foreground text-background border-foreground shadow-md"
                    : "bg-card text-foreground border-border hover:bg-muted hover:border-brand-secondary/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tours Grid / List Layout */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" : "flex flex-col gap-6"}>
          {filteredTours.map((tour) => (
            <div 
              key={tour.id} 
              className={`relative bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
                viewMode === "grid" 
                  ? "flex flex-col rounded-2xl border border-border hover:-translate-y-1" 
                  : "flex flex-col sm:flex-row rounded-3xl border border-border hover:shadow-xl"
              }`}
            >
              
              {/* Image Section */}
              <div className={`relative overflow-hidden ${viewMode === "grid" ? "h-52" : "h-56 sm:h-auto sm:w-1/3"}`}>
                <Image 
                  src={tour.image} 
                  alt={tour.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={viewMode === "grid" ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 text-foreground">
                  <MapPin className="w-3 h-3 text-brand-secondary" /> {tour.location}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 text-foreground">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> {tour.rating} <span className="text-muted-foreground font-medium">({tour.reviews})</span>
                </div>
              </div>

              {/* Content Section */}
              <div className={`flex flex-col flex-1 p-5 ${viewMode === "list" ? "sm:p-6" : ""}`}>
                <h3 className="font-serif text-lg font-bold leading-tight text-foreground mb-2">{tour.title}</h3>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="w-3.5 h-3.5" /> {tour.duration}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {tour.shortDesc}
                </p>

                {/* Highlights Items - Mapped from tour.included */}
                <div className={`flex flex-wrap gap-1.5 mb-5 ${viewMode === "list" ? "sm:gap-2" : ""}`}>
                  {tour.included.slice(0, viewMode === "list" ? 4 : 3).map((item, idx) => (
                    <span key={idx} className="text-[11px] font-medium bg-muted text-foreground px-2 py-1 rounded-md border border-border">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Footer / Actions */}
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-2">
                  {/* Conditional Price/Label Rendering */}
                  {tour.price > 0 ? (
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">From</span>
                      <span className="text-2xl font-bold text-foreground">£{tour.price}</span>
                    </div>
                  ) : (
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">Experience</span>
                      <span className="text-xl font-bold text-foreground">Guided Visit</span>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        setSelectedTour(tour);
                        setIsDialogOpen(true);
                      }}
                      className="h-10 px-4 rounded-full border border-border text-foreground text-xs font-bold transition-all hover:bg-muted hover:border-brand-secondary"
                    >
                      Details
                    </button>
                    <Link 
                      href={SITE_CONFIG.whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="h-10 px-4 rounded-full bg-green-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all hover:bg-green-600 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Book Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Fallback */}
        {filteredTours.length === 0 && (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl mt-8">
            <p className="text-muted-foreground">No Ziyarat locations found matching your search. Try a different keyword or filter.</p>
          </div>
        )}
      </div>

      {/* Render the Dialog */}
      <TourDetailsDialog tour={selectedTour} open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}