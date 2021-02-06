import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import './keepAlive';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
