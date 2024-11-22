import { useState } from 'react'
import SecHeader from './components/SecHeader'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SecHeader />
  <div>
    <p>hi</p>
  </div>
    </>
  )
}

export default App
