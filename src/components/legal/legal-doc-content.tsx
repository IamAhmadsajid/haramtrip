// src/components/legal/legal-doc-content.tsx
import { LegalDoc } from "@/data/legal-docs";

export function LegalDocContent({ doc }: { doc: LegalDoc }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium text-brand-secondary mb-8">{doc.lastUpdated}</p>

      <div className="space-y-4 text-muted-foreground leading-[1.8] mb-12">
        {doc.intro.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="space-y-10">
        {doc.sections.map((section) => (
          <section key={section.num}>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4">
              {section.num}. {section.heading}
            </h2>
            <div className="space-y-3">
              {section.body.map((block, i) =>
                block.type === "p" ? (
                  <p key={i} className="text-muted-foreground leading-[1.8]">
                    {block.text}
                  </p>
                ) : (
                  <ul key={i} className="space-y-2 pl-1">
                    {block.items!.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground leading-[1.7]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
