// src/components/tour-umrah/tour-custom-plan-dialog.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X, Send } from "lucide-react";
import { toast } from "sonner";

export function TourCustomPlanDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Request Sent!", { description: "Our London specialists will craft your personalised itinerary." });
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="p-0 max-w-[680px] max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-background">
        
        {/* Dynamic Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-background dark:bg-brand-primary text-foreground dark:text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-md border border-border">
              <Image src="/haramtrip-logo2.png" alt="Haram Trip Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold leading-none text-foreground dark:text-white">Haram <span className="text-brand-secondary">Trip</span></h3>
              <p className="text-[10px] text-muted-foreground dark:text-white/60 uppercase tracking-wider mt-1">Spiritual & Luxury Journeys</p>
            </div>
          </div>
          <DialogClose render={<button className="p-2 rounded-full hover:bg-muted dark:hover:bg-white/10 text-muted-foreground dark:text-white/70 hover:text-foreground dark:hover:text-white"><X className="h-5 w-5" /></button>} />
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-8">
          <h2 className="font-serif text-2xl font-bold text-foreground">Customise Your Sacred Plan</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-6">Tell us your travel preferences and our London specialists will craft a personalised itinerary.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Full Name *</label>
                <input type="text" required placeholder="e.g. Brother Ahmad" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Phone Number *</label>
                <input type="tel" required placeholder="e.g. +44 7123 456789" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Email Address</label>
              <input type="email" placeholder="name@example.com" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Packages *</label>
                <select className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10">
                  <option>Cheap Umrah Packages</option>
                  <option>5 Star Umrah Packages</option>
                  <option>Ramadan Umrah Packages</option>
                  <option>Tour Umrah Packages</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Target Travel Date *</label>
                <input type="date" required className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Number of People</label>
                <input type="number" defaultValue="1" min="1" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10" />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Hotel Preference</label>
                <select className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30 dark:border-white/10">
                  <option>5 Star Clock Tower (100m to Haram)</option>
                  <option>4 Star Premium Hotels</option>
                  <option>3 Star Budget Hotels</option>
                </select>
              </div>
            </div>



            <div>
              <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Special Requirements / Additional Notes</label>
              <textarea rows={3} placeholder="Enter any additional requests e.g. Wheelchair assistance, quiet room allocations, flight preference..." className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 resize-none dark:bg-input/30 dark:border-white/10"></textarea>
            </div>

            <button type="submit" disabled={loading} className="w-full h-12 bg-brand-secondary text-brand-primary rounded-xl font-bold text-sm shadow-md hover:bg-brand-secondary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
              {loading ? "Sending..." : (<><Send className="h-4 w-4" /> Submit Custom Plan Request</>)}
            </button>

            <p className="text-center text-xs text-muted-foreground">Your request is 100% confidential & verified with our UK travel desk.</p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}