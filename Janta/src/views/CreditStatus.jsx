import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// ant design components
import {
  Row,
  Col,
  Card,
  Avatar,
  //Form,
  //Select,
  //Comment,
  //List,
  Button,
  Typography,
  Modal,
  Empty,
  Descriptions,
  Badge,
  Table,
  Tag,
  Space,
} from "antd";
import DashboardLayout from "../layouts/DashBoardLayout";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
const { Text } = Typography;
const { Meta } = Card;
//const { Option } = Select;
const data = [
  {
    key: "1",
    IndexNumber: 1,
    date: "10/12/20",
    credit_type: ["Operations", "Inventory", "Payrol", "Expansion"],
    credit_status: ["Applied", "Awaiting Consent Approval"],
  },
  {
    key: "2",
    IndexNumber: 2,
    date: "10/12/20",
    credit_type: ["Operations", "Inventory", "Payrol", "Expansion"],
    credit_status: ["Applied", "Awaiting Consent Approval"],
  },
  {
    key: "3",
    IndexNumber: 3,
    date: "10/12/20",
    credit_type: ["Operations", "Inventory", "Payrol", "Expansion"],
    credit_status: ["Applied", "Awaiting Consent Approval"],
  },
];

const CreditStatus = () => {
  return (
    <DashboardLayout>
      <Table dataSource={data} scroll={{ x: 800, y: 300 }}>
        <ColumnGroup title="Credit Request">
          <Column
            title="Index Number"
            dataIndex="IndexNumber"
            key="IndexNumber"
          />

          <Column title="Date" dataIndex="date" key="date" />
          <Column
            title="Credit Type"
            dataIndex="credit_type"
            key="CreditType"
            render={(tags) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Credit Status"
            dataIndex="credit_status"
            key="CreditStatus"
            render={(tags) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
        </ColumnGroup>
      </Table>
    </DashboardLayout>
  );
};

export default CreditStatus;
