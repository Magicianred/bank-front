import React from 'react'
import { useCountRenders } from 'src/hooks/useCountRenders'

const DebtList: React.FC = () => {
  useCountRenders('DebtList')

  return (
    <>
      <div className="d-flex">
        <h1>DebtList</h1>
      </div>
    </>
  )
}

export { DebtList }
