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
    case DebtTypes.CREATE_DEBT:
      return { ...state, debt: action.payload }
    case DebtTypes.UPDATE_DEBT:
      return { ...state, debts: state.debts.map(debt => debt._id === action.payload._id ? debt = action.payload : debt) }
    case DebtTypes.DELETE_DEBT:
      return { ...state, debts: state.debts.filter(debt => debt._id !== action.payload) }
    default:
      return state
  }
}

export { debtReducer }
