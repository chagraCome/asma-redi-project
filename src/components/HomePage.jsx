import { Layout , Button } from "antd";
import styles from './HomePage.module.css'
import { Link } from "react-router-dom";
export default function HomePage() {
    const { Footer } = Layout;
return(
   
    <div className={styles.landingimage} >
        <div className={styles.titleHeadline}>
            30 easy recipes to try
            <br/>
            and empress your guest
        </div>
        <Link to="/recipes">
        <Button className={styles.showbutton} type="primary">SEE THEM ALL</Button>
        </Link>
    </div>

)
}