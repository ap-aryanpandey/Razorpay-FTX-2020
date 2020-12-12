
import React, { useEffect, useRef } from "react";

const RazorpayButton = () => {
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
        <form ref={formRef}></form>
    );
  };

  export default RazorpayButton;