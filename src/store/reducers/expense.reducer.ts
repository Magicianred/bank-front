import { Reducer } from 'redux'
import { expenseTypes } from '../types'

const initialState: expenseTypes.State = {
  expense: {
    _id: '',
    title: '',
    value: 0,
    description: '',
    clientId: '',
    type: ''
  },
  expenses: []
}

const expenseReducer: Reducer<expenseTypes.State, expenseTypes.ActionsTypes> = (
  state = initialState,
  action: expenseTypes.ActionsTypes
): expenseTypes.State => {
  switch (action.type) {
    case expenseTypes.Types.GET_EXPENSE:
      return { ...state, expense: action.payload }
    case expenseTypes.Types.GET_EXPENSES:
      return { ...state, expenses: action.payload }
    case expenseTypes.Types.GET_EXPENSES_BY_USER:
      return { ...state, expenses: action.payload }
    case expenseTypes.Types.CREATE_EXPENSE:
      return { ...state, expense: action.payload }
    case expenseTypes.Types.CLEAR_EXPENSE:
      return { ...state, expense: action.payload }
    case expenseTypes.Types.CLEAR_EXPENSES:
      return { ...state, expenses: action.payload }
    case expenseTypes.Types.UPDATE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense._id === action.payload._id ? (expense = action.payload) : expense
        )
      }
    case expenseTypes.Types.DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense._id !== action.payload)
      }
    default:
      return state
  }
}

export { expenseReducer }
