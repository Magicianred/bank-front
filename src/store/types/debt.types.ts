// Data Types
export interface Model {
  _id?: string
  reason: string
  value: number
  clientId: string
  bankerId: string
  paid?: boolean
}

// Action Types
export enum Types {
  GET_DEBT = 'GET_DEBT',
  GET_DEBTS = 'GET_DEBTS',
  CREATE_DEBT = 'CREATE_DEBT',
  UPDATE_DEBT = 'UPDATE_DEBT',
  DELETE_DEBT = 'DELETE_DEBT',
}

interface Get {
  type: typeof Types.GET_DEBT
  payload: Model
}

interface Gets {
  type: typeof Types.GET_DEBTS
  payload: Model[]
}

interface Create {
  type: typeof Types.CREATE_DEBT,
  payload: Model
}

interface Update {
  type: typeof Types.UPDATE_DEBT,
  payload: Model
}

interface Delete {
  type: typeof Types.DELETE_DEBT,
  payload: {}
}

export interface ResponseGetAll {
  sucess: boolean,
  count: Number,
  debts: Model[]
}

export interface ResponseSingle {
  sucess: boolean
  debt: Model
}

export type ActionsTypes = Get | Gets | Create | Update | Delete

// State Types
export interface State {
  readonly debt: Model
  readonly debts: Model[]
}
