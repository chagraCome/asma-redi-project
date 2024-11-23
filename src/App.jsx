import { useState } from 'react'
import { Layout } from 'antd'
import SecHeader from './components/SecHeader'
import SecFooter from './components/SecFooter'
import SecContent from './components/SecContent'
import { RouterProvider,BrowserRouter } from 'react-router-dom'
function App() {
 

  return (
   
    <BrowserRouter>  
    <SecHeader />
    <SecContent />
    <SecFooter />
    </BrowserRouter>


    
   
  )
}

export default App
