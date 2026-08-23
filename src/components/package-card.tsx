"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Plane } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import type { Package } from "@/lib/types";

export function PackageCard({ pkg }: { pkg: Package }) {
  const waLink = `${SITE_CONFIG.whatsapp}?text=Hello%20Haram%20Trip,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}`;

  return (
    <Card className="w-full overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={pkg.image} 
          alt={pkg.title} 
          fill 
          className="object-cover transition-transform duration-300 group-hover/card:scale-105" 
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <CardHeader>
        <CardDescription className="text-brand-secondary font-medium">{pkg.duration} • {pkg.category}</CardDescription>
        <CardTitle className="text-lg">{pkg.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">{pkg.description}</p>
        <p className="mt-4 text-2xl font-bold text-brand-primary dark:text-brand-secondary">
          £{pkg.price.toLocaleString()}
        </p>
      </CardContent>
      
      <CardFooter className="flex gap-2 mt-auto">
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button className="w-full bg-brand-secondary text-black hover:bg-brand-secondary/90">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </Button>
        </a>
        
        <Sheet>
          <SheetTrigger 
            render={
              <Button variant="outline" className="flex-1">
                <Plane className="mr-2 h-4 w-4" /> Details
              </Button>
            } 
          />
          <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-2xl text-brand-primary dark:text-brand-secondary">{pkg.title}</SheetTitle>
              <SheetDescription className="text-base">
                {pkg.duration} • {pkg.category} • £{pkg.price.toLocaleString()}
              </SheetDescription>
            </SheetHeader>
            
            <div className="p-4 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Overview</h4>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Itinerary</h4>
                <ul className="space-y-3">
                  {pkg.itinerary.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-secondary-2 text-xs font-bold text-brand-primary dark:bg-secondary dark:text-brand-secondary">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-brand-secondary text-black hover:bg-brand-secondary/90">
                  <MessageCircle className="mr-2 h-4 w-4" /> Book via WhatsApp
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  );
}