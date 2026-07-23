import type { MetadataRoute } from "next";

// Update NEXT_PUBLIC_SITE_URL in .env.local (or your host env) to your
// production origin so URLs in the sitemap are absolute.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const ROUTES = ["/"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
