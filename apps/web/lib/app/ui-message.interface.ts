interface UIMessagePart {
  type: 'text' | 'source-url' | string;
  text: string;
  url?: string;
}

export interface UIMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  parts: UIMessagePart[];
  metadata?: unknown;
}
