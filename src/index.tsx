import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import dotenv from 'dotenv'

// Main Css
import './assets/scss/main.css'

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

// dotenv
dotenv.config({ path: './src/config/config.env' })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
