// Data Types
export interface Model {
  _id?: string;
  title: string;
  description: string;
  value: number;
  clientId: string;
  paid?: boolean;
}

// Action Types
export enum Types {
  GET_BILL = "GET_BILL",
  GET_BILLS = "GET_BILLS",
  DELETE_BILL = "DELETE_BILL",
}

interface Get {
  type: typeof Types.GET_BILL;
  payload: Model;
}

interface Gets {
  type: typeof Types.GET_BILLS;
  payload: Model[];
}

interface Delete {
  type: typeof Types.DELETE_BILL;
  payload: {};
}

export interface ResponseGetAll {
  sucess: boolean;
  count: Number;
  bills: Model[];
}

export interface ResponseSingle {
  sucess: boolean;
  bill: Model;
}

export type ActionsTypes = Get | Gets | Delete;

// State Types
export interface State {
  readonly bill: Model;
  readonly bills: Model[];
}
