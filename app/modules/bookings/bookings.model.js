const mongoose = require("mongoose");

// {
//   from: 'Chandpur',
//   to: 'Gulistan',
//   date: '2023-07-07T04:14:06.052Z',
//   time: '7:00 AM',
//   seats: [ 'H2' ],
//   cost: 500,
//   phone: '01903508765',
//   transactionId: '8758e4e6f873d9be446c1843f2cee474'
// }

const bookingSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  seats: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    requied: true,
  },
  busId: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    required: true
  }
});

const bookingsModel = mongoose.model("booking", bookingSchema);
module.exports = bookingsModel;
