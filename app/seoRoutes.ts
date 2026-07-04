import { COURSES } from "@/constants/courses";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://skillunbox.io";

export const INDEXED_STATIC_ROUTES = [
  "",
  "/courses",
  "/why-us",
  "/about-us",
  "/contact",
  "/privacy-policy",
  "/admission-registration",
] as const;

export const INDEXED_ROUTES = [
  ...INDEXED_STATIC_ROUTES,
  ...COURSES.map((course) => `/courses/${course.slug}`),
];

export const NOINDEX_ROUTES = [
  "/api/",
  "/landing-pages/",
  "/registrationthanku-page",
] as const;

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path || "/"}`;
}
