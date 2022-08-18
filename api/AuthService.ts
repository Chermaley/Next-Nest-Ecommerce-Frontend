import {AxiosResponse} from 'axios';
import {Product} from './models';
import {$api} from './api';
import {ProductType} from "./models/ProductType";
import {buildRequestParams} from "../utils";

export default class AuthService {
    static async login(params: { email: string, password: string }): Promise<AxiosResponse<{token: string}>> {
        return $api.post<{token: string}>(`/auth/login`, {
            ...params
        });
    }

    static async register(params: { email: string, password: string }): Promise<AxiosResponse<{token: string}>> {
        return $api.post<{token: string}>(`/auth/registration`, {
            ...params
        });
    }
}
