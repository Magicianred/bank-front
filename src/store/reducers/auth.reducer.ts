import { Reducer } from 'redux'
import { authTypes } from '../types'

const initialState: authTypes.State = {
  auth: false,
  user: {
    _id: '',
    name: '',
    email: '',
  }
}

const authReducer: Reducer<authTypes.State, authTypes.ActionTypes> = (
  state = initialState,
  action: authTypes.ActionTypes
): authTypes.State => {
  switch (action.type) {
    case authTypes.Types.LOGIN:
      return { ...state, auth: true }
    case authTypes.Types.LOGOUT:
      return { ...state, auth: false }
    case authTypes.Types.GET_ME:
      return { ...state, auth: state.auth, user: action.payload }
    default:
      return state
  }
}

export { authReducer }
