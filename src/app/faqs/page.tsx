// src/app/faqs/page.tsx
import { getPageMetadata } from "@/lib/page-metadata";
import { PageHeader } from "@/components/page-header";
import { FaqContent } from "@/components/about/faq-content";

export const metadata = getPageMetadata("/faqs");

export default function FaqsPage() {
  return (
    <main>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to Your Umrah Questions"
        description="Find answers to common questions about bookings, visas, hotels, flights, and special pilgrim care. Can't find what you're looking for? Get in touch with our team."
        image="/images/hero1.jpg"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <FaqContent />
      </div>
    </main>
  );
}
