import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HealthService {
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

  async checkSupabase(): Promise<{ status: string; service?: string; detail?: string }> {
    const url = `${this.ragServiceUrl}/health/supabase`;
    try {
      const response = await firstValueFrom(
        this.httpService.get<{ status: string; service?: string; detail?: string }>(
          url,
          { timeout: 10000 },
        ),
      );
      return response.data;
    } catch (error: any) {
      return {
        status: 'error',
        detail: error?.message ?? 'RAG service unreachable',
      };
    }
  }
}
