import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../components/WhyChooseUs";

export default function WhyUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      
      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-[#f3f0ff] px-4 py-10 text-left text-slate-950 md:px-6 md:py-24 lg:px-8">
          <img
            src="https://res.cloudinary.com/dqaqxw8w8/image/upload/v1782724448/ChatGPT_Image_Jun_29_2026_02_43_16_PM_g7rtkd.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
          />
          <div className="relative z-10 mx-auto max-w-[1440px]">
            <div className="max-w-xl">
              <span className="mb-4 inline-block rounded-full bg-white/75 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm">
                Our Methodology
              </span>
              <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
                Why Learn With Skill Unbox?
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
                We focus on practical, job-oriented training that builds confidence and prepares you for real industry environments.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-white shadow-xl md:hidden">
              <img
                src="https://res.cloudinary.com/dqaqxw8w8/image/upload/v1782724448/ChatGPT_Image_Jun_29_2026_02_43_16_PM_g7rtkd.webp"
                alt="Skill Unbox practical learning benefits"
                className="h-64 w-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us component */}
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}
