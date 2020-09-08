import { Reducer } from "redux";
import {
  ClientState,
  ClientTypes,
  ClientActionsTypes,
} from "../types/client.types";

const initialState: ClientState = {
  client: {
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
    },
    debts: [],
  },
  clients: []
};

const clientReducer: Reducer<ClientState, ClientActionsTypes> = (
  state = initialState,
  action: ClientActionsTypes
): ClientState => {
  switch (action.type) {
    case ClientTypes.GET_CLIENT:
      return { ...state, client: action.payload };
    case ClientTypes.GET_CLIENTS:
      return { ...state, clients: action.payload };
    case ClientTypes.CREATE_CLIENT:
      return { ...state, client: action.payload };
    case ClientTypes.UPDATE_CLIENT:
      return {
        ...state,
        clients: state.clients.map((client) =>
          client._id === action.payload._id ? (client = action.payload) : client
        ),
      };
    case ClientTypes.DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(
          (client) => client._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export { clientReducer };
