import { Layout , Menu } from "antd";
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
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["allMovies"]}
            items={items}
          />
        </Header>
     
)
}