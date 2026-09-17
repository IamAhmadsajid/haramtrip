// src/app/(extra)/contact/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { SITE_CONFIG } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { FacebookIcon, InstagramIcon, PinterestIcon, YouTubeIcon, TikTokIcon } from "@/components/social-icons";
import Link from "next/link";
import { toast } from "sonner";
import { FORMSPREE_ENDPOINTS, submitToFormspree } from "@/lib/formspree";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitToFormspree(FORMSPREE_ENDPOINTS.contact, new FormData(e.currentTarget));
      router.push("/thank-you");
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly by phone.",
      });
      setLoading(false);
    }
  };

  return (
    <main>
      <PageHeader 
        title="Get in Touch" 
        subtitle="24/7 Customer Support"
        description="Have a question or ready to book? Reach out to us directly. We usually respond within 24 hours."
        image="/images/hero1.jpg"
      />

      <section className="bg-muted/30 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="flex flex-col">
              <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
                Talk To Us
              </h2>
              <h3 className="mt-2 text-lg font-bold text-brand-secondary">
                Get in Touch With Us
              </h3>
              <p className="mt-4 max-w-md text-base leading-[1.7] text-muted-foreground">
                At Haram Trip UK, we are committed to providing exceptional service and support. Contact us today for expert advice, tailored Umrah packages, and a seamless travel experience.
              </p>

              <div className="mt-8 space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-secondary text-brand-secondary shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</p>
                    <a href={`tel:${SITE_CONFIG.phoneLink}`} className="text-base font-bold text-foreground hover:text-brand-secondary transition-colors">
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-secondary text-brand-secondary shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-base font-bold text-foreground hover:text-brand-secondary transition-colors break-all">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Address 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-secondary text-brand-secondary shadow-sm mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Office Address</p>
                    <p className="text-base font-bold text-foreground">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                {/* Address 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-secondary text-brand-secondary shadow-sm mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Office Address</p>
                    <p className="text-base font-bold text-foreground">{SITE_CONFIG.address2}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-secondary text-brand-secondary shadow-sm mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Working Hours</p>
                    <p className="text-base font-bold text-foreground">Monday - Saturday, 09:00 – 17:00</p>
                  </div>
                </div>
              </div>

              {/* Social Links - Matches Footer Exactly */}
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <Link href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center h-11 w-11 rounded-full bg-background border border-border text-foreground hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white">
                    <InstagramIcon className="h-5 w-5" />
                  </Link>
                  <Link href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center h-11 w-11 rounded-full bg-background border border-border text-foreground hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white">
                    <FacebookIcon className="h-5 w-5" />
                  </Link>
                  <Link href={SITE_CONFIG.socials.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="flex items-center justify-center h-11 w-11 rounded-full bg-background border border-border text-foreground hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white">
                    <PinterestIcon className="h-5 w-5" />
                  </Link>
                  <Link href={SITE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center h-11 w-11 rounded-full bg-background border border-border text-foreground hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white">
                    <YouTubeIcon className="h-5 w-5" />
                  </Link>
                  <Link href={SITE_CONFIG.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center justify-center h-11 w-11 rounded-full bg-background border border-border text-foreground hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white">
                    <TikTokIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="rounded-[22px] border border-border bg-card p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] sm:p-8 lg:p-9 self-start">
              <h2 className="font-serif text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below, and our dedicated travel desk will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input type="text" name="fullName" required placeholder="e.g. Tariq Mahmood" className="h-12 w-full rounded-lg border border-border bg-background text-foreground px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30" />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <input type="email" name="email" required placeholder="you@example.com" className="h-12 w-full rounded-lg border border-border bg-background text-foreground px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <input type="tel" name="phone" required placeholder="+44 7123 456789" className="h-12 w-full rounded-lg border border-border bg-background text-foreground px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                  <input type="text" name="subject" required placeholder="How can we help you?" className="h-12 w-full rounded-lg border border-border bg-background text-foreground px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 dark:bg-input/30" />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea name="message" required rows={4} placeholder="Write your message here..." className="w-full rounded-lg border border-border bg-background text-foreground px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 resize-none dark:bg-input/30" />
                </div>

                <button type="submit" disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary dark:bg-brand-secondary text-sm font-bold text-white dark:text-brand-primary shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#302b29] dark:hover:bg-brand-secondary/90 disabled:opacity-50 disabled:hover:translate-y-0">
                  <Send className="h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>



    </main>
  );
}