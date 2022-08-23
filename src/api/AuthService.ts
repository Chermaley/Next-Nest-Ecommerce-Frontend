import {AxiosResponse} from 'axios';
import {$api} from './api';
import { Tokens } from "./models";

export default class AuthService {
    static async signIn(params: { email: string, password: string }): Promise<AxiosResponse<Tokens>> {
        return $api.post<Tokens>(`/auth/local/signin`, {
            ...params
        });
    }

    static async signUp(params: { email: string, password: string }): Promise<AxiosResponse<Tokens>> {
        return $api.post<Tokens>(`/auth/local/signUp`, {
            ...params
        });
    }

    static async logout(): Promise<AxiosResponse<void>> {
        return $api.post(`/auth/logout`);
    }

}
