"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { COURSES } from "../../constants/courses";

type StudyMode = "offline" | "online";

type AdmissionFormData = {
  name: string;
  email: string;
  phone: string;
  courseSlug: string;
  mode: StudyMode;
  preferredTime: string;
  comments: string;
};

const preferredTimes = [
  "Morning batch",
  "Afternoon batch",
  "Evening batch",
  "Weekend batch",
  "Flexible timing",
];

function AdmissionFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course") || "";

  const [formData, setFormData] = useState<AdmissionFormData>({
    name: "",
    email: "",
    phone: "",
    courseSlug: initialCourse,
    mode: "offline",
    preferredTime: "",
    comments: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCourse = useMemo(
    () => COURSES.find((course) => course.slug === formData.courseSlug),
    [formData.courseSlug],
  );

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,16}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.courseSlug) {
      nextErrors.courseSlug = "Please select a training course.";
    }

    if (!formData.preferredTime) {
      nextErrors.preferredTime = "Please select a preferred time.";
    }

    if (formData.comments.length > 600) {
      nextErrors.comments = "Message must be 600 characters or fewer.";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          comments: formData.comments.trim(),
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
    <div className="grid w-full max-w-[1180px] grid-cols-1 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
      <aside className="relative overflow-hidden bg-primary p-6 text-white md:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.24),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(0,180,255,0.3),transparent_30%)]" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-10">
          <div>
            <span className="mb-5 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
              Admissions Open
            </span>
            <h1 className="text-3xl font-black leading-tight tracking-tight md:text-4xl">
              Register for practical, job-ready training.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/82">
              Fill this form and our counselor will contact you on phone or
              WhatsApp with batch details, fee guidance, and next steps.
            </p>
          </div>

          <div className="grid gap-3 text-sm">
            {[
              "Personal counselor callback",
              "All courses available in online and offline mode",
              "Course selection support based on your goal",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                  ✓
                </span>
                <span className="font-semibold text-white/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-white/70">
              Need help?
            </p>
            <a
              href="https://wa.me/917248762290"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-lg font-black text-white hover:underline"
            >
              +91 72487 62290
            </a>
          </div>
        </div>
      </aside>

      <section className="p-5 md:p-8 lg:p-10">
        <div className="mb-7">
              <h2 className="text-2xl font-black text-slate-950">
                Admission Request Form
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Please share correct details. All required fields must be filled.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <FormField id="name" label="Full Name" error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({ ...formData, name: event.target.value })
                    }
                    className={inputClassName(errors.name)}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </FormField>

                <FormField id="email" label="Email Address" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    className={inputClassName(errors.email)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </FormField>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  id="phone"
                  label="WhatsApp / Phone Number"
                  error={errors.phone}
                >
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData({ ...formData, phone: event.target.value })
                    }
                    className={inputClassName(errors.phone)}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </FormField>

                <FormField
                  id="preferredTime"
                  label="Preferred Callback Time"
                  error={errors.preferredTime}
                >
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        preferredTime: event.target.value,
                      })
                    }
                    className={inputClassName(errors.preferredTime)}
                  >
                    <option value="">Select timing...</option>
                    {preferredTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <FormField
                id="course"
                label="Choose Program"
                error={errors.courseSlug}
              >
                <select
                  id="course"
                  value={formData.courseSlug}
                  onChange={(event) =>
                    setFormData({ ...formData, courseSlug: event.target.value })
                  }
                  className={inputClassName(errors.courseSlug)}
                >
                  <option value="">Select a course...</option>
                  {COURSES.map((course) => (
                    <option key={course.slug} value={course.slug}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </FormField>

              {selectedCourse && (
                <div className="rounded-2xl border border-primary-border bg-primary-light p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    Selected course
                  </p>
                  <p className="mt-1 text-sm font-black text-slate-950">
                    {selectedCourse.title}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Skills: {selectedCourse.skills.join(", ")}
                  </p>
                </div>
              )}

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  Select Mode of Study
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <ModeOption
                    label="Offline"
                    description="Haldwani campus"
                    checked={formData.mode === "offline"}
                    onChange={() => setFormData({ ...formData, mode: "offline" })}
                  />
                  <ModeOption
                    label="Online"
                    description="Live classes"
                    checked={formData.mode === "online"}
                    onChange={() => setFormData({ ...formData, mode: "online" })}
                  />
                </div>
              </div>

              <FormField
                id="comments"
                label="Additional Message"
                error={errors.comments}
                optional
              >
                <textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(event) =>
                    setFormData({ ...formData, comments: event.target.value })
                  }
                  className={`${inputClassName(errors.comments)} min-h-28 resize-none`}
                  placeholder="Mention batch preference, career goal, or any query..."
                />
              </FormField>

              {serverError && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {serverError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-white shadow-lg transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-primary/60"
              >
                {isSubmitting ? "Submitting Registration..." : "Submit Registration"}
              </button>
            </form>
      </section>
    </div>
  );
}

function FormField({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700"
      >
        <span>{label}</span>
        {optional && <span className="text-[10px] text-slate-400">Optional</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-[11px] font-semibold text-red-500">{error}</p>}
    </div>
  );
}

function ModeOption({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
        checked
          ? "border-primary bg-primary-light ring-2 ring-primary/15"
          : "border-slate-200 bg-slate-50 hover:border-primary-border"
      }`}
    >
      <input
        type="radio"
        name="studyMode"
        checked={checked}
        onChange={onChange}
        className="text-primary focus:ring-primary"
      />
      <span>
        <span className="block text-sm font-black text-slate-950">{label}</span>
        <span className="block text-xs text-slate-500">{description}</span>
      </span>
    </label>
  );
}

function inputClassName(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 ${
    error ? "border-red-500" : "border-slate-300 focus:border-primary"
  }`;
}

export default function AdmissionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans antialiased">
      <Navbar />

      <main className="relative flex-1 overflow-hidden px-4 py-8 md:px-6 md:py-12 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(0,102,255,0.11),transparent_32%),radial-gradient(circle_at_88%_20%,rgba(0,180,255,0.12),transparent_30%)]" />
        <div className="relative mx-auto flex w-full justify-center">
          <Suspense
            fallback={
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center font-bold text-slate-500 shadow">
                Loading admission form...
              </div>
            }
          >
            <AdmissionFormContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
