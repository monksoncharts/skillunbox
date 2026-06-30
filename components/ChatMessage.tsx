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
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
          AI
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
      return (
        <code
          key={`${part}-${index}`}
          className={`rounded px-1.5 py-0.5 font-mono text-xs ${
            isUser ? "bg-white/15 text-white" : "bg-slate-100 text-slate-900"
          }`}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}
