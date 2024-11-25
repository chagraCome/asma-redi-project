import { useState } from 'react'
import { Layout } from 'antd'
import SecHeader from './components/SecHeader'
import SecFooter from './components/SecFooter'
import SecContent from './components/SecContent'
import { RouterProvider,BrowserRouter } from 'react-router-dom'
import { useRecipes} from "./service/recip";

function App() {
  const recipes = [...Array(10)].map(() => useRecipes());
  console.log(recipes)

  return (
   
    <BrowserRouter>  
    <SecHeader />
    <SecContent />
    <SecFooter />
    </BrowserRouter>


    
   
  )
}

export default App
