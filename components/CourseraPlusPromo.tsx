"use client";

import Image from "next/image";

export default function CourseraPlusPromo() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-6 lg:px-8" aria-label="Promo Banner">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-gradient-to-r from-[#002f75] via-[#0056d2] to-[#0070f3] rounded-3xl p-8 md:p-12 lg:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden shadow-xl">
          
          {/* Abstract geometric background accents */}
          <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-pink-500/20 via-purple-500/10 to-transparent pointer-events-none skew-x-12" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl pointer-events-none" />

          {/* Left: promo text */}
          <div className="w-full md:w-3/5 z-10 flex flex-col justify-center">
            
            {/* Logo/Badge */}
            <div className="flex items-center gap-1.5 mb-5 select-none" aria-hidden="true">
              <span className="text-xl font-black tracking-tighter uppercase text-white">
                Skill<span className="text-sky-300">unbox</span>
              </span>
              <span className="bg-[#002f75] border border-sky-400 text-sky-300 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-widest">
                Plus
              </span>
            </div>

            {/* Tagline */}
            <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight mb-3">
              Time&apos;s on your side. Start turning minutes into milestones.
            </h2>

            {/* Desc */}
            <p className="text-sky-100 text-sm lg:text-base leading-relaxed mb-6 max-w-xl">
              In just seven days, you can move from short lessons to real skills. Ready to make today count?
            </p>

            {/* Button */}
            <a
              href="#get-discount"
              className="inline-flex items-center justify-center w-fit h-11 px-6 bg-white hover:bg-sky-50 text-[#0056d2] font-bold text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
            >
              Get 40% off
            </a>
          </div>

          {/* Right: face overlay */}
          <div className="w-full md:w-2/5 flex items-center justify-center relative z-10">
            {/* Pink angular backdrop */}
            <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] bg-gradient-to-tr from-pink-500 to-rose-400 rounded-3xl rotate-12 -z-10 shadow-lg" />
            
            <div className="relative w-[180px] h-[220px] sm:w-[230px] sm:h-[270px]">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop"
                alt="Student holding a tablet device"
                fill
                sizes="(max-width: 768px) 180px, 230px"
                className="object-cover rounded-2xl drop-shadow-lg select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
