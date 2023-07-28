const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const userLoginService = require("../services/userLogin.services");

module.exports = {
  async createUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });

      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ err: "User registration error." });
    }
  },

  async loginUser(req, res) {
    const { email, password } = req.body;
    const token = await userLoginService(email, password);

    return res.status(200).json({ token: token });
  },
};
