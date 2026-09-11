import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/cases";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/work", "/about", "/contact"].map((path) => ({
    url: new URL(path || "/", site.url).toString(),
    lastModified,
  }));

  const caseRoutes = caseStudies.map((study) => ({
    url: new URL(`/work/${study.slug}`, site.url).toString(),
    lastModified,
  }));

  return [...staticRoutes, ...caseRoutes];
}
