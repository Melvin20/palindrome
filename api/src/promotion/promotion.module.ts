import { Module } from '@nestjs/common';
import { PromotionService } from './service/promotion.service';
import { PromotionController } from './promotion.controller';
import { PromotionMongoDBService } from './service/db-query/promotion.service.db';
@Module({
  imports: [],
  controllers: [PromotionController],
  providers: [PromotionService, PromotionMongoDBService],
})
export class PromotionModule {}
