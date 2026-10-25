import { getPageMetadata } from "@/lib/page-metadata";

export const metadata = getPageMetadata("/shop");

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}