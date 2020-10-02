import { billTypes } from './'

// Data Types
export interface Model extends billTypes.Model {
  type: string
}

// Action Types
export enum Types {
  GET_EXPENSE = 'GET_EXPENSE',
  GET_EXPENSES = 'GET_EXPENSES',
  GET_EXPENSES_BY_USER = 'GET_EXPENSES_BY_USER',
  CREATE_EXPENSE = 'CREATE_EXPENSE',
  UPDATE_EXPENSE = 'UPDATE_EXPENSE',
  DELETE_EXPENSE = 'DELETE_EXPENSE',
}

interface Get {
  type: typeof Types.GET_EXPENSE
  payload: Model
}

interface Gets {
  type: typeof Types.GET_EXPENSES
  payload: Model[]
}

interface GetsByUser {
  type: typeof Types.GET_EXPENSES_BY_USER
  payload: Model[]
}

interface Create {
  type: typeof Types.CREATE_EXPENSE,
  payload: Model
}

interface Update {
  type: typeof Types.UPDATE_EXPENSE,
  payload: Model
}

interface Delete {
  type: typeof Types.DELETE_EXPENSE,
  payload: {}
}

export interface ResponseGetAll {
  sucess: boolean,
  count: Number,
  expenses: Model[]
}

export interface ResponseSingle {
  sucess: boolean
  expense: Model
}

export type ActionsTypes = Get | Gets | GetsByUser | Create | Update | Delete

// State Types
export interface State {
  readonly expense: Model
  readonly expenses: Model[]
}
