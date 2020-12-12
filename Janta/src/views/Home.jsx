import React from "react";
import { Button, Card, Descriptions } from "antd";
import DashboardLayout from "../layouts/DashBoardLayout";
import { Link } from "react-router-dom";
import UserAvatar from "react-user-avatar";
import { Typography } from "antd";

const { Title } = Typography;

const Home = () => {
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title style={{}} level={1}>
          Payments
        </Title>
      </div>
      <div className={"shadow"}>
        <Card bordered={false} styles={{}}>
          <div style={{ margin: "auto", textAlign: "center" }}>
            <Title style={{}} level={3}>
              Frequently Paid
            </Title>
          </div>

          <div style={{ display: "flex" }}>
            <UserAvatar
              size="70"
              name="Arhan"
              color="orange"
            />
            <UserAvatar
              size="70"
              name="Rohan"
              color="violet"
              style={{ marginLeft: "10px" }}
            />
            <UserAvatar
              size="70"
              name="Rooter"
              color="brown"
              style={{ marginLeft: "10px" }}
            />
            <UserAvatar
              size="70"
              name="Pandey"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </Card>
      </div>
      <br />
      <br />
      <div className={"shadow"}>
        <Card bordered={false} styles={{}}>
          <div style={{ margin: "auto", textAlign: "center" }}>
            <Title style={{}} level={3}>
              Nearby Stores
            </Title>
          </div>

          <div style={{ display: "flex" }}>
            <UserAvatar size="70" name="Madonna" />
            <UserAvatar
              size="70"
              name="Shubham"
              style={{ marginLeft: "10px" }}
            />
            <UserAvatar
              size="70"
              name="Jagrit"
              color="red"
              style={{ marginLeft: "10px" }}
            />
            <UserAvatar
              size="70"
              name="Shreyansh"
              color="blue"
              style={{ marginLeft: "10px" }}
            />
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <UserAvatar size="70" name="Madonna" />
            <UserAvatar
              size="70"
              name="Aditya"
              color="green"
              style={{ marginLeft: "10px" }}
            />
            <UserAvatar
              size="70"
              name="Aditi"
              color="brown"
              style={{ marginLeft: "10px" }}
            />
            <UserAvatar
              size="70"
              name="Sohan"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </Card>
      </div>

      <br />
      <br />
      <div>
        <Card style={{ minHeight: "200px" }} className={"shadow"}>
          <Button style={{ marginTop: "60px" }} type="primary" block>
            <Link to="/dashboard/pay">Pay</Link>
          </Button>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Home;
