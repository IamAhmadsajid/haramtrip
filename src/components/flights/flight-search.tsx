// src/components/flights/flight-search.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plane, CalendarDays, UsersRound, Search, ArrowLeftRight } from "lucide-react";
import { toast } from "sonner";
import { SITE_CONFIG } from "@/lib/site-config";
import { FORMSPREE_ENDPOINTS, submitToFormspree } from "@/lib/formspree";

const UK_DEPARTURE_AIRPORTS = [
  "London Heathrow",
  "London Gatwick",
  "Manchester",
  "London Stansted",
  "London Luton",
  "Edinburgh",
  "Birmingham",
  "Glasgow",
  "Bristol",
  "Humberside",
  "Liverpool",
  "Newcastle",
  "East Midlands",
  "Aberdeen",
  "London City",
  "Leeds Bradford",
  "Cardiff",
  "Norwich",
];

const SAUDI_ARRIVAL_CITIES = [
  "Jeddah",
  "Madinah",
  "Riyadh",
  "Dammam",
  "Taif",
  "Abha",
  "Yanbu",
  "Tabuk",
  "Qassim",
  "Hail",
  "Jazan",
  "Najran",
];

export function FlightSearch() {
  const [tripType, setTripType] = useState("round-trip");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("tripType", tripType);

    try {
      await submitToFormspree(FORMSPREE_ENDPOINTS.searchFlights, formData);
      router.push("/thank-you");
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
      setLoading(false);
    }
  };

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Search Card Container */}
        <div className="relative rounded-3xl border border-border bg-card shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-6 sm:p-8">
          
          {/* Trip Type Toggles */}
          <div className="flex items-center gap-2 mb-6">
            <button 
              onClick={() => setTripType("round-trip")}
              className={`h-10 px-4 rounded-full text-xs font-bold transition-all ${tripType === "round-trip" ? "bg-foreground text-background" : "bg-muted text-foreground hover:bg-muted/70"}`}
            >
              Round Trip
            </button>
            <button 
              onClick={() => setTripType("one-way")}
              className={`h-10 px-4 rounded-full text-xs font-bold transition-all ${tripType === "one-way" ? "bg-foreground text-background" : "bg-muted text-foreground hover:bg-muted/70"}`}
            >
              One Way
            </button>
            <button 
              onClick={() => setTripType("multi-city")}
              className={`h-10 px-4 rounded-full text-xs font-bold transition-all ${tripType === "multi-city" ? "bg-foreground text-background" : "bg-muted text-foreground hover:bg-muted/70"}`}
            >
              Multi-City
            </button>
          </div>

          {/* Input Fields Grid */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">

            {/* From */}
            <div>
              <label className="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                <Plane className="h-3.5 w-3.5 text-brand-secondary" /> From
              </label>
              <select
                name="fromAirport"
                required
                defaultValue={UK_DEPARTURE_AIRPORTS[0]}
                className="w-full h-12 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all appearance-none cursor-pointer"
              >
                {UK_DEPARTURE_AIRPORTS.map((airport) => (
                  <option key={airport} value={airport}>
                    {airport}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button (Visual only) */}
            <div className="hidden lg:flex justify-center -mt-6">
               <div className="w-10 h-10 rounded-full border border-border bg-muted flex items-center justify-center text-foreground">
                 <ArrowLeftRight className="h-4 w-4" />
               </div>
            </div>

            {/* To */}
            <div>
              <label className="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                <Plane className="h-3.5 w-3.5 text-brand-secondary rotate-90" /> To
              </label>
              <select
                name="toCity"
                required
                defaultValue={SAUDI_ARRIVAL_CITIES[0]}
                className="w-full h-12 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all appearance-none cursor-pointer"
              >
                {SAUDI_ARRIVAL_CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Passengers */}
            <div>
              <label className="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                <UsersRound className="h-3.5 w-3.5 text-brand-secondary" /> Passengers & Class
              </label>
              <select
                name="passengersAndClass"
                defaultValue="1 Adult, Economy"
                className="w-full h-12 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all appearance-none cursor-pointer"
              >
                <option>1 Adult, Economy</option>
                <option>2 Adults, Economy</option>
                <option>4 Adults, Economy</option>
                <option>1 Adult, Business</option>
              </select>
            </div>

            {/* Departure Date */}
            <div>
              <label className="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5 text-brand-secondary" /> Departure
              </label>
              <input
                type="date"
                name="departureDate"
                required
                min={getTodayDate()}
                className="w-full h-12 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all"
              />
            </div>

            {/* Return Date (Conditional) */}
            {tripType === "round-trip" && (
              <div>
                <label className="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5 text-brand-secondary" /> Return
                </label>
                <input
                  type="date"
                  name="returnDate"
                  required
                  min={getTodayDate()}
                  className="w-full h-12 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all"
                />
              </div>
            )}

            {/* Search Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 px-6 rounded-xl bg-foreground text-background text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-secondary hover:text-brand-primary flex items-center justify-center gap-2 col-span-1 lg:col-span-2 mt-2 lg:mt-0 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              <Search className="w-4 h-4" /> {loading ? "Sending..." : "Search Flights"}
            </button>

          </form>

          {/* WhatsApp Note */}
          <p className="text-center mt-6 text-xs text-muted-foreground">
            Need group booking quotes? <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand-secondary font-bold hover:underline">Chat with our flight desk on WhatsApp</a> for instant assistance.
          </p>
        </div>
      </div>
    </section>
  );
}

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}