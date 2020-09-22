import { Reducer } from 'redux'
import { userTypes } from '../types'

const initialState: userTypes.State = {
  user: {
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
    }
  },
  users: []
}

const userReducer: Reducer<userTypes.State, userTypes.ActionsTypes> = (
  state = initialState,
  action: userTypes.ActionsTypes
): userTypes.State => {
  switch (action.type) {
    case userTypes.Types.GET_USER:
      return { ...state, user: action.payload }
    case userTypes.Types.GET_USERS:
      return { ...state, users: action.payload }
    case userTypes.Types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(
          (user) => user._id !== action.payload
        )
      }
    default:
      return state
  }
}

export { userReducer }
