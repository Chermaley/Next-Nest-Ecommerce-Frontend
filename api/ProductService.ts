import {AxiosResponse} from 'axios';
import {Product} from './models';
import {$api} from './api';
import {ProductType} from "./models/ProductType";
import {buildRequestParams} from "../utils";

export default class ProductService {
    static async getProductList(params: { typeId?: number }): Promise<AxiosResponse<Product[]>> {
        const reqParams = buildRequestParams({
            typeId: params.typeId
        })
        return $api.get<Product[]>(`/products/?${reqParams}`,);
    }

    static async getProduct({productId}: { productId?: number }): Promise<AxiosResponse<Product>> {
        return $api.get<Product>(`/products/${productId}`,);
    }

    static async getProductTypeList(): Promise<AxiosResponse<ProductType[]>> {
        return $api.get<ProductType[]>('/product-types',);
    }
}
