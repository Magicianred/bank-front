import { authApi, bankerApi, clientApi, debtApi, userApi } from '../services/api'

const setAuthorizationToken = (token: string | boolean) => {
  if (token) {
    authApi.defaults.headers.common.authorization = `Bearer ${token}`
    bankerApi.defaults.headers.common.authorization = `Bearer ${token}`
    clientApi.defaults.headers.common.authorization = `Bearer ${token}`
    debtApi.defaults.headers.common.authorization = `Bearer ${token}`
    userApi.defaults.headers.common.authorization = `Bearer ${token}`
  } else {
    delete authApi.defaults.headers.common.authorization
    delete bankerApi.defaults.headers.common.authorization
    delete clientApi.defaults.headers.common.authorization
    delete debtApi.defaults.headers.common.authorization
    delete userApi.defaults.headers.common.authorization
  }
}

export { setAuthorizationToken }
