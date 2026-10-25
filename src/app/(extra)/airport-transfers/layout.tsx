import { getPageMetadata } from "@/lib/page-metadata";

export const metadata = getPageMetadata("/airport-transfers");

export default function AirportTransfersLayout({ children }: { children: React.ReactNode }) {
  return children;
}