const express = require("express");
const userRouter = express.Router();
const validateToken = require("../middleware/validate.middleware")

const userController = require("../controller/user.controller")

userRouter.post("/register", userController.registerUser);

userRouter.post("/login", userController.loginUser);

userRouter.get("/current", validateToken, userController.currentUser);

module.exports = {userRouter};
