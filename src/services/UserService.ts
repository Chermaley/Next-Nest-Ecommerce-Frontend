import { AxiosResponse } from "axios";
import { User } from "./models";
import { $api } from "./api";
import config from "../../config/config";

export default class UserService {
  static async getCurrentUser(params: {
    accessToken: string
  }): Promise<AxiosResponse<User>> {
    return $api.get(`/users/me`, {
      headers: {
        Authorization: `${config.accessTokenPrefix} ${params.accessToken}`,
      },
    })
  }
}
