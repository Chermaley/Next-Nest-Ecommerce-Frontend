import axios, {AxiosResponse} from 'axios';
import {$api} from './api';
import { Tokens } from "./models";
import { User } from "../store/reducers/authSlice";
import config from "../config";

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

    static async getCurrentUser(accessToken?: string): Promise<AxiosResponse<User>> {
        return $api.get(`/users/me`, {
            headers: {
                Authorization: `${config.accessTokenPrefix} ${accessToken}`
            }
        });
    }

    // static async refreshTokens(params: {refreshToken}): Promise<AxiosResponse<Tokens>> {
    //     return $api.post<Tokens>(`/auth/local/registration`, {
    //     }, {au});
    // }
}
