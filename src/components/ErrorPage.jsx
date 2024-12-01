import { Layout } from "antd";
import { Link } from "react-router-dom";

export default function ErrorPage() {

return(
    <Layout>
       <p>this path doesn't exist</p> 
       <Link to="/">
        go back home
       </Link>
    </Layout>
)
}