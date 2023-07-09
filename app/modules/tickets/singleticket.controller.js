const bookingsModel = require("../bookings/bookings.model");

const getSingleTicket = async (req, res) => {
  const transactionId = req.query.tId;
  const result = await bookingsModel.findOne({
    transactionId: `${transactionId}`,
  });
  res.status(200).json(result);
};

module.exports = getSingleTicket;
