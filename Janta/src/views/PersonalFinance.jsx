import React from "react";
import DashboardLayout from "../layouts/DashBoardLayout";
import { Gauge } from "ant-design-pro/lib/Charts";
import Home from "./Home";
import { Card, Typography } from "antd";
import GaugeChart from "react-gauge-chart";
import Loader from "react-loader-spinner";

// ant design components
import {
  ArcGauge,
  LinearGauge,
  RadialGauge,
} from "@progress/kendo-react-gauges";

const { Title } = Typography;
const chartStyle = {
  display: "flex",
  //justifyContent: "center",
  marginBottom: 20,
  maxWidth: 200,
};
const gaugeStyles = {
  display: "block",
};
const value = 30;
const pointer = {
  value: value,
};

// const PersonalFinance = () => {
//   return (
//     <DashboardLayout>
//       <div style={{ margin: "auto", textAlign: "center" }}>
//         <Title style={{}} level={3}>
//           Personal Finance
//         </Title>
//       </div>
//       <Card style={{ backgroundColor: "#A8D1DF" }} className="shadow">
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <Title style={{}} level={3}>
//             Liquidity Ratio
//           </Title>
//           <text style={{ color: "green", fontSize: "50px" }}>2</text>
//         </div>
//         <br />
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <text>
//             You have a fair liquidity ratio
//             <br />
//             Estimated sustainance period without income :
//             <br />2 Months
//           </text>
//         </div>
//       </Card>

//       <br />

//       <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <Title style={{}} level={3}>
//             Savings Ratio
//           </Title>
//           <text style={{ color: "red", fontSize: "50px" }}>1.75</text>
//         </div>
//         <br />
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <text>
//             We need to work on your savings
//             <br />
//             Head over to set targets to improve your savings ratio
//           </text>
//         </div>
//       </Card>

//       <br />

//       <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <Title style={{}} level={3}>
//             Debt to Assets Ratio
//           </Title>
//           <text style={{ color: "red", fontSize: "50px" }}>1.75</text>
//         </div>
//         <br />
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <text>We need to work on your savings and assets</text>
//         </div>
//       </Card>

//       <br />

//       <Card style={{ backgroundColor: "#B8E80B" }} className="shadow">
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <Title style={{}} level={3}>
//             Debt Servicing Ratio
//           </Title>
//           <text style={{ color: "green", fontSize: "50px" }}>7.1%</text>
//         </div>
//         <br />
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <text>You have excellent debt servicing ratio</text>
//         </div>
//       </Card>

//       <br />
//       <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <Title style={{}} level={3}>
//             Inflation hedge ratio
//           </Title>
//           <text style={{ color: "red", fontSize: "50px" }}>7.1%</text>
//         </div>
//         <br />
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <text>
//             You have fair inflation hedge ratio.
//             <br />
//             We need to work on your investement portfolio
//           </text>
//         </div>
//       </Card>
//       <br />
//       <Card style={{ backgroundColor: "#B8E80B" }} className="shadow">
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <Title style={{}} level={3}>
//             Solvency Ratio
//           </Title>
//           <text style={{ color: "green", fontSize: "50px" }}>68%</text>
//         </div>
//         <br />
//         <div style={{ margin: "auto", textAlign: "center" }}>
//           <text>You have an excellent solvency ratio</text>
//         </div>
//       </Card>
//     </DashboardLayout>
//   );
// };

class PersonalFinance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      loading: true,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: Math.ceil(Math.random() * 100),
        loading: false,
      });
    }, 100);
  }

  render() {
    const radialOptions = {
      pointer: {
        value: this.state.value,
      },
    };

    return (
      // <React.Fragment>
      //   {this.state.loading}&&
      //   {<Loader type="Bars" color="#00BFFF" height={80} width={80} />}
      //   {!this.state.loading}&&
      //   {
          <DashboardLayout>
            <div style={{ margin: "auto", textAlign: "center" }}>
              <Title style={{}} level={3}>
                Personal Finance
              </Title>
              <br />
              <GaugeChart
                id="gauge-chart2"
                nrOfLevels={20}
                percent={0.6}
                textColor="black"
                hideText={true}
              />
            </div>
            <br />
            <Card style={{ backgroundColor: "#A8D1DF" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Liquidity Ratio
                </Title>
                <text style={{ color: "green", fontSize: "50px" }}>2</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>
                  You have a fair liquidity ratio
                  <br />
                  Estimated sustainance period without income :
                  <br />2 Months
                </text>
              </div>
            </Card>

            <br />

            <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Savings Ratio
                </Title>
                <text style={{ color: "red", fontSize: "50px" }}>1.75</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>
                  We need to work on your savings
                  <br />
                  Head over to set targets to improve your savings ratio
                </text>
              </div>
            </Card>

            <br />

            <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Debt to Assets Ratio
                </Title>
                <text style={{ color: "red", fontSize: "50px" }}>1.75</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>We need to work on your savings and assets</text>
              </div>
            </Card>

            <br />

            <Card style={{ backgroundColor: "#B8E80B" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Debt Servicing Ratio
                </Title>
                <text style={{ color: "green", fontSize: "50px" }}>7.1%</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>You have excellent debt servicing ratio</text>
              </div>
            </Card>

            <br />
            <Card style={{ backgroundColor: "#F7C6C5" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Inflation hedge ratio
                </Title>
                <text style={{ color: "red", fontSize: "50px" }}>7.1%</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>
                  You have fair inflation hedge ratio.
                  <br />
                  We need to work on your investement portfolio
                </text>
              </div>
            </Card>
            <br />
            <Card style={{ backgroundColor: "#B8E80B" }} className="shadow">
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Title style={{}} level={3}>
                  Solvency Ratio
                </Title>
                <text style={{ color: "green", fontSize: "50px" }}>68%</text>
              </div>
              <br />
              <div style={{ margin: "auto", textAlign: "center" }}>
                <text>You have an excellent solvency ratio</text>
              </div>
            </Card>
          </DashboardLayout>
      //   }
      // </React.Fragment>
    );
  }
}

export default PersonalFinance;
