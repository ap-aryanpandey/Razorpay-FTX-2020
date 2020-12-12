import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  TagsOutlined,
  StarOutlined,
  DollarCircleOutlined,
  DotChartOutlined,
} from "@ant-design/icons";

// import {
//   logout,
// } from '../store/actions/auth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
//import { useDispatch } from 'react-redux';

function Sidebar() {
  //const dispatch = useDispatch();

  //   const Logout = async () => {
  //     localStorage.removeItem("access-token");
  //     localStorage.removeItem("user-id");
  //     dispatch(logout());

  //   }
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

          <Menu.Item
            key="/dashboard/profile"
            icon={<UserOutlined />}
            onClick={() => {
              history.push("/dashboard/profile");
            }}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            key="/dashboard/personalfinance"
            icon={<DollarCircleOutlined />}
            onClick={() => {
              history.push("/dashboard/personalfinance");
            }}
          >
            Personal Finance
          </Menu.Item>
          <Menu.Item
            key="/dashboard/expensetracker"
            icon={<DotChartOutlined />}
            onClick={() => {
              history.push("/dashboard/expensetracker");
            }}
          >
            Expense Tracker
          </Menu.Item>
          <Menu.Item
            key="/dashboard/essentials"
            icon={<StarOutlined />}
            onClick={() => {
              history.push("/dashboard/essentials");
            }}
          >
            Essentials
          </Menu.Item>
          <Menu.Item
            key="/dashboard/offers"
            icon={<TagsOutlined />}
            onClick={() => {
              history.push("/dashboard/offers");
            }}
          >
            Offers
          </Menu.Item>
        </Menu>
      </div>
    </Router>
  );
}

export default Sidebar;
