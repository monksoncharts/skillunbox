"use client";

import { useEffect, useRef, useState } from "react";
import ChatInput from "@/components/ChatInput";
import ChatWindow from "@/components/ChatWindow";
import type {
  ChatErrorResponse,
  ChatMessage,
  ChatResponse,
} from "@/types/chat";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lastUserMessageRef = useRef<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      textareaRef.current?.focus({ preventScroll: true });
    }
  }, [isOpen]);

  async function sendMessage(message = input) {
    const sanitizedMessage = message.trim().slice(0, 2_000);

    if (!sanitizedMessage || isLoading) {
      return;
    }

    setError(null);
    setInput("");
    setIsLoading(true);
    lastUserMessageRef.current = sanitizedMessage;

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: sanitizedMessage,
      createdAt: new Date().toISOString(),
      status: "sent",
    };

    setMessages((current) => [...current, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: sanitizedMessage }),
      });

      const data = (await response.json()) as ChatResponse | ChatErrorResponse;

      if (!response.ok || "error" in data) {
        throw new Error(
          "error" in data ? data.error : "The assistant could not respond.",
        );
      }

      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: data.reply,
        createdAt: new Date().toISOString(),
        status: "sent",
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function retryLastMessage() {
    const lastMessage = lastUserMessageRef.current;

    if (!lastMessage) {
      return;
    }

    void sendMessage(lastMessage);
  }

  return (
    <>
      {isOpen && (
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          error={error}
          onClose={() => setIsOpen(false)}
          onRetry={retryLastMessage}
        >
          <ChatInput
            value={input}
            disabled={isLoading}
            textareaRef={textareaRef}
            onChange={setInput}
            onSubmit={() => void sendMessage()}
          />
        </ChatWindow>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-primary/25 sm:right-6"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
        )}
      </button>
    </>
  );
}

function createId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
}
