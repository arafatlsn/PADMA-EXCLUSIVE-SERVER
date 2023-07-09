const bookingsModel = require("./bookings.model");

const getBookingsController = async (req, res) => {
  const selectedDate = req.query.sDate;
  const busId = req.query.bId;
  const result = await bookingsModel.find({
    date: `${selectedDate}`,
    busId: `${busId}`,
  });
  res.status(200).json(result);
};

module.exports = { getBookingsController };
