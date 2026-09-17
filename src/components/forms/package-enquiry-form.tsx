// src/components/forms/package-enquiry-form.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Users, CalendarDays, Hotel, UserRound, Phone, Mail, ShieldCheck, Plane, Car, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { FORMSPREE_ENDPOINTS, submitToFormspree } from "@/lib/formspree";

interface PackageEnquiryFormProps {
  defaultPackageName?: string;
  defaultHotelType?: string;
  defaultDuration?: string;
}

const airports = [
  "London Heathrow", "London Gatwick", "Manchester", "London Stansted", 
  "London Luton", "Edinburgh", "Birmingham", "Glasgow", "Bristol", 
  "Humberside", "Liverpool", "Newcastle", "East Midlands", "Aberdeen", 
  "London City", "Leeds Bradford", "Cardiff", "Norwich"
];

const durations = ["3 Days", "4 Days", "5 Days", "7 Days", "10 Days", "12 Days", "14 Days", "16 Days", "14+ Days"];
const travelers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

export function PackageEnquiryForm({ 
  defaultPackageName = "", 
  defaultHotelType = "3 Star", 
  defaultDuration = "10 Days" 
}: PackageEnquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [transportation, setTransportation] = useState("Yes");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitToFormspree(FORMSPREE_ENDPOINTS.packageEnquiry, new FormData(e.currentTarget));
      router.push("/thank-you");
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-card/80 backdrop-blur-xl border border-brand-secondary/20 rounded-[24px] shadow-2xl overflow-hidden p-8 sm:p-10">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `linear-gradient(to right, rgba(238, 201, 113, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(238, 201, 113, 0.1) 1px, transparent 1px)`, backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)' }} />
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Book or Enquire Now</h2>
            <p className="text-sm text-muted-foreground mt-1">Fill in your details to get a customized quote for this package.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-green-500 font-bold bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
            <ShieldCheck className="h-4 w-4" /> 100% Secure & Private
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <input type="hidden" name="package" value={defaultPackageName} />

          {/* Passenger Name & Contact */}
          <FormField icon={UserRound} label="Passenger Name" name="passengerName" placeholder="Full Name" />
          <FormField icon={Phone} label="Contact Number" name="phone" placeholder="+44 7..." type="tel" />

          {/* Email */}
          <FormField icon={Mail} label="Email Address" name="email" placeholder="you@example.com" type="email" className="md:col-span-2" />

          {/* Departure Airport Dropdown */}
          <FormSelectField icon={Plane} label="Departure Airport" name="departureAirport" options={airports} defaultValue="London Heathrow" />

          {/* Departure Date */}
          <FormField icon={CalendarDays} label="Departure Date" name="departureDate" type="date" />

          {/* Duration Dropdown */}
          <FormSelectField icon={CalendarDays} label="Duration" name="duration" options={durations} defaultValue={defaultDuration} />

          {/* Hotel Type Dropdown */}
          <FormSelectField icon={Hotel} label="Hotel Type" name="hotelType" options={["3 Star", "4 Star", "5 Star"]} defaultValue={defaultHotelType} />

          {/* No. of Travelers Dropdown */}
          <FormSelectField icon={Users} label="No. of Travelers" name="numberOfTravelers" options={travelers} defaultValue="1" />

          {/* Transportation (Yes/No) */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Transportation</label>
            <input type="hidden" name="transportation" value={transportation} />
            <div className="grid grid-cols-2 gap-2">
              {["Yes", "No"].map((type) => (
                <button 
                  key={type} 
                  type="button" 
                  onClick={() => setTransportation(type)} 
                  className={cn(
                    "h-12 rounded-xl text-xs font-bold transition-all border-2 flex items-center justify-center gap-1.5", 
                    transportation === type ? "bg-brand-secondary text-brand-primary border-brand-secondary shadow-md" : "bg-transparent border-border text-muted-foreground hover:border-brand-secondary/50"
                  )}
                >
                  <Car className="h-4 w-4" /> {type}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading} 
            className="md:col-span-2 mt-4 w-full h-14 bg-gradient-to-r from-brand-secondary to-[#f2c62e] text-brand-primary rounded-xl font-extrabold text-lg shadow-lg hover:shadow-xl hover:shadow-brand-secondary/30 transition-all hover:-translate-y-0.5 relative overflow-hidden group disabled:opacity-50 disabled:hover:translate-y-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? "Sending..." : (<><Send className="h-5 w-5" /> Get My Custom Quote</>)}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
          </button>
        </form>
      </div>
    </div>
  );
}

// Reusable Input Field Component
function FormField({ icon: Icon, label, name, type = "text", placeholder, className }: { icon: React.ElementType; label: string; name: string; type?: string; placeholder?: string; className?: string; }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-muted-foreground group-focus-within:text-brand-secondary transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className="w-full h-12 pl-12 pr-4 bg-transparent border-2 border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10"
        />
      </div>
    </div>
  );
}

// Reusable Select Dropdown Component
function FormSelectField({ icon: Icon, label, name, options, defaultValue }: { icon: React.ElementType; label: string; name: string; options: string[]; defaultValue: string; }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-muted-foreground group-focus-within:text-brand-secondary transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        <select
          name={name}
          defaultValue={defaultValue}
          className="w-full h-12 pl-12 pr-10 bg-transparent border-2 border-border rounded-xl text-foreground outline-none transition-all focus:border-brand-secondary focus:ring-4 focus:ring-brand-secondary/10 appearance-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-muted-foreground">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}