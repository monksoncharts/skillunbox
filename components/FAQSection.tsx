"use client";

import { useState } from "react";
import { FAQItem } from "../types";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What makes Skill Unbox different from other institutes?",
    answer: "At Skill Unbox, our teaching methodology is entirely practical and project-driven. We do not focus on dry slides or rote memorization. Instead, you learn by doing—building professional projects, creating a job-ready portfolio, and receiving direct mentorship from industry experts.",
  },
  {
    id: "faq-2",
    question: "Where is the Skill Unbox institute located?",
    answer: "Our physical institute is located in Haldwani at H.N 120, Joshi Khola, New ITI Near Dhanmil, Haldwani, Uttarakhand, India. You are always welcome to visit us, check out our content studio, and consult with our mentors.",
  },
  {
    id: "faq-3",
    question: "Do you offer placement or internship support?",
    answer: "Absolutely. We provide dedicated internship support, help you build a professional portfolio, guide you through interview preparations, and teach you how to start freelancing on platforms like Upwork, Fiverr, and LinkedIn.",
  },
  {
    id: "faq-4",
    question: "Will I get a certificate on course completion?",
    answer: "Yes, you will receive a professional completion certificate from Skill Unbox once you successfully finish all course modules, assignments, and your final capstone project.",
  },
  {
    id: "faq-5",
    question: "Are these courses suitable for beginners?",
    answer: "Yes! All our courses start from the absolute basics. You do not need any prior technical experience. Our mentors will guide you step-by-step from foundational concepts to advanced, industry-relevant practices.",
  },
  {
    id: "faq-6",
    question: "How can I register or enroll in a course?",
    answer: "You can click on the 'Register Now' button on our header or course cards, fill out the simple admission registration form with your contact details, and our team will get in touch with you via phone or WhatsApp within 24 hours.",
  },
];

export default function FAQSection() {
  const [expandedFAQId, setExpandedFAQId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedFAQId(expandedFAQId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4 md:px-6 lg:px-8 border-t border-gray-150" aria-labelledby="faq-heading">
      <div className="max-w-[800px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase font-extrabold tracking-wider text-[#5624d0] mb-3">FAQ</h2>
          <h3
            id="faq-heading"
            className="text-3xl font-extrabold text-gray-900 tracking-tight"
          >
            Frequently Asked Questions
          </h3>
        </div>

        {/* Accordion List */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = expandedFAQId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border-b border-gray-200 last:border-0 transition-all duration-300 ${
                  isOpen ? "bg-violet-50/10" : "hover:bg-gray-50/50"
                }`}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-5 px-6 flex items-center text-left text-sm font-bold text-gray-800 focus:outline-none focus:text-[#5624d0] group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  {/* Chevron on the Left */}
                  <svg
                    className={`w-4.5 h-4.5 mr-3 flex-shrink-0 text-gray-400 group-hover:text-[#5624d0] transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-[#5624d0]" : "transform -rotate-90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>{faq.question}</span>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={faq.id}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <div className="py-4 px-6 pl-13 text-xs md:text-sm text-gray-600 leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
