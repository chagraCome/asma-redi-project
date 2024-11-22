import { useState } from 'react'
import { Layout } from 'antd'
import SecHeader from './components/SecHeader'
import SecFooter from './components/SecFooter'
import SecContent from './components/SecContent'
function App() {
 

  return (
   <Layout style={{textAlign: 'center'}} width={900}>
    <SecHeader />
    <SecContent />
    <SecFooter />
   </Layout>
    
   
  )
}

export default App
