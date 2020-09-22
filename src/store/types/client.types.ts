import { debtTypes, userTypes } from './'

// Data Types
export interface Model extends userTypes.Model {
  debts?: debtTypes.Model[]
}

// Action Types
export enum Types {
  GET_CLIENT = 'GET_CLIENT',
  GET_CLIENTS = 'GET_CLIENTS',
  CREATE_CLIENT = 'CREATE_CLIENT',
  UPDATE_CLIENT = 'UPDATE_CLIENT',
  DELETE_CLIENT = 'DELETE_CLIENT',
}

interface Get {
  type: typeof Types.GET_CLIENT
  payload: Model
}

interface Gets {
  type: typeof Types.GET_CLIENTS
  payload: Model[]
}

interface Create {
  type: typeof Types.CREATE_CLIENT,
  payload: Model
}

interface Update {
  type: typeof Types.UPDATE_CLIENT,
  payload: Model
}

interface Delete {
  type: typeof Types.DELETE_CLIENT,
  payload: {}
}

export interface ResponseGetAll {
  sucess: boolean,
  count: Number,
  clients: Model[]
}

export interface ResponseSingle {
  sucess: boolean
  client: Model
}

export type ActionsTypes = Get | Gets | Create | Update | Delete

// State Types
export interface State {
  readonly client: Model
  readonly clients: Model[]
}
