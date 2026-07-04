import type { MetadataRoute } from "next";
import { absoluteUrl, INDEXED_ROUTES, NOINDEX_ROUTES } from "./seoRoutes";

function exactRoute(route: string) {
  return `${route || "/"}$`;
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/_next/static/",
        "/_next/image",
        "/images/",
        "/favicon.ico",
        "/favicon-skillunbox.png",
        "/logo-full.png",
        "/logo-square.png",
        "/robots.txt$",
        "/sitemap.xml$",
        ...INDEXED_ROUTES.map(exactRoute),
      ],
      disallow: [
        ...NOINDEX_ROUTES,
        "/*?*",
        "/",
      ],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl(""),
  };
}
