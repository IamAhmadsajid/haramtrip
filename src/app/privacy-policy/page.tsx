// src/app/privacy-policy/page.tsx
import { PageHeader } from "@/components/page-header";
import { LegalDocContent } from "@/components/legal/legal-doc-content";
import { privacyPolicy } from "@/data/legal-docs";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        subtitle="How We Handle Your Information"
        description="What personal information we collect, why we use it, who we may share it with, and your data protection rights."
        image="/images/hero1.jpg"
      />
      <LegalDocContent doc={privacyPolicy} />
    </main>
  );
}
