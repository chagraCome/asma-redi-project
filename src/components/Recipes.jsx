import { Layout, Flex } from "antd";
import RecipeCard from "./RecipeCard";
const { Content } = Layout;

export default function Recipes({ allRecipes }) {
  return (
    <Content style={{ margin: " 16px", minHeight: "80vh" }}>
      <Flex wrap gap="middle" justify="space-evenly" horizontal={true}>
        {allRecipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipeData={recipe} />
        ))}
      </Flex>
    </Content>
  );
}
