import { Layout, Row, Flex} from "antd";
import MovieCard from "./MovieCard";
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
            <Flex wrap gap="middle" horizontal>
            
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            </Flex>

          </div>
         
        </Content>
)
}