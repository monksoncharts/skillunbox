import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-950 antialiased">
      <Navbar />

      <main className="relative flex flex-1 items-center overflow-hidden px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,102,255,0.12),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(0,180,255,0.12),transparent_28%)]" />
        <section className="relative mx-auto grid w-full max-w-[1180px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
              Page not found
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-normal text-slate-950 md:text-7xl">
              404
            </h1>
            <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              This page has not been unboxed yet.
            </h2>
            <p className="mt-5 max-w-lg text-sm font-medium leading-7 text-slate-600 md:text-base">
              The link may be outdated, moved, or typed incorrectly. Head back
              to SkillUnbox courses and keep exploring practical, job-ready
              training.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Explore Courses
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-7 text-sm font-extrabold text-slate-800 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl shadow-blue-600/15">
            <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(135deg,rgba(0,102,255,0.52),transparent_42%),radial-gradient(circle_at_72%_28%,rgba(0,180,255,0.34),transparent_32%)]" />
            <div className="relative w-full rounded-[26px] border-2 border-dashed border-white/30 p-7">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-white/12 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-cyan-200">
                  SkillUnbox
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-primary">
                  ?
                </span>
              </div>
              <p className="text-[5.5rem] font-black leading-none tracking-normal md:text-[7rem]">
                404
              </p>
              <p className="mt-4 text-sm font-semibold leading-6 text-white/72">
                The route you requested is outside the current course map.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
