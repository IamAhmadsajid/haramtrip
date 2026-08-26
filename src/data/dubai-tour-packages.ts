// src/data/dubai-tour-packages.ts
export interface TourPackage {
  id: string;
  destination: "Dubai" | "Egypt" | "Turkey";
  title: string;
  type: string;
  duration: string;
  durationDays: number;
  price: number;
  image: string;
  makkahHotel: string;
  makkahNights: string;
  madinahHotel: string;
  madinahNights: string;
  tourHotel: string;
  tourNights: string;
  inclusions: string[];
  isHolidayDeal?: boolean;

  // New Detailed Fields for Side Panel
  airline: string;
  luggage: string;
  makkahStar: string;
  makkahRoomType: string;
  madinahStar: string;
  madinahRoomType: string;
  tourStar: string;
  tourRoomType: string;
  detailedInclusions: string[];
  review: {
    rating: number;
    text: string;
    author: string;
    date: string;
  };
}

export const dubaiTourPackages: TourPackage[] = [
  {
    id: "dub-1",
    destination: "Dubai",
    title: "Exclusive 9-Day Umrah & Dubai Combination Package",
    type: "Multi-Country Stopover",
    duration: "9 Days / 8 Nights",
    durationDays: 9,
    price: 965,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    makkahHotel: "Al Massa Bader Hotel",
    makkahNights: "3 Nights | Room Only",
    madinahHotel: "Al Aqeeq Al Rawda Hotel",
    madinahNights: "2 Nights | Room Only",
    tourHotel: "Holiday Inn Express Dubai Airport",
    tourNights: "3 Nights | Room Only",
    inclusions: [
      "Return International Flights Included",
      "Saudi ETA Visa & Dubai Visa Assistance Included",
      "All Ground Transport Included (Jeddah ➔ Makkah ➔ Madinah & Dubai Airport)",
    ],
    airline: "Saudi Airlines",
    luggage: "1) 23KG Checked Baggage + 07KG Carry on",
    makkahStar: "3 star",
    makkahRoomType: "1 Double Room",
    madinahStar: "3 star",
    madinahRoomType: "1 Double Room",
    tourStar: "3 star",
    tourRoomType: "1 Double Room",
    detailedInclusions: [
      "ETA Visa",
      "All Ground Transport",
      "Jeddah Airport ➡️ Makkah Hotel",
      "Makkah Hotel ➡️ Madinah Hotel",
      "Madinah Hotel ➡️ Madinah Airport",
      "Dubai: Holiday Inn Express Dubai Airport (3 Nights)",
    ],
    review: {
      rating: 5.0,
      text: "Alisha made sure we got the best deal and helped us stay within our budget. Everything went smoothly from start to finish.",
      author: "Nadu",
      date: "Verified Pilgrim • 2 weeks ago",
    },
  },
  // I will add the rest of the packages with placeholder detailed data to keep the file short,
  // you can fill in the exact details later.
  {
    id: "dub-2",
    destination: "Dubai",
    title: "10-Day Umrah & Dubai Downtown City Experience",
    type: "Multi-Country Stopover",
    duration: "10 Days / 9 Nights",
    durationDays: 10,
    price: 1150,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
    makkahHotel: "Voco Makkah by IHG",
    makkahNights: "4 Nights | Room Only",
    madinahHotel: "ODST Al Madina",
    madinahNights: "2 Nights | Room Only",
    tourHotel: "Rove Downtown Dubai",
    tourNights: "3 Nights | Views of Burj Khalifa",
    inclusions: [
      "Return Flights with Emirates / Saudia Airlines",
      "Full Ground Transfers in Jeddah, Makkah, Madinah & Dubai",
    ],
    airline: "Emirates",
    luggage: "30KG Checked Baggage",
    makkahStar: "4 star",
    makkahRoomType: "Double Room",
    madinahStar: "3 star",
    madinahRoomType: "Double Room",
    tourStar: "4 star",
    tourRoomType: "Double Room",
    detailedInclusions: ["Visa", "Transfers"],
    review: {
      rating: 5.0,
      text: "Great downtown location.",
      author: "Sarah",
      date: "Verified Pilgrim",
    },
  },
  {
    id: "dub-3",
    destination: "Dubai",
    title: "10-Day Family Umrah & Dubai Desert Safari Tour",
    type: "Family Friendly",
    duration: "10 Days / 9 Nights",
    durationDays: 10,
    price: 1295,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    makkahHotel: "Tilal Jabal Alkabah",
    makkahNights: "4 Nights | Quad Family Room",
    madinahHotel: "Al Ansar Golden Tulip",
    madinahNights: "2 Nights | Quad Family Room",
    tourHotel: "Millennium Place Marina Dubai",
    tourNights: "3 Nights | Family Suite",
    inclusions: [
      "Return Flights for the Whole Family Included",
      "Complimentary 4x4 Desert Safari & BBQ Dinner in Dubai",
    ],
    airline: "British Airways",
    luggage: "23KG Checked Baggage",
    makkahStar: "4 star",
    makkahRoomType: "Quad Room",
    madinahStar: "4 star",
    madinahRoomType: "Quad Room",
    tourStar: "4 star",
    tourRoomType: "Family Suite",
    detailedInclusions: ["Visa", "Transfers", "Desert Safari"],
    review: {
      rating: 5.0,
      text: "Kids loved the safari!",
      author: "Ahmed",
      date: "Verified Pilgrim",
    },
  },
  {
    id: "dub-4",
    destination: "Dubai",
    title: "14-Night Grand Family Umrah & Dubai Miracle Garden",
    type: "Family Friendly",
    duration: "15 Days / 14 Nights",
    durationDays: 15,
    price: 1599,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    makkahHotel: "Al Ebaa Hotel",
    makkahNights: "6 Nights | Family Suite",
    madinahHotel: "Dyafat Al Mokhtara",
    madinahNights: "4 Nights | Family Suite",
    tourHotel: "Swissôtel Al Ghurair Dubai",
    tourNights: "4 Nights | Family Suite",
    inclusions: [
      "Emirates Return Flights",
      "Free Entry Tickets to Dubai Miracle Garden & Global Village",
    ],
    airline: "Emirates",
    luggage: "30KG Checked Baggage",
    makkahStar: "4 star",
    makkahRoomType: "Family Suite",
    madinahStar: "4 star",
    madinahRoomType: "Family Suite",
    tourStar: "5 star",
    tourRoomType: "Family Suite",
    detailedInclusions: ["Visa", "Transfers", "Tickets"],
    review: {
      rating: 5.0,
      text: "Beautiful gardens.",
      author: "Fatima",
      date: "Verified Pilgrim",
    },
  },
  {
    id: "dub-5",
    destination: "Dubai",
    title: "12-Day 5-Star Luxury Umrah & Dubai Atlantis Stopover",
    type: "Multi-Country Stopover",
    duration: "12 Days / 11 Nights",
    durationDays: 12,
    price: 1699,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    makkahHotel: "Anjum Hotel Makkah",
    makkahNights: "4 Nights | Daily Breakfast",
    madinahHotel: "Shaza Regency Plaza",
    madinahNights: "3 Nights | Daily Breakfast",
    tourHotel: "Atlantis The Palm Dubai",
    tourNights: "4 Nights | Daily Breakfast",
    inclusions: [
      "Emirates Airlines Return Flights",
      "Complimentary Aquaventure Waterpark Access at Atlantis",
    ],
    airline: "Emirates",
    luggage: "30KG Checked Baggage",
    makkahStar: "5 star",
    makkahRoomType: "Deluxe Room",
    madinahStar: "5 star",
    madinahRoomType: "Deluxe Room",
    tourStar: "5 star",
    tourRoomType: "Deluxe Room",
    detailedInclusions: ["Visa", "Private Transfers", "Ziyarat"],
    review: {
      rating: 5.0,
      text: "Luxury at its best.",
      author: "Zaid",
      date: "Verified Pilgrim",
    },
  },
  {
    id: "dub-6",
    destination: "Dubai",
    title: "5-Star Family Umrah & Dubai Palm Jumeirah Experience",
    type: "Family Friendly",
    duration: "12 Days / 11 Nights",
    durationDays: 12,
    price: 1850,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    isHolidayDeal: true,
    makkahHotel: "Swissôtel Makkah Clock Tower",
    makkahNights: "5 Nights | Breakfast",
    madinahHotel: "Pullman Zamzam Madinah",
    madinahNights: "3 Nights | Breakfast",
    tourHotel: "Sofitel Dubai The Palm",
    tourNights: "3 Nights | Breakfast",
    inclusions: [
      "International Flights with Emirates / British Airways",
      "Kaaba View Rooms in Makkah Clock Tower",
    ],
    airline: "Emirates",
    luggage: "30KG Checked Baggage",
    makkahStar: "5 star",
    makkahRoomType: "Family Room",
    madinahStar: "5 star",
    madinahRoomType: "Family Room",
    tourStar: "5 star",
    tourRoomType: "Family Room",
    detailedInclusions: ["Visa", "VIP Transfers", "Ziyarat"],
    review: {
      rating: 5.0,
      text: "Kaaba view was amazing.",
      author: "Khadija",
      date: "Verified Pilgrim",
    },
  },
];
