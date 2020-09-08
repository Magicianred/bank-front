import { DebtTypes, DebtActionsTypes, DebtModel } from '../types/debt.types'
import { debtApi } from '../../services/api'
import { AxiosResponse } from 'axios'

interface responseGetDebts {
  sucess: boolean,
  count: Number,
  debts: DebtModel[]
}

interface responseSingleDebt {
  sucess: boolean
  debt: DebtModel
}

interface responseDeleteDebt {
  sucess: boolean
  debt: {}
}

export const getDebts = () => async (dispatch: (arg0: DebtActionsTypes) => DebtActionsTypes) => {
  const res: AxiosResponse<responseGetDebts> = await debtApi.get('/')

  return dispatch({
    type: DebtTypes.GET_DEBTS,
    payload: res.data.debts
  })
}

export const getDebt = (debtId: string) => async (dispatch: (arg0: DebtActionsTypes) => DebtActionsTypes) => {
  const res: AxiosResponse<responseSingleDebt> = await debtApi.get(`/${debtId}`)

  return dispatch({
    type: DebtTypes.GET_DEBT,
    payload: res.data.debt
  })
}

export const createDebt = (newDebt: DebtModel) => async (dispatch: (arg0: DebtActionsTypes) => DebtActionsTypes) => {
  const res: AxiosResponse<responseSingleDebt> = await debtApi.post('/', newDebt)

  return dispatch({
    type: DebtTypes.CREATE_DEBT,
    payload: res.data.debt
  })
}

export const updateDebt = (debtId: string, updateDebt: DebtModel) => async (dispatch: (arg0: DebtActionsTypes) => DebtActionsTypes) => {
  const res: AxiosResponse<responseSingleDebt> = await debtApi.put(`/${debtId}`, updateDebt)

  return dispatch({
    type: DebtTypes.UPDATE_DEBT,
    payload: res.data.debt
  })
}

export const deleteDebt = (debtId: string) => async (dispatch: (arg0: DebtActionsTypes) => DebtActionsTypes) => {
  const res: AxiosResponse<responseDeleteDebt> = await debtApi.delete(`/${debtId}`)

  return dispatch({
    type: DebtTypes.DELETE_DEBT,
    payload: debtId
  })
}
