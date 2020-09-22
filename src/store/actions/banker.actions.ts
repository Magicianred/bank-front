import { AxiosResponse } from 'axios'
import { bankerApi } from '../../services/api'
import { bankerTypes } from '../types'

const getBankers = () => async (dispatch: (arg0: bankerTypes.ActionsTypes) => bankerTypes.ActionsTypes) => {
  const res: AxiosResponse<bankerTypes.ResponseGetAll> = await bankerApi.get('/')

  return dispatch({
    type: bankerTypes.Types.GET_BANKERS,
    payload: res.data.bankers
  })
}

const getBanker = (bankerId: string) => async (dispatch: (arg0: bankerTypes.ActionsTypes) => bankerTypes.ActionsTypes) => {
  const res: AxiosResponse<bankerTypes.ResponseSingle> = await bankerApi.get(`/${bankerId}`)

  return dispatch({
    type: bankerTypes.Types.GET_BANKER,
    payload: res.data.banker
  })
}

const createBanker = (newBanker: bankerTypes.Model) => async (dispatch: (arg0: bankerTypes.ActionsTypes) => bankerTypes.ActionsTypes) => {
  const res: AxiosResponse<bankerTypes.ResponseSingle> = await bankerApi.post('/', newBanker)

  return dispatch({
    type: bankerTypes.Types.CREATE_BANKER,
    payload: res.data.banker
  })
}

const updateBanker = (bankerId: string, updateBanker: bankerTypes.Model) => async (dispatch: (arg0: bankerTypes.ActionsTypes) => bankerTypes.ActionsTypes) => {
  const res: AxiosResponse<bankerTypes.ResponseSingle> = await bankerApi.put(`/${bankerId}`, updateBanker)

  return dispatch({
    type: bankerTypes.Types.UPDATE_BANKER,
    payload: res.data.banker
  })
}

const deleteBanker = (bankerId: string) => async (dispatch: (arg0: bankerTypes.ActionsTypes) => bankerTypes.ActionsTypes) => {
  await bankerApi.delete(`/${bankerId}`)

  return dispatch({
    type: bankerTypes.Types.DELETE_BANKER,
    payload: bankerId
  })
}

export { getBanker, getBankers, createBanker, updateBanker, deleteBanker }
