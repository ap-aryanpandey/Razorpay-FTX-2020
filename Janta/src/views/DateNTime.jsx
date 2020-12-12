import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import DashboardLayout from "../layouts/DashBoardLayout";
import { Typography, TimePicker, DatePicker, Space, Button } from "antd";
import moment from "moment";
const { Title } = Typography;
// import Home from './Home';
// ant design components
// import {
//   Card,
//   Typography,
// } from "antd";
// import { UserOutlined, EditOutlined } from "@ant-design/icons";
// const { Text } = Typography;
// const { Meta } = Card;
//const { Option } = Select;
function onChange(date, dateString) {
  console.log(date, dateString);
}

const DateNTime = () => {
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title style={{}} level={3}>
          Choose Date and Time
        </Title>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TimePicker
        onChange={onChange}
        defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
      />
      <br />
      <br />
      <DatePicker onChange={onChange} />
      <br />
      <br />
      <br />

      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={4}> Total : ₹ 120</Title>
      </div>
      <br />
      <br />
      <div style={{ margin: "auto", width: "40%" }}>
        <Button
          style={{
            background: "blue",
            borderColor: "blue",
            leftMargin: "150px",
            leftPadding: "100px",
          }}
          type="primary"
          shape="round"
          size="large"
        >
          Place Order
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default DateNTime;
