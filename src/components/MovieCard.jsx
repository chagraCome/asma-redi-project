import { Card, Button  } from "antd";
export default function MovieCard({recipeData}) {
const { Meta } = Card;
console.log(recipeData)
/*
cover={<img alt="example" src={recipeData.image} />}
  >
    <Meta title={recipeData.name} description={recipeData.servings} />
    <Button style={{marginTop:15}}type="primary">Add to Watchlist</Button>
*/
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
      <Button style={{marginTop:15}}type="primary">Add to Watchlist</Button>

  </Card>
  </>
  
)
}