import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DashboardLayout from "../layouts/DashBoardLayout";
import { Gauge } from "ant-design-pro/lib/Charts";
import Home from "./Home";
// ant design components
import {
  Card,
  Typography,
  Divider,
  Progress,
} from "antd";
import GaugeChart from "react-gauge-chart";
import {
  ArcGauge,
  LinearGauge,
  RadialGauge,
} from "@progress/kendo-react-gauges";
const { Text } = Typography;
const { Meta } = Card;

//const { Option } = Select;
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

const ExpenseTracker = () => {
  return (
    <DashboardLayout>
      <Divider orientation="center" plain>
        Liquidity ratio = Cash (near cash) / monthly expenses
      </Divider>
      <Gauge title="核销率" height={164} percent={45} />
      <Divider orientation="center" plain>
        Savings ratio= Savings / gross income
      </Divider>
      <Progress
        type="circle"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
        strokeColor={{
          "0%": "#04D2F7",
          "100%": "#02F702",
        }}
        percent={40}
      />
      <Divider orientation="center" plain>
        Debt to Asset ratio = Total liabilities / Total assets
      </Divider>
      <Progress
        type="circle"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
        strokeColor={{
          "0%": "#04D2F7",
          "100%": "#02F702",
        }}
        percent={60}
      />
      <GaugeChart
        style={chartStyle}
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        percent={0.37}
        arcPadding={0.02}
      />
      <div className="col-sm-12 col-md-5">
        <RadialGauge style={gaugeStyles} pointer={pointer} />
      </div>
      <Divider orientation="center" plain>
        Debt servicing ratio = Short term liabilities (EMIs) / Total income
      </Divider>
      <Progress
        type="circle"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
        strokeColor={{
          "0%": "#04D2F7",
          "100%": "#02F702",
        }}
        percent={50}
      />
      <Divider orientation="center" plain>
        Solvency ratio = Net worth / Total Assets
      </Divider>
      <Progress
        type="circle"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
        strokeColor={{
          "0%": "#04D2F7",
          "100%": "#02F702",
        }}
        percent={55}
      />
      <Divider orientation="center" plain>
        Life insurance coverage ratio = (Networth + existing life cover) /
        Post-tax Salary
      </Divider>
      <Progress
        type="circle"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
        strokeColor={{
          "0%": "#04D2F7",
          "100%": "#02F702",
        }}
        percent={70}
      />
    </DashboardLayout>
  );
};

export default ExpenseTracker;
