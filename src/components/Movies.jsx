
import { Layout, Row, Flex} from "antd";
import MovieCard from "./MovieCard";
export default function Movies({allRecipes}) {
 //console.log(allRecipes)
 /**
     
  */
return(
    
         <Flex wrap gap="middle" horizontal>
         {allRecipes?.map((recipe)=>
      (
         <MovieCard recipeData={recipe} key={recipe.id}  />
      ))} 
            </Flex>
    
)
}