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
  DatePicker,
  Select,
  message,
} from "antd";
const { Title } = Typography;
const { Option } = Select;
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
  message.loading({ content: "Creating...", key });
  setTimeout(() => {
    message.success({ content: "Invoice Created!", key, duration: 2 });
  }, 1000);
};


const CreateInvoice = () => {
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
        <Title level={1}>Create Invoices</Title>
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
            <Form.Item label="Select Date">
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="Customer"
              label="Customer"
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
                <Option value="flow">Shobit Puri</Option>
                <Option value="asset">Aryan Pandey</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="Select Items"
              label="Select Items"
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
                <Option value="flow">Lint</Option>
                <Option value="kk">Yoga Bars</Option>
                <Option value="jj">Protien Powder</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="Quantity"
              rules={[
                {
                  required: true,
                  message: "Please input your quantity!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit"   onClick={openMessage}>
                Add
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default CreateInvoice;
