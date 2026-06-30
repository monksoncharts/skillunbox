import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CONTACT_WEBHOOK_URL =
  "https://n8n.gauravsinghbisht.site/webhook/24cd9316-a382-44b9-9173-f86102e3207c";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Full name is required.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(120),
  phone: z
    .string()
    .trim()
    .optional()
    .transform((value) => value || "")
    .refine(
      (value) => !value || /^\+?[0-9\s-]{10,16}$/.test(value),
      "Please enter a valid phone number.",
    ),
  topic: z.string().trim().min(1, "Topic is required.").max(60),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(1_000, "Message must be 1,000 characters or fewer."),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json().catch(() => null);
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check the form details.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const payload = {
      ...parsed.data,
      phone: parsed.data.phone.replace(/\s+/g, " "),
      source: "SkillUnbox contact page",
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "",
    };

    const webhookResponse = await fetch(CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Contact message submitted successfully.",
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Contact submission error:", error);
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
