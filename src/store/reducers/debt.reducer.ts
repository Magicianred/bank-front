import { Reducer } from 'redux'
import { debtTypes } from '../types'

const initialState: debtTypes.State = {
  debt: {
    _id: '',
    value: 0,
    reason: '',
    clientId: '',
    bankerId: ''
  },
  debts: []
}

const debtReducer: Reducer<debtTypes.State, debtTypes.ActionsTypes> = (
  state = initialState,
  action: debtTypes.ActionsTypes
): debtTypes.State => {
  switch (action.type) {
    case debtTypes.Types.GET_DEBT:
      return { ...state, debt: action.payload }
    case debtTypes.Types.GET_DEBTS:
      return { ...state, debts: action.payload }
    case debtTypes.Types.CREATE_DEBT:
      return { ...state, debt: action.payload }
    case debtTypes.Types.UPDATE_DEBT:
      return {
        ...state,
        debts: state.debts.map((debt) =>
          debt._id === action.payload._id ? (debt = action.payload) : debt
        )
      }
    case debtTypes.Types.DELETE_DEBT:
      return {
        ...state,
        debts: state.debts.filter((debt) => debt._id !== action.payload)
      }
    default:
      return state
  }
}

export { debtReducer }
