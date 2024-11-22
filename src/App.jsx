import { useState } from 'react'
import SecHeader from './components/SecHeader'
import SecFooter from './components/SecFooter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SecHeader />
  <div>
    <p>hi</p>
  </div>
  <SecFooter />
    </>
  )
}

export default App
