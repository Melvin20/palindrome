import { Injectable } from '@nestjs/common';
import { IPromotion } from '../../interfaces/promotion.interface';
import Promotion from '../../schemas/promotion.schema';
@Injectable()
export class PromotionMongoDBService {
  constructor() {}

  public async PromotionFind(q: object): Promise<IPromotion[]> {
    const result = await Promotion.find(q).lean();

    return result;
  }
  public async PromotionFindOne(id: string): Promise<IPromotion> {
    const result = await Promotion.findOne({ id }).lean();

    return result;
  }
}
