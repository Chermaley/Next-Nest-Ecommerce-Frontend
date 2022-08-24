import { AxiosResponse } from "axios";
import { $api } from "./api";
import { Basket, Tokens } from "./models";
import config from "../../config/config";

export default class BasketService {
  static async getBasket(params: {
    accessToken: string;
  }): Promise<AxiosResponse<Basket>> {
    return $api.get<Basket>(`/basket`, {
      headers: {
        Authorization: `${config.accessTokenPrefix} ${params.accessToken}`,
      },
    });
  }

  static async addProductToBasket(params: {
    productId: number;
    name: string;
    quantity: number;
    price: number;
  }): Promise<AxiosResponse<Basket>> {
    return $api.post<Basket>(`/basket/add`, params);
  }

  static async deleteProductFromBasket(params: {
    productId: number;
  }): Promise<AxiosResponse<Basket>> {
    return $api.post<Basket>(`/basket/delete`, params);
  }
}
