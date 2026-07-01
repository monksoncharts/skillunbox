import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseLandingPage from "@/components/landing-pages/CourseLandingPage";
import { COURSES } from "@/constants/courses";

type LandingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: LandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);

  if (!course) {
    return {
      title: "Course Landing Page | SkillUnbox",
    };
  }

  return {
    title: `${course.title} Landing Page | SkillUnbox`,
    description: course.overview,
  };
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return <CourseLandingPage course={course} />;
}
