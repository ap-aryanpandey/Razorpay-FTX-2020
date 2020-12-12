require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: 50000, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);
        
        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }


    var axios = require('axios');
    var data = JSON.stringify({"name":"Yellow Herb","description":"Yellow herb from Resident Evil","amount":50000,"currency":"INR"});

    var config = {
    method: 'post',
    url: 'https://api.razorpay.com/v1/items',
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Basic cnpwX3Rlc3RfTURYQmh0a1FkQXlUbFY6VExEYTZkREpPNWV6QjBtd3lqMFk1aUJK'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

    });
    const invoice = {
    type: "invoice",
    date: 1589994898,
    customer_id: "cust_GBGj6IMi6l8xji",
    line_items: [
        {
          item_id: "item_GBGz0dKQIaHbA3"
        }
      ]
    };

    const invoice = await instance.invoices.create(invoice)

    var invoiceid = res.json(invoice).id

    const invoiceid = await instance.invoices.fetch(invoiceId)


    var axios = require('axios');
    var data = JSON.stringify({"transfers":[{"account":"acc_GCCoZBuFYIvXgc","amount":100000,"currency":"INR","notes":{"name":"Gaurav Kumar","roll_no":"IEC2011025"},"linked_account_notes":["roll_no"],"on_hold":true,"on_hold_until":1671222870},{"account":"acc_GCCmBfMgbEPoGt","amount":5000,"currency":"INR","notes":{"name":"Saurav Kumar","roll_no":"IEC2011026"},"linked_account_notes":["roll_no"],"on_hold":false}]});

    var config = {
    method: 'post',
    url: 'https://api.razorpay.com/v1/payments/pay_GCCysmdd3rbtAz/transfers',
    headers: { 
        'content-type': 'application/json', 
        'Authorization': 'Basic cnpwX3Rlc3RfTURYQmh0a1FkQXlUbFY6VExEYTZkREpPNWV6QjBtd3lqMFk1aUJK'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

module.exports = router;