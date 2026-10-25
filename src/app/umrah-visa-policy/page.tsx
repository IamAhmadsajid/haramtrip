// src/app/umrah-visa-policy/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { LegalDocContent } from "@/components/legal/legal-doc-content";
import { umrahVisaPolicy } from "@/data/legal-docs";

export const metadata = getPageMetadata("/umrah-visa-policy");

export default function UmrahVisaPolicyPage() {
  return (
    <main>
      <PageHeader
        title="Umrah Visa and Saudi Entry Assistance Policy"
        subtitle="Visa & Entry Guidance"
        description="What assistance Haram Trip may provide in relation to Saudi entry requirements for Umrah travellers."
        image="/images/hero1.jpg"
      />
      <LegalDocContent doc={umrahVisaPolicy} />
    </main>
  );
}
