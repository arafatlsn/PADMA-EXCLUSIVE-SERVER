const bookingsModel = require("../bookings/bookings.model");

const successControler = async (req, res) => {
  const transactionId = req.params.tId;
  const result = await bookingsModel.updateOne(
    { transactionId },
    { paymentStatus: true }
  );
  res.redirect(`https://padma-exclusive.netlify.app/success/${transactionId}`);
};

module.exports = successControler;
