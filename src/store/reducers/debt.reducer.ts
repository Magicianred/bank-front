import { Reducer } from 'redux'
import { DebtState, DebtTypes, DebtActionsTypes } from '../types/debt.types'

const initialState: DebtState = {
  debt: {
    value: 0,
    reason: '',
    clientId: '',
    bankerId: ''
  },
  debts: []

}

const debtReducer: Reducer<DebtState, DebtActionsTypes> = (state = initialState, action:DebtActionsTypes): DebtState => {
  switch (action.type) {
    case DebtTypes.GET_DEBT:
      return { ...state, debt: action.payload }
    case DebtTypes.GET_DEBTS:
      return { ...state, debts: action.payload }
    default:
      return state
  }
}

export { debtReducer }
