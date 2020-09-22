import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../store'

// Actions
import { debtActions } from '../../store/actions'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const debt = useTypedSelector((state) => state.debtReducer.debt)

  useEffect(() => {
    dispatch(debtActions.getDebts())
  }, [dispatch])

  useEffect(() => {
    dispatch(debtActions.getDebt('5f25ce3eb6cedf2cf4779b1a'))
  }, [dispatch])

  return (
    <>
      <div className="d-flex">
        <form className="mx-auto">
          <div className="form-group">
            <label htmlFor="reason">Razão</label>
            <input className="form-control" id="reason" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="value">Preço</label>
            <input className="form-control" id="value" type="text" />
          </div>

          <button className="btn btn-primary" type="button">
            Debts
          </button>
        </form>
      </div>
    </>
  )
}

export default App
