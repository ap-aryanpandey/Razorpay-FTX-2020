import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  WalletOutlined,
  FundViewOutlined,
  ShopOutlined,
  ContainerOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

// import {
//   logout,
// } from '../store/actions/auth';

import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
//import { useDispatch } from 'react-redux';

function Sidebar() {
  let history = useHistory();
  return (
    <Router>
      <div className="sidebar">
        <Menu theme="dark" mode="inline">
          <Menu.Item
            key="/dashboard/home"
            icon={<HomeOutlined />}
            onClick={() => {
              history.push("/dashboard/home");
            }}
          >
            <Link to="/dashboard/home">Home</Link>
          </Menu.Item>
          <SubMenu
            key="/dashboard/credit"
            icon={<WalletOutlined />}
            title="Credit"
          >
            <Menu.Item
              key="/dashboard/credit/apply"
              icon={<ContainerOutlined />}
              onClick={() => {
                history.push("/dashboard/credit/apply");
              }}
            >
              <Link to="/dashboard/credit/apply">Apply for Credit</Link>
            </Menu.Item>
            <Menu.Item
              key="/dashboard/credit/status"
              icon={<BranchesOutlined />}
              onClick={() => {
                history.push("/dashboard/credit/status");
              }}
            >
              <Link to="/dashboard/credit/status">Credit request</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item
            key="/dashboard/analytics"
            icon={<FundViewOutlined />}
            onClick={() => {
              history.push("/dashboard/analytics");
            }}
          >
            <Link to="/dashboard/analytics">Analytics</Link>
          </Menu.Item>
          <Menu.Item
            key="/dashboard/inventory"
            icon={<ShopOutlined />}
            onClick={() => {
              history.push("/dashboard/inventory");
            }}
          >
            <Link to="/dashboard/inventory">Inventory</Link>
          </Menu.Item>
          <Menu.Item
            key="/dashboard/invoices"
            icon={<ShopOutlined />}
            onClick={() => {
              history.push("/dashboard/invoices");
            }}
          >
            <Link to="/dashboard/invoices">Invoices</Link>
          </Menu.Item>
          <Menu.Item
            key="/dashboard/orders"
            icon={<ShopOutlined />}
            onClick={() => {
              history.push("/dashboard/orders");
            }}
          >
            <Link to="/dashboard/orders">Orders</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Router>
  );
}

export default Sidebar;
