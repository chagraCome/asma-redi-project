import { Flex } from "antd";
import RecipeCard from "./RecipeCard";
export default function Favorites({ favRecip, setfavRecip }) {
  return (
    <Flex wrap gap="middle" horizontal>
      {favRecip?.map((recipe) => (
        <RecipeCard
          recipeData={recipe}
          favRecip={favRecip}
          setfavRecip={setfavRecip}
          key={recipe.id}
        />
      ))}
    </Flex>
  );
}
