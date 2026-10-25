import { getPageMetadata } from "@/lib/page-metadata";

export const metadata = getPageMetadata("/tour-umrah-packages/egypt");

export default function EgyptToursLayout({ children }: { children: React.ReactNode }) {
  return children;
}