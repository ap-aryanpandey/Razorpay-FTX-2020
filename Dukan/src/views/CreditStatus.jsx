import React from "react";
// ant design components
import {
  Table,
  Tag,
} from "antd";
import DashboardLayout from "../layouts/DashBoardLayout";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
//const { Option } = Select;
const data = [
  {
    key: "1",
    IndexNumber: 1,
    date: "10/12/20",
    credit_type: ["Flow Based"],
    credit_status: ["Approved"],
  },
  {
    key: "2",
    IndexNumber: 2,
    date: "10/12/20",
    credit_type: ["Flow Based"],
    credit_status: ["Applied"],
  },
  {
    key: "3",
    IndexNumber: 3,
    date: "10/12/20",
    credit_type: ["Credit Based"],
    credit_status: ["Applied"],
  },
];

const CreditStatus = () => {
  return (
    <DashboardLayout>
      <Table dataSource={data}>
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
