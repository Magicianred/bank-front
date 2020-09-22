import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from './store'

import { Login } from './pages/Login'
import { DebtList } from './pages/DebtList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/debtList' component={DebtList}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export { App }
