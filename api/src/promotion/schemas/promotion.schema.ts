import { Schema, model } from 'mongoose';
import { IPromotion } from '../interfaces/promotion.interface';

const PromotionSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export default model<IPromotion>('Promotion', PromotionSchema);
