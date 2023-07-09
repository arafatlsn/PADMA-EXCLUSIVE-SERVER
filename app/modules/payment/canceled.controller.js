const canceledController = async (req, res) => {
  res.redirect("http://localhost:3000/canceled");
};

module.exports = canceledController;
