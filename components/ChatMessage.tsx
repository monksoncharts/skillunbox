"use client";

import { useState } from "react";
import type { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

type MarkdownBlock =
  | { type: "code"; language: string; content: string }
  | { type: "paragraph"; content: string };

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <article
      className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
      aria-label={`${isUser ? "Your" : "Assistant"} message`}
    >
      {!isUser && (
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <img
            src="/logo-square.png"
            alt="SkillUnbox"
            className="h-full w-full object-contain"
          />
        </div>
      )}
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
          isUser
            ? "rounded-br-md bg-primary text-white"
            : "rounded-bl-md border border-slate-200 bg-white text-slate-800"
        } ${message.status === "error" ? "border-red-300 bg-red-50 text-red-700" : ""}`}
      >
        <MarkdownContent content={message.content} isUser={isUser} />
      </div>
    </article>
  );
}

function MarkdownContent({
  content,
  isUser,
}: {
  content: string;
  isUser: boolean;
}) {
  return (
    <div className="space-y-3">
      {parseMarkdownBlocks(content).map((block, index) => {
        if (block.type === "code") {
          return (
            <CodeBlock
              key={`${block.type}-${index}`}
              language={block.language}
              code={block.content}
            />
          );
        }

        return (
          <p key={`${block.type}-${index}`} className="whitespace-pre-wrap">
            {renderInlineMarkdown(block.content, isUser)}
          </p>
        );
      })}
    </div>
  );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1_500);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-950 text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2 text-xs text-slate-300">
        <span className="font-mono">{language || "code"}</span>
        <button
          type="button"
          onClick={copyCode}
          className="rounded-md px-2 py-1 text-slate-200 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan"
          aria-label="Copy code"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-72 overflow-auto p-3 text-xs leading-5">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function parseMarkdownBlocks(content: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const pattern = /```(\w+)?\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(content)) !== null) {
    const before = content.slice(lastIndex, match.index).trim();

    if (before) {
      blocks.push({ type: "paragraph", content: before });
    }

    blocks.push({
      type: "code",
      language: match[1] || "",
      content: match[2]?.trimEnd() || "",
    });

    lastIndex = pattern.lastIndex;
  }

  const after = content.slice(lastIndex).trim();

  if (after) {
    blocks.push({ type: "paragraph", content: after });
  }

  return blocks.length ? blocks : [{ type: "paragraph", content }];
}

function renderInlineMarkdown(content: string, isUser: boolean) {
  const parts = content.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      const codeContent = part.slice(1, -1);

      if (isLinkableToken(codeContent)) {
        return (
          <span
            key={`${part}-${index}`}
            className={`rounded px-1.5 py-0.5 font-mono text-xs ${
              isUser ? "bg-white/15 text-white" : "bg-slate-100 text-slate-900"
            }`}
          >
            {renderLinkedText(codeContent, isUser, `${part}-${index}`)}
          </span>
        );
      }

      return (
        <code
          key={`${part}-${index}`}
          className={`rounded px-1.5 py-0.5 font-mono text-xs ${
            isUser ? "bg-white/15 text-white" : "bg-slate-100 text-slate-900"
          }`}
        >
          {codeContent}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`}>
          {renderLinkedText(part.slice(2, -2), isUser, `${part}-${index}`)}
        </strong>
      );
    }

    return (
      <span key={`${part}-${index}`}>
        {renderLinkedText(part, isUser, `${part}-${index}`)}
      </span>
    );
  });
}

function isLinkableToken(text: string) {
  return (
    /^https?:\/\//.test(text) ||
    /^\/(?:courses|contact|about-us|why-us|admission-registration|registrationthanku-page)(?:\/[^\s.,)]*)?$/.test(
      text,
    ) ||
    /^\+91[\s-]?\d{5}[\s-]?\d{5}$/.test(text)
  );
}

function renderLinkedText(text: string, isUser: boolean, keyPrefix: string) {
  const linkPattern =
    /(https?:\/\/[^\s)]+|\/(?:courses|contact|about-us|why-us|admission-registration|registrationthanku-page)(?:\/[^\s.,)]*)?|\+91[\s-]?\d{5}[\s-]?\d{5})/g;
  const parts = text.split(linkPattern);
  const linkClassName = isUser
    ? "font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-white"
    : "font-semibold text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary";

  return parts.map((part, index) => {
    if (!part) {
      return null;
    }

    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={`${keyPrefix}-url-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {part}
        </a>
      );
    }

    if (part.startsWith("/")) {
      return (
        <a key={`${keyPrefix}-route-${index}`} href={part} className={linkClassName}>
          {part}
        </a>
      );
    }

    if (/^\+91/.test(part)) {
      const digits = part.replace(/\D/g, "");
      const nationalNumber = digits.slice(-10);

      return (
        <a
          key={`${keyPrefix}-phone-${index}`}
          href={`https://wa.me/91${nationalNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {part}
        </a>
      );
    }

    return part;
  });
}
