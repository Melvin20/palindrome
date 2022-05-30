export interface IPromotion {
  _id?: string;
  id: number;
  brand: string;
  description: string;
  image: string;
  discount?: number;
  price: number;
}
