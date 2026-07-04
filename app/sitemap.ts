import type { MetadataRoute } from "next";
import { absoluteUrl, INDEXED_STATIC_ROUTES } from "./seoRoutes";
import { COURSES } from "@/constants/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = INDEXED_STATIC_ROUTES.map(
    (route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }),
  );

  const courseRoutes: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: absoluteUrl(`/courses/${course.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...courseRoutes];
}
