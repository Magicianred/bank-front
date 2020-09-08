import { Reducer } from "redux";
import {
  UserState,
  UserTypes,
  UserActionsTypes,
} from "../types/user.types";

const initialState: UserState = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    birth: "",
    address: {
      street: "",
      city: "",
      country: "",
      district: "",
      state: "",
      complement: "",
      number: 0,
    }
  },
  users: []
};

const userReducer: Reducer<UserState, UserActionsTypes> = (
  state = initialState,
  action: UserActionsTypes
): UserState => {
  switch (action.type) {
    case UserTypes.GET_USER:
      return { ...state, user: action.payload };
    case UserTypes.GET_USERS:
      return { ...state, users: action.payload };
    case UserTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(
          (user) => user._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export { userReducer };
