import React from "react";
import DashboardLayout from "../layouts/DashBoardLayout";
import { Button, Card, Col, Row, Space, Table, Typography } from "antd";
import UserAvatar from "react-user-avatar";
import { Link } from "react-router-dom";
import Column from "antd/lib/table/Column";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
// ant design components

const data = [
  {
    key: "1",
    name: "Bratannia Goodday(X 1)",
    price: 10,
  },
  {
    key: "2",
    name: "Bratannia Goodday 50gm(X 2)",
    price: 30,
  },
  {
    key: "3",
    name: "Bratannia Goodday 100gm(X 1)",
    price: 50,
  },
];

const Orders = () => {
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={1}>Orders</Title>
      </div>
      <Card className="shadow">
        <Row>
          <Col span={10}>
            <div style={{ margin: "auto" }}>
              <Title level={3}>Shikhar Singh</Title>
              <br />
              <Title level={5}>
                Campus Address SRM Nagar
                <br />
                Kattankulathur Chennai Tamil Nadu
                <br />
                600026
              </Title>
            </div>
          </Col>
          <Col span={10}>
            <Table
              //columns={columns}
              dataSource={data}
              pagination={false}
              scroll={{ x: 350, y: 300 }}
            >
              <Column width="200" title="Name" dataIndex="name" key="age" />
              <Column
                width="50"
                title="Price"
                dataIndex="price"
                key="price"
                style={{ textAlign: "center" }}
              />
            </Table>
          </Col>
          <Col span={4}>
            <div style={{ margin: "auto", textAlign: "center" }}>
              <Title level={3}>Total : ₹ 120</Title>
              <br />
              <br />
              <Title level={4}>Paid</Title>
            </div>
            <Button
              type="primary"
              style={{
                background: "green",
                borderColor: "yellow",
                marginTop: "35px",
                marginLeft: "80px",
              }}
            >
              <Link to="/dashboard/buypage">Print</Link>
            </Button>
          </Col>
        </Row>
      </Card>
    </DashboardLayout>
  );
};

export default Orders;
