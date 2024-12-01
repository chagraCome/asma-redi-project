import { Layout } from "antd";
import styles from './SecFooter.module.css';
export default function SecFooter() {
    const { Footer } = Layout;
return(
    <Footer className={styles.radiantbg}>
       <p>created by Asma</p> 
       <p>@2024</p>
    </Footer>
)
}