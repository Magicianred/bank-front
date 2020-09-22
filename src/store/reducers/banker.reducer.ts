import { Reducer } from 'redux'
import { bankerTypes } from '../types'

const initialState: bankerTypes.State = {
  banker: {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    birth: '',
    bank: '',
    address: {
      street: '',
      city: '',
      country: '',
      district: '',
      state: '',
      complement: '',
      number: 0
    }
  },
  bankers: []
}

const bankerReducer: Reducer<bankerTypes.State, bankerTypes.ActionsTypes> = (
  state = initialState,
  action: bankerTypes.ActionsTypes
): bankerTypes.State => {
  switch (action.type) {
    case bankerTypes.Types.GET_BANKER:
      return { ...state, banker: action.payload }
    case bankerTypes.Types.GET_BANKERS:
      return { ...state, bankers: action.payload }
    case bankerTypes.Types.CREATE_BANKER:
      return { ...state, banker: action.payload }
    case bankerTypes.Types.UPDATE_BANKER:
      return {
        ...state,
        bankers: state.bankers.map((banker) =>
          banker._id === action.payload._id ? (banker = action.payload) : banker
        )
      }
    case bankerTypes.Types.DELETE_BANKER:
      return {
        ...state,
        bankers: state.bankers.filter(
          (banker) => banker._id !== action.payload
        )
      }
    default:
      return state
  }
}

export { bankerReducer }
