// src/app/(extra)/contact/page.tsx
"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { SITE_CONFIG } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/social-icons";
import { CtaSection } from "@/components/cta-section"; // <-- Import the reusable CTA
import Link from "next/link";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast.success("Message Sent!", {
        description: "Our team will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main>
      <PageHeader 
        title="Get in Touch" 
        subtitle="24/7 Customer Support"
        description="Have a question or ready to book? Reach out to us directly. We usually respond within 24 hours."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="bg-[#f8f5f0] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-273.75 px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            
            {/* LEFT COLUMN: Contact Details */}
            {/* ... (Your contact details code remains exactly the same) ... */}
            <div className="flex flex-col">
              <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-[#2d201d] sm:text-4xl">
                Talk To Us
              </h2>
              <h3 className="mt-2 text-lg font-bold text-brand-secondary">
                Get in Touch With Us
              </h3>
              <p className="mt-4 max-w-md text-base leading-[1.7] text-[#4f4a47]">
                At Haram Trip UK, we are committed to providing exceptional service and support. Contact us today for expert advice, tailored Umrah packages, and a seamless travel experience.
              </p>

              <div className="mt-8 space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary-2 text-brand-secondary shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8a8480]">Phone Number</p>
                    <a href={`tel:${SITE_CONFIG.phoneLink}`} className="text-base font-bold text-[#2d201d] hover:text-brand-secondary transition-colors">
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary-2 text-brand-secondary shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8a8480]">Email Address</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-base font-bold text-[#2d201d] hover:text-brand-secondary transition-colors break-all">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary-2 text-brand-secondary shadow-sm mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8a8480]">Office Address</p>
                    <p className="text-base font-bold text-[#2d201d]">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary-2 text-brand-secondary shadow-sm mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8a8480]">Working Hours</p>
                    <p className="text-base font-bold text-[#2d201d]">Monday - Saturday, 09:00 – 17:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[#e5e1dc]">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#2d201d] mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <Link href={SITE_CONFIG.socials.facebook} aria-label="Facebook" className="flex items-center justify-center h-11 w-11 rounded-full bg-white border border-[#e5e1dc] text-[#2d201d] hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm">
                    <FacebookIcon className="h-5 w-5" />
                  </Link>
                  <Link href={SITE_CONFIG.socials.instagram} aria-label="Instagram" className="flex items-center justify-center h-11 w-11 rounded-full bg-white border border-[#e5e1dc] text-[#2d201d] hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm">
                    <InstagramIcon className="h-5 w-5" />
                  </Link>
                  <Link href={SITE_CONFIG.socials.twitter} aria-label="Twitter" className="flex items-center justify-center h-11 w-11 rounded-full bg-white border border-[#e5e1dc] text-[#2d201d] hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm">
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            {/* ... (Your form code remains exactly the same) ... */}
            <div className="rounded-[22px] border border-[#e5e1dc] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] sm:p-8 lg:p-9 self-start">
              <h2 className="font-serif text-2xl font-bold tracking-[-0.02em] text-[#2d201d] sm:text-3xl">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-[#4f4a47]">
                Fill out the form below, and our dedicated travel desk will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4f4a47]">Full Name</label>
                  <input type="text" required placeholder="e.g. Tariq Mahmood" className="h-12 w-full rounded-lg border border-[#d9d5d0] bg-[#fcfbfa] px-4 text-sm text-[#2d201d] outline-none transition-all placeholder:text-[#aaa39d] focus:border-brand-secondary focus:bg-white focus:ring-2 focus:ring-brand-secondary/20" />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4f4a47]">Email Address</label>
                    <input type="email" required placeholder="you@example.com" className="h-12 w-full rounded-lg border border-[#d9d5d0] bg-[#fcfbfa] px-4 text-sm text-[#2d201d] outline-none transition-all placeholder:text-[#aaa39d] focus:border-brand-secondary focus:bg-white focus:ring-2 focus:ring-brand-secondary/20" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4f4a47]">Phone Number</label>
                    <input type="tel" required placeholder="+44 7123 456789" className="h-12 w-full rounded-lg border border-[#d9d5d0] bg-[#fcfbfa] px-4 text-sm text-[#2d201d] outline-none transition-all placeholder:text-[#aaa39d] focus:border-brand-secondary focus:bg-white focus:ring-2 focus:ring-brand-secondary/20" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4f4a47]">Subject</label>
                  <input type="text" required placeholder="How can we help you?" className="h-12 w-full rounded-lg border border-[#d9d5d0] bg-[#fcfbfa] px-4 text-sm text-[#2d201d] outline-none transition-all placeholder:text-[#aaa39d] focus:border-brand-secondary focus:bg-white focus:ring-2 focus:ring-brand-secondary/20" />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4f4a47]">Message</label>
                  <textarea required rows={4} placeholder="Write your message here..." className="w-full rounded-lg border border-[#d9d5d0] bg-[#fcfbfa] px-4 py-3 text-sm text-[#2d201d] outline-none transition-all placeholder:text-[#aaa39d] focus:border-brand-secondary focus:bg-white focus:ring-2 focus:ring-brand-secondary/20 resize-none" />
                </div>

                <button type="submit" disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#302b29] disabled:opacity-50 disabled:hover:translate-y-0">
                  <Send className="h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ---> ADD REUSABLE CTA SECTION HERE <--- */}
      <CtaSection 
        title="Still Have Questions?"
        description="If you couldn't find the answer you were looking for, our dedicated support team is just a click away. Reach out to us directly to plan your perfect journey."
      />

    </main>
  );
}