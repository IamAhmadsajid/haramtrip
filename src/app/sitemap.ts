// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { blogPosts } from "@/data/blog-posts";
import { umrahPackageDetails } from "@/data/umrah-package-details";
import { decemberUmrahPackages } from "@/data/december-umrah-packages";
import { easterUmrahPackages } from "@/data/easter-umrah-packages";
import { ramadanUmrahPackages } from "@/data/ramadan-umrah-packages";

export const dynamic = "force-static";

const BASE_URL = SITE_CONFIG.url;

// Static pages that aren't backed by a data array.
// /thank-you is intentionally excluded — it's a post-submission
// confirmation page with no unique content worth indexing.
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/umrah-packages", priority: 0.9, changeFrequency: "weekly" },
  { path: "/umrah-packages/5-star-umrah", priority: 0.8, changeFrequency: "weekly" },
  { path: "/umrah-packages/budget-umrah", priority: 0.8, changeFrequency: "weekly" },
  { path: "/umrah-packages/ramadan-umrah", priority: 0.8, changeFrequency: "weekly" },
  { path: "/umrah-packages/december-umrah", priority: 0.8, changeFrequency: "weekly" },
  { path: "/umrah-packages/easter-umrah", priority: 0.8, changeFrequency: "weekly" },
  { path: "/umrah-packages/women-umrah", priority: 0.8, changeFrequency: "weekly" },
  { path: "/flights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/makkah-hotels", priority: 0.7, changeFrequency: "weekly" },
  { path: "/madinah-hotels", priority: 0.7, changeFrequency: "weekly" },
  { path: "/tour-umrah-packages/dubai", priority: 0.7, changeFrequency: "weekly" },
  { path: "/tour-umrah-packages/egypt", priority: 0.7, changeFrequency: "weekly" },
  { path: "/tour-umrah-packages/turkey", priority: 0.7, changeFrequency: "weekly" },
  { path: "/tour-guide", priority: 0.6, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/airport-transfers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/shop", priority: 0.5, changeFrequency: "monthly" },
  { path: "/e-sim", priority: 0.5, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.4, changeFrequency: "monthly" },
  { path: "/umrah-visa-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/rules-and-regulations", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const packageEntries: MetadataRoute.Sitemap = umrahPackageDetails.map((pkg) => ({
    url: `${BASE_URL}/umrah-packages/${pkg.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const fiveStarEntries: MetadataRoute.Sitemap = umrahPackageDetails
    .filter((pkg) => pkg.category === "5 Star")
    .map((pkg) => ({
      url: `${BASE_URL}/umrah-packages/5-star-umrah/${pkg.slug}`,
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  const decemberEntries: MetadataRoute.Sitemap = decemberUmrahPackages.map((pkg) => ({
    url: `${BASE_URL}/umrah-packages/december-umrah/${pkg.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const easterEntries: MetadataRoute.Sitemap = easterUmrahPackages.map((pkg) => ({
    url: `${BASE_URL}/umrah-packages/easter-umrah/${pkg.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const ramadanEntries: MetadataRoute.Sitemap = ramadanUmrahPackages.map((pkg) => ({
    url: `${BASE_URL}/umrah-packages/ramadan-umrah/${pkg.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...packageEntries,
    ...fiveStarEntries,
    ...decemberEntries,
    ...easterEntries,
    ...ramadanEntries,
    ...blogEntries,
  ];
}
