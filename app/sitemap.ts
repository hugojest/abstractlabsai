import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const siteUrl = "https://hugojeriastrauss.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${siteUrl}/blog/${a.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes];
}
