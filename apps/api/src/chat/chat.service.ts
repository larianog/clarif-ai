import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class ChatService {
  private client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
  });

  async getChatCompletion(messages: any[], model?: string, webSearch?: boolean) {
    // Convert messages from AI SDK format to OpenAI format
    const formattedMessages = messages.map((m) => {
      const content = Array.isArray(m.parts)
        ? m.parts.map((p) => p.text || '').join(' ')
        : m.content || '';
      return { role: m.role || 'user', content: content.trim() };
    });

    const response = await this.client.chat.completions.create({
      model: 'openai/gpt-4o',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that answers questions.' },
        ...formattedMessages,
      ],
    });

    // Extract the assistant’s message text
    const assistantText = response.choices?.[0]?.message?.content || '';

    // Return in AI SDK format (UIMessage)
    return [
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        parts: [{ type: 'text', text: assistantText }],
      },
    ];
  }
}
