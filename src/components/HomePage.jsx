import { Layout } from "antd";
import styles from './HomePage.module.css'
export default function HomePage() {
    const { Footer } = Layout;
return(
    <div className={styles.landingimage} style={{textAlign: 'center'}}>
        <div className={styles.titleHeadline}>
            what should i cook ??
        </div>
    </div>
)
}