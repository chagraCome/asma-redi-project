import { Flex } from "antd";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
export default function Favorites({favRecip}) {
    
return(
    <Flex wrap gap="middle" horizontal>
        {favRecip?.map((recipe)=>(
            <Link to={recipe.id}>
            <RecipeCard key={recipe.id}  recipeData={recipe}  />
            </Link>
        ))}
    </Flex>
)
}