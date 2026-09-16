// src/components/makkah-hotels/plan-umrah-form.tsx
"use client";

import { useState } from "react";
import { Send, Users, CalendarDays, Hotel, UserRound, Phone, Mail, ShieldCheck, Plane, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const DEPARTURE_AIRPORTS = [
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

export function PlanUmrahForm() {
  const [loading, setLoading] = useState(false);
  const [hotelType, setHotelType] = useState("5 Star");
  const [travelers, setTravelers] = useState("2 People");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast.success("Request Sent!", {
        description: "Our travel desk will contact you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-card/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-brand-secondary/20 rounded-[20px] shadow-2xl overflow-hidden p-6 sm:p-8">
      
      {/* Futuristic Tech Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-30 dark:opacity-20" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(238, 201, 113, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(238, 201, 113, 0.1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
        }} 
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground">Plan Your Umrah</h2>
            <p className="text-xs text-muted-foreground mt-1">Fill in your details and get a customized quote within 24 hours.</p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-green-500 font-bold bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
            <ShieldCheck className="h-4 w-4" /> 100% Secure & Private
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          
          {/* Name Input */}
          <FormField icon={UserRound} label="Full Name" placeholder="e.g. Tariq Ahmed" />
          
          {/* Phone Input */}
          <FormField icon={Phone} label="Contact Number" placeholder="+44 7..." type="tel" />

          {/* Email Input */}
          <FormField icon={Mail} label="Email Address" placeholder="you@example.com" type="email" className="md:col-span-2" />

          {/* Departure Airport */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Departure Airport</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-muted-foreground group-focus-within:text-brand-secondary transition-colors">
                <Plane className="h-5 w-5" />
              </div>
              <select
                required
                defaultValue={DEPARTURE_AIRPORTS[0]}
                className="w-full h-11 pl-12 pr-10 bg-transparent border-2 border-border rounded-xl text-foreground outline-none transition-all appearance-none focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10 dark:bg-input/30"
              >
                {DEPARTURE_AIRPORTS.map((airport) => (
                  <option key={airport} value={airport}>
                    {airport}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-muted-foreground">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Date Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Departure Date</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-muted-foreground group-focus-within:text-brand-secondary transition-colors">
                <CalendarDays className="h-5 w-5" />
              </div>
              <input
                type="date"
                required
                className="w-full h-11 pl-12 pr-4 bg-transparent border-2 border-border rounded-xl text-foreground outline-none transition-all focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10 dark:bg-input/30"
              />
            </div>
          </div>

          {/* Hotel Type Segmented Control */}
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hotel Type</label>
            <div className="grid grid-cols-3 gap-2">
              {["3 Star", "4 Star", "5 Star"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setHotelType(type)}
                  className={cn(
                    "h-11 rounded-xl text-xs font-bold transition-all border-2",
                    hotelType === type 
                      ? "bg-brand-secondary text-brand-primary border-brand-secondary shadow-md" 
                      : "bg-transparent border-border text-muted-foreground hover:border-brand-secondary/50"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Travelers Segmented Control */}
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Number of Travelers</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["1 Person", "2 People", "3 People", "4+ People"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTravelers(type)}
                  className={cn(
                    "h-11 rounded-xl text-xs font-bold transition-all border-2 flex items-center justify-center gap-1.5",
                    travelers === type 
                      ? "bg-brand-primary text-white border-brand-primary shadow-md" 
                      : "bg-transparent border-border text-muted-foreground hover:border-brand-primary/50"
                  )}
                >
                  <Users className="h-4 w-4" /> {type}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="md:col-span-2 mt-2 w-full h-12 bg-gradient-to-r from-brand-secondary to-[#f2c62e] text-brand-primary rounded-xl font-extrabold text-base shadow-lg hover:shadow-xl hover:shadow-brand-secondary/30 transition-all hover:-translate-y-0.5 relative overflow-hidden group disabled:opacity-50 disabled:hover:translate-y-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-5 w-5" /> Get My Custom Quote
                </>
              )}
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-white/20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
          </button>

        </form>
      </div>
    </div>
  );
}

// Reusable Input Field Component with Floating Icon
function FormField({ 
  icon: Icon, 
  label, 
  type = "text", 
  placeholder, 
  className 
}: {
  icon: React.ElementType;
  label: string;
  type?: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-muted-foreground group-focus-within:text-brand-secondary transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        <input 
          type={type} 
          required 
          placeholder={placeholder} 
          className="w-full h-11 pl-12 pr-4 bg-transparent border-2 border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10 dark:bg-input/30" 
        />
      </div>
    </div>
  );
}