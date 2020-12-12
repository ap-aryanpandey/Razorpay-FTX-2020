import React from "react";
import DashboardLayout from "../layouts/DashBoardLayout";

import { Button, Card, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import Column from "antd/lib/table/Column";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;

const columns = [
  {
    title: "Item Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

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

const List = () => {
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={1}>List</Title>
      </div>
      <br />
      <br />
      <Card>
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

          <Column
            width="100"
            title="Action"
            key="action"
            render={() => (
              <Space size="middle">
                <Button type="primary" shape="circle" icon={<PlusOutlined />} />
              </Space>
            )}
          />
        </Table>
      </Card>
      <br />
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={3}>Total : ₹ 120</Title>
      </div>

      <Button type="primary" block>
        <Link to="/dashboard/essentials/list/stores">Find Store</Link>
      </Button>
    </DashboardLayout>
  );
};

export default List;
