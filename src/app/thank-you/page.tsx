// src/app/thank-you/page.tsx
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function ThankYouPage() {
  return (
    <main>
      <PageHeader
        title="Thank You"
        subtitle="Booking Confirmation"
        description="Your request has been received — we'll be in touch shortly."
        image="/images/hero1.jpg"
      />

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-16 sm:px-6 sm:py-20">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-lg sm:p-10 dark:bg-white/5">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
            <Check className="h-8 w-8 text-white" strokeWidth={3} />
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground">Thank You!</h2>

          <p className="mt-4 text-sm leading-[1.8] text-muted-foreground">
            JazakAllah for choosing Haram Trip. Your booking request has been received
            successfully. Our travel specialists will review your details and contact you
            shortly to confirm your Umrah package, travel arrangements, and next steps.
            Please keep an eye on your email and phone for further updates.
          </p>
        </div>
      </div>
    </main>
  );
}
