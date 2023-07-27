const UserModel = require("../models/User");

const uniqueEmail = async (req, res, next) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ where: { email } });

  if (user) {
    res.status(409).json({ message: "Email already registered" });
  } else {
    next();
  }
};

module.exports = uniqueEmail;
