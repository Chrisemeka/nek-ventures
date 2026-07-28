import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

const ROUTES = ["/"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${siteConfig.seo.siteUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
