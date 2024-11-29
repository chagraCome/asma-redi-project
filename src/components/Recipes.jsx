import { Layout, Row, Flex } from "antd";
import RecipeCard from "./RecipeCard";

export default function Recipes({ allRecipes, favRecip, setfavRecip }) {
  return (
    <Flex wrap gap="middle" horizontal>
      {allRecipes?.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipeData={recipe}
          favRecip={favRecip}
          setfavRecip={setfavRecip}
        />
      ))}
    </Flex>
  );
}
