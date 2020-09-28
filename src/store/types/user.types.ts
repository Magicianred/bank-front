// Data Types
export interface Model {
  _id?: string;
  name: string;
  email: string;
  password?: string;
}

// Actions Types
export enum Types {
  GET_USER = 'GET_USER',
  GET_USERS = 'GET_USERS',
  DELETE_USER = 'DELETE_USER',
}

interface Get {
  type: typeof Types.GET_USER;
  payload: Model;
}

interface Gets {
  type: typeof Types.GET_USERS;
  payload: Model[];
}

interface Delete {
  type: typeof Types.DELETE_USER;
  payload: {};
}

export interface ResponseSingle {
  sucess: boolean
  user: Model
}

export interface ResponseGetAll {
  sucess: boolean,
  count: Number,
  users: Model[]
}

export type ActionsTypes = Get | Gets | Delete;

// State Types
export interface State {
  readonly user: Model;
  readonly users: Model[];
}
