import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const frontendUrl = configService.get<string>('FRONTEND_URL', 'http://localhost:5173');

  app.use(helmet());
  app.enableCors({
    origin: [frontendUrl],
    methods: ['GET', 'POST'],
    credentials: true,
  });

  const port = configService.get<number>('PORT', 3001);
  await app.listen(port);
  console.log(`API Gateway running on port ${port}`);
}
bootstrap();
