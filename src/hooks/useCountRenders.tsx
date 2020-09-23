import { useRef } from 'react'

const useCountRenders = (componentName: string) => {
  const renders = useRef(0)
  console.log(`${componentName} component renders: ` + renders.current++ + ' times')
}

export { useCountRenders }
