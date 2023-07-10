const failController = async (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/failed`)
};

module.exports = failController;
