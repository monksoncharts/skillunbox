"use client";

import { useState } from "react";

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      role="banner"
      className="w-full bg-[#d2f4ea] text-[#1c1d1f] py-2 px-6 text-sm flex items-center justify-between font-medium select-none border-b border-[#a7ebd0]"
    >
      <div className="flex-1 text-center pr-4">
        <span>
          🚀 Admissions Open for 2026 Batches! |{" "}
          <a
            href="/admission-registration"
            className="underline hover:text-[#5624d0] transition-colors font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5624d0]"
          >
            Enroll Now to Secure Your Seat & Unlock Success.
          </a>
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss banner"
        className="text-[#1c1d1f] hover:text-[#5624d0] transition-colors p-1 rounded-full hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5624d0]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
