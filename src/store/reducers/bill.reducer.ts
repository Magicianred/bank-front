import { Reducer } from 'redux'
import { billTypes } from '../types'

const initialState: billTypes.State = {
  bill: {
    _id: '',
    title: '',
    value: 0,
    description: '',
    clientId: '',
  },
  bills: []
}

const billReducer: Reducer<billTypes.State, billTypes.ActionsTypes> = (
  state = initialState,
  action: billTypes.ActionsTypes
): billTypes.State => {
  switch (action.type) {
    case billTypes.Types.GET_BILL:
      return { ...state, bill: action.payload }
    case billTypes.Types.GET_BILLS:
      return { ...state, bills: action.payload }
    case billTypes.Types.DELETE_BILL:
      return {
        ...state,
        bills: state.bills.filter((bill) => bill._id !== action.payload)
      }
    default:
      return state
  }
}

export { billReducer }
