import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Must be absolute — the sitemap protocol rejects relative URLs.
    sitemap: `${siteConfig.seo.siteUrl}/sitemap.xml`,
    host: siteConfig.seo.siteUrl,
  };
}
