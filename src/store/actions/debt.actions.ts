import { DebtTypes, DebtActionsTypes, DebtModel } from '../types/debt.types'
import { debtApi } from '../../services/api'
import { AxiosResponse } from 'axios'

interface responseGetDebts {
  sucess: boolean,
  count: Number,
  debts: DebtModel[]
}

interface responseGetDebt {
  sucess: boolean
  debt: DebtModel
}

export const getDebts = () => async (dispatch: (arg0: DebtActionsTypes) => DebtActionsTypes) => {
  const res: AxiosResponse<responseGetDebts> = await debtApi.get('/')

  return dispatch({
    type: DebtTypes.GET_DEBTS,
    payload: res.data.debts
  })
}

export const getDebt = (debtId: string) => async (dispatch: (arg0: DebtActionsTypes) => DebtActionsTypes) => {
  const res: AxiosResponse<responseGetDebt> = await debtApi.get(`/${debtId}`)

  return dispatch({
    type: DebtTypes.GET_DEBT,
    payload: res.data.debt
  })
}
