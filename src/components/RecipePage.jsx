import { Layout, Row, Flex, Image } from "antd";
import { useParams } from "react-router-dom";
import SecForm from "./SecForm";
import { useRecipe } from "../service/recip";

export default function RecipePage({ allRecipes }) {
  const { recipeId } = useParams();
  const recipeData2 = useRecipe(recipeId);

  const recipeData = (allRecipes?.filter((item) => item.id == recipeId))[0];

  console.log(recipeData2);
  return (
    <>
      <Flex wrap gap="middle" verticall>
        <Image width={800} height={400} src={recipeData.image} />
        <Flex wrap gap="middle" horizontal>
          <h5> Serving:</h5> <p>{recipeData.servings}</p>
          <h5> prep Time:</h5> <p>{recipeData.prepTimeMinutes}</p>
          <h5> Cooking Time:</h5> <p>{recipeData.cookTimeMinutes}</p>
        </Flex>
        <Flex wrap gap="middle" vertical>
          <div key={recipeData.id}>
            <h5> Ingredient:</h5>
            {recipeData.ingredients.map((ingredient) => (
              <p>{ingredient}</p>
            ))}

            <h5> Instructions:</h5>
            {recipeData.instructions.map((instruction) => (
              <p>{instruction} </p>
            ))}
          </div>
        </Flex>
      </Flex>

      <SecForm />
    </>
  );
}
