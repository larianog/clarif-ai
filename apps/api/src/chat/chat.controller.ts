import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async getChat(@Body() body: any) {
    const { messages, model, webSearch } = body;

    const assistantMessages = await this.chatService.getChatCompletion(messages, model, webSearch);

    console.log(assistantMessages[0].parts);

    // Return as JSON array of messages (user + assistant)
    return {
      messages: [...messages, ...assistantMessages],
    };
  }
}
