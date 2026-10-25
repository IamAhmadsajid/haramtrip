// src/app/umrah-packages/[slug]/page.tsx
import { notFound } from "next/navigation";
import { umrahPackageDetails } from "@/data/umrah-package-details";
import { PackageDetailView } from "@/components/umrah-packages/package-detail-view";
import { getPageMetadata } from "@/lib/page-metadata";

export async function generateStaticParams() {
  return umrahPackageDetails.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = umrahPackageDetails.find((p) => p.slug === slug);
  const pageMetadata = getPageMetadata(`/umrah-packages/${slug}`);

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

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = umrahPackageDetails.find((p) => p.slug === slug);

  if (!pkg) notFound();

  // Pass backLabel here
  return <PackageDetailView pkg={pkg} backHref="/umrah-packages" backLabel="Back to Umrah Packages" />;
}