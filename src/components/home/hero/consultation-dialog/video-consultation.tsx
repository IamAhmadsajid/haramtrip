// ============================================================
// File: src/components/consultation-dialog/video-consultation.tsx
// Purpose:
// Booking form specifically for a Video Call consultation.
// ============================================================

"use client";

import { BookingForm } from "./booking-consultation";

interface VideoConsultationProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export function VideoConsultation({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: VideoConsultationProps) {
  return (
    <BookingForm
      mode="video"
      selectedDate={selectedDate}
      selectedTime={selectedTime}
      onDateChange={onDateChange}
      onTimeChange={onTimeChange}
    />
  );
}