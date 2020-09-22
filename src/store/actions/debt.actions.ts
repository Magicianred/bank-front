import { AxiosResponse } from 'axios'
import { debtApi } from '../../services/api'
import { debtTypes } from '../types'

const getDebts = () => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseGetAll> = await debtApi.get('/')

  return dispatch({
    type: debtTypes.Types.GET_DEBTS,
    payload: res.data.debts
  })
}

const getDebt = (debtId: string) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseSingle> = await debtApi.get(`/${debtId}`)

  return dispatch({
    type: debtTypes.Types.GET_DEBT,
    payload: res.data.debt
  })
}

const createDebt = (newDebt: debtTypes.Model) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseSingle> = await debtApi.post('/', newDebt)

  return dispatch({
    type: debtTypes.Types.CREATE_DEBT,
    payload: res.data.debt
  })
}

const updateDebt = (debtId: string, updateDebt: debtTypes.Model) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseSingle> = await debtApi.put(`/${debtId}`, updateDebt)

  return dispatch({
    type: debtTypes.Types.UPDATE_DEBT,
    payload: res.data.debt
  })
}

const deleteDebt = (debtId: string) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  await debtApi.delete(`/${debtId}`)

  return dispatch({
    type: debtTypes.Types.DELETE_DEBT,
    payload: debtId
  })
}

export { getDebt, getDebts, createDebt, updateDebt, deleteDebt }
