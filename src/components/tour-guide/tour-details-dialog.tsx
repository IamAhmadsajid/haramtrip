// src/components/tour-guide/tour-details-dialog.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Star, MapPin, Check, MessageCircle, Phone, ShieldCheck, UserRound, Mail, CalendarDays, UsersRound, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

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
  categories: string[];
  image: string;
}

interface TourDetailsDialogProps {
  tour: Tour | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TourDetailsDialog({ tour, open, onOpenChange }: TourDetailsDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onOpenChange(false);
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open, onOpenChange]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Tour Enquiry: ${tour?.title}*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Date:* ${date}\n*Guests:* ${guests}\n*Notes:* ${notes}`;
    window.open(`${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputClasses = "w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10";

  return (
    <AnimatePresence>
      {open && tour && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onOpenChange(false);
          }}
        >
          <motion.div
            className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="overflow-y-auto">
              <div className="relative h-48 sm:h-64 w-full">
                <Image src={tour.image} alt={tour.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-sm mb-2 text-white/90">
                    <MapPin className="w-4 h-4" /> {tour.location}
                  </div>
                  <h2 className="font-serif text-2xl font-bold leading-tight pr-8">{tour.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-secondary" /> {tour.duration}</span>
                    <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> {tour.rating} <span className="text-muted-foreground">({tour.reviews} reviews)</span></span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">Tour Price</span>
                    <span className="text-2xl font-bold text-foreground">£{tour.price}<span className="text-sm font-medium text-muted-foreground"> / person</span></span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-8">
                  {tour.shortDesc}
                </p>

                {/* What's Included in This Experience */}
                <div className="mb-8">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4">What's Included in This Experience</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-brand-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-secondary" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Description */}
                <div className="mb-8 pt-6 border-t border-border">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">Full Description</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {tour.fullDesc}
                  </p>
                </div>

                {/* Form Section */}
                <div className="pt-6 border-t border-border">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    Request Tour Details & Forward to WhatsApp Desk
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Enter your contact details below to generate your official enquiry ticket.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                          <UserRound className="h-3.5 w-3.5 text-brand-secondary" /> Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Mohammed Ahmed" className={inputClasses} />
                      </div>
                      <div>
                        <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                          <Mail className="h-3.5 w-3.5 text-brand-secondary" /> Email Address <span className="text-red-500">*</span>
                        </label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. mohammed@example.com" className={inputClasses} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                          <Phone className="h-3.5 w-3.5 text-brand-secondary" /> WhatsApp / Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +44 7123 456789" className={inputClasses} />
                      </div>
                      <div>
                        <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                          <CalendarDays className="h-3.5 w-3.5 text-brand-secondary" /> Preferred Travel Date
                        </label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClasses} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                          <UsersRound className="h-3.5 w-3.5 text-brand-secondary" /> Number of Guests / Pilgrims
                        </label>
                        <input type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} className={inputClasses} />
                      </div>
                      <div>
                        <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                          <MessageCircle className="h-3.5 w-3.5 text-brand-secondary" /> Hotel Name or Special Requests
                        </label>
                        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. Makkah Clock Tower, morning pickup" className={inputClasses} />
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-green-500 text-white text-sm font-bold shadow-md hover:bg-green-600 transition-all">
                        <Send className="w-4 h-4" /> Forward Details to WhatsApp
                      </button>
                      <Link 
                        href={`tel:${SITE_CONFIG.phoneLink}`} 
                        className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-transparent border border-border text-foreground text-sm font-bold hover:bg-muted transition-all"
                      >
                        <Phone className="w-4 h-4" /> Speak with Advisor
                      </Link>
                    </div>
                  </form>

                  <div className="mt-6 flex items-center justify-center gap-1.5 pt-4 border-t border-border">
                    <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
                    <p className="text-center text-[10px] text-muted-foreground">
                      Direct Haram Trip UK Travel Desk Assistance • 24/7 Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}