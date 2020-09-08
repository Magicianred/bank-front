import { Reducer } from "redux";
import {
  BankerState,
  BankerTypes,
  BankerActionsTypes,
} from "../types/banker.types";

const initialState: BankerState = {
  banker: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    birth: "",
    bank: "",
    address: {
      street: "",
      city: "",
      country: "",
      district: "",
      state: "",
      complement: "",
      number: 0,
    },
  },
  bankers: [],
};

const bankerReducer: Reducer<BankerState, BankerActionsTypes> = (
  state = initialState,
  action: BankerActionsTypes
): BankerState => {
  switch (action.type) {
    case BankerTypes.GET_BANKER:
      return { ...state, banker: action.payload };
    case BankerTypes.GET_BANKERS:
      return { ...state, bankers: action.payload };
    case BankerTypes.CREATE_BANKER:
      return { ...state, banker: action.payload };
    case BankerTypes.UPDATE_BANKER:
      return {
        ...state,
        bankers: state.bankers.map((banker) =>
          banker._id === action.payload._id ? (banker = action.payload) : banker
        ),
      };
    case BankerTypes.DELETE_BANKER:
      return {
        ...state,
        bankers: state.bankers.filter(
          (banker) => banker._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export { bankerReducer };
