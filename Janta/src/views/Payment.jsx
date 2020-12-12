import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import DashboardLayout from "../layouts/DashBoardLayout";
import RazorpayButton from "./RazorpayButton";
import { Typography } from "antd";
const { Title } = Typography;
// import Home from './Home';
// ant design components
// import {
//   Card,
//   Typography,
// } from "antd";
// import { UserOutlined, EditOutlined } from "@ant-design/icons";
// const { Text } = Typography;
// const { Meta } = Card;
//const { Option } = Select;

// const Payment = () => {
//   return (
//     <div>
//       <QrReader
//         delay={this.state.delay}
//         style={previewStyle}
//         onError={this.handleError}
//         onScan={this.handleScan}
//       />
//       <p>{this.state.result}</p>
//     </div>
//   );
// };

// export default Payment;

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <DashboardLayout>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Title style={{}} level={1}>
            Pay
          </Title>
          <br />
          <div>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
            />
            <p>{this.state.result}</p>
          </div>
          <RazorpayButton></RazorpayButton>
        </div>
        <br />
      
      </DashboardLayout>
    );
  }
}
export default Payment;
