import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const jobReadyCourses = [
  "Digital Marketing",
  "Graphic Designing",
  "Video Editing",
  "Web Development",
  "AI Automation",
  "Production",
  "And many more in-demand skills",
];

const liveProjectBenefits = [
  "Gain real industry experience while learning.",
  "Build an impressive portfolio with live projects.",
  "Learn directly from experienced professionals.",
  "Develop the confidence to work with clients and teams.",
  "Graduate with practical skills that employers value.",
];

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#eef6ff] px-4 py-14 text-slate-950 md:px-6 md:py-24 lg:px-8">
          <div className="absolute inset-0 hidden md:block">
            <img
              src="https://res.cloudinary.com/dqaqxw8w8/image/upload/v1782801336/about_bg_1_cphqkk.webp"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1200px]">
            <div className="max-w-2xl">
              <span className="mb-4 inline-block rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm">
                About Skill Unbox
              </span>
              <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl md:text-white md:drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]">
                Skills That Make You Employable
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700 md:text-base md:font-medium md:text-white/90 md:drop-shadow-[0_2px_12px_rgba(0,0,0,0.32)]">
                At Skill Unbox, we believe that while a degree is important,
                it is your skills that make you employable.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop"
                alt="Students collaborating at Skill Unbox"
                className="h-[340px] w-full object-cover md:h-[520px]"
              />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                Our Vision
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
                Bridging the gap between education and industry.
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  In today&apos;s competitive world, companies do not just look
                  for qualifications. They look for people who can deliver
                  results from day one.
                </p>
                <p>
                  Our vision is to bridge the gap between education and
                  industry by offering practical, job-oriented training that
                  prepares students for real careers.
                </p>
                <p>
                  We focus on hands-on learning, real-world exposure, and
                  industry-relevant skills that help students become confident
                  professionals.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-blue-50 p-6">
                <h3 className="text-lg font-black text-slate-950">
                  We offer job-ready courses in:
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {jobReadyCourses.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-14 md:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-7 shadow-sm md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                Meet Our Founder
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Mr. Lalit Bashera
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  Mr. Lalit Bashera is the driving force behind Skill Unbox.
                  With over 10 years of experience in the Digital Marketing
                  industry, he has helped train and mentor numerous students
                  while working on a wide range of real-world projects.
                </p>
                <p>
                  His vision is simple: to create a learning environment where
                  students do not just earn certificates but become truly
                  job-ready professionals.
                </p>
                <p>
                  Under his guidance, students gain practical experience by
                  working on live projects, solving real business challenges,
                  and understanding how the industry actually works.
                </p>
                <p className="font-bold text-slate-900">
                  His mission is to equip every learner with the confidence,
                  skills, and hands-on experience needed to build a successful
                  career.
                </p>
              </div>
            </article>

            <article className="rounded-3xl bg-slate-950 p-7 text-white shadow-sm md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                Learn While You Work
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Learn on live projects with industry professionals.
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
                <p>
                  At Skill Unbox, learning does not stop with lectures. From
                  the beginning of your journey, you get the opportunity to
                  work on live projects alongside experienced industry
                  professionals.
                </p>
                <p>
                  As you learn, you collaborate with experts who have worked
                  with real clients and businesses, giving you first-hand
                  exposure to professional workflows, industry standards, and
                  practical problem-solving.
                </p>
              </div>

              <div className="mt-7 grid gap-3">
                {liveProjectBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-black">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-slate-200">{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="mt-7 rounded-2xl bg-white/10 p-5 text-sm font-bold leading-7 text-white">
                By the time you complete your course, you will not just have
                knowledge. You will have real work experience that sets you
                apart in the job market.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
