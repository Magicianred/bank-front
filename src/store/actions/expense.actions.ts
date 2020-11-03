import { AxiosResponse } from 'axios'
import { expenseApi, userApi } from '../../services/api'
import { expenseTypes } from '../types'

const getExpensesAsync = () => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseGetAll> = await expenseApi.get('/')

  return dispatch({
    type: expenseTypes.Types.GET_EXPENSES,
    payload: res.data.expenses
  })
}

const getExpenseAsync = (expenseId: string) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseSingle> = await expenseApi.get(`/${expenseId}`)

  return dispatch({
    type: expenseTypes.Types.GET_EXPENSE,
    payload: res.data.expense
  })
}

const getExpensesByUserIdAsync = (userId: string) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseGetAll> = await userApi.get(`/${userId}/expenses`)

  return dispatch({
    type: expenseTypes.Types.GET_EXPENSES_BY_USER,
    payload: res.data.expenses
  })
}

const createExpenseAsync = (newExpense: expenseTypes.Model) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseSingle> = await expenseApi.post('/', newExpense)

  return dispatch({
    type: expenseTypes.Types.CREATE_EXPENSE,
    payload: res.data.expense
  })
}

const updateExpenseAsync = (expenseId: string, updateExpense: expenseTypes.Model) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  const res: AxiosResponse<expenseTypes.ResponseSingle> = await expenseApi.put(`/${expenseId}`, updateExpense)

  return dispatch({
    type: expenseTypes.Types.UPDATE_EXPENSE,
    payload: res.data.expense
  })
}

const deleteExpenseAsync = (expenseId: string) => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {
  await expenseApi.delete(`/${expenseId}`)

  return dispatch({
    type: expenseTypes.Types.DELETE_EXPENSE,
    payload: expenseId
  })
}

const clearExpenseAsync = () => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {

  return dispatch({
    type: expenseTypes.Types.CLEAR_EXPENSE,
    payload: { clientId: '', description: '', title: '', value: 0, _id: '', paid: false, type: '' }
  })
}

const clearExpensesAsync = () => async (dispatch: (arg0: expenseTypes.ActionsTypes) => expenseTypes.ActionsTypes) => {

  return dispatch({
    type: expenseTypes.Types.CLEAR_EXPENSES,
    payload: []
  })
}

export { getExpenseAsync, getExpensesAsync, createExpenseAsync, updateExpenseAsync, deleteExpenseAsync, getExpensesByUserIdAsync, clearExpenseAsync, clearExpensesAsync }
