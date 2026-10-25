import { getPageMetadata } from "@/lib/page-metadata";

export const metadata = getPageMetadata("/about");

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}