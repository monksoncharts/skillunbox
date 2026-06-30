export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
  status?: "sending" | "sent" | "error";
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

export interface ChatErrorResponse {
  error: string;
}
