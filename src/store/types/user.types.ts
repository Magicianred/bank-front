// Actions Types
export enum UserTypes {
  GET_USER = "GET_USER",
  GET_USERS = "GET_USERS",
  DELETE_USER = "DELETE_USER",
}

interface GetUser {
  type: typeof UserTypes.GET_USER;
  payload: UserModel;
}

interface GetUsers {
  type: typeof UserTypes.GET_USERS;
  payload: UserModel[];
}

interface DeleteUser {
  type: typeof UserTypes.DELETE_USER;
  payload: {};
}

export type UserActionsTypes = GetUser | GetUsers | DeleteUser;

// Data Types
export interface UserModel {
  _id?: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  gender: string;
  birth: string;
  address: UserAddress;
}

interface UserAddress {
  street: string;
  number?: number;
  complement?: string;
  district: string;
  city: string;
  state: string;
  country: string;
}

// State Types
export interface UserState {
  readonly user: UserModel;
  readonly users: UserModel[];
}
