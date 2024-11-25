import { Card, Button  } from "antd";
import { Link } from 'react-router-dom';
import RecipePage from "./RecipePage";
export default function RecipeCard({recipeData}) {
const { Meta } = Card;
//console.log(recipeData)
const handleClick=()=>{

}
return(
  <>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={recipeData.image} />}
    >
      <Meta title={recipeData.name} description={recipeData.servings} />
      
      <Button style={{marginTop:15}}type="primary" 
      onClick={()=> <RecipePage recipeData={recipeData} key={recipeData.id}/>}>read more</Button>

    
    
  </Card>
  </>
  
)
}