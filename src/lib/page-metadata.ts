import type { Metadata } from "next";
import pageMetadata from "@/data/page-meta.json";

type PageMetadataRecord = {
  title?: string;
  description: string;
};

const metadataByPath = pageMetadata as Record<string, PageMetadataRecord>;

export function getPageMetadata(path: string): Metadata {
  const page = metadataByPath[path];

  if (!page) {
    return {};
  }

  return {
    ...(page.title ? { title: page.title } : {}),
    description: page.description,
  };
}