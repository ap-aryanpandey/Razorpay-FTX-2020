import React from "react";
import DashboardLayout from "../layouts/DashBoardLayout";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Card,
  Divider,
  Tag,
} from "antd";
import GaugeChart from "react-gauge-chart";
import { Bar, Pie, yuan } from "ant-design-pro/lib/Charts";
import "ant-design-pro/dist/ant-design-pro.css";
const { Title } = Typography;
// ant design components
const salesPieData = [
  {
    x: "Maggi",
    y: 5000,
  },
  {
    x: "Goodday",
    y: 6000,
  },
  {
    x: "Hide N Seek",
    y: 3000,
  },
  {
    x: "Tata Tea",
    y: 8000,
  },
  {
    x: "Amul Doodh",
    y: 3500,
  },
  {
    x: "Lays",
    y: 2000,
  },
  {
    x: "Pepsi",
    y: 3000,
  },
  {
    x: "Sprite",
    y: 7500,
  },
];

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const Analytics = () => {
  const salesData = [];
  for (let i = 0; i < 12; i += 1) {
    salesData.push({
      x: `${i + 1}`,
      y: Math.floor(Math.random() * 1000) + 200,
    });
  }
  return (
    <DashboardLayout>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title level={1}>Analytics</Title>
      </div>
      <Card className="shadow">
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Title level={2}>Buisness Ratios</Title>
        </div>
        <Row gutter={[16, 24]}>
          <Col span={4}>
            <Card style={{ backgroundColor: "#A8D1DF" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Common Size Ratio : Cash
                </Title>
                <text style={{ color: "green", fontSize: "50px" }}>4 %</text>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Col>

          <Col span={4}>
            <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Current Ratio
                </Title>
                <text style={{ color: "red", fontSize: "50px" }}>7 : 9</text>
              </div>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>We need to work on your current assets</text>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Col>

          <Col span={4}>
            <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Quick Ratio
                </Title>
                <text style={{ color: "red", fontSize: "50px" }}>0.475</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>Healthy quick ratio is 1.0 or more</text>
              </div>
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Col>
          <Col span={4}>
            <Card style={{ backgroundColor: "#A8D1DF" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Inventory Turn Over Ratio
                </Title>
                <text style={{ color: "green", fontSize: "50px" }}>1.25</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>Your sales have been better than average this month</text>
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Debt to Worth Ratio
                </Title>
                <text style={{ color: "red", fontSize: "50px" }}>2.59</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>We need to improve your buisness capital</text>
              </div>
              <br />
              <br />
            </Card>
          </Col>
          <Col span={4}>
            <Card style={{ backgroundColor: "#A8D1DF" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Return On Investment
                </Title>
                <text style={{ color: "green", fontSize: "50px" }}>1.67</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>Higher the ROI, higher the income</text>
              </div>
              <br />
              <br />
            </Card>
          </Col>
        </Row>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Title style={{}} level={3}>
          Top Performing Products :{" "}
          <Tag size={20} style={{ color: "green" }}>
            Food
          </Tag>
        </Title>
        <br />
      </div>
      <Row>
        <Col span={24}>
          <Card
            className="shadow"
            style={{
              maxWidth: "900px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "40%",
            }}
          >
            <Pie
              hasLegend
              title="Total"
              subTitle="Total"
              total={() => (
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      "₹" + salesPieData.reduce((pre, now) => now.y + pre, 0),
                  }}
                />
              )}
              data={salesPieData}
              valueFormat={(val) => (
                <span dangerouslySetInnerHTML={{ __html: "₹" + val }} />
              )}
              height={294}
            />
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default Analytics;
