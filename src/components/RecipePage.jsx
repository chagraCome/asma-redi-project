import { Layout, Row, Flex, Image } from "antd";
import { useParams } from "react-router-dom";
import SecForm from "./SecForm";
import styles from "./RecipePage.module.css";
import { Divider } from "antd";

export default function RecipePage({ allRecipes }) {
  const { recipeId } = useParams();

  // try to fetsh data from allRecipes array
  const recipeData = allRecipes?.find((item) => item.id == recipeId);
  // handel erroror wron child route
  if (!recipeData) {
    return <div style={{ height: 400, margin: 60 }}>Recipe not found</div>;
  }

  return (
    <>
      <div style={{ margin: 60 }}>
        <div className={styles.title}>{recipeData.name}</div>

        <div>
          <p>
            {" "}
            <strong> Cuisine: {recipeData.cuisine}</strong>
          </p>
          <p> {recipeData.difficulty} </p>
        </div>
        <Divider />
        <div className={styles.foodimg}>
          <Image width={800} height={400} src={recipeData.image} />
        </div>

        <br />
        <Flex wrap gap="middle" horizontal={true}>
          <p>
            <strong>Serving:</strong> {recipeData.servings}
          </p>
          <p>
            {" "}
            <strong>prep Time:</strong> {recipeData.prepTimeMinutes}
          </p>
          <p>
            {" "}
            <strong>Cooking Time:</strong> {recipeData.cookTimeMinutes}
          </p>
          <p>
            {" "}
            <strong>calories Per Serving:</strong>{" "}
            {recipeData.caloriesPerServing}
          </p>
        </Flex>
        <Flex wrap gap="middle" vertical={true}>
          <div key={recipeData.id}>
            <h3> Ingredient:</h3>
            {recipeData.ingredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}

            <h3> Instructions:</h3>
            {recipeData.instructions.map((instruction, index) => (
              <p key={index}>{instruction} </p>
            ))}
          </div>
        </Flex>
      </div>

      <SecForm recipeId={recipeId} recipeName={recipeData.name} />
    </>
  );
}
