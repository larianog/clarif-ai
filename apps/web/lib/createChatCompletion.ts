"use server";

import { uuidv4 } from "zod";
import { UIMessage } from "./app/ui-message.interface";

export default async function createChatCompletion(
  messages: UIMessage[]
) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
    }),
  });

  const res = await response.json();

  //Convert the response to UI Message format
  const assistantMessages: UIMessage[] = Array.isArray(res)
    ? res.map((msg) => ({
        id: msg.id ?? uuidv4(),
        role: msg.role ?? 'assistant',
        parts: Array.isArray(msg.parts)
          ? msg.parts.map((p: { type: any; text: any; url: any; }) => ({
              type: p.type ?? 'text',
              text: p.text ?? '',
              url: p.url,
            }))
          : [{ type: 'text', text: msg.content ?? '' }],
      }))
    : [
        {
          id: uuidv4(),
          role: 'assistant',
          parts: [{ type: 'text', text: res?.content ?? '' }],
        },
      ];

  return assistantMessages;
}