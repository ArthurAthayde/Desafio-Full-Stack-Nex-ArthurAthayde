const { Router } = require("express");

const userController = require("../controller/user.controller");
const uniqueEmail = require("../middlewares/uniqueEmail.middleware");

const userRouter = Router();

userRouter.post("/register", uniqueEmail, userController.createUser);
userRouter.post("/login", userController.loginUser);
module.exports = userRouter;
