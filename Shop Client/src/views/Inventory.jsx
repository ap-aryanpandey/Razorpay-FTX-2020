import React from "react";
import DashboardLayout from "../layouts/DashBoardLayout";
import { Button, Space, Table, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
//const { Option } = Select;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Remaining Inventory",
    dataIndex: "ri",
    key: "ri",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Item Id",
    dataIndex: "ii",
    key: "ii",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Update Item</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "Bratannia Goodday",
    ri: 20,
    price : "₹10",
    ii: "item_GC7LsXvsLwA6Xr",
    tags: ["Food"],
  },
  {
    key: "2",
    name: "Bratannia Goodday 50gm",
    ri: 25,
    price : "₹30",
    ii: "item_GC7SJScwEP666w",
    tags: ["Food"],
  },
  {
    key: "3",
    name: "Bratannia Goodday 100gm",
    ri: 10,
    price : "₹50",
    ii: "item_GC7TvrCvTzMB7f",
    tags: ["Food"],
  },

];

const Inventory = () => {
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={1}>Inventory</Title>
        <Table columns={columns} dataSource={data} pagination={false}/>
        <Button type="primary" block>
          <Link to="/dashboard/orderform">Add Item</Link>
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Inventory;
