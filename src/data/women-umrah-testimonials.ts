// src/data/women-umrah-testimonials.ts
export interface WomenUmrahTestimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  text: string;
  initial: string;
}

export const womenTestimonials: WomenUmrahTestimonial[] = [
  {
    id: "t1",
    name: "Samira K.",
    location: "London",
    role: "Verified Female Pilgrim",
    text: "As a young solo woman traveling to Saudi Arabia for the first time alone, I was terrified. Haram Trip made me feel like family before I even boarded the flight. Mutieba checked on me every single day via WhatsApp, arranged a hotel right in front of the ladies' gate in Madinah, and paired me with two lovely women for Tawaf. I never felt alone for a single second.",
    initial: "S"
  },
  {
    id: "t2",
    name: "Ayesha R.",
    location: "Manchester",
    role: "Traveller",
    text: "The 24/7 female support desk was a lifesaver. Knowing I had a female advisor to call at any time gave me immense peace of mind. The hotel was perfectly located near the women's entrance, making every trip to the Haram easy and safe. Highly recommend Haram Trip for any sister traveling alone.",
    initial: "A"
  },
  {
    id: "t3",
    name: "Fatima Z.",
    location: "Birmingham",
    role: "Group Leader",
    text: "I traveled with a group of 5 sisters, and everything was seamlessly organized. From the VIP transport to the women-led Ziyarat tours, we felt safe and cared for throughout our journey. The pre-departure video call was incredibly helpful for preparing our first-timers. Jazakallah Khair to the whole team!",
    initial: "F"
  }
];