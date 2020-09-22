import React from 'react'
import * as Actions from '../../store/actions'
import { useAppDispatch, useTypedSelector } from '../../store/index'

const Login: React.FC = () => {
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
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              id="value"
              type="text"
              placeholder="Senha"
            />
          </div>

          <button className="btn btn-primary btn-block" type="button">
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
