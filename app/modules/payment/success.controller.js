const bookingsModel = require("../bookings/bookings.model");

const successControler = async (req, res) => {
  const transactionId = req.params.tId;
  const result = await bookingsModel.updateOne(
    { transactionId },
    { paymentStatus: true }
  );
  res.redirect(`${process.env.FRONTEND_URL}/success/${transactionId}`);
};

module.exports = successControler;
