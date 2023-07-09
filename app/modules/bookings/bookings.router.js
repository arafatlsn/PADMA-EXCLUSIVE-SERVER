const express = require("express");
const {
  getBookingsController,
  postBookingController,
} = require("./bookings.controller");
const bookingsRouter = express.Router();

bookingsRouter.get("/get-bookings", getBookingsController);

module.exports = bookingsRouter;
