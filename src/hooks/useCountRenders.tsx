import { useRef } from 'react'

const useCountRenders = (componentName: string) => {
  const render = useRef(0)
  console.log(`${componentName} renders: ${render.current++} times`)
}

export { useCountRenders }
