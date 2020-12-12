import React, { useState } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import DashboardLayout from "../layouts/DashBoardLayout";
import { Typography } from "antd";
//import Home from "./Home";
import PaymentCard from "react-payment-card-component";
// ant design components
import { Button, Divider, Table } from "antd";
//import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { Bar, Pie, yuan } from "ant-design-pro/lib/Charts";
import "ant-design-pro/dist/ant-design-pro.css";


import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
const { Title } = Typography;
// const { Text } = Typography;
// const { Meta } = Card;
//const { Option } = Select;

const salesPieData = [
  {
    x: "Rent",
    y: 5000,
  },
  {
    x: "Fixed Expenses",
    y: 6000,
  },
  {
    x: "Groceries",
    y: 3000,
  },
  {
    x: "Savings",
    y: 8000,
  },
  {
    x: "Investments",
    y: 3500,
  },
  {
    x: "Cash Withdrawal",
    y: 2000,
  },
  {
    x: "EMIs",
    y: 3000,
  },
  {
    x: "Miscellaneous",
    y: 7500,
  },
];
const data = [
  {
    key: "1",
    fundname: "Greater China Equity Fund",
    category: "Equity",
    risk: "Moderate",
    oneyr: "30%",
    rating: "5",
    size: 850,
  },
  {
    key: "1",
    fundname: "Greater China Equity Fund",
    category: "Equity",
    risk: "Moderate",
    oneyr: "30%",
    rating: "5",
    size: 850,
  },
  {
    key: "1",
    fundname: "Greater China Equity Fund",
    category: "Equity",
    risk: "Moderate",
    oneyr: "30%",
    rating: "5",
    size: 850,
  },
];

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const ExpenseTracker = () => {
  const [filpState, setflipSate] = useState(false);
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title style={{}} level={1}>
          Expense Tracker
        </Title>
      </div>
      <Divider orientation="center" plain>
        Spending
      </Divider>
      <Pie
        hasLegend
        title="Total"
        subTitle="Total"
        total={() => (
          <span
            dangerouslySetInnerHTML={{
              __html: "₹" + salesPieData.reduce((pre, now) => now.y + pre, 0),
            }}
          />
        )}
        data={salesPieData}
        valueFormat={(val) => (
          <span dangerouslySetInnerHTML={{ __html: "₹" + val }} />
        )}
        height={294}
      />
      <Divider orientation="center" plain>
        Spending Patterns
      </Divider>
      <div styles={{ marginTop: 40 }}>
        <Bar height={200} data={salesData} />
      </div>
      {/*
      <Table dataSource={data} scroll={{ x: 800, y: 300 }} pagination={false}>
        <ColumnGroup title="Mutual Funds">
          <Column title="Fund Name" dataIndex="fundname" key="fundname" />

          <Column title="Category" dataIndex="category" key="category" />
          <Column title="Risk" dataIndex="risk" key="risk" />
          <Column title="1Y Returns" dataIndex="oneyr" key="oneyr" />
          <Column title="Rating(1-5)" dataIndex="rating" key="rating" />
          <Column title="Fund Size(in Cr)" dataIndex="size" key="size" />
        </ColumnGroup>
      </Table>
      */}
    </DashboardLayout>
  );
};

export default ExpenseTracker;
