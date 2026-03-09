import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check() {
    return { status: 'ok' };
  }

  @Get('supabase')
  async supabase() {
    return this.healthService.checkSupabase();
  }
}
