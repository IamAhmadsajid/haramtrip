// src/components/custom-dialogs/plan-umrah-dialog.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CustomDialogsHeader } from "./custom-dialogs-header";
import { CustomDialogsTabs, CustomDialogsTab } from "./custom-dialogs-tabs";
import { WhatsAppConsultation } from "./whatsapp-consultation";
import { AudioConsultation } from "./audio-consultation";
import { BookingConsultation } from "./booking-consultation";
import { CustomDialogFooter } from "./custom-dialog-footer";
import { getTodayDate } from "@/lib/date-utils";

interface PlanUmrahDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlanUmrahDialog({
  open,
  onOpenChange,
}: PlanUmrahDialogProps) {
  const [activeTab, setActiveTab] =
    useState<CustomDialogsTab>("booking");

  const [selectedDate, setSelectedDate] = useState(
    getTodayDate()
  );

  const [selectedTime, setSelectedTime] = useState("18:00");

  // ------------------------------------------------------------
  // Close popup when Escape is pressed.
  // ------------------------------------------------------------
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  // ------------------------------------------------------------
  // Prevent the page behind the popup from scrolling.
  // ------------------------------------------------------------
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // ------------------------------------------------------------
  // Reset booking information when popup is opened.
  // ------------------------------------------------------------
  useEffect(() => {
    if (open) {
      setSelectedDate(getTodayDate());
      setSelectedTime("18:00");
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          // Increased padding to p-4 on mobile and sm:p-6 on larger screens
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 sm:p-6 backdrop-blur-[3px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onOpenChange(false);
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-dialog-title"
            className="
              relative
              flex
              max-h-[calc(100vh-32px)]
              w-full
              max-w-[550px]
              flex-col
              overflow-hidden
              rounded-[24px]
              border
              border-border
              dark:border-brand-secondary/50
              bg-background
              shadow-2xl
              sm:max-h-[calc(100vh-48px)]
              sm:rounded-[28px]
            "
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {/* ==================================================
                HEADER
            ================================================== */}
            <CustomDialogsHeader
              onClose={() => onOpenChange(false)}
            />

            {/* ==================================================
                TAB NAVIGATION
            ================================================== */}
            <CustomDialogsTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* ==================================================
                TAB CONTENT
            ================================================== */}
            <div className="min-h-0 flex-1 overflow-y-auto bg-background">
              <AnimatePresence mode="wait">
                {activeTab === "whatsapp" && (
                  <motion.div
                    key="whatsapp"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.18 }}
                  >
                    <WhatsAppConsultation />
                  </motion.div>
                )}

                {activeTab === "audio" && (
                  <motion.div
                    key="audio"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.18 }}
                  >
                    <AudioConsultation
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                      onDateChange={setSelectedDate}
                      onTimeChange={setSelectedTime}
                    />
                  </motion.div>
                )}

                {activeTab === "booking" && (
                  <motion.div
                    key="booking"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.18 }}
                  >
                    <BookingConsultation
                      mode="booking"
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                      onDateChange={setSelectedDate}
                      onTimeChange={setSelectedTime}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ==================================================
                FOOTER
            ================================================== */}
            <CustomDialogFooter />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}