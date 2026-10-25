// src/app/terms-and-conditions/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { LegalDocContent } from "@/components/legal/legal-doc-content";
import { termsAndConditions } from "@/data/legal-docs";

export const metadata = getPageMetadata("/terms-and-conditions");

export default function TermsAndConditionsPage() {
  return (
    <main>
      <PageHeader
        title="Booking Terms and Conditions"
        subtitle="Please Read Before Booking"
        description="The terms that apply to travel services booked through Haram Trip."
        image="/images/hero1.jpg"
      />
      <LegalDocContent doc={termsAndConditions} />
    </main>
  );
}
