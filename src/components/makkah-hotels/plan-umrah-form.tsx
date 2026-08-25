// src/components/makkah-hotels/plan-umrah-form.tsx
"use client";

import { useState } from "react";
import { Send, Users, CalendarDays, Hotel, UserRound, Phone, Mail } from "lucide-react";
import { toast } from "sonner"; // Assuming you have sonner installed for notifications

export function PlanUmrahForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock submission delay
    setTimeout(() => {
      setLoading(false);
      toast.success("Request Sent!", {
        description: "Our travel desk will contact you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-card border border-border rounded-2xl shadow-xl p-6 sm:p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Let&rsquo;s Plan Your Umrah</h2>
        <p className="text-sm text-muted-foreground mt-1">Fill in your details and get a customized quote within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Departure Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1">
            <CalendarDays className="h-3 w-3" /> Departure Date
          </label>
          <input type="date" required className="booking-input" />
        </div>

        {/* No. of Travelers */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1">
            <Users className="h-3 w-3" /> No. of Travelers
          </label>
          <select required defaultValue="1" className="booking-input appearance-none">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5+">5+ People</option>
          </select>
        </div>

        {/* Hotel Type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1">
            <Hotel className="h-3 w-3" /> Hotel Type
          </label>
          <select required defaultValue="5star" className="booking-input appearance-none">
            <option value="5star">5 Star</option>
            <option value="4star">4 Star</option>
            <option value="3star">3 Star</option>
          </select>
        </div>

        {/* Passenger Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1">
            <UserRound className="h-3 w-3" /> Passenger Name
          </label>
          <input type="text" required placeholder="Full Name" className="booking-input" />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1">
            <Phone className="h-3 w-3" /> Contact Number
          </label>
          <input type="tel" required placeholder="Phone Number" className="booking-input" />
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1">
            <Mail className="h-3 w-3" /> Email Address
          </label>
          <input type="email" required placeholder="Email Address" className="booking-input" />
        </div>

        {/* Submit Button */}
        <div className="flex items-end md:col-span-4 lg:col-span-1">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full h-10 flex items-center justify-center gap-2 bg-brand-primary text-white rounded-lg text-xs font-bold hover:bg-brand-primary/90 transition-colors disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

      </form>
    </div>
  );
}