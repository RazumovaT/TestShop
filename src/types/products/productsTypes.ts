export type SingleProduct = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

export type ProductDataList = SingleProduct[];

export type CartDataList = { product: SingleProduct; quantity: number }[];
