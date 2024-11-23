
import { Layout, Row, Flex} from "antd";
import MovieCard from "./MovieCard";
export default function Movies() {
    
return(
    
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
    
)
}