import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  GeminiApiError,
  GeminiConfigurationError,
  generateResponse,
} from "@/lib/gemini";
import { websiteContext } from "@/lib/prompt";
import { rateLimit } from "@/lib/rateLimit";
import type { ChatResponse, ChatErrorResponse } from "@/types/chat";

export const runtime = "nodejs";

const chatRequestSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(2_000, "Message must be 2,000 characters or fewer."),
});

export async function POST(request: NextRequest) {
  try {
    const clientKey = getClientKey(request);
    const limit = rateLimit(clientKey);

    if (!limit.allowed) {
      return NextResponse.json<ChatErrorResponse>(
        { error: "Too many requests. Please try again shortly." },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(
              (limit.resetAt - Date.now()) / 1_000,
            ).toString(),
          },
        },
      );
    }

    const json = await request.json().catch(() => null);
    const parsed = chatRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json<ChatErrorResponse>(
        { error: parsed.error.issues[0]?.message || "Invalid request." },
        { status: 400 },
      );
    }

    const reply = await generateResponse(parsed.data.message, websiteContext);

    return NextResponse.json<ChatResponse>({ reply });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Chat API error:", error);
    }

    if (error instanceof GeminiConfigurationError) {
      return NextResponse.json<ChatErrorResponse>(
        {
          error:
            process.env.NODE_ENV === "production"
              ? "The assistant is unavailable right now. Please try again."
              : "Gemini API key is not configured. Add GEMINI_API_KEY to .env.local and restart the dev server.",
        },
        { status: 503 },
      );
    }

    if (error instanceof GeminiApiError) {
      const isQuotaError =
        error.statusCode === 429 ||
        /quota|rate limit|resource exhausted/i.test(error.message);
      const status = isQuotaError ? 429 : 502;

      return NextResponse.json<ChatErrorResponse>(
        {
          error: isQuotaError
            ? "Gemini quota is exhausted for this API key/model. Please try again later or use a model/key with available quota."
            : "The AI provider is unavailable right now. Please try again.",
        },
        {
          status,
          headers: error.retryAfterSeconds
            ? { "Retry-After": error.retryAfterSeconds.toString() }
            : undefined,
        },
      );
    }

    return NextResponse.json<ChatErrorResponse>(
      { error: "The assistant is unavailable right now. Please try again." },
      { status: 500 },
    );
  }
}

export function GET() {
  return NextResponse.json<ChatErrorResponse>(
    { error: "Method not allowed." },
    { status: 405 },
  );
}

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous";

  return `chat:${ip}`;
}
