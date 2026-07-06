"use client";

import { use, useState } from "react";
import { COURSES } from "../../../constants/courses";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Helper to get matching gradients for the Banner
  const getBannerGradient = (id: string) => {
    switch (id) {
      case "digital-marketing":
        return "from-[#ff4e50] to-[#f9d423]";
      case "video-editing":
        return "from-[#f2994a] to-[#f2c94c]";
      case "graphic-design":
        return "from-[#667eea] to-[#764ba2]";
      case "web-development":
        return "from-[#4568dc] to-[#b06ab3]";
      case "ai-automation":
        return "from-[#f093fb] to-[#f5576c]";
      case "media-production":
        return "from-[#11998e] to-[#38ef7d]";
      case "performance-marketing":
        return "from-[#0052d4] via-[#4364f7] to-[#6fb1fc]";
      default:
        return "from-violet-600 to-indigo-700";
    }
  };

  // Helper to get specific neon shadow/border rings for the Creative Course Pass
  const getPassRingColor = (id: string) => {
    switch (id) {
      case "digital-marketing":
        return "border-yellow-400/70 shadow-yellow-500/10";
      case "video-editing":
        return "border-amber-500/70 shadow-amber-500/10";
      case "graphic-design":
        return "border-purple-500/70 shadow-purple-500/10";
      case "web-development":
        return "border-blue-500/70 shadow-blue-500/10";
      case "ai-automation":
        return "border-pink-500/70 shadow-pink-500/10";
      case "media-production":
        return "border-emerald-500/70 shadow-emerald-500/10";
      case "performance-marketing":
        return "border-blue-500/70 shadow-blue-500/10";
      default:
        return "border-violet-500/70 shadow-violet-500/10";
    }
  };

  // Helper to resolve specific career opportunity SVGs so they are not duplicate briefcase icons
  const getCareerIcon = (title: string) => {
    const lower = title.toLowerCase();

    // 1. Developer / Code
    if (lower.includes("developer") || lower.includes("programmer") || lower.includes("engineer")) {
      return (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    }
    // 2. SEO
    if (lower.includes("seo") || lower.includes("search") || lower.includes("analytics")) {
      return (
        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m3 0H7" />
        </svg>
      );
    }
    // 3. Social Media
    if (lower.includes("social") || lower.includes("instagram") || lower.includes("facebook") || lower.includes("brand")) {
      return (
        <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      );
    }
    // 4. Performance Marketer / Ad Lead
    if (lower.includes("performance") || lower.includes("marketer") || lower.includes("ad")) {
      return (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    }
    // 5. Content Strategist / Copywriter / Content Manager
    if (lower.includes("content") && (lower.includes("strategist") || lower.includes("manager") || lower.includes("writer") || lower.includes("creator"))) {
      return (
        <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    }
    // 6. Freelance
    if (lower.includes("freelance") || lower.includes("consultant")) {
      return (
        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    // 7. Video Editor / Post-Prod / YouTube Editor
    if (lower.includes("video") || lower.includes("edit") || lower.includes("post-production")) {
      return (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      );
    }
    // 8. Producer / Creator / Executive / Director
    if (lower.includes("producer") || lower.includes("creator") || lower.includes("director") || lower.includes("executive")) {
      return (
        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    }
    // 9. Designer / Visual / UI / Brand
    if (lower.includes("design") || lower.includes("brand") || lower.includes("creative")) {
      return (
        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    }
    // 10. AI / Automation / Integrator
    if (lower.includes("ai") || lower.includes("automation") || lower.includes("workflow") || lower.includes("solutions") || lower.includes("expert")) {
      return (
        <svg className="w-5 h-5 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    // 11. Media Coordinator / Studio Assistant / Coordinator
    if (lower.includes("media") || lower.includes("coordinator") || lower.includes("assistant")) {
      return (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
    }

    // Default general business case
    return (
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-[#1c1d1f]">
      <Navbar />

      <main className="flex-1 bg-white pb-16">
        
        {/* Banner Section (Udemy Dark Pattern) */}
        <section className="w-full bg-[#1c1d1f] text-white py-8 md:py-12 px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 relative z-10">
            
            {/* Left Content */}
            <div className="lg:pr-8">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-violet-400 mb-4 uppercase tracking-wider">
                <Link href="/courses" className="hover:text-violet-300">Courses</Link>
                <span>&gt;</span>
                <span className="text-gray-400">{course.id.replace("-", " ")}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3">
                {course.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 font-medium max-w-3xl">
                {course.overview}
              </p>

              {/* Course Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-[#f3ca8c] text-sm">{course.rating}</span>
                  <div className="flex text-amber-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-violet-400 underline font-bold cursor-pointer">
                    ({course.ratingsCount} ratings)
                  </span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="text-gray-300 font-semibold">
                  1,250+ students enrolled
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
                <div>
                  Created by <span className="text-violet-400 font-bold underline cursor-pointer">{course.instructor}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Last updated 6/2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-.313 1.565-.953 3.051-1.893 4.36M8.844 14c-.663-.663-1.28-1.4-1.844-2.2" />
                  </svg>
                  <span>English / Hindi (Hybrid)</span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-semibold text-violet-400">Online &amp; Offline Study Modes</span>
                </div>
              </div>

            </div>

            {/* Empty space for overlay card on desktop */}
            <div className="hidden lg:block w-full h-[10px]" />

          </div>
        </section>

        {/* Content & Floating Sidebar Section */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
            
            {/* Left Content Area */}
            <div className="lg:max-w-[800px] order-2 lg:order-1">
              
              {/* What you'll learn */}
              <div className="border border-gray-300 rounded-lg p-6 bg-white mb-8">
                <h2 className="text-xl font-extrabold mb-4 text-[#1c1d1f]">What you&apos;ll learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {course.youWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs md:text-sm text-[#2d2f31]">
                      <svg className="w-4.5 h-4.5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content (Syllabus Accordions) */}
              <div className="mb-8">
                <h2 className="text-xl font-extrabold text-[#1c1d1f] mb-3">Course content</h2>
                
                <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 mb-4 font-medium">
                  <div>
                    {course.modules.length} sections • {course.modules.length * 5} lectures • {course.id === "web-development" ? "120h" : "80h"} total length
                  </div>
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === null ? 0 : null)}
                    className="text-violet-600 hover:text-violet-800 font-bold"
                  >
                    {openAccordion === null ? "Expand all sections" : "Collapse all sections"}
                  </button>
                </div>

                {/* Collapsible details grid */}
                <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
                  {course.modules.map((moduleName, index) => {
                    const isExpanded = openAccordion === index;
                    return (
                      <div key={index} className="border-b border-gray-200 last:border-0">
                        {/* Header */}
                        <button
                          onClick={() => setOpenAccordion(isExpanded ? null : index)}
                          className="w-full py-4.5 px-5 bg-gray-50 flex items-center justify-between text-left focus:outline-none hover:bg-gray-100/70 border-b border-transparent font-bold text-sm text-[#1c1d1f]"
                        >
                          <div className="flex items-center gap-3">
                            <svg className={`w-3.5 h-3.5 text-gray-700 transition-transform duration-200 ${isExpanded ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                            <span>{moduleName}</span>
                          </div>
                          <span className="text-xs text-gray-500 font-normal">
                            5 lectures • {course.id === "web-development" ? "12h" : "8h"}
                          </span>
                        </button>

                        {/* Dropdown lectures details */}
                        {isExpanded && (
                          <div className="bg-white p-4.5 border-t border-gray-100 flex flex-col gap-3">
                            {[
                              "Introduction & Detailed Course Roadmap",
                              "Core Fundamentals & Theoretical Concepts Walkthrough",
                              "Live Practical Exercise & Step-by-Step Implementation",
                              "Troubleshooting Common Gotchas & Best Practices",
                              "Module Challenge Project & Senior Review Submission"
                            ].map((lecture, lIdx) => (
                              <div key={lIdx} className="flex items-start justify-between text-xs md:text-sm text-[#2d2f31]">
                                <div className="flex items-start gap-3">
                                  {/* Play/File Icon */}
                                  <svg className="w-4.5 h-4.5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="hover:underline cursor-pointer">{lecture}</span>
                                </div>
                                <span className="text-xs text-gray-400 whitespace-nowrap">02:30</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-xl font-extrabold text-[#1c1d1f] mb-4">Requirements</h2>
                <ul className="list-disc pl-5 text-xs md:text-sm text-[#2d2f31] space-y-2">
                  {course.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-extrabold text-[#1c1d1f] mb-4">Description</h2>
                <div className="text-xs md:text-sm text-[#2d2f31] leading-relaxed space-y-4">
                  <p>
                    Welcome to the <strong>{course.title}</strong>, the only course you need to learn, build, and master these in-demand practical skills. Designed specifically for job hunters, freelancers, and students looking for internship placement support.
                  </p>
                  <p>
                    Unlike standard tutorial series online, we structure each section around live assignments and portfolio-building projects. Every SkillUnbox course is available in both online and offline mode, with counselor sessions, WhatsApp guidance groups, and studio support for in-person task reviews.
                  </p>
                
                </div>
              </div>
              {/* Career Opportunities with specific SVGs */}
              <div>
                <h2 className="text-xl font-extrabold text-[#1c1d1f] mb-4">Featured Career Paths</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.careerOpportunities.map((opp, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-violet-300 hover:bg-violet-50/5 transition-all flex items-start gap-4">
                      <span className="p-2 bg-white rounded-xl shadow-sm flex-shrink-0 mt-0.5">
                        {getCareerIcon(opp)}
                      </span>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900 leading-snug">{opp}</h4>
                        <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block mt-1">Hiring Opportunities Available</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Course enrollment card */}
            <div className="order-1 lg:order-2 w-full lg:w-[360px] lg:z-30 lg:px-4">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden lg:sticky lg:top-24 lg:-mt-[280px] z-30">
                
                {/* 1. Course cover image */}
                <div className="bg-slate-950 p-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src={course.imageUrl}
                      alt={`${course.title} cover`}
                      fill
                      sizes="(min-width: 1024px) 328px, 100vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* 2. Enrollment / Pricing contents */}
                <div className="p-6">
                  {/* Primary Enroll CTA */}
                  <Link
                    href={`/admission-registration?course=${course.slug}`}
                    className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-extrabold text-sm rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-98"
                  >
                    Enroll / Register Now
                  </Link>

                  {/* Guarantee Text */}
                  <p className="text-[10px] text-gray-400 text-center leading-relaxed mb-6 font-semibold uppercase tracking-wider">
                    Full Support & Call-back Counseling Guaranteed
                  </p>

                  {/* What's included checklist */}
                  <div>
                    <h4 className="font-extrabold text-sm text-gray-900 mb-3.5 font-sans">This program includes:</h4>
                    <ul className="flex flex-col gap-3 text-xs text-gray-700">
                      
                      <li className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>80+ Hours of Live Practical Work</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>15+ Real Industry Assignments</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span>Portfolio Showcase Projects</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6a13.978 13.978 0 001.035 5.307m12.396-1.127A13.916 13.916 0 0015 11V5a2 2 0 00-2-2h-2M15 11c0 3.517 1.009 6.799 2.753 9.571" />
                        </svg>
                        <span>Professional Certificate on Completion</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <span>Direct 1-on-1 Mentor Support</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Lifetime Access to Studio Sessions</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Online &amp; Offline Live Classes</span>
                      </li>

                    </ul>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
