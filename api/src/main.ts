import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as helmet from 'helmet';
import { AllExceptionsFilter, TimerMiddleware } from './meddleware';
import './databases/mongo-db/db.connection';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.use(new TimerMiddleware().use);
  app.enableCors();

  app.use(
    helmet({
      frameguard: { action: 'deny' },
      referrerPolicy: { policy: 'strict-origin' },
      hsts: { maxAge: 3600 },
    }),
  );

  const port = process.env.PORT || 3002;
  await app.listen(port);
}
bootstrap();
