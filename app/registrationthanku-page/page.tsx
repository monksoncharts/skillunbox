import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Registration Complete | SkillUnbox",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegistrationThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#eaf4ff] font-sans antialiased">
      <Navbar />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-12 md:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,102,255,0.13),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(255,255,255,0.75),transparent_32%)]" />
        <div className="pointer-events-none absolute left-4 top-10 hidden h-24 w-24 rounded-full border border-white/80 md:block" />
        <div className="pointer-events-none absolute bottom-8 right-8 hidden h-20 w-20 bg-[radial-gradient(circle,#8abfff_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-50 md:block" />

        <section className="relative grid w-full max-w-5xl items-center gap-8 rounded-[28px] border border-white/80 bg-white px-6 py-9 text-center shadow-[0_24px_80px_rgba(37,99,235,0.18)] md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-11">
          <div className="relative mx-auto flex h-48 w-full max-w-xs items-center justify-center md:h-64">
            <div className="absolute bottom-7 h-12 w-48 rounded-[50%] bg-blue-600/20 blur-sm" />
            <div className="absolute bottom-6 h-12 w-52 rounded-[50%] bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl" />
            <div className="absolute bottom-12 h-10 w-44 rounded-[50%] bg-blue-50" />
            <div className="relative flex h-36 w-28 items-center justify-center rounded-b-[26px] rounded-t-[18px] bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl before:absolute before:inset-3 before:rounded-b-[20px] before:rounded-t-[14px] before:border-2 before:border-white/45">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/80 text-4xl font-black text-white">
                ✓
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-md">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 shadow-[0_0_0_8px_rgba(37,99,235,0.08)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-2xl font-black text-white">
                ✓
              </div>
            </div>

            <p className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">
              Registration Complete
            </p>

            <h1 className="mt-2 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              Thank you for registering with{" "}
              <span className="text-blue-600">SkillUnbox.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-600">
              Your registration has been completed successfully. Our team will
              contact you soon for further information regarding your selected
              course.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 text-xs font-extrabold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Back to Home
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
