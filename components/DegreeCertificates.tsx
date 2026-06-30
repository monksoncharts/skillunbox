"use client";

import { useState } from "react";
import Image from "next/image";
import { Degree } from "../types";

const DEGREES: Degree[] = [
  {
    id: "deg-1",
    universityName: "Indian Statistical Institute",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop", // generic logo
    degreeName: "Postgraduate Diploma in Applied Statistics",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-2",
    universityName: "Birla Institute of Technology & Science, Pilani",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Bachelor of Science in Computer Science",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-3",
    universityName: "Indian Institute of Technology Guwahati",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Bachelor of Science in Data Science & AI",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-4",
    universityName: "O.P. Jindal Global University",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Bachelor of Science in Psychology",
    imageUrl: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  // Extra degrees for expansion state (Show 8 more)
  {
    id: "deg-5",
    universityName: "University of London",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Bachelor of Science in Business Administration",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-6",
    universityName: "Illinois Institute of Technology",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Master of Data Science",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-7",
    universityName: "University of Colorado Boulder",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Master of Science in Computer Science",
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-8",
    universityName: "Macquarie University",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Master of Business Administration",
    imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-9",
    universityName: "Penn State University",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Master of Engineering in Systems Engineering",
    imageUrl: "https://images.unsplash.com/photo-1492538368577-8b5fd600d7b4?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-10",
    universityName: "University of Michigan",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Master of Applied Data Science",
    imageUrl: "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-11",
    universityName: "HEC Paris",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Master of Science in Innovation and Entrepreneurship",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
  {
    id: "deg-12",
    universityName: "University of North Texas",
    universityLogoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    degreeName: "Bachelor of Applied Arts and Sciences",
    imageUrl: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=400&auto=format&fit=crop",
    type: "Degree",
  },
];

export default function DegreeCertificates() {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedDegrees = isExpanded ? DEGREES : DEGREES.slice(0, 4);

  return (
    <section className="w-full bg-white py-12 px-4 md:px-6 lg:px-8 border-t border-gray-100" aria-labelledby="degree-heading">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Title */}
        <h2
          id="degree-heading"
          className="text-2xl font-bold text-gray-900 tracking-tight mb-8"
        >
          Earn Your Degree
        </h2>

        {/* Degrees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedDegrees.map((deg) => (
            <div
              key={deg.id}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#5624d0]"
            >
              {/* Cover Campus Photo */}
              <div className="relative h-44 w-full">
                <Image
                  src={deg.imageUrl}
                  alt={deg.universityName}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover"
                />
              </div>

              {/* Card Contents */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                
                {/* University Logo and Name */}
                <div className="flex items-start gap-3 mb-4">
                  {/* Decorative box for university Logo */}
                  <span className="w-8 h-8 rounded border border-gray-200 bg-gray-50 flex items-center justify-center font-bold text-[#5624d0] text-xs flex-shrink-0">
                    {deg.universityName.charAt(0)}
                  </span>
                  <div className="text-xs text-gray-500 font-medium leading-tight">
                    {deg.universityName}
                  </div>
                </div>

                {/* Degree Name */}
                <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#5624d0] transition-colors mb-4 flex-1">
                  <a
                    href={`#degree-${deg.id}`}
                    className="focus:outline-none focus:underline"
                  >
                    {deg.degreeName}
                  </a>
                </h3>

                {/* Status Badges */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-xs font-semibold text-[#0d5257] bg-[#e6f4f5] px-2 py-1 rounded w-fit gap-1 select-none">
                    {/* Tiny Cap outline */}
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    Earn a degree
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium pl-1">
                    {deg.type}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Expand / Contract trigger */}
        <div className="flex justify-start">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center justify-center h-11 px-6 border border-[#5624d0] hover:bg-[#efe6fa] text-[#5624d0] font-bold text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#5624d0]"
          >
            {isExpanded ? "Show less" : `Show ${DEGREES.length - 4} more`}
          </button>
        </div>

      </div>
    </section>
  );
}
