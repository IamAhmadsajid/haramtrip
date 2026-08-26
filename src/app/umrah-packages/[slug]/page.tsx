// src/app/umrah-packages/[slug]/page.tsx
import { notFound } from "next/navigation";
import { umrahPackageDetails } from "@/data/umrah-package-details";
import { PackageDetailView } from "@/components/umrah-packages/package-detail-view";

export async function generateStaticParams() {
  return umrahPackageDetails.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = umrahPackageDetails.find((p) => p.slug === slug);

  if (!pkg) return { title: "Package Not Found" };

  return {
    title: pkg.packageName,
    description: pkg.overview,
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = umrahPackageDetails.find((p) => p.slug === slug);

  if (!pkg) notFound();

  // Pass backLabel here
  return <PackageDetailView pkg={pkg} backHref="/umrah-packages" backLabel="Back to Umrah Packages" />;
}