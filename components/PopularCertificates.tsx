"use client";

import { useState } from "react";
import Image from "next/image";
import { Certificate } from "../types";

const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Google AI",
    provider: "Google",
    logoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
    badges: ["New"],
    type: "Professional Certificate",
  },
  {
    id: "cert-2",
    title: "Google IT Support",
    provider: "Google",
    logoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial", "AI skills"],
    type: "Professional Certificate",
  },
  {
    id: "cert-3",
    title: "Google IT Automation with Python",
    provider: "Google",
    logoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial"],
    type: "Professional Certificate",
  },
  {
    id: "cert-4",
    title: "Google Cybersecurity",
    provider: "Google",
    logoUrl: "https://images.unsplash.com/photo-1594818821905-183685fbe524?q=80&w=50&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial", "AI skills"],
    type: "Professional Certificate",
  },
  // Extra certificates for the expanded state
  {
    id: "cert-5",
    title: "Meta Front-End Developer",
    provider: "Meta",
    logoUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial"],
    type: "Professional Certificate",
  },
  {
    id: "cert-6",
    title: "Meta Back-End Developer",
    provider: "Meta",
    logoUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial"],
    type: "Professional Certificate",
  },
  {
    id: "cert-7",
    title: "IBM Data Science",
    provider: "IBM",
    logoUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial", "AI skills"],
    type: "Professional Certificate",
  },
  {
    id: "cert-8",
    title: "IBM Cybersecurity Analyst",
    provider: "IBM",
    logoUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial"],
    type: "Professional Certificate",
  },
  {
    id: "cert-9",
    title: "Salesforce Sales Operations",
    provider: "Salesforce",
    logoUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial"],
    type: "Professional Certificate",
  },
  {
    id: "cert-10",
    title: "Microsoft Power BI Data Analyst",
    provider: "Microsoft",
    logoUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial"],
    type: "Professional Certificate",
  },
  {
    id: "cert-11",
    title: "Intuit Bookkeeping",
    provider: "Intuit",
    logoUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial"],
    type: "Professional Certificate",
  },
  {
    id: "cert-12",
    title: "AWS Cloud Solutions Architect",
    provider: "AWS",
    logoUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
    badges: ["Free Trial", "AI skills"],
    type: "Professional Certificate",
  },
];

export default function PopularCertificates() {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedCerts = isExpanded ? CERTIFICATES : CERTIFICATES.slice(0, 4);

  return (
    <section className="w-full bg-[#f8fafc] py-12 px-4 md:px-6 lg:px-8 border-t border-gray-100" aria-labelledby="certs-heading">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Heading */}
        <h2
          id="certs-heading"
          className="text-2xl font-bold text-gray-900 tracking-tight mb-8"
        >
          Most Popular Certificates
        </h2>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#5624d0]"
            >
              
              {/* Cover Banner Image with Badges */}
              <div className="relative h-44 w-full">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover object-center select-none"
                />

                {/* Floating tags top left */}
                <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                  {cert.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-sm select-none ${
                        badge === "New"
                          ? "bg-amber-500 text-white"
                          : badge === "AI skills"
                          ? "bg-[#efe6fa] text-[#5624d0] border border-purple-200"
                          : "bg-white text-gray-800 border border-gray-200"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Branding text/logo overlay bottom center */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-[2px] text-white text-[10px] font-semibold px-2 py-1 rounded select-none">
                  {cert.provider} Professional Certificate
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                
                {/* Brand label & title */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1 select-none">
                    <span className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center text-[10px] border border-gray-200 font-bold text-[#5624d0]">
                      {cert.provider.charAt(0)}
                    </span>
                    {cert.provider}
                  </div>

                  <h3 className="text-[15px] font-bold text-gray-900 leading-snug group-hover:text-[#5624d0] transition-colors line-clamp-2">
                    <a
                      href={`#cert-${cert.id}`}
                      className="focus:outline-none focus:underline"
                    >
                      {cert.title}
                    </a>
                  </h3>
                </div>

                {/* Bottom detail row */}
                <div className="flex flex-col gap-1.5 mt-auto">
                  {cert.id !== "cert-1" && (
                    <div className="flex items-center text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded w-fit select-none">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      Build toward a degree
                    </div>
                  )}
                  <span className="text-[11px] font-medium text-gray-400 pl-1 select-none">
                    {cert.type}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Show More Trigger */}
        <div className="flex justify-start">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center justify-center h-11 px-6 border border-[#5624d0] hover:bg-[#efe6fa] text-[#5624d0] font-bold text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#5624d0]"
          >
            {isExpanded ? "Show less" : `Show ${CERTIFICATES.length - 4} more`}
          </button>
        </div>

      </div>
    </section>
  );
}
