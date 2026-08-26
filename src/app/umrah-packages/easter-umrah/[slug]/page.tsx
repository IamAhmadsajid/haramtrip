// src/app/umrah-packages/easter-umrah/[slug]/page.tsx
import { notFound } from "next/navigation";
import { easterUmrahPackages } from "@/data/easter-umrah-packages";
import { PackageDetailView } from "@/components/umrah-packages/package-detail-view";

export async function generateStaticParams() {
  return easterUmrahPackages.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = easterUmrahPackages.find((p) => p.slug === slug);

  if (!pkg) return { title: "Package Not Found" };

  return {
    title: pkg.packageName,
    description: pkg.overview,
  };
}

export default async function EasterPackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = easterUmrahPackages.find((p) => p.slug === slug);

  if (!pkg) notFound();

  return <PackageDetailView pkg={pkg} backHref="/umrah-packages/easter-umrah" backLabel="Back to Easter Umrah Packages" />;
}