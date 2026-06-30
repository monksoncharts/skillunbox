import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TrendingCourses from "../../components/TrendingCourses";

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      
      <main className="flex-1">
        {/* Course Header Banner */}
        <section className="bg-[#5624d0] text-white py-12 md:py-16 px-4 md:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_120%,rgba(139,92,246,0.2),transparent_50%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-purple-200 bg-white/10 px-3.5 py-1.5 rounded-full mb-4 inline-block">
              Skill Unbox Programs
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Explore Our Professional Courses
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Choose from our curated selection of job-oriented and practical training programs, designed to make you industry-ready.
            </p>
          </div>
        </section>

        {/* Course Grid component */}
        <TrendingCourses />
      </main>

      <Footer />
    </div>
  );
}
