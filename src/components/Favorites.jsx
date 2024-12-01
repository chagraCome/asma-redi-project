import { Flex, Layout } from "antd";
import RecipeCard from "./RecipeCard";

const { Content } = Layout;

export default function Favorites({ favRecip, setfavRecip }) {
  return (
    <Content style={{ margin: "16px", minHeight: "80vh" }}>
      
        <Flex wrap gap="middle"  horizontal>
        {favRecip && favRecip.length > 0 ? (
          favRecip.map((recipe) => (
            <RecipeCard
              recipeData={recipe}
              favRecip={favRecip}
              setfavRecip={setfavRecip}
              key={recipe.id}
            />
          ))
        
      ) : (
        <div>You have no favorite recipes yet</div>
      )}
      </Flex>
    </Content>
  );
}
