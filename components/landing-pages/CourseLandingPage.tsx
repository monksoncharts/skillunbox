"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Course } from "@/types";
import Footer from "@/components/Footer";

type LandingFormData = {
  name: string;
  email: string;
  phone: string;
  education: string;
};

type CourseLandingPageProps = {
  course: Course;
};

const mobileHeroImage =
  "https://res.cloudinary.com/dqaqxw8w8/image/upload/v1782801050/course_cover_img_3_wtjsgx.webp";

const featureCards = [
  {
    title: "Practical & Project Based",
    text: "Real campaigns, case studies & hands-on learning",
    step: "01",
    icon: "M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",
  },
  {
    title: "Live Support",
    text: "Mentor guidance and doubt resolution",
    step: "02",
    icon: "M18 10a6 6 0 0 0-12 0v3a2 2 0 0 0 2 2h1v-5H7a5 5 0 0 1 10 0h-2v5h1a2 2 0 0 0 2-2v-3z",
  },
  {
    title: "Portfolio Ready",
    text: "Build job-ready projects for your resume",
    step: "03",
    icon: "M4 7h16v12H4z M8 7V5h8v2 M8 13h8",
  },
  {
    title: "Career Support",
    text: "Resume reviews, interview prep, & placement help",
    step: "04",
    icon: "M17 21v-2a4 4 0 0 0-8 0v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  },
];

const gains = [
  ["Digital Marketing Mastery", "Learn SEO, Google Ads, Social Media, Content Marketing, Email & more."],
  ["100% Hands-on Learning", "Practical classes, live campaigns, tools training & real-time practice."],
  ["6 Month Duration", "Well-structured 6-month program with weekly learning milestones."],
  ["Live Work on Industry Projects", "Work on live projects from real budgets & real campaigns."],
  ["Build Real-life Projects", "Create case studies & portfolio projects that prove your skills."],
];

const faqs = [
  [
    "What is the duration of the digital marketing course?",
    "The course duration is 6 months with a well-structured curriculum, weekly sessions, and practical assignments to ensure hands-on learning.",
  ],
  ["Are classes live or recorded?", "Classes are live with mentor support, and important learning material is shared for revision."],
  ["Will I get hands-on projects?", "Yes. You will work on campaign planning, ads, SEO tasks, content calendars, reporting, and portfolio projects."],
  ["Do I get a certificate after completion?", "Yes. You receive a SkillUnbox completion certificate after finishing the required modules and projects."],
  ["Is placement support included?", "Yes. Resume guidance, interview preparation, and career support are included."],
];

export default function CourseLandingPage({ course }: CourseLandingPageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<LandingFormData>({
    name: "",
    email: "",
    phone: "",
    education: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const shortTitle = useMemo(
    () => course.title.replace("Program", "").trim(),
    [course.title],
  );

  const scrollToForm = () => {
    document.getElementById("enroll-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (formData.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!/^\+?[0-9\s-]{10,16}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (formData.education.trim().length < 2) {
      nextErrors.education = "Please enter your education details.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setServerError("");
      return;
    }

    setErrors({});
    setServerError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          education: formData.education.trim(),
          courseSlug: course.slug,
          mode: "offline",
          comments: `Landing page enrollment for ${course.title}`,
          sourcePage: "digital-marketing-landing",
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string; issues?: Record<string, string[]> }
        | null;

      if (!response.ok) {
        if (data?.issues) {
          setErrors(
            Object.fromEntries(
              Object.entries(data.issues).map(([key, value]) => [
                key,
                value?.[0] || "Please check this field.",
              ]),
            ),
          );
        }
        throw new Error(data?.error || "Unable to submit the form.");
      }

      router.push("/registrationthanku-page");
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Unable to submit right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-20 font-sans text-slate-950 antialiased md:pb-0">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:px-6 lg:px-8">
        <div className="mx-auto flex h-16 max-w-[1340px] items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <Image
              src="/logo-square.png"
              alt=""
              width={42}
              height={42}
              className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
              priority
            />
            <span className="truncate text-xl font-black text-slate-950 sm:text-2xl">
              Skill<span className="text-primary">Unbox</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-black text-slate-950 lg:flex">
            <a href="/courses" className="transition hover:text-primary">Our Courses</a>
            <a href="/why-us" className="transition hover:text-primary">Why Skill Unbox</a>
            <a href="/about-us" className="transition hover:text-primary">About Us</a>
            <a href="/contact" className="transition hover:text-primary">Contact Us</a>
          </nav>

          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-primary px-4 text-xs font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:h-11 sm:px-5 sm:text-sm"
          >
            Register Now
          </button>
        </div>
      </header>

      <button
        type="button"
        onClick={scrollToForm}
        className="fixed bottom-5 left-5 z-50 hidden h-12 min-w-36 rounded-full bg-primary px-6 text-sm font-black text-white shadow-2xl shadow-blue-600/30 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:inline-flex md:items-center md:justify-center"
      >
        Enroll Now
      </button>

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <button
          type="button"
          onClick={scrollToForm}
          className="flex h-14 w-full items-center justify-between rounded-2xl bg-gradient-to-r from-primary to-cyan-500 px-5 text-left text-white shadow-[0_18px_44px_rgba(0,102,255,0.35)] ring-1 ring-white/30 transition active:scale-[0.99]"
        >
          <span>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-white/80">
              Start Your Journey
            </span>
            <span className="block text-base font-black">Enroll Now</span>
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-base font-black text-primary shadow-md">
            -&gt;
          </span>
        </button>
      </div>

      <main id="top">
        <section className="relative overflow-hidden bg-white px-4 py-7 md:min-h-[690px] md:px-6 md:py-12 lg:min-h-[720px] lg:px-8">
          <div
            className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
            style={{ backgroundImage: "url('/images/landing-digital-hero.png')" }}
          />
          <div className="absolute inset-0 hidden bg-white/25 md:block lg:bg-transparent" />

          <div className="relative mx-auto flex max-w-[1340px] items-center md:min-h-[610px] lg:min-h-[640px]">
            <div className="landing-animate-up w-full max-w-[580px] md:max-w-[600px]">
              <h1 className="max-w-[560px] text-[2.25rem] font-black uppercase leading-[1.08] tracking-normal text-slate-950 sm:text-[2.9rem] lg:text-[3.35rem]">
                Master <span className="text-primary">Digital Marketing</span>
              </h1>
              <p className="mt-5 max-w-[520px] text-sm font-medium leading-7 text-slate-600 md:text-[15px]">
                {course.overview}
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex h-[52px] items-center justify-center gap-4 rounded-lg bg-primary px-8 text-base font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-primary-hover"
                >
                  Enroll Now
                  <span aria-hidden="true">-&gt;</span>
                </button>
               
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <div className="flex -space-x-3">
                  {[
                    "https://i.pinimg.com/1200x/54/8f/78/548f7801e40c44e993190f1593634650.jpg",
                    "https://i.pinimg.com/736x/f1/fb/52/f1fb5203d9de2b9f6a3a470afb8e3206.jpg",
                    "https://i.pinimg.com/736x/69/de/82/69de828d0c2827d7a1a22e575316a4bc.jpg",
                    "https://i.pinimg.com/1200x/39/dc/d1/39dcd11c0bc771b34097897951423c8f.jpg",
                  ].map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`SkillUnbox learner ${index + 1}`}
                      className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xl leading-none text-amber-400">*****</p>
                  <p className="mt-2 text-base font-black text-slate-950">4.8/5</p>
                  <p className="text-sm font-semibold text-slate-500">
                    Trusted by 5,000+ students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-8 md:hidden">
          <div className="landing-animate-up-delay mx-auto max-w-[520px] overflow-hidden rounded-[28px] border border-blue-100 bg-blue-50 shadow-sm">
            <Image
              src={mobileHeroImage}
              alt={`${course.title} mobile visual`}
              width={900}
              height={650}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="px-4 pb-8 md:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1340px] gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="group relative flex min-h-[122px] items-center gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(0,102,255,0.13)] active:scale-[0.99]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-200 opacity-0 transition group-hover:opacity-100" />
                <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-primary shadow-inner transition group-hover:scale-105">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-[10px] font-black text-white shadow-md">
                    {card.step}
                  </span>
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-primary">
                    Step {card.step}
                  </p>
                  <h2 className="mt-1 text-sm font-black text-slate-950">{card.title}</h2>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-7 md:px-6 lg:px-8">
          <div
            className="relative mx-auto grid max-w-[1340px] overflow-hidden rounded-[28px] bg-blue-50 p-0 md:min-h-[460px] md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10"
          >
            <div
              className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
              style={{ backgroundImage: "url('/images/landing-digital-support.png')" }}
            />
            <div className="relative block aspect-[16/10] w-full overflow-hidden rounded-[28px] md:hidden">
              <Image
                src="/images/landing-digital-support.png"
                alt="Digital marketing student project visual"
                fill
                sizes="100vw"
                className="object-cover object-left"
              />
            </div>
            <div className="hidden lg:block" />
            <div className="landing-animate-up-delay relative m-0 rounded-[24px] bg-white p-6 shadow-sm md:bg-white/86 md:p-8 md:backdrop-blur lg:self-center">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                Why choose this program
              </p>
              <h2 className="mt-4 text-2xl font-black leading-tight text-slate-950 md:text-[2rem]">
                Built for students who want usable skills, not only theory.
              </h2>
              <div className="mt-7 grid gap-5">
                {[
                  "Every module is connected to assignments, mentor review, and a practical outcome.",
                  "Get feedback from industry mentors and improve with real-world insights.",
                  "Finish the program with job-ready skills, practical experience, and a strong portfolio.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-primary">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-sm font-semibold leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="px-4 py-9 md:px-6 lg:px-8">
          <div className="mx-auto max-w-[1340px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                  Program Snapshot
                </p>
                <h2 className="mt-3 text-2xl font-black text-slate-950 md:text-4xl">
                  What you will gain in this program
                </h2>
              </div>
              <p className="text-sm font-medium leading-7 text-slate-500">
                This program is designed to make you industry-ready with
                practical skills and real-world experience.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {gains.map(([title, text], index) => (
                <article
                  key={title}
                  className="flex min-h-[230px] flex-col items-center justify-start rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <span className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-blue-50 text-3xl font-black text-primary">
                    {["01", "02", "06", "04", "05"][index]}
                  </span>
                  <h3 className="mt-5 text-sm font-black leading-5 text-slate-950">{title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-slate-500">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid min-h-[84px] grid-cols-2 gap-4 rounded-2xl bg-blue-50 p-5 md:grid-cols-4">
              {[
                ["5,000+", "Students Enrolled"],
                ["4.8", "Average Rating"],
                ["95%", "Placement Assistance"],
                ["10+", "Tools You'll Master"],
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-black text-primary">{value}</p>
                  <p className="text-xs font-black text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 md:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1340px] gap-6 lg:grid-cols-2">
            <article className="min-h-[440px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-black uppercase tracking-wider text-primary">FAQ</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                {faqs.map(([question, answer], index) => (
                  <div key={question} className="border-b border-slate-200 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left text-sm font-black text-slate-950"
                    >
                      {question}
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-primary">
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    {openFaq === index && (
                      <p className="px-5 pb-5 text-sm font-medium leading-7 text-slate-500">
                        {answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </article>

            <article className="min-h-[440px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-black uppercase tracking-wider text-primary">Student Reviews</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
                See what our students say
              </h2>
              <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-7">
                <div className="flex items-center gap-5">
                  <img
                    src="https://i.pinimg.com/1200x/54/8f/78/548f7801e40c44e993190f1593634650.jpg"
                    alt="Aarav Sharma, SkillUnbox student"
                    className="h-20 w-20 rounded-full border-4 border-blue-50 object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="font-black text-slate-950">Aarav Sharma</h3>
                    <p className="text-xs font-semibold text-slate-500">Digital Marketing Executive</p>
                    <p className="mt-2 text-xl text-amber-400">*****</p>
                  </div>
                </div>
                <p className="mt-6 text-base font-medium leading-8 text-slate-700">
                  "SkillUnbox gave me practical knowledge that really works.
                  The live projects, mentor support, and real campaigns helped
                  me land my first marketing job."
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="enroll-form" className="scroll-mt-24 px-4 pb-14 md:px-6 md:pb-20 lg:px-8">
          <div className="mx-auto grid max-w-[1040px] gap-6 rounded-[28px] bg-slate-950 p-6 text-white md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                Enroll Now
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight md:text-4xl">
                Get course details and counselor callback.
              </h2>
              <p className="mt-4 text-sm font-medium leading-7 text-slate-300">
                Fill your details and our team will contact you with batch,
                fee, curriculum, and admission guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 text-slate-950 md:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField id="landing-name" label="Name" error={errors.name}>
                  <input
                    id="landing-name"
                    type="text"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className={inputClassName(errors.name)}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </FormField>
                <FormField id="landing-email" label="Email" error={errors.email}>
                  <input
                    id="landing-email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className={inputClassName(errors.email)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </FormField>
                <FormField id="landing-phone" label="Phone" error={errors.phone}>
                  <input
                    id="landing-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    className={inputClassName(errors.phone)}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </FormField>
                <FormField id="landing-education" label="Education" error={errors.education}>
                  <input
                    id="landing-education"
                    type="text"
                    value={formData.education}
                    onChange={(event) => setFormData({ ...formData, education: event.target.value })}
                    className={inputClassName(errors.education)}
                    placeholder="12th, graduate, diploma..."
                  />
                </FormField>
              </div>

              {serverError && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {serverError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-primary/60"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-black uppercase tracking-wider text-slate-600"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-[11px] font-bold text-red-500">{error}</p>}
    </div>
  );
}

function inputClassName(error?: string) {
  return `h-12 w-full rounded-xl border bg-white px-4 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 ${
    error ? "border-red-400" : "border-slate-200 focus:border-primary"
  }`;
}
