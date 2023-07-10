const canceledController = async (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/canceled`);
};

module.exports = canceledController;
