import { userTypes } from './'

// Data Types
export interface Model extends userTypes.Model {
  bank: string;
}

// Action Types
export enum Types {
  GET_BANKER = 'GET_BANKER',
  GET_BANKERS = 'GET_BANKERS',
  CREATE_BANKER = 'CREATE_BANKER',
  UPDATE_BANKER = 'UPDATE_BANKER',
  DELETE_BANKER = 'DELETE_BANKER',
}

interface Get {
  type: typeof Types.GET_BANKER;
  payload: Model;
}

interface Gets {
  type: typeof Types.GET_BANKERS;
  payload: Model[];
}

interface Create {
  type: typeof Types.CREATE_BANKER;
  payload: Model;
}

interface Update {
  type: typeof Types.UPDATE_BANKER;
  payload: Model;
}

interface Delete {
  type: typeof Types.DELETE_BANKER;
  payload: {};
}

export interface ResponseGetAll {
  sucess: boolean;
  count: Number;
  bankers: Model[];
}

export interface ResponseSingle {
  sucess: boolean;
  banker: Model;
}

export type ActionsTypes = Get | Gets | Create | Update | Delete;

// State Types
export interface State {
  readonly banker: Model;
  readonly bankers: Model[];
}
