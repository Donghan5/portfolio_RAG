import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ChatService {
  private readonly ragServiceUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.ragServiceUrl = this.configService.get<string>(
      'RAG_SERVICE_URL',
      'http://localhost:8000',
    );
  }

  async chat(message: string): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.httpService.post<{ reply: string }>(
          `${this.ragServiceUrl}/chat`,
          { message },
          { timeout: 30000 },
        ),
      );
      return response.data.reply;
    } catch (error: any) {
      const status =
        error?.response?.status ?? HttpStatus.INTERNAL_SERVER_ERROR;
      const detail =
        error?.response?.data?.detail ?? 'RAG service unavailable';
      throw new HttpException(detail, status);
    }
  }
}
