const UserModel = require("../models/User");

module.exports = {
  async createUser(req, res) {
    const { name, email, password } = req.body;

    const user = await UserModel.create({ name, email, password });

    res.status(201).json(user);
  },
};
