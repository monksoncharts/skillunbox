import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { COURSES } from "@/constants/courses";

const N8N_WEBHOOK_URL =
  "https://n8n.gauravsinghbisht.site/webhook/e81ae2da-7d76-496f-b019-3b779b5e94ae";

const courseSlugs = COURSES.map((course) => course.slug);

const admissionSchema = z.object({
  name: z.string().trim().min(2, "Full name is required.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(120),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number is required.")
    .max(16)
    .regex(/^\+?[0-9\s-]{10,16}$/, "Please enter a valid phone number."),
  courseSlug: z.string().trim().refine((slug) => courseSlugs.includes(slug), {
    message: "Please select a valid course.",
  }),
  mode: z.enum(["offline", "online"]),
  preferredTime: z.string().trim().min(1, "Please select a preferred time."),
  comments: z.string().trim().max(600).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json().catch(() => null);
    const parsed = admissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check the form details.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const selectedCourse = COURSES.find(
      (course) => course.slug === parsed.data.courseSlug,
    );

    const payload = {
      ...parsed.data,
      phone: parsed.data.phone.replace(/\s+/g, " "),
      comments: parsed.data.comments || "",
      courseTitle: selectedCourse?.title || parsed.data.courseSlug,
      source: "SkillUnbox admission registration page",
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "",
    };

    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { error: "Unable to submit right now. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Admission request submitted successfully.",
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Admission submission error:", error);
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
