"use client";

import { FormEvent, KeyboardEvent, RefObject } from "react";

interface ChatInputProps {
  value: string;
  disabled: boolean;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function ChatInput({
  value,
  disabled,
  textareaRef,
  onChange,
  onSubmit,
}: ChatInputProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white p-3">
      <div className="flex items-end gap-2 rounded-2xl border border-slate-300 bg-slate-50 p-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          maxLength={2_000}
          placeholder="Ask about this website"
          disabled={disabled}
          className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed"
          aria-label="Chat message"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:bg-slate-300"
          aria-label="Send message"
        >
          {disabled ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
