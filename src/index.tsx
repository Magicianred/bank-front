import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import { Provider } from 'react-redux'
import { store } from './store'
import { setAuthorizationToken } from './utils/setAuthorizationToken'
import { Routes } from './routes'

// Main Css
import './assets/scss/main.css'

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap/js/dist/modal'

// dotenv
dotenv.config({ path: './src/config/config.env' })

// Set Authorization
if (localStorage.getItem('token')) {
  setAuthorizationToken(JSON.parse(localStorage.getItem('token') || '{}'))
  store.dispatch({ type: 'LOGIN' })
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
