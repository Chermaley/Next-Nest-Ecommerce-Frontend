import {AxiosResponse} from 'axios';
import {$api} from './api';
import {Basket} from "./models";

export default class BasketService {
  static async getBasket(): Promise<AxiosResponse<Basket>> {
    return $api.get<Basket>(`/basket`);
  }

}
