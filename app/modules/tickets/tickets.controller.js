const bookingsModel = require("../bookings/bookings.model");
const ticketsModel = require("./tickets.model");

const getAllTickets = async (req, res) => {
  const { from, selectedDate } = req.query;
  const data = await ticketsModel.find({ "destinations.from": `${from}` });
  const filteredResult = data?.filter((el) => {
    return el?.destinations?.filter((destination) => {
      if (destination?.from === from) {
        el["destinations"] = destination;
        return el;
      }
    });
  });
  res.status(200).json(filteredResult);
};

module.exports = getAllTickets;
