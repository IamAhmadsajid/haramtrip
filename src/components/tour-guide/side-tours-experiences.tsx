// src/components/tour-guide/side-tours-experiences.tsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, MapPin, Clock, ArrowUpDown, MessageCircle, LayoutGrid, List } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { TourDetailsDialog } from "./tour-details-dialog";

type Category = "all" | "jeddah" | "makkah" | "madinah" | "desert";
type SortOrder = "featured" | "price-asc" | "price-desc" | "rating-desc";
type ViewMode = "grid" | "list";

interface Tour {
  id: number;
  location: string;
  title: string;
  duration: string;
  shortDesc: string;
  included: string[];
  fullDesc: string;
  rating: number;
  reviews: number;
  price: number;
  categories: Category[];
  image: string;
}

const tours: Tour[] = [
  { id: 1, location: "Medina", title: "Holy Quran Museum Entrance Ticket", duration: "2 - 3 hours", shortDesc: "Explore historic handwritten Quranic manuscripts, centuries-old calligraphy, and interactive multimedia exhibits at the Holy Quran Museum.", included: ["Skip-the-Line Priority Entry Ticket to the Holy Quran Museum", "Access to All Manuscript Galleries & Historical Exhibition Halls", "Multi-Language Audio Guide Headset (English, Arabic, Urdu)", "Interactive Digital Multimedia Presentations"], fullDesc: "Immerse yourself in the sacred history and miraculous preservation of the Holy Quran. Discover historic handwritten mushafs from early Islamic eras, exquisite gold-leaf calligraphy, and interactive digital exhibits chronicling the revelation and global preservation of the Holy Book.", rating: 4.96, reviews: 195, price: 25, categories: ["madinah", "all"], image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop" },
  { id: 2, location: "Jeddah", title: "Jeddah: Luxury & Private Guided Tour", duration: "6 - 7 hours", shortDesc: "Exclusive private luxury chauffeur-driven tour of Jeddah featuring UNESCO Al-Balad, Red Sea Corniche, waterfront dining, and private guide.", included: ["Private Luxury AC Mercedes / GMC Yukon Chauffeur Service", "Dedicated Licensed Private English / Arabic Heritage Guide", "VIP Entry Tickets to Al-Balad Historic Mansions & Galleries", "Gourmet 3-Course Waterfront Lunch on the Red Sea", "Complimentary Chilled Beverages, Zamzam & Gourmet Dates"], fullDesc: "Experience the finest of Jeddah in ultimate luxury and style. Travel in a private luxury SUV with a personal licensed concierge and guide. Explore the historic heritage of Al-Balad with private mansion entry, the modern Jeddah Yacht Club and Corniche, Al-Rahma Floating Mosque, and a curated fine dining waterfront lunch overlooking the Red Sea.", rating: 4.98, reviews: 118, price: 428, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop" },
  { id: 3, location: "Jeddah Red Sea", title: "Jeddah: Small Group Yoga Session with Local Instructor", duration: "1.5 - 2 hours", shortDesc: "Relax and rejuvenate after your Umrah with a peaceful coastal yoga & stretching session led by a certified local instructor.", included: ["Professional Guided Session with Certified Local Instructor", "High-Quality Yoga Mat, Blocks, Straps & Towel Provided", "Post-Pilgrimage Muscle Relief & Mindful Stretching Routine", "Complimentary Herbal Teas, Fresh Juices & Mineral Water"], fullDesc: "Recharge your mind and body following your sacred pilgrimage. Join a tranquil, small-group yoga, mobility, and mindfulness session designed to relieve muscle stiffness from Tawaf and Sa’i. Held in a calming studio by the Jeddah coast with mats, props, herbal teas, and refreshing infused water included.", rating: 4.94, reviews: 86, price: 38, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1545389336-cf09069c4d0f?q=80&w=800&auto=format&fit=crop" },
  { id: 4, location: "Mecca", title: "Makkah: Journey Through Islamic History and Revelation", duration: "4 - 5 hours", shortDesc: "Inspiring educational journey tracing early Islamic history, the descent of Revelation at Cave Hira, Jabal Thawr, and historical Makkan sites.", included: ["English-Speaking Islamic Historian & Scholar Guide", "Private Air-Conditioned Vehicle Pickup & Dropoff in Makkah", "Jabal Al-Noor (Cave Hira) & Jabal Thawr Historical Stops", "Comprehensive Seerah Commentary & Q&A Session", "Chilled Zamzam Water & Fresh Madinah Dates"], fullDesc: "Deepen your connection to the dawn of Islam. Accompanied by an English-speaking scholar and historian, journey through the sacred landmarks where the Quran was revealed. Visit the base of Jabal Al-Noor (Cave of Hira), Mount Thawr, historic wells, and prophetic migration paths with clear historical narrations specifically tailored for spiritual reflection.", rating: 4.97, reviews: 235, price: 90, categories: ["makkah", "all"], image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" },
  { id: 5, location: "Mecca", title: "Kaaba Cover Complex & Two Holy Mosques Exhibition Tour", duration: "5 hours", shortDesc: "Exclusive guided access to King Abdulaziz Kiswah Factory where the gold-embroidered Kaaba cover is handcrafted, plus entry to the Two Holy Mosques Architecture Museum.", included: ["Official Entrance Permit & VIP Booking Coordination", "Private Luxury AC SUV / Van Hotel Transfer", "Licenced English Speaking Historian Guide", "Complimentary Zamzam Water & Refreshments", "Exhibition of Two Holy Mosques Architecture Entrance"], fullDesc: "Witness the sacred art of crafting the Kiswah (the holy Kaaba cover woven from pure silk and gold-plated silver thread) at the King Abdulaziz Complex in Makkah. Tour accompanied by an expert Islamic historian with private luxury AC transfers, official entry permit coordination, and a visit to the Exhibition of Two Holy Mosques Architecture housing centuries of rare artifacts from Masjid al-Haram and Masjid an-Nabawi.", rating: 4.98, reviews: 340, price: 364, categories: ["makkah", "all"], image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop" },
  { id: 6, location: "Medina", title: "Uhud Mountain and Seven Mosques Experience Tour", duration: "4 - 5 hours", shortDesc: "Comprehensive guided ziyarah visiting Mount Uhud, Archers’ Hill, Martyrs Cemetery, and the historic Seven Mosques battlefield site.", included: ["Licensed English Speaking Islamic Historian Guide", "Air-Conditioned Hotel Pickup & Drop-off in Madinah", "Mount Uhud & Archers’ Hill Historical Tour", "Seven Mosques (Battle of Khandaq Site) Visit", "Complimentary Zamzam Water & Fresh Madinah Dates"], fullDesc: "Experience a deeply spiritual and educational journey through holy Madinah. Accompanied by a knowledgeable Islamic historian, explore Mount Uhud and the famous Archers’ Hill (Jabal al-Rumat), pay respects at the Martyrs of Uhud (Shuhada Uhud) cemetery, and visit the historic Seven Mosques (Saba Masajid) located at the Battle of the Trench (Ghazwah al-Khandaq) site.", rating: 4.96, reviews: 240, price: 54, categories: ["madinah", "all"], image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" },
  { id: 7, location: "Jeddah", title: "Al-Balad Old Town Tour with Guide", duration: "4 hours", shortDesc: "Discover the ancient charm of UNESCO World Heritage Al-Balad in Jeddah with a licensed local guide, exploring coral stone houses and traditional souks.", included: ["Licensed Local Saudi Heritage Guide", "Entry Tickets to Historic Al-Balad Mansions", "Traditional Arabic Coffee, Dates & Hijazi Treats", "Guided Exploration of Traditional Spice & Perfume Souks", "Hotel Pickup & Return Option"], fullDesc: "Step back in time through the historic alleys of 500-year-old Al-Balad in Jeddah. Guided by an experienced local guide, admire ancient Red Sea coral stone architecture, intricate wooden Rawashin balconies, historic merchant mansions such as Beit Nassif, and vibrant traditional souks, complete with authentic Saudi coffee and dates.", rating: 4.97, reviews: 165, price: 105, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop" },
  { id: 8, location: "Taif", title: "Taif Exploration Tour with Lunch", duration: "7 - 8 hours", shortDesc: "Scenic mountain exploration to Taif with a traditional lunch, visiting organic rose water distilleries, Shubra Palace, and Al-Hada mountain viewpoints.", included: ["Private / Semi-Private AC Mountain Transport", "Full Traditional Arabic Lunch Included", "Taif Organic Rose Distillery Demonstration & Tour", "Shubra Palace & Al-Hada Mountain Viewpoint Stops", "Licensed English Speaking Guide"], fullDesc: "Journey up into the scenic mountains of Taif, the historic City of Roses. Ascend the scenic Sarawat mountains, visit a traditional organic Taif rose water distillery to discover centuries-old distillation methods, view historic Shubra Palace, take in panoramic vistas from Al-Hada mountain pass, and savor a freshly prepared authentic Arabic lunch.", rating: 4.95, reviews: 198, price: 117, categories: ["desert", "all"], image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop" },
  { id: 9, location: "Jeddah Desert", title: "Jeddah Desert Safari: Quad Biking, Camel Farm & Sunset Views", duration: "6 hours", shortDesc: "Thrilling Arabian desert safari featuring high-powered quad biking across golden dunes, traditional camel farm visit, and scenic sunset views with Bedouin hospitality.", included: ["High-Performance All-Terrain Quad Bike & Safety Gear", "Bedouin Camel Farm Visit & Interactive Experience", "Sunset Dunes Viewpoint & Sandboarding", "Traditional Bedouin Camp Hospitality with BBQ & Tea", "Private Roundtrip AC Transport from Jeddah"], fullDesc: "Experience the ultimate desert adventure near Jeddah. Ride all-terrain quad bikes across rolling desert dunes, visit an authentic Bedouin camel farm to interact with camels, watch the breathtaking desert sunset, and enjoy traditional Arabic tea, coffee, dates, and BBQ at an authentic Bedouin campsite.", rating: 4.96, reviews: 184, price: 270, categories: ["jeddah", "desert", "all"], image: "https://images.unsplash.com/photo-1545389336-cf09069c4d0f?q=80&w=800&auto=format&fit=crop" },
  { id: 10, location: "Mecca", title: "Makkah: Experience the Life of the Prophet in Makkah", duration: "4 hours", shortDesc: "Walk in the footsteps of the Prophet Muhammad ﷺ through sacred Makkah landmarks, Birthplace site, Jabal Thawr, Bir Tuwa, and prophetic revelation sites.", included: ["Licensed English Speaking Islamic Historian Guide", "Private Air-Conditioned Vehicle Pickup & Dropoff", "Comprehensive Prophetic Seerah Narration & Historical Insights", "Complimentary Zamzam Water & Fresh Dates"], fullDesc: "We take you on a spiritual historical journey, tracing the footsteps of the Prophet Muhammad, peace be upon him: From the starting point of the migration, Jabal Thawr, passing through the location of the Pledge of Aqaba, and then descending into the valley of our Prophet Ibrahim, peace be upon him, we conclude with Jabal Al Noor (Al Noor Mountain), the starting point of the message and the revelation of the Quran. In this journey, we blend the emotions of the heart, embody the present, and enrich the experience. At the end of this journey, you can visit the Revelation Exhibition and enjoy an enriching and delightful tour through the aisles of its museums.", rating: 4.98, reviews: 312, price: 89, categories: ["makkah", "all"], image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop" },
  { id: 11, location: "Jeddah Red Sea", title: "Jeddah: Bayada Leisure Boat Trip with Snorkeling", duration: "5 - 6 hours", shortDesc: "Sail to the famous turquoise waters of Bayada Island (Maldives of Saudi Arabia) for a relaxing leisure boat cruise, coral reef snorkeling, and swimming.", included: ["Leisure Boat Cruise to Bayada Island & Reefs", "High-Quality Snorkeling Gear & Life Jackets", "Certified Boat Captain & Marine Safety Crew", "Fresh Fruits, Light Snacks, Water & Chilled Beverages", "Complimentary Sunbathing Mats & Music System"], fullDesc: "Escape onto the Red Sea aboard a private or semi-private leisure boat to Bayada Island, renowned for its crystal-clear turquoise shallow waters and vibrant coral reefs. Includes professional snorkeling gear, life vests, sun deck loungers, fresh tropical fruits, snacks, and refreshing drinks.", rating: 4.97, reviews: 228, price: 145, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop" },
  { id: 12, location: "Mecca", title: "Makkah Clock Tower Balcony View & Astronomy Museum", duration: "3 hours", shortDesc: "Breathtaking panoramic 360° balcony view overlooking the Holy Kaaba and Masjid al-Haram from the Royal Clock Tower observatory deck.", included: ["Royal Clock Tower Balcony Observation Deck Ticket", "VIP Fast-Track Elevator Entry Access", "Makkah Astronomy & Clock Centre Museum Admission", "Guided Historical & Astronomical Presentation"], fullDesc: "Ascend to the highest observation deck in Makkah atop the famous Abraj Al-Bait Royal Clock Tower. Enjoy unmatched panoramic views directly facing the Holy Kaaba and Masjid al-Haram from the open-air glass balcony. Includes VIP fast-track tickets to the Makkah Clock Tower Astronomy Museum exploring lunar calendars and deep space telescopes.", rating: 4.96, reviews: 268, price: 70, categories: ["makkah", "all"], image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" },
  { id: 13, location: "Jeddah Historic District", title: "Step Into a Borderless World at teamLab Borderless Jeddah", duration: "3 - 4 hours", shortDesc: "Immerse yourself in a world-famous interactive digital art museum where art, light, and colour seamlessly flow without boundaries.", included: ["Skip-the-Line Entry Ticket to teamLab Borderless Jeddah", "Access to All Multi-Sensory Light & Projection Galleries", "Interactive Digital Spaces Suitable for All Ages", "Cloakroom & Locker Facilities Access"], fullDesc: "Explore the breathtaking teamLab Borderless museum in Jeddah. Wander through vast digital worlds without boundaries, where interactive artworks move between rooms, interact with visitors, and create unforgettable sensory wonder for families and art enthusiasts of all abilities.", rating: 4.96, reviews: 148, price: 105, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1545389336-cf09069c4d0f?q=80&w=800&auto=format&fit=crop" },
  { id: 14, location: "Jeddah", title: "Jeddah: Waterpark Entry Ticket with Pools and Rides", duration: "Full Day Pass", shortDesc: "Enjoy an exciting and refreshing day at Jeddah’s premier waterpark featuring wave pools, lazy rivers, splash zones, and thrilling rides.", included: ["Full Day Waterpark Access Wristband", "Access to Wave Pool, Lazy River & Children’s Splash Zones", "Access to All Water Slides & Family Water Play Areas", "Complimentary Shaded Loungers & Changing Rooms"], fullDesc: "Beat the heat with an all-day pass to Jeddah’s favorite family waterpark. Featuring temperature-controlled wave pools, gentle splash areas for young children, lazy river rides, and high-adrenaline slides with certified lifeguards and shaded rest zones.", rating: 4.88, reviews: 92, price: 49, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop" },
  { id: 15, location: "Jeddah", title: "Guided Tour in Jeddah by local woman", duration: "4 hours", shortDesc: "Explore historic UNESCO Al-Balad coral buildings, traditional spice souks, and Red Sea heritage with a licensed local Saudi female guide.", included: ["Licensed Local Saudi Female Guide", "Entry Tickets to Historic Al-Balad Mansions", "Traditional Arabic Coffee, Dates & Hijazi Snacks", "Private Hotel Pickup & Return Transport"], fullDesc: "Discover the cultural heartbeat of Jeddah guided by an experienced local woman. Walk through the atmospheric alleys of 500-year-old Al-Balad, visit historic merchant houses, sample authentic Hijazi snacks, and explore local perfume and craft bazaars in a comfortable, female-friendly setting.", rating: 4.97, reviews: 74, price: 110, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop" },
  { id: 16, location: "Jeddah Desert", title: "Private Bedouin-Style Desert Safari with Quad Bike", duration: "6 hours", shortDesc: "Authentic Arabian desert safari featuring private 4x4 dune transfer, thrilling quad bike riding across golden dunes, and a Bedouin camp evening.", included: ["Private High-Performance Quad Bike & Safety Gear", "4x4 Dune Driving & Sandboarding Experience", "Bedouin Camp Access with Authentic BBQ Dinner", "Arabic Coffee, Tea, Dates & Chilled Refreshments", "Private Roundtrip AC Transfers"], fullDesc: "Escape into the majestic Saudi desert for an unforgettable private safari. Ride powerful quad bikes across high sand dunes under professional supervision, enjoy camel encounters, and relax in a private traditional Bedouin camp with open-fire BBQ dinner, Arabic coffee, and stargazing.", rating: 4.95, reviews: 112, price: 270, categories: ["jeddah", "desert", "all"], image: "https://images.unsplash.com/photo-1545389336-cf09069c4d0f?q=80&w=800&auto=format&fit=crop" },
  { id: 17, location: "Makkah & Jeddah", title: "Kiswah Stories Tour with Perfume Workshop", duration: "5 hours", shortDesc: "Immerse in the sacred history of the Kaaba Kiswah weaving traditions followed by an exclusive private Arabic Oud & perfume blending workshop.", included: ["Private Islamic Historian & Kiswah Presentation", "Exclusive Hands-on Perfume Blending Masterclass", "Custom Bottled Artisanal Fragrance to Keep", "Gourmet Hospitality with Dates, Coffee & Refreshments", "Luxury Private AC Chauffeur Transfers"], fullDesc: "A truly memorable spiritual and sensory experience. Learn about the centuries-old history, craftsmanship, and materials used in creating the Holy Kaaba Kiswah. Afterwards, participate in a private masterclass with an artisanal perfumer to blend and bottle your own bespoke Arabian Oud fragrance to take home.", rating: 4.98, reviews: 65, price: 450, categories: ["makkah", "jeddah", "all"], image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" },
  { id: 18, location: "Jeddah", title: "Jeddah Pottery Workshop with Coffee and Dates", duration: "2.5 hours", shortDesc: "Relaxing hands-on artisanal pottery and ceramic crafting workshop in Jeddah, accompanied by freshly brewed Saudi coffee and gourmet dates.", included: ["Full Pottery Studio Access & Wheel Usage", "All Clay, Glazing Materials & Firing Included", "Expert Ceramic Artist Instruction", "Fresh Saudi Gahwa (Coffee) & Gourmet Dates"], fullDesc: "Unwind with an inspiring pottery session in a boutique Jeddah art studio. Guided by master ceramists, learn hand-building and wheel-throwing techniques to create your own ceramic piece, while savoring traditional Saudi coffee and premium Medina dates in a calm, welcoming environment.", rating: 4.94, reviews: 88, price: 53, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop" },
  { id: 19, location: "Jeddah", title: "Historical & Heritage in Jeddah Albalad", duration: "5 hours", shortDesc: "Explore ancient UNESCO Al-Balad coral stone buildings, traditional souks, and local heritage with a certified guide.", included: ["Certified Saudi Heritage Guide", "Entry to Historic Merchant Houses", "Traditional Arabic Coffee & Hijazi Snacks", "Private Hotel Pickup & Dropoff"], fullDesc: "Step back in time through the narrow alleys of 500-year-old Al-Balad in Jeddah. Discover architectural marvels made of Red Sea coral stone, visit historic merchant mansions like Nassif House, sip traditional Arabic coffee in heritage cafes, and visit local craft bazaars.", rating: 4.95, reviews: 88, price: 168, categories: ["jeddah", "all"], image: "https://images.unsplash.com/photo-1545389336-cf09069c4d0f?q=80&w=800&auto=format&fit=crop" },
  { id: 20, location: "Mecca", title: "Makkah: The Culinary Experience and Makkah's Identity", duration: "6 hours", shortDesc: "A VIP gastronomic journey tasting traditional Hijazi delicacies in a restored historic Makkah house with a master chef.", included: ["Full Multi-Course Authentic Hijazi Tasting Menu", "Private Host & Chef Storytelling Session", "Traditional Arabic Coffee, Zamzam & Herbal Infusions", "Luxury Private AC Transfers from Makkah Hotel"], fullDesc: "Immerse yourself in authentic Makkan hospitality and culinary history. Enjoy a multi-course dinner featuring traditional Hijazi dishes such as Saleeg, Makkah Kabsa, Mutabbaq, Sambusa, and artisanal desserts cooked with heirloom recipes, hosted inside an elegant historic courtyard residence.", rating: 4.9, reviews: 14, price: 295, categories: ["makkah", "all"], image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop" },
  { id: 21, location: "Mecca", title: "Makkah Al-Mukarramah: A Cultural and Historical Tour", duration: "4 hours", shortDesc: "Explore ancient Makkah landmarks including Bir Tuwa, Jabal Thawr, Makkah Heritage Alley, and Ottoman historical fortresses.", included: ["Air-Conditioned Hotel Pickup & Drop-Off", "Local Certified Tour Guide", "Bottled Water & Cold Drinks", "Historical Commentary & Photo Stops"], fullDesc: "Immerse yourself in Makkah’s rich heritage beyond the Haram. Visit Bir Tuwa (the sacred historic well where the Prophet ﷺ stayed and bathed before entering Makkah), view Jabal Thawr (the Cave of Thawr where Prophet Muhammad ﷺ and Abu Bakr As-Siddiq radiAllahu anhu hid during Migration), and walk through traditional heritage alleys.", rating: 4.92, reviews: 210, price: 85, categories: ["makkah", "all"], image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" },
  { id: 22, location: "Medina", title: "Horseback Riding Experience in Medinah, The Prophet's City", duration: "3 hours", shortDesc: "Ride purebred Arabian horses through scenic palm oases and desert trails near Mount Uhud in blessed Madinah.", included: ["Purebred Arabian Horse & Professional Riding Gear", "Certified Equestrian Instructor", "Traditional Arabic Coffee, Tea & Madinah Dates", "Roundtrip Hotel Transfer from Madinah Hotels"], fullDesc: "Connect with Madinah’s natural beauty and Islamic heritage on a peaceful horseback trail through historic date palm gardens near Mount Uhud. Suitable for beginners and experienced riders alike, guided by professional equestrian trainers.", rating: 4.95, reviews: 185, price: 111, categories: ["madinah", "all"], image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" },
  { id: 23, location: "Medina", title: "From Medinah: Half Day Guided Ziyarah Tour", duration: "4 hours", shortDesc: "Visit Masjid Quba, Mount Uhud Archers’ Hill, Masjid al-Qiblatayn, and Seven Mosques with an expert guide.", included: ["Spacious AC Coach / Minibus Transfer", "English Speaking Islamic Guide", "Hotel Pickup near Masjid an-Nabawi", "Chilled Bottled Water & Zamzam"], fullDesc: "Essential Ziyarah tour covering Madinah’s foundational Islamic landmarks: Masjid Quba (the first mosque built in Islam where 2 Rakat equals Umrah reward), Mount Uhud battlefield & Shuhada Uhud cemetery, Masjid al-Qiblatayn (Mosque of Two Qiblas), and the Battle of the Trench site.", rating: 4.89, reviews: 420, price: 51, categories: ["madinah", "all"], image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop" },
  { id: 24, location: "Mecca & Jeddah", title: "Mecca Historical & Religious Tour with Jeddah Al-Balad", duration: "8 hours", shortDesc: "Combine Makkah holy site visits with a scenic tour of Jeddah’s UNESCO Al-Balad Old Town and Red Sea Floating Mosque.", included: ["Private AC Vehicle with Driver Guide", "Makkah Ziyarat & Jeddah Al-Balad Walking Tour", "Entrance Tickets to Historic Al-Balad Houses", "Hotel Pickup in Makkah & Dropoff in Jeddah or Makkah"], fullDesc: "Experience two iconic Saudi cities in one seamless journey. Morning historical visits in Makkah followed by a coastal drive to Jeddah to explore 500-year-old coral stone houses in Al-Balad, the Jeddah Corniche, and Al-Rahmah Floating Mosque on the Red Sea.", rating: 4.94, reviews: 290, price: 163, categories: ["makkah", "jeddah", "all"], image: "https://images.unsplash.com/photo-1517191434949-5e6cd3a7e6ea?q=80&w=800&auto=format&fit=crop" },
  { id: 25, location: "Mecca", title: "Tickets to Museum Wahey Makkah (Hira Cultural District)", duration: "2.5 hours", shortDesc: "Skip-the-line entrance ticket to the Revelation Museum at the base of Jabal Al-Noor with 3D audio-visual exhibits.", included: ["Skip-the-Line Priority Museum Entry Ticket", "Multi-Language Audio Guide Headset", "Access to Hira Cultural District Exhibitions", "Observation Deck Access towards Cave Hira"], fullDesc: "Located at the foot of the Mountain of Light (Jabal Al-Noor), the Revelation Museum (Wahey Museum) inside Hira Cultural District offers state-of-the-art 3D digital projections, holograms, and interactive displays chronicling divine revelations from Prophet Adam (AS) to Prophet Muhammad ﷺ.", rating: 4.96, reviews: 510, price: 38, categories: ["makkah", "all"], image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" },
  { id: 26, location: "Mecca", title: "Jabal Al-Noor, Cave Hira, and Mount Arafat Tour", duration: "5 hours", shortDesc: "Guided exploration of Jabal Al-Noor, Mount Arafat (Jabal al-Rahmah), Muzdalifah, and Mina tent city.", included: ["Air-Conditioned Hotel Pickup & Drop-Off in Makkah", "Expert Islamic Historian Guide", "Bottled Zamzam Water & Snacks", "Photo Stops at Jabal Al-Noor Base & Arafat"], fullDesc: "Trace the steps of the Prophet ﷺ and millions of Hajj pilgrims. Visit Jabal Al-Noor (where the first verses of Surah Al-Alaq were revealed), Mount Arafat (Jabal al-Rahmah), Nimrah Mosque, Muzdalifah plain, and the legendary Mina tent city with comprehensive historic narration.", rating: 4.91, reviews: 380, price: 124, categories: ["makkah", "desert", "all"], image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop" },
  { id: 27, location: "Medina", title: "Full Day Badr Battlefield Tour with Lunch & Pickup", duration: "7 hours", shortDesc: "Travel from Madinah to the battlefield of Badr, visiting the Shuhada Badr Martyrs Memorial and enjoying traditional lunch.", included: ["Door-to-Door Private AC Vehicle Transfer from Madinah", "Licenced Tour Guide specialising in Seerah Battles", "Full Traditional Arabic Lunch Included", "Chilled Drinks, Tea & Dates throughout the journey"], fullDesc: "A deeply moving full-day pilgrimage to Badr (150 km southwest of Madinah), the site of the pivotal first battle in Islamic history (Ghazwat Badr). Visit the Martyrs Memorial of the 14 Shuhada of Badr, the site of Al-Arish Mosque, the red sand dunes, and enjoy a traditional Arabic lunch.", rating: 4.93, reviews: 195, price: 189, categories: ["madinah", "desert", "all"], image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop" },
  { id: 28, location: "Al Ula", title: "Al Ula & Hegra UNESCO Heritage Day Tour from Medinah", duration: "10 hours", shortDesc: "Excursion from Madinah to ancient Al Ula and Hegra (Madain Salih) Nabataean carved rock tombs.", included: ["Luxury AC Transport from Madinah to Al Ula", "Official Rawi (Heritage Guide) & Hegra Shuttle", "Entrance Tickets to Hegra & Dadan", "Gourmet Lunch at Al Ula Oasis Restaurant"], fullDesc: "Journey from Madinah into the breathtaking desert landscapes of Al Ula. Explore Hegra (Saudi Arabia’s first UNESCO World Heritage Site), Elephant Rock, and Al Ula Old Town with specialised archaeologists.", rating: 4.98, reviews: 220, price: 338, categories: ["desert", "all"], image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop" },
  { id: 29, location: "Taif", title: "Taif Mountain, Rose Factory & Cable Car Day Tour", duration: "8 hours", shortDesc: "Ascend the cool Sarawat mountains of Taif to visit historic rose distillery farms, Shubra Palace, and ride the Al-Hada Cable Car.", included: ["Private AC SUV Mountain Driving Transfer", "Taif Rose Factory Tour & Tasting", "Al-Hada Cable Car Ticket Included", "Traditional Taifi Lunch with Mountain View"], fullDesc: "Escape Makkah’s heat to the mountainous rose city of Taif. Visit a traditional organic Taif rose water distillery, view the historic Shubra Palace, feed baboons along Al-Hada mountain pass, and enjoy scenic cable car rides.", rating: 4.9, reviews: 165, price: 215, categories: ["desert", "all"], image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop" },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Activities (29)", value: "all" },
  { label: "Jeddah", value: "jeddah" },
  { label: "Makkah", value: "makkah" },
  { label: "Madinah", value: "madinah" },
  { label: "Desert & Day Trips", value: "desert" },
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
            Recommended Side Tours & Experiences
          </h2>
          <p className="text-base sm:text-lg leading-[1.6] text-muted-foreground">
            Showing {filteredTours.length} verified experiences in Saudi Arabia
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
                placeholder="Search tours (e.g. Kaaba cover, Prophet museum, Badr, Culinary)..."
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

                {/* Included Items - Slightly different layout for list view to use horizontal space */}
                <div className={`flex flex-wrap gap-1.5 mb-5 ${viewMode === "list" ? "sm:gap-2" : ""}`}>
                  {tour.included.slice(0, viewMode === "list" ? 4 : 3).map((item, idx) => (
                    <span key={idx} className="text-[11px] font-medium bg-muted text-foreground px-2 py-1 rounded-md border border-border">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Footer / Actions */}
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-2">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">From</span>
                    <span className="text-2xl font-bold text-foreground">£{tour.price}</span>
                  </div>
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
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
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
            <p className="text-muted-foreground">No tours found matching your search. Try a different keyword or filter.</p>
          </div>
        )}
      </div>

      {/* Render the Dialog */}
      <TourDetailsDialog tour={selectedTour} open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}