import { Flex,Layout } from "antd";
import RecipeCard from "./RecipeCard";
const { Content } = Layout;
export default function Favorites({ favRecip, setfavRecip }) {
  return (
    <Content style={{ margin: " 16px", minHeight:"80vh"}}>
   
    <Flex wrap gap="middle" justify="pace-between" horizontal >
      {favRecip?.map((recipe) => (
        <RecipeCard
          recipeData={recipe}
          favRecip={favRecip}
          setfavRecip={setfavRecip}
          key={recipe.id}
        />
      ))}
    </Flex>
    </Content>
  );
 
}
