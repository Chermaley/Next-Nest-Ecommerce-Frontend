import axios from 'axios'
import config from '../../config'
import ExpressiveError from '../ExpressiveError'

export const $api = axios.create({
  withCredentials: true,
  baseURL: config.apiUrl,
})

$api.interceptors.response.use((conf) => {
  return conf
}, handleRejectedResponse)

async function handleRejectedResponse(error: any) {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        throw new ExpressiveError(error.response.data.join(', '))
      case 500:
        throw ExpressiveError.serverError()
      case 502:
        throw ExpressiveError.serverError()
      case 504:
        throw ExpressiveError.serverError()
      default:
        throw new ExpressiveError(error.response.data.detail)
    }
  } else {
    throw ExpressiveError.noConnection()
  }
}
