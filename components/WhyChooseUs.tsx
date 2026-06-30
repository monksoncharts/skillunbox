"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  const whatWeDoList = [
    {
      title: "Real Industry Projects",
      description: "Gain hands-on experience by working on projects modeled after actual industry challenges.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Practical Assignments",
      description: "Apply your knowledge immediately with weekly homework and tasks reviewed by seniors.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Live Training Sessions",
      description: "Learn in real-time, ask questions instantly, and clear doubts face-to-face with professionals.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Portfolio Building",
      description: "Create a rich, presentable portfolio of work that speaks louder than a text-only resume.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Mentor Guidance",
      description: "Receive regular feedback, visual advice, and strategic suggestions from seasoned engineers.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const whyChooseUsList = [
    {
      title: "Industry-Oriented Curriculum",
      desc: "Learn in-demand skills aligned with real-world industry needs.",
      icon: "M12 14 21 9l-9-5-9 5 9 5Zm19 10v6m-4-4h8M5 11v5c0 2 3 4 7 4s7-2 7-4v-5",
    },
    {
      title: "Live Practical Training",
      desc: "Gain hands-on experience through live projects and practical sessions.",
      icon: "M4 5h16v11H4V5Zm7 14h2m-5 0h8m-6-9 5 3-5 3v-6Z",
    },
    {
      title: "Expert Mentorship",
      desc: "Learn from industry experts who guide you at every step.",
      icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0",
    },
    {
      title: "Portfolio Development",
      desc: "Build real-world projects that showcase your skills to employers.",
      icon: "M10 6h4l1 2h5v11H4V8h5l1-2Zm2 5v4m-2-2h4",
    },
    {
      title: "Internship Support",
      desc: "Get help and opportunities to kickstart your career with internships.",
      icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 10.5-6.06M18 15v6m3-3h-6",
    },
    {
      title: "Freelancing Guidance",
      desc: "Learn how to find clients, build your brand, and grow as a freelancer.",
      icon: "M5 19c4-1 8-4 10-8l4-6-6 4c-4 2-7 6-8 10Zm8-8 4 4",
    },
    {
      title: "Job-Oriented Courses",
      desc: "Courses designed to prepare you for high-paying job opportunities.",
      icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm4-9h-4V8m0 4-3 3",
    },
    {
      title: "Certification on Completion",
      desc: "Earn a recognized certificate to validate your skills and boost your career.",
      icon: "M6 3h12v10H6V3Zm4 14 2-2 2 2v4l-2-1-2 1v-4Zm-1-9h6m-6 3h4",
    },
  ];

  return (
    <section id="why-us" className="w-full bg-[#f8fafc] py-12 md:py-24 px-4 md:px-6 lg:px-8 border-t border-b border-gray-150">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section 1: What We Do */}
        <div className="mb-14 md:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-wider text-[#5624d0] mb-3">What We Do</h2>
            <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Learning is Practical, Not Theoretical
            </h3>
            <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base leading-6 md:leading-7">
              At Skill Unbox, we focus on helping you master the tools and strategies that actual companies use. 
              Skip the dry slides and build real products.
            </p>
          </div>

          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5">
            {whatWeDoList.map((item, index) => (
              <div 
                key={index} 
                className="min-w-[78%] bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 sm:min-w-[48%] md:min-w-0 md:p-6"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 md:mb-5">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-[15px] md:text-base mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-5 md:leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Why Skill Unbox */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white px-0 py-10 md:px-8 md:py-14">
          <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-primary-light/70 blur-2xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-primary-light/80 blur-2xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="mb-5 inline-block h-1.5 w-10 rounded-full bg-primary" />
            <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Why Students Choose
              <span className="block text-primary">Skill Unbox</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-6 md:leading-7">
              We provide the ecosystem, resources, and mentorship you need to
              move from a learner to an industry-ready professional.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 items-stretch gap-5 rounded-[1.75rem] bg-white p-4 shadow-xl ring-1 ring-slate-200 md:grid-cols-[1fr_1fr] md:gap-6 md:p-6 lg:grid-cols-[1.04fr_1fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-primary-light md:min-h-full">
              <Image
                src="/images/why-us-girl-student.png"
                alt="Skill Unbox girl student learning with practical technology tools"
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-cover object-bottom"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
              {whyChooseUsList.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-primary-border hover:shadow-md"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d={item.icon}
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[15px] font-black leading-snug text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
