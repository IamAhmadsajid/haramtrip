// src/app/rules-and-regulations/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { LegalDocContent } from "@/components/legal/legal-doc-content";
import { rulesAndRegulations } from "@/data/legal-docs";

export const metadata = getPageMetadata("/rules-and-regulations");

export default function RulesAndRegulationsPage() {
  return (
    <main>
      <PageHeader
        title="Rules and Regulations"
        subtitle="Website Terms of Use"
        description="General requirements for using the Haram Trip website and communicating with us."
        image="/images/hero1.jpg"
      />
      <LegalDocContent doc={rulesAndRegulations} />
    </main>
  );
}
