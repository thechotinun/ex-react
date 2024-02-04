import React from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const items = [UserOutlined, ShoppingCartOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const MainLayoutMenu = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log("click ", e);
    switch (e.key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/product");
        break;

      default:
        break;
    }
  };

  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={onClick}
          items={items}
        />
    </Sider>
  );
};

export default MainLayoutMenu;
