import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class ChatService {
  private client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
  });

  async getChatCompletion(messages: any[]) {
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

    const uimessage = [
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          parts: [{ type: 'text', text: assistantText }],
        },
      ]; 
    console.log(uimessage[0].parts);

    // Return in AI SDK format (UIMessage)
    return [
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        parts: [{ type: 'text', text: assistantText }],
      },
    ];
  }

  async extractText(file: File){
    try {
      
      // Convert file to base64
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = buffer.toString('base64');
      
      // Create proper data URL based on file type
      const mimeType = file.type || 'image/jpeg'; // fallback to jpeg if type is not available
      const base64Url = `data:${mimeType};base64,${base64Image}`;
  
      const response = await this.client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Extract text from the image/document with high precision, answer in portuguese.
                
                Return two sections:
                First section: Identify the document and resume of what is about.
                Second section: The text extracted from the document.`
              },
              {
                type: "image_url",
                image_url: {
                  url: base64Url
                }
              }
            ]
          }
        ]
      });

      const assistantText = response.choices?.[0]?.message?.content || '';  
      
      // Log for debugging

      const uimessage = [
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          parts: [{ type: 'text', text: assistantText }],
        },
      ]; 
    console.log(uimessage);

    // Return in AI SDK format (UIMessage)
    return [
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        parts: [{ type: 'text', text: assistantText }],
      },
    ];
  } catch (error: unknown) {
    const err = error as Error;
    console.error('OpenAI OCR Error:', err.message);
    return err;
  }
  }
}
