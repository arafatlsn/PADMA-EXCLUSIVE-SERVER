const failController = async (req, res) => {
  res.redirect("http://localhost:3000/failed")
};

module.exports = failController;
