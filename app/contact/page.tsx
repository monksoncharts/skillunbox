"use client";

import { FormEvent, ReactNode, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  topic: "Course Guidance",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone.trim() && !/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Please write at least 10 characters.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          topic: formData.topic.trim(),
          message: formData.message.trim(),
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

        throw new Error(data?.error || "Unable to send your message.");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans text-gray-900 antialiased">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary px-4 py-12 text-center text-white md:px-6 md:py-16 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_120%,rgba(0,180,255,0.26),transparent_48%)]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white/80">
              Get in Touch
            </span>
            <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              Contact Skill Unbox
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-white/80 md:text-base">
              Have questions about batches, curriculum, pricing, or counseling?
              Send us a message and our team will connect with you.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-gray-900">
                  Our Institute Information
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Around Haldwani? You can visit our campus, discuss course
                  options, and get guidance from our mentors.
                </p>
              </div>

              <ContactInfoCard
                title="Campus Address"
                body={
                  <>
                    H.N 120, Joshi Khola, New ITI Near Dhanmil,
                    <br />
                    Haldwani, Uttarakhand, India.
                  </>
                }
                iconPath="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0Z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />

              <ContactInfoCard
                title="Email Details"
                body={
                  <a
                    href="mailto:officialskillunbox@gmail.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    officialskillunbox@gmail.com
                  </a>
                }
                iconPath="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8 M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
              />

              <ContactInfoCard
                title="Phone / WhatsApp"
                body={
                  <a
                    href="https://wa.me/917248762290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    +91 72487 62290
                  </a>
                }
                iconPath="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .94.725l.548 2.2a1 1 0 0 1-.321.988l-1.305.98a10.582 10.582 0 0 0 4.872 4.872l.98-1.305a1 1 0 0 1 .988-.321l2.2.548a1 1 0 0 1 .725.94V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
              <div className="bg-primary px-6 py-5 text-white">
                <h3 className="text-xl font-black">Contact Us Form</h3>
                <p className="mt-1 text-xs text-white/75">
                  For general queries, batch timing, pricing, or institute
                  support.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="grid gap-5 p-6 md:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      id="contact-name"
                      label="Full Name"
                      error={errors.name}
                    >
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData({ ...formData, name: event.target.value })
                        }
                        className={inputClassName(errors.name)}
                        placeholder="Your name"
                      />
                    </FormField>

                    <FormField
                      id="contact-email"
                      label="Email Address"
                      error={errors.email}
                    >
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData({ ...formData, email: event.target.value })
                        }
                        className={inputClassName(errors.email)}
                        placeholder="you@example.com"
                      />
                    </FormField>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      id="contact-phone"
                      label="Phone / WhatsApp"
                      error={errors.phone}
                    >
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData({ ...formData, phone: event.target.value })
                        }
                        className={inputClassName(errors.phone)}
                        placeholder="9876543210"
                      />
                    </FormField>

                    <FormField id="contact-topic" label="Topic">
                      <select
                        id="contact-topic"
                        value={formData.topic}
                        onChange={(event) =>
                          setFormData({ ...formData, topic: event.target.value })
                        }
                        className={inputClassName()}
                      >
                        <option>Course Guidance</option>
                        <option>Batch Timing</option>
                        <option>Fees and Offers</option>
                        <option>Campus Visit</option>
                        <option>Other Query</option>
                      </select>
                    </FormField>
                  </div>

                  <FormField
                    id="contact-message"
                    label="Your Message"
                    error={errors.message}
                  >
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(event) =>
                        setFormData({ ...formData, message: event.target.value })
                      }
                      className={`${inputClassName(errors.message)} min-h-32 resize-none`}
                      placeholder="Tell us what you need help with..."
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
                    className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-white shadow-md transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-primary/60"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl font-black text-emerald-600">
                    ✓
                  </div>
                  <h3 className="text-xl font-black text-gray-900">
                    Message Sent Successfully
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-gray-600">
                    Thanks for contacting Skill Unbox. Our team will reply or
                    call you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 rounded-xl border border-gray-300 px-5 py-2.5 text-xs font-bold text-gray-700 transition hover:border-primary hover:text-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ContactInfoCard({
  title,
  body,
  iconPath,
}: {
  title: string;
  body: ReactNode;
  iconPath: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <span className="rounded-xl bg-primary-light p-3 text-primary">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={iconPath}
          />
        </svg>
      </span>
      <div>
        <h4 className="mb-1.5 text-base font-bold text-gray-900">{title}</h4>
        <div className="text-xs leading-relaxed text-gray-500">{body}</div>
      </div>
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
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-[11px] font-semibold text-red-500">{error}</p>}
    </div>
  );
}

function inputClassName(error?: string) {
  return `w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:ring-2 focus:ring-primary/25 ${
    error ? "border-red-500" : "border-gray-300 focus:border-primary"
  }`;
}
