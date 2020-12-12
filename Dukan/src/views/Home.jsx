import React from "react";
// ant design components
import {
  Descriptions,
} from "antd";
import DashboardLayout from "../layouts/DashBoardLayout";
//const { Option } = Select;

const Home = () => {
  return (
    <DashboardLayout>
      <Descriptions title="Business Details" bordered>
        <Descriptions.Item label="Name">SRM</Descriptions.Item>
        <Descriptions.Item label="Owner">Arhan</Descriptions.Item>
        <Descriptions.Item label="GST Number">YES</Descriptions.Item>
        <Descriptions.Item label="Pan Card Number">
          XXXXXXXXXXXX
        </Descriptions.Item>
        <Descriptions.Item label="Phone Number">044 4396 9966</Descriptions.Item>
        <Descriptions.Item label="Account Aggregator ID">XXXXXXXXXX</Descriptions.Item>
        <Descriptions.Item label="Address Details">
          Campus Address SRM Nagar
          <br />
          Kattankulathur 
          <br />
          Chennai
          <br />
          Tamil Nadu 600026<br />
        </Descriptions.Item>
      </Descriptions>
    </DashboardLayout>
  );
};

export default Home;
