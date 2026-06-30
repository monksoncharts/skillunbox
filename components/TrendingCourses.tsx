"use client";

import Link from "next/link";
import { COURSES } from "../constants/courses";

// Map gradient headers based on course id
const getHeaderGradient = (id: string) => {
  switch (id) {
    case "digital-marketing":
      return "from-[#ff4e50] to-[#f9d423]"; // Digital Marketing - Pink/Yellow
    case "video-editing":
      return "from-[#f2994a] to-[#f2c94c]"; // Video Editing - Golden
    case "graphic-design":
      return "from-[#667eea] to-[#764ba2]"; // Graphic Design - Purple
    case "web-development":
      return "from-[#4568dc] to-[#b06ab3]"; // Web Dev - Purple Blue
    case "ai-automation":
      return "from-[#f093fb] to-[#f5576c]"; // AI Automation - Pink/Red
    case "media-production":
      return "from-[#11998e] to-[#38ef7d]"; // Media Production - Teal/Green
    default:
      return "from-purple-500 to-indigo-500";
  }
};

export default function TrendingCourses() {
  return (
    <section id="courses" className="w-full bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8" aria-labelledby="courses-heading">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs uppercase font-extrabold tracking-wider text-[#5624d0] mb-3">Our Courses</h2>
            <h3
              id="courses-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Explore Job-Oriented Training Programs
            </h3>
          </div>
          <p className="mt-4 md:mt-0 text-gray-500 text-sm max-w-md">
            Learn live and get personalized mentorship in digital marketing, full-stack programming, media, visual arts, and generative AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-[#5624d0]"
            >
              {/* Card Header Gradient */}
              <div
                className={`relative h-48 w-full bg-gradient-to-br ${getHeaderGradient(
                  course.id
                )} flex flex-col justify-between p-5 text-white`}
              >
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-40 mix-blend-overlay pointer-events-none" />
                
                {/* Floating Badge */}
                <div className="z-10 self-start">
                  {course.badge && (
                    <span className="bg-white/90 text-gray-900 backdrop-blur-sm text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Rating badge & Skills */}
                <div className="z-10">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="bg-black/35 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="bg-black/35 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded border border-white/10">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Contents */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-[19px] font-bold text-gray-900 leading-snug group-hover:text-[#5624d0] transition-colors mb-2">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="focus:outline-none focus:underline"
                    >
                      {course.title}
                    </Link>
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                      {course.instructor}
                    </span>
                    <span className="h-1 w-1 bg-gray-300 rounded-full hidden sm:block"></span>
                    <span className="text-[9px] font-extrabold text-violet-600 bg-violet-50 border border-violet-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Offline
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">
                    {course.overview}
                  </p>
                </div>

                {/* Bottom section: Rating, Price and CTAs */}
                <div>
                  <div className="border-t border-gray-100 pt-4 mb-4 flex items-center justify-between">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-extrabold text-gray-900">{course.rating}</span>
                      <svg className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="text-xs text-gray-400">({course.ratingsCount})</span>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex-1 inline-flex items-center justify-center h-10 border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 font-bold text-xs rounded-lg transition-all"
                    >
                      Syllabus Details
                    </Link>
                    <Link
                      href={`/admission-registration?course=${course.slug}`}
                      className="flex-1 inline-flex items-center justify-center h-10 bg-primary hover:bg-primary-hover text-white font-bold text-xs rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
