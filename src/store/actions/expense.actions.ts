import { AxiosResponse } from 'axios'
import { expenseApi, userApi } from '../../services/api'
import { expenseTypes } from '../types'

const getDebtsAsync = () => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseGetAll> = await expenseApi.get('/')

  return dispatch({
    type: expenseTypes.Types.GET_EXPENSES,
    payload: res.data.expenses
  })
}

const getDebtAsync = (expenseId: string) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseSingle> = await expenseApi.get(`/${expenseId}`)

  return dispatch({
    type: expenseTypes.Types.GET_EXPENSE,
    payload: res.data.expense
  })
}

const getDebtsByUserIdAsync = (userId: string) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseGetAll> = await userApi.get(`/${userId}/expenses`)

  return dispatch({
    type: expenseTypes.Types.GET_EXPENSES_BY_USER,
    payload: res.data.expenses
  })
}

const createDebtAsync = (newDebt: expenseTypes.Model) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseSingle> = await expenseApi.post('/', newDebt)

  return dispatch({
    type: expenseTypes.Types.CREATE_EXPENSE,
    payload: res.data.expense
  })
}

const updateDebtAsync = (expenseId: string, updateDebt: expenseTypes.Model) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseSingle> = await expenseApi.put(`/${expenseId}`, updateDebt)

  return dispatch({
    type: expenseTypes.Types.UPDATE_EXPENSE,
    payload: res.data.expense
  })
}

const deleteDebtAsync = (expenseId: string) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  await expenseApi.delete(`/${expenseId}`)

  return dispatch({
    type: expenseTypes.Types.DELETE_EXPENSE,
    payload: expenseId
  })
}

export { getDebtAsync, getDebtsAsync, createDebtAsync, updateDebtAsync, deleteDebtAsync, getDebtsByUserIdAsync }
