const testimonials = [
  {
    name: "Aarav Sharma",
    course: "Digital Marketing Mastery Program",
    review:
      "The best part was live campaign practice. I learned SEO, Meta Ads, and reporting in a way that made sense for real client work.",
    result: "Started freelance projects",
    initials: "AS",
    imageUrl:
      "https://i.pinimg.com/736x/11/f6/4f/11f64f96cf559b7db68db2b7c2c1e769.jpg",
  },
  {
    name: "Priya Verma",
    course: "Professional Video Editing & Content Creation",
    review:
      "Earlier I only knew basic editing. After the course, I understood hooks, pacing, color correction, and how to make content for brands.",
    result: "Built a strong portfolio",
    initials: "PV",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbSFSgMZvozT84wXoqzj4pAaMfBsuKV5ZZZjqYxO5BVSdWDKBRtLHDBk&s=10",
  },
  {
    name: "Rohan Joshi",
    course: "Full Stack Web Development Program",
    review:
      "The mentors focused on practical projects instead of only theory. Building real pages and APIs gave me confidence to apply for internships.",
    result: "Applied for internships",
    initials: "RJ",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56-Hk7HrS_fzCZh3_1gTjfdxFEqU23cHxIDd0fXfiCNDLSop_ZGpnGCI&s=10",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f8fbff] px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-primary">
              Student Reviews
            </h2>
            <h3 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl">
              Real learners. Real course experience.
            </h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Students share how practical training, mentorship, and project work
            helped them move forward with confidence.
          </p>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[7vw] pb-4 [scrollbar-width:thin] sm:px-6 md:-mx-6 md:px-6 lg:mx-0 lg:px-0">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative min-w-[86vw] snap-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-border hover:shadow-xl sm:min-w-[48%] sm:snap-start lg:min-w-0 lg:flex-1"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 overflow-hidden rounded-full opacity-20 blur-sm">
                <img
                  src={item.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-sm font-black text-white shadow-md">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover blur-[0.35px]"
                    />
                    <span className="absolute inset-0 bg-primary/15" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-950">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {item.course}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 text-amber-500" aria-label="5 star rating">
                  {"★★★★★"}
                </div>
              </div>

              <p className="relative z-10 text-sm leading-7 text-slate-600">
                &quot;{item.review}&quot;
              </p>

              <div className="relative z-10 mt-6 inline-flex rounded-full border border-primary-border bg-primary-light px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-primary">
                {item.result}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
