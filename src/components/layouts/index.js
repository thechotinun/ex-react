import React from "react";
import "css/layout.css";
import MainLayoutMenu from "./components/Menu";
import MainLayoutHeader from "./components/Header";
import MainLayoutFooter from "./components/Footer";
import { Layout, theme } from "antd";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <MainLayoutMenu />
      <Layout style={{height: "100%"}}>
        <MainLayoutHeader colorBgContainer={colorBgContainer}/>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "auto"
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <MainLayoutFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
