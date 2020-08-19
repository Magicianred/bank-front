import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

import DebtList from './pages/DebtList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <DebtList />
    </Provider>
  )
}

export { App }
