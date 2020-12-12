import React from "react";
import DashboardLayout from "../layouts/DashBoardLayout";
import axios from "axios";
import { Form, Input, Button, Row, Col, Typography } from "antd";
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

const OrderForm = () => {
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

  return (
    <DashboardLayout>
    <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={1}>Enter product details</Title>
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
              label="Product Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input product name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your quantity!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Amount"
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please input your amount!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Currency"
              name="currency"
              rules={[
                {
                  required: true,
                  message: "Please input your currency!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default OrderForm;
