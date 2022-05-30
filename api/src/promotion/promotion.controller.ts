import { Controller, Get, Param, Query } from '@nestjs/common';
import { PromotionQueryDTO } from './dto/promotion.dto';
import { IPromotion } from './interfaces/promotion.interface';
import { PromotionService } from './service/promotion.service';
@Controller('promotion')
export class PromotionController {
  constructor(private promotionService: PromotionService) {}

  @Get(':id')
  async read(@Param() param): Promise<IPromotion> {
    const result = await this.promotionService.ReadPromotion(param.id);
    return result;
  }
  @Get()
  async searchPromotion(@Query() query: PromotionQueryDTO): Promise<IPromotion[]> {
    const result = await this.promotionService.searchPromotion(query.search);
    return result;
  }
}
