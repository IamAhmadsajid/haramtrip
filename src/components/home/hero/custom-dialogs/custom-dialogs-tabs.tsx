// src/components/custom-dialogs/custom-dialogs-tabs.tsx
"use client";

import {
  CalendarDays,
  MessageCircle,
  Phone,
} from "lucide-react";

export type CustomDialogsTab =
  | "whatsapp"
  | "audio"
  | "booking";

interface CustomDialogsProps {
  activeTab: CustomDialogsTab;
  onTabChange: (tab: CustomDialogsTab) => void;
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
    id: "booking" as const,
    number: "3.",
    label: "Book Call",
    icon: CalendarDays,
  },
];

export function CustomDialogsTabs({
  activeTab,
  onTabChange,
}: CustomDialogsProps) {
  return (
    <div className="shrink-0 bg-background dark:bg-brand-primary border-b border-border dark:border-white/10 px-5 pt-5 pb-5 sm:px-7">
      {/* Changed to grid-cols-3 to fit the 3 tabs perfectly */}
      <div className="grid grid-cols-3 gap-1 rounded-xl bg-muted dark:bg-white/10 p-1">
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
                    : "text-muted-foreground dark:text-white/80 hover:bg-background dark:hover:bg-white/10 hover:text-foreground dark:hover:text-white"
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