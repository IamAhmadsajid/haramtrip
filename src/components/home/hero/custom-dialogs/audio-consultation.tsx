// src/components/consultation-dialog/audio-consultation.tsx

"use client";

import { Phone } from "lucide-react";
import { BookingForm } from "./booking-consultation";

interface AudioConsultationProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onOpenChange: (open: boolean) => void;
}

export function AudioConsultation({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  onOpenChange,
}: AudioConsultationProps) {
  return (
    <BookingForm
      mode="audio"
      selectedDate={selectedDate}
      selectedTime={selectedTime}
      onDateChange={onDateChange}
      onTimeChange={onTimeChange}
      onOpenChange={onOpenChange}
    />
  );
}