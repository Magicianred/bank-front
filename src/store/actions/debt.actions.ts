import { AxiosResponse } from 'axios'
import { debtApi, userApi } from '../../services/api'
import { debtTypes } from '../types'

const getDebtsAsync = () => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseGetAll> = await debtApi.get('/')

  return dispatch({
    type: debtTypes.Types.GET_DEBTS,
    payload: res.data.debts
  })
}

const getDebtAsync = (debtId: string) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseSingle> = await debtApi.get(`/${debtId}`)

  return dispatch({
    type: debtTypes.Types.GET_DEBT,
    payload: res.data.debt
  })
}

const getDebtsByUserIdAsync = (userId: string) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseGetAll> = await userApi.get(`/${userId}/debts`)

  return dispatch({
    type: debtTypes.Types.GET_DEBTS_BY_USER,
    payload: res.data.debts
  })
}

const createDebtAsync = (newDebt: debtTypes.Model) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseSingle> = await debtApi.post('/', newDebt)

  return dispatch({
    type: debtTypes.Types.CREATE_DEBT,
    payload: res.data.debt
  })
}

const updateDebtAsync = (debtId: string, updateDebt: debtTypes.Model) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  const res: AxiosResponse<debtTypes.ResponseSingle> = await debtApi.put(`/${debtId}`, updateDebt)

  return dispatch({
    type: debtTypes.Types.UPDATE_DEBT,
    payload: res.data.debt
  })
}

const deleteDebtAsync = (debtId: string) => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {
  await debtApi.delete(`/${debtId}`)

  return dispatch({
    type: debtTypes.Types.DELETE_DEBT,
    payload: debtId
  })
}

const clearDebtAsync = () => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {

  return dispatch({
    type: debtTypes.Types.CLEAR_DEBT,
    payload: { bankerId: '', clientId: '', description: '', title: '', value: 0, _id: '', paid: false }
  })
}

const clearDebtsAsync = () => async (dispatch: (arg0: debtTypes.ActionsTypes) => debtTypes.ActionsTypes) => {

  return dispatch({
    type: debtTypes.Types.CLEAR_DEBTS,
    payload: []
  })
}

export { getDebtAsync, getDebtsAsync, createDebtAsync, updateDebtAsync, deleteDebtAsync, getDebtsByUserIdAsync, clearDebtAsync, clearDebtsAsync }
