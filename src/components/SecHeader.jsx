import { Layout, Menu } from "antd";
import styles from "./SecHeader.module.css";
import { useNavigate } from "react-router-dom";

export default function SecHeader() {
  const { Header } = Layout;
  const items = [
    {
      label: "Home",
      key: "home",
      target: "/",
    },
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

  const currentRoute = window.location.pathname;
  const selectedKey =
    items.find((item) => item.target === currentRoute)?.key || "home";

  return (
    <Header className={styles.radiantbg}>
      <Menu
        className={styles.radiantbg}
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        items={items}
        onClick={handleClick}
      />
    </Header>
  );
}
