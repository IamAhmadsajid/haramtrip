// src/components/e-sim/esim-how-it-works.tsx
import { MessageCircle, QrCode, ScanLine, Plane } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Order via WhatsApp",
    desc: "Choose your preferred package, message our agent, and complete your secure UK payment online."
  },
  {
    icon: QrCode,
    step: "02",
    title: "Receive QR Code",
    desc: "Your digital eSIM profile is instantly generated and delivered directly to your WhatsApp in under 2 minutes."
  },
  {
    icon: ScanLine,
    step: "03",
    title: "Scan & Install in UK",
    desc: "Go to Settings > Cellular > Add eSIM, scan the QR code, and keep it toggled on before your flight."
  },
  {
    icon: Plane,
    step: "04",
    title: "Land & Enjoy 5G",
    desc: "Turn on Data Roaming upon arrival in Saudi Arabia and instantly experience ultra-fast 5G speeds."
  }
];

export function EsimHowItWorks() {
  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
            How Your eSIM Works for Umrah
          </h2>
          <p className="text-base sm:text-lg leading-[1.6] text-muted-foreground">
            Say goodbye to physical SIM swaps and airport queues. Connect in 4 simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          
          {/* Connecting Line (Desktop only) */}
          <div className="absolute top-12 left-0 right-0 h-[2px] bg-border hidden lg:block z-0"></div>

          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 z-10"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-brand-secondary/10 border border-brand-secondary/20 mb-5 relative">
                <item.icon className="w-8 h-8 text-brand-secondary" />
                
                {/* Step Number Badge */}
                <span className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center text-xs font-bold rounded-full bg-foreground text-background shadow-md border-2 border-background">
                  {item.step}
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}