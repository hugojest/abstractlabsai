import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes];
}
