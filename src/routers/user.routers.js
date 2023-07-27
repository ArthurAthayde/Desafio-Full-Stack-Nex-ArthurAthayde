const { Router } = require("express");
const UserModel = require("../models/User");

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.create({ name, email, password });

  res.status(201).json(user);
});

module.exports = userRouter;
