import { UserTypes, UserActionsTypes, UserModel } from '../types/user.types'
import { userApi } from '../../services/api'
import { AxiosResponse } from 'axios'

interface responseGetUsers {
  sucess: boolean,
  count: Number,
  users: UserModel[]
}

interface responseSingleUser {
  sucess: boolean
  user: UserModel
}

interface responseDeleteUser {
  sucess: boolean
  user: {}
}

export const getUsers = () => async (dispatch: (arg0: UserActionsTypes) => UserActionsTypes) => {
  const res: AxiosResponse<responseGetUsers> = await userApi.get('/')

  return dispatch({
    type: UserTypes.GET_USERS,
    payload: res.data.users
  })
}

export const getUser = (userId: string) => async (dispatch: (arg0: UserActionsTypes) => UserActionsTypes) => {
  const res: AxiosResponse<responseSingleUser> = await userApi.get(`/${userId}`)

  return dispatch({
    type: UserTypes.GET_USER,
    payload: res.data.user
  })
}

export const deleteUser = (userId: string) => async (dispatch: (arg0: UserActionsTypes) => UserActionsTypes) => {
  const res: AxiosResponse<responseDeleteUser> = await userApi.delete(`/${userId}`)

  return dispatch({
    type: UserTypes.DELETE_USER,
    payload: userId
  })
}
