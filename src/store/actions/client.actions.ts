import { AxiosResponse } from 'axios'
import { clientApi } from '../../services/api'
import { clientTypes } from '../types'

const getClients = () => async (dispatch: (arg0: clientTypes.ActionsTypes) => clientTypes.ActionsTypes) => {
  const res: AxiosResponse<clientTypes.ResponseGetAll> = await clientApi.get('/')

  return dispatch({
    type: clientTypes.Types.GET_CLIENTS,
    payload: res.data.clients
  })
}

const getClient = (clientId: string) => async (dispatch: (arg0: clientTypes.ActionsTypes) => clientTypes.ActionsTypes) => {
  const res: AxiosResponse<clientTypes.ResponseSingle> = await clientApi.get(`/${clientId}`)

  return dispatch({
    type: clientTypes.Types.GET_CLIENT,
    payload: res.data.client
  })
}

const createClient = (newClient: clientTypes.Model) => async (dispatch: (arg0: clientTypes.ActionsTypes) => clientTypes.ActionsTypes) => {
  const res: AxiosResponse<clientTypes.ResponseSingle> = await clientApi.post('/', newClient)

  return dispatch({
    type: clientTypes.Types.CREATE_CLIENT,
    payload: res.data.client
  })
}

const updateClient = (clientId: string, updateClient: clientTypes.Model) => async (dispatch: (arg0: clientTypes.ActionsTypes) => clientTypes.ActionsTypes) => {
  const res: AxiosResponse<clientTypes.ResponseSingle> = await clientApi.put(`/${clientId}`, updateClient)

  return dispatch({
    type: clientTypes.Types.UPDATE_CLIENT,
    payload: res.data.client
  })
}

const deleteClient = (clientId: string) => async (dispatch: (arg0: clientTypes.ActionsTypes) => clientTypes.ActionsTypes) => {
  await clientApi.delete(`/${clientId}`)

  return dispatch({
    type: clientTypes.Types.DELETE_CLIENT,
    payload: clientId
  })
}

export { getClient, getClients, createClient, updateClient, deleteClient }
