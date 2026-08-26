// ============================================================
// File: src/components/custom-plan/custom-plan-dialog.tsx
// Purpose:
// Custom Plan dialog for the "Customise Your Plan" hero button.
// This is a standalone dialog with no tabs.
// ============================================================

"use client";

import { useState } from "react";
import {
  UserRound,
  Phone,
  Mail,
  Package,
  CalendarDays,
  UsersRound,
  Hotel,
  UserRoundCog,
  Footprints,
  ShieldCheck,
  Send,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/site-config";
import { CustomPlanHeader } from "@/components/home/hero/custom-plan/custom-plan-header";

interface CustomPlanDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CustomPlanDialog({
  open,
  onOpenChange,
}: CustomPlanDialogProps) {
  const [specialRequirements, setSpecialRequirements] = useState<string[]>([]);

  if (!open) return null;

  const toggleRequirement = (value: string) => {
    setSpecialRequirements((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onOpenChange(false);
        }
      }}
    >
      <div
        className="
          relative
          flex
          max-h-[94vh]
          w-full
          max-w-[550px]
          flex-col
          overflow-hidden
          rounded-[22px]
          border
          border-brand-secondary/80
          bg-background
          shadow-2xl
        "
      >
{/* ======================================================
    HEADER
====================================================== */}
<CustomPlanHeader
  onClose={() => onOpenChange(false)}
/>

        {/* ======================================================
            FORM CONTENT
        ====================================================== */}
        <form
          className="overflow-y-auto px-6 py-6 sm:px-7"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {/* ====================================================
              NAME + PHONE
          ==================================================== */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              icon={<UserRound className="h-3.5 w-3.5" />}
              label="Full Name"
              required
            >
              <input
                type="text"
                required
                placeholder="e.g. Brother Ahmad"
                className="booking-input"
              />
            </FormField>

            <FormField
              icon={<Phone className="h-3.5 w-3.5" />}
              label="Phone Number"
              required
            >
              <input
                type="tel"
                required
                placeholder="e.g. +44 7123 456789"
                className="booking-input"
              />
            </FormField>
          </div>

          {/* ====================================================
              EMAIL + PACKAGE
          ==================================================== */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              icon={<Mail className="h-3.5 w-3.5" />}
              label="Email Address"
            >
              <input
                type="email"
                placeholder="name@example.com"
                className="booking-input"
              />
            </FormField>

            <FormField
              icon={<Package className="h-3.5 w-3.5" />}
              label="Packages"
              required
            >
              <select
                required
                defaultValue="umrah"
                className="booking-input appearance-none"
              >
                <option value="umrah">Makkah & Madinah (Umrah)</option>
                <option value="ramadan">Ramadan Umrah</option>
                <option value="5-star">5 Star Umrah Package</option>
                <option value="december">December Umrah</option>
                <option value="easter">Easter Umrah</option>
                <option value="dubai">Dubai Holiday</option>
                <option value="turkey">Turkey Holiday</option>
                <option value="egypt">Egypt Holiday</option>
              </select>
            </FormField>
          </div>

          {/* ====================================================
              DATE + PEOPLE
          ==================================================== */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              icon={<CalendarDays className="h-3.5 w-3.5" />}
              label="Target Travel Date"
              required
            >
              <input
                type="date"
                required
                className="booking-input"
              />
            </FormField>

            <FormField
              icon={<UsersRound className="h-3.5 w-3.5" />}
              label="Number of People"
            >
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="booking-input"
              />
            </FormField>
          </div>

          {/* ====================================================
              HOTEL PREFERENCE
          ==================================================== */}
          <div className="mt-4">
            <FormField
              icon={<Hotel className="h-3.5 w-3.5" />}
              label="Hotel Preference"
            >
              <select
                defaultValue="5star"
                className="booking-input appearance-none"
              >
                <option value="5star">
                  5 Star Clock Tower (100m to Haram)
                </option>
                <option value="5star-makkah">
                  5 Star Makkah Hotel
                </option>
                <option value="5star-madinah">
                  5 Star Madinah Hotel
                </option>
                <option value="4star">4 Star Hotel</option>
                <option value="3star">3 Star Hotel</option>
                <option value="flexible">Flexible / Best Available</option>
              </select>
            </FormField>
          </div>

          {/* ====================================================
              SPECIAL TRAVELLER REQUIREMENTS
          ==================================================== */}
          <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50/60 p-3 dark:border-orange-900/50 dark:bg-orange-950/10">
            <div className="flex items-center gap-1.5">
              <UserRoundCog className="h-4 w-4 text-orange-500" />

              <p className="text-[11px] font-bold text-foreground">
                Special Traveller Requirements
                <span className="font-normal text-muted-foreground">
                  {" "}
                  (Select all that apply)
                </span>
              </p>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <RequirementCheckbox
                label="Women"
                checked={specialRequirements.includes("solo-women")}
                onChange={() => toggleRequirement("solo-women")}
              />

              <RequirementCheckbox
                label="Autistic Child"
                checked={specialRequirements.includes("autistic-child")}
                onChange={() => toggleRequirement("autistic-child")}
              />

              <RequirementCheckbox
                label="Revert Muslim"
                checked={specialRequirements.includes("revert-muslim")}
                onChange={() => toggleRequirement("revert-muslim")}
              />
            </div>

            <div className="my-2 border-t border-orange-200 dark:border-orange-900/50" />

            <RequirementCheckbox
              label="♿ Need Post-Umrah Activities (Ziyarat, Historical Tours, Taif & Al-Ula Excursions)"
              checked={specialRequirements.includes("post-umrah")}
              onChange={() => toggleRequirement("post-umrah")}
            />
          </div>

          {/* ====================================================
              ADDITIONAL NOTES
          ==================================================== */}
          <div className="mt-4">
            <label className="mb-1.5 block text-[10px] font-semibold text-foreground">
              Special Requirements / Additional Notes
            </label>

            <textarea
              rows={3}
              placeholder="Enter any additional requests e.g. Wheelchair assistance, quiet room allocations, flight preference..."
              className="
                w-full
                resize-none
                rounded-lg
                border
                border-border
                bg-background
                px-3
                py-2.5
                text-[11px]
                leading-4
                text-foreground
                outline-none
                transition
                placeholder:text-muted-foreground
                focus:border-brand-secondary
                focus:ring-1
                focus:ring-brand-secondary
              "
            />
          </div>

          {/* ====================================================
              SUBMIT BUTTON
          ==================================================== */}
          <button
            type="submit"
            className="
              mt-5
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#63c943]
              px-5
              text-xs
              font-bold
              text-white
              shadow-lg
              shadow-black/10
              transition
              hover:bg-[#55bd37]
            "
          >
            <Send className="h-4 w-4" />
            Submit Custom Plan Request
          </button>

          {/* ====================================================
              CONFIDENTIALITY
          ==================================================== */}
          <div className="mt-4 flex items-center justify-center gap-1.5 border-t border-border pt-4">
            <ShieldCheck className="h-3.5 w-3.5 text-green-500" />

            <p className="text-center text-[9px] text-muted-foreground">
              Your request is 100% confidential & verified with our UK travel
              desk.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============================================================
// Form Field
// ============================================================

function FormField({
  icon,
  label,
  required = false,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold text-foreground">
        <span className="text-orange-500">{icon}</span>

        <span>{label}</span>

        {required && <span className="text-red-500">*</span>}
      </label>

      {children}
    </div>
  );
}

// ============================================================
// Requirement Checkbox
// ============================================================

function RequirementCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className="
        flex
        cursor-pointer
        items-center
        gap-2
        rounded-lg
        border
        border-border
        bg-background
        px-2
        py-2
        text-[10px]
        font-semibold
        text-foreground
        transition
        hover:border-brand-secondary
      "
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 accent-brand-secondary"
      />

      <span>{label}</span>
    </label>
  );
}