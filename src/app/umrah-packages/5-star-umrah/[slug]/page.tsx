// src/app/umrah-packages/5-star-umrah/[slug]/page.tsx
import { notFound } from "next/navigation";
import { umrahPackageDetails } from "@/data/umrah-package-details";
import { PackageDetailView } from "@/components/umrah-packages/package-detail-view";

const fiveStarPackages = umrahPackageDetails.filter((p) => p.category === "5 Star");

export async function generateStaticParams() {
  return fiveStarPackages.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = fiveStarPackages.find((p) => p.slug === slug);

  if (!pkg) return { title: "Package Not Found" };

  return {
    title: pkg.packageName,
    description: pkg.overview,
  };
}

export default async function FiveStarPackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = fiveStarPackages.find((p) => p.slug === slug);

  if (!pkg) notFound();

  // Pass backLabel here
  return <PackageDetailView pkg={pkg} backHref="/umrah-packages/5-star-umrah" backLabel="Back to 5 Star Umrah Packages" />;
}