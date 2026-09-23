// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/topbar";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ReferralPopup } from "@/components/referral-popup";
import { FloatingActions } from "@/components/floating-actions";
import { LiveChat } from "@/components/live-chat";
import { SITE_CONFIG } from "@/lib/site-config";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const { googleAnalyticsId, googleSiteVerification, bingSiteVerification, metaPixelId } =
  SITE_CONFIG.analytics;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Haram Trip | Umrah & Hajj Travel Specialists",
  description: "UK-based Umrah and Hajj travel agency.",
  icons: {
    apple: "/apple-touch-icon.png",
  },
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(bingSiteVerification ? { other: { "msvalidate.01": bingSiteVerification } } : {}),
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

        {/* Google Analytics 4 */}
        {googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}

        {/* Meta (Facebook) Pixel */}
        {metaPixelId && (
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      {/* Removed flex flex-col and <main> wrapper to fix sticky and z-index bugs */}
      <body className="min-h-full w-full bg-background">
        {metaPixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
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

          {/* <ReferralPopup />           */}
          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}