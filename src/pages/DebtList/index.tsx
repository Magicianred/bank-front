import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../store'

// Actions
import { getDebts, getDebt } from '../../store/actions/debt.actions'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const debt = useTypedSelector(state => state.debtReducer.debt)

  useEffect(() => {
    dispatch(getDebts())
  }, [dispatch])

  useEffect(() => {
    dispatch(getDebt('5f25ce3eb6cedf2cf4779b1a'))
  }, [dispatch])

  return (
    <>
      <button className="btn btn-primary" type="button" >
        Debts
      </button>
    </>
  )
}

export default App
