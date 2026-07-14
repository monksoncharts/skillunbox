import NotificationBanner from "../components/NotificationBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendingCourses from "../components/TrendingCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 antialiased">
      <NotificationBanner />
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        {/* Intro */}
        <HeroSection />
        
        {/* Job-Oriented Courses */}
        <TrendingCourses limit={8} showSeeMore />
        
        {/* Why Skill Unbox & What We Do */}
        <WhyChooseUs />

        {/* About Us Section */}
        <section id="about-us" className="w-full bg-white py-20 md:py-24 px-4 md:px-6 lg:px-8 border-b border-gray-150">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Backing Grid */}
            <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-[#5624d0]/10 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                alt="Students collaborating at Skill Unbox"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Quote Stamp */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg z-20">
                <p className="text-sm font-bold text-gray-900 leading-snug italic mb-1.5">
                  &quot;Skill Unbox turned my theoretical understanding into practical mastery, helping me land my first marketing job in just three months!&quot;
                </p>
                <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider block">— Digital Marketing Graduate</span>
              </div>
            </div>

            {/* About Copy */}
            <div>
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-[#5624d0] mb-3">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                We Believe Skills Create Opportunities
              </h3>
              
              <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                <p>
                  Skill Unbox is a practical skill development institute focused on job-oriented training. We help students learn real-world skills through hands-on practice, live projects, and expert mentorship.
                </p>
                <p>
                  Our goal is simple — to turn learners into skilled professionals ready for the real world. We believe that true learning happens outside of traditional slides, and we provide students the space to build, fail, iterate, and ultimately succeed.
                </p>
                <p className="font-semibold text-gray-900">
                  Join us at our Haldwani campus, explore our specialized programs, and unbox the skills that will unlock your career success.
                </p>
              </div>

              {/* Tagline Ribbon */}
              <div className="mt-8 border-l-4 border-[#5624d0] pl-4 py-2">
                <span className="text-[#5624d0] font-black uppercase text-xs tracking-wider block">Our Tagline</span>
                <span className="text-gray-900 font-bold text-base">Unbox Skills. Unlock Success.</span>
              </div>
            </div>

          </div>
        </section>

        {/* Student Testimonials */}
        <TestimonialsSection />

        {/* FAQ Accordions */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
