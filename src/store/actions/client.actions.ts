import { ClientTypes, ClientActionsTypes, ClientModel } from '../types/client.types'
import { clientApi } from '../../services/api'
import { AxiosResponse } from 'axios'

interface responseGetClients {
  sucess: boolean,
  count: Number,
  clients: ClientModel[]
}

interface responseSingleClient {
  sucess: boolean
  client: ClientModel
}

interface responseDeleteClient {
  sucess: boolean
  client: {}
}

export const getClients = () => async (dispatch: (arg0: ClientActionsTypes) => ClientActionsTypes) => {
  const res: AxiosResponse<responseGetClients> = await clientApi.get('/')

  return dispatch({
    type: ClientTypes.GET_CLIENTS,
    payload: res.data.clients
  })
}

export const getClient = (clientId: string) => async (dispatch: (arg0: ClientActionsTypes) => ClientActionsTypes) => {
  const res: AxiosResponse<responseSingleClient> = await clientApi.get(`/${clientId}`)

  return dispatch({
    type: ClientTypes.GET_CLIENT,
    payload: res.data.client
  })
}

export const createClient = (newClient: ClientModel) => async (dispatch: (arg0: ClientActionsTypes) => ClientActionsTypes) => {
  const res: AxiosResponse<responseSingleClient> = await clientApi.post('/', newClient)

  return dispatch({
    type: ClientTypes.CREATE_CLIENT,
    payload: res.data.client
  })
}

export const updateClient = (clientId: string, updateClient: ClientModel) => async (dispatch: (arg0: ClientActionsTypes) => ClientActionsTypes) => {
  const res: AxiosResponse<responseSingleClient> = await clientApi.put(`/${clientId}`, updateClient)

  return dispatch({
    type: ClientTypes.UPDATE_CLIENT,
    payload: res.data.client
  })
}

export const deleteClient = (clientId: string) => async (dispatch: (arg0: ClientActionsTypes) => ClientActionsTypes) => {
  const res: AxiosResponse<responseDeleteClient> = await clientApi.delete(`/${clientId}`)

  return dispatch({
    type: ClientTypes.DELETE_CLIENT,
    payload: clientId
  })
}
