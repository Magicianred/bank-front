import { combineReducers } from 'redux'

import { debtReducer } from './reducers/debt.reducer'
import { bankerReducer } from './reducers/banker.reducer'
import { clientReducer} from './reducers/client.reducer'

const rootReducer = combineReducers({
  debtReducer: debtReducer,
  bankerReducer: bankerReducer,
  clientReducer: clientReducer
})

export { rootReducer }
