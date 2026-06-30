import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TrendingCourses from "../../components/TrendingCourses";

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      
      <main className="flex-1">
        {/* Course Header Banner */}
        <section
          className="relative overflow-hidden bg-slate-950 px-4 py-14 text-center text-white md:px-6 md:py-20 lg:px-8"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(15,23,42,0.92), rgba(37,99,235,0.72)), url('https://res.cloudinary.com/dqaqxw8w8/image/upload/v1782801050/course_cover_img_6_gsetzj.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
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
