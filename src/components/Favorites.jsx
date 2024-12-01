import { Flex, Layout } from "antd";
import RecipeCard from "./RecipeCard";
import { FavContext } from "../context/FavoriteContext";
import { useContext } from "react";
const { Content } = Layout;

export default function Favorites() {
  const {favRecipes}= useContext(FavContext);
  return (
    <Content style={{ margin: "16px", minHeight: "80vh" }}>
      
        <Flex wrap gap="middle"  horizontal={true}>
        {favRecipes && favRecipes.length > 0 ? (
          favRecipes.map((recipe) => (
            <RecipeCard
              recipeData={recipe}
              key={recipe.id}
            />
          ))
        
      ) : (
        <div>You have no favorite recipes </div>
      )}
      </Flex>
    </Content>
  );
}
