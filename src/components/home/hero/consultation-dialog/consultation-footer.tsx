// ============================================================
// File: src/components/consultation-dialog/consultation-footer.tsx
// Purpose:
// Bottom reassurance/footer area of the consultation popup.
// ============================================================

"use client";

import { ShieldCheck } from "lucide-react";

export function ConsultationFooter() {
  return (
    <div className="shrink-0 border-t border-border bg-background px-5 py-3.5 sm:px-7">
      <div className="flex items-center justify-center gap-2 text-center">
        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500" />

        <p className="text-[8px] leading-3 text-muted-foreground sm:text-[9px]">
          Free 1-on-1 consultation with zero obligation. Official UK Licensed Agency.
        </p>
      </div>
    </div>
  );
}