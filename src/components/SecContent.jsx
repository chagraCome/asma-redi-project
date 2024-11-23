import { Layout, Row, Flex} from "antd";
import { Route, Routes } from "react-router-dom"
import Movies from "./Movies";
import Watchlist from "./Watchlist";
export default function SecContent() {
const { Content} = Layout;
return(
    <Content
          style={{
            margin: ' 16px',
          }}
        >
             

            
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '#f5f5f5',
              borderRadius: 'fff',
            }}
          >
            content
            <Routes>
          <Route path="/" Component={Movies} exact />
          <Route path="/watchlist" Component={Watchlist} />
        </Routes>

          </div>
         
        </Content>
)
}