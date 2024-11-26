import { useState } from 'react'
import { Layout } from 'antd'
import SecHeader from './components/SecHeader'
import SecFooter from './components/SecFooter'
import SecContent from './components/SecContent'
import { BrowserRouter} from 'react-router-dom'
import { useRecipes} from "./service/recip";

function App() {
  const recipes = useRecipes().recipes;
  //console.log(recipes)

  return (
   
    <BrowserRouter>
    <SecHeader />
    <SecContent allRecipes={ recipes } />
    <SecFooter />
  </BrowserRouter>

  )
}

export default App
