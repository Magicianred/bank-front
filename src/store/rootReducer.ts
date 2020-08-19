import { combineReducers } from 'redux'

import { debtReducer } from './reducers/debt.reducer'

const rootReducer = combineReducers({
  debtReducer: debtReducer
})

export { rootReducer }
