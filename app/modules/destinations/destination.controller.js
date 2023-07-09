const destinationModel = require("./destination.model");

const getDestinations = async (req, res) => {
  const data = await destinationModel.find({});
  res.status(200).json(data);
};

const getDestination = async (req, res) => {
  const id = req.query.id;
  const data = await destinationModel.findById({ _id: id });
  res.status(200).json(data);
};

module.exports = { getDestination, getDestinations };
