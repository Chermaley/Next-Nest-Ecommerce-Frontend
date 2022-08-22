import axios from "axios";
import config from "../config";
import ExpressiveError from "../ExpressiveError";

export const $api = axios.create({
  withCredentials: true,
  baseURL: config.apiUrl,
  transformResponse: [(data) => JSON.parse(data)],
});

$api.interceptors.response.use((conf) => {
  return conf;
}, handleRejectedResponse);

async function handleRejectedResponse(error: any) {
  if (error && error.response) {
    switch (error.response.status) {
      case 401:
        // if (error.config && !error.config._isRetry) {
        //   try {
        //     console.log('sdfs');
        //     if (typeof window !== 'undefined') {
        //       console.log('ref');
        //     }
        //     } catch (e: any) {
        //     console.log(e);
        //     // console.log(e);
        //     // if (e.response.status && e.response.status === 401) {
        //     //   localStorage.removeItem("refreshToken");
        //     //   localStorage.removeItem("accessToken");
        //     //   document.location.reload();
        //     // }
        //   }
        // }
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
