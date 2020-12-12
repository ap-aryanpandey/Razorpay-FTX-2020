import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import DashboardLayout from "../layouts/DashBoardLayout";
import QRCode from "react-qr-code";
import { Button, Card, Col, Row, Typography } from "antd";
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

const Recieve = () => {
  return (
    <DashboardLayout>
      <Row>
        <Col span={24}>
          <div
            style={{
              height: "10em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "200px",
            }}
          >
            <QRCode value="Pay Here" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <Card className="shadow">
            <div style={{ margin: "auto" }}>
              <Title level={3}>UPI Id : </Title>
              <Title level={4}>arhanchoudhury@finity</Title>
              <Button type="primary" block>
                Deactivate
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default Recieve;
