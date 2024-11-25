import { Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './components/HomePage.jsx'
import Favorites from './components/Favorites.jsx'
import Recipes from './components/Recipes.jsx'
import RecipePage from './components/RecipePage.jsx'
import { useRecipes} from "./service/recip";
const recipes = useRecipes().recipes;
const router=createBrowserRouter(
    [
      {path: "/", element: <HomePage/>},
      {path:"/recipes" ,element:<Recipes allRecipes={allRecipes}/> , children:[{path:"/recipes/:id", element:<RecipePage />}]},
      {path:"/favorites", element:<Favorites/>}
    ]
  );

  <RouterProvider router={router} />