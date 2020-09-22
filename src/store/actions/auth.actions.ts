import { AxiosResponse } from 'axios'
import { authApi } from '../../services/api'
import { authTypes } from '../types'
import { setAuthorizationToken } from 'src/utils/setAuthorizationToken'

const login = () => async (dispatch: (arg0: authTypes.ActionTypes) => authTypes.ActionTypes) => {
  const res: AxiosResponse<authTypes.ResponseLogin> = await authApi.post('/login')

  const { token } = res.data

  setAuthorizationToken(token)

  localStorage.setItem('token', JSON.stringify(token))

  return dispatch({
    type: authTypes.Types.LOGIN,
    payload: res.data.sucess
  })
}

const logout = () => async (dispatch: (arg0: authTypes.ActionTypes) => authTypes.ActionTypes) => {
  const res: AxiosResponse<authTypes.ResponseLogin> = await authApi.post('/logout')

  setAuthorizationToken(false)

  localStorage.removeItem('token')

  return dispatch({
    type: authTypes.Types.LOGOUT,
    payload: res.data.sucess
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
