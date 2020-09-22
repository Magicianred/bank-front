import { createStore, Store, compose, applyMiddleware, combineReducers } from 'redux'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import thunk from 'redux-thunk'

import { authTypes, bankerTypes, clientTypes, debtTypes, userTypes } from './types'
import { authReducer, debtReducer, bankerReducer, clientReducer, userReducer } from './reducers'

export interface ApplicationState {
  authReducer: authTypes.State
  debtReducer: debtTypes.State,
  clientReducer: clientTypes.State,
  bankerReducer: bankerTypes.State,
  userReducer: userTypes.State,
}

const rootReducer = combineReducers({
  authReducer,
  debtReducer,
  bankerReducer,
  clientReducer,
  userReducer
})

// TypedSelector
const useTypedSelector: TypedUseSelectorHook<ApplicationState> = useSelector

// TypedDispatch
type AppDispatch = typeof store.dispatch
const useAppDispatch = () => useDispatch<AppDispatch>()

// Initial State
const initialState = {}

const store: Store<ApplicationState> = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
))

export { store, useTypedSelector, useAppDispatch }
