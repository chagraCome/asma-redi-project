import { Layout, Menu } from "antd";
import styles from "./SecHeader.module.css";
import { useNavigate } from "react-router-dom";
export default function SecHeader() {
  const { Header } = Layout;
  const items = [
    {
      label: "All Recipes",
      key: "recipes",
      target: "/recipes",
    },
    {
      label: "Favorites",
      key: "favorites",
      target: "/favorites",
    },
  ];

  const navigate = useNavigate();

  const handleClick = ({ key }) => {
    const { target } = items.find((item) => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };
  return (
    <Header
      className={styles.radiantbg}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Menu
        className={styles.radiantbg}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["recipes"]}
        items={items}
        onClick={handleClick}
      />
    </Header>
  );
}
