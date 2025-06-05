import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:'http://localhost:3000',
    credentials: true
  })
  await app.listen(3001);
}
bootstrap();
