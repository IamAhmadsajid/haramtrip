// src/app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/topbar";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ReferralPopup } from "@/components/referral-popup";
import { FloatingActions } from "@/components/floating-actions";
import { LiveChat } from "@/components/live-chat";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Haram Trip | Umrah & Hajj Travel Specialists",
  description: "UK-based Umrah and Hajj travel agency.",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* 
          Fix for iOS 15 Safari ResizeObserver bug 
          This prevents Framer Motion from crashing React on older iPhones 
        */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              window.addEventListener('error', (e) => {
                if (e.message && e.message.includes('ResizeObserver')) {
                  e.stopImmediatePropagation();
                  e.preventDefault();
                }
              });
            })();
          `
        }} />
      </head>
      {/* Removed flex flex-col and <main> wrapper to fix sticky and z-index bugs */}
      <body className="min-h-full w-full bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          
          <TopBar />
          <NavBar />

          {children}

          <Footer />

          <LiveChat />

          <FloatingActions />

          <ReferralPopup />          
          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}