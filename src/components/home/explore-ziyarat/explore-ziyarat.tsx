// src/components/home/explore-ziyarat/explore-ziyarat.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ziyaratHighlights = [
  {
    id: 1,
    title: "Jabal al-Nour",
    location: "Makkah",
    desc: "The mountain containing Cave Hira, where the first Quranic revelation was received by Prophet Muhammad ﷺ.",
    image: "/images/image5.jpg"
  },
  {
    id: 2,
    title: "Jabal al-Rahmah",
    location: "Makkah",
    desc: "The well-known hill located on the sacred Plain of Arafat, central to the Hajj pilgrimage.",
    image: "/images/image4.jpg"
  },
  {
    id: 3,
    title: "Mina",
    location: "Makkah",
    desc: "The historic valley where pilgrims stay and perform the symbolic stoning of the Jamarat during Hajj.",
    image: "/images/image9.jpg"
  },
  {
    id: 4,
    title: "Masjid Quba",
    location: "Madinah",
    desc: "The first mosque established in Islamic history following the Prophet’s ﷺ arrival in Madinah.",
    image: "/images/image12.jpg"
  },
  {
    id: 5,
    title: "Uhud Mountain",
    location: "Madinah",
    desc: "Site of the historic Battle of Uhud and the resting place of the martyrs, including Hamza (RA).",
    image: "/images/image13.jpg"
  }
];

export function ExploreZiyarat() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          {/* Added Yellowish Sub-heading */}
          <span className="block text-sm font-bold uppercase tracking-wider text-brand-secondary mb-3">
            Spiritual Ziyarat Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
            Explore Sacred Ziyarat Places
          </h2>
          <p className="text-base sm:text-lg leading-[1.6] text-muted-foreground">
            Discover the most spiritually and historically significant Ziyarat locations in Makkah and Madinah. Walk in the footsteps of the Prophet ﷺ and connect with Islamic history.
          </p>
        </div>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-12">
          {ziyaratHighlights.map((place) => (
            <div 
              key={place.id} 
              className="relative bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group rounded-xl border border-border hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image 
                  src={place.image} 
                  alt={place.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/90 dark:bg-black/70 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded-full text-foreground">
                  {place.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-serif text-base font-bold leading-tight text-foreground mb-1.5">
                  {place.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <Link 
            href="/tour-guide" 
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background text-sm font-bold shadow-md hover:bg-foreground/90 transition-all"
          >
            Explore More Ziyarat
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}