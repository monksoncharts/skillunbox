import { buildSystemPrompt } from "@/lib/prompt";

interface GeminiPart {
  text?: string;
}

interface GeminiCandidate {
  content?: {
    parts?: GeminiPart[];
  };
}

interface GeminiGenerateResponse {
  candidates?: GeminiCandidate[];
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
}

const GEMINI_API_BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models";

export class GeminiConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GeminiConfigurationError";
  }
}

export class GeminiApiError extends Error {
  statusCode: number;
  retryAfterSeconds?: number;

  constructor(
    message: string,
    statusCode: number,
    retryAfterSeconds?: number,
  ) {
    super(message);
    this.name = "GeminiApiError";
    this.statusCode = statusCode;
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export async function generateResponse(
  message: string,
  websiteContext: string,
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new GeminiConfigurationError("Missing GEMINI_API_KEY");
  }

  const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";
  const endpoint = `${GEMINI_API_BASE_URL}/${encodeURIComponent(
    model,
  )}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: buildSystemPrompt(websiteContext) }],
      },
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        topP: 0.9,
        maxOutputTokens: 700,
      },
    }),
  });

  const data = (await response.json().catch(() => null)) as
    | GeminiGenerateResponse
    | null;

  if (!response.ok) {
    const detail = data?.error?.message || "Gemini request failed";
    throw new GeminiApiError(
      detail,
      response.status,
      extractRetryAfterSeconds(detail),
    );
  }

  const reply = data?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || "")
    .join("")
    .trim();

  if (!reply) {
    return "I could not find that information on this website.";
  }

  return reply;
}

function extractRetryAfterSeconds(message: string) {
  const retryMatch = message.match(/retry in\s+([\d.]+)s/i);

  if (!retryMatch?.[1]) {
    return undefined;
  }

  return Math.ceil(Number(retryMatch[1]));
}
