import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async getChat(@Body() body: any) {
    const { messages } = body;

    return await this.chatService.getChatCompletion(messages);
  }
}
