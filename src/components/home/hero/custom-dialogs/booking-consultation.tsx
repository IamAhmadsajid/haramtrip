// src/components/consultation-dialog/booking-consultation.tsx

"use client";

import { useState } from "react";
import {
  CalendarDays,
  Check,
  Clock3,
  Mail,
  Phone,
  UserRound,
  Video,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/site-config";

export type BookingMode = "audio" | "video" | "booking";

interface BookingFormProps {
  mode: BookingMode;
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

// ============================================================
// Time periods shown above the actual slots, with the half-hour
// slots that actually fall within each period's time range.
// ============================================================

function slotsInRange(startHour: number, endHour: number) {
  // endHour may "wrap" past midnight (e.g. Night: 22 -> 30 meaning 6am next day)
  const slots: string[] = [];
  for (let h = startHour; h < endHour; h += 0.5) {
    const hour = Math.floor(h) % 24;
    const minute = h % 1 === 0 ? "00" : "30";
    slots.push(`${String(hour).padStart(2, "0")}:${minute}`);
  }
  return slots;
}

const PERIODS = [
  {
    label: "Morning",
    time: "6am–12pm",
    slots: slotsInRange(6, 12),
  },
  {
    label: "Afternoon",
    time: "12pm–6pm",
    slots: slotsInRange(12, 18),
  },
  {
    label: "Evening",
    time: "6pm–10pm",
    slots: slotsInRange(18, 22),
  },
  {
    label: "Night",
    time: "10pm–6am",
    slots: slotsInRange(22, 30),
  },
  {
    label: "All 24h",
    time: "00:00–23:30",
    slots: slotsInRange(0, 24),
  },
];

export function BookingConsultation({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: BookingFormProps) {
  return (
    <BookingForm
      mode="booking"
      selectedDate={selectedDate}
      selectedTime={selectedTime}
      onDateChange={onDateChange}
      onTimeChange={onTimeChange}
    />
  );
}

// ============================================================
// Shared booking form.
// ============================================================

export function BookingForm({
  mode,
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: BookingFormProps) {
  const config = getBookingConfig(mode);
  const [selectedPeriod, setSelectedPeriod] = useState("Evening");
  const activePeriod = PERIODS.find((p) => p.label === selectedPeriod) ?? PERIODS[2];

  const handlePeriodChange = (label: string, slots: string[]) => {
    setSelectedPeriod(label);
    onTimeChange(slots[0]);
  };

  return (
    <form
      className="px-5 pb-6 pt-5 sm:px-7 sm:pb-7"
      onSubmit={(event) => {
        event.preventDefault();

        // ------------------------------------------------------
        // This currently demonstrates the booking action.
        // Backend/email/calendar integration can be connected
        // later without changing the visual design.
        // ------------------------------------------------------

        console.log("Haram Trip consultation request:", {
          mode,
          selectedDate,
          selectedTime,
        });
      }}
    >
      {/* ======================================================
          Information Banner
      ====================================================== */}
      <div className="rounded-xl border border-orange-300 bg-orange-50 px-3 py-2.5 dark:border-orange-900/60 dark:bg-orange-950/20">
        <div className="flex items-center gap-2">
          <config.icon className="h-4 w-4 shrink-0 text-orange-500" />

          <p className="text-[10px] leading-4 text-foreground sm:text-[11px]">
            {config.description}
          </p>
        </div>
      </div>

      {/* ======================================================
          Personal Information
      ====================================================== */}
      <div className="mt-4 space-y-3">
        {/* Full Name */}
        <FormField
          icon={<UserRound className="h-3.5 w-3.5" />}
          label="Full Name"
          required
        >
          <input
            type="text"
            name="fullName"
            required
            placeholder="e.g. Tariq Mahmood"
            className="booking-input"
          />
        </FormField>

        {/* Phone */}
        <FormField
          icon={<Phone className="h-3.5 w-3.5" />}
          label="Phone Number"
          required
        >
          <input
            type="tel"
            name="phone"
            required
            placeholder="e.g. +44 7123 456789"
            className="booking-input"
          />
        </FormField>

        {/* Email */}
        <FormField
          icon={<Mail className="h-3.5 w-3.5" />}
          label="Email Address"
          required
          helper="Mandatory for booking confirmation"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="your.email@example.com"
            className="booking-input"
          />
        </FormField>

        {/* Consultation Date */}
        <FormField
          icon={<CalendarDays className="h-3.5 w-3.5" />}
          label="Consultation Date"
          required
        >
          <input
            type="date"
            name="consultationDate"
            required
            min={getTodayDate()}
            value={selectedDate}
            onChange={(event) => onDateChange(event.target.value)}
            className="booking-input"
          />
        </FormField>
      </div>

      {/* ======================================================
          Available Time
      ====================================================== */}
      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-1.5 text-[10px] font-bold text-foreground sm:text-[11px]">
            <Clock3 className="h-3.5 w-3.5 text-orange-500" />

            Available Time (Across 24 Hours)

            <span className="text-red-500">*</span>
          </label>

          <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400">
            24/7 Slots
          </span>
        </div>

        {/* ====================================================
            Time Periods
        ==================================================== */}
        <div className="mt-2 grid grid-cols-5 gap-1">
          {PERIODS.map((period) => {
            const isActivePeriod = period.label === selectedPeriod;

            return (
              <button
                key={period.label}
                type="button"
                onClick={() => handlePeriodChange(period.label, period.slots)}
                className={`
                  rounded-lg
                  border
                  px-1
                  py-2
                  text-center
                  transition
                  ${
                    isActivePeriod
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-border bg-card text-foreground hover:border-orange-300 hover:bg-orange-50 dark:hover:bg-orange-950/20"
                  }
                `}
              >
                <span className="block text-[8px] font-bold sm:text-[9px]">
                  {period.label}
                </span>

                <span
                  className={`
                    block
                    text-[7px]
                    sm:text-[8px]
                    ${
                      isActivePeriod
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }
                  `}
                >
                  {period.time}
                </span>
              </button>
            );
          })}
        </div>

        {/* ====================================================
            Actual Time Slots (change based on the selected period)
        ==================================================== */}
        <div className="mt-2 grid grid-cols-4 gap-1 rounded-xl border border-border bg-muted/30 p-1.5">
          {activePeriod.slots.map((time) => {
            const active = selectedTime === time;

            return (
              <button
                key={time}
                type="button"
                onClick={() => onTimeChange(time)}
                className={`
                  flex
                  min-h-[38px]
                  flex-col
                  items-center
                  justify-center
                  rounded-lg
                  border
                  px-1
                  py-1
                  transition-all
                  ${
                    active
                      ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                      : "border-border bg-background text-foreground hover:border-orange-300 hover:bg-orange-50 dark:hover:bg-orange-950/20"
                  }
                `}
              >
                <span className="text-[10px] font-bold sm:text-[11px]">
                  {formatTime(time)}
                </span>

                <span
                  className={`
                    text-[7px]
                    ${
                      active
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }
                  `}
                >
                  {getAmPm(time)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================
          Selected Time / Custom Time
      ====================================================== */}
      <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2.5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <p className="text-[9px] font-semibold text-foreground sm:text-[10px]">
          Selected:{" "}
          <span className="font-bold text-orange-600 dark:text-orange-400">
            {formatTime(selectedTime)} ({selectedTime})
          </span>
        </p>

        <label className="flex items-center gap-2 text-[9px] font-semibold text-muted-foreground sm:text-[10px]">
          Custom:

          <input
            type="time"
            value={selectedTime}
            onChange={(event) =>
              onTimeChange(event.target.value)
            }
            className="h-7 rounded-md border border-border bg-background px-2 text-[10px] font-bold text-foreground outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </label>
      </div>

      {/* ======================================================
          Submit Button
      ====================================================== */}
      <button
        type="submit"
        className="
          mt-3
          flex
          min-h-[46px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-brand-primary
          px-5
          py-3
          text-xs
          font-bold
          text-white
          shadow-md
          transition
          hover:bg-brand-primary/90
          focus:outline-none
          focus:ring-2
          focus:ring-brand-secondary
          focus:ring-offset-2
          dark:focus:ring-offset-background
        "
      >
        <Check className="h-4 w-4" />

        {config.buttonText}
      </button>
    </form>
  );
}

// ============================================================
// Booking configuration by consultation type.
// ============================================================

function getBookingConfig(mode: BookingMode) {
  if (mode === "audio") {
    return {
      icon: Phone,
      description:
        "Schedule a 1-on-1 Audio Consultation with a Haram Trip travel expert.",
      buttonText: "Confirm & Book Audio Call",
    };
  }

  if (mode === "video") {
    return {
      icon: Video,
      description:
        "Schedule a 1-on-1 Video Consultation with a Haram Trip travel expert.",
      buttonText: "Confirm & Book Video Call",
    };
  }

  return {
    icon: CalendarDays,
    description:
      "Book a dedicated 1-on-1 Umrah consultation. Pick any time slot across 24 hours.",
    buttonText: "Confirm & Book Consultation",
  };
}

// ============================================================
// Reusable form field.
// ============================================================

interface FormFieldProps {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  helper?: string;
  children: React.ReactNode;
}

function FormField({
  icon,
  label,
  required,
  helper,
  children,
}: FormFieldProps) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-2">
        <label className="flex items-center gap-1 text-[10px] font-bold text-foreground sm:text-[11px]">
          <span className="text-orange-500">{icon}</span>

          {label}

          {required && (
            <span className="text-red-500">*</span>
          )}
        </label>

        {helper && (
          <span className="text-[8px] text-muted-foreground sm:text-[9px]">
            ({helper})
          </span>
        )}
      </div>

      {children}
    </div>
  );
}

// ============================================================
// Today's date.
// ============================================================

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// ============================================================
// Format 18:00 -> 18:00
// Format 09:30 -> 09:30
// ============================================================

function formatTime(time: string) {
  return time;
}

// ============================================================
// Return AM / PM.
// ============================================================

function getAmPm(time: string) {
  const [hour] = time.split(":").map(Number);

  return hour >= 12 ? "PM" : "AM";
}