import { AppState } from '../store/store'
import config from '../../config/config'
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes'

export default function prepareHeaders(
  headers: Headers,
  {
    getState,
  }: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>
) {
  const accessToken = (getState() as AppState).auth.accessToken
  if (accessToken) {
    headers.set('Authorization', `${config.accessTokenPrefix} ${accessToken}`)
  }
  return headers
}
