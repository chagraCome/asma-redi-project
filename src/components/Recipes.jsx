
import { Layout, Row, Flex} from "antd";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
export default function Recipes({allRecipes}) {
 //console.log(allRecipes)
 /**
     
  */
return(
    
         <Flex wrap gap="middle" horizontal>
            
         {allRecipes?.map((recipe)=>
      ( 
         <Link to={recipe.id}>
         <RecipeCard key={recipe.id}  recipeData={recipe}  />
         </Link>
        
      ))} 
    
            </Flex>
    
)
}