import { Injectable } from '@nestjs/common';
import { IPromotion } from '../interfaces/promotion.interface';
import { PromotionMongoDBService } from './db-query/promotion.service.db';
@Injectable()
export class PromotionService {
    constructor(private promotionMongoDBService: PromotionMongoDBService) { };
    private isPalindrome(query: string) {
        const filter = /[\W_]/g;
        const lowRegisterFilter = query.toLowerCase().replace(filter, '');
        const filterReverseString = lowRegisterFilter.split('').reverse().join('');
        return filterReverseString === lowRegisterFilter;
    }

    public async searchPromotion(q: string) {
        const search = { $or: [{ "brand": { "$regex": q, "$options": "i" } }, { "description": { "$regex": q, "$options": "i" } }] };
        const palindrome = this.isPalindrome(q);
        const resultQuery: IPromotion[] = await this.promotionMongoDBService.PromotionFind(search);
        const result = resultQuery  ? resultQuery.map((r: IPromotion) => {
            if (palindrome) {
                r.price = this.isPalindrome(q) ? (r.price / 2) : r.price;
                r.discount = 50;
            }
            r.image=`https://${r.image}`
            return r;
        }) : resultQuery;

        return result
    };
    public async ReadPromotion(id: string) {
        let resultQuery: IPromotion = await this.promotionMongoDBService.PromotionFindOne(id);
        resultQuery.image=`https://${resultQuery.image}`
        return resultQuery
    };

}