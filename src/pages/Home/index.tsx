import React from 'react'
import { useCountRenders } from 'src/hooks'

const Home: React.FC = () => {
  useCountRenders("Home")

  return <h1>Home</h1>
}

export { Home }
