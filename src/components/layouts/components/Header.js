import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const MainLayoutHeader = ({ colorBgContainer }) => {

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    />
  );
};

export default MainLayoutHeader;
