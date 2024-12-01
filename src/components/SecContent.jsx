import { Layout, Row, Flex } from "antd";
import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Recipes from "./Recipes";
import Favorites from "./Favorites";
import HomePage from "./HomePage";
import RecipePage from "./RecipePage";
import { useRecipes } from "../service/recip";

export default function SecContent() {
  const { recipes } = useRecipes();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/recipes" element={<Recipes allRecipes={recipes} />} />
        <Route
          path="/recipes/:recipeId"
          element={<RecipePage allRecipes={recipes} />}
        ></Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Outlet />
    </>
  );
}
