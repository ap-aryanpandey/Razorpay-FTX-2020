import React, { useState } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "../assets/images/FINITY LOGO white (2).png"
import Sidebar  from "./Sidebar";

const { Header, Sider, Content, Footer } = Layout;

function DashboardLayout(props) {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [year] = useState(new Date().getFullYear());

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img  src={Logo} alt="fintysoft" className="logo" />
        <Sidebar/>
      </Sider>
      <Layout className="dashboard-layout">
        <Header className="dashboard-layout-header">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              onClick: toggle,
            }
          )}
        </Header>
        <Content className="dashboard-layout-content">{children}</Content>
        <Footer className="dashboard-layout-footer">
          <b>FintySoft</b> &copy; {year} A &nbsp;
          <a href="nexttech.io">Next Tech</a> product.
        </Footer>
      </Layout>
    </Layout>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default DashboardLayout;
