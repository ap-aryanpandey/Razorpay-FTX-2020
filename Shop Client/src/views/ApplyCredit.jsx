import React from "react";
import DashboardLayout from "../layouts/DashBoardLayout";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Select,
  Popover,
  message,
} from "antd";
const { Option } = Select;

const { Title } = Typography;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const key = "updatable";
const openMessage = () => {
  message.loading({ content: "Submitting...", key });
  setTimeout(() => {
    message.success({ content: "We will get back to you with most suitable credit offerings!", key, duration: 2 });
  }, 1000);
};

const ApplyCredit = () => {
  //   const username = "rzp_test_MDXBhtkQdAyTlV";
  //   const password = "TLDa6dDJO5ezB0mwyj0Y5iBJ";

  const url = "http://localhost:5000/payment/orders";
  const onFinish = async (values) => {
    console.log(values);
    await axios.post(url, values).then((res) => {
      console.log(res);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const content1 = (
    <div>
      <p>
        - Flow Based: Borrow money based on the projected future cash flows of a
        company
      </p>
      <p>
        - Asset based: Borrow money based on the liquidation value of assets on
        your balance sheet
      </p>
    </div>
  );

  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={1}>Apply for Credit</Title>
      </div>
      <Row>
        <Col span={18}>
          <Form
            style={{ paddingLeft: "0px" }}
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="Account Aggregator Id"
              label="Account Aggregator Id"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="male">9022936501@onemoney</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Loan Amount"
              name="Loan Amount"
              rules={[
                {
                  required: true,
                  message: "Please input your loan amount!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Popover content={content1}>
              <Form.Item
                name="Loan Type"
                label="Loan Type"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  allowClear
                >
                  <Option value="flow">Flow Based</Option>
                  <Option value="asset">Asset Based</Option>
                </Select>
              </Form.Item>
            </Popover>

            <Form.Item
              label="Time Period (In Years)"
              name="Time Period"
              rules={[
                {
                  required: true,
                  message: "Please input your time in years!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={openMessage}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default ApplyCredit;
