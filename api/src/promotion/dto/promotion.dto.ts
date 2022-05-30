import { IsNotEmpty, IsString, IS_LENGTH } from 'class-validator';
export class PromotionQueryDTO {
  @IsNotEmpty()
  @IsString()
  search: string;
}
