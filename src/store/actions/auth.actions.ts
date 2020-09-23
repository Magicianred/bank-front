import { AxiosResponse } from 'axios'
import { authApi } from '../../services/api'
import { authTypes } from '../types'
import { setAuthorizationToken } from 'src/utils/setAuthorizationToken'

const login = (email: string, password: string) => async (dispatch: (arg0: authTypes.ActionTypes) => authTypes.ActionTypes) => {
  const res: AxiosResponse<authTypes.ResponseLogin> = await authApi.post('/login', { email, password })

  const { token } = res.data

  localStorage.setItem('token', JSON.stringify(token))

  setAuthorizationToken(token)

  return dispatch({
    type: authTypes.Types.LOGIN,
    payload: true
  })
}

const logout = () => async (dispatch: (arg0: authTypes.ActionTypes) => authTypes.ActionTypes) => {
  const res: AxiosResponse<authTypes.ResponseLogin> = await authApi.post('/logout')

  localStorage.removeItem('token')

  setAuthorizationToken(false)

  return dispatch({
    type: authTypes.Types.LOGOUT,
    payload: false
  })
}

const getMe = () => async (dispatch: (arg0: authTypes.ActionTypes) => authTypes.ActionTypes) => {
  const res: AxiosResponse<authTypes.ResponseGetMe> = await authApi.get('/me')

  return dispatch({
    type: authTypes.Types.GET_ME,
    payload: res.data.user
  })
}

export { login, logout, getMe }
