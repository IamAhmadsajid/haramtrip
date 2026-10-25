// src/app/umrah-packages/5-star-umrah/[slug]/page.tsx
import { notFound } from "next/navigation";
import { umrahPackageDetails } from "@/data/umrah-package-details";
import { PackageDetailView } from "@/components/umrah-packages/package-detail-view";
import { getPageMetadata } from "@/lib/page-metadata";

const fiveStarPackages = umrahPackageDetails.filter((p) => p.category === "5 Star");

export async function generateStaticParams() {
  return fiveStarPackages.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = fiveStarPackages.find((p) => p.slug === slug);
  const pageMetadata = getPageMetadata(`/umrah-packages/5-star-umrah/${slug}`);

  if (!pkg) {
    return pageMetadata.title || pageMetadata.description
      ? pageMetadata
      : { title: "Package Not Found" };
  }

  return {
    title: pageMetadata.title ?? pkg.packageName,
    description: pageMetadata.description ?? pkg.overview,
  };
}

export default async function FiveStarPackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = fiveStarPackages.find((p) => p.slug === slug);

  if (!pkg) notFound();

  // Pass backLabel here
  return <PackageDetailView pkg={pkg} backHref="/umrah-packages/5-star-umrah" backLabel="Back to 5 Star Umrah Packages" />;
}