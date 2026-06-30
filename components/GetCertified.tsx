"use client";

export default function GetCertified() {
  return (
    <section id="certified" className="w-full bg-white py-16 px-4 md:px-6 lg:px-8" aria-labelledby="certified-heading">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#1e2229] rounded-3xl p-8 md:p-12 lg:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          
          {/* Background glowing gradients */}
          <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[200%] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_60%)] pointer-events-none" />

          {/* Left Column: text and CTA */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center z-10">
            <h2
              id="certified-heading"
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight"
            >
              Get certified and get ahead in your career
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.
            </p>
            <a
              href="#explore-certs"
              className="group inline-flex items-center text-sm font-bold text-white hover:text-purple-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded"
            >
              Explore certifications and vouchers
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Column: 3 Card Badges */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-6 z-10">
            
            {/* Card 1: CompTIA */}
            <div className="bg-[#2c323f] p-5 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all flex flex-col justify-between">
              
              {/* Badge Visuals Container */}
              <div className="relative h-24 bg-[#3b4354] rounded-xl mb-4 overflow-hidden p-2 flex flex-wrap gap-2 items-center justify-center select-none">
                {/* Red Circular stamps */}
                <div className="w-9 h-9 rounded-full bg-white border border-red-500 flex items-center justify-center text-[7px] text-red-600 font-extrabold rotate-6">
                  Sec+
                </div>
                <div className="w-9 h-9 rounded-full bg-white border border-red-500 flex items-center justify-center text-[7px] text-red-600 font-extrabold -rotate-12">
                  A+
                </div>
                <div className="w-9 h-9 rounded-full bg-white border border-red-500 flex items-center justify-center text-[7px] text-red-600 font-extrabold rotate-12">
                  Net+
                </div>
                <div className="w-9 h-9 rounded-full bg-white border border-red-500 flex items-center justify-center text-[6px] text-red-600 font-extrabold -rotate-6">
                  Linux+
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">CompTIA</h3>
                <p className="text-xs text-gray-400">Cloud, Networking, Cybersecurity</p>
              </div>
            </div>

            {/* Card 2: AWS */}
            <div className="bg-[#2c323f] p-5 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all flex flex-col justify-between">
              
              {/* Badge Visuals Container */}
              <div className="relative h-24 bg-[#3b4354] rounded-xl mb-4 overflow-hidden p-2 flex flex-wrap gap-1.5 items-center justify-center select-none">
                {/* Blue AWS Hexagons */}
                <div className="w-9 h-10 bg-sky-600 border border-sky-400 flex items-center justify-center text-[7px] text-white font-extrabold clip-path-hex rotate-12">
                  Arch
                </div>
                <div className="w-9 h-10 bg-sky-600 border border-sky-400 flex items-center justify-center text-[7px] text-white font-extrabold clip-path-hex -rotate-12">
                  Dev
                </div>
                <div className="w-9 h-10 bg-sky-600 border border-sky-400 flex items-center justify-center text-[7px] text-white font-extrabold clip-path-hex">
                  SysOps
                </div>
                <div className="w-9 h-10 bg-sky-600 border border-sky-400 flex items-center justify-center text-[6px] text-white font-extrabold clip-path-hex rotate-6">
                  Cloud
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">AWS</h3>
                <p className="text-xs text-gray-400">Cloud, AI, Coding, Networking</p>
              </div>
            </div>

            {/* Card 3: PMI */}
            <div className="bg-[#2c323f] p-5 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all flex flex-col justify-between">
              
              {/* Badge Visuals Container */}
              <div className="relative h-24 bg-[#3b4354] rounded-xl mb-4 overflow-hidden p-2 flex flex-wrap gap-2 items-center justify-center select-none">
                {/* Purple circular badges */}
                <div className="w-9 h-9 rounded-full bg-indigo-950 border border-indigo-500 flex items-center justify-center text-[7px] text-indigo-200 font-extrabold -rotate-12">
                  PMP
                </div>
                <div className="w-9 h-9 rounded-full bg-teal-950 border border-teal-500 flex items-center justify-center text-[7px] text-teal-200 font-extrabold rotate-12">
                  RMP
                </div>
                <div className="w-9 h-9 rounded-full bg-violet-950 border border-violet-500 flex items-center justify-center text-[7px] text-violet-200 font-extrabold">
                  CAPM
                </div>
                <div className="w-9 h-9 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center text-[6px] text-cyan-200 font-extrabold -rotate-6">
                  ACP
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">PMI</h3>
                <p className="text-xs text-gray-400">Project & Program Management</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Hexagon clip style helper inside React element */}
      <style jsx global>{`
        .clip-path-hex {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  );
}
