const routerDestination = require("./app/modules/destinations/destination.router");
const routerTickets = require("./app/modules/tickets/tickets.router");

const express = require("express");
const cors = require("cors");
const bookingsRouter = require("./app/modules/bookings/bookings.router");
const paymentRouter = require("./app/modules/payment/payment.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/destinations", routerDestination);
app.use("/api/v1/tickets", routerTickets);
app.use("/api/v1/bookings", bookingsRouter);
app.use("/api/v1/payment", paymentRouter)
app.get("/", async(req, res) => {
  res.status(200).json({message: "hello world"})
})

module.exports = app;
