import { AxiosResponse } from 'axios'
import { billApi } from '../../services/api'
import { billTypes } from '../types'

const getDebtsAsync = () => async (dispatch: (arg0: billTypes.ActionsTypes) => billTypes.ActionsTypes) => {
  const res: AxiosResponse<billTypes.ResponseGetAll> = await billApi.get('/')

  return dispatch({
    type: billTypes.Types.GET_BILLS,
    payload: res.data.bills
  })
}

const getDebtAsync = (billId: string) => async (dispatch: (arg0: billTypes.ActionsTypes) => billTypes.ActionsTypes) => {
  const res: AxiosResponse<billTypes.ResponseSingle> = await billApi.get(`/${billId}`)

  return dispatch({
    type: billTypes.Types.GET_BILL,
    payload: res.data.bill
  })
}

const deleteDebtAsync = (billId: string) => async (dispatch: (arg0: billTypes.ActionsTypes) => billTypes.ActionsTypes) => {
  await billApi.delete(`/${billId}`)

  return dispatch({
    type: billTypes.Types.DELETE_BILL,
    payload: billId
  })
}

export { getDebtAsync, getDebtsAsync, deleteDebtAsync }
