import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatRequestDto, ChatResponseDto } from './dto/chat.dto';

@Controller('api')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('chat')
  async chat(@Body() body: ChatRequestDto): Promise<ChatResponseDto> {
    const reply = await this.chatService.chat(body.message);
    return { reply };
  }
}
