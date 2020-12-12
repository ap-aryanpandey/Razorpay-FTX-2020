import React, { useEffect, useRef } from "react";
import DashboardLayout from "../layouts/DashBoardLayout";
// ant design components
import logo from "../logo.svg";
import {
  Button,
} from "antd";
import axios from "axios";
const Razorpay = require("razorpay");
//const { Option } = Select;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

async function displayRazorpay() {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  // creating a new order
  const result = await axios.post("http://localhost:5000/payment/orders");

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: "D3oa7EHvVXbkxf3W99MkE4ET", // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Soumya Corp.",
    description: "Test Transaction",
    image: { logo },
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await axios.post(
        "http://localhost:5000/payment/success",
        data
      );

      alert(result.data.msg);
    },
    prefill: {
      name: "Soumya Dey",
      email: "SoumyaDey@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Soumya Dey Corporate Office",
    },
    theme: {
      color: "#61dafb",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

const Blog = () => {
  const formRef = useRef();
  useEffect(() => {
    var paymentButtonScript = document.createElement("script");
    paymentButtonScript.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    paymentButtonScript.setAttribute(
      "data-payment_button_id",
      "pl_GBl3Q03Vbg8cZz"
    );
    console.log(paymentButtonScript);
    formRef.current.appendChild(paymentButtonScript);
  }, []);
  return (
    <DashboardLayout>
      <Button onClick={displayRazorpay}>Click Me</Button>
      <form ref={formRef}></form>
    </DashboardLayout>
  );
};

export default Blog;
