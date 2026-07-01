"use client";

import Link from "next/link";
import Image from "next/image";
import logoWhite from "../app/skillunbox white (1).png";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#1c1d1f] text-gray-300 pt-16 pb-8 px-4 md:px-6 lg:px-8 relative" role="contentinfo">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Skill Unbox About & Logo */}
          <div>
            <div className="mb-5">
              <Image
                src={logoWhite}
                alt="Skill Unbox Logo"
                height={66}
                className="h-28 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Skill Unbox is a professional skill development institute focused on practical, job-oriented training. We help students turn their learning into successful careers.
            </p>
            <div className="text-xs text-gray-400">
              <span className="font-bold text-white">Tagline:</span> Unbox Skills. Unlock Success.
            </div>
          </div>

          {/* Column 2: Popular Programs */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Our Programs</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Digital Marketing Mastery", slug: "digital-marketing-mastery" },
                { name: "Professional Video Editing", slug: "professional-video-editing" },
                { name: "Graphic Designing Professional", slug: "graphic-designing-professional" },
                { name: "Full Stack Web Development", slug: "full-stack-web-development" },
                { name: "AI Automation & Productivity", slug: "ai-automation-productivity-expert" },
                { name: "Media Production & Studio", slug: "media-production-content-studio" },
              ].map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`/courses/${link.slug}`}
                    className="text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Quick Navigation</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Explore Courses", path: "/courses" },
                { name: "Why Skill Unbox", path: "/why-us" },
                { name: "About Us", path: "/about-us" },
                { name: "Register Now", path: "/admission-registration" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Contact Us</h3>
              <ul className="flex flex-col gap-3 text-xs text-gray-400">
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    H.N 120, Joshi Khola, New ITI Near Dhanmil,<br />
                    Haldwani, Uttarakhand, India
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:learning@skillunbox.io" className="hover:text-white transition-colors">
                    learning@skillunbox.io
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="https://wa.me/917248762290" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +91 72487 62290 (WhatsApp)
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Social media section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Skill Unbox. All rights reserved.
          </p>

          {/* Social media icons */}
          <div className="flex items-center gap-4">
            {[
              {
                name: "Facebook",
                href: "https://www.facebook.com/people/Skill-Unbox/61591200493322/",
                path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"
              },
              {
                name: "LinkedIn",
                href: "#social-linkedin",
                path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
              },
              {
                name: "YouTube",
                href: "#social-youtube",
                path: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              },
              {
                name: "Instagram",
                href: "https://www.instagram.com/skillunbox_?igsh=bnR1bG9jYTdmeTBl",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-gray-500 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2"
                aria-label={`Visit our ${social.name} page`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
