import { Card, Button  } from "antd";
import { Route,Link, Routes,Outlet } from 'react-router-dom';
import RecipePage from "./RecipePage";
export default function RecipeCard({ recipeData,favRecip,setfavRecip }) {
const { Meta } = Card;
//console.log(recipeData)
const AddToFavorite=()=>{
  setfavRecip([...favRecip, recipeData])
}
const RemoveFromFavorite=()=>{
  setfavRecip(favRecip.filter((rec)=> rec.id !== recipeData.id))
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
      <Link to={recipeData.id}>
        <Meta title={recipeData.name} description={recipeData.servings} />
        </Link>
      {favRecip?.includes(recipeData) ?
      (
      <Button style={{marginTop:15}}type="primary" 
      onClick={RemoveFromFavorite}>Remove From Favorite</Button>)
      :(
      <Button style={{marginTop:15}}type="primary" 
      onClick={AddToFavorite}>Add To Favorite</Button>)}

    
    
  </Card>

  <Routes>
  <Route path=":recipeId" element={<RecipePage allRecipes={recipeData}  />} />
      </Routes>   
  </>
  
)
}