
export type Basket = {
  id: number;
  products: BasketProduct[];
};

export type BasketProduct = {
  id: number;
  price: number;
  name: string;
  quantity: number;
  subTotalPrice: number;
};
