import Image from "next/image";
import Link from "next/link";

const heroBackgroundUrl =
  "https://res.cloudinary.com/dqaqxw8w8/image/upload/v1782722743/heroImg_c29lyp.webp";
const mobileHeroImageUrl =
  "https://res.cloudinary.com/dqaqxw8w8/image/upload/v1782726971/ChatGPT_Image_Jun_29_2026_02_43_16_PM_g7rtkd.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white px-4 py-10 md:flex md:min-h-[680px] md:items-center md:bg-slate-950 md:px-6 md:py-20 lg:px-8"
      aria-label="Introduction Banner"
    >
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: `url(${heroBackgroundUrl})` }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <div className="max-w-xl rounded-3xl p-0 md:p-8 lg:p-10">
          <span className="mb-4 inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary md:mb-5">
            Skill Unbox
          </span>
          <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-slate-950 md:mb-5 md:text-6xl">
            Unbox Skills.
            <br />
            <span className="text-primary">Unlock Success.</span>
          </h1>
          <p className="mb-6 text-sm leading-7 text-slate-600 md:mb-8 md:text-base">
            Skill Unbox is a professional skill development institute focused on
            practical, job-oriented training. Learn through hands-on projects,
            expert mentorship, and industry-relevant courses.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/admission-registration"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-lg transition-all hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Register For Admission
            </Link>
            <Link
              href="/#courses"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-slate-900 px-6 text-xs font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl md:hidden">
          <Image
            src={mobileHeroImageUrl}
            alt="Skill Unbox student with learning and technology elements"
            width={943}
            height={1678}
            sizes="100vw"
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
