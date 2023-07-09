const crypto = require("crypto");
const SSLCommerzPayment = require("sslcommerz-lts");
const bookingsModel = require("../bookings/bookings.model");
require('dotenv').config()
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = false; //true for live, false for sandbox

const paymentController = async (req, res) => {
  const trxId = crypto.randomBytes(16).toString("hex");
  const dataFromClient = req.body;
  const data = {
    total_amount: dataFromClient?.cost,
    currency: "BDT",
    tran_id: trxId, // use unique tran_id for each api call
    success_url: `http://localhost:5000/api/v1/payment/success/${trxId}`,
    fail_url: "http://localhost:5000/api/v1/payment/failed",
    cancel_url: "http://localhost:5000/api/v1/payment/canceled",
    ipn_url: "http://localhost:3000/ipn",
    shipping_method: "Online",
    product_name: "Bus Ticket",
    product_category: "Service",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.status(200).json(GatewayPageURL);
  });

  const orderData = dataFromClient;
  orderData["transactionId"] = trxId;
  orderData["paymentStatus"] = false;
  const booking = new bookingsModel(orderData);
  const result = await booking.save();
  console.log(result);
};

module.exports = paymentController;
