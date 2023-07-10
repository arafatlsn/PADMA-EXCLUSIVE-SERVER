const express = require("express");
const paymentRouter = express.Router();
const paymentController = require("./Payment.controller");
const successControler = require("./success.controller");
const failController = require("./fail.controller");
const canceledController = require("./canceled.controller");

paymentRouter.post("/booking", paymentController);
paymentRouter.post("/success/:tId", successControler);
paymentRouter.post("/failed/:tId", failController);
paymentRouter.post("/canceled/:tId", canceledController);

module.exports = paymentRouter;
