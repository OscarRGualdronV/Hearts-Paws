import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:[process.env.FRONTEND_UR],
    credentials: true
  })
  await app.listen(process.env.PORT||3001);
}
bootstrap();
