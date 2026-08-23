// ============================================================
// File: src/components/consultation-dialog/consultation-tabs.tsx
// Purpose:
// Tab navigation for the four consultation methods:
// 1. WhatsApp
// 2. Audio Call
// 3. Video Call
// 4. Book Call
// ============================================================

"use client";

import {
  CalendarDays,
  MessageCircle,
  Phone,
  Video,
} from "lucide-react";

export type ConsultationTab =
  | "whatsapp"
  | "audio"
  | "video"
  | "booking";

interface ConsultationTabsProps {
  activeTab: ConsultationTab;
  onTabChange: (tab: ConsultationTab) => void;
}

const tabs = [
  {
    id: "whatsapp" as const,
    number: "1.",
    label: "WhatsApp",
    icon: MessageCircle,
  },
  {
    id: "audio" as const,
    number: "2.",
    label: "Audio Call",
    icon: Phone,
  },
  {
    id: "video" as const,
    number: "3.",
    label: "Video Call",
    icon: Video,
  },
  {
    id: "booking" as const,
    number: "4.",
    label: "Book Call",
    icon: CalendarDays,
  },
];

export function ConsultationTabs({
  activeTab,
  onTabChange,
}: ConsultationTabsProps) {
  return (
    <div className="shrink-0 bg-brand-primary px-5 pb-5 sm:px-7">
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-white/10 p-1 sm:grid-cols-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`
                flex
                min-h-[38px]
                items-center
                justify-center
                gap-1.5
                rounded-lg
                px-2
                py-2
                text-[11px]
                font-bold
                transition-all
                duration-200
                sm:text-xs
                ${
                  isActive
                    ? "bg-brand-secondary text-brand-primary shadow-sm"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />

              <span>
                {tab.number} {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}