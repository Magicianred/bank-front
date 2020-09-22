import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authActions } from '../../store/actions'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(authActions.login(email, password))
    history.push('/debtlist')
  }

  return (
    <main id="main-login" className="container-fluid d-flex">
      <div className="col d-flex align-items-center justify-content-center">
        <form className="w-25">
          <h1 className="text-center">Bank</h1>

          <div className="form-group">
            <input
              className="form-control"
              id="reason"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              id="value"
              type="text"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary btn-block" type="button" onClick={() => handleLogin()}>
            Login
          </button>
          <button className="btn btn-success btn-block" type="button">
            Register
          </button>
        </form>
      </div>
    </main>
  )
}

export { Login }
