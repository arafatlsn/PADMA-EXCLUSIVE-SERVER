const bookingsModel = require("../bookings/bookings.model");

const canceledController = async (req, res) => {
  const transactionId = req.params.tId;
  const result = await bookingsModel.deleteOne({"transactionId": `${transactionId}`})
  res.redirect(`${process.env.FRONTEND_URL}/canceled`);
};

module.exports = canceledController;
