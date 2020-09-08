import { UserModel } from "./user.types";

// Action Types
export enum BankerTypes {
  GET_BANKER = 'GET_BANKER',
  GET_BANKERS = 'GET_BANKERS',
  CREATE_BANKER = 'CREATE_BANKER',
  UPDATE_BANKER = 'UPDATE_BANKER',
  DELETE_BANKER = 'DELETE_BANKER',
}

interface GetBanker {
  type: typeof BankerTypes.GET_BANKER
  payload: BankerModel
}

interface GetBankers {
  type: typeof BankerTypes.GET_BANKERS
  payload: BankerModel[]
}

interface CreateBanker {
  type: typeof BankerTypes.CREATE_BANKER,
  payload: BankerModel
}

interface UpdateBanker {
  type: typeof BankerTypes.UPDATE_BANKER,
  payload: BankerModel
}

interface DeleteBanker {
  type: typeof BankerTypes.DELETE_BANKER,
  payload: {}
}

export type BankerActionsTypes = GetBanker | GetBankers | CreateBanker | UpdateBanker | DeleteBanker

// Data Types
export interface BankerModel extends UserModel {
  bank: string
}

// State Types
export interface BankerState {
  readonly banker: BankerModel
  readonly bankers: BankerModel[]
}
