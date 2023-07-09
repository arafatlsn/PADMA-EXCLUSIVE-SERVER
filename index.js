const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const routerDestination = require("./app/modules/destinations/destination.router");
const routerTickets = require("./app/modules/tickets/tickets.router");
const bookingsRouter = require("./app/modules/bookings/bookings.router");
const paymentRouter = require("./app/modules/payment/payment.router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/destinations", routerDestination);
app.use("/api/v1/tickets", routerTickets);
app.use("/api/v1/bookings", bookingsRouter);
app.use("/api/v1/payment", paymentRouter);
app.get("/", async (req, res) => {
  res.status(200).json({ message: "hello world" });
});

dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/padma-exclusive");
    app.listen(port, () => {
      console.log("Server is running!");
    });
  } catch (err) {
    console.log(err?.message);
  }
}

module.exports = app;
