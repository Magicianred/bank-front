import { userTypes } from './'

// Data Types

// Action Types
export enum Types {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  GET_ME = 'GET_ME',
}

interface Login {
  type: typeof Types.LOGIN
  payload: boolean
}

interface Logout {
  type: typeof Types.LOGOUT
  payload: boolean
}

interface GetMe {
  type: typeof Types.GET_ME
  payload: userTypes.Model
}

export interface ResponseLogin {
  sucess: boolean,
  token: string,
}

export interface ResponseGetMe {
  sucess: boolean
  user: userTypes.Model
}

export type ActionTypes = Login | Logout | GetMe

// State Types
export interface State {
  readonly auth: boolean
  readonly user: userTypes.Model
}
