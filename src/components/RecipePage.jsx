import { Layout, Row, Flex ,Image} from "antd";
import { useParams } from "react-router-dom";

export default function RecipePage({recipeData}) {
 const {recipeId}=useParams();
return(
    <Layout style={{textAlign: 'center'}}>
         <Flex wrap gap="middle" horizontal>
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
);
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