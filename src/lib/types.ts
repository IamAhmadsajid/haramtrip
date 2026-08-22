export interface Package {
  id: string;
  title: string;
  category: "Umrah" | "Hajj" | "Visa";
  duration: string;
  price: number;
  description: string;
  image: string;
  itinerary: string[];
}