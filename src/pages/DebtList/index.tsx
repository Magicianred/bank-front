import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useCountRenders } from 'src/hooks/useCountRenders'
import { authActions } from '../../store/actions'

const DebtList: React.FC = () => {
  useCountRenders('DebtList')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    dispatch(authActions.logout())
    history.push('/')
  }

  return (
    <>
      <div className="d-flex">
        <form className="mx-auto">
          <button className="btn btn-danger" type="button" onClick={() => handleLogout()}>
            logout
          </button>
        </form>
      </div>
    </>
  )
}

export { DebtList }
