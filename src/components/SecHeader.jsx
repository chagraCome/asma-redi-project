import { Layout , Menu } from "antd";
import styles from './SecHeader.module.css'
export default function SecHeader() {
    const { Header} = Layout;
    const items = [
        {
          label: "All Movies",
          key: "allMovies",
          target: "/",
        },
        {
          label: "Watchlist",
          key: "watchlist",
          target: "/watchlist",
        },
      ];
    

    return (
        <Header className={styles.radiantbg}
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <Menu className={styles.radiantbg}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["allMovies"]}
            items={items}
          />
        </Header>
     
)
}