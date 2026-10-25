// src/app/umrah-packages/ramadan-umrah/[slug]/page.tsx
import { notFound } from "next/navigation";
import { ramadanUmrahPackages } from "@/data/ramadan-umrah-packages";
import { PackageDetailView } from "@/components/umrah-packages/package-detail-view";
import { getPageMetadata } from "@/lib/page-metadata";

export async function generateStaticParams() {
  return ramadanUmrahPackages.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = ramadanUmrahPackages.find((p) => p.slug === slug);
  const pageMetadata = getPageMetadata(`/umrah-packages/ramadan-umrah/${slug}`);

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

export default async function RamadanPackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = ramadanUmrahPackages.find((p) => p.slug === slug);

  if (!pkg) notFound();

  return <PackageDetailView pkg={pkg} backHref="/umrah-packages/ramadan-umrah" backLabel="Back to Ramadan Umrah Packages" />;
}