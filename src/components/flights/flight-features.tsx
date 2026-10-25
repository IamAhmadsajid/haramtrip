// src/components/flights/flight-features.tsx
import { BadgeCheck, Wallet, Headset } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BadgeCheck,
    title: "ATOL Protected Flights",
    desc: <>Book with confidence knowing all your <Link className="text-[#F0CE7F]" href="/umrah-packages/">flight-inclusive packages</Link> are ATOL protected.</>
  },
  {
    icon: Wallet,
    title: "Low Deposit & Flexible Payments",
    desc: "Secure your Umrah flight tickets today with a small deposit and pay the balance later."
  },
  {
    icon: Headset,
    title: "24/7 UK Flight Desk Support",
    desc: "Our team handles flight changes, date extensions, and seat upgrades seamlessly."
  }
];

export function FlightFeatures() {
  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-brand-secondary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}