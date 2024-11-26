
import { Layout, Row, Flex} from "antd";
import RecipeCard from "./RecipeCard";
import { Outlet,Link } from "react-router-dom";
export default function Recipes({ allRecipes,favRecip,setfavRecip }) {
 //console.log(allRecipes)
 /**
     
  */
return(
    
         <Flex wrap gap="middle" horizontal>
            
         {allRecipes?.map((recipe)=>
      ( 
       
         <RecipeCard key={recipe.id}  recipeData={recipe} favRecip={favRecip} setfavRecip={setfavRecip} />
         
        
      ))} 
      <Outlet />  
            </Flex>
    
)
}