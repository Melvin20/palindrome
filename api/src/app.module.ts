import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PromotionModule } from './promotion/promotion.module';
@Module({
  imports: [ConfigModule.forRoot(), PromotionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
