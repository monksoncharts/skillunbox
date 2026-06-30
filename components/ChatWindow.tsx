"use client";

import { ReactNode, useEffect, useRef } from "react";
import ChatMessage from "@/components/ChatMessage";
import type { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatWindowProps {
  messages: ChatMessageType[];
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
  onRetry: () => void;
  children: ReactNode;
}

export default function ChatWindow({
  messages,
  isLoading,
  error,
  onClose,
  onRetry,
  children,
}: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading, error]);

  return (
    <section
      className="fixed bottom-24 right-4 z-50 flex h-[min(640px,calc(100dvh-7rem))] w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:right-6"
      aria-label="AI chat assistant"
    >
      <header className="flex items-center justify-between border-b border-slate-200 bg-navy px-4 py-3 text-white">
        <div>
          <h2 className="text-sm font-semibold">SkillUnbox Assistant</h2>
          <p className="text-xs text-white/70">Online</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Close chat"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </header>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
        {messages.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
            Hi, I can answer questions using the website information available
            here.
          </div>
        )}

        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isLoading && (
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
              AI
            </span>
            <span className="flex gap-1 rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
            </span>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <p>{error}</p>
            <button
              type="button"
              onClick={onRetry}
              className="mt-2 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Retry
            </button>
          </div>
        )}
      </div>

      {children}
    </section>
  );
}
