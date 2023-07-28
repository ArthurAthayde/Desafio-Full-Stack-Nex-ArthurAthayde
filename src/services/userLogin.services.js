const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLoginService = async (email, password) => {
  const user = await UserModel.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials." });
  }
  console.log(password, user.password);
  const validatePassword = await bcrypt.compare(password, user.password);

  if (!validatePassword) {
    return res.status(401).json({ error: "Invalid credentials." });
  }

  const token = jwt.sign({ userId: user.id }, "JWT_SECRET", {
    expiresIn: "24h",
  });

  return token;
};

module.exports = userLoginService;
