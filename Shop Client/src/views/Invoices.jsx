import { Button, message, Space, Table, Tag, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import DashboardLayout from "../layouts/DashBoardLayout";
import { RedoOutlined } from "@ant-design/icons";
const { Title } = Typography;
// ant design components
const columns = [
  {
    title: "Invoice Id ",
    dataIndex: "invoiceId",
    key: "invoice",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Recurring Account Desposit",
    dataIndex: "RAD",
    key: "RAD",
  },
  {
    title: "Fractional Credit Repayment",
    dataIndex: "FCR",
    key: "FCR",
  },
];

const data = [
  {
    key: "1",
    invoiceId: "inv_GC3mUj4vLzHWIH",
    amount: 20,
    RAD: "₹10",
    FCR: "item_GC7LsXvsLwA6Xr",
  },
  {
    key: "2",
    invoiceId: "inv_GC3gqU0VTgrKtj",
    amount: 20,
    RAD: "₹10",
    FCR: "item_GC7LsXvsLwA6Xr",
  },
  {
    key: "3",
    invoiceId: "inv_GBH13GnQO2kjvZ",
    amount: 20,
    RAD: "₹10",
    FCR: "item_GC7LsXvsLwA6Xr",
  },
];

const key = "updatable";
const openMessage = () => {
  message.loading({ content: "Refreshing...", key });
  setTimeout(() => {
    message.success({ content: "Refresed!", key, duration: 2 });
  }, 1000);
};

const Invoices = () => {
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={1}>Recent Invoices</Title>
      </div>
      <Button onClick={openMessage} icon={<RedoOutlined />}></Button>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      <Button type="primary" block>
        <Link to="/invoices/create">Create Invoice</Link>
      </Button>
    </DashboardLayout>
  );
};

export default Invoices;
