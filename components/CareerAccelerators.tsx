"use client";

import Image from "next/image";
import { CareerAccelerator } from "../types";

const ACCELERATORS: CareerAccelerator[] = [
  {
    id: "acc-1",
    title: "Cloud Engineer",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop", // pink-haired woman
    bgGradient: "from-[#0f766e] to-[#14b8a6]", // Green/teal gradient
    iconBg: "bg-teal-500/20",
    iconColor: "text-teal-200",
    rating: 4.7,
    ratingsCount: "330K",
    duration: "29 total hours",
    themeColor: "#14b8a6",
  },
  {
    id: "acc-2",
    title: "Data Scientist",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop", // young man with glasses
    bgGradient: "from-[#a21caf] to-[#ec4899]", // Pink/purple gradient
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-200",
    rating: 4.5,
    ratingsCount: "227K",
    duration: "47.1 total hours",
    themeColor: "#ec4899",
  },
  {
    id: "acc-3",
    title: "Digital Marketer",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop", // smiling woman
    bgGradient: "from-[#4c1d95] to-[#8b5cf6]", // Deep purple/indigo gradient
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-200",
    rating: 4.6,
    ratingsCount: "4K",
    duration: "28.4 total hours",
    themeColor: "#8b5cf6",
  },
];

export default function CareerAccelerators() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 md:px-6 lg:px-8" aria-labelledby="accelerators-heading">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2
            id="accelerators-heading"
            className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2"
          >
            Ready to reimagine your career?
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Get the skills and real-world experience employers want with Career Accelerators.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {ACCELERATORS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white border border-gray-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#5624d0]"
            >
              {/* Graphic Banner */}
              <div className={`relative h-48 w-full bg-gradient-to-tr ${item.bgGradient} flex items-end justify-between px-6 pt-6 overflow-hidden`}>
                
                {/* SVG Illustration Left side */}
                <div className="w-1/2 h-full flex items-center justify-start pb-4 opacity-90 select-none">
                  {item.id === "acc-1" && (
                    /* Cloud SVG */
                    <svg
                      className="w-24 h-24 text-emerald-300/40 stroke-current stroke-[1.5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                      />
                    </svg>
                  )}

                  {item.id === "acc-2" && (
                    /* Data Bar Chart SVG */
                    <svg
                      className="w-24 h-24 text-pink-300/40 stroke-current stroke-[1.5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 18.375v-5.25zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-9.75zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>
                  )}

                  {item.id === "acc-3" && (
                    /* Smartphone SVG */
                    <svg
                      className="w-20 h-20 text-purple-300/40 stroke-current stroke-[1.5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  )}
                </div>

                {/* Avatar Overlay Right side */}
                <div className="w-1/2 h-full relative overflow-hidden flex items-end">
                  <div className="w-32 h-36 relative rounded-t-xl overflow-hidden shadow-sm mx-auto">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="128px"
                      className="object-cover object-top select-none"
                    />
                  </div>
                </div>
              </div>

              {/* Card Footer Text & Badges */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  <a
                    href={`#accelerator-${item.id}`}
                    className="focus:outline-none focus:underline hover:text-[#5624d0] transition-colors"
                  >
                    {item.title}
                  </a>
                </h3>

                {/* Badges Info */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="inline-flex items-center text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded gap-1">
                    <svg
                      className="w-3.5 h-3.5 fill-current text-amber-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {item.rating}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                    {item.ratingsCount} ratings
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="flex justify-start">
          <a
            href="#all-accelerators"
            className="group inline-flex items-center text-sm font-bold text-[#5624d0] hover:text-[#401b9c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5624d0] rounded"
          >
            All Career Accelerators
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
