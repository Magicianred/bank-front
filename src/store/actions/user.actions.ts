import { AxiosResponse } from 'axios'
import { userApi } from '../../services/api'
import { userTypes } from '../types'

const getUsers = () => async (dispatch: (arg0: userTypes.ActionsTypes) => userTypes.ActionsTypes) => {
  const res: AxiosResponse<userTypes.ResponseGetAll> = await userApi.get('/')

  return dispatch({
    type: userTypes.Types.GET_USERS,
    payload: res.data.users
  })
}

const getUser = (userId: string) => async (dispatch: (arg0: userTypes.ActionsTypes) => userTypes.ActionsTypes) => {
  const res: AxiosResponse<userTypes.ResponseSingle> = await userApi.get(`/${userId}`)

  return dispatch({
    type: userTypes.Types.GET_USER,
    payload: res.data.user
  })
}

const deleteUser = (userId: string) => async (dispatch: (arg0: userTypes.ActionsTypes) => userTypes.ActionsTypes) => {
  await userApi.delete(`/${userId}`)

  return dispatch({
    type: userTypes.Types.DELETE_USER,
    payload: userId
  })
}

export { getUser, getUsers, deleteUser }
