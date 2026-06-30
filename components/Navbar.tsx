"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoBlack from "../app/skillunbox black.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-40" aria-label="Main Navigation">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Section: Logo */}
        <div className="flex items-center flex-1 min-w-0">
          <Link
            href="/"
            className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded"
          >
            <Image
              src={logoBlack}
              alt="Skill Unbox Logo"
              height={66}
              className="h-24 sm:h-24 md:h-38 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Mid Section: Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end">
          <Link
            href="/courses"
            className="text-sm font-bold text-gray-700 hover:text-primary transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            Our Courses
          </Link>

          <Link
            href="/why-us"
            className="text-sm font-bold text-gray-700 hover:text-primary transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            Why Skill Unbox
          </Link>

          <Link
            href="/about-us"
            className="text-sm font-bold text-gray-700 hover:text-primary transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-sm font-bold text-gray-700 hover:text-primary transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-3 lg:gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link
            href="/admission-registration"
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 flex flex-col gap-3 transition-transform duration-200 ease-in-out shadow-lg absolute w-full left-0">
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-gray-100 text-sm font-bold text-gray-800 hover:text-primary"
          >
            Our Courses
          </Link>
          <Link
            href="/why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-gray-100 text-sm font-bold text-gray-800 hover:text-primary"
          >
            Why Skill Unbox
          </Link>
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-gray-100 text-sm font-bold text-gray-800 hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 border-b border-gray-100 text-sm font-bold text-gray-800 hover:text-primary"
          >
            Contact Us
          </Link>
          <div className="flex gap-3 mt-2">
            <Link
              href="/admission-registration"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 h-11 bg-primary hover:bg-primary-hover text-white rounded font-bold text-sm flex items-center justify-center focus:outline-none"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
