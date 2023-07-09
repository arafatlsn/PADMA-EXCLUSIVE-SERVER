const bookingsModel = require("../bookings/bookings.model");

const successControler = async (req, res) => {
  const transactionId = req.params.tId;
  const result = await bookingsModel.updateOne(
    { transactionId },
    { paymentStatus: true }
  );
  console.log(result);
  res.redirect(`http://localhost:3000/success/${transactionId}`);
};

module.exports = successControler;
