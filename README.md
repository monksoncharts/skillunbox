# SkillUnbox

SkillUnbox is a Next.js App Router website with a production-ready Gemini-powered AI chatbot.

## Installation

Install dependencies:

```bash
npm install
```

## Configure Environment Variables

Create `.env.local` in the project root:

```bash
GEMINI_API_KEY=YOUR_GOOGLE_AI_STUDIO_API_KEY
GEMINI_MODEL=gemini-2.0-flash
```

Do not prefix the Gemini API key with `NEXT_PUBLIC_`. The key must stay server-only.

## Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Chatbot Architecture

The frontend floating widget calls only:

```http
POST /api/chat
```

Request:

```json
{
  "message": "..."
}
```

Response:

```json
{
  "reply": "..."
}
```

Gemini calls live only in `lib/gemini.ts`, and the API key is read only from server-side environment variables.

## Security Notes

- `GEMINI_API_KEY` is never exposed to the browser.
- The frontend never calls Gemini directly.
- `/api/chat` validates input with Zod.
- User messages are trimmed and capped at 2,000 characters.
- An in-memory IP-based rate limiter protects the route from basic abuse.
- Server errors return generic user-safe messages.
- Stack traces and provider details are not sent to users.

For multi-instance production deployments, replace the in-memory rate limiter with Redis, Upstash, Vercel KV, or another shared store.

## Deployment

Set these environment variables in your hosting provider:

```bash
GEMINI_API_KEY=YOUR_GOOGLE_AI_STUDIO_API_KEY
GEMINI_MODEL=gemini-2.0-flash
```

Then build:

```bash
npm run build
```

Deploy as a standard Next.js App Router application.

## Future RAG Upgrade

The API contract is intentionally stable. Later, replace `websiteContext` in `lib/prompt.ts` with retrieved context from:

- ChromaDB
- Pinecone
- FAISS
- pgvector
- Supabase Vector

Keep returning:

```json
{
  "reply": "..."
}
```

No frontend changes are required for the RAG upgrade.
