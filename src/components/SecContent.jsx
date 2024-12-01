import { Layout, Row, Flex } from "antd";
import { useState } from "react";
import {
  Outlet,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipes from "./Recipes";
import Favorites from "./Favorites";
import HomePage from "./HomePage";
import RecipePage from "./RecipePage";
import { useRecipes, useRecipe } from "../service/recip";

export default function SecContent() {
  const { recipes } = useRecipes();
  const { Content } = Layout;
  const [favRecip, setfavRecip] = useState([]);
  return (
    <Content style={{ margin: " 16px", minHeight:"80vh", display:"flex", justifyContent:"center",alignItems:"center"}}>
     {/* <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "#f5f5f5",
          borderRadius: "fff",
        }}
      > */}
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route
            path="/recipes"
            element={
              <Recipes
                allRecipes={recipes}
                favRecip={favRecip}
                setfavRecip={setfavRecip}
              />
            }
          />
          <Route
            path="/recipes/:recipeId"
            element={<RecipePage allRecipes={recipes} />}
          ></Route>
          <Route
            path="/favorites"
            element={
              <Favorites favRecip={favRecip} setfavRecip={setfavRecip} />
            }
          />
        </Routes>
     {/* </div> */}
      <Outlet />
    </Content>
  );
}
