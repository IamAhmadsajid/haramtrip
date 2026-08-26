// src/app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/topbar";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ReferralPopup } from "@/components/referral-popup";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Initialize the Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Haram Trip | Umrah & Hajj Travel Specialists",
  description: "UK-based Umrah and Hajj travel agency.",
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
      <body className="min-h-full flex flex-col bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TopBar />

          <NavBar />

          <div className="flex-1">
            {children}
          </div>

          <Footer />

          {/* Global referral popup + floating referral button */}
          <ReferralPopup />

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}