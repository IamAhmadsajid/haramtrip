import { Phone } from "lucide-react";

export function CallFloat() {
  return (
    <a
      href="tel:02035040401"
      aria-label="Call Haram Trip at 02035040401"
      className="fixed bottom-[158px] left-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-brand-secondary text-brand-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl sm:bottom-[158px] max-sm:bottom-[146px] max-sm:left-5"
    >
      <Phone className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}