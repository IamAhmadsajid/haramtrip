// src/app/umrah-packages/december-umrah/[slug]/page.tsx
import { notFound } from "next/navigation";
import { decemberUmrahPackages } from "@/data/december-umrah-packages";
import { PackageDetailView } from "@/components/umrah-packages/package-detail-view";

export async function generateStaticParams() {
  return decemberUmrahPackages.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = decemberUmrahPackages.find((p) => p.slug === slug);

  if (!pkg) return { title: "Package Not Found" };

  return {
    title: pkg.packageName,
    description: pkg.overview,
  };
}

export default async function DecemberPackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = decemberUmrahPackages.find((p) => p.slug === slug);

  if (!pkg) notFound();

  return <PackageDetailView pkg={pkg} backHref="/umrah-packages/december-umrah" backLabel="Back to December Umrah Packages" />;
}