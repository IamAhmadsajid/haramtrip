import { getPageMetadata } from "@/lib/page-metadata";

export const metadata = getPageMetadata("/contact");

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}