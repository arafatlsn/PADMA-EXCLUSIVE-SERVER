const mongoose = require("mongoose");

const destinationsSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const destinationModel = mongoose.model("destination", destinationsSchema);

module.exports = destinationModel;
