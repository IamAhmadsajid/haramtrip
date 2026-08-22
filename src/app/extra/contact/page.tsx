import { Mail, Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
      <p className="text-muted-foreground mb-8">
        Have a question or ready to book? Reach out to us directly. We usually respond within 24 hours.
      </p>
      
      <div className="grid gap-6 sm:grid-cols-2">
        <a 
          href={SITE_CONFIG.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 rounded-xl ring-1 ring-foreground/10 hover:ring-brand-secondary transition-all"
        >
          <div className="p-3 rounded-full bg-brand-secondary-2 dark:bg-secondary">
            <MessageCircle className="h-6 w-6 text-brand-primary dark:text-brand-secondary" />
          </div>
          <div>
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Fastest response</p>
          </div>
        </a>

        <a 
          href={`mailto:${SITE_CONFIG.email}`}
          className="flex items-center gap-4 p-6 rounded-xl ring-1 ring-foreground/10 hover:ring-brand-secondary transition-all"
        >
          <div className="p-3 rounded-full bg-brand-secondary-2 dark:bg-secondary">
            <Mail className="h-6 w-6 text-brand-primary dark:text-brand-secondary" />
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground">{SITE_CONFIG.email}</p>
          </div>
        </a>
      </div>
    </main>
  );
}