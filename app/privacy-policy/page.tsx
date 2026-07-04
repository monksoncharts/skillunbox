import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact Skill Unbox, register for a course, or submit an inquiry, we may collect details such as your name, email address, phone number, course interest, and message.",
      "We may also collect basic website usage information such as browser type, device information, pages visited, referral source, and interactions with our website.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to inquiries, provide course guidance, process registrations, improve our website, communicate updates, and support our training services.",
      "We may use website analytics and marketing tools to understand visitor behavior, improve user experience, measure campaign performance, and keep our website secure.",
    ],
  },
  {
    title: "Microsoft Clarity",
    body: [
      "We use Microsoft Clarity to understand how visitors use and interact with our website through behavioral metrics, heatmaps, and session replay. Website usage data may be captured using first-party and third-party cookies and other tracking technologies.",
      "We use this information for site optimization, improving user experience, marketing performance, and fraud/security purposes. By using our website, you agree that Skill Unbox and Microsoft can collect and use this data.",
      "For more information about how Microsoft collects and uses your data, please visit the Microsoft Privacy Statement.",
    ],
  },
  {
    title: "Cookies And Tracking Technologies",
    body: [
      "Our website may use cookies, pixels, tags, and similar technologies to operate the site, analyze traffic, remember preferences, and support advertising or remarketing activity.",
      "You can control cookies through your browser settings. Some features may not work properly if cookies are disabled.",
    ],
  },
  {
    title: "Sharing Of Information",
    body: [
      "We do not sell your personal information. We may share limited information with trusted service providers who help us operate our website, manage inquiries, run analytics, or deliver marketing services.",
      "We may also disclose information if required by law or to protect our rights, users, or services.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how your information is handled, you can contact us at learning@skillunbox.io.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans text-gray-900 antialiased">
      <Navbar />

      <main className="flex-1">
        <section className="bg-slate-950 px-4 py-14 text-white md:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-[1000px]">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white/80">
              Skill Unbox
            </span>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
              This Privacy Policy explains how Skill Unbox collects, uses, and
              protects information when you visit our website, contact us, or
              register interest in our courses.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/55">
              Last updated: July 4, 2026
            </p>
          </div>
        </section>

        <section className="px-4 py-12 md:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-[1000px] space-y-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="text-xl font-black text-slate-950 md:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>
                      {paragraph ===
                      "For more information about how Microsoft collects and uses your data, please visit the Microsoft Privacy Statement." ? (
                        <>
                          For more information about how Microsoft collects and
                          uses your data, please visit the{" "}
                          <a
                            href="https://privacy.microsoft.com/en-us/privacystatement"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-primary hover:underline"
                          >
                            Microsoft Privacy Statement
                          </a>
                          .
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
