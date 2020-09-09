import { createStore, Store, compose, applyMiddleware } from 'redux'
import { DebtState } from './types/debt.types'
import { BankerState } from './types/banker.types'
import { ClientState } from './types/client.types'
import { UserState } from './types/user.types'
import { rootReducer } from './rootReducer'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import thunk from 'redux-thunk'

export interface ApplicationState {
  debtReducer: DebtState,
  bankerReducer: BankerState,
  clientReducer: ClientState,
  userReducer: UserState,
}

// Initial State
const initialState = {}

const store: Store<ApplicationState> = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
))

// TypedSelector
const useTypedSelector: TypedUseSelectorHook<ApplicationState> = useSelector

// TypedDispatch
type AppDispatch = typeof store.dispatch
const useAppDispatch = () => useDispatch<AppDispatch>()

export { store, useTypedSelector, useAppDispatch }
