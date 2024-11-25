import { Layout, Row, Flex} from "antd";
import { Route, Routes } from "react-router-dom"
import Recipes from "./Recipes";
import Favorites from "./Favorites";
import HomePage from "./HomePage";
import RecipePage from "./RecipePage";

export default function SecContent({allRecipes}) {
const { Content} = Layout;
//console.log("allRecipes in SEcContent",allRecipes)

return(
    <Content style={{margin: ' 16px',}}>
      <div style={{
              padding: 24,
              minHeight: 360,
              background: '#f5f5f5',
              borderRadius: 'fff',
            }}>
            content
          <Routes>
          <Route path="/" element={<HomePage/>}  exact />
          <Route path="/recipes" element={<Recipes allRecipes={allRecipes}/>} >
            <Route path="/recipes/:id" element={<RecipePage allRecipes={allRecipes} />}></Route>
            </Route>
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>

          </div>
        
        </Content>
)
}