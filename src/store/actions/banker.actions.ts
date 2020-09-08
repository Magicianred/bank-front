import { BankerTypes, BankerActionsTypes, BankerModel } from '../types/banker.types'
import { bankerApi } from '../../services/api'
import { AxiosResponse } from 'axios'

interface responseGetBankers {
  sucess: boolean,
  count: Number,
  bankers: BankerModel[]
}

interface responseSingleBanker {
  sucess: boolean
  banker: BankerModel
}

interface responseDeleteBanker {
  sucess: boolean
  banker: {}
}

export const getBankers = () => async (dispatch: (arg0: BankerActionsTypes) => BankerActionsTypes) => {
  const res: AxiosResponse<responseGetBankers> = await bankerApi.get('/')

  return dispatch({
    type: BankerTypes.GET_BANKERS,
    payload: res.data.bankers
  })
}

export const getBanker = (bankerId: string) => async (dispatch: (arg0: BankerActionsTypes) => BankerActionsTypes) => {
  const res: AxiosResponse<responseSingleBanker> = await bankerApi.get(`/${bankerId}`)

  return dispatch({
    type: BankerTypes.GET_BANKER,
    payload: res.data.banker
  })
}

export const createBanker = (newBanker: BankerModel) => async (dispatch: (arg0: BankerActionsTypes) => BankerActionsTypes) => {
  const res: AxiosResponse<responseSingleBanker> = await bankerApi.post('/', newBanker)

  return dispatch({
    type: BankerTypes.CREATE_BANKER,
    payload: res.data.banker
  })
}

export const updateBanker = (bankerId: string, updateBanker: BankerModel) => async (dispatch: (arg0: BankerActionsTypes) => BankerActionsTypes) => {
  const res: AxiosResponse<responseSingleBanker> = await bankerApi.put(`/${bankerId}`, updateBanker)

  return dispatch({
    type: BankerTypes.UPDATE_BANKER,
    payload: res.data.banker
  })
}

export const deleteBanker = (bankerId: string) => async (dispatch: (arg0: BankerActionsTypes) => BankerActionsTypes) => {
  const res: AxiosResponse<responseDeleteBanker> = await bankerApi.delete(`/${bankerId}`)

  return dispatch({
    type: BankerTypes.DELETE_BANKER,
    payload: bankerId
  })
}
