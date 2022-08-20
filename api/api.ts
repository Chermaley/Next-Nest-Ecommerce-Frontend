import axios from "axios";
import config from "../config";
import ExpressiveError from "../ExpressiveError";
import { Tokens } from "./models";

export const $api = axios.create({
  baseURL: config.apiUrl,
  transformResponse: [(data) => JSON.parse(data)],
});

$api.interceptors.request.use((conf) => {
  conf.headers!.Authorization = `${
    config.accessTokenPrefix
  } ${localStorage.getItem("accessToken")}`;
  return conf;
});

$api.interceptors.response.use((conf) => {
  return conf;
}, handleRejectedResponse);

async function handleRejectedResponse(error: any) {
  if (error && error.response) {
    switch (error.response.status) {
      case 401:
        if (error.config && !error.config._isRetry) {
          try {
            const refreshToken = localStorage.getItem("refreshToken");
            const { data } = await axios.post<Tokens>(
              `${config.apiUrl}auth/refresh/`,
              {},
              {
                headers: {
                  Authorization: `${config.accessTokenPrefix} ${refreshToken}`,
                },
              }
            );
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("accessToken", data.accessToken);
            return $api.request(error.config);
          } catch (e: any) {
            if (e.response.status === 401) {
              localStorage.removeItem("refreshToken");
              localStorage.removeItem("accessToken");
              document.location.reload();
            }
          }
        }
        break;
      case 500:
        throw ExpressiveError.serverError();
      case 502:
        throw ExpressiveError.serverError();
      case 504:
        throw ExpressiveError.serverError();
      default:
        throw new ExpressiveError(error.response.data.detail);
    }
  } else {
    throw ExpressiveError.noConnection();
  }
}
