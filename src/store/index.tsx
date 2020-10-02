import {
  createStore,
  Store,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import thunk from "redux-thunk";

import {
  authTypes,
  bankerTypes,
  clientTypes,
  debtTypes,
  userTypes,
  billTypes,
  expenseTypes,
} from "./types";

import {
  authReducer,
  debtReducer,
  bankerReducer,
  clientReducer,
  userReducer,
  billReducer,
  expenseReducer,
} from "./reducers";

export interface ApplicationState {
  authReducer: authTypes.State;
  debtReducer: debtTypes.State;
  clientReducer: clientTypes.State;
  bankerReducer: bankerTypes.State;
  userReducer: userTypes.State;
  billReducer: billTypes.State;
  expenseReducer: expenseTypes.State;
}

const rootReducer = combineReducers({
  authReducer,
  debtReducer,
  bankerReducer,
  clientReducer,
  userReducer,
  billReducer,
  expenseReducer,
});

// TypedSelector
const useTypedSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

// Initial State
const initialState = {};

const store: Store<ApplicationState> = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { store, useTypedSelector };
