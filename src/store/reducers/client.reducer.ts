import { Reducer } from 'redux'
import { clientTypes } from '../types'

const initialState: clientTypes.State = {
  client: {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    birth: '',
    address: {
      street: '',
      city: '',
      country: '',
      district: '',
      state: '',
      complement: '',
      number: 0
    },
    debts: []
  },
  clients: []
}

const clientReducer: Reducer<clientTypes.State, clientTypes.ActionsTypes> = (
  state = initialState,
  action: clientTypes.ActionsTypes
): clientTypes.State => {
  switch (action.type) {
    case clientTypes.Types.GET_CLIENT:
      return { ...state, client: action.payload }
    case clientTypes.Types.GET_CLIENTS:
      return { ...state, clients: action.payload }
    case clientTypes.Types.CREATE_CLIENT:
      return { ...state, client: action.payload }
    case clientTypes.Types.UPDATE_CLIENT:
      return {
        ...state,
        clients: state.clients.map((client) =>
          client._id === action.payload._id ? (client = action.payload) : client
        )
      }
    case clientTypes.Types.DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(
          (client) => client._id !== action.payload
        )
      }
    default:
      return state
  }
}

export { clientReducer }
