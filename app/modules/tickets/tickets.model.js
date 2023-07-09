const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  busId: {
    type: String,
    required: true
  },
  busImg: {
    type: String,
    required: true
  },
  seats: {
    type: Array,
    required: true
  },
  destinations: {
    type: Array,
    required: true
  }
});

const ticketsModel = mongoose.model("ticket", ticketSchema);

module.exports = ticketsModel;
