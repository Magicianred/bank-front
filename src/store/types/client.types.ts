import { UserModel } from "./user.types";
import { DebtModel } from "./debt.types";

// Action Types
export enum ClientTypes {
  GET_CLIENT = 'GET_CLIENT',
  GET_CLIENTS = 'GET_CLIENTS',
  CREATE_CLIENT = 'CREATE_CLIENT',
  UPDATE_CLIENT = 'UPDATE_CLIENT',
  DELETE_CLIENT = 'DELETE_CLIENT',
}

interface GetClient {
  type: typeof ClientTypes.GET_CLIENT
  payload: ClientModel
}

interface GetClients {
  type: typeof ClientTypes.GET_CLIENTS
  payload: ClientModel[]
}

interface CreateClient {
  type: typeof ClientTypes.CREATE_CLIENT,
  payload: ClientModel
}

interface UpdateClient {
  type: typeof ClientTypes.UPDATE_CLIENT,
  payload: ClientModel
}

interface DeleteClient {
  type: typeof ClientTypes.DELETE_CLIENT,
  payload: {}
}

export type ClientActionsTypes = GetClient | GetClients | CreateClient | UpdateClient | DeleteClient

// Data Types
export interface ClientModel extends UserModel {
  debts?: DebtModel[]
}

// State Types
export interface ClientState {
  readonly client: ClientModel
  readonly clients: ClientModel[]
}
