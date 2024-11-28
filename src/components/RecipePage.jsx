import { Layout, Row, Flex ,Image} from "antd";
import { useParams } from "react-router-dom";

export default function RecipePage({allRecipes}) {
 const {recipeId}=useParams();
 console.log(recipeId)
 const recipeData = (allRecipes?.filter((item) => item.id == recipeId))[0];
 console.log(recipeData)
 //console.log(recipeData)
 /**
 
  */
return(
    <Layout >
     <Flex wrap gap="middle" verticall> 
  <Image
    width={200}
    src={recipeData.image}
  />
 <Flex wrap gap="middle" horizontal>
    <h5> Serving:</h5> <p>{recipeData.servings}</p>
    <h5> prep Time:</h5> <p>{recipeData.prepTimeMinutes}</p>
    <h5> Cooking Time:</h5> <p>{recipeData.cookTimeMinutes}</p>
    </Flex>
    <Flex wrap gap="middle" vertical>
    <div>
        <h5> Ingredient:</h5>
        <ul> {recipeData.ingredients.map((ingredient)=>(
            <li>{ingredient}</li>))}</ul>

        <h5> Instructions:</h5>
        <ul> {recipeData.instructions.map((instruction)=>(
            <li>{instruction}</li>))}</ul>
    </div>
    </Flex>
            </Flex>

            </Layout>
)
}