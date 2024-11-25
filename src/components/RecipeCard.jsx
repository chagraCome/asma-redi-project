import { Card, Button  } from "antd";
import { Link } from 'react-router-dom';
import RecipePage from "./RecipePage";
export default function RecipeCard({recipeData,favRecip,setfavRecip}) {
const { Meta } = Card;
//console.log(recipeData)
const AddToFavorite=()=>{
  setfavRecip([...favRecip, recipeData])
}
const RemoveFromFavorite=()=>{
  setfavRecip(favRecip.map((rec)=>(rec.id !== recipeData.id)))
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
      {favRecip.includes(recipeData)?
      (
      <Button style={{marginTop:15}}type="primary" 
      onClick={RemoveFromFavorite}>Remove From Favorite</Button>)
      :(
      <Button style={{marginTop:15}}type="primary" 
      onClick={AddToFavorite}>Add To Favorite</Button>)}

    
    
  </Card>
  </>
  
)
}