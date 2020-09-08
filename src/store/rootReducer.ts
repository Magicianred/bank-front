import { combineReducers } from 'redux'

import { debtReducer } from './reducers/debt.reducer'
import { bankerReducer } from './reducers/banker.reducer'

const rootReducer = combineReducers({
  debtReducer: debtReducer,
  bankerReducer: bankerReducer
})

export { rootReducer }
